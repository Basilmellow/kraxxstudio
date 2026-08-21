"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      num: "01",
      title: "Beautiful website. No conversions.",
      desc: "Visitors arrive, browse passively, and leave without booking a demo or placing an inquiry."
    },
    {
      num: "02",
      title: "Great product. Weak branding.",
      desc: "Your product outperforms competitors, but your visual identity makes you look like a beginner."
    },
    {
      num: "03",
      title: "Active social media. No strategy.",
      desc: "Posting daily without clear content pillars or revenue alignment creates noise, not pipeline."
    },
    {
      num: "04",
      title: "Large audience. No commercial system.",
      desc: "High follower counts or views with zero structured bottom-of-funnel lead capture."
    },
    {
      num: "05",
      title: "Good business. Poor search visibility.",
      desc: "Unoptimized technical SEO and local search setup cause high-intent buyers to find competitors first."
    },
    {
      num: "06",
      title: "Founder with expertise. No personal brand.",
      desc: "Executive authority remains locked inside internal meetings instead of building market leverage on LinkedIn and X."
    },
    {
      num: "07",
      title: "Restaurant with great food. Poor digital discovery.",
      desc: "Outdated PDF menus and slow mobile pages lose hungry customers before they see your location."
    },
    {
      num: "08",
      title: "Creator with audience. No scalable brand system.",
      desc: "Strong content reach without a dedicated digital home, media kit, or monetization architecture."
    }
  ];

  const pipeline = [
    { step: "01 AUDIT", label: "Identify digital friction" },
    { step: "02 STRATEGIZE", label: "Build growth architecture" },
    { step: "03 DESIGN", label: "Craft visual identity" },
    { step: "04 BUILD", label: "Engineer web & content" },
    { step: "05 DISTRIBUTE", label: "Publish across channels" },
    { step: "06 MEASURE", label: "Track conversion metrics" },
    { step: "07 OPTIMIZE", label: "Compound growth monthly" }
  ];

  return (
    <section className="py-24 bg-bg-dark border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4">
          <div className="eyebrow flex items-center space-x-2">
            <AlertTriangle className="h-4 w-4 text-purple-400" />
            <span>BUSINESS FRICTION & DIAGNOSTICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight uppercase max-w-3xl">
            YOUR BUSINESS IS GOOD. <br />
            <span className="text-gradient">YOUR DIGITAL PRESENCE SHOULDN&apos;T LOOK AVERAGE.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base font-light">
            We identify the hidden conversion bottlenecks and visual gaps preventing ambitious companies from claiming category leadership.
          </p>
        </div>

        {/* 8 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((p, idx) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="kx-card p-6 flex flex-col justify-between space-y-4 group hover:border-purple-500/50"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-xs font-bold text-purple-400">{p.num}</span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">GAP DIAGNOSTIC</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-white group-hover:text-purple-300 transition-colors leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>
              <div className="pt-2 text-[10px] font-mono text-purple-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>KRAXX AUDIT TARGET</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* KRAXX RESPONSE PIPELINE */}
        <div className="kx-card p-8 bg-bg-surface/90 border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white/10 pb-4 gap-2">
            <div>
              <div className="eyebrow mb-1">THE KRAXX RESPONSE</div>
              <h3 className="text-xl font-heading font-bold text-white uppercase">
                SYSTEMATIC REMEDIATION PIPELINE
              </h3>
            </div>
            <span className="nw-badge text-purple-300 border-purple-500/30">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
              END-TO-END METHODOLOGY
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 pt-2">
            {pipeline.map((item) => (
              <div
                key={item.step}
                className="p-3.5 rounded bg-bg-dark border border-white/10 flex flex-col justify-between space-y-2 hover:border-purple-500/40 transition-colors"
              >
                <span className="font-mono text-[10px] font-bold text-purple-400">
                  {item.step}
                </span>
                <span className="text-xs font-medium text-slate-200 leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
