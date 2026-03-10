import type { Metadata } from "next";
import Link from "next/link";
import { countyHubs } from "@/data/locations";
import { siteMetadata } from "@/data/seo-config";
import Breadcrumbs from "@/components/Breadcrumbs";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Service Areas | Yuri's Carpet Cleaning | Auburn to Sacramento",
  description:
    "Yuri's Carpet Cleaning proudly serves 22+ cities across Placer, Sacramento, and El Dorado counties. From the Auburn foothills to Downtown Sacramento, get expert carpet cleaning, repair, and restretching near you.",
  openGraph: {
    title: "Service Areas | Yuri's Carpet Cleaning | Auburn to Sacramento",
    description:
      "Yuri's Carpet Cleaning proudly serves 22+ cities across Placer, Sacramento, and El Dorado counties. From the Auburn foothills to Downtown Sacramento, get expert carpet cleaning, repair, and restretching near you.",
    url: `${siteMetadata.siteUrl}/service-areas`,
    siteName: siteMetadata.siteName,
  },
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function ServiceAreasPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#052C52] py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#0076CE]">
            Placer &middot; Sacramento &middot; El Dorado Counties
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Our Service Areas
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            For 27 years, Yuri&apos;s Carpet Cleaning has served the greater
            Sacramento region &mdash; from the pine-covered foothills of Placer
            and El Dorado counties to the thriving suburban communities
            throughout Sacramento County. Wherever you call home, expert carpet
            care is just a phone call away.
          </p>
        </div>
      </section>

      {/* County Sections */}
      {countyHubs.map((hub, index) => (
        <section
          key={hub.slug}
          className={index % 2 === 0 ? "bg-[#F8FAFC] py-24" : "bg-white py-24"}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0076CE]">
                {hub.locations.length} Cities Served
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#052C52] sm:text-4xl">
                {hub.county}
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {hub.locations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/service-areas/${location.slug}`}
                  className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="mb-3 text-xl font-bold text-[#052C52] transition-colors group-hover:text-[#0076CE]">
                    {location.name}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-gray-600">
                    {location.description.length > 160
                      ? location.description.slice(0, 157).trimEnd() + "..."
                      : location.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0076CE]">
                    Learn More
                    <span className="transition-transform group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-[#052C52] py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready for Cleaner Carpets?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            No matter where you are in the greater Sacramento region, Yuri
            personally handles every job. Call today for a free estimate or fill
            out our online form.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${siteMetadata.phone.replace(/[^0-9]/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#0076CE] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#005fa3] hover:shadow-xl"
            >
              Call {siteMetadata.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-[#052C52]"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
