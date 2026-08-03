import type { Metadata } from "next";

const title = "Placements — 45,000+ Careers Built";
const description =
  "See where Venture Skill India graduates work. 45,000+ students placed with leading employers, backed by 100% placement assistance across CAD, IT and vocational programs.";

export const metadata: Metadata = {
  title: "Placements",
  description,
  alternates: { canonical: "/placements" },
  openGraph: { title, description, url: "/placements" },
  twitter: { title, description },
};

export default function PlacementsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
