"use client";

import { useState } from "react";
import { ChevronDown, Zap, Building2, Globe } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import { EMPLOYMENT_SECTORS, EMERGING_TECH, GOVT_MANDATES } from "@/data/content";
import { useLang } from "@/context/LangContext";
import useIsMobile from "@/hooks/useIsMobile";

export default function ServicesPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const { t } = useLang();
  const isMobile = useIsMobile(900);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar formOpen={formOpen} setFormOpen={setFormOpen} />

      {/* Hero */}
      <section className="inner-hero-warm">
        <AnimateIn animation="slideUp">
          <p className="eyebrow">{t("servicesEyebrow")}</p>
          <h1>{t("servicesTitle1")}<br /><em>{t("servicesTitle2")}</em></h1>
          <p className="lead">{t("servicesHeroDesc")}</p>
        </AnimateIn>
      </section>

      {/* Skill Initiatives */}
      <section style={{ padding: isMobile ? "64px 6%" : "96px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: "linear-gradient(135deg, rgba(var(--accent-rgb),.15), rgba(var(--gold-rgb),.1))",
                border: "1px solid rgba(var(--accent-rgb),.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Zap size={18} color="var(--accent)" />
              </div>
              <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".15em", color: "var(--accent)", textTransform: "uppercase", fontWeight: 500 }}>
                // Skill Initiatives
              </p>
            </div>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(24px,3.5vw,44px)", color: "var(--text)", marginBottom: 16, letterSpacing: "-.03em" }}>
              Large-scale capacity building.
            </h2>
            <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 640, marginBottom: 48 }}>
              We deliver large-scale skill training programs under government mandates and institutional frameworks, building employability at the grassroots level across India.
            </p>
          </AnimateIn>

          {/* Employment Sectors Grid */}
          <AnimateIn animation="slideUp" delay={0.1}>
            <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".15em", color: "rgba(var(--ink-rgb),.3)", textTransform: "uppercase", marginBottom: 20, fontWeight: 500 }}>
              // Employment-Wise Sectors
            </p>
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16, marginBottom: 64 }}>
            {EMPLOYMENT_SECTORS.map((sector, i) => (
              <AnimateIn key={sector.name} animation="slideUp" delay={i * 0.06}>
                <div className="course-row" style={{
                  background: "var(--bg-card)", border: "1px solid var(--border-card)", borderRadius: 10,
                  padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12, height: "100%",
                }}>
                  <div style={{ fontSize: 28 }}>{sector.icon}</div>
                  <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 18, color: "var(--text)", letterSpacing: "-.02em" }}>{sector.name}</h3>
                  <p style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{sector.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Emerging Technology */}
          <AnimateIn animation="slideUp">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: "linear-gradient(135deg, rgba(var(--green-rgb),.15), rgba(var(--accent-rgb),.1))",
                border: "1px solid rgba(var(--green-rgb),.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Globe size={18} color="var(--accent-green)" />
              </div>
              <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".15em", color: "var(--accent-green)", textTransform: "uppercase", fontWeight: 500 }}>
                // Emerging Technology Programs
              </p>
            </div>
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16, marginBottom: 64 }}>
            {EMERGING_TECH.map((tech, i) => (
              <AnimateIn key={tech.name} animation="slideUp" delay={i * 0.06}>
                <div className="hover-lift" style={{
                  background: "linear-gradient(145deg, var(--bg-card) 0%, rgba(var(--accent-rgb),.04) 100%)",
                  border: "1px solid var(--border-card)", borderRadius: 10,
                  padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12, height: "100%",
                  transition: "box-shadow .3s ease",
                }}>
                  <div style={{ fontSize: 32 }}>{tech.icon}</div>
                  <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 18, color: "var(--text)", letterSpacing: "-.02em" }}>{tech.name}</h3>
                  <p style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{tech.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Government Mandates — Accordion */}
          <AnimateIn animation="slideUp">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: "linear-gradient(135deg, rgba(var(--gold-rgb),.15), rgba(var(--accent-rgb),.08))",
                border: "1px solid rgba(var(--gold-rgb),.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Building2 size={18} color="var(--accent-gold)" />
              </div>
              <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".15em", color: "var(--accent-gold)", textTransform: "uppercase", fontWeight: 500 }}>
                // Government Mandates & Projects
              </p>
            </div>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(22px,3vw,36px)", color: "var(--text)", marginBottom: 28, letterSpacing: "-.03em" }}>
              Public sector delivery mandates.
            </h2>
          </AnimateIn>

          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {GOVT_MANDATES.map((mandate, i) => (
              <AnimateIn key={mandate.name} animation="slideUp" delay={i * 0.05}>
                <div style={{
                  border: "1px solid var(--border-card)", borderRadius: 8, overflow: "hidden",
                  background: openAccordion === i ? "rgba(var(--accent-rgb),.03)" : "var(--bg-card)",
                  transition: "background .25s ease",
                }}>
                  <button
                    onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                    style={{
                      width: "100%", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between",
                      background: "transparent", border: "none", cursor: "pointer", textAlign: "left",
                    }}
                  >
                    <div>
                      <div style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 16, color: "var(--text)", letterSpacing: "-.015em" }}>{mandate.name}</div>
                      <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text-muted)", letterSpacing: ".05em", marginTop: 3 }}>{mandate.fullName}</div>
                    </div>
                    <ChevronDown
                      size={16}
                      color="var(--text-muted)"
                      style={{
                        transform: openAccordion === i ? "rotate(180deg)" : "rotate(0)",
                        transition: "transform .25s ease",
                        flexShrink: 0,
                      }}
                    />
                  </button>
                  <div style={{
                    maxHeight: openAccordion === i ? 120 : 0, overflow: "hidden",
                    transition: "max-height .3s ease",
                  }}>
                    <div style={{ padding: "0 24px 20px" }}>
                      <p style={{ fontFamily: "var(--body)", fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.65 }}>{mandate.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWA />
    </div>
  );
}
