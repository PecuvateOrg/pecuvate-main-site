# Pecuvate Main Site — Context

## What this project is

Static Astro site at `pecuvate.com`. Introduces Pecuvate and hosts its blog at `/blog/`.

For copy, positioning, and entity descriptions — read the KB before writing any site content:
`~/projects/vaults/PECUVATE/CLAUDE.md` (KB spec v3.0 merged `_schema.md` into this file) → `index.md`

## Page sections

Homepage, in order (`src/src/pages/index.astro`). Copy rules and section jobs: the KB's `synthesis/public-positioning.md`.

1. **Hero** — what Pecuvate does, stranger test
2. **What We Do** — the three modes as one method, never a service menu
3. **Method** — Identify → Architect → Build
4. **What We Built** — disclosed Empowr case studies
5. **Thinking** — latest three blog posts (`Insights.astro`)
6. **Connect** — email and LinkedIn
7. **Footer**

Blog: `/blog/` index, `/blog/<slug>/` posts, `/rss.xml`. Posts are Markdown in `src/src/content/blog/`.

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
| Content | Astro content collection (`src/src/content/blog/`), RSS + sitemap |

## Current phase

Live at `pecuvate.com` (confirmed 2026-06-23). Phase 1 complete.
