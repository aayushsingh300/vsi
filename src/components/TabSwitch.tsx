"use client";

import { ReactNode, useId } from "react";
import useIsMobile from "@/hooks/useIsMobile";

export interface TabOption {
  id: string;
  label: string;
  count?: number;
  icon?: ReactNode;
}

interface TabSwitchProps {
  options: TabOption[];
  value: string;
  onChange: (id: string) => void;
  /** Accessible name for the group. */
  label: string;
  /** Fill the available width on desktop rather than hugging its content. */
  justified?: boolean;
}

/**
 * One control, two presentations.
 *
 * A segmented control is a good pointer target and a poor thumb target: it
 * works only while every option fits on one line. Its labels are `nowrap`
 * (wrapped text inside a 999px pill looks broken), so on a narrow screen a
 * label that doesn't fit doesn't shrink — it pushes the whole control past
 * the viewport edge. "State Skill-Driven Initiatives" overflowed a 390px
 * screen by 155px on exactly that mechanism.
 *
 * Rather than guess which labels are short enough, below 640px every
 * instance becomes a native select: a familiar full-height picker that
 * cannot overflow, reports its own state to accessibility services, and
 * gives a thumb a real target. The segment is the pointer presentation.
 */
export default function TabSwitch({
  options,
  value,
  onChange,
  label,
  justified = false,
}: TabSwitchProps) {
  const isSmall = useIsMobile(640);
  const useSelect = isSmall;
  // Unique per instance — a hardcoded id would collide if a page ever
  // rendered two of these.
  const selectId = useId();

  if (useSelect) {
    const active = options.find((o) => o.id === value);
    return (
      <div>
        <label htmlFor={selectId} className="sr-only">
          {label}
        </label>
        <select
          id={selectId}
          className="select-field"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label={label}
        >
          {options.map((o) => (
            <option key={o.id} value={o.id}>
              {o.label}
              {typeof o.count === "number" ? ` (${o.count})` : ""}
            </option>
          ))}
        </select>
        {active && <span className="sr-only" aria-live="polite">{active.label} selected</span>}
      </div>
    );
  }

  return (
    <div
      className={`segment${isSmall || justified ? " segment-justified" : ""}`}
      role="tablist"
      aria-label={label}
    >
      {options.map((o) => (
        <button
          key={o.id}
          role="tab"
          aria-selected={value === o.id}
          onClick={() => onChange(o.id)}
          className={`segment-btn${value === o.id ? " active" : ""}`}
        >
          {o.icon}
          {o.label}
          {typeof o.count === "number" && <span className="seg-count">{o.count}</span>}
        </button>
      ))}
    </div>
  );
}
