"use client";

import { Code2, ArrowUpRight, ShieldCheck, Terminal } from "lucide-react";
import Link from "next/link";

export function FounderTrustSection() {
  return (
    <section className="py-24 bg-bg-surface/50 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="kx-card p-8 sm:p-12 border border-white/10 bg-bg-card rounded-2xl relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-6">
              <div className="eyebrow flex items-center space-x-2">
                <Terminal className="h-4 w-4 text-purple-400" />
                <span>FOUNDER & TECHNICAL LEADERSHIP</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight uppercase">
                BUILT BY PEOPLE WHO <br />
                <span className="text-gradient">ACTUALLY BUILD.</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                KRAXX Studio was founded to counter the generic agency model—where polished sales decks are handed off to outsourced interns. We operate as an engineering and creative technology unit, combining strategy, web architecture, visual design, and data analytics.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs pt-2">
                <div className="p-4 rounded-xl bg-bg-dark border border-white/10 space-y-1">
                  <span className="text-purple-400 font-bold uppercase block text-[10px]">FOUNDER & LEADERSHIP:</span>
                  <p className="text-white font-bold text-sm">Mohamed Basil</p>
                  <p className="text-slate-400 text-[11px]">Founder / Digital Strategist & Technology Lead</p>
                </div>

                <div className="p-4 rounded-xl bg-bg-dark border border-white/10 space-y-1">
                  <span className="text-purple-400 font-bold uppercase block text-[10px]">ECOSYSTEM SYNERGY:</span>
                  <p className="text-white font-bold text-sm">KRAXX Ecosystem</p>
                  <p className="text-slate-400 text-[11px]">KRAXXSEC (Security) + KRAXX STUDIO (Growth & Web)</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-2">
                <Link href="/about" className="btn-nw btn-nw-ghost text-xs">
                  <span>[ READ STUDIO PHILOSOPHY ]</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://github.com/Basilmellow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <Code2 className="w-4 h-4 text-purple-400" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

            {/* Right Badge Box */}
            <div className="lg:col-span-4 kx-card p-6 rounded-xl bg-bg-dark border border-white/10 space-y-4 font-mono text-xs">
              <div className="flex items-center space-x-2 text-purple-400 border-b border-white/10 pb-3 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>NO MARKETING GIMMICKRY</span>
              </div>

              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">›</span>
                  <span>Direct founder involvement on core strategy & web architecture.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">›</span>
                  <span>Data-backed analytics over subjective opinions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">›</span>
                  <span>Zero fake certifications, awards, or inflated numbers.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
