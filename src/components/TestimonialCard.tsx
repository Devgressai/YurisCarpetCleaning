import React from "react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  city: string;
  rating?: number;
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCard({
  quote,
  name,
  city,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-[#0B1420] p-8">
      <StarRating count={rating} />
      <blockquote className="mt-4 flex-1 text-[#D6DEE8] leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-6 border-t border-white/[0.08] pt-4">
        <p className="font-bold text-[#F8FAFC]">{name}</p>
        <p className="text-sm text-[#5E6B78]">{city}</p>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Yuri did an amazing job. The carpet came out far better than I expected and the whole process was professional from start to finish.",
    name: "Sarah M.",
    city: "Auburn",
  },
  {
    quote:
      "Fast response, fair price, and excellent work. Our tile looked dramatically better.",
    name: "Mike R.",
    city: "Rocklin",
  },
  {
    quote:
      "Perfect for move-out cleaning. Stains and odor were handled better than we thought possible.",
    name: "Jennifer L.",
    city: "Roseville",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-[#111C2B] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-[#F8FAFC] sm:text-4xl">
            What Customers Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#D6DEE8]">
            Trusted by homeowners, landlords, and local clients who want quality work and dependable service.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.name}
              quote={t.quote}
              name={t.name}
              city={t.city}
            />
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-12 text-center text-sm tracking-wide text-[#5E6B78]">
          Trusted Local Service &bull; Professional Results &bull; Fast Quotes
        </div>
      </div>
    </section>
  );
}
