# Design System — Pecuvate Main Site (pecuvate.com)

> What **this site** decided. Read before building or changing any page.
>
> Three layers, read bottom-up; each may be stricter than the one above, never looser:
> 1. **Web Build Framework** (`core/` + `types/marketing-site/`): rules for any build.
> 2. **Pecuvate brand kit**: colours, logo, type, voice, visual direction and the UI house
>    style (buttons, cards, forms, focus). It lives in the private Pecuvate hub at
>    `company/identity/brand-guide.md`. **Not restated here**: change brand values there first,
>    then mirror them in `src/tailwind.config.mjs`.
> 3. **This file**: only what is specific to pecuvate.com.

| | |
|---|---|
| **Build type** | marketing-site (gateway: links out to the Pecuvate platforms) |
| **Framework** | Astro + Tailwind (tokens in `src/tailwind.config.mjs`) |
| **Created** | 2026-11-14 |
| **Last decision** | 2026-11-14 |

---

## Motion

| | Value |
|---|---|
| Page change | fade out 0.2s ease-in, fade in 0.5s `cubic-bezier(0.22, 1, 0.36, 1)` (`src/src/styles/global.css`) |
| `prefers-reduced-motion` | respected: animations off |

## Layout

- Homepage sections: `py-16 md:py-24`, separated by a `surface-subtle` rule, headings centred.
- Section order and each section's job: `company/operations/public-positioning.md` (private hub).

## Component variants chosen

| Slot | Variant | Why |
|---|---|---|
| Navbar | logo + About · Gears · Blog | Gateway site. "Sign in" hidden until the customer account area does a job (2026-11-13) |
| Footer | four columns: brand line, Explore, Follow, Legal | |
| Hero | centred text, two buttons (Get in touch · See what we've built) | |
| CTA | "Work with Pecuvate" closing section → `/contact/` | |

## Pages

### Homepage — "What we've built"
- Six product cards, 1 / 2 / 3 columns (phone / `md` / `lg`), house-style cards.
- Empowr CIC is named once in the section intro (public copy rule), not as a tag on each card.
- **View more →** only on cards with a page (the Gear pages today).

### `/contact/`
- Two columns on desktop: left = title, one line, **What happens next** (3 steps), email
  fallback; right = the form in a raised white card. One column on phones.
- No eyebrow label and no reply-time promise.
- Topic dropdown: A platform or app · Automation and AI · Operations and finance · Gears ·
  Partnership · Something else. **The list lives in two files that must match:**
  `src/src/pages/contact.astro` and `src/netlify/functions/contact.ts`. A topic missing from
  the function is silently filed as "Something else".

---

## Quality floors

Framework defaults apply, plus the brand kit's stricter sizes (fields 48px, main button 52px).

## Decision log

### 2026-11-14 — Created, then slimmed to site-only
- Recorded from the live site after the contact redesign and the homepage product cards.
- Brand values and the UI house style moved up to the Pecuvate brand kit, so every Pecuvate
  platform shares them; this file keeps only pecuvate.com's own choices.
- Replaces the unfilled `Production/02-design/` questionnaire (retired; its settled visual
  direction went to the brand kit).

## Open questions
- [ ] Gear and product detail pages for the cards without one yet.
- [ ] Social sharing image (1200×630, `og:image`): none yet, so links shared on LinkedIn show no picture.
