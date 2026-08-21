import { HeroSection } from "@/components/sections/HeroSection";
import { Marquee } from "@/components/ui/Marquee";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProblemSolutionMatrix } from "@/components/sections/ProblemSolutionMatrix";
import { InteractiveServices } from "@/components/sections/InteractiveServices";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustCredibilitySection } from "@/components/sections/TrustCredibilitySection";
import { FounderTrustSection } from "@/components/sections/FounderTrustSection";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { CTASection } from "@/components/sections/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KRAXX Studio | International Digital Growth & Creative Technology Studio",
  description:
    "We build the digital presence behind ambitious brands. Digital strategy, high-performance web experiences, brand identity, and content systems.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KRAXX Studio | International Digital Growth & Creative Studio",
    description:
      "We build the digital presence behind ambitious brands. Digital strategy, high-performance web experiences, brand identity, and content systems.",
    url: "https://kraxxstudio.com/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <ProblemSection />
      <ProblemSolutionMatrix />
      <InteractiveServices />
      <ProcessSection />
      <FeaturedWorkSection />
      <TrustCredibilitySection />
      <TestimonialsSection />
      <FounderTrustSection />
      <BlogPreviewSection />
      <CTASection />
    </>
  );
}

