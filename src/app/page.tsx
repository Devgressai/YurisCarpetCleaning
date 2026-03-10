import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServiceBentoGrid from "@/components/ServiceBentoGrid";
import WhyYuris from "@/components/WhyYuris";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ProcessSection from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialCard";
import ServiceAreasGrid from "@/components/ServiceAreasGrid";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title:
    "Yuri's Carpet Cleaning | Professional Carpet & Tile Cleaning Done Right",
  description:
    "27 years of owner-operated carpet cleaning, tile & grout restoration, and pet odor treatment serving Auburn, Rocklin, Roseville, and the greater Sacramento area.",
};

export default function Home() {
  return (
    <>
      {/* 1. Header is in layout.tsx */}
      {/* 2. Hero */}
      <HeroSection />

      {/* 3. Trust Bar */}
      <TrustBar />

      {/* 4. Services */}
      <ServiceBentoGrid />

      {/* 5. Why Yuri's */}
      <WhyYuris />

      {/* 6. Before / After */}
      <BeforeAfterSlider />

      {/* 7. Process */}
      <ProcessSection />

      {/* 8. Reviews */}
      <TestimonialsSection />

      {/* 9. Service Areas */}
      <ServiceAreasGrid />

      {/* 10. FAQ */}
      <FAQ />

      {/* 11. Final CTA */}
      <FinalCTA />

      {/* 12. Footer is in layout.tsx */}

      {/* Contact form (accessible via #contact links) */}
      <ContactForm />
    </>
  );
}
