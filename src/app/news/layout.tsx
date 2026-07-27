import type { Metadata } from "next";

const title = "News & Updates";
const description =
  "Latest news, milestones and events from Venture Skill India — new labs, inaugurations, placement drives and industry recognitions.";

export const metadata: Metadata = {
  title: "News & Updates",
  description,
  alternates: { canonical: "/news" },
  openGraph: { title, description, url: "/news" },
  twitter: { title, description },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
