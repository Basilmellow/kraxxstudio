"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Utensils, Rocket, Sparkles, Tv, ShoppingBag, Cpu, UserCheck } from "lucide-react";

export function ProblemSolutionMatrix() {
  const verticals = [
    {
      id: "restaurant",
      label: "RESTAURANT",
      icon: Utensils,
      problem: "Great food and high local reputation, but weak online presence, slow PDF menu files, and zero local Google Search optimization.",
      analysis: "70%+ of diners search on mobile. PDF menus cause high bounce rates and hidden location details cost walk-in and booking traffic.",
      solution: "Brand audit + interactive mobile website redesign + local Google SEO + Instagram content engine + direct reservation UX.",
      outcome: "Dominant local discovery, premium brand perception, and a friction-free path from search to table reservation."
    },
    {
      id: "startup",
      label: "STARTUP",
      icon: Rocket,
      problem: "Strong tech or service product, but the current website fails to explain value or convert visitors into demo bookings.",
      analysis: "High bounce rate above-the-fold due to jargon-heavy headlines and missing clear conversion pathways.",
      solution: "Positioning overhaul + Next.js web application engineering + product storytelling + conversion tracking architecture.",
      outcome: "Crystallized product messaging, higher visitor retention, and scalable demo pipeline."
    },
    {
      id: "e-commerce",
      label: "E-COMMERCE",
      icon: ShoppingBag,
      problem: "High quality physical or digital products, but inconsistent visual presentation and weak organic social content.",
      analysis: "Generic stock photography and unaligned feed aesthetics suppress brand trust and drive up customer acquisition costs.",
      solution: "Visual identity system + product asset creation + custom web store UX + targeted paid & organic content strategy.",
      outcome: "Elevated brand perception, higher average order value (AOV), and compounding organic customer retention."
    },
    {
      id: "influencer",
      label: "INFLUENCER",
      icon: Sparkles,
      problem: "Large social media audience across Instagram or TikTok, but weak commercial infrastructure and zero owned web asset.",
      analysis: "Over-reliance on platform algorithm feeds leaves sponsorship deals and direct product monetization vulnerable.",
      solution: "Personal brand web hub + media kit architecture + digital product system + multi-platform content engine.",
      outcome: "Professional brand infrastructure for high-ticket brand partnerships and owned product sales."
    },
    {
      id: "streamer",
      label: "STREAMER",
      icon: Tv,
      problem: "Active community on Twitch or YouTube, but no centralized digital ecosystem or unified brand identity.",
      analysis: "Fragmented community presence across platforms without one recognizable home or merchandise hub.",
      solution: "Creator website + Discord community architecture + custom graphics package + content repurposing engine.",
      outcome: "One unified, recognizable digital ecosystem for community engagement and monetization."
    },
    {
      id: "saas",
      label: "SAAS COMPANY",
      icon: Cpu,
      problem: "Proven product-market fit, but landing page traffic fails to convert into free trial signups.",
      analysis: "Unclear user onboarding UX, slow page speeds, and missing technical SEO documentation for organic search.",
      solution: "High-performance SaaS web application + technical SEO architecture + product visual teardowns + paid search campaigns.",
      outcome: "Accelerated free trial velocity, reduced cost per acquisition (CPA), and higher trial-to-paid conversion."
    },
    {
      id: "founder",
      label: "FOUNDER / EXECUTIVE",
      icon: UserCheck,
      problem: "Decades of deep industry expertise, but zero visible personal brand footprint on LinkedIn or X.",
      analysis: "Founders missing personal leverage forfeit inbound partner inquiries and investor trust to vocal competitors.",
      solution: "Founder narrative extraction (30 min/month) + profile overhaul + ghostwritten thought leadership + audience networking.",
      outcome: "Category leadership positioning, inbound partnership requests, and talent attraction."
    }
  ];

  const [activeVertical, setActiveVertical] = useState(verticals[0]);

  return (
    <section className="py-24 bg-bg-surface/50 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="eyebrow inline-flex items-center space-x-2">
            <span>REAL-WORLD PROBLEM → SOLUTION MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight uppercase">
            HOW WE SOLVE BUSINESS PROBLEMS <br />
            <span className="text-gradient">ACROSS INDUSTRIES</span>
          </h2>
          <p className="text-slate-400 text-base font-light">
            We don&apos;t sell generic packages. Select a business profile below to inspect how KRAXX analyzes problems and deploys commercial solutions.
          </p>
        </div>

        {/* Vertical Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs">
          {verticals.map((v) => {
            const Icon = v.icon;
            const isSelected = activeVertical.id === v.id;
            return (
              <button
                key={v.id}
                onClick={() => setActiveVertical(v)}
                className={`px-4 py-2.5 rounded-full border transition-all flex items-center gap-2 ${
                  isSelected
                    ? "bg-purple-600/20 border-purple-500 text-white font-bold shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                    : "bg-bg-card border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-purple-400" : "text-slate-500"}`} />
                <span>{v.label}</span>
              </button>
            );
          })}
        </div>

        {/* Matrix Card Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVertical.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-bg-card border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl"
          >
            {/* Left: Problem & Analysis */}
            <div className="lg:col-span-5 space-y-6 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-xs font-bold text-rose-400 uppercase tracking-widest">
                    [ BUSINESS PROBLEM ]
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                  {activeVertical.problem}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-bg-dark border border-white/10 space-y-2 font-mono text-xs">
                <span className="text-slate-400 font-semibold uppercase tracking-wider block">
                  KRAXX DIAGNOSTIC ANALYSIS:
                </span>
                <p className="text-slate-300 leading-relaxed font-light">
                  {activeVertical.analysis}
                </p>
              </div>
            </div>

            {/* Right: Solution & Outcome */}
            <div className="lg:col-span-7 space-y-6 lg:pl-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold text-purple-400 uppercase tracking-widest block">
                  [ KRAXX INTEGRATED SOLUTION ]
                </span>
                <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
                  {activeVertical.solution}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-purple-950/30 border border-purple-500/30 space-y-2">
                <div className="flex items-center space-x-2 font-mono text-xs text-purple-300 font-bold uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  <span>EXPECTED BUSINESS OUTCOME</span>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {activeVertical.outcome}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
