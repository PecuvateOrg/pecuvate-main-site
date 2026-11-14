# ops

Deployment config and operational runbooks for the Pecuvate Main Site.

## Deployment

- Platform: Netlify
- Domain: `pecuvate.com`
- GitHub: `PecuvateOrg/pecuvate-main-site` (public)
- Site ID: `17a3dfdf-178b-4c77-93eb-9bb659753d6b`
- Branch: main
- Base directory: `src/`
- Build command: `pnpm run build` (see `netlify.toml`; previews never build on Netlify, use `ops/lan-preview.sh`)
- Publish directory: `dist`

## Environment Variables

Names only, values live in Netlify (production) and the vault:

| Variable | Used by |
|---|---|
| `PUBLIC_TURNSTILE_SITE_KEY` | contact page spam check (public by design) |
| `TURNSTILE_SECRET_KEY` | contact function: verifies the spam check |
| `RESEND_API_KEY` | contact function: sends the enquiry email |
| `CONTACT_TO` | contact function: where enquiries go |

## Before and after a deploy

**Before:** run `/pre-build-check` and `/pre-deploy-security`; page changes follow `design-system/MASTER.md`; build locally (`pnpm run build` in `src/`).

**After:** confirm the change on the live page (a push run can show late), and if the contact page or function changed, send one real message from a normal browser (automated browsers are stopped by the spam check).
