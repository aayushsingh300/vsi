"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function FloatingWA() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://wa.me/919431103263"
      target="_blank"
      rel="noopener noreferrer"
      className="wa-pulse"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 200,
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "var(--wa-green)",
        borderRadius: 999,
        padding: "14px 18px",
        maxWidth: hovered ? 200 : 52,
        height: 52,
        overflow: "hidden",
        transition: "max-width .4s cubic-bezier(.16,1,.3,1), box-shadow .3s ease",
        boxShadow: hovered
          ? "0 8px 32px rgba(37,211,102,.4)"
          : "0 4px 16px rgba(37,211,102,.3)",
        whiteSpace: "nowrap",
      }}
    >
      <MessageCircle size={22} color="#fff" style={{ flexShrink: 0 }} />
      <span
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: 13,
          color: "var(--white)",
          letterSpacing: ".05em",
          opacity: hovered ? 1 : 0,
          transition: "opacity .25s ease",
        }}
      >
        Chat with us
      </span>
    </a>
  );
}
