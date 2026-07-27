// ════════════════════════════════════════════════════════════════════
//  Central SEO configuration for Venture Skill India
//  ─ Single source of truth for site URL, org details and JSON-LD.
//  ─ Set NEXT_PUBLIC_SITE_URL in the deployment env to the real domain.
// ════════════════════════════════════════════════════════════════════

// IMPORTANT: confirm the production domain and set NEXT_PUBLIC_SITE_URL.
// Falls back to the .co.in domain implied by the org's email addresses.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.ventureskillindia.co.in"
).replace(/\/$/, "");

export const SITE_NAME = "Venture Skill India";

// Default social-share image (1200×630 recommended — see SEO report).
export const OG_IMAGE = "/images/students-campus.png";

// Organization / contact details used across metadata and JSON-LD.
export const ORG = {
  legalName: "Venture Skill India",
  foundingYear: "2001",
  phone: "+91-9431103263",
  email: "info@ventureskillindia.co.in",
  street: "601, 6th Floor, Panchwati Plaza, Kutchery Road",
  city: "Ranchi",
  region: "Jharkhand",
  postalCode: "834001",
  country: "IN",
};

// EducationalOrganization structured data (JSON-LD) for the homepage.
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    alternateName: "VSI",
    url: SITE_URL,
    logo: `${SITE_URL}/logos/vsi.svg`,
    image: `${SITE_URL}${OG_IMAGE}`,
    description:
      "Government-recognized skill development institution in Ranchi, Jharkhand offering Certificate, Diploma and Vocational programs in CAD, EV, drone and emerging technologies. NSDC · AICTE · Autodesk Authorized.",
    foundingDate: ORG.foundingYear,
    email: ORG.email,
    telephone: ORG.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: ORG.street,
      addressLocality: ORG.city,
      addressRegion: ORG.region,
      postalCode: ORG.postalCode,
      addressCountry: ORG.country,
    },
    areaServed: "IN",
    sameAs: [] as string[], // TODO: add verified social profile URLs
  };
}
