# Safe IQ — Landing Page

The official web home for [Safe IQ](https://instagram.com/safeiq.app), a
community-powered safety intelligence app for Android.

Built by **[Chiranjit Chakma](https://github.com/chiranjitchakma)** in Mysuru,
India.

![License](https://img.shields.io/badge/license-MIT-emerald)
![No build step](https://img.shields.io/badge/build-none-blue)
![Frameworks](https://img.shields.io/badge/frameworks-vanilla-orange)

---

## About

Safe IQ is a native Android app that turns neighborhoods into real-time safety
networks. Users can report hazards in 30 seconds, see a live map of what's
happening around them, verify each other's reports, and send SOS alerts when
things go wrong.

**Client:** Kotlin + Jetpack Compose (Material 3, edge-to-edge)
**Backend:** Firebase Spark (free tier — Auth, Firestore, Cloud Messaging)
**Maps:** Google Maps SDK for Android with marker clustering + Places autocomplete
**Media:** ImgBB free image hosting (up to 5 photos per report)
**AI:** Gemini REST API for the in-app safety assistant
**Cost to the community:** ₹0, forever.

The Android app is in active development. This site is the public face —
optimized for social media landing, Instagram bio linking, and Play Store
launch handoff.

---

## Stack (site)

- **Zero build step.** Plain HTML5 + CSS3 + vanilla JS.
- **No frameworks.** No React, no Vue, no Astro, no bundler.
- **No dependencies.** One font family loaded from Google Fonts, otherwise
  everything is inline or in the three source files.
- **Total download.** ~30KB uncompressed HTML/CSS/JS. Loads in under a second
  on 3G.
- **Fully responsive.** Mobile-first, gracefully scales to widescreen.
- **A11y.** Semantic HTML, ARIA labels, `prefers-reduced-motion` respect, keyboard-navigable, WCAG AA color contrast.
- **SEO.** Open Graph, Twitter Card, meta description, semantic headings.

---

## Files

```
.
├── index.html      Main landing page
├── styles.css      All styling (design tokens, animations, responsive)
├── script.js       Minimal JS (mobile nav, scroll reveal, sticky header)
└── README.md       This file
```

That's it. No `dist/`, no `node_modules/`, no `package.json`.

---

## Deploy to GitHub Pages

1. **Create a new repo** on GitHub (e.g. `safeiq-web` or `safeiq.app`).
2. **Upload all four files** to the repo root (drag and drop in the GitHub UI
   works fine, or use `git push`).
3. **Enable GitHub Pages:**
   - Go to the repo → **Settings** → **Pages** (in the left sidebar)
   - Under "Source", select **Deploy from a branch**
   - Under "Branch", pick `main` and `/ (root)`
   - Click **Save**
4. **Wait ~1 minute.** GitHub will build and give you a live URL like
   `https://chiranjitchakma.github.io/safeiq-web/`
5. **Add the URL to your Instagram bio** (`@safeiq.app`).

### Optional — custom domain (if you own `safeiq.app`)

1. In the repo → **Settings** → **Pages** → **Custom domain** → enter `safeiq.app`.
2. In your domain registrar (GoDaddy / Namecheap / Cloudflare), add:
   - `A` record `@ → 185.199.108.153` (and .109, .110, .111)
   - `CNAME` record `www → chiranjitchakma.github.io`
3. Wait for DNS to propagate (~1 hour to 24 hours).
4. Enable **Enforce HTTPS** in the Pages settings.

---

## Local preview

No dev server needed. Just:

```bash
# macOS / Linux
open index.html

# Windows PowerShell
start index.html
```

Or, for a live-reload dev experience:

```bash
# Python 3 (comes with macOS + most Linux)
python3 -m http.server 8080

# Node
npx serve
```

Then visit http://localhost:8080.

---

## Customization

Everything is driven by design tokens in `:root { ... }` at the top of
`styles.css`. To change the color scheme, edit these values — the whole site
re-themes:

```css
--emerald: #10B981;      /* Primary accent */
--emerald-dark: #059669; /* Deeper primary */
--bg: #0A0A0F;           /* Background */
--surface: #1A1A25;      /* Card surface */
```

Content lives in `index.html` in semantic sections. Each section is clearly
labeled with a comment block (e.g. `<!-- FEATURES GRID -->`).

---

## Roadmap (site)

- [ ] Add real app screenshots once Play Store version 1.0 is ready
- [ ] Add "Featured on" bar if picked up by ProductHunt / Indie Hackers / etc.
- [ ] Consider a `/press` page with high-res icons + brand assets
- [ ] Add a `/privacy` and `/terms` route (currently linked but pending drafts)

---

## Meet the maker

I'm **Chiranjit Chakma**, a solo Android developer based in Mysuru,
Karnataka, India. Safe IQ is one of several apps I've shipped end-to-end —
from architecture design through Firestore security rules through app-icon
illustration.

Alongside Safe IQ I've built:

- **NetSafe / NetSafe Link** — a two-app parental control platform with
  VPN-based per-app blocking, Firestore state sync, and biometric app lock.
- **WakeMe** — a premium offline-first alarm + planner + notes + focus app
  with 229+ Kotlin files, dismissal challenges, AI assistant, and
  AES-256-GCM encrypted backups.
- **NetSafe X** — a standalone cybersecurity toolkit (Password Analyzer,
  Hash Toolbox, HMAC-SHA256 chained audit log) built as portfolio for MSc
  Cybersecurity applications.

I'm currently applying to MSc Cybersecurity programs at Saarland University,
RWTH Aachen, and TU Munich for the 2026 intake. If you're a professor,
recruiter, or fellow builder who wants a technical walkthrough of any of
these — please reach out.

- **Instagram (product):** [@safeiq.app](https://instagram.com/safeiq.app)
- **GitHub:** [github.com/chiranjitchakma]([https://github.com/chiranjitchakma](https://github.com/safeiq-app/safeiq.app))
- **Email:** chiranjitc.official@gmail.com

---

## License

MIT for the site source. The Safe IQ app itself, its brand assets, and its
Firebase project are proprietary.
