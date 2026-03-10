"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#052C52]">
      {/* Background placeholder with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#052C52] via-[#052C52]/80 to-[#052C52]/40" />
      <div className="absolute inset-0 bg-[url('/placeholder-hero.jpg')] bg-cover bg-center opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#0076CE]"
        >
          Sacramento &amp; Placer County&apos;s Trusted Carpet Professional
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          27 Years of Master
          <br />
          <span className="text-[#0076CE]">Carpet Care</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl"
        >
          Owner-operated by Yuri himself — no subcontractors, no shortcuts.
          Every job gets the personal attention and master-level craftsmanship
          your carpets deserve.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="tel:9165550127"
            className="inline-flex items-center gap-2 rounded-full bg-[#0076CE] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#005fa3] hover:shadow-xl"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call Now
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-[#052C52]"
          >
            Get a Free Quote
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12"
        >
          {[
            { icon: "🏆", label: "27 Years Experience" },
            { icon: "👤", label: "Owner-Operated" },
            { icon: "✓", label: "100% Satisfaction Guaranteed" },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-3">
              <span className="text-2xl">{badge.icon}</span>
              <span className="text-sm font-medium tracking-wide text-white/90">
                {badge.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
