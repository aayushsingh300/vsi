"use client";

import { useEffect, useState } from "react";
import useIsMobile from "@/hooks/useIsMobile";

export interface FloaterSection {
  /** Must match the `id` on the target `<section>`. */
  id: string;
  label: string;
}

/**
 * Section rail that floats in once the reader has scrolled past the hero.
 *
 * Long pages bury their directories: by the time you reach the government
 * mandates you have lost the training directory above you. The rail keeps both
 * one click away and shows which one you are standing in.
 *
 * Two presentations. On a pointer it is a left-edge vertical rail — dead space
 * that costs the content nothing. On a phone there is no such margin, so it
 * becomes a horizontal scroller pinned to the bottom-left, clear of the
 * WhatsApp button's bottom-right corner (`FloatingWA`, z-index 150 — this sits
 * just below at 140).
 */
export default function SectionFloater({ sections }: { sections: FloaterSection[] }) {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  // The rail needs a margin to live in. Page content is capped at 1100px, so
  // below ~1100px viewport there is no gutter to spare and the bottom bar is
  // the only presentation that doesn't sit on the text.
  const isNarrow = useIsMobile(1100);

  // Appear after roughly one viewport of scrolling.
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section owns the upper half of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: 0 },
    );

    const nodes = sections
      .map((s) => document.getElementById(s.id))
      .filter((n): n is HTMLElement => n !== null);
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [sections]);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (isNarrow) {
    return (
      <nav
        aria-label="Page sections"
        style={{
          position: "fixed",
          left: "max(12px, env(safe-area-inset-left))",
          right: "84px",
          bottom: "calc(20px + env(safe-area-inset-bottom))",
          zIndex: 140,
          display: "flex",
          gap: 6,
          overflowX: "auto",
          padding: 6,
          borderRadius: 999,
          background: "var(--bg-card)",
          border: "1px solid var(--border-card)",
          boxShadow: "0 6px 24px rgba(13,27,42,.16)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(12px)",
          transition: "opacity .3s ease, transform .3s ease",
          pointerEvents: visible ? "auto" : "none",
          scrollbarWidth: "none",
        }}
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => go(s.id)}
            aria-current={active === s.id ? "true" : undefined}
            style={{
              flexShrink: 0,
              border: "none",
              cursor: "pointer",
              borderRadius: 999,
              padding: "7px 13px",
              fontFamily: "var(--mono)",
              fontSize: "var(--text-xs)",
              letterSpacing: "var(--tr-caps)",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              background: active === s.id ? "var(--accent)" : "transparent",
              color: active === s.id ? "var(--white)" : "var(--text-muted)",
              transition: "background .2s ease, color .2s ease",
            }}
          >
            {s.label}
          </button>
        ))}
      </nav>
    );
  }

  // Desktop: a slim dot rail that stays out of the text column, widening to
  // show labels only while pointed at.
  return (
    <nav
      aria-label="Page sections"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onFocus={() => setExpanded(true)}
      onBlur={() => setExpanded(false)}
      style={{
        position: "fixed",
        left: 16,
        top: "50%",
        transform: visible ? "translateY(-50%)" : "translateY(-50%) translateX(-16px)",
        zIndex: 140,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 7,
        borderRadius: "var(--r-md)",
        background: expanded ? "var(--bg-card)" : "transparent",
        border: `1px solid ${expanded ? "var(--border-card)" : "transparent"}`,
        boxShadow: expanded ? "0 8px 30px rgba(13,27,42,.12)" : "none",
        opacity: visible ? 1 : 0,
        transition: "opacity .3s ease, transform .3s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {sections.map((s) => {
        const on = active === s.id;
        return (
          <button
            key={s.id}
            onClick={() => go(s.id)}
            aria-current={on ? "true" : undefined}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              border: "none",
              background: on && expanded ? "rgba(var(--accent-rgb),.08)" : "transparent",
              cursor: "pointer",
              textAlign: "left",
              padding: "8px 9px",
              borderRadius: "var(--r-sm)",
              fontFamily: "var(--mono)",
              fontSize: "var(--text-xs)",
              letterSpacing: "var(--tr-caps)",
              textTransform: "uppercase",
              color: on ? "var(--accent)" : "var(--text-muted)",
              transition: "background .2s ease, color .2s ease",
            }}
          >
            <span
              aria-hidden
              style={{
                width: on ? 8 : 6,
                height: on ? 8 : 6,
                borderRadius: "50%",
                flexShrink: 0,
                background: on ? "var(--accent)" : "var(--text-faint)",
                transition: "background .2s ease, width .2s ease, height .2s ease",
              }}
            />
            {/* Collapsed to zero width rather than removed, so the button keeps
                its accessible name for screen readers at every size. */}
            <span
              style={{
                display: "block",
                maxWidth: expanded ? 170 : 0,
                opacity: expanded ? 1 : 0,
                overflow: "hidden",
                whiteSpace: "nowrap",
                transition: "max-width .25s ease, opacity .2s ease",
              }}
            >
              {s.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
