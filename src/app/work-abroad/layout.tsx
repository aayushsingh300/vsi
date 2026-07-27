import type { Metadata } from "next";

const title = "Work Abroad — Global Career Mobility";
const description =
  "Venture Skill India's overseas pathways, including the German healthcare exchange program — nursing and healthcare mobility with language, upskilling and visa support.";

export const metadata: Metadata = {
  title: "Work Abroad",
  description,
  alternates: { canonical: "/work-abroad" },
  openGraph: { title, description, url: "/work-abroad" },
  twitter: { title, description },
};

export default function WorkAbroadLayout({ children }: { children: React.ReactNode }) {
  return children;
}
