"use client";

import { useRef, useState, useEffect, ReactNode, ElementType } from "react";

interface AnimateInProps {
  children: ReactNode;
  animation?: "slideUp" | "slideLeft" | "slideRight" | "fadeIn" | "scaleIn";
  delay?: number;
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: ElementType;
}

/**
 * Wrapper component that reveals children with CSS animations
 * triggered by IntersectionObserver. SSR-safe: renders visible
 * by default, adds .pre (opacity:0) only on client mount.
 */
export default function AnimateIn({
  children,
  animation = "slideUp",
  delay = 0,
  threshold = 0.1,
  className = "",
  style = {},
  as: Tag = "div",
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  // "idle"   → visible, no animation (matches SSR; the ONLY state ever painted
  //            for content that is already on screen, so it never flickers).
  // "hidden" → opacity:0, applied only to elements below the fold, where the
  //            hide is off-screen and invisible to the user.
  // "reveal" → play the entrance animation as the element scrolls into view.
  const [phase, setPhase] = useState<"idle" | "hidden" | "reveal">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const inView = r.top < window.innerHeight && r.bottom > 0;
    // Already on screen at mount → leave it exactly as SSR painted it. No hide,
    // no re-animation, no flash.
    if (inView) return;

    // Below the fold → safe to hide now (unseen) and animate in on scroll.
    setPhase("hidden");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("reveal");
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const stateClass = phase === "hidden" ? "pre" : phase === "reveal" ? `a-${animation}` : "";
  const delayStyle = phase === "reveal" && delay > 0 ? { animationDelay: `${delay}s` } : {};

  return (
    <Tag
      ref={ref}
      className={`${stateClass} ${className}`}
      style={{ ...style, ...delayStyle }}
    >
      {children}
    </Tag>
  );
}
