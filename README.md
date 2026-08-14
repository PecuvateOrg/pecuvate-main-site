# Pecuvate Main Site

Astro static site — Pecuvate's primary web presence at [pecuvate.com](https://pecuvate.com). Introduces Pecuvate and the wider ecosystem (Zenium, Resorz) and surfaces thought leadership via a build-time Medium RSS feed. Not a marketing site — a system made visible: architectural tone, no "book a call" / growth-agency language.

Copy and positioning are sourced from the Pecuvate KB (`F:\Projects\vaults\PECUVATE`), never hardcoded from imagination — see `CLAUDE.md` for the routing table.

## Local setup

The Astro project root is nested one level down at `src/` (an `src/src/` pattern — `astro.config.mjs` and `package.json` live in `src/`, Astro source lives in `src/src/`).

```bash
cd src
npm install
npm run dev -- --host
```

Site runs at `http://localhost:4321` by default.

```bash
npm run build     # outputs to src/dist/
npm run preview   # preview the production build locally
```

## Environment variables

None. This is a static site with no server-side logic — the Medium feed is fetched at build time, not at runtime, so there is nothing to configure locally or on Netlify.

## Deployment

| Field | Value |
|---|---|
| Platform | Netlify |
| Site ID | `17a3dfdf-178b-4c77-93eb-9bb659753d6b` |
| Netlify site name | `pecuvate-main-site` |
| Custom domain | `pecuvate.com` (DNS via Route 53) |
| Branch | `main` |
| Base directory | `src` (`netlify.toml` at project root) |
| Publish directory | `dist` |
| Build command | `npm run build` |

Deploy with `/netlify-deploy`. Run `/pre-build-check` and `/pre-deploy-security` before any deploy — see `skills.md`.

## Structure

See `CONTEXT.md` and `CLAUDE.md` for the full routing table (`Production/` for content and design docs, `planning/` for specs and ADRs, `ops/` for deployment runbooks).
