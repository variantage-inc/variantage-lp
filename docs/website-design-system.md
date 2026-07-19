# Website Design System
Version: 1.0

## Purpose
Single source of truth for all Variantage websites and landing pages.

## Stack
- Next.js (App Router)
- React
- Tailwind CSS
- TypeScript
- GitHub
- Netlify

## Core Rules
1. Desktop-first.
2. Match Figma exactly.
3. No animations during initial build.
4. Build one section at a time.
5. Reusable components only.
6. Semantic HTML.
7. Accessibility first.
8. SEO-friendly.
9. Optimize images.
10. Never redesign without approval.

## Folder Structure
app/
assets/
components/
docs/
lib/
public/

## Assets
Store all images, icons and fonts directly inside /assets.
If an asset is missing, use a placeholder and add:
**TODO: MISSING ASSET**

## Layout

- Container XL: 1440px (Hero, Portfolio, Wide Sections)
- Container LG: 1320px (Standard Content Sections)
- Container MD: 800px (Long-form Text & FAQs)
- Consistent spacing throughout all sections
- Desktop is the source of truth
- Responsive layouts are developed only after desktop approval

## Grid System

- Design on a 12-column grid.
- Use generous whitespace over dense layouts.
- Never stretch text containers to the full container width.
- Keep text readable by limiting paragraph width to approximately 700–800px.

## Colors
Use approved Variantage brand colors only.

## Components
Header
Hero
Coverage
Services
Portfolio
Industries
Problem
Testimonials
Lead Form
Footer

## SEO
- One H1
- Semantic headings
- Optimized images
- Metadata
- Clean URLs

## Performance
- Next Image
- Lazy loading
- Core Web Vitals optimization

## AI Rules
- Never invent layouts.
- Never change branding.
- Match supplied design.
- Keep code production-ready.
- Prefer reusable components.

## Workflow
Foundation → Section → Review → Fix → Commit → Next Section
