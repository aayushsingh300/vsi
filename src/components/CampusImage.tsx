"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";

/**
 * Campus photograph that fills its container.
 *
 * Several gallery slots point at files that haven't been shot yet. Rather than
 * leaving a browser's broken-image glyph on the page, a missing file falls back
 * to a muted tile carrying the caption — so an unfilled slot reads as
 * "photo pending" instead of "site is broken".
 */
export default function CampusImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  /** Shown on the placeholder tile when the file is missing. */
  caption?: string;
}) {
  const [errored, setErrored] = useState(false);

  if (errored || !src) {
    return (
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--bg-muted)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          padding: 12,
          textAlign: "center",
        }}
      >
        <ImageIcon size={20} color="var(--text-faint)" strokeWidth={1.5} />
        {caption && (
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: "var(--text-xs)",
              color: "var(--text-faint)",
              letterSpacing: "var(--tr-caps)",
              textTransform: "uppercase",
            }}
          >
            {caption}
          </span>
        )}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      }}
    />
  );
}
