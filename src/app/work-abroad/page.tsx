"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plane, ArrowUpRight, Globe, HeartPulse, Building, CheckCircle2, ShieldCheck, MapPin, Sparkles, Award } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import { INTL_CORRIDORS, WORK_ABROAD_PROCESS } from "@/data/content";
import { useLang } from "@/context/LangContext";
import useIsMobile from "@/hooks/useIsMobile";

export default function WorkAbroadPage() {
  const [formOpen, setFormOpen] = useState(false);
  const { t } = useLang();
  const isMobile = useIsMobile(900);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar formOpen={formOpen} setFormOpen={setFormOpen} />

      {/* Hero */}
      <section className="inner-hero-warm" style={{ position: "relative", overflow: "hidden", paddingBottom: isMobile ? 48 : 72 }}>
        <AnimateIn animation="slideUp">
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 999, background: "rgba(var(--accent-rgb),.09)", border: "1px solid rgba(var(--accent-rgb),.2)", marginBottom: 20 }}>
            <Plane size={14} color="var(--accent)" />
            <span style={{ fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600 }}>
              Global Mobility Pathways · Germany & Gulf Region
            </span>
          </div>
          <h1>
            {t("workAbroadTitle1")}<br />
            <em>{t("workAbroadTitle2")}</em>
          </h1>
          <p className="lead" style={{ maxWidth: 640 }}>
            {t("workAbroadHeroDesc")}
          </p>

          {/* Quick Metrics Ticker */}
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 16, marginTop: 40, maxWidth: 900 }}>
            {[
              { val: "1,200+", label: "Global Placements", sub: "Germany & Gulf Region" },
              { val: "B1 / B2", label: "German Academy", sub: "Structured Language Prep" },
              { val: "100%", label: "Visa Compliance", sub: "Direct Employer Contracts" },
              { val: "0%", label: "Upfront Exploitation", sub: "Govt-Aligned Mobility" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  borderRadius: 10,
                  padding: "16px 14px",
                  textAlign: "left",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
                }}
              >
                <div style={{ fontFamily: "var(--serif)", fontSize: isMobile ? 22 : 26, fontWeight: 700, color: "var(--accent)", letterSpacing: "-.02em" }}>
                  {stat.val}
                </div>
                <div style={{ fontFamily: "var(--sans)", fontSize: 12, fontWeight: 700, color: "var(--text)", marginTop: 2 }}>
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

      {/* German Healthcare Program Banner */}
      <section style={{ height: isMobile ? 260 : 380, position: "relative", overflow: "hidden" }}>
        <Image
          src="/images/work-abroad-germany.png"
          alt="German Healthcare Exchange Program — VSI Nursing & Healthcare Mobility"
          fill
          style={{ objectFit: "cover", objectPosition: "center 20%" }}
          sizes="100vw"
          priority
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--bg) 0%, rgba(13,27,42,0.45) 50%, rgba(13,27,42,0.7) 100%)" }} />
        <div
          style={{
            position: "absolute",
            bottom: isMobile ? 20 : 36,
            left: "5%",
            right: "5%",
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "flex-end",
            gap: 16,
          }}
        >
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", padding: "4px 12px", borderRadius: 20, marginBottom: 8, border: "1px solid rgba(255,255,255,0.25)" }}>
              <span style={{ fontSize: 14 }}>🇩🇪</span>
              <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "#FFF", letterSpacing: ".12em", textTransform: "uppercase", fontWeight: 600 }}>
                Featured European Pathway
              </span>
            </div>
            <h2 style={{ fontFamily: "var(--serif)", fontSize: isMobile ? 22 : 32, fontWeight: 700, color: "#FFF", margin: 0, textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
              German International Exchange Program
            </h2>
          </div>
          <Link href="/contact" style={{ textDecoration: "none" }}>
            <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8, background: "var(--accent)", color: "#FFF", border: "none" }}>
              Apply for German Corridor <ArrowUpRight size={14} />
            </button>
          </Link>
        </div>
      </section>

      {/* Corridors */}
      <section style={{ padding: isMobile ? "64px 6%" : "96px 5%" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <Globe size={18} color="var(--accent)" />
              <p style={{ fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: ".15em", color: "var(--accent)", textTransform: "uppercase", fontWeight: 600 }}>
                // Active Deployment Corridors
              </p>
            </div>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(26px,3.8vw,46px)", color: "var(--text)", marginBottom: 16, letterSpacing: "-.03em" }}>
              Where we deploy talent globally.
            </h2>
            <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 640, marginBottom: 48 }}>
              Explore our primary international employment hubs offering verified contracts, full visa sponsorship, structured language preparation, and ethical recruitment standards.
            </p>
          </AnimateIn>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 32 }}>
            {INTL_CORRIDORS.map((corridor, i) => (
              <AnimateIn key={corridor.region} animation="slideUp" delay={i * 0.12}>
                <div
                  className="hover-lift"
                  style={{
                    background: "var(--bg-card)",
                    border: "1.5px solid var(--border-card)",
                    borderRadius: 16,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
                    transition: "all .32s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {/* Stunning Picture Header Banner */}
                  <div style={{ height: 220, position: "relative", overflow: "hidden" }}>
                    <Image
                      src={corridor.image}
                      alt={`${corridor.region} Deployment Corridor — VSI Work Abroad`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />
                    {/* Gradient Overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: i === 0
                          ? "linear-gradient(to top, var(--bg-card) 0%, rgba(13,27,42,0.4) 60%, rgba(13,27,42,0.7) 100%)"
                          : "linear-gradient(to top, var(--bg-card) 0%, rgba(10,25,47,0.4) 60%, rgba(10,25,47,0.75) 100%)",
                      }}
                    />

                    {/* Top Flags & Region Badge */}
                    <div style={{ position: "absolute", top: 16, left: 20, right: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div
                        style={{
                          background: "rgba(0,0,0,0.55)",
                          backdropFilter: "blur(8px)",
                          padding: "6px 14px",
                          borderRadius: 20,
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          border: "1px solid rgba(255,255,255,0.2)",
                        }}
                      >
                        <span style={{ fontSize: 16 }}>{corridor.flag}</span>
                        <span style={{ fontFamily: "var(--mono)", fontSize: 11, fontWeight: 700, color: "#FFF", letterSpacing: ".05em" }}>
                          {corridor.region.split("—")[0].trim()}
                        </span>
                      </div>

                      <span
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: 9.5,
                          fontWeight: 700,
                          background: "var(--accent)",
                          color: "#FFF",
                          padding: "4px 10px",
                          borderRadius: 20,
                          textTransform: "uppercase",
                          letterSpacing: ".08em",
                        }}
                      >
                        Active Corridor
                      </span>
                    </div>

                    {/* Bottom Tagline Overlay */}
                    <div style={{ position: "absolute", bottom: 16, left: 20, right: 20 }}>
                      <span
                        style={{
                          fontFamily: "var(--sans)",
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#FFF",
                          background: "rgba(0,153,255,0.85)",
                          backdropFilter: "blur(6px)",
                          padding: "4px 12px",
                          borderRadius: 6,
                          display: "inline-block",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        }}
                      >
                        {corridor.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: isMobile ? "24px 20px" : "28px 26px", display: "flex", flexDirection: "column", gap: 20, flex: 1 }}>
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--serif)",
                          fontWeight: 700,
                          fontSize: "clamp(22px,2.5vw,28px)",
                          color: "var(--text)",
                          letterSpacing: "-.02em",
                          marginBottom: 10,
                        }}
                      >
                        {corridor.region}
                      </h3>

                      {/* City Badges */}
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                        {corridor.cities.map((city) => (
                          <span
                            key={city}
                            style={{
                              fontFamily: "var(--mono)",
                              fontSize: 10.5,
                              letterSpacing: ".08em",
                              textTransform: "uppercase",
                              background: "rgba(var(--accent-rgb),.08)",
                              color: "var(--accent)",
                              padding: "4px 10px",
                              borderRadius: 4,
                              border: "1px solid rgba(var(--accent-rgb),.18)",
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

                      <p style={{ fontFamily: "var(--body)", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>
                        {corridor.desc}
                      </p>
                    </div>

                    {/* Sectors Offered */}
                    {corridor.sectors && (
                      <div style={{ background: "var(--bg-muted)", borderRadius: 10, padding: "14px 16px", border: "1px solid var(--border)" }}>
                        <span style={{ fontFamily: "var(--mono)", fontSize: 10, fontWeight: 700, textTransform: "uppercase", color: "var(--text-muted)", letterSpacing: ".08em", display: "block", marginBottom: 8 }}>
                          Key Recruitment Sectors:
                        </span>
                        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                          {corridor.sectors.map((sec) => (
                            <span key={sec} style={{ fontSize: 11, fontWeight: 600, background: "var(--bg-card)", color: "var(--text)", padding: "3px 8px", borderRadius: 4, border: "1px solid var(--border)" }}>
                              {sec}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Perks Checklist */}
                    {corridor.perks && (
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        {corridor.perks.map((perk) => (
                          <div key={perk} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, fontWeight: 600, color: "var(--text)" }}>
                            <CheckCircle2 size={14} color="var(--accent)" />
                            <span>{perk}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Card Action */}
                    <div style={{ marginTop: "auto", paddingTop: 12 }}>
                      <Link href="/contact" style={{ textDecoration: "none" }}>
                        <button
                          className="btn-secondary"
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                            padding: "12px 18px",
                            fontSize: 13,
                          }}
                        >
                          Explore {corridor.region.split("—")[0].trim()} Placement Drives <ArrowUpRight size={14} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* German Healthcare Program highlight */}
      <section style={{ background: "var(--ink)", padding: isMobile ? "64px 6%" : "96px 5%", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 48, alignItems: "center" }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <HeartPulse size={20} color="rgba(var(--gold-rgb),.8)" />
                  <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".15em", color: "rgba(var(--gold-rgb),.6)", textTransform: "uppercase", fontWeight: 500 }}>
                    // Global Healthcare Pathways
                  </p>
                </div>
                <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(26px,3.5vw,42px)", color: "var(--text-inv)", marginBottom: 20, letterSpacing: "-.03em", lineHeight: 1.15 }}>
                  German International Exchange Program
                </h2>
                <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "rgba(248,247,244,.65)", lineHeight: 1.8, marginBottom: 28 }}>
                  Active program training and deploying qualified nursing and healthcare candidates directly into German hospital networks. Includes intensive German language instruction (up to B1/B2 level), qualification equivalency recognition, visa processing, and guaranteed placement.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Link href="/contact" style={{ textDecoration: "none" }}>
                    <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      Apply for German Pathway <ArrowUpRight size={13} />
                    </button>
                  </Link>
                </div>
              </div>

              <div
                style={{
                  width: isMobile ? "100%" : 320,
                  flexShrink: 0,
                  background: "rgba(255,255,255,.05)",
                  borderRadius: 16,
                  padding: "32px 28px",
                  border: "1px solid rgba(255,255,255,.12)",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.3)",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {[
                    { icon: "🇩🇪", label: "Destination", value: "Germany (EU)" },
                    { icon: "🏥", label: "Sector", value: "Clinical & Geriatric Healthcare" },
                    { icon: "🗣️", label: "Language", value: "German B1/B2 Certification" },
                    { icon: "📜", label: "Licensing", value: "Official Nursing Recognition" },
                    { icon: "✈️", label: "Mobility", value: "End-to-End Visa & Relocation" },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{ fontSize: 24, width: 38, textAlign: "center" }}>{item.icon}</div>
                      <div>
                        <div style={{ fontFamily: "var(--mono)", fontSize: 9.5, letterSpacing: ".12em", color: "rgba(248,247,244,.4)", textTransform: "uppercase" }}>{item.label}</div>
                        <div style={{ fontFamily: "var(--sans)", fontSize: 13.5, fontWeight: 600, color: "rgba(248,247,244,.88)", marginTop: 2 }}>{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* German healthcare — process timeline */}
      <section style={{ padding: isMobile ? "64px 6%" : "96px 5%" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <p style={{ fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: ".15em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 12, fontWeight: 600 }}>
              // Guided Candidate Journey
            </p>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(26px,3.5vw,42px)", color: "var(--text)", marginBottom: 16, letterSpacing: "-.03em" }}>
              Your 6-step pathway to Germany & Gulf.
            </h2>
            <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 620, marginBottom: 48 }}>
              A structured, transparent pathway from initial screening to international onboarding — backed by VSI Mobility Cell.
            </p>
          </AnimateIn>

          <div style={{ position: "relative" }}>
            {/* Vertical connector line */}
            <div
              style={{
                position: "absolute",
                left: isMobile ? 23 : 27,
                top: 8,
                bottom: 8,
                width: 2,
                background: "linear-gradient(to bottom, rgba(var(--accent-rgb),.5), rgba(var(--gold-rgb),.3))",
              }}
            />
            {WORK_ABROAD_PROCESS.map((step, i) => (
              <AnimateIn key={step.step} animation="slideUp" delay={i * 0.06}>
                <div style={{ display: "flex", gap: isMobile ? 18 : 24, alignItems: "flex-start", paddingBottom: i === WORK_ABROAD_PROCESS.length - 1 ? 0 : 32, position: "relative" }}>
                  {/* Step node */}
                  <div
                    style={{
                      width: isMobile ? 48 : 56,
                      height: isMobile ? 48 : 56,
                      borderRadius: "50%",
                      flexShrink: 0,
                      background: "var(--bg-card)",
                      border: "1.5px solid rgba(var(--accent-rgb),.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      zIndex: 2,
                      boxShadow: "0 4px 16px rgba(13,27,42,.08)",
                    }}
                  >
                    <span style={{ fontSize: isMobile ? 20 : 24 }}>{step.icon}</span>
                  </div>
                  <div style={{ flex: 1, paddingTop: isMobile ? 4 : 8 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: 10, fontWeight: 700, letterSpacing: ".12em", color: "var(--accent)", background: "rgba(var(--accent-rgb),.08)", padding: "2px 6px", borderRadius: 3 }}>
                        STEP {String(step.step).padStart(2, "0")}
                      </span>
                      <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: isMobile ? 17 : 20, color: "var(--text)", letterSpacing: "-.02em" }}>
                        {step.title}
                      </h3>
                    </div>
                    <p style={{ fontFamily: "var(--body)", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? "64px 6%" : "80px 5%", textAlign: "center", background: "var(--bg-muted)" }}>
        <AnimateIn animation="slideUp">
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              margin: "0 auto 20px",
              background: "linear-gradient(135deg, rgba(var(--accent-rgb),.15), rgba(var(--gold-rgb),.15))",
              border: "1px solid rgba(var(--accent-rgb),.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            }}
          >
            <Plane size={26} color="var(--accent)" />
          </div>
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(26px,3.8vw,42px)", color: "var(--text)", letterSpacing: "-.03em", marginBottom: 16 }}>
            Ready to explore global opportunities?
          </h2>
          <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 540, margin: "0 auto 28px" }}>
            Connect with our international placement cell to learn about current deployment drives, German language academy cohorts, and eligibility criteria.
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
