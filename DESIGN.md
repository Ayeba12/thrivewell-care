---
version: alpha
name: People Work™
description: Design system extracted from https://people-work-webflow-108-template.webflow.io/home-c
colors:
  text-primary: "#1c2623"
  text-secondary: "#eceae1"
  text-tertiary: "#ffffff"
  text-inverse: "#f6f4f1"
  surface-base: "#000000"
  surface-raised: "#f3f5ee"
  surface-strong: "#dedcd6"
typography:
  xs:
    fontFamily: BDO Grotesk
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
  sm:
    fontFamily: BDO Grotesk
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  md:
    fontFamily: BDO Grotesk
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  lg:
    fontFamily: BDO Grotesk
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.5
  xl:
    fontFamily: BDO Grotesk
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.5
  2xl:
    fontFamily: BDO Grotesk
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.5
  3xl:
    fontFamily: BDO Grotesk
    fontSize: 68px
    fontWeight: 400
    lineHeight: 1.5
rounded:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
spacing:
  1: 1px
  2: 4px
  3: 5px
  4: 6px
  5: 8px
  6: 9px
  7: 12px
  8: 16px
  9: 20px
  10: 24px
  11: 32px
  12: 60px
  13: 120px
  14: 160px
  15: 200px
components:
  button-primary:
    backgroundColor: "{colors.text-primary}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: 12px
---

# People Work™

## Mission
Create implementation-ready, token-driven UI guidance for People Work™ that is optimized for consistency, accessibility, and fast delivery across content site.

## Brand
- Product/brand: People Work™
- URL: https://people-work-webflow-108-template.webflow.io/home-c
- Audience: readers and knowledge seekers
- Product surface: content site

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=BDO Grotesk`, `font.family.stack=BDO Grotesk, Arial, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=24px`
- Typography scale: `font.size.xs=12px`, `font.size.sm=14px`, `font.size.md=16px`, `font.size.lg=28px`, `font.size.xl=40px`, `font.size.2xl=56px`, `font.size.3xl=68px`
- Color palette: `color.text.primary=#1c2623`, `color.text.secondary=#eceae1`, `color.text.tertiary=#ffffff`, `color.text.inverse=#f6f4f1`, `color.surface.base=#000000`, `color.surface.raised=#f3f5ee`, `color.surface.strong=#dedcd6`
- Spacing scale: `space.1=1px`, `space.2=4px`, `space.3=5px`, `space.4=6px`, `space.5=8px`, `space.6=9px`, `space.7=12px`, `space.8=16px`
- Radius/shadow/motion tokens: `radius.xs=8px`, `radius.sm=12px`, `radius.md=16px`, `radius.lg=20px`, `radius.xl=24px` | `shadow.1=rgb(0, 0, 0) 0px -1px 0px 0px inset, rgba(246, 244, 242, 0.16) 0px 1px 0px 0px inset`, `shadow.2=rgba(0, 0, 0, 0.09) 0px 4px 9px 0px` | `motion.duration.instant=200ms`, `motion.duration.fast=500ms`

## Overview

A clean, functional, implementation-oriented interface designed for People Work™.

**Target Audience:** readers and knowledge seekers

**Product Surface:** content site

This design system prioritizes accessibility, consistency, and implementation efficiency. All components follow WCAG 2.2 AA standards with keyboard-first interactions and clear focus indicators.

## Colors

The color palette is organized into semantic categories for consistent application across the interface.

**Text Colors:**
- **text.primary** (`#1c2623`): Primary text and headlines
- **text.secondary** (`#eceae1`): Secondary text and captions
- **text.tertiary** (`#ffffff`): Tertiary text and metadata
- **text.inverse** (`#f6f4f1`): Semantic color token

**Surface Colors:**
- **surface.base** (`#000000`): Base background surface
- **surface.raised** (`#f3f5ee`): Elevated surface elements
- **surface.strong** (`#dedcd6`): Semantic color token

## Typography

**Primary Font:** BDO Grotesk

The typography scale provides a consistent hierarchy for all text elements.

- **xs** (`12px`): Weight 400, Line height 1.5
- **sm** (`14px`): Weight 400, Line height 1.5
- **md** (`16px`): Weight 400, Line height 1.5
- **lg** (`28px`): Weight 400, Line height 1.5
- **xl** (`40px`): Weight 400, Line height 1.5
- **2xl** (`56px`): Weight 400, Line height 1.5
- **3xl** (`68px`): Weight 400, Line height 1.5


## Layout

The layout system uses a consistent spacing scale for margins, padding, and gaps.

**Spacing Scale:**
- **1:** 1px
- **2:** 4px
- **3:** 5px
- **4:** 6px
- **5:** 8px
- **6:** 9px
- **7:** 12px
- **8:** 16px
- **9:** 20px
- **10:** 24px
- **11:** 32px
- **12:** 60px
- **13:** 120px
- **14:** 160px
- **15:** 200px

**Grid System:** Use a responsive grid with consistent gutters and margins. Mobile layouts should stack vertically with appropriate spacing.

## Elevation & Depth

Depth is conveyed through a layered shadow system:

- **Level 1:** `rgb(0, 0, 0) 0px -1px 0px 0px inset, rgba(246, 244, 242, 0.16) 0px 1px 0px 0px inset` - Subtle elevation for cards and containers
- **Level 2:** `rgba(0, 0, 0, 0.09) 0px 4px 9px 0px` - Medium elevation for dropdowns and popovers


## Shapes

All interactive elements use consistent corner radii:

- **xs:** 8px - Corner radius token
- **sm:** 12px - Subtle rounding for small elements
- **md:** 16px - Standard rounding for buttons and inputs
- **lg:** 20px - Larger rounding for cards
- **xl:** 24px - Extra large rounding


## Components

**Detected Components:** buttons (125), links (87), cards (48), inputs (10), navigation (4)

### Component Guidelines

**Buttons:**
- Use primary style for main actions
- Secondary style for alternative actions
- Maintain minimum 44×44px touch target
- Include default, hover, focus-visible, active, disabled, loading, and error states

**Inputs:**
- Clear focus indicators required
- Label positioning must be consistent
- Error states with descriptive messages
- Support for keyboard navigation

**Cards:**
- Consistent padding and spacing
- Optional elevation for hierarchy
- Responsive behavior for different viewports

All components must define:
- Default, hover, focus-visible, active, disabled, loading, and error states
- Keyboard interaction patterns
- Touch target sizes (minimum 44×44px)
- Responsive behavior
- Accessibility requirements

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required
- Focus-visible rules required
- Contrast constraints required (4.5:1 for normal text, 3:1 for large text)
- Touch targets minimum 44×44px
- Screen reader compatibility with proper ARIA labels

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error
- Component behavior should specify responsive and edge-case handling
- Interactive components must document keyboard, pointer, and touch behavior
- Accessibility acceptance criteria must be testable in implementation
- Maintain WCAG AA contrast ratios
- Provide clear focus indicators for all interactive elements

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators
- Do not introduce one-off spacing or typography exceptions
- Do not use ambiguous labels or non-descriptive actions
- Do not ship component guidance without explicit state rules
- Do not mix different corner radius values in the same component
- Do not create touch targets smaller than 44×44px
- Do not use color alone to convey information

## Guideline Authoring Workflow
1. Restate design intent in one sentence
2. Define foundations and semantic tokens
3. Define component anatomy, variants, interactions, and state behavior
4. Add accessibility acceptance criteria with pass/fail checks
5. Add anti-patterns, migration notes, and edge-case handling
6. End with a QA checklist

## Required Output Structure
- Context and goals
- Design tokens and foundations (YAML front matter + descriptions)
- Component-level rules (anatomy, variants, states, responsive behavior)
- Accessibility requirements and testable acceptance criteria
- Content and tone standards with examples
- Anti-patterns and prohibited implementations
- QA checklist

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior
- Include spacing and typography token requirements
- Include long-content, overflow, and empty-state handling
- Include known page component density: buttons (125), links (87), cards (48), inputs (10), navigation (4)

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must"
- Every recommendation should use "should"
- Every accessibility rule must be testable in implementation
- Teams should prefer system consistency over local visual exceptions

---

**Extraction Metadata:**
- Source: https://people-work-webflow-108-template.webflow.io/home-c
- Extracted: 2026-05-27T17:43:52.357Z
- Elements sampled: 156 of 1445
