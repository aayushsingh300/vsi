"use client";

import Link from "next/link";
import Image from "next/image";
import { Plane, ArrowUpRight, Globe, MapPin, CheckCircle2 } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import useIsMobile from "@/hooks/useIsMobile";
import { WORK_ABROAD_HIGHLIGHTS, INTL_CORRIDORS } from "@/data/content";

export default function HomeWorkAbroad() {
  const isMobile = useIsMobile(900);

  return (
    <section style={{ background: "var(--bg)", padding: isMobile ? "64px 6%" : "96px 5%", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.05fr 0.95fr",
          gap: isMobile ? 40 : 64,
          alignItems: "center",
        }}>
          {/* Left — pitch to candidates */}
          <AnimateIn animation="slideUp">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: "var(--r-pill)", background: "rgba(var(--accent-rgb),.1)", border: "1px solid rgba(var(--accent-rgb),.2)", marginBottom: 18 }}>
              <Globe size={14} color="var(--accent)" />
              <span style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", letterSpacing: "var(--tr-mono)", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600 }}>
                Global Placements · Germany 🇩🇪 & Gulf 🇦🇪 🇸🇦
              </span>
            </div>

            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: isMobile ? "clamp(26px,7vw,34px)" : "clamp(30px,3.6vw,48px)", color: "var(--text)", lineHeight: 1.12, letterSpacing: "var(--tr-display)", marginBottom: 18 }}>
              Take your skills global —<br />
              <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 400 }}>work abroad with confidence.</em>
            </h2>

            <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 560, marginBottom: 24 }}>
              VSI deploys qualified talent into international healthcare and high-demand sectors — from our German International Exchange Program for nurses to active employment drives across the Gulf. We handle language training, credential recognition, visa processing and relocation end-to-end.
            </p>

            {/* Quick Corridor Chips */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
              <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-card)", borderRadius: "var(--r-md)", padding: "8px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: "var(--text-md)" }}>🇩🇪</span>
                <div>
                  <div style={{ fontFamily: "var(--sans)", fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--text)" }}>Germany Corridor</div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>Berlin · Munich · Frankfurt</div>
                </div>
              </div>
              <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-card)", borderRadius: "var(--r-md)", padding: "8px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: "var(--text-md)" }}>🇦🇪 🇸🇦</span>
                <div>
                  <div style={{ fontFamily: "var(--sans)", fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--text)" }}>Gulf Corridor</div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>Dubai · Riyadh · Abu Dhabi</div>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/work-abroad" style={{ textDecoration: "none" }}>
                <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  Explore Work Abroad <ArrowUpRight size={15} />
                </button>
              </Link>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <button className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <Plane size={15} /> Talk to Mobility Cell
                </button>
              </Link>
            </div>
          </AnimateIn>

          {/* Right — program proof points */}
          <AnimateIn animation="scaleIn" delay={0.12}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: isMobile ? 12 : 16 }}>
              {WORK_ABROAD_HIGHLIGHTS.map((s) => (
                <div key={s.label} style={{
                  background: "var(--bg-card)", border: "1px solid var(--border-card)", borderRadius: "var(--r-md)",
                  padding: isMobile ? "22px 20px" : "26px 24px", display: "flex", flexDirection: "column", gap: 6,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.02)",
                }}>
                  <div style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: isMobile ? "var(--text-xl)" : "var(--text-2xl)", color: "var(--accent)", letterSpacing: "var(--tr-display)" }}>{s.value}</div>
                  <div style={{ fontFamily: "var(--sans)", fontWeight: 700, fontSize: "var(--text-sm)", color: "var(--text)", letterSpacing: "var(--tr-body)" }}>{s.label}</div>
                  <div style={{ fontFamily: "var(--body)", fontSize: "var(--text-xs)", color: "var(--text-muted)", lineHeight: 1.5 }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
