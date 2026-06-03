# 04-deployment — Context

## What this folder is for

This folder covers everything needed to deploy and maintain the Pecuvate landing page on Netlify. It includes configuration, environment variables, and a deploy checklist.

## Process

1. Complete `netlify-config.md` — defines build settings and redirects
2. Complete `environment-variables.md` — documents any secrets or env vars needed
3. Run through `deploy-checklist.md` before every deploy to production

## Files in this folder

- `netlify-config.md` — Netlify site settings, build config, and redirect rules
- `environment-variables.md` — Environment variables required at build and runtime
- `deploy-checklist.md` — Pre-deploy checklist to run before pushing to production

## Notes

- The `netlify.toml` config file lives at the project root (next to `index.html` or `package.json`)
- All environment variables are set in the Netlify dashboard — never committed to git
