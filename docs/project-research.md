# Project research (read 2026-10-15)

Source: each repository's README, source tree, docs and `package.json` (shallow clones), plus the owner's GitHub profile README for names and live URLs.
**What could not be done:** the live sites were not reachable from the build environment, so no live URL was opened and no live screenshot was taken. A feature listed as "found in code" means the code or route exists, not that it was tested in production.
No user counts, downloads or revenue were found or used. The profile README's phrases "real users" and "shipped solo" are self-reported and are not repeated on the site.

Display order (owner's choice): MOVE, DeterMind, Sondhan, Mino, Furqan.
Bazare and Healdi (Sondhan-Pharmacy-) are in the owner's profile README but are not on the site, because they were left out of the requested list. Austin Dental, Little Nest, Henna Art, Architex and Farm 3D Designer were not used.

| | MOVE | DeterMind | Sondhan | Mino (repo: Vocabrain) | Furqan |
|---|---|---|---|---|---|
| Repository | Kayes2323/move-app | Kayes2323/DeterMind | Kayes2323/Life-Drop | Kayes2323/Vocabrain | Kayes2323/furqan |
| Live URL (self-reported, not opened) | move-app-h2me.vercel.app | deter-mind.vercel.app | sondhan.org (profile README) | vocabrain.vercel.app (profile README) | furqan-tan.vercel.app |
| Status evidence | README: "in active development"; last commit 2026-10-08 | README: "in active development"; last commit 2026-10-02 | Last commit 2026-10-07; `vercel.json`; no README | Foundation/QA work to 2026-10-14; Stripe webhook upgrade is `TODO` in code | README: deployed on Vercel; last commit 2026-10-02 |
| Stated purpose | Daily runs become progress along real Bangladesh routes | Student life-tracking and self-improvement dashboard | Find blood donors, urgent requests (manifest, Bangla) | IELTS prep: vocabulary, grammar, AI companion, study-abroad planning (docs/ARCHITECTURE.md) | Understand the Quran in Bangla |
| Found in code | `/run` GPS tracking, `/journey`, `/result`, `/leaderboard`, `/share`, `/onboarding`, `/login`, `/profile`, `/territory` (Mohammadpur pilot); IndexedDB-first tracking; Capacitor config | Pages: Todo, Routine, Dashboard, Focus, Leaderboard, Profile, Auth, Sigma; `api/ai.js` (Groq, session-checked); service worker + manifest | Pages: donor register, search, request, bloodbank, ambulance, admin, login/signup; phone OTP + Google + email; Firestore rules (private contact data, reveal limits); PWA | Vocabulary lessons and bands, review, reading, diagnostic, plan, band calculator, foundation course (194 lessons / 16 modules per repo inventory), `/api/mino/*` (Gemini), Stripe checkout | Screens: Tafsir, NUR, Research, Sirah (journey, chapters, reading), Profile; `/api/nur` (Gemini); PWA installer |
| Technology (verified in package.json / code) | Next.js 16, TypeScript, Firebase, Leaflet, Tailwind, Capacitor | React, Vite, Supabase, Zustand, React Router, Recharts, Framer Motion, Tailwind, Groq | HTML, CSS, JS, Firebase Auth + Firestore, service worker, Vercel | Next.js 16, React 19, TypeScript, Tailwind, shadcn/Radix, Firebase, Stripe, Gemini | Next.js, TypeScript, Firebase, Gemini, Tailwind |
| Screenshots in repo | 8 (`docs/screenshots`): used 3 app screens and 1 share card | none | none | none | none |
| Logo supplied by owner | yes | yes | yes | yes (216 px, low resolution) | yes |
| Role evidence | README credits the owner; `CLAUDE.md` and `AGENTS.md` present (AI tools used) | README credits the owner | profile README: "my first product" | docs authored in repo | README credits the owner; `CLAUDE.md` present |
| Unknown, needs the owner | Problem and target users; own work vs AI split; is the live site current | same | Problem beyond the manifest; target users; are the Firestore rules published; is sondhan.org live | Final product name (Mino or Vocabrain); users; whether paid plans work | Status; who reviewed NUR's religious answers; target users |

## Discrepancies to resolve
- Mino and Vocabrain are the same product (profile README: "Vocabrain · Mino"). The site shows "Mino" and records "Repository name: Vocabrain".
- `move-app/docs/NATIVE.md` says there is no Capacitor, but `package.json` and `capacitor.config.ts` include it. The site says the native shell is planned.
- `DeterMind` still contains `src/lib/anthropic.js` next to the Groq route; the site only claims Groq (the route actually used).
- Sondhan's rules file says it is a reference copy that must be published through the Firebase console. The site says the rules are "in the repository".
