"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, Sparkles, Clock, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogPosts";
import { CTASection } from "@/components/sections/CTASection";

const CATEGORIES = ["All", "Strategy", "Social Media", "Content Creation", "Community", "Personal Brand", "Analytics"];

export function BlogHubClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesQuery =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="pt-28 pb-16 bg-slate-950 min-h-screen">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-6">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>EDITORIAL RESEARCH & STRATEGY</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight">
          THE CONTENT LAB
        </h1>
        <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
          Ideas, strategies and insights for ambitious brands navigating the modern digital landscape.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mt-8 relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search strategy guides, platform breakdowns, or ROI frameworks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors shadow-inner"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {CATEGORIES.map((cat) => {
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

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 text-slate-400 font-mono text-sm">
            No articles found matching "{searchQuery}". Try selecting a different category.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between group hover:border-indigo-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                      {post.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-indigo-400 group-hover:text-white transition-colors">
                  <span>READ FULL ARTICLE</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <CTASection />
    </div>
  );
}
