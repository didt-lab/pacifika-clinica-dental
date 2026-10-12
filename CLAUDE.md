# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Vite dev server on port 3000 (auto-opens browser)
npm run build      # tsc type-check + vite build → dist/
npm run preview    # Serve the production build locally
npm run lint       # ESLint (--max-warnings 0)
```

- No test framework. `npm run build` is the real correctness check (tsconfig is `strict` with `noUnusedLocals`/`noUnusedParameters`, so unused imports break the build).
- `npm run lint` has no ESLint config file in the repo, so it fails until one is added.

## Architecture

React 18 + TypeScript + Vite marketing site for Pacifika Clínica Dental (Mazatlán). All UI copy is Spanish.

### Routing

Routes are declared in `src/main.tsx` (React Router v7, `BrowserRouter`). Each route maps to one page in `src/pages/` (`/` → `App.tsx`, plus one page per specialty: endodoncia, odontologia-integral, ortodoncia, periodoncia, restauradora-avanzada). Note the inconsistent filenames (`ortodoncia.tsx`, `Restauradora_avanzada.tsx`) — keep imports in sync if renaming.

Each specialty page is a large self-contained file with the same structure: wraps content in `components/Layout.tsx` (nav + footer), its own Framer Motion scroll effects, a service grid, and `ContactInfo` + `ContactForm` at the bottom. Changes to shared sections usually need repeating across all specialty pages.

### Contact form

`src/components/ContactForm.tsx` posts to two external services in parallel, with no backend:
- **FormSubmit** (`formsubmit.co/ajax/...`) — awaited; drives success/error UI.
- **Zapier webhook** — fire-and-forget (`no-cors`, errors swallowed).

### Design system

`src/design-system/` (theme tokens in `config/theme.ts`, primitives like `Button`/`Card`/`Input`, animations in `styles/custom.css`) exists and feeds `tailwind.config.js`, but **pages and components do not import its React components** — they use Tailwind classes and inline styles directly (brand green `#A5C83E`). Its README references an `@/design-system` alias that is not configured in `vite.config.ts`/`tsconfig.json`; use relative imports.

### Assets

Images live in `imagenes/` at repo root (not `public/`) and are imported as ES modules from pages (`import x from '../../imagenes/...webp'`), so Vite hashes them into `dist/assets/`. Type declarations are in `src/types/images.d.ts`. Prefer WebP.

## Deployment

Two targets, both serving `dist/` as an SPA:
- **Netlify** — `netlify.toml` (Node 18, `/* → /index.html` redirect).
- **Apache/FTP hosting** — `public/.htaccess` rewrites unknown paths to `index.html`.

`dist/` is in `.gitignore` but some of its files are still tracked by git, so builds show up as diffs.

## Non-source folders

- `respaldo_FTP/` — backup of the previous static/PHP site from the FTP server. Reference only.
- `Respaldo/` — dated local backups. Reference only.
- `.docx` wireframe at root — original multipage wireframe spec.
