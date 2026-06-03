# Project Context — Pecuvate Main Site

## What we are building

A landing page for Pecuvate, deployed on Netlify, that serves as the initial web presence for the venture studio. The page introduces visitors to Pecuvate's model, surfaces thought leadership via a Medium blog feed, and provides clear pathways to engage.

This is Phase 1 — a focused, single-page presence. It is designed to be modular enough to grow into a full platform without a rebuild.

## The page sections (in order)

1. **Hero** — Immediate clarity on what Pecuvate is
2. **What Pecuvate Does** — The three functions: Knowledge Extraction, Knowledge Architecture, Knowledge Commercialisation
3. **The Pecuvate Ecosystem** — How Pecuvate, Zenium Studios, and Resorz work together
4. **Thinking & Insights** — Dynamic feed of Medium articles
5. **Connect** — Email and LinkedIn contact with on-brand CTAs
6. **Footer** — Minimal closure

## What good looks like

The page immediately communicates that Pecuvate is a venture studio — not an agency, not a consultancy. A first-time visitor understands the knowledge ecosystem model without it being explained to them in dense text. The design feels like a system: structured, purposeful, architectural. Credible knowledge originators can see themselves in it.

## What to avoid

- Agency aesthetics: vague taglines, hero images of people shaking hands, "we help you grow" copy
- Selling services — this page explains a system and a methodology
- Disconnected content — every element must connect back to the knowledge venture model
- Trendy design that will feel dated — the visual language should be timeless

## How this project is organised

All planning, content, design, and deployment documentation lives in `Production/`. Start there.

| Folder | Purpose |
|--------|---------|
| [Production/01-content/](Production/01-content/) | Copy and content decisions for each section |
| [Production/02-design/](Production/02-design/) | Design system, color, typography, visual direction |
| [Production/03-technical/](Production/03-technical/) | Stack, build setup, Medium integration, requirements |
| [Production/04-deployment/](Production/04-deployment/) | Netlify config, environment variables, deploy checklist |
| [Production/05-assets/](Production/05-assets/) | Asset tracking — logo, icons, imagery |
| [Production/06-skills/](Production/06-skills/) | Custom Claude skills for auditing and navigation |

## Current phase

**Phase 1: Planning & Content** — filling in all `[ ]` decisions across `01-content/` before any design or build work begins.

## Deployment target

Netlify — connected to a git repository, deployed from `main` branch.
