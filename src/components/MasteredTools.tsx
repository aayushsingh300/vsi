"use client";

import { useState } from "react";
import useIsMobile from "@/hooks/useIsMobile";
import { getToolMeta } from "@/data/tools";
import { ToolThumbnail } from "@/components/ToolCard";
import { CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";

interface MasteredToolsProps {
  tools: string[];
}

export default function MasteredTools({ tools }: MasteredToolsProps) {
  const isMobile = useIsMobile(768);
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
    <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Tool Selection Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : `repeat(${Math.min(tools.length, 4)}, 1fr)`,
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
                background: isActive
                  ? "var(--bg-card)"
                  : "var(--bg-card)",
                border: isActive
                  ? `1.5px solid ${meta.brandColor}`
                  : "1px solid var(--border-card)",
                borderRadius: 12,
                padding: isMobile ? "12px 12px" : "14px 16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 12,
                boxShadow: isActive
                  ? `0 8px 20px -4px ${meta.brandColor}25, 0 2px 6px rgba(0,0,0,0.04)`
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
                    background: meta.brandColor,
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
                    fontSize: isMobile ? 13 : 14,
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
                    color: isActive ? meta.brandColor : "var(--text-muted)",
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

              {/* Active Indicator Radio Dot */}
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  border: isActive
                    ? `4px solid ${meta.brandColor}`
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

      {/* Grounded Tool Inspector Showcase Panel */}
      <div
        key={animatingKey}
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border-card)",
          borderRadius: 16,
          padding: isMobile ? "20px 18px" : "28px 32px",
          position: "relative",
          boxShadow: "0 12px 32px -8px rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          gap: 18,
          animation: "vsiFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          overflow: "hidden",
        }}
      >
        {/* Top Accent Strip */}
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
        <div
          style={{
            display: "flex",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between",
            flexDirection: isMobile ? "column" : "row",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 48, height: 48, flexShrink: 0, borderRadius: 10, overflow: "hidden" }}>
              <ToolThumbnail iconType={activeMeta.iconType} brandColor={activeMeta.brandColor} />
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
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
                    border: `1px solid ${activeMeta.brandColor}30`,
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
                  fontSize: isMobile ? 18 : 22,
                  fontWeight: 700,
                  color: "var(--text)",
                  letterSpacing: "-.02em",
                  margin: 0,
                }}
              >
                {activeMeta.fullName}
              </h3>
            </div>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "4px 12px",
              background: "rgba(var(--accent-rgb), 0.06)",
              border: "1px solid rgba(var(--accent-rgb), 0.16)",
              borderRadius: 999,
              color: "var(--accent)",
              fontSize: 11,
              fontFamily: "var(--mono)",
              fontWeight: 500,
            }}
          >
            <Sparkles size={13} />
            <span>Mastery Tool</span>
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--body)",
            fontWeight: 300,
            fontSize: isMobile ? 14 : 15,
            color: "var(--text-muted)",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {activeMeta.description}
        </p>

        {/* Core Capabilities */}
        {activeMeta.skills && activeMeta.skills.length > 0 && (
          <div
            style={{
              background: "var(--bg-muted)",
              borderRadius: 12,
              padding: isMobile ? "14px 16px" : "18px 22px",
              border: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: ".06em",
                color: "var(--text-muted)",
                marginBottom: 12,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <CheckCircle2 size={14} color={activeMeta.brandColor} />
              <span>Core Skills & Workflows Taught</span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                gap: 12,
              }}
            >
              {activeMeta.skills.map((skill) => (
                <div
                  key={skill}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "var(--bg-card)",
                    padding: "8px 12px",
                    borderRadius: 8,
                    border: "1px solid var(--border-card)",
                    fontFamily: "var(--sans)",
                    fontSize: 12.5,
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

        {/* Practical Training Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 8,
            borderTop: "1px solid var(--border)",
            fontSize: 12,
            fontFamily: "var(--body)",
            color: "var(--text-muted)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <ShieldCheck size={14} color="var(--accent)" />
            <span>VSI Industry Standard Curriculum</span>
          </div>
          <span style={{ fontFamily: "var(--mono)", fontWeight: 600, color: activeMeta.brandColor }}>
            100% Practical Lab Training
          </span>
        </div>
      </div>
    </div>
  );
}
