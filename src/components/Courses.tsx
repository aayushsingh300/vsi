"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import { COURSES_CERT, DATA_SCIENCE_COURSES, DESIGN_STUDIO_COURSES } from "@/data/content";
import { COURSE_THUMBS } from "@/data/assets";
import useIsMobile from "@/hooks/useIsMobile";
import { useLang } from "@/context/LangContext";

export default function Courses() {
  const [tab, setTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const { t } = useLang();
  const tabs = [
    { key: "tabCertificate", n: COURSES_CERT.length },
    { key: "tabDiploma", n: DATA_SCIENCE_COURSES.length },
    { key: "tabVocational", n: DESIGN_STUDIO_COURSES.length },
  ];
  const isMobile = useIsMobile(768);

  return (
    <section
      id="courses"
      style={{
        padding: isMobile ? "64px 6%" : "96px 5%",
        background: "var(--bg)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "flex-end",
          gap: isMobile ? 20 : 0,
          marginBottom: 44,
          borderBottom: "1px solid var(--border)",
          paddingBottom: 32,
        }}
      >
        <AnimateIn animation="slideUp">
          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: ".18em",
              color: "var(--accent)",
              textTransform: "uppercase",
              marginBottom: 12,
              fontWeight: 500,
            }}
          >
            // Programs
          </p>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: isMobile ? "clamp(28px,7vw,36px)" : "clamp(28px,4vw,60px)",
              color: "var(--text)",
              letterSpacing: "-.038em",
              lineHeight: 1.02,
            }}
          >
            {t("ourPrograms")}
          </h2>
        </AnimateIn>
        <div className="segment" role="tablist" aria-label="Programs">
          {tabs.map((tb, i) => (
            <button
              key={tb.key}
              role="tab"
              aria-selected={tab === i}
              onClick={() => setTab(i)}
              className={`segment-btn${tab === i ? " active" : ""}`}
            >
              {t(tb.key)} <span className="seg-count">{tb.n}</span>
            </button>
          ))}
        </div>
      </div>

      {/* CAD Engineering — 2-col card grid */}
      {tab === 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? 16 : 24,
          }}
        >
          {COURSES_CERT.map((c, i) => (
            <AnimateIn key={c.slug} animation="slideUp" delay={i * 0.055}>
              <Link href={`/courses/${c.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                <article
                  className="hover-lift"
                  onMouseEnter={() => setHoveredCard(c.slug)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-card)",
                    borderRadius: 10,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    boxShadow: hoveredCard === c.slug ? "var(--shadow-glow)" : "var(--shadow-sm)",
                    transition: "box-shadow .32s ease",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "16/9",
                      background: "var(--bg-muted)",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={COURSE_THUMBS[c.slug]}
                      alt={c.name}
                      fill
                      style={{
                        objectFit: "cover",
                        transition: "transform .8s var(--ease-expo)",
                        transform: hoveredCard === c.slug ? "scale(1.06)" : "scale(1)",
                      }}
                      sizes={isMobile ? "100vw" : "50vw"}
                    />
                    {/* Gradient overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(13,27,42,.45) 0%, transparent 50%)",
                        opacity: hoveredCard === c.slug ? 1 : 0,
                        transition: "opacity .3s ease",
                      }}
                    />
                    {c.tag && (
                      <span
                        style={{
                          position: "absolute",
                          top: 12,
                          left: 12,
                          background: "var(--accent)",
                          color: "var(--white)",
                          fontFamily: "var(--sans)",
                          fontWeight: 700,
                          fontSize: 9.5,
                          letterSpacing: ".12em",
                          padding: "4px 10px",
                          borderRadius: 3,
                          textTransform: "uppercase",
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          boxShadow: "0 2px 8px var(--accent-glow)",
                        }}
                      >
                        <Sparkles size={9} /> {c.tag}
                      </span>
                    )}
                  </div>

                  <div
                    style={{
                      padding: isMobile ? "20px 18px 22px" : "24px 24px 26px",
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--serif)",
                        fontWeight: 700,
                        fontSize: isMobile ? 19 : 22,
                        color: "var(--text)",
                        letterSpacing: "-.022em",
                        marginBottom: 8,
                      }}
                    >
                      {c.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--body)",
                        fontSize: 13.5,
                        color: "var(--text-muted)",
                        lineHeight: 1.65,
                        marginBottom: 18,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        flex: 1,
                      }}
                    >
                      {c.desc}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: 14,
                        borderTop: "1px solid var(--border)",
                      }}
                    >
                      <div style={{ display: "flex", gap: 14, alignItems: "baseline" }}>
                        <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--text-muted)" }}>
                          {c.hrs}
                        </span>
                      </div>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 5,
                          fontFamily: "var(--sans)",
                          fontWeight: 700,
                          fontSize: 11,
                          letterSpacing: ".06em",
                          textTransform: "uppercase",
                          color: "var(--accent)",
                        }}
                      >
                        View <ArrowRight size={12} className="course-arrow" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </AnimateIn>
          ))}
        </div>
      )}

      {/* Data Science & Management */}
      {tab === 1 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: 16,
          }}
        >
          {DATA_SCIENCE_COURSES.map((c, i) => (
            <AnimateIn key={c.slug} animation="slideUp" delay={i * 0.06}>
              <div
                className="course-row"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  borderRadius: 10,
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  height: "100%",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 10,
                      background: "rgba(var(--accent-rgb),.08)",
                      border: "1px solid rgba(var(--accent-rgb),.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 24,
                      flexShrink: 0,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--serif)",
                        fontWeight: 700,
                        fontSize: 18,
                        color: "var(--text)",
                        letterSpacing: "-.02em",
                      }}
                    >
                      {c.name}
                    </h3>
                  </div>
                </div>
                <p style={{ fontFamily: "var(--body)", fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.65 }}>
                  {c.desc}
                </p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: "auto" }}>
                  {c.tools.slice(0, 4).map((tool) => (
                    <span
                      key={tool}
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 9,
                        letterSpacing: ".06em",
                        background: "rgba(var(--accent-rgb),.06)",
                        border: "1px solid rgba(var(--accent-rgb),.12)",
                        color: "var(--text-muted)",
                        padding: "3px 8px",
                        borderRadius: 3,
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                  {c.tools.length > 4 && (
                    <span style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--text-muted)", padding: "3px 0" }}>
                      +{c.tools.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      )}

      {/* Design Studio */}
      {tab === 2 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: 16,
          }}
        >
          {DESIGN_STUDIO_COURSES.map((c, i) => (
            <AnimateIn key={c.slug} animation="scaleIn" delay={i * 0.06}>
              <div
                className="course-row"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  borderRadius: 10,
                  padding: "28px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 12,
                    background: "rgba(var(--accent-rgb),.08)",
                    border: "1px solid rgba(var(--accent-rgb),.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 26,
                    flexShrink: 0,
                  }}
                >
                  {c.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 700,
                    fontSize: 17,
                    color: "var(--text)",
                    letterSpacing: "-.015em",
                  }}
                >
                  {c.name}
                </h3>
                <p style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, flex: 1 }}>
                  {c.desc}
                </p>
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginTop: "auto" }}>
                  {c.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 8.5,
                        letterSpacing: ".05em",
                        background: "rgba(var(--accent-rgb),.06)",
                        border: "1px solid rgba(var(--accent-rgb),.12)",
                        color: "var(--text-muted)",
                        padding: "2px 6px",
                        borderRadius: 2,
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                  {c.tools.length > 3 && (
                    <span style={{ fontFamily: "var(--mono)", fontSize: 8.5, color: "var(--text-muted)", padding: "2px 0" }}>
                      +{c.tools.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      )}
    </section>
  );
}
