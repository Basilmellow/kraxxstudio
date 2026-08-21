import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, TrendingUp, Layers } from "lucide-react";
import { CASE_STUDIES } from "@/data/caseStudies";
import { CTASection } from "@/components/sections/CTASection";

const cs = CASE_STUDIES[0];

export const metadata: Metadata = {
  title: `${cs.title} | KRAXX Social Media Case Study`,
  description: cs.subtitle,
  alternates: {
    canonical: "/work/instagram-zero-to-50k",
  },
  openGraph: {
    title: `${cs.title} | KRAXX Social Media Case Study`,
    description: cs.subtitle,
    url: "https://kraxxstudio.com/work/instagram-zero-to-50k",
    type: "article",
  },
};

export default function InstagramCaseStudyPage() {
  return (
    <div className="pt-28 pb-16 bg-bg-dark min-h-screen">
      {/* Navigation Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> BACK TO PORTFOLIO
        </Link>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="kx-card rounded-2xl p-8 sm:p-12 border border-white/10 bg-bg-surface/90 relative overflow-hidden space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-purple-400">
              {cs.number}
            </span>
            <span className="nw-badge text-emerald-400 border-emerald-500/30">
              <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED WORK
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold text-white uppercase tracking-tight leading-tight max-w-4xl">
            {cs.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-light max-w-3xl leading-relaxed">
            {cs.subtitle}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
            {cs.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-bg-dark border border-white/10 space-y-1">
                <p className="text-[10px] font-mono uppercase text-slate-400">{m.label}</p>
                <p className="text-xl font-bold font-mono text-white">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Narrative & Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 flex flex-col gap-8">
        {/* Overview */}
        <div className="kx-card p-8 rounded-xl border border-white/10 bg-bg-surface/90 space-y-3">
          <h2 className="text-xs font-mono text-purple-400 font-bold uppercase tracking-widest">
            EXECUTIVE OVERVIEW
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed font-light">{cs.overview}</p>
        </div>

        {/* Challenge vs Strategy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="kx-card p-6 sm:p-8 rounded-xl border border-rose-500/20 bg-rose-950/10 space-y-3">
            <h3 className="text-xs font-mono text-rose-400 font-bold uppercase tracking-wider">THE CHALLENGE</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">{cs.challenge}</p>
          </div>

          <div className="kx-card p-6 sm:p-8 rounded-xl border border-emerald-500/20 bg-emerald-950/10 space-y-3">
            <h3 className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">THE STRATEGY</h3>
            <ul className="space-y-2.5 text-xs text-slate-300 font-light">
              {cs.strategy.map((s, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="kx-card p-8 sm:p-10 rounded-xl border border-white/10 bg-bg-surface/90 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="text-lg font-heading font-bold text-white uppercase tracking-tight flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-purple-400" /> AUDIENCE GROWTH MILESTONES
            </h3>
            <span className="font-mono text-xs text-emerald-400 font-bold">0 → 50,000+ AUDIENCE</span>
          </div>

          <div className="flex flex-col gap-4 font-mono text-xs">
            {cs.timeline.map((step, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-bg-dark border border-white/10 items-start sm:items-center">
                <div className="min-w-[84px] px-3 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300 font-bold text-center shrink-0 whitespace-nowrap">
                  {step.label}
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-white uppercase">{step.detail.split(":")[0]}</h4>
                  <p className="text-[11px] text-slate-400 font-light leading-relaxed">{step.detail.split(":")[1] || step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Lessons */}
        <div className="kx-card p-8 rounded-xl border border-white/10 bg-bg-surface/90 space-y-4">
          <h3 className="text-xs font-mono text-purple-400 font-bold uppercase tracking-widest">
            STUDIO TAKEAWAYS FOR BRAND OWNERS
          </h3>
          <div className="flex flex-col gap-3 font-mono text-xs">
            {cs.keyTakeaways.map((k, i) => (
              <div key={i} className="flex items-start gap-2.5 text-slate-300 p-3 rounded-lg bg-bg-dark border border-white/10">
                <Layers className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{k}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
