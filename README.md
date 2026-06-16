# Herman's Portfolio

A personal portfolio website built with **SvelteKit**, **TypeScript**, and **Vite**, generated from the contents of `Herman-2026-ATS.pdf`.

## Project structure

```
.
├── Herman-2026-ATS.pdf      # Source CV
├── site/                      # SvelteKit portfolio website
│   ├── src/
│   │   ├── lib/
│   │   │   ├── data.ts              # CV data model
│   │   │   └── components/          # Svelte components
│   │   ├── routes/
│   │   │   ├── +layout.svelte       # Root layout (header/footer/global styles)
│   │   │   ├── +layout.ts           # Prerender configuration
│   │   │   └── +page.svelte         # Home page
│   │   ├── app.css
│   │   └── app.html
│   ├── static/
│   │   └── Herman-2026-ATS.pdf      # Downloadable CV
│   └── build/                       # Static production build
└── .github/workflows/deploy.yml     # GitHub Pages deployment
```

## Getting started

```bash
cd site
npm install
npm run dev       # Start dev server
npm run build     # Build static site
npm run preview   # Preview production build
npm run check     # Type-check Svelte/TypeScript
```

## Deployment

The `site/build` folder contains the static production build. The included GitHub Actions workflow deploys it to GitHub Pages automatically on pushes to `master`.
