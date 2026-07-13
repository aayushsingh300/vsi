"use client";

import Link from "next/link";
import { Download, MessageCircle, ArrowUpRight } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import useIsMobile from "@/hooks/useIsMobile";
import { useLang } from "@/context/LangContext";

export default function CTA() {
  const { t } = useLang();
  const isMobile = useIsMobile(768);

  return (
    <section
      className="lazy-section"
      style={{
        background: "var(--bg-dark)",
        padding: isMobile ? "64px 6%" : "88px 5%",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr auto",
        alignItems: "center",
        gap: isMobile ? 36 : 48,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gradient mesh background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 25% 50%, rgba(var(--accent-rgb),.1) 0%, transparent 55%), radial-gradient(ellipse at 75% 20%, rgba(var(--gold-rgb),.07) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          pointerEvents: "none",
        }}
      />

      {/* Left: headline */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <AnimateIn animation="slideUp">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 24,
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: ".16em",
              color: "rgba(var(--accent-rgb),.6)",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 24,
                height: 1.5,
                background: "linear-gradient(to right, var(--accent), transparent)",
              }}
            />
            Free Counseling
          </div>

          <h2
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: isMobile ? "clamp(28px,7.5vw,38px)" : "clamp(32px,4.5vw,72px)",
              color: "var(--text-inv)",
              lineHeight: 1.06,
              letterSpacing: "-.032em",
              marginBottom: 16,
            }}
          >
            {t("ctaTitle").split("today.")[0]}<br />today.
          </h2>
        </AnimateIn>

        <AnimateIn animation="fadeIn" delay={0.12}>
          <p
            style={{
              fontFamily: "var(--body)",
              fontWeight: 300,
              fontSize: 15,
              color: "rgba(253,252,249,.42)",
              lineHeight: 1.7,
            }}
          >
            {t("ctaDesc")}
          </p>
        </AnimateIn>
      </div>

      {/* Right: buttons */}
      <AnimateIn animation="slideLeft" delay={0.18}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            minWidth: isMobile ? "auto" : 230,
            position: "relative",
            zIndex: 2,
          }}
        >
          <Link href="/contact" style={{ textDecoration: "none" }}>
            <button
              className="btn-primary"
              style={{
                background: "linear-gradient(135deg, var(--accent-gold), #d4a832)",
                color: "var(--bg-dark)",
                textAlign: "center",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                fontSize: 13,
                boxShadow: "0 8px 28px var(--gold-glow)",
              }}
            >
              {t("bookCounseling")} <ArrowUpRight size={14} />
            </button>
          </Link>

          <button
            className="btn-secondary-on-dark"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 7,
              width: "100%",
            }}
          >
            <Download size={13} /> {t("downloadBrochure")}
          </button>

          <a
            href="https://wa.me/919431103263"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button
              className="btn-wa wa-pulse"
              style={{
                justifyContent: "center",
                width: "100%",
              }}
            >
              <MessageCircle size={15} /> {t("whatsappNow")}
            </button>
          </a>
        </div>
      </AnimateIn>
    </section>
  );
}
