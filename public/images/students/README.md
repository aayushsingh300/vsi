# Student portraits

Drop the alumni photos for the course-page testimonials here. Expected
filenames (referenced from `TESTIMONIALS` in `src/data/content.ts`):

- `ritu-kumari.jpg` — Civil CAD · 2022 · placed at L&T, Hyderabad
- `priya-soren.jpg` — Fashion CAD · 2023 · placed at Myntra, Bangalore
- `amit-kumar.jpg` — Mechanical CAD · 2022 · placed at TATA Motors, Pune

**Format:** portrait, 4:5, at least 640×800, face in the upper two-thirds —
the card crops to `object-fit: cover` from the top.

Until a file lands, that story shows an initials monogram rather than a broken
image, so the section is safe to ship half-filled.

## Adding a story for another programme

Architecture CAD, Electrical CAD and GIS have no story yet, so their pages
show no testimonial section at all. To add one, append an entry to
`TESTIMONIALS` with the programme's `slug` (`architecture-cad`,
`electrical-cad`, `gis`), a `photo` path pointing here, and — if the employer
has artwork in `EMPLOYER_MARKS` — an `employer` key. The section appears on
that course page automatically.
