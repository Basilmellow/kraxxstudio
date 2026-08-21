import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Layers, CheckCircle2 } from "lucide-react";
import { STUDIO_CAPABILITIES, SERVICES_DATA } from "@/data/services";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Digital Growth & Creative Capabilities | KRAXX Studio",
  description:
    "Explore KRAXX Studio's core capability pillars: Digital Strategy & Audit, Web & Digital UX Experience, Brand & Visual Systems, Content Engine & Social Operations, Personal Brand & Executive Positioning, Growth & Technical SEO.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Digital Growth & Creative Capabilities | KRAXX Studio",
    description:
      "Digital strategy, web application engineering, visual identity systems, content engines, executive positioning, and technical SEO by KRAXX Studio.",
    url: "https://kraxxstudio.com/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-16 bg-bg-dark min-h-screen">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <div className="eyebrow inline-flex items-center space-x-2">
          <Layers className="w-3.5 h-3.5 text-purple-400" />
          <span>KRAXX STUDIO // CAPABILITIES & SERVICES MATRIX</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-bold text-white uppercase tracking-tight">
          DIGITAL GROWTH + CREATIVE + WEB + <br />
          <span className="text-gradient">BRANDING CAPABILITIES</span>
        </h1>
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
          We combine strategic positioning, high-performance Next.js engineering, visual design systems, and audience growth under one cohesive studio engine.
        </p>
      </section>

      {/* 6 Capability Pillars Overview Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <div className="space-y-2 border-b border-white/10 pb-4">
          <span className="font-mono text-xs font-bold text-purple-400 uppercase tracking-widest">
            [ SECTION 01 // CORE CAPABILITY PILLARS ]
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white uppercase">
            OUR 6 CORE CAPABILITY PILLARS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STUDIO_CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              className="kx-card p-8 border border-white/10 bg-bg-card flex flex-col justify-between space-y-6 group hover:border-purple-500/50"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs">
                  <span className="font-bold text-purple-400">{cap.number}</span>
                  <span className="text-slate-500 uppercase">CAPABILITY PILLAR</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-purple-300 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {cap.tagline}
                </p>

                <div className="space-y-1 pt-2">
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block">INCLUDES:</span>
                  <div className="flex flex-wrap gap-1 font-mono text-[11px]">
                    {cap.subservices.slice(0, 3).map((sub, i) => (
                      <span key={i} className="px-2 py-1 rounded bg-bg-dark border border-white/10 text-slate-300">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href={`/services/${cap.slug}`}
                className="btn-nw btn-nw-ghost text-xs justify-center"
              >
                <span>[ VIEW CAPABILITY DETAILS ]</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Legacy & Specialized Service Modules */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <div className="space-y-2 border-b border-white/10 pb-4">
          <span className="font-mono text-xs font-bold text-purple-400 uppercase tracking-widest">
            [ SECTION 02 // SPECIALIZED SERVICE MODULES ]
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white uppercase">
            DETAILED SERVICE SCOPE & DELIVERABLES
          </h2>
        </div>

        <div className="space-y-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={service.slug}
              className="kx-card p-8 sm:p-10 border border-white/10 bg-bg-card rounded-2xl relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xl font-bold text-purple-400">
                      {service.number}
                    </span>
                    <span className="nw-badge text-purple-300">
                      {service.heroBadge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="text-xs font-mono text-purple-300">
                    {service.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {service.description}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="btn-nw btn-nw-solid text-xs inline-flex"
                    >
                      <span>[ DEDICATED SERVICE PAGE ]</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Column: Scope & Deliverables */}
                <div className="lg:col-span-7 kx-card p-6 rounded-xl bg-bg-dark border border-white/10 space-y-6">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-purple-400 font-bold mb-3">
                      WHAT IS INCLUDED IN SCOPE
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                      {service.includes.map((inc, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">
                      SUPPORTED PLATFORMS & CHANNELS
                    </h4>
                    <div className="flex flex-wrap gap-2 font-mono text-[11px]">
                      {service.platforms.map((plat, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded bg-bg-card text-slate-300 border border-white/10"
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
        </div>
      </section>

      <CTASection />
    </div>
  );
}

