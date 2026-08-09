"use client";

import Link from "next/link";
import { ArrowUpRight, TrendingUp, CheckCircle2, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { CASE_STUDIES } from "@/data/caseStudies";

export function FeaturedWorkSection() {
  const mainCase = CASE_STUDIES[0];
  const placeholders = CASE_STUDIES.slice(1);

  return (
    <section className="py-24 sm:py-32 bg-slate-950 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-semibold">
              VERIFIED PORTFOLIO CASE STUDY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-2">
              WORK THAT MOVES THE NUMBERS.
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 hover:text-white transition-colors"
          >
            <span>VIEW FULL PORTFOLIO</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Case Study Hero Showcase */}
        <div className="kx-card-elevated rounded-3xl p-8 sm:p-12 relative overflow-hidden mb-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                  {mainCase.number}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED CASE STUDY
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                {mainCase.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {mainCase.subtitle}
              </p>

              {/* Challenge & Result Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-[10px] font-mono uppercase text-slate-400">CHALLENGE</p>
                  <p className="text-xs text-slate-300 mt-1">{mainCase.challenge}</p>
                </div>
                <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30">
                  <p className="text-[10px] font-mono uppercase text-indigo-400">VERIFIED RESULT</p>
                  <p className="text-base font-black text-white mt-1">{mainCase.resultsSummary}</p>
                </div>
              </div>

              {/* Strategy Highlights */}
              <div>
                <p className="text-xs font-mono uppercase text-slate-400 mb-2">Core Strategy Pillars:</p>
                <div className="flex flex-wrap gap-2">
                  {mainCase.strategy.slice(0, 4).map((strat, i) => (
                    <span key={i} className="text-[11px] font-mono px-3 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">
                      {strat.slice(0, 40)}...
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={`/work/${mainCase.slug}`}
                className="kx-btn-primary text-xs uppercase tracking-wider w-fit"
              >
                <span>READ FULL CASE STUDY</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Column: Animated Milestone Timeline */}
            <div className="lg:col-span-5 kx-card p-6 rounded-2xl border border-white/10 flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono uppercase text-indigo-400 font-bold flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" /> AUDIENCE MILESTONE TIMELINE
                </span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">0 → 50K+</span>
              </div>

              <div className="flex flex-col gap-4">
                {mainCase.timeline.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-xs font-bold font-mono text-indigo-300 shrink-0">
                      {step.label}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">{step.detail.split(":")[0]}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{step.detail.split(":")[1] || step.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Future Placeholders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {placeholders.map((cs) => (
            <div
              key={cs.id}
              className="kx-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between opacity-80 hover:opacity-100 transition-opacity"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-400 bg-white/5 border border-white/10">
                    {cs.number}
                  </span>
                  <span className="text-[10px] font-mono text-indigo-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> STUDIO FRAMEWORK
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{cs.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{cs.subtitle}</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">{cs.category}</span>
                <span className="text-xs font-mono text-slate-500">[Upcoming Client Showcase]</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
