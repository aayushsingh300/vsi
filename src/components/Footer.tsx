"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { COURSES_CERT } from "@/data/content";
import { VSI_LOGO, VSI_LOGO_RATIO } from "@/data/assets";
import { useLang } from "@/context/LangContext";

const SocialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.08c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
];

const NAV_LINKS = [
  { href: "/courses", key: "navCourses" },
  { href: "/centers", key: "navCenters" },
  { href: "/placements", key: "navPlacements" },
  { href: "/about", key: "navAbout" },
  { href: "/news", key: "navNews" },
  { href: "/contact", key: "navContact" },
];

export default function Footer() {
  const { t } = useLang();

  return (
    <footer
      style={{
        background: "#0A0D12",
        padding: "72px 5% 32px",
        color: "var(--text-inv)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "linear-gradient(to right, transparent, rgba(var(--accent-rgb),.4) 30%, rgba(var(--gold-rgb),.5) 50%, rgba(var(--accent-rgb),.4) 70%, transparent)",
        }}
      />

      {/* Main grid */}
      <div
        className="footer-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
          gap: 52,
          marginBottom: 56,
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Brand column */}
        <div>
          <div style={{ marginBottom: 20 }}>
            <Image
              src={VSI_LOGO}
              alt="Venture Skill India"
              height={34}
              width={Math.round(34 * VSI_LOGO_RATIO)}
              style={{ height: 34, width: "auto", marginBottom: 2 }}
            />
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                letterSpacing: ".14em",
                background: "linear-gradient(90deg, rgba(var(--accent-rgb),.7), rgba(var(--gold-rgb),.7))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textTransform: "uppercase",
                marginTop: 4,
              }}
            >
              Pvt. Ltd. · Est. 2001
            </div>
          </div>
          <p
            style={{
              fontFamily: "var(--body)",
              fontSize: 14,
              lineHeight: 1.74,
              color: "rgba(248,247,244,.38)",
              marginBottom: 24,
              maxWidth: 340,
            }}
          >
            Eastern India&apos;s most government-backed skill institution. 23 years. 11,000+ placed. NSDC · AICTE · Autodesk Authorized.
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            {SocialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 6,
                  border: "1px solid rgba(248,247,244,.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(248,247,244,.4)",
                  transition: "all .22s ease",
                  background: "rgba(255,255,255,.03)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(var(--accent-rgb),.15)";
                  el.style.borderColor = "rgba(var(--accent-rgb),.35)";
                  el.style.color = "var(--accent)";
                  el.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(255,255,255,.03)";
                  el.style.borderColor = "rgba(248,247,244,.1)";
                  el.style.color = "rgba(248,247,244,.4)";
                  el.style.transform = "translateY(0)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "rgba(248,247,244,.25)",
              marginBottom: 20,
            }}
          >
            Explore
          </h4>
          {NAV_LINKS.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontFamily: "var(--body)",
                fontSize: 14,
                color: "rgba(248,247,244,.45)",
                marginBottom: 11,
                transition: "color .18s ease, gap .18s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "rgba(248,247,244,.85)";
                el.style.gap = "8px";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "rgba(248,247,244,.45)";
                el.style.gap = "4px";
              }}
            >
              {t(n.key)}
            </Link>
          ))}
        </div>

        {/* Programs */}
        <div>
          <h4
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "rgba(248,247,244,.25)",
              marginBottom: 20,
            }}
          >
            Top Programs
          </h4>
          {COURSES_CERT.slice(0, 5).map((c) => (
            <Link
              key={c.slug}
              href="/courses"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontFamily: "var(--body)",
                fontSize: 14,
                color: "rgba(248,247,244,.45)",
                marginBottom: 11,
                transition: "color .18s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(248,247,244,.85)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(248,247,244,.45)";
              }}
            >
              {c.name}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "rgba(248,247,244,.25)",
              marginBottom: 20,
            }}
          >
            Get in Touch
          </h4>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 16 }}>
            <MapPin size={14} color="rgba(var(--accent-rgb),.6)" style={{ marginTop: 3, flexShrink: 0 }} />
            <span style={{ fontSize: 13, color: "rgba(248,247,244,.45)", lineHeight: 1.6, fontFamily: "var(--body)" }}>
              601, Panchwati Plaza,<br />Kutchery Road,<br />Ranchi 834001, JH
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <Phone size={13} color="rgba(var(--accent-rgb),.6)" />
            <a
              href="tel:+919431103263"
              style={{
                fontSize: 13,
                color: "rgba(248,247,244,.55)",
                fontFamily: "var(--mono)",
                transition: "color .18s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(var(--gold-rgb),.85)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(248,247,244,.55)"; }}
            >
              +91 9431103263
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Mail size={13} color="rgba(var(--accent-rgb),.6)" />
            <a
              href="mailto:info@ventureskillindia.co.in"
              style={{
                fontSize: 13,
                color: "rgba(248,247,244,.55)",
                fontFamily: "var(--body)",
                transition: "color .18s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(var(--gold-rgb),.85)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(248,247,244,.55)"; }}
            >
              info@ventureskillindia.co.in
            </a>
          </div>

          {/* Quick apply CTA */}
          <Link href="/contact" style={{ textDecoration: "none", display: "block", marginTop: 24 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 16px",
                background: "rgba(var(--accent-rgb),.12)",
                border: "1px solid rgba(var(--accent-rgb),.22)",
                borderRadius: 6,
                fontFamily: "var(--sans)",
                fontWeight: 700,
                fontSize: 12,
                color: "rgba(var(--accent-rgb),.85)",
                letterSpacing: ".06em",
                textTransform: "uppercase",
                transition: "all .22s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(var(--accent-rgb),.2)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(var(--accent-rgb),.12)";
                el.style.transform = "translateY(0)";
              }}
            >
              Free Counseling <ArrowUpRight size={12} />
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="footer-bottom"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "24px 0 0",
          borderTop: "1px solid rgba(248,247,244,.06)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ display: "flex", gap: 18, flexWrap: "wrap", alignItems: "center" }}>
          {["NSDC", "AICTE", "NASSCOM", "JSDM", "Autodesk Authorized"].map((c) => (
            <span
              key={c}
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: ".12em",
                color: "rgba(248,247,244,.18)",
                textTransform: "uppercase",
              }}
            >
              {c}
            </span>
          ))}
        </div>
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: 11,
            color: "rgba(248,247,244,.16)",
          }}
        >
          © 2024 Venture Skill India Pvt. Ltd.
        </div>
      </div>
    </footer>
  );
}
