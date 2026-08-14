# Pecuvate Main Site

## Identity
Astro static site — primary web presence for Pecuvate at `pecuvate.com`. Surfaces thought leadership via a Medium blog feed. Not a marketing site — a system made visible.

For Pecuvate's positioning, delivery modes, and entity descriptions to use in site copy — read the KB at `F:\Projects\vaults\PECUVATE`. Route to named pages, never to the vault generally:

| Need | Read |
|---|---|
| Public-facing copy, external messaging | `synthesis/public-positioning.md` |
| Brand voice and tone | `synthesis/positioning.md` |
| What Pecuvate is | `entities/pecuvate.md` |
| Delivery modes | `concepts/three-modes.md` |
| Ecosystem entities (Zenium, Resorz, Empowr) | `entities/<name>.md` |

The KB is the single source of truth — never restate entity identity in site copy or in this repo's files.

## Self-Reference
Inherits from `F:\Projects\CLAUDE.md` (Layer 0) and `F:\Projects\_config\`. This file is the map — workspace detail lives in each CONTEXT.md.

---

## Routing

| Task | Go to | Read first |
|---|---|---|
| Pages, components, styles | `src/src/` | `src/CONTEXT.md` |
| Feature specs, architecture decisions | `planning/` | `planning/CONTEXT.md` |
| Deploy, env vars, Netlify config | `ops/` | `ops/CONTEXT.md` |
| Content, design, asset references | `Production/` | `Production/context-guide.md` |

---

## Cross-Workspace Flows

- **Medium feed** — build-time RSS fetch baked into static HTML; no CMS or client-side loading
- **Ecosystem links** — outbound links to Zenium Studios and Resorz project sites; keep URLs in a constants file, never hardcode inline

---

## Naming Conventions

- Components: PascalCase (`HeroSection.astro`)
- Pages: Astro file-based routing in `src/src/pages/`
- Styles: CSS custom properties for all design tokens — no magic numbers
- Spacing: 8px base unit scale (defined in `Production/02-design/design-system.md`)

---

## File Placement Rules

- Pages → `src/src/pages/`
- Components → `src/src/components/`
- Layouts → `src/src/layouts/`
- Static assets → `src/public/`
- Config → `src/` (astro.config.mjs, tailwind.config.mjs, tsconfig.json, package.json)
- Build output → `src/dist/` (gitignored)
- Netlify config → `netlify.toml` (project root)
- Architectural decisions → `planning/decisions/`
- Content / design / asset docs → `Production/`

---

## Architecture Decisions (Settled)

| Decision | Choice | Reason |
|----------|--------|--------|
| Framework | Astro | Content-focused static site; no application complexity |
| Deployment | Netlify — `pecuvate.com` | Git-connected, no server to manage |
| Page type | Single-page landing | Phase 1 presence; modular enough to grow |
| Medium integration | Build-time RSS fetch | Static HTML — no CORS, no client-side loading |
| Design aesthetic | Systems-thinking, architectural | Mirrors Pecuvate's methodology |
| Styling | Tailwind CSS | Agreed post-initial decisions |

**Design constraints (non-negotiable):**
- One `<h1>` per page; semantic HTML throughout
- No bright gradients, bounce effects, glassmorphism, or agency aesthetics
- Tone: clear, confident, architectural — explains a system, not a service
- Never: "We help you grow", "Book a call", bullet lists of services

---

## Token Management

- Do not load `planning/` unless the task involves specs or architecture decisions
- Do not load `ops/` unless the task involves deployment or environment variables
- Do not load `Production/` unless working on content, design, or assets
- Before any structural or design decision, read `Production/context-guide.md`
- Before any deploy, run `Production/04-deployment/deploy-checklist.md`

---

## Skills and Tools Available

| Tool / Skill | Trigger | Purpose |
|---|---|---|
| `/netlify-deploy` | going live, deploying, or changing domain config | Deploy to Netlify and configure `pecuvate.com` |
| `/pre-build-check` | before any deploy | Validate build structure and frontend quality |
| `/pre-deploy-security` | before any deploy | Security hygiene scan — FAILs block the deploy |
| `/webapp-testing` | after frontend changes | Test UI with Playwright |
| `/simplify` | after a feature or content pass | Review changed code for reuse, quality, efficiency |
