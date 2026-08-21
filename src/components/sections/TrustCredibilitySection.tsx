"use client";

import { motion } from "framer-motion";
import { Globe2, ShieldCheck, FileText, BarChart3, MessageSquareCode } from "lucide-react";

export function TrustCredibilitySection() {
  const trustPillars = [
    {
      icon: FileText,
      title: "Structured Proposals",
      desc: "Detailed scope definitions, deliverable milestones, and transparent flat fees with zero hidden charges."
    },
    {
      icon: BarChart3,
      title: "Measurable Objectives",
      desc: "Every project maps directly to conversion metrics, audience retention, search visibility, or brand equity."
    },
    {
      icon: MessageSquareCode,
      title: "Direct Lead Communication",
      desc: "You speak directly with the engineers and strategists building your system, not junior account handlers."
    },
    {
      icon: ShieldCheck,
      title: "KRAXXSEC Technical Standard",
      desc: "Built with the same architectural rigor, security standards, and quality engineering as KRAXXSEC."
    }
  ];

  const regions = [
    "INDIA & SOUTH ASIA",
    "MENA & GCC REGION",
    "EUROPE & UK",
    "NORTH AMERICA",
    "GLOBAL REMOTE OPERATIONS"
  ];

  return (
    <section className="py-24 bg-bg-dark border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="eyebrow inline-flex items-center space-x-2">
            <Globe2 className="h-4 w-4 text-purple-400" />
            <span>INTERNATIONAL POSITIONING & CREDIBILITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight uppercase">
            BUILT FOR MODERN BUSINESSES <br />
            <span className="text-gradient">READY TO THINK GLOBALLY.</span>
          </h2>
          <p className="text-slate-400 text-base font-light">
            We partner with ambitious startups, growing enterprises, founders, and creators ready to build a world-class digital presence.
          </p>
        </div>

        {/* Global Reach Ticker Bar */}
        <div className="p-4 rounded-2xl bg-bg-surface border border-white/10 flex flex-wrap items-center justify-around gap-4 font-mono text-xs text-slate-300">
          {regions.map((region, i) => (
            <span key={region} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
              <span>{region}</span>
              {i < regions.length - 1 && <span className="hidden lg:inline text-slate-700 ml-4">|</span>}
            </span>
          ))}
        </div>

        {/* 4 Trust Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="kx-card p-6 border border-white/10 bg-bg-card space-y-4 hover:border-purple-500/50 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-bg-dark border border-white/10 flex items-center justify-center text-purple-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-2 text-[10px] font-mono text-purple-400">
                  <span>[ VERIFIED STANDARD ]</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
