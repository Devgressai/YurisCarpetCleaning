import type { Metadata } from "next";
import Link from "next/link";
import {
  getAllLocations,
  getLocationBySlug,
  getNeighbors,
} from "@/data/locations";
import { getAllServices } from "@/data/services";
import { generateLocationMeta, siteMetadata } from "@/data/seo-config";
import Breadcrumbs from "@/components/Breadcrumbs";
import NearbyAreas from "@/components/NearbyAreas";
import ContactForm from "@/components/ContactForm";

// ---------------------------------------------------------------------------
// Static Params
// ---------------------------------------------------------------------------

export function generateStaticParams(): { slug: string }[] {
  return getAllLocations().map((loc) => ({ slug: loc.slug }));
}

// ---------------------------------------------------------------------------
// Dynamic Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) {
    return { title: "Location Not Found | Yuri's Carpet Cleaning" };
  }

  const meta = generateLocationMeta(location);
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${siteMetadata.siteUrl}/service-areas/${slug}`,
      siteName: siteMetadata.siteName,
    },
  };
}

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold text-[#052C52]">
          Location not found
        </h1>
      </div>
    );
  }

  const services = getAllServices();
  const neighbors = getNeighbors(slug);

  // JSON-LD ServiceArea schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Carpet Cleaning",
    provider: {
      "@type": "LocalBusiness",
      name: siteMetadata.siteName,
      telephone: siteMetadata.phone,
      url: siteMetadata.siteUrl,
    },
    areaServed: {
      "@type": "City",
      name: location.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: location.county,
      },
    },
    description: location.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas" },
              { label: location.name },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#052C52] py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#0076CE]">
            {location.county} &middot; Professional Carpet Services
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            The Master Floor Surgeon in {location.name}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            {location.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${siteMetadata.phone.replace(/[^0-9]/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#0076CE] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#005fa3] hover:shadow-xl"
            >
              Call {siteMetadata.phone}
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

      {/* Region-Specific Copy */}
      {location.region === "foothills" && (
        <section className="bg-[#F8FAFC] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-[#052C52] sm:text-3xl">
                Red Clay Dirt &amp; Pine Needle Extraction
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                {location.name} sits in the Sierra foothills, where red laterite
                clay, pine needles, and seasonal pollen don&apos;t just sit on
                carpet surfaces — they grind deep into fibers with every
                footstep. Standard cleaning methods leave these particles behind.
                Yuri&apos;s foothills-tested process uses adjusted water
                temperature, specialized pre-treatments, and pH-balanced rinsing
                to extract what other cleaners miss, protecting your carpet
                investment from the unique wear patterns these soils create.
              </p>
            </div>
          </div>
        </section>
      )}

      {location.region === "suburban" && (
        <section className="bg-[#F8FAFC] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-[#052C52] sm:text-3xl">
                High-Traffic Pet &amp; Family Home Maintenance
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                {location.name} homes see heavy daily carpet traffic from active
                families, pets, and busy schedules. Pet urine, tracked-in soil,
                food spills, and high-traffic lane wear accumulate faster than
                regular vacuuming can manage. Yuri&apos;s zero-residue deep
                cleaning system is engineered for exactly these conditions —
                removing embedded allergens, neutralizing pet odors at the
                source, and restoring carpet texture in the rooms your family
                uses most.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Service Grid */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0076CE]">
              Our Services
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#052C52] sm:text-4xl">
              Carpet &amp; Floor Services in {location.name}
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:border-[#0076CE]/30 hover:shadow-lg"
              >
                <h3 className="mb-3 text-xl font-bold text-[#052C52] transition-colors group-hover:text-[#0076CE]">
                  {service.name}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-gray-600">
                  {service.shortDescription}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0076CE]">
                  Learn More
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* E-E-A-T Section */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0076CE]">
              Experience &middot; Expertise &middot; Trust
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#052C52] sm:text-4xl">
              Why {location.name} Homeowners Trust Yuri
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0076CE]/10 text-[#0076CE]">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#052C52]">
                27 Years of Mastery
              </h3>
              <p className="leading-relaxed text-gray-600">
                Nearly three decades of hands-on carpet care experience means
                Yuri has seen and solved every type of carpet challenge{" "}
                {location.name} homes can present. This depth of knowledge
                cannot be replicated by franchise training programs.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0076CE]/10 text-[#0076CE]">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#052C52]">
                Owner-Operated, Every Job
              </h3>
              <p className="leading-relaxed text-gray-600">
                When you hire Yuri&apos;s, Yuri himself does the work. No
                subcontractors, no rotating crew members, no guessing who shows
                up. You get the same master-level craftsman every single time.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0076CE]/10 text-[#0076CE]">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#052C52]">
                Local Accountability
              </h3>
              <p className="leading-relaxed text-gray-600">
                Yuri lives and works in this community. His reputation in{" "}
                {location.name} and across {location.county} is built on
                consistent, honest results — not marketing budgets. Your
                satisfaction is his livelihood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <NearbyAreas currentSlug={slug} neighbors={neighbors} />

      {/* Contact Form */}
      <ContactForm />
    </>
  );
}
