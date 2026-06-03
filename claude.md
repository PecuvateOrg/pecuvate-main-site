# Claude.md — Pecuvate Main Site

## Project Identity

You are helping Shaun build the initial web presence for **Pecuvate** — a venture studio that transforms knowledge into scalable intellectual property through a structured ecosystem approach.

This is a **single-page landing page**, deployed on **Netlify**. It is not a marketing site. It is not an agency website. It is a system made visible — the design, structure, and copy should all reflect the same architectural thinking that defines Pecuvate's work.

The three entities in the Pecuvate ecosystem are: **Pecuvate**, **Zenium Studios**, and **Resorz**.

---

## Architecture Decisions (Settled)

These decisions have been made. Do not revisit them without being asked.

| Decision | Choice | Reason |
|----------|--------|--------|
| Deployment | Netlify | Simplicity, git-connected, no server to manage |
| Page type | Single-page landing | Phase 1 presence; modular enough to grow |
| Framework | Astro | Content-focused site with no application complexity; links out to separate projects for complex features |
| Medium integration | Build-time RSS fetch | Baked into static HTML at build — no CORS issues, no client-side loading |
| Design aesthetic | Systems-thinking, architectural | Mirrors Pecuvate's methodology |

---

## Decisions Still Open

These are unresolved. Do not assume or default — ask before proceeding.

- [ ] CSS approach (plain CSS, Tailwind, other?)
- [ ] Color palette
- [ ] Typography choices
- [ ] Medium username / publication URL
- [ ] Contact email address
- [ ] LinkedIn URL
- [ ] Hero positioning statement and subtitle
- [ ] Medium RSS integration method (RSS-to-JSON service, Netlify Function, build-time fetch)

---

## Project Navigation

Always orient here before working. Each folder has its own `context.md` — read it first.

| Path | Purpose |
|------|---------|
| `context.md` | Project brief, page sections, current phase |
| `references.md` | External resources, examples, research |
| `Production/context-guide.md` | Master structure document — source of truth for page design |
| `Production/01-content/` | Copy and content decisions for each page section |
| `Production/02-design/` | Design system, color, typography, visual direction |
| `Production/03-technical/` | Stack, build setup, Medium integration, technical requirements |
| `Production/04-deployment/` | Netlify config, environment variables, deploy checklist |
| `Production/05-assets/` | Asset tracking — logo, icons, imagery |
| `Production/06-skills/` | Custom skills for auditing and project navigation |

**Before making any structural or design decision**, read `Production/context-guide.md`.  
**Before any deploy**, run through `Production/04-deployment/deploy-checklist.md`.

---

## Engineering Standards

### General
- Write clean, minimal code — no unnecessary abstractions
- No libraries or dependencies added without a clear reason
- Performance target: page loads in under 3 seconds
- Mobile-first — every layout decision starts at the smallest breakpoint

### HTML
- Semantic HTML throughout (`header`, `main`, `section`, `footer`, `nav`)
- One `<h1>` per page — logical heading hierarchy below it
- All images must have meaningful `alt` text

### CSS
- Use CSS custom properties (variables) for all design tokens — colors, spacing, type scale
- All spacing values must follow the 8px base unit scale defined in `Production/02-design/design-system.md`
- No magic numbers — if a value isn't in the design system, question it

### JavaScript
- Vanilla JS preferred unless a framework has been agreed (see open decisions above)
- No inline scripts
- Medium feed fetch must handle failure gracefully — fallback state required

### Security
- No API keys or secrets in client-side code or committed to the repository
- All environment variables set via the Netlify dashboard — documented in `Production/04-deployment/environment-variables.md`
- Security headers defined in `netlify.toml`

---

## Design Principles

These are not aesthetic preferences — they are constraints.

**Embrace:**
- Structured grids and intentional whitespace
- Geometric elements that suggest systems and connections
- Typography that is authoritative but not stuffy
- Visual cues that show relationships between ideas
- Timeless decisions — nothing that will feel dated in two years

**Avoid:**
- Bright gradients, playful animations, bounce effects
- Generic stock imagery
- Trendy patterns (glassmorphism, heavy blur, oversaturated color)
- Top-down hierarchy diagrams in the ecosystem section
- Anything that reads as "agency" or "startup landing page"

---

## Content Principles

**Tone:** Clear, confident, architectural. Intellectual but accessible.

**What good copy sounds like here:**
- Explains a system, not a service
- Invites credible collaborators, does not pitch to everyone
- Uses precise language — not jargon, not vague inspirational language

**What to avoid:**
- "We help you grow", "Innovation at scale", "Your success is our mission"
- Calls-to-action like "Book a call" or "Get started" — they imply a product, not a studio
- Bullet lists of services
- Any copy that could belong on any other company's website

---

## Workflow Rules

- **Ask clarifying questions before making assumptions** — especially on content and design decisions
- **Write in plain, clear language** — in documentation and in code comments
- **When uncertain, say so** — do not guess at Pecuvate's positioning or entity relationships
- **Do not add features, refactor, or expand scope** beyond what is asked
- **Check open decisions before building** — if a stack or design choice is still unresolved, surface it rather than defaulting
- **One thing at a time** — complete and confirm each phase before moving to the next
