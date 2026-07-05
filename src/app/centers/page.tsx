"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import { CENTERS } from "@/data/content";
import { useLang } from "@/context/LangContext";

export default function CentersPage() {
  const [formOpen, setFormOpen] = useState(false);
  const { t } = useLang();

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

      {/* Centers list */}
      <section style={{ padding: "64px 5%" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          {CENTERS.map((c, i) => (
            <AnimateIn key={i} animation="slideUp" delay={i * 0.08}>
              <div data-stack="1" style={{
                display: "grid", gridTemplateColumns: "1fr auto",
                gap: 32, padding: "36px 0",
                borderBottom: "1px solid rgba(var(--ink-rgb),.08)",
                alignItems: "start",
              }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 28, color: "var(--text)", letterSpacing: "-.02em" }}>
                      {c.city}, {c.state}
                    </h2>
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
                <div style={{ display: "flex", gap: 8 }}>
                  <button className="btn-primary" style={{ padding: "10px 18px", fontSize: 11 }}>Get Directions</button>
                  <button className="btn-secondary" style={{ padding: "10px 14px", fontSize: 11 }}>
                    <Phone size={12} /> Call
                  </button>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Map placeholder */}
      <section style={{ padding: "48px 5%" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{
            background: "var(--ink)", borderRadius: 4, height: 300, position: "relative",
            overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .15 }}>
              <pattern id="mapg" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F8F7F4" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#mapg)" />
            </svg>
            <div style={{ textAlign: "center", position: "relative" }}>
              <MapPin size={40} color="rgba(248,247,244,.5)" style={{ marginBottom: 12 }} />
              <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 22, color: "var(--text-inv)", marginBottom: 6 }}>VSI Flagship Centre</h3>
              <p style={{ fontFamily: "var(--body)", fontSize: 14, color: "rgba(248,247,244,.5)", marginBottom: 16 }}>601, Panchwati Plaza, Kutchery Road, Ranchi 834001</p>
              <button className="btn-primary" style={{ background: "var(--surface)", color: "var(--text)" }}>Open in Maps →</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWA />
    </div>
  );
}
