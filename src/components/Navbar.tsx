"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  { name: "Carpet Cleaning", slug: "carpet-cleaning" },
  { name: "Tile & Grout Cleaning", slug: "tile-grout-cleaning" },
  { name: "Carpet Repair", slug: "carpet-repair" },
  { name: "Carpet Restretching", slug: "carpet-restretching" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#052C52]">
              Yuri&apos;s Carpet Cleaning
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 lg:flex">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-[#0076CE] ${
                scrolled ? "text-[#052C52]" : "text-white"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#0076CE] ${
                  scrolled ? "text-[#052C52]" : "text-white"
                }`}
              >
                Services
                <svg
                  className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-white py-2 shadow-xl ring-1 ring-black/5">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block px-4 py-2.5 text-sm text-[#052C52] transition-colors hover:bg-[#0076CE]/5 hover:text-[#0076CE]"
                      onClick={() => setServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/service-areas"
              className={`text-sm font-medium transition-colors hover:text-[#0076CE] ${
                scrolled ? "text-[#052C52]" : "text-white"
              }`}
            >
              Service Areas
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-[#0076CE] ${
                scrolled ? "text-[#052C52]" : "text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-[#0076CE] ${
                scrolled ? "text-[#052C52]" : "text-white"
              }`}
            >
              Contact
            </Link>

            <a
              href="tel:9165550127"
              className="rounded-full bg-[#0076CE] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#005fa3] hover:shadow-lg"
            >
              Call Yuri: (916) 555-0127
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className={`h-7 w-7 ${scrolled ? "text-[#052C52]" : "text-white"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <div className="space-y-1 px-4 py-4">
            <Link
              href="/"
              className="block rounded-lg px-3 py-2.5 text-[#052C52] hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Services
            </div>
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block rounded-lg px-6 py-2 text-sm text-[#052C52] hover:bg-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                {service.name}
              </Link>
            ))}
            <Link
              href="/service-areas"
              className="block rounded-lg px-3 py-2.5 text-[#052C52] hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              Service Areas
            </Link>
            <Link
              href="/about"
              className="block rounded-lg px-3 py-2.5 text-[#052C52] hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block rounded-lg px-3 py-2.5 text-[#052C52] hover:bg-gray-50"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:9165550127"
              className="mt-2 block rounded-full bg-[#0076CE] px-6 py-3 text-center text-sm font-semibold text-white"
            >
              Call Yuri: (916) 555-0127
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
