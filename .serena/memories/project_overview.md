# Project Overview

- Astro personal portfolio/CV site for Marlon Demas.
- Stack: Astro 6, TypeScript/JavaScript modules, Tailwind CSS 4 via @astrojs/tailwind, pnpm, Netlify deploy.
- Main pages: `src/pages/index.astro` and `src/pages/cv.astro`.
- Shared content lives in `src/content/index.ts`; base layout in `src/layouts/Base.astro`.
- The active stylesheet is `public/tokens.css`, linked from `Base.astro` as `/tokens.css`. A similar `src/styles/tokens.css` exists but is not currently imported by the site.
- Static assets belong in `public/` and are referenced by root-relative paths.
