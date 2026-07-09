"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, X, Menu } from "lucide-react";
import { COURSES_CERT } from "@/data/content";
import { VSI_LOGO, VSI_LOGO_RATIO } from "@/data/assets";
import useIsMobile from "@/hooks/useIsMobile";
import { useLang } from "@/context/LangContext";
import ScrollProgress from "@/components/ScrollProgress";

function useScrolled(threshold = 20) {
  // Tracks only the boolean "have we scrolled past the threshold" — a state
  // that flips at most twice per scroll session, so re-rendering the Navbar
  // on it is cheap. The continuous scroll-progress value lives in its own
  // <ScrollProgress /> leaf so it never re-renders this tree.
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let ticking = false;
    const h = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > threshold);
        ticking = false;
      });
    };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, [threshold]);
  return scrolled;
}

const NAV_LINKS = [
  { href: "/courses", key: "navCourses" },
  { href: "/services", key: "navServices" },
  { href: "/placements", key: "navRecruiters" },
  { href: "/resources", key: "navResources" },
  { href: "/centers", key: "navInfrastructure" },
  { href: "/about", key: "navAbout" },
  { href: "/work-abroad", key: "navWorkAbroad" },
];

interface NavbarProps {
  formOpen: boolean;
  setFormOpen: (v: boolean | ((p: boolean) => boolean)) => void;
}

export default function Navbar({ formOpen, setFormOpen }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const [formHeight, setFormHeight] = useState(0);
  const { lang, setLang, t } = useLang();
  const isMobile = useIsMobile(900);
  const scrolled = useScrolled();

  useEffect(() => {
    if (formRef.current) {
      setFormHeight(formRef.current.scrollHeight);
    }
  }, [formOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          // On mobile (esp. iOS Safari) a sticky backdrop-filter flickers as
          // content scrolls under it, so we drop the blur and use a near-solid
          // background instead — visually near-identical, no scroll repaint.
          background: isMobile
            ? (scrolled ? "rgba(var(--bg-rgb),.98)" : "rgba(var(--bg-rgb),.96)")
            : (scrolled ? "rgba(var(--bg-rgb),.95)" : "rgba(var(--bg-rgb),.86)"),
          backdropFilter: isMobile ? "none" : (scrolled ? "blur(12px)" : "blur(8px)"),
          WebkitBackdropFilter: isMobile ? "none" : (scrolled ? "blur(12px)" : "blur(8px)"),
          borderBottom: scrolled ? "1px solid rgba(var(--accent-rgb),.14)" : "1px solid rgba(var(--accent-rgb),.08)",
          padding: "0 5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: scrolled ? 58 : 68,
          transition: "height .3s var(--ease-expo), background .3s ease, border-color .3s ease",
          boxShadow: scrolled ? "0 4px 24px rgba(13,27,42,.07)" : "none",
        }}
      >
        {/* Scroll progress bar — self-contained, updates via transform only */}
        <ScrollProgress />
        <Link href="/" aria-label="Venture Skill India — home" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          {(() => {
            const logoH = isMobile ? 26 : (scrolled ? 30 : 34);
            return (
              <Image
                src={VSI_LOGO}
                alt="Venture Skill India"
                height={logoH}
                width={Math.round(logoH * VSI_LOGO_RATIO)}
                priority
                style={{ height: logoH, width: "auto", transition: "height .3s var(--ease-expo)" }}
              />
            );
          })()}
        </Link>

        {!isMobile && (
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {NAV_LINKS.slice(0, 5).map((n) => (
              <Link key={n.href} href={n.href} className="nav-link">
                {t(n.key)}
              </Link>
            ))}

            <div
              role="group"
              aria-label="Language"
              style={{
                display: "inline-flex",
                border: "1px solid var(--border-strong)",
                borderRadius: 999,
                padding: 2,
                background: "var(--bg-card)",
              }}
            >
              {[
                { code: "en" as const, label: "EN" },
                { code: "hi" as const, label: "हिं" },
              ].map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLang(l.code)}
                  aria-pressed={lang === l.code}
                  data-lang={l.code}
                  className={lang === l.code ? "lang-pill active" : "lang-pill"}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <button onClick={() => setFormOpen((f: boolean) => !f)} className="btn-primary" style={{ padding: "9px 22px" }}>
              {t("enquireNow")}
            </button>
          </div>
        )}

        {isMobile && (
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            style={{
              background: "transparent",
              border: "1px solid var(--border-strong)",
              borderRadius: 4,
              padding: 8,
              cursor: "pointer",
              color: "var(--text)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Menu size={18} />
          </button>
        )}
      </nav>

      {/* Mobile slide-in menu */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            pointerEvents: menuOpen ? "auto" : "none",
          }}
        >
          {/* backdrop */}
          <div
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(13,27,42,.55)",
              opacity: menuOpen ? 1 : 0,
              transition: "opacity .25s ease",
            }}
          />
          {/* panel */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              height: "100%",
              width: "min(86vw, 340px)",
              background: "var(--bg)",
              boxShadow: "-20px 0 50px rgba(13,27,42,.18)",
              transform: menuOpen ? "translateX(0)" : "translateX(100%)",
              transition: "transform .3s var(--ease-expo)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 24px",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  letterSpacing: ".15em",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                }}
              >
                Menu
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--text)",
                  padding: 4,
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 4, flex: 1, overflowY: "auto" }}>
              {NAV_LINKS.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "var(--text)",
                    padding: "10px 0",
                    textDecoration: "none",
                    letterSpacing: "-.01em",
                  }}
                >
                  {t(n.key)}
                </Link>
              ))}

              <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--border)" }}>
                <p
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    letterSpacing: ".15em",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  Language
                </p>
                <div style={{ display: "flex", gap: 8 }}>
                  {[
                    { code: "en" as const, label: "EN" },
                    { code: "hi" as const, label: "हिं" },
                  ].map((l) => (
                    <button
                      key={l.code}
                      onClick={() => setLang(l.code)}
                      style={{
                        flex: 1,
                        padding: "10px 14px",
                        fontFamily: "var(--sans)",
                        fontWeight: 700,
                        fontSize: 13,
                        background: lang === l.code ? "var(--bg-navy)" : "transparent",
                        color: lang === l.code ? "var(--accent-gold)" : "var(--text)",
                        border: "1px solid var(--border-strong)",
                        borderRadius: 3,
                        cursor: "pointer",
                      }}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ padding: "20px 24px", borderTop: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: 10 }}>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setFormOpen(true);
                }}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                {t("enquireNow")}
              </button>
              <a
                href="https://wa.me/919431103263"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <button className="btn-wa wa-pulse" style={{ width: "100%", justifyContent: "center" }}>
                  <MessageCircle size={15} /> WhatsApp
                </button>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Slide-down form (desktop only behavior — but functional on mobile too) */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: formOpen ? formHeight || (isMobile ? 320 : 80) : 0,
          opacity: formOpen ? 1 : 0,
          transition: "max-height .4s cubic-bezier(.16,1,.3,1), opacity .3s ease",
          background: "var(--bg-dark)",
        }}
      >
        <div
          ref={formRef}
          style={{
            padding: "20px 5%",
            display: "flex",
            gap: 10,
            alignItems: isMobile ? "stretch" : "center",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <input
            placeholder={t("yourName")}
            style={{
              flex: 1,
              background: "rgba(255,255,255,.06)",
              border: "1px solid rgba(255,255,255,.12)",
              borderRadius: 2,
              padding: "11px 16px",
              color: "var(--text-inv)",
              fontFamily: "var(--sans)",
              fontSize: 13,
              outline: "none",
            }}
          />
          <input
            placeholder={t("phoneNumber")}
            style={{
              flex: 1,
              background: "rgba(255,255,255,.06)",
              border: "1px solid rgba(255,255,255,.12)",
              borderRadius: 2,
              padding: "11px 16px",
              color: "var(--text-inv)",
              fontFamily: "var(--sans)",
              fontSize: 13,
              outline: "none",
            }}
          />
          <select
            style={{
              flex: 1,
              background: "rgba(255,255,255,.06)",
              border: "1px solid rgba(255,255,255,.12)",
              borderRadius: 2,
              padding: "11px 16px",
              color: "rgba(255,255,255,.55)",
              fontFamily: "var(--sans)",
              fontSize: 13,
              outline: "none",
            }}
          >
            <option>{t("selectCourse")}</option>
            {COURSES_CERT.map((c) => (
              <option key={c.slug}>{c.name}</option>
            ))}
          </select>
          <button
            className="btn-primary"
            style={{ background: "var(--accent-gold)", color: "var(--bg-dark)", whiteSpace: "nowrap" }}
          >
            {t("getCallback")}
          </button>
          {!isMobile && (
            <button className="btn-wa" style={{ padding: "11px 18px" }}>
              <MessageCircle size={15} /> WhatsApp
            </button>
          )}
          <button
            onClick={() => setFormOpen(false)}
            aria-label="Close form"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "rgba(255,255,255,.5)",
              padding: 4,
              alignSelf: isMobile ? "flex-end" : "center",
            }}
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
