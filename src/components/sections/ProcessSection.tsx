"use client";

import { motion } from "framer-motion";
import { Compass, Search, Target, Palette, Rocket, RefreshCw, Cpu } from "lucide-react";

const ENGINE_STAGES = [
  {
    number: "01",
    title: "DISCOVER",
    desc: "Understand the business model, commercial goals, audience segments, and digital positioning requirements.",
    deliverable: "Strategic Kickoff Brief & Business Context Model",
    icon: Compass,
  },
  {
    number: "02",
    title: "AUDIT",
    desc: "Identify digital weaknesses, website conversion friction, visual inconsistencies, and competitor gaps.",
    deliverable: "Digital Presence Audit & Gap Analysis Deck",
    icon: Search,
  },
  {
    number: "03",
    title: "STRATEGIZE",
    desc: "Build the growth architecture, messaging framework, content pillars, and technical roadmap.",
    deliverable: "Studio Strategy Blueprint & Distribution Playbook",
    icon: Target,
  },
  {
    number: "04",
    title: "DESIGN",
    desc: "Create the visual identity system, UX wireframes, editorial carousels, and creative asset templates.",
    deliverable: "Brand Identity System & Figma Design Deck",
    icon: Palette,
  },
  {
    number: "05",
    title: "DEPLOY",
    desc: "Build high-performance web applications, launch channel operations, and publish content assets.",
    deliverable: "Production Web Launch & Channel Operations Engine",
    icon: Rocket,
  },
  {
    number: "06",
    title: "OPTIMIZE",
    desc: "Measure conversion analytics, user retention, search visibility, and continuously compound growth.",
    deliverable: "Monthly Performance Retrospective & ROAS Tuning",
    icon: RefreshCw,
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-bg-dark border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="eyebrow inline-flex items-center space-x-2">
            <Cpu className="h-4 w-4 text-purple-400" />
            <span>THE KRAXX DIGITAL SYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight uppercase">
            THE KRAXX GROWTH ENGINE
          </h2>
          <p className="text-slate-400 text-base font-light">
            Our 6-stage operational pipeline guarantees consistency, quality control, and measurable commercial results.
          </p>
        </div>

        {/* 6-Step Stage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGINE_STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="kx-card p-8 border border-white/10 space-y-6 group hover:border-purple-500/50 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="font-mono text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">
                      {stage.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-bg-dark border border-white/10 flex items-center justify-center text-slate-300 group-hover:border-purple-500/50 group-hover:text-purple-300 transition-all shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white tracking-wide uppercase">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {stage.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">
                    STAGE DELIVERABLE:
                  </span>
                  <span className="text-xs font-mono text-purple-300 font-medium block">
                    {stage.deliverable}
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

