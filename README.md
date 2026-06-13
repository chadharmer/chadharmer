# chadharmer.com

A modern product-builder website — premium, dark-mode, SaaS aesthetic.
Not a resume. Not a portfolio template. Evidence of how Chad thinks and builds.

## Stack

- **Next.js 16** (App Router, React 19, Turbopack)
- **Tailwind CSS v4** (CSS-first config via `@theme`)
- **Motion** (`motion/react`) for subtle scroll/entrance animation
- **Geist** Sans + Mono typography
- Fully static — prerendered, zero client data fetching

## Structure

```
src/
  app/
    layout.tsx          Fonts, metadata, viewport
    page.tsx            Composes the homepage sections
    globals.css         Design tokens + utilities (grid, noise, gradients)
  components/
    layout/             Nav (scroll-aware, mobile menu), Footer
    sections/           Hero, FeaturedProducts, HowIBuild,
                        Experience, Writing, Contact
    ui/                 Container, Reveal, SectionHeading (shared primitives)
  lib/
    content.ts          Single source of truth for all copy/data
    cn.ts               className joiner
```

Content lives entirely in `src/lib/content.ts` — edit copy there without
touching layout or styling.

## Develop

```bash
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
npm run lint
```

## Deploy

Optimized for Vercel — push to a connected repo, or `vercel deploy`.
