"use client";

import Link from "next/link";
import { ArrowUpRight, TrendingUp, CheckCircle2, Folder, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { CASE_STUDIES } from "@/data/caseStudies";

export function FeaturedWorkSection() {
  const mainCase = CASE_STUDIES[0];
  const conceptCases = CASE_STUDIES.slice(1);

  return (
    <section id="work" className="py-24 bg-bg-dark border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="eyebrow flex items-center space-x-2">
              <Folder className="h-4 w-4 text-purple-400" />
              <span>PORTFOLIO & CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight uppercase">
              WORK THAT MOVES THE NUMBERS.
            </h2>
          </div>
          <Link
            href="/work"
            className="btn-nw btn-nw-ghost text-xs self-start md:self-auto"
          >
            <span>[ VIEW ALL CASE STUDIES ]</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Featured Verified Case Study Card */}
        <div className="kx-card p-8 sm:p-12 relative overflow-hidden bg-bg-surface/90 border border-white/10 space-y-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Story & Overview */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-purple-400">
                  {mainCase.number}
                </span>
                <span className="nw-badge text-emerald-400 border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED WORK
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-heading font-bold text-white leading-tight">
                {mainCase.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {mainCase.subtitle}
              </p>

              {/* Challenge & Verified Result Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-bg-dark border border-white/10 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">CHALLENGE</span>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">{mainCase.challenge}</p>
                </div>
                <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-purple-400 font-bold block">VERIFIED RESULT</span>
                  <p className="text-base font-bold text-white">{mainCase.resultsSummary}</p>
                </div>
              </div>

              <Link
                href={`/work/${mainCase.slug}`}
                className="btn-nw btn-nw-solid text-xs inline-flex"
              >
                <span>[ READ VERIFIED CASE STUDY ]</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Column: Timeline & Metrics */}
            <div className="lg:col-span-5 kx-card p-6 rounded-xl border border-white/10 bg-bg-dark space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs">
                <span className="text-purple-400 font-bold flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" /> MILESTONE PROGRESSION
                </span>
                <span className="text-emerald-400 font-bold">0 → 50,000+ AUDIENCE</span>
              </div>

              <div className="space-y-4">
                {mainCase.timeline.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex gap-4 items-start font-mono text-xs"
                  >
                    <div className="w-12 h-10 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center font-bold text-purple-300 shrink-0">
                      {step.label}
                    </div>
                    <div>
                      <p className="font-bold text-white">{step.detail.split(":")[0]}</p>
                      <p className="text-[11px] text-slate-400 font-light mt-0.5">{step.detail.split(":")[1] || step.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Studio Concept Frameworks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conceptCases.map((cs) => (
            <div
              key={cs.id}
              className="kx-card p-8 border border-white/10 space-y-6 bg-bg-card flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-purple-400">
                    {cs.number}
                  </span>
                  <span className="nw-badge text-amber-300 border-amber-500/30">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" /> STUDIO CONCEPT
                  </span>
                </div>
                <h4 className="text-xl font-heading font-bold text-white">{cs.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">{cs.subtitle}</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">{cs.category}</span>
                <span className="text-purple-400">[CONCEPTUAL FRAMEWORK]</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

