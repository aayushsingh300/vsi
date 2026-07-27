import type { Metadata } from "next";

const title = "Services — Corporate Training & Skilling Partnerships";
const description =
  "Corporate training, skilling partnerships and consultancy services from Venture Skill India — a government-recognized institution based in Ranchi, Jharkhand.";

export const metadata: Metadata = {
  title: "Services",
  description,
  alternates: { canonical: "/services" },
  openGraph: { title, description, url: "/services" },
  twitter: { title, description },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
