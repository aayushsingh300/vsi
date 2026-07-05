"use client";

import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import useIsMobile from "@/hooks/useIsMobile";
import { useLang } from "@/context/LangContext";

const labImages = [
  { src: "/images/ev-lab.png", label: "EV Training Centre" },
  { src: "/images/fashion-studio.png", label: "Fashion Lab" },
  { src: "/images/drone-lab.png", label: "Drone Lab" },
  { src: "/images/award-ceremony.png", label: "Award 2022" },
];

const features = [
  "EV Training Centre · Govt. Inaugurated",
  "Drone Lab · CM-Visited",
  "50+ Centres across Eastern India",
  "Autodesk-Authorized CAD Labs",
];

export default function Labs() {
  const { t } = useLang();
  const isMobile = useIsMobile(900);

  return (
    <section
      id="centers"
      className="lazy-section"
      style={{
        background: "var(--bg-dark)",
        padding: isMobile ? "64px 6%" : "96px 5%",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? 40 : 72,
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background glows */}
      <div
        style={{
          position: "absolute",
          top: -80,
          left: -80,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(var(--accent-rgb),.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -60,
          right: "5%",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(var(--gold-rgb),.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Left text */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <AnimateIn animation="fadeIn">
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              color: "rgba(255,255,255,.25)",
              letterSpacing: ".15em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            // {t("infrastructure")}
          </div>
        </AnimateIn>

        <AnimateIn animation="slideUp" delay={0.1}>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: isMobile ? "clamp(26px,7vw,36px)" : "clamp(32px,4vw,62px)",
              color: "var(--text-inv)",
              lineHeight: 1.08,
              letterSpacing: "-.032em",
              marginBottom: 24,
            }}
          >
            {t("labsTitle")}
          </h2>
        </AnimateIn>

        <AnimateIn animation="slideUp" delay={0.18}>
          <p
            style={{
              fontFamily: "var(--body)",
              fontWeight: 300,
              fontSize: isMobile ? 14.5 : 16,
              color: "rgba(253,252,249,.46)",
              lineHeight: 1.84,
              marginBottom: 36,
            }}
          >
            {t("labsDesc")}
          </p>
        </AnimateIn>

        {features.map((f, i) => (
          <AnimateIn key={i} animation="slideRight" delay={0.22 + i * 0.07}>
            <div className="feature-bullet">
              <div className="dot" />
              <span
                style={{
                  fontFamily: "var(--body)",
                  fontWeight: 400,
                  fontSize: 15,
                  color: "rgba(253,252,249,.66)",
                }}
              >
                {f}
              </span>
            </div>
          </AnimateIn>
        ))}

        {/* Credential pills */}
        <AnimateIn animation="fadeIn" delay={0.6}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 32 }}>
            {["NSDC", "AICTE", "Autodesk", "Skill India"].map((c) => (
              <span
                key={c}
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  letterSpacing: ".1em",
                  color: "rgba(var(--gold-rgb),.6)",
                  textTransform: "uppercase",
                  padding: "5px 12px",
                  border: "1px solid rgba(var(--gold-rgb),.18)",
                  borderRadius: 999,
                  background: "rgba(var(--gold-rgb),.05)",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </AnimateIn>
      </div>

      {/* Right image grid */}
      <AnimateIn animation="slideLeft" delay={0.12}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
            position: "relative",
            zIndex: 2,
          }}
        >
          {labImages.map((img, i) => (
            <div
              key={i}
              className="img-hover"
              style={{
                height: isMobile ? 130 : 190,
                borderRadius: 6,
                overflow: "hidden",
                position: "relative",
                border: "1px solid rgba(255,255,255,.06)",
                boxShadow: "0 8px 24px rgba(0,0,0,.3)",
              }}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="img-zoom"
                style={{ objectFit: "cover" }}
                sizes={isMobile ? "50vw" : "25vw"}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,.6) 0%, transparent 55%)",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 12,
                  fontFamily: "var(--mono)",
                  fontSize: 9,
                  color: "rgba(255,255,255,.5)",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                }}
              >
                {img.label}
              </span>
            </div>
          ))}
        </div>
      </AnimateIn>
    </section>
  );
}
