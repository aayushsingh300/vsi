"use client";

import React, { useState, useRef, useEffect } from "react";
import { getToolMeta, ToolMeta } from "../data/tools";

interface ToolCardProps {
  toolName: string;
  className?: string;
  style?: React.CSSProperties;
  compact?: boolean; // Compact mode for catalog pills
}

// Render custom vector icons for each software/tool category
function ToolIcon({ iconType, brandColor }: { iconType: ToolMeta["iconType"]; brandColor: string }) {
  switch (iconType) {
    case "autocad":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke={brandColor} strokeWidth="2" strokeLinejoin="round" />
          <path d="M12 22V12" stroke={brandColor} strokeWidth="1.5" strokeDasharray="2 2" />
          <path d="M22 7L12 12L2 7" stroke={brandColor} strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2.5" fill={brandColor} />
        </svg>
      );
    case "staad":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H20M4 20H20M7 4V20M17 4V20M7 12H17" stroke={brandColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 7L17 17M17 7L7 17" stroke={brandColor} strokeWidth="1" strokeOpacity="0.4" />
        </svg>
      );
    case "civil3d":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 17C6 14 9 19 12 15C15 11 18 16 21 13" stroke={brandColor} strokeWidth="2" strokeLinecap="round" />
          <path d="M3 11C6 8 9 13 12 9C15 5 18 10 21 7" stroke={brandColor} strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
          <path d="M3 20H21" stroke={brandColor} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "revit":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="16" height="16" rx="2" stroke={brandColor} strokeWidth="2" />
          <path d="M4 10H20M10 4V20" stroke={brandColor} strokeWidth="1.5" />
          <path d="M14 14L18 18" stroke={brandColor} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "primavera":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke={brandColor} strokeWidth="1.5" />
          <path d="M7 8H12M7 12H17M7 16H14" stroke={brandColor} strokeWidth="2" strokeLinecap="round" />
          <circle cx="17" cy="8" r="1.5" fill={brandColor} />
        </svg>
      );
    case "msp":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V5Z" stroke={brandColor} strokeWidth="1.5" />
          <path d="M4 8H20M9 3V21" stroke={brandColor} strokeWidth="1.5" />
          <path d="M12 12H17M12 16H15" stroke={brandColor} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "photoshop":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="4" fill={brandColor} fillOpacity="0.15" stroke={brandColor} strokeWidth="1.5" />
          <text x="6.5" y="16.5" fill={brandColor} fontSize="11" fontWeight="800" fontFamily="sans-serif">Ps</text>
        </svg>
      );
    case "lumion":
    case "vray":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="7" stroke={brandColor} strokeWidth="2" />
          <path d="M12 2V5M12 19V22M2 12H5M19 12H22" stroke={brandColor} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "max3d":
    case "sketchup":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L3 8V16L12 21L21 16V8L12 3Z" stroke={brandColor} strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M12 3V12M12 12L21 8M12 12L3 8" stroke={brandColor} strokeWidth="1.5" />
        </svg>
      );
    case "solidworks":
    case "catia":
    case "inventor":
    case "creo":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="5" stroke={brandColor} strokeWidth="2" />
          <path d="M12 2V4M12 20V22M2 12H4M20 12H22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93" stroke={brandColor} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "plc":
    case "scada":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="5" width="16" height="14" rx="2" stroke={brandColor} strokeWidth="1.8" />
          <path d="M8 9H10M8 12H12M8 15H10M14 9V15M17 9V15" stroke={brandColor} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "python":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.9 2C8.6 2 8.7 3.4 8.7 3.4V5H12.2V5.5H5.4C5.4 5.5 3 5.2 3 8.5C3 11.8 5 11.6 5 11.6H6.1V10C6.1 8.3 7.5 6.9 9.2 6.9H13.7C15.4 6.9 16.7 8.3 16.7 10V11.2C16.7 12.9 15.3 14.3 13.7 14.3H12.2V16.8C12.2 16.8 12.6 18.5 15.6 18.5C18.6 18.5 18.5 17 18.5 17V15.4H15.1V14.9H21.8C21.8 14.9 24.2 15.2 24.2 11.9C24.2 8.6 22.2 8.8 22.2 8.8H21.1V10.4C21.1 12.1 19.7 13.5 18 13.5H13.5C11.8 13.5 10.4 12.1 10.4 10.4V9.2C10.4 7.5 11.8 6.1 13.5 6.1H15.1V3.6C15.1 3.6 14.7 2 11.9 2Z" fill={brandColor} transform="scale(0.85) translate(2,2)" />
        </svg>
      );
    case "excel":
    case "powerbi":
    case "tableau":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 19V5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19Z" stroke={brandColor} strokeWidth="1.5" />
          <path d="M8 17V12M12 17V9M16 17V6" stroke={brandColor} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "illustrator":
    case "indesign":
    case "coreldraw":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" stroke={brandColor} strokeWidth="1.8" />
          <circle cx="12" cy="12" r="3" fill={brandColor} />
        </svg>
      );
    default:
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="8" stroke={brandColor} strokeWidth="1.8" />
          <path d="M12 8V12L15 14" stroke={brandColor} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
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
      // If close to top of viewport, position popover below card
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
          gap: 5,
          background: isHovered ? meta.accentBg : "rgba(var(--accent-rgb),.06)",
          border: `1px solid ${isHovered ? meta.brandColor : "rgba(var(--accent-rgb),.15)"}`,
          borderRadius: 4,
          padding: "3px 8px",
          cursor: "pointer",
          transition: "all 0.2s ease",
          ...style,
        }}
        className={className}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <ToolIcon iconType={meta.iconType} brandColor={meta.brandColor} />
        </div>
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: ".02em",
            color: isHovered ? "var(--text)" : "var(--text-muted)",
          }}
        >
          {meta.name}
        </span>

        {/* Floating Hover Card Popover */}
        {isHovered && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              ...(popoverPos === "top" ? { bottom: "100%", marginBottom: 8 } : { top: "100%", marginTop: 8 }),
              zIndex: 9999,
              width: 280,
              background: "var(--bg-card)",
              border: `1.5px solid ${meta.brandColor}`,
              borderRadius: 10,
              padding: 14,
              boxShadow: "0 12px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08)",
              pointerEvents: "none",
              animation: "vsiFadeIn 0.2s ease-out forwards",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: meta.accentBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <ToolIcon iconType={meta.iconType} brandColor={meta.brandColor} />
              </div>
              <div>
                <h4 style={{ fontFamily: "var(--serif)", fontSize: 13, fontWeight: 700, color: "var(--text)", margin: 0, lineHeight: 1.2 }}>
                  {meta.fullName}
                </h4>
                <div style={{ display: "flex", gap: 4, marginTop: 2 }}>
                  <span style={{ fontSize: 9, fontWeight: 700, background: meta.accentBg, color: meta.brandColor, padding: "1px 5px", borderRadius: 3 }}>
                    {meta.category}
                  </span>
                  {meta.vendor && (
                    <span style={{ fontSize: 9, fontWeight: 600, color: "var(--text-muted)" }}>
                      • {meta.vendor}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <p style={{ fontFamily: "var(--body)", fontSize: 11, color: "var(--text-muted)", lineHeight: 1.45, margin: "0 0 8px 0" }}>
              {meta.description}
            </p>
            {meta.skills && meta.skills.length > 0 && (
              <div style={{ borderTop: "1px stroke var(--border)", paddingTop: 6, display: "flex", flexDirection: "column", gap: 3 }}>
                {meta.skills.map((s) => (
                  <div key={s} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10, color: "var(--text)" }}>
                    <span style={{ color: meta.brandColor, fontWeight: 800 }}>✓</span>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  // Full Card mode (used in "What you'll master" section)
  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsHovered(!isHovered)}
      style={{
        position: "relative",
        background: "var(--bg-card)",
        border: `1.5px solid ${isHovered ? meta.brandColor : "var(--border)"}`,
        borderRadius: 8,
        padding: "14px 16px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        cursor: "pointer",
        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: isHovered ? "translateY(-3px)" : "none",
        boxShadow: isHovered
          ? `0 10px 24px -6px ${meta.accentBg.replace("0.1", "0.3")}, 0 4px 12px rgba(0,0,0,0.06)`
          : "0 2px 6px rgba(0,0,0,0.02)",
        ...style,
      }}
      className={className}
    >
      {/* Software Visual Picture / Icon Container */}
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 8,
          background: meta.accentBg,
          border: `1px solid ${meta.brandColor}33`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "transform 0.2s ease",
          transform: isHovered ? "scale(1.08)" : "scale(1)",
        }}
      >
        <ToolIcon iconType={meta.iconType} brandColor={meta.brandColor} />
      </div>

      {/* Software Label */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <span
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 700,
            fontSize: 14,
            color: "var(--text)",
            display: "block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {meta.name}
        </span>
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10,
            color: isHovered ? meta.brandColor : "var(--text-muted)",
            display: "block",
            transition: "color 0.2s ease",
          }}
        >
          {meta.category}
        </span>
      </div>

      {/* Info indicator icon */}
      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: isHovered ? meta.brandColor : "rgba(var(--accent-rgb),0.08)",
          color: isHovered ? "#FFF" : "var(--text-muted)",
          fontSize: 10,
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "all 0.2s ease",
        }}
        title="Hover to view details"
      >
        i
      </div>

      {/* Interactive Floating Hover Card */}
      {isHovered && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            ...(popoverPos === "top" ? { bottom: "100%", marginBottom: 12 } : { top: "100%", marginTop: 12 }),
            zIndex: 99999,
            width: 320,
            background: "var(--bg-card)",
            border: `2px solid ${meta.brandColor}`,
            borderRadius: 12,
            padding: "16px 18px",
            boxShadow: `0 16px 40px ${meta.accentBg.replace("0.1", "0.4")}, 0 4px 16px rgba(0,0,0,0.12)`,
            animation: "vsiFadeIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            pointerEvents: "auto",
          }}
        >
          {/* Popover Header */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 10,
                background: meta.accentBg,
                border: `1.5px solid ${meta.brandColor}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <ToolIcon iconType={meta.iconType} brandColor={meta.brandColor} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span
                  style={{
                    fontSize: 9.5,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: ".06em",
                    background: meta.accentBg,
                    color: meta.brandColor,
                    padding: "2px 7px",
                    borderRadius: 4,
                    border: `1px solid ${meta.brandColor}40`,
                  }}
                >
                  {meta.category}
                </span>
                {meta.vendor && (
                  <span style={{ fontSize: 10, fontWeight: 600, color: "var(--text-muted)" }}>
                    {meta.vendor}
                  </span>
                )}
              </div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: 16, fontWeight: 700, color: "var(--text)", margin: "4px 0 0 0", lineHeight: 1.25 }}>
                {meta.fullName}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--text)", lineHeight: 1.55, margin: "0 0 12px 0" }}>
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
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        background: meta.brandColor,
                        color: "#FFF",
                        fontSize: 9,
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

          {/* Footer Badge */}
          <div style={{ marginTop: 10, display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 10, color: "var(--text-muted)" }}>
            <span>VSI Industry Standard Tool</span>
            <span style={{ fontWeight: 700, color: meta.brandColor }}>100% Practical Training</span>
          </div>
        </div>
      )}
    </div>
  );
}
