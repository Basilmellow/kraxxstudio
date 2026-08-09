"use client";

import { Sparkles } from "lucide-react";

const MARQUEE_ITEMS = [
  "SOCIAL MEDIA MANAGEMENT",
  "CONTENT STRATEGY",
  "COMMUNITY MANAGEMENT",
  "DIGITAL BRANDING",
  "PAID SOCIAL CAMPAIGNS",
  "ANALYTICS & OPTIMIZATION",
  "EXECUTIVE PERSONAL BRANDING",
  "CONTENT SYSTEMS",
];

export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="w-full bg-slate-950 border-y border-white/10 py-4 overflow-hidden select-none relative z-10">
      <div className="animate-marquee items-center gap-8 text-xs font-mono tracking-widest text-slate-300 uppercase">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-8 whitespace-nowrap">
            <span className="hover:text-indigo-400 transition-colors cursor-default">{item}</span>
            <Sparkles className="w-3 h-3 text-indigo-500/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
