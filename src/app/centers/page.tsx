"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Building, GraduationCap, Landmark, Home } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import { INFRA_TABS, TRAINING_INSTITUTIONS, SMART_CITY_BLOCKS, CENTERS } from "@/data/content";
import { useLang } from "@/context/LangContext";
import useIsMobile from "@/hooks/useIsMobile";

const BLOCK_ICONS = [Building, GraduationCap, Landmark, Home];

export default function CentersPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("central");
  const { t } = useLang();
  const isMobile = useIsMobile(900);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar formOpen={formOpen} setFormOpen={setFormOpen} />

      {/* Hero */}
      <section className="inner-hero-warm">
        <AnimateIn animation="slideUp">
          <p className="eyebrow">{t("centersEyebrow")}</p>
          <h1>{t("centersTitle1")}<br /><em>{t("centersTitle2")}</em></h1>
          <p className="lead">{t("centersHeroDesc")}</p>
        </AnimateIn>
      </section>

      {/* Hero image */}
      <section style={{ height: 320, position: "relative" }}>
        <Image src="/images/hero-cad-lab.png" alt="VSI CAD Lab" fill style={{ objectFit: "cover" }} sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,var(--surface) 0%,transparent 30%)" }} />
      </section>

      {/* Multi-Tab Initiative Blueprint */}
      <section style={{ padding: isMobile ? "64px 6%" : "96px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".15em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 12, fontWeight: 500 }}>
              // Initiative Blueprint
            </p>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(24px,3.5vw,44px)", color: "var(--text)", marginBottom: 32, letterSpacing: "-.03em" }}>
              Training delivery frameworks.
            </h2>
          </AnimateIn>

          {/* Tabs */}
          <div className="segment" role="tablist" aria-label="Initiatives" style={{ marginBottom: 32 }}>
            {INFRA_TABS.map((tab) => (
              <button
                key={tab.key}
                role="tab"
                aria-selected={activeTab === tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`segment-btn${activeTab === tab.key ? " active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {INFRA_TABS.map((tab) =>
            activeTab === tab.key ? (
              <AnimateIn key={tab.key} animation="slideUp">
                <div style={{
                  background: "var(--bg-card)", border: "1px solid var(--border-card)", borderRadius: 10,
                  padding: "32px 28px",
                }}>
                  <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 22, color: "var(--text)", letterSpacing: "-.02em", marginBottom: 12 }}>
                    {tab.label}
                  </h3>
                  <p style={{ fontFamily: "var(--body)", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>
                    {tab.desc}
                  </p>
                  {tab.key === "skill" && (
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
                      {["UPSDM (Uttar Pradesh)", "JSDM (Jharkhand)", "BSDM (Bihar)"].map((state) => (
                        <span key={state} style={{
                          fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".08em", textTransform: "uppercase",
                          background: "rgba(var(--accent-rgb),.08)", color: "var(--accent)", padding: "6px 12px", borderRadius: 4,
                          border: "1px solid rgba(var(--accent-rgb),.15)", fontWeight: 500,
                        }}>{state}</span>
                      ))}
                    </div>
                  )}
                  {tab.key === "central" && (
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
                      <span style={{
                        fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".08em", textTransform: "uppercase",
                        background: "rgba(var(--gold-rgb),.1)", color: "var(--accent-gold)", padding: "6px 12px", borderRadius: 4,
                        border: "1px solid rgba(var(--gold-rgb),.18)", fontWeight: 500,
                      }}>DDU-GKY Programs</span>
                    </div>
                  )}
                </div>
              </AnimateIn>
            ) : null
          )}
        </div>
      </section>

      {/* Training Institutions */}
      <section style={{ padding: isMobile ? "0 6% 64px" : "0 5% 96px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".15em", color: "rgba(var(--ink-rgb),.3)", textTransform: "uppercase", marginBottom: 12, fontWeight: 500 }}>
              // Training Institutions Directory
            </p>
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16 }}>
            {TRAINING_INSTITUTIONS.map((inst, i) => (
              <AnimateIn key={inst.name} animation="slideUp" delay={i * 0.08}>
                <div className="course-row" style={{
                  background: "var(--bg-card)", border: "1px solid var(--border-card)", borderRadius: 10,
                  padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12, height: "100%",
                }}>
                  <div style={{
                    fontFamily: "var(--mono)", fontSize: 9, letterSpacing: ".14em", textTransform: "uppercase",
                    color: "var(--accent)", fontWeight: 500,
                  }}>{inst.type}</div>
                  <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 18, color: "var(--text)", letterSpacing: "-.02em" }}>
                    {inst.name}
                    {inst.count && <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)", marginLeft: 8 }}>×{inst.count}</span>}
                  </h3>
                  <p style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{inst.desc}</p>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text-muted)", letterSpacing: ".08em" }}>📍 {inst.state}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Ranchi Smart City Visualizer */}
      <section style={{ background: "var(--ink)", padding: isMobile ? "64px 6%" : "96px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".15em", color: "rgba(var(--gold-rgb),.5)", textTransform: "uppercase", marginBottom: 12, fontWeight: 500 }}>
              // Flagship Facility
            </p>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(24px,3.5vw,44px)", color: "var(--text-inv)", marginBottom: 14, letterSpacing: "-.03em" }}>
              Ranchi Smart City (Dhurwa)
            </h2>
            <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "rgba(248,247,244,.45)", lineHeight: 1.75, maxWidth: 640, marginBottom: 48 }}>
              A high-tech hub spanning 4 distinct operational blocks — from executive offices and F&B zones to smart classrooms and residential housing.
            </p>
          </AnimateIn>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 16 }}>
            {SMART_CITY_BLOCKS.map((block, i) => {
              const Icon = BLOCK_ICONS[i] || Building;
              return (
                <AnimateIn key={block.block} animation="slideUp" delay={i * 0.08}>
                  <div className="hover-lift" style={{
                    background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 10,
                    padding: "28px 24px", display: "flex", gap: 16, alignItems: "flex-start",
                    transition: "background .25s ease, box-shadow .3s ease",
                  }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 10, flexShrink: 0,
                      background: "rgba(var(--accent-rgb),.12)", border: "1px solid rgba(var(--accent-rgb),.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon size={20} color="var(--accent)" />
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: ".14em", color: "rgba(var(--gold-rgb),.5)", textTransform: "uppercase", marginBottom: 6 }}>
                        Block {block.block} · {block.name}
                      </div>
                      <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 18, color: "var(--text-inv)", letterSpacing: "-.02em", marginBottom: 6 }}>
                        {block.name}
                      </h3>
                      <p style={{ fontFamily: "var(--body)", fontSize: 13, color: "rgba(248,247,244,.4)", lineHeight: 1.6 }}>{block.desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Existing Centers list */}
      <section style={{ padding: isMobile ? "64px 6%" : "96px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".15em", color: "rgba(var(--ink-rgb),.3)", textTransform: "uppercase", marginBottom: 12, fontWeight: 500 }}>
              // Centre Locations
            </p>
          </AnimateIn>
          {CENTERS.map((c, i) => (
            <AnimateIn key={i} animation="slideUp" delay={i * 0.08}>
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "start",
                gap: 32, padding: "28px 0",
                borderBottom: "1px solid rgba(var(--ink-rgb),.08)",
                flexWrap: "wrap",
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 22, color: "var(--text)", letterSpacing: "-.02em" }}>
                      {c.city}, {c.state}
                    </h3>
                    {c.flagship && <span style={{ background: "var(--ink)", color: "var(--text-inv)", fontFamily: "var(--sans)", fontWeight: 700, fontSize: 9, letterSpacing: ".1em", padding: "3px 8px", borderRadius: 1, textTransform: "uppercase" }}>Flagship</span>}
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 14 }}>
                    <MapPin size={14} color="rgba(var(--ink-rgb),.3)" style={{ marginTop: 3, flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--body)", fontSize: 14, color: "rgba(var(--ink-rgb),.45)", lineHeight: 1.5 }}>{c.addr}</span>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {c.labs.map(lab => (
                      <span key={lab} style={{
                        background: "rgba(var(--ink-rgb),.04)", border: "1px solid rgba(var(--ink-rgb),.08)",
                        borderRadius: 2, padding: "5px 10px",
                        fontFamily: "var(--mono)", fontSize: 10, color: "rgba(var(--ink-rgb),.4)",
                      }}>{lab}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      <Footer />
      <FloatingWA />
    </div>
  );
}
