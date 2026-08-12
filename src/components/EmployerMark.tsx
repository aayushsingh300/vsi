"use client";

import Image from "next/image";
import { employerMark } from "@/data/assets";

/**
 * An employer logo sized off its own artwork rather than off the box it lands
 * in, so a 1:1 app roundel and an 11:1 wordmark read at the same optical
 * weight instead of the same bounding box. See EMPLOYER_MARKS for how the
 * per-logo `scale` is derived.
 *
 * Height comes from the `--mark-h` custom property rather than a prop, so one
 * parent rule — including a media query — resizes a whole wall of marks at
 * once. `max-*: 100%` keeps the widest mark inside its tile at any width.
 *
 * Returns null for names we hold no artwork for; call sites fall back to the
 * text label.
 */
export default function EmployerMark({
  name,
  height = 28,
  className,
}: {
  name: string;
  height?: number;
  className?: string;
}) {
  const mark = employerMark(name);
  if (!mark) return null;

  const h = `calc(var(--mark-h, ${height}px) * ${mark.scale})`;

  return (
    <span
      className={className}
      style={{
        position: "relative",
        display: "block",
        height: h,
        width: `calc(${h} * ${mark.ratio})`,
        maxWidth: "100%",
        maxHeight: "100%",
      }}
    >
      <Image src={mark.src} alt={name} fill sizes="220px" style={{ objectFit: "contain" }} />
    </span>
  );
}
