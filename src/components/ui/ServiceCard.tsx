"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Share2, Target, Sparkles, Users, UserCheck, TrendingUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ServiceItem } from "@/data/services";

const ICON_MAP: Record<string, any> = {
  Share2,
  Target,
  Sparkles,
  Users,
  UserCheck,
  TrendingUp,
};

export function ServiceCard({ service }: { service: ServiceItem }) {
  const [expandedMobile, setExpandedMobile] = useState(false);
  const IconComponent = ICON_MAP[service.iconName] || Share2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="kx-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden border border-white/10 hover:border-indigo-500/40"
    >
      {/* Glow Hover Backplate */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-indigo-600/10 via-blue-500/5 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

      <div>
        {/* Card Header: Number + Icon */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-400 group-hover:text-indigo-400 transition-colors">
            {service.number}
          </span>
          <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-lg">
            <IconComponent className="w-5 h-5" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 tracking-tight group-hover:text-indigo-200 transition-colors">
          {service.title}
        </h3>

        {/* Tagline */}
        <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed font-medium">
          {service.tagline}
        </p>

        {/* Summary Description */}
        <p className="text-xs text-slate-400 leading-relaxed mb-6">
          {service.summary}
        </p>

        {/* Deliverables Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.includes.slice(0, 4).map((item, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/5 group-hover:border-indigo-500/20 transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Mobile Expandable Details (Accordion) */}
      <div className="sm:hidden mb-4">
        <button
          type="button"
          onClick={() => setExpandedMobile(!expandedMobile)}
          className="text-xs font-mono text-indigo-400 flex items-center gap-1 py-1"
        >
          <span>{expandedMobile ? "Hide Details" : "View Full Scope"}</span>
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expandedMobile ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence>
          {expandedMobile && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden pt-3 border-t border-white/10 text-xs text-slate-400 space-y-2"
            >
              <p className="font-semibold text-white">Full Service Includes:</p>
              <ul className="list-disc list-inside space-y-1 text-[11px]">
                {service.includes.map((inc, i) => (
                  <li key={i}>{inc}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CTA Button */}
      <Link
        href={`/services/${service.slug}`}
        className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-xs font-bold uppercase tracking-wider text-indigo-300 group-hover:text-white transition-colors"
      >
        <span>EXPLORE SERVICE</span>
        <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-600 group-hover:translate-x-1 transition-all">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </Link>
    </motion.div>
  );
}
