import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Yuri's Carpet Cleaning | 27 Years of Master Carpet Care in Sacramento & Placer County",
  description:
    "Owner-operated carpet cleaning with 27 years of experience serving Auburn to Sacramento. Yuri's Carpet Cleaning delivers master-level care across Sacramento, Placer, and El Dorado Counties.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Yuri's Carpet Cleaning",
  description:
    "Owner-operated carpet cleaning service with 27 years of experience serving Sacramento, Placer, and El Dorado Counties.",
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
        className={`${inter.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
