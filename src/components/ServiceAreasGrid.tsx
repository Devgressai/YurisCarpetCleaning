"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const cities = [
  { name: "Auburn", slug: "auburn-ca" },
  { name: "Rocklin", slug: "rocklin-ca" },
  { name: "Roseville", slug: "roseville-ca" },
  { name: "Lincoln", slug: "lincoln-ca" },
  { name: "Loomis", slug: "loomis-ca" },
  { name: "Granite Bay", slug: "granite-bay-ca" },
  { name: "Folsom", slug: "folsom-ca" },
  { name: "Citrus Heights", slug: "citrus-heights-ca" },
  { name: "Carmichael", slug: "carmichael-ca" },
  { name: "El Dorado Hills", slug: "el-dorado-hills-ca" },
];

export default function ServiceAreasGrid() {
  return (
    <section className="bg-[#F5F7FA] py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#2F80ED] text-xs font-bold uppercase tracking-widest mb-4">
            Service Areas
          </p>
          <h2 className="font-[family-name:var(--font-manrope)] text-4xl md:text-5xl font-extrabold text-[#0F1720]">
            Proudly Serving
            <br />
            Nearby Communities
          </h2>
          <p className="mt-4 text-[#5E6B78] text-lg max-w-xl mx-auto">
            Professional carpet and tile cleaning across Placer County,
            Sacramento County, and nearby areas.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {cities.map((city, i) => (
            <motion.div
              key={city.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <Link
                href={`/service-areas/${city.slug}`}
                className="group block text-center py-4 px-3 rounded-xl bg-white border border-gray-100 hover:border-[#2F80ED]/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="font-semibold text-[#0F1720] group-hover:text-[#2F80ED] transition-colors text-sm">
                  {city.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
