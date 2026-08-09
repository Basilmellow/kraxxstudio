"use client";

import { motion } from "framer-motion";
import { Target, Sparkles, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const PILLARS = [
  {
    icon: Target,
    title: "STRATEGIC",
    badge: "REAL IMPACT",
    description: "Data-driven strategies that create real impact. We align every content pillar with your category positioning, commercial targets, and audience pain points.",
  },
  {
    icon: Sparkles,
    title: "CREATIVE",
    badge: "CONNECT & CONVERT",
    description: "Content that connects, engages and converts. Editorial visual design, high-retention video editing, and clear messaging built for algorithmic feed mechanics.",
  },
  {
    icon: TrendingUp,
    title: "GROWTH FOCUSED",
    badge: "MEASURABLE RESULTS",
    description: "Built for long-term growth and measurable results. Continuous iteration based on save velocity, engagement rate, and qualified audience expansion.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-24 sm:py-32 bg-slate-950 border-t border-white/10 relative overflow-hidden kx-field">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-semibold">
            THE STUDIO DIFFERENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-2">
            NOT MORE CONTENT. <br />
            <span className="text-gradient">BETTER CONTENT.</span>
          </h2>
          <p className="text-sm text-slate-300 mt-4 leading-relaxed">
            Why modern brands replace traditional marketing agencies with KRAXX digital growth studio.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="kx-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between group hover:border-indigo-500/40 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/5">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-indigo-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>CORE PILLAR 0{idx + 1}</span>
                  <span className="text-indigo-400">KRAXX STANDARD</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-16 text-center">
          <Link
            href="/about"
            className="kx-btn-secondary text-xs font-mono uppercase tracking-wider"
          >
            <span>LEARN MORE ABOUT OUR STUDIO PHILOSOPHY</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
