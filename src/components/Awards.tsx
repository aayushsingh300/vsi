"use client";

import { useState, useEffect, useRef, useId } from "react";
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
} from "lucide-react";

export default function Awards() {
  const isMobile = useIsMobile(900);
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imgErrorMap, setImgErrorMap] = useState<Record<number, boolean>>({});
  const lightboxRef = useRef<HTMLDivElement>(null);
  const lightboxTriggerRef = useRef<HTMLElement | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const baseId = useId();

  const activeAward = AWARDS[activeIdx] || AWARDS[0];

  // Lightbox: escape to close, scroll lock, focus trapped inside, focus
  // returned to whatever opened it. Previously only escape and scroll lock
  // existed, so keyboard focus stayed on the page behind the overlay.
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
        return;
      }
      if (e.key !== "Tab") return;

      const focusables = lightboxRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    lightboxRef.current?.querySelector<HTMLElement>("button")?.focus();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      lightboxTriggerRef.current?.focus();
    };
  }, [lightboxOpen]);

  const handleKeyNav = (e: React.KeyboardEvent, idx: number) => {
    const last = AWARDS.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = idx === last ? 0 : idx + 1;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = idx === 0 ? last : idx - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setActiveIdx(next);
    listRef.current?.querySelectorAll<HTMLButtonElement>("[role='tab']")[next]?.focus();
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
              {/* The site's one eyebrow. This was a bordered pill with an icon
                  — a fifth kicker style competing with the four elsewhere. */}
              <p className="eyebrow-label">National Recognition &amp; Honors</p>
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 700,
                  fontStyle: "italic",
                  fontSize: isMobile ? "clamp(28px,7.5vw,36px)" : "clamp(34px,3.8vw,52px)",
                  color: "var(--text)",
                  letterSpacing: "var(--tr-display)",
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
                fontSize: isMobile ? "var(--text-base)" : "var(--text-md)",
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
          <AnimateIn animation="fadeIn" style={{ display: "flex" }}>
            <div
              id={`${baseId}-panel`}
              role="tabpanel"
              aria-labelledby={`${baseId}-tab-${activeIdx}`}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-card)",
                borderRadius: "var(--r-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-md)",
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              {/* Photo Frame */}
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
                        fontSize: "var(--text-sm)",
                        letterSpacing: "var(--tr-mono)",
                        textTransform: "uppercase",
                      }}
                    >
                      Felicitation Photo
                    </span>
                  </div>
                ) : (
                  <>
                    {/* All three photographs are rendered and crossfaded.
                        Switching used to remount this node via a React key,
                        so every selection re-fetched and re-decoded a JPEG —
                        the flash you see between awards. */}
                    {AWARDS.map((award, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={award.id || i}
                        src={award.img}
                        alt={i === activeIdx ? `${award.t} — ${award.presenter}` : ""}
                        aria-hidden={i === activeIdx ? undefined : true}
                        onError={() => setImgErrorMap((prev) => ({ ...prev, [i]: true }))}
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          opacity: i === activeIdx ? 1 : 0,
                          transition: "opacity .35s var(--ease-expo)",
                        }}
                      />
                    ))}
                    {/* One scrim, bottom only. Three stacked gradients — a
                        top fade, a bottom fade and a full-frame vignette —
                        were greying the middle of every photograph. */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(13,20,30,.82) 0%, rgba(13,20,30,.28) 34%, transparent 62%)",
                        pointerEvents: "none",
                      }}
                    />
                  </>
                )}

                {/* Top row: the honour, and the expand affordance. */}
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
                  <span className="chip chip--on-photo">
                    {activeAward.badge || activeAward.by}
                  </span>

                  <button
                    onClick={(e) => {
                      lightboxTriggerRef.current = e.currentTarget;
                      setLightboxOpen(true);
                    }}
                    aria-label={`Expand photo — ${activeAward.t}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: isMobile ? 9 : "7px 12px",
                      background: "rgba(13, 20, 30, 0.78)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.22)",
                      borderRadius: "var(--r-sm)",
                      color: "#fff",
                      fontSize: "var(--text-xs)",
                      fontFamily: "var(--mono)",
                      letterSpacing: "var(--tr-mono)",
                      textTransform: "uppercase",
                      cursor: "pointer",
                    }}
                  >
                    <Maximize2 size={13} aria-hidden="true" />
                    {/* Label on desktop; the icon alone carries it on a phone,
                        where the accessible name comes from aria-label. */}
                    {!isMobile && <span>Expand Photo</span>}
                  </button>
                </div>

                {/* Bottom row: place and year, as marks on the scrim rather
                    than two more boxed chips. Four framed chips on one
                    photograph is upholstery, not hierarchy. */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 14,
                    left: 16,
                    right: 16,
                    zIndex: 2,
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      color: "rgba(255,255,255,0.92)",
                      fontSize: "var(--text-xs)",
                      fontFamily: "var(--mono)",
                      letterSpacing: "var(--tr-mono)",
                      textTransform: "uppercase",
                      textShadow: "0 1px 8px rgba(0,0,0,.5)",
                    }}
                  >
                    <MapPin size={13} aria-hidden="true" />
                    {activeAward.location || "India"}
                  </span>

                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "var(--text-lg)",
                      fontWeight: 500,
                      color: "#fff",
                      letterSpacing: "var(--tr-body)",
                      textShadow: "0 1px 10px rgba(0,0,0,.6)",
                      lineHeight: 1,
                    }}
                  >
                    {activeAward.y}
                  </span>
                </div>
              </div>

              {/* Award Details */}
              <div
                style={{
                  padding: isMobile ? 20 : 28,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  flexGrow: 1,
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontWeight: 700,
                      fontSize: isMobile ? "var(--text-lg)" : "var(--text-xl)",
                      color: "var(--text)",
                      letterSpacing: "var(--tr-heading)",
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
                      fontSize: "var(--text-base)",
                      color: "var(--accent-text)",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <Building2 size={15} aria-hidden="true" />
                    <span>{activeAward.presenter || activeAward.s}</span>
                  </div>
                </div>

                <p
                  style={{
                    fontFamily: "var(--body)",
                    fontWeight: 300,
                    fontSize: "var(--text-base)",
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
                      paddingTop: 14,
                      borderTop: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                      flexWrap: "wrap",
                      fontFamily: "var(--mono)",
                      fontSize: "var(--text-xs)",
                      letterSpacing: "var(--tr-mono)",
                      textTransform: "uppercase",
                    }}
                  >
                    <span style={{ color: "var(--text-muted)" }}>Key Milestone</span>
                    <span style={{ color: "var(--accent-text)", fontWeight: 500 }}>
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
            }}
          >
            <p
              className="eyebrow-label"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 0,
              }}
            >
              <span style={{ flexShrink: 0 }}>Select Award to Inspect</span>
              {/* A rule that leads the eye into the list, instead of the
                  chevron that used to point at nothing. */}
              <span
                aria-hidden="true"
                style={{ flex: 1, height: 1, background: "var(--border-strong)" }}
              />
            </p>

            <div
              ref={listRef}
              role="tablist"
              aria-label="Awards"
              aria-orientation="vertical"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                // The rail grows to match the photo card beside it, and the
                // three cards share that height equally (see `flex` on each
                // card). Pushing the slack into the gaps instead was worse —
                // 160px between cards reads as three unrelated islands rather
                // than one list.
                flex: isMobile ? undefined : 1,
              }}
            >
              {AWARDS.map((award, i) => {
                const isActive = i === activeIdx;
                return (
                  <button
                    key={award.id || i}
                    role="tab"
                    id={`${baseId}-tab-${i}`}
                    aria-selected={isActive}
                    aria-controls={`${baseId}-panel`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveIdx(i)}
                    onKeyDown={(e) => handleKeyNav(e, i)}
                    style={{
                      width: "100%",
                      flex: isMobile ? undefined : 1,
                      textAlign: "left",
                      // Same selection language as the tool inspector on the
                      // course pages: tinted surface, one accent rule. Two
                      // components speaking the same way is most of what
                      // makes a site read as designed rather than assembled.
                      background: isActive ? "var(--bg-muted)" : "var(--bg-card)",
                      border: "1px solid var(--border-card)",
                      borderLeft: isActive
                        ? "2px solid var(--accent)"
                        : "1px solid var(--border-card)",
                      borderRadius: "var(--r-md)",
                      padding: isMobile ? "16px 18px" : "18px 20px",
                      cursor: "pointer",
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      gap: 16,
                      alignItems: "center",
                      transition: "background .2s ease, border-color .2s ease",
                    }}
                  >
                    <span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          marginBottom: 6,
                          fontFamily: "var(--mono)",
                          fontSize: "var(--text-xs)",
                          letterSpacing: "var(--tr-mono)",
                          textTransform: "uppercase",
                        }}
                      >
                        <span style={{ color: "var(--accent-text)", fontWeight: 500 }}>
                          {award.y}
                        </span>
                        <span aria-hidden="true" style={{ color: "var(--text-faint)" }}>
                          ·
                        </span>
                        <span style={{ color: "var(--text-muted)" }}>{award.by}</span>
                      </span>

                      <span
                        style={{
                          display: "block",
                          fontFamily: "var(--serif)",
                          fontWeight: 700,
                          fontSize: "var(--text-lg)",
                          color: "var(--text)",
                          marginBottom: 4,
                          letterSpacing: "var(--tr-heading)",
                          lineHeight: 1.25,
                        }}
                      >
                        {award.t}
                      </span>

                      <span
                        style={{
                          display: "block",
                          fontFamily: "var(--body)",
                          fontWeight: 300,
                          fontSize: "var(--text-sm)",
                          color: "var(--text-muted)",
                          lineHeight: 1.45,
                        }}
                      >
                        {award.s}
                      </span>
                    </span>

                    {/* Thumbnail. The 30% desaturation on inactive rows made
                        three already-dark ceremony photographs read as muddy
                        smudges; they now stay in colour and simply sit
                        quieter than the one on the left. */}
                    <span
                      style={{
                        position: "relative",
                        width: 56,
                        height: 56,
                        borderRadius: "var(--r-sm)",
                        overflow: "hidden",
                        border: "1px solid var(--border)",
                        flexShrink: 0,
                        background: "var(--bg-muted)",
                        display: "block",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={award.img}
                        alt=""
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Verification note. `margin-top: auto` pins it to the foot of
                the column so the rail finishes level with the tall photo card
                beside it — the rail used to stop ~200px short, leaving a hole
                in the middle of the section. */}
            <div
              style={{
                marginTop: "auto",
                paddingTop: 16,
                borderTop: "1px solid var(--border)",
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
              }}
            >
              <ShieldCheck
                size={18}
                color="var(--accent)"
                aria-hidden="true"
                style={{ flexShrink: 0, marginTop: 2 }}
              />
              <p
                style={{
                  fontFamily: "var(--body)",
                  fontSize: "var(--text-sm)",
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                }}
              >
                All award honors were presented in public ceremonies by Union Ministers and government dignitary panels.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Public Verification Trust Bar.
            Three icons in tinted circles above a bold line and a grey line is
            the most recognisable generated-layout shape there is. Same six
            strings, now a hairline-divided band that matches the stats row. */}
        <AnimateIn animation="slideUp" delay={0.2}>
          <div
            style={{
              marginTop: isMobile ? 36 : 48,
              paddingTop: 24,
              borderTop: "1px solid var(--border)",
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: isMobile ? 20 : 32,
            }}
          >
            {[
              {
                Icon: CheckCircle2,
                t: "Publicly Verifiable",
                s: "Government press releases & records",
              },
              {
                Icon: Building2,
                t: "Ministry Recognized",
                s: "Ministry of Skill Dev. & Entrepreneurship",
              },
              {
                Icon: Award,
                t: "National Impact",
                s: "Youth placement & tribal skilling honors",
              },
            ].map(({ Icon, t, s }, i) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  paddingLeft: !isMobile && i > 0 ? 32 : 0,
                  borderLeft:
                    !isMobile && i > 0 ? "1px solid var(--border)" : undefined,
                }}
              >
                <Icon
                  size={16}
                  color="var(--accent)"
                  aria-hidden="true"
                  style={{ flexShrink: 0, marginTop: 2 }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 600,
                      fontSize: "var(--text-sm)",
                      color: "var(--text)",
                      letterSpacing: "var(--tr-body)",
                    }}
                  >
                    {t}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--body)",
                      fontSize: "var(--text-sm)",
                      color: "var(--text-muted)",
                      marginTop: 2,
                      lineHeight: 1.5,
                    }}
                  >
                    {s}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          ref={lightboxRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeAward.t} — full size photograph`}
          onClick={() => setLightboxOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0, 0, 0, 0.92)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: isMobile ? 16 : 32,
            animation: "fadeIn 0.25s ease forwards",
          }}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
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
            <X size={22} aria-hidden="true" />
          </button>

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
                borderRadius: "var(--r-md)",
                overflow: "hidden",
                boxShadow: "var(--shadow-lg)",
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

            <div style={{ textAlign: "center", color: "#fff", maxWidth: 600 }}>
              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "var(--text-lg)",
                  letterSpacing: "var(--tr-heading)",
                  marginBottom: 4,
                }}
              >
                {activeAward.t} ({activeAward.y})
              </h3>
              <p
                style={{
                  fontFamily: "var(--body)",
                  fontSize: "var(--text-base)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                {activeAward.presenter || activeAward.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
