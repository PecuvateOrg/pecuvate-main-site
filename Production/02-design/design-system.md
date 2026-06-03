# Design System

## Spacing Scale

Base unit: 8px. All spacing values are multiples of this base.

| Token | Value |
|-------|-------|
| space-1 | 8px |
| space-2 | 16px |
| space-3 | 24px |
| space-4 | 32px |
| space-6 | 48px |
| space-8 | 64px |
| space-12 | 96px |
| space-16 | 128px |

- [ ] Approved? Or adjust base unit?

---

## Grid System

- [ ] Column count: 12-column / 16-column / other?
- [ ] Gutter width:
- [ ] Page max-width:
- [ ] Side margins (mobile / tablet / desktop):

---

## Breakpoints

Suggested breakpoints (mobile-first):

| Name | Min-width |
|------|-----------|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |

- [ ] Approved? Or adjust?

---

## Component Patterns

### Buttons / CTAs
- [ ] Primary button style (filled / outline / ghost):
- [ ] Border radius:
- [ ] Hover state behavior:
- [ ] Padding (vertical / horizontal):

### Cards (Medium feed)
- [ ] Border treatment: border / shadow / none?
- [ ] Border radius:
- [ ] Hover state: scale / border emphasis / color shift?
- [ ] Image aspect ratio:
- [ ] Internal padding:

### Icons
- [ ] Icon library chosen (if any): Heroicons / Phosphor / Lucide / custom?
- [ ] Icon style: outline / filled / duotone?
- [ ] Icon size standard:

---

## Interaction Patterns

- Transitions: smooth, `ease-in-out`, ~200–300ms
- No bouncy, spring, or playful animations
- Hover states: subtle but clear
- Focus states: visible for keyboard navigation (accessibility requirement)
- Loading state for Medium feed: skeleton screen / spinner / fade-in?

- [ ] Transition duration approved:
- [ ] Loading state approach decided:

---

## Notes

- Every spacing, sizing, and color decision should use the tokens above — no magic numbers in code
- Reference: context-guide.md § Design System Elements
