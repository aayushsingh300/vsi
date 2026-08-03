"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowUpRight,
  HeartHandshake,
  CheckCircle2,
  Award,
  Users,
  MapPin,
  Calendar,
  X,
  Maximize2,
  Sparkles,
  Building2,
  FileText,
  Mail,
  Phone,
  User
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import {
  CSR_PARTNERS,
  CSR_ACTIVITIES,
  CSR_GALLERY,
  CSR_IMPACT_STATS,
  CSR_SECTION135_STEPS,
  CSR_TESTIMONIALS,
  ACCREDITATIONS
} from "@/data/content";
import { useLang } from "@/context/LangContext";
import useIsMobile from "@/hooks/useIsMobile";

// Gallery Item Interface
interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  location: string;
  category: string;
  date: string;
  img: string;
}

export default function CSRPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);
  const [csrProposalModalOpen, setCsrProposalModalOpen] = useState(false);

  // Proposal form state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    sectorInterest: "EV & Green Mobility",
    budgetRange: "₹10L - ₹25L",
    notes: "",
  });

  const { t } = useLang();
  const isMobile = useIsMobile(900);

  // Filter gallery items
  const filteredGallery = selectedCategory === "all"
    ? CSR_GALLERY
    : CSR_GALLERY.filter((item) => item.category === selectedCategory);

  const categories = [
    { key: "all", label: "All Impacts" },
    { key: "rural", label: "Rural Camps" },
    { key: "women", label: "Women Empowerment" },
    { key: "ev", label: "EV & Tech" },
    { key: "cert", label: "Certifications" },
    { key: "community", label: "Community Outreach" },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setCsrProposalModalOpen(false);
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        sectorInterest: "EV & Green Mobility",
        budgetRange: "₹10L - ₹25L",
        notes: "",
      });
    }, 2500);
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar formOpen={formOpen} setFormOpen={setFormOpen} />

      {/* ── Editorial Hero ── */}
      <section style={{
        position: "relative",
        padding: isMobile ? "96px 6% 64px" : "130px 5% 96px",
        background: "linear-gradient(180deg, rgba(var(--accent-rgb), .06) 0%, var(--bg) 100%)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden"
      }}>
        {/* Subtle decorative glow orb */}
        <div style={{
          position: "absolute", top: "-10%", right: "5%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(var(--accent-rgb), .12) 0%, transparent 70%)",
          filter: "blur(60px)", pointerEvents: "none"
        }} />

        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr",
            gap: isMobile ? 40 : 56,
            alignItems: "center"
          }}>
            {/* Hero Left Content */}
            <AnimateIn animation="slideUp">
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 999, background: "rgba(var(--accent-rgb), .1)", border: "1px solid rgba(var(--accent-rgb), .2)", marginBottom: 20 }}>
                <ShieldCheck size={14} color="var(--accent)" />
                <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600 }}>
                  Companies Act, 2013 · Section 8 Compliant
                </span>
              </div>

              <p style={{
                fontFamily: "var(--sans)",
                fontWeight: 700,
                fontSize: "clamp(13px, 1.4vw, 15px)",
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "var(--accent-orange)",
                marginBottom: 12,
              }}>
                Venture Sewa Foundation
              </p>

              <h1 style={{
                fontFamily: "var(--serif)",
                fontWeight: 700,
                fontSize: "clamp(32px, 4.5vw, 56px)",
                color: "var(--text)",
                lineHeight: 1.12,
                letterSpacing: "-.03em",
                marginBottom: 20
              }}>
                Empowering India&apos;s Workforce.<br />
                <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 400 }}>One Community at a Time.</em>
              </h1>

              <p style={{
                fontFamily: "var(--body)",
                fontSize: "clamp(15px, 1.2vw, 18px)",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                marginBottom: 32,
                maxWidth: 580
              }}>
                Venture Sewa Foundation is the body under which we carry out all our CSR activities. We channel corporate CSR investments into Section 8-compliant, high-impact skill development — equipping rural youth, women, and underserved talent with verifiable, job-ready credentials.
              </p>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                <button
                  onClick={() => setCsrProposalModalOpen(true)}
                  className="btn-primary"
                  style={{ display: "flex", alignItems: "center", gap: 8, padding: "16px 32px" }}
                >
                  Partner on CSR <ArrowUpRight size={16} />
                </button>
                <a
                  href="#compliance-section"
                  className="btn-secondary"
                  style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 28px" }}
                >
                  Compliance Framework
                </a>
              </div>
            </AnimateIn>

            {/* Hero Right Visual — Real Candid Photography */}
            <AnimateIn animation="scaleIn" delay={0.15}>
              <div style={{ position: "relative" }}>
                <div style={{
                  position: "relative",
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "var(--shadow-lg)",
                  border: "1px solid var(--border-card)",
                  aspectRatio: "4/3",
                  background: "var(--bg-card)"
                }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/csr/hero-csr.jpg"
                    alt="Real Candid Skill Training Workshop"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(1,1,1,.75) 0%, transparent 60%)"
                  }} />

                  <div style={{ position: "absolute", bottom: 20, left: 20, right: 20, color: "#fff" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                      <MapPin size={13} color="var(--accent)" />
                      <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(255,255,255,.8)" }}>
                        Santhal Pargana & Ranchi Hubs
                      </span>
                    </div>
                    <div style={{ fontFamily: "var(--serif)", fontSize: 16, fontWeight: 700 }}>
                      Candid Skill Mobilization & Hands-on Lab
                    </div>
                  </div>
                </div>

                {/* Floating Stat Chip */}
                <div style={{
                  position: "absolute",
                  top: isMobile ? -16 : -20,
                  right: isMobile ? 10 : -20,
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-strong)",
                  borderRadius: 14,
                  padding: "12px 18px",
                  boxShadow: "var(--shadow-md)",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  backdropFilter: "blur(12px)"
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: "linear-gradient(135deg, rgba(var(--accent-rgb),.15), rgba(var(--wa-rgb),.15))",
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <CheckCircle2 size={20} color="var(--accent)" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--sans)", fontWeight: 800, fontSize: 18, color: "var(--text)" }}>15,000+</div>
                    <div style={{ fontFamily: "var(--body)", fontSize: 11, color: "var(--text-muted)", fontWeight: 500 }}>Rural Trainees Skilled</div>
                  </div>
                </div>

                {/* Floating Placement Rate Badge */}
                <div style={{
                  position: "absolute",
                  bottom: -16,
                  left: isMobile ? 10 : -20,
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-strong)",
                  borderRadius: 14,
                  padding: "12px 18px",
                  boxShadow: "var(--shadow-md)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10
                }}>
                  <Award size={20} color="var(--accent-orange)" />
                  <div>
                    <div style={{ fontFamily: "var(--sans)", fontWeight: 800, fontSize: 16, color: "var(--text)" }}>85% Placement</div>
                    <div style={{ fontFamily: "var(--body)", fontSize: 10, color: "var(--text-muted)" }}>Verified Corporate Hiring</div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Impact Metrics Strip ── */}
      <section style={{ padding: "40px 5%", background: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            gap: 24
          }}>
            {CSR_IMPACT_STATS.map((stat, i) => (
              <AnimateIn key={stat.label} animation="slideUp" delay={i * 0.05}>
                <div style={{
                  padding: "20px 22px",
                  borderRadius: 12,
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  height: "100%"
                }}>
                  <div style={{ fontFamily: "var(--sans)", fontWeight: 800, fontSize: "clamp(24px, 2.5vw, 34px)", color: "var(--accent)", marginBottom: 4 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontFamily: "var(--sans)", fontWeight: 700, fontSize: 14, color: "var(--text)", marginBottom: 2 }}>
                    {stat.label}
                  </div>
                  <div style={{ fontFamily: "var(--body)", fontSize: 11, color: "var(--text-muted)", lineHeight: 1.4 }}>
                    {stat.sub}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 8 Strategic Compliance Pipeline ── */}
      <section id="compliance-section" style={{ padding: isMobile ? "64px 6%" : "96px 5%", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <ShieldCheck size={18} color="var(--accent)" />
              <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".15em", color: "var(--accent)", textTransform: "uppercase", fontWeight: 600 }}>
                Regulatory & Operational Compliance
              </span>
            </div>

            <h2 style={{
              fontFamily: "var(--serif)",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "clamp(26px, 3.5vw, 44px)",
              color: "var(--text)",
              marginBottom: 16,
              letterSpacing: "-.03em"
            }}>
              Section 8 Compliance Pipeline.
            </h2>
            <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 640, marginBottom: 48 }}>
              Every CSR initiative deployed with Venture Skill follows a transparent 5-step execution blueprint — ensuring audit-ready reporting, GST alignment, and measurable social ROI.
            </p>
          </AnimateIn>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(5, 1fr)",
            gap: 16
          }}>
            {CSR_SECTION135_STEPS.map((step, i) => (
              <AnimateIn key={step.step} animation="slideUp" delay={i * 0.06}>
                <div style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  borderRadius: 12,
                  padding: "24px 20px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative"
                }}>
                  <div style={{
                    fontFamily: "var(--mono)",
                    fontWeight: 700,
                    fontSize: 22,
                    color: "rgba(var(--accent-rgb), .35)",
                    marginBottom: 12
                  }}>
                    {step.step}
                  </div>
                  <h3 style={{ fontFamily: "var(--sans)", fontWeight: 700, fontSize: 15, color: "var(--text)", marginBottom: 8, lineHeight: 1.3 }}>
                    {step.title}
                  </h3>
                  <p style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6, flexGrow: 1 }}>
                    {step.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Corporate Alliance Showcase ── */}
      <section style={{ padding: isMobile ? "64px 6%" : "96px 5%", background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <HeartHandshake size={18} color="var(--accent)" />
              <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".15em", color: "var(--accent)", textTransform: "uppercase", fontWeight: 600 }}>
                Corporate Alliances
              </span>
            </div>

            <h2 style={{
              fontFamily: "var(--serif)",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "clamp(26px, 3.5vw, 44px)",
              color: "var(--text)",
              marginBottom: 16,
              letterSpacing: "-.03em"
            }}>
              Co-branded corporate impact projects.
            </h2>
            <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 640, marginBottom: 48 }}>
              Partnering with India&apos;s leading enterprises to deploy targeted skilling cohorts that address talent shortages while uplifting underserved communities.
            </p>
          </AnimateIn>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: 24
          }}>
            {CSR_PARTNERS.map((p, i) => (
              <AnimateIn key={p.name} animation="slideUp" delay={i * 0.08}>
                <div className="hover-lift" style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  borderRadius: 16,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  height: "100%"
                }}>
                  <div style={{
                    width: isMobile ? "100%" : "42%",
                    position: "relative",
                    minHeight: isMobile ? 180 : "auto"
                  }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.img}
                      alt={p.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                    <div style={{
                      position: "absolute", top: 12, left: 12,
                      background: "rgba(1,1,1,.75)", backdropFilter: "blur(6px)",
                      color: "#fff", padding: "4px 10px", borderRadius: 6,
                      fontFamily: "var(--mono)", fontSize: 10, textTransform: "uppercase"
                    }}>
                      {p.metric}
                    </div>
                  </div>

                  <div style={{ padding: "26px 24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                        <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--accent)", textTransform: "uppercase", fontWeight: 600 }}>
                          {p.sector}
                        </span>
                      </div>
                      <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 20, color: "var(--text)", marginBottom: 8, letterSpacing: "-.02em" }}>
                        {p.name}
                      </h3>
                      <p style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.65, marginBottom: 16 }}>
                        {p.desc}
                      </p>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 6, paddingTop: 14, borderTop: "1px dashed var(--border)" }}>
                      <MapPin size={12} color="var(--text-muted)" />
                      <span style={{ fontFamily: "var(--body)", fontSize: 11, color: "var(--text-muted)" }}>
                        {p.location}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Venture Sewa Foundation Independent Footprint ── */}
      <section style={{ padding: isMobile ? "64px 6%" : "96px 5%", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <Sparkles size={18} color="var(--accent-orange)" />
              <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".15em", color: "var(--accent-orange)", textTransform: "uppercase", fontWeight: 600 }}>
                Venture Sewa Foundation Initiatives
              </span>
            </div>

            <h2 style={{
              fontFamily: "var(--serif)",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "clamp(26px, 3.5vw, 44px)",
              color: "var(--text)",
              marginBottom: 16,
              letterSpacing: "-.03em"
            }}>
              Self-funded social commitment.
            </h2>
            <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 640, marginBottom: 48 }}>
              Beyond corporate partnerships, Venture Sewa Foundation invests directly into self-funded rural training camps, women&apos;s cohorts, and scholarship drives.
            </p>
          </AnimateIn>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: 20
          }}>
            {CSR_ACTIVITIES.map((act, i) => (
              <AnimateIn key={act.title} animation="slideUp" delay={i * 0.07}>
                <div style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  borderRadius: 14,
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column"
                }}>
                  <div style={{ position: "relative", height: 180 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={act.img}
                      alt={act.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                    <div style={{
                      position: "absolute", bottom: 10, left: 10,
                      background: "rgba(1,1,1,.75)", backdropFilter: "blur(6px)",
                      color: "#fff", padding: "4px 10px", borderRadius: 6,
                      fontFamily: "var(--mono)", fontSize: 10
                    }}>
                      {act.metric}
                    </div>
                  </div>
                  <div style={{ padding: "22px 20px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--accent-orange)", textTransform: "uppercase", fontWeight: 600, marginBottom: 6 }}>
                        {act.category}
                      </div>
                      <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 18, color: "var(--text)", marginBottom: 8, lineHeight: 1.3 }}>
                        {act.title}
                      </h3>
                      <p style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 14 }}>
                        {act.desc}
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, paddingTop: 12, borderTop: "1px solid var(--border)" }}>
                      <MapPin size={12} color="var(--text-muted)" />
                      <span style={{ fontFamily: "var(--body)", fontSize: 11, color: "var(--text-muted)" }}>
                        {act.location}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Real Candid Impact Photo Gallery (With Filters & Lightbox) ── */}
      <section style={{ padding: isMobile ? "64px 6%" : "96px 5%", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <Users size={18} color="var(--accent)" />
              <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".15em", color: "var(--accent)", textTransform: "uppercase", fontWeight: 600 }}>
                On-The-Ground Photography
              </span>
            </div>

            <h2 style={{
              fontFamily: "var(--serif)",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "clamp(26px, 3.5vw, 44px)",
              color: "var(--text)",
              marginBottom: 16,
              letterSpacing: "-.03em"
            }}>
              Authentic impact gallery.
            </h2>
            <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 640, marginBottom: 32 }}>
              Candid moments from training camps, practical lab sessions, and certificate convocation ceremonies across our footprint.
            </p>

            {/* Category Filter Pills */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40 }}>
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`filter-pill ${selectedCategory === cat.key ? "active" : ""}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </AnimateIn>

          {/* Photo Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: 20
          }}>
            {filteredGallery.map((g, i) => (
              <AnimateIn key={g.id} animation="scaleIn" delay={i * 0.05}>
                <div
                  onClick={() => setActiveLightboxItem(g)}
                  className="hover-lift img-hover"
                  style={{
                    position: "relative",
                    borderRadius: 14,
                    overflow: "hidden",
                    border: "1px solid var(--border-card)",
                    aspectRatio: "4/3",
                    background: "var(--bg-card)",
                    cursor: "pointer"
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={g.img}
                    alt={g.title}
                    className="img-zoom"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(1,1,1,.85) 0%, rgba(1,1,1,.1) 60%, transparent 100%)"
                  }} />

                  {/* Top Badge */}
                  <div style={{
                    position: "absolute", top: 12, right: 12, zIndex: 2,
                    background: "rgba(1,1,1,.65)", backdropFilter: "blur(6px)",
                    color: "#fff", width: 32, height: 32, borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <Maximize2 size={14} />
                  </div>

                  {/* Caption Overlay */}
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2,
                    padding: "20px 18px", color: "#fff"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <MapPin size={11} color="var(--accent)" />
                        <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".08em", color: "rgba(255,255,255,.8)", textTransform: "uppercase" }}>
                          {g.location}
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <Calendar size={11} color="rgba(255,255,255,.6)" />
                        <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "rgba(255,255,255,.6)" }}>
                          {g.date}
                        </span>
                      </div>
                    </div>
                    <div style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: 16, marginBottom: 2 }}>
                      {g.title}
                    </div>
                    <div style={{ fontFamily: "var(--body)", fontSize: 12, color: "rgba(255,255,255,.7)", lineHeight: 1.4 }}>
                      {g.caption}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Beneficiary Voices (Trainee Testimonials) ── */}
      <section style={{ padding: isMobile ? "64px 6%" : "96px 5%", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <AnimateIn animation="slideUp">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <User size={18} color="var(--accent)" />
              <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".15em", color: "var(--accent)", textTransform: "uppercase", fontWeight: 600 }}>
                Beneficiary Stories
              </span>
            </div>

            <h2 style={{
              fontFamily: "var(--serif)",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "clamp(26px, 3.5vw, 44px)",
              color: "var(--text)",
              marginBottom: 16,
              letterSpacing: "-.03em"
            }}>
              Voices of transformed lives.
            </h2>
            <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 640, marginBottom: 48 }}>
              Real accounts from candidates whose livelihood trajectories were redefined through our CSR skill cohorts.
            </p>
          </AnimateIn>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: 24
          }}>
            {CSR_TESTIMONIALS.map((t, i) => (
              <AnimateIn key={t.name} animation="slideUp" delay={i * 0.08}>
                <div style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  borderRadius: 16,
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%"
                }}>
                  <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "var(--text)", lineHeight: 1.75, fontStyle: "italic", marginBottom: 24 }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 48, height: 48, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "2px solid var(--accent)" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={t.avatar} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--sans)", fontWeight: 700, fontSize: 16, color: "var(--text)" }}>{t.name}</div>
                      <div style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--accent)", fontWeight: 500 }}>{t.role}</div>
                      <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--text-muted)" }}>{t.location} • {t.batch}</div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accreditations & Credentials ── */}
      <section style={{ padding: "64px 5%", background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", textAlign: "center" }}>
          <AnimateIn animation="slideUp">
            <p style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".15em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 24, fontWeight: 600 }}>
              Recognized & Accredited Institutions
            </p>
          </AnimateIn>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {ACCREDITATIONS.map((acc, i) => (
              <AnimateIn key={acc.name} animation="scaleIn" delay={i * 0.05}>
                <div style={{
                  padding: "16px 24px", borderRadius: 10,
                  background: "var(--bg-card)", border: "1px solid var(--border-card)",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 4, minWidth: 140
                }}>
                  <span style={{ fontFamily: "var(--sans)", fontWeight: 800, fontSize: 15, color: "var(--text)" }}>{acc.name}</span>
                  <span style={{ fontFamily: "var(--body)", fontSize: 10, color: "var(--text-muted)", textAlign: "center", lineHeight: 1.3 }}>{acc.fullName}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ padding: isMobile ? "64px 6%" : "96px 5%", textAlign: "center", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <AnimateIn animation="slideUp">
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontStyle: "italic", fontSize: "clamp(26px, 3.5vw, 44px)", color: "var(--text)", letterSpacing: "-.03em", marginBottom: 16 }}>
              Deploy your CSR budget effectively.
            </h2>
            <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 32 }}>
              Let&apos;s structure a custom, Section 8-compliant skill development program aligned with your corporate ESG objectives.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <button
                onClick={() => setCsrProposalModalOpen(true)}
                className="btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 36px" }}
              >
                Request CSR Proposal <ArrowUpRight size={16} />
              </button>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <button className="btn-secondary" style={{ padding: "15px 30px" }}>
                  Contact Directors Cell
                </button>
              </Link>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* ── Lightbox Modal ── */}
      {activeLightboxItem && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "rgba(1,1,1,.92)", backdropFilter: "blur(12px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 24
        }}>
          <div style={{
            position: "relative", maxWidth: 900, width: "100%",
            background: "#0D1117", borderRadius: 16, overflow: "hidden",
            border: "1px solid rgba(255,255,255,.15)"
          }}>
            <button
              onClick={() => setActiveLightboxItem(null)}
              style={{
                position: "absolute", top: 16, right: 16, zIndex: 10,
                background: "rgba(255,255,255,.1)", border: "none", color: "#fff",
                width: 36, height: 36, borderRadius: "50%", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}
            >
              <X size={20} />
            </button>

            <div style={{ maxHeight: "70vh", overflow: "hidden", background: "#000" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeLightboxItem.img}
                alt={activeLightboxItem.title}
                style={{ width: "100%", height: "100%", objectFit: "contain", maxHeight: "70vh", display: "block" }}
              />
            </div>

            <div style={{ padding: 24, color: "#fff" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--accent)", textTransform: "uppercase" }}>
                  {activeLightboxItem.location}
                </span>
                <span style={{ color: "rgba(255,255,255,.4)", fontSize: 11 }}>•</span>
                <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "rgba(255,255,255,.6)" }}>
                  {activeLightboxItem.date}
                </span>
              </div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 700, marginBottom: 6 }}>
                {activeLightboxItem.title}
              </h3>
              <p style={{ fontFamily: "var(--body)", fontSize: 14, color: "rgba(255,255,255,.7)", lineHeight: 1.6 }}>
                {activeLightboxItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── CSR Partner Proposal Request Modal ── */}
      {csrProposalModalOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "rgba(1,1,1,.75)", backdropFilter: "blur(10px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 20
        }}>
          <div style={{
            position: "relative", maxWidth: 540, width: "100%",
            background: "var(--bg-card)", borderRadius: 16,
            padding: 32, border: "1px solid var(--border-strong)",
            boxShadow: "var(--shadow-lg)"
          }}>
            <button
              onClick={() => setCsrProposalModalOpen(false)}
              style={{
                position: "absolute", top: 20, right: 20,
                background: "transparent", border: "none", color: "var(--text-muted)",
                cursor: "pointer"
              }}
            >
              <X size={20} />
            </button>

            {formSubmitted ? (
              <div style={{ textAlign: "center", padding: "30px 10px" }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: "rgba(var(--wa-rgb), .15)", color: "var(--wa-green)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 16px"
                }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>
                  Proposal Request Submitted!
                </h3>
                <p style={{ fontFamily: "var(--body)", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
                  Our Corporate CSR Partnerships Cell will review your requirements and reach out within 24 hours with a customized proposal.
                </p>
              </div>
            ) : (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <Building2 size={20} color="var(--accent)" />
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 700, color: "var(--text)" }}>
                    Request CSR Proposal
                  </h3>
                </div>
                <p style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>
                  Fill in your details to receive a customized Section 8 skill deployment project plan.
                </p>

                <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div>
                    <label style={{ fontFamily: "var(--sans)", fontSize: 12, fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 4 }}>
                      Company / Foundation Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Acme Corporation"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="input-field"
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div>
                      <label style={{ fontFamily: "var(--sans)", fontSize: 12, fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 4 }}>
                        Contact Person *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your Name"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label style={{ fontFamily: "var(--sans)", fontSize: 12, fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 4 }}>
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontFamily: "var(--sans)", fontSize: 12, fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 4 }}>
                      Work Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="csr@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-field"
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div>
                      <label style={{ fontFamily: "var(--sans)", fontSize: 12, fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 4 }}>
                        Sector Focus
                      </label>
                      <select
                        value={formData.sectorInterest}
                        onChange={(e) => setFormData({ ...formData, sectorInterest: e.target.value })}
                        className="input-field"
                        style={{ cursor: "pointer" }}
                      >
                        <option>EV & Green Mobility</option>
                        <option>Women Garments & Apparel</option>
                        <option>Civil Construction CAD</option>
                        <option>Healthcare Nursing Support</option>
                        <option>IT & Digital Literacy</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontFamily: "var(--sans)", fontSize: 12, fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 4 }}>
                        Budget Range
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="input-field"
                        style={{ cursor: "pointer" }}
                      >
                        <option>₹5L - ₹10L</option>
                        <option>₹10L - ₹25L</option>
                        <option>₹25L - ₹50L</option>
                        <option>₹50L+</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="btn-primary" style={{ marginTop: 8, padding: 14 }}>
                    Submit Proposal Request
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <Footer />
      <FloatingWA />
    </div>
  );
}
