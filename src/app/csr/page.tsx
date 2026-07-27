"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, ArrowUpRight, HeartHandshake } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import { CSR_PARTNERS, CSR_ACTIVITIES, CSR_GALLERY, ACCREDITATIONS } from "@/data/content";
import { useLang } from "@/context/LangContext";
import useIsMobile from "@/hooks/useIsMobile";

// Gallery tile with graceful fallback — shows a gradient + glyph until a real
// photo is dropped into /public/images/csr/ (mirrors the site's ProgramThumb pattern).
function GalleryTile({ img, glyph, title, caption }: { img: string; glyph: string; title: string; caption: string }) {
  const [errored, setErrored] = useState(false);
  return (
    <div className="hover-lift" style={{
      position: "relative", borderRadius: 12, overflow: "hidden",
      border: "1px solid rgba(255,255,255,.08)", aspectRatio: "4/3",
      background: "linear-gradient(145deg, rgba(var(--accent-rgb),.14) 0%, rgba(var(--gold-rgb),.08) 100%)",
      display: "flex", flexDirection: "column", justifyContent: "flex-end",
      transition: "box-shadow .3s ease",
    }}>
      {!errored && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={img}
          alt={title}
          onError={() => setErrored(true)}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      )}
      {errored && (
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 44, opacity: 0.5 }}>
          {glyph}
        </div>
      )}
      <div style={{
        position: "relative", zIndex: 2, padding: "16px 18px",
        background: "linear-gradient(to top, rgba(10,13,18,.9) 0%, transparent 100%)",
      }}>
        <div style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 15, color: "var(--text-inv)", marginBottom: 2 }}>{title}</div>
        <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".08em", color: "rgba(248,247,244,.5)", textTransform: "uppercase" }}>{caption}</div>
      </div>
    </div>
  );
}

export default function CSRPage() {
  const [formOpen, setFormOpen] = useState(false);
  const { t } = useLang();
  const isMobile = useIsMobile(900);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar formOpen={formOpen} setFormOpen={setFormOpen} />

      {/* Hero */}
      <section className="inner-hero-warm">
        <AnimateIn animation="slideUp">
          <p className="eyebrow">{t("csrEyebrow")}</p>
          <h1>{t("csrTitle1")}<br /><em>{t("csrTitle2")}</em></h1>
          <p className="lead">{t("csrHeroDesc")}</p>
        </AnimateIn>
      </section>

      {/* Section 135 compliance strip */}
      <section style={{ padding: isMobile ? "32px 6%" : "40px 5%", borderBottom: "1px solid var(--border)", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <div style={{
              display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", gap: 18,
              background: "var(--bg-card)", border: "1px solid var(--border-card)", borderRadius: 12, padding: "24px 26px",
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                background: "linear-gradient(135deg, rgba(var(--accent-rgb),.15), rgba(var(--gold-rgb),.1))",
                border: "1px solid rgba(var(--accent-rgb),.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <ShieldCheck size={22} color="var(--accent)" />
              </div>
              <div>
                <div style={{ fontFamily: "var(--sans)", fontWeight: 700, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 4 }}>
                  Section 135 · Companies Act, 2013
                </div>
                <p style={{ fontFamily: "var(--body)", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                  Every CSR initiative is structured for full compliance and measurable social impact — operationalized through corporate alliances and self-funded VSI Foundation programs.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Corporate Alliance Showcase */}
      <section style={{ padding: isMobile ? "64px 6%" : "96px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: "linear-gradient(135deg, rgba(var(--accent-rgb),.15), rgba(var(--gold-rgb),.1))",
                border: "1px solid rgba(var(--accent-rgb),.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <HeartHandshake size={18} color="var(--accent)" />
              </div>
              <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".15em", color: "var(--accent)", textTransform: "uppercase", fontWeight: 500 }}>
                // Corporate Alliances
              </p>
            </div>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(24px,3.5vw,44px)", color: "var(--text)", marginBottom: 16, letterSpacing: "-.03em" }}>
              Partnering to skill India.
            </h2>
            <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 640, marginBottom: 48 }}>
              We channel corporate CSR budgets into industry-mapped skill development — training rural and underserved youth for real jobs in high-demand sectors.
            </p>
          </AnimateIn>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 20 }}>
            {CSR_PARTNERS.map((p, i) => (
              <AnimateIn key={p.name} animation="slideUp" delay={i * 0.08}>
                <div className="hover-lift" style={{
                  background: "linear-gradient(145deg, var(--bg-card) 0%, rgba(var(--accent-rgb),.04) 100%)",
                  border: "1px solid var(--border-card)", borderRadius: 12,
                  padding: "32px 28px", display: "flex", flexDirection: "column", gap: 14, height: "100%",
                  transition: "box-shadow .3s ease",
                }}>
                  <div style={{
                    fontFamily: "var(--mono)", fontSize: 9, letterSpacing: ".14em", textTransform: "uppercase",
                    color: "var(--accent)", fontWeight: 500,
                  }}>CSR Alliance</div>
                  <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 22, color: "var(--text)", letterSpacing: "-.02em" }}>{p.name}</h3>
                  <p style={{ fontFamily: "var(--body)", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* VSI Foundation Activities */}
      <section style={{ background: "var(--ink)", padding: isMobile ? "64px 6%" : "96px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".15em", color: "rgba(var(--gold-rgb),.5)", textTransform: "uppercase", marginBottom: 12, fontWeight: 500 }}>
              // VSI Foundation
            </p>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(24px,3.5vw,44px)", color: "var(--text-inv)", marginBottom: 14, letterSpacing: "-.03em" }}>
              Self-funded social impact.
            </h2>
            <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "rgba(248,247,244,.45)", lineHeight: 1.75, maxWidth: 640, marginBottom: 48 }}>
              Beyond corporate partnerships, the VSI Foundation runs independent, self-funded skilling drives — our own social footprint, delivered directly to communities that need it most.
            </p>
          </AnimateIn>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16 }}>
            {CSR_ACTIVITIES.map((a, i) => (
              <AnimateIn key={a.title} animation="slideUp" delay={i * 0.06}>
                <div style={{
                  background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 10,
                  padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12, height: "100%",
                }}>
                  <div style={{ fontSize: 30 }}>{a.icon}</div>
                  <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 18, color: "var(--text-inv)", letterSpacing: "-.02em" }}>{a.title}</h3>
                  <p style={{ fontFamily: "var(--body)", fontSize: 13, color: "rgba(248,247,244,.4)", lineHeight: 1.65 }}>{a.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section style={{ background: "#0A0D12", padding: isMobile ? "64px 6%" : "96px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".15em", color: "rgba(var(--accent-rgb),.6)", textTransform: "uppercase", marginBottom: 12, fontWeight: 500 }}>
              // Impact Gallery
            </p>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(24px,3.5vw,44px)", color: "var(--text-inv)", marginBottom: 14, letterSpacing: "-.03em" }}>
              On the ground.
            </h2>
            <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "rgba(248,247,244,.45)", lineHeight: 1.75, maxWidth: 640, marginBottom: 48 }}>
              Training camps, donation events and certification ceremonies from across our CSR footprint.
            </p>
          </AnimateIn>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16 }}>
            {CSR_GALLERY.map((g, i) => (
              <AnimateIn key={g.title} animation="scaleIn" delay={i * 0.05}>
                <GalleryTile img={g.img} glyph={g.glyph} title={g.title} caption={g.caption} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section style={{ padding: "64px 5%", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <AnimateIn animation="slideUp">
            <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".15em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 24, fontWeight: 500 }}>Recognized & Accredited</p>
          </AnimateIn>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            {ACCREDITATIONS.map((acc, i) => (
              <AnimateIn key={acc.name} animation="scaleIn" delay={i * 0.06}>
                <div style={{
                  padding: "16px 24px", borderRadius: 8,
                  background: "var(--bg-card)", border: "1px solid var(--border-card)",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 4, minWidth: 120,
                }}>
                  <span style={{ fontFamily: "var(--sans)", fontWeight: 700, fontSize: 14, color: "var(--text)", letterSpacing: ".04em" }}>{acc.name}</span>
                  <span style={{ fontFamily: "var(--body)", fontSize: 10, color: "var(--text-muted)", textAlign: "center", lineHeight: 1.3 }}>{acc.fullName}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? "64px 6%" : "80px 5%", textAlign: "center", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <AnimateIn animation="slideUp">
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(24px,3.5vw,40px)", color: "var(--text)", letterSpacing: "-.03em", marginBottom: 16 }}>
            Partner with us on CSR.
          </h2>
          <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 500, margin: "0 auto 28px" }}>
            Deploy your CSR budget into measurable, Section 135-compliant skill development. Let&apos;s talk about a program.
          </p>
          <Link href="/contact" style={{ textDecoration: "none" }}>
            <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8, margin: "0 auto" }}>
              Start a Conversation <ArrowUpRight size={14} />
            </button>
          </Link>
        </AnimateIn>
      </section>

      <Footer />
      <FloatingWA />
    </div>
  );
}
