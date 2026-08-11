import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Social Media Marketing Services | KRAXX Studio",
  description:
    "Explore KRAXX Studio's social media marketing services, including social media management, content strategy, content creation, community management, personal branding, and paid social campaigns.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Social Media Marketing Services | KRAXX Studio",
    description:
      "Social media management, content strategy, content creation, community management, personal branding, and paid social services.",
    url: "https://kraxxstudio.com/services",
    type: "website",
  },
};
export default function ServicesPage() {
  return (
    <div className="pt-28 pb-16 bg-slate-950 min-h-screen">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-6">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>STUDIO CAPABILITIES MATRIX</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight">
          EVERYTHING YOUR DIGITAL PRESENCE <br />
          <span className="text-gradient-blue">NEEDS TO SCALE.</span>
        </h1>
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          We combine strategic positioning, editorial visual standards, active community moderation, and paid campaign amplification under one cohesive studio engine.
        </p>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16">
        {SERVICES_DATA.map((service, index) => (
          <div
            key={service.id}
            id={service.slug}
            className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-black font-mono text-indigo-400">
                    {service.number}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/30">
                    {service.heroBadge}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  {service.title}
                </h2>

                <p className="text-sm font-semibold text-indigo-200">
                  {service.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/30"
                  >
                    <span>DEDICATED LANDING PAGE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Scope & Deliverables */}
              <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col gap-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold mb-3">
                    WHAT IS INCLUDED
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.includes.map((inc, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-2">
                    SUPPORTED PLATFORMS
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.platforms.map((plat, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-3 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/5"
                      >
                        {plat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <CTASection />
    </div>
  );
}
