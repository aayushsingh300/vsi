"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Zap, Building2, Globe, Landmark, GraduationCap, FileSpreadsheet, MapPin, Users, ArrowRight, ExternalLink } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import CampusImage from "@/components/CampusImage";
import SectionFloater from "@/components/SectionFloater";
import {
  EMPLOYMENT_SECTORS,
  EMERGING_TECH,
  GOVT_MANDATES,
  SAMAGRA_SHIKSHA_DISTRICTS,
  SERVICES_PPP,
  SERVICES_VERTICALS,
  POLYTECHNIC_COLLEGES,
  ITI_COLLEGES,
  type College,
} from "@/data/content";
import { useLang } from "@/context/LangContext";
import useIsMobile from "@/hooks/useIsMobile";
import Icon from "@/components/Icon";

/**
 * District-wise school coverage under Samagra Shiksha.
 *
 * The source sheet is still pending, so the empty case is a first-class state
 * rather than a blank table — it names what is missing instead of implying we
 * cover zero schools.
 */
function SamagraShikshaSheet({ isMobile }: { isMobile: boolean }) {
  const rows = SAMAGRA_SHIKSHA_DISTRICTS;
  const total = rows.reduce((sum, r) => sum + r.schools, 0);

  const cell: React.CSSProperties = {
    padding: "10px 14px",
    fontFamily: "var(--body)",
    fontSize: "var(--text-sm)",
    color: "var(--text)",
    borderBottom: "1px solid var(--border)",
    textAlign: "left",
  };
  const head: React.CSSProperties = {
    ...cell,
    fontFamily: "var(--mono)",
    fontSize: "var(--text-xs)",
    letterSpacing: "var(--tr-caps)",
    textTransform: "uppercase",
    color: "var(--text-muted)",
    fontWeight: 500,
  };

  return (
    <div style={{ marginTop: 26 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 12 }}>
        <FileSpreadsheet size={15} color="var(--accent)" style={{ flexShrink: 0 }} />
        <span style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)", letterSpacing: "var(--tr-caps)", textTransform: "uppercase" }}>
          Schools per district
        </span>
      </div>

      {rows.length === 0 ? (
        <div style={{
          padding: "16px 18px", borderRadius: "var(--r-sm)",
          background: "rgba(var(--accent-rgb),.06)", border: "1px solid rgba(var(--accent-rgb),.25)",
        }}>
          <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: 1.65 }}>
            The district-wise school directory is being compiled and will be published here shortly.
          </p>
        </div>
      ) : (
        // A district list is long and narrow — it scrolls inside its own box
        // so the page body never scrolls sideways on a phone.
        <div style={{ overflowX: "auto", border: "1px solid var(--border)", borderRadius: "var(--r-sm)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: isMobile ? 380 : undefined }}>
            <caption className="sr-only">Schools covered under Samagra Shiksha, by district</caption>
            <thead>
              <tr>
                <th scope="col" style={head}>District</th>
                <th scope="col" style={head}>State</th>
                <th scope="col" style={{ ...head, textAlign: "right" }}>Schools</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={`${r.state}-${r.district}`}>
                  <td style={cell}>{r.district}</td>
                  <td style={{ ...cell, color: "var(--text-muted)" }}>{r.state}</td>
                  <td style={{ ...cell, textAlign: "right", fontFamily: "var(--mono)" }}>{r.schools}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td style={{ ...cell, borderBottom: "none", fontWeight: 700 }}>Total</td>
                <td style={{ ...cell, borderBottom: "none" }} />
                <td style={{ ...cell, borderBottom: "none", textAlign: "right", fontFamily: "var(--mono)", fontWeight: 700 }}>{total}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
}

/**
 * One campus inside the training directory dropdown.
 *
 * The card body routes to our own landing page; the official college website
 * is a separate anchor surfaced on hover, deliberately *outside* the `Link`
 * — an `<a>` nested inside another anchor is invalid markup and browsers
 * resolve the click unpredictably. It only renders once a URL is on the
 * record, so an unconfirmed entry shows no dead affordance.
 */
function CollegeDirectoryCard({ col }: { col: College }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{ position: "relative", height: "100%" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/colleges/${col.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
        <div className="hover-lift" style={{
          background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--r-md)",
          overflow: "hidden", display: "flex", flexDirection: "column", height: "100%",
        }}>
          {/* Cover image */}
          <div style={{ position: "relative", width: "100%", height: 140, overflow: "hidden" }}>
            <CampusImage src={col.image} alt={col.name} />
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0, height: "50%",
              background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)",
              pointerEvents: "none",
            }} />
          </div>

          {/* Info */}
          <div style={{ padding: "12px 16px 16px", display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
            <h4 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-base)", color: "var(--text)", lineHeight: 1.35, letterSpacing: "var(--tr-body)" }}>{col.name}</h4>
            {col.aka && (
              <span style={{ fontFamily: "var(--body)", fontSize: "var(--text-xs)", color: "var(--text-muted)", fontStyle: "italic", lineHeight: 1.5 }}>
                Also referred to as {col.aka}
              </span>
            )}
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)", letterSpacing: "var(--tr-caps)", marginTop: 2 }}>
              <MapPin size={10} strokeWidth={1.8} /> {col.district} district, {col.state}
            </span>

            <span style={{
              display: "inline-flex", alignItems: "center", gap: 5, marginTop: "auto", paddingTop: 10,
              fontFamily: "var(--sans)", fontWeight: 700, fontSize: "var(--text-xs)", letterSpacing: "var(--tr-caps)",
              textTransform: "uppercase", color: "var(--accent)",
            }}>
              View campus <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </Link>

      {col.website && (
        <a
          href={col.website}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "absolute", top: 10, right: 10, zIndex: 2,
            display: "inline-flex", alignItems: "center", gap: 5,
            background: "rgba(13,27,42,.86)", color: "var(--white)",
            fontFamily: "var(--mono)", fontSize: "var(--text-xs)", letterSpacing: "var(--tr-caps)",
            textTransform: "uppercase", textDecoration: "none",
            padding: "5px 9px", borderRadius: "var(--r-sm)",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(-4px)",
            transition: "opacity .2s ease, transform .2s ease",
            pointerEvents: hovered ? "auto" : "none",
          }}
        >
          Official site <ExternalLink size={11} />
        </a>
      )}
    </div>
  );
}

// Anchors the floating section rail jumps to. Ids must match the `id`
// attributes on the sections below.
const FLOATER_SECTIONS = [
  { id: "verticals", label: "Verticals" },
  { id: "training-directory", label: "Training Directory" },
  { id: "skill-initiatives", label: "Skill Initiatives" },
  { id: "public-sector-delivery", label: "Public Sector" },
];

export default function ServicesPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [activeMandate, setActiveMandate] = useState(0);
  const [openDirectory, setOpenDirectory] = useState<string | null>("ppp");
  const { t } = useLang();
  const isMobile = useIsMobile(900);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar formOpen={formOpen} setFormOpen={setFormOpen} />
      <SectionFloater sections={FLOATER_SECTIONS} />

      {/* Hero */}
      <section className="inner-hero-warm">
        <AnimateIn animation="slideUp">
          <p className="eyebrow">{t("servicesEyebrow")}</p>
          <h1>{t("servicesTitle1")}<br /><em>{t("servicesTitle2")}</em></h1>
          <p className="lead">{t("servicesHeroDesc")}</p>
        </AnimateIn>
      </section>

      {/* Six delivery verticals */}
      <section id="verticals" style={{ padding: isMobile ? "56px 6%" : "80px 5%", background: "var(--bg-muted)", borderBottom: "1px solid var(--border)", scrollMarginTop: "var(--nav-h)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <p className="eyebrow-label eyebrow-label--slash" style={{ marginBottom: 12 }}>
              What We Deliver
            </p>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(22px,3vw,36px)", color: "var(--text)", marginBottom: 32, letterSpacing: "var(--tr-display)" }}>
              Six delivery verticals.
            </h2>
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16 }}>
            {SERVICES_VERTICALS.map((v, i) => (
              <AnimateIn key={v.name} animation="slideUp" delay={i * 0.05}>
                <div className="course-row" style={{
                  background: "var(--bg-card)", border: "1px solid var(--border-card)", borderRadius: "var(--r-md)",
                  padding: "26px 22px", display: "flex", flexDirection: "column", gap: 10, height: "100%",
                }}>
                  <div className="icon-box"><Icon name={v.icon} size={19} color="var(--accent)" /></div>
                  <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-md)", color: "var(--text)", letterSpacing: "var(--tr-heading)" }}>{v.name}</h3>
                  <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Training Directory — PPP polytechnics & ITI colleges */}
      <section id="training-directory" style={{ padding: isMobile ? "56px 6%" : "80px 5%", borderBottom: "1px solid var(--border)", scrollMarginTop: "var(--nav-h)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <div className="section-head">
              <span className="section-head__icon"><GraduationCap size={18} /></span>
              <span className="section-head__label">Training Directory</span>
            </div>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(22px,3vw,36px)", color: "var(--text)", marginBottom: 12, letterSpacing: "var(--tr-display)" }}>
              PPP-mode partnerships.
            </h2>
            <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 620, marginBottom: 28 }}>
              Expand a partnership to see the individual colleges we run under it. Open a campus for
              its own page — location, gallery and admissions — or jump straight to the college&apos;s
              official website from the card.
            </p>
          </AnimateIn>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { key: "ppp", label: "PPP-Mode Polytechnic Colleges", sub: `${POLYTECHNIC_COLLEGES.length} Government Polytechnics · Uttar Pradesh`, list: POLYTECHNIC_COLLEGES },
              { key: "iti", label: "ITI Colleges", sub: `${ITI_COLLEGES.length} Industrial Training Institutes · Jharkhand`, list: ITI_COLLEGES },
            ].map((group) => (
              <AnimateIn key={group.key} animation="slideUp">
                <div style={{
                  border: "1px solid var(--border-card)", borderRadius: "var(--r-md)", overflow: "hidden",
                  background: openDirectory === group.key ? "rgba(var(--accent-rgb),.03)" : "var(--bg-card)",
                  transition: "background .25s ease",
                }}>
                  <button
                    onClick={() => setOpenDirectory(openDirectory === group.key ? null : group.key)}
                    aria-expanded={openDirectory === group.key}
                    style={{
                      width: "100%", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between",
                      background: "transparent", border: "none", cursor: "pointer", textAlign: "left", gap: 16,
                    }}
                  >
                    <div>
                      <div style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-md)", color: "var(--text)", letterSpacing: "var(--tr-body)" }}>{group.label}</div>
                      <div style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)", letterSpacing: "var(--tr-caps)", marginTop: 4 }}>{group.sub}</div>
                    </div>
                    <ChevronDown
                      size={16}
                      color="var(--text-muted)"
                      style={{
                        transform: openDirectory === group.key ? "rotate(180deg)" : "rotate(0)",
                        transition: "transform .25s ease",
                        flexShrink: 0,
                      }}
                    />
                  </button>
                  {openDirectory === group.key && (
                    <div style={{ padding: "0 24px 22px", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 12 }}>
                      {group.list.map((col) => (
                        <CollegeDirectoryCard key={col.slug} col={col} />
                      ))}
                    </div>
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Initiatives */}
      <section id="skill-initiatives" style={{ padding: isMobile ? "64px 6%" : "96px 5%", scrollMarginTop: "var(--nav-h)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <div className="section-head">
              <span className="section-head__icon"><Zap size={18} /></span>
              <span className="section-head__label">Skill Initiatives</span>
            </div>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(24px,3.5vw,44px)", color: "var(--text)", marginBottom: 16, letterSpacing: "var(--tr-display)" }}>
              Large-scale capacity building.
            </h2>
            <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 640, marginBottom: 48 }}>
              We deliver large-scale skill training programs under government mandates and institutional frameworks, building employability at the grassroots level across India.
            </p>
          </AnimateIn>

          {/* Employment Sectors Grid */}
          <AnimateIn animation="slideUp" delay={0.1}>
            <div className="section-head">
              <span className="section-head__icon"><Users size={18} /></span>
              <span className="section-head__label">Employment-Wise Sectors</span>
            </div>
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16, marginBottom: 64 }}>
            {EMPLOYMENT_SECTORS.map((sector, i) => (
              <AnimateIn key={sector.name} animation="slideUp" delay={i * 0.06}>
                <div className="course-row" style={{
                  background: "var(--bg-card)", border: "1px solid var(--border-card)", borderRadius: "var(--r-md)",
                  padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12, height: "100%",
                }}>
                  <div className="icon-box"><Icon name={sector.icon} size={19} color="var(--accent)" /></div>
                  <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--text)", letterSpacing: "var(--tr-heading)" }}>{sector.name}</h3>
                  <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: 1.6 }}>{sector.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Emerging Technology */}
          <AnimateIn animation="slideUp">
            <div className="section-head" style={{ "--tone-rgb": "var(--green-rgb)" } as React.CSSProperties}>
              <span className="section-head__icon"><Globe size={18} /></span>
              <span className="section-head__label">Emerging Technology Programs</span>
            </div>
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16, marginBottom: 64 }}>
            {EMERGING_TECH.map((tech, i) => (
              <AnimateIn key={tech.name} animation="slideUp" delay={i * 0.06}>
                <div className="hover-lift" style={{
                  background: "linear-gradient(145deg, var(--bg-card) 0%, rgba(var(--accent-rgb),.04) 100%)",
                  border: "1px solid var(--border-card)", borderRadius: "var(--r-md)",
                  padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12, height: "100%",
                  transition: "box-shadow .3s ease",
                }}>
                  <div className="icon-box"><Icon name={tech.icon} size={19} color="var(--accent-green)" /></div>
                  <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--text)", letterSpacing: "var(--tr-heading)" }}>{tech.name}</h3>
                  <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: 1.6 }}>{tech.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* PPP & Workforce (Priyadarshan Sir's Input) */}
          <AnimateIn animation="slideUp">
            <div className="section-head">
              <span className="section-head__icon"><Landmark size={18} /></span>
              <span className="section-head__label">PPP &amp; Workforce Solutions</span>
            </div>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(22px,3vw,36px)", color: "var(--text)", marginBottom: 28, letterSpacing: "var(--tr-display)" }}>
              Public-private partnership at scale.
            </h2>
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16, marginBottom: 64 }}>
            {SERVICES_PPP.map((item, i) => (
              <AnimateIn key={item.name} animation="slideUp" delay={i * 0.06}>
                <div className="hover-lift" style={{
                  background: "linear-gradient(145deg, var(--bg-card) 0%, rgba(var(--gold-rgb),.04) 100%)",
                  border: "1px solid var(--border-card)", borderRadius: "var(--r-md)",
                  padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12, height: "100%",
                  transition: "box-shadow .3s ease",
                }}>
                  <div className="icon-box"><Icon name={item.icon} size={19} color="var(--accent)" /></div>
                  <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--text)", letterSpacing: "var(--tr-heading)" }}>{item.name}</h3>
                  <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Government Mandates — menu on the left, detail panel on the right.
              An accordion made you open five drawers to compare five mandates;
              the menu keeps every mandate legible at once and gives the
              selected one room for a real description and an image. */}
          <div id="public-sector-delivery" style={{ scrollMarginTop: "var(--nav-h)" }}>
            <AnimateIn animation="slideUp">
              <div className="section-head">
                <span className="section-head__icon"><Building2 size={18} /></span>
                <span className="section-head__label">Government Mandates &amp; Projects</span>
              </div>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(22px,3vw,36px)", color: "var(--text)", marginBottom: 14, letterSpacing: "var(--tr-display)" }}>
                Public sector delivery mandates.
              </h2>
              <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 620, marginBottom: 28 }}>
                Select a mandate to read how we deliver it on the ground.
              </p>
            </AnimateIn>

            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "minmax(230px, 290px) 1fr",
              gap: isMobile ? 16 : 24,
              alignItems: "start",
            }}>
              {/* Menu */}
              <div role="tablist" aria-orientation={isMobile ? "horizontal" : "vertical"} aria-label="Government mandates" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {GOVT_MANDATES.map((mandate, i) => {
                  const on = activeMandate === i;
                  return (
                    <button
                      key={mandate.slug}
                      role="tab"
                      aria-selected={on}
                      aria-controls="mandate-panel"
                      onClick={() => setActiveMandate(i)}
                      style={{
                        width: "100%", textAlign: "left", cursor: "pointer",
                        padding: "14px 16px", borderRadius: "var(--r-md)",
                        background: on ? "rgba(var(--accent-rgb),.06)" : "var(--bg-card)",
                        border: `1px solid ${on ? "rgba(var(--accent-rgb),.35)" : "var(--border-card)"}`,
                        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10,
                        transition: "background .2s ease, border-color .2s ease",
                      }}
                    >
                      <span style={{ minWidth: 0 }}>
                        <span style={{ display: "block", fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-md)", color: on ? "var(--accent)" : "var(--text)", letterSpacing: "var(--tr-body)" }}>
                          {mandate.name}
                        </span>
                        <span style={{ display: "block", fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)", letterSpacing: "var(--tr-caps)", marginTop: 3, lineHeight: 1.45 }}>
                          {mandate.fullName}
                        </span>
                      </span>
                      <ChevronRight
                        size={15}
                        color={on ? "var(--accent)" : "var(--text-faint)"}
                        style={{ flexShrink: 0, transition: "color .2s ease" }}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Detail panel */}
              <div
                id="mandate-panel"
                role="tabpanel"
                style={{
                  background: "var(--bg-card)", border: "1px solid var(--border-card)",
                  borderRadius: "var(--r-md)", overflow: "hidden",
                }}
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: isMobile ? "16/10" : "21/9", background: "var(--bg-muted)" }}>
                  <CampusImage
                    src={GOVT_MANDATES[activeMandate].image}
                    alt={GOVT_MANDATES[activeMandate].name}
                    caption={GOVT_MANDATES[activeMandate].name}
                  />
                </div>
                <div style={{ padding: isMobile ? "22px 20px 24px" : "28px 28px 30px" }}>
                  <p style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)", letterSpacing: "var(--tr-caps)", textTransform: "uppercase", marginBottom: 8 }}>
                    {GOVT_MANDATES[activeMandate].fullName}
                  </p>
                  <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-xl)", color: "var(--text)", letterSpacing: "var(--tr-heading)", marginBottom: 14 }}>
                    {GOVT_MANDATES[activeMandate].name}
                  </h3>
                  <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "var(--text-muted)", lineHeight: 1.8 }}>
                    {GOVT_MANDATES[activeMandate].longDesc}
                  </p>

                  {GOVT_MANDATES[activeMandate].hasDistrictSheet && (
                    <SamagraShikshaSheet isMobile={isMobile} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWA />
    </div>
  );
}
