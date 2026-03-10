"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  { name: "Carpet Cleaning", href: "/services/carpet-cleaning" },
  { name: "Tile & Grout Cleaning", href: "/services/tile-grout-cleaning" },
  { name: "Pet Odor Treatment", href: "#" },
  { name: "Upholstery Cleaning", href: "#" },
  { name: "Move-Out Cleaning", href: "#" },
  { name: "Stain Removal", href: "#" },
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
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const linkClass =
    "text-sm font-medium text-[#F8FAFC] transition-colors hover:text-[#2F80ED]";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1420] border-b border-[rgba(255,255,255,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-[#F8FAFC] tracking-tight">
              Yuri&apos;s Carpet Cleaning
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 lg:flex">
            <Link href="/" className={linkClass}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1 ${linkClass}`}
              >
                Services
                <svg
                  className={`h-4 w-4 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-56 rounded-lg bg-[#111C2B] py-2 shadow-xl ring-1 ring-[rgba(255,255,255,0.08)]">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2.5 text-sm text-[#D6DEE8] transition-colors hover:bg-[rgba(255,255,255,0.04)] hover:text-[#2F80ED]"
                      onClick={() => setServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/service-areas" className={linkClass}>
              Service Areas
            </Link>
            <a href="#reviews" className={linkClass}>
              Reviews
            </a>
            <Link href="/about" className={linkClass}>
              About
            </Link>
            <Link href="/contact" className={linkClass}>
              Contact
            </Link>

            <a
              href="tel:9165550127"
              className="rounded-full bg-[#2F80ED] px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-[#1E66C7]"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-7 w-7 text-[#F8FAFC]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-[rgba(255,255,255,0.08)] bg-[#111C2B] lg:hidden">
          <div className="space-y-1 px-4 py-4">
            <Link
              href="/"
              className="block rounded-lg px-3 py-2.5 text-[#F8FAFC] hover:text-[#2F80ED]"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#5E6B78]">
              Services
            </div>
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="block rounded-lg px-6 py-2 text-sm text-[#D6DEE8] hover:text-[#2F80ED]"
                onClick={() => setMobileOpen(false)}
              >
                {service.name}
              </Link>
            ))}
            <Link
              href="/service-areas"
              className="block rounded-lg px-3 py-2.5 text-[#F8FAFC] hover:text-[#2F80ED]"
              onClick={() => setMobileOpen(false)}
            >
              Service Areas
            </Link>
            <a
              href="#reviews"
              className="block rounded-lg px-3 py-2.5 text-[#F8FAFC] hover:text-[#2F80ED]"
              onClick={() => setMobileOpen(false)}
            >
              Reviews
            </a>
            <Link
              href="/about"
              className="block rounded-lg px-3 py-2.5 text-[#F8FAFC] hover:text-[#2F80ED]"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block rounded-lg px-3 py-2.5 text-[#F8FAFC] hover:text-[#2F80ED]"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:9165550127"
              className="mt-2 block rounded-full bg-[#2F80ED] px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white hover:bg-[#1E66C7]"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
