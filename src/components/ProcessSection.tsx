"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Request a Quote",
    description:
      "Call or submit your details online for fast pricing and scheduling.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "We Clean Deep",
    description:
      "We treat problem areas and perform professional deep cleaning for carpet, tile, grout, or upholstery.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Enjoy the Results",
    description:
      "Your home looks cleaner, smells fresher, and feels restored.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProcessSection() {
  return (
    <section className="bg-[#0B1420] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-[#F8FAFC] sm:text-4xl">
            A Simple, Professional Process
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative rounded-2xl border border-white/[0.08] bg-[#111C2B] p-10"
            >
              <span className="mb-4 block text-5xl font-bold text-[#2F80ED]">
                {step.number}
              </span>
              <div className="mb-4 text-[#2F80ED]">{step.icon}</div>
              <h3 className="mb-3 text-lg font-semibold text-[#F8FAFC]">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#D6DEE8]">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden h-px w-8 bg-[#2F80ED]/30 lg:block" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
