// =============================================================================
// SEO Configuration - Yuri's Carpet Cleaning
// =============================================================================

import type { Location } from "./locations";
import type { Service } from "./services";

// -----------------------------------------------------------------------------
// Base Site Metadata
// -----------------------------------------------------------------------------

export const siteMetadata = {
  siteName: "Yuri's Carpet Cleaning",
  siteUrl: "https://www.yuriscarpetcleaning.com",
  phone: "(530) 613-6300",
  email: "info@yuriscarpetcleaning.com",
  yearsExperience: 27,
  defaultTitle:
    "Yuri's Carpet Cleaning | Expert Carpet Care in Placer, Sacramento & El Dorado Counties",
  defaultDescription:
    "27 years of expert carpet cleaning, repair, and restretching across Placer, Sacramento, and El Dorado counties. Zero-residue deep cleaning, tile & grout restoration, and precision carpet repair. Call today for a free estimate.",
  ogImage: "/images/og-default.jpg",
} as const;

// -----------------------------------------------------------------------------
// Location SEO
// -----------------------------------------------------------------------------

export interface PageMeta {
  title: string;
  description: string;
}

/**
 * Generates unique meta title and description for a location page,
 * optionally scoped to a specific service.
 */
export function generateLocationMeta(
  location: Location,
  service?: Service
): PageMeta {
  if (service) {
    return {
      title: `${service.name} in ${location.name}, CA | Yuri's - ${siteMetadata.yearsExperience} Years Experience`,
      description: buildLocationServiceDescription(location, service),
    };
  }

  return {
    title: `Expert Carpet Cleaning & Repair in ${location.name}, CA | Yuri's - ${siteMetadata.yearsExperience} Years Experience`,
    description: buildLocationDescription(location),
  };
}

function buildLocationDescription(location: Location): string {
  if (location.region === "foothills") {
    return `Yuri's Carpet Cleaning serves ${location.name}, CA with ${siteMetadata.yearsExperience} years of expertise. Our foothills-tested methods tackle red clay dirt, pine needle debris, and seasonal pollen embedded in your carpets. Deep cleaning, repair, restretching & tile restoration. Call ${siteMetadata.phone} for a free estimate.`;
  }

  return `Yuri's Carpet Cleaning serves ${location.name}, CA with ${siteMetadata.yearsExperience} years of expertise. We specialize in high-traffic family homes and pet maintenance, delivering zero-residue deep cleaning that keeps your home healthier. Carpet repair, restretching & tile restoration. Call ${siteMetadata.phone} for a free estimate.`;
}

function buildLocationServiceDescription(
  location: Location,
  service: Service
): string {
  if (location.region === "foothills") {
    return `Professional ${service.name.toLowerCase()} in ${location.name}, CA. Yuri's ${siteMetadata.yearsExperience}-year foothills expertise handles red clay dirt, pine needles, and tough seasonal soiling unique to the ${location.county} foothills. ${service.shortDescription} Call ${siteMetadata.phone} today.`;
  }

  return `Professional ${service.name.toLowerCase()} in ${location.name}, CA. Yuri's serves busy ${location.name} families and pet owners with ${siteMetadata.yearsExperience} years of proven results. ${service.shortDescription} Call ${siteMetadata.phone} today.`;
}

// -----------------------------------------------------------------------------
// Service SEO
// -----------------------------------------------------------------------------

/**
 * Generates meta title and description for a standalone service page.
 */
export function generateServiceMeta(service: Service): PageMeta {
  return {
    title: `${service.name} | Yuri's Carpet Cleaning - ${siteMetadata.yearsExperience} Years Experience`,
    description: `${service.description.slice(0, 155).trimEnd()}... Serving Placer, Sacramento & El Dorado counties. Call ${siteMetadata.phone} for a free estimate.`,
  };
}
