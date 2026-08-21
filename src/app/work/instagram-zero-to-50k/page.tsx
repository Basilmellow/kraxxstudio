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
    <div className="pt-28 pb-16 bg-slate-950 min-h-screen">
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
        <div className="glass-card rounded-3xl p-8 sm:p-14 border border-indigo-500/30 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
              {cs.number}
            </span>
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED ORGANIC RESULT
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight max-w-4xl">
            {cs.title}
          </h1>

          <p className="mt-4 text-base sm:text-xl text-slate-300 font-medium max-w-3xl leading-relaxed">
            {cs.subtitle}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/10">
            {cs.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <p className="text-[10px] font-mono uppercase text-slate-400">{m.label}</p>
                <p className="text-xl font-black text-white mt-1">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Narrative & Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 flex flex-col gap-12">
        {/* Overview */}
        <div className="glass-card p-8 rounded-3xl border border-white/10">
          <h2 className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-widest mb-3">
            EXECUTIVE OVERVIEW
          </h2>
          <p className="text-sm text-slate-200 leading-relaxed">{cs.overview}</p>
        </div>

        {/* Challenge vs Strategy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-3xl border border-red-500/20 bg-red-950/10">
            <h3 className="text-xs font-mono text-red-400 font-bold uppercase mb-2">THE CHALLENGE</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{cs.challenge}</p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-emerald-500/20 bg-emerald-950/10">
            <h3 className="text-xs font-mono text-emerald-400 font-bold uppercase mb-2">THE STRATEGY</h3>
            <ul className="space-y-2 text-xs text-slate-300">
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
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10">
          <h3 className="text-xl font-black text-white uppercase tracking-tight mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-indigo-400" /> AUDIENCE GROWTH MILESTONES
          </h3>

          <div className="flex flex-col gap-6">
            {cs.timeline.map((step, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-16 h-10 rounded-xl bg-indigo-600 text-white font-extrabold font-mono text-xs flex items-center justify-center shrink-0">
                  {step.label}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{step.detail.split(":")[0]}</h4>
                  <p className="text-xs text-slate-300 mt-1">{step.detail.split(":")[1] || step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Lessons */}
        <div className="glass-card p-8 rounded-3xl border border-white/10">
          <h3 className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest mb-4">
            STUDIO TAKEAWAYS FOR BRAND OWNERS
          </h3>
          <div className="flex flex-col gap-3">
            {cs.keyTakeaways.map((k, i) => (
              <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                <Layers className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
                <span>{k}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
