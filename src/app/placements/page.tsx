"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe, Mail, Phone, Briefcase, UserRound, X, CheckCircle2, Factory, Truck, HeartPulse, Shirt, type LucideIcon } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import EmployerMark from "@/components/EmployerMark";
import { TESTIMONIALS, RECRUITER_SECTORS, CONTACT_CHANNELS, COUNSELING_COURSE_OPTIONS } from "@/data/content";
import { EMPLOYER_LOGOS, LOGO_INVERT_SET } from "@/data/assets";
import { useInView, useCountUp } from "@/hooks/useAnimations";
import { useLang } from "@/context/LangContext";
import useIsMobile from "@/hooks/useIsMobile";
import Icon from "@/components/Icon";

// Keyed by RECRUITER_SECTORS[].sector — the sector name is the only thing the
// content layer knows, and an icon is presentation.
const SECTOR_ICONS: Record<string, LucideIcon> = {
  "Automotive & Manufacturing": Factory,
  "Logistics & E-Commerce": Truck,
  "Healthcare Ecosystems": HeartPulse,
  "Apparel & Textiles": Shirt,
};

const PLACEMENT_STATS = [
  { val: 45000, sfx: "+", lbl: "Total Students Placed" },
  { val: 6000, sfx: "+", lbl: "Annual Jobs Secured" },
  { val: 3, sfx: ".5L", lbl: "Median CTC (LPA)" },
  { val: 50, sfx: "+", lbl: "Hiring Partners" },
];

function PlacementStat({ val, sfx, lbl, go }: { val: number; sfx: string; lbl: string; go: boolean }) {
  const count = useCountUp(val, val > 1000 ? 2200 : 1600, go);
  const display = count >= 1000 ? (count / 1000).toFixed(count % 1000 === 0 ? 0 : 1) + "K" : String(count);
  return (
    <div style={{ textAlign: "center", padding: "36px 0" }}>
      <div style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "clamp(40px,5vw,64px)", color: "var(--text)", letterSpacing: "var(--tr-display)" }}>{display}{sfx}</div>
      <div style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: "var(--text-xs)", letterSpacing: "var(--tr-mono)", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 8 }}>{lbl}</div>
    </div>
  );
}

// Two separate recruiter enquiry routes:
//   post-a-job  → Placement Cell (Shubham)
//   apply       → HR Department screening (Aryan)
type JobModalKind = "post" | "apply";

const JOB_MODALS: Record<JobModalKind, {
  title: string;
  intro: string;
  desk: string;
  person: string;
  email: string;
  submitLabel: string;
  successTitle: string;
  successBody: string;
}> = {
  post: {
    title: "Post a Job Opening",
    intro: "Share your hiring requirement and our Placement Cell will match pre-screened candidates from our latest batches.",
    desk: "Placement Cell",
    person: "Shubham",
    email: "PM@venturecad.co.in",
    submitLabel: "Send to Placement Cell",
    successTitle: "Requirement received.",
    successBody: "Our Placement Cell will get in touch to confirm the role details and share matching batch profiles.",
  },
  apply: {
    title: "Apply for Jobs",
    intro: "Submit your details for HR screening. Shortlisted candidates are called for the next hiring drive.",
    desk: "HR Department",
    person: "Aryan · HR Manager",
    email: "HR@venturecad.co.in",
    submitLabel: "Submit for HR Screening",
    successTitle: "Application received.",
    successBody: "Our HR Department will screen your profile and reach out about upcoming openings that fit.",
  },
};

function JobModal({ kind, onClose }: { kind: JobModalKind; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLang();
  const cfg = JOB_MODALS[kind];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={cfg.title}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(1,1,1,.75)", backdropFilter: "blur(10px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 20,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative", maxWidth: 540, width: "100%",
          background: "var(--bg-card)", borderRadius: "var(--r-lg)",
          padding: 32, border: "1px solid var(--border-strong)",
          boxShadow: "var(--shadow-lg)", maxHeight: "90vh", overflowY: "auto",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute", top: 20, right: 20,
            background: "transparent", border: "none", color: "var(--text-muted)", cursor: "pointer",
          }}
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "30px 10px" }}>
            <div style={{
              width: 56, height: 56, borderRadius: "50%",
              background: "rgba(var(--wa-rgb), .15)", color: "var(--wa-green)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 16px",
            }}>
              <CheckCircle2 size={32} />
            </div>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>
              {cfg.successTitle}
            </h3>
            <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "var(--text-muted)", lineHeight: 1.6 }}>
              {cfg.successBody}
            </p>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              {kind === "post" ? <Briefcase size={20} color="var(--accent)" /> : <UserRound size={20} color="var(--accent)" />}
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--text)" }}>
                {cfg.title}
              </h3>
            </div>
            <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", marginBottom: 16, lineHeight: 1.6 }}>
              {cfg.intro}
            </p>

            {/* Routing note — makes the destination desk explicit */}
            <div style={{
              display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap",
              padding: "10px 14px", borderRadius: "var(--r-md)", marginBottom: 22,
              background: "rgba(var(--accent-rgb),.06)", border: "1px solid rgba(var(--accent-rgb),.18)",
            }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", letterSpacing: "var(--tr-mono)", textTransform: "uppercase", color: "var(--accent)", fontWeight: 500 }}>
                Goes to {cfg.desk}
              </span>
              <span style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
                {cfg.person}
              </span>
              <a href={`mailto:${cfg.email}`} style={{ fontFamily: "var(--mono)", fontSize: "var(--text-sm)", color: "var(--accent)", marginLeft: "auto" }}>
                {cfg.email}
              </a>
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              style={{ display: "flex", flexDirection: "column", gap: 14 }}
            >
              <div>
                <label style={{ fontFamily: "var(--sans)", fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 4 }}>
                  {kind === "post" ? "Company Name *" : "Full Name *"}
                </label>
                <input required type="text" className="input-field" placeholder={kind === "post" ? "e.g. Acme Manufacturing" : "Your name"} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <label style={{ fontFamily: "var(--sans)", fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 4 }}>
                    {kind === "post" ? "Contact Person *" : "Phone Number *"}
                  </label>
                  <input required type={kind === "post" ? "text" : "tel"} className="input-field" placeholder={kind === "post" ? "Your name" : "+91 98765 43210"} />
                </div>
                <div>
                  <label style={{ fontFamily: "var(--sans)", fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 4 }}>
                    Email *
                  </label>
                  <input required type="email" className="input-field" placeholder={kind === "post" ? "hr@company.com" : "you@email.com"} />
                </div>
              </div>

              {kind === "post" ? (
                <>
                  <div>
                    <label style={{ fontFamily: "var(--sans)", fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 4 }}>
                      Role / Trade Required
                    </label>
                    <input type="text" className="input-field" placeholder="e.g. CAD Draftsman, Sewing Machine Operator" />
                  </div>
                  <div>
                    <label style={{ fontFamily: "var(--sans)", fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 4 }}>
                      Number of Openings
                    </label>
                    <input type="text" className="input-field" placeholder="e.g. 25" />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label style={{ fontFamily: "var(--sans)", fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 4 }}>
                      Course Completed
                    </label>
                    <select className="input-field" style={{ cursor: "pointer" }} defaultValue="">
                      <option value="" disabled>Select your programme</option>
                      {COUNSELING_COURSE_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>{t(o.key)}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily: "var(--sans)", fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 4 }}>
                      Preferred Job Location
                    </label>
                    <input type="text" className="input-field" placeholder="e.g. Ranchi, Pune, anywhere in India" />
                  </div>
                </>
              )}

              <button type="submit" className="btn-primary" style={{ marginTop: 8, padding: 14 }}>
                {cfg.submitLabel}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function PlacementsPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [jobModal, setJobModal] = useState<JobModalKind | null>(null);
  const [testIdx, setTestIdx] = useState(0);
  const [sRef, sVis] = useInView();
  const { t: tr } = useLang();
  const isMobile = useIsMobile(900);

  useEffect(() => {
    const timer = setInterval(() => setTestIdx(i => (i + 1) % TESTIMONIALS.length), 7000);
    return () => clearInterval(timer);
  }, []);

  const t = TESTIMONIALS[testIdx];

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar formOpen={formOpen} setFormOpen={setFormOpen} />

      {/* Hero */}
      <section className="inner-hero-warm">
        <AnimateIn animation="slideUp">
          <p className="eyebrow">{tr("placementsEyebrow")}</p>
          <h1>{tr("placementsTitle1")}<br /><em>{tr("placementsTitle2")}</em></h1>
          <p className="lead">{tr("placementsHeroDesc")}</p>
        </AnimateIn>
      </section>

      {/* Placement Drive Banner */}
      <section style={{ height: isMobile ? 240 : 360, position: "relative", overflow: "hidden" }}>
        <Image
          src="/images/placements-drive.png"
          alt="VSI Campus Placement Drive — connecting students with top recruiters"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--surface) 0%, transparent 40%)" }} />
        <div style={{
          position: "absolute", bottom: 20, left: "5%",
          fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "rgba(248,247,244,.5)",
          letterSpacing: "var(--tr-mono)", textTransform: "uppercase",
        }}>
          Campus Placement Drive · Annual Recruitment Fair
        </div>
      </section>

      {/* Stats */}
      <section ref={sRef} style={{ borderBottom: "1px solid var(--border)" }}>
        <div data-stack="2" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)" }}>
          {PLACEMENT_STATS.map((s, i) => <PlacementStat key={i} val={s.val} sfx={s.sfx} lbl={s.lbl} go={sVis} />)}
        </div>
      </section>

      {/* ── Recruiter wall — by sector ──
          Rebuilt from a 4-up grid whose cells were hairline gaps over a grey
          plate. Two things were wrong with it. Every sector holds five
          companies, so the fifth wrapped alone and the plate showed through
          the three empty cells as a large grey slab — the loudest shape in
          the section was a hole. And the logos were dropped into equal boxes
          on `contain`, which sizes the FILE: tightly-cropped SVGs filled
          their box while wordmarks padded onto a 16:9 canvas rendered at a
          fifth the size, so the wall read as a jumble.
          Now: five self-contained tiles to a row (a sector per row, exactly),
          nothing behind them to show through, and each mark sized off its own
          measured artwork via <EmployerMark>. */}
      <section style={{ padding: isMobile ? "64px 6%" : "96px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <p className="eyebrow-label eyebrow-label--slash" style={{ marginBottom: 10 }}>Top Corporate Recruiters</p>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(24px,3vw,42px)", color: "var(--text)", marginBottom: 14 }}>Where our alumni work.</h2>
            <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 620, marginBottom: 56 }}>
              Hiring partners who return to our batches season after season, grouped by the sector they recruit into.
            </p>
          </AnimateIn>

          {RECRUITER_SECTORS.map((sector, si) => (
            <div key={sector.sector} style={{ marginBottom: isMobile ? 40 : 56 }}>
              <AnimateIn animation="slideUp" delay={si * 0.06}>
                <div className="section-head">
                  <span className="section-head__icon">
                    {(() => {
                      const SectorIcon = SECTOR_ICONS[sector.sector] ?? Briefcase;
                      return <SectorIcon size={18} />;
                    })()}
                  </span>
                  <span className="section-head__label">{sector.sector}</span>
                  <span className="section-head__count">{sector.companies.length} partners</span>
                </div>
              </AnimateIn>

              <div
                className="logo-wall"
                style={{ gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fill, minmax(190px, 1fr))" }}
              >
                {sector.companies.map((company, ci) => (
                  <AnimateIn key={company} animation="scaleIn" delay={ci * 0.04}>
                    <div
                      className={`logo-wall__tile employer-tile${LOGO_INVERT_SET.has(company) ? " logo-invert" : ""}`}
                      title={company}
                    >
                      {EMPLOYER_LOGOS[company] ? (
                        <EmployerMark name={company} />
                      ) : (
                        <span style={{ fontFamily: "var(--sans)", fontWeight: 700, fontSize: "var(--text-sm)", color: "var(--text)", letterSpacing: "var(--tr-caps)", textAlign: "center" }}>{company}</span>
                      )}
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* International Placement Banner */}
      <section style={{
        background: "linear-gradient(135deg, var(--ink) 0%, #0d1b2a 100%)", padding: isMobile ? "64px 6%" : "80px 5%",
        borderTop: "1px solid rgba(var(--accent-rgb),.1)",
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "center", gap: 40 }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <Globe size={18} color="rgba(var(--gold-rgb),.7)" />
                  <p className="eyebrow-label eyebrow-label--slash eyebrow-label--on-dark">
                    International Placement
                  </p>
                </div>
                <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(22px,3vw,36px)", color: "var(--text-inv)", marginBottom: 14, letterSpacing: "var(--tr-display)", lineHeight: 1.15 }}>
                  Global Mobility Corridors
                </h2>
                <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "rgba(248,247,244,.45)", lineHeight: 1.75, marginBottom: 24 }}>
                  Active Middle East employment drives in Dubai and Riyadh. German International Exchange Program for European healthcare sector deployment.
                </p>
                <Link href="/work-abroad" style={{ textDecoration: "none" }}>
                  <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    Explore Work Abroad <ArrowUpRight size={13} />
                  </button>
                </Link>
              </div>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                {["🇦🇪 Dubai", "🇸🇦 Riyadh", "🇩🇪 Germany"].map((loc) => (
                  <div key={loc} style={{
                    padding: "14px 20px", borderRadius: "var(--r-md)",
                    background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)",
                    fontFamily: "var(--sans)", fontSize: "var(--text-base)", fontWeight: 600, color: "rgba(248,247,244,.7)",
                  }}>{loc}</div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: "var(--ink)", padding: "96px 5%" }}>
        <AnimateIn animation="slideUp">
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p className="eyebrow-label eyebrow-label--slash eyebrow-label--on-dark" style={{ marginBottom: 24 }}>Student Stories</p>
            <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "var(--text-3xl)", lineHeight: 1, color: "rgba(248,247,244,.12)", marginBottom: -8 }}>❝</div>
            <div key={testIdx} style={{ animation: "fadeIn .5s ease forwards" }}>
              <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "clamp(20px,2.5vw,32px)", lineHeight: 1.5, color: "var(--text-inv)", marginBottom: 32, minHeight: 120 }}>{t.q}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--ink-soft)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-base)", color: "var(--text-inv)" }}>
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--sans)", fontWeight: 700, fontSize: "var(--text-sm)", color: "var(--text-inv)", textTransform: "uppercase", letterSpacing: "var(--tr-caps)" }}>{t.name}</div>
                  <div style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "rgba(248,247,244,.4)", marginTop: 2 }}>{t.course} · {t.from} → {t.placed}</div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 6, marginTop: 28 }}>
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setTestIdx(i)} style={{ width: testIdx === i ? 24 : 8, height: 3, background: testIdx === i ? "var(--text-inv)" : "rgba(248,247,244,.2)", border: "none", borderRadius: "var(--r-sm)", cursor: "pointer", transition: "all .3s" }} />
              ))}
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* Placement Team Contact */}
      <section style={{ padding: isMobile ? "64px 6%" : "96px 5%", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <p className="eyebrow-label eyebrow-label--slash" style={{ marginBottom: 10 }}>Hire Our Talent</p>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(24px,3vw,42px)", color: "var(--text)", marginBottom: 16, letterSpacing: "var(--tr-display)" }}>Talk to our placement team.</h2>
            <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 620, marginBottom: 40 }}>
              Recruiting for a role, running a hiring drive, or want a batch profile? Our Placement Cell and HR Department respond within one working day.
            </p>
          </AnimateIn>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 16 }}>
            {CONTACT_CHANNELS.slice(0, 2).map((ch, i) => (
              <AnimateIn key={ch.dept} animation="slideUp" delay={i * 0.08}>
                <div className="hover-lift" style={{
                  background: "var(--bg-card)", border: "1px solid var(--border-card)", borderRadius: "var(--r-md)",
                  padding: "30px 26px", display: "flex", flexDirection: "column", gap: 14, height: "100%",
                  transition: "box-shadow .3s ease",
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "var(--r-md)",
                    background: "linear-gradient(135deg, rgba(var(--accent-rgb),.15), rgba(var(--gold-rgb),.1))",
                    border: "1px solid rgba(var(--accent-rgb),.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon name={ch.icon} size={20} color="var(--accent)" />
                  </div>
                  <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--text)", letterSpacing: "var(--tr-heading)" }}>{ch.dept}</h3>
                  {ch.person && (
                    <div style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "var(--text-muted)", marginTop: -6 }}>{ch.person}</div>
                  )}
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 2 }}>
                    <a href={`mailto:${ch.email}`} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--mono)", fontSize: "var(--text-sm)", color: "var(--accent)", textDecoration: "none" }}>
                      <Mail size={14} /> {ch.email}
                    </a>
                    <a href={`tel:${ch.phone.replace(/\s/g, "")}`} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--mono)", fontSize: "var(--text-sm)", color: "var(--text-muted)", textDecoration: "none" }}>
                      <Phone size={14} /> {ch.phone}
                    </a>
                  </div>
                </div>
              </AnimateIn>
            ))}

            {/* Recruiter & candidate entry points — each routes to its own desk */}
            {([
              { kind: "post" as const, title: "Post a Job Opening", desc: "Share your requirement and our Placement Cell will match pre-screened, job-ready candidates from our latest batches.", icon: Briefcase, desk: "Placement Cell" },
              { kind: "apply" as const, title: "Apply for Jobs", desc: "Submit your profile for HR screening and get called for upcoming hiring drives with our partner employers.", icon: UserRound, desk: "HR Department" },
            ]).map((card, i) => {
              const Icon = card.icon;
              return (
                <AnimateIn key={card.kind} animation="slideUp" delay={0.16 + i * 0.06}>
                  <button
                    onClick={() => setJobModal(card.kind)}
                    className="hover-lift"
                    style={{
                      background: "linear-gradient(145deg, var(--ink) 0%, #0d1b2a 100%)", borderRadius: "var(--r-md)",
                      padding: "30px 26px", display: "flex", flexDirection: "column", gap: 14, height: "100%",
                      border: "1px solid rgba(var(--accent-rgb),.15)", transition: "box-shadow .3s ease",
                      textAlign: "left", cursor: "pointer", width: "100%", font: "inherit",
                    }}
                  >
                    <div style={{
                      width: 44, height: 44, borderRadius: "var(--r-md)",
                      background: "rgba(var(--gold-rgb),.12)", border: "1px solid rgba(var(--gold-rgb),.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon size={20} color="rgba(var(--gold-rgb),.9)" />
                    </div>
                    <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-lg)", color: "var(--text-inv)", letterSpacing: "var(--tr-heading)" }}>{card.title}</h3>
                    <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "rgba(248,247,244,.5)", lineHeight: 1.65, flex: 1 }}>
                      {card.desc}
                    </p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--sans)", fontWeight: 700, fontSize: "var(--text-sm)", letterSpacing: "var(--tr-caps)", textTransform: "uppercase", color: "rgba(var(--gold-rgb),.9)" }}>
                      Get Started <ArrowUpRight size={14} />
                    </span>
                  </button>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {jobModal && <JobModal kind={jobModal} onClose={() => setJobModal(null)} />}

      <Footer />
      <FloatingWA />
    </div>
  );
}
