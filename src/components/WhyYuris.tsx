"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reasons = [
  {
    number: "01",
    title: "Owner-Operated",
    description: "You work directly with Yuri — an experienced professional who personally handles every job. No subcontractors. No runaround.",
  },
  {
    number: "02",
    title: "27 Years in the Field",
    description: "Nearly three decades of hands-on carpet and tile work across the greater Sacramento area. We've seen it all.",
  },
  {
    number: "03",
    title: "Truck-Mounted Power",
    description: "Industrial-grade hot water extraction that removes what rental machines and vacuum cleaners leave behind.",
  },
  {
    number: "04",
    title: "Safe for Families & Pets",
    description: "pH-balanced, fiber-specific chemistry. No harsh residue. Just clean, safe floors for your household.",
  },
];

export default function WhyYuris() {
  return (
    <section className="bg-[#0B1420] py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left - Sticky heading + image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-[#2F80ED] text-xs font-bold uppercase tracking-widest mb-4">
              Why Choose Us
            </p>
            <h2 className="font-[family-name:var(--font-manrope)] text-4xl md:text-5xl font-extrabold text-[#F8FAFC] leading-tight mb-6">
              Why Homeowners
              <br />
              Choose Yuri&apos;s
            </h2>
            <p className="text-[#D6DEE8] text-lg leading-relaxed mb-8 max-w-md">
              With 27 years of hands-on experience, we focus on honest service,
              visible results, and dependable work that homeowners, landlords,
              and property managers count on.
            </p>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/yuri-portrait.png"
                alt="Yuri - Owner and master carpet cleaning professional"
                width={500}
                height={400}
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1420]/60 to-transparent" />
            </div>
          </motion.div>

          {/* Right - Numbered reasons */}
          <div className="space-y-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-[#111C2B] rounded-2xl p-8 border border-white/[0.06] hover:border-[#2F80ED]/20 transition-all duration-500"
              >
                <div className="flex gap-6">
                  <span className="text-5xl font-extrabold text-[#2F80ED]/20 font-[family-name:var(--font-manrope)] select-none shrink-0">
                    {reason.number}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[#F8FAFC] mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-[#D6DEE8] leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
