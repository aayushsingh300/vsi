"use client";

import { useState } from "react";
import useIsMobile from "@/hooks/useIsMobile";
import { getToolMeta } from "@/data/tools";
import { ToolThumbnail } from "@/components/ToolCard";
import { Sparkles, ShieldCheck } from "lucide-react";

interface MasteredToolsProps {
  tools: string[];
}

export default function MasteredTools({ tools }: MasteredToolsProps) {
  const isMobile = useIsMobile(850);
  const [activeIdx, setActiveIdx] = useState(0);
  const [animatingKey, setAnimatingKey] = useState(0);

  if (!tools || tools.length === 0) return null;

  const handleSelect = (idx: number) => {
    if (idx === activeIdx) return;
    setActiveIdx(idx);
    setAnimatingKey((prev) => prev + 1);
  };

  const activeToolName = tools[activeIdx] || tools[0];
  const activeMeta = getToolMeta(activeToolName);

  return (
    <div
      style={{
        marginTop: 28,
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "420px 1fr",
        gap: isMobile ? 24 : 36,
        alignItems: "start",
      }}
    >
      {/* LEFT: Active Tool Inspector Stage (Sticky on Desktop) */}
      <div
        key={animatingKey}
        style={{
          position: isMobile ? "relative" : "sticky",
          top: 100,
          background: "var(--bg-card)",
          border: "1px solid var(--border-card)",
          borderRadius: 16,
          padding: isMobile ? "22px 20px" : "28px 30px",
          boxShadow: "0 12px 36px -8px rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          animation: "vsiFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          overflow: "hidden",
        }}
      >
        {/* Top Accent Line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: `linear-gradient(90deg, ${activeMeta.brandColor} 0%, var(--accent) 100%)`,
          }}
        />

        {/* Header Section */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
          <div
            style={{
              width: 52,
              height: 52,
              flexShrink: 0,
              borderRadius: 12,
              overflow: "hidden",
              border: `1.5px solid ${activeMeta.brandColor}40`,
              boxShadow: `0 4px 14px ${activeMeta.brandColor}25`,
            }}
          >
            <ToolThumbnail iconType={activeMeta.iconType} brandColor={activeMeta.brandColor} />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", marginBottom: 4 }}>
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 10,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: ".06em",
                  background: activeMeta.accentBg,
                  color: activeMeta.brandColor,
                  padding: "2px 8px",
                  borderRadius: 4,
                }}
              >
                {activeMeta.category}
              </span>
              {activeMeta.vendor && (
                <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--text-muted)" }}>
                  • {activeMeta.vendor}
                </span>
              )}
            </div>

            <h3
              style={{
                fontFamily: "var(--serif)",
                fontSize: 21,
                fontWeight: 700,
                color: "var(--text)",
                letterSpacing: "-.02em",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              {activeMeta.fullName}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--body)",
            fontWeight: 300,
            fontSize: 14.5,
            color: "var(--text-muted)",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {activeMeta.description}
        </p>

        {/* Core Capabilities List */}
        {activeMeta.skills && activeMeta.skills.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: ".06em",
                color: "var(--text-muted)",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Sparkles size={13} color={activeMeta.brandColor} />
              <span>Core Capabilities Taught</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {activeMeta.skills.map((skill) => (
                <div
                  key={skill}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: "var(--surface)",
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: "1px solid var(--border)",
                    fontFamily: "var(--sans)",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text)",
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: activeMeta.brandColor,
                      flexShrink: 0,
                    }}
                  />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Practical Training Footer Endorsement */}
        <div
          style={{
            marginTop: 4,
            padding: "10px 14px",
            borderRadius: 10,
            background: "rgba(var(--accent-rgb), 0.04)",
            border: "1px dashed rgba(var(--accent-rgb), 0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 12,
            fontFamily: "var(--body)",
            color: "var(--text-muted)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <ShieldCheck size={14} color="var(--accent)" />
            <span>VSI Industry Standard</span>
          </div>
          <span style={{ fontFamily: "var(--mono)", fontWeight: 600, color: "var(--accent)" }}>
            100% Practical Training
          </span>
        </div>
      </div>

      {/* RIGHT: Interactive Tool Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(2, 1fr)",
          gap: 12,
        }}
      >
        {tools.map((tName, i) => {
          const meta = getToolMeta(tName);
          const isActive = i === activeIdx;

          return (
            <button
              key={tName + i}
              onClick={() => handleSelect(i)}
              style={{
                width: "100%",
                textAlign: "left",
                background: "var(--bg-card)",
                border: isActive
                  ? "1.5px solid var(--accent)"
                  : "1px solid var(--border-card)",
                borderRadius: 12,
                padding: "14px 16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 12,
                boxShadow: isActive
                  ? "0 8px 24px -4px rgba(var(--accent-rgb), 0.18)"
                  : "0 2px 4px rgba(0,0,0,0.02)",
                transition: "all 0.2s ease",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Left active border indicator */}
              {isActive && (
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 4,
                    background: "var(--accent)",
                  }}
                />
              )}

              {/* Software Thumbnail Badge */}
              <div
                style={{
                  width: 38,
                  height: 38,
                  flexShrink: 0,
                  borderRadius: 8,
                  overflow: "hidden",
                  transition: "transform 0.2s ease",
                  transform: isActive ? "scale(1.05)" : "scale(1)",
                }}
              >
                <ToolThumbnail iconType={meta.iconType} brandColor={meta.brandColor} />
              </div>

              {/* Title & Subtitle */}
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
                    letterSpacing: "-.01em",
                  }}
                >
                  {meta.name}
                </span>
                <span
                  style={{
                    fontFamily: "var(--body)",
                    fontSize: 11,
                    color: isActive ? "var(--accent)" : "var(--text-muted)",
                    display: "block",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  {meta.vendor || meta.category}
                </span>
              </div>

              {/* Selection Radio Indicator */}
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  border: isActive
                    ? "4px solid var(--accent)"
                    : "1.5px solid var(--border)",
                  background: "transparent",
                  flexShrink: 0,
                  transition: "all 0.2s ease",
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
