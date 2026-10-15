# Abdul Aziz Kayes: portfolio

Static, bilingual (English / বাংলা) portfolio. No build step, no dependencies. Open `index.html` through any static server, or deploy the repository root to GitHub Pages / Netlify / Vercel.

```
index.html        homepage (all sections)
project.html      one template for every project case study, chosen by the URL hash: project.html#sondhan
404.html          custom not-found page
css/styles.css    design system (black condensed headlines, pink script words, blurred blobs)
js/content.js     ALL content and translations (edit this file, not the HTML)
js/app.js         renders the pages from content.js, language switch, case-study template
assets/img/       optimized photos (full colour)
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
| `hero.webp` | Hero cut-out (background removed from a supplied photo) | yes | owner supplied, confirm |
| `intro.jpg` | Introduction | yes | owner supplied, confirm |
| `about.jpg` | About | yes | owner supplied, confirm |
| `edu.jpg` | Education (beside the Dhaka College Science Club emblem) | yes | owner supplied, confirm |
| `skills-1.jpg`, `skills-2.jpg` | Skills slide (decorative) | yes | owner supplied, confirm |
| `moment-*.jpg` (5) | "Beyond code" collage | yes | owner supplied, confirm |
| Project screenshots | Project slides, case studies, "What I build" | **not received** | n/a |
| Project logos | Project slides | **not received** | n/a |
| Personal logo / monogram | Header, favicon | **not received**, `favicon.svg` is a neutral placeholder dot | n/a |

Photos with other people in them were left out on purpose.

## Still needed from the owner

1. For each of the six projects: GitHub link, live URL (if any), 2 or more real screenshots (desktop and mobile), and a short note on what was built by hand and what was AI-assisted.
2. GitHub, LinkedIn and email for the contact section.
3. SSC year, if it should be shown.
4. Project logos and a personal logo or monogram, if wanted.
5. The final domain (for the social preview image URL).

## Known discrepancies in earlier content

- The old study-abroad page listed the project as "Vocabrain"; the brief says "Vocabulary / Vocabrain". The final name is still to be confirmed.
- Project descriptions in the old page were not carried over, because they were not yet checked against the repositories.
