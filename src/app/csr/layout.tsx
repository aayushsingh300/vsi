import type { Metadata } from "next";

const title = "CSR — Venture Sewa Foundation";
const description =
  "Venture Sewa Foundation — the body under which Venture Skill India carries out all CSR activities. Free and subsidized skill-training camps bringing employable skills to underserved communities across Jharkhand.";

export const metadata: Metadata = {
  title: "CSR — Venture Sewa Foundation",
  description,
  alternates: { canonical: "/csr" },
  openGraph: { title, description, url: "/csr" },
  twitter: { title, description },
};

export default function CsrLayout({ children }: { children: React.ReactNode }) {
  return children;
}
