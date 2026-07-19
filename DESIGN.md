---
name: Rifki Portfolio
description: A premium minimal portfolio demonstrating software engineering craftsmanship and Swiss-style precision.
colors:
  primary: "#18181B"
  accent: "#2563EB"
  background: "#FAFAFA"
  text: "#09090B"
  muted: "#71717A"
typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(2rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  display-creative:
    fontFamily: "Compressa VF"
    fontSize: "clamp(2rem, 5vw, 4rem)"
    fontWeight: 700
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
  label-sm:
    fontFamily: "Geist Mono, monospace"
    fontSize: "0.625rem"
    fontWeight: 500
    lineHeight: 1.2
  label-xs:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
  label-xxs:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.5625rem"
    fontWeight: 500
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "14px"
  xxl: "16px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "#1D4ED8"
  card:
    backgroundColor: "{colors.background}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Rifki Portfolio

## 1. Overview

**Creative North Star: "The Swiss Code Laboratory"**

This visual system brings Swiss modernist restraint to software engineering. It prioritizes clarity, structural grids, and clean visual paths. It rejects unnecessary stylistic layers or decorative patterns in favor of high-information density, functional layouts, and precision alignment.

What this system explicitly rejects:
- Bloated designs with excessive animations, emojis, and unnecessary visual noise.
- Poor contrast, generic SaaS-cream default templates, and standard hero-metric boxes.

**Key Characteristics:**
- Strict alignment to a grid
- Restrained color application (monochrome background and text with blue CTA accents)
- Precise typography contrast and proportions
- Subtle, functional interactive motion

## 2. Colors

A monochrome scale paired with a single focused blue accent for active elements.

### Primary
- **Zinc Ink** (#18181B / oklch(0.205 0 0)): Used for core layout structure, major titles, and solid branding blocks.

### Accent
- **Electric Blue** (#2563EB): Used exclusively for call-to-actions, active links, and primary interactive feedback.

### Neutral
- **Background White** (#FAFAFA / oklch(0.985 0 0)): The clean default light backdrop.
- **Ink Dark** (#09090B / oklch(0.145 0 0)): Primary text color for body copy, achieving maximum readability and contrast.
- **Muted Steel** (#71717A / oklch(0.556 0 0)): Secondary text, metadata, borders, and inactive states.

### Named Rules
**The Accent Isolation Rule.** The accent blue (#2563EB) is used on ≤10% of any given screen. Its rarity directs the visitor's focus and ensures actions stand out instantly.

## 3. Typography

**Display Font:** Inter (sans-serif)
**Creative/Interactive Display Font:** Compressa VF (Variable width display font)
**Body Font:** Inter (sans-serif)
**Label/Mono Font:** Geist Mono (monospace)

**Character:** A singular, clean sans-serif typeface hierarchy built on strong contrast, tracking adjustments, and responsive line height.

### Hierarchy
- **Display** (Bold 700, clamp(2rem, 5vw, 4rem), 1.1): Used for main page headers and section titles.
- **Headline** (Semi-Bold 600, 1.75rem, 1.2): Used for subheadings and card titles.
- **Title** (Medium 500, 1.25rem, 1.3): Used for smaller headers, card details, or blog headers.
- **Body** (Regular 400, 1rem, 1.5): Standard copy. Restricted to 65–75ch for optimal reading comfort.
- **Label** (Medium 500, 0.875rem, 0.05em, uppercase): Monospace labels, badges, technical details, or tag components.
- **Label Small** (Medium 500, 0.625rem to 0.75rem (10px to 12px), 1.2): Monospace/sans metadata, time trackers, status tags, and version strings.

### Named Rules
**The Single Font Family Rule.** Keep both headers and body within the Inter family, using contrast of weight, size, and spacing to define the hierarchy instead of introducing a second sans-serif.

## 4. Elevation

The system is flat by default, relying on solid borders and background colors rather than gradients and blurs to define hierarchy.

### Shadow Vocabulary
- **Subtle Lift** (`0 4px 6px rgba(0,0,0,0.1)`): Used sparingly on hover interactions for buttons and cards.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are completely flat at rest. Subtle shadows appear only as a response to interactive hover states.

## 5. Components

### Buttons
- **Shape:** Soft-gently curved (6px radius)
- **Primary:** Background color (#2563EB), text color (#FFFFFF), padding (12px 24px).
- **Hover / Focus:** Opacity drops to 0.9, background shifts to #1D4ED8 on hover. Outline ring focus on focus-visible.

### Cards / Containers
- **Corner Style:** Rounded (16px radius)
- **Background:** Background White (#FAFAFA)
- **Shadow Strategy:** Flat by default, shifts to Subtle Lift on hover.
- **Border:** 1px solid border (#E2E8F0)
- **Internal Padding:** Large (24px)

### Inputs / Fields
- **Style:** Background white, 1px solid steel stroke (#E2E8F0), 8px radius.
- **Focus:** Border shifts to #18181B with a subtle outline glow.

### Navigation
- **Style:** Sticky header with transparent glass backing blur. Minimal text links with active blue underline indicators.

## 6. Do's and Don'ts

### Do:
- **Do** maintain a strict contrast ratio of at least 4.5:1 for all text.
- **Do** respect the `prefers-reduced-motion` media queries when implementing GSAP and Framer Motion entries.
- **Do** preserve the monochrome layout rhythm, highlighting only actionable items with the electric blue accent.

### Don't:
- **Don't** use border-left greater than 1px as a colored stripe on cards.
- **Don't** use text gradients or decorative text clipping.
- **Don't** use emojis as icons; rely purely on clean SVGs.
- **Don't** animate image scale or position on card hover.
