import type { Metadata } from "next";

const title = "Courses — Certificate, Diploma & Vocational Programs";
const description =
  "Explore CAD, EV, drone, IT, fashion and healthcare programs at Venture Skill India, Ranchi. Autodesk-authorized training with 100% placement assistance.";

export const metadata: Metadata = {
  title: "Courses",
  description,
  alternates: { canonical: "/courses" },
  openGraph: { title, description, url: "/courses" },
  twitter: { title, description },
};

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
