<!-- Generated from AGENTS.md by _config/scripts/sync-claude-md.py. Edit AGENTS.md, not this file. -->
# Pecuvate Main Site

> **This repository is PUBLIC** (`PecuvateOrg/pecuvate-main-site`).
>
> **Devlog and memory location:** `../workspace-docs/pecuvate-main-site/`
>
> `DEVLOG.md` and `memory.md` are not kept in this repo — write session entries to the path
> above instead. See `NON-NEGOTIABLES.md` for what must never be committed here.

<!-- NON-NEGOTIABLES.md, inlined -->
# Pecuvate Main Site — Non-Negotiables

Forced open by `CLAUDE.md`'s Self-Reference line — read before doing anything else in this
project.

## Rules

- **This repository is PUBLIC** (`PecuvateOrg/pecuvate-main-site`). Never create `DEVLOG.md` or
  `memory.md` in this repo — both filenames are gitignored here, so a copy created in this
  directory is silently never committed. Write session entries to
  `../workspace-docs/pecuvate-main-site/` in the private Pecuvate hub instead.
- Never put live identifiers, unremediated security findings, or commercial state in any file
  tracked here. See `../CONTEXT.md` and `_config/guides/public-repo-collaboration.md`.
- One `<h1>` per page; semantic HTML throughout
- No bright gradients, bounce effects, glassmorphism, or agency aesthetics
- Tone: clear, confident, architectural — explains a system, not a service
- Never: "We help you grow", "Book a call", bullet lists of services

## Naming Conventions

- Components: PascalCase (`HeroSection.astro`)
- Pages: Astro file-based routing in `src/src/pages/`
- Styles: CSS custom properties for all design tokens — no magic numbers
- Design: `design-system/MASTER.md` (this site) on top of the Pecuvate brand kit; never restate brand values in this repo
<!-- end NON-NEGOTIABLES.md -->

Other tools: read `NON-NEGOTIABLES.md` first, then `~/projects/NON-NEGOTIABLES.md`.

## Routing

| Task | Go to | Read first |
|---|---|---|
| **Design: colours, type, cards, buttons, forms, wording** | `design-system/` | `design-system/MASTER.md` (read before any page change) |
| Pages, components, styles | `src/src/` | `src/CONTEXT.md` |
| Feature specs, architecture decisions | `planning/` | `planning/CONTEXT.md` |
| Deploy, env vars, Netlify config | `ops/` | `ops/CONTEXT.md` |

## Cross-Workspace Flows

- **Blog** — posts are Markdown in `src/src/content/blog/`, scoped to the Pecuvate Mission (see the KB's `operations/public-positioning.md`); drafts are managed in the Notion Content Library and land here when published. Medium is syndication only, with canonical links pointing back here
- **Preview** — review locally with `bash ops/lan-preview.sh` (port 3102); Netlify never builds previews (`ops/netlify-ignore.sh`)
- **Ecosystem links** — outbound links to Zenium Studios and Resorz project sites; keep URLs in a constants file, never hardcode inline

## File Placement Rules

- Pages → `src/src/pages/`
- Components → `src/src/components/`
- Layouts → `src/src/layouts/`
- Static assets → `src/public/`
- Config → `src/` (astro.config.mjs, tailwind.config.mjs, tsconfig.json, package.json)
- Build output → `src/dist/` (gitignored)
- Netlify config → `netlify.toml` (project root)
- Architectural decisions → `planning/decisions/`
- Design decisions → `design-system/MASTER.md` · public copy rules → Pecuvate CNS `company/operations/public-positioning.md`

## Architecture Decisions (Settled)

| Decision | Choice | Reason |
|----------|--------|--------|
| Framework | Astro | Content-focused static site; no application complexity |
| Role | Gateway, not a platform | Owner 2026-10-26: management platforms are built as separate Next.js apps; this site stays Astro and links out to them |
| Deployment | Netlify — `pecuvate.com` | Git-connected, no server to manage |
| Page type | Landing page + `/blog/` + `/gears/` + `/contact/` | Landing page for presence; blog for the founder's writing; Gears for product customers (one page per Gear plus help pages, generated from `src/src/lib/gears.ts`; `/kits/*` redirects) — scope in the CNS `operations/public-positioning.md` § Gears surface |
| Blog | Astro content collection (Markdown in repo), RSS + sitemap | Owned, indexable, no third-party dependency; replaced the Medium RSS plan 2026-09-30 |
| Design aesthetic | Systems-thinking, architectural | Mirrors Pecuvate's methodology |
| Styling | Tailwind CSS | Agreed post-initial decisions |

Design constraints are non-negotiable — see `NON-NEGOTIABLES.md`.

## Facts

- Before any design change, read `design-system/MASTER.md`
- Before any deploy, follow `ops/CONTEXT.md` → Before and after a deploy
