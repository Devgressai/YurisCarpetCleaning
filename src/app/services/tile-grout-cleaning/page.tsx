import type { Metadata } from "next";
import Link from "next/link";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ContactForm from "@/components/ContactForm";
import { siteMetadata } from "@/data/seo-config";

export const metadata: Metadata = {
  title:
    "Tile & Grout Restoration | Deep Extraction & Seal | Yuri's 27-Year Expert",
  description:
    "Professional tile and grout cleaning with high-pressure deep extraction, grout sealing, and color restoration. 27 years of expertise serving Placer, Sacramento & El Dorado counties. Call (530) 613-6300.",
  openGraph: {
    title:
      "Tile & Grout Restoration | Deep Extraction & Seal | Yuri's 27-Year Expert",
    description:
      "Professional tile and grout cleaning with high-pressure deep extraction, grout sealing, and color restoration.",
    url: `${siteMetadata.siteUrl}/services/tile-grout-cleaning`,
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

export default function TileGroutCleaningPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tile & Grout Restoration",
    provider: {
      "@type": "LocalBusiness",
      name: siteMetadata.siteName,
      telephone: siteMetadata.phone,
      url: siteMetadata.siteUrl,
    },
    description:
      "High-pressure deep extraction and grout sealing that restores tile floors to like-new condition.",
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
            Tile &amp; Grout Specialists
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Tile &amp; Grout Restoration
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            High-pressure deep extraction pulls years of embedded dirt, grease,
            and bacteria from porous grout lines — then professional-grade
            sealing locks out future staining for lasting results.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${siteMetadata.phone.replace(/[^0-9]/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#0076CE] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#005fa3] hover:shadow-xl"
            >
              Restore Your Tile Floors
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

      {/* Content: Deep Extraction */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-[#052C52] sm:text-4xl">
              Why Mopping Is Never Enough
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Tile surfaces may look clean after mopping, but grout is a
                different story. Grout is porous — it absorbs dirt, grease,
                bacteria, and cleaning product residue over months and years.
                Mops push contamination deeper into grout pores rather than
                removing it.
              </p>
              <p>
                Yuri&apos;s tile and grout restoration uses high-pressure,
                high-temperature extraction to flush contaminants from deep
                within grout lines. The process is safe for ceramic, porcelain,
                travertine, and natural stone — with cleaning agents matched
                specifically to your tile type.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grout Sealing & Color Restoration */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-[#052C52] sm:text-3xl">
                Professional Grout Sealing
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                After deep extraction, Yuri applies a professional-grade grout
                sealant that penetrates the porous surface and creates an
                invisible barrier against future staining. Sealed grout resists
                moisture, dirt, and spills — making daily maintenance far easier
                and keeping your tile floors looking fresh for months longer
                between professional cleanings.
              </p>
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-bold text-[#052C52] sm:text-3xl">
                Grout Color Restoration
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                When grout has permanently discolored from years of embedded
                contamination, cleaning alone may not restore the original
                appearance. Yuri offers grout color restoration — a process that
                applies a pigmented epoxy coating to grout lines, delivering a
                uniform, like-new look that also adds an additional layer of
                sealing protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0076CE]">
              Real Results
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#052C52] sm:text-4xl">
              See the Difference
            </h2>
          </div>
          <BeforeAfterSlider />
        </div>
      </section>

      {/* Why Yuri? */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-[#052C52] sm:text-4xl">
              Why Yuri?
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                With 27 years of tile and grout restoration experience, Yuri
                understands the chemistry behind every tile type and grout
                composition. The wrong cleaning agent on natural stone can cause
                etching; the wrong pressure on old grout can cause erosion.
                Yuri&apos;s expertise prevents damage while delivering
                transformative results.
              </p>
              <p>
                As an owner-operator, Yuri personally assesses every tile floor
                before work begins, selects the appropriate cleaning agents, and
                performs the restoration himself. No technician rotation, no
                guesswork — just consistent, expert-level results backed by 27
                years of hands-on experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Links */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-2xl font-bold text-[#052C52] sm:text-3xl">
            Serving Homeowners Across the Region
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {topCities.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="group rounded-xl border border-gray-200 bg-[#F8FAFC] px-6 py-4 text-sm font-medium text-[#052C52] shadow-sm transition-all hover:border-[#0076CE] hover:shadow-md"
              >
                <span className="transition-colors group-hover:text-[#0076CE]">
                  Tile &amp; Grout Cleaning in {city.name}
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
