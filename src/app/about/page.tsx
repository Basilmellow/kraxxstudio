import { Metadata } from "next";
import { ArrowUpRight, Sparkles, Target, TrendingUp, Terminal } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About KRAXX Studio | International Digital Growth & Creative Technology Studio",
  description:
    "Learn about KRAXX Studio—the creative technology and digital growth division of KRAXX. Strategy, Next.js web application engineering, brand identity, and content systems.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About KRAXX Studio | Digital Growth & Creative Systems",
    description:
      "Digital growth and creative technology studio. We build the digital presence behind ambitious brands.",
    url: "https://kraxxstudio.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16 bg-bg-dark min-h-screen">
      
      {/* Header Viewport */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <div className="eyebrow inline-flex items-center space-x-2">
          <Terminal className="w-3.5 h-3.5 text-purple-400" />
          <span>KRAXX STUDIO // BRAND ESSENCE & PHILOSOPHY</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-bold text-white uppercase tracking-tight">
          WE BUILD THE DIGITAL PRESENCE <br />
          <span className="text-gradient">BEHIND AMBITIOUS BRANDS.</span>
        </h1>
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
          KRAXX Studio is the digital growth, creative technology, and brand engineering division of KRAXX. We help companies, founders, and creators turn their online footprint into an engine for market leadership.
        </p>
      </section>

      {/* Brand Essence 3 Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mb-16 space-y-8">
        <div className="text-center font-mono text-xs text-purple-400 font-bold tracking-widest">
          [ OFFICIAL BRAND ESSENCE ]
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="kx-card p-8 border border-white/10 bg-bg-card space-y-4">
            <div className="w-12 h-12 rounded-xl bg-bg-dark border border-white/10 flex items-center justify-center text-purple-400">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-white uppercase">STRATEGIC</h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Data-backed positioning frameworks and conversion architecture built for measurable business impact.
            </p>
          </div>

          <div className="kx-card p-8 border border-white/10 bg-bg-card space-y-4">
            <div className="w-12 h-12 rounded-xl bg-bg-dark border border-white/10 flex items-center justify-center text-purple-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-white uppercase">CREATIVE</h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              High-fidelity visual identity systems, editorial typography, and short-form media that commands attention.
            </p>
          </div>

          <div className="kx-card p-8 border border-white/10 bg-bg-card space-y-4">
            <div className="w-12 h-12 rounded-xl bg-bg-dark border border-white/10 flex items-center justify-center text-purple-400">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-white uppercase">GROWTH FOCUSED</h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Engineered for compounding pipeline velocity, search authority, and long-term commercial value.
            </p>
          </div>
        </div>
      </section>

      {/* Division Ecosystem Card */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="kx-card p-8 sm:p-12 border border-white/10 bg-bg-surface/80 rounded-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs">
            <span className="text-purple-400 font-bold">KRAXX DIVISION ARCHITECTURE</span>
            <span className="nw-badge text-purple-300">TWO SPECIALIZED DIVISIONS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
            <div className="p-6 rounded-xl bg-bg-dark border border-purple-500/30 space-y-2">
              <span className="text-purple-400 font-bold uppercase block text-[10px]">DIVISION 01</span>
              <h4 className="text-white font-bold text-base">KRAXX STUDIO</h4>
              <p className="text-slate-400 text-[11px] font-light leading-relaxed">
                Digital Growth, Web Engineering, Brand Systems, Content Engine, Executive Positioning, & Technical SEO.
              </p>
              <span className="text-purple-300 text-[10px] block pt-1">kraxxstudio.com (Current Site)</span>
            </div>

            <div className="p-6 rounded-xl bg-bg-dark border border-white/10 space-y-2">
              <span className="text-slate-500 font-bold uppercase block text-[10px]">DIVISION 02</span>
              <h4 className="text-white font-bold text-base">KRAXXSEC</h4>
              <p className="text-slate-400 text-[11px] font-light leading-relaxed">
                Cybersecurity, Security Engineering, Threat Modeling, Incident Response, & Vulnerability Assessment.
              </p>
              <a
                href="https://kraxxsec.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-white transition-colors text-[10px] flex items-center gap-1 pt-1"
              >
                <span>kraxxsec.com</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Studio Manifesto */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="kx-card p-8 sm:p-12 border border-white/10 bg-bg-card rounded-2xl space-y-6">
          <span className="font-mono text-xs text-purple-400 font-bold uppercase tracking-widest block">
            THE KRAXX MANIFESTO
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-snug">
            Most businesses underperform online not because they lack quality products, but because their digital presence looks uncalibrated and amateurish.
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed font-light">
            In modern international markets, high-intent buyers and partners conduct immediate digital due diligence. If your website is slow, your branding looks outdated, or your executive leadership is invisible on social channels, you forfeit trust to vocal competitors.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed font-light">
            We operate as an integrated creative and technical studio—combining positioning strategy, high-speed Next.js web development, visual identity, and distribution analytics into one disciplined commercial system.
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

