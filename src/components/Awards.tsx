"use client";

import { useState, useEffect } from "react";
import AnimateIn from "@/components/AnimateIn";
import useIsMobile from "@/hooks/useIsMobile";
import { AWARDS } from "@/data/content";
import {
  Award,
  Maximize2,
  X,
  MapPin,
  ShieldCheck,
  Building2,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function Awards() {
  const isMobile = useIsMobile(900);
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imgErrorMap, setImgErrorMap] = useState<Record<number, boolean>>({});
  const [animatingKey, setAnimatingKey] = useState(0);

  const activeAward = AWARDS[activeIdx] || AWARDS[0];

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    if (lightboxOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const handleSelectAward = (index: number) => {
    if (index === activeIdx) return;
    setActiveIdx(index);
    setAnimatingKey((prev) => prev + 1);
  };

  return (
    <section
      className="diag-bg lazy-section"
      style={{
        padding: isMobile ? "60px 5%" : "100px 5%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background radial highlight */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(var(--accent-rgb), 0.05) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr auto",
            gap: 24,
            alignItems: "end",
            marginBottom: isMobile ? 36 : 56,
          }}
        >
          <div>
            <AnimateIn animation="slideUp">
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 16,
                  padding: "6px 14px 6px 10px",
                  background: "rgba(var(--accent-rgb), .08)",
                  border: "1px solid rgba(var(--accent-rgb), .2)",
                  borderRadius: 999,
                }}
              >
                <Award size={14} color="var(--accent)" />
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: ".1em",
                    color: "var(--accent)",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  National Recognition & Honors
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 700,
                  fontStyle: "italic",
                  fontSize: isMobile ? "clamp(28px,7.5vw,36px)" : "clamp(34px,3.8vw,52px)",
                  color: "var(--text)",
                  letterSpacing: "-.03em",
                  lineHeight: 1.06,
                }}
              >
                Recognized at every level.
              </h2>
            </AnimateIn>
          </div>

          <AnimateIn animation="slideUp" delay={0.1}>
            <p
              style={{
                fontFamily: "var(--body)",
                fontWeight: 300,
                fontSize: isMobile ? 14 : 16,
                color: "var(--text-muted)",
                lineHeight: 1.7,
                maxWidth: 460,
              }}
            >
              Union ministers. State governments. National governing bodies. The recognition is real, authentic, and publicly verifiable.
            </p>
          </AnimateIn>
        </div>

        {/* Main Showcase Layout (2-Column Spotlight) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1.25fr 1fr",
            gap: isMobile ? 28 : 40,
            alignItems: "stretch",
          }}
        >
          {/* LEFT: Featured Award Photo & Details Stage */}
          <AnimateIn animation="fadeIn">
            <div
              key={animatingKey}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-card)",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 16px 40px -12px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                transition: "all 0.3s ease",
              }}
            >
              {/* Photo Frame Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: isMobile ? "16/11" : "16/10",
                  background: "#0d141e",
                  overflow: "hidden",
                }}
              >
                {imgErrorMap[activeIdx] ? (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      background: "linear-gradient(135deg, #111a28 0%, #0d141e 100%)",
                      color: "rgba(255,255,255,0.6)",
                      padding: 20,
                    }}
                  >
                    <Award size={36} color="var(--accent)" />
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 12,
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                      }}
                    >
                      Felicitation Photo
                    </span>
                  </div>
                ) : (
                  <>
                    {/* Main Image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={activeAward.img}
                      alt={`${activeAward.t} — ${activeAward.presenter}`}
                      onError={() =>
                        setImgErrorMap((prev) => ({ ...prev, [activeIdx]: true }))
                      }
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.5s ease",
                      }}
                    />
                    {/* Soft vignette overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(13,20,30,0.85) 0%, rgba(13,20,30,0.1) 50%, rgba(13,20,30,0.3) 100%)",
                        pointerEvents: "none",
                      }}
                    />
                  </>
                )}

                {/* Top Badge Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    right: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 10,
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "5px 12px",
                      background: "rgba(13, 20, 30, 0.75)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: 999,
                      color: "#fff",
                      fontSize: 11,
                      fontFamily: "var(--mono)",
                      letterSpacing: ".05em",
                      fontWeight: 500,
                    }}
                  >
                    <Sparkles size={12} color="var(--accent)" />
                    {activeAward.badge || activeAward.by}
                  </div>

                  <button
                    onClick={() => setLightboxOpen(true)}
                    title="View full resolution image"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 12px",
                      background: "rgba(13, 20, 30, 0.8)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.25)",
                      borderRadius: 8,
                      color: "#fff",
                      fontSize: 11,
                      fontFamily: "var(--mono)",
                      cursor: "pointer",
                      transition: "background 0.2s ease",
                    }}
                  >
                    <Maximize2 size={13} />
                    <span>Expand Photo</span>
                  </button>
                </div>

                {/* Bottom Overlaid Metadata on Photo */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 14,
                    left: 16,
                    right: 16,
                    zIndex: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      color: "rgba(255,255,255,0.9)",
                      fontSize: 12,
                      fontFamily: "var(--mono)",
                    }}
                  >
                    <MapPin size={13} color="var(--accent)" />
                    <span>{activeAward.location || "India"}</span>
                  </div>

                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 18,
                      fontWeight: 700,
                      color: "var(--accent)",
                      background: "rgba(0,0,0,0.6)",
                      backdropFilter: "blur(6px)",
                      padding: "2px 10px",
                      borderRadius: 6,
                      border: "1px solid rgba(var(--accent-rgb), 0.4)",
                    }}
                  >
                    {activeAward.y}
                  </div>
                </div>
              </div>

              {/* Award Details Text Panel */}
              <div
                style={{
                  padding: isMobile ? 20 : 28,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  flexGrow: 1,
                  background: "var(--bg-card)",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontWeight: 700,
                      fontSize: isMobile ? 20 : 24,
                      color: "var(--text)",
                      letterSpacing: "-.025em",
                      lineHeight: 1.2,
                      marginBottom: 6,
                    }}
                  >
                    {activeAward.t}
                  </h3>
                  <div
                    style={{
                      fontFamily: "var(--body)",
                      fontWeight: 500,
                      fontSize: 14,
                      color: "var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <Building2 size={15} />
                    <span>{activeAward.presenter || activeAward.s}</span>
                  </div>
                </div>

                <p
                  style={{
                    fontFamily: "var(--body)",
                    fontWeight: 300,
                    fontSize: 14.5,
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                  }}
                >
                  {activeAward.desc}
                </p>

                {activeAward.impactStat && (
                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: 12,
                      borderTop: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        textTransform: "uppercase",
                        color: "var(--text-muted)",
                        letterSpacing: ".06em",
                      }}
                    >
                      Key Milestone
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "var(--accent)",
                        background: "rgba(var(--accent-rgb), 0.08)",
                        padding: "3px 10px",
                        borderRadius: 6,
                        border: "1px solid rgba(var(--accent-rgb), 0.18)",
                      }}
                    >
                      {activeAward.impactStat}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </AnimateIn>

          {/* RIGHT: Selectable Award Cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              justifyContent: "start",
            }}
          >
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: ".08em",
                color: "var(--text-muted)",
                marginBottom: 2,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span>Select Award to Inspect</span>
              <ChevronRight size={12} color="var(--accent)" />
            </div>

            {AWARDS.map((award, i) => {
              const isActive = i === activeIdx;
              return (
                <div key={award.id || i}>
                  <button
                    onClick={() => handleSelectAward(i)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: isActive
                        ? "linear-gradient(135deg, rgba(var(--accent-rgb), 0.08) 0%, var(--bg-card) 100%)"
                        : "var(--bg-card)",
                      border: isActive
                        ? "1.5px solid var(--accent)"
                        : "1px solid var(--border-card)",
                      borderRadius: 14,
                      padding: isMobile ? "16px 18px" : "20px 22px",
                      cursor: "pointer",
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      gap: 16,
                      alignItems: "center",
                      boxShadow: isActive
                        ? "0 8px 24px -6px rgba(var(--accent-rgb), 0.18)"
                        : "none",
                      transition: "all 0.25s ease",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Left Active Indicator Bar */}
                    {isActive && (
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: 4,
                          background: "var(--accent)",
                        }}
                      />
                    )}

                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          marginBottom: 6,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--mono)",
                            fontSize: 10,
                            fontWeight: 600,
                            padding: "2px 7px",
                            borderRadius: 4,
                            background: isActive
                              ? "var(--accent)"
                              : "rgba(var(--accent-rgb), 0.1)",
                            color: isActive ? "#fff" : "var(--accent)",
                            textTransform: "uppercase",
                            letterSpacing: ".05em",
                          }}
                        >
                          {award.y}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--mono)",
                            fontSize: 11,
                            color: "var(--text-muted)",
                          }}
                        >
                          {award.by}
                        </span>
                      </div>

                      <h4
                        style={{
                          fontFamily: "var(--serif)",
                          fontWeight: 700,
                          fontSize: isMobile ? 16 : 18,
                          color: "var(--text)",
                          marginBottom: 4,
                          letterSpacing: "-.02em",
                        }}
                      >
                        {award.t}
                      </h4>

                      <p
                        style={{
                          fontFamily: "var(--body)",
                          fontWeight: 300,
                          fontSize: 12.5,
                          color: "var(--text-muted)",
                          lineHeight: 1.4,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {award.s}
                      </p>
                    </div>

                    {/* Small Thumbnail Preview */}
                    <div
                      style={{
                        position: "relative",
                        width: isMobile ? 54 : 64,
                        height: isMobile ? 54 : 64,
                        borderRadius: 8,
                        overflow: "hidden",
                        border: isActive
                          ? "1px solid var(--accent)"
                          : "1px solid var(--border)",
                        flexShrink: 0,
                        background: "var(--bg-muted)",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={award.img}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          filter: isActive ? "none" : "grayscale(30%)",
                        }}
                      />
                    </div>
                  </button>
                </div>
              );
            })}

            {/* Verification Note Box */}
            <div
              style={{
                marginTop: 8,
                padding: "16px 20px",
                borderRadius: 12,
                background: "rgba(var(--accent-rgb), 0.04)",
                border: "1px dashed rgba(var(--accent-rgb), 0.2)",
                display: "flex",
                alignItems: "start",
                gap: 12,
              }}
            >
              <ShieldCheck size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: 2 }} />
              <p
                style={{
                  fontFamily: "var(--body)",
                  fontSize: 12.5,
                  color: "var(--text-muted)",
                  lineHeight: 1.5,
                }}
              >
                All award honors were presented in public ceremonies by Union Ministers and government dignitary panels.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Public Verification Trust Bar */}
        <AnimateIn animation="slideUp" delay={0.2}>
          <div
            style={{
              marginTop: isMobile ? 36 : 48,
              padding: isMobile ? "20px 20px" : "24px 32px",
              background: "var(--bg-card)",
              border: "1px solid var(--border-card)",
              borderRadius: 14,
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: isMobile ? 16 : 24,
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(var(--accent-rgb), 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <CheckCircle2 size={18} color="var(--accent)" />
              </div>
              <div>
                <div style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 13, color: "var(--text)" }}>
                  Publicly Verifiable
                </div>
                <div style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--text-muted)" }}>
                  Government press releases & records
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(var(--accent-rgb), 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Building2 size={18} color="var(--accent)" />
              </div>
              <div>
                <div style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 13, color: "var(--text)" }}>
                  Ministry Recognized
                </div>
                <div style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--text-muted)" }}>
                  Ministry of Skill Dev. & Entrepreneurship
                </div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(var(--accent-rgb), 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Award size={18} color="var(--accent)" />
              </div>
              <div>
                <div style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 13, color: "var(--text)" }}>
                  National Impact
                </div>
                <div style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--text-muted)" }}>
                  Youth placement & tribal skilling honors
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0, 0, 0, 0.92)",
            backdropFilter: "blur(12px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: isMobile ? 16 : 32,
            animation: "fadeIn 0.25s ease forwards",
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Close Lightbox"
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#fff",
              borderRadius: "50%",
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10000,
            }}
          >
            <X size={22} />
          </button>

          {/* Lightbox Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: 1000,
              width: "100%",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                position: "relative",
                maxHeight: "75vh",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeAward.img}
                alt={activeAward.t}
                style={{
                  maxHeight: "75vh",
                  maxWidth: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>

            {/* Caption */}
            <div
              style={{
                textAlign: "center",
                color: "#fff",
                maxWidth: 600,
              }}
            >
              <h3 style={{ fontFamily: "var(--serif)", fontSize: 20, marginBottom: 4 }}>
                {activeAward.t} ({activeAward.y})
              </h3>
              <p style={{ fontFamily: "var(--body)", fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
                {activeAward.presenter || activeAward.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
