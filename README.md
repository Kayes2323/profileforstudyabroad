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
| `projects/mino/*.jpg` (4), `projects/furqan/*.jpg` (3), `projects/sondhan/home.jpg` | Mino, Furqan, Sondhan slides and case studies | supplied by the owner (phone screenshots; the phone status bar was cropped off one) | owner supplied, confirm |
| `projects/determind/*.jpg` (4: home, tracker, focus, Sigma) | DeterMind slide and case study | supplied by the owner (browser and phone bars cropped off). Four more were withheld on purpose: they repeat these or show more personal habit data | owner supplied, confirm |
| `projects/sondhan/request.jpg` | Sondhan slide | captured from the repository running locally without a backend | own code |
| `vision.jpg` | "Where I want to go" | yes | owner supplied, confirm |
| Higher-resolution Mino logo | Mino tile (current file is 216 px) | **needed** | n/a |
| Personal logo / monogram | Header, favicon | **not received**; `favicon.svg` is a neutral placeholder dot | n/a |
| `og.jpg` | Social preview (screenshot of the hero) | generated | n/a |

Photos with other people in them were left out on purpose.

## Still needed from the owner

1. Signed-in DeterMind screenshots (to-do or routine, dashboard, focus, Sigma).
2. Your own writing about yourself (Introduction, About) and, per project, the problem, target users and the split between your decisions and AI-assisted work.
3. Confirm that each live URL is current (they could not be opened while building).
4. A higher-resolution Mino logo, and a personal logo or monogram if wanted.
5. SSC year, if it should be shown.
6. The final domain (for the social preview image URL).
7. Whether Bazare and Healdi should also appear.

## Contact details on the site

GitHub, LinkedIn, Facebook, Instagram, email and a WhatsApp button are set in `contact` in `js/content.js`. The WhatsApp number is not printed on the page, but it is inside the `wa.me` link, so anyone who inspects the link can read it.

## Known discrepancies

See `docs/project-research.md`. In short: Mino and Vocabrain are one product, and project descriptions on the old study-abroad page were replaced by facts read from the repositories.
