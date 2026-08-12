"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Building, GraduationCap, Landmark, Home } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import TabSwitch from "@/components/TabSwitch";
import IndiaOrb from "@/components/IndiaOrb";
import Link from "next/link";
import { INFRA_TABS, TRAINING_INSTITUTIONS, SMART_CITY_BLOCKS, CENTERS, POLYTECHNIC_COLLEGES, ITI_COLLEGES } from "@/data/content";
import { useLang } from "@/context/LangContext";
import useIsMobile from "@/hooks/useIsMobile";

const BLOCK_ICONS = [Building, GraduationCap, Landmark, Home];

export default function CentersPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("institution");
  // Shared by the centre list and the map orb — hovering either lights both.
  const [activeCentre, setActiveCentre] = useState<number | null>(null);
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
            <p className="eyebrow-label eyebrow-label--slash" style={{ marginBottom: 12 }}>
              Initiative Blueprint
            </p>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(24px,3.5vw,44px)", color: "var(--text)", marginBottom: 32, letterSpacing: "var(--tr-display)" }}>
              Training delivery frameworks.
            </h2>
          </AnimateIn>

          {/* Tabs */}
          <div style={{ marginBottom: 32 }}>
            <TabSwitch
              label="Initiatives"
              value={activeTab}
              onChange={setActiveTab}
              options={INFRA_TABS.map((tab) => ({ id: tab.key, label: tab.label }))}
            />
          </div>

          {/* Tab content */}
          {INFRA_TABS.map((tab) =>
            activeTab === tab.key ? (
              <AnimateIn key={tab.key} animation="slideUp">
                <div style={{
                  background: "var(--bg-card)", border: "1px solid var(--border-card)", borderRadius: "var(--r-md)",
                  padding: "32px 28px",
                }}>
                  <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--text)", letterSpacing: "var(--tr-heading)", marginBottom: 12 }}>
                    {tab.label}
                  </h3>
                  <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "var(--text-muted)", lineHeight: 1.7 }}>
                    {tab.desc}
                  </p>
                  {tab.key === "skill" && (
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
                      {["UPSDM (Uttar Pradesh)", "JSDM (Jharkhand)", "BSDM (Bihar)"].map((state) => (
                        <span key={state} style={{
                          fontFamily: "var(--mono)", fontSize: "var(--text-xs)", letterSpacing: "var(--tr-caps)", textTransform: "uppercase",
                          background: "rgba(var(--accent-rgb),.08)", color: "var(--accent)", padding: "6px 12px", borderRadius: "var(--r-sm)",
                          border: "1px solid rgba(var(--accent-rgb),.15)", fontWeight: 500,
                        }}>{state}</span>
                      ))}
                    </div>
                  )}
                  {tab.key === "central" && (
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
                      {["DDU-GKY Programs", "DDU-KK Mega Skill Centres"].map((item) => (
                        <span key={item} style={{
                          fontFamily: "var(--mono)", fontSize: "var(--text-xs)", letterSpacing: "var(--tr-caps)", textTransform: "uppercase",
                          background: "rgba(var(--gold-rgb),.1)", color: "var(--accent-gold)", padding: "6px 12px", borderRadius: "var(--r-sm)",
                          border: "1px solid rgba(var(--gold-rgb),.18)", fontWeight: 500,
                        }}>{item}</span>
                      ))}
                    </div>
                  )}
                  {tab.key === "institution" && (
                    <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 12 }}>
                      {[
                        { name: "Hi-Tech Academy", desc: "Advanced technical skilling academy." },
                        { name: "CAD Centres", desc: "Architecture, civil, mechanical, electrical and GIS CAD labs." },
                        { name: "VIFT — Venture Institute of Fashion Technology", desc: "All fashion and interior programmes." },
                        { name: "PPP-Mode Polytechnic Colleges", desc: `${POLYTECHNIC_COLLEGES.length} Government Polytechnics in Uttar Pradesh.` },
                        { name: "ITI Institutions", desc: `${ITI_COLLEGES.length} Industrial Training Institutes in Jharkhand.` },
                      ].map((item) => (
                        <Link
                          key={item.name}
                          href="/services"
                          style={{
                            textDecoration: "none",
                            background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--r-md)",
                            padding: "16px 18px", display: "flex", flexDirection: "column", gap: 4,
                            transition: "border-color .2s ease, transform .2s ease",
                          }}
                          onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLAnchorElement;
                            el.style.borderColor = "rgba(var(--accent-rgb),.4)";
                            el.style.transform = "translateY(-2px)";
                          }}
                          onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLAnchorElement;
                            el.style.borderColor = "var(--border)";
                            el.style.transform = "translateY(0)";
                          }}
                        >
                          <span style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-base)", color: "var(--text)", letterSpacing: "var(--tr-body)" }}>{item.name}</span>
                          <span style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: 1.55 }}>{item.desc}</span>
                        </Link>
                      ))}
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
            <div className="section-head">
              <span className="section-head__icon"><GraduationCap size={18} /></span>
              <span className="section-head__label">Training Institutions Directory</span>
            </div>
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16 }}>
            {TRAINING_INSTITUTIONS.map((inst, i) => (
              <AnimateIn key={inst.name} animation="slideUp" delay={i * 0.08}>
                <div className="course-row" style={{
                  background: "var(--bg-card)", border: "1px solid var(--border-card)", borderRadius: "var(--r-md)",
                  padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12, height: "100%",
                }}>
                  <div style={{
                    fontFamily: "var(--mono)", fontSize: "var(--text-xs)", letterSpacing: "var(--tr-mono)", textTransform: "uppercase",
                    color: "var(--accent)", fontWeight: 500,
                  }}>{inst.type}</div>
                  <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--text)", letterSpacing: "var(--tr-heading)" }}>
                    {inst.name}
                    {inst.count && <span style={{ fontFamily: "var(--mono)", fontSize: "var(--text-sm)", color: "var(--accent)", marginLeft: 8 }}>×{inst.count}</span>}
                  </h3>
                  <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: 1.6 }}>{inst.desc}</p>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)", letterSpacing: "var(--tr-caps)" }}><MapPin size={11} strokeWidth={1.8} /> {inst.state}</span>
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
            <p className="eyebrow-label eyebrow-label--slash eyebrow-label--on-dark" style={{ marginBottom: 12 }}>
              Flagship Facility
            </p>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(24px,3.5vw,44px)", color: "var(--text-inv)", marginBottom: 14, letterSpacing: "var(--tr-display)" }}>
              Ranchi Smart City (Dhurwa)
            </h2>
            <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "rgba(248,247,244,.45)", lineHeight: 1.75, maxWidth: 640, marginBottom: 40 }}>
              A high-tech hub spanning 4 distinct operational blocks — from executive offices and F&B zones to smart classrooms and residential housing.
            </p>
          </AnimateIn>

          {/* Campus walkthrough video */}
          <AnimateIn animation="scaleIn">
            <div style={{
              position: "relative", borderRadius: "var(--r-md)", overflow: "hidden", marginBottom: 48,
              border: "1px solid rgba(255,255,255,.1)", background: "rgba(255,255,255,.03)",
              aspectRatio: "16/9",
            }}>
              <video
                controls
                playsInline
                preload="metadata"
                poster="/images/hero-cad-lab.png"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              >
                <source src="/videos/smart-city-dhurwa-walkthrough.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p style={{
              fontFamily: "var(--mono)", fontSize: "var(--text-xs)", letterSpacing: "var(--tr-mono)", textTransform: "uppercase",
              color: "rgba(248,247,244,.35)", marginTop: -34, marginBottom: 48,
            }}>
              Campus Walkthrough · Venture Institute Park, Dhurwa
            </p>
          </AnimateIn>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 16 }}>
            {SMART_CITY_BLOCKS.map((block, i) => {
              const Icon = BLOCK_ICONS[i] || Building;
              return (
                <AnimateIn key={block.block} animation="slideUp" delay={i * 0.08}>
                  <div className="hover-lift" style={{
                    background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", borderRadius: "var(--r-md)",
                    padding: "28px 24px", display: "flex", gap: 16, alignItems: "flex-start",
                    transition: "background .25s ease, box-shadow .3s ease",
                  }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: "var(--r-md)", flexShrink: 0,
                      background: "rgba(var(--accent-rgb),.12)", border: "1px solid rgba(var(--accent-rgb),.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon size={20} color="var(--accent)" />
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", letterSpacing: "var(--tr-mono)", color: "rgba(var(--gold-rgb),.5)", textTransform: "uppercase", marginBottom: 6 }}>
                        Block {block.block} · {block.name}
                      </div>
                      <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--text-inv)", letterSpacing: "var(--tr-heading)", marginBottom: 6 }}>
                        {block.name}
                      </h3>
                      <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "rgba(248,247,244,.4)", lineHeight: 1.6 }}>{block.desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Centre locations — map orb + list ──
          The list used to run down the left of a 1100px column with the right
          half empty, so seven addresses read as a form rather than a network.
          Pairing it with the map fills the column and, more usefully, answers
          the question the list cannot: where these places are relative to each
          other. Hover either side and the other lights up. */}
      <section style={{ padding: isMobile ? "64px 6%" : "96px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <div className="section-head">
              <span className="section-head__icon"><MapPin size={18} /></span>
              <span className="section-head__label">Centre Locations</span>
              <span className="section-head__count">{CENTERS.length} centres</span>
            </div>
          </AnimateIn>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr minmax(320px, 420px)",
            gap: isMobile ? 40 : 56,
            alignItems: "start",
          }}>
            {/* List */}
            <div>
              {CENTERS.map((c, i) => (
                <AnimateIn key={i} animation="slideUp" delay={Math.min(i, 5) * 0.06}>
                  <div
                    onMouseEnter={() => setActiveCentre(i)}
                    onMouseLeave={() => setActiveCentre(null)}
                    style={{
                      padding: isMobile ? "22px 14px" : "24px 18px",
                      borderBottom: "1px solid rgba(var(--ink-rgb),.08)",
                      // The active row is marked by the pin's own orange, so
                      // the link between the two halves needs no explaining.
                      background: activeCentre === i ? "rgba(var(--momentum-orange-rgb),.06)" : "transparent",
                      boxShadow: activeCentre === i ? "inset 3px 0 0 var(--accent-orange)" : "none",
                      transition: "background .22s ease, box-shadow .22s ease",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                      <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--text)", letterSpacing: "var(--tr-heading)" }}>
                        {c.city}, {c.state}
                      </h3>
                      {c.kind && <span className="chip">{c.kind}</span>}
                      {c.flagship && <span style={{ background: "var(--ink)", color: "var(--text-inv)", fontFamily: "var(--sans)", fontWeight: 700, fontSize: "var(--text-xs)", letterSpacing: "var(--tr-mono)", padding: "3px 8px", borderRadius: "var(--r-sm)", textTransform: "uppercase" }}>Flagship</span>}
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 14 }}>
                      <MapPin size={14} color="rgba(var(--ink-rgb),.3)" style={{ marginTop: 3, flexShrink: 0 }} />
                      <span style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "rgba(var(--ink-rgb),.45)", lineHeight: 1.5 }}>{c.addr}</span>
                    </div>
                    <div style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", letterSpacing: "var(--tr-mono)", textTransform: "uppercase", color: "rgba(var(--ink-rgb),.3)", marginBottom: 8 }}>
                      Trades Taught
                    </div>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {c.labs.map(lab => (
                        <span key={lab} style={{
                          background: "rgba(var(--ink-rgb),.04)", border: "1px solid rgba(var(--ink-rgb),.08)",
                          borderRadius: "var(--r-sm)", padding: "5px 10px",
                          fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "rgba(var(--ink-rgb),.4)",
                        }}>{lab}</span>
                      ))}
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>

            {/* Map orb — sticks alongside the list while it scrolls past. */}
            {/* On a phone the map leads: seven address cards ahead of it is a
                long scroll to reach the one element that shows the shape of
                the network. */}
            <AnimateIn animation="scaleIn" delay={0.1} style={{ order: isMobile ? -1 : 0 }}>
              <div style={{ position: isMobile ? "static" : "sticky", top: "calc(var(--nav-h) + 32px)" }}>
                <IndiaOrb active={activeCentre} onSelect={setActiveCentre} />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWA />
    </div>
  );
}
