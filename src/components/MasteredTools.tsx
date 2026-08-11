"use client";

import { Fragment, useState, useRef, useId } from "react";
import useIsMobile from "@/hooks/useIsMobile";
import { getToolMeta } from "@/data/tools";
import { ToolThumbnail } from "@/components/ToolCard";
import { ShieldCheck } from "lucide-react";

interface MasteredToolsProps {
  tools: string[];
}

/**
 * Tool inspector: a selectable list of the software a programme teaches,
 * paired with a detail panel for the current selection.
 *
 * Selection is signalled ONCE — a 2px accent rule down the left edge plus a
 * tinted surface. The earlier version stacked five signals on the same state
 * (accent border, left bar, filled radio dot, a scaled icon and a glow
 * shadow), which is what made a simple list read as generated: no single
 * mark was trusted to do the job.
 */
export default function MasteredTools({ tools }: MasteredToolsProps) {
  const isMobile = useIsMobile(900);
  const [activeIdx, setActiveIdx] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const baseId = useId();

  if (!tools || tools.length === 0) return null;

  const activeToolName = tools[activeIdx] || tools[0];
  const activeMeta = getToolMeta(activeToolName);

  // Roving focus: a tablist is one tab stop, and arrows move within it.
  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    const last = tools.length - 1;
    let next: number | null = null;

    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = idx === last ? 0 : idx + 1;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = idx === 0 ? last : idx - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;

    if (next === null) return;
    e.preventDefault();
    setActiveIdx(next);
    listRef.current
      ?.querySelectorAll<HTMLButtonElement>("[role='tab']")
      [next]?.focus();
  };

  // Two valid patterns rather than one invalid hybrid. On desktop the list is
  // a tablist with the panel beside it; on mobile the panel opens beneath the
  // tapped row, which is a disclosure, so the rows carry aria-expanded and the
  // container takes no list role. A tabpanel nested inside a tablist would be
  // neither.
  const inspector = (
    <div
      id={`${baseId}-panel`}
      role={isMobile ? "region" : "tabpanel"}
      aria-labelledby={`${baseId}-tab-${activeIdx}`}
      aria-live="polite"
      // Remounting replays the entrance animation. Safe here because the
      // panel holds no <img> — the tool marks are inline SVG and CSS, so
      // nothing re-decodes. (Awards, which does hold photographs, crossfades
      // a persistent node instead.)
      key={activeToolName}
      style={{
        position: isMobile ? "relative" : "sticky",
        top: isMobile ? undefined : 100,
        background: "var(--bg-card)",
        border: "1px solid var(--border-card)",
        borderRadius: "var(--r-lg)",
        padding: isMobile ? "20px 18px" : "26px 28px",
        boxShadow: "var(--shadow-sm)",
        display: "flex",
        flexDirection: "column",
        gap: 18,
        animation: "panelIn .22s var(--ease-expo) forwards",
      }}
    >
      {/* Header. The brand colour gets exactly one moment on this panel —
          the icon plate — instead of also tinting the border, the bullets
          and a decorative sparkle. */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
        <div
          style={{
            width: 44,
            height: 44,
            flexShrink: 0,
            borderRadius: "var(--r-sm)",
            overflow: "hidden",
          }}
        >
          <ToolThumbnail iconType={activeMeta.iconType} brandColor={activeMeta.brandColor} />
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Kicker, not a bordered chip — it labels the title beneath it
              rather than competing with it for attention. */}
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: "var(--text-xs)",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "var(--tr-mono)",
              color: "var(--text-muted)",
              marginBottom: 6,
              lineHeight: 1.5,
            }}
          >
            {activeMeta.category}
            {/* The separator travels with the vendor so a wrap can never
                strand a bullet at the end of a line. */}
            {activeMeta.vendor && (
              <span style={{ whiteSpace: "nowrap" }}> • {activeMeta.vendor}</span>
            )}
          </div>

          <h3
            style={{
              fontFamily: "var(--serif)",
              fontSize: "var(--text-lg)",
              fontWeight: 700,
              color: "var(--text)",
              letterSpacing: "var(--tr-heading)",
              margin: 0,
              lineHeight: 1.25,
            }}
          >
            {activeMeta.fullName}
          </h3>
        </div>
      </div>

      <p
        style={{
          fontFamily: "var(--body)",
          fontWeight: 300,
          fontSize: "var(--text-base)",
          color: "var(--text-muted)",
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {activeMeta.description}
      </p>

      {/* Capabilities. Previously three bordered, tinted, dotted boxes inside
          an already-bordered panel — boxes nested in boxes is the loudest
          "assembled" tell on the page. Hairlines and spacing group them
          just as clearly and let the panel breathe. */}
      {activeMeta.skills && activeMeta.skills.length > 0 && (
        <div>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: "var(--text-xs)",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "var(--tr-mono)",
              color: "var(--text-faint)",
              paddingBottom: 10,
              borderBottom: "1px solid var(--border)",
            }}
          >
            Capabilities Mastered
          </div>

          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {activeMeta.skills.map((skill, i) => (
              <li
                key={skill}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 10,
                  padding: "11px 0",
                  // The last row needs no rule — the panel edge closes the
                  // list, and a trailing hairline would read as an empty row.
                  borderBottom:
                    i === activeMeta.skills.length - 1
                      ? "none"
                      : "1px solid var(--border)",
                  fontFamily: "var(--sans)",
                  fontSize: "var(--text-sm)",
                  fontWeight: 600,
                  color: "var(--text)",
                  letterSpacing: "var(--tr-body)",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    flexShrink: 0,
                    transform: "translateY(-3px)",
                  }}
                />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Footer. The rule here was declared `1px stroke var(--border)` —
          not valid CSS, so it never painted. */}
      <div
        style={{
          paddingTop: 14,
          borderTop: "1px solid var(--border)",
          display: "flex",
          // Side by side where there's room; stacked and left-aligned where
          // there isn't. Letting it wrap instead left the second line
          // marooned across a space-between gap.
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          gap: isMobile ? 8 : 12,
          fontSize: "var(--text-xs)",
          fontFamily: "var(--mono)",
          letterSpacing: "var(--tr-mono)",
          textTransform: "uppercase",
          color: "var(--text-muted)",
        }}
      >
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <ShieldCheck size={13} color="var(--accent)" aria-hidden="true" />
          VSI Lab Standard
        </span>
        <span style={{ color: "var(--accent-text)" }}>100% Practical Training</span>
      </div>
    </div>
  );

  return (
    <div
      style={{
        marginTop: 32,
        display: "grid",
        // The panel is a real grid child. It used to be pulled 220px left of
        // this column by a stray translateX(-50%) in its entrance keyframe,
        // covering the second column of tools.
        gridTemplateColumns: isMobile ? "1fr" : "1fr 440px",
        gap: isMobile ? 20 : 32,
        alignItems: "start",
      }}
    >
      <div
        ref={listRef}
        role={isMobile ? undefined : "tablist"}
        aria-label={isMobile ? undefined : "Software covered in this programme"}
        aria-orientation={isMobile ? undefined : "vertical"}
        style={{
          display: "grid",
          // One column on mobile. At two columns a phone gives each card
          // ~100px of text, which truncated almost every name to
          // "Autodesk Inven…".
          gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
          gap: 10,
        }}
      >
        {tools.map((tName, i) => {
          const meta = getToolMeta(tName);
          const isActive = i === activeIdx;

          return (
            <Fragment key={tName + i}>
              <button
                role={isMobile ? undefined : "tab"}
                id={`${baseId}-tab-${i}`}
                aria-selected={isMobile ? undefined : isActive}
                aria-expanded={isMobile ? isActive : undefined}
                aria-controls={`${baseId}-panel`}
                tabIndex={isMobile || isActive ? 0 : -1}
                onClick={() => setActiveIdx(i)}
                onKeyDown={isMobile ? undefined : (e) => handleKeyDown(e, i)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: isActive ? "var(--bg-muted)" : "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  borderLeft: isActive
                    ? "2px solid var(--accent)"
                    : "1px solid var(--border-card)",
                  borderRadius: "var(--r-md)",
                  padding: isActive ? "12px 14px 12px 13px" : "12px 14px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  transition: "background .2s ease, border-color .2s ease",
                }}
              >
                <span
                  style={{
                    width: 36,
                    height: 36,
                    flexShrink: 0,
                    borderRadius: "var(--r-sm)",
                    overflow: "hidden",
                    display: "block",
                  }}
                >
                  <ToolThumbnail iconType={meta.iconType} brandColor={meta.brandColor} />
                </span>

                <span style={{ flex: 1, minWidth: 0 }}>
                  <span
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 700,
                      fontSize: "var(--text-sm)",
                      color: "var(--text)",
                      display: "block",
                      letterSpacing: "var(--tr-body)",
                      lineHeight: 1.3,
                    }}
                  >
                    {meta.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--body)",
                      fontSize: "var(--text-xs)",
                      color: isActive ? "var(--accent-text)" : "var(--text-muted)",
                      display: "block",
                      marginTop: 2,
                    }}
                  >
                    {meta.vendor || meta.category}
                  </span>
                </span>
              </button>

              {/* On a phone the panel used to sit below all ten tools, so
                  tapping one appeared to do nothing. Here it opens directly
                  under the tapped row. */}
              {isMobile && isActive && inspector}
            </Fragment>
          );
        })}
      </div>

      {!isMobile && inspector}
    </div>
  );
}
