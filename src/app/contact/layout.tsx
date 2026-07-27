import type { Metadata } from "next";

const title = "Contact Us — Ranchi Campus & Admissions";
const description =
  "Get in touch with Venture Skill India, Ranchi. Call +91 94311 03263 or visit our Panchwati Plaza campus. Free career counselling with a 30-minute response.";

export const metadata: Metadata = {
  title: "Contact Us",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact" },
  twitter: { title, description },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
