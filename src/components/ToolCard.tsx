"use client";

import React, { useState, useRef } from "react";
import { getToolMeta, ToolMeta } from "../data/tools";

interface ToolCardProps {
  toolName: string;
  className?: string;
  style?: React.CSSProperties;
  compact?: boolean; // Compact mode for catalog pills
}

// Render authentic software brand badges and thumbnails
function ToolThumbnail({ iconType, brandColor }: { iconType: ToolMeta["iconType"]; brandColor: string }) {
  switch (iconType) {
    case "photoshop":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #001E36 0%, #000B14 100%)",
            border: "1px solid rgba(49, 168, 255, 0.4)",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "inset 0 0 10px rgba(49, 168, 255, 0.2)",
          }}
        >
          <span style={{ fontFamily: "var(--sans)", fontSize: 14, fontWeight: 900, color: "#31A8FF", letterSpacing: "-0.05em" }}>
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
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "inset 0 0 10px rgba(255, 154, 0, 0.2)",
          }}
        >
          <span style={{ fontFamily: "var(--sans)", fontSize: 14, fontWeight: 900, color: "#FF9A00", letterSpacing: "-0.05em" }}>
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
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: "var(--sans)", fontSize: 14, fontWeight: 900, color: "#FF3366", letterSpacing: "-0.05em" }}>
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
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: "var(--sans)", fontSize: 14, fontWeight: 900, color: "#9999FF", letterSpacing: "-0.05em" }}>
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
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: "var(--sans)", fontSize: 14, fontWeight: 900, color: "#D199FF", letterSpacing: "-0.05em" }}>
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
            borderRadius: 8,
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
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <span style={{ fontFamily: "var(--sans)", fontSize: 13, fontWeight: 900, color: "#E52320", letterSpacing: "-0.02em" }}>
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
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: "var(--sans)", fontSize: 13, fontWeight: 900, color: "#00B4D8", letterSpacing: "-0.04em" }}>
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
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: "var(--sans)", fontSize: 14, fontWeight: 900, color: "#E51937" }}>
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
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: "var(--sans)", fontSize: 14, fontWeight: 900, color: "#0076D6" }}>
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
            borderRadius: 8,
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
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: "var(--sans)", fontSize: 12, fontWeight: 900, color: "#E61C24" }}>
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
            borderRadius: 8,
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
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: "var(--sans)", fontSize: 13, fontWeight: 900, color: "#00A389" }}>
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
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: "var(--sans)", fontSize: 14, fontWeight: 900, color: "#107C41" }}>
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
            borderRadius: 8,
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
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 15, fontWeight: 900, color: "#00C4CC" }}>
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
            borderRadius: 8,
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
  const [popoverPos, setPopoverPos] = useState<"top" | "bottom">("top");
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      if (rect.top < 220) {
        setPopoverPos("bottom");
      } else {
        setPopoverPos("top");
      }
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Compact Pill mode (used inside course catalog card lists)
  if (compact) {
    return (
      <div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsHovered(!isHovered)}
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          background: isHovered ? meta.accentBg : "var(--bg-card)",
          border: `1px solid ${isHovered ? meta.brandColor : "var(--border)"}`,
          borderRadius: 6,
          padding: "4px 9px",
          cursor: "pointer",
          transition: "all 0.2s ease",
          boxShadow: isHovered ? "0 4px 12px rgba(0,0,0,0.06)" : "none",
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
            fontSize: 11,
            fontWeight: 600,
            color: isHovered ? "var(--text)" : "var(--text-muted)",
          }}
        >
          {meta.name}
        </span>

        {/* Floating Inspector Popover */}
        {isHovered && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              ...(popoverPos === "top" ? { bottom: "100%", marginBottom: 8 } : { top: "100%", marginTop: 8 }),
              zIndex: 9999,
              width: 270,
              background: "var(--bg-card)",
              border: `1.5px solid ${meta.brandColor}60`,
              borderRadius: 10,
              padding: 14,
              boxShadow: "0 14px 36px rgba(0,0,0,0.16)",
              pointerEvents: "none",
              animation: "vsiFadeIn 0.2s ease-out forwards",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <div style={{ width: 28, height: 28, flexShrink: 0 }}>
                <ToolThumbnail iconType={meta.iconType} brandColor={meta.brandColor} />
              </div>
              <div>
                <h4 style={{ fontFamily: "var(--serif)", fontSize: 13, fontWeight: 700, color: "var(--text)", margin: 0 }}>
                  {meta.fullName}
                </h4>
                <span style={{ fontSize: 9.5, fontWeight: 600, color: meta.brandColor }}>
                  {meta.vendor || meta.category}
                </span>
              </div>
            </div>
            <p style={{ fontFamily: "var(--body)", fontSize: 11, color: "var(--text-muted)", lineHeight: 1.45, margin: "0 0 8px 0" }}>
              {meta.description}
            </p>
          </div>
        )}
      </div>
    );
  }

  // Full Card mode (used in "What you'll master" section across all course pages)
  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsHovered(!isHovered)}
      style={{
        position: "relative",
        background: "var(--bg-card)",
        border: `1px solid ${isHovered ? meta.brandColor : "var(--border-card)"}`,
        borderRadius: 12,
        padding: "12px 14px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        cursor: "pointer",
        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: isHovered ? "translateY(-2px)" : "none",
        boxShadow: isHovered
          ? `0 12px 28px -6px ${meta.brandColor}22, 0 4px 12px rgba(0,0,0,0.05)`
          : "0 2px 6px rgba(0,0,0,0.02)",
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
          borderRadius: 8,
          overflow: "hidden",
          transition: "transform 0.2s ease",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
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
            fontSize: 13.5,
            color: "var(--text)",
            display: "block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            letterSpacing: "-0.01em",
          }}
        >
          {meta.name}
        </span>
        <span
          style={{
            fontFamily: "var(--body)",
            fontSize: 11,
            color: isHovered ? meta.brandColor : "var(--text-muted)",
            display: "block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            transition: "color 0.2s ease",
          }}
        >
          {meta.vendor ? `${meta.vendor} • ${meta.category}` : meta.category}
        </span>
      </div>

      {/* Subtle details trigger icon */}
      <div
        style={{
          width: 16,
          height: 16,
          borderRadius: "50%",
          background: isHovered ? meta.brandColor : "rgba(var(--accent-rgb),0.06)",
          color: isHovered ? "#FFF" : "var(--text-faint)",
          fontSize: 9.5,
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "all 0.2s ease",
        }}
      >
        i
      </div>

      {/* Refined Floating Tool Inspector Card */}
      {isHovered && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            ...(popoverPos === "top" ? { bottom: "100%", marginBottom: 10 } : { top: "100%", marginTop: 10 }),
            zIndex: 99999,
            width: 300,
            background: "var(--bg-card)",
            border: `1.5px solid ${meta.brandColor}60`,
            borderRadius: 14,
            padding: "16px 18px",
            boxShadow: `0 18px 44px rgba(0,0,0,0.16), 0 4px 16px rgba(0,0,0,0.06)`,
            animation: "vsiFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            pointerEvents: "auto",
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
            <div style={{ width: 40, height: 40, flexShrink: 0 }}>
              <ToolThumbnail iconType={meta.iconType} brandColor={meta.brandColor} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 3 }}>
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: ".05em",
                    background: meta.accentBg,
                    color: meta.brandColor,
                    padding: "2px 6px",
                    borderRadius: 4,
                  }}
                >
                  {meta.category}
                </span>
                {meta.vendor && (
                  <span style={{ fontSize: 9.5, fontWeight: 600, color: "var(--text-muted)" }}>
                    {meta.vendor}
                  </span>
                )}
              </div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: 15, fontWeight: 700, color: "var(--text)", margin: 0, lineHeight: 1.25 }}>
                {meta.fullName}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5, margin: "0 0 10px 0" }}>
            {meta.description}
          </p>

          {/* Skills / Key Capabilities */}
          {meta.skills && meta.skills.length > 0 && (
            <div style={{ background: "var(--bg-muted)", borderRadius: 8, padding: "10px 12px", border: "1px solid var(--border)" }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: 9.5, fontWeight: 700, textTransform: "uppercase", color: "var(--text-muted)", letterSpacing: ".05em", display: "block", marginBottom: 6 }}>
                Core Capabilities Taught:
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {meta.skills.map((skill) => (
                  <div key={skill} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 11, fontWeight: 500, color: "var(--text)" }}>
                    <div
                      style={{
                        width: 13,
                        height: 13,
                        borderRadius: "50%",
                        background: meta.brandColor,
                        color: "#FFF",
                        fontSize: 8.5,
                        fontWeight: 800,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Endorsement */}
          <div style={{ marginTop: 10, display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 10, color: "var(--text-muted)" }}>
            <span>VSI Industry Standard</span>
            <span style={{ fontWeight: 700, color: meta.brandColor }}>100% Practical Training</span>
          </div>
        </div>
      )}
    </div>
  );
}
