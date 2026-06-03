# Asset Tracker

Track all assets required for the build. Update status as assets are received.

**Status key**: `needed` | `received` | `optimised` | `in-use`

---

## Brand Assets

| Asset | Format Needed | Status | Filename | Notes |
|-------|--------------|--------|----------|-------|
| Pecuvate wordmark / logo | SVG (preferred) | needed | — | Primary brand asset |
| Favicon | .ico or SVG | needed | — | 16x16, 32x32 |
| Open Graph image | PNG, 1200x630px | needed | — | For social sharing previews |

---

## Icons

| Asset | Format Needed | Status | Filename | Notes |
|-------|--------------|--------|----------|-------|
| Knowledge Extraction icon | SVG | needed | — | For "What Pecuvate Does" section |
| Knowledge Architecture icon | SVG | needed | — | For "What Pecuvate Does" section |
| Knowledge Commercialisation icon | SVG | needed | — | For "What Pecuvate Does" section |
| Email icon | SVG | needed | — | For Connect section |
| LinkedIn icon | SVG | needed | — | For Connect section |

*Note: Icons may be sourced from a library (e.g., Heroicons, Phosphor) rather than custom — confirm in `02-design/design-system.md`*

---

## Entity Logos / Marks (Ecosystem Section)

| Asset | Format Needed | Status | Filename | Notes |
|-------|--------------|--------|----------|-------|
| Zenium Studios mark/logo | SVG | needed | — | |
| Resorz mark/logo | SVG | needed | — | |

---

## Photography / Imagery

| Asset | Format Needed | Status | Filename | Notes |
|-------|--------------|--------|----------|-------|
| (none planned) | — | — | — | Decision: typographic/geometric only |

*Update if imagery decision changes in `02-design/visual-direction.md`*

---

## Notes

- All SVGs should be optimised (run through SVGO or similar)
- All raster images should be exported at 2x for retina and compressed (WebP preferred)
- No asset should be committed to git above 500KB without discussion
