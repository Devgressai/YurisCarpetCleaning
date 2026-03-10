"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const benefits = [
  "Deep steam extraction",
  "Pet odor and stain treatment",
  "Owner-operated service",
  "Fast quotes and reliable scheduling",
];

export default function HeroSection() {
  return (
    <section className="bg-[#0B1420] min-h-screen flex items-center pt-24 pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column — Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-[#2F80ED] uppercase tracking-widest text-xs font-semibold mb-6">
            Owner-Operated &bull; 27 Years Experience
          </p>

          <h1 className="font-[family-name:var(--font-manrope)] text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#F8FAFC] leading-[1.08] mb-6">
            Professional Carpet &amp; Tile Cleaning Done Right
          </h1>

          <p className="text-lg text-[#D6DEE8] mb-8 max-w-xl leading-relaxed">
            Yuri&apos;s Carpet Cleaning delivers professional carpet, tile,
            grout, and pet odor treatment across Auburn, Rocklin, Roseville,
            Lincoln, Loomis, Granite Bay, Folsom, and nearby areas.
          </p>

          <ul className="space-y-3 mb-10">
            {benefits.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#D6DEE8]">
                <svg
                  className="w-5 h-5 text-[#2F80ED] flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block bg-[#2F80ED] hover:bg-[#1E66C7] text-white uppercase font-semibold text-sm tracking-wider rounded-xl px-8 py-4 transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+19168893335"
              className="inline-block border border-white text-white uppercase font-semibold text-sm tracking-wider rounded-xl px-8 py-4 hover:bg-white/10 transition-colors"
            >
              Call Now
            </a>
          </div>
        </motion.div>

        {/* Right Column — Video */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/hero-background.mp4" type="video/mp4" />
            </video>

            {/* Floating trust card */}
            <div className="absolute bottom-4 right-4 left-4 sm:left-auto sm:max-w-sm bg-[#111C2B]/80 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-xl px-5 py-4">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#F8FAFC] font-medium">
                <span>27+ Years Experience</span>
                <span className="hidden sm:inline text-[#5E6B78]">|</span>
                <span>Owner Operated</span>
                <span className="hidden sm:inline text-[#5E6B78]">|</span>
                <span>Local Trusted Service</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
