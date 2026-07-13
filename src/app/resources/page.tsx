"use client";

import { useState } from "react";
import { FileText, Download, ExternalLink, Newspaper, Megaphone, Award, BookOpen } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import { NEWS, AWARDS, RESOURCE_TABS } from "@/data/content";
import { useLang } from "@/context/LangContext";
import useIsMobile from "@/hooks/useIsMobile";

const BROCHURES = [
  { name: "VSI Course Catalog 2024", desc: "Complete guide to all certificate, diploma and vocational programs.", size: "2.4 MB", color: "#1565c0", icon: "📚" },
  { name: "CAD Engineering Programs", desc: "Detailed syllabus and fee structure for all CAD courses.", size: "1.8 MB", color: "#0d7a55", icon: "⚙️" },
  { name: "Data Science & AI Programs", desc: "Curriculum overview for data analytics, AI/ML and digital marketing.", size: "1.5 MB", color: "#6a1b9a", icon: "🤖" },
  { name: "Placement Brochure", desc: "Placement statistics, recruiter list and salary data.", size: "3.1 MB", color: "#b8520a", icon: "🏢" },
  { name: "Centre Profiles", desc: "Location-wise infrastructure, faculty and lab details.", size: "2.0 MB", color: "#c62828", icon: "🏛️" },
];

const ADS = [
  { title: "Skill India Week Campaign", desc: "VSI's participation in national skill awareness week — 500+ students enrolled through the drive.", date: "2024", tag: "National Drive", color: "#1565c0" },
  { title: "Women in Tech Initiative", desc: "Free 3-month upskilling program for 200 women across Jharkhand in data analytics and digital marketing.", date: "2024", tag: "Social Impact", color: "#6a1b9a" },
  { title: "EV Awareness Rally", desc: "State-wide EV technology awareness campaign in partnership with JSDM and local automotive dealers.", date: "2023", tag: "Green Tech", color: "#0d7a55" },
  { title: "Tribal Youth Employment Drive", desc: "Job fair connecting 1,000+ tribal youth with 25 recruiting companies across multiple sectors.", date: "2023", tag: "Employment", color: "#b8520a" },
];

// Reusable thumbnail strip for news cards
function NewsThumbnail({ featured, index }: { featured?: boolean; index: number }) {
  const palettes = [
    { from: "#0d1f3c", to: "#1565c0", accent: "#4fc3f7" },
    { from: "#0d2818", to: "#0d7a55", accent: "#69f0ae" },
    { from: "#1a0d3c", to: "#5c1e91", accent: "#ce93d8" },
    { from: "#2d1000", to: "#b8520a", accent: "#ffcc02" },
    { from: "#1a0000", to: "#b71c1c", accent: "#ef9a9a" },
    { from: "#0d1a2d", to: "#0d47a1", accent: "#81d4fa" },
  ];
  const p = palettes[index % palettes.length];
  return (
    <div
      style={{
        width: "100%",
        height: 130,
        borderRadius: "8px 8px 0 0",
        background: `linear-gradient(135deg, ${p.from} 0%, ${p.to} 100%)`,
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Grid lines */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      {/* Glow blob */}
      <div style={{
        position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
        width: 80, height: 80, borderRadius: "50%",
        background: `radial-gradient(circle, ${p.accent}33 0%, transparent 70%)`,
      }} />
      {/* Icon */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: 36, opacity: 0.9,
      }}>
        📰
      </div>
      {/* Featured badge */}
      {featured && (
        <div style={{
          position: "absolute", top: 10, right: 10,
          fontFamily: "var(--sans)", fontSize: 9, fontWeight: 700, letterSpacing: ".1em",
          background: "rgba(var(--accent-rgb),.9)", color: "#fff",
          padding: "3px 8px", borderRadius: 3, textTransform: "uppercase",
        }}>
          Featured
        </div>
      )}
      {/* Accent line */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(to right, ${p.accent}, transparent)`,
      }} />
    </div>
  );
}

function AdsThumbnail({ color, tag, index }: { color: string; tag: string; index: number }) {
  const icons = ["📢", "💡", "⚡", "🤝"];
  return (
    <div style={{
      width: "100%", height: 120,
      borderRadius: "8px 8px 0 0",
      background: `linear-gradient(135deg, #0a1628 0%, ${color}99 100%)`,
      position: "relative", overflow: "hidden", flexShrink: 0,
    }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,.02) 0, rgba(255,255,255,.02) 1px, transparent 0, transparent 50%)",
        backgroundSize: "14px 14px",
      }} />
      <div style={{
        position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)",
        fontSize: 48, opacity: 0.5,
      }}>{icons[index % icons.length]}</div>
      <div style={{
        position: "absolute", bottom: 10, left: 14,
        fontFamily: "var(--mono)", fontSize: 9, fontWeight: 700, letterSpacing: ".12em",
        color: "#fff", opacity: 0.6, textTransform: "uppercase",
      }}>{tag}</div>
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(to right, ${color}, transparent)`,
      }} />
    </div>
  );
}

function RecognitionThumbnail({ index }: { index: number }) {
  const bg = ["linear-gradient(135deg,#2d1a00,#c9952a88)", "linear-gradient(135deg,#0d1f3c,#1565c088)", "linear-gradient(135deg,#1a0d3c,#6a1b9a88)"][index % 3];
  const accent = ["#ffcc02", "#4fc3f7", "#ce93d8"][index % 3];
  return (
    <div style={{
      width: "100%", height: 100,
      borderRadius: "8px 8px 0 0",
      background: bg,
      position: "relative", overflow: "hidden", flexShrink: 0,
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse at 50% 80%, ${accent}22 0%, transparent 70%)`,
      }} />
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        fontSize: 38, filter: "drop-shadow(0 0 12px rgba(255,200,0,.5))",
      }}>🏆</div>
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(to right, ${accent}, transparent)`,
      }} />
    </div>
  );
}

function BrochureThumbnail({ color, icon }: { color: string; icon: string }) {
  return (
    <div style={{
      width: 72, height: 88, borderRadius: 6, flexShrink: 0,
      background: `linear-gradient(160deg, #0a1628 0%, ${color}55 100%)`,
      border: `1px solid ${color}44`,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      gap: 6, position: "relative", overflow: "hidden",
    }}>
      {/* Page fold */}
      <div style={{
        position: "absolute", top: 0, right: 0,
        borderLeft: "12px solid transparent",
        borderBottom: "12px solid transparent",
        borderTop: `12px solid ${color}88`,
        borderRight: `12px solid ${color}88`,
        borderRadius: "0 4px 0 0",
      }} />
      {/* Lines */}
      <div style={{ position: "absolute", bottom: 12, left: 8, right: 8 }}>
        {[0, 1, 2].map((j) => (
          <div key={j} style={{ height: 1.5, background: `${color}44`, marginBottom: 4, borderRadius: 2, width: j === 2 ? "60%" : "100%" }} />
        ))}
      </div>
      <span style={{ fontSize: 22, zIndex: 1 }}>{icon}</span>
    </div>
  );
}

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
                    display: "flex", flexDirection: "column", overflow: "hidden", height: "100%",
                  }}>
                    <NewsThumbnail featured={item.featured} index={i} />
                    <div style={{ padding: "20px 22px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".12em", color: "var(--accent)", textTransform: "uppercase", fontWeight: 500 }}>{item.date}</span>
                      </div>
                      <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 17, color: "var(--text)", letterSpacing: "-.02em", lineHeight: 1.3 }}>{item.t}</h3>
                      <p style={{ fontFamily: "var(--body)", fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.65 }}>{item.s}</p>
                    </div>
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
                    display: "flex", flexDirection: "column", overflow: "hidden", height: "100%",
                  }}>
                    <AdsThumbnail color={ad.color} tag={ad.tag} index={i} />
                    <div style={{ padding: "20px 22px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                      <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".12em", color: "var(--accent-gold)", textTransform: "uppercase", fontWeight: 500 }}>{ad.date}</span>
                      <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 17, color: "var(--text)", letterSpacing: "-.02em", lineHeight: 1.3 }}>{ad.title}</h3>
                      <p style={{ fontFamily: "var(--body)", fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.65 }}>{ad.desc}</p>
                    </div>
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
                    background: "var(--bg-card)",
                    border: "1px solid rgba(var(--gold-rgb),.15)", borderRadius: 10,
                    display: "flex", flexDirection: "column", overflow: "hidden", height: "100%",
                  }}>
                    <RecognitionThumbnail index={i} />
                    <div style={{ padding: "20px 22px", display: "flex", flexDirection: "column", gap: 10, flex: 1, textAlign: "center" }}>
                      <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 17, color: "var(--text)", letterSpacing: "-.02em" }}>{award.t}</h3>
                      <p style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{award.s}</p>
                      <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: "auto", paddingTop: 6 }}>
                        <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--accent-gold)", letterSpacing: ".08em" }}>{award.y}</span>
                        <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text-muted)", letterSpacing: ".08em" }}>{award.by}</span>
                      </div>
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
                    padding: "18px 22px", display: "flex", alignItems: "center", gap: 18,
                  }}>
                    <BrochureThumbnail color={brochure.color} icon={brochure.icon} />
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 15, color: "var(--text)", letterSpacing: "-.015em" }}>{brochure.name}</h3>
                      <p style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--text-muted)", marginTop: 4, lineHeight: 1.5 }}>{brochure.desc}</p>
                      <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text-muted)", display: "inline-block", marginTop: 6 }}>PDF · {brochure.size}</span>
                    </div>
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
