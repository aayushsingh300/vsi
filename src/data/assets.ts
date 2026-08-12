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

// ════════════════════════════════════════════════════════════════════
//  Employer artwork
// ════════════════════════════════════════════════════════════════════

/**
 * Employer logos — local, size-optimised files in /public/logos — carrying the
 * two numbers a logo wall needs.
 *
 * `ratio` is the FILE's width ÷ height, so a mark can be laid out from a single
 * height without ever being squashed.
 *
 * `scale` is the optical correction, and on this set it is doing real work.
 * Dropped into equal boxes with `object-fit: contain`, these logos rendered at
 * wildly different sizes for two compounding reasons:
 *
 *   1. Aspect ratio. In a box wider than it is tall, a 3:1 wordmark is
 *      height-limited and fills the box, while an 11:1 wordmark is
 *      width-limited and renders as a sliver. Equal boxes ≠ equal marks.
 *   2. Baked-in padding. Half the raster files are artwork centred on a 16:9
 *      canvas — TATA's wordmark is 462×50 of ink on a 480×270 field, i.e. 18%
 *      of the height it claims. `contain` fits the CANVAS, so the ink came out
 *      at a fifth the size of a tightly-cropped SVG beside it.
 *
 * So `scale` is derived, not eyeballed. Each file was rendered to a canvas and
 * its painted pixels measured, giving the ink's own aspect ratio and the
 * fraction of the file's height the ink actually occupies. From those:
 *
 *   target ink height  ←  a ladder on the INK ratio, because a square mark
 *                         reads well tall and a wordmark reads well short:
 *                         ≤1.3 → 30px, ≤2.2 → 27, ≤3.3 → 23, ≤5 → 19,
 *                         ≤8 → 15, else 12
 *   scale              =  target ÷ (ink height fraction × 30px base)
 *
 * The `// ink a:b · h%` comments record the measurement each scale came from.
 * Note this is not a raster/vector split: half the SVGs are padded too —
 * Foxconn's wordmark is 32% of its viewBox height.
 *
 * If artwork is replaced, re-measure rather than guessing. A tightly-cropped
 * ~3:1 file wants a scale near 0.77.
 *
 * The healthcare and apparel marks then sit one step above what the ladder
 * gives them: they are lockups that stack a mark over a tagline, and the
 * tagline occupies height without adding any presence, so measured alongside
 * a plain wordmark they come out looking a size smaller.
 */
export type EmployerMark = { src: string; ratio: number; scale: number };

export const EMPLOYER_MARKS: Record<string, EmployerMark> = {
  // Automotive & manufacturing
  "TATA Motors": { src: "/logos/tata.png", ratio: 1.778, scale: 2.15 },      // ink 9.18:1 · 19%
  "Foxconn": { src: "/logos/foxconn.svg", ratio: 3.333, scale: 1.55 },       // ink 7.78:1 · 32%
  "Wistron": { src: "/logos/wistron.svg", ratio: 5.146, scale: 0.53 },       // ink 5.34:1 · 95%
  "Reliance": { src: "/logos/reliance.svg", ratio: 3.333, scale: 1.22 },     // ink 5.96:1 · 41%
  "Yazaki": { src: "/logos/yazaki.svg", ratio: 3.333, scale: 1.25 },         // ink 5.36:1 · 40%

  // Logistics & e-commerce
  "Amazon": { src: "/logos/amazon.svg", ratio: 3.313, scale: 0.63 },         // ink 3.32:1 · 100%
  "Flipkart": { src: "/logos/flipkart.svg", ratio: 1.5, scale: 2.08 },       // ink 3.79:1 · 31%
  "Blinkit": { src: "/logos/blinkit.svg", ratio: 1, scale: 1 },              // app-icon roundel
  "Zepto": { src: "/logos/zepto.svg", ratio: 3, scale: 0.78 },               // ink 3.06:1 · 98%
  "Apna Mart": { src: "/logos/apna-mart.svg", ratio: 11.198, scale: 0.4 },   // ink 11.1:1 · 100%

  // Healthcare
  "Jupiter Hospitals": { src: "/logos/jupiter-hospitals.png", ratio: 2.775, scale: 0.9 },
  "HM Hospitals": { src: "/logos/hm-hospitals.png", ratio: 2.143, scale: 1.05 },
  "AIG Hospitals": { src: "/logos/aig-hospitals.png", ratio: 1.936, scale: 1.05 },   // ink 2:1 · 91%
  "NU MED Super Speciality Hospitals": { src: "/logos/numed.png", ratio: 3.204, scale: 0.92 },
  "2050 Healthcare": { src: "/logos/2050-healthcare.png", ratio: 2.442, scale: 0.92 },

  // Apparel & textiles
  "S.P. Apparels": { src: "/logos/sp-apparels.jpg", ratio: 5.852, scale: 0.62 },
  "Modenik Lifestyle": { src: "/logos/modenik.svg", ratio: 6.619, scale: 0.51 },
  "Orient Craft": { src: "/logos/orient-craft.png", ratio: 2.133, scale: 1.05 },
  "Ayuda": { src: "/logos/ayuda.png", ratio: 2.977, scale: 0.9 },

  // IT services & retail — used on the ticker and course pages
  "L&T": { src: "/logos/lt.svg", ratio: 3.816, scale: 0.91 },                // ink 4.84:1 · 69%
  "Myntra": { src: "/logos/myntra.png", ratio: 1.778, scale: 1.38 },         // ink 3.06:1 · 56%
  "Wipro": { src: "/logos/wipro.png", ratio: 1.778, scale: 1.02 },           // ink 1.25:1 · 99%
  "Infosys": { src: "/logos/infosys.webp", ratio: 2.706, scale: 0.88 },
  "Cognizant": { src: "/logos/cognizant.jpg", ratio: 1.778, scale: 1.62 },   // ink 5.47:1 · 31%
  "TCS": { src: "/logos/tcs.webp", ratio: 2.485, scale: 1.12 },              // ink 3.62:1 · 57%
  "HCL": { src: "/logos/hcl.png", ratio: 1.778, scale: 1.95 },               // ink 6.85:1 · 26%
};

// Path-only view, for the call sites that just need a src.
export const EMPLOYER_LOGOS: Record<string, string> = Object.fromEntries(
  Object.entries(EMPLOYER_MARKS).map(([name, m]) => [name, m.src])
);

export function employerMark(name: string): EmployerMark | undefined {
  return EMPLOYER_MARKS[name];
}

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
 * weight — NSDC stacks an emblem over a wordmark, Autodesk is nothing but
 * capitals, and set to one height the two read nothing alike.
 *
 * Same derivation as EMPLOYER_MARKS: each file was rendered and its painted
 * pixels measured, then the scale solved so the INK lands on a target height
 * chosen from the ink's own aspect ratio — 24px at 1:1 down to 9.5px past 9:1,
 * against the 15px base the hero strip sets. Equal area beats equal height:
 * a 7:1 wordmark set as tall as a roundel dwarfs it.
 */
export type OrgLogo = { src: string; ratio: number; scale: number };

export const ORG_LOGOS: Record<string, OrgLogo> = {
  // NASSCOM sits a step below its computed size and AICTE a step above:
  // NASSCOM's wordmark is set in a heavy lowercase that carries more weight
  // per pixel than anything else in the row, and AICTE's seal-plus-two-lines
  // lockup carries less.
  NASSCOM: { src: "/logos/orgs/nasscom.svg", ratio: 1000 / 168, scale: 0.82 },   // ink 7.06:1 · 84%
  NSDC: { src: "/logos/orgs/nsdc.svg", ratio: 620.49 / 596.1, scale: 1.92 },     // ink 1.04:1 · 90%
  AICTE: { src: "/logos/orgs/aicte.png", ratio: 380 / 73, scale: 0.98 },         // ink 5.21:1 · 100%
  Autodesk: { src: "/logos/orgs/autodesk.svg", ratio: 100 / 11, scale: 0.70 },   // ink 9.63:1 · 94%
  "Skill India": { src: "/logos/orgs/skill-india.svg", ratio: 1229 / 341, scale: 1.08 }, // ink 3.61:1 · 100%
  ASDC: { src: "/logos/orgs/asdc.png", ratio: 164 / 64, scale: 1.34 },           // ink 3.38:1 · 75%
  UPSDM: { src: "/logos/orgs/upsdm.png", ratio: 1, scale: 2.09 },                // ink 1.11:1 · 77%
  RJSD: { src: "/logos/orgs/rjsd.png", ratio: 344 / 147, scale: 1.32 },          // ink 2.48:1 · 94%
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
