// Thumbnail images for each course slug
export const COURSE_THUMBS: Record<string, string> = {
  "architecture-cad": "/images/thumb-arch.png",
  "civil-cad": "/images/thumb-civil.png",
  "fashion-cad": "/images/thumb-fashion.png",
  "mechanical-cad": "/images/thumb-mech.png",
  "electrical-cad": "/images/thumb-elec.png",
  "gis": "/images/thumb-gis.png",
};

// Thumbnail images for diploma + vocational programs, keyed by slug.
// Drop matching files into /public/images/ to replace the grey placeholders.
export const DIPLOMA_THUMBS: Record<string, string> = {
  "diploma-mechanical": "/images/diploma-mechanical.png",
  "diploma-cse": "/images/diploma-cse.png",
  "diploma-electrical": "/images/diploma-electrical.png",
  "diploma-architecture": "/images/diploma-architecture.png",
  "diploma-it": "/images/diploma-it.png",
  "diploma-fashion": "/images/diploma-fashion.png",
  "diploma-civil": "/images/diploma-civil.png",
};

export const VOC_THUMBS: Record<string, string> = {
  "voc-it": "/images/voc-it.png",
  "voc-apparel": "/images/voc-apparel.png",
  "voc-healthcare": "/images/voc-healthcare.png",
  "voc-retail": "/images/voc-retail.png",
  "voc-telecom": "/images/voc-telecom.png",
  "voc-automotive": "/images/voc-automotive.png",
  "voc-electronics": "/images/voc-electronics.png",
};

export const CATEGORY_THUMBS: Record<string, string> = {
  "data-analytics": "/images/thumb-data-analytics.png",
  "business-analytics": "/images/thumb-business-analytics.png",
  "ai-ml": "/images/thumb-ai-ml.png",
  "digital-marketing": "/images/thumb-digital-marketing.png",
  "graphics-design": "/images/thumb-graphics-design.png",
  "multimedia": "/images/thumb-multimedia.png",
  "animation": "/images/thumb-animation.png",
  "interior-design": "/images/thumb-interior-design.png",
  "photography": "/images/thumb-photography.png",
  "fashion-design": "/images/thumb-fashion-design.png",
  "boutique-management": "/images/thumb-boutique-management.png",
  "dca": "/images/thumb-dca.png",
  "tally": "/images/thumb-tally.png",
  "adca": "/images/thumb-adca.png",
  "programming": "/images/thumb-programming.png",
  "web-development": "/images/thumb-web-development.png",
  "plc-automation": "/images/thumb-plc-automation.png",
  "scada-systems": "/images/thumb-scada-systems.png",
};

// Resolve a thumbnail for any program slug (cert / diploma / vocational / category).
export function programThumb(slug: string): string | undefined {
  return COURSE_THUMBS[slug] ?? DIPLOMA_THUMBS[slug] ?? VOC_THUMBS[slug] ?? CATEGORY_THUMBS[slug];
}

// Employer logos — local, size-optimised files in /public/logos.
// Keys must match the names in EMPLOYERS (see content.ts).
export const EMPLOYER_LOGOS: Record<string, string> = {
  "TATA Motors": "/logos/tata.png",
  "Foxconn": "/logos/foxconn.svg",
  "Reliance": "/logos/reliance.svg",
  "Yazaki": "/logos/yazaki.svg",
  "Wistron": "/logos/wistron.svg",
  "Amazon": "/logos/amazon.svg",
  "Flipkart": "/logos/flipkart.svg",
  "Blinkit": "/logos/blinkit.svg",
  "Zepto": "/logos/zepto.svg",
  "Apna Mart": "/logos/apna-mart.svg",
  "Jupiter Hospitals": "/logos/jupiter-hospitals.png",
  "HM Hospitals": "/logos/hm-hospitals.png",
  "AIG Hospitals": "/logos/aig-hospitals.png",
  "NU MED Super Speciality Hospitals": "/logos/numed.png",
  "2050 Healthcare": "/logos/2050-healthcare.png",
  "S.P. Apparels": "/logos/sp-apparels.jpg",
  "Modenik Lifestyle": "/logos/modenik.svg",
  "Orient Craft": "/logos/orient-craft.png",
  "Ayuda": "/logos/ayuda.png",
  "L&T": "/logos/lt.svg",
  "Wipro": "/logos/wipro.png",
  "Infosys": "/logos/infosys.webp",
  "Cognizant": "/logos/cognizant.jpg",
  "TCS": "/logos/tcs.webp",
  "HCL": "/logos/hcl.png",
};

// Homepage / brand logo (full VSI colour wordmark, vector).
export const VSI_LOGO = "/logos/vsi.svg";
export const VSI_LOGO_RATIO = 1132 / 312; // width / height

// Logos that use white fills — need CSS invert() to be visible on light parchment bg.
export const LOGO_INVERT_SET = new Set(["Modenik Lifestyle", "Apna Mart"]);

// ════════════════════════════════════════════════════════════════════
//  Accreditation & affiliation marks
// ════════════════════════════════════════════════════════════════════

/**
 * `ratio` is the artwork's own width ÷ height, so a mark can be laid out from a
 * single height without ever being squashed. `scale` then corrects for optical
 * weight: NSDC stacks an emblem over a wordmark and a tagline, and AICTE and
 * Skill India each carry two lines of type — set to the same height as the
 * Autodesk wordmark, which is nothing but capital letters, they read far
 * smaller than it does.
 */
export type OrgLogo = { src: string; ratio: number; scale: number };

export const ORG_LOGOS: Record<string, OrgLogo> = {
  NASSCOM: { src: "/logos/orgs/nasscom.svg", ratio: 1000 / 168, scale: 1 },
  NSDC: { src: "/logos/orgs/nsdc.svg", ratio: 620.49 / 596.1, scale: 1.8 },
  AICTE: { src: "/logos/orgs/aicte.png", ratio: 380 / 73, scale: 1.2 },
  Autodesk: { src: "/logos/orgs/autodesk.svg", ratio: 100 / 11, scale: 0.8 },
  "Skill India": { src: "/logos/orgs/skill-india.svg", ratio: 1229 / 341, scale: 1.25 },
  ASDC: { src: "/logos/orgs/asdc.png", ratio: 164 / 64, scale: 1.45 },
  UPSDM: { src: "/logos/orgs/upsdm.png", ratio: 1, scale: 1.8 },
  RJSD: { src: "/logos/orgs/rjsd.png", ratio: 344 / 147, scale: 1.15 },
};

/**
 * The credential labels in CREDS / FOOTER_ACCREDITATIONS carry qualifiers the
 * artwork does not ("NSDC Aligned", "Autodesk Certified"), so match on the body
 * name. Anything we hold no mark for returns undefined and stays as text at
 * every call site.
 */
export function orgLogo(label: string): OrgLogo | undefined {
  const key = Object.keys(ORG_LOGOS).find((k) =>
    label.toLowerCase().startsWith(k.toLowerCase())
  );
  return key ? ORG_LOGOS[key] : undefined;
}
