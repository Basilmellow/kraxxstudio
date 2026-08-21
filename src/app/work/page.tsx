import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Folder, TrendingUp, Sparkles } from "lucide-react";
import { CASE_STUDIES } from "@/data/caseStudies";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Work & Case Studies | KRAXX Studio",
  description: "Explore KRAXX Studio verified work and conceptual business frameworks.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work & Case Studies | KRAXX Studio",
    description: "Explore KRAXX Studio verified work and conceptual business frameworks.",
    url: "https://kraxxstudio.com/work",
    type: "website",
  },
};

export default function WorkPage() {
  const mainCase = CASE_STUDIES[0];
  const conceptCases = CASE_STUDIES.slice(1);

  return (
    <div className="pt-28 pb-16 bg-bg-dark min-h-screen">
      
      {/* Header Viewport */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-6">
        <div className="eyebrow inline-flex items-center space-x-2">
          <Folder className="w-3.5 h-3.5 text-purple-400" />
          <span>PORTFOLIO & CASE STUDIES SHOWCASE</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-bold text-white uppercase tracking-tight">
          WORK THAT MOVES <br />
          <span className="text-gradient">THE NUMBERS.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          We distinguish verified client outcomes from studio concept frameworks. Below is our primary verified case study and conceptual project models.
        </p>
      </section>

      {/* Featured Verified Case Study */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="kx-card p-8 sm:p-12 border border-white/10 bg-bg-surface/90 rounded-2xl relative overflow-hidden shadow-2xl space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-purple-400">
                  {mainCase.number}
                </span>
                <span className="nw-badge text-emerald-400 border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED WORK
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white leading-tight">
                {mainCase.title}
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {mainCase.subtitle}
              </p>

              {/* Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-white/10 font-mono">
                {mainCase.metrics.map((m, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-[10px] uppercase text-slate-400 block">{m.label}</span>
                    <span className="text-base font-bold text-white block">{m.value}</span>
                  </div>
                ))}
              </div>

              <Link
                href={`/work/${mainCase.slug}`}
                className="btn-nw btn-nw-solid text-xs inline-flex"
              >
                <span>[ READ FULL CASE STUDY BREAKDOWN ]</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Column: Key Takeaways */}
            <div className="lg:col-span-5 kx-card p-6 rounded-xl bg-bg-dark border border-white/10 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-purple-400 font-bold flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" /> KEY STRATEGIC TAKEAWAYS
              </span>
              <ul className="space-y-3 font-mono text-xs text-slate-300">
                {mainCase.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-2 p-3 rounded-lg bg-bg-card border border-white/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Additional Studio Concept Frameworks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div className="font-mono text-xs tracking-widest text-slate-400 uppercase font-bold">
          [ CONCEPTUAL PROJECT FRAMEWORKS ]
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conceptCases.map((cs) => (
            <div key={cs.id} className="kx-card p-8 border border-white/10 bg-bg-card space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="font-bold text-purple-400">
                    {cs.number}
                  </span>
                  <span className="nw-badge text-amber-300 border-amber-500/30">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" /> STUDIO CONCEPT
                  </span>
                </div>
                <h4 className="text-xl font-heading font-bold text-white">{cs.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">{cs.subtitle}</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">{cs.category}</span>
                <span className="text-purple-400">[CONCEPTUAL FRAMEWORK]</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}

