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

// Resolve a thumbnail for any program slug (cert / diploma / vocational).
export function programThumb(slug: string): string | undefined {
  return COURSE_THUMBS[slug] ?? DIPLOMA_THUMBS[slug] ?? VOC_THUMBS[slug];
}

// Employer logos — local, size-optimised files in /public/logos.
// Keys must match the names in EMPLOYERS (see content.ts).
export const EMPLOYER_LOGOS: Record<string, string> = {
  "TATA Motors": "/logos/tata.png",
  "TATA Electronics": "/logos/tata.png",
  // "Foxconn": no logo available — will show text fallback
  "Wistron": "/logos/wistron.svg",
  "Amazon": "/logos/amazon.svg",
  "Flipkart": "/logos/flipkart.svg",
  "Blinkit": "/logos/blinkit.svg",
  "Zepto": "/logos/zepto.svg",
  "Jupiter Hospitals": "/logos/jupiter-hospitals.png",
  "HM Hospitals": "/logos/hm-hospitals.png",
  "S.P. Apparels": "/logos/sp-apparels.jpg",
  "Modenik Lifestyle": "/logos/modenik.svg",
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
export const LOGO_INVERT_SET = new Set(["Modenik Lifestyle"]);
