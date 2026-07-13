"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, MessageCircle, CheckCircle2, ArrowRight, Download } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import useIsMobile from "@/hooks/useIsMobile";
import { getProgram, ALL_PROGRAMS, EMPLOYERS } from "@/data/content";
import { programThumb } from "@/data/assets";
import { useLang } from "@/context/LangContext";

// Image that fills its container and falls back to a soft gradient placeholder
// when the file is missing (diploma/vocational art to be added later).
function HeroImage({ slug, alt, isCard }: { slug: string; alt: string; isCard?: boolean }) {
  const [errored, setErrored] = useState(false);
  const src = programThumb(slug);
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(135deg, rgba(var(--accent-rgb),.22) 0%, rgba(13,27,42,.6) 100%)",
        borderRadius: isCard ? 0 : undefined,
      }}
    >
      {src && !errored && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setErrored(true)}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}
    </div>
  );
}

export default function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const course = getProgram(slug);
  const [formOpen, setFormOpen] = useState(false);
  const isMobile = useIsMobile(900);
  const { t } = useLang();

  if (!course) {
    notFound();
  }

  const related = ALL_PROGRAMS.filter(
    (c) => c.kind === course.kind && c.slug !== course.slug
  ).slice(0, 3);

  // Hero stat row adapts to the programme type (vocational has no fixed fee).
  const heroStats = course.fee
    ? [
        { v: course.fee, l: t("statFee") },
        { v: course.hrs, l: t("statDuration") },
        course.n ? { v: course.n, l: t("statTrained") } : { v: course.salary.avg, l: t("statAvgSalary") },
      ]
    : [
        { v: course.hrs, l: t("statDuration") },
        { v: course.tag, l: t("statRecognition") },
        { v: course.salary.avg, l: t("statAvgSalary") },
      ];

  const kindLabel =
    course.kind === "Certificate" ? t("tabCertificate")
    : course.kind === "Diploma" ? t("tabDiploma")
    : t("tabVocational");

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar formOpen={formOpen} setFormOpen={setFormOpen} />

      {/* ── Hero ── */}
      <section style={{ background: "var(--bg-dark)", position: "relative", overflow: "hidden" }}>
        {/* Full-bleed background image (desktop) */}
        {!isMobile && (
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <HeroImage slug={course.slug} alt={course.name} />
            {/* Multi-layer overlay for smooth text readability */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: [
                  "linear-gradient(90deg, var(--bg-dark) 0%, var(--bg-dark) 38%, rgba(13,27,42,.85) 55%, rgba(13,27,42,.45) 75%, rgba(13,27,42,.25) 100%)",
                ].join(", "),
                pointerEvents: "none",
              }}
            />
            {/* Bottom fade */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, var(--bg-dark) 0%, transparent 30%)",
                pointerEvents: "none",
              }}
            />
            {/* Top fade */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(13,27,42,.6) 0%, transparent 20%)",
                pointerEvents: "none",
              }}
            />
          </div>
        )}

        <div style={{ maxWidth: 1180, margin: "0 auto", padding: isMobile ? "32px 6% 0" : "0 5%", position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 0,
              alignItems: "stretch",
              minHeight: isMobile ? "auto" : 520,
            }}
          >
            {/* Content */}
            <div style={{ padding: isMobile ? "0 0 40px" : "72px 0 72px 0", display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 620 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 22,
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  color: "rgba(253,252,249,.4)",
                }}
              >
                <Link href="/courses" style={{ color: "inherit", textDecoration: "none" }}>
                  {t("navCourses")}
                </Link>
                <ChevronRight size={12} />
                <span style={{ color: "rgba(253,252,249,.7)" }}>{course.name}</span>
              </div>

              <AnimateIn animation="slideUp">
                <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap" }}>
                  <span
                    style={{
                      background: "rgba(253,252,249,.08)",
                      color: "rgba(253,252,249,.7)",
                      fontFamily: "var(--mono)",
                      fontWeight: 500,
                      fontSize: 10,
                      letterSpacing: ".12em",
                      padding: "5px 11px",
                      borderRadius: 2,
                      textTransform: "uppercase",
                    }}
                  >
                    {kindLabel}
                  </span>
                  {course.tag && (
                    <span
                      style={{
                        background: "rgba(var(--gold-rgb),.16)",
                        color: "var(--accent-gold)",
                        fontFamily: "var(--mono)",
                        fontWeight: 500,
                        fontSize: 10,
                        letterSpacing: ".12em",
                        padding: "5px 11px",
                        borderRadius: 2,
                        textTransform: "uppercase",
                      }}
                    >
                      {course.tag}
                    </span>
                  )}
                </div>
                <h1
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 700,
                    fontSize: isMobile ? "clamp(30px,8vw,40px)" : "clamp(34px,3.6vw,52px)",
                    color: "var(--text-inv)",
                    lineHeight: 1.08,
                    marginBottom: 18,
                    letterSpacing: "-.03em",
                  }}
                >
                  {course.name}
                </h1>
                <p
                  style={{
                    fontFamily: "var(--body)",
                    fontSize: isMobile ? 15 : 16.5,
                    lineHeight: 1.7,
                    color: "rgba(253,252,249,.62)",
                    marginBottom: 28,
                    maxWidth: 540,
                  }}
                >
                  {course.longDesc}
                </p>

                {/* Stat row */}
                <div
                  style={{
                    display: "flex",
                    gap: 0,
                    marginBottom: 30,
                    border: "1px solid rgba(253,252,249,.1)",
                    borderRadius: 6,
                    overflow: "hidden",
                    maxWidth: 520,
                    background: "rgba(13,27,42,.4)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                >
                  {heroStats.map((s, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        padding: isMobile ? "14px 12px" : "16px 18px",
                        borderRight: i < 2 ? "1px solid rgba(253,252,249,.1)" : "none",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--serif)",
                          fontWeight: 700,
                          fontSize: isMobile ? 18 : 22,
                          color: "var(--text-inv)",
                          letterSpacing: "-.02em",
                        }}
                      >
                        {s.v}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: 9,
                          color: "rgba(253,252,249,.42)",
                          letterSpacing: ".1em",
                          textTransform: "uppercase",
                          marginTop: 4,
                        }}
                      >
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a
                    href={`https://wa.me/919431103263?text=Hi, I am interested in the ${course.name} programme.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <button className="btn-primary" style={{ background: "var(--accent-gold)", color: "var(--bg-dark)" }}>
                      {t("applyNow")}
                    </button>
                  </a>
                  <button
                    className="btn-secondary-on-dark"
                    style={{ display: "inline-flex", alignItems: "center", gap: 7 }}
                  >
                    <Download size={14} /> {t("downloadSyllabus")}
                  </button>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
        {/* mobile image band */}
        {isMobile && (
          <div style={{ position: "relative", height: 220 }}>
            <HeroImage slug={course.slug} alt={course.name} />
          </div>
        )}
      </section>

      {/* ── Tools & skills ── */}
      <section className="grid-bg" style={{ padding: isMobile ? "56px 6%" : "72px 5%" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <p className="detail-eyebrow">{t("dToolsEyebrow")}</p>
            <h2 className="detail-h2">{t("dToolsTitle")}</h2>
          </AnimateIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)",
              gap: 10,
              marginTop: 28,
            }}
          >
            {course.software.map((s, i) => (
              <AnimateIn key={s} animation="slideUp" delay={i * 0.04}>
                <div
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: 4,
                    padding: "16px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 13, color: "var(--text)" }}>{s}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Curriculum ── */}
      <section style={{ padding: isMobile ? "56px 6%" : "80px 5%", background: "var(--bg-muted)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <p className="detail-eyebrow">{t("dCurriculumEyebrow")}</p>
            <h2 className="detail-h2">{t("dCurriculumTitle")}</h2>
          </AnimateIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: 1,
              background: "var(--border)",
              marginTop: 32,
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            {course.modules.map((m, i) => (
              <AnimateIn key={i} animation="slideUp" delay={i * 0.05}>
                <div className="course-row" style={{ background: "var(--bg-card)", padding: "24px 26px", display: "flex", gap: 16, height: "100%" }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      background: "rgba(var(--accent-rgb),.1)",
                      borderRadius: 3,
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
                  <div>
                    <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 16, color: "var(--text)", marginBottom: 5 }}>{m.t}</h3>
                    <p style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{m.d}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's included + Who should join ── */}
      <section style={{ padding: isMobile ? "56px 6%" : "80px 5%" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 40 : 64,
          }}
        >
          <AnimateIn animation="slideUp">
            <p className="detail-eyebrow">{t("dIncludedEyebrow")}</p>
            <h2 className="detail-h2" style={{ marginBottom: 22 }}>{t("dIncludedTitle")}</h2>
            <div style={{ display: "grid", gap: 12 }}>
              {course.features.map((f) => (
                <div key={f} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <CheckCircle2 size={18} color="var(--accent-green)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontFamily: "var(--body)", fontSize: 15, color: "var(--text)" }}>{f}</span>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn animation="slideUp" delay={0.1}>
            <p className="detail-eyebrow">{t("dWhoEyebrow")}</p>
            <h2 className="detail-h2" style={{ fontStyle: "italic", marginBottom: 22 }}>{t("dWhoTitle")}</h2>
            <p style={{ fontFamily: "var(--body)", fontSize: 16, lineHeight: 1.8, color: "var(--text-muted)" }}>{course.audience}</p>
          </AnimateIn>
        </div>
      </section>

      {/* ── Career outcomes ── */}
      <section style={{ background: "var(--bg-dark)", padding: isMobile ? "56px 6%" : "80px 5%" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 36 : 48,
            alignItems: "center",
          }}
        >
          <AnimateIn animation="slideUp">
            <p className="detail-eyebrow" style={{ color: "rgba(253,252,249,.4)" }}>{t("dOutcomesEyebrow")}</p>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: isMobile ? "clamp(24px,6.5vw,32px)" : "clamp(24px,3vw,42px)",
                color: "var(--text-inv)",
                margin: "10px 0 24px",
                lineHeight: 1.15,
              }}
            >
              {t("dOutcomesTitle")}
            </h2>
            <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "rgba(253,252,249,.5)", lineHeight: 1.75, marginBottom: 24 }}>
              {t("dOutcomesDesc")}
            </p>
            <div style={{ display: "grid", gap: 0 }}>
              {[
                { r: t("salaryEntry"), s: course.salary.min },
                { r: t("salaryAvg"), s: course.salary.avg },
                { r: t("salaryTop"), s: course.salary.max },
              ].map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(253,252,249,.08)",
                  }}
                >
                  <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 17, color: "var(--text-inv)" }}>{r.r}</span>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 13, color: "rgba(253,252,249,.55)" }}>{r.s} p.a.</span>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn animation="slideLeft" delay={0.1}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }}>
              {EMPLOYERS.slice(0, 9).map((e, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(253,252,249,.04)",
                    border: "1px solid rgba(253,252,249,.08)",
                    borderRadius: 2,
                    padding: "20px 8px",
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 700, fontSize: isMobile ? 13 : 15, color: "rgba(253,252,249,.65)" }}>{e}</span>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Enquiry CTA (replaces the old hero form) ── */}
      <section style={{ padding: isMobile ? "56px 6%" : "72px 5%", background: "var(--bg-muted)", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 700,
                fontStyle: "italic",
                fontSize: isMobile ? "clamp(22px,6.5vw,30px)" : "clamp(24px,3vw,38px)",
                color: "var(--text)",
                marginBottom: 12,
              }}
            >
              {t("dCtaTitle")}
            </h2>
            <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "var(--text-muted)", marginBottom: 26 }}>{t("counselingSub")}</p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <button className="btn-primary">{t("freeCounseling")}</button>
              </Link>
              <a
                href={`https://wa.me/919431103263?text=Hi, I am interested in the ${course.name} programme.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <button className="btn-wa wa-pulse"><MessageCircle size={15} /> {t("whatsappEnquiry")}</button>
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Related ── */}
      {related.length > 0 && (
        <section style={{ padding: isMobile ? "56px 6%" : "80px 5%" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <AnimateIn animation="slideUp">
              <p className="detail-eyebrow">{t("dRelatedEyebrow")}</p>
              <h2 className="detail-h2" style={{ fontStyle: "italic", marginBottom: 28 }}>{t("dRelatedTitle")}</h2>
            </AnimateIn>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 16 }}>
              {related.map((c) => (
                <Link key={c.slug} href={`/courses/${c.slug}`} style={{ textDecoration: "none" }}>
                  <div className="hover-lift" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 6, overflow: "hidden" }}>
                    <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 10" }}>
                      <HeroImage slug={c.slug} alt={c.name} />
                    </div>
                    <div style={{ padding: 18 }}>
                      <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 18, color: "var(--text)", marginBottom: 6 }}>{c.name}</h3>
                      <p
                        style={{
                          fontFamily: "var(--body)",
                          fontSize: 13,
                          color: "var(--text-muted)",
                          lineHeight: 1.55,
                          marginBottom: 12,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {c.longDesc}
                      </p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--text-muted)" }}>{c.fee ? `${c.hrs} · ${c.fee}` : c.hrs}</span>
                        <ArrowRight size={16} color="var(--accent)" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <FloatingWA />
    </div>
  );
}
