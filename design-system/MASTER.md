# Design System — Pecuvate Main Site (pecuvate.com)

> The site's design source of truth: read it before building or changing any page.
> It sits on top of the Web Build Framework (`core/` + `types/marketing-site/`) and may be
> stricter than the framework, never looser. Replaces the unfilled questionnaires in
> `Production/02-design/`.

| | |
|---|---|
| **Build type** | marketing-site |
| **Framework** | Astro + Tailwind (tokens in `src/tailwind.config.mjs`) |
| **Created** | 2026-11-14 (recorded from the live site) |
| **Last decision** | 2026-11-14 |

---

## Colour

| Token (Tailwind) | Value | Use |
|---|---|---|
| `brand-orange` | `#F47C20` | Logo, borders, tints (`/15`), focus glow. **Never text or a button fill**: 2.7:1 on white |
| `brand-orange-text` | `#B45309` | Orange text and the main button fill: 5.0:1 against white |
| `brand-yellow` | `#F5C200` | Logo only |
| `brand-gray` | `#8C8C8C` | Field borders (passes 3:1 on white and on `surface`) |
| `ink-primary` | `#1A1A1A` | Headings, body text, selected states |
| `ink-muted` | `#6B6B6B` | Secondary text, captions |
| `surface` | `#FAFAFA` | Page background, field fill |
| `surface-subtle` | `#F0F0F0` | Dividers, card borders on white |
| white | `#FFFFFF` | Cards |

**Dark mode:** no.

## Typography

| | Value |
|---|---|
| Face | Plus Jakarta Sans (brand font since 2026-11-07; replaced Poppins) |
| Base size | 16px; form fields always 16px |
| Headings | semibold; h1 `text-4xl md:text-5xl`, h2 `text-3xl`, h3 `text-lg` |
| Eyebrow labels | `text-xs` uppercase, tracked, `brand-orange-text`. Use sparingly: not on the contact page |

## Motion

| | Value |
|---|---|
| Level | subtle |
| Page change | fade out 0.2s ease-in, fade in 0.5s `cubic-bezier(0.22, 1, 0.36, 1)` (`src/src/styles/global.css`) |
| Hover | colour transitions, 150–200ms. No bounce, no scale |
| `prefers-reduced-motion` | respected: animations off |

## Layout

| | Value |
|---|---|
| Container | `max-w-content` (1200px), `px-6` |
| Sections | `py-16 md:py-24`, separated by a `surface-subtle` rule |
| Text blocks | centred headings on homepage sections; left-aligned on the contact page's two columns |

## Component variants chosen

| Slot | Variant | Why |
|---|---|---|
| Navbar | logo + About · Gears · Blog | Gateway site. "Sign in" hidden until the customer account area does a job (2026-11-13) |
| Footer | four columns: brand line, Explore, Follow, Legal | |
| Hero | centred text, two buttons (Get in touch · See what we've built) | |
| CTA | "Work with Pecuvate" closing section + contact page | |

---

## House style

### Feel
Clear, confident, architectural (`NON-NEGOTIABLES.md`). White cards on the light page, soft
corners, generous space. No gradients, glass or agency effects. Orange marks only what matters:
the main action, the focus, a link.

### Cards (homepage "What we've built")
- White card, `border-surface-subtle`, `p-8`, equal height in a row, link at the bottom (`mt-auto`).
- Grid: 1 column on phones, 2 at `md`, 3 at `lg`.
- **Title says what it does** ("End-to-end e-signing, run from your AI assistant"); the
  product name sits underneath in small uppercase (PECUSIGN, FINANCE GEAR); one or two lines of
  description; **View more →** only when a page exists.
- Empowr CIC is named once in the section intro (public copy rule 5), not as a tag on each card.

### Buttons
- Main action: `bg-brand-orange-text`, white text, `rounded-xl`, at least 52px high, full
  width on forms, label with an arrow ("Send message →"). Hover: `ink-primary`.
- One main button per view; everything else is a text link in `brand-orange-text`.

### Forms (`/contact/`)
- Two columns on desktop: left = heading, one line, **What happens next** (3 numbered steps in
  orange-tint circles), email fallback; right = the form in a white `rounded-2xl` card with a
  soft shadow. One column on phones.
- No eyebrow label and no reply-time promise. Title "Tell us what you need"; one line under it
  saying what we can help with.
- Labels: "What can we help with?" (a **dropdown**, styled like the fields, with its own
  arrow), "Your name", "Organisation (optional)", "Where should we reply?", "Tell us a bit more".
- Fields: `rounded-xl`, 48px, `bg-surface` turning white on focus, `border-brand-gray`, focus
  = `border-brand-orange` + `ring-4 ring-brand-orange/20`. Example placeholders.
- Thank-you state replaces the form: orange-tint tick, one line.
- The topic list lives in two places that must match: `src/src/pages/contact.astro` and
  `src/netlify/functions/contact.ts` (a topic missing from the function is silently filed as
  "Something else").

### Words
- Say what a thing does. Claim AI only where AI does the work ("AI-powered" / "works with your
  AI assistant" / "automated").
- **Gear** and **Gears** are always capitalised: they are the product name.
- Public copy rules: `company/operations/public-positioning.md` in the private Pecuvate hub.

---

## Quality floors

Framework defaults (`core/5-quality/responsive-floors.md`) apply. Stricter here:

| Floor | Framework | This site | Why |
|---|---|---|---|
| Form field height | 44px | 48px | Roomier, more welcoming fields |
| Main button height | 44px | 52px | One clear action per view |

---

## Decision log

### 2026-11-14 — Recorded
- Design record created from the live site, after the contact page redesign and homepage
  product cards (2026-11-13). The house style above was first drafted as a framework file and
  moved here because it is this site's choice, not a rule for every build.

## Open questions
- [ ] Gear and product detail pages ("View more" for the cards without one yet).
