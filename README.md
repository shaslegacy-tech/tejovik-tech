# TejoVik Website (Next.js 15 + Tailwind + TypeScript + Lottie)

A modern, animated company site for **TejoVik** with sections: About, Services, Why Choose Us, Contact.
Animations are implemented using **Lottie** only (via `lottie-react`).

## Quick Start

```bash
npm install
npm run dev
# open http://localhost:3000
```

> Replace Lottie placeholders in `lib/lotties.ts` with your own JSON files.
> You can drop JSON files in `/public/lotties` and reference them like `/lotties/hero.json`.

## Features
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS (dark mode supported with `next-themes`)
- Page loader using Lottie
- Responsive navbar with mobile drawer
- Dedicated pages: `/about`, `/services`, `/why-choose-us`, `/contact`
- API route placeholder at `/api/contact`

## Where to change content
- **Brand**: `public/logo.svg`
- **Animations**: `lib/lotties.ts` (files in `public/lotties/*`)
- **Sections**: `sections/*`
- **Navigation**: `components/Navbar.tsx`

## Deploy
- Build: `npm run build`
- Start: `npm start`
- Deploy to Vercel: import this repo and set framework to Next.js
