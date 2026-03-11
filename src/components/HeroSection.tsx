"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { number: "27+", label: "Years Experience" },
  { number: "5K+", label: "Homes Cleaned" },
  { number: "100%", label: "Satisfaction Rate" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1420] via-[#0B1420]/90 to-[#0B1420]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1420] via-transparent to-[#0B1420]/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#2F80ED]/10 border border-[#2F80ED]/20 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#2F80ED] animate-pulse" />
            <span className="text-[#2F80ED] text-xs font-semibold uppercase tracking-widest">
              Owner-Operated &bull; 27 Years Experience
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-[family-name:var(--font-manrope)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#F8FAFC] leading-[0.95] tracking-tight mb-8"
          >
            Professional
            <br />
            Carpet & Tile
            <br />
            <span className="text-gradient">Cleaning</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-[#D6DEE8] mb-10 max-w-xl leading-relaxed"
          >
            Deep steam extraction, pet odor treatment, and expert restoration
            for homes across Auburn, Rocklin, Roseville, and the greater
            Sacramento area.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-20"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 bg-[#2F80ED] hover:bg-[#1E66C7] text-white uppercase font-bold text-sm tracking-wider rounded-xl px-8 py-4 transition-all duration-300 glow-blue hover:glow-blue-strong"
            >
              Get Free Quote
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="tel:+19168893335"
              className="inline-flex items-center gap-2 border border-white/20 text-white uppercase font-bold text-sm tracking-wider rounded-xl px-8 py-4 hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex gap-12"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="relative">
                {i > 0 && (
                  <div className="absolute -left-6 top-0 bottom-0 w-px bg-white/10" />
                )}
                <div className="text-3xl md:text-4xl font-extrabold text-[#F8FAFC] font-[family-name:var(--font-manrope)]">
                  {stat.number}
                </div>
                <div className="text-xs uppercase tracking-widest text-[#5E6B78] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B1420] to-transparent" />
    </section>
  );
}
