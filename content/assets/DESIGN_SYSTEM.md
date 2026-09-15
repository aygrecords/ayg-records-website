# AYG Records Design System

## Brand Identity

**What is AYG Records?**
Independent record label / music brand

**Brand Feel:**
- Independent
- Authentic
- Cinematic
- Gritty
- Modern
- Premium
- Underground
- Confident
- Human
- Creative
- Aspirational

**Core Story:**
"Two days." — From closet to creative studio.

---

## Visual Direction

### Aesthetic
- Dark + Cinematic + Gritty + Premium
- Deep black / charcoal backgrounds
- High-contrast photography
- Large editorial typography
- Strong whitespace
- Cinematic crops
- Subtle grain/texture
- Controlled shadows
- Strong visual hierarchy
- Asymmetrical editorial layouts where appropriate

### Avoid
- Rainbow gradients
- Excessive neon
- Excessive rounded cards
- Generic SaaS design
- Excessive glassmorphism
- Cartoon graphics
- Stock music-note imagery
- Equal-sized boxes everywhere
- Excessive animations

---

## Color System

### Primary Palette
- **Black:** `#000000` — Primary background
- **Charcoal:** `#1a1a1a` — Secondary background, depth
- **White:** `#ffffff` — Text, high contrast
- **Light Gray:** `#e0e0e0` — Secondary text, borders
- **Medium Gray:** `#666666` — Tertiary text
- **Dark Gray:** `#2a2a2a` — Subtle backgrounds

### Usage
- Backgrounds: Black, charcoal, dark gray
- Text: White (primary), light gray (secondary), medium gray (tertiary)
- Accents: Use with restraint; let photography dominate
- No excessive color; photography is the primary visual

---

## Typography

### Typeface Stack
**Heading:** Inter or system sans-serif (bold, clean, modern)
**Body:** Inter or system sans-serif (regular, readable, modern)

### Type Scale

| Use | Size | Weight | Line Height |
|-----|------|--------|-------------|
| H1 (Hero) | 64px–80px | 700 bold | 1.1 |
| H2 (Section) | 48px–56px | 700 bold | 1.2 |
| H3 (Subsection) | 32px–40px | 700 bold | 1.3 |
| H4 (Card title) | 24px–28px | 700 bold | 1.3 |
| Body | 16px–18px | 400 regular | 1.6 |
| Small | 12px–14px | 400 regular | 1.5 |
| Button | 14px–16px | 600 semibold | 1.4 |

### Principles
- Large, bold display typography
- Clean hierarchy
- Tight but readable layouts
- No decorative fonts (avoid looking amateur)
- Use uppercase sparingly for emphasis
- Strong contrast between text and background

---

## Button System

### Style
- Simple, confident
- No excessive pill shapes
- Clear action-oriented copy
- Minimal UI

### Examples
- `LISTEN NOW`
- `WATCH`
- `EXPLORE`
- `SHOP AYG`
- `SUBMIT MUSIC`
- `CONTACT`

### States
- **Default:** White text on black background, no border
- **Hover:** Subtle opacity change, slight scale, smooth transition
- **Active:** Slight invert or highlight

### CSS Approach
```css
.btn {
  background: #000;
  color: #fff;
  border: 1px solid #fff;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  opacity: 0.8;
  transform: scale(1.05);
}
```

---

## Navigation

### Desktop
- Horizontal navigation bar
- AYG logo left
- Menu items center or right (Music, Artists, Studio, Store, Submissions, Contact)
- Sticky or static, depending on section
- High contrast, clean spacing

### Mobile
- Hamburger menu (3 lines)
- Full-screen overlay menu on mobile
- Large touch targets (48px minimum)
- Same menu items
- Close button clearly visible

### Styling
- Dark background
- White text
- No excessive animations
- Clear hover states

---

## Photography Treatment

### Style
- Cinematic
- Natural
- Real
- Confident
- Slightly gritty
- Editorial
- Music-industry appropriate

### Crops
- Large, immersive
- Asymmetrical where appropriate
- Strong framing
- Face forward or profile (intentional)

### Content Types
- Artist portraits
- Studio photography
- Live-performance photography
- Behind-the-scenes
- Lifestyle
- Fashion/apparel

### Processing
- Professional color grade
- Slight warmth or coolness intentional
- Subtle grain acceptable (not overdone)
- High contrast
- No stock photos

---

## Card Design

### Components
- Image (dominates)
- Title (large, bold)
- Metadata (artist, date, link)
- CTA (action-oriented)

### Layout
- Not all equal-sized boxes
- Asymmetrical grids acceptable
- Whitespace respected
- Image takes priority

### Hover States
- Subtle scale
- Image zoom
- Opacity change on text
- Smooth transitions

---

## Motion Language

### Principles
- Subtle, not distracting
- Purposeful (serves UX)
- Smooth transitions (0.3s–0.6s)
- No excessive animations

### Examples
- Slow image zoom (1.05–1.1x)
- Fade transitions
- Image reveal
- Text reveal
- Hover state transitions
- Page transitions
- Subtle parallax (light, not obvious)

### Avoid
- Spinning elements
- Flashing
- Auto-playing video with sound
- Excessive layering

---

## Spacing System

### Base Unit: 8px

| Size | Pixels | Use |
|------|--------|-----|
| xs | 4px | Fine adjustments |
| sm | 8px | Tight spacing |
| md | 16px | Standard spacing |
| lg | 24px | Section spacing |
| xl | 32px | Major sections |
| xxl | 48px | Hero spacing |
| xxxl | 64px | Large sections |

---

## Layout Grid

### Desktop (1200px+)
- 12-column grid
- 20px gutters
- Full-width sections acceptable
- Asymmetrical layouts acceptable

### Tablet (768px–1199px)
- 8-column grid
- 16px gutters
- Responsive scaling

### Mobile (< 768px)
- 4-column grid (or single column)
- 12px gutters
- Full-width images
- No horizontal scrolling
- Large touch targets (48px minimum)

---

## Component Library

### Hero Section
- Full-height immersive image
- Minimal overlay text
- Strong CTA
- Mobile-optimized crop

### Featured Release Card
- Large cover art
- Title + artist
- Short description
- Listen CTA
- Optional motion (subtle zoom)

### Artist Card
- Large photograph
- Name
- Descriptor
- Explore button

### Section Header
- Bold typography
- Whitespace
- Optional subheading
- Optional visual line

### Footer
- Dark background
- White text
- Logo
- Navigation
- Social icons
- Legal/business info
- Minimal styling

---

## Responsive Breakpoints

| Breakpoint | Size | Purpose |
|-----------|------|---------|
| Mobile | < 768px | Phone/small tablet |
| Tablet | 768px–1199px | Larger tablet |
| Desktop | 1200px+ | Full desktop experience |

---

## Accessibility

### Requirements
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`)
- ARIA labels where needed
- Keyboard navigation (tab, enter, escape)
- Focus indicators visible
- Alt text on all images
- Color contrast: WCAG AA minimum (4.5:1 for text)
- No color-only communication
- Form labels associated with inputs

### Mobile-First Design
- Touch targets: 48px minimum
- No hover-only interactions
- Clear, large typography
- Fast loading (images optimized)
- No excessive animations

---

## Performance

### Image Optimization
- Serve modern formats (WebP with fallback)
- Responsive images (`srcset`)
- Lazy loading for below-fold images
- Appropriate compression
- Target: < 100KB per image

### Code Optimization
- Minify CSS/JS
- Remove unused styles
- Inline critical CSS
- Defer non-critical JS
- Fast page load (target: < 2s)

---

## SEO Keywords

- AYG Records
- AYG Records LLC
- Independent record label
- Independent music
- AYG Records artists
- AYG Records music
- AYG Records apparel

---

## Content Rule

**NEVER INVENT BUSINESS FACTS**

Do not invent:
- Artists
- Song titles
- Statistics
- Testimonials
- Awards
- Partnerships
- Streaming numbers
- Revenue
- Press coverage
- Contact information
- Addresses

Use clearly labeled placeholders if information is missing.

---

## Brand Consistency Checklist

Before each new page:
✓ Same typography system
✓ Same spacing logic
✓ Same image treatment
✓ Same button system
✓ Same navigation
✓ Same footer
✓ Same visual tone
✓ Same motion language
✓ Feels like same company

---

## Build Priority

1. **PHASE 1:** HOME (hero → featured release → story → live performance → artists → apparel → submit → footer)
2. **PHASE 2:** MUSIC
3. **PHASE 3:** ARTISTS
4. **PHASE 4:** STUDIO / STORY
5. **PHASE 5:** STORE
6. **PHASE 6:** SUBMISSIONS
7. **PHASE 7:** CONTACT

Build section-by-section. Stop after each. Get approval before moving forward.

---

**Last Updated:** 2026-09-14
**Status:** Design System Complete — Ready for Hero Implementation
