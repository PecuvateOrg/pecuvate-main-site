# DEVLOG — Pecuvate Main Site

## 2026-07-21

- Realigned site copy to current KB-settled identity (Pecuvate as BFG Alliance's OS, not a "venture studio") — Hero, What We Do, Work, Ecosystem sections rewritten from `F:\Projects\vaults\PECUVATE\` (spec v2.0)
- Finished Ecosystem.astro — was shipping placeholder TODO brackets in production
- Added AI-ROI stat (£113,800–£188,500 delivered for Empowr CIC, Mar–Jun 2026) to Work section
- Fixed CONTEXT.md's stale KB pointer (dead OneDrive Obsidian path → `F:\Projects\vaults\PECUVATE`)
- Synced `Production/01-content/*.md` planning docs to match — retired the older "Knowledge Extraction/Architecture/Commercialisation" framing in `what-pecuvate-does.md`, which predated what was actually live
- Build verified clean; only remaining placeholder content is `Insights.astro` (Medium RSS — separate technical task)
- Not addressed: vision statement/tagline finalisation — still flagged pending in the KB itself, needs a founder decision

## 2026-06-23

- src/ migration complete — all code moved to `src/` per MWP convention
- netlify.toml updated: `base = "src"`, `publish = "dist"`
- Build verified from `src/`: 1 page generated successfully
- CLAUDE.md rewritten with all 7 MWP sections
- CONTEXT.md updated to reflect post-migration structure
