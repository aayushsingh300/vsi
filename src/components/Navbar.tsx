"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  X,
  Menu,
  Home,
  GraduationCap,
  Briefcase,
  Handshake,
  BookOpen,
  Building2,
  Plane,
  Sprout,
  Info,
  type LucideIcon,
} from "lucide-react";
import { COUNSELING_COURSE_OPTIONS } from "@/data/content";
import { VSI_LOGO, VSI_LOGO_RATIO } from "@/data/assets";
import WhatsAppIcon from "@/components/WhatsAppIcon";
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

// Home duplicates the logo's destination on purpose: the logo is a brand mark
// first and only a link by convention, so the row now names the way back.
const NAV_LINKS: { href: string; key: string; Icon: LucideIcon }[] = [
  { href: "/", key: "navHome", Icon: Home },
  { href: "/courses", key: "navCourses", Icon: GraduationCap },
  { href: "/services", key: "navServices", Icon: Briefcase },
  { href: "/placements", key: "navRecruiters", Icon: Handshake },
  { href: "/resources", key: "navResources", Icon: BookOpen },
  { href: "/centers", key: "navInfrastructure", Icon: Building2 },
  { href: "/work-abroad", key: "navWorkAbroad", Icon: Plane },
  { href: "/csr", key: "navCSR", Icon: Sprout },
  { href: "/about", key: "navAbout", Icon: Info },
];

interface NavbarProps {
  formOpen: boolean;
  setFormOpen: (v: boolean | ((p: boolean) => boolean)) => void;
}

// One spec for the three fields in the slide-down enquiry bar. They were
// three copies of the same 20 lines, and at 13px iOS Safari zoomed the page
// on focus — a zoom the user cannot undo by pinching back.
const navFieldStyle: React.CSSProperties = {
  flex: 1,
  minWidth: 0,
  background: "rgba(255,255,255,.06)",
  border: "1px solid rgba(255,255,255,.12)",
  borderRadius: "var(--r-sm)",
  padding: "11px 16px",
  color: "var(--text-inv)",
  fontFamily: "var(--sans)",
  fontSize: "var(--text-md)",
  outline: "none",
};

export default function Navbar({ formOpen, setFormOpen }: NavbarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const [formHeight, setFormHeight] = useState(0);
  const { lang, setLang, t } = useLang();
  // The drawer takes over at 1100, not 900: with Home the row is nine links,
  // and between 900 and 1100 it could only fit by shrinking the labels to a
  // size the rest of the site never uses. The drawer carries the same nine.
  const isMobile = useIsMobile(1100);
  const scrolled = useScrolled();
  const navH = scrolled ? 58 : 68;

  useEffect(() => {
    if (formRef.current) {
      setFormHeight(formRef.current.scrollHeight);
    }
  }, [formOpen]);

  // Publish the live navbar height so secondary sticky bars can sit flush
  // beneath it. /courses hardcoded `top: 57` against a 58px bar and leaked a
  // 1px line of scrolling content through the seam.
  useEffect(() => {
    document.documentElement.style.setProperty("--nav-h", `${navH}px`);
  }, [navH]);

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
            : (scrolled ? "rgba(var(--bg-rgb),.80)" : "rgba(var(--bg-rgb),.66)"),
          // Frosted glass on desktop: blur + saturate lifts the colour of
          // whatever scrolls under it. Mobile keeps the near-solid, blur-free
          // path (iOS Safari repaints a sticky backdrop-filter every frame).
          backdropFilter: isMobile ? "none" : (scrolled ? "blur(18px) saturate(1.7)" : "blur(14px) saturate(1.5)"),
          WebkitBackdropFilter: isMobile ? "none" : (scrolled ? "blur(18px) saturate(1.7)" : "blur(14px) saturate(1.5)"),
          borderBottom: scrolled ? "1px solid rgba(var(--accent-rgb),.14)" : "1px solid rgba(var(--accent-rgb),.08)",
          // Tighter than the old flat 5% so the 8-item row has room to breathe
          // at 1440; still generous on wide screens (caps at 60px a side).
          padding: isMobile ? "0 5%" : "0 clamp(24px, 2.6vw, 60px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: navH,
          transition: "height .3s var(--ease-expo), background .3s ease, border-color .3s ease",
          // inset top line = the light-catching top edge of frosted glass.
          // Both the hairline and the lift shadow are theme tokens: a white
          // edge and a navy shadow only read on parchment.
          boxShadow: isMobile
            ? (scrolled ? "var(--nav-shadow)" : "none")
            : (scrolled
                ? "var(--nav-shadow), inset 0 1px 0 var(--nav-edge-strong)"
                : "inset 0 1px 0 var(--nav-edge)"),
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

        {/* The link row is centred on the *viewport*, not on the space left
            over between the logo and the actions — those two flanks have very
            different widths, so a flex-distributed row always sat visibly
            right of centre. `.nav-center` pins it to 50% once the window is
            wide enough for the flanks to clear it (see globals.css); below
            that it falls back to sitting in flow beside the actions. */}
        {!isMobile && (
          <>
            <div className="nav-center">
              {NAV_LINKS.map((n) => {
                const isActive = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
                return (
                  <Link key={n.href} href={n.href} className={`nav-link${isActive ? " active" : ""}`}>
                    <n.Icon size={15} strokeWidth={2} className="nav-ico" aria-hidden="true" focusable="false" />
                    {t(n.key)}
                  </Link>
                );
              })}
            </div>

            <div className="nav-actions">
            <div
              role="group"
              aria-label="Language"
              style={{
                display: "inline-flex",
                border: "1px solid var(--border-strong)",
                borderRadius: "var(--r-pill)",
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
          </>
        )}

        {isMobile && (
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            style={{
              background: "transparent",
              border: "1px solid var(--border-strong)",
              borderRadius: "var(--r-sm)",
              // 44px square: the previous 34px target was below the minimum
              // for a thumb, on the one control every mobile visitor needs.
              width: 44,
              height: 44,
              cursor: "pointer",
              color: "var(--text)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Menu size={18} aria-hidden="true" />
          </button>
        )}
      </nav>

      {/* Mobile slide-in menu */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            // Above the floating WhatsApp bubble (150). They were both 200,
            // and because FloatingWA mounts later in every page tree it
            // painted on top of the open menu.
            zIndex: 300,
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
                  fontSize: "var(--text-xs)",
                  letterSpacing: "var(--tr-mono)",
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
              {NAV_LINKS.map((n) => {
                const isActive = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
                return (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      fontFamily: "var(--serif)",
                      fontSize: "var(--text-lg)",
                      fontWeight: 700,
                      color: isActive ? "var(--accent-text)" : "var(--text)",
                      // 44px minimum: at 10px padding these rows measured
                      // 41px, and they are the only way to navigate on a phone.
                      padding: "12px 0",
                      minHeight: 44,
                      textDecoration: "none",
                      letterSpacing: "var(--tr-body)",
                    }}
                  >
                    <n.Icon size={20} strokeWidth={1.75} aria-hidden="true" focusable="false" style={{ color: isActive ? "var(--accent)" : "var(--text-muted)", flexShrink: 0 }} />
                    {t(n.key)}
                  </Link>
                );
              })}

              <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--border)" }}>
                <p
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "var(--text-xs)",
                    letterSpacing: "var(--tr-mono)",
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
                      aria-pressed={lang === l.code}
                      style={{
                        flex: 1,
                        padding: "12px 14px",
                        fontFamily: "var(--sans)",
                        fontWeight: 700,
                        fontSize: "var(--text-sm)",
                        letterSpacing: "var(--tr-caps)",
                        // Matches the desktop language pill exactly. This
                        // used to be gold-on-navy — a third selected-state
                        // treatment for the same control.
                        background: lang === l.code ? "var(--btn-primary-bg)" : "transparent",
                        color: lang === l.code ? "var(--btn-primary-fg)" : "var(--text)",
                        border: "1px solid var(--border-strong)",
                        borderColor: lang === l.code ? "transparent" : "var(--border-strong)",
                        borderRadius: "var(--r-sm)",
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
                  <WhatsAppIcon size={15} /> WhatsApp
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
            aria-label={t("yourName")}
            autoComplete="name"
            style={navFieldStyle}
          />
          <input
            placeholder={t("phoneNumber")}
            aria-label={t("phoneNumber")}
            type="tel"
            autoComplete="tel"
            style={navFieldStyle}
          />
          <select
            aria-label={t("selectCourse")}
            style={{ ...navFieldStyle, color: "rgba(255,255,255,.55)" }}
          >
            <option>{t("selectCourse")}</option>
            {COUNSELING_COURSE_OPTIONS.map((o) => (
              <option key={o.value}>{t(o.key)}</option>
            ))}
          </select>
          {/* This used to override the class with a gold-mapped fill and
              near-black label, so the callback button looked like a different
              product from the Enquire button 40px above it. */}
          <button className="btn-primary" style={{ whiteSpace: "nowrap" }}>
            {t("getCallback")}
          </button>
          {!isMobile && (
            <button className="btn-wa" style={{ padding: "11px 18px" }}>
              <WhatsAppIcon size={15} /> WhatsApp
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
