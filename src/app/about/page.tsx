"use client";

import { useState } from "react";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import { MILESTONES, FACULTY, STATS } from "@/data/content";
import { useInView, useCountUp } from "@/hooks/useAnimations";
import { useLang } from "@/context/LangContext";

function StatBox({ val, sfx, lbl, go }: { val: number; sfx: string; lbl: string; go: boolean }) {
  const count = useCountUp(val, val > 1000 ? 2200 : 1600, go);
  const display = count >= 1000 ? (count / 1000).toFixed(count % 1000 === 0 ? 0 : 1) + "K" : String(count);
  return (
    <div style={{ textAlign: "center", padding: "var(--sp-8) 0" }}>
      <div
        style={{
          fontFamily: "var(--serif)",
          fontWeight: 700,
          fontSize: "var(--text-4xl)",
          color: go ? "var(--accent-gold)" : "var(--text-inv)",
          letterSpacing: "-.04em",
          transition: "color .5s ease",
        }}
      >
        {display}{sfx}
      </div>
      <div
        style={{
          fontFamily: "var(--sans)",
          fontWeight: 600,
          fontSize: "var(--text-xs)",
          letterSpacing: ".16em",
          textTransform: "uppercase",
          color: "rgba(248,247,244,.38)",
          marginTop: "var(--sp-2)",
        }}
      >
        {lbl}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [sRef, sVis] = useInView();
  const { t } = useLang();

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar formOpen={formOpen} setFormOpen={setFormOpen} />

      {/* Hero */}
      <section className="inner-hero-warm">
        <AnimateIn animation="slideUp">
          <p className="eyebrow">{t("aboutEyebrow")}</p>
          <h1>
            {t("aboutTitle1")}<br />
            <em>{t("aboutTitle2")}</em>
          </h1>
          <p className="lead">{t("aboutHeroDesc")}</p>
        </AnimateIn>
      </section>

      {/* Mission / Vision — uses design system vars */}
      <section
        className="section-pad dot-bg"
        style={{ background: "var(--bg)" }}
      >
        <div
          data-stack="1"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--sp-16)",
          }}
        >
          {[
            {
              tag: "// Mission",
              heading: "Skills over degrees.",
              body: "India has world-class demand for skilled professionals. But most students outside metro cities get left behind — not because they lack talent, but because they lack access. We fix that gap.",
            },
            {
              tag: "// Vision",
              heading: "Employable from day one.",
              body: "We don't teach theory for theory's sake. Every module, every lab, every assessment is designed around one question: can this student get hired? If not, we redesign it until they can.",
              delay: 0.15,
            },
          ].map((item, i) => (
            <AnimateIn key={i} animation="slideUp" delay={i * 0.15}>
              <div className="card-elevated" style={{ padding: "var(--sp-8)" }}>
                <p className="eyebrow-label" style={{ marginBottom: "var(--sp-4)" }}>
                  {item.tag}
                </p>
                <h2
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 700,
                    fontStyle: "italic",
                    fontSize: "var(--text-2xl)",
                    color: "var(--text)",
                    lineHeight: "var(--lh-tight)",
                    marginBottom: "var(--sp-4)",
                    letterSpacing: "-.03em",
                  }}
                >
                  {item.heading}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--body)",
                    fontWeight: 300,
                    fontSize: "var(--text-base)",
                    color: "var(--text-muted)",
                    lineHeight: "var(--lh-relaxed)",
                  }}
                >
                  {item.body}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Stats bar */}
      <section
        ref={sRef}
        style={{
          background: "var(--bg-dark)",
          padding: "var(--sp-6) 5%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ambient glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at center, rgba(var(--accent-rgb),.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          data-stack="2"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 1,
            position: "relative",
          }}
        >
          {STATS.map((s, i) => (
            <StatBox key={i} val={s.val} sfx={s.sfx} lbl={s.lbl} go={sVis} />
          ))}
        </div>
      </section>

      {/* Campus image */}
      <section
        style={{
          height: "clamp(260px, 35vw, 480px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/students-campus.png"
          alt="VSI Campus — students in the courtyard"
          fill
          style={{
            objectFit: "cover",
            transition: "transform 1.2s ease",
          }}
          className="img-zoom"
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(13,27,42,.55) 0%, transparent 50%)",
          }}
        />
        {/* Caption overlay */}
        <div
          style={{
            position: "absolute",
            bottom: "var(--sp-6)",
            left: "5%",
            fontFamily: "var(--mono)",
            fontSize: "var(--text-xs)",
            color: "rgba(248,247,244,.5)",
            letterSpacing: ".12em",
            textTransform: "uppercase",
          }}
        >
          VSI Flagship Centre · Ranchi, Jharkhand
        </div>
      </section>

      {/* Timeline — using design system classes */}
      <section className="section-pad" style={{ background: "var(--bg)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <p className="eyebrow-label" style={{ marginBottom: "var(--sp-3)" }}>// Journey</p>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 700,
                fontStyle: "italic",
                fontSize: "var(--text-3xl)",
                color: "var(--text)",
                marginBottom: "var(--sp-12)",
                letterSpacing: "-.03em",
                lineHeight: "var(--lh-tight)",
              }}
            >
              Milestones.
            </h2>
          </AnimateIn>

          {MILESTONES.map((m, i) => (
            <AnimateIn key={i} animation="slideUp" delay={i * 0.06}>
              <div
                style={{
                  display: "flex",
                  gap: "var(--sp-6)",
                  padding: "var(--sp-6) 0",
                  borderBottom: "1px solid var(--border)",
                  position: "relative",
                  transition: "background .2s ease",
                  alignItems: "flex-start",
                }}
              >
                {/* Step number */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 8,
                    background: "rgba(var(--accent-rgb),.08)",
                    border: "1px solid rgba(var(--accent-rgb),.16)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontFamily: "var(--mono)",
                    fontWeight: 500,
                    fontSize: 14,
                    color: "var(--accent)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "var(--sp-3)", marginBottom: "var(--sp-2)" }}>
                    <h3
                      style={{
                        fontFamily: "var(--serif)",
                        fontWeight: 700,
                        fontSize: "var(--text-lg)",
                        color: "var(--text)",
                        letterSpacing: "-.018em",
                      }}
                    >
                      {m.t}
                    </h3>
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "var(--text-xs)",
                        color: "var(--accent)",
                        fontWeight: 500,
                        letterSpacing: ".06em",
                        flexShrink: 0,
                      }}
                    >
                      {m.y}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--body)",
                      fontWeight: 300,
                      fontSize: "var(--text-sm)",
                      color: "var(--text-muted)",
                      lineHeight: "var(--lh-relaxed)",
                    }}
                  >
                    {m.d}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Faculty — using design system vars throughout */}
      <section
        className="lazy-section"
        style={{
          background: "var(--bg-dark)",
          padding: "var(--sp-24) 5%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ambient */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: "10%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(var(--accent-rgb),.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <AnimateIn animation="slideUp">
            <p
              className="eyebrow-label"
              style={{
                color: "rgba(248,247,244,.25)",
                marginBottom: "var(--sp-3)",
              }}
            >
              // People
            </p>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "var(--text-3xl)",
                color: "var(--text-inv)",
                marginBottom: "var(--sp-12)",
                letterSpacing: "-.03em",
                lineHeight: "var(--lh-tight)",
              }}
            >
              Leadership &amp; Faculty.
            </h2>
          </AnimateIn>

          <div
            data-stack="1"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "var(--sp-4)",
            }}
          >
            {FACULTY.map((f, i) => (
              <AnimateIn key={i} animation="scaleIn" delay={i * 0.07}>
                <div
                  style={{
                    background: "rgba(255,255,255,.04)",
                    border: "1px solid rgba(255,255,255,.07)",
                    borderRadius: "var(--r-lg)",
                    padding: "var(--sp-7) var(--sp-6)",
                    transition: "background .24s ease, border-color .24s ease, transform .28s var(--ease-spring)",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.background = "rgba(255,255,255,.07)";
                    el.style.borderColor = "rgba(var(--accent-rgb),.25)";
                    el.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.background = "rgba(255,255,255,.04)";
                    el.style.borderColor = "rgba(255,255,255,.07)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {/* Avatar */}
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${f.accent} 0%, var(--accent) 100%)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--serif)",
                      fontWeight: 700,
                      fontSize: 18,
                      color: "var(--text-inv)",
                      marginBottom: "var(--sp-4)",
                      boxShadow: "0 4px 16px rgba(0,0,0,.25)",
                    }}
                  >
                    {f.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontWeight: 700,
                      fontSize: "var(--text-lg)",
                      color: "var(--text-inv)",
                      marginBottom: "var(--sp-1)",
                      letterSpacing: "-.02em",
                    }}
                  >
                    {f.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 600,
                      fontSize: "var(--text-xs)",
                      letterSpacing: ".08em",
                      color: "rgba(var(--accent-rgb),.7)",
                      textTransform: "uppercase",
                      marginBottom: "var(--sp-3)",
                    }}
                  >
                    {f.role}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--body)",
                      fontWeight: 300,
                      fontSize: "var(--text-sm)",
                      color: "rgba(248,247,244,.35)",
                      lineHeight: "var(--lh-normal)",
                    }}
                  >
                    {f.cred}
                  </p>
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
