import { HeroSection } from "@/components/sections/HeroSection";
import { Marquee } from "@/components/ui/Marquee";
import { StatsSection } from "@/components/sections/StatsSection";
import { InteractiveServices } from "@/components/sections/InteractiveServices";
import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { CTASection } from "@/components/sections/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Marketing & Digital Growth Agency",
  description:
    "KRAXX Studio helps brands grow through social media management, content strategy, community management, personal branding, and paid social.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KRAXX Studio | Social Media Marketing & Digital Growth",
    description:
      "Social media marketing, content strategy, community management, personal branding, and digital growth by KRAXX Studio.",
    url: "https://kraxxstudio.com/",
    type: "website",
  },
}; 

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <StatsSection />
      <InteractiveServices />
      <FeaturedWorkSection />
      
      {/* Before / After Slider Section */}
      <section className="py-24 sm:py-32 bg-slate-950 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BeforeAfterSlider />
        </div>
      </section>

      <ProcessSection />
      <WhyUsSection />
      <BlogPreviewSection />
      <CTASection />
    </>
  );
}
