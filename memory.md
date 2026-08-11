# Memory — Pecuvate Main Site

## Infrastructure

| Service | Detail |
|---|---|
| Hosting | Netlify — `pecuvate.com` |
| GitHub | `Pecuvate/pecuvate-main-site` |
| Site ID | `17a3dfdf-178b-4c77-93eb-9bb659753d6b` |

## Current State

- Live at `pecuvate.com` (confirmed 2026-06-23)
- src/ migration complete (2026-06-23)
- Phase 1 presence complete
- Copy realigned to current KB identity 2026-07-21 (Hero/What We Do/Work/Ecosystem rewritten off the OS-of-BFG framing; Ecosystem section finished, was shipping placeholder TODOs)
- Public positioning spec written + committed 2026-07-27 (`planning/spec/site-positioning-spec.md`) — corrects the 2026-07-21 pass, which fixed "venture studio" but replaced it with internal OS language that fails the stranger test; rules external positioning as the public-facing voice layer
- KB routing repaired 2026-08-11 — `claude.md` had pointed at a dead OneDrive path and the retired `overview/` folder since before the 2026-07-21 sweep (which fixed `CONTEXT.md` but missed this file), so any agent fetching identity for site copy got nothing and would have written from imagination. Now routes to named pages under `vaults/PECUVATE`: `synthesis/public-positioning` for external copy, `synthesis/positioning` for voice, `entities/pecuvate`, `concepts/three-modes`

## Outstanding

- Build the site from `planning/spec/site-positioning-spec.md` — spec is DRAFT; hero option (A/B/C) and vision statement are open founder decisions, confirm before implementing if still unresolved
- Case study pages (Phase 2)
- SSL verification (not re-checked since 2026-06-23 — status unknown, not confirmed broken)
- `Insights.astro` still placeholder (Medium RSS feed — separate technical task, out of scope of the copy/spec work)
