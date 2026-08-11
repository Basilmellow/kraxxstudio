import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Target, ShieldCheck, Cpu, Layers, Users, TrendingUp, Zap } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { KraxxLogo } from "@/components/ui/KraxxLogo";
import { SITE_CONFIG } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "About KRAXX Studio | Social Media & Digital Growth Agency",
  description:
    "Learn how KRAXX Studio helps ambitious brands build stronger digital presence through social media strategy, content, community, and measurable growth.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16 bg-[#0B0F19] min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center flex flex-col items-center">
        <div className="mb-6">
          <KraxxLogo size="lg" />
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-purple-500/30 text-purple-300 text-xs font-mono mb-6">
          <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
          <span>BRAND ESSENCE & STUDIO PHILOSOPHY</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight">
          STRATEGY. CONTENT. <br />
          <span className="text-gradient-blue">COMMUNITY. GROWTH.</span>
        </h1>
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
          {SITE_CONFIG.name} is a modern digital growth studio created to help ambitious brands replace random posting with a predictable, high-impact content and community engine.
        </p>
      </section>

      {/* Brand Essence 3 Cards (Directly from Brand Guidelines Sheet) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mb-16">
        <div className="text-center mb-8">
          <span className="text-xs font-mono text-purple-400 uppercase font-bold tracking-widest">OFFICIAL BRAND ESSENCE</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-3xl border border-indigo-500/30">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2 tracking-tight">STRATEGIC</h3>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              Data-driven strategies that create real impact.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-purple-500/30">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2 tracking-tight">CREATIVE</h3>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              Content that connects, engages, and converts.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-fuchsia-500/30">
            <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/20 border border-fuchsia-500/40 flex items-center justify-center text-fuchsia-400 mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2 tracking-tight">GROWTH FOCUSED</h3>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              Built for long-term growth and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Core Studio Manifesto */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16">
        <div className="glass-card p-8 sm:p-14 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="flex flex-col gap-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <h2 className="text-xs font-mono text-purple-400 font-bold uppercase tracking-widest">
              THE STUDIO MANIFESTO
            </h2>
            <p className="text-xl sm:text-2xl font-bold text-white leading-snug">
              Most businesses fail on social media not because they lack products or ideas, but because they treat digital presence as a side project rather than a core commercial asset.
            </p>
            <p>
              In the modern algorithm ecosystem, scrollers don't reward corporate stock photos, robotic broadcast announcements, or disconnected graphics. They reward visual clarity, strategic intent, and authentic community engagement.
            </p>
            <p>
              We operate as a specialized external studio team—combining strategic content planning, editorial graphic design, short-form video editing, humanized community moderation, and data analytics under one disciplined operating model.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Studio Pillars Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-20">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-indigo-400 uppercase font-semibold">STUDIO FOUNDATIONS</span>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mt-1">
            HOW WE APPROACH DIGITAL GROWTH
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-3xl border border-white/10">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Category Positioning</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We position your brand so it stands out immediately in saturated feeds. Every caption, visual font, and carousel cover reinforces your distinct market category.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-white/10">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Algorithmic Pacing</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We format content specifically for feed mechanics—capitalizing on high save rates, short-form video watch duration, and engagement velocity.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-white/10">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Humanized Community Triage</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We treat comment sections and DMs as high-value conversation hubs. Active daily moderation turns passive scrollers into long-term brand advocates.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-white/10">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Empirical Accountability</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              No vanity promises or fake numbers. We track real retention metrics, audience growth, save ratios, and inbound lead velocity every 30 days.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
