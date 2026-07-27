"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plane, ArrowUpRight, Globe, HeartPulse, Building } from "lucide-react";
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
      <section className="inner-hero-warm">
        <AnimateIn animation="slideUp">
          <p className="eyebrow">{t("workAbroadEyebrow")}</p>
          <h1>{t("workAbroadTitle1")}<br /><em>{t("workAbroadTitle2")}</em></h1>
          <p className="lead">{t("workAbroadHeroDesc")}</p>
        </AnimateIn>
      </section>

      {/* German Healthcare Program Banner */}
      <section style={{ height: isMobile ? 240 : 360, position: "relative", overflow: "hidden" }}>
        <Image
          src="/images/work-abroad-germany.png"
          alt="German Healthcare Exchange Program — VSI Nursing & Healthcare Mobility"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--surface) 0%, transparent 40%)" }} />
        <div style={{
          position: "absolute", bottom: 20, left: "5%",
          fontFamily: "var(--mono)", fontSize: 10, color: "rgba(248,247,244,.5)",
          letterSpacing: ".12em", textTransform: "uppercase",
        }}>
          German Healthcare Exchange · International Placement Program
        </div>
      </section>

      {/* Corridors */}
      <section style={{ padding: isMobile ? "64px 6%" : "96px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".15em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 12, fontWeight: 500 }}>
              // Active Deployment Corridors
            </p>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(24px,3.5vw,44px)", color: "var(--text)", marginBottom: 48, letterSpacing: "-.03em" }}>
              Where we deploy talent globally.
            </h2>
          </AnimateIn>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 24 }}>
            {INTL_CORRIDORS.map((corridor, i) => (
              <AnimateIn key={corridor.region} animation="slideUp" delay={i * 0.1}>
                <div className="hover-lift" style={{
                  background: "var(--bg-card)", border: "1px solid var(--border-card)", borderRadius: 12,
                  padding: "36px 32px", display: "flex", flexDirection: "column", gap: 20, height: "100%",
                  position: "relative", overflow: "hidden",
                  transition: "box-shadow .32s ease",
                }}>
                  {/* Ambient glow */}
                  <div style={{
                    position: "absolute", top: -40, right: -40, width: 120, height: 120,
                    borderRadius: "50%", background: "radial-gradient(circle, rgba(var(--accent-rgb),.08) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }} />

                  <div style={{ fontSize: 48, lineHeight: 1 }}>{corridor.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "clamp(22px,3vw,32px)", color: "var(--text)", letterSpacing: "-.02em", marginBottom: 8 }}>
                      {corridor.region}
                    </h3>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                      {corridor.cities.map((city) => (
                        <span key={city} style={{
                          fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase",
                          background: "rgba(var(--accent-rgb),.08)", color: "var(--accent)", padding: "4px 10px", borderRadius: 4,
                          border: "1px solid rgba(var(--accent-rgb),.15)", fontWeight: 500,
                        }}>{city}</span>
                      ))}
                    </div>
                    <p style={{ fontFamily: "var(--body)", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>{corridor.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* German Healthcare Program highlight */}
      <section style={{ background: "var(--ink)", padding: isMobile ? "64px 6%" : "96px 5%" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 48, alignItems: "center" }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <HeartPulse size={20} color="rgba(var(--gold-rgb),.8)" />
                  <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".15em", color: "rgba(var(--gold-rgb),.6)", textTransform: "uppercase", fontWeight: 500 }}>
                    // Global Healthcare Pathways
                  </p>
                </div>
                <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(24px,3.5vw,40px)", color: "var(--text-inv)", marginBottom: 20, letterSpacing: "-.03em", lineHeight: 1.15 }}>
                  German International Exchange Program
                </h2>
                <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "rgba(248,247,244,.5)", lineHeight: 1.8, marginBottom: 28 }}>
                  Active program training and deploying qualified candidates directly into the European healthcare sector. Comprehensive language training, cultural preparation, and placement support for nursing and healthcare professionals in Germany.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <Link href="/contact" style={{ textDecoration: "none" }}>
                    <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      Apply for Program <ArrowUpRight size={13} />
                    </button>
                  </Link>
                </div>
              </div>

              <div style={{
                width: isMobile ? "100%" : 300, flexShrink: 0,
                background: "rgba(255,255,255,.04)", borderRadius: 12, padding: "32px 28px",
                border: "1px solid rgba(255,255,255,.08)",
              }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {[
                    { icon: "🇩🇪", label: "Destination", value: "Germany" },
                    { icon: "🏥", label: "Sector", value: "Healthcare" },
                    { icon: "📋", label: "Includes", value: "Language + Cultural Training" },
                    { icon: "✈️", label: "Support", value: "End-to-End Deployment" },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{ fontSize: 22, width: 36, textAlign: "center" }}>{item.icon}</div>
                      <div>
                        <div style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: ".12em", color: "rgba(248,247,244,.3)", textTransform: "uppercase" }}>{item.label}</div>
                        <div style={{ fontFamily: "var(--sans)", fontSize: 13, fontWeight: 600, color: "rgba(248,247,244,.75)", marginTop: 2 }}>{item.value}</div>
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
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".15em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 12, fontWeight: 500 }}>
              // How the Program Works
            </p>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(24px,3.5vw,40px)", color: "var(--text)", marginBottom: 16, letterSpacing: "-.03em" }}>
              Your pathway to Germany.
            </h2>
            <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 600, marginBottom: 48 }}>
              A guided, end-to-end journey from first registration to on-ground deployment — every step supported by our mobility cell.
            </p>
          </AnimateIn>

          <div style={{ position: "relative" }}>
            {/* Vertical connector line */}
            <div style={{
              position: "absolute", left: isMobile ? 23 : 27, top: 8, bottom: 8, width: 2,
              background: "linear-gradient(to bottom, rgba(var(--accent-rgb),.4), rgba(var(--gold-rgb),.25))",
            }} />
            {WORK_ABROAD_PROCESS.map((step, i) => (
              <AnimateIn key={step.step} animation="slideUp" delay={i * 0.06}>
                <div style={{ display: "flex", gap: isMobile ? 18 : 24, alignItems: "flex-start", paddingBottom: i === WORK_ABROAD_PROCESS.length - 1 ? 0 : 28, position: "relative" }}>
                  {/* Step node */}
                  <div style={{
                    width: isMobile ? 48 : 56, height: isMobile ? 48 : 56, borderRadius: "50%", flexShrink: 0,
                    background: "var(--bg-card)", border: "1px solid rgba(var(--accent-rgb),.25)",
                    display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 2,
                    boxShadow: "0 4px 16px rgba(13,27,42,.08)",
                  }}>
                    <span style={{ fontSize: isMobile ? 20 : 24 }}>{step.icon}</span>
                  </div>
                  <div style={{ flex: 1, paddingTop: isMobile ? 4 : 8 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: 10, fontWeight: 500, letterSpacing: ".1em", color: "var(--accent)" }}>STEP {String(step.step).padStart(2, "0")}</span>
                      <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: isMobile ? 17 : 19, color: "var(--text)", letterSpacing: "-.02em" }}>{step.title}</h3>
                    </div>
                    <p style={{ fontFamily: "var(--body)", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>{step.desc}</p>
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
          <div style={{
            width: 56, height: 56, borderRadius: "50%", margin: "0 auto 20px",
            background: "linear-gradient(135deg, rgba(var(--accent-rgb),.12), rgba(var(--gold-rgb),.1))",
            border: "1px solid rgba(var(--accent-rgb),.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Plane size={24} color="var(--accent)" />
          </div>
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(24px,3.5vw,40px)", color: "var(--text)", letterSpacing: "-.03em", marginBottom: 16 }}>
            Ready to explore global opportunities?
          </h2>
          <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 500, margin: "0 auto 28px" }}>
            Connect with our international placement cell to learn about current deployment drives and eligibility criteria.
          </p>
          <Link href="/contact" style={{ textDecoration: "none" }}>
            <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8, margin: "0 auto" }}>
              Contact Placement Cell <ArrowUpRight size={14} />
            </button>
          </Link>
        </AnimateIn>
      </section>

      <Footer />
      <FloatingWA />
    </div>
  );
}
