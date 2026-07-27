import type { Metadata } from "next";
import { getProgram, ALL_PROGRAMS } from "@/data/content";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

// Pre-render every course detail page at build time.
export function generateStaticParams() {
  return ALL_PROGRAMS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getProgram(slug);

  if (!course) {
    return { title: "Course not found" };
  }

  const title = `${course.name} — ${course.kind} Course in Ranchi`;
  const description =
    course.longDesc?.slice(0, 200) ||
    `${course.name}: a ${course.kind.toLowerCase()} program at Venture Skill India, Ranchi with placement assistance.`;
  const url = `/courses/${course.slug}`;

  return {
    title: `${course.name} — ${course.kind} Course`,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article" },
    twitter: { title, description },
  };
}

function courseJsonLd(slug: string) {
  const course = getProgram(slug);
  if (!course) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.longDesc || course.name,
    provider: {
      "@type": "EducationalOrganization",
      name: SITE_NAME,
      sameAs: SITE_URL,
    },
    educationalCredentialAwarded: course.kind,
  };
}

export default async function CourseLayout({ children, params }: Props) {
  const { slug } = await params;
  const jsonLd = courseJsonLd(slug);
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
