# DEVLOG — Pecuvate Main Site

## 2026-08-14

- Created `README.md` — project overview and setup docs, closing the mwp-health M10 gap (was missing entirely)
- Added a `## Skills and Tools Available` section to `CLAUDE.md` (M8)

## 2026-08-11

- Replaced the dead KB route in `claude.md`: it pointed at a OneDrive path (`OneDrive/Apps/Obsidian/PECUVATE/_schema.md`) that no longer exists, then at `overview/positioning.md`, a folder the KB spec retired. An agent writing site copy got nothing back and would have written from imagination.
- Now routes to named vault pages MWP stage-contract style - `synthesis/public-positioning`, `synthesis/positioning`, `entities/pecuvate`, `concepts/three-modes` - under `vaults/PECUVATE`.
- Same fix in `Production/context-guide.md`, where the Zenium entry also pointed into a `KNOWLEDGE BASE/` subfolder; Zenium's vault has no content yet, so it now points at the authoritative record in the Pecuvate vault and flags that mission as draft.
- This completes what the 2026-07-21 path sweep missed: `CONTEXT.md` was corrected then, `CLAUDE.md` was not.

## 2026-07-27

- Wrote and committed `planning/spec/site-positioning-spec.md` — resolves the gap the 2026-07-21 copy pass left: it fixed "venture studio" but replaced it with internal OS-of-BFG-Alliance language, which fails the stranger test on a public site
- Spec rules which of the KB's two voice layers is public-facing: external positioning (problem-first business model architect) leads; the OS/BFG story is depth in the Ecosystem section, not the front door
- Proposes three hero options (endurance conviction / approved tagline / problem-first) and sets copy rules — architect+build always paired, no advisory-only language, disclose the Empowr group relationship, no bare self-assessed £ figures
- Spec status: DRAFT, pending founder review — hero choice and vision statement remain open decisions
- Next session: build out the spec once founder has reviewed/chosen a hero direction

## 2026-07-21

- Realigned site copy to current KB-settled identity (Pecuvate as BFG Alliance's OS, not a "venture studio") — Hero, What We Do, Work, Ecosystem sections rewritten from `F:\Projects\vaults\PECUVATE\` (spec v2.0)
- Finished Ecosystem.astro — was shipping placeholder TODO brackets in production
- Added AI-ROI stat (£113,800–£188,500 delivered for Empowr CIC, Mar–Jun 2026) to Work section
- Fixed CONTEXT.md's stale KB pointer (dead OneDrive Obsidian path → `F:\Projects\vaults\PECUVATE`)
- Synced `Production/01-content/*.md` planning docs to match — retired the older "Knowledge Extraction/Architecture/Commercialisation" framing in `what-pecuvate-does.md`, which predated what was actually live
- Build verified clean; only remaining placeholder content is `Insights.astro` (Medium RSS — separate technical task)
- Not addressed: vision statement/tagline finalisation — still flagged pending in the KB itself, needs a founder decision

## 2026-06-23 — src/ migration complete (`base="src"`, `publish="dist"`), build verified, CLAUDE.md rewritten with all 7 MWP sections, CONTEXT.md updated
