import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServiceBentoGrid from "@/components/ServiceBentoGrid";
import ProcessSection from "@/components/ProcessSection";
import TrustSignature from "@/components/TrustSignature";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import RestretchingComparison from "@/components/RestretchingComparison";
import CostComparison from "@/components/CostComparison";
import { TestimonialsSection } from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";
import { siteMetadata } from "@/data/seo-config";

export const metadata: Metadata = {
  title: siteMetadata.defaultTitle,
  description: siteMetadata.defaultDescription,
};

export default function Home() {
  return (
    <>
      <HeroSection />

      <ServiceBentoGrid />

      <ProcessSection />

      <TrustSignature />

      {/* Before & After Transformation */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0076CE]">
              Real Results
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#052C52] sm:text-4xl">
              See the Transformation
            </h2>
          </div>
          <BeforeAfterSlider />
        </div>
      </section>

      <RestretchingComparison />

      <CostComparison />

      <TestimonialsSection />

      <ContactForm />
    </>
  );
}
