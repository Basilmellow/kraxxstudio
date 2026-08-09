"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { CheckCircle2, TrendingUp, Users, Layers, Activity } from "lucide-react";

export function StatsSection() {
  return (
    <section className="py-20 sm:py-28 bg-slate-950 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-semibold">
            PROVEN PERFORMANCE & REACH
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-2 leading-tight">
            ATTENTION ISN'T THE GOAL. <br />
            <span className="text-gradient-blue">IMPACT IS.</span>
          </h2>
          <p className="text-sm text-slate-300 mt-4 leading-relaxed">
            We focus strictly on compounding audience quality, save velocity, and category trust.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="kx-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
                <AnimatedCounter target={50000} suffix="+" />
              </div>
              <h4 className="text-sm font-bold text-slate-200">Instagram Audience Growth</h4>
              <p className="text-xs text-slate-400 mt-1">Organically scaled from zero to 50,000+ followers.</p>
            </div>
          </motion.div>

          {/* Stat Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="kx-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
                <AnimatedCounter target={1000} suffix="+" />
              </div>
              <h4 className="text-sm font-bold text-slate-200">LinkedIn Executive Audience</h4>
              <h4 className="text-xs text-slate-400 mt-1">Founders & B2B decision makers engaged.</h4>
            </div>
          </motion.div>

          {/* Stat Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="kx-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2 uppercase">
                MULTI-PLATFORM
              </div>
              <h4 className="text-sm font-bold text-slate-200">Social Media Mastery</h4>
              <p className="text-xs text-slate-400 mt-1">Instagram, LinkedIn, X, TikTok & Discord.</p>
            </div>
          </motion.div>

          {/* Stat Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="kx-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-2xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-6">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2 uppercase">
                DATA-DRIVEN
              </div>
              <h4 className="text-sm font-bold text-slate-200">Content Optimization</h4>
              <p className="text-xs text-slate-400 mt-1">Continuous iteration based on performance data.</p>
            </div>
          </motion.div>
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-slate-500 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/5">
            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
            Selected results and experience from previous studio digital projects.
          </p>
        </div>
      </div>
    </section>
  );
}
