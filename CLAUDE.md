# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server on port 3000 (auto-opens browser)
npm run build      # TypeScript check + Vite production build → dist/
npm run preview    # Preview production build locally
npm run lint       # ESLint on all .ts/.tsx files (max-warnings 0, strict)
```

No test framework is configured.

## Architecture

This is a **React 18 + TypeScript + Vite** dental clinic marketing website deployed on Netlify as an SPA.

### Routing (React Router DOM v7)

| Route | Page File |
|-------|-----------|
| `/` | `src/pages/App.tsx` — home page |
| `/endodoncia` | `src/pages/Endodoncia.tsx` |
| `/odontologia-integral` | `src/pages/OdontologiaIntegral.tsx` |
| `/ortodoncia` | `src/pages/ortodoncia.tsx` |
| `/periodoncia` | `src/pages/Periodoncia.tsx` |
| `/restauradora-avanzada` | `src/pages/Restauradora_avanzada.tsx` |

Router is configured in `src/main.tsx`. Netlify is configured to redirect all routes to `index.html` for SPA support.

### Design System (`src/design-system/`)

Centralized UI library consumed by all pages and components:

- `config/theme.ts` — single source of truth for colors, typography, spacing, shadows. Primary brand color: `#A5C83E`.
- `components/` — reusable primitives: `Button`, `Card`, `DoctorCard`, `ServiceCard`, `StatsCard`, `Input`, `Logo`, `Icons`
- `styles/custom.css` — custom CSS utilities, keyframe animations (float, pulse-dental, slideIn variants)
- `index.ts` — barrel export for the design system

Tailwind is configured in `tailwind.config.js` to extend the theme with the design system's tokens. Both `src/` and the design system paths are in Tailwind's content config.

### Shared Components (`src/components/`)

Domain-specific reusable components: `Layout.tsx` (main nav wrapper), `ContactForm.tsx`, `ImageSlider.tsx`, `TestimonialSlider.tsx`, `LazyImage.tsx`, `MemoizedSection.tsx`.

### Assets

Static images live in `imagenes/` (not `public/`). WebP format is used extensively. Image errors fall back to inline SVG icons.

### Key Libraries

- **Framer Motion** — scroll-driven animations (`useScroll`, `useTransform`, `whileInView`)
- **Tailwind CSS** — utility styling; custom tokens extend the default theme
- **React Router DOM** — client-side routing
