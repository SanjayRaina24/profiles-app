# Profiles App (Lab 1)

## Dev Container

- Node.js dev container 
- `corepack enable` to use npm/yarn/pnpm reliably

## Getting Started
\ ```bash
npm install
npm run dev
# open the shown URL (e.g., http://localhost:5173)
\ ```

## Build

\ ```bash
npm run build
\ ```

## Deploy (GitHub Pages via Actions)
- Ensure `base: '/profiles-app/'` in `vite.config.js`
- Push to `main`; the CI workflow will build and deploy automatically.
- Settings → Pages → Source: **GitHub Actions**

**Live URL:** https://sanjayraina24.github.io/profiles-app/

## Notes
- Uses React + React-Bootstrap.
- We use components, props, and `.map()`.