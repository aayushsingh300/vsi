"use client";

import { useState, useEffect } from "react";
import AnimateIn from "@/components/AnimateIn";
import { TESTIMONIALS } from "@/data/content";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (i: number) => {
    if (i === idx) return;
    setAnimating(true);
    setTimeout(() => {
      setIdx(i);
      setAnimating(false);
    }, 280);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((idx + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [idx]);

  const t = TESTIMONIALS[idx];

  return (
    <section
      id="placements"
      className="lazy-section"
      style={{
        background: "var(--bg-dark)",
        padding: "clamp(56px,9vw,96px) 6%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(var(--accent-rgb),.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <AnimateIn animation="slideUp">
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 2 }}>

          {/* Section label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 48,
              justifyContent: "center",
            }}
          >
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,.08)" }} />
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                letterSpacing: ".18em",
                color: "rgba(255,255,255,.28)",
                textTransform: "uppercase",
              }}
            >
              Student Outcomes
            </span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,.08)" }} />
          </div>

          {/* Large quote icon */}
          <div style={{ marginBottom: 8 }}>
            <Quote
              size={52}
              color="rgba(var(--accent-rgb),.35)"
              fill="rgba(var(--accent-rgb),.12)"
              strokeWidth={1}
            />
          </div>

          {/* Quote content with crossfade */}
          <div
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(10px)" : "translateY(0)",
              transition: "opacity .28s ease, transform .28s ease",
            }}
          >
            <p
              style={{
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontSize: "clamp(22px,2.8vw,36px)",
                lineHeight: 1.52,
                color: "var(--text-inv)",
                marginBottom: 40,
                minHeight: 130,
              }}
            >
              {t.q}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              {/* Avatar */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-gold) 100%)",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--serif)",
                  fontWeight: 700,
                  fontSize: 17,
                  color: "var(--white)",
                  boxShadow: "0 4px 16px var(--accent-glow)",
                }}
              >
                {t.name.split(" ").map((n: string) => n[0]).join("")}
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 700,
                    fontSize: 14,
                    color: "var(--text-inv)",
                    letterSpacing: ".04em",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--body)",
                    fontWeight: 300,
                    fontSize: 12.5,
                    color: "rgba(248,247,244,.42)",
                  }}
                >
                  {t.course} ·{" "}
                  <span style={{ color: "rgba(var(--accent-rgb),.7)" }}>{t.from}</span>
                  {" → "}
                  <span style={{ color: "rgba(var(--gold-rgb),.8)" }}>{t.placed}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div style={{ display: "flex", gap: 6, marginTop: 36, alignItems: "center" }}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`progress-dot${idx === i ? " active" : ""}`}
                style={{
                  width: idx === i ? 28 : 8,
                }}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
