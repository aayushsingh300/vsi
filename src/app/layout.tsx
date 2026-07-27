import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";
import { SITE_URL, SITE_NAME, OG_IMAGE, organizationJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Venture Skill India — Where Eastern India's Workforce Is Built",
    template: `%s · ${SITE_NAME}`,
  },
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
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    url: SITE_URL,
    title: "Venture Skill India — Where Eastern India's Workforce Is Built",
    description:
      "23 years. 11,000+ placed. Government-recognized skill institution with EV labs, drone labs, and Autodesk-authorized CAD workstations in Ranchi, Jharkhand.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Venture Skill India campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venture Skill India — Where Eastern India's Workforce Is Built",
    description:
      "23 years. 11,000+ placed. Government-recognized skill institution in Ranchi, Jharkhand. NSDC · AICTE · Autodesk Authorized.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
