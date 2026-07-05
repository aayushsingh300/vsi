"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { ArrowRight, MessageCircle } from "lucide-react";
import { COURSES_CERT, COURSES_DIP, COURSES_VOC } from "@/data/content";
import { COURSE_THUMBS, programThumb } from "@/data/assets";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import useIsMobile from "@/hooks/useIsMobile";
import { useLang } from "@/context/LangContext";

// Fills a card's image area. Falls back to a grey placeholder (with an
// optional glyph) when the image file is missing — drop files in /public/images later.
function ProgramThumb({ slug, alt, glyph }: { slug: string; alt: string; glyph?: string }) {
  const [errored, setErrored] = useState(false);
  const src = programThumb(slug);
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "var(--bg-muted)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {glyph && <span style={{ fontSize: 34, opacity: 0.5 }}>{glyph}</span>}
      {src && !errored && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setErrored(true)}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      )}
    </div>
  );
}

export default function CoursesPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const isMobile = useIsMobile(768);
  const { t } = useLang();

  const filters = [
    { id: "all", key: "tabAll", n: COURSES_CERT.length + COURSES_DIP.length + COURSES_VOC.length },
    { id: "cert", key: "tabCertificate", n: COURSES_CERT.length },
    { id: "dip", key: "tabDiploma", n: COURSES_DIP.length },
    { id: "voc", key: "tabVocational", n: COURSES_VOC.length },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar formOpen={formOpen} setFormOpen={setFormOpen} />

      {/* Hero */}
      <section className="inner-hero-warm">
        <AnimateIn animation="slideUp">
          <p className="eyebrow">{t("coursesEyebrow")}</p>
          <h1>{t("coursesTitle1")}<br /><em>{t("coursesTitle2")}</em></h1>
          <p className="lead">{t("coursesHeroDesc")}</p>
        </AnimateIn>
      </section>

      {/* Filter bar */}
      <section style={{
        background: "var(--bg)",
        padding: "16px 5%",
        borderBottom: "1px solid var(--border)",
        position: "sticky", top: 57, zIndex: 50,
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div className="segment" role="tablist">
            {filters.map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`segment-btn${filter === f.id ? " active" : ""}`}
                role="tab"
                aria-selected={filter === f.id}
              >
                {t(f.key)} <span className="seg-count">{f.n}</span>
              </button>
            ))}
          </div>
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--text-muted)" }}>{t("needHelp")}</span>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <button className="btn-primary" style={{ padding: "8px 18px", fontSize: 11 }}>{t("freeCounseling")} →</button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Certificate */}
      {(filter === "all" || filter === "cert") && (
        <section className="grid-bg" style={{ padding: isMobile ? "56px 6%" : "72px 5%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ marginBottom: 28 }}>
              <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".15em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 10 }}>Section 01</p>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: isMobile ? "clamp(22px,6.5vw,30px)" : "clamp(24px,3vw,40px)", color: "var(--text)" }}>{t("certSectionTitle")}</h2>
              <p style={{ fontFamily: "var(--body)", fontSize: 14, color: "var(--text-muted)", marginTop: 6, fontStyle: "italic" }}>{t("certSectionSub")}</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: isMobile ? 16 : 22 }}>
              {COURSES_CERT.map((c, i) => (
                <AnimateIn key={c.slug} animation="slideUp" delay={i * 0.05}>
                  <Link href={`/courses/${c.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                    <article className="hover-lift" style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      borderRadius: 8,
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}>
                      <div style={{ position: "relative", aspectRatio: "16/9", background: "var(--bg-muted)" }}>
                        <Image src={COURSE_THUMBS[c.slug]} alt={c.name} fill style={{ objectFit: "cover" }} sizes={isMobile ? "100vw" : "50vw"} />
                        {c.tag && (
                          <span style={{ position: "absolute", top: 12, left: 12, background: "var(--accent)", color: "var(--white)", fontFamily: "var(--sans)", fontWeight: 700, fontSize: 9.5, letterSpacing: ".12em", padding: "4px 9px", borderRadius: 2, textTransform: "uppercase" }}>{c.tag}</span>
                        )}
                      </div>
                      <div style={{ padding: isMobile ? "18px 18px 20px" : "22px 22px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                        <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: isMobile ? 19 : 22, color: "var(--text)", letterSpacing: "-.02em", marginBottom: 8 }}>{c.name}</h3>
                        <p style={{ fontFamily: "var(--body)", fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 16, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", flex: 1 }}>{c.desc}</p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 14, borderTop: "1px solid var(--border)" }}>
                          <div style={{ display: "flex", gap: 14, alignItems: "baseline" }}>
                            <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--text-muted)" }}>{c.hrs}</span>
                            <span style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--text)", fontWeight: 500 }}>{c.fee}</span>
                          </div>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--sans)", fontWeight: 700, fontSize: 11, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--accent)" }}>
                            View <ArrowRight size={13} className="course-arrow" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Diploma */}
      {(filter === "all" || filter === "dip") && (
        <section className="dot-bg" style={{ padding: isMobile ? "56px 6%" : "72px 5%", background: filter === "all" ? "var(--bg-muted)" : "transparent" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ marginBottom: 28 }}>
              <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".15em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 10 }}>Section 02</p>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: isMobile ? "clamp(22px,6.5vw,30px)" : "clamp(24px,3vw,40px)", color: "var(--text)" }}>{t("dipSectionTitle")}</h2>
              <p style={{ fontFamily: "var(--body)", fontSize: 14, color: "var(--text-muted)", marginTop: 6, fontStyle: "italic" }}>{t("dipSectionSub")}</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 16 : 20 }}>
              {COURSES_DIP.map((c, i) => (
                <AnimateIn key={c.slug} animation="slideUp" delay={i * 0.05}>
                  <Link href={`/courses/${c.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                    <article className="hover-lift" style={{
                      background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 8,
                      overflow: "hidden", display: "flex", flexDirection: "column", height: "100%",
                    }}>
                      <div style={{ position: "relative", aspectRatio: "16/9" }}>
                        <ProgramThumb slug={c.slug} alt={c.name} glyph="🎓" />
                        <span style={{ position: "absolute", top: 12, left: 12, background: "var(--accent)", color: "var(--white)", fontFamily: "var(--sans)", fontWeight: 700, fontSize: 9.5, letterSpacing: ".12em", padding: "4px 9px", borderRadius: 2, textTransform: "uppercase" }}>{c.tag}</span>
                      </div>
                      <div style={{ padding: isMobile ? "18px 18px 20px" : "20px 20px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
                        <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: isMobile ? 18 : 20, color: "var(--text)", letterSpacing: "-.02em", marginBottom: 8 }}>{c.name}</h3>
                        <p style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 16, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", flex: 1 }}>{c.desc}</p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 14, borderTop: "1px solid var(--border)" }}>
                          <div style={{ display: "flex", gap: 14, alignItems: "baseline" }}>
                            <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--text-muted)" }}>{c.hrs}</span>
                            <span style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--text)", fontWeight: 500 }}>{c.fee}</span>
                          </div>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--sans)", fontWeight: 700, fontSize: 11, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--accent)" }}>
                            {t("viewProgram")} <ArrowRight size={13} className="course-arrow" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Vocational */}
      {(filter === "all" || filter === "voc") && (
        <section style={{ padding: isMobile ? "56px 6%" : "72px 5%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ marginBottom: 28 }}>
              <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".15em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 10 }}>Section 03</p>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: isMobile ? "clamp(22px,6.5vw,30px)" : "clamp(24px,3vw,40px)", color: "var(--text)" }}>{t("vocSectionTitle")}</h2>
              <p style={{ fontFamily: "var(--body)", fontSize: 14, color: "var(--text-muted)", marginTop: 6, fontStyle: "italic" }}>{t("vocSectionSub")}</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: isMobile ? 14 : 18 }}>
              {COURSES_VOC.map((c, i) => (
                <AnimateIn key={c.slug} animation="scaleIn" delay={i * 0.04}>
                  <Link href={`/courses/${c.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                    <article className="hover-lift" style={{
                      background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 8,
                      overflow: "hidden", display: "flex", flexDirection: "column", height: "100%",
                    }}>
                      <div style={{ position: "relative", aspectRatio: "16/10" }}>
                        <ProgramThumb slug={c.slug} alt={c.name} glyph={c.icon} />
                        <span style={{ position: "absolute", top: 10, left: 10, background: "rgba(13,27,42,.78)", color: "var(--accent-gold)", fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9, letterSpacing: ".1em", padding: "3px 8px", borderRadius: 2, textTransform: "uppercase" }}>{c.hrs}</span>
                      </div>
                      <div style={{ padding: "16px 16px 18px", display: "flex", flexDirection: "column", flex: 1 }}>
                        <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 16, color: "var(--text)", letterSpacing: "-.01em", marginBottom: 6 }}>{c.name}</h3>
                        <p style={{ fontFamily: "var(--body)", fontSize: 12.5, color: "var(--text-muted)", lineHeight: 1.55, marginBottom: 12, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", flex: 1 }}>{c.desc}</p>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--sans)", fontWeight: 700, fontSize: 10.5, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--accent)" }}>
                          {t("viewProgram")} <ArrowRight size={12} className="course-arrow" />
                        </span>
                      </div>
                    </article>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ background: "var(--bg-dark)", padding: isMobile ? "56px 6%" : "72px 5%", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontStyle: "italic", fontSize: isMobile ? "clamp(22px,6.5vw,32px)" : "clamp(24px,3vw,42px)", color: "var(--text-inv)", marginBottom: 14 }}>
          {t("notSure")}
        </h2>
        <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "rgba(253,252,249,.5)", marginBottom: 28 }}>
          {t("counselingSub")}
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" style={{ textDecoration: "none" }}>
            <button className="btn-primary" style={{ background: "var(--accent-gold)", color: "var(--bg-dark)" }}>{t("freeCounseling")}</button>
          </Link>
          <a href="https://wa.me/919431103263" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <button className="btn-wa wa-pulse"><MessageCircle size={15} /> {t("whatsappShort")}</button>
          </a>
        </div>
      </section>

      <Footer />
      <FloatingWA />
    </div>
  );
}
