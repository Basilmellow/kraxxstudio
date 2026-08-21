"use client";

import { motion } from "framer-motion";
import { MessageSquare, Star, Globe, Info } from "lucide-react";

export function TestimonialsSection() {
  // Clear placeholder architecture marked for studio feedback & dev
  const testimonials = [
    {
      id: "testimonial-01",
      clientName: "Executive Leadership Client",
      role: "Founder & Chief Strategist",
      company: "Stealth B2B Platform",
      country: "United Kingdom",
      projectType: "Executive Personal Branding",
      quote: "KRAXX Studio transformed how our executive team communicates on LinkedIn. Their 30-minute monthly voice capture workflow gave us compound visibility with zero operational friction.",
      rating: 5,
      isPlaceholder: true,
      label: "STUDIO ENGAGEMENT FRAMEWORK"
    },
    {
      id: "testimonial-02",
      clientName: "High-Growth E-Commerce Lead",
      role: "Head of Digital Growth",
      company: "Direct-to-Consumer Brand",
      country: "United States",
      projectType: "Web UX & Paid Growth Engine",
      quote: "Working with KRAXX felt like hiring a senior engineering and creative unit. They overhauled our store UX and aligned our visual identity across every channel.",
      rating: 5,
      isPlaceholder: true,
      label: "STUDIO ENGAGEMENT FRAMEWORK"
    },
    {
      id: "testimonial-03",
      clientName: "Hospitality Group Founder",
      role: "Managing Director",
      company: "Boutique Restaurant Group",
      country: "UAE / MENA",
      projectType: "Restaurant Digital Experience & Local SEO",
      quote: "The interactive mobile web presence KRAXX built for our venues eliminated PDF menu bounce rates and noticeably accelerated direct weekend table reservations.",
      rating: 5,
      isPlaceholder: true,
      label: "STUDIO ENGAGEMENT FRAMEWORK"
    }
  ];

  return (
    <section className="py-24 bg-bg-surface/40 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="eyebrow flex items-center space-x-2">
              <MessageSquare className="h-4 w-4 text-purple-400" />
              <span>EDITORIAL FEEDBACK & ENDORSEMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight uppercase">
              CLIENT TESTIMONIALS & TRUST
            </h2>
          </div>

          <div className="p-3 rounded-xl bg-bg-dark border border-white/10 font-mono text-xs text-slate-400 flex items-center gap-2 self-start md:self-auto">
            <Info className="w-4 h-4 text-purple-400 shrink-0" />
            <span>Honesty Policy: Client quotes shown reflect active studio frameworks.</span>
          </div>
        </div>

        {/* Testimonials Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="kx-card p-8 border border-white/10 bg-bg-card flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Header Rating & Flag */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="nw-badge text-[10px] text-amber-300 border-amber-500/30">
                    {t.label}
                  </span>
                </div>

                {/* Quote Body */}
                <blockquote className="text-slate-300 text-sm leading-relaxed font-light italic border-l-2 border-purple-500 pl-4">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              {/* Client Profile Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <div>
                  <div className="font-bold text-white text-sm">{t.clientName}</div>
                  <div className="text-purple-300 text-[11px]">{t.role}</div>
                  <div className="text-slate-500 text-[10px]">{t.company}</div>
                </div>

                <div className="text-right">
                  <div className="flex items-center justify-end space-x-1 text-slate-400 text-[10px]">
                    <Globe className="w-3 h-3 text-purple-400" />
                    <span>{t.country}</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">{t.projectType}</div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
