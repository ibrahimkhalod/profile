# Ibrahim Khalid portfolio

Bilingual English/Arabic portfolio built with React and Vite.

## Run

```sh
npm ci
npm run dev
```

## Validate and build

```sh
npm run lint
npm run build
```

The production output is `dist/`. Vercel is already configured for Vite.

## Content

- `src/content.js`: English and Arabic copy, project descriptions, career history.
- `src/App.jsx`: navigation, language switching, filters and contact interactions.
- `src/index.css`: responsive design, RTL support and reduced-motion styles.
- `public/cv.pdf`: current downloadable CV.

Career dates were checked against the current CV and supplied work history. Project visuals are illustrations, not screenshots of client systems. No unverified performance metrics are presented in the live page.

Browser verification passed: both project filters, Arabic RTL, mobile navigation, language persistence, valid CV download, no horizontal overflow at 390 px, and no page JavaScript errors. Desktop and mobile layouts were visually reviewed.
