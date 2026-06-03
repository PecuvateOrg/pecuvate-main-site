# Stack & Build

## Purpose

Define the technical foundation before any code is written. These decisions affect the Netlify build configuration.

---

## Framework / Approach

- [decided] **Astro**

- [decided] Reason: This site is content-focused and will link out to separate projects for any complex application features. Astro ships zero JS by default, is optimised for exactly this use case, and integrates cleanly with Netlify. Next.js was considered but is over-engineered for a site with no application-level requirements.


---

## Build Tool

- [decided] Astro uses **Vite** internally — no separate build tool configuration needed.
- [decided] Build command: `npm run build`
- [decided] Output / publish directory: `dist/`

---

## Package Manager

- [ ] npm / pnpm / yarn / none?

---

## CSS Approach

- [ ] Plain CSS
- [ ] CSS custom properties (variables) — recommended for design tokens
- [ ] Tailwind CSS
- [ ] CSS Modules
- [ ] Other:

---

## JavaScript

- [ ] Vanilla JS only (recommended for performance)
- [ ] Framework (if chosen above)
- [ ] Any third-party scripts needed?

---

## File Structure (Code)

To be defined once framework is chosen. Example for plain HTML:

```
/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   └── icons/
└── netlify.toml
```

- [ ] Agreed file structure:

---

## Notes

- Netlify can deploy directly from a git repo — no CI/CD configuration required for a simple site
- Keep dependencies minimal for performance target (under 3s load time)
- Reference: `04-deployment/netlify-config.md` for build settings
