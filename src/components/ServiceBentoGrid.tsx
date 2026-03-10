"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "Carpet Cleaning",
    slug: "carpet-cleaning",
    description:
      "Professional hot-water extraction and deep cleaning that removes embedded dirt, allergens, and stains — restoring your carpets to like-new condition.",
    image: "/images/carpet-cleaning-service.png",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    featured: true,
  },
  {
    name: "Tile & Grout Cleaning",
    slug: "tile-grout-cleaning",
    description:
      "High-pressure tile and grout cleaning that removes years of buildup, restoring your floors to their original brightness.",
    image: "/images/tile-cleaning-service.png",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm10 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    featured: false,
  },
  {
    name: "Carpet Repair",
    slug: "carpet-repair",
    description:
      "Expert patching, seam repair, and burn or stain spot replacement — saving you the cost of full carpet replacement.",
    image: "/images/carpet-repair-service.png",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    featured: false,
  },
  {
    name: "Carpet Restretching",
    slug: "carpet-restretching",
    description:
      "Eliminate wrinkles, bumps, and loose carpet with professional power-stretching that extends carpet life and improves appearance.",
    image: "/images/carpet-restretching-service.png",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
    featured: false,
  },
];

export default function ServiceBentoGrid() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0076CE]">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#052C52] sm:text-4xl">
            Our Services
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-rows-2">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`group ${i === 0 ? "sm:row-span-2" : ""}`}
            >
              <Link
                href={`/services/${service.slug}`}
                className={`relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-xl ${
                  i === 0 ? "bg-gradient-to-br from-[#052C52] to-[#0a3d6e]" : ""
                }`}
              >
                {/* Service image */}
                {i === 0 ? (
                  <div className="relative h-48 w-full sm:h-64">
                    <Image
                      src={service.image}
                      alt={`Professional ${service.name.toLowerCase()} service`}
                      fill
                      className="object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#052C52]" />
                  </div>
                ) : (
                  <div className="relative h-36 w-full">
                    <Image
                      src={service.image}
                      alt={`Professional ${service.name.toLowerCase()} service`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
                  </div>
                )}
                <div className="p-8 pt-4">
                  <div>
                    <div
                      className={`mb-6 inline-flex rounded-xl p-3 ${
                        i === 0
                          ? "bg-[#0076CE]/20 text-[#0076CE]"
                          : "bg-[#052C52]/5 text-[#052C52]"
                      }`}
                    >
                      {service.icon}
                    </div>
                    <h3
                      className={`mb-3 text-xl font-bold ${
                        i === 0 ? "text-white" : "text-[#052C52]"
                      }`}
                    >
                      {service.name}
                    </h3>
                    <p
                      className={`leading-relaxed ${
                        i === 0 ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                  <div
                    className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${
                      i === 0 ? "text-[#0076CE]" : "text-[#0076CE]"
                    }`}
                  >
                    Learn More
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
