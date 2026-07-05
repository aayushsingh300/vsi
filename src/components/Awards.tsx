"use client";

import AnimateIn from "@/components/AnimateIn";
import useIsMobile from "@/hooks/useIsMobile";
import { AWARDS } from "@/data/content";
import { Award } from "lucide-react";

export default function Awards() {
  const isMobile = useIsMobile(900);

  return (
    <section
      className="diag-bg lazy-section"
      style={{
        padding: isMobile ? "64px 6%" : "96px 5%",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",
        gap: isMobile ? 32 : 72,
        alignItems: "start",
      }}
    >
      {/* Left header */}
      <div>
        <AnimateIn animation="slideUp">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 20,
              padding: "6px 14px 6px 10px",
              background: "rgba(var(--accent-rgb),.08)",
              border: "1px solid rgba(var(--accent-rgb),.18)",
              borderRadius: 999,
            }}
          >
            <Award size={13} color="var(--accent)" />
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                letterSpacing: ".1em",
                color: "var(--accent)",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Recognition
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: isMobile ? "clamp(26px,7vw,34px)" : "clamp(28px,3.5vw,54px)",
              color: "var(--text)",
              letterSpacing: "-.032em",
              lineHeight: 1.04,
              marginBottom: 18,
            }}
          >
            Recognized<br />at every level.
          </h2>
        </AnimateIn>
        <AnimateIn animation="slideUp" delay={0.1}>
          <p
            style={{
              fontFamily: "var(--body)",
              fontWeight: 300,
              fontSize: 15,
              color: "var(--text-muted)",
              lineHeight: 1.78,
            }}
          >
            Union ministers. State government. National bodies. The recognition is real and publicly verifiable.
          </p>
        </AnimateIn>
      </div>

      {/* Awards list */}
      <div
        style={{
          display: "grid",
          gap: 0,
          border: "1px solid var(--border-card)",
          borderRadius: 10,
          overflow: "hidden",
          boxShadow: "var(--shadow-md)",
        }}
      >
        {AWARDS.map((a, i) => (
          <AnimateIn key={i} animation="slideUp" delay={i * 0.09}>
            <div
              className="award-row"
              style={{
                background: "var(--bg-card)",
                padding: isMobile ? "24px 20px" : "30px 34px",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                alignItems: "center",
                gap: 20,
                borderBottom: i < AWARDS.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 700,
                    fontSize: isMobile ? 17 : 21,
                    color: "var(--text)",
                    marginBottom: 5,
                    letterSpacing: "-.022em",
                  }}
                >
                  {a.t}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--body)",
                    fontWeight: 300,
                    fontSize: 13,
                    color: "var(--text-muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {a.s}
                </p>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontWeight: 500,
                    fontSize: isMobile ? 17 : 22,
                    background: "linear-gradient(135deg, var(--accent), var(--accent-gold))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-.02em",
                  }}
                >
                  {a.y}
                </div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    color: "var(--text-muted)",
                    letterSpacing: ".07em",
                    marginTop: 4,
                    textTransform: "uppercase",
                  }}
                >
                  {a.by}
                </div>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
