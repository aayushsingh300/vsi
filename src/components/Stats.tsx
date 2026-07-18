"use client";

import AnimateIn from "@/components/AnimateIn";
import { useInView, useCountUp } from "@/hooks/useAnimations";
import useIsMobile from "@/hooks/useIsMobile";
import { STATS } from "@/data/content";

function StatItem({
  val, sfx, lbl, go, delay, isLast, isMobile,
}: {
  val: number; sfx: string; lbl: string; go: boolean; delay: number; isLast: boolean; isMobile: boolean;
}) {
  const count = useCountUp(val, val > 1000 ? 2200 : 1600, go);
  const display = count >= 1000
    ? (count / 1000).toFixed(count % 1000 === 0 ? 0 : 1) + "K"
    : String(count);

  return (
    <AnimateIn
      animation="slideUp"
      delay={delay}
      className="stat-card"
      style={{
        padding: isMobile ? "28px 20px" : "52px 36px",
        borderRight: !isLast && !isMobile ? "1px solid var(--border)" : "none",
        borderBottom: isMobile && !isLast ? "1px solid var(--border)" : "none",
        background: "var(--bg-card)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient gradient corner */}
      <div
        style={{
          position: "absolute",
          top: -20,
          right: -20,
          width: 100,
          height: 100,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(var(--momentum-orange-rgb),.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Number */}
      <div
        style={{
          fontFamily: "var(--serif)",
          fontWeight: 700,
          fontSize: isMobile ? "clamp(32px,9vw,44px)" : "clamp(44px,5vw,80px)",
          lineHeight: 1,
          letterSpacing: "-.04em",
          color: go ? "var(--accent-orange)" : "var(--text)",
          transition: "color .4s ease",
        }}
      >
        {display}{sfx}
      </div>

      {/* Label */}
      <div
        style={{
          fontFamily: "var(--sans)",
          fontWeight: 600,
          fontSize: 11,
          letterSpacing: ".16em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          marginTop: 10,
        }}
      >
        {lbl}
      </div>

      {/* Underline accent */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "linear-gradient(90deg, var(--accent-orange), var(--accent))",
          transform: go ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: `transform ${0.8 + delay}s var(--ease-expo)`,
        }}
      />
    </AnimateIn>
  );
}

export default function Stats() {
  const [ref, visible] = useInView();
  const isMobile = useIsMobile(640);

  return (
    <div ref={ref} style={{ marginTop: isMobile ? 24 : 80 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          boxShadow: "inset 0 1px 0 rgba(var(--accent-rgb),.06)",
        }}
      >
        {STATS.map((s, i) => (
          <StatItem
            key={i}
            val={s.val}
            sfx={s.sfx}
            lbl={s.lbl}
            go={visible}
            delay={i * 0.1}
            isLast={i === STATS.length - 1}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
}
