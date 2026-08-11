"use client";

import React, { useState } from "react";
import { getToolMeta, ToolMeta } from "../data/tools";

interface ToolCardProps {
  toolName: string;
  className?: string;
  style?: React.CSSProperties;
  compact?: boolean; // Compact mode for catalog pills
}

// Render authentic software brand badges and thumbnails
export function ToolThumbnail({ iconType, brandColor }: { iconType: ToolMeta["iconType"]; brandColor: string }) {
  switch (iconType) {
    case "photoshop":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #001E36 0%, #000B14 100%)",
            border: "1px solid rgba(49, 168, 255, 0.4)",
            borderRadius: "var(--r-sm)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "inset 0 0 10px rgba(49, 168, 255, 0.2)",
          }}
        >
          <span style={{ fontFamily: "var(--sans)", fontSize: "var(--text-base)", fontWeight: 900, color: "#31A8FF", letterSpacing: "-0.05em" }}>
            Ps
          </span>
        </div>
      );

    case "illustrator":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #330000 0%, #1A0000 100%)",
            border: "1px solid rgba(255, 154, 0, 0.4)",
            borderRadius: "var(--r-sm)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "inset 0 0 10px rgba(255, 154, 0, 0.2)",
          }}
        >
          <span style={{ fontFamily: "var(--sans)", fontSize: "var(--text-base)", fontWeight: 900, color: "#FF9A00", letterSpacing: "-0.05em" }}>
            Ai
          </span>
        </div>
      );

    case "indesign":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #33001A 0%, #1A000D 100%)",
            border: "1px solid rgba(255, 51, 102, 0.4)",
            borderRadius: "var(--r-sm)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: "var(--sans)", fontSize: "var(--text-base)", fontWeight: 900, color: "#FF3366", letterSpacing: "-0.05em" }}>
            Id
          </span>
        </div>
      );

    case "premiere":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #000033 0%, #00001A 100%)",
            border: "1px solid rgba(153, 153, 255, 0.4)",
            borderRadius: "var(--r-sm)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: "var(--sans)", fontSize: "var(--text-base)", fontWeight: 900, color: "#9999FF", letterSpacing: "-0.05em" }}>
            Pr
          </span>
        </div>
      );

    case "aftereffects":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #000033 0%, #1A0033 100%)",
            border: "1px solid rgba(153, 153, 255, 0.4)",
            borderRadius: "var(--r-sm)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: "var(--sans)", fontSize: "var(--text-base)", fontWeight: 900, color: "#D199FF", letterSpacing: "-0.05em" }}>
            Ae
          </span>
        </div>
      );

    case "coreldraw":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #006633 0%, #00331A 100%)",
            border: "1px solid rgba(0, 200, 100, 0.4)",
            borderRadius: "var(--r-sm)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "inset 0 0 8px rgba(0, 200, 100, 0.25)",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" fill="#00A859" fillOpacity="0.3" stroke="#00FF88" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="4" fill="#00FF88" />
          </svg>
        </div>
      );

    case "wilcom":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #330505 0%, #1A0000 100%)",
            border: "1px solid rgba(229, 35, 32, 0.4)",
            borderRadius: "var(--r-sm)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <span style={{ fontFamily: "var(--sans)", fontSize: "var(--text-sm)", fontWeight: 900, color: "#E52320", letterSpacing: "var(--tr-heading)" }}>
            W
          </span>
          <div style={{ position: "absolute", bottom: 2, right: 3, width: 6, height: 6, borderRadius: "50%", background: "#FFD700" }} />
        </div>
      );

    case "marvelous":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #002B36 0%, #00121A 100%)",
            border: "1px solid rgba(0, 180, 216, 0.4)",
            borderRadius: "var(--r-sm)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: "var(--sans)", fontSize: "var(--text-sm)", fontWeight: 900, color: "#00B4D8", letterSpacing: "var(--tr-display)" }}>
            MD
          </span>
        </div>
      );

    case "autocad":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #2B0505 0%, #140000 100%)",
            border: "1px solid rgba(229, 25, 55, 0.4)",
            borderRadius: "var(--r-sm)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: "var(--sans)", fontSize: "var(--text-base)", fontWeight: 900, color: "#E51937" }}>
            A
          </span>
        </div>
      );

    case "revit":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #001A33 0%, #000B17 100%)",
            border: "1px solid rgba(0, 118, 214, 0.4)",
            borderRadius: "var(--r-sm)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: "var(--sans)", fontSize: "var(--text-base)", fontWeight: 900, color: "#0076D6" }}>
            R
          </span>
        </div>
      );

    case "staad":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #001A26 0%, #000D14 100%)",
            border: "1px solid rgba(0, 102, 153, 0.4)",
            borderRadius: "var(--r-sm)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M4 4H20M4 20H20M7 4V20M17 4V20M7 12H17" stroke="#006699" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "solidworks":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #330000 0%, #170000 100%)",
            border: "1px solid rgba(230, 28, 36, 0.4)",
            borderRadius: "var(--r-sm)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: "var(--sans)", fontSize: "var(--text-sm)", fontWeight: 900, color: "#E61C24" }}>
            SW
          </span>
        </div>
      );

    case "python":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #0F2027 0%, #203A43 100%)",
            border: "1px solid rgba(55, 118, 171, 0.4)",
            borderRadius: "var(--r-sm)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C8 2 8 3.5 8 3.5V5.5H12V6H5C5 6 3 5.5 3 8.5C3 11.5 5 11.5 5 11.5H6.5V9.5C6.5 8 7.5 7 9 7H13.5C15 7 16 8 16 9.5V11C16 12.5 15 13.5 13.5 13.5H12V16.5C12 16.5 12.5 18 15 18C17.5 18 17.5 16.5 17.5 16.5V15H14V14.5H21C21 14.5 23 15 23 12C23 9 21 9 21 9H19.5V11C19.5 12.5 18.5 13.5 17 13.5H12.5C11 13.5 10 12.5 10 11V9.5C10 8 11 7 12.5 7H14V3.5C14 3.5 13.5 2 12 2Z" fill="#3776AB" />
          </svg>
        </div>
      );

    case "tally":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #002E27 0%, #001713 100%)",
            border: "1px solid rgba(0, 163, 137, 0.4)",
            borderRadius: "var(--r-sm)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: "var(--sans)", fontSize: "var(--text-sm)", fontWeight: 900, color: "#00A389" }}>
            Tally
          </span>
        </div>
      );

    case "excel":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #002411 0%, #001208 100%)",
            border: "1px solid rgba(16, 124, 65, 0.4)",
            borderRadius: "var(--r-sm)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: "var(--sans)", fontSize: "var(--text-base)", fontWeight: 900, color: "#107C41" }}>
            X
          </span>
        </div>
      );

    case "figma":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #2C120A 0%, #140804 100%)",
            border: "1px solid rgba(242, 78, 30, 0.4)",
            borderRadius: "var(--r-sm)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2H8.5C6.57 2 5 3.57 5 5.5C5 7.43 6.57 9 8.5 9H12V2Z" fill="#F24E1E" />
            <path d="M12 9H8.5C6.57 9 5 10.57 5 12.5C5 14.43 6.57 16 8.5 16H12V9Z" fill="#A259FF" />
            <path d="M12 16H8.5C6.57 16 5 17.57 5 19.5C5 21.43 6.57 23 8.5 23C10.43 23 12 21.43 12 19.5V16Z" fill="#0ACF83" />
            <circle cx="15.5" cy="5.5" r="3.5" fill="#FF7262" />
            <circle cx="15.5" cy="12.5" r="3.5" fill="#1ABCFE" />
          </svg>
        </div>
      );

    case "canva":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #00282A 0%, #001214 100%)",
            border: "1px solid rgba(0, 196, 204, 0.4)",
            borderRadius: "var(--r-sm)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "var(--text-base)", fontWeight: 900, color: "#00C4CC" }}>
            C
          </span>
        </div>
      );

    default:
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: `linear-gradient(135deg, ${brandColor}22 0%, ${brandColor}08 100%)`,
            border: `1px solid ${brandColor}40`,
            borderRadius: "var(--r-sm)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              border: `2px solid ${brandColor}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 4, height: 4, borderRadius: "50%", background: brandColor }} />
          </div>
        </div>
      );
  }
}

export function ToolCard({ toolName, className = "", style = {}, compact = false }: ToolCardProps) {
  const meta = getToolMeta(toolName);
  const [isHovered, setIsHovered] = useState(false);

  // A `popoverPos` state and the getBoundingClientRect() that fed it were
  // measured on every hover and never read — the popover they positioned no
  // longer exists. Removed: it forced a synchronous layout per mouseenter.

  // Compact Pill mode (used inside course catalog card lists)
  if (compact) {
    return (
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          background: "var(--bg-card)",
          border: "1px solid var(--border-card)",
          borderRadius: "var(--r-sm)",
          padding: "4px 9px",
          ...style,
        }}
        className={className}
      >
        <div style={{ width: 18, height: 18, flexShrink: 0 }}>
          <ToolThumbnail iconType={meta.iconType} brandColor={meta.brandColor} />
        </div>
        <span
          style={{
            fontFamily: "var(--sans)",
            fontSize: "var(--text-xs)",
            fontWeight: 600,
            color: "var(--text-muted)",
          }}
        >
          {meta.name}
        </span>
      </div>
    );
  }

  // Full Card mode
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        background: "var(--bg-card)",
        border: `1px solid ${isHovered ? meta.brandColor : "var(--border-card)"}`,
        borderRadius: "var(--r-md)",
        padding: "12px 14px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        // Hover moves two things: the border colour and a 1px rise. It used
        // to move five (border, transform, shadow, icon scale, label colour),
        // which is what made these cards feel rubbery under the cursor.
        transition: "border-color .2s ease, transform .2s ease, box-shadow .2s ease",
        transform: isHovered ? "translateY(-1px)" : "none",
        boxShadow: isHovered ? "var(--shadow-md)" : "var(--shadow-sm)",
        ...style,
      }}
      className={className}
    >
      {/* Authentic Software Brand Thumbnail Badge */}
      <div
        style={{
          width: 38,
          height: 38,
          flexShrink: 0,
          borderRadius: "var(--r-sm)",
          overflow: "hidden",
        }}
      >
        <ToolThumbnail iconType={meta.iconType} brandColor={meta.brandColor} />
      </div>

      {/* Software Titles & Metadata */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <span
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 700,
            fontSize: "var(--text-sm)",
            color: "var(--text)",
            display: "block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            letterSpacing: "var(--tr-body)",
          }}
        >
          {meta.name}
        </span>
        <span
          style={{
            fontFamily: "var(--body)",
            fontSize: "var(--text-xs)",
            color: "var(--text-muted)",
            display: "block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {meta.vendor ? `${meta.vendor} • ${meta.category}` : meta.category}
        </span>
      </div>
    </div>
  );
}
