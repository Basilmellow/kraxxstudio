import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Shield, Terminal } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Engagement Models & Pricing | KRAXX Studio",
  description:
    "Transparent engagement models and custom proposals for KRAXX Studio digital strategy, web application engineering, brand identity systems, and growth retainers.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Engagement Models & Pricing | KRAXX Studio",
    description:
      "Transparent engagement models and custom proposals for KRAXX Studio digital strategy, web engineering, branding, and growth.",
    url: "https://kraxxstudio.com/pricing",
    type: "website",
  },
};

const PRICING_TIERS = [
  {
    name: "STARTER ENGINE",
    tagline: "For businesses building consistency & visual authority.",
    rangeIndicator: "Proposal Basis / ~$500 – $1,200/mo",
    popular: false,
    badge: "FOUNDATION SYSTEM",
    description: "Designed for growing brands that need an elevated visual identity, Next.js web presence, and baseline digital content strategy.",
    features: [
      "Digital Presence & Friction Audit",
      "Brand Visual System & Design Assets",
      "High-Speed Web Landing Page (Next.js)",
      "12-15 Editorial Content Assets per Month",
      "Local SEO & Search Optimization",
      "Monthly Strategy & Metrics Review",
    ],
    ctaText: "[ INITIATE STARTER PROPOSAL ]",
  },
  {
    name: "GROWTH ENGINE",
    tagline: "For scaling brands focused on pipeline & category leadership.",
    rangeIndicator: "Proposal Basis / ~$1,200 – $2,800/mo",
    popular: true,
    badge: "RECOMMENDED",
    description: "Our flagship growth retainer combining custom web architecture, short-form video editing, content distribution, executive positioning, and lead conversion.",
    features: [
      "Full Web Application Engineering & Maintenance",
      "20 High-Impact Content Assets & Video Cuts / Month",
      "Executive Personal Branding (Founder Ghostwriting)",
      "Multi-Channel Content Engine (Instagram, LinkedIn, X)",
      "Technical SEO & Conversion Funnel Optimization",
      "Bi-Weekly Growth Strategy Calls",
      "Direct Channel Support with Lead Engineers",
    ],
    ctaText: "[ INITIATE GROWTH PROPOSAL ]",
  },
  {
    name: "CUSTOM ENTERPRISE",
    tagline: "For established businesses needing full digital operations.",
    rangeIndicator: "Proposal Basis / ~$3,000 – $6,000/mo",
    popular: false,
    badge: "FULL STUDIO UNIT",
    description: "End-to-end dedicated creative and engineering operations covering web platform development, brand repositioning, paid acquisition, and custom SLA.",
    features: [
      "Custom Web Platform & Complex Integration",
      "30+ High-Production Media & Copy Assets / Month",
      "Paid Search & Social Campaign Management (ROAS Focus)",
      "Founder & Executive Leadership Personal Branding",
      "Dedicated Studio Creative Director & Strategist",
      "Custom Lead Attribution & Conversion Dashboard",
      "Priority SLA & Direct Channel Access",
    ],
    ctaText: "[ REQUEST ENTERPRISE SCOPE ]",
  },
];

export default function PricingPage() {
  return (
    <div className="pt-28 pb-16 bg-bg-dark min-h-screen">
      
      {/* Header Viewport */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <div className="eyebrow inline-flex items-center space-x-2">
          <Terminal className="w-3.5 h-3.5 text-purple-400" />
          <span>TRANSPARENT ENGAGEMENT & PROPOSAL MODELS</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-bold text-white uppercase tracking-tight">
          ENGAGEMENT MODELS & <br />
          <span className="text-gradient">PROPOSAL TIERS</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          We build structured, transparent proposals tailored to your specific digital scope, platform requirements, and growth objectives.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`kx-card p-8 border flex flex-col justify-between relative overflow-hidden bg-bg-card ${
                tier.popular
                  ? "border-purple-500/60 shadow-[0_0_30px_rgba(139,92,246,0.2)]"
                  : "border-white/10"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] font-mono font-bold px-4 py-1 rounded-bl-xl tracking-wider uppercase">
                  {tier.badge}
                </div>
              )}

              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs">
                  <span className="text-purple-400 font-bold uppercase">{tier.name}</span>
                  {!tier.popular && (
                    <span className="text-slate-500">{tier.badge}</span>
                  )}
                </div>

                <div>
                  <h3 className="text-2xl font-heading font-bold text-white uppercase">{tier.name}</h3>
                  <p className="text-xs text-slate-400 font-light mt-1">{tier.tagline}</p>
                </div>

                <div className="p-4 rounded-xl bg-bg-dark border border-white/10 space-y-1 font-mono">
                  <span className="text-[10px] uppercase text-slate-500 block">ESTIMATED INVESTMENT RANGE</span>
                  <span className="text-base font-bold text-white block">{tier.rangeIndicator}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-light">{tier.description}</p>

                <div className="space-y-3 font-mono text-xs pt-2">
                  <span className="text-[10px] uppercase tracking-widest text-purple-400 font-bold block">INCLUDED CAPABILITIES:</span>
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href="/contact"
                  className={`btn-nw w-full justify-center text-xs ${
                    tier.popular ? "btn-nw-solid" : "btn-nw-ghost"
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Policy Guarantee */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16">
        <div className="kx-card p-8 rounded-2xl border border-white/10 bg-bg-card text-center flex flex-col items-center gap-4">
          <Shield className="w-8 h-8 text-purple-400" />
          <h3 className="text-xl font-heading font-bold text-white uppercase tracking-tight">
            PROPOSAL HONESTY & SCOPE TRANSPARENCY
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed font-light">
            We do not use high-pressure sales tactics or hide setup fees in small print. Every project proposal begins with a thorough discovery audit to establish clear deliverables, timelines, and measurable targets.
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
