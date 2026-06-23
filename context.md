# Pecuvate Main Site — Context

## What this project is

Static Astro site — the primary web presence for the Pecuvate venture studio. Single-page landing at `pecuvate.com`. Introduces the knowledge ecosystem model and surfaces Medium blog content.

## Page sections

1. **Hero** — Immediate clarity on what Pecuvate is
2. **What Pecuvate Does** — Knowledge Extraction, Knowledge Architecture, Knowledge Commercialisation
3. **The Pecuvate Ecosystem** — How Pecuvate, Zenium Studios, and Resorz work together
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
