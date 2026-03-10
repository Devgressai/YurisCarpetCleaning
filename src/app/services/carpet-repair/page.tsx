import type { Metadata } from "next";
import Link from "next/link";
import CostComparison from "@/components/CostComparison";
import ContactForm from "@/components/ContactForm";
import { siteMetadata } from "@/data/seo-config";

export const metadata: Metadata = {
  title:
    "Precision Carpet Repair | Invisible Seaming & Patching | Yuri's",
  description:
    "Expert carpet repair with invisible seaming, precision patching, and burn/stain/pet damage restoration. Save thousands vs. replacement. 27 years of experience. Call (530) 613-6300.",
  openGraph: {
    title:
      "Precision Carpet Repair | Invisible Seaming & Patching | Yuri's",
    description:
      "Expert carpet repair with invisible seaming, precision patching, and burn/stain/pet damage restoration. Save thousands vs. replacement.",
    url: `${siteMetadata.siteUrl}/services/carpet-repair`,
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

export default function CarpetRepairPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Precision Carpet Repair",
    provider: {
      "@type": "LocalBusiness",
      name: siteMetadata.siteName,
      telephone: siteMetadata.phone,
      url: siteMetadata.siteUrl,
    },
    description:
      "Invisible seaming, precision patching, and burn or stain repair that saves your carpet from replacement.",
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
            Save Your Carpet
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Precision Carpet Repair
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Invisible seaming, precision patching, and expert restoration of
            burn marks, bleach stains, and pet damage — saving your carpet from
            costly full replacement.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${siteMetadata.phone.replace(/[^0-9]/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#0076CE] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#005fa3] hover:shadow-xl"
            >
              Get a Free Repair Estimate
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-[#052C52]"
            >
              Send a Photo for Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Invisible Seaming & Patching */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-[#052C52] sm:text-4xl">
              The Art of Invisible Repair
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Carpet repair is surgical work. Yuri harvests donor carpet —
                typically from a closet, under furniture, or from a matching
                remnant — and precision-cuts a patch that matches the exact pile
                direction, pattern alignment, and fiber density of the damaged
                area. The result is a repair that blends seamlessly with your
                existing carpet, invisible to the eye and indistinguishable by
                touch.
              </p>
              <p>
                Split seams are re-bonded using professional heat-bond tape that
                creates a permanent, flat join line. Transition strips between
                rooms are repaired or replaced to eliminate trip hazards and
                restore a clean, finished look.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Damage Types */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-16 text-center text-3xl font-bold text-[#052C52] sm:text-4xl">
            Damage We Repair
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Burn Marks",
                description:
                  "Cigarette burns, iron scorches, and heat damage are precisely cut away and replaced with matching donor carpet that blends seamlessly.",
              },
              {
                title: "Bleach & Chemical Stains",
                description:
                  "Permanent discoloration from bleach, cleaning products, or chemical spills is patched with color-matched carpet for an invisible repair.",
              },
              {
                title: "Pet Damage",
                description:
                  "Scratched, torn, or frayed carpet from pets digging, chewing, or clawing is restored to its original condition.",
              },
              {
                title: "Split Seams",
                description:
                  "Seams that have separated over time are re-bonded with professional heat-bond tape for a permanent, flat join.",
              },
              {
                title: "Transition Strip Repair",
                description:
                  "Damaged or missing transition strips between rooms or surfaces are repaired or replaced to eliminate trip hazards.",
              },
              {
                title: "Water Damage Sections",
                description:
                  "Carpet sections damaged by water, staining, or mold are removed and replaced with donor carpet, restoring a clean, safe floor.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <h3 className="mb-3 text-xl font-bold text-[#052C52]">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Repair Beats Replacement */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-[#052C52] sm:text-4xl">
              Why Repair Beats Replacement
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Full carpet replacement for a single room typically costs
                $800&ndash;$2,500+ including materials, padding, removal, and
                installation. A precision repair from Yuri typically costs a
                fraction of that — and the results are invisible.
              </p>
              <p>
                Beyond cost, replacement means matching your existing carpet
                across the rest of the house, dealing with furniture removal,
                extended downtime, and the reality that new carpet in one room
                often makes adjacent rooms look worn by comparison. Repair
                solves the problem without creating new ones.
              </p>
              <p>
                Yuri&apos;s surgical approach treats carpet repair the way a
                skilled surgeon treats the body — remove only what&apos;s
                damaged, preserve everything that&apos;s healthy, and leave no
                visible trace of the procedure.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                Carpet repair demands a level of precision and experience that
                most cleaning companies simply don&apos;t possess. Yuri has
                spent 27 years perfecting the art of invisible repair — matching
                pile direction, aligning patterns, and creating seams that
                disappear into the surrounding carpet.
              </p>
              <p>
                As an owner-operator, Yuri personally assesses every repair,
                selects donor carpet, and performs the work himself. This
                isn&apos;t a service that can be effectively delegated to a
                junior technician — it requires the steady hand and trained eye
                that only come from decades of practice.
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
                  Carpet Repair in {city.name}
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
