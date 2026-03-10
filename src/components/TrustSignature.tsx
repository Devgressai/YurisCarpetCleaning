"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const trustPoints = [
  {
    title: "27 Years of Hands-on Expertise",
    description:
      "No subcontractors. The man who owns the company is the man on the tools.",
    icon: (
      <svg
        className="h-8 w-8 text-[#0076CE]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "The Precision Guarantee",
    description:
      "From surgical carpet patches to power-stretched restoration, every job is treated as a masterwork.",
    icon: (
      <svg
        className="h-8 w-8 text-[#0076CE]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Local Accountability",
    description:
      "We live and work in the same corridors we serve\u2014from the Auburn foothills to Downtown Sacramento.",
    icon: (
      <svg
        className="h-8 w-8 text-[#0076CE]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function TrustSignature() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center text-3xl font-bold text-[#052C52] sm:text-4xl"
          >
            Your home deserves a master, not a trainee.
          </motion.h2>

          {/* Yuri portrait + 27 YEARS seal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto mt-10 flex flex-col items-center"
          >
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-[#0076CE] shadow-lg">
              <Image
                src="/images/yuri-portrait.png"
                alt="Yuri, owner-operator of Yuri's Carpet Cleaning with 27 years of experience"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-3 text-center">
              <span className="block text-2xl font-extrabold leading-none text-[#0076CE]">
                27
              </span>
              <span className="block text-[0.65rem] font-bold uppercase tracking-widest text-[#052C52]">
                Years
              </span>
            </div>
          </motion.div>

          {/* Trust Points */}
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {trustPoints.map((point, i) => (
              <motion.div
                key={point.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="rounded-2xl bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#0076CE]/10">
                  {point.icon}
                </div>
                <h3 className="mb-3 text-lg font-bold text-[#052C52]">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
