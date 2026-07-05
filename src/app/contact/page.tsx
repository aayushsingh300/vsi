"use client";

import { useState, useRef } from "react";
import { MessageCircle, Phone, Mail, MapPin, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import { COURSES_CERT, CENTERS } from "@/data/content";
import { useLang } from "@/context/LangContext";

export default function ContactPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const { t } = useLang();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate submission
    setTimeout(() => {
      setStatus("success");
    }, 1600);
  };

  const contacts = [
    { icon: Phone, label: "Call directly", detail: "+91 9431103263", sub: "Mon–Sat · 9am–6pm", href: "tel:+919431103263" },
    { icon: Mail, label: "Email us", detail: "info@ventureskillindia.co.in", sub: "Reply within 24 hours", href: "mailto:info@ventureskillindia.co.in" },
    { icon: MapPin, label: "Visit our flagship", detail: "601, Panchwati Plaza, Kutchery Rd", sub: "Ranchi 834001, Jharkhand", href: "#" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar formOpen={formOpen} setFormOpen={setFormOpen} />

      {/* Hero */}
      <section className="inner-hero-warm">
        <AnimateIn animation="slideUp">
          <p className="eyebrow">{t("contactEyebrow")}</p>
          <h1>{t("contactTitle1")}<br /><em>{t("contactTitle2")}</em></h1>
          <p className="lead">{t("contactHeroDesc")}</p>
        </AnimateIn>
      </section>

      {/* Form + contact */}
      <section className="section-pad" style={{ background: "var(--bg)" }}>
        <div
          data-stack="1"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "var(--sp-16)",
            alignItems: "start",
          }}
        >
          {/* Form card */}
          <AnimateIn animation="slideUp">
            <div
              className="card-elevated"
              style={{ padding: "var(--sp-8)", overflow: "hidden", position: "relative" }}
            >
              {/* Form header */}
              <p className="eyebrow-label" style={{ marginBottom: "var(--sp-3)" }}>
                Free · No obligation
              </p>
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 700,
                  fontSize: "var(--text-2xl)",
                  color: "var(--text)",
                  marginBottom: "var(--sp-2)",
                  letterSpacing: "-.03em",
                }}
              >
                Get free counseling.
              </h2>
              <p
                style={{
                  fontFamily: "var(--body)",
                  fontStyle: "italic",
                  fontSize: "var(--text-sm)",
                  color: "var(--text-muted)",
                  marginBottom: "var(--sp-6)",
                  lineHeight: "var(--lh-normal)",
                }}
              >
                We&apos;ll call back within 30 minutes (9am–6pm, Mon–Sat)
              </p>

              {/* Success state */}
              {status === "success" ? (
                <div
                  style={{
                    padding: "var(--sp-12) var(--sp-8)",
                    textAlign: "center",
                    animation: "scaleIn .5s var(--ease-spring) forwards",
                  }}
                >
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: "rgba(var(--green-rgb),.12)",
                      border: "1px solid rgba(var(--green-rgb),.22)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto var(--sp-5)",
                    }}
                  >
                    <CheckCircle size={28} color="var(--accent-green)" />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontWeight: 700,
                      fontSize: "var(--text-xl)",
                      color: "var(--text)",
                      marginBottom: "var(--sp-2)",
                    }}
                  >
                    We&apos;ll call you back.
                  </h3>
                  <p style={{ fontFamily: "var(--body)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
                    Expect a call within 30 minutes during working hours.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit}>
                  {/* Name + phone */}
                  <div
                    data-stack="1"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "var(--sp-3)",
                      marginBottom: "var(--sp-3)",
                    }}
                  >
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="sr-only"
                      >
                        Full name
                      </label>
                      <input
                        id="contact-name"
                        placeholder="Full name"
                        className="input-field"
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="sr-only">Phone number</label>
                      <input
                        id="contact-phone"
                        placeholder="Phone number"
                        className="input-field"
                        type="tel"
                        required
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <label htmlFor="contact-email" className="sr-only">Email</label>
                  <input
                    id="contact-email"
                    placeholder="Email address"
                    className="input-field"
                    type="email"
                    style={{ marginBottom: "var(--sp-3)" }}
                    autoComplete="email"
                  />

                  <label htmlFor="contact-course" className="sr-only">Course interest</label>
                  <select
                    id="contact-course"
                    className="input-field"
                    style={{ marginBottom: "var(--sp-3)" }}
                  >
                    <option value="">Select course interest...</option>
                    {COURSES_CERT.map((c) => (
                      <option key={c.slug} value={c.slug}>{c.name}</option>
                    ))}
                    <option value="diploma">Polytechnic Diploma</option>
                    <option value="vocational">Vocational Programs</option>
                  </select>

                  <label htmlFor="contact-centre" className="sr-only">Preferred centre</label>
                  <select
                    id="contact-centre"
                    className="input-field"
                    style={{ marginBottom: "var(--sp-3)" }}
                  >
                    <option value="">Preferred centre...</option>
                    {CENTERS.map((c) => (
                      <option key={c.city} value={c.city}>{c.city}, {c.state}</option>
                    ))}
                  </select>

                  <label htmlFor="contact-msg" className="sr-only">Your message</label>
                  <textarea
                    id="contact-msg"
                    placeholder="Tell us a bit about yourself and what you're hoping to achieve..."
                    className="input-field"
                    rows={4}
                    style={{ marginBottom: "var(--sp-4)", resize: "vertical" }}
                  />

                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={status === "loading"}
                    style={{
                      width: "100%",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "var(--sp-2)",
                      opacity: status === "loading" ? .7 : 1,
                      cursor: status === "loading" ? "not-allowed" : "pointer",
                    }}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={14} style={{ animation: "spin 1s linear infinite" }} />
                        Submitting…
                      </>
                    ) : (
                      "Submit · Get Free Counseling"
                    )}
                  </button>

                  <p
                    style={{
                      fontFamily: "var(--body)",
                      fontSize: "var(--text-xs)",
                      color: "var(--text-faint)",
                      marginTop: "var(--sp-3)",
                      textAlign: "center",
                      lineHeight: "var(--lh-normal)",
                    }}
                  >
                    By submitting, you agree to receive a callback. We respect your privacy and will never spam you.
                  </p>
                </form>
              )}
            </div>
          </AnimateIn>

          {/* Right column */}
          <AnimateIn animation="slideLeft" delay={0.1}>
            <div>
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 700,
                  fontSize: "var(--text-2xl)",
                  color: "var(--text)",
                  marginBottom: "var(--sp-2)",
                  letterSpacing: "-.03em",
                }}
              >
                Or reach us directly.
              </h2>
              <p
                style={{
                  fontFamily: "var(--body)",
                  fontStyle: "italic",
                  fontSize: "var(--text-sm)",
                  color: "var(--text-muted)",
                  marginBottom: "var(--sp-6)",
                }}
              >
                Pick whichever channel works for you
              </p>

              {/* WhatsApp hero button */}
              <a
                href="https://wa.me/919431103263"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa wa-pulse"
                style={{
                  padding: "var(--sp-5) var(--sp-6)",
                  marginBottom: "var(--sp-4)",
                  borderRadius: "var(--r-md)",
                  width: "100%",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--sp-3)",
                }}
              >
                <MessageCircle size={20} />
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontFamily: "var(--sans)", fontWeight: 700, fontSize: "var(--text-sm)", letterSpacing: ".04em" }}>
                    WhatsApp Us
                  </div>
                  <div style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", opacity: .8 }}>
                    +91 9431103263 · Reply within minutes
                  </div>
                </div>
              </a>

              {/* Contact cards */}
              {contacts.map((c, i) => {
                const Icon = c.icon;
                return (
                  <a
                    key={i}
                    href={c.href}
                    className="contact-card"
                    style={{
                      marginBottom: "var(--sp-3)",
                      textDecoration: "none",
                      display: "flex",
                    }}
                  >
                    <div className="icon-box">
                      <Icon size={16} color="var(--accent)" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--sans)",
                          fontWeight: 700,
                          fontSize: "var(--text-xs)",
                          color: "var(--text-muted)",
                          letterSpacing: ".1em",
                          textTransform: "uppercase",
                          marginBottom: "var(--sp-1)",
                        }}
                      >
                        {c.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--serif)",
                          fontWeight: 700,
                          fontSize: "var(--text-base)",
                          color: "var(--text)",
                          marginBottom: 2,
                        }}
                      >
                        {c.detail}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--body)",
                          fontSize: "var(--text-xs)",
                          color: "var(--text-faint)",
                        }}
                      >
                        {c.sub}
                      </div>
                    </div>
                  </a>
                );
              })}

              {/* B2B panel */}
              <div
                style={{
                  marginTop: "var(--sp-5)",
                  padding: "var(--sp-6)",
                  background: "var(--bg-dark)",
                  borderRadius: "var(--r-md)",
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid rgba(var(--accent-rgb),.12)",
                }}
              >
                {/* accent corner */}
                <div
                  style={{
                    position: "absolute",
                    top: -20,
                    right: -20,
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(var(--accent-rgb),.15) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 700,
                    fontSize: "var(--text-xs)",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "rgba(248,247,244,.3)",
                    marginBottom: "var(--sp-3)",
                  }}
                >
                  For Corporates &amp; Government
                </h3>
                <p
                  style={{
                    fontFamily: "var(--body)",
                    fontSize: "var(--text-sm)",
                    color: "rgba(248,247,244,.45)",
                    lineHeight: "var(--lh-relaxed)",
                    marginBottom: "var(--sp-4)",
                  }}
                >
                  CSR training, PMKVY/DDU-GKY implementation, corporate skill programmes. We&apos;ve delivered at scale across multiple states.
                </p>
                <button
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 700,
                    fontSize: "var(--text-xs)",
                    color: "rgba(var(--gold-rgb),.85)",
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--sp-2)",
                    background: "none",
                    border: "none",
                    padding: 0,
                    transition: "color .2s, gap .2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.color = "rgba(var(--gold-rgb),1)";
                    el.style.gap = "var(--sp-3)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.color = "rgba(var(--gold-rgb),.85)";
                    el.style.gap = "var(--sp-2)";
                  }}
                >
                  Talk to Our B2B Team <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
      <FloatingWA />
    </div>
  );
}
