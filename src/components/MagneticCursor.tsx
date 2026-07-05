"use client";
import { useEffect, useState } from "react";
import { useMouse } from "@/hooks/useAnimations";

export default function MagneticCursor() {
  const mouse = useMouse();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only show the custom cursor on devices with a real pointer (mouse /
    // trackpad). Touch devices — which have no hover and a coarse pointer —
    // must never see the dot + ring, and synthetic mousemove from taps
    // would otherwise make it appear and stick.
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Inner dot — positioned with transform (translate3d) so it lives on
          its own GPU layer and never forces the page to repaint on scroll. */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "linear-gradient(135deg, var(--accent), var(--accent-gold))",
          pointerEvents: "none",
          zIndex: 99999,
          transform: `translate3d(${mouse.x - 4}px, ${mouse.y - 4}px, 0)`,
          transition: "transform .05s linear",
          willChange: "transform",
        }}
      />
      {/* Outer ring */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1.5px solid rgba(var(--accent-rgb),.22)",
          pointerEvents: "none",
          zIndex: 99998,
          transform: `translate3d(${mouse.x - 20}px, ${mouse.y - 20}px, 0)`,
          transition: "transform .14s ease",
          background: "rgba(var(--accent-rgb),.03)",
          willChange: "transform",
        }}
      />
    </>
  );
}
