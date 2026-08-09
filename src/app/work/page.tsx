import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles, TrendingUp, Clock } from "lucide-react";
import { CASE_STUDIES } from "@/data/caseStudies";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Work & Case Studies — Verified Results",
  description: "Explore KRAXX studio portfolio, including our verified 0 to 50,000+ Instagram growth case study.",
};

export default function WorkPage() {
  const mainCase = CASE_STUDIES[0];
  const placeholders = CASE_STUDIES.slice(1);

  return (
    <div className="pt-28 pb-16 bg-slate-950 min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-6">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>PORTFOLIO & RESULTS SHOWCASE</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight">
          WORK THAT MOVES <br />
          <span className="text-gradient-blue">THE NUMBERS.</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          We focus on verified data and strategic execution. Below is our featured organic growth case study along with our studio client frameworks.
        </p>
      </section>

      {/* Featured Verified Case Study */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="glass-card rounded-3xl p-8 sm:p-14 border border-indigo-500/30 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                  {mainCase.number}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED ORGANIC RESULT
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                {mainCase.title}
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                {mainCase.subtitle}
              </p>

              {/* Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-white/10">
                {mainCase.metrics.map((m, idx) => (
                  <div key={idx}>
                    <p className="text-[10px] font-mono uppercase text-slate-400">{m.label}</p>
                    <p className="text-lg font-black text-white mt-0.5">{m.value}</p>
                  </div>
                ))}
              </div>

              <Link
                href={`/work/${mainCase.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 transition-colors w-fit shadow-lg shadow-indigo-600/30"
              >
                <span>READ FULL CASE STUDY BREAKDOWN</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Column: Key Takeaways */}
            <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-white/10 flex flex-col gap-4">
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" /> KEY STRATEGIC TAKEAWAYS
              </span>
              <ul className="space-y-3 text-xs text-slate-300">
                {mainCase.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-2 p-3 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Studio Frameworks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-xs font-mono tracking-widest text-slate-400 uppercase font-semibold mb-6">
          ADDITIONAL CLIENT FRAMEWORKS & PLACEHOLDERS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {placeholders.map((cs) => (
            <div key={cs.id} className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-400 bg-white/5 border border-white/10">
                    {cs.number}
                  </span>
                  <span className="text-[10px] font-mono text-indigo-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> STUDIO FRAMEWORK
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{cs.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{cs.subtitle}</p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>{cs.category}</span>
                <span>[Future Client Showcase]</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
