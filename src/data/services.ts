// =============================================================================
// Service Definitions - Yuri's Carpet Cleaning
// =============================================================================

export interface Service {
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  features: string[];
  icon: string;
  ctaText: string;
}

const services: Service[] = [
  {
    name: "Master Carpet Cleaning",
    slug: "carpet-cleaning",
    shortDescription:
      "Deep-clean technology with pH-balanced rinsing that leaves zero residue and extends carpet life.",
    description:
      "Our Master Carpet Cleaning service goes far beyond surface-level extraction. Yuri's uses fiber-specific chemistry matched to your carpet's material — whether nylon, polyester, wool, or olefin — to break down embedded soil without damaging delicate fibers. Every cleaning finishes with a pH-balanced rinse that neutralizes alkaline residue, leaving carpets soft, fresh, and truly clean. The result is a zero-residue finish that resists rapid re-soiling and keeps your home healthier between cleanings.",
    features: [
      "pH-balanced rinsing that neutralizes cleaning agents completely",
      "Fiber-specific chemistry matched to your carpet's material",
      "Zero-residue finish that resists rapid re-soiling",
      "Hot water extraction at controlled temperatures",
      "Pre-treatment of high-traffic lanes and spotted areas",
      "Speed-dry fan placement for faster dry times",
    ],
    icon: "sparkles",
    ctaText: "Schedule Your Deep Clean",
  },
  {
    name: "Tile & Grout Restoration",
    slug: "tile-grout-cleaning",
    shortDescription:
      "High-pressure deep extraction and grout sealing that restores tile floors to like-new condition.",
    description:
      "Tile floors look clean on the surface, but grout lines trap years of embedded dirt, grease, and bacteria that mopping can never reach. Yuri's Tile & Grout Restoration uses high-pressure, high-temperature extraction to pull contaminants from deep within porous grout. We follow up with professional-grade grout sealing to lock out future staining and offer color restoration for grout that has permanently discolored. The result is tile that looks and feels like the day it was installed.",
    features: [
      "High-pressure deep extraction from porous grout lines",
      "Professional-grade grout sealing for lasting protection",
      "Grout color restoration for permanently discolored lines",
      "Alkaline and acidic cleaning agents matched to tile type",
      "Safe for ceramic, porcelain, travertine, and natural stone",
      "Kitchen, bathroom, and entryway specialty treatments",
    ],
    icon: "grid",
    ctaText: "Restore Your Tile Floors",
  },
  {
    name: "Precision Carpet Repair",
    slug: "carpet-repair",
    shortDescription:
      "Invisible seaming, precision patching, and burn or stain repair that saves your carpet from replacement.",
    description:
      "Before you rip out carpet over a burn mark, bleach stain, or torn seam, call Yuri's. Our Precision Carpet Repair service uses donor carpet — often harvested from a closet or remnant — to create invisible patches that blend seamlessly with your existing flooring. We repair split seams with professional heat-bond tape, fix transition strips, and address pet-damaged areas. With 27 years of repair experience, Yuri can save carpets that other companies say need replacing.",
    features: [
      "Invisible seaming with professional heat-bond methods",
      "Precision patching using donor carpet from closets or remnants",
      "Burn mark and bleach stain repair",
      "Pet damage restoration — scratched, torn, or frayed areas",
      "Split seam re-bonding and transition strip repair",
      "Color-matched results that blend with surrounding carpet",
    ],
    icon: "wrench",
    ctaText: "Get a Free Repair Estimate",
  },
  {
    name: "Power Carpet Restretching",
    slug: "carpet-restretching",
    shortDescription:
      "Professional power stretching that eliminates wrinkles, ripples, and buckling for a flat, tight carpet.",
    description:
      "Wrinkled, buckled carpet is more than an eyesore — it is a tripping hazard that accelerates wear and can void your carpet warranty. Yuri's Power Carpet Restretching uses a professional power stretcher — not a knee-kicker — to pull carpet tight against the walls and re-anchor it to tack strips. The power stretcher reaches across entire rooms for uniform tension, eliminating wrinkles and ripples permanently. Proper restretching can add years to your carpet's useful life and restore a smooth, professional appearance.",
    features: [
      "Professional power stretcher for wall-to-wall uniform tension",
      "Eliminates wrinkles, ripples, and buckling permanently",
      "Re-anchors carpet to tack strips for a secure fit",
      "Extends carpet lifespan by reducing premature wear",
      "Addresses tripping hazards from loose carpet",
      "Full-room and hallway restretching available",
    ],
    icon: "arrowsExpand",
    ctaText: "Fix Your Wrinkled Carpet",
  },
];

// -----------------------------------------------------------------------------
// Helper Functions
// -----------------------------------------------------------------------------

/** Returns all available services. */
export function getAllServices(): Service[] {
  return services;
}

/** Finds a single Service by its URL slug, or undefined if not found. */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((svc) => svc.slug === slug);
}
