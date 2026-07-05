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
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  // Only hide on client mount (prevents SSR invisible content)
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mounted, threshold]);

  const animClass = visible ? `a-${animation}` : "";
  const delayStyle = delay > 0 ? { animationDelay: `${delay}s` } : {};

  return (
    <Tag
      ref={ref}
      className={`${mounted && !visible ? "pre" : ""} ${animClass} ${className}`}
      style={{ ...style, ...delayStyle }}
    >
      {children}
    </Tag>
  );
}
