"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Layers, CheckCircle2, ChevronRight, Globe } from "lucide-react";
import { STUDIO_CAPABILITIES } from "@/data/services";

export function InteractiveServices() {
  const [selectedCapability, setSelectedCapability] = useState(STUDIO_CAPABILITIES[0]);

  return (
    <section id="services" className="py-24 bg-bg-dark border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4">
          <div className="eyebrow flex items-center space-x-2">
            <Layers className="h-4 w-4 text-purple-400" />
            <span>KRAXX STUDIO // CAPABILITIES MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight uppercase max-w-3xl">
            DIGITAL GROWTH + CREATIVE + WEB + <br />
            <span className="text-gradient">BRANDING CAPABILITIES</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base font-light">
            We organize our expertise into 6 core capability pillars. Progressive disclosure allows you to explore what we solve, build, and deliver.
          </p>
        </div>

        {/* Capability Selection Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Capability Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {STUDIO_CAPABILITIES.map((cap) => {
              const isSelected = selectedCapability.id === cap.id;
              return (
                <button
                  key={cap.id}
                  onClick={() => setSelectedCapability(cap)}
                  className={`w-full text-left p-5 rounded-xl border transition-all flex items-center justify-between group ${
                    isSelected
                      ? "bg-bg-surface border-purple-500/60 shadow-[0_0_20px_rgba(139,92,246,0.25)]"
                      : "bg-bg-card border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                        isSelected ? "bg-purple-500 text-white" : "bg-bg-dark text-purple-400 border border-white/10"
                      }`}>
                        {cap.number}
                      </span>
                      <span className="font-heading font-bold text-white text-base tracking-wide">
                        {cap.title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-1 pl-1 font-light">
                      {cap.tagline}
                    </p>
                  </div>
                  <ChevronRight className={`h-5 w-5 transition-transform ${
                    isSelected ? "text-purple-400 translate-x-1" : "text-slate-600 group-hover:text-slate-300"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Capability Deep-Dive */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCapability.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-bg-card border border-white/10 rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between space-y-6 shadow-2xl"
              >
                <div className="space-y-6">
                  {/* Top Category Badge */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <span className="font-mono text-xs text-purple-400 font-semibold tracking-wider uppercase">
                        CAPABILITY {selectedCapability.number}
                      </span>
                      <h3 className="text-2xl font-heading font-bold text-white mt-1">
                        {selectedCapability.title}
                      </h3>
                    </div>
                    <span className="nw-badge text-purple-300">
                      {selectedCapability.primaryDeliverables.length} CORE DELIVERABLES
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {selectedCapability.tagline}
                  </p>

                  {/* Subservices List */}
                  <div className="space-y-3 pt-2">
                    <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                      INCLUDED IN THIS CAPABILITY:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
                      {selectedCapability.subservices.map((sub, idx) => (
                        <div key={idx} className="flex items-center space-x-2 bg-bg-dark p-2.5 rounded-lg border border-white/10 text-slate-200">
                          <CheckCircle2 className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                          <span className="truncate">{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* What We Solve & Target Clients */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
                    <div className="p-3.5 rounded-xl bg-bg-dark border border-white/10 space-y-1">
                      <span className="text-slate-500 uppercase tracking-widest block text-[10px]">
                        WHAT WE SOLVE:
                      </span>
                      <p className="text-slate-300 font-light leading-relaxed">
                        {selectedCapability.problemSolved}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-bg-dark border border-white/10 space-y-1">
                      <span className="text-slate-500 uppercase tracking-widest block text-[10px]">
                        WHO IT IS FOR:
                      </span>
                      <p className="text-purple-300 font-medium leading-relaxed">
                        {selectedCapability.targetClients}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation CTA */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                    <Globe className="w-4 h-4 text-purple-400" />
                    <span>INTERNATIONAL EXECUTION STANDARD</span>
                  </div>

                  <Link
                    href={`/services/${selectedCapability.slug}`}
                    className="btn-nw btn-nw-solid justify-center text-xs"
                  >
                    <span>[ EXPLORE CAPABILITY DETAILS ]</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

