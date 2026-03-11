"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Yuri did an amazing job. The carpet came out far better than I expected and the whole process was professional from start to finish.",
    name: "Sarah M.",
    location: "Auburn, CA",
    service: "Carpet Cleaning",
  },
  {
    quote: "Fast response, fair price, and excellent work. Our tile looked dramatically better. We've tried other cleaners — nobody comes close.",
    name: "Mike R.",
    location: "Rocklin, CA",
    service: "Tile & Grout",
  },
  {
    quote: "Perfect for move-out cleaning. Stains and odor were handled better than we thought possible. Our landlord was impressed.",
    name: "Jennifer L.",
    location: "Roseville, CA",
    service: "Move-Out Clean",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-[#111C2B] py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[#2F80ED] text-xs font-bold uppercase tracking-widest mb-4">
            Testimonials
          </p>
          <h2 className="font-[family-name:var(--font-manrope)] text-4xl md:text-5xl font-extrabold text-[#F8FAFC]">
            What Customers Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-[#0B1420] rounded-2xl p-8 md:p-10 border border-white/[0.06] hover:border-[#2F80ED]/20 transition-all duration-500 group"
            >
              {/* Large quote mark */}
              <span className="absolute top-6 right-8 text-7xl font-serif text-[#2F80ED]/10 leading-none select-none">&ldquo;</span>

              <StarRating />

              <p className="text-[#D6DEE8] text-lg leading-relaxed mt-6 mb-8 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2F80ED]/15 flex items-center justify-center text-[#2F80ED] font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-[#F8FAFC] text-sm">{t.name}</div>
                  <div className="text-xs text-[#5E6B78]">{t.location} &bull; {t.service}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-[#5E6B78] tracking-wide">
          Trusted Local Service &bull; Professional Results &bull; Fast Quotes
        </div>
      </div>
    </section>
  );
}

export default function TestimonialCard() {
  return <TestimonialsSection />;
}
