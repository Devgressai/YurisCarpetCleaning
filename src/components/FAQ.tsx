"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How long does carpet cleaning take?",
    a: "Timing depends on the number of rooms and condition of the carpet, but most appointments can be completed in a few hours.",
  },
  {
    q: "How long does it take for carpet to dry?",
    a: "Dry times vary, but most carpets dry within several hours depending on airflow, humidity, and the type of cleaning performed.",
  },
  {
    q: "Do you remove pet odors and stains?",
    a: "Yes. We offer targeted enzyme treatment options for pet odors, stains, and problem areas based on the severity of the issue.",
  },
  {
    q: "Do you clean tile and grout?",
    a: "Yes. We provide professional tile and grout cleaning designed to lift dirt buildup and dramatically improve the appearance of hard surfaces.",
  },
  {
    q: "Do you offer move-out carpet cleaning?",
    a: "Yes. Move-out and rental turnover cleaning is available for homes, townhomes, and other residential properties.",
  },
  {
    q: "Which areas do you serve?",
    a: "We serve Auburn, Rocklin, Roseville, Lincoln, Loomis, Granite Bay, Folsom, Citrus Heights, Carmichael, El Dorado Hills, and surrounding communities.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#0B1420] py-28 md:py-36">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#2F80ED] text-xs font-bold uppercase tracking-widest mb-4">
            FAQ
          </p>
          <h2 className="font-[family-name:var(--font-manrope)] text-4xl md:text-5xl font-extrabold text-[#F8FAFC]">
            Common Questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full text-left px-6 py-5 rounded-xl transition-all duration-300 flex items-center justify-between gap-4 ${
                    isOpen
                      ? "bg-[#111C2B] border border-[#2F80ED]/20"
                      : "bg-[#111C2B]/50 border border-white/[0.04] hover:border-white/[0.08]"
                  }`}
                >
                  <span className={`font-semibold transition-colors ${isOpen ? "text-[#F8FAFC]" : "text-[#D6DEE8]"}`}>
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#2F80ED] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pt-3 pb-5 text-[#D6DEE8] leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
