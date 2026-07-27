import type { Metadata } from "next";

const title = "CSR & Social Impact";
const description =
  "Venture Skill India's CSR initiatives — free and subsidized skill-training camps bringing employable skills to underserved communities across Jharkhand.";

export const metadata: Metadata = {
  title: "CSR & Social Impact",
  description,
  alternates: { canonical: "/csr" },
  openGraph: { title, description, url: "/csr" },
  twitter: { title, description },
};

export default function CsrLayout({ children }: { children: React.ReactNode }) {
  return children;
}
