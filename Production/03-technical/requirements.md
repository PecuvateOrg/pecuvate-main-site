# Technical Requirements

## Performance

Target: under 3 seconds load time on a standard connection.

- [ ] Images lazy-loaded?
- [ ] No unnecessary third-party scripts
- [ ] Fonts loaded efficiently (font-display: swap, preconnect to font CDN)
- [ ] Medium feed content loaded progressively (skeleton or lazy)
- [ ] Total page weight target: < 500KB (excluding images)

---

## Responsive Design

Mobile-first approach. The systems-thinking aesthetic must translate across all devices.

| Breakpoint | Behavior |
|------------|----------|
| Mobile (< 640px) | Single column, stacked layout |
| Tablet (640–1024px) | Adjusted grid, 2-column cards |
| Desktop (> 1024px) | Full layout, 3-column cards |

- [ ] Touch targets minimum 44x44px on mobile
- [ ] Navigation (if added later) collapses on mobile
- [ ] No horizontal scroll on any breakpoint

---

## Accessibility

- [ ] Semantic HTML throughout (header, main, section, nav, footer)
- [ ] Proper heading hierarchy (one H1, logical H2/H3 order)
- [ ] Alt text on all images
- [ ] All text meets WCAG AA contrast ratio (4.5:1 minimum)
- [ ] All interactive elements keyboard navigable
- [ ] Focus states visible and styled
- [ ] Screen reader tested (at minimum: VoiceOver on Mac or NVDA on Windows)

---

## Browser Support

- [ ] Modern browsers (Chrome, Firefox, Safari, Edge — last 2 versions)
- [ ] No IE11 support required
- [ ] CSS custom properties used freely (no IE fallbacks needed)

---

## SEO (Basic)

- [ ] Page `<title>` set
- [ ] Meta description set
- [ ] Open Graph tags (for link sharing on LinkedIn, etc.)
- [ ] Favicon

---

## Notes

- Reference: context-guide.md § Technical Requirements
