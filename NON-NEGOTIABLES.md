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
- Spacing: 8px base unit scale (defined in `Production/02-design/design-system.md`)
