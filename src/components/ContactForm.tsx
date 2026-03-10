"use client";

import { useState } from "react";

const serviceOptions = [
  "Carpet Cleaning",
  "Tile & Grout Cleaning",
  "Carpet Repair",
  "Carpet Restretching",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="bg-white py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <div className="rounded-2xl border border-green-100 bg-green-50 p-12">
            <svg
              className="mx-auto h-16 w-16 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-2xl font-bold text-[#052C52]">
              Thank You!
            </h3>
            <p className="mt-2 text-gray-600">
              Yuri will get back to you shortly with a free quote.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0076CE]">
              Get In Touch
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#052C52] sm:text-4xl">
              Request a Free Quote
            </h2>
            <p className="mt-4 text-gray-600">
              Fill out the form below and Yuri will personally get back to you
              within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#052C52]"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[#052C52] transition-colors focus:border-[#0076CE] focus:outline-none focus:ring-2 focus:ring-[#0076CE]/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-[#052C52]"
                >
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[#052C52] transition-colors focus:border-[#0076CE] focus:outline-none focus:ring-2 focus:ring-[#0076CE]/20"
                  placeholder="(916) 555-0000"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#052C52]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[#052C52] transition-colors focus:border-[#0076CE] focus:outline-none focus:ring-2 focus:ring-[#0076CE]/20"
                placeholder="your@email.com"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium text-[#052C52]"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[#052C52] transition-colors focus:border-[#0076CE] focus:outline-none focus:ring-2 focus:ring-[#0076CE]/20"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="mb-2 block text-sm font-medium text-[#052C52]"
                >
                  City / Area
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[#052C52] transition-colors focus:border-[#0076CE] focus:outline-none focus:ring-2 focus:ring-[#0076CE]/20"
                  placeholder="e.g. Roseville"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-[#052C52]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[#052C52] transition-colors focus:border-[#0076CE] focus:outline-none focus:ring-2 focus:ring-[#0076CE]/20"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#0076CE] px-8 py-4 text-lg font-semibold text-white shadow-md transition-all hover:bg-[#005fa3] hover:shadow-lg"
            >
              Send Quote Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
