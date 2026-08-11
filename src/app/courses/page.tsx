"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { ArrowRight, MapPin } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  COURSES_CERT,
  COURSES_VOC,
  CAD_DIPLOMAS,
  COMPUTER_APP_COURSES,
  COURSES_DATA_SCIENCE,
  COURSES_DESIGN,
  COURSES_COMP_APP,
  COURSES_AUTOMATION,
  AUTOMATION_COURSES,
  POLYTECHNIC_COLLEGES,
  ITI_COLLEGES,
  type CourseCert,
  type CourseDip,
  type CourseCategory,
  type College,
} from "@/data/content";
import { COURSE_THUMBS, programThumb } from "@/data/assets";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import TabSwitch from "@/components/TabSwitch";
import useIsMobile from "@/hooks/useIsMobile";
import { useLang } from "@/context/LangContext";
import { ToolCard } from "@/components/ToolCard";
import Icon from "@/components/Icon";


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
      {glyph && <Icon name={glyph} size={30} color="var(--text-faint)" />}
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

// Section heading block, shared across the category sections.
function SectionHead({ index, title, sub, isMobile }: { index: string; title: string; sub: string; isMobile: boolean }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <p className="eyebrow-label" style={{ marginBottom: 10 }}>{index}</p>
      <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: isMobile ? "clamp(22px,6.5vw,30px)" : "clamp(24px,3vw,40px)", color: "var(--text)" }}>{title}</h2>
      <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "var(--text-muted)", marginTop: 6, fontStyle: "italic" }}>{sub}</p>
    </div>
  );
}

// Detailed diploma / certificate card (links to a course detail page).
function DiplomaCard({ c, isMobile, viewLabel }: { c: CourseCert | CourseDip; isMobile: boolean; viewLabel: string }) {
  return (
    <Link href={`/courses/${c.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
      <article className="hover-lift" style={{
        background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--r-md)",
        overflow: "hidden", display: "flex", flexDirection: "column", height: "100%",
      }}>
        <div style={{ position: "relative", aspectRatio: "16/9" }}>
          <ProgramThumb slug={c.slug} alt={c.name} glyph="education" />
          <span style={{ position: "absolute", top: 12, left: 12, background: "var(--accent)", color: "var(--white)", fontFamily: "var(--sans)", fontWeight: 700, fontSize: "var(--text-xs)", letterSpacing: "var(--tr-mono)", padding: "4px 9px", borderRadius: "var(--r-sm)", textTransform: "uppercase" }}>{c.tag}</span>
        </div>
        <div style={{ padding: isMobile ? "18px 18px 20px" : "20px 20px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
          <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--text)", letterSpacing: "var(--tr-heading)", marginBottom: 8 }}>{c.name}</h3>
          <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 16, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", flex: 1 }}>{c.desc}</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 14, borderTop: "1px solid var(--border)" }}>
            <div style={{ display: "flex", gap: 14, alignItems: "baseline" }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{c.hrs}</span>
              <span style={{ fontFamily: "var(--mono)", fontSize: "var(--text-sm)", color: "var(--text)", fontWeight: 500 }}>{c.fee}</span>
            </div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--sans)", fontWeight: 700, fontSize: "var(--text-xs)", letterSpacing: "var(--tr-caps)", textTransform: "uppercase", color: "var(--accent)" }}>
              {viewLabel} <ArrowRight size={13} className="course-arrow" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

// Category card for course families without a dedicated detail page (Data
// Science, Design). Shows the discipline, description and tool stack.
function CategoryCard({ c }: { c: CourseCategory }) {
  return (
    <Link href="/contact" style={{ textDecoration: "none", display: "block", height: "100%" }}>
      <article className="hover-lift" style={{
        background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--r-md)",
        padding: "24px 22px", display: "flex", flexDirection: "column", gap: 12, height: "100%",
      }}>
        <div className="icon-box" style={{ marginBottom: 2 }}><Icon name={c.icon} size={20} color="var(--accent)" /></div>
        <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--text)", letterSpacing: "var(--tr-heading)" }}>{c.name}</h3>
        <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: 1.6, flex: 1 }}>{c.desc}</p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", paddingTop: 4 }}>
          {c.tools.slice(0, 5).map((tool) => (
            <ToolCard key={tool} toolName={tool} compact />
          ))}
          {c.tools.length > 5 && (
            <span style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)", padding: "3px 4px" }}>+{c.tools.length - 5}</span>
          )}
        </div>
      </article>
    </Link>
  );
}

// Campus card for the Polytechnic / ITI directory.
function CollegeCard({ c }: { c: College }) {
  return (
    <article style={{
      background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--r-md)",
      padding: "22px 20px", display: "flex", flexDirection: "column", gap: 8, height: "100%",
    }}>
      <span style={{
        fontFamily: "var(--mono)", fontSize: "var(--text-xs)", letterSpacing: "var(--tr-mono)", textTransform: "uppercase",
        color: "var(--accent)", fontWeight: 500,
      }}>{c.type}</span>
      <h4 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-md)", color: "var(--text)", letterSpacing: "var(--tr-body)", lineHeight: 1.3 }}>
        {c.name}
      </h4>
      {c.aka && (
        <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", fontStyle: "italic", lineHeight: 1.5 }}>
          Also referred to as {c.aka}
        </p>
      )}
      <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)", letterSpacing: "var(--tr-caps)", marginTop: "auto", paddingTop: 6 }}>
        <MapPin size={11} strokeWidth={1.8} /> {c.district} district, {c.state}
      </span>
    </article>
  );
}

export default function CoursesPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const isMobile = useIsMobile(900);
  const { t } = useLang();

  const cadCount = COURSES_CERT.length + CAD_DIPLOMAS.length;
  const filters = [
    { id: "all", key: "tabAll", n: cadCount + COMPUTER_APP_COURSES.length + COURSES_COMP_APP.length + COURSES_DATA_SCIENCE.length + COURSES_DESIGN.length + COURSES_VOC.length },
    { id: "cad", key: "tabCAD", n: cadCount },
    { id: "compapp", key: "tabCompApp", n: COMPUTER_APP_COURSES.length + COURSES_COMP_APP.length },
    { id: "data", key: "tabDataBA", n: COURSES_DATA_SCIENCE.length },
    { id: "design", key: "tabDesign", n: COURSES_DESIGN.length },
    { id: "voc", key: "tabVoc", n: COURSES_VOC.length },
  ];

  const show = (id: string) => filter === "all" || filter === id;

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
        position: "sticky", top: "var(--nav-h)", zIndex: 50,
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          {/* Six options: a segmented control on a pointer, a select on a
              phone. `flexWrap: "wrap"` used to stack them into two rows
              inside a pill-shaped container. */}
          <TabSwitch
            label="Filter courses"
            value={filter}
            onChange={setFilter}
            options={filters.map((f) => ({ id: f.id, label: t(f.key), count: f.n }))}
          />
          {!isMobile && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, marginLeft: "auto" }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{t("needHelp")}</span>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <button className="btn-primary btn-sm">{t("freeCounseling")} →</button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CAD Courses */}
      {show("cad") && (
        <section className="grid-bg" style={{ padding: isMobile ? "56px 6%" : "72px 5%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <SectionHead index="Section 01" title={t("tabCAD")} sub="CAD engineering certificates & AICTE diplomas · 200–320 hrs / 3-yr" isMobile={isMobile} />
            {/* Certificate CAD programs */}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: isMobile ? 16 : 22 }}>
              {COURSES_CERT.map((c, i) => (
                <AnimateIn key={c.slug} animation="slideUp" delay={i * 0.05}>
                  <Link href={`/courses/${c.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                    <article className="hover-lift" style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--r-md)",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}>
                      <div style={{ position: "relative", aspectRatio: "16/9", background: "var(--bg-muted)" }}>
                        <Image src={COURSE_THUMBS[c.slug]} alt={c.name} fill style={{ objectFit: "cover" }} sizes={isMobile ? "100vw" : "50vw"} />
                        {c.tag && (
                          <span style={{ position: "absolute", top: 12, left: 12, background: "var(--accent)", color: "var(--white)", fontFamily: "var(--sans)", fontWeight: 700, fontSize: "var(--text-xs)", letterSpacing: "var(--tr-mono)", padding: "4px 9px", borderRadius: "var(--r-sm)", textTransform: "uppercase" }}>{c.tag}</span>
                        )}
                      </div>
                      <div style={{ padding: isMobile ? "18px 18px 20px" : "22px 22px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                        <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--text)", letterSpacing: "var(--tr-heading)", marginBottom: 8 }}>{c.name}</h3>
                        <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 16, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", flex: 1 }}>{c.desc}</p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 14, borderTop: "1px solid var(--border)" }}>
                          <div style={{ display: "flex", gap: 14, alignItems: "baseline" }}>
                            <span style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{c.hrs}</span>
                            <span style={{ fontFamily: "var(--mono)", fontSize: "var(--text-sm)", color: "var(--text)", fontWeight: 500 }}>{c.fee}</span>
                          </div>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--sans)", fontWeight: 700, fontSize: "var(--text-xs)", letterSpacing: "var(--tr-caps)", textTransform: "uppercase", color: "var(--accent)" }}>
                            View <ArrowRight size={13} className="course-arrow" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </AnimateIn>
              ))}
            </div>

            {/* Automation specializations (delivered within Electrical CAD) */}
            <div style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", letterSpacing: "var(--tr-mono)", textTransform: "uppercase", color: "var(--text-muted)" }}>Automation Specializations:</span>
              {AUTOMATION_COURSES.map((a) => (
                <span key={a.slug} style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontFamily: "var(--sans)", fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text)",
                  background: "var(--bg-card)", border: "1px solid var(--border-card)", padding: "6px 12px", borderRadius: "var(--r-sm)",
                }}>
                  <Icon name={a.icon} size={14} color="var(--accent)" /> {a.name}
                </span>
              ))}
            </div>

            {/* CAD-based diplomas */}
            <div style={{ marginTop: 40 }}>
              <p style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", letterSpacing: "var(--tr-mono)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 18 }}>Polytechnic / ITI Diplomas</p>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 16 : 20 }}>
                {CAD_DIPLOMAS.map((c, i) => (
                  <AnimateIn key={c.slug} animation="slideUp" delay={i * 0.05}>
                    <DiplomaCard c={c} isMobile={isMobile} viewLabel={t("viewProgram")} />
                  </AnimateIn>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Polytechnic / ITI campuses — dedicated directory */}
      {show("cad") && (
        <section style={{ padding: isMobile ? "56px 6%" : "72px 5%", background: "var(--bg-muted)", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <AnimateIn animation="slideUp">
              <p className="eyebrow-label" style={{ marginBottom: 10 }}>Polytechnic / ITI</p>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: isMobile ? "clamp(22px,6.5vw,30px)" : "clamp(24px,3vw,40px)", color: "var(--text)" }}>
                Our campuses.
              </h2>
              <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "var(--text-muted)", marginTop: 6, marginBottom: 32, maxWidth: 640, lineHeight: 1.7 }}>
                We operate three Government Polytechnic colleges in Uttar Pradesh and two ITI colleges in Jharkhand.
              </p>
            </AnimateIn>

            <p style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", letterSpacing: "var(--tr-mono)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>
              Government Polytechnic Colleges · Uttar Pradesh
            </p>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 14 : 18, marginBottom: 36 }}>
              {POLYTECHNIC_COLLEGES.map((c, i) => (
                <AnimateIn key={c.name} animation="slideUp" delay={i * 0.05}>
                  <CollegeCard c={c} />
                </AnimateIn>
              ))}
            </div>

            <p style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", letterSpacing: "var(--tr-mono)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>
              ITI Colleges · Jharkhand
            </p>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 14 : 18 }}>
              {ITI_COLLEGES.map((c, i) => (
                <AnimateIn key={c.name} animation="slideUp" delay={i * 0.05}>
                  <CollegeCard c={c} />
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Computer Application */}
      {show("compapp") && (
        <section className="dot-bg" style={{ padding: isMobile ? "56px 6%" : "72px 5%", background: filter === "all" ? "var(--bg-muted)" : "transparent" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <SectionHead index="Section 02" title={t("tabCompApp")} sub="Short-term computer courses & 3-year AICTE-recognized diplomas" isMobile={isMobile} />

            <p style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", letterSpacing: "var(--tr-mono)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>
              Short-Term Computer Courses
            </p>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 16 : 20, marginBottom: 40 }}>
              {COURSES_COMP_APP.map((c, i) => (
                <AnimateIn key={c.slug} animation="slideUp" delay={i * 0.05}>
                  <DiplomaCard c={c} isMobile={isMobile} viewLabel={t("viewProgram")} />
                </AnimateIn>
              ))}
            </div>

            <p style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", letterSpacing: "var(--tr-mono)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>
              Polytechnic Diplomas
            </p>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 16 : 20 }}>
              {COMPUTER_APP_COURSES.map((c, i) => (
                <AnimateIn key={c.slug} animation="slideUp" delay={i * 0.05}>
                  <DiplomaCard c={c} isMobile={isMobile} viewLabel={t("viewProgram")} />
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Data Science & Business Analytics */}
      {show("data") && (
        <section style={{ padding: isMobile ? "56px 6%" : "72px 5%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <SectionHead index="Section 03" title={t("tabDataBA")} sub="Analytics, AI/ML & digital marketing · industry tool stacks" isMobile={isMobile} />
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: isMobile ? 16 : 22 }}>
              {COURSES_DATA_SCIENCE.map((c, i) => (
                <AnimateIn key={c.slug} animation="slideUp" delay={i * 0.05}>
                  <DiplomaCard c={c} isMobile={isMobile} viewLabel={t("viewProgram")} />
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Design Courses */}
      {show("design") && (
        <section className="dot-bg" style={{ padding: isMobile ? "56px 6%" : "72px 5%", background: filter === "all" ? "var(--bg-muted)" : "transparent" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <SectionHead index="Section 04" title={t("tabDesign")} sub="Graphics, multimedia, animation, interior & fashion design" isMobile={isMobile} />
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 16 : 20 }}>
              {COURSES_DESIGN.map((c, i) => (
                <AnimateIn key={c.slug} animation="slideUp" delay={i * 0.05}>
                  <DiplomaCard c={c} isMobile={isMobile} viewLabel={t("viewProgram")} />
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Free Vocational */}
      {show("voc") && (
        <section style={{ padding: isMobile ? "56px 6%" : "72px 5%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <SectionHead index="Section 05" title={t("tabVoc")} sub="Short-duration · NSDC-aligned · job-ready in months" isMobile={isMobile} />
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: isMobile ? 14 : 18 }}>
              {COURSES_VOC.map((c, i) => (
                <AnimateIn key={c.slug} animation="scaleIn" delay={i * 0.04}>
                  <Link href={`/courses/${c.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                    <article className="hover-lift" style={{
                      background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--r-md)",
                      overflow: "hidden", display: "flex", flexDirection: "column", height: "100%",
                    }}>
                      <div style={{ position: "relative", aspectRatio: "16/10" }}>
                        <ProgramThumb slug={c.slug} alt={c.name} glyph={c.icon} />
                        <span style={{ position: "absolute", top: 10, left: 10, background: "rgba(13,27,42,.78)", color: "var(--accent-gold)", fontFamily: "var(--mono)", fontWeight: 500, fontSize: "var(--text-xs)", letterSpacing: "var(--tr-mono)", padding: "3px 8px", borderRadius: "var(--r-sm)", textTransform: "uppercase" }}>{c.hrs}</span>
                      </div>
                      <div style={{ padding: "16px 16px 18px", display: "flex", flexDirection: "column", flex: 1 }}>
                        <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-md)", color: "var(--text)", letterSpacing: "var(--tr-body)", marginBottom: 6 }}>{c.name}</h3>
                        <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: 1.55, marginBottom: 12, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", flex: 1 }}>{c.desc}</p>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--sans)", fontWeight: 700, fontSize: "var(--text-xs)", letterSpacing: "var(--tr-caps)", textTransform: "uppercase", color: "var(--accent)" }}>
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
        <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "rgba(253,252,249,.5)", marginBottom: 28 }}>
          {t("counselingSub")}
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" style={{ textDecoration: "none" }}>
            <button className="btn-primary">{t("freeCounseling")}</button>
          </Link>
          <a href="https://wa.me/919431103263" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <button className="btn-wa wa-pulse"><WhatsAppIcon size={15} /> {t("whatsappShort")}</button>
          </a>
        </div>
      </section>

      <Footer />
      <FloatingWA />
    </div>
  );
}
