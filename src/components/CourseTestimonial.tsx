"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import EmployerMark from "@/components/EmployerMark";
import type { Testimonial } from "@/data/content";
import { EMPLOYER_MARKS } from "@/data/assets";
import useIsMobile from "@/hooks/useIsMobile";

/**
 * The portrait, or the initials if the file has not landed yet.
 *
 * A missing photo must not leave a broken image or a grey rectangle on a live
 * course page, so the monogram is a designed state rather than a placeholder —
 * it is the same treatment the placements carousel uses for its avatars.
 */
function Portrait({ src, name }: { src?: string; name: string }) {
  const [errored, setErrored] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // The <img> is server-rendered, so a 404 can resolve before React attaches
  // its onError handler — and then the page keeps a broken-image icon and the
  // alt text forever. Re-checking on mount is what actually catches it: a
  // finished load with no intrinsic width is a failed load.
  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) setErrored(true);
  }, [src]);

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  if (!src || errored) {
    return (
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(150deg, rgba(var(--accent-rgb),.16) 0%, rgba(var(--gold-rgb),.08) 100%)",
          fontFamily: "var(--serif)",
          fontWeight: 700,
          fontSize: "clamp(34px, 5vw, 52px)",
          letterSpacing: "var(--tr-display)",
          color: "var(--accent-text)",
        }}
      >
        {initials}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={src}
      alt={`${name}, VSI graduate`}
      onError={() => setErrored(true)}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
    />
  );
}

/**
 * One alumni story, shown on the detail page of the programme they took.
 *
 * The proof a course page needs is a person who finished THIS course and where
 * they went — which is why the card leads with the face and closes on the
 * employer's own mark, with the quote between them. It renders nothing when
 * the programme has no story, so pages we hold no alumnus for simply do not
 * carry the section.
 */
export default function CourseTestimonial({ story }: { story: Testimonial }) {
  const isMobile = useIsMobile(900);
  const hasMark = story.employer ? Boolean(EMPLOYER_MARKS[story.employer]) : false;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "minmax(200px, 260px) 1fr",
        gap: isMobile ? 24 : 44,
        alignItems: "center",
        background: "var(--bg-card)",
        border: "1px solid var(--border-card)",
        borderRadius: "var(--r-lg)",
        padding: isMobile ? 22 : "36px 40px",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      {/* Portrait */}
      <AnimateIn animation="scaleIn">
        <div
          style={{
            position: "relative",
            width: isMobile ? 140 : "100%",
            aspectRatio: "4 / 5",
            borderRadius: "var(--r-md)",
            overflow: "hidden",
            background: "var(--bg-muted)",
            border: "1px solid var(--border)",
          }}
        >
          <Portrait src={story.photo} name={story.name} />
        </div>
      </AnimateIn>

      {/* Quote + attribution */}
      <AnimateIn animation="slideUp" delay={0.08}>
        <div
          aria-hidden="true"
          style={{
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontSize: 44,
            lineHeight: .8,
            color: "rgba(var(--accent-rgb),.22)",
            marginBottom: 6,
          }}
        >
          ❝
        </div>

        <blockquote
          style={{
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: isMobile ? "var(--text-md)" : "clamp(18px, 1.9vw, 25px)",
            lineHeight: 1.55,
            letterSpacing: "var(--tr-heading)",
            color: "var(--text)",
            marginBottom: 24,
          }}
        >
          {story.q}
        </blockquote>

        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <div>
            <div
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 700,
                fontSize: "var(--text-sm)",
                letterSpacing: "var(--tr-caps)",
                textTransform: "uppercase",
                color: "var(--text)",
              }}
            >
              {story.name}
            </div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "var(--text-xs)",
                letterSpacing: "var(--tr-caps)",
                color: "var(--text-muted)",
                marginTop: 4,
              }}
            >
              {story.course}
            </div>
          </div>

          {/* Where they started → where they landed. The arrow is the story. */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginLeft: isMobile ? 0 : "auto",
              padding: "10px 16px",
              borderRadius: "var(--r-pill)",
              background: "rgba(var(--accent-rgb),.06)",
              border: "1px solid rgba(var(--accent-rgb),.16)",
              // What EmployerMark measures itself against. At 20 the wide
              // wordmarks — L&T is 4.8:1 of ink — came out unreadable.
              ["--mark-h" as string]: "30px",
            }}
          >
            <span style={{ fontFamily: "var(--mono)", fontSize: "var(--text-xs)", color: "var(--text-muted)", whiteSpace: "nowrap" }}>
              {story.from}
            </span>
            <ArrowRight size={13} color="var(--accent)" style={{ flexShrink: 0 }} />
            {hasMark && story.employer ? (
              <span className="employer-tile" style={{ display: "flex", alignItems: "center" }} title={story.placed}>
                <EmployerMark name={story.employer} />
              </span>
            ) : (
              <span style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: "var(--text-sm)", color: "var(--text)", whiteSpace: "nowrap" }}>
                {story.placed}
              </span>
            )}
          </div>
        </div>
      </AnimateIn>
    </div>
  );
}
