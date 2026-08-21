import { Metadata } from "next";
import { SITE_CONFIG } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE_CONFIG.fullName}.`,
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-16 bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-8">
          PRIVACY POLICY
        </h1>

        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 text-slate-300 text-sm leading-relaxed space-y-6">
          <p className="font-mono text-xs text-indigo-400">LAST UPDATED: AUGUST 2026</p>

          <h2 className="text-xl font-bold text-white">1. Overview</h2>
          <p>
            {SITE_CONFIG.fullName} (&quot;KRAXX&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to protecting the personal information you share when inquiring about or using our digital growth studio services.
          </p>

          <h2 className="text-xl font-bold text-white">2. Information Collection</h2>
          <p>
            We collect information you provide directly via our contact form or email communications, including your name, company name, work email address, website URL, and project scope details.
          </p>

          <h2 className="text-xl font-bold text-white">3. How Information Is Used</h2>
          <p>
            Information collected is strictly utilized to evaluate your project scope, draft customized proposals, communicate regarding project timelines, and execute agreed digital strategy engagements. We do not sell or rent data to third parties.
          </p>

          <h2 className="text-xl font-bold text-white">4. Data Security & Storage</h2>
          <p>
            We implement industry-standard encryption protocols and administrative safeguards to protect transmitted information from unauthorized access, alteration, or disclosure.
          </p>

          <h2 className="text-xl font-bold text-white">5. Contact Information</h2>
          <p>
            If you have any questions regarding this Privacy Policy, please contact us directly at <a href={`mailto:${SITE_CONFIG.email}`} className="text-indigo-400 underline">{SITE_CONFIG.email}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
