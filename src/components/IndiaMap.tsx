"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
import { CENTERS } from "@/data/content";
import { INDIA_PROJECTION, INDIA_SILHOUETTE, INDIA_STATES, INDIA_VIEWBOX } from "@/data/india-geo";

/* ═══════════════════════════════════════════════════════════════════════
   India as an extruded relief map, with the centres pinned above it.

   The boundary is the real one: src/data/india-geo.ts is generated from a
   survey-resolution source map by scripts/build-india-geo.mjs, which also
   recovers that map's projection from its own calibration points. So a centre
   is placed by projecting its actual coordinates — Kanke lands 0.3 units north
   of Ranchi because that is where Kanke is, not because someone nudged it.

   Why a stack of layers rather than a WebGL mesh: the depth here is one short
   extrusion of one silhouette. Sixteen copies of that silhouette, each parked a
   little further back along the z-axis inside a `preserve-3d` stage, produce a
   side wall that is genuinely three-dimensional — tilt the map and you see the
   wall from the correct angle, because the browser is compositing real 3D
   transforms rather than redrawing a painted-on bevel. No dependency, no canvas,
   no context-loss path, and it degrades to a still map when the pointer never
   arrives.

   The pins ride further forward still, so tilting parallaxes them across the
   surface — which is the cue that actually sells the depth.
   ══════════════════════════════════════════════════════════════════════ */

/** Mercator, in the same viewBox units the paths are drawn in. */
function project(lat: number, lng: number): [number, number] {
  const { a, b, c, d } = INDIA_PROJECTION;
  return [a * lng + b, c * Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360)) + d];
}

/**
 * Pin positions, de-collided.
 *
 * Ranchi and Kanke are 10km apart — a third of a viewBox unit, under two pixels
 * at the size this renders — so drawn honestly they are one dot and one of the
 * two centres silently disappears. Anything closer than MIN_SEP is fanned around
 * the cluster's centroid: the group still reads as "one place", and every centre
 * keeps a target you can hover.
 *
 * The two radii are separate on purpose. MIN_SEP is how close counts as a
 * collision; FAN_R is how far apart the fan then pushes them, and it has to
 * clear the 28px hit areas or the fix is cosmetic — three pins fanned 8px apart
 * still hand every hover to whichever one paints last.
 */
const MIN_SEP = 3.4;
const FAN_R = 4.4;

const PINS = (() => {
  const pts = CENTERS.map((c) => {
    const [x, y] = project(c.lat, c.lng);
    return { x, y };
  });
  const clusters: number[][] = [];
  pts.forEach((p, i) => {
    const near = clusters.find((g) =>
      g.some((j) => Math.hypot(pts[j].x - p.x, pts[j].y - p.y) < MIN_SEP)
    );
    if (near) near.push(i);
    else clusters.push([i]);
  });
  for (const g of clusters) {
    if (g.length < 2) continue;
    const cx = g.reduce((s, i) => s + pts[i].x, 0) / g.length;
    const cy = g.reduce((s, i) => s + pts[i].y, 0) / g.length;
    g.forEach((i, k) => {
      const a = (k / g.length) * Math.PI * 2 - Math.PI / 2;
      pts[i] = { x: cx + Math.cos(a) * FAN_R, y: cy + Math.sin(a) * FAN_R };
    });
  }
  return CENTERS.map((c, i) => ({
    ...pts[i],
    city: c.city,
    state: c.state,
    flagship: !!c.flagship,
  }));
})();

/**
 * The states that hold a centre, lifted out of the background wash so the map
 * answers "where does VSI operate" before a single pin is read.
 *
 * Derived from CENTERS rather than listed, so opening a centre in a new state
 * lights that state without anyone remembering to come back here. The join is
 * on the state name, which has to match the source map's spelling — that map
 * predates two renames and still says "Orissa" and "Uttaranchal". A name that
 * does not match simply goes unhighlighted; the pin is still placed, because
 * pins are positioned from coordinates and never from this.
 */
const LIVE_STATES = new Set(
  INDIA_STATES.filter((s) => CENTERS.some((c) => c.state === s.name)).map((s) => s.id)
);

// Past ~14° the map plane starts to foreshorten and India stops looking like
// India. The extrusion only needs a few degrees to read as solid.
const MAX_TILT = 14;

// Depth of the extrusion in px, and the number of slices used to fill it.
//
// Each slice is its own composited layer, so the count is a GPU-memory budget
// as much as a visual one. Twelve puts the slices ~1.5px apart; at full tilt
// that is a 0.35px step between them, well under the point where the wall
// starts to read as stripes, and it costs a quarter less memory than sixteen.
const DEPTH_PX = 16;
const SLICES = 12;

export default function IndiaMap({
  active,
  onSelect,
}: {
  active: number | null;
  onSelect: (i: number | null) => void;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const raf = useRef<number>(0);
  // Pointer tilt is written straight to the DOM rather than held in state: this
  // fires on every mousemove, and a React render per frame would be the one
  // expensive thing in an otherwise static section.
  const target = useRef({ rx: 0, ry: 0 });
  const cur = useRef({ rx: 0, ry: 0 });
  const engaged = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const t0 = performance.now();
    const loop = (now: number) => {
      // Untouched, the map breathes — a slow sway, not a spin. It is a plane,
      // not a globe: turn it far enough and you are looking at its back.
      if (!engaged.current) {
        const t = (now - t0) / 1000;
        target.current = { rx: 6 + Math.sin(t * 0.42) * 3.5, ry: Math.cos(t * 0.31) * 4.5 };
      }
      // Critically-damped-ish follow: the map arrives rather than snaps.
      cur.current.rx += (target.current.rx - cur.current.rx) * 0.08;
      cur.current.ry += (target.current.ry - cur.current.ry) * 0.08;
      if (stageRef.current) {
        stageRef.current.style.transform =
          `rotateX(${cur.current.rx.toFixed(2)}deg) rotateY(${cur.current.ry.toFixed(2)}deg)`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  const onMove = useCallback((e: React.PointerEvent) => {
    const el = rootRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    engaged.current = true;
    // Biased forward so the map keeps a little of its lean even at rest.
    target.current = { rx: 6 - ny * 2 * MAX_TILT, ry: nx * 2 * MAX_TILT };
  }, []);

  const onLeave = useCallback(() => {
    engaged.current = false;
  }, []);

  const label = useMemo(() => (active === null ? null : PINS[active]), [active]);

  return (
    <div className="imap-frame">
      <div ref={rootRef} className="imap" onPointerMove={onMove} onPointerLeave={onLeave}>
        {/* Contact shadow — the country's own outline, offset and blurred, so
            the map reads as resting above the page rather than pasted onto it.
            It sits outside the 3D stage on purpose: `filter` is a grouping
            property and would flatten this out of a preserve-3d parent anyway,
            and a shadow that tracked every degree of tilt would read as a
            second map rather than as light. */}
        <svg className="imap-shadow" viewBox={INDIA_VIEWBOX} aria-hidden="true">
          <path d={INDIA_SILHOUETTE} fillRule="evenodd" />
        </svg>

        {/* Everything that rotates lives on one stage, so the relief and the
            pins share a single 3D space and stay registered to each other. */}
        <div ref={stageRef} className="imap-stage">

          {/* The side wall: one silhouette, sliced down the z-axis. Slice 0 is
              the deepest and darkest; light reaches the top of the wall only. */}
          {Array.from({ length: SLICES }, (_, i) => {
            const t = i / (SLICES - 1);          // 0 = deepest, 1 = just under the face
            return (
              <svg
                key={i}
                className="imap-slice"
                viewBox={INDIA_VIEWBOX}
                aria-hidden="true"
                style={{
                  transform: `translateZ(${(-DEPTH_PX * (1 - t)).toFixed(2)}px)`,
                  // Deepest slices sit in their own shadow; the top of the wall
                  // catches the same light as the face above it.
                  fill: `rgb(${(6 + 14 * t).toFixed(0)} ${(20 + 34 * t).toFixed(0)} ${(38 + 58 * t).toFixed(0)})`,
                }}
              >
                <path d={INDIA_SILHOUETTE} fillRule="evenodd" />
              </svg>
            );
          })}

          {/* Top face: the states themselves. */}
          <svg className="imap-face" viewBox={INDIA_VIEWBOX} aria-hidden="true">
            <defs>
              <linearGradient id="imapFace" x1="0" y1="0" x2="0.55" y2="1">
                <stop offset="0%" stopColor="#1D5E9E" />
                <stop offset="55%" stopColor="#123F70" />
                <stop offset="100%" stopColor="#0C2C50" />
              </linearGradient>
              <linearGradient id="imapLive" x1="0" y1="0" x2="0.55" y2="1">
                <stop offset="0%" stopColor="#2C7CC4" />
                <stop offset="100%" stopColor="#1A5490" />
              </linearGradient>
            </defs>

            {/* A solid plate under the states. The state rings share edges but
                are stroked individually, and without something opaque behind
                them the hairline seams let the wall show through. */}
            <path className="imap-plate" d={INDIA_SILHOUETTE} fillRule="evenodd" />

            <g className="imap-states">
              {INDIA_STATES.map((s) => (
                <path
                  key={s.id}
                  d={s.d}
                  className={LIVE_STATES.has(s.id) ? "imap-state is-live" : "imap-state"}
                />
              ))}
            </g>

            {/* Coastline. Drawn last so the outer edge stays crisp against the
                wall below it. */}
            <path className="imap-coast" d={INDIA_SILHOUETTE} fillRule="evenodd" />
          </svg>

          {/* Pin plane — same rotation, pushed forward, so the pins swing across
              the map as it tilts. */}
          <div className="imap-pins">
            {PINS.map((p, i) => (
              <button
                key={p.city}
                type="button"
                className={`imap-pin${active === i ? " is-active" : ""}${p.flagship ? " is-flagship" : ""}`}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                // Hover-to-select is a mouse affordance. On touch, pointerenter
                // fires immediately before click, so a toggling click saw the pin
                // as already active and deselected it — every tap was a no-op.
                // Touch goes through click alone.
                onPointerEnter={(e) => { if (e.pointerType === "mouse") onSelect(i); }}
                onFocus={() => onSelect(i)}
                onClick={() => onSelect(i)}
                aria-label={`${p.city}, ${p.state} centre`}
                aria-pressed={active === i}
              >
                <span className="imap-pin__ring" aria-hidden="true" />
                <span className="imap-pin__stem" aria-hidden="true" />
                <span className="imap-pin__dot" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* The read-out sits below the map rather than over it. India reaches the
          bottom of its own box at Kanyakumari, so a panel floating inside would
          cover the southern tip; and outside the stage it stays upright and
          legible at any tilt. */}
      <div className={`imap-readout${label ? " is-on" : ""}`} aria-live="polite">
        {label ? (
          <>
            <span className="imap-readout__city">{label.city}</span>
            <span className="imap-readout__state">{label.state}</span>
          </>
        ) : (
          // Both are rendered and CSS picks one, so the hint is right on the
          // first paint — a JS pointer check would have to guess during SSR.
          <>
            <span className="imap-readout__hint imap-readout__hint--pointer">Hover a marker</span>
            <span className="imap-readout__hint imap-readout__hint--touch">Tap a marker</span>
          </>
        )}
      </div>

      <p className="imap-caption">{`${CENTERS.length} centres · Jharkhand & Uttar Pradesh`}</p>
    </div>
  );
}
