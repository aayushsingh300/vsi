"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Plane,
  ArrowUpRight,
  Globe,
  HeartPulse,
  Building,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Sparkles,
  Award,
  Users,
  GraduationCap,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import Icon from "@/components/Icon";
import { WORK_ABROAD_PROCESS } from "@/data/content";
import { useLang } from "@/context/LangContext";
import useIsMobile from "@/hooks/useIsMobile";

export default function WorkAbroadPage() {
  const [formOpen, setFormOpen] = useState(false);
  const { t } = useLang();
  const isMobile = useIsMobile(900);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar formOpen={formOpen} setFormOpen={setFormOpen} />

      {/* ── 1. Hero Section (Split Layout with Hero Picture) ── */}
      <section
        style={{
          padding: isMobile ? "56px 6% 48px" : "80px 5% 64px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr",
              gap: isMobile ? 36 : 56,
              alignItems: "center",
            }}
          >
            {/* Hero Left Content */}
            <AnimateIn animation="slideUp">
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 16px",
                  borderRadius: "var(--r-pill)",
                  background: "rgba(var(--accent-rgb),.09)",
                  border: "1px solid rgba(var(--accent-rgb),.2)",
                  marginBottom: 20,
                }}
              >
                <Plane size={14} color="var(--accent)" />
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "var(--text-xs)",
                    letterSpacing: "var(--tr-mono)",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    fontWeight: 600,
                  }}
                >
                  Global Mobility Pathways · Germany & Gulf
                </span>
              </div>

              <h1 style={{ fontSize: "clamp(32px, 4vw, 54px)", lineHeight: 1.12, letterSpacing: "var(--tr-display)", marginBottom: 20 }}>
                {t("workAbroadTitle1")}
                <br />
                <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 400 }}>
                  {t("workAbroadTitle2")}
                </em>
              </h1>

              <p className="lead" style={{ maxWidth: 560, marginBottom: 32, fontSize: "var(--text-md)", lineHeight: 1.7 }}>
                {t("workAbroadHeroDesc")}
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
                <Link href="/contact" style={{ textDecoration: "none" }}>
                  <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    Apply for Global Mobility <ArrowUpRight size={15} />
                  </button>
                </Link>
                <Link href="#corridors" style={{ textDecoration: "none" }}>
                  <button className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                    <Globe size={15} /> View Corridors
                  </button>
                </Link>
              </div>

              {/* 4 Stat Badges */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, maxWidth: 520 }}>
                {[
                  { val: "1,200+", label: "Candidates Deployed" },
                  { val: "B1 / B2", label: "German Academy Prep" },
                  { val: "100%", label: "Verified Direct Visas" },
                  { val: "0%", label: "Candidate Exploitation" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-card)",
                      borderRadius: "var(--r-md)",
                      padding: "12px 14px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    <span style={{ fontFamily: "var(--serif)", fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--accent)" }}>
                      {stat.val}
                    </span>
                    <span style={{ fontFamily: "var(--sans)", fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--text)" }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimateIn>

            {/* Hero Right Visual Picture */}
            <AnimateIn animation="scaleIn" delay={0.15}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "var(--r-lg)",
                  overflow: "hidden",
                  boxShadow: "0 20px 48px rgba(0,0,0,0.12)",
                  height: isMobile ? 280 : 420,
                  border: "1px solid var(--border)",
                }}
              >
                <Image
                  src="/images/students-campus.png"
                  alt="VSI International Placement Orientation & Global Candidate Training"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  sizes="(max-width: 900px) 100vw, 45vw"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(13,27,42,0.85) 0%, transparent 60%)",
                  }}
                />

                {/* Floating Image Badge */}
                <div style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.25)",
                      borderRadius: "var(--r-md)",
                      padding: "14px 18px",
                      color: "#FFF",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Globe size={20} color="#FFF" />
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--sans)", fontSize: "var(--text-sm)", fontWeight: 700 }}>
                        VSI Global Candidate Cell
                      </div>
                      <div style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.8)" }}>
                        Pre-departure briefing & document attestation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── 2. Active Deployment Corridors Section (Dark Navy with Cover Pictures) ── */}
      <section
        id="corridors"
        style={{
          background: "linear-gradient(180deg, #09131F 0%, #0D1B2A 100%)",
          padding: isMobile ? "72px 6%" : "104px 5%",
          color: "#FFF",
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <Globe size={18} color="var(--accent)" />
              <p className="eyebrow-label eyebrow-label--slash" style={{ marginBottom: 0 }}>
                Active Deployment Corridors
              </p>
            </div>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 700,
                fontStyle: "italic",
                fontSize: "clamp(28px, 4vw, 48px)",
                color: "#FFFFFF",
                marginBottom: 16,
                letterSpacing: "var(--tr-display)",
              }}
            >
              Where we deploy talent globally.
            </h2>
            <p
              style={{
                fontFamily: "var(--body)",
                fontSize: "var(--text-md)",
                color: "rgba(255, 255, 255, 0.68)",
                lineHeight: 1.75,
                maxWidth: 660,
                marginBottom: 52,
              }}
            >
              Explore our primary employment hubs across the Middle East and Germany — complete with verified employer contracts, full visa support, and relocation assistance.
            </p>
          </AnimateIn>

          {/* Cards Grid */}
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 32 }}>
            
            {/* ── CARD 1: MIDDLE EAST ── */}
            <AnimateIn animation="slideUp" delay={0.1}>
              <div
                className="hover-lift"
                style={{
                  background: "linear-gradient(155deg, rgba(20, 36, 62, 0.95) 0%, rgba(11, 22, 38, 0.98) 100%)",
                  border: "1px solid rgba(255, 183, 3, 0.3)",
                  borderRadius: "var(--r-lg)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: "0 20px 48px rgba(0,0,0,0.4)",
                }}
              >
                {/* Visual Cover Picture Header */}
                <div style={{ height: 180, position: "relative", overflow: "hidden" }}>
                  <Image
                    src="/images/corridor-middle-east.png"
                    alt="Middle East Placement Drives — Dubai & Riyadh"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 30%" }}
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(11, 22, 38, 1) 0%, rgba(11, 22, 38, 0.3) 100%)",
                    }}
                  />

                  {/* Flag & Tag Pill */}
                  <div style={{ position: "absolute", top: 16, left: 16, right: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div
                      style={{
                        background: "rgba(0,0,0,0.65)",
                        backdropFilter: "blur(8px)",
                        padding: "6px 14px",
                        borderRadius: "var(--r-lg)",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <span style={{ fontSize: "var(--text-md)" }}>🇦🇪 🇸🇦</span>
                      <span style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", fontWeight: 700, color: "#FFB703", letterSpacing: "var(--tr-caps)" }}>
                        GULF REGION
                      </span>
                    </div>

                    <span style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", fontWeight: 700, background: "var(--btn-primary-bg)", color: "var(--btn-primary-fg)", padding: "4px 10px", borderRadius: "var(--r-lg)", textTransform: "uppercase" }}>
                      Active Drives
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: isMobile ? "24px 20px" : "28px 28px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "clamp(24px, 2.5vw, 30px)",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      letterSpacing: "var(--tr-heading)",
                      marginBottom: 10,
                    }}
                  >
                    Middle East Corridors
                  </h3>

                  {/* City Chips */}
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                    {["Dubai", "Riyadh", "Abu Dhabi", "Doha"].map((city) => (
                      <span
                        key={city}
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "var(--text-xs)",
                          letterSpacing: "var(--tr-caps)",
                          textTransform: "uppercase",
                          background: "rgba(255, 183, 3, 0.12)",
                          color: "#FFC837",
                          padding: "4px 10px",
                          borderRadius: "var(--r-sm)",
                          border: "1px solid rgba(255, 183, 3, 0.22)",
                          fontWeight: 600,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <MapPin size={10} color="#FFB703" />
                        {city}
                      </span>
                    ))}
                  </div>

                  <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "rgba(255, 255, 255, 0.72)", lineHeight: 1.7, marginBottom: 20 }}>
                    Active employment drives across UAE & Saudi Arabia for skilled technicians, civil engineers, hospitality specialists, and retail workforce.
                  </p>

                  {/* Perks Checklist */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                    {[
                      "100% Tax-Free Monthly Salary",
                      "Employer-provided Accommodation & Transport",
                      "Annual Paid Return Flight Allowance",
                    ].map((perk) => (
                      <div key={perk} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "var(--text-sm)", fontWeight: 500, color: "rgba(255, 255, 255, 0.88)" }}>
                        <CheckCircle2 size={15} color="#FFB703" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div style={{ marginTop: "auto" }}>
                    <Link href="/contact" style={{ textDecoration: "none" }}>
                      {/* Was an amber gradient with near-black text — the
                          `background: linear-gradient(...)` is why this one
                          computed a transparent backgroundColor and read as
                          a different component from every other CTA. Two
                          sibling cards, two different primary buttons. */}
                      <button
                        className="btn-primary"
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 8,
                        }}
                      >
                        Explore Gulf Drives <ArrowUpRight size={15} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* ── CARD 2: GERMANY ── */}
            <AnimateIn animation="slideUp" delay={0.2}>
              <div
                className="hover-lift"
                style={{
                  background: "linear-gradient(155deg, rgba(14, 42, 77, 0.95) 0%, rgba(7, 23, 44, 0.98) 100%)",
                  border: "1px solid rgba(0, 153, 255, 0.35)",
                  borderRadius: "var(--r-lg)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: "0 20px 48px rgba(0,0,0,0.4)",
                }}
              >
                {/* Visual Cover Picture Header */}
                <div style={{ height: 180, position: "relative", overflow: "hidden" }}>
                  <Image
                    src="/images/work-abroad-germany.png"
                    alt="German International Exchange Program — Healthcare & Nursing"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 20%" }}
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(7, 23, 44, 1) 0%, rgba(7, 23, 44, 0.3) 100%)",
                    }}
                  />

                  {/* Flag & Tag Pill */}
                  <div style={{ position: "absolute", top: 16, left: 16, right: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div
                      style={{
                        background: "rgba(0,0,0,0.65)",
                        backdropFilter: "blur(8px)",
                        padding: "6px 14px",
                        borderRadius: "var(--r-lg)",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <span style={{ fontSize: "var(--text-md)" }}>🇩🇪 🇪🇺</span>
                      <span style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", fontWeight: 700, color: "#66C2FF", letterSpacing: "var(--tr-caps)" }}>
                        GERMANY & EU
                      </span>
                    </div>

                    <span style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", fontWeight: 700, background: "#06A95D", color: "#FFF", padding: "4px 10px", borderRadius: "var(--r-lg)", textTransform: "uppercase" }}>
                      EU Blue Card Route
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: isMobile ? "24px 20px" : "28px 28px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "clamp(24px, 2.5vw, 30px)",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      letterSpacing: "var(--tr-heading)",
                      marginBottom: 10,
                    }}
                  >
                    Europe — Germany Pathway
                  </h3>

                  {/* City Chips */}
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                    {["Berlin", "Munich", "Frankfurt", "Hamburg"].map((city) => (
                      <span
                        key={city}
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "var(--text-xs)",
                          letterSpacing: "var(--tr-caps)",
                          textTransform: "uppercase",
                          background: "rgba(0, 153, 255, 0.12)",
                          color: "#66C2FF",
                          padding: "4px 10px",
                          borderRadius: "var(--r-sm)",
                          border: "1px solid rgba(0, 153, 255, 0.22)",
                          fontWeight: 600,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 4,
                        }}
                      >
                        <MapPin size={10} color="var(--accent)" />
                        {city}
                      </span>
                    ))}
                  </div>

                  <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "rgba(255, 255, 255, 0.72)", lineHeight: 1.7, marginBottom: 20 }}>
                    German International Exchange Program — intensive German language instruction from A1 and A2 through to B1 and B2 completion, official nursing qualification recognition, and hospital placement.
                  </p>

                  {/* Perks Checklist */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                    {[
                      "Paid German Language Academy (A1, A2 → B1, B2)",
                      "Official License Recognition & Bridging",
                      "Path to Permanent European Residency",
                    ].map((perk) => (
                      <div key={perk} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "var(--text-sm)", fontWeight: 500, color: "rgba(255, 255, 255, 0.88)" }}>
                        <CheckCircle2 size={15} color="var(--accent)" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div style={{ marginTop: "auto" }}>
                    <Link href="/contact" style={{ textDecoration: "none" }}>
                      <button
                        className="btn-primary"
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 8,
                        }}
                      >
                        Apply for German Pathway <ArrowUpRight size={15} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateIn>

          </div>
        </div>
      </section>

      {/* ── 3. German Healthcare Program Highlight Panel with Picture Card ── */}
      <section style={{ background: "#0D1B2A", padding: isMobile ? "64px 6%" : "96px 5%", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr", gap: 48, alignItems: "center" }}>
              
              {/* Left Column: Program Text */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <HeartPulse size={20} color="#FFB703" />
                  <p className="eyebrow-label eyebrow-label--slash eyebrow-label--on-dark">
                    Global Healthcare Pathways
                  </p>
                </div>
                <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(26px,3.5vw,42px)", color: "#FFFFFF", marginBottom: 20, letterSpacing: "var(--tr-display)", lineHeight: 1.15 }}>
                  German International Exchange Program
                </h2>
                <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "rgba(255,255,255,.7)", lineHeight: 1.8, marginBottom: 28 }}>
                  An official institutional framework connecting qualified Indian healthcare and nursing professionals directly with German hospitals. We provide end-to-end support including German language academy (A1, A2 then B1, B2 completion), qualification recognition (Defizitbescheid & Anerkennung), visa clearance, and relocation integration.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Link href="/contact" style={{ textDecoration: "none" }}>
                    <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      Apply for German Pathway <ArrowUpRight size={14} />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right Column: Picture & Feature Spec Card */}
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "relative",
                    borderRadius: "var(--r-lg)",
                    overflow: "hidden",
                    height: 260,
                    border: "1px solid rgba(255,255,255,0.15)",
                    marginBottom: 16,
                    boxShadow: "0 16px 40px rgba(0,0,0,0.4)",
                  }}
                >
                  <Image
                    src="/images/work-abroad-germany.png"
                    alt="German International Healthcare Exchange Nursing Program"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 30%" }}
                    sizes="(max-width: 900px) 100vw, 40vw"
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,27,42,0.9) 0%, transparent 60%)" }} />
                  <div style={{ position: "absolute", bottom: 14, left: 18 }}>
                    <span style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "#66C2FF", letterSpacing: "var(--tr-mono)", textTransform: "uppercase", fontWeight: 700 }}>
                      🇩🇪 German Healthcare Academy Cohort
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(255,255,255,.05)",
                    borderRadius: "var(--r-lg)",
                    padding: "20px 22px",
                    border: "1px solid rgba(255,255,255,.12)",
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 14,
                  }}
                >
                  {[
                    { label: "Destination", val: "Germany (EU)" },
                    { label: "Language", val: "German A1 → B2" },
                    { label: "Licensing", val: "Official Nursing Recognition" },
                    { label: "Visa Route", val: "EU Blue Card" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>{item.label}</div>
                      <div style={{ fontFamily: "var(--sans)", fontSize: "var(--text-sm)", fontWeight: 700, color: "#FFF", marginTop: 2 }}>{item.val}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── 4. Candidate Recruitment Drives Photo Spotlight ── */}
      <section style={{ padding: isMobile ? "64px 6%" : "88px 5%", background: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <p className="eyebrow-label eyebrow-label--slash" style={{ marginBottom: 10 }}>
                On-Ground Global Operations
              </p>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(26px,3.8vw,42px)", color: "var(--text)", letterSpacing: "var(--tr-display)", marginBottom: 12 }}>
                Real candidates. Real global placements.
              </h2>
              <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "var(--text-muted)", maxWidth: 580, margin: "0 auto" }}>
                Glimpses from VSI's international recruitment drives, language academy cohorts, and employer onboarding sessions.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 20 }}>
              {[
                { img: "/images/placements-drive.png", title: "Recruitment Drive", sub: "International employer interviews & credential verification" },
                { img: "/images/students-campus.png", title: "German Language Academy", sub: "A1, A2 then B1, B2 completion & cultural prep" },
                { img: "/images/award-ceremony.png", title: "Flight Briefing & Felicitation", sub: "Pre-departure ceremony for placed healthcare candidates" },
              ].map((card) => (
                <div key={card.title} style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--r-lg)", overflow: "hidden" }}>
                  <div style={{ height: 180, position: "relative" }}>
                    <Image src={card.img} alt={card.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 900px) 100vw, 33vw" />
                  </div>
                  <div style={{ padding: "16px 18px" }}>
                    <h4 style={{ fontFamily: "var(--serif)", fontSize: "var(--text-md)", fontWeight: 700, color: "var(--text)", margin: "0 0 4px 0" }}>{card.title}</h4>
                    <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", margin: 0, lineHeight: 1.5 }}>{card.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── 5. 6-Step Placement Process Timeline ── */}
      <section style={{ padding: isMobile ? "64px 6%" : "96px 5%", background: "var(--bg)" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p className="eyebrow-label eyebrow-label--slash" style={{ marginBottom: 10 }}>
                Guided Candidate Journey
              </p>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(26px,3.8vw,42px)", color: "var(--text)", letterSpacing: "var(--tr-display)", marginBottom: 14 }}>
                Your 6-step pathway to work abroad.
              </h2>
              <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 620, margin: "0 auto" }}>
                A transparent, step-by-step pathway from registration to international flight boarding — handled end-to-end by VSI Mobility Cell.
              </p>
            </div>
          </AnimateIn>

          <div style={{ position: "relative" }}>
            {/* Timeline Vertical Connector */}
            <div
              style={{
                position: "absolute",
                left: isMobile ? 23 : 27,
                top: 12,
                bottom: 12,
                width: 2,
                background: "linear-gradient(to bottom, var(--accent) 0%, rgba(var(--accent-rgb),.2) 100%)",
              }}
            />
            {WORK_ABROAD_PROCESS.map((step, i) => (
              <AnimateIn key={step.step} animation="slideUp" delay={i * 0.06}>
                <div style={{ display: "flex", gap: isMobile ? 18 : 26, alignItems: "flex-start", paddingBottom: i === WORK_ABROAD_PROCESS.length - 1 ? 0 : 36, position: "relative" }}>
                  {/* Step Node Icon */}
                  <div
                    style={{
                      width: isMobile ? 48 : 56,
                      height: isMobile ? 48 : 56,
                      borderRadius: "50%",
                      flexShrink: 0,
                      background: "var(--bg-card)",
                      border: "2px solid var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      zIndex: 2,
                      boxShadow: "0 4px 16px rgba(0,153,255,.12)",
                    }}
                  >
                    <Icon name={step.icon} size={isMobile ? 19 : 22} color="var(--accent)" />
                  </div>

                  <div style={{ flex: 1, paddingTop: isMobile ? 2 : 6 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "var(--tr-mono)", color: "var(--accent)", background: "rgba(var(--accent-rgb),.09)", padding: "3px 8px", borderRadius: "var(--r-sm)" }}>
                        STEP {String(step.step).padStart(2, "0")}
                      </span>
                      <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: isMobile ? "var(--text-md)" : "var(--text-lg)", color: "var(--text)", letterSpacing: "var(--tr-heading)" }}>
                        {step.title}
                      </h3>
                    </div>
                    <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "var(--text-muted)", lineHeight: 1.7 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Final CTA ── */}
      <section style={{ padding: isMobile ? "64px 6%" : "80px 5%", textAlign: "center", background: "var(--bg-muted)", borderTop: "1px solid var(--border)" }}>
        <AnimateIn animation="slideUp">
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              margin: "0 auto 20px",
              background: "linear-gradient(135deg, rgba(var(--accent-rgb),.15), rgba(var(--accent-rgb),.05))",
              border: "1px solid rgba(var(--accent-rgb),.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
            }}
          >
            <Plane size={26} color="var(--accent)" />
          </div>
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(26px,3.8vw,42px)", color: "var(--text)", letterSpacing: "var(--tr-display)", marginBottom: 16 }}>
            Ready to explore global opportunities?
          </h2>
          <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 540, margin: "0 auto 28px" }}>
            Connect with our international placement cell to learn about upcoming Gulf deployment drives, German language academy cohorts, and candidate eligibility.
          </p>
          <Link href="/contact" style={{ textDecoration: "none" }}>
            <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8, margin: "0 auto" }}>
              Contact Mobility Cell <ArrowUpRight size={14} />
            </button>
          </Link>
        </AnimateIn>
      </section>

      <Footer />
      <FloatingWA />
    </div>
  );
}
