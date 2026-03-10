import type { Metadata } from "next";
import Image from "next/image";
import { siteMetadata } from "@/data/seo-config";
import TrustSignature from "@/components/TrustSignature";
import ContactForm from "@/components/ContactForm";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "About Yuri | 27 Years of Master Carpet Care",
  description:
    "Meet Yuri — the owner-operator behind 27 years of expert carpet cleaning, repair, and restretching across the greater Sacramento region. No subcontractors, no franchise crews. Just one master craftsman dedicated to your home.",
  openGraph: {
    title: "About Yuri | 27 Years of Master Carpet Care",
    description:
      "Meet Yuri — the owner-operator behind 27 years of expert carpet cleaning, repair, and restretching across the greater Sacramento region.",
    url: `${siteMetadata.siteUrl}/about`,
    siteName: siteMetadata.siteName,
  },
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#052C52] py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#0076CE]">
            The Man Behind the Machine
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Meet Yuri &mdash; Your Carpet&apos;s Best Friend
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            For 27 years, one man has been restoring carpets across the greater
            Sacramento region with the precision of a surgeon and the care of a
            craftsman. No call centers. No franchise playbook. Just Yuri.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Yuri's Portrait */}
            <div className="mx-auto mb-10 flex justify-center">
              <div className="relative h-56 w-56 overflow-hidden rounded-2xl shadow-xl sm:h-64 sm:w-64">
                <Image
                  src="/images/yuri-portrait.png"
                  alt="Yuri, master carpet cleaning professional with 27 years of experience"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-[#052C52] sm:text-4xl">
              27 Years of Hands-On Mastery
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                When Yuri started cleaning carpets nearly three decades ago, he
                made a decision that would define his entire career: he would
                never hand off a job to someone else. Every home he enters, every
                stain he treats, every carpet he stretches &mdash; it&apos;s his
                hands doing the work.
              </p>
              <p>
                That commitment has never wavered. While franchise operations
                cycle through crews of minimally trained technicians, Yuri has
                spent 27 years building a depth of expertise that simply cannot
                be replicated by a training manual. He has cleaned tens of
                thousands of carpets, diagnosed every type of fiber damage, and
                developed cleaning chemistry knowledge that comes only from
                decades of real-world experience.
              </p>
              <p>
                From the red clay foothills of Auburn and the oak-studded hills
                of El Dorado to the busy family homes throughout Roseville,
                Rocklin, and Sacramento, Yuri knows the unique challenges each
                environment brings to your carpets. Foothills homes face
                laterite clay and pine debris. Valley homes battle pet traffic
                and daily wear. Yuri tailors every approach to what your specific
                carpet and conditions demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner-Operator Section */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#052C52] sm:text-4xl">
              Owner-Operated &mdash; Every Single Job
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                When you call Yuri&apos;s Carpet Cleaning, you&apos;re not
                getting a dispatcher, a rotating crew, or a subcontractor who
                showed up last week. You&apos;re getting Yuri. The same master
                craftsman who has built his reputation one home at a time across
                Placer, Sacramento, and El Dorado counties.
              </p>
              <p>
                This isn&apos;t just a business philosophy &mdash; it&apos;s a
                guarantee of quality. When the owner is the one on his knees
                inspecting your carpet fibers, there are no shortcuts. There is
                no &ldquo;good enough.&rdquo; Every job carries his name, and
                every result reflects 27 years of personal pride in the craft.
              </p>
              <p>
                No subcontractors. No guessing who shows up. No corporate
                overhead inflating your bill. Just honest, expert carpet care
                from someone who lives and works in your community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Summary */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#052C52] sm:text-4xl">
              From the Auburn Foothills to Downtown Sacramento
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Yuri&apos;s service area spans the I-80 corridor from Meadow Vista
              and Auburn through Rocklin and Roseville, the Highway 50 corridor
              from Folsom and El Dorado Hills to Rancho Cordova and Sacramento,
              and every community in between. Over 22 cities across three
              counties trust Yuri with their carpets, tile, and flooring.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signature */}
      <TrustSignature />

      {/* Contact Form */}
      <ContactForm />
    </>
  );
}
