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
    <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
      <StarRating count={rating} />
      <blockquote className="mt-4 flex-1 text-gray-700 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-6 border-t border-gray-100 pt-4">
        <p className="font-semibold text-[#052C52]">{name}</p>
        <p className="text-sm text-gray-500">{city}</p>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Yuri transformed our living room carpet — it looked brand new! You can tell he takes real pride in his work. As an owner-operator, he was there start to finish and didn't miss a single spot. Highly recommend his carpet cleaning service.",
    name: "Sarah M.",
    city: "Roseville, CA",
  },
  {
    quote:
      "We had Yuri come out for carpet restretching in our upstairs hallway and the results were incredible. No more wrinkles or bumps. He explained everything he was doing and why — 27 years of experience really shows. Worth every penny.",
    name: "David & Karen L.",
    city: "Granite Bay, CA",
  },
  {
    quote:
      "After our dog stained the carpet in three rooms, we thought we'd need to replace everything. Yuri came out, assessed the damage, and his tile and grout cleaning plus carpet repair saved us thousands. Personal service from the owner himself — that's rare these days.",
    name: "Michael R.",
    city: "Folsom, CA",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0076CE]">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#052C52] sm:text-4xl">
            What Our Customers Say
          </h2>
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
      </div>
    </section>
  );
}
