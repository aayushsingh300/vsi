"use client";

import Link from "next/link";
import { ShieldCheck, ArrowUpRight, HeartHandshake } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import useIsMobile from "@/hooks/useIsMobile";
import { CSR_IMPACT_STATS } from "@/data/content";

export default function HomeCSR() {
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
          {/* Left — pitch to corporates */}
          <AnimateIn animation="slideUp">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 999, background: "rgba(var(--accent-rgb),.1)", border: "1px solid rgba(var(--accent-rgb),.2)", marginBottom: 18 }}>
              <ShieldCheck size={14} color="var(--accent)" />
              <span style={{ fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600 }}>
                CSR · Venture Sewa Foundation
              </span>
            </div>

            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: isMobile ? "clamp(26px,7vw,34px)" : "clamp(30px,3.6vw,48px)", color: "var(--text)", lineHeight: 1.12, letterSpacing: "-.03em", marginBottom: 18 }}>
              Turn your CSR budget into<br />
              <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 400 }}>measurable social impact.</em>
            </h2>

            <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 560, marginBottom: 28 }}>
              Companies partner with Venture Sewa Foundation — the body under which we carry out all CSR activities — to meet their Companies Act, 2013 Section 8 obligations through audited, high-impact skill development. We handle delivery, documentation and compliance end-to-end.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/csr" style={{ textDecoration: "none" }}>
                <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  Partner on CSR <ArrowUpRight size={15} />
                </button>
              </Link>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <button className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <HeartHandshake size={15} /> Get in Touch
                </button>
              </Link>
            </div>
          </AnimateIn>

          {/* Right — impact proof points */}
          <AnimateIn animation="scaleIn" delay={0.12}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: isMobile ? 12 : 16 }}>
              {CSR_IMPACT_STATS.map((s) => (
                <div key={s.label} style={{
                  background: "var(--bg-card)", border: "1px solid var(--border-card)", borderRadius: 12,
                  padding: isMobile ? "22px 20px" : "26px 24px", display: "flex", flexDirection: "column", gap: 6,
                }}>
                  <div style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: isMobile ? 26 : 32, color: "var(--accent)", letterSpacing: "-.03em" }}>{s.value}</div>
                  <div style={{ fontFamily: "var(--sans)", fontWeight: 700, fontSize: 13, color: "var(--text)", letterSpacing: "-.01em" }}>{s.label}</div>
                  <div style={{ fontFamily: "var(--body)", fontSize: 11.5, color: "var(--text-muted)", lineHeight: 1.5 }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
