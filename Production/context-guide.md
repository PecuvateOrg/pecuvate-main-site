# Pecuvate Landing Page - Structure Document

## Purpose
This document outlines the structure for a single-page landing page that serves as the initial web presence for Pecuvate. The page will introduce visitors to Pecuvate's venture studio model while providing access to existing content (Medium blog posts) and contact points.

## Design Philosophy
The landing page should visually embody the systems-thinking approach that defines Pecuvate's work. This means:
- Clear hierarchical structure that mirrors how knowledge ecosystems are built
- Visual elements that suggest connection, flow, and systematic architecture
- Clean, purposeful design that avoids typical agency aesthetics
- Geometric or grid-based layouts that feel intentional and structured

## Page Structure

### 1. Header / Hero Section
**Purpose**: Immediate clarity on what Pecuvate is

**Content Elements**:
- Pecuvate wordmark/logo
- Core positioning statement — derive from KB: `overview/positioning.md` (vision + tagline)
- Brief subtitle — derive from KB: `entities/pecuvate.md` (What Pecuvate Is)
- Visual treatment that suggests structure and systems

**Tone**: Clear, confident, architectural

**Design Considerations**:
- Hero section should establish visual language for entire page
- Consider using subtle grid overlay or geometric patterns
- Typography hierarchy that demonstrates structured thinking
- Whitespace that feels intentional, not empty

### 2. What Pecuvate Does Section
**Purpose**: Explain the OS model in accessible terms

**Content Elements**:
- Derive from KB: `entities/pecuvate.md` → "How Pecuvate Operates Externally" (three delivery modes + flywheel)
- Visual representation of the three modes and how they form a flywheel

**Tone**: Educational but not academic, systematic without being cold

**Design Considerations**:
- Three-column layout or process flow visualization
- Icons or graphic elements that represent each function
- Visual flow that shows progression/connection between the three functions
- Consider using connecting lines, arrows, or other elements that show relationship
- Each function should feel like a distinct but connected module

### 3. The Pecuvate Ecosystem Section
**Purpose**: Show that Pecuvate operates as part of a larger system

**Content Elements**:
- The three commercial entities: Pecuvate, Zenium, Resorz — derive roles from their respective KBs:
  - Pecuvate: `F:\Projects\vaults\PECUVATE\entities\pecuvate.md`
  - Resorz: `F:\Projects\vaults\RESORZ\entities\resorz.md`
  - Zenium: `F:\Projects\vaults\PECUVATE\entities\zenium.md` — the Zenium vault is scaffolded but has no content yet, so the Pecuvate vault currently holds the authoritative Zenium record. Note its mission there is still **draft**. The name is always *Zenium*, never "Xenium".
- Visual connection between the three (suggesting ecosystem, not hierarchy)

**Tone**: Interconnected, purposeful

**Design Considerations**:
- Three-entity layout that shows relationship (circular, triangular, or interconnected nodes)
- Visual elements that suggest collaboration and flow between entities
- Color or visual treatment that differentiates each entity while showing unity
- Avoid hierarchical top-down diagram; prefer network or ecosystem visualization
- Could use subtle animation or interaction to show how they connect

### 4. Thinking & Insights Section
**Purpose**: Provide access to Medium blog content

**Content Elements**:
- Section heading that positions blog posts as thought leadership
- Card-based feed displaying recent Medium articles
- Each card contains:
  - Article title
  - Excerpt or summary
  - Publication date
  - Featured image (if available)
  - Link to full article on Medium
- Cards should feel like organized units in a system, not scattered content

**Design Considerations**:
- Modular grid layout (2 or 3 columns on desktop, 1 on mobile)
- Consistent card structure with clear visual hierarchy
- Cards should have subtle borders or containers that reinforce "structured module" feeling
- Hover states that feel purposeful (subtle scale, border emphasis, or color shift)
- Consider showing 3-6 most recent posts initially
- Typography within cards should maintain overall page hierarchy
- Spacing between cards should feel systematic (use consistent grid spacing)
- Card visual treatment should echo design language from earlier sections

**Tone**: Intellectual but accessible, structured

### 5. Connect Section
**Purpose**: Provide clear pathways to engage with Pecuvate

**Content Elements**:
- Email contact option
- LinkedIn profile link
- Clear calls-to-action that match Pecuvate's tone
- Not "Get in touch!" but something more aligned with the knowledge venture approach
- Possible copy: "Collaborate with us", "Connect on LinkedIn", "Explore partnerships"

**Tone**: Open but professional, inviting collaboration from credible knowledge originators

**Design Considerations**:
- Clean, uncluttered layout
- Clear visual distinction between the two contact methods
- Button or link styling that matches overall design system
- Consider icon usage (email icon, LinkedIn icon) but keep refined
- Adequate whitespace around CTAs to give them breathing room
- Background treatment that sets this section apart (subtle color shift or contained area)

### 6. Footer
**Purpose**: Clean closure with essential information

**Content Elements**:
- Copyright
- Possibly brief mission statement or tagline
- Links to email and LinkedIn (repeated from Connect section)

**Design Considerations**:
- Minimal, understated
- Typography smaller but still legible
- Consistent with overall design language
- Adequate padding to avoid cramped feeling

## Design System Elements

### Color Palette
**To be defined in design plan, but should include**:
- Primary brand color(s)
- Neutral tones for text and backgrounds
- Accent color for interactive elements
- Colors should feel professional, structured, not playful or overly vibrant
- Consider monochromatic or limited palette that reinforces systematic approach

### Typography
**To be defined in design plan, but should consider**:
- Primary typeface for headings (should feel authoritative, structured)
- Secondary typeface for body copy (readable, clean)
- Clear type scale that creates visual hierarchy
- Consistent use of weights to distinguish different content levels
- Line height and spacing that aids readability while feeling purposeful

### Spacing System
- Consistent spacing scale (e.g., 8px base unit: 8, 16, 24, 32, 48, 64, 96)
- Margins and padding that follow systematic rhythm
- Whitespace used intentionally to create separation and hierarchy

### Grid System
- Underlying grid that structures all content
- 12-column or 16-column grid for flexibility
- Consistent gutters and margins
- Grid should be felt but not necessarily visible

### Interactive Elements
- Buttons and links with consistent styling
- Hover states that are subtle but clear
- Transitions that feel smooth and purposeful (not bouncy or playful)
- Loading states for Medium feed that don't disrupt experience

### Visual Language
- Geometric shapes or line work that suggests systems and connections
- Subtle patterns or textures that reinforce structure
- Icons (if used) should be minimal, geometric, consistent in style
- Photography or imagery (if used) should feel intentional, not stock

## Technical Requirements

### Medium Integration
- The page needs to fetch and display Medium blog posts dynamically
- This can be done via:
  - Medium RSS feed (medium.com/feed/@username)
  - Third-party API or service (RSS to JSON conversion)
  - Manual curation (if dynamic feed isn't feasible initially)
- Should handle gracefully if Medium is unavailable (fallback state)
- Consider caching to improve load time

### Responsive Design
- Mobile-first approach
- Breakpoints for mobile, tablet, desktop
- Systems-thinking aesthetic should translate across devices
- Card grid should reflow appropriately (1 column mobile, 2-3 desktop)
- Navigation (if needed) should adapt for mobile
- Touch-friendly tap targets on mobile

### Performance
- Fast loading (target under 3 seconds)
- Optimized images (lazy loading for Medium cards)
- Minimal dependencies
- Clean, efficient code
- Consider progressive loading for Medium content

### Accessibility
- Semantic HTML
- Proper heading hierarchy
- Alt text for images
- Sufficient color contrast
- Keyboard navigable
- Screen reader friendly

## Content Gaps to Fill

Before building, we need:
1. Medium username or publication URL
2. Contact email address
3. LinkedIn page URL
4. Decision on specific wording for:
   - Hero positioning statement
   - Section headings
   - Call-to-action copy
   - Brief descriptions for each section
5. Logo/wordmark files (if available)
6. Brand colors (if defined)
7. Preferred typefaces (if any)

## Design Plan Workflow

### Phase 1: Design Exploration
- Develop visual design concepts
- Establish color palette, typography, spacing system
- Create design mockups for key sections
- Explore visual treatment for "systems thinking" aesthetic
- Design the Medium card component
- Define interaction states

### Phase 2: Design Refinement
- Review and iterate on chosen direction
- Finalize design system (colors, type, spacing, components)
- Create responsive layouts for mobile, tablet, desktop
- Design edge cases (loading states, empty states, error states)

### Phase 3: Build Preparation
- Prepare design specifications for development
- Export assets (icons, images, etc.)
- Document component styles and interactions
- Create style guide or design tokens

## Visual Direction Notes

The design should avoid:
- Typical startup/agency aesthetics (bright gradients, overly playful)
- Corporate blandness
- Overly complex or busy layouts
- Stock photography that feels generic
- Trendy design patterns that will feel dated quickly

The design should embrace:
- Structured grids and intentional whitespace
- Geometric elements that suggest systems and connections
- Typography that feels authoritative but not stuffy
- Subtle visual cues that show relationships between ideas
- A sense of architectural thinking made visible
- Timeless, foundational design that can evolve
- Precision and attention to detail
- Visual rhythm and consistency

## Design References to Consider

When creating the design plan, consider visual approaches from:
- Information architecture and data visualization
- Architectural blueprints and technical drawings
- Modular design systems
- Network diagrams and flow charts
- Bauhaus and Swiss design principles (systematic, grid-based, purposeful)
- Contemporary design systems (e.g., IBM Carbon, Atlassian Design System)

The goal is not to copy these but to extract principles: clarity, structure, systematic thinking, visual hierarchy.

## Future Evolution

This landing page is designed to:
- Serve as the initial web presence immediately
- Act as a foundation that can expand into a full platform
- Maintain its core structure while allowing for:
  - Addition of case studies/ventures as they develop
  - Expansion of content sections
  - Integration of more sophisticated features (venture portfolio, knowledge library, etc.)

The structure should be modular enough to grow without requiring a complete rebuild.

**Design System Considerations for Future**:
- Component library that can be extended
- Design tokens that can be applied to new sections
- Visual language that can scale to more complex interfaces
- Grid system that accommodates additional content types

## Success Criteria

The landing page succeeds if:
- A visitor immediately understands that Pecuvate is a venture studio, not an agency
- The concept of "knowledge ecosystems" becomes tangible, not abstract
- The page itself demonstrates systematic thinking through its structure and design
- Credible knowledge originators can envision how their expertise might become a venture
- The Medium content feels integrated into the narrative, not tacked on
- The overall experience feels purposeful and architected, mirroring Pecuvate's approach
- The design feels timeless, not trendy
- The visual system can be extended as the platform grows
- Every design decision feels intentional and supports the broader narrative

## Next Steps

1. Gather all required content (Medium URL, contact info, etc.)
2. Create design plan with visual explorations
3. Review and refine design direction
4. Build the landing page based on approved design
5. Test across devices and browsers
6. Deploy to domain