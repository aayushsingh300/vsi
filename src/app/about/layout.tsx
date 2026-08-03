import type { Metadata } from "next";

const title = "About Us — 25 Years of Skilling Eastern India";
const description =
  "The story of Venture Skill India — founded in Ranchi in 2001 and now a government-recognized institution with 45,000+ placements across CAD, EV and emerging-tech programs.";

export const metadata: Metadata = {
  title: "About Us",
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about" },
  twitter: { title, description },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
