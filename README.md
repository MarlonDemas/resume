# marlondemas-site

Personal portfolio and recruiter-facing CV website for Marlon Demas, a senior
full-stack engineer based in Cape Town.

The site is built with Astro and deployed on Netlify. It presents selected work,
experience, stack, testimonials, contact links, and a downloadable PDF CV.

## Tech stack

- Astro 6
- Tailwind CSS 4
- TypeScript/JavaScript
- pnpm
- Node.js >= 22.12.0

## Project structure

```text
/
├── public/                 Static assets served from the site root
├── src/
│   ├── content/index.ts     Shared portfolio and CV content
│   ├── layouts/Base.astro   Shared HTML shell, fonts, CSS, and small scripts
│   └── pages/
│       ├── index.astro      Portfolio homepage
│       └── cv.astro         Recruiter-focused CV page
├── astro.config.mjs
├── netlify.toml
└── package.json
```

## Getting started

Install dependencies:

```sh
pnpm install
```

Start the local development server:

```sh
pnpm dev
```

Build the production site:

```sh
pnpm build
```

Preview the production build locally:

```sh
pnpm preview
```

## Editing content

Most portfolio and CV copy lives in `src/content/index.ts`. Update this file for:

- Profile details and contact links
- Tech stack
- Work/project capsules
- Experience history
- Testimonials

Static files live in `public/`. This includes the portrait, favicon, project
visuals, and `Marlon Demas CV.pdf`. Files in `public/` are served from the site
root, so the PDF is available at `/Marlon Demas CV.pdf`.

## Routes

- `/` - portfolio homepage for founders and general visitors
- `/cv` - recruiter-focused CV page
- `/portfolio` - redirects to `/` via Netlify

## Deployment

Netlify is configured in `netlify.toml`:

- Build command: `pnpm build`
- Publish directory: `dist`
- Redirect: `/portfolio` to `/`
- Basic security headers for all routes
