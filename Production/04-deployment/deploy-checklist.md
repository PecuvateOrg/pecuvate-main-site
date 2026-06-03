# Deploy Checklist

Run through this before every production deploy.

---

## Content

- [ ] All `[ ]` items in `01-content/` are resolved and marked `[approved]`
- [ ] Hero positioning statement finalised
- [ ] Contact email and LinkedIn URL confirmed and correct
- [ ] Medium feed URL confirmed and working

## Design

- [ ] All `[ ]` items in `02-design/` are resolved and marked `[approved]`
- [ ] Color contrast ratios verified (WCAG AA)
- [ ] Typography renders correctly across browsers

## Technical

- [ ] Medium integration tested — posts load correctly
- [ ] Fallback state tested — Medium feed unavailable scenario handled
- [ ] All images have alt text
- [ ] Heading hierarchy is correct (one H1)
- [ ] Page title and meta description set
- [ ] Open Graph tags set (title, description, image)
- [ ] Favicon in place

## Performance

- [ ] Page loads in under 3 seconds on a standard connection
- [ ] Images optimised and lazy-loaded
- [ ] No unnecessary console errors or warnings
- [ ] Lighthouse score checked (target: Performance > 90, Accessibility > 90)

## Responsive

- [ ] Tested on mobile (375px)
- [ ] Tested on tablet (768px)
- [ ] Tested on desktop (1280px)
- [ ] No horizontal scroll on any breakpoint

## Accessibility

- [ ] Keyboard navigation works through all interactive elements
- [ ] Focus states visible
- [ ] Screen reader tested (basic pass)

## Netlify

- [ ] `netlify.toml` committed to repo root
- [ ] Environment variables set in Netlify dashboard
- [ ] Build succeeds without errors in Netlify
- [ ] Deploy preview reviewed before publishing
- [ ] Custom domain resolving correctly (if connected)
- [ ] HTTPS active

---

## Post-Deploy

- [ ] Live site reviewed on real device
- [ ] Medium feed loading on live site
- [ ] Contact links (email, LinkedIn) tested
- [ ] Share the page on LinkedIn — check Open Graph preview renders correctly
