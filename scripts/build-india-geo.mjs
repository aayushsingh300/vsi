/**
 * Turns scripts/india-states.svg into src/data/india-geo.ts.
 *
 *   node scripts/build-india-geo.mjs
 *
 * Run it again whenever the source map changes; nothing else reads the SVG.
 *
 * The source is the simplemaps.com India map (free for commercial use, see the
 * licence comment in the SVG). It carries two things we need:
 *
 *   1. 36 state paths at survey resolution, which is what makes the outline
 *      correct rather than hand-drawn.
 *   2. Three <circle class="lat|lng"> calibration points, which pin down the
 *      projection exactly — so a centre's real coordinates land where they
 *      actually are instead of being nudged into place by eye.
 *
 * Fitting those three points shows the source is plain Mercator: x is linear in
 * longitude and y is linear in ln(tan(π/4 + φ/2)), both to within 0.01px. That
 * fit is composed into the normalised viewBox and exported as INDIA_PROJECTION,
 * so the component projects lat/lng with four constants and no lookup table.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(HERE, "india-states.svg");
const OUT = path.join(HERE, "..", "src", "data", "india-geo.ts");

/* Detail budget. The map renders about 460px wide, so one normalised unit is
   ~4.6px; TOL below is in source units (~0.115 normalised), i.e. a worst-case
   deviation just under a pixel. Anything finer is invisible and costs bundle. */
const TOL = 2.2;         // Douglas–Peucker tolerance, source units
const TOL_COARSE = 5.5;  // for the extrusion silhouette, which only shows its edge
const MIN_AREA = 1.5;    // source units² — drop sub-pixel specks
const MIN_AREA_COARSE = 45;

/* Andaman & Nicobar and Lakshadweep are dropped. Including them widens the
   frame by roughly half again in empty ocean and shrinks the mainland — where
   every centre is — to match. The caption names them instead. */
const SKIP = new Set(["INAN", "INLD"]);

const svg = fs.readFileSync(SRC, "utf8");
const merc = (lat) => Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360));

/* ── projection fit ─────────────────────────────────────────────────────── */
const calib = [...svg.matchAll(/<circle class="([\d.]+)\|([\d.]+)" cx="([\d.]+)" cy="([\d.]+)"/g)]
  .map((m) => ({ lat: +m[1], lng: +m[2], x: +m[3], y: +m[4] }));
if (calib.length < 3) throw new Error(`need >=3 calibration circles, found ${calib.length}`);

function fitLine(xs, ys) {
  const n = xs.length;
  const mx = xs.reduce((a, b) => a + b, 0) / n;
  const my = ys.reduce((a, b) => a + b, 0) / n;
  let num = 0, den = 0;
  for (let i = 0; i < n; i++) { num += (xs[i] - mx) * (ys[i] - my); den += (xs[i] - mx) ** 2; }
  const m = num / den;
  return { m, b: my - m * mx };
}
const fx = fitLine(calib.map((c) => c.lng), calib.map((c) => c.x));
const fy = fitLine(calib.map((c) => merc(c.lat)), calib.map((c) => c.y));

// If the source ever stops being Mercator this is where we find out, loudly,
// rather than by shipping pins that are subtly in the wrong state.
for (const c of calib) {
  const ex = Math.abs(fx.m * c.lng + fx.b - c.x);
  const ey = Math.abs(fy.m * merc(c.lat) + fy.b - c.y);
  if (ex > 0.5 || ey > 0.5) {
    throw new Error(`projection is not Mercator: residual ${ex.toFixed(2)},${ey.toFixed(2)}px at ${c.lat},${c.lng}`);
  }
}

/* ── path parsing ───────────────────────────────────────────────────────── */
// The source uses only M/m, L/l, H/h, V/v and Z/z with implicit-lineto runs.
// Anything else throws rather than quietly producing a wrong outline.
function parsePath(d) {
  const polys = [];
  let cur = null, x = 0, y = 0, sx = 0, sy = 0;
  const tok = d.match(/[MmLlHhVvZz]|-?\d*\.?\d+(?:e[-+]?\d+)?/gi) ?? [];
  let i = 0, cmd = null;
  const num = () => +tok[i++];
  while (i < tok.length) {
    if (/^[MmLlHhVvZz]$/.test(tok[i])) cmd = tok[i++];
    if (cmd === "M" || cmd === "m") {
      const nx = num(), ny = num();
      x = cmd === "M" ? nx : x + nx;
      y = cmd === "M" ? ny : y + ny;
      sx = x; sy = y;
      cur = [[x, y]];
      polys.push(cur);
      cmd = cmd === "M" ? "L" : "l";
    } else if (cmd === "L" || cmd === "l") {
      const nx = num(), ny = num();
      x = cmd === "L" ? nx : x + nx;
      y = cmd === "L" ? ny : y + ny;
      cur.push([x, y]);
    } else if (cmd === "H" || cmd === "h") {
      const n = num(); x = cmd === "H" ? n : x + n; cur.push([x, y]);
    } else if (cmd === "V" || cmd === "v") {
      const n = num(); y = cmd === "V" ? n : y + n; cur.push([x, y]);
    } else if (cmd === "Z" || cmd === "z") {
      x = sx; y = sy;
    } else {
      throw new Error(`unsupported path command: ${cmd}`);
    }
  }
  return polys.filter((p) => p.length > 2);
}

const states = [...svg.matchAll(/<path d="([^"]+)" id="(IN[A-Z]+)" name="([^"]+)"/g)]
  .map((m) => ({ id: m[2], name: m[3], polys: parsePath(m[1]) }))
  .filter((s) => !SKIP.has(s.id));
if (!states.length) throw new Error("no state paths matched");

/* ── geometry ───────────────────────────────────────────────────────────── */
const ringArea = (p) => {
  let a = 0;
  for (let i = 0, j = p.length - 1; i < p.length; j = i++) a += p[j][0] * p[i][1] - p[i][0] * p[j][1];
  return Math.abs(a) / 2;
};

function simplify(pts, tol) {
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [s, e] = stack.pop();
    const [x1, y1] = pts[s], [x2, y2] = pts[e];
    const dx = x2 - x1, dy = y2 - y1;
    const len2 = dx * dx + dy * dy;
    let far = -1, fd = tol;
    for (let i = s + 1; i < e; i++) {
      const [px, py] = pts[i];
      let d;
      if (len2 === 0) d = Math.hypot(px - x1, py - y1);
      else {
        let t = ((px - x1) * dx + (py - y1) * dy) / len2;
        t = t < 0 ? 0 : t > 1 ? 1 : t;
        d = Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
      }
      if (d > fd) { fd = d; far = i; }
    }
    if (far !== -1) { keep[far] = 1; stack.push([s, far], [far, e]); }
  }
  return pts.filter((_, i) => keep[i]);
}

/* ── normalise into a 0..100 viewBox ────────────────────────────────────── */
let bx0 = Infinity, by0 = Infinity, bx1 = -Infinity, by1 = -Infinity;
for (const s of states) for (const p of s.polys) for (const [x, y] of p) {
  if (x < bx0) bx0 = x; if (x > bx1) bx1 = x;
  if (y < by0) by0 = y; if (y > by1) by1 = y;
}
const W = bx1 - bx0, H = by1 - by0;
// India fills FIT of the 100-unit box, leaving a margin. The margin is not
// decoration: the map is tilted in 3D, and perspective throws the near corners
// outward — with a flush fit the north-east swings past the frame edge.
const FIT = 92;
// One scale for both axes: the source is already Mercator, and scaling the
// axes independently would stretch the country off-shape.
const SCALE = FIT / Math.max(W, H);
const OX = (100 - W * SCALE) / 2 - bx0 * SCALE;
const OY = (100 - H * SCALE) / 2 - by0 * SCALE;
const tx = (x) => x * SCALE + OX;
const ty = (y) => y * SCALE + OY;

const toPath = (rings) => rings.map((r) =>
  "M" + r.map(([x, y], i) => `${i ? "L" : ""}${tx(x).toFixed(2)} ${ty(y).toFixed(2)}`).join("") + "Z"
).join("");

const out = [];
let ringsIn = 0, ringsOut = 0, ptsIn = 0, ptsOut = 0;
for (const s of states) {
  const rings = [];
  for (const p of s.polys) {
    ringsIn++; ptsIn += p.length;
    if (ringArea(p) < MIN_AREA) continue;
    const sp = simplify(p, TOL);
    if (sp.length < 3) continue;
    ringsOut++; ptsOut += sp.length;
    rings.push(sp);
  }
  if (rings.length) out.push({ id: s.id, name: s.name, d: toPath(rings) });
}

// The extrusion stamps the silhouette a dozen times; only its outer edge is
// ever visible, so it gets its own much coarser copy rather than re-rasterising
// the full-detail outline on every layer.
const coarse = [];
for (const s of states) {
  for (const p of s.polys) {
    if (ringArea(p) < MIN_AREA_COARSE) continue;
    const sp = simplify(p, TOL_COARSE);
    if (sp.length >= 3) coarse.push(sp);
  }
}

const A = fx.m * SCALE, B = fx.b * SCALE + OX;
const C = fy.m * SCALE, D = fy.b * SCALE + OY;

const banner = `// GENERATED FILE — do not edit.
// Run \`node scripts/build-india-geo.mjs\` to regenerate from scripts/india-states.svg.
`;
const body = `${banner}
/** Every path below is drawn in this box. Square, with India centred in it. */
export const INDIA_VIEWBOX = "0 0 100 100";

/**
 * lat/lng → viewBox units, Mercator, fitted to the source map's own calibration
 * points to within 0.01px. \`y\` needs the log because Mercator stretches
 * northward: at Kashmir a degree of latitude is ~15% taller than at Kanyakumari,
 * and treating them as equal walks the northern pins visibly off their cities.
 */
export const INDIA_PROJECTION = { a: ${A}, b: ${B}, c: ${C}, d: ${D} };

/** Filled state shapes — the map surface and its internal borders. */
export const INDIA_STATES: readonly { id: string; name: string; d: string }[] = [
${out.map((s) => `  { id: ${JSON.stringify(s.id)}, name: ${JSON.stringify(s.name)}, d: ${JSON.stringify(s.d)} },`).join("\n")}
];

/**
 * The same landmass at low detail, as one path. Stamped repeatedly down the
 * z-axis to build the extruded side wall, where only the silhouette shows.
 * Fill it even-odd: the state rings tile without overlapping, so even-odd and
 * nonzero agree, and even-odd is the one that stays correct if a ring's winding
 * direction ever flips.
 */
export const INDIA_SILHOUETTE = ${JSON.stringify(toPath(coarse))};
`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, body);

console.log(`projection  x = ${A.toFixed(4)}·lng + ${B.toFixed(4)}`);
console.log(`            y = ${C.toFixed(4)}·merc(lat) + ${D.toFixed(4)}`);
console.log(`states      ${out.length}`);
console.log(`rings       ${ringsIn} → ${ringsOut} (silhouette ${coarse.length})`);
console.log(`points      ${ptsIn} → ${ptsOut}`);
console.log(`wrote       ${path.relative(process.cwd(), OUT)}  ${(Buffer.byteLength(body) / 1024).toFixed(1)} KB`);
