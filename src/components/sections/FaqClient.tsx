"use client";

import { useState } from "react";
import { Search, Sparkles } from "lucide-react";
import { MAIN_FAQS } from "@/data/faqs";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FAQJsonLd } from "@/components/ui/JsonLd";
import { CTASection } from "@/components/sections/CTASection";

const FAQ_CATEGORIES = ["All", "General", "Services", "Onboarding", "Pricing"];

export function FaqClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = MAIN_FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesQuery =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="pt-28 pb-16 bg-slate-950 min-h-screen">
      <FAQJsonLd faqs={MAIN_FAQS} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-6">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>KNOWLEDGE BASE & CLIENT GUIDANCE</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
          FREQUENTLY ASKED <br />
          <span className="text-gradient-blue">QUESTIONS.</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Clear answers about studio workflows, service scope, onboarding timelines, and project proposals.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mt-8 relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search FAQs about pricing, platforms, onboarding..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors shadow-inner"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {FAQ_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                  isSelected
                    ? "bg-indigo-600 text-white border border-indigo-400 shadow-md shadow-indigo-600/30 font-bold"
                    : "bg-white/5 text-slate-300 border border-white/10 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Accordion Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 text-slate-400 font-mono text-sm">
            No FAQs matching &quot;{searchQuery}&quot;. Try selecting another category or resetting search.
          </div>
        ) : (
          <FAQAccordion items={filteredFaqs} />
        )}
      </section>

      <CTASection />
    </div>
  );
}
