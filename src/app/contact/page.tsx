import type { Metadata } from "next";
import { siteMetadata } from "@/data/seo-config";
import ContactForm from "@/components/ContactForm";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Contact Yuri's Carpet Cleaning | Free Quote",
  description:
    "Get a free carpet cleaning quote from Yuri's Carpet Cleaning. Serving 22+ cities across Placer, Sacramento, and El Dorado counties. Call (530) 613-6300 or fill out our online form.",
  openGraph: {
    title: "Contact Yuri's Carpet Cleaning | Free Quote",
    description:
      "Get a free carpet cleaning quote from Yuri's Carpet Cleaning. Serving 22+ cities across Placer, Sacramento, and El Dorado counties.",
    url: `${siteMetadata.siteUrl}/contact`,
    siteName: siteMetadata.siteName,
  },
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#052C52] py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Have a question or ready for cleaner carpets? Reach out directly
            &mdash; Yuri personally responds to every inquiry.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {/* Phone */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0076CE]/10">
                <svg
                  className="h-7 w-7 text-[#0076CE]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#052C52]">Phone</h3>
              <a
                href={`tel:${siteMetadata.phone.replace(/[^0-9]/g, "")}`}
                className="text-lg font-semibold text-[#0076CE] transition-colors hover:text-[#052C52]"
              >
                {siteMetadata.phone}
              </a>
              <p className="mt-1 text-sm text-gray-500">
                Mon&ndash;Sat, 7 AM &ndash; 7 PM
              </p>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0076CE]/10">
                <svg
                  className="h-7 w-7 text-[#0076CE]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#052C52]">Email</h3>
              <a
                href={`mailto:${siteMetadata.email}`}
                className="text-lg font-semibold text-[#0076CE] transition-colors hover:text-[#052C52]"
              >
                {siteMetadata.email}
              </a>
              <p className="mt-1 text-sm text-gray-500">
                Replies within 24 hours
              </p>
            </div>

            {/* Service Area */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0076CE]/10">
                <svg
                  className="h-7 w-7 text-[#0076CE]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#052C52]">
                Service Area
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                22+ cities across Placer, Sacramento &amp; El Dorado counties
                &mdash; Auburn to Downtown Sacramento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </>
  );
}
