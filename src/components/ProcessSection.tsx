"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Request a Quote",
    description: "Call or submit your details online for fast pricing and scheduling. We respond within hours, not days.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "We Clean Deep",
    description: "We treat problem areas and perform professional deep cleaning for carpet, tile, grout, or upholstery with truck-mounted equipment.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Enjoy the Results",
    description: "Your home looks cleaner, smells fresher, and feels restored. We walk through the results with you before we leave.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#0B1420] py-28 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[#2F80ED] text-xs font-bold uppercase tracking-widest mb-4">
            How It Works
          </p>
          <h2 className="font-[family-name:var(--font-manrope)] text-4xl md:text-5xl font-extrabold text-[#F8FAFC]">
            A Simple, Professional Process
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-[#2F80ED]/0 via-[#2F80ED]/30 to-[#2F80ED]/0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative z-10 w-16 h-16 mx-auto mb-8 rounded-2xl bg-[#111C2B] border border-white/[0.06] flex items-center justify-center text-[#2F80ED] glow-blue">
                {step.icon}
              </div>
              <span className="text-6xl font-extrabold text-[#2F80ED]/10 font-[family-name:var(--font-manrope)] absolute top-0 right-4 md:right-auto md:left-1/2 md:-translate-x-1/2 select-none">
                {step.number}
              </span>
              <h3 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[#F8FAFC] mb-3">
                {step.title}
              </h3>
              <p className="text-[#D6DEE8] leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
