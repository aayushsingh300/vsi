"use client";

import { useState } from "react";
import { ArrowRight, Newspaper } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import { NEWS } from "@/data/content";
import { useLang } from "@/context/LangContext";

export default function NewsPage() {
  const [formOpen, setFormOpen] = useState(false);
  const { t } = useLang();

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar formOpen={formOpen} setFormOpen={setFormOpen} />

      {/* Hero */}
      <section className="inner-hero-warm">
        <AnimateIn animation="slideUp">
          <p className="eyebrow">{t("newsEyebrow")}</p>
          <h1>{t("newsTitle1")}<br /><em>{t("newsTitle2")}</em></h1>
        </AnimateIn>
      </section>

      {/* News grid */}
      <section style={{ padding: "72px 5%" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          {/* Featured */}
          {NEWS.filter(n => n.featured).map((n, i) => (
            <AnimateIn key={i} animation="slideUp">
              <div data-stack="1" style={{
                display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40,
                padding: "40px 0 48px", borderBottom: "1px solid rgba(var(--ink-rgb),.08)",
                marginBottom: 48, alignItems: "center",
              }}>
                <div style={{
                  height: 260, borderRadius: "var(--r-md)", overflow: "hidden",
                  background: "linear-gradient(135deg,var(--ink) 0%,var(--ink-soft) 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative",
                }}>
                  {/* Same construction as the news thumbnails on /resources:
                      a hairline grid plus a lucide mark. An emoji here fell
                      back to the OS font and matched nothing on the page. */}
                  <div style={{
                    position: "absolute", inset: 0,
                    backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }} />
                  <Newspaper size={40} strokeWidth={1} color="rgba(248,247,244,.28)" aria-hidden="true" />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <span style={{ fontFamily: "var(--mono)", fontSize: "var(--text-sm)", color: "rgba(var(--ink-rgb),.35)" }}>{n.date}</span>
                    <span style={{ background: "var(--ink)", color: "var(--text-inv)", fontFamily: "var(--sans)", fontWeight: 700, fontSize: "var(--text-xs)", letterSpacing: "var(--tr-mono)", padding: "3px 8px", borderRadius: "var(--r-sm)", textTransform: "uppercase" }}>Featured</span>
                  </div>
                  <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-xl)", color: "var(--text)", lineHeight: 1.2, marginBottom: 12, letterSpacing: "var(--tr-heading)" }}>{n.t}</h2>
                  <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "rgba(var(--ink-rgb),.45)", lineHeight: 1.7, marginBottom: 18 }}>{n.s}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--sans)", fontWeight: 700, fontSize: "var(--text-sm)", color: "var(--text)", letterSpacing: "var(--tr-caps)", cursor: "pointer" }}>
                    Read More <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}

          {/* Other news */}
          <div style={{ display: "grid", gap: 1, background: "rgba(var(--ink-rgb),.07)" }}>
            {NEWS.filter(n => !n.featured).map((n, i) => (
              <AnimateIn key={i} animation="slideUp" delay={i * 0.05}>
                <div className="news-row course-row" style={{
                  background: "var(--surface)", padding: "24px 28px",
                  display: "grid", gridTemplateColumns: "60px 1fr auto", alignItems: "center", gap: 20,
                }}>
                  <span style={{ fontFamily: "var(--mono)", fontSize: "var(--text-base)", color: "rgba(var(--ink-rgb),.3)" }}>{n.date}</span>
                  <div>
                    <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--text)", marginBottom: 4 }}>{n.t}</h3>
                    <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "rgba(var(--ink-rgb),.4)", lineHeight: 1.5 }}>{n.s}</p>
                  </div>
                  <ArrowRight size={16} color="rgba(var(--ink-rgb),.2)" className="course-arrow" />
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
