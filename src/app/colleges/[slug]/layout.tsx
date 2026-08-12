import type { Metadata } from "next";
import { getCollege, ALL_COLLEGES } from "@/data/content";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

// Pre-render every campus landing page at build time.
export function generateStaticParams() {
  return ALL_COLLEGES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const college = getCollege(slug);

  if (!college) {
    return { title: "Campus not found" };
  }

  const title = `${college.name} — ${college.district}, ${college.state}`;
  const description = college.blurb;
  const url = `/colleges/${college.slug}`;

  return {
    title: college.name,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article" },
    twitter: { title, description },
  };
}

function collegeJsonLd(slug: string) {
  const college = getCollege(slug);
  if (!college) return null;
  return {
    "@context": "https://schema.org",
    "@type": college.type === "ITI" ? "EducationalOrganization" : "CollegeOrUniversity",
    name: college.name,
    alternateName: college.aka,
    description: college.blurb,
    address: {
      "@type": "PostalAddress",
      addressRegion: college.state,
      addressLocality: college.district,
      addressCountry: "IN",
    },
    ...(college.website ? { url: college.website } : {}),
    parentOrganization: {
      "@type": "EducationalOrganization",
      name: SITE_NAME,
      sameAs: SITE_URL,
    },
  };
}

export default async function CollegeLayout({ children, params }: Props) {
  const { slug } = await params;
  const jsonLd = collegeJsonLd(slug);
  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {children}
    </>
  );
}
