# Abdul Aziz Kayes: portfolio

Static, bilingual (English / বাংলা) portfolio. No build step, no dependencies. Open `index.html` through any static server, or deploy the repository root to GitHub Pages / Netlify / Vercel.

```
index.html        homepage (all sections)
project.html      one template for every project case study, chosen by the URL hash: project.html#sondhan
404.html          custom not-found page
css/styles.css    design system (black condensed headlines, pink script words, blurred blobs)
js/content.js     ALL content and translations (edit this file, not the HTML)
js/app.js         renders the pages from content.js, language switch, case-study template
assets/img/       optimized photos (full colour), supplied project logos, MOVE screenshots
docs/             project-research.md (what each repository really contains)
legacy/           the previous study-abroad page, kept for reference
```

## Run locally

```
python3 -m http.server 8000      # then open http://localhost:8000
```

## Add or update a project

Open `js/content.js`, find `projects`, copy one entry and change it. Every field is `{ en: "...", bn: "..." }` or `null`.
`null` shows a visible "pending" placeholder, so nothing is invented. Fields: `status` (`unverified | prototype | active | complete | deployed`), `category`, `summary`, `problem`, `users`, `concept`, `implemented[]`, `planned[]`, `role`, `tech[]`, `shots[]` (`{ src, alt }`), `challenges`, `limitations`, `links.demo`, `links.repo`, `related[]`.
Add screenshots to `assets/img/projects/<slug>/` and list them in `shots`. The homepage slide and the case-study page update by themselves.

## Contact links

Set `contact.github`, `contact.linkedin`, `contact.email` in `js/content.js`. Until then the page shows "To be provided".

## Deploy notes

- GitHub Pages at a user/organisation root works as is. For a project site (`/repo-name/`), change the absolute `/css`, `/js`, `/assets` paths in `404.html` to include the repo name.
- `og:image` is `assets/img/og.jpg`. Social networks need an absolute `https://` URL there, so replace it once the domain is known.
- Language is switched in the browser and remembered in `localStorage`. There is one URL for both languages, so `hreflang` tags are not used. Separate `/bn/` pages would be needed for that.
- No analytics, backend, form service or API keys are used.

## Asset manifest

| File | Used for | Received | Permission to publish |
|---|---|---|---|
| `hero.jpg` | Hero (full-colour portrait, background kept) | yes | owner supplied, confirm |
| `intro.jpg`, `about.jpg`, `edu.jpg`, `skills-1.jpg`, `skills-2.jpg` | Section photos | yes | owner supplied, confirm |
| `moment-*.jpg` (5) | "Beyond code" collage | yes | owner supplied, confirm |
| `logo-move.jpg`, `logo-determind.jpg`, `logo-sondhan.jpg`, `logo-mino.jpg`, `logo-furqan.jpg` | Project logos, shown unchanged (resized only) | yes | owner supplied, confirm |
| `projects/move/*.jpg` (4) | MOVE slide and case study | taken from `docs/screenshots` in the move-app repository | owner's own repository, confirm |
| Screenshots for DeterMind, Sondhan, Mino, Furqan | Project slides, case studies | **not found in repositories, not supplied** | n/a |
| Higher-resolution Mino logo | Mino tile (current file is 216 px) | **needed** | n/a |
| Personal logo / monogram | Header, favicon | **not received**; `favicon.svg` is a neutral placeholder dot | n/a |
| `og.jpg` | Social preview (screenshot of the hero) | generated | n/a |

Photos with other people in them were left out on purpose.

## Still needed from the owner

1. For DeterMind, Sondhan, Mino and Furqan: 2 or more real screenshots each (desktop and mobile).
2. Confirm that each live URL is current (they could not be opened while building).
3. LinkedIn and email for the contact section (GitHub is set).
4. A higher-resolution Mino logo, and a personal logo or monogram if wanted.
5. For every project: problem, target users, and the split between your own decisions and AI-assisted work.
6. SSC year, if it should be shown.
7. The final domain (for the social preview image URL).
8. Whether Bazare and Healdi should also appear.

## Known discrepancies

See `docs/project-research.md`. In short: Mino and Vocabrain are one product, and project descriptions on the old study-abroad page were replaced by facts read from the repositories.
