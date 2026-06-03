# Environment Variables

## Important

**Never commit secrets or API keys to git.** All environment variables are set in the Netlify dashboard under:
Site Settings → Environment Variables

---

## Required Variables

Document each variable needed. Do not write the actual values here — just the key names and what they're for.

| Variable Name | Purpose | Where Used | Set in Netlify? |
|---------------|---------|------------|-----------------|
| (none yet) | | | |

---

## If Medium Integration Uses a Third-Party API

If using an RSS-to-JSON service that requires an API key:

| Variable Name | Purpose |
|---------------|---------|
| `MEDIUM_RSS_API_KEY` | API key for RSS feed proxy service (if required) |

- [ ] API key required for chosen Medium integration approach?

---

## Build-Time vs Runtime Variables

- **Build-time**: Available during `npm run build` — baked into static output. Prefix with `VITE_` (if using Vite) to expose to client.
- **Runtime (Netlify Functions)**: Available only in serverless functions — never exposed to the browser.

- [ ] Any variables that must be runtime-only (i.e., must NOT be in client-side code)?

---

## Notes

- Never log environment variable values in code
- If a variable is exposed to the browser, assume it is public — do not use it for secrets
