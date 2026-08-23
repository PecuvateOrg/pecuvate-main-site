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
- Toolchain migrated to pnpm 11.22.0 on 2026-08-23 and redeployed — use `pnpm`, not `npm`. `netlify.toml` now pins `NODE_VERSION = "22"`, which is REQUIRED (pnpm 11 declares `engines.node >= 22.13`). Astro needs no `nodeLinker: hoisted` workaround. Deploy verified live, built HTML byte-identical to the previous npm output (9,818 bytes)
- KB routing repaired 2026-08-11 — `claude.md` had pointed at a dead OneDrive path and the retired `overview/` folder since before the 2026-07-21 sweep (which fixed `CONTEXT.md` but missed this file), so any agent fetching identity for site copy got nothing and would have written from imagination. Now routes to named pages under `vaults/PECUVATE`: `synthesis/public-positioning` for external copy, `synthesis/positioning` for voice, `entities/pecuvate`, `concepts/three-modes`

## Outstanding

- Build the site from `planning/spec/site-positioning-spec.md` — spec is DRAFT; hero option (A/B/C) and vision statement are open founder decisions, confirm before implementing if still unresolved
- Case study pages (Phase 2)
- ~~SSL verification~~ — RESOLVED 2026-08-23: HTTPS confirmed working, `www.pecuvate.com` returns 200 over TLS in 0.28s and the apex 301-redirects to www
- `Insights.astro` still placeholder (Medium RSS feed — separate technical task, out of scope of the copy/spec work)
