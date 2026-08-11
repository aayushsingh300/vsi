"use client";

import { useState } from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

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
        // Clears the iOS home indicator and the Android gesture bar, which
        // otherwise sit under the button's lower third.
        bottom: "calc(20px + env(safe-area-inset-bottom))",
        right: "max(16px, env(safe-area-inset-right))",
        // Below the mobile nav panel (300). Both were 200, and since this
        // component mounts after <Navbar> in every page tree, it won the tie
        // and floated on top of the open menu.
        zIndex: 150,
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "var(--wa-green)",
        borderRadius: "var(--r-pill)",
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
      <WhatsAppIcon size={22} color="#fff" style={{ flexShrink: 0 }} />
      <span
        aria-hidden="true"
        style={{
          fontFamily: "var(--sans)",
          fontWeight: 700,
          fontSize: "var(--text-sm)",
          color: "var(--white)",
          letterSpacing: "var(--tr-caps)",
          opacity: hovered ? 1 : 0,
          transition: "opacity .25s ease",
        }}
      >
        Chat with us
      </span>
    </a>
  );
}
