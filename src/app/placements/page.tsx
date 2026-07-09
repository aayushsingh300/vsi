"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import { TESTIMONIALS, RECRUITER_SECTORS } from "@/data/content";
import { EMPLOYER_LOGOS } from "@/data/assets";
import { useInView, useCountUp } from "@/hooks/useAnimations";
import { useLang } from "@/context/LangContext";
import useIsMobile from "@/hooks/useIsMobile";

const PLACEMENT_STATS = [
  { val: 20000, sfx: "+", lbl: "Total Students Placed" },
  { val: 5000, sfx: "+", lbl: "Annual Jobs Secured" },
  { val: 3, sfx: ".5L", lbl: "Median CTC (LPA)" },
  { val: 50, sfx: "+", lbl: "Hiring Partners" },
];

function PlacementStat({ val, sfx, lbl, go }: { val: number; sfx: string; lbl: string; go: boolean }) {
  const count = useCountUp(val, val > 1000 ? 2200 : 1600, go);
  const display = count >= 1000 ? (count / 1000).toFixed(count % 1000 === 0 ? 0 : 1) + "K" : String(count);
  return (
    <div style={{ textAlign: "center", padding: "36px 0" }}>
      <div style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "clamp(40px,5vw,64px)", color: "var(--text)", letterSpacing: "-.04em" }}>{display}{sfx}</div>
      <div style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 8 }}>{lbl}</div>
    </div>
  );
}

export default function PlacementsPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [testIdx, setTestIdx] = useState(0);
  const [sRef, sVis] = useInView();
  const { t: tr } = useLang();
  const isMobile = useIsMobile(900);

  useEffect(() => {
    const timer = setInterval(() => setTestIdx(i => (i + 1) % TESTIMONIALS.length), 7000);
    return () => clearInterval(timer);
  }, []);

  const t = TESTIMONIALS[testIdx];

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar formOpen={formOpen} setFormOpen={setFormOpen} />

      {/* Hero */}
      <section className="inner-hero-warm">
        <AnimateIn animation="slideUp">
          <p className="eyebrow">{tr("placementsEyebrow")}</p>
          <h1>{tr("placementsTitle1")}<br /><em>{tr("placementsTitle2")}</em></h1>
          <p className="lead">{tr("placementsHeroDesc")}</p>
        </AnimateIn>
      </section>

      {/* Stats */}
      <section ref={sRef} style={{ borderBottom: "1px solid var(--border)" }}>
        <div data-stack="2" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)" }}>
          {PLACEMENT_STATS.map((s, i) => <PlacementStat key={i} val={s.val} sfx={s.sfx} lbl={s.lbl} go={sVis} />)}
        </div>
      </section>

      {/* Recruiter Grid — By Sector */}
      <section style={{ padding: isMobile ? "64px 6%" : "96px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".15em", color: "rgba(var(--ink-rgb),.3)", textTransform: "uppercase", marginBottom: 10 }}>// Top Corporate Recruiters</p>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(24px,3vw,42px)", color: "var(--text)", marginBottom: 48 }}>Where our alumni work.</h2>
          </AnimateIn>

          {RECRUITER_SECTORS.map((sector, si) => (
            <div key={sector.sector} style={{ marginBottom: 48 }}>
              <AnimateIn animation="slideUp" delay={si * 0.08}>
                <h3 style={{
                  fontFamily: "var(--sans)", fontWeight: 700, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase",
                  color: "var(--accent)", marginBottom: 16, paddingBottom: 10,
                  borderBottom: "1px solid var(--border)",
                }}>{sector.sector}</h3>
              </AnimateIn>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2,1fr)" : `repeat(${Math.min(sector.companies.length, 4)},1fr)`, gap: 1, background: "rgba(var(--ink-rgb),.07)", borderRadius: 8, overflow: "hidden" }}>
                {sector.companies.map((company, ci) => (
                  <AnimateIn key={company} animation="scaleIn" delay={ci * 0.04}>
                    <div className="course-row employer-tile" style={{
                      background: "var(--surface)", padding: "28px 18px", display: "flex", flexDirection: "column",
                      alignItems: "center", justifyContent: "center", gap: 8, minHeight: 90,
                    }}>
                      {EMPLOYER_LOGOS[company] ? (
                        <span style={{ position: "relative", display: "block", width: "100%", height: 36 }}>
                          <Image src={EMPLOYER_LOGOS[company]} alt={company} fill sizes="160px" style={{ objectFit: "contain" }} />
                        </span>
                      ) : (
                        <span style={{ fontFamily: "var(--sans)", fontWeight: 700, fontSize: 13, color: "var(--text)", letterSpacing: ".02em" }}>{company}</span>
                      )}
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* International Placement Banner */}
      <section style={{
        background: "linear-gradient(135deg, var(--ink) 0%, #0d1b2a 100%)", padding: isMobile ? "64px 6%" : "80px 5%",
        borderTop: "1px solid rgba(var(--accent-rgb),.1)",
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "center", gap: 40 }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <Globe size={18} color="rgba(var(--gold-rgb),.7)" />
                  <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".15em", color: "rgba(var(--gold-rgb),.5)", textTransform: "uppercase", fontWeight: 500 }}>
                    // International Placement
                  </p>
                </div>
                <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(22px,3vw,36px)", color: "var(--text-inv)", marginBottom: 14, letterSpacing: "-.03em", lineHeight: 1.15 }}>
                  Global Mobility Corridors
                </h2>
                <p style={{ fontFamily: "var(--body)", fontSize: 14, color: "rgba(248,247,244,.45)", lineHeight: 1.75, marginBottom: 24 }}>
                  Active Middle East employment drives in Dubai and Riyadh. German International Exchange Program for European healthcare sector deployment.
                </p>
                <Link href="/work-abroad" style={{ textDecoration: "none" }}>
                  <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    Explore Work Abroad <ArrowUpRight size={13} />
                  </button>
                </Link>
              </div>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {["🇦🇪 Dubai", "🇸🇦 Riyadh", "🇩🇪 Germany"].map((loc) => (
                  <div key={loc} style={{
                    padding: "14px 20px", borderRadius: 8,
                    background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)",
                    fontFamily: "var(--sans)", fontSize: 14, fontWeight: 600, color: "rgba(248,247,244,.7)",
                  }}>{loc}</div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: "var(--ink)", padding: "96px 5%" }}>
        <AnimateIn animation="slideUp">
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".15em", color: "rgba(248,247,244,.2)", textTransform: "uppercase", marginBottom: 24 }}>// Student Stories</p>
            <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 72, lineHeight: 1, color: "rgba(248,247,244,.12)", marginBottom: -8 }}>❝</div>
            <div key={testIdx} style={{ animation: "fadeIn .5s ease forwards" }}>
              <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "clamp(20px,2.5vw,32px)", lineHeight: 1.5, color: "var(--text-inv)", marginBottom: 32, minHeight: 120 }}>{t.q}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--ink-soft)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--serif)", fontWeight: 700, fontSize: 14, color: "var(--text-inv)" }}>
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--sans)", fontWeight: 700, fontSize: 13, color: "var(--text-inv)", textTransform: "uppercase", letterSpacing: ".04em" }}>{t.name}</div>
                  <div style={{ fontFamily: "var(--body)", fontSize: 12, color: "rgba(248,247,244,.4)", marginTop: 2 }}>{t.course} · {t.from} → {t.placed}</div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 6, marginTop: 28 }}>
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setTestIdx(i)} style={{ width: testIdx === i ? 24 : 8, height: 3, background: testIdx === i ? "var(--text-inv)" : "rgba(248,247,244,.2)", border: "none", borderRadius: 2, cursor: "pointer", transition: "all .3s" }} />
              ))}
            </div>
          </div>
        </AnimateIn>
      </section>

      <Footer />
      <FloatingWA />
    </div>
  );
}
