"use client";

import { useState } from "react";
import { ChevronDown, Zap, Building2, Globe, Landmark, GraduationCap, FileSpreadsheet, MapPin } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import {
  EMPLOYMENT_SECTORS,
  EMERGING_TECH,
  GOVT_MANDATES,
  SERVICES_PPP,
  SERVICES_VERTICALS,
  POLYTECHNIC_COLLEGES,
  ITI_COLLEGES,
} from "@/data/content";
import { useLang } from "@/context/LangContext";
import useIsMobile from "@/hooks/useIsMobile";
import Icon from "@/components/Icon";

export default function ServicesPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [openDirectory, setOpenDirectory] = useState<string | null>("ppp");
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

      {/* Six delivery verticals */}
      <section style={{ padding: isMobile ? "56px 6%" : "80px 5%", background: "var(--bg-muted)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <p className="eyebrow-label eyebrow-label--slash" style={{ marginBottom: 12 }}>
              What We Deliver
            </p>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(22px,3vw,36px)", color: "var(--text)", marginBottom: 32, letterSpacing: "var(--tr-display)" }}>
              Six delivery verticals.
            </h2>
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16 }}>
            {SERVICES_VERTICALS.map((v, i) => (
              <AnimateIn key={v.name} animation="slideUp" delay={i * 0.05}>
                <div className="course-row" style={{
                  background: "var(--bg-card)", border: "1px solid var(--border-card)", borderRadius: "var(--r-md)",
                  padding: "26px 22px", display: "flex", flexDirection: "column", gap: 10, height: "100%",
                }}>
                  <div className="icon-box"><Icon name={v.icon} size={19} color="var(--accent)" /></div>
                  <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-md)", color: "var(--text)", letterSpacing: "var(--tr-heading)" }}>{v.name}</h3>
                  <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Training Directory — PPP polytechnics & ITI colleges */}
      <section style={{ padding: isMobile ? "56px 6%" : "80px 5%", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: "var(--r-md)",
                background: "linear-gradient(135deg, rgba(var(--accent-rgb),.15), rgba(var(--gold-rgb),.1))",
                border: "1px solid rgba(var(--accent-rgb),.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <GraduationCap size={18} color="var(--accent)" />
              </div>
              <p className="eyebrow-label eyebrow-label--slash">
                Training Directory
              </p>
            </div>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(22px,3vw,36px)", color: "var(--text)", marginBottom: 12, letterSpacing: "var(--tr-display)" }}>
              PPP-mode partnerships.
            </h2>
            <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 620, marginBottom: 28 }}>
              Expand a partnership to see the individual colleges we run under it.
            </p>
          </AnimateIn>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { key: "ppp", label: "PPP-Mode Polytechnic Colleges", sub: `${POLYTECHNIC_COLLEGES.length} Government Polytechnics · Uttar Pradesh`, list: POLYTECHNIC_COLLEGES },
              { key: "iti", label: "ITI Colleges", sub: `${ITI_COLLEGES.length} Industrial Training Institutes · Jharkhand`, list: ITI_COLLEGES },
            ].map((group) => (
              <AnimateIn key={group.key} animation="slideUp">
                <div style={{
                  border: "1px solid var(--border-card)", borderRadius: "var(--r-md)", overflow: "hidden",
                  background: openDirectory === group.key ? "rgba(var(--accent-rgb),.03)" : "var(--bg-card)",
                  transition: "background .25s ease",
                }}>
                  <button
                    onClick={() => setOpenDirectory(openDirectory === group.key ? null : group.key)}
                    aria-expanded={openDirectory === group.key}
                    style={{
                      width: "100%", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between",
                      background: "transparent", border: "none", cursor: "pointer", textAlign: "left", gap: 16,
                    }}
                  >
                    <div>
                      <div style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-md)", color: "var(--text)", letterSpacing: "var(--tr-body)" }}>{group.label}</div>
                      <div style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)", letterSpacing: "var(--tr-caps)", marginTop: 4 }}>{group.sub}</div>
                    </div>
                    <ChevronDown
                      size={16}
                      color="var(--text-muted)"
                      style={{
                        transform: openDirectory === group.key ? "rotate(180deg)" : "rotate(0)",
                        transition: "transform .25s ease",
                        flexShrink: 0,
                      }}
                    />
                  </button>
                  {openDirectory === group.key && (
                    <div style={{ padding: "0 24px 22px", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 12 }}>
                      {group.list.map((col) => (
                        <div key={col.name} style={{
                          background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--r-md)",
                          overflow: "hidden", display: "flex", flexDirection: "column",
                        }}>
                          {/* Centre image */}
                          <div style={{
                            position: "relative", width: "100%", height: 140, overflow: "hidden",
                          }}>
                            <img
                              src={col.image}
                              alt={col.name}
                              style={{
                                width: "100%", height: "100%", objectFit: "cover",
                                display: "block",
                              }}
                            />
                            <div style={{
                              position: "absolute", bottom: 0, left: 0, right: 0, height: "50%",
                              background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)",
                              pointerEvents: "none",
                            }} />
                          </div>
                          {/* Info */}
                          <div style={{ padding: "12px 16px 16px", display: "flex", flexDirection: "column", gap: 6 }}>
                            <h4 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-base)", color: "var(--text)", lineHeight: 1.35, letterSpacing: "var(--tr-body)" }}>{col.name}</h4>
                            {col.aka && (
                              <span style={{ fontFamily: "var(--body)", fontSize: "var(--text-xs)", color: "var(--text-muted)", fontStyle: "italic", lineHeight: 1.5 }}>
                                Also referred to as {col.aka}
                              </span>
                            )}
                            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)", letterSpacing: "var(--tr-caps)", marginTop: 2 }}>
                              <MapPin size={10} strokeWidth={1.8} /> {col.district} district, {col.state}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Initiatives */}
      <section style={{ padding: isMobile ? "64px 6%" : "96px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: "var(--r-md)",
                background: "linear-gradient(135deg, rgba(var(--accent-rgb),.15), rgba(var(--gold-rgb),.1))",
                border: "1px solid rgba(var(--accent-rgb),.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Zap size={18} color="var(--accent)" />
              </div>
              <p className="eyebrow-label eyebrow-label--slash">
                Skill Initiatives
              </p>
            </div>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(24px,3.5vw,44px)", color: "var(--text)", marginBottom: 16, letterSpacing: "var(--tr-display)" }}>
              Large-scale capacity building.
            </h2>
            <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 640, marginBottom: 48 }}>
              We deliver large-scale skill training programs under government mandates and institutional frameworks, building employability at the grassroots level across India.
            </p>
          </AnimateIn>

          {/* Employment Sectors Grid */}
          <AnimateIn animation="slideUp" delay={0.1}>
            <p className="eyebrow-label eyebrow-label--slash" style={{ marginBottom: 20 }}>
              Employment-Wise Sectors
            </p>
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16, marginBottom: 64 }}>
            {EMPLOYMENT_SECTORS.map((sector, i) => (
              <AnimateIn key={sector.name} animation="slideUp" delay={i * 0.06}>
                <div className="course-row" style={{
                  background: "var(--bg-card)", border: "1px solid var(--border-card)", borderRadius: "var(--r-md)",
                  padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12, height: "100%",
                }}>
                  <div className="icon-box"><Icon name={sector.icon} size={19} color="var(--accent)" /></div>
                  <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--text)", letterSpacing: "var(--tr-heading)" }}>{sector.name}</h3>
                  <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: 1.6 }}>{sector.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Emerging Technology */}
          <AnimateIn animation="slideUp">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: "var(--r-md)",
                background: "linear-gradient(135deg, rgba(var(--green-rgb),.15), rgba(var(--accent-rgb),.1))",
                border: "1px solid rgba(var(--green-rgb),.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Globe size={18} color="var(--accent-green)" />
              </div>
              <p className="eyebrow-label eyebrow-label--slash" style={{ color: "var(--accent-green)" }}>
                Emerging Technology Programs
              </p>
            </div>
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16, marginBottom: 64 }}>
            {EMERGING_TECH.map((tech, i) => (
              <AnimateIn key={tech.name} animation="slideUp" delay={i * 0.06}>
                <div className="hover-lift" style={{
                  background: "linear-gradient(145deg, var(--bg-card) 0%, rgba(var(--accent-rgb),.04) 100%)",
                  border: "1px solid var(--border-card)", borderRadius: "var(--r-md)",
                  padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12, height: "100%",
                  transition: "box-shadow .3s ease",
                }}>
                  <div className="icon-box"><Icon name={tech.icon} size={19} color="var(--accent-green)" /></div>
                  <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--text)", letterSpacing: "var(--tr-heading)" }}>{tech.name}</h3>
                  <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: 1.6 }}>{tech.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* PPP & Workforce (Priyadarshan Sir's Input) */}
          <AnimateIn animation="slideUp">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: "var(--r-md)",
                background: "linear-gradient(135deg, rgba(var(--accent-rgb),.15), rgba(var(--gold-rgb),.1))",
                border: "1px solid rgba(var(--accent-rgb),.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Landmark size={18} color="var(--accent)" />
              </div>
              <p className="eyebrow-label eyebrow-label--slash">
                PPP & Workforce Solutions
              </p>
            </div>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(22px,3vw,36px)", color: "var(--text)", marginBottom: 28, letterSpacing: "var(--tr-display)" }}>
              Public-private partnership at scale.
            </h2>
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16, marginBottom: 64 }}>
            {SERVICES_PPP.map((item, i) => (
              <AnimateIn key={item.name} animation="slideUp" delay={i * 0.06}>
                <div className="hover-lift" style={{
                  background: "linear-gradient(145deg, var(--bg-card) 0%, rgba(var(--gold-rgb),.04) 100%)",
                  border: "1px solid var(--border-card)", borderRadius: "var(--r-md)",
                  padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12, height: "100%",
                  transition: "box-shadow .3s ease",
                }}>
                  <div className="icon-box"><Icon name={item.icon} size={19} color="var(--accent)" /></div>
                  <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--text)", letterSpacing: "var(--tr-heading)" }}>{item.name}</h3>
                  <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Government Mandates — Accordion */}
          <AnimateIn animation="slideUp">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: "var(--r-md)",
                background: "linear-gradient(135deg, rgba(var(--gold-rgb),.15), rgba(var(--accent-rgb),.08))",
                border: "1px solid rgba(var(--gold-rgb),.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Building2 size={18} color="var(--accent-gold)" />
              </div>
              <p className="eyebrow-label eyebrow-label--slash" style={{ color: "var(--accent-gold)" }}>
                Government Mandates & Projects
              </p>
            </div>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(22px,3vw,36px)", color: "var(--text)", marginBottom: 28, letterSpacing: "var(--tr-display)" }}>
              Public sector delivery mandates.
            </h2>
          </AnimateIn>

          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {GOVT_MANDATES.map((mandate, i) => (
              <AnimateIn key={mandate.name} animation="slideUp" delay={i * 0.05}>
                <div style={{
                  border: "1px solid var(--border-card)", borderRadius: "var(--r-md)", overflow: "hidden",
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
                      <div style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-md)", color: "var(--text)", letterSpacing: "var(--tr-body)" }}>{mandate.name}</div>
                      <div style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)", letterSpacing: "var(--tr-caps)", marginTop: 3 }}>{mandate.fullName}</div>
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
                    maxHeight: openAccordion === i ? 220 : 0, overflow: "hidden",
                    transition: "max-height .3s ease",
                  }}>
                    <div style={{ padding: "0 24px 20px" }}>
                      <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: 1.65 }}>{mandate.desc}</p>
                      {"sheet" in mandate && mandate.sheet && (
                        <div style={{
                          marginTop: 14, padding: "12px 14px", borderRadius: "var(--r-sm)",
                          background: "rgba(var(--accent-rgb),.06)", border: "1px solid rgba(var(--accent-rgb),.25)",
                          display: "flex", alignItems: "center", gap: 10,
                        }}>
                          <FileSpreadsheet size={15} color="var(--accent)" style={{ flexShrink: 0 }} />
                          <span style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)", letterSpacing: "var(--tr-caps)" }}>
                            {mandate.sheet}
                          </span>
                        </div>
                      )}
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
