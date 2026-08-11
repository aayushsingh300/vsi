"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import OrgMark from "@/components/OrgMark";
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

const CRED_MARKS = ["NSDC", "AICTE", "Autodesk", "Skill India"];

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
          {/* The shared eyebrow, on-dark variant. */}
          <p
            className="eyebrow-label eyebrow-label--slash eyebrow-label--on-dark"
            style={{ marginBottom: 24 }}
          >
            {t("infrastructure")}
          </p>
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
              letterSpacing: "var(--tr-display)",
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
              fontSize: isMobile ? "var(--text-base)" : "var(--text-md)",
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
                  fontSize: "var(--text-base)",
                  color: "rgba(253,252,249,.66)",
                }}
              >
                {f}
              </span>
            </div>
          </AnimateIn>
        ))}

        {/* Credential marks — the bodies that recognise the labs, in their own
            livery. Each sits on a light plate: this section runs on --bg-dark,
            where a navy roundel or a black wordmark would simply disappear. */}
        <AnimateIn animation="fadeIn" delay={0.6}>
          <div
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              alignItems: "center",
              marginTop: 32,
              "--org-h": isMobile ? "13px" : "15px",
              "--plate-h": isMobile ? "32px" : "38px",
            } as React.CSSProperties}
          >
            {CRED_MARKS.map((c) => (
              <span key={c} title={c} className="cred-plate">
                <OrgMark name={c} />
              </span>
            ))}
          </div>
        </AnimateIn>

        {/* CTA — tour the centres.
            These were two hand-rolled buttons: their own fill, their own
            radius (3px against the system's 6), their own weight and size,
            and no uppercase — so the most prominent pair of actions on the
            homepage matched nothing else on it. */}
        <AnimateIn animation="fadeIn" delay={0.7}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 34 }}>
            <Link href="/centers" style={{ textDecoration: "none" }}>
              <button
                className="btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
              >
                <MapPin size={15} aria-hidden="true" /> Explore Our Centres{" "}
                <ArrowUpRight size={15} aria-hidden="true" />
              </button>
            </Link>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <button className="btn-secondary-on-dark">Book a Lab Visit</button>
            </Link>
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
                borderRadius: "var(--r-sm)",
                overflow: "hidden",
                position: "relative",
                border: "1px solid rgba(255,255,255,.06)",
                boxShadow: "var(--shadow-md)",
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
                  fontSize: "var(--text-xs)",
                  color: "rgba(255,255,255,.5)",
                  letterSpacing: "var(--tr-mono)",
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
