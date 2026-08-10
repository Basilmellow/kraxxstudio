# Contact form email setup (Resend)

The contact form now sends a real email to kraxxstudio@gmail.com when
someone submits it. To make it live, you need one API key.

## 1. Create a Resend account

1. Go to https://resend.com and sign up **using kraxxstudio@gmail.com**
   (this matters — see step 3).
2. Go to **API Keys** in the dashboard and create a new key.

## 2. Add the API key to Vercel

1. In your Vercel project → **Settings → Environment Variables**.
2. Add:
   - Name: `RESEND_API_KEY`
   - Value: the key from step 1
   - Environment: Production (and Preview/Development if you want it
     working on preview deploys too)
3. Redeploy the project so the new env var takes effect.

## 3. About the sender address

The code currently sends from `onboarding@resend.dev` — Resend's shared
test domain. It works immediately with **no setup**, but Resend only
lets you deliver to the email address you signed up with. Since that's
kraxxstudio@gmail.com, this works out of the box for receiving
enquiries.

**Once `kraxx.digital` is live**, switch to a proper sender:
1. In Resend, go to **Domains** → add `kraxx.digital` → add the DNS
   records they give you (SPF/DKIM) at your domain registrar.
2. Once verified, change the `from` field in
   `src/app/api/contact/route.ts` to something like
   `"KRAXX Studio <hello@kraxx.digital>"`.
3. This also removes the "via resend.dev" note some email clients show.

## 4. Local development (optional)

To test the form on your own machine before deploying:

1. Copy `.env.local.example` to `.env.local`.
2. Fill in your `RESEND_API_KEY`.
3. `.env.local` is already gitignored — it will never be committed.

## What's already handled in code

- Server-side validation (name/email/message required, email format,
  max length) — `src/app/api/contact/route.ts`
- A hidden honeypot field to filter out basic bots —
  `src/components/ui/ContactForm.tsx`
- Basic rate limiting (5 submissions per IP per 10 minutes, per server
  instance) — `src/app/api/contact/route.ts`
- Reply-To is set to the submitter's email, so you can hit "Reply" in
  Gmail and it goes straight to them.
