# Safe IQ — Web

The official landing page for [Safe IQ](https://instagram.com/safeiq.app),
a community safety intelligence app for Android.

Built by **[Chiranjit Chakma](https://github.com/chiranjitchakma)** in Mysuru, India.

![License: MIT](https://img.shields.io/badge/license-MIT-10B981)
![No build step](https://img.shields.io/badge/build-none-3B82F6)
![Vanilla](https://img.shields.io/badge/framework-vanilla-F5B843)

---

## About the site

A zero-dependency landing page for the Safe IQ Android app. Designed to
feel professional and simple — restrained typography, clear hierarchy,
generous whitespace, restrained color use.

Inspired by [Linear](https://linear.app), [Vercel](https://vercel.com),
and [Stripe](https://stripe.com) in visual grammar.

## Files

```
.
├── index.html         Landing page
├── styles.css         All styling — tokens, layouts, responsive breakpoints
├── script.js          Mobile nav, sticky header shadow, scroll reveal
├── README.md          This file
└── safe iq icon.jpg   The Safe IQ app icon (referenced by index.html)
```

The site is a single-page landing built with HTML5, CSS3, and vanilla JS.
No bundler, no dependencies, no build step.

## Design system

Colors, typography, spacing, and motion are defined as CSS custom
properties at the top of `styles.css`. Change them there and the whole
site re-themes:

```css
--emerald: #10B981;        /* Primary accent */
--bg: #0A0A0F;             /* Background */
--surface: #16161F;        /* Cards */
--text: #F5F5F7;           /* Body */
--font-sans: 'Inter', ...  /* Typography */
```

## Responsive breakpoints

Fully tested against these viewport widths:

| Width | Device class |
|---|---|
| 360px | Very small phones (iPhone SE) |
| 480px | Standard phones |
| 640px | Large phones / small tablets |
| 768px | Tablets (portrait) |
| 1024px | Tablets (landscape) / small laptops |
| 1440px+ | Standard laptops / desktops |

Typography scales fluidly via `clamp()` across the whole range — no jarring
step changes.

## Accessibility

- Semantic HTML5 (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- ARIA labels on interactive elements
- `prefers-reduced-motion` respect
- Keyboard-navigable (Tab order, Escape closes menu, `:focus-visible` outlines)
- Color contrast meets WCAG AA

## SEO

- Open Graph tags for Facebook / LinkedIn previews
- Twitter Card metadata for X / Twitter previews
- Meaningful `<meta name="description">`
- Semantic heading hierarchy (h1 → h2 → h3)
- Favicon uses the actual app icon

## Deploy to GitHub Pages

This repo (`safeiq-app/safeiq.app`) can be published as-is:

1. Go to **Settings** → **Pages** in the left sidebar
2. Under "Source", select **Deploy from a branch**
3. Under "Branch", pick **main** and **/(root)**
4. Click **Save**
5. Wait ~1 minute. GitHub gives you a live URL:
   `https://safeiq-app.github.io/safeiq.app/`
6. Add this URL to your Instagram bio under **@safeiq.app**

### Optional — custom domain

If you own `safeiq.app` as a domain (not just as an Instagram handle):

1. In **Settings** → **Pages** → **Custom domain** → enter `safeiq.app`
2. At your DNS registrar, add these records:
   ```
   A       @    185.199.108.153
   A       @    185.199.109.153
   A       @    185.199.110.153
   A       @    185.199.111.153
   CNAME   www  safeiq-app.github.io
   ```
3. Wait for DNS to propagate (1–24 hours)
4. Enable **Enforce HTTPS** in Pages settings

## Local preview

```bash
# Simplest — just open the file
open index.html

# Or serve locally for live-reload experience
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Meet the maker

I'm **Chiranjit Chakma**, a self-taught Android developer based in Mysuru,
Karnataka, India. Safe IQ is one of several apps I've shipped end-to-end —
from architecture through Firestore security rules through app-icon
design.

Alongside Safe IQ I've built:

- **NetSafe / NetSafe Link** — parental control platform with VPN-based
  per-app blocking, Firestore state sync, biometric app lock.
- **WakeMe** — offline-first alarm + planner + notes + focus app,
  229+ Kotlin files, AI assistant, AES-256-GCM encrypted backups.
- **NetSafe X** — standalone cybersecurity toolkit (Password Analyzer,
  Hash Toolbox, HMAC-SHA256 chained audit log).

Currently applying to **MSc Cybersecurity** programs at **Saarland
University**, **RWTH Aachen**, and **TU Munich** for the 2026 intake. If
you're a professor, researcher, or fellow builder — please reach out.

- **Instagram:** [@safeiq.app](https://instagram.com/safeiq.app)
- **GitHub:** [github.com/chiranjitchakma](https://github.com/chiranjitchakma)
- **Email:** chiranjitc.official@gmail.com

## License

MIT for site source. The Safe IQ Android app, brand assets, and Firebase
project are proprietary.
