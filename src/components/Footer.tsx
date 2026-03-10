import Link from "next/link";

const services = [
  { name: "Carpet Cleaning", href: "/services/carpet-cleaning" },
  { name: "Tile & Grout Cleaning", href: "/services/tile-grout-cleaning" },
  { name: "Carpet Repair", href: "/services/carpet-repair" },
  { name: "Carpet Restretching", href: "/services/carpet-restretching" },
];

const i80Hwy65Corridor = [
  { name: "Meadow Vista", slug: "meadow-vista-ca" },
  { name: "Applegate", slug: "applegate-ca" },
  { name: "Auburn", slug: "auburn-ca" },
  { name: "Newcastle", slug: "newcastle-ca" },
  { name: "Penryn", slug: "penryn-ca" },
  { name: "Loomis", slug: "loomis-ca" },
  { name: "Rocklin", slug: "rocklin-ca" },
  { name: "Roseville", slug: "roseville-ca" },
  { name: "Lincoln", slug: "lincoln-ca" },
  { name: "Granite Bay", slug: "granite-bay-ca" },
];

const hwy50Sacramento = [
  { name: "Cameron Park", slug: "cameron-park-ca" },
  { name: "Shingle Springs", slug: "shingle-springs-ca" },
  { name: "El Dorado Hills", slug: "el-dorado-hills-ca" },
  { name: "Folsom", slug: "folsom-ca" },
  { name: "Orangevale", slug: "orangevale-ca" },
  { name: "Fair Oaks", slug: "fair-oaks-ca" },
  { name: "Carmichael", slug: "carmichael-ca" },
  { name: "Rancho Cordova", slug: "rancho-cordova-ca" },
  { name: "Citrus Heights", slug: "citrus-heights-ca" },
  { name: "Antelope", slug: "antelope-ca" },
  { name: "North Highlands", slug: "north-highlands-ca" },
  { name: "Sacramento", slug: "sacramento-ca" },
];

export default function Footer() {
  return (
    <footer className="bg-[#052C52] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold text-white">
              Yuri&apos;s Carpet Cleaning
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              27 Years of Master Carpet Care
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="tel:+19165550127"
                className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-white"
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
                className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-white"
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
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Our Services
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-300 transition-colors hover:text-[#0076CE]"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: I-80 & Hwy 65 Corridor (Placer County) */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              I-80 &amp; Hwy 65 Corridor
            </h3>
            <ul className="mt-4 space-y-2">
              {i80Hwy65Corridor.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/service-areas/${city.slug}`}
                    className="text-sm text-gray-300 transition-colors hover:text-[#0076CE]"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Hwy 50 & Sacramento */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Hwy 50 &amp; Sacramento
            </h3>
            <ul className="mt-4 space-y-2">
              {hwy50Sacramento.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/service-areas/${city.slug}`}
                    className="text-sm text-gray-300 transition-colors hover:text-[#0076CE]"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-gray-400">
            &copy; 2026 Yuri&apos;s Carpet Cleaning. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-400">
            Powered by{" "}
            <a
              href="https://webvello.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0076CE] transition-colors hover:text-white"
            >
              Webvello.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
