"use client";
import { useEffect, useRef } from "react";

/**
 * Top-of-nav scroll progress bar. Deliberately self-contained: it owns its
 * own passive scroll listener and writes the bar's fill straight to the DOM
 * (a scaleX transform on a ref) inside rAF. Because it never lifts the scroll
 * position into React state, continuous scrolling does NOT re-render the
 * Navbar tree — the bar updates on the compositor via transform alone.
 */
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const p = docH > 0 ? Math.min(Math.max(window.scrollY / docH, 0), 1) : 0;
      const bar = barRef.current;
      if (bar) bar.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={barRef}
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        height: 2,
        width: "100%",
        transformOrigin: "left",
        transform: "scaleX(0)",
        background: "linear-gradient(to right, var(--accent), var(--accent-gold))",
        borderRadius: "0 1px 1px 0",
        willChange: "transform",
        pointerEvents: "none",
      }}
    />
  );
}
