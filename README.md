# ibrahimkaya.github.io

Personal site of Ibrahim Kaya — backend engineer (Java, Kafka, event-driven systems).
Live at **https://ibrahimkaya.github.io**.

Built with [Astro](https://astro.build) and Tailwind CSS. Static output, no client-side JavaScript.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321 — drafts are visible here
npm run build     # production build into dist/ — drafts are excluded
npm run preview   # serve the production build locally
```

## Where things live

| Path | What |
|---|---|
| `src/data/profile.ts` | All numbers, themes, experience — edit here to update charts |
| `src/content/work/*.md` | Case studies (`draft: true` = dev only) |
| `src/pages/` | Home, Impact, Work, CV |
| `src/components/charts/` | Build-time SVG/HTML charts |
| `.github/workflows/deploy.yml` | Deploys to GitHub Pages on every push to `master` |
