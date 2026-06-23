# src — Pecuvate Main Site

MWP src root for the Pecuvate Main Site Astro project.

## Structure

```
src/
  astro.config.mjs      Astro config — defaults to srcDir: './src'
  package.json          Dependencies and build scripts
  tailwind.config.mjs   Tailwind configuration
  tsconfig.json         TypeScript config
  public/               Static assets served at root
  src/                  Astro source files
    components/         Reusable Astro components
    layouts/            Page layouts
    pages/              Astro pages (file-based routing)
    styles/             Global styles
  dist/                 Build output — gitignored
```

## Build

From this directory (`src/`):
```
npm install
npm run build   # outputs to src/dist/
```

## Notes

- `astro.config.mjs` has no `srcDir` set; Astro defaults to `./src` — meaning Astro source lives at `src/src/`
- Netlify uses `base = "src"` so it cds here before building
