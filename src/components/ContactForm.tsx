"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const serviceOptions = [
  "Carpet Cleaning",
  "Tile & Grout Cleaning",
  "Pet Odor Treatment",
  "Upholstery Cleaning",
  "Carpet Repair",
  "Carpet Restretching",
  "Move-Out Cleaning",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="bg-[#0B1420] py-28 md:py-36">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-[#111C2B] rounded-2xl border border-[#2F80ED]/20 p-16 glow-blue">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#2F80ED]/15 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#2F80ED]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">Thank You</h3>
            <p className="text-[#D6DEE8]">Yuri will get back to you shortly with a free quote.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-[#0B1420] py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[#2F80ED] text-xs font-bold uppercase tracking-widest mb-4">
              Get In Touch
            </p>
            <h2 className="font-[family-name:var(--font-manrope)] text-4xl md:text-5xl font-extrabold text-[#F8FAFC]">
              Request a Free Quote
            </h2>
            <p className="mt-4 text-[#D6DEE8]">
              Fill out the form below and Yuri will personally respond within 24 hours.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-[#111C2B] rounded-2xl border border-white/[0.06] p-8 md:p-10 space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#D6DEE8] mb-2">Name *</label>
                <input type="text" id="name" name="name" required className="w-full bg-[#0B1420] border border-white/[0.08] rounded-xl px-4 py-3.5 text-[#F8FAFC] placeholder-[#5E6B78] focus:border-[#2F80ED]/50 focus:outline-none focus:ring-1 focus:ring-[#2F80ED]/30 transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#D6DEE8] mb-2">Phone *</label>
                <input type="tel" id="phone" name="phone" required className="w-full bg-[#0B1420] border border-white/[0.08] rounded-xl px-4 py-3.5 text-[#F8FAFC] placeholder-[#5E6B78] focus:border-[#2F80ED]/50 focus:outline-none focus:ring-1 focus:ring-[#2F80ED]/30 transition-colors" placeholder="(916) 555-0000" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#D6DEE8] mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-[#0B1420] border border-white/[0.08] rounded-xl px-4 py-3.5 text-[#F8FAFC] placeholder-[#5E6B78] focus:border-[#2F80ED]/50 focus:outline-none focus:ring-1 focus:ring-[#2F80ED]/30 transition-colors" placeholder="your@email.com" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-[#D6DEE8] mb-2">Service Needed</label>
                <select id="service" name="service" className="w-full bg-[#0B1420] border border-white/[0.08] rounded-xl px-4 py-3.5 text-[#F8FAFC] focus:border-[#2F80ED]/50 focus:outline-none focus:ring-1 focus:ring-[#2F80ED]/30 transition-colors">
                  <option value="">Select a service</option>
                  {serviceOptions.map((s) => (<option key={s} value={s}>{s}</option>))}
                </select>
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-[#D6DEE8] mb-2">City / Area</label>
                <input type="text" id="city" name="city" className="w-full bg-[#0B1420] border border-white/[0.08] rounded-xl px-4 py-3.5 text-[#F8FAFC] placeholder-[#5E6B78] focus:border-[#2F80ED]/50 focus:outline-none focus:ring-1 focus:ring-[#2F80ED]/30 transition-colors" placeholder="e.g. Roseville" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#D6DEE8] mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full bg-[#0B1420] border border-white/[0.08] rounded-xl px-4 py-3.5 text-[#F8FAFC] placeholder-[#5E6B78] focus:border-[#2F80ED]/50 focus:outline-none focus:ring-1 focus:ring-[#2F80ED]/30 transition-colors resize-none" placeholder="Tell us about your project..." />
            </div>
            <button type="submit" className="w-full bg-[#2F80ED] hover:bg-[#1E66C7] text-white uppercase font-bold text-sm tracking-wider rounded-xl px-8 py-4 transition-all duration-300 glow-blue hover:glow-blue-strong">
              Get Free Quote
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
