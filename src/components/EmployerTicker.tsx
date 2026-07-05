"use client";

import Image from "next/image";
import { EMPLOYERS } from "@/data/content";
import { EMPLOYER_LOGOS } from "@/data/assets";

export default function EmployerTicker() {
  return (
    <section
      style={{
        background: "var(--bg)",
        padding: "52px 0",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle dot background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(var(--accent-rgb),.15) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          opacity: .25,
          pointerEvents: "none",
        }}
      />

      {/* Label */}
      <div style={{ textAlign: "center", marginBottom: 28, position: "relative" }}>
        <p
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 600,
            fontSize: 11,
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: "var(--text-faint)",
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 20,
              height: 1,
              background: "var(--border-strong)",
            }}
          />
          Our Students Now Work At
          <span
            style={{
              display: "inline-block",
              width: 20,
              height: 1,
              background: "var(--border-strong)",
            }}
          />
        </p>
      </div>

      {/* Ticker with gradient fade masks */}
      <div className="ticker-wrap" style={{ position: "relative" }}>
        <div className="ticker-inner">
          {[...EMPLOYERS, ...EMPLOYERS].map((e, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 148,
                height: 48,
                padding: "0 28px",
                flexShrink: 0,
              }}
            >
              <span
                className="logo-mono"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  cursor: "default",
                }}
              >
                <Image
                  src={EMPLOYER_LOGOS[e]}
                  alt={e}
                  fill
                  sizes="148px"
                  style={{ objectFit: "contain" }}
                />
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
