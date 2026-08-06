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
        marginTop: 32,
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 440px",
        gap: isMobile ? 24 : 32,
        alignItems: "start",
      }}
    >
      {/* LEFT: Interactive Tool Cards Matrix */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(2, 1fr)",
          gap: 10,
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
                padding: "12px 14px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 12,
                boxShadow: isActive
                  ? "0 4px 16px rgba(var(--accent-rgb), 0.12), 0 1px 3px rgba(0,0,0,0.04)"
                  : "0 1px 3px rgba(0,0,0,0.02)",
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Left active border indicator notch */}
              {isActive && (
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 3.5,
                    background: "var(--accent)",
                  }}
                />
              )}

              {/* Software Thumbnail Badge */}
              <div
                style={{
                  width: 36,
                  height: 36,
                  flexShrink: 0,
                  borderRadius: 8,
                  overflow: "hidden",
                  transition: "transform 0.2s ease",
                  transform: isActive ? "scale(1.05)" : "scale(1)",
                }}
              >
                <ToolThumbnail iconType={meta.iconType} brandColor={meta.brandColor} />
              </div>

              {/* Title & Vendor */}
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

              {/* Micro Selection Dot */}
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  border: isActive
                    ? "3.5px solid var(--accent)"
                    : "1px solid var(--border)",
                  background: "transparent",
                  flexShrink: 0,
                  transition: "all 0.2s ease",
                }}
              />
            </button>
          );
        })}
      </div>

      {/* RIGHT: Detail Inspector Panel (Linear / Raycast Style Sidebar) */}
      <div
        key={animatingKey}
        style={{
          position: isMobile ? "relative" : "sticky",
          top: 100,
          background: "var(--bg-card)",
          border: "1px solid var(--border-card)",
          borderRadius: 16,
          padding: isMobile ? "20px 18px" : "26px 28px",
          boxShadow: "0 10px 32px -8px rgba(0,0,0,0.05), 0 2px 6px rgba(0,0,0,0.02)",
          display: "flex",
          flexDirection: "column",
          gap: 18,
          animation: "vsiFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          overflow: "hidden",
        }}
      >
        {/* Header Section */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              flexShrink: 0,
              borderRadius: 10,
              overflow: "hidden",
              border: `1px solid ${activeMeta.brandColor}33`,
            }}
          >
            <ToolThumbnail iconType={activeMeta.iconType} brandColor={activeMeta.brandColor} />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: ".05em",
                color: "var(--text-muted)",
                background: "var(--bg-muted)",
                padding: "2px 8px",
                borderRadius: 4,
                border: "1px solid var(--border)",
                display: "inline-block",
                marginBottom: 4,
              }}
            >
              {activeMeta.category} {activeMeta.vendor ? `• ${activeMeta.vendor}` : ""}
            </span>

            <h3
              style={{
                fontFamily: "var(--serif)",
                fontSize: 20,
                fontWeight: 700,
                color: "var(--text)",
                letterSpacing: "-.02em",
                margin: 0,
                lineHeight: 1.25,
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
            fontSize: 14,
            color: "var(--text-muted)",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {activeMeta.description}
        </p>

        {/* Core Capabilities */}
        {activeMeta.skills && activeMeta.skills.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10.5,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: ".06em",
                color: "var(--text-muted)",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Sparkles size={12} color={activeMeta.brandColor} />
              <span>Capabilities Mastered</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {activeMeta.skills.map((skill) => (
                <div
                  key={skill}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: "var(--surface)",
                    padding: "9px 12px",
                    borderRadius: 8,
                    border: "1px solid var(--border)",
                    fontFamily: "var(--sans)",
                    fontSize: 12.5,
                    fontWeight: 600,
                    color: "var(--text)",
                  }}
                >
                  <div
                    style={{
                      width: 5,
                      height: 5,
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

        {/* Footer Bar */}
        <div
          style={{
            marginTop: 2,
            paddingTop: 12,
            borderTop: "1px stroke var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 11,
            fontFamily: "var(--mono)",
            color: "var(--text-muted)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <ShieldCheck size={13} color="var(--accent)" />
            <span>VSI Lab Standard</span>
          </div>
          <span style={{ fontWeight: 600, color: "var(--accent)" }}>
            100% Practical Training
          </span>
        </div>
      </div>
    </div>
  );
}
