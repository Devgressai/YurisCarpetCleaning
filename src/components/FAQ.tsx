"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does carpet cleaning take?",
    answer:
      "Timing depends on the number of rooms and condition of the carpet, but most appointments can be completed in a few hours.",
  },
  {
    question: "How long does it take for carpet to dry?",
    answer:
      "Dry times vary, but most carpets dry within several hours depending on airflow, humidity, and the type of cleaning performed.",
  },
  {
    question: "Do you remove pet odors and stains?",
    answer:
      "Yes. We offer treatment options for pet odors, stains, and problem areas based on the severity of the issue.",
  },
  {
    question: "Do you clean tile and grout?",
    answer:
      "Yes. We provide professional tile and grout cleaning designed to lift dirt buildup and improve the appearance of hard surfaces.",
  },
  {
    question: "Do you offer move-out carpet cleaning?",
    answer:
      "Yes. Move-out and rental turnover cleaning is available for homes, townhomes, and other residential properties.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We serve Auburn, Rocklin, Roseville, Lincoln, Loomis, Granite Bay, Folsom, and surrounding communities.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F5F7FA] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-[family-name:var(--font-manrope)] text-3xl md:text-4xl font-bold text-[#0F1720] text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-[#0F1720] text-base pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#5E6B78] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[#5E6B78] text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
