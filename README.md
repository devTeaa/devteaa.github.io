# Herman's Portfolio

A personal portfolio website built with **Svelte**, **TypeScript**, and **Vite**, generated from the contents of `Herman-2026-ATS.pdf`.

## Project structure

```
.
├── Herman-2026-ATS.pdf      # Source CV
├── site/                      # Svelte portfolio website
│   ├── src/
│   │   ├── lib/
│   │   │   ├── data.ts              # CV data model
│   │   │   └── components/          # Svelte components
│   │   ├── App.svelte
│   │   ├── app.css
│   │   └── main.ts
│   ├── public/Herman-2026-ATS.pdf   # Downloadable CV
│   └── dist/                        # Production build
└── .gitignore
```

## Getting started

```bash
cd site
npm install
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
```

## Deployment

The `site/dist` folder contains the static production build. You can deploy it to any static host (GitHub Pages, Vercel, Netlify, Cloudflare Pages, etc.).
