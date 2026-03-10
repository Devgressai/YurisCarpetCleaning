import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Yuri's Carpet Cleaning | Professional Carpet & Tile Cleaning Done Right",
  description:
    "27 years of owner-operated carpet cleaning, tile & grout restoration, and pet odor treatment serving Auburn, Rocklin, Roseville, and the greater Sacramento area.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Yuri's Carpet Cleaning",
  description:
    "27 years of owner-operated carpet cleaning, tile & grout restoration, and pet odor treatment serving Auburn, Rocklin, Roseville, and the greater Sacramento area.",
  areaServed: [
    { "@type": "Place", name: "Sacramento County, CA" },
    { "@type": "Place", name: "Placer County, CA" },
    { "@type": "Place", name: "El Dorado County, CA" },
  ],
  telephone: "(916) 555-0127",
  priceRange: "$$",
  foundingDate: "1999",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
