"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import { COURSES_CERT, COURSES_DIP, COURSES_VOC } from "@/data/content";
import { COURSE_THUMBS } from "@/data/assets";
import useIsMobile from "@/hooks/useIsMobile";
import { useLang } from "@/context/LangContext";

export default function Courses() {
  const [tab, setTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const { t } = useLang();
  const tabs = [
    { key: "tabCertificate", n: COURSES_CERT.length },
    { key: "tabDiploma", n: COURSES_DIP.length },
    { key: "tabVocational", n: COURSES_VOC.length },
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

      {/* Certificate — 2-col card grid */}
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

      {/* Diploma */}
      {tab === 1 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: 12,
          }}
        >
          {COURSES_DIP.map((c, i) => (
            <AnimateIn key={i} animation="slideUp" delay={i * 0.05}>
              <div
                className="course-row"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  borderRadius: 8,
                  padding: "22px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    background: "rgba(var(--accent-rgb),.1)",
                    border: "1px solid rgba(var(--accent-rgb),.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <GraduationCap size={18} color="var(--accent)" />
                </div>
                <h3
                  style={{
                    flex: 1,
                    fontFamily: "var(--serif)",
                    fontWeight: 700,
                    fontSize: 16,
                    color: "var(--text)",
                    letterSpacing: "-.015em",
                  }}
                >
                  {c.name}
                </h3>
                <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--text-muted)" }}>
                  {c.hrs}
                </span>
              </div>
            </AnimateIn>
          ))}
        </div>
      )}

      {/* Vocational */}
      {tab === 2 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(2, 1fr)",
            gap: 14,
          }}
        >
          {COURSES_VOC.map((c, i) => (
            <AnimateIn key={i} animation="scaleIn" delay={i * 0.045}>
              <div
                className="course-row"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  borderRadius: 8,
                  padding: "26px 22px",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
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
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontWeight: 700,
                      fontSize: 16,
                      color: "var(--text)",
                      marginBottom: 3,
                      letterSpacing: "-.015em",
                    }}
                  >
                    {c.name}
                  </h3>
                  <p style={{ fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--text-muted)" }}>
                    {c.hrs} program
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      )}
    </section>
  );
}
