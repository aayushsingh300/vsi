"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { ArrowUpRight, Award, Users, Briefcase, Building2 } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import AnimateIn from "@/components/AnimateIn";
import OrgMark from "@/components/OrgMark";
import { CREDS } from "@/data/content";
import { orgLogo } from "@/data/assets";
import { useLang } from "@/context/LangContext";

/**
 * The navbar is `position: sticky`, i.e. it sits *in flow* and eats the top of
 * the viewport before the hero begins. A plain `100vh` hero therefore overflows
 * the first screen by exactly the nav's height, which is what produced the dead
 * band above and below the content.
 *
 * This is deliberately a constant rather than the live `--nav-h` token: that
 * token shrinks 68 → 58 on scroll, and feeding it into the hero's height would
 * resize the section mid-scroll and jerk every section below it upward.
 */
const NAV_H = 68;

/**
 * The accreditation marks split into two balanced lines — 3 + 2 for today's
 * five. The stats column they sit in is ~360px wide, too narrow for one line of
 * five legible marks, and letting `flex-wrap` choose the break gave a different
 * split at every phone width (see `.hero-accred-row`). Splitting down the middle
 * keeps the shorter line last at any count, and where the panel is wide the two
 * groups rejoin into a single row.
 */
const CRED_LINES = [
  CREDS.slice(0, Math.ceil(CREDS.length / 2)),
  CREDS.slice(Math.ceil(CREDS.length / 2)),
].filter((line) => line.length > 0);

/* ── Animated counter hook ── */
function useCounter(target: number, duration: number, go: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!go) return;
    const t0 = performance.now();
    function tick(now: number) {
      const p = Math.min((now - t0) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * target));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [go, target, duration]);
  return val;
}

/* ── Single metric cell in the 2×2 grid ── */
function GridStatCell({
  val,
  suffix,
  label,
  tag,
  icon: Icon,
  go,
  delay,
}: {
  val: number;
  suffix: string;
  label: string;
  tag: string;
  icon: React.ElementType;
  go: boolean;
  delay: number;
}) {
  const count = useCounter(val, val > 1000 ? 2200 : 1500, go);
  const display =
    count >= 1000
      ? (count / 1000).toFixed(count % 1000 === 0 ? 0 : 1) + "K"
      : String(count);

  return (
    <AnimateIn animation="slideUp" delay={delay} className="hero-stat">
      <div className="hero-stat-top">
        <div className="hero-stat-icon">
          <Icon size={16} />
        </div>
        <span className="hero-stat-tag">{tag}</span>
      </div>

      <div className="hero-stat-num">
        {display}
        <span style={{ color: "var(--accent-orange)", marginLeft: 2 }}>
          {suffix}
        </span>
      </div>

      <div className="hero-stat-label">{label}</div>
    </AnimateIn>
  );
}

export default function HeroVideo() {
  const { t } = useLang();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // A looping full-bleed video is exactly the kind of motion this setting
    // exists to suppress; the poster frame carries the same composition.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.pause();
    } else {
      v.play().catch(() => {});
    }

    const id = setTimeout(() => setLoaded(true), 600);
    return () => clearTimeout(id);
  }, []);

  return (
    <>
      <style>{`
        /* ─────────────  Shell  ───────────── */
        .hero {
          position: relative;
          width: 100%;
          /* The hero owns most of the first screen but not all of it. A block
             this short centred inside a full-viewport box left ~200px of dead
             air above and below it, and padding cannot claw that back — the
             padding sits *inside* the centred box, so the slack splits the same
             either way. Trimming the box itself is the only lever: 80svh puts
             the bands at ~145px on a 900px-tall laptop and lets the next
             section peek, which also signals that the page scrolls.
             The calc() term keeps the hero inside the first screen on short
             displays; the 540px floor stops it collapsing on very short ones.
             svh keeps mobile browsers' collapsing URL bar from adding a phantom
             scroll; the vh line is the fallback for older engines. */
          min-height: clamp(540px, 80vh, calc(100vh - ${NAV_H}px));
          min-height: clamp(540px, 80svh, calc(100svh - ${NAV_H}px));
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          background: #0a0f1a;
        }

        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .hero-veil { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
        .hero-veil-linear {
          background: linear-gradient(180deg,
            rgba(10,15,26,.76) 0%,  rgba(10,15,26,.35) 30%,
            rgba(10,15,26,.25) 50%, rgba(10,15,26,.55) 75%,
            rgba(20,17,13,1) 100%);
        }
        .hero-veil-radial {
          background: radial-gradient(ellipse 90% 80% at 50% 45%,
            transparent 0%, rgba(10,15,26,.65) 100%);
        }
        .hero-glow {
          position: absolute; right: 5%; bottom: 8%;
          width: 180px; height: 180px; z-index: 1; pointer-events: none;
          background: radial-gradient(circle, rgba(255,255,255,.06) 0%, transparent 70%);
          filter: blur(40px);
        }
        .hero-blend {
          position: absolute; left: 0; right: 0; bottom: 0;
          height: clamp(90px, 14vh, 170px);
          z-index: 2; pointer-events: none;
          background: linear-gradient(to bottom,
            transparent 0%, rgba(20,17,13,.5) 40%, #14110D 100%);
        }

        /* ─────────────  Layout  ───────────── */
        .hero-inner {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 1560px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(340px, 400px);
          align-items: center;
          gap: clamp(36px, 3.4vw, 56px);
          /* Symmetric block padding: the section centres its own content, so
             lopsided padding only pushes the composition off-centre. The vh
             term lets a short laptop screen compress instead of scrolling. */
          padding-block: clamp(40px, 7vh, 76px);
          padding-inline: clamp(20px, 5vw, 72px);
        }

        .hero-copy { max-width: 920px; }

        /* ─────────────  Copy  ───────────── */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 7px 18px 7px 12px;
          border-radius: 100px;
          background: rgba(255,255,255,.06);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,.12);
          font-family: var(--mono);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: rgba(255,255,255,.7);
          margin-bottom: clamp(18px, 2.6vh, 30px);
        }
        .hero-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent-green);
          box-shadow: 0 0 10px var(--accent-green-glow);
          animation: hero-pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        .hero-title {
          font-family: var(--serif);
          font-weight: 700;
          /* One continuous ramp instead of a mobile/desktop step: ~36px at
             390px, ~51px at 900px, 72px past 1600px. */
          font-size: clamp(34px, 1.53rem + 2.98vw, 72px);
          line-height: 1.06;
          letter-spacing: -.035em;
          color: #fff;
          text-shadow: 0 4px 24px rgba(0,0,0,.4);
          margin-bottom: clamp(14px, 2.2vh, 22px);
        }

        .hero-rule {
          width: 64px; height: 3px; border-radius: 2px;
          background: linear-gradient(90deg, var(--accent), var(--accent-orange));
          transform-origin: left;
          animation: hero-line-draw 1s var(--ease-expo) .4s both;
          margin-bottom: clamp(14px, 2.2vh, 22px);
        }

        .hero-desc {
          font-family: var(--body);
          font-weight: 400;
          font-size: clamp(15px, .9rem + .35vw, 18px);
          line-height: 1.7;
          color: rgba(255,255,255,.88);
          text-shadow: 0 2px 12px rgba(0,0,0,.5);
          /* Measure-based cap holds the line length readable at every width. */
          max-width: 56ch;
          margin-bottom: clamp(22px, 3.4vh, 34px);
        }

        .hero-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .hero-cred { display: flex; align-items: center; gap: 6px; }
        .hero-cred-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 6px var(--accent-glow);
          flex-shrink: 0;
        }
        .hero-cred-label {
          font-family: var(--mono);
          font-size: 9px;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: rgba(255,255,255,.42);
          white-space: nowrap;
        }

        /* ─────────────  Metrics  ───────────── */
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(10px, 1vw, 14px);
          width: 100%;
          justify-self: end;
        }
        .hero-stat {
          display: flex;
          flex-direction: column;
          padding: clamp(14px, 1.5vw, 20px);
          border-radius: 14px;
          background: rgba(255,255,255,.05);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,.1);
        }
        .hero-stat-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: clamp(10px, 1.2vw, 14px);
        }
        .hero-stat-icon {
          width: 32px; height: 32px;
          border-radius: 9px;
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.12);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,.85);
          flex-shrink: 0;
        }
        .hero-stat-tag {
          font-family: var(--mono);
          font-size: 9px;
          font-weight: 500;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: rgba(255,255,255,.4);
        }
        .hero-stat-num {
          font-family: var(--serif);
          font-weight: 700;
          font-size: clamp(30px, 2.5vw, 44px);
          line-height: 1;
          letter-spacing: -.02em;
          color: #fff;
          margin-bottom: 4px;
        }
        .hero-stat-label {
          font-family: var(--sans);
          font-weight: 500;
          font-size: clamp(12px, .72rem + .15vw, 13px);
          line-height: 1.3;
          color: rgba(255,255,255,.75);
        }

        /* ─────────────  Accreditation strip  ─────────────
           The marks used to sit under the CTAs on white plates, which read as a
           second row of buttons competing with the actual buttons above them.
           They belong with the metrics: both are third-party proof, so they now
           share one panel. Spanning the full grid width makes the strip the
           base of the stats block rather than a fifth tile.

           Knocking the artwork out to white is what lets them blend — the
           plates only existed to give brand colours a light ground, and without
           colours to protect the plates go too. Everything in the panel is now
           white type on veiled glass. */
        .hero-accred {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          gap: clamp(10px, 1.1vw, 13px);
          padding: clamp(13px, 1.4vw, 17px) clamp(14px, 1.5vw, 20px);
          border-radius: 14px;
          /* A shade quieter than a stat tile: supporting proof, not a metric. */
          background: rgba(255,255,255,.035);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,.08);
        }
        /* The marks are pre-grouped into balanced lines in the markup rather
           than left to flex-wrap to find its own break. Free wrapping keys off
           the marks' intrinsic widths, so the split lurched between 3+2, 4+1 and
           1+2+2 across ordinary phone widths — every orphan needing a different
           size tweak to chase away. Grouping fixes the split at 3+2 everywhere.

           Each line is then a grid of EQUAL columns rather than a flex row of
           intrinsic widths. Packed left, the five marks — which run from a
           28px roundel to a 109px wordmark — left a ragged hole at the end of
           the short line and clumped the wide ones together; on equal columns
           every mark owns the same slice of the panel and centres inside it,
           so both lines read as one evenly-spaced block. */
        .hero-accred-row {
          display: flex;
          flex-direction: column;
          row-gap: clamp(10px, 1.2vw, 14px);
          /* Read by OrgMark; one value drives every mark in the row. Set for
             legibility on the three marks that carry type, and small enough
             that a line of three still clears a 320px screen. */
          --org-h: 15px;
        }
        .hero-accred-line {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: minmax(0, 1fr);
          align-items: center;
          column-gap: clamp(10px, 1.2vw, 14px);
        }
        .hero-accred-mark {
          display: flex;
          align-items: center;
          justify-content: center;
          /* One row height for every mark, so a 1:1 roundel and a 9:1 wordmark
             sit on the same baseline band instead of bobbing against it. */
          min-height: calc(var(--org-h) * 1.85);
          filter: brightness(0) invert(1);
          opacity: .62;
          transition: opacity .28s ease;
        }
        /* The artwork keeps its own aspect (OrgMark sizes it) but can never
           outgrow its column — Autodesk's wordmark is 4× the width of NSDC's
           roundel at the same height. */
        .hero-accred-mark > span { max-width: 100%; }
        .hero-accred-mark:hover { opacity: .95; }

        /* ─────────────  Scroll cue  ───────────── */
        .hero-scroll {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 4;
          opacity: .35;
          animation: hero-scroll-bob 2.5s ease-in-out infinite;
        }
        .hero-scroll-track {
          width: 20px; height: 30px;
          border-radius: 12px;
          border: 1.5px solid rgba(255,255,255,.35);
          display: flex; justify-content: center;
          padding-top: 5px;
        }
        .hero-scroll-bar {
          width: 2px; height: 7px; border-radius: 2px;
          background: rgba(255,255,255,.5);
          animation: hero-scroll-bob 2.5s ease-in-out infinite;
        }

        /* ─────────────  Breakpoints  ───────────── */
        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: minmax(0, 1fr);
            gap: clamp(32px, 5vh, 44px);
            padding-block: clamp(36px, 6vh, 60px) clamp(48px, 8vh, 72px);
          }
          .hero-copy { max-width: 100%; }
          .hero-stats { justify-self: stretch; }
        }
        /* Below this the cue has nowhere to sit without colliding with the
           credentials ribbon, and on touch the affordance is redundant. */
        @media (max-height: 720px), (max-width: 900px) {
          .hero-scroll { display: none; }
        }
        @media (max-width: 640px) {
          /* Three equal columns of a 320px screen are ~100px each; this is the
             largest height at which the widest mark still clears one. */
          .hero-accred-row { --org-h: 13px; }
        }
        @media (max-width: 380px) {
          /* Scoped to the metric tiles: the same tag style labels the marks
             below, where it is the only thing naming what they are. */
          .hero-stat .hero-stat-tag { display: none; }
        }

        /* ─────────────  Motion  ───────────── */
        @keyframes hero-pulse {
          0%, 100% { opacity: .45; transform: scale(1); }
          50%      { opacity: .25; transform: scale(1.15); }
        }
        @keyframes hero-line-draw {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes hero-scroll-bob {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(6px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-dot,
          .hero-rule,
          .hero-scroll,
          .hero-scroll-bar { animation: none; }
        }
      `}</style>

      <section id="home" className="hero">
        {/* ─── Video background ─── */}
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source
            src="/videos/in_this_duration_i_want_such.mp4"
            type="video/mp4"
          />
        </video>

        {/* ─── Overlay stack for legibility ─── */}
        <div aria-hidden="true" className="hero-veil hero-veil-linear" />
        <div aria-hidden="true" className="hero-veil hero-veil-radial" />
        <div aria-hidden="true" className="hero-glow" />

        {/* ─── Content ─── */}
        <div className="hero-inner">
          {/* LEFT: headline & copy */}
          <div className="hero-copy">
            <AnimateIn animation="slideUp" delay={0} className="hero-badge">
              <span className="hero-dot" />
              {t("heroTag")}
            </AnimateIn>

            <AnimateIn animation="slideUp" delay={0.12}>
              <h1 className="hero-title">
                {t("heroTitle1")}
                <br />
                {t("heroTitle2")}{" "}
                <span style={{ color: "var(--accent-orange)" }}>
                  {t("heroTitle3")}
                </span>
                {t("heroTitle4") && (
                  <>
                    <br />
                    {t("heroTitle4")}
                  </>
                )}
              </h1>
            </AnimateIn>

            <div aria-hidden="true" className="hero-rule" />

            <AnimateIn animation="slideUp" delay={0.22}>
              <p className="hero-desc">{t("heroDesc")}</p>
            </AnimateIn>

            <AnimateIn animation="slideUp" delay={0.32} className="hero-actions">
              <Link href="/courses" style={{ textDecoration: "none" }}>
                <button
                  className="btn-primary"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 13,
                    fontWeight: 600,
                    padding: "14px 32px",
                    borderRadius: "var(--r-sm)",
                    boxShadow: "0 0 24px rgba(0,119,204,0.35)",
                  }}
                >
                  {t("exploreCourses")} <ArrowUpRight size={14} />
                </button>
              </Link>

              <Link href="/contact" style={{ textDecoration: "none" }}>
                <button
                  className="btn-secondary-on-dark"
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    padding: "14px 28px",
                    borderRadius: "var(--r-sm)",
                  }}
                >
                  {t("freeCounseling")}
                </button>
              </Link>

              <a
                href="https://wa.me/919431103263"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                style={{ textDecoration: "none" }}
              >
                <button className="btn-wa wa-pulse">
                  <WhatsAppIcon size={15} />
                </button>
              </a>
            </AnimateIn>
          </div>

          {/* RIGHT: 2×2 metrics grid */}
          <div className="hero-stats">
            <GridStatCell
              val={25}
              suffix="+"
              label="Years Experience"
              tag="LEGACY"
              icon={Award}
              go={loaded}
              delay={0.3}
            />
            <GridStatCell
              val={45000}
              suffix="+"
              label="Students Placed"
              tag="CAREERS"
              icon={Users}
              go={loaded}
              delay={0.4}
            />
            <GridStatCell
              val={6000}
              suffix="+"
              label="Annual Job Offers"
              tag="HIRING"
              icon={Briefcase}
              go={loaded}
              delay={0.5}
            />
            <GridStatCell
              val={50}
              suffix="+"
              label="Training Centres"
              tag="NATIONWIDE"
              icon={Building2}
              go={loaded}
              delay={0.6}
            />

            <AnimateIn animation="fadeIn" delay={0.7} className="hero-accred">
              <span className="hero-stat-tag">Accredited &amp; Affiliated</span>
              <div className="hero-accred-row">
                {CRED_LINES.map((line, i) => (
                  <div key={i} className="hero-accred-line">
                    {line.map((c) =>
                      orgLogo(c) ? (
                        <span key={c} className="hero-accred-mark" title={c}>
                          <OrgMark name={c} />
                        </span>
                      ) : (
                        <div key={c} className="hero-cred">
                          <span className="hero-cred-dot" />
                          <span className="hero-cred-label">{c}</span>
                        </div>
                      )
                    )}
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>

        {/* ─── Bottom cinematic blend ─── */}
        <div aria-hidden="true" className="hero-blend" />

        {/* ─── Scroll indicator ─── */}
        <AnimateIn animation="fadeIn" delay={1.1} className="hero-scroll">
          <div className="hero-scroll-track">
            <div className="hero-scroll-bar" />
          </div>
        </AnimateIn>
      </section>
    </>
  );
}
