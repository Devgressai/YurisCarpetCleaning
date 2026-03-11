import Link from "next/link";

const services = [
  { name: "Carpet Cleaning", href: "/services/carpet-cleaning" },
  { name: "Tile & Grout Cleaning", href: "/services/tile-grout-cleaning" },
  { name: "Pet Odor Treatment", href: "#" },
  { name: "Upholstery Cleaning", href: "#" },
  { name: "Move-Out Cleaning", href: "#" },
];

const serviceAreas = [
  { name: "Auburn", slug: "auburn-ca" },
  { name: "Rocklin", slug: "rocklin-ca" },
  { name: "Roseville", slug: "roseville-ca" },
  { name: "Lincoln", slug: "lincoln-ca" },
  { name: "Loomis", slug: "loomis-ca" },
  { name: "Folsom", slug: "folsom-ca" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1420]">
      <div className="divider-glow" />
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo & Description */}
          <div>
            <Link href="/" className="text-xl font-bold text-[#F8FAFC]">
              Yuri&apos;s Carpet Cleaning
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-[#5E6B78]">
              Professional carpet, tile, grout, and odor treatment services with
              27 years of hands-on experience.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#2F80ED] mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-[#5E6B78] transition-colors hover:text-[#2F80ED]"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#2F80ED] mb-6">
              Service Areas
            </h3>
            <ul className="space-y-3">
              {serviceAreas.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/service-areas/${city.slug}`}
                    className="text-sm text-[#5E6B78] transition-colors hover:text-[#2F80ED]"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#2F80ED] mb-6">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+19165550127"
                className="flex items-center gap-3 text-sm text-[#5E6B78] transition-colors hover:text-[#2F80ED]"
              >
                <svg
                  className="h-4 w-4 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (916) 555-0127
              </a>
              <a
                href="mailto:info@yuriscarpetcleaning.com"
                className="flex items-center gap-3 text-sm text-[#5E6B78] transition-colors hover:text-[#2F80ED]"
              >
                <svg
                  className="h-4 w-4 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                info@yuriscarpetcleaning.com
              </a>
              <div className="flex items-center gap-3 text-sm text-[#5E6B78]">
                <svg
                  className="h-4 w-4 shrink-0"
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
                Mon&ndash;Sat: 7:00 AM &ndash; 6:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/[0.04] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-[#5E6B78]">
              &copy; 2026 Yuri&apos;s Carpet Cleaning. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-[#5E6B78] transition-colors hover:text-[#2F80ED]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-[#5E6B78] transition-colors hover:text-[#2F80ED]"
              >
                Terms
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-sm text-[#5E6B78] transition-colors hover:text-[#2F80ED]"
              >
                Sitemap
              </Link>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-[#5E6B78]">
            Powered by{" "}
            <a
              href="https://webvello.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2F80ED] transition-colors hover:text-[#F8FAFC]"
            >
              Webvello.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
