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
  Compass,
  FileCheck,
  Briefcase,
  Users,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
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

      {/* ── 1. Hero Section (Centered Parchment Elegance) ── */}
      <section
        className="inner-hero-warm"
        style={{
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
          paddingTop: isMobile ? 56 : 80,
          paddingBottom: isMobile ? 56 : 80,
        }}
      >
        <AnimateIn animation="slideUp">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 18px",
              borderRadius: 999,
              background: "rgba(var(--accent-rgb),.09)",
              border: "1px solid rgba(var(--accent-rgb),.2)",
              marginBottom: 24,
            }}
          >
            <Plane size={14} color="var(--accent)" />
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--accent)",
                fontWeight: 600,
              }}
            >
              Global Mobility Pathways · Germany & Gulf Region
            </span>
          </div>

          <h1 style={{ margin: "0 auto 18px", maxWidth: 840 }}>
            {t("workAbroadTitle1")}
            <br />
            <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 400 }}>
              {t("workAbroadTitle2")}
            </em>
          </h1>

          <p className="lead" style={{ maxWidth: 640, margin: "0 auto 40px" }}>
            {t("workAbroadHeroDesc")}
          </p>

          {/* Centered Metric Ribbon */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
              gap: 16,
              maxWidth: 960,
              margin: "0 auto",
            }}
          >
            {[
              { val: "1,200+", label: "Global Placements", sub: "Germany & Gulf Corridors" },
              { val: "B1 / B2", label: "German Academy", sub: "Language & Cultural Prep" },
              { val: "100%", label: "Visa Compliance", sub: "Direct Employer Contracts" },
              { val: "0%", label: "Upfront Exploitation", sub: "Govt-Aligned Mobility" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  borderRadius: 12,
                  padding: "20px 16px",
                  textAlign: "center",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: isMobile ? 24 : 28,
                    fontWeight: 700,
                    color: "var(--accent)",
                    letterSpacing: "-.02em",
                  }}
                >
                  {stat.val}
                </div>
                <div style={{ fontFamily: "var(--sans)", fontSize: 12.5, fontWeight: 700, color: "var(--text)", marginTop: 4 }}>
                  {stat.label}
                </div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text-muted)", marginTop: 2 }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </section>

      {/* ── 2. Unified Deployment Corridors Section (Dark Space Section) ── */}
      <section
        style={{
          background: "linear-gradient(180deg, #09131F 0%, #0D1B2A 100%)",
          padding: isMobile ? "72px 6%" : "104px 5%",
          position: "relative",
          overflow: "hidden",
          color: "#FFF",
        }}
      >
        {/* Subtle Ambient Flight Grid Background Pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 50% 30%, rgba(0, 153, 255, 0.12) 0%, transparent 65%), radial-gradient(circle at 80% 80%, rgba(255, 183, 3, 0.08) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <AnimateIn animation="slideUp">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <Globe size={18} color="#0099FF" />
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: ".16em",
                  color: "#0099FF",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                // Active Deployment Corridors
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
                letterSpacing: "-.03em",
              }}
            >
              Where we deploy talent globally.
            </h2>
            <p
              style={{
                fontFamily: "var(--body)",
                fontSize: 16,
                color: "rgba(255, 255, 255, 0.65)",
                lineHeight: 1.75,
                maxWidth: 660,
                marginBottom: 52,
              }}
            >
              Verified employment pathways across the Middle East and Germany — complete with legal contracts, visa processing, structured training, and zero candidate exploitation.
            </p>
          </AnimateIn>

          {/* Destination Cards Grid */}
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 32 }}>
            
            {/* ── CARD 1: MIDDLE EAST ── */}
            <AnimateIn animation="slideUp" delay={0.1}>
              <div
                className="hover-lift"
                style={{
                  background: "linear-gradient(155deg, rgba(20, 36, 62, 0.9) 0%, rgba(11, 22, 38, 0.95) 100%)",
                  border: "1px solid rgba(255, 183, 3, 0.25)",
                  borderRadius: 20,
                  padding: isMobile ? "28px 22px" : "36px 32px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: "0 20px 48px rgba(0,0,0,0.4), 0 0 20px rgba(255,183,3,0.05)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Visual Header Graphic */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <div
                    style={{
                      background: "rgba(255, 183, 3, 0.12)",
                      border: "1px solid rgba(255, 183, 3, 0.3)",
                      borderRadius: 30,
                      padding: "6px 14px",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span style={{ fontSize: 16 }}>🇦🇪 🇸🇦</span>
                    <span style={{ fontFamily: "var(--mono)", fontSize: 11, fontWeight: 700, color: "#FFB703", letterSpacing: ".08em" }}>
                      GULF REGION
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      fontWeight: 700,
                      background: "#0099FF",
                      color: "#FFF",
                      padding: "4px 10px",
                      borderRadius: 20,
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                    }}
                  >
                    Active Drives
                  </span>
                </div>

                {/* Card Title & Cities */}
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "clamp(24px, 2.6vw, 32px)",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    letterSpacing: "-.02em",
                    marginBottom: 10,
                  }}
                >
                  Middle East Corridors
                </h3>

                {/* City Chips */}
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}>
                  {["Dubai", "Riyadh", "Abu Dhabi", "Doha"].map((city) => (
                    <span
                      key={city}
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                        background: "rgba(255, 183, 3, 0.1)",
                        color: "#FFC837",
                        padding: "4px 12px",
                        borderRadius: 6,
                        border: "1px solid rgba(255, 183, 3, 0.2)",
                        fontWeight: 600,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <MapPin size={11} color="#FFB703" />
                      {city}
                    </span>
                  ))}
                </div>

                <p style={{ fontFamily: "var(--body)", fontSize: 14.5, color: "rgba(255, 255, 255, 0.72)", lineHeight: 1.7, marginBottom: 24 }}>
                  Active employment drives across UAE and Saudi Arabia for skilled technicians, engineers, hospitality staff, and healthcare professionals powering major infrastructure projects.
                </p>

                {/* Key Sectors */}
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    borderRadius: 12,
                    padding: "16px",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    marginBottom: 24,
                  }}
                >
                  <span style={{ fontFamily: "var(--mono)", fontSize: 10, fontWeight: 700, textTransform: "uppercase", color: "rgba(255, 255, 255, 0.45)", letterSpacing: ".1em", display: "block", marginBottom: 10 }}>
                    Target Recruitment Sectors:
                  </span>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {["Construction & Civil", "Hospitality & Tourism", "Healthcare & Clinic", "Logistics & Retail"].map((sec) => (
                      <span
                        key={sec}
                        style={{
                          fontSize: 11.5,
                          fontWeight: 600,
                          background: "rgba(255, 255, 255, 0.08)",
                          color: "#FFF",
                          padding: "4px 10px",
                          borderRadius: 6,
                          border: "1px solid rgba(255, 255, 255, 0.12)",
                        }}
                      >
                        {sec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Perks Checklist */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                  {[
                    "100% Tax-Free Monthly Salary",
                    "Employer-provided Accommodation & Transport",
                    "Annual Paid Return Flight Allowance",
                  ].map((perk) => (
                    <div key={perk} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, fontWeight: 500, color: "rgba(255, 255, 255, 0.88)" }}>
                      <CheckCircle2 size={16} color="#FFB703" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action */}
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
                        background: "linear-gradient(135deg, #FFB703 0%, #E09F00 100%)",
                        color: "#0D1B2A",
                        border: "none",
                        fontWeight: 700,
                        padding: "14px 20px",
                        fontSize: 14,
                        borderRadius: 10,
                      }}
                    >
                      Explore Gulf Placement Drives <ArrowUpRight size={15} />
                    </button>
                  </Link>
                </div>
              </div>
            </AnimateIn>

            {/* ── CARD 2: GERMANY / EUROPE ── */}
            <AnimateIn animation="slideUp" delay={0.2}>
              <div
                className="hover-lift"
                style={{
                  background: "linear-gradient(155deg, rgba(14, 42, 77, 0.9) 0%, rgba(7, 23, 44, 0.95) 100%)",
                  border: "1px solid rgba(0, 153, 255, 0.3)",
                  borderRadius: 20,
                  padding: isMobile ? "28px 22px" : "36px 32px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: "0 20px 48px rgba(0,0,0,0.4), 0 0 20px rgba(0,153,255,0.08)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Visual Header Graphic */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <div
                    style={{
                      background: "rgba(0, 153, 255, 0.14)",
                      border: "1px solid rgba(0, 153, 255, 0.35)",
                      borderRadius: 30,
                      padding: "6px 14px",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span style={{ fontSize: 16 }}>🇩🇪 🇪🇺</span>
                    <span style={{ fontFamily: "var(--mono)", fontSize: 11, fontWeight: 700, color: "#66C2FF", letterSpacing: ".08em" }}>
                      GERMANY & EUROPE
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      fontWeight: 700,
                      background: "#06A95D",
                      color: "#FFF",
                      padding: "4px 10px",
                      borderRadius: 20,
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                    }}
                  >
                    EU Blue Card Route
                  </span>
                </div>

                {/* Card Title & Cities */}
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "clamp(24px, 2.6vw, 32px)",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    letterSpacing: "-.02em",
                    marginBottom: 10,
                  }}
                >
                  Europe — Germany Pathway
                </h3>

                {/* City Chips */}
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}>
                  {["Berlin", "Munich", "Frankfurt", "Hamburg"].map((city) => (
                    <span
                      key={city}
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                        background: "rgba(0, 153, 255, 0.12)",
                        color: "#66C2FF",
                        padding: "4px 12px",
                        borderRadius: 6,
                        border: "1px solid rgba(0, 153, 255, 0.22)",
                        fontWeight: 600,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <MapPin size={11} color="#0099FF" />
                      {city}
                    </span>
                  ))}
                </div>

                <p style={{ fontFamily: "var(--body)", fontSize: 14.5, color: "rgba(255, 255, 255, 0.72)", lineHeight: 1.7, marginBottom: 24 }}>
                  German International Exchange Program — intensive German language instruction (B1/B2), official nursing qualification recognition, and direct placement into European hospitals.
                </p>

                {/* Key Sectors */}
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    borderRadius: 12,
                    padding: "16px",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    marginBottom: 24,
                  }}
                >
                  <span style={{ fontFamily: "var(--mono)", fontSize: 10, fontWeight: 700, textTransform: "uppercase", color: "rgba(255, 255, 255, 0.45)", letterSpacing: ".1em", display: "block", marginBottom: 10 }}>
                    Target Healthcare Pathways:
                  </span>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {["Clinical Nursing", "Geriatric Care", "Medical Tech", "Hospital Operations"].map((sec) => (
                      <span
                        key={sec}
                        style={{
                          fontSize: 11.5,
                          fontWeight: 600,
                          background: "rgba(255, 255, 255, 0.08)",
                          color: "#FFF",
                          padding: "4px 10px",
                          borderRadius: 6,
                          border: "1px solid rgba(255, 255, 255, 0.12)",
                        }}
                      >
                        {sec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Perks Checklist */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                  {[
                    "Paid German Language Academy (B1/B2 Prep)",
                    "Official License Recognition & Bridging",
                    "Path to Permanent European Residency",
                  ].map((perk) => (
                    <div key={perk} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, fontWeight: 500, color: "rgba(255, 255, 255, 0.88)" }}>
                      <CheckCircle2 size={16} color="#0099FF" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action */}
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
                        background: "linear-gradient(135deg, #0099FF 0%, #0077CC 100%)",
                        color: "#FFFFFF",
                        border: "none",
                        fontWeight: 700,
                        padding: "14px 20px",
                        fontSize: 14,
                        borderRadius: 10,
                      }}
                    >
                      Apply for German Pathway <ArrowUpRight size={15} />
                    </button>
                  </Link>
                </div>
              </div>
            </AnimateIn>

          </div>
        </div>
      </section>

      {/* ── 3. German Healthcare Program Highlight Panel ── */}
      <section style={{ background: "#0D1B2A", padding: isMobile ? "64px 6%" : "96px 5%", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 48, alignItems: "center" }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <HeartPulse size={20} color="#FFB703" />
                  <p style={{ fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: ".15em", color: "#FFB703", textTransform: "uppercase", fontWeight: 600 }}>
                    // Global Healthcare Mobility
                  </p>
                </div>
                <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(26px,3.5vw,42px)", color: "#FFFFFF", marginBottom: 20, letterSpacing: "-.03em", lineHeight: 1.15 }}>
                  German International Exchange Program
                </h2>
                <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "rgba(255,255,255,.7)", lineHeight: 1.8, marginBottom: 28 }}>
                  An official institutional framework connecting qualified Indian healthcare and nursing professionals directly with German hospitals. We provide end-to-end support including German language academy (B1/B2 level), qualification recognition (Defizitbescheid & Anerkennung), visa clearance, and relocation integration.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Link href="/contact" style={{ textDecoration: "none" }}>
                    <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8, background: "#0099FF" }}>
                      Apply for German Pathway <ArrowUpRight size={14} />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right Side Program Spec Card */}
              <div
                style={{
                  width: isMobile ? "100%" : 340,
                  flexShrink: 0,
                  background: "rgba(255,255,255,.04)",
                  borderRadius: 16,
                  padding: "32px 28px",
                  border: "1px solid rgba(255,255,255,.1)",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.3)",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {[
                    { icon: "🇩🇪", label: "Destination", value: "Germany (EU Member)" },
                    { icon: "🏥", label: "Sector", value: "Clinical & Geriatric Nursing" },
                    { icon: "🗣️", label: "Language Prep", value: "German B1/B2 Certification" },
                    { icon: "📜", label: "Licensing", value: "Official German Recognition" },
                    { icon: "🛂", label: "Visa Route", value: "EU Blue Card / Work Visa" },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{ fontSize: 24, width: 38, textAlign: "center" }}>{item.icon}</div>
                      <div>
                        <div style={{ fontFamily: "var(--mono)", fontSize: 9.5, letterSpacing: ".12em", color: "rgba(255,255,255,.4)", textTransform: "uppercase" }}>{item.label}</div>
                        <div style={{ fontFamily: "var(--sans)", fontSize: 13.5, fontWeight: 600, color: "rgba(255,255,255,.9)", marginTop: 2 }}>{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── 4. 6-Step Placement Process Timeline ── */}
      <section style={{ padding: isMobile ? "64px 6%" : "96px 5%", background: "var(--bg)" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p style={{ fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: ".15em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 10, fontWeight: 600 }}>
                // Guided Candidate Journey
              </p>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(26px,3.8vw,42px)", color: "var(--text)", letterSpacing: "-.03em", marginBottom: 14 }}>
                Your 6-step pathway to work abroad.
              </h2>
              <p style={{ fontFamily: "var(--body)", fontSize: 15.5, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 620, margin: "0 auto" }}>
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
                    <span style={{ fontSize: isMobile ? 20 : 24 }}>{step.icon}</span>
                  </div>

                  <div style={{ flex: 1, paddingTop: isMobile ? 2 : 6 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: 10, fontWeight: 700, letterSpacing: ".12em", color: "var(--accent)", background: "rgba(var(--accent-rgb),.09)", padding: "3px 8px", borderRadius: 4 }}>
                        STEP {String(step.step).padStart(2, "0")}
                      </span>
                      <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: isMobile ? 17 : 20, color: "var(--text)", letterSpacing: "-.02em" }}>
                        {step.title}
                      </h3>
                    </div>
                    <p style={{ fontFamily: "var(--body)", fontSize: 14.5, color: "var(--text-muted)", lineHeight: 1.7 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Final CTA ── */}
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
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(26px,3.8vw,42px)", color: "var(--text)", letterSpacing: "-.03em", marginBottom: 16 }}>
            Ready to explore global opportunities?
          </h2>
          <p style={{ fontFamily: "var(--body)", fontSize: 15.5, color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 540, margin: "0 auto 28px" }}>
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
