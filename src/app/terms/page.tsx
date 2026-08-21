import { Metadata } from "next";
import { SITE_CONFIG } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${SITE_CONFIG.fullName}.`,
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-16 bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-8">
          TERMS OF SERVICE
        </h1>

        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 text-slate-300 text-sm leading-relaxed space-y-6">
          <p className="font-mono text-xs text-indigo-400">LAST UPDATED: AUGUST 2026</p>

          <h2 className="text-xl font-bold text-white">1. Agreement to Terms</h2>
          <p>
            By accessing this website or engaging services provided by {SITE_CONFIG.fullName} (&quot;KRAXX&quot;), you agree to be bound by these Terms of Service.
          </p>

          <h2 className="text-xl font-bold text-white">2. Studio Services & Scope</h2>
          <p>
            KRAXX provides digital growth studio services, including social media management, content strategy, content creation, community moderation, personal branding, and paid social campaign management. Exact deliverables, review schedules, and payment terms are detailed in formal client project proposals.
          </p>

          <h2 className="text-xl font-bold text-white">3. Intellectual Property Rights</h2>
          <p>
            All custom content, visual graphics, and media assets produced by KRAXX for a client are assigned to the client upon full payment of agreed project invoices, retaining studio rights for portfolio case study documentation.
          </p>

          <h2 className="text-xl font-bold text-white">4. Limitation of Liability</h2>
          <p>
            While KRAXX employs data-driven methodologies and proven strategic frameworks, third-party social media algorithms and platform policies remain outside our direct control. We make no guarantee of specific third-party algorithm outputs.
          </p>

          <h2 className="text-xl font-bold text-white">5. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with applicable commercial laws. Inquiries regarding terms should be directed to <a href={`mailto:${SITE_CONFIG.email}`} className="text-indigo-400 underline">{SITE_CONFIG.email}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
