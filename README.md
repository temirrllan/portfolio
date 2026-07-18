# Portfolio

A minimal, dark, monospace-accented personal portfolio built with **Next.js 15**,
**React 19** and **Tailwind CSS**. Design inspired by the bekarys.me layout:
single centered column, halftone dotted-sphere logo, live language switching
(en / ru / kk), and full responsiveness.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## How to make it yours

**Everything you edit lives in two places:**

1. **`lib/content.ts`** — all text content for the three languages
   (`en`, `ru`, `kk`). Replace the placeholder text in each block:
   hero, about, projects, wins, experience, education, languages, stack,
   media, contact. Keep the same structure across all three languages.

2. **`lib/content.ts` → `SOCIALS`** — your social links used by the hero icons.

Other tweaks:

- **Colors / theme** — `app/globals.css` (`--background`, `--foreground`,
  `--muted`, `--border`, `--accent`).
- **Fonts** — `app/layout.tsx` (Manrope + JetBrains Mono via `next/font`).
- **Logo mark (`tr.`)** — `components/Header.tsx`, and `public/favicon.svg` for
  the browser tab.
- **Generative mark** — `components/Mark.tsx`.
- **Media images** — drop files in `public/` and set the `image` field on a
  media item in `lib/content.ts` (e.g. `image: "/awards.jpg"`). Without an
  image a gradient placeholder is shown.
- **Metadata / SEO title** — `app/layout.tsx` and `lib/content.ts` `meta`.

## Features

- 🌗 Dark theme with a lime accent
- 🌐 Instant client-side language switching (en / ru / kk), remembered in
  `localStorage` and auto-detected from the browser on first visit
- 📱 Fully responsive with a mobile hamburger menu
- ⚡ Sticky blurred header, smooth-scroll anchors, hover animations
- 🅰️ Geist / Geist Mono typography

## Build

```bash
npm run build
npm start
```

## Deploy

Deploys cleanly to **Vercel** (or any Node host). Push to GitHub and import the
repo in Vercel — no configuration needed.
