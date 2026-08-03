"use client";

import { useState } from "react";
import AnimateIn from "@/components/AnimateIn";
import useIsMobile from "@/hooks/useIsMobile";
import { AWARDS } from "@/data/content";
import { Award, ChevronDown, ImageIcon } from "lucide-react";

// Felicitation photo with a graceful placeholder — the image files are supplied
// separately, so the card must still read correctly before they land.
function AwardPhoto({ src, alt }: { src: string; alt: string }) {
  const [errored, setErrored] = useState(false);
  return (
    <div
      style={{
        position: "relative",
        aspectRatio: "4/3",
        borderRadius: 8,
        overflow: "hidden",
        background: "var(--bg-muted)",
        border: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {errored ? (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: 12 }}>
          <ImageIcon size={20} color="var(--text-faint)" />
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 9.5,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "var(--text-faint)",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            Photo to be added
          </span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setErrored(true)}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      )}
    </div>
  );
}

export default function Awards() {
  const isMobile = useIsMobile(900);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

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
        {AWARDS.map((a, i) => {
          const open = openIdx === i;
          return (
            <AnimateIn key={i} animation="slideUp" delay={i * 0.09}>
              <div
                style={{
                  background: "var(--bg-card)",
                  borderBottom: i < AWARDS.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <button
                  className="award-row"
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    font: "inherit",
                    textAlign: "left",
                    cursor: "pointer",
                    padding: isMobile ? "24px 20px" : "30px 34px",
                    display: "grid",
                    gridTemplateColumns: "1fr auto auto",
                    alignItems: "center",
                    gap: isMobile ? 14 : 20,
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
                  <ChevronDown
                    size={16}
                    color="var(--text-muted)"
                    style={{
                      flexShrink: 0,
                      transform: open ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform .25s ease",
                    }}
                  />
                </button>

                {open && (
                  <div
                    style={{
                      padding: isMobile ? "0 20px 24px" : "0 34px 30px",
                      display: "grid",
                      gridTemplateColumns: isMobile ? "1fr" : "220px 1fr",
                      gap: isMobile ? 16 : 24,
                      alignItems: "start",
                      animation: "fadeIn .3s ease forwards",
                    }}
                  >
                    <AwardPhoto src={a.img} alt={`${a.t} — felicitation`} />
                    <p
                      style={{
                        fontFamily: "var(--body)",
                        fontWeight: 300,
                        fontSize: 14,
                        color: "var(--text-muted)",
                        lineHeight: 1.75,
                      }}
                    >
                      {a.desc}
                    </p>
                  </div>
                )}
              </div>
            </AnimateIn>
          );
        })}
      </div>
    </section>
  );
}
