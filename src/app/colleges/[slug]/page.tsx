"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, MapPin, ExternalLink, Building2, ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import AnimateIn from "@/components/AnimateIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import CampusImage from "@/components/CampusImage";
import useIsMobile from "@/hooks/useIsMobile";
import { getCollege, ALL_COLLEGES } from "@/data/content";

export default function CollegeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const college = getCollege(slug);
  const [formOpen, setFormOpen] = useState(false);
  const isMobile = useIsMobile(900);

  if (!college) {
    notFound();
  }

  const others = ALL_COLLEGES.filter((c) => c.slug !== college.slug);

  const facts = [
    { label: "Institution type", value: college.type === "ITI" ? "Industrial Training Institute" : "Government Polytechnic" },
    { label: "District", value: college.district },
    { label: "State", value: college.state },
    { label: "Operating model", value: college.type === "ITI" ? "Venture Skill India" : "PPP mode" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar formOpen={formOpen} setFormOpen={setFormOpen} />

      {/* ── Hero ── */}
      <section style={{ background: "var(--bg-dark)", position: "relative", overflow: "hidden" }}>
        {!isMobile && (
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <CampusImage src={college.image} alt={college.name} />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(90deg, var(--bg-dark) 0%, var(--bg-dark) 38%, rgba(13,27,42,.85) 55%, rgba(13,27,42,.45) 75%, rgba(13,27,42,.25) 100%)",
              pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, var(--bg-dark) 0%, transparent 30%)",
              pointerEvents: "none",
            }} />
          </div>
        )}

        <div style={{ maxWidth: 1180, margin: "0 auto", padding: isMobile ? "28px 6% 44px" : "36px 5% 64px", position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", marginBottom: 24 }}>
            <Link href="/services" style={{ textDecoration: "none", fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "rgba(253,252,249,.55)", letterSpacing: "var(--tr-caps)" }}>
              Services
            </Link>
            <ChevronRight size={12} color="rgba(253,252,249,.35)" />
            <span style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "rgba(253,252,249,.55)", letterSpacing: "var(--tr-caps)" }}>
              Training Directory
            </span>
            <ChevronRight size={12} color="rgba(253,252,249,.35)" />
            <span style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "var(--accent-gold)", letterSpacing: "var(--tr-caps)" }}>
              {college.district}
            </span>
          </nav>

          <span style={{
            display: "inline-block", background: "rgba(var(--accent-rgb),.16)", border: "1px solid rgba(var(--accent-rgb),.4)",
            color: "var(--accent-gold)", fontFamily: "var(--mono)", fontSize: "var(--text-xs)", letterSpacing: "var(--tr-mono)",
            textTransform: "uppercase", padding: "5px 11px", borderRadius: "var(--r-sm)", marginBottom: 16,
          }}>
            {college.type === "ITI" ? "ITI College" : "PPP-Mode Polytechnic"}
          </span>

          <h1 style={{
            fontFamily: "var(--serif)", fontWeight: 700, color: "var(--text-inv)",
            fontSize: isMobile ? "clamp(26px,7vw,34px)" : "clamp(32px,4vw,52px)",
            lineHeight: 1.15, letterSpacing: "var(--tr-display)", maxWidth: 720, marginBottom: 14,
          }}>
            {college.name}
          </h1>

          {college.aka && (
            <p style={{ fontFamily: "var(--body)", fontStyle: "italic", fontSize: "var(--text-base)", color: "rgba(253,252,249,.6)", marginBottom: 12 }}>
              Also referred to as {college.aka}
            </p>
          )}

          <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "rgba(253,252,249,.72)", lineHeight: 1.75, maxWidth: 560, marginBottom: 24 }}>
            {college.blurb}
          </p>

          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--mono)", fontSize: "var(--text-sm)", color: "rgba(253,252,249,.55)", letterSpacing: "var(--tr-caps)", marginBottom: 28 }}>
            <MapPin size={13} strokeWidth={1.8} /> {college.district} district, {college.state}
          </span>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <button className="btn-primary">Admission enquiry</button>
            </Link>
            {/* Only rendered once the official URL is filled in on the data
                record — an empty `website` leaves this page as the destination. */}
            {college.website && (
              <a href={college.website} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <button className="btn-secondary-on-dark" style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
                  Official college website <ExternalLink size={13} />
                </button>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── At a glance ── */}
      <section style={{ padding: isMobile ? "44px 6%" : "56px 5%", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: isMobile ? 18 : 24 }}>
          {facts.map((f) => (
            <div key={f.label}>
              <p style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", letterSpacing: "var(--tr-mono)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 8 }}>
                {f.label}
              </p>
              <p style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-md)", color: "var(--text)", lineHeight: 1.35 }}>
                {f.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Campus gallery ── */}
      <section style={{ padding: isMobile ? "56px 6%" : "72px 5%", background: "var(--bg-muted)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <div className="section-head">
              <span className="section-head__icon"><Building2 size={18} /></span>
              <span className="section-head__label">Campus Gallery</span>
            </div>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(22px,3vw,36px)", color: "var(--text)", marginBottom: 28, letterSpacing: "var(--tr-display)" }}>
              Inside the campus.
            </h2>
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: isMobile ? 14 : 18 }}>
            {college.gallery.map((src, i) => (
              <AnimateIn key={src} animation="slideUp" delay={i * 0.05}>
                <div style={{
                  position: "relative", aspectRatio: "16/10", borderRadius: "var(--r-md)",
                  overflow: "hidden", border: "1px solid var(--border)", background: "var(--bg-muted)",
                }}>
                  <CampusImage src={src} alt={`${college.name} — photo ${i + 1}`} caption={`Photo ${i + 1}`} />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programmes ── */}
      <section style={{ padding: isMobile ? "56px 6%" : "72px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <p className="eyebrow-label" style={{ marginBottom: 10 }}>Programmes</p>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: isMobile ? "clamp(22px,6.5vw,30px)" : "clamp(24px,3vw,40px)", color: "var(--text)", marginBottom: 12 }}>
              What you can study here.
            </h2>
            <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-base)", color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 620, marginBottom: 24 }}>
              The programme list for this campus is being finalised. Speak directly with our admissions office or a counsellor about active trades, seats, and course schedules at{" "}
              {college.district}.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href="https://wa.me/919431103263" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <button className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><WhatsAppIcon size={15} /> Ask on WhatsApp</button>
              </a>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <button className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>Contact Admissions</button>
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Other campuses ── */}
      <section style={{ padding: isMobile ? "56px 6%" : "72px 5%", background: "var(--bg-muted)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p className="eyebrow-label" style={{ marginBottom: 10 }}>Training Directory</p>
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: isMobile ? "clamp(20px,6vw,26px)" : "clamp(22px,2.6vw,34px)", color: "var(--text)", marginBottom: 26 }}>
            Our other campuses.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)", gap: isMobile ? 12 : 16 }}>
            {others.map((c) => (
              <Link key={c.slug} href={`/colleges/${c.slug}`} style={{ textDecoration: "none", height: "100%" }}>
                <article className="hover-lift" style={{
                  background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--r-md)",
                  overflow: "hidden", display: "flex", flexDirection: "column", height: "100%",
                }}>
                  <div style={{ position: "relative", aspectRatio: "16/9", background: "var(--bg-muted)" }}>
                    <CampusImage src={c.image} alt={c.name} />
                  </div>
                  <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
                    <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "var(--text-base)", color: "var(--text)", lineHeight: 1.35 }}>
                      {c.name}
                    </h3>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)", letterSpacing: "var(--tr-caps)", marginTop: "auto", paddingTop: 4 }}>
                      <MapPin size={10} strokeWidth={1.8} /> {c.district}, {c.state}
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWA />
    </div>
  );
}
