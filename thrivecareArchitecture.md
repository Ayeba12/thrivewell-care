# System Architecture: Decoupled Headless WordPress & Next.js
## Target Output: Premium, High-Performance, Cinematic Web Application ($30k+ Tier)

---

## 1. Overview & Core Philosophy
This document serves as the absolute architectural source of truth for this project. The system is fundamentally decoupled: WordPress acts strictly as a headless data repository and administrative dashboard, while Next.js handles all UI/UX, heavy animations, and front-end rendering.

**AI Agent Instructions (Antigravity):**
* Read this document thoroughly before generating any code.
* Assume a highly sophisticated, agency-level standard for all generated code.
* Strictly adhere to the separation of concerns: no direct database queries from the frontend; all data must flow through GraphQL.
* Default to Static Site Generation (SSG) or Incremental Static Regeneration (ISR) for performance.
* All animations must be performant, utilizing GPU hardware acceleration where possible.

---

## 2. The Technology Stack

### Backend (The Data Layer)
* **Environment:** LocalWP / Laragon (Local) -> Hostinger (Production)
* **CMS:** Headless WordPress (Stripped of default themes)
* **Custom Data:** Advanced Custom Fields (ACF) Pro
* **API Protocol:** WPGraphQL + WPGraphQL for ACF
* **Custom Logic:** Isolated inside a bespoke `/wp-content/plugins/core-architecture/` plugin (No theme logic).

### Frontend (The Visual & Interactive Layer)
* **Framework:** Next.js (App Router)
* **Language:** TypeScript (Strict typing mandatory)
* **Styling:** Tailwind CSS (configured with exact agency design tokens)
* **State / UI Animations:** Framer Motion
* **Scroll & Timeline Animations:** GSAP (specifically `ScrollTrigger`)
* **Scroll Orchestration:** `@studio-freight/lenis` (Smooth scrolling)
* **Hosting:** Vercel

---

## 3. Directory Structure (Frontend)
```text
/
├── app/
│   ├── layout.tsx         # Root layout (Lenis Provider injected here)
│   ├── page.tsx           # Homepage
│   └── [slug]/            # Dynamic routing for pages/CPTs
│       └── page.tsx       
├── components/
│   ├── ui/                # Reusable atoms (Buttons, Inputs)
│   ├── sections/          # Page sections (Hero, CaseStudiesGrid)
│   └── animations/        # Reusable GSAP/Framer wrappers
├── lib/
│   ├── api.ts             # Native fetch logic pointing to WPGraphQL
│   ├── queries.ts         # Exported GraphQL string queries
│   └── utils.ts           # Helper functions (cn for tailwind, etc.)
├── types/
│   └── index.d.ts         # Global TypeScript interfaces for WP data
├── tailwind.config.ts     # Bespoke agency design tokens
└── .env.local             # NEXT_PUBLIC_WORDPRESS_API_URL