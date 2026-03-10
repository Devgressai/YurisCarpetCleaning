import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { siteMetadata } from "@/data/seo-config";

export const metadata: Metadata = {
  title:
    "Master Carpet Cleaning | pH-Balanced Deep Clean | Yuri's 27-Year Expert",
  description:
    "Professional carpet cleaning with fiber-specific chemistry and pH-balanced rinsing for a zero-residue finish. 27 years of experience serving Placer, Sacramento & El Dorado counties. Call (530) 613-6300.",
  openGraph: {
    title:
      "Master Carpet Cleaning | pH-Balanced Deep Clean | Yuri's 27-Year Expert",
    description:
      "Professional carpet cleaning with fiber-specific chemistry and pH-balanced rinsing for a zero-residue finish. Serving Auburn, Roseville, Rocklin, Folsom & El Dorado Hills.",
    url: `${siteMetadata.siteUrl}/services/carpet-cleaning`,
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

const processSteps = [
  {
    number: "01",
    title: "Inspection",
    description:
      "Yuri examines every room — identifying fiber type, stain composition, wear patterns, and areas needing special attention.",
  },
  {
    number: "02",
    title: "pH Analysis",
    description:
      "Your carpet's fiber chemistry determines the exact cleaning agents and water temperature used. Nylon, polyester, wool, and olefin each get a tailored approach.",
  },
  {
    number: "03",
    title: "Hot Water Extraction",
    description:
      "Truck-mounted equipment delivers controlled-temperature water deep into the carpet pile, flushing out embedded soil, allergens, and residue while a powerful vacuum extracts it all.",
  },
  {
    number: "04",
    title: "Final Review",
    description:
      "Yuri walks you through every room, checking results under multiple light angles. If a spot doesn't meet his standard, he re-treats it on the spot.",
  },
];

export default function CarpetCleaningPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Master Carpet Cleaning",
    provider: {
      "@type": "LocalBusiness",
      name: siteMetadata.siteName,
      telephone: siteMetadata.phone,
      url: siteMetadata.siteUrl,
    },
    description:
      "Professional carpet cleaning with fiber-specific chemistry and pH-balanced rinsing for a zero-residue finish.",
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
      <section className="relative overflow-hidden bg-[#052C52] py-24">
        <Image
          src="/images/carpet-cleaning-service.png"
          alt="Professional carpet cleaning in progress"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#0076CE]">
            Our Signature Service
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Master Carpet Cleaning
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            pH-balanced rinsing and fiber-specific chemistry that leaves zero
            residue — so your carpets stay cleaner, longer. 27 years of hands-on
            expertise in every pass.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${siteMetadata.phone.replace(/[^0-9]/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#0076CE] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#005fa3] hover:shadow-xl"
            >
              Schedule Your Deep Clean
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

      {/* Process */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0076CE]">
              The Process
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#052C52] sm:text-4xl">
              Four Steps to a Truly Clean Carpet
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-gray-100 bg-[#F8FAFC] p-8"
              >
                <span className="mb-4 block text-4xl font-bold text-[#0076CE]/20">
                  {step.number}
                </span>
                <h3 className="mb-3 text-lg font-semibold text-[#052C52]">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
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
                With 27 years of hands-on carpet cleaning experience, Yuri
                doesn&apos;t delegate — he does the work himself. Every job
                benefits from nearly three decades of understanding how different
                fibers respond to different chemistries, temperatures, and
                extraction methods.
              </p>
              <p>
                As an owner-operator, Yuri&apos;s reputation rides on every
                single cleaning. There are no franchise fees padding your bill,
                no rotating technicians learning on your carpet, and no
                corporate scripts replacing genuine expertise.
              </p>
              <p>
                The zero-residue guarantee means your carpets won&apos;t attract
                dirt faster after cleaning — a common problem with companies that
                skip the pH-balanced rinse step. Yuri&apos;s process leaves
                fibers genuinely clean, not coated in soap residue that
                accelerates re-soiling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Professional Cleaning? */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-[#052C52] sm:text-4xl">
              Why Choose Professional Cleaning?
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Consumer-grade carpet cleaners and rental machines lack the water
                temperature, suction power, and chemical precision needed for a
                genuine deep clean. They often leave behind excess moisture that
                promotes mold growth and soap residue that attracts dirt faster
                than before.
              </p>
              <p>
                Professional hot water extraction — performed by an experienced
                technician — reaches the base of the carpet pile where 80% of
                soil accumulates. This is the soil that dulls carpet appearance,
                triggers allergies, and grinds down fibers with every footstep.
              </p>
              <p>
                Carpet manufacturers recommend professional cleaning every 12 to
                18 months to maintain warranty coverage and extend carpet life.
                Yuri&apos;s cleaning process meets or exceeds every major
                manufacturer&apos;s specifications.
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
                  Carpet Cleaning in {city.name}
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
