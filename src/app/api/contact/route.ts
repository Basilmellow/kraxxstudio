import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE_CONFIG } from "@/data/siteConfig";

// Basic in-memory rate limiting (per server instance). Good enough to blunt
// naive bots; for stronger protection add Turnstile/hCaptcha on the form.
const submissionLog = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissionLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  submissionLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();

    const {
      name,
      brand,
      email,
      website,
      message,
      services,
      budget,
      // Honeypot field: real users never fill this in (it's hidden via CSS).
      // Bots that auto-fill every field will trip it.
      hp_field_x7q,
    } = body ?? {};

    // Silently pretend success to the bot so it doesn't learn to avoid this field.
    if (hp_field_x7q) {
      return NextResponse.json({ ok: true });
    }

    // Server-side validation — never trust client-side `required` alone.
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "Name, email, and project overview are required." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (name.length > 200 || email.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { error: "One or more fields exceed the maximum allowed length." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not set.");
      return NextResponse.json(
        { error: "Server email is not configured. Please try again later." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const servicesList = Array.isArray(services) ? services.join(", ") : "—";

    const html = `
      <div style="font-family: sans-serif; line-height: 1.6;">
        <h2>New Project Enquiry — KRAXX Studio</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Business / Brand:</strong> ${escapeHtml(brand || "—")}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Website / Social:</strong> ${escapeHtml(website || "—")}</p>
        <p><strong>Services Requested:</strong> ${escapeHtml(servicesList)}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budget || "—")}</p>
        <p><strong>Project Overview:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      // resend.dev is Resend's shared sending domain — works immediately with
      // no domain verification, but can only deliver to the email address you
      // signed up to Resend with (kraxxstudio@gmail.com). See the setup notes
      // in RESEND_SETUP.md for switching to a verified kraxx.digital sender
      // once that domain is live.
      from: "KRAXX Studio <onboarding@resend.dev>",
      to: SITE_CONFIG.email,
      replyTo: email,
      subject: `New Enquiry from ${name}${brand ? ` (${brand})` : ""}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send your message. Please email us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
