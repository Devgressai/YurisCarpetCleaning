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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0B1420] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-[family-name:var(--font-manrope)] text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#111C2B] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                >
                  <span className="text-[#F8FAFC] font-medium text-base pr-4">
                    {faq.question}
                  </span>
                  <span className="text-[#2F80ED] flex-shrink-0 text-xl font-light leading-none">
                    {isOpen ? "\u2212" : "+"}
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "200px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="px-6 pb-5 text-[#D6DEE8] text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
