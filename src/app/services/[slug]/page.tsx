import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldAlert, Sparkles, Target, Layers } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceJsonLd, FAQJsonLd } from "@/components/ui/JsonLd";
import { SITE_CONFIG } from "@/data/siteConfig";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: `Service Not Found | ${SITE_CONFIG.name}`,
    };
  }

  return {
    title: `${service.title} Services | ${SITE_CONFIG.name}`,
    description: service.summary,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} Services | ${SITE_CONFIG.fullName}`,
      description: service.summary,
      url: `${SITE_CONFIG.url}/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function DedicatedServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceUrl = `${SITE_CONFIG.url}/services/${service.slug}`;

  return (
    <div className="pt-28 pb-16 bg-slate-950 min-h-screen">
      <ServiceJsonLd title={service.title} description={service.summary} url={serviceUrl} />
      <FAQJsonLd faqs={service.faqs} />

      {/* Navigation Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> BACK TO ALL SERVICES
        </Link>
      </div>

      {/* Service Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="glass-card rounded-3xl p-8 sm:p-14 border border-indigo-500/30 relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-black font-mono text-indigo-400">{service.number}</span>
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                {service.heroBadge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="mt-4 text-base sm:text-xl text-indigo-200 font-medium">
              {service.tagline}
            </p>

            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              {service.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:shadow-indigo-600/40 shadow-lg transition-all"
              >
                <span>REQUEST PROPOSAL FOR THIS SERVICE</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem */}
          <div className="glass-card p-8 rounded-3xl border border-red-500/20 bg-red-950/10">
            <div className="w-10 h-10 rounded-2xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 mb-4">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-red-400 font-bold uppercase">THE CORE PROBLEM</span>
            <h3 className="text-xl font-bold text-white mt-1 mb-3">Why Most Brands Struggle Here</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{service.problem}</p>
          </div>

          {/* Solution */}
          <div className="glass-card p-8 rounded-3xl border border-emerald-500/20 bg-emerald-950/10">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase">THE KRAXX SOLUTION</span>
            <h3 className="text-xl font-bold text-white mt-1 mb-3">Our Dedicated Operating Engine</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{service.solution}</p>
          </div>
        </div>
      </section>

      {/* What's Included & Deliverables */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10">
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-8">
            WHAT'S INCLUDED & DELIVERABLES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xs font-mono text-indigo-400 font-bold uppercase mb-4 tracking-widest">
                FULL SCOPE CAPABILITIES
              </h3>
              <div className="flex flex-col gap-3">
                {service.includes.map((inc, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono text-cyan-400 font-bold uppercase mb-4 tracking-widest">
                CONCRETE DELIVERABLES
              </h3>
              <div className="flex flex-col gap-3">
                {service.deliverables.map((del, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 p-3 rounded-xl bg-white/5 border border-white/5">
                    <Layers className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Service Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-indigo-400 uppercase font-semibold">SERVICE PROCESS</span>
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mt-1">
            HOW WE EXECUTE THIS SERVICE
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((p) => (
            <div key={p.step} className="glass-card p-6 rounded-2xl border border-white/10">
              <span className="text-2xl font-mono font-black text-indigo-400">{p.step}</span>
              <h4 className="text-base font-bold text-white mt-2 mb-1">{p.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-10">
          <span className="text-xs font-mono text-indigo-400 uppercase font-semibold">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-1">
            QUESTIONS ABOUT THIS SERVICE
          </h2>
        </div>

        <FAQAccordion items={service.faqs} />
      </section>

      <CTASection />
    </div>
  );
}
