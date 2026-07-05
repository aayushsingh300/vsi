import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";

export const metadata: Metadata = {
  title: "Venture Skill India — Where Eastern India's Workforce Is Built",
  description:
    "23 years. 11,000+ placed. Government-recognized skill institution with EV labs, drone labs, and Autodesk-authorized CAD workstations. NSDC · AICTE · Autodesk Authorized. Certificate, Diploma & Vocational programs in Ranchi, Jharkhand.",
  keywords: [
    "Venture Skill India",
    "CAD training Ranchi",
    "skill development Jharkhand",
    "EV training India",
    "NSDC training centre",
    "AICTE recognized institute",
    "mechanical CAD course",
    "fashion design Ranchi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
