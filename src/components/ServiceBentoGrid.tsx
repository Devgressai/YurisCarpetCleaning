"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    name: "Carpet Cleaning",
    slug: "carpet-cleaning",
    description: "Deep steam extraction removes dirt, stains, allergens, and buildup to restore a cleaner, fresher home.",
    image: "/images/carpet-cleaning-service.png",
    featured: true,
  },
  {
    name: "Tile & Grout",
    slug: "tile-grout-cleaning",
    description: "High-pressure cleaning that removes years of buildup, restoring floors to their original brightness.",
    image: "/images/tile-cleaning-service.png",
    featured: false,
  },
  {
    name: "Pet Odor Treatment",
    slug: "#contact",
    description: "Targeted enzyme treatments that neutralize pet odors at the source, not just mask them.",
    image: null,
    featured: false,
  },
  {
    name: "Carpet Repair",
    slug: "carpet-repair",
    description: "Expert patching, seam repair, and spot replacement — saving you the cost of full replacement.",
    image: "/images/carpet-repair-service.png",
    featured: false,
  },
  {
    name: "Upholstery",
    slug: "#contact",
    description: "Professional cleaning for sofas, chairs, and fabric surfaces that removes embedded dirt.",
    image: null,
    featured: false,
  },
  {
    name: "Move-Out Cleaning",
    slug: "#contact",
    description: "Rental turnover cleaning that meets landlord and property manager standards.",
    image: null,
    featured: false,
  },
];

export default function ServiceBentoGrid() {
  return (
    <section className="bg-[#F5F7FA] py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#2F80ED] text-xs font-bold uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h2 className="font-[family-name:var(--font-manrope)] text-4xl md:text-5xl font-extrabold text-[#0F1720] leading-tight">
            Professional Cleaning
            <br />
            Services
          </h2>
        </motion.div>

        {/* Bento Grid - varied sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const href = service.slug.startsWith("#") ? service.slug : `/services/${service.slug}`;
            const isLarge = i === 0;

            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={isLarge ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""}
              >
                <Link href={href} className="group block h-full">
                  <div className={`relative overflow-hidden rounded-2xl bg-white border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 h-full ${isLarge ? "min-h-[400px] lg:min-h-[500px]" : "min-h-[220px]"}`}>
                    {service.image && (
                      <div className="absolute inset-0">
                        <Image
                          src={service.image}
                          alt={service.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className={`absolute inset-0 ${isLarge ? "bg-gradient-to-t from-[#0F1720] via-[#0F1720]/60 to-transparent" : "bg-gradient-to-t from-[#0F1720] via-[#0F1720]/40 to-transparent"}`} />
                      </div>
                    )}
                    <div className={`relative flex flex-col justify-end h-full p-8 ${isLarge ? "p-10" : ""}`}>
                      <h3 className={`font-[family-name:var(--font-manrope)] font-bold mb-2 ${service.image ? "text-white" : "text-[#0F1720]"} ${isLarge ? "text-3xl" : "text-xl"}`}>
                        {service.name}
                      </h3>
                      <p className={`leading-relaxed ${service.image ? "text-gray-300" : "text-[#5E6B78]"} ${isLarge ? "text-base max-w-md" : "text-sm"}`}>
                        {service.description}
                      </p>
                      <div className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${service.image ? "text-[#2F80ED]" : "text-[#2F80ED]"}`}>
                        Learn More
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
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
