# Style And Conventions

- Keep changes minimal and aligned with existing Astro markup and CSS.
- Use shared content data from `src/content/index.ts` where possible instead of duplicating page text.
- The current UI uses restrained portfolio styling: dark background, amber accents, thin borders, compact cards, and CSS variables in `public/tokens.css`.
- Static images should be placed in `public/` and referenced with root-relative URLs such as `/asset-name.png`.
- Prefer direct Astro/CSS edits over introducing new components or dependencies for small changes.
