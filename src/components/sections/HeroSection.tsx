"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Target, Zap, TrendingUp, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { InteractiveHeroCanvas } from "@/components/ui/InteractiveHeroCanvas";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#0B0F19] kx-field">
      <InteractiveHeroCanvas />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center my-auto">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full kx-card border border-purple-500/30 text-purple-300 text-xs font-mono mb-8 shadow-lg shadow-purple-950/40"
        >
          <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
          <span className="tracking-widest uppercase font-bold text-[11px]">
            STRATEGY. CONTENT. COMMUNITY. GROWTH.
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight uppercase max-w-5xl leading-[1.05]"
        >
          WE MAKE BRANDS <br className="hidden sm:inline" />
          <span className="text-gradient glow-mark">IMPOSSIBLE TO IGNORE.</span>
        </motion.h1>

        {/* Supporting Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl font-medium leading-relaxed"
        >
          KRAXX Studio is a social media marketing and digital growth agency helping ambitious brands build stronger online presence through strategy, content, community, and measurable growth.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="kx-btn-primary w-full sm:w-auto justify-center text-xs sm:text-sm uppercase tracking-wider"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/services"
            className="kx-btn-secondary w-full sm:w-auto justify-center text-xs sm:text-sm uppercase tracking-wider"
          >
            <span>EXPLORE OUR SERVICES</span>
          </Link>
        </motion.div>
      </div>

      {/* Brand Pillars Ticker Bar (From Brand Sheet Footer) */}
      <div className="w-full border-t border-white/10 bg-[#0B0F19]/80 backdrop-blur-md py-4 relative z-10 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-around gap-4 text-[11px] font-mono text-slate-300">
          <span className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <strong className="text-white">CONTENT</strong> THAT CONNECTS
          </span>
          <span className="hidden sm:inline text-slate-700">|</span>
          <span className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-purple-400" />
            <strong className="text-white">COMMUNITIES</strong> THAT ENGAGE
          </span>
          <span className="hidden md:inline text-slate-700">|</span>
          <span className="flex items-center gap-2">
            <TrendingUp className="w-3.5 h-3.5 text-fuchsia-400" />
            <strong className="text-white">GROWTH</strong> THAT COMPOUNDS
          </span>
          <span className="hidden lg:inline text-slate-700">|</span>
          <span className="flex items-center gap-2">
            <Target className="w-3.5 h-3.5 text-indigo-400" />
            <strong className="text-white">RESULTS</strong> THAT MATTER
          </span>
        </div>
      </div>
    </section>
  );
}
