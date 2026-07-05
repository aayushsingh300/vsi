"use client";
import { useMouse } from "@/hooks/useAnimations";

export default function MagneticCursor() {
  const mouse = useMouse();

  return (
    <>
      {/* Inner dot */}
      <div
        style={{
          position: "fixed",
          top: mouse.y - 4,
          left: mouse.x - 4,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "linear-gradient(135deg, var(--accent), var(--accent-gold))",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "top .05s linear, left .05s linear",
          mixBlendMode: "multiply",
        }}
      />
      {/* Outer ring */}
      <div
        style={{
          position: "fixed",
          top: mouse.y - 20,
          left: mouse.x - 20,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1.5px solid rgba(var(--accent-rgb),.22)",
          pointerEvents: "none",
          zIndex: 99998,
          transition: "top .14s ease, left .14s ease",
          background: "rgba(var(--accent-rgb),.03)",
        }}
      />
    </>
  );
}
