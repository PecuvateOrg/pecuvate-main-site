# Pecuvate Main Site — Context

## What this project is

Static Astro site at `pecuvate.com`. Surfaces Medium blog content and introduces Pecuvate and its ecosystem.

For copy, positioning, and entity descriptions — read the KB before writing any site content:
`C:\Users\pecul\OneDrive\Apps\Obsidian\PECUVATE\_schema.md` → `index.md`

## Page sections

1. **Hero** — What Pecuvate is (derive from `overview/positioning.md`)
2. **What Pecuvate Does** — Three delivery modes (derive from `entities/pecuvate.md`)
3. **The Pecuvate Ecosystem** — Pecuvate, Zenium, Resorz (derive from `overview/company.md`)
4. **Thinking & Insights** — Build-time Medium RSS feed
5. **Connect** — Email and LinkedIn contact
6. **Footer** — Minimal closure

## Structure (post src/ migration, 2026-06-23)

```
Pecuvate Main Site/
  CLAUDE.md             MWP identity + routing
  CONTEXT.md            This file
  netlify.toml          base = "src", publish = "dist"
  Production/           Content, design, asset planning docs
  planning/             Feature specs and ADRs
  ops/                  Deployment runbooks
  src/                  MWP src root
    astro.config.mjs
    package.json
    tailwind.config.mjs
    tsconfig.json
    public/             Static assets
    src/                Astro source (components, layouts, pages, styles)
    dist/               Build output (gitignored)
```

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Astro (static output) |
| Styling | Tailwind CSS |
| Deployment | Netlify — `pecuvate.com` |
| Content | Build-time Medium RSS fetch |

## Current phase

Live at `pecuvate.com` (confirmed 2026-06-23). Phase 1 complete.
