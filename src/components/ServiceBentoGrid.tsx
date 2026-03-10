"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "Carpet Cleaning",
    slug: "carpet-cleaning",
    description:
      "Deep steam extraction removes dirt, stains, allergens, and buildup to restore a cleaner, fresher home.",
    image: "/images/carpet-cleaning-service.png",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
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
  },
  {
    name: "Pet Odor Treatment",
    slug: "pet-odor-treatment",
    description:
      "Targeted enzyme treatments that neutralize pet odors at the source, not just mask them.",
    image: null,
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4.5-2a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-12 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm15 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 20c3 0 5.5-2.5 5.5-5.5 0-2-2.5-4.5-5.5-4.5S6.5 12.5 6.5 14.5C6.5 17.5 9 20 12 20z" />
      </svg>
    ),
  },
  {
    name: "Upholstery Cleaning",
    slug: "upholstery-cleaning",
    description:
      "Professional cleaning for sofas, chairs, and fabric surfaces that removes embedded dirt and refreshes your furniture.",
    image: null,
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12V8a2 2 0 00-2-2H6a2 2 0 00-2 2v4m16 0v4a2 2 0 01-2 2h-1l-1 2H8l-1-2H6a2 2 0 01-2-2v-4m16 0H4" />
      </svg>
    ),
  },
  {
    name: "Carpet Repair",
    slug: "carpet-repair",
    description:
      "Expert patching, seam repair, and spot replacement — saving you the cost of full carpet replacement.",
    image: "/images/carpet-repair-service.png",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    name: "Move-Out Cleaning",
    slug: "move-out-cleaning",
    description:
      "Rental turnover and move-out carpet cleaning that meets landlord and property manager standards.",
    image: null,
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" />
      </svg>
    ),
  },
];

const hasPage = ["carpet-cleaning", "tile-grout-cleaning", "carpet-repair", "carpet-restretching"];

export default function ServiceBentoGrid() {
  return (
    <section className="bg-[#F5F7FA] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-[#0F1720] sm:text-4xl">
            Professional Cleaning Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#5E6B78]">
            Specialized residential and move-out cleaning services designed to restore carpets, tile, and upholstered surfaces.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const href = hasPage.includes(service.slug)
              ? `/services/${service.slug}`
              : "#contact";

            return (
              <motion.div
                key={service.slug}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group"
              >
                <Link
                  href={href}
                  className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-xl"
                >
                  {/* Service image (only for cards that have one) */}
                  {service.image && (
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

                  <div className="flex flex-1 flex-col p-7 pt-6">
                    <div className="mb-5 inline-flex rounded-xl bg-[#0F1720]/5 p-3 text-[#0F1720]">
                      {service.icon}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-[#0F1720]">
                      {service.name}
                    </h3>
                    <p className="flex-1 leading-relaxed text-gray-600">
                      {service.description}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2F80ED]">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
