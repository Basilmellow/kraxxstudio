"use client";

import { motion } from "framer-motion";
import { Compass, Target, PenTool, Radio, BarChart2, RefreshCw } from "lucide-react";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "DISCOVER",
    desc: "Understand the brand, target audience, competitors, and growth objectives through a dedicated audit.",
    icon: Compass,
  },
  {
    number: "02",
    title: "STRATEGIZE",
    desc: "Build the content pillars, messaging architecture, and platform distribution strategy.",
    icon: Target,
  },
  {
    number: "03",
    title: "CREATE",
    desc: "Develop short-form video cuts, carousel graphics, social copy, and paid campaign creatives.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "PUBLISH",
    desc: "Manage day-to-day digital presence, scheduled releases, and proactive community management.",
    icon: Radio,
  },
  {
    number: "05",
    title: "MEASURE",
    desc: "Track retention rates, save velocity, audience growth metrics, and lead conversions.",
    icon: BarChart2,
  },
  {
    number: "06",
    title: "OPTIMIZE",
    desc: "Use performance data to continuously refine pillars, hooks, and content production efficiency.",
    icon: RefreshCw,
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-slate-950 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-semibold">
            THE STUDIO WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-2">
            A BETTER WAY TO BUILD DIGITAL PRESENCE.
          </h2>
          <p className="text-sm text-slate-300 mt-4 leading-relaxed">
            Our 6-stage operational pipeline guarantees consistency, quality control, and data accountability.
          </p>
        </div>

        {/* 6-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="kx-card rounded-3xl p-8 border border-white/10 relative overflow-hidden group hover:border-indigo-500/40"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black font-mono text-indigo-400 group-hover:text-cyan-300 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-white mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.desc}
                </p>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>STAGE {step.number} OF 06</span>
                  <span className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    KRAXX PIPELINE →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
