import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldAlert, Layers } from "lucide-react";
import { SERVICES_DATA, STUDIO_CAPABILITIES } from "@/data/services";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceJsonLd, FAQJsonLd } from "@/components/ui/JsonLd";
import { SITE_CONFIG } from "@/data/siteConfig";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const serviceSlugs = SERVICES_DATA.map((service) => ({ slug: service.slug }));
  const capabilitySlugs = STUDIO_CAPABILITIES.map((cap) => ({ slug: cap.slug }));
  return [...serviceSlugs, ...capabilitySlugs];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  const capability = STUDIO_CAPABILITIES.find((c) => c.slug === slug);

  const title = service ? service.title : capability ? capability.title : "Service";
  const summary = service ? service.summary : capability ? capability.tagline : SITE_CONFIG.description;

  if (!service && !capability) {
    return {
      title: `Service Not Found | ${SITE_CONFIG.name}`,
    };
  }

  return {
    title: `${title} | KRAXX Studio`,
    description: summary,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${title} | KRAXX Studio`,
      description: summary,
      url: `${SITE_CONFIG.url}/services/${slug}`,
      type: "website",
    },
  };
}

export default async function DedicatedServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  const capability = STUDIO_CAPABILITIES.find((c) => c.slug === slug);

  if (!service && !capability) {
    notFound();
  }

  // Fallback map if capability slug was selected
  const activeTitle = service ? service.title : capability?.title || "";
  const activeNumber = service ? service.number : capability?.number || "01";
  const activeBadge = service ? service.heroBadge : "CORE CAPABILITY PILLAR";
  const activeTagline = service ? service.tagline : capability?.tagline || "";
  const activeDescription = service ? service.description : capability?.tagline || "";
  const activeProblem = service ? service.problem : capability?.problemSolved || "";
  const activeSolution = service ? service.solution : `KRAXX deploys our ${activeTitle} system tailored for ${capability?.targetClients || "ambitious brands"}.`;
  const activeIncludes = service ? service.includes : capability?.subservices || [];
  const activeDeliverables = service ? service.deliverables : capability?.primaryDeliverables || [];
  const activeProcess = service ? service.process : [
    { step: "01", title: "Audit & Framing", desc: "Identify current bottlenecks and baseline metrics." },
    { step: "02", title: "System Strategy", desc: "Define deliverable architecture and implementation plan." },
    { step: "03", title: "Engineering & Design", desc: "Execute digital assets and technical setup." },
    { step: "04", title: "Launch & Measure", desc: "Deploy to production and monitor conversion data." }
  ];
  const activeFaqs = service ? service.faqs : [
    { question: "What is the typical timeframe for this capability?", answer: "Engagements range from 2-week quick-turn audits to ongoing 6-month growth retainers." },
    { question: "How do you measure project success?", answer: "We define clear metrics at initiation, focusing on conversion rates, lead pipeline velocity, and audience retention." }
  ];

  const serviceUrl = `${SITE_CONFIG.url}/services/${slug}`;

  return (
    <div className="pt-28 pb-16 bg-bg-dark min-h-screen">
      <ServiceJsonLd title={activeTitle} description={activeDescription} url={serviceUrl} />
      <FAQJsonLd faqs={activeFaqs} />

      {/* Navigation Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> BACK TO ALL CAPABILITIES
        </Link>
      </div>

      {/* Service Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="kx-card rounded-2xl p-8 sm:p-12 border border-white/10 bg-bg-card relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-2xl font-bold text-purple-400">{activeNumber}</span>
              <span className="nw-badge text-purple-300">
                {activeBadge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold text-white uppercase tracking-tight leading-tight">
              {activeTitle}
            </h1>

            <p className="text-base sm:text-xl text-purple-200 font-medium">
              {activeTagline}
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light max-w-2xl">
              {activeDescription}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-nw btn-nw-solid text-xs"
              >
                <span>[ INITIATE THIS CAPABILITY ]</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problem */}
          <div className="kx-card p-8 border border-rose-500/20 bg-rose-950/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <span className="font-mono text-xs text-rose-400 font-bold uppercase block tracking-wider">THE BUSINESS FRICTION</span>
            <h3 className="text-xl font-heading font-bold text-white">Why Most Brands Struggle Here</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">{activeProblem}</p>
          </div>

          {/* Solution */}
          <div className="kx-card p-8 border border-purple-500/30 bg-purple-950/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <span className="font-mono text-xs text-purple-300 font-bold uppercase block tracking-wider">THE KRAXX RESPONSE</span>
            <h3 className="text-xl font-heading font-bold text-white">Our Dedicated Operating Engine</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">{activeSolution}</p>
          </div>
        </div>
      </section>

      {/* What's Included & Deliverables */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="kx-card p-8 sm:p-12 border border-white/10 bg-bg-card rounded-2xl space-y-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white uppercase tracking-tight">
            WHAT&apos;S INCLUDED & DELIVERABLES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-mono text-xs text-purple-400 font-bold uppercase tracking-widest">
                FULL SCOPE CAPABILITIES
              </h3>
              <div className="space-y-2.5 font-mono text-xs">
                {activeIncludes.map((inc, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-slate-200 bg-bg-dark p-3 rounded-lg border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-xs text-purple-300 font-bold uppercase tracking-widest">
                CONCRETE DELIVERABLES
              </h3>
              <div className="space-y-2.5 font-mono text-xs">
                {activeDeliverables.map((del, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-slate-200 p-3 rounded-lg bg-bg-dark border border-white/10">
                    <Layers className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Service Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 space-y-8">
        <div className="space-y-2">
          <span className="font-mono text-xs text-purple-400 uppercase font-bold tracking-widest">EXECUTION PIPELINE</span>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white uppercase tracking-tight">
            HOW WE EXECUTE THIS CAPABILITY
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
          {activeProcess.map((p) => (
            <div key={p.step} className="kx-card p-6 border border-white/10 bg-bg-card space-y-2">
              <span className="text-xl font-bold text-purple-400">{p.step}</span>
              <h4 className="text-sm font-bold text-white uppercase">{p.title}</h4>
              <p className="text-slate-400 font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 space-y-6">
        <div className="space-y-2 text-center">
          <span className="font-mono text-xs text-purple-400 uppercase font-bold tracking-widest">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white uppercase tracking-tight">
            QUESTIONS ABOUT THIS CAPABILITY
          </h2>
        </div>

        <FAQAccordion items={activeFaqs} />
      </section>

      <CTASection />
    </div>
  );
}

