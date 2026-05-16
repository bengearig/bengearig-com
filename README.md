# bengearig.com

Personal single-page site for [bengearig.com](https://bengearig.com).

## Stack

- Vue 3 (composition API) + TypeScript
- Vite
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Yarn (classic)
- GitHub Pages deploy

## Design

- 60/30/10 palette: `#F4DBD8` cream (60%), `#412A16` walnut (30%), `#487689` sky (10%)
- Fonts: Finlandica Headline (titles), Quicksand (body) — both from Google Fonts
- Auto dark mode from `prefers-color-scheme`
- Respects `prefers-reduced-motion` (no fade-ins, no smooth scroll)

## Scripts

```sh
yarn install     # install deps
yarn dev         # vite dev server at http://localhost:5173
yarn typecheck   # vue-tsc, no emit
yarn lint        # eslint, zero warnings
yarn format      # prettier --write
yarn build       # type-check + production build to dist/
yarn preview     # serve dist/
```

## Content

All copy is placeholder. Search the codebase for `[YOUR NAME]`, `[BIO`, `[PROJECT`, `[ROLE`,
`[TAGLINE`, `[USERNAME]`, `[Tag]`, `[COMPANY]`, `[YYYY]` and replace.

Sections live in `src/components/sections/`:

- `HeroSection.vue` — name, tagline, CTA buttons
- `AboutSection.vue` — bio (+ optional avatar)
- `ProjectsSection.vue` — project cards (data array at top of script)
- `ExperienceSection.vue` — timeline (data array at top of script)
- `ContactSection.vue` — email + social links

## Deploy (GitHub Pages, custom domain)

`public/CNAME` is set to `bengearig.com`. The workflow at `.github/workflows/deploy.yml`
runs on every push to `main`, builds, and deploys to GitHub Pages.

One-time setup:

1. In repo Settings → Pages, set **Source** to **GitHub Actions**.
2. In your DNS provider, point `bengearig.com` to GitHub Pages:
   - Apex `A` records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - (Optional) `www` `CNAME` → `<username>.github.io`
3. After DNS propagates, enable **Enforce HTTPS** in Settings → Pages.

## Notes

- If the Google Fonts URL for `Finlandica Headline` does not resolve, swap it for plain
  `Finlandica` in `index.html`. The `@theme` `--font-display` already falls back to it.
- Replace `public/favicon.svg` and add a real `public/og-image.png` (1200×630).
