import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles, Shield, Zap } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Pricing & Investment Plans — Digital Growth Retainers",
  description: "Transparent, tiered retainer packages for social media management, content strategy, community management, and paid social campaigns.",
};

const PRICING_TIERS = [
  {
    name: "STARTER",
    tagline: "For businesses building consistency & visual authority.",
    rangeIndicator: "Proposal Basis / ~$2,500/mo",
    popular: false,
    badge: "FOUNDATION ENGINE",
    description: "Designed for growing brands that need a consistent publishing cadence, professional visual grid, and baseline channel management.",
    features: [
      "2 Core Social Platforms (Instagram + LinkedIn or X)",
      "12 High-Quality Formatted Posts per Month",
      "Monthly Content Calendar Architecture",
      "Brand Visual Template Suite (Figma)",
      "Basic Comment Moderation & Triage",
      "Monthly Performance Report",
    ],
    ctaText: "REQUEST STARTER PROPOSAL",
  },
  {
    name: "GROWTH",
    tagline: "For businesses focused on aggressive audience growth.",
    rangeIndicator: "Proposal Basis / ~$5,000/mo",
    popular: true,
    badge: "MOST POPULAR",
    description: "Our flagship growth engine combining short-form video editing, carousel graphics, active community moderation, and personal branding.",
    features: [
      "3 to 4 Social Platforms (Instagram, LinkedIn, X, TikTok)",
      "20 High-Impact Posts / Short Videos per Month",
      "Dedicated Short-Form Video Editing (Reels/TikToks)",
      "Executive Personal Branding (Founder LinkedIn Ghostwriting)",
      "Daily Comment & DM Lead Triage (7 Days/Week)",
      "Bi-Weekly Analytics Strategy Calls",
      "Community Discord / Group Setup & Moderation",
    ],
    ctaText: "REQUEST GROWTH PROPOSAL",
  },
  {
    name: "PREMIUM",
    tagline: "For established brands seeking full digital presence management.",
    rangeIndicator: "Custom Quote",
    popular: false,
    badge: "ENTERPRISE STUDIO",
    description: "End-to-end studio operations covering full channel management, paid social campaign management, dedicated creative team, and custom SLA.",
    features: [
      "All Social Channels + Community Server Moderation",
      "30+ High-Production Media Assets per Month",
      "Paid Social Campaign Setup, Creative Testing & ROAS Management",
      "Founder & Executive Team Personal Branding",
      "Dedicated Studio Creative Director & Strategist",
      "24/7 Priority Support & Slack Channel",
      "Custom Multi-Touch Lead Attribution Dashboard",
    ],
    ctaText: "REQUEST CUSTOM PROPOSAL",
  },
];

export default function PricingPage() {
  return (
    <div className="pt-28 pb-16 bg-slate-950 min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-6">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>TRANSPARENT RETAINER INVESTMENT</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight">
          STUDIO PLANS & <br />
          <span className="text-gradient-blue">PROPOSAL TIERS.</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Every brand has unique scope requirements. We customize exact proposal parameters based on platform coverage, asset volume, and management intensity.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`glass-card rounded-3xl p-8 border flex flex-col justify-between relative overflow-hidden ${
                tier.popular
                  ? "border-indigo-500/50 shadow-2xl shadow-indigo-600/20 bg-indigo-950/20"
                  : "border-white/10"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-indigo-600 to-blue-600 text-white text-[10px] font-mono font-bold px-4 py-1 rounded-bl-xl tracking-wider">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-indigo-400 font-bold uppercase">{tier.name}</span>
                  {!tier.popular && (
                    <span className="text-[10px] font-mono text-slate-400">{tier.badge}</span>
                  )}
                </div>

                <h3 className="text-2xl font-black text-white mb-2">{tier.name}</h3>
                <p className="text-xs text-slate-300 mb-6">{tier.tagline}</p>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 mb-6">
                  <span className="text-[10px] font-mono uppercase text-slate-400">ESTIMATED RANGE</span>
                  <p className="text-lg font-black text-white mt-0.5">{tier.rangeIndicator}</p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">{tier.description}</p>

                <div className="space-y-3 mb-8">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400">INCLUDED CAPABILITIES:</p>
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 ${
                  tier.popular
                    ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-600/30 hover:scale-[1.02]"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                }`}
              >
                <span>{tier.ctaText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Policy Guarantee */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-20">
        <div className="glass-panel p-8 rounded-3xl border border-white/10 text-center flex flex-col items-center gap-4">
          <Shield className="w-8 h-8 text-indigo-400" />
          <h3 className="text-xl font-bold text-white uppercase tracking-tight">
            CREDIBILITY & PROPOSAL HONESTY
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            We do not publish fake price tags or lock clients into opaque long-term contracts without mutual alignment. Every proposal starts with a 30-minute discovery call to map your exact scope requirements.
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
