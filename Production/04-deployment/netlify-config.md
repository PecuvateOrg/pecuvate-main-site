# Netlify Configuration

## Site Details

- [ ] Netlify site name (subdomain):

> e.g., `pecuvate.netlify.app`

- [ ] Custom domain connected?

> 

- [ ] Git repository connected: GitHub / GitLab / Bitbucket?

> 

- [ ] Branch to deploy from:

> e.g., `main`

---

## Build Settings

These map to the `netlify.toml` file at the project root.

- [ ] Build command:

> e.g., `npm run build` or leave blank if no build step

- [ ] Publish directory:

> e.g., `dist/` or `public/` or `.` for plain HTML at root

- [ ] Node version (if applicable):

> e.g., `18`

### Example `netlify.toml`

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

- [ ] Redirects needed? (Only required for SPA routing — plain HTML sites don't need this)

---

## Deploy Previews

- [ ] Deploy previews enabled for pull requests? (Recommended — yes by default on Netlify)

---

## Forms (if needed later)

- [ ] Netlify Forms used for any contact form? (Not currently planned — connect section uses email link)

---

## Netlify Functions (if used)

- [ ] Functions directory (default: `netlify/functions/`):
- [ ] Any functions planned (e.g., Medium RSS proxy)?

---

## Headers & Security

Recommended security headers (add to `netlify.toml`):

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"
```

- [ ] Security headers added to config?

---

## Notes

- `netlify.toml` is committed to the repo root — do not put secrets in it
- All secrets go in `environment-variables.md` and are set via the Netlify dashboard
