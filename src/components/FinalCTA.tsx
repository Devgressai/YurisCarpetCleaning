"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative bg-[#111C2B] py-28 md:py-36 overflow-hidden">
      {/* Subtle glow orb in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2F80ED]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[family-name:var(--font-manrope)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] leading-tight mb-6">
            Ready for Cleaner Carpet,
            <br />
            Tile, and Grout?
          </h2>
          <p className="text-xl text-[#D6DEE8] mb-10 max-w-2xl mx-auto">
            Get fast, honest service from an experienced owner-operator
            serving Auburn and surrounding areas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#2F80ED] hover:bg-[#1E66C7] text-white uppercase font-bold text-sm tracking-wider rounded-xl px-10 py-5 transition-all duration-300 glow-blue hover:glow-blue-strong"
            >
              Get Free Quote
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="tel:+19168893335"
              className="inline-flex items-center gap-2 border border-white/20 text-white uppercase font-bold text-sm tracking-wider rounded-xl px-10 py-5 hover:bg-white/5 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
