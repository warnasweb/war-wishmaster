# Happy Birthday Wishes 🎉

A custom **Next.js birthday greeting web app** with a fun reveal interaction:

- On initial load, users see a lamp-themed intro screen.
- A **slide control** (instead of a click switch) is used to "turn on" the lamp.
- Once slid to the end, the full birthday content appears with banner images, wishes, and animated styling.

## Features

- Lamp reveal screen on first load
- Slider-based unlock interaction
- Birthday hero section with images
- Animated confetti-style background and glowing lamp effect
- Responsive layout for mobile and desktop

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- React + TypeScript
- CSS Modules

## Run Locally

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Then open the local URL shown in terminal (usually `http://localhost:3000`).

## Project Structure

- `src/app/page.tsx` – main page UI and lamp slider logic
- `src/app/page.module.css` – component styling and animations
- `src/app/layout.tsx` – app metadata and layout
- `public/` – birthday images and banner assets

## Notes

- If `npm run dev` says port 3000 is already in use, Next.js will automatically use another port (for example 3001).
- If a `.next/dev/lock` error appears, stop any other running `next dev` process and retry.
