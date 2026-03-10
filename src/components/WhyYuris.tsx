"use client";

import { motion } from "framer-motion";

const proofBlocks = [
  {
    title: "27 Years Experience",
    description:
      "Decades of professional carpet and tile work across the greater Sacramento area.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
      </svg>
    ),
  },
  {
    title: "Owner-Operated Service",
    description:
      "You work directly with an experienced professional who cares about the final result.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
      </svg>
    ),
  },
  {
    title: "Powerful Deep Cleaning",
    description:
      "Truck-mounted hot water extraction that removes what vacuums and rental machines leave behind.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Safe Cleaning Solutions",
    description:
      "pH-balanced, fiber-specific chemistry that\u2019s safe for families and pets.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const } },
};

export default function WhyYuris() {
  return (
    <section className="bg-[#0B1420] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left side */}
        <motion.div
          className="lg:sticky lg:top-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-[family-name:var(--font-manrope)] text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-6">
            Why Homeowners Choose Yuri&apos;s
          </h2>
          <p className="text-[#D6DEE8] text-lg leading-relaxed max-w-md">
            With 27 years of hands-on experience, Yuri&apos;s Carpet Cleaning
            focuses on honest service, visible results, and dependable work that
            homeowners, landlords, and property managers can count on.
          </p>
        </motion.div>

        {/* Right side — proof blocks in 2x2 grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {proofBlocks.map((block) => (
            <motion.div
              key={block.title}
              variants={itemVariants}
              className="bg-[#111C2B] rounded-xl p-6 border border-[rgba(255,255,255,0.08)]"
            >
              <div className="w-11 h-11 rounded-full bg-[#2F80ED]/15 flex items-center justify-center text-[#2F80ED] mb-4">
                {block.icon}
              </div>
              <h3 className="font-bold text-[#F8FAFC] text-lg mb-1">
                {block.title}
              </h3>
              <p className="text-[#D6DEE8] text-sm leading-relaxed">
                {block.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
