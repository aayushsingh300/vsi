"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
import { CENTERS } from "@/data/content";

/* ═══════════════════════════════════════════════════════════════════════
   India, as a dotted map floating inside a glass orb.

   Why a dot matrix rather than a filled silhouette: the outline below is a
   hand-authored ~60-point generalisation, and a hard-edged silhouette would
   present that generalisation as a precise boundary — which it is not, and
   which no marketing graphic should imply. A stipple reads as a map at a
   glance, carries the pins beautifully, and is honest about its resolution.

   Why CSS 3D rather than a WebGL globe: the whole thing is a few hundred
   static dots and seven pins. Under `perspective` + `preserve-3d` the map
   plane and the pin plane rotate together while the pins sit ~30px proud of
   the map, so tilting the orb parallaxes them across the surface — the cue
   that actually sells depth. No dependency, no canvas, no fallback to write,
   and it degrades to a still map when the pointer never arrives.
   ══════════════════════════════════════════════════════════════════════ */

/** Boundary of India, [lat, lng], clockwise from the north. Generalised. */
const OUTLINE: [number, number][] = [
  [35.5, 77.0], [34.6, 78.9], [32.6, 79.2], [31.0, 79.0], [30.4, 81.0],
  [29.2, 80.2], [28.6, 80.1], [27.5, 83.9], [26.5, 86.0], [26.6, 88.0],
  [27.9, 88.8], [27.2, 89.0], [26.7, 92.0], [27.0, 92.1], [27.9, 93.0],
  [28.5, 95.3], [28.3, 97.0], [27.7, 97.4], [27.0, 96.9], [26.0, 95.4],
  [25.2, 94.6], [24.3, 94.4], [23.4, 93.4], [22.2, 93.2], [23.2, 92.3],
  [23.9, 91.2], [24.2, 91.4], [25.1, 89.9], [26.4, 89.0], [26.2, 88.2],
  [25.2, 88.1], [24.0, 88.7], [22.8, 88.9],
  [21.6, 88.0], [20.7, 87.0], [19.9, 86.0], [17.7, 83.3], [16.3, 81.3],
  [15.9, 80.3], [13.4, 80.3], [11.9, 79.8], [10.3, 79.8], [9.3, 79.2],
  [9.0, 78.2], [8.08, 77.55], [8.9, 76.6], [10.8, 75.9], [12.9, 74.8],
  [15.0, 73.9], [17.0, 73.2], [19.0, 72.8], [20.7, 72.7], [21.6, 72.6],
  [20.9, 70.2], [22.0, 69.0], [22.8, 69.1], [23.7, 68.4], [24.3, 68.8],
  [25.4, 70.0], [26.5, 70.1], [27.9, 70.7], [29.5, 73.0], [30.5, 74.5],
  [32.0, 74.6], [33.5, 74.2], [34.5, 74.0], [35.5, 76.0],
];

// Equirectangular with a cos(lat) correction at India's mid-latitude, which
// is all a 30°-wide country needs to stop looking stretched.
const LON0 = 67.6, LON1 = 97.9, LAT0 = 7.4, LAT1 = 36.3;
const KX = Math.cos((22 * Math.PI) / 180);
const SPAN_X = (LON1 - LON0) * KX;
const SPAN_Y = LAT1 - LAT0;

/** lat/lng → 0..100 viewBox units. */
function project(lat: number, lng: number): [number, number] {
  return [
    ((lng - LON0) * KX / SPAN_X) * 100,
    ((LAT1 - lat) / SPAN_Y) * 100,
  ];
}

const POLY = OUTLINE.map(([lat, lng]) => project(lat, lng));

function inside(x: number, y: number): boolean {
  let hit = false;
  for (let i = 0, j = POLY.length - 1; i < POLY.length; j = i++) {
    const [xi, yi] = POLY[i];
    const [xj, yj] = POLY[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit;
  }
  return hit;
}

/**
 * The stipple, as three <path> elements rather than ~600 <circle>s — one node
 * per depth band instead of one per dot. The bands are a fixed diagonal ramp,
 * so the matrix picks up the same top-left light as the glass around it.
 */
const DOT_BANDS: string[] = (() => {
  // 1.95 units ≈ 0.55° of latitude. Coarser than this and the narrow
  // north-eastern arm — Arunachal is barely 2° of latitude at 96°E — thins to
  // a single row of dots and reads as a stray line rather than land.
  const STEP = 1.95;          // viewBox units between dot centres
  const R = 0.55;             // dot radius
  const bands = ["", "", ""];
  for (let row = 0, y = STEP; y < 100; y += STEP, row++) {
    // Odd rows offset by half a step — a hex lattice reads as texture where a
    // square lattice reads as a screen door.
    const shift = row % 2 ? STEP / 2 : 0;
    for (let x = shift + 1; x < 100; x += STEP) {
      if (!inside(x, y)) continue;
      const depth = (x / 100) * 0.55 + (y / 100) * 0.45;   // 0 = lit, 1 = shaded
      const b = depth < 0.38 ? 0 : depth < 0.66 ? 1 : 2;
      bands[b] += `M${x.toFixed(2)} ${(y - R).toFixed(2)}a${R} ${R} 0 1 0 0 ${(R * 2).toFixed(2)}a${R} ${R} 0 1 0 0 ${(-R * 2).toFixed(2)}`;
    }
  }
  return bands;
})();

/**
 * Pin screen positions, de-collided.
 *
 * Ranchi and Kanke are 10km apart — under half a pixel at this scale — so
 * drawn honestly they are one dot and one of the two centres silently
 * disappears from the map. Anything closer than MIN_SEP gets fanned around
 * the cluster's centroid: the group still reads as "one place", and every
 * centre keeps a target you can hover.
 *
 * The two radii are separate on purpose. MIN_SEP is how close counts as a
 * collision; FAN_R is how far apart the fan then pushes them, and it has to
 * clear the 28px hit areas or the fix is cosmetic — three pins fanned 8px
 * apart still hand every hover to whichever one paints last.
 */
const MIN_SEP = 4.2;
const FAN_R = 5.2;
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
  return CENTERS.map((c, i) => ({ ...pts[i], city: c.city, state: c.state, flagship: !!c.flagship }));
})();

const MAX_TILT = 15;   // degrees; past this the map plane starts to foreshorten
// The map sits inside the rim, not against it — the ring of empty sphere is
// what reads as curvature. Dots and pins share the factor so they stay
// registered: the SVG group scales, the pins map their percentages through it.
const MAP_INSET = 0.74;
const place = (v: number) => 50 + (v - 50) * MAP_INSET;

export default function IndiaOrb({
  active,
  onSelect,
}: {
  active: number | null;
  onSelect: (i: number | null) => void;
}) {
  const orbRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const raf = useRef<number>(0);
  // Pointer tilt is written straight to the DOM rather than held in state:
  // this fires on every mousemove, and a React render per frame would be the
  // one expensive thing in an otherwise static section.
  const target = useRef({ rx: 0, ry: 0 });
  const cur = useRef({ rx: 0, ry: 0 });
  const engaged = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const t0 = performance.now();
    const loop = (now: number) => {
      // Untouched, the orb breathes — a slow ±5° sway, not a spin. A map is
      // not a globe: rotate it far enough and you are looking at the back of
      // a plane, which is nothing.
      if (!engaged.current) {
        const t = (now - t0) / 1000;
        target.current = { rx: Math.sin(t * 0.42) * 4.5, ry: Math.cos(t * 0.31) * 5.5 };
      }
      // Critically-damped-ish follow: the orb arrives rather than snaps.
      cur.current.rx += (target.current.rx - cur.current.rx) * 0.08;
      cur.current.ry += (target.current.ry - cur.current.ry) * 0.08;
      if (stageRef.current) {
        stageRef.current.style.transform = `rotateX(${cur.current.rx.toFixed(2)}deg) rotateY(${cur.current.ry.toFixed(2)}deg)`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  const onMove = useCallback((e: React.PointerEvent) => {
    const el = orbRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    engaged.current = true;
    target.current = { rx: -ny * 2 * MAX_TILT, ry: nx * 2 * MAX_TILT };
  }, []);

  const onLeave = useCallback(() => {
    engaged.current = false;
  }, []);

  const label = useMemo(() => (active === null ? null : PINS[active]), [active]);

  return (
    <div className="orb-frame">
      <div
        ref={orbRef}
        className="orb"
        onPointerMove={onMove}
        onPointerLeave={onLeave}
      >
        {/* Everything that rotates lives on one stage, so the map and the
            pins share a single 3D space and stay registered to each other. */}
        <div ref={stageRef} className="orb-stage">
          <svg className="orb-map" viewBox="0 0 100 100" aria-hidden="true">
            {/* Graticule — the wireframe that makes a flat disc read as a
                sphere. Purely decorative, hence the very low contrast. */}
            <g className="orb-grid">
              <circle cx="50" cy="50" r="48" />
              <ellipse cx="50" cy="50" rx="16" ry="48" />
              <ellipse cx="50" cy="50" rx="33" ry="48" />
              <ellipse cx="50" cy="50" rx="48" ry="16" />
              <ellipse cx="50" cy="50" rx="48" ry="33" />
            </g>
            <g className="orb-dots" transform={`translate(50 50) scale(${MAP_INSET}) translate(-50 -50)`}>
              <path d={DOT_BANDS[0]} className="orb-dots--lit" />
              <path d={DOT_BANDS[1]} className="orb-dots--mid" />
              <path d={DOT_BANDS[2]} className="orb-dots--dim" />
            </g>
          </svg>

          {/* Pin plane — same rotation, pushed forward, so the pins swing
              across the map as the orb tilts. */}
          <div className="orb-pins">
            {PINS.map((p, i) => (
              <button
                key={p.city}
                type="button"
                className={`orb-pin${active === i ? " is-active" : ""}${p.flagship ? " is-flagship" : ""}`}
                style={{ left: `${place(p.x)}%`, top: `${place(p.y)}%` }}
                // Hover-to-select is a mouse affordance. On touch, pointerenter
                // fires immediately before click, so a toggling click saw the
                // pin as already active and deselected it — every tap was a
                // no-op. Touch goes through click alone.
                onPointerEnter={(e) => { if (e.pointerType === "mouse") onSelect(i); }}
                onFocus={() => onSelect(i)}
                onClick={() => onSelect(i)}
                aria-label={`${p.city}, ${p.state} centre`}
                aria-pressed={active === i}
              >
                <span className="orb-pin__ring" aria-hidden="true" />
                <span className="orb-pin__dot" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>

        {/* Glass: a specular sweep over the top-left and a darkened lower rim.
            Outside the stage so it stays fixed while the map moves under it —
            a highlight that rotates with the contents is a sticker, not a
            reflection. */}
        <div className="orb-gloss" aria-hidden="true" />

        {/* The read-out sits outside the rotating stage too, so it stays
            upright and legible at any tilt. */}
        <div className={`orb-readout${label ? " is-on" : ""}`} aria-live="polite">
          {label ? (
            <>
              <span className="orb-readout__city">{label.city}</span>
              <span className="orb-readout__state">{label.state}</span>
            </>
          ) : (
            // Both are rendered and CSS picks one, so the hint is right on the
            // first paint — a JS pointer check would have to guess during SSR.
            <>
              <span className="orb-readout__hint orb-readout__hint--pointer">Hover a marker</span>
              <span className="orb-readout__hint orb-readout__hint--touch">Tap a marker</span>
            </>
          )}
        </div>
      </div>

      <p className="orb-caption">{`${CENTERS.length} centres · Jharkhand & Uttar Pradesh`}</p>
    </div>
  );
}
