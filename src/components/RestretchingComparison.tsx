"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const problems = [
  "Loose, rippling carpet",
  "Trip hazards for family",
  "Permanent wear and damage",
];

const solutions = [
  "27 years of tensioning science",
  "Power-Stretching (not knee-kicking)",
  "5-year guarantee",
];

export default function RestretchingComparison() {
  return (
    <section className="bg-[#0B1420] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-0 overflow-hidden rounded-2xl border border-white/[0.08] shadow-lg md:grid-cols-2">
          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#111C2B] p-10 md:p-12"
            style={{ background: "linear-gradient(135deg, #111C2B 0%, #1a1520 100%)" }}
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
              <svg
                className="h-6 w-6 text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <h3 className="mb-6 text-2xl font-bold text-[#F8FAFC]">
              The Problem
            </h3>
            <ul className="space-y-4">
              {problems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-[#D6DEE8]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* The Yuri Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#111C2B] p-10 md:p-12"
            style={{ background: "linear-gradient(135deg, #111C2B 0%, #0f1a2d 100%)" }}
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#2F80ED]/10">
              <svg
                className="h-6 w-6 text-[#2F80ED]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mb-6 text-2xl font-bold text-[#F8FAFC]">
              The Yuri Solution
            </h3>
            <ul className="space-y-4">
              {solutions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#2F80ED]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[#D6DEE8]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-[#2F80ED] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#1E66C7] hover:shadow-xl"
          >
            Save Thousands Over Replacement &mdash; Get a Repair Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
