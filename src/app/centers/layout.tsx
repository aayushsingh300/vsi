import type { Metadata } from "next";

const title = "Our Centers — Ranchi Flagship & Regional Hubs";
const description =
  "Visit Venture Skill India training centers, led by our flagship Ranchi campus at Panchwati Plaza with dedicated EV, drone, CAD and fashion labs.";

export const metadata: Metadata = {
  title: "Our Centers",
  description,
  alternates: { canonical: "/centers" },
  openGraph: { title, description, url: "/centers" },
  twitter: { title, description },
};

export default function CentersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
