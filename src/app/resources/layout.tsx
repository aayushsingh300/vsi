import type { Metadata } from "next";

const title = "Resources & Downloads";
const description =
  "Brochures, syllabi and learning resources from Venture Skill India to help you choose the right skilling program and prepare for a career.";

export const metadata: Metadata = {
  title: "Resources & Downloads",
  description,
  alternates: { canonical: "/resources" },
  openGraph: { title, description, url: "/resources" },
  twitter: { title, description },
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
