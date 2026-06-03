# Medium Integration

## Purpose

Define how Medium blog posts are fetched and displayed in the Thinking & Insights section.

---

## Data Source

- [ ] Medium username or publication URL confirmed (see `01-content/thinking-and-insights.md`):

> 

- [ ] RSS feed URL (format: `https://medium.com/feed/@username`):

> 

---

## Integration Approach

Choose one:

- [decided] **Build-time fetch** — Astro fetches the Medium RSS feed during `npm run build` and renders posts as static HTML. No CORS issues, no client-side loading state, no third-party dependency needed.

- [ ] Reason:

> 

---

## CORS Handling

Fetching Medium RSS directly from the browser hits CORS restrictions. Solution:

- [ ] Using a proxy service?
- [ ] Using Netlify Functions to proxy the request?
- [ ] Build-time fetch avoids this entirely?

---

## Caching

- [ ] Cache Medium feed to avoid slow loads? Strategy:
  - Build-time: already baked in
  - Runtime: `localStorage` with TTL / Netlify Edge caching / other?

---

## Fallback State

If Medium is unavailable or the fetch fails:

- [ ] Fallback design decided: show placeholder cards / hide section / show static posts?
- [ ] Error message copy (if shown to user):

> 

---

## Data Shape

Each post card will use:

```json
{
  "title": "",
  "excerpt": "",
  "date": "",
  "image": "",
  "url": ""
}
```

- [ ] Any additional fields needed?
- [ ] Image fallback if no featured image available?

---

## Notes

- Do not expose any API keys in client-side code
- Reference: `01-content/thinking-and-insights.md` for display requirements
