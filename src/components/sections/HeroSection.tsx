"use client";

import Link from "next/link";
import { ArrowRight, Terminal, Zap, ShieldCheck, FileCheck2, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { InteractiveHeroCanvas } from "@/components/ui/InteractiveHeroCanvas";

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] pt-32 pb-12 flex flex-col justify-between overflow-hidden bg-bg-dark kx-field">
      <InteractiveHeroCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-4xl space-y-8">
          
          {/* Eyebrow System Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow flex items-center gap-2"
          >
            <Terminal className="h-4 w-4 text-purple-400" />
            <span>KRAXX STUDIO · DIGITAL GROWTH & CREATIVE SYSTEMS · A KRAXX DIVISION</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-3 font-heading"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-[1.02]">
              WE BUILD THE DIGITAL PRESENCE
            </h1>
            <p className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gradient glow-mark uppercase">
              BEHIND AMBITIOUS BRANDS.
            </p>
          </motion.div>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed"
          >
            We combine strategy, web engineering, visual identity, content creation, and growth analytics. Presences engineered to look expensive — and perform.
          </motion.p>

          {/* System Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 font-mono text-[11px]"
          >
            <div className="nw-badge">
              <ShieldCheck className="h-4 w-4 text-purple-400" />
              <span>HIGH-TRUST CREATIVE SYSTEMS</span>
            </div>
            <div className="nw-badge">
              <FileCheck2 className="h-4 w-4 text-purple-400" />
              <span>MEASURABLE BUSINESS IMPACT</span>
            </div>
            <div className="nw-badge">
              <Clock className="h-4 w-4 text-purple-400" />
              <span>24-HOUR INTAKE RESPONSE</span>
            </div>
          </motion.div>

          {/* Dual Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 font-mono text-sm"
          >
            <Link href="/contact" className="btn-nw btn-nw-solid justify-center">
              <span>[ START A PROJECT ]</span>
              <Zap className="h-4 w-4" />
            </Link>

            <Link href="/work" className="btn-nw btn-nw-ghost justify-center">
              <span>[ EXPLORE OUR WORK ]</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* System Metadata Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 w-full border-t border-white/10 bg-bg-surface/90 backdrop-blur-xl mt-12"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 text-left font-mono">
          <div className="p-4 sm:p-5 space-y-1">
            <div className="text-xl font-bold text-white tracking-tight">
              GLOBAL<small className="text-xs text-purple-400 ml-1">CLIENTS</small>
            </div>
            <div className="text-[11px] text-slate-400">International Positioning</div>
          </div>
          <div className="p-4 sm:p-5 space-y-1">
            <div className="text-xl font-bold text-white tracking-tight">
              DIGITAL<small className="text-xs text-purple-400 ml-1">STRATEGY</small>
            </div>
            <div className="text-[11px] text-slate-400">Positioning & Roadmaps</div>
          </div>
          <div className="p-4 sm:p-5 space-y-1">
            <div className="text-xl font-bold text-white tracking-tight">
              WEB &<small className="text-xs text-purple-400 ml-1">BRANDING</small>
            </div>
            <div className="text-[11px] text-slate-400">Engineering & Systems</div>
          </div>
          <div className="p-4 sm:p-5 space-y-1">
            <div className="text-xl font-bold text-white tracking-tight">
              CONTENT &<small className="text-xs text-purple-400 ml-1">GROWTH</small>
            </div>
            <div className="text-[11px] text-slate-400">SEO & Performance</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

