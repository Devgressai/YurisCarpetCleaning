import type { Metadata } from "next";
import Link from "next/link";
import RestretchingComparison from "@/components/RestretchingComparison";
import CostComparison from "@/components/CostComparison";
import ContactForm from "@/components/ContactForm";
import { siteMetadata } from "@/data/seo-config";

export const metadata: Metadata = {
  title:
    "Power Carpet Restretching | Wrinkle Elimination | Yuri's 27-Year Expert",
  description:
    "Professional power carpet restretching that eliminates wrinkles, ripples, and buckling permanently. Power stretcher — not knee-kicker — for uniform, lasting results. Call (530) 613-6300.",
  openGraph: {
    title:
      "Power Carpet Restretching | Wrinkle Elimination | Yuri's 27-Year Expert",
    description:
      "Professional power carpet restretching that eliminates wrinkles, ripples, and buckling permanently. Power stretcher for uniform, lasting results.",
    url: `${siteMetadata.siteUrl}/services/carpet-restretching`,
    siteName: siteMetadata.siteName,
  },
};

const topCities = [
  { name: "Auburn", slug: "auburn-ca" },
  { name: "Roseville", slug: "roseville-ca" },
  { name: "Rocklin", slug: "rocklin-ca" },
  { name: "Folsom", slug: "folsom-ca" },
  { name: "El Dorado Hills", slug: "el-dorado-hills-ca" },
];

export default function CarpetRestretchingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Power Carpet Restretching",
    provider: {
      "@type": "LocalBusiness",
      name: siteMetadata.siteName,
      telephone: siteMetadata.phone,
      url: siteMetadata.siteUrl,
    },
    description:
      "Professional power stretching that eliminates wrinkles, ripples, and buckling for a flat, tight carpet.",
    areaServed: [
      { "@type": "State", name: "California" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-[#052C52] py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#0076CE]">
            Wrinkle-Free Guarantee
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Power Carpet Restretching
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Professional power stretching that eliminates wrinkles, ripples, and
            buckling permanently — restoring a smooth, tight carpet that looks
            and feels like the day it was installed.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${siteMetadata.phone.replace(/[^0-9]/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#0076CE] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#005fa3] hover:shadow-xl"
            >
              Fix Your Wrinkled Carpet
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-[#052C52]"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Power Stretcher vs Knee-Kicker */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-[#052C52] sm:text-4xl">
              Power Stretcher vs. Knee-Kicker
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Most carpet installers and many cleaning companies use a
                knee-kicker to restretch carpet. A knee-kicker is a small,
                handheld tool that stretches carpet only 1&ndash;2 feet at a
                time. This creates uneven tension across the room — solving
                wrinkles in one spot while creating new ones nearby. Knee-kicked
                carpet frequently wrinkles again within 6&ndash;12 months.
              </p>
              <p>
                A power stretcher is a professional-grade tool that extends from
                wall to wall, gripping the carpet at one end and pushing against
                the opposite wall. This delivers uniform tension across the
                entire room in a single stretch. The carpet is pulled tight,
                excess material is trimmed at the walls, and the edges are
                re-anchored firmly to tack strips.
              </p>
              <p>
                The difference is not subtle. Power stretching produces a flat,
                drum-tight carpet that stays smooth for years — not months.
                Yuri uses a power stretcher on every restretching job, because
                anything less delivers temporary results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Wrinkles Happen */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-16 text-center text-3xl font-bold text-[#052C52] sm:text-4xl">
            Why Carpets Wrinkle
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Poor Initial Installation",
                description:
                  "Carpet installed with a knee-kicker instead of a power stretcher will eventually develop wrinkles as the loose material shifts.",
              },
              {
                title: "Humidity & Temperature",
                description:
                  "Sacramento Valley heat and seasonal humidity cause carpet backing to expand and contract, gradually loosening the original stretch.",
              },
              {
                title: "Heavy Furniture Dragging",
                description:
                  "Moving heavy furniture across carpet pulls fibers and backing away from tack strips, creating ripples and buckling.",
              },
              {
                title: "Normal Wear Over Time",
                description:
                  "Foot traffic, especially in hallways and high-use rooms, gradually works carpet loose from tack strips over 5-10 years.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <h3 className="mb-3 text-lg font-bold text-[#052C52]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restretching Comparison */}
      <RestretchingComparison />

      {/* Cost Comparison */}
      <CostComparison />

      {/* Why Yuri? */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-[#052C52] sm:text-4xl">
              Why Yuri?
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Yuri has performed thousands of carpet restretching jobs over 27
                years — exclusively with a power stretcher. He understands how
                different carpet types, backing materials, and room geometries
                affect the stretching process.
              </p>
              <p>
                Every restretching job comes with Yuri&apos;s{" "}
                <strong className="text-[#052C52]">5-year guarantee</strong>.
                If your carpet develops wrinkles within five years of
                restretching, Yuri will come back and re-stretch it at no charge.
                That&apos;s the confidence that comes from using the right tool
                and the right technique every time.
              </p>
              <p>
                As an owner-operator, Yuri personally handles every restretching
                project from assessment through final walkthrough. No
                subcontractors, no crew members cutting corners with a
                knee-kicker — just master-level work from a professional who has
                dedicated his career to getting carpets right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Links */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-2xl font-bold text-[#052C52] sm:text-3xl">
            Serving Homeowners Across the Region
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {topCities.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="group rounded-xl border border-gray-200 bg-white px-6 py-4 text-sm font-medium text-[#052C52] shadow-sm transition-all hover:border-[#0076CE] hover:shadow-md"
              >
                <span className="transition-colors group-hover:text-[#0076CE]">
                  Carpet Restretching in {city.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
