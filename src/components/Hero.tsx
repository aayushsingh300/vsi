"use client";

import Link from "next/link";
import { useState } from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import { CREDS } from "@/data/content";
import useIsMobile from "@/hooks/useIsMobile";
import { useLang } from "@/context/LangContext";

export default function Hero() {
  const { t } = useLang();
  const [hover, setHover] = useState<string | null>(null);
  const isMobile = useIsMobile(900);

  return (
    <section
      id="home"
      className="grid-bg"
      style={{
        padding: isMobile ? "56px 6% 32px" : "96px 5% 0",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? 40 : 72,
        minHeight: isMobile ? "auto" : "90vh",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow orbs */}
      {!isMobile && (
        <>
          <div
            className="ambient-orb"
            style={{
              width: 520,
              height: 520,
              background: "radial-gradient(circle, rgba(var(--accent-rgb),.14) 0%, transparent 70%)",
              top: -120,
              left: -180,
              animationDuration: "14s",
            }}
          />
          <div
            className="ambient-orb"
            style={{
              width: 380,
              height: 380,
              background: "radial-gradient(circle, rgba(var(--gold-rgb),.1) 0%, transparent 70%)",
              bottom: 0,
              right: "10%",
              animationDuration: "18s",
              animationDelay: "-6s",
            }}
          />
        </>
      )}

      {/* Left content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <AnimateIn animation="slideUp" delay={0}>
          <div className="badge-glow" style={{ marginBottom: 32, display: "inline-flex" }}>
            <div className="dot" />
            {t("heroTag")}
          </div>
        </AnimateIn>

        <AnimateIn animation="slideUp" delay={0.1}>
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 700,
              fontSize: isMobile ? "clamp(34px,9vw,52px)" : "clamp(44px,5.5vw,84px)",
              lineHeight: 1.02,
              letterSpacing: "-.038em",
              color: "var(--text)",
              marginBottom: 28,
            }}
          >
            {t("heroTitle1")}<br />
            {t("heroTitle2")}<br />
            <em style={{ fontStyle: "italic", fontWeight: 500, color: "var(--accent)" }}>
              {t("heroTitle3")}
            </em>
            {t("heroTitle4") && (<><br />{t("heroTitle4")}</>)}
          </h1>
        </AnimateIn>

        <AnimateIn animation="slideUp" delay={0.22}>
          <p
            style={{
              fontFamily: "var(--body)",
              fontWeight: 300,
              fontSize: isMobile ? 15 : 17,
              lineHeight: 1.82,
              color: "var(--text-muted)",
              maxWidth: 490,
              marginBottom: 40,
            }}
          >
            {t("heroDesc")}
          </p>
        </AnimateIn>

        <AnimateIn animation="slideUp" delay={0.32}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/courses" style={{ textDecoration: "none" }}>
              <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {t("exploreCourses")} <ArrowUpRight size={14} />
              </button>
            </Link>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <button
                className="btn-secondary"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1.5px solid rgba(255,255,255,0.22)",
                  color: "rgba(253,252,249,0.9)",
                }}
              >
                {t("freeCounseling")}
              </button>
            </Link>
            <a
              href="https://wa.me/919431103263"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button className="btn-wa wa-pulse">
                <MessageCircle size={15} />
              </button>
            </a>
          </div>
        </AnimateIn>

        <AnimateIn animation="fadeIn" delay={0.48}>
          <div
            style={{
              display: "flex",
              gap: isMobile ? 16 : 24,
              marginTop: 44,
              paddingTop: 30,
              borderTop: "1px solid var(--border)",
              flexWrap: "wrap",
            }}
          >
            {CREDS.map((c) => (
              <div key={c} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    boxShadow: "0 0 6px var(--accent-glow)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    color: "var(--text-muted)",
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                  }}
                >
                  {c}
                </span>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>

      {/* Right image grid */}
      <AnimateIn animation="slideLeft" delay={0.15}>
        <div
          style={{
            display: "grid",
            gridTemplateRows: isMobile ? "auto auto" : "1.5fr 1fr",
            gap: 10,
            height: isMobile ? "auto" : "74vh",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Top tall image */}
          <div
            className="hover-lift"
            onMouseEnter={() => setHover("ev")}
            onMouseLeave={() => setHover(null)}
            style={{
              borderRadius: 8,
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
              minHeight: isMobile ? 220 : 0,
              boxShadow: hover === "ev" ? "var(--shadow-glow)" : "var(--shadow-md)",
              transition: "box-shadow .32s ease",
            }}
          >
            <Image
              src="/images/ev-lab.png"
              alt="Students at EV training lab"
              fill
              style={{
                objectFit: "cover",
                transition: "transform .8s var(--ease-expo)",
                transform: hover === "ev" ? "scale(1.06)" : "scale(1)",
              }}
              sizes="(max-width: 900px) 100vw, 50vw"
              priority
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(13,27,42,.7) 0%, transparent 60%)",
              }}
            />
            {/* Label */}
            <div
              style={{
                position: "absolute",
                bottom: 16,
                left: 16,
                right: 16,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  color: "rgba(253,252,249,.75)",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                EV Training Lab · Govt. Inaugurated
              </span>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,.12)",
                  backdropFilter: "blur(8px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: hover === "ev" ? 1 : 0,
                  transition: "opacity .25s ease",
                }}
              >
                <ArrowUpRight size={13} color="rgba(255,255,255,.9)" />
              </div>
            </div>
          </div>

          {/* Bottom row: Fashion lab + stat tile */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <div
              className="hover-lift"
              onMouseEnter={() => setHover("fashion")}
              onMouseLeave={() => setHover(null)}
              style={{
                borderRadius: 8,
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                minHeight: isMobile ? 160 : 0,
                boxShadow: hover === "fashion" ? "var(--shadow-glow)" : "var(--shadow-md)",
                transition: "box-shadow .32s ease",
              }}
            >
              <Image
                src="/images/fashion-studio.png"
                alt="Fashion design lab"
                fill
                style={{
                  objectFit: "cover",
                  transition: "transform .8s var(--ease-expo)",
                  transform: hover === "fashion" ? "scale(1.07)" : "scale(1)",
                }}
                sizes="(max-width: 900px) 50vw, 25vw"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(13,27,42,.65) 0%, transparent 55%)",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  bottom: 12,
                  left: 14,
                  fontFamily: "var(--mono)",
                  fontSize: 9,
                  color: "rgba(253,252,249,.7)",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                Fashion Design Lab
              </span>
            </div>

            {/* Stat tile */}
            <div
              style={{
                borderRadius: 8,
                background: "linear-gradient(145deg, var(--accent-green) 0%, #1a4a35 100%)",
                color: "var(--white)",
                padding: "22px 20px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                minHeight: isMobile ? 160 : 0,
                boxShadow: "0 12px 36px rgba(var(--green-rgb),.32)",
              }}
            >
              {/* Dot pattern overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  opacity: .1,
                  backgroundImage: "radial-gradient(rgba(255,255,255,.9) 1px, transparent 1px)",
                  backgroundSize: "14px 14px",
                }}
              />
              {/* Top glow */}
              <div
                style={{
                  position: "absolute",
                  top: -30,
                  right: -30,
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  background: "rgba(var(--gold-rgb),.2)",
                  filter: "blur(20px)",
                  pointerEvents: "none",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 9,
                  letterSpacing: ".18em",
                  color: "rgba(255,255,255,.5)",
                  textTransform: "uppercase",
                  position: "relative",
                }}
              >
                Verified Outcomes
              </span>
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontStyle: "italic",
                    fontWeight: 700,
                    fontSize: "clamp(38px,5.5vw,68px)",
                    lineHeight: 1,
                    letterSpacing: "-.03em",
                    background: "linear-gradient(135deg, #fff 60%, rgba(var(--gold-rgb),.9) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  20K+
                </div>
                <div
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 600,
                    fontSize: 13,
                    color: "rgba(255,255,255,.8)",
                    marginTop: 6,
                    lineHeight: 1.3,
                  }}
                >
                  Students<br />Placed Nationally
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
