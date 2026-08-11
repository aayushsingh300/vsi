"use client";

import Image from "next/image";
import { orgLogo } from "@/data/assets";

/**
 * An accreditation logo sized off its own aspect ratio, so a 6:1 wordmark and a
 * 1:1 roundel land on the same optical height instead of the same box.
 *
 * Height comes from the `--org-h` custom property rather than a prop, so a
 * parent stylesheet — including a media query — can shrink a whole row of marks
 * at once. `height` is only the fallback when nothing sets the variable.
 *
 * Returns null for names we hold no artwork for (ASDC, UPSDM, RJSD); call sites
 * fall back to the text label.
 */
export default function OrgMark({
  name,
  height = 18,
  className,
}: {
  name: string;
  height?: number;
  className?: string;
}) {
  const logo = orgLogo(name);
  if (!logo) return null;

  const h = `calc(var(--org-h, ${height}px) * ${logo.scale})`;

  return (
    <span
      className={className}
      style={{
        position: "relative",
        display: "block",
        height: h,
        width: `calc(${h} * ${logo.ratio})`,
        flexShrink: 0,
      }}
    >
      <Image src={logo.src} alt={name} fill sizes="220px" style={{ objectFit: "contain" }} />
    </span>
  );
}
