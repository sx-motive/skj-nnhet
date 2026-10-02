Skjønnhet is a demo storefront for a Nordic skincare brand, with an emphasis on animation and design. It started as a single landing page and is now a small shop with mock data: catalog, product pages, a bag, checkout and a journal.

<img src="docs/welcome.gif" alt="Skjønnhet by Denis Kunitsyn" border="0" />

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/), built with [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) for pages
- [Lenis](https://github.com/darkroomengineering/lenis) for smooth scrolling
- SCSS modules for styles

Animations are written from scratch: split-text reveals (a React port of my [AnimaView](https://github.com/sx-motive/anima-view) package), parallax, scroll-driven transforms, the image that follows the cursor and the skewed menu.

<img src="docs/animations.gif" alt="Skjønnhet by Denis Kunitsyn" border="0" />

## Pages

| Route | What's there |
| --- | --- |
| `/` | Landing page with bestsellers, values and journal teaser |
| `/shop` | Catalog with category filter and sorting (`?category=face&sort=price-asc`) |
| `/shop/:slug` | Product page with quantity, details accordion and related products |
| `/checkout` | Mock checkout with shipping options and order confirmation |
| `/journal`, `/journal/:slug` | Articles with linked products |
| `/about` | Brand story |

The bag lives in `localStorage`. Product and article data is in `src/data`. Nothing is sent anywhere, the checkout only shows a confirmation.

## Getting started

```
git clone https://github.com/sx-motive/skj-nnhet.git
cd skj-nnhet
npm install
npm run dev
```

`npm run build` type-checks and builds to `dist/`. Every push to `master` is built by GitHub Actions and synced to a VPS behind nginx (`.github/workflows/deploy.yml`). `netlify.toml` keeps the Netlify mirror working too.

## Last words

If you like the project, please rate it, big thanks! ❤️

[AnimaView](https://github.com/sx-motive/anima-view) | [Website](https://aesthetic-hotteok-6e4cf2.netlify.app/)
