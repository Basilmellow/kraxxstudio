import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 bg-slate-950 border-t border-white/10 relative overflow-hidden kx-field">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full kx-card border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-6">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>PROJECT INITIATION</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight max-w-3xl leading-tight">
          HAVE SOMETHING <br />
          <span className="text-gradient glow-mark">WORTH BUILDING?</span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl font-medium leading-relaxed">
          Tell us what you're trying to achieve. We'll audit your current digital presence and figure out the exact next step.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/contact"
            className="kx-btn-primary w-full sm:w-auto justify-center text-xs sm:text-sm uppercase tracking-wider"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/pricing"
            className="kx-btn-secondary w-full sm:w-auto justify-center text-xs sm:text-sm uppercase tracking-wider"
          >
            <span>REQUEST A PROPOSAL</span>
          </Link>
        </div>

        <p className="mt-8 text-xs font-mono text-slate-500">
          Typically responds within 24 business hours. No spam, no high-pressure pitch.
        </p>
      </div>
    </section>
  );
}
