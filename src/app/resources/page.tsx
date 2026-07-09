"use client";

import { useState } from "react";
import { FileText, Download, ExternalLink } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import { NEWS, AWARDS, RESOURCE_TABS } from "@/data/content";
import { useLang } from "@/context/LangContext";
import useIsMobile from "@/hooks/useIsMobile";

const BROCHURES = [
  { name: "VSI Course Catalog 2024", desc: "Complete guide to all certificate, diploma and vocational programs.", size: "2.4 MB" },
  { name: "CAD Engineering Programs", desc: "Detailed syllabus and fee structure for all CAD courses.", size: "1.8 MB" },
  { name: "Data Science & AI Programs", desc: "Curriculum overview for data analytics, AI/ML and digital marketing.", size: "1.5 MB" },
  { name: "Placement Brochure", desc: "Placement statistics, recruiter list and salary data.", size: "3.1 MB" },
  { name: "Centre Profiles", desc: "Location-wise infrastructure, faculty and lab details.", size: "2.0 MB" },
];

const ADS = [
  { title: "Skill India Week Campaign", desc: "VSI's participation in national skill awareness week — 500+ students enrolled through the drive.", date: "2024" },
  { title: "Women in Tech Initiative", desc: "Free 3-month upskilling program for 200 women across Jharkhand in data analytics and digital marketing.", date: "2024" },
  { title: "EV Awareness Rally", desc: "State-wide EV technology awareness campaign in partnership with JSDM and local automotive dealers.", date: "2023" },
  { title: "Tribal Youth Employment Drive", desc: "Job fair connecting 1,000+ tribal youth with 25 recruiting companies across multiple sectors.", date: "2023" },
];

export default function ResourcesPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("news");
  const { t } = useLang();
  const isMobile = useIsMobile(900);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar formOpen={formOpen} setFormOpen={setFormOpen} />

      {/* Hero */}
      <section className="inner-hero-warm">
        <AnimateIn animation="slideUp">
          <p className="eyebrow">{t("resourcesEyebrow")}</p>
          <h1>{t("resourcesTitle1")}<br /><em>{t("resourcesTitle2")}</em></h1>
          <p className="lead">{t("resourcesHeroDesc")}</p>
        </AnimateIn>
      </section>

      {/* Tab selector */}
      <section style={{ padding: isMobile ? "40px 6% 0" : "56px 5% 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="segment" role="tablist" aria-label="Resources">
            {RESOURCE_TABS.map((tab) => (
              <button
                key={tab.key}
                role="tab"
                aria-selected={activeTab === tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`segment-btn${activeTab === tab.key ? " active" : ""}`}
              >
                <span style={{ marginRight: 6 }}>{tab.icon}</span> {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab content */}
      <section style={{ padding: isMobile ? "32px 6% 64px" : "48px 5% 96px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* News & Blogs */}
          {activeTab === "news" && (
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 20 }}>
              {NEWS.map((item, i) => (
                <AnimateIn key={i} animation="slideUp" delay={i * 0.06}>
                  <article className="course-row" style={{
                    background: "var(--bg-card)", border: "1px solid var(--border-card)", borderRadius: 10,
                    padding: "28px 26px", display: "flex", flexDirection: "column", gap: 10, height: "100%",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".12em", color: "var(--accent)", textTransform: "uppercase", fontWeight: 500 }}>{item.date}</span>
                      {item.featured && (
                        <span style={{
                          fontFamily: "var(--sans)", fontSize: 9, fontWeight: 700, letterSpacing: ".1em",
                          background: "rgba(var(--accent-rgb),.12)", color: "var(--accent)", padding: "3px 8px", borderRadius: 3, textTransform: "uppercase",
                        }}>Featured</span>
                      )}
                    </div>
                    <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 18, color: "var(--text)", letterSpacing: "-.02em", lineHeight: 1.3 }}>{item.t}</h3>
                    <p style={{ fontFamily: "var(--body)", fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.65 }}>{item.s}</p>
                  </article>
                </AnimateIn>
              ))}
            </div>
          )}

          {/* Advertisements */}
          {activeTab === "ads" && (
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 20 }}>
              {ADS.map((ad, i) => (
                <AnimateIn key={i} animation="slideUp" delay={i * 0.06}>
                  <article className="course-row" style={{
                    background: "var(--bg-card)", border: "1px solid var(--border-card)", borderRadius: 10,
                    padding: "28px 26px", display: "flex", flexDirection: "column", gap: 10, height: "100%",
                  }}>
                    <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".12em", color: "var(--accent-gold)", textTransform: "uppercase", fontWeight: 500 }}>{ad.date}</span>
                    <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 18, color: "var(--text)", letterSpacing: "-.02em", lineHeight: 1.3 }}>{ad.title}</h3>
                    <p style={{ fontFamily: "var(--body)", fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.65 }}>{ad.desc}</p>
                  </article>
                </AnimateIn>
              ))}
            </div>
          )}

          {/* Recognition & Accreditations */}
          {activeTab === "recognition" && (
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16 }}>
              {AWARDS.map((award, i) => (
                <AnimateIn key={i} animation="scaleIn" delay={i * 0.08}>
                  <div style={{
                    background: "linear-gradient(145deg, var(--bg-card) 0%, rgba(var(--gold-rgb),.04) 100%)",
                    border: "1px solid rgba(var(--gold-rgb),.15)", borderRadius: 10,
                    padding: "32px 26px", display: "flex", flexDirection: "column", gap: 12, height: "100%",
                    textAlign: "center",
                  }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: "50%", margin: "0 auto 8px",
                      background: "linear-gradient(135deg, rgba(var(--gold-rgb),.2), rgba(var(--accent-rgb),.1))",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "var(--serif)", fontWeight: 700, fontSize: 18, color: "var(--accent-gold)",
                    }}>🏆</div>
                    <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 18, color: "var(--text)", letterSpacing: "-.02em" }}>{award.t}</h3>
                    <p style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{award.s}</p>
                    <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: "auto" }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--accent-gold)", letterSpacing: ".08em" }}>{award.y}</span>
                      <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text-muted)", letterSpacing: ".08em" }}>{award.by}</span>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          )}

          {/* Brochures */}
          {activeTab === "brochures" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {BROCHURES.map((brochure, i) => (
                <AnimateIn key={i} animation="slideUp" delay={i * 0.05}>
                  <div className="course-row" style={{
                    background: "var(--bg-card)", border: "1px solid var(--border-card)", borderRadius: 8,
                    padding: "20px 24px", display: "flex", alignItems: "center", gap: 16,
                  }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 8, flexShrink: 0,
                      background: "rgba(var(--accent-rgb),.08)", border: "1px solid rgba(var(--accent-rgb),.15)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <FileText size={18} color="var(--accent)" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 15, color: "var(--text)", letterSpacing: "-.015em" }}>{brochure.name}</h3>
                      <p style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>{brochure.desc}</p>
                    </div>
                    <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text-muted)", flexShrink: 0 }}>PDF · {brochure.size}</span>
                    <button className="btn-secondary" style={{ padding: "8px 16px", fontSize: 11, display: "flex", alignItems: "center", gap: 5, flexShrink: 0 }}>
                      <Download size={12} /> Download
                    </button>
                  </div>
                </AnimateIn>
              ))}
            </div>
          )}

        </div>
      </section>

      <Footer />
      <FloatingWA />
    </div>
  );
}
