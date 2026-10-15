/* All site content lives here, separate from presentation.
   Text is { en, bn }. A value of null means "not verified yet": the page shows a visible placeholder
   instead of inventing anything. See README.md for how to add or update a project.
   Project facts below come from each repository (README, source, docs) as read on 2026-10-15,
   plus the owner's GitHub profile README for live URLs. Live links could not be re-checked from the build environment. */
window.SITE = {
  meta: {
    en: {
      title: "Abdul Aziz Kayes | Product Builder and Web Developer",
      description: "Abdul Aziz Kayes is a product builder from Hajiganj, Chandpur, Bangladesh. He explores how technology can address practical problems and learns by turning ideas into working digital products."
    },
    bn: {
      title: "আব্দুল আজিজ কায়েস | প্রোডাক্ট বিল্ডার ও ওয়েব ডেভেলপার",
      description: "আব্দুল আজিজ কায়েস হাজীগঞ্জ, চাঁদপুর, বাংলাদেশের একজন প্রোডাক্ট বিল্ডার। বাস্তব সমস্যার সমাধানে প্রযুক্তি কীভাবে কাজে লাগতে পারে তা তিনি খুঁজে দেখেন এবং ধারণাকে কাজের ডিজিটাল পণ্যে রূপ দিয়ে শেখেন।"
    }
  },

  photos: {
    hero: "assets/img/hero.jpg",
    intro: "assets/img/intro.jpg",
    about: "assets/img/about.jpg",
    edu: "assets/img/edu.jpg",
    skills: ["assets/img/skills-1.jpg", "assets/img/skills-2.jpg"]
  },

  education: [
    { id: "hsc", year: "2024" },
    { id: "ssc", year: null }
  ],

  /* github is the owner's profile (named as the author in every project README). Add linkedin / email when supplied. */
  contact: { github: "https://github.com/Kayes2323", linkedin: null, email: null, other: [] },

  statusLabels: {
    unverified: { en: "Status: not yet verified", bn: "অবস্থা: এখনও যাচাই হয়নি" },
    prototype: { en: "Status: prototype", bn: "অবস্থা: প্রোটোটাইপ" },
    active: { en: "Status: in active development", bn: "অবস্থা: সক্রিয় উন্নয়নে" },
    complete: { en: "Status: implemented", bn: "অবস্থা: বাস্তবায়িত" },
    deployed: { en: "Status: live, as reported in the repository", bn: "অবস্থা: চালু, রিপোজিটরির তথ্য অনুযায়ী" }
  },

  /* Order follows the owner's choice. Add a project by copying one entry. Slugs are used in project.html#slug.
     logo: supplied brand logo, shown unchanged on logoBg. logoW caps its width for low-resolution files. */
  projects: [
    {
      slug: "move", name: "MOVE", aka: null, status: "active",
      logo: "assets/img/logo-move.jpg", logoBg: "#000000",
      category: { en: "Fitness", bn: "ফিটনেস" },
      summary: {
        en: "A running app that turns the distance you actually run into progress along real routes across Bangladesh, starting from Dhaka.",
        bn: "বাস্তবে যত দূর দৌড়ান সেটাকে বাংলাদেশের আসল রুটে এগিয়ে যাওয়ায় রূপ দেওয়া একটি রানিং অ্যাপ, যাত্রা শুরু ঢাকা থেকে।"
      },
      problem: null, users: null,
      concept: {
        en: "Every kilometre recorded by GPS moves you forward along a real route, one real town at a time. A Territory mode rewards exploring real streets on foot (kilometres do not count towards it), piloted for Mohammadpur in Dhaka.",
        bn: "জিপিএসে মাপা প্রতিটি কিলোমিটার আপনাকে একটি আসল রুটে, একটি করে আসল শহর পেরিয়ে এগিয়ে নেয়। টেরিটরি মোডে পায়ে হেঁটে আসল রাস্তা ঘুরে দেখলে অগ্রগতি হয় (এতে কিলোমিটার গোনা হয় না), আপাতত ঢাকার মোহাম্মদপুরে পরীক্ষামূলকভাবে।"
      },
      implemented: [
        { en: "GPS run and walk tracking on a live map", bn: "লাইভ ম্যাপে জিপিএস রান ও ওয়াক ট্র্যাকিং" },
        { en: "Journeys from Dhaka to places such as Cox's Bazar, Sylhet and Khulna, with real towns as checkpoints", bn: "ঢাকা থেকে কক্সবাজার, সিলেট, খুলনার মতো গন্তব্যে যাত্রা, আসল শহরগুলো চেকপয়েন্ট" },
        { en: "Run results, a leaderboard and shareable cards", bn: "রানের ফলাফল, লিডারবোর্ড ও শেয়ার করার কার্ড" },
        { en: "Onboarding, login and a profile", bn: "অনবোর্ডিং, লগইন ও প্রোফাইল" },
        { en: "Territory pilot: explore the real streets of Mohammadpur to conquer it, using an OpenStreetMap-based map mask", bn: "টেরিটরি পাইলট: মোহাম্মদপুরের আসল রাস্তা ঘুরে এলাকাটি জয় করা, ওপেনস্ট্রিটম্যাপভিত্তিক ম্যাপ মাস্ক দিয়ে" },
        { en: "Every GPS point is saved on the device first and synced later, so a crash or lost signal does not lose a run", bn: "প্রতিটি জিপিএস পয়েন্ট আগে ডিভাইসে সেভ হয়, পরে সিঙ্ক হয়, তাই ক্র্যাশ বা সিগন্যাল গেলেও রান হারায় না" }
      ],
      planned: [
        { en: "Reliable background tracking through a native Capacitor shell (its configuration is in the repository)", bn: "নেটিভ ক্যাপাসিটর শেলের মাধ্যমে নির্ভরযোগ্য ব্যাকগ্রাউন্ড ট্র্যাকিং (কনফিগারেশন রিপোজিটরিতে আছে)" }
      ],
      role: {
        en: "The README credits me as the builder. The repository contains CLAUDE.md and AGENTS.md files, so AI coding tools were part of the workflow. The exact split between my decisions and AI-assisted work is still to be added.",
        bn: "README-তে আমাকে নির্মাতা হিসেবে উল্লেখ করা আছে। রিপোজিটরিতে CLAUDE.md ও AGENTS.md ফাইল আছে, অর্থাৎ কাজে এআই কোডিং টুল ব্যবহৃত হয়েছে। আমার সিদ্ধান্ত আর এআই-সহায়তার সুনির্দিষ্ট ভাগ এখনও যোগ হয়নি।"
      },
      tech: ["Next.js", "TypeScript", "Firebase", "Leaflet", "Tailwind CSS", "Capacitor"],
      shots: [
        { ar: 0.467, src: "assets/img/projects/move/hub-progress.jpg", alt: { en: "MOVE Territory screen showing Mohammadpur 50 percent explored", bn: "মোহাম্মদপুর ৫০ শতাংশ ঘোরা দেখাচ্ছে এমন MOVE-এর টেরিটরি স্ক্রিন" } },
        { ar: 0.487, src: "assets/img/projects/move/hub-start.jpg", alt: { en: "MOVE Territory screen before choosing Mohammadpur", bn: "মোহাম্মদপুর বেছে নেওয়ার আগের MOVE-এর টেরিটরি স্ক্রিন" } },
        { ar: 0.487, src: "assets/img/projects/move/hub-conquered.jpg", alt: { en: "MOVE Territory screen with Mohammadpur conquered", bn: "মোহাম্মদপুর জয় হয়েছে এমন MOVE-এর টেরিটরি স্ক্রিন" } },
        { ar: 0.8, src: "assets/img/projects/move/routes-share.jpg", alt: { en: "MOVE share card for a Dhaka to Chandpur journey", bn: "ঢাকা থেকে চাঁদপুর যাত্রার MOVE শেয়ার কার্ড" } }
      ],
      challenges: {
        en: "Browsers stop delivering GPS positions when the screen locks, so the repository documents two tracking modes: the web app today, and a native Capacitor shell with background location as the way to fix it.",
        bn: "স্ক্রিন লক হলে ব্রাউজার জিপিএস পজিশন দেওয়া বন্ধ করে দেয়, তাই রিপোজিটরিতে দুটি ট্র্যাকিং মোড লেখা আছে: এখনকার ওয়েব অ্যাপ, আর সমাধান হিসেবে ব্যাকগ্রাউন্ড লোকেশনসহ নেটিভ ক্যাপাসিটর শেল।"
      },
      limitations: {
        en: "In active development, as the README says. Background tracking on the web is limited by the browser. Territory is a pilot for one area.",
        bn: "README অনুযায়ী সক্রিয় উন্নয়নে আছে। ওয়েবে ব্যাকগ্রাউন্ড ট্র্যাকিং ব্রাউজারের সীমার মধ্যে। টেরিটরি শুধু একটি এলাকায় পাইলট।"
      },
      basis: ["README", "app routes and source code", "docs/TERRITORY.md", "docs/NATIVE.md", "docs/screenshots"],
      links: { demo: "https://move-app-h2me.vercel.app", repo: "https://github.com/Kayes2323/move-app" },
      related: ["determind", "sondhan"]
    },

    {
      slug: "determind", name: "DeterMind", aka: null, status: "active",
      logo: "assets/img/logo-determind.jpg", logoBg: "#0f0f0f",
      category: { en: "Productivity", bn: "উৎপাদনশীলতা" },
      summary: {
        en: "A personal life-tracking and self-improvement dashboard for students: to-dos, routines, focus sessions, progress charts and an AI assistant.",
        bn: "শিক্ষার্থীদের জন্য ব্যক্তিগত লাইফ-ট্র্যাকিং ও আত্মউন্নয়ন ড্যাশবোর্ড: টু-ডু, রুটিন, ফোকাস সেশন, অগ্রগতির চার্ট ও একটি এআই সহকারী।"
      },
      problem: null, users: null,
      concept: {
        en: "\"Determine your path. Dominate your day.\" One place where a student plans the day, builds a routine, focuses, and sees progress.",
        bn: "\"নিজের পথ ঠিক করো। নিজের দিন জয় করো।\" শিক্ষার্থী এক জায়গায় দিনের পরিকল্পনা করে, রুটিন বানায়, মনোযোগ দেয় এবং অগ্রগতি দেখে।"
      },
      implemented: [
        { en: "To-do and daily routine planning", bn: "টু-ডু ও দৈনিক রুটিন পরিকল্পনা" },
        { en: "A progress dashboard with charts", bn: "চার্টসহ অগ্রগতির ড্যাশবোর্ড" },
        { en: "Focus sessions and a leaderboard", bn: "ফোকাস সেশন ও লিডারবোর্ড" },
        { en: "Sign-in and a profile, with data stored in Supabase", bn: "সাইন-ইন ও প্রোফাইল, ডেটা সংরক্ষিত সুপাবেসে" },
        { en: "Sigma, an AI assistant, served through a server route that only signed-in users can call", bn: "সিগমা নামের এআই সহকারী, একটি সার্ভার রুটের মাধ্যমে যেটা শুধু সাইন-ইন করা ব্যবহারকারী ডাকতে পারে" },
        { en: "Installable as a PWA, with a notification hook and a service worker", bn: "PWA হিসেবে ইনস্টল করা যায়, নোটিফিকেশন হুক ও সার্ভিস ওয়ার্কার সহ" }
      ],
      planned: [],
      role: {
        en: "The README credits me as the builder. The exact split between my decisions and AI-assisted work is still to be added.",
        bn: "README-তে আমাকে নির্মাতা হিসেবে উল্লেখ করা আছে। আমার সিদ্ধান্ত আর এআই-সহায়তার সুনির্দিষ্ট ভাগ এখনও যোগ হয়নি।"
      },
      tech: ["React", "Vite", "Supabase", "Zustand", "React Router", "Recharts", "Framer Motion", "Tailwind CSS", "Groq API"],
      shots: [],
      challenges: {
        en: "The latest commit records moving the AI calls to a server route so the API key never ships to the browser. The route also checks that the caller has a valid session.",
        bn: "সর্বশেষ কমিটে এআই কলগুলো সার্ভার রুটে সরানোর কথা লেখা আছে, যাতে এপিআই কী কখনও ব্রাউজারে না যায়। রুটটি কলারের বৈধ সেশনও যাচাই করে।"
      },
      limitations: {
        en: "In active development, as the README says. The AI assistant needs a server-side key to work.",
        bn: "README অনুযায়ী সক্রিয় উন্নয়নে আছে। এআই সহকারী চলতে সার্ভার-সাইড কী লাগে।"
      },
      basis: ["README", "src/pages and src/store", "api/ai.js", "package.json"],
      links: { demo: "https://deter-mind.vercel.app", repo: "https://github.com/Kayes2323/DeterMind" },
      related: ["move", "sondhan"]
    },

    {
      slug: "sondhan", name: "Sondhan", aka: null, status: "deployed",
      logo: "assets/img/logo-sondhan.jpg", logoBg: "#ca362d",
      category: { en: "Health and community", bn: "স্বাস্থ্য ও কমিউনিটি" },
      summary: {
        en: "A Bangla web app for finding blood donors and posting urgent blood requests in Bangladesh.",
        bn: "বাংলাদেশে রক্তদাতা খোঁজা ও জরুরি রক্তের অনুরোধ করার একটি বাংলা ওয়েব অ্যাপ।"
      },
      problem: {
        en: "Finding a blood donor, and asking for blood urgently, in Bangladesh. This is the purpose the app's own manifest states.",
        bn: "বাংলাদেশে রক্তদাতা খোঁজা এবং জরুরি রক্তের অনুরোধ করা। অ্যাপের নিজস্ব ম্যানিফেস্টে এটাই উদ্দেশ্য হিসেবে লেখা।"
      },
      users: null,
      concept: {
        en: "Search donors by blood group and location, post an emergency request, and browse blood banks and ambulances, all in Bangla and installable on a phone.",
        bn: "রক্তের গ্রুপ ও এলাকা দিয়ে দাতা খোঁজা, জরুরি অনুরোধ পোস্ট করা, ব্লাড ব্যাংক ও অ্যাম্বুলেন্সের তালিকা দেখা, সবই বাংলায় এবং ফোনে ইনস্টল করার মতো।"
      },
      implemented: [
        { en: "Donor registration and sign-in with email, Google or a phone one-time code", bn: "ইমেইল, গুগল বা ফোনের ওয়ান-টাইম কোড দিয়ে দাতা নিবন্ধন ও সাইন-ইন" },
        { en: "Donor search by blood group and location, down to upazila, with GPS support", bn: "রক্তের গ্রুপ ও এলাকা, উপজেলা পর্যন্ত, দিয়ে দাতা খোঁজা, জিপিএস সহায়তাসহ" },
        { en: "Emergency blood requests", bn: "জরুরি রক্তের অনুরোধ" },
        { en: "Blood-bank and ambulance directories, with an admin panel", bn: "ব্লাড ব্যাংক ও অ্যাম্বুলেন্সের তালিকা, অ্যাডমিন প্যানেলসহ" },
        { en: "Donor phone numbers are kept apart from public profiles, and a user can reveal only a limited number per 30 days (rules in the repository)", bn: "দাতার ফোন নম্বর পাবলিক প্রোফাইল থেকে আলাদা রাখা হয়, আর একজন ব্যবহারকারী ৩০ দিনে সীমিত সংখ্যক নম্বর দেখতে পারে (নিয়মগুলো রিপোজিটরিতে)" },
        { en: "Installable PWA with an offline page", bn: "অফলাইন পেজসহ ইনস্টল করার মতো PWA" }
      ],
      planned: [],
      role: {
        en: "My first product. I took it from an idea to the code in this repository. The exact split between my decisions and AI-assisted work is still to be added.",
        bn: "আমার প্রথম প্রোডাক্ট। ধারণা থেকে এই রিপোজিটরির কোড পর্যন্ত আমি নিয়ে গেছি। আমার সিদ্ধান্ত আর এআই-সহায়তার সুনির্দিষ্ট ভাগ এখনও যোগ হয়নি।"
      },
      tech: ["HTML", "CSS", "JavaScript", "Firebase Auth", "Firestore", "Service worker (PWA)", "Vercel"],
      shots: [],
      challenges: {
        en: "Protecting donors' phone numbers. The repository's Firestore rules separate public profiles from private contact details and cap how many numbers one user can reveal.",
        bn: "দাতাদের ফোন নম্বর সুরক্ষিত রাখা। রিপোজিটরির ফায়ারস্টোর রুলস পাবলিক প্রোফাইল আর ব্যক্তিগত যোগাযোগের তথ্য আলাদা করে এবং একজন ব্যবহারকারী কতগুলো নম্বর দেখতে পারবে তা সীমিত করে।"
      },
      limitations: {
        en: "The repository has no README yet. Its rules file says it is a reference copy that must be published through the Firebase console, so whether those rules are active could not be checked.",
        bn: "রিপোজিটরিতে এখনও কোনো README নেই। রুলস ফাইলে লেখা আছে এটি রেফারেন্স কপি, ফায়ারবেস কনসোল দিয়ে প্রকাশ করতে হয়, তাই নিয়মগুলো চালু আছে কি না যাচাই করা যায়নি।"
      },
      basis: ["HTML pages and app.js", "manifest.json", "firestore.rules", "vercel.json", "my GitHub profile README (live URL)"],
      links: { demo: "https://sondhan.org", repo: "https://github.com/Kayes2323/Life-Drop" },
      related: ["mino", "move"]
    },

    {
      slug: "mino", name: "Mino", aka: "Vocabrain", status: "active",
      logo: "assets/img/logo-mino.jpg", logoBg: "#001320", logoW: 216,
      category: { en: "Education (IELTS)", bn: "শিক্ষা (আইইএলটিএস)" },
      summary: {
        en: "An IELTS preparation platform that grew from a vocabulary trainer into vocabulary practice, a grammar course, reading practice, a study plan and an AI study companion called Mino.",
        bn: "একটি আইইএলটিএস প্রস্তুতির প্ল্যাটফর্ম, যেটা শব্দভান্ডার অনুশীলন থেকে বেড়ে হয়েছে ভোকাবুলারি, গ্রামার কোর্স, রিডিং অনুশীলন, স্টাডি প্ল্যান ও মিনো নামের এআই স্টাডি সহচর।"
      },
      problem: null, users: null,
      concept: {
        en: "One place for IELTS preparation, vocabulary mastery, AI mentorship and study-abroad planning, guided by Mino.",
        bn: "আইইএলটিএস প্রস্তুতি, শব্দভান্ডার দক্ষতা, এআই মেন্টরশিপ ও বিদেশে পড়ার পরিকল্পনা, সবকিছু এক জায়গায়, মিনোর দিকনির্দেশনায়।"
      },
      implemented: [
        { en: "Vocabulary lessons and a word bank by band, with a review session", bn: "ব্যান্ড অনুযায়ী ভোকাবুলারি পাঠ ও শব্দভান্ডার, রিভিউ সেশনসহ" },
        { en: "A grammar foundation course: 194 lessons in 16 modules, according to the repository's own inventory", bn: "গ্রামার ফাউন্ডেশন কোর্স: রিপোজিটরির নিজস্ব তালিকা অনুযায়ী ১৬টি মডিউলে ১৯৪টি পাঠ" },
        { en: "Reading practice, a diagnostic, a band-score calculator and a personal study plan", bn: "রিডিং অনুশীলন, ডায়াগনস্টিক, ব্যান্ড-স্কোর ক্যালকুলেটর ও ব্যক্তিগত স্টাডি প্ল্যান" },
        { en: "Mino, the AI study companion, served through server routes that call Google Gemini", bn: "গুগল জেমিনি কল করা সার্ভার রুটের মাধ্যমে চলা এআই স্টাডি সহচর মিনো" },
        { en: "Sign-in with email and Google, and a Stripe checkout route", bn: "ইমেইল ও গুগল দিয়ে সাইন-ইন এবং একটি স্ট্রাইপ চেকআউট রুট" },
        { en: "Content checks: IELTS facts verified against IDP and British Council pages, and an answer-key audit", bn: "কনটেন্ট যাচাই: আইডিপি ও ব্রিটিশ কাউন্সিলের পেজের সাথে আইইএলটিএস তথ্য মেলানো, এবং উত্তর-সূচির অডিট" }
      ],
      planned: [
        { en: "Study-abroad planning beyond the country explorer and journey pages", bn: "কান্ট্রি এক্সপ্লোরার ও জার্নি পেজের বাইরে বিদেশে পড়ার পরিকল্পনা" },
        { en: "Full practice for every IELTS skill and mock tests, listed as planned in docs/ARCHITECTURE.md", bn: "প্রতিটি আইইএলটিএস স্কিলের পূর্ণ অনুশীলন ও মক টেস্ট, docs/ARCHITECTURE.md-এ পরিকল্পিত হিসেবে লেখা" }
      ],
      role: {
        en: "The repository carries my architecture and content-audit documents. The exact split between my decisions and AI-assisted work is still to be added.",
        bn: "রিপোজিটরিতে আমার আর্কিটেকচার ও কনটেন্ট-অডিটের নথি আছে। আমার সিদ্ধান্ত আর এআই-সহায়তার সুনির্দিষ্ট ভাগ এখনও যোগ হয়নি।"
      },
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Firebase", "Stripe", "Google Gemini"],
      shots: [],
      challenges: {
        en: "An architecture audit in the repository records fixing a build that failed without a Stripe key, a broken checkout redirect and TypeScript errors, and notes a security gap in the subscription rules to be closed by granting premium only from a server webhook.",
        bn: "রিপোজিটরির একটি আর্কিটেকচার অডিটে স্ট্রাইপ কী ছাড়া বিল্ড ফেল, ভাঙা চেকআউট রিডাইরেক্ট ও টাইপস্ক্রিপ্ট ত্রুটি ঠিক করার কথা আছে, আর সাবস্ক্রিপশন রুলসে একটি নিরাপত্তা ফাঁকের উল্লেখ আছে যেটা শুধু সার্ভার ওয়েবহুক থেকে প্রিমিয়াম দিয়ে বন্ধ করতে হবে।"
      },
      limitations: {
        en: "In active development. In the code, the Stripe webhook that upgrades an account is still marked TODO, so paid plans cannot be activated automatically yet.",
        bn: "সক্রিয় উন্নয়নে আছে। কোডে অ্যাকাউন্ট আপগ্রেড করার স্ট্রাইপ ওয়েবহুক এখনও TODO চিহ্নিত, তাই পেইড প্ল্যান এখনও স্বয়ংক্রিয়ভাবে চালু করা যায় না।"
      },
      basis: ["docs/ARCHITECTURE.md", "docs/FOUNDATION_INTEGRATION_INVENTORY.md", "app routes and api routes", "package.json", "my GitHub profile README (name and live URL)"],
      links: { demo: "https://vocabrain.vercel.app", repo: "https://github.com/Kayes2323/Vocabrain" },
      related: ["sondhan", "furqan"]
    },

    {
      slug: "furqan", name: "Furqan", aka: null, status: "deployed",
      logo: "assets/img/logo-furqan.jpg", logoBg: "#e2f6e5",
      category: { en: "Education (Quran study)", bn: "শিক্ষা (কুরআন অধ্যয়ন)" },
      summary: {
        en: "A Bangla-first app that helps readers move from reading the Quran to understanding it, with tafsir, research articles, a guided life-of-the-Prophet journey and an AI companion called NUR.",
        bn: "বাংলাভাষী পাঠককে কুরআন শুধু পড়া থেকে বোঝার দিকে নিয়ে যাওয়ার একটি বাংলা-প্রথম অ্যাপ, তাফসীর, গবেষণা নিবন্ধ, নির্দেশিত সীরাত যাত্রা ও নূর নামের এআই সহচরসহ।"
      },
      problem: null, users: null,
      concept: {
        en: "\"কুরআন পড়ো না, বোঝো\": understand the Quran, in Bangla.",
        bn: "\"কুরআন পড়ো না, বোঝো\": বাংলায় কুরআন বুঝুন।"
      },
      implemented: [
        { en: "A tafsir reading screen", bn: "তাফসীর পড়ার স্ক্রিন" },
        { en: "NUR, an AI companion that answers in Bangla, served through a server route that calls Google Gemini", bn: "নূর, বাংলায় উত্তর দেওয়া এআই সহচর, গুগল জেমিনি কল করা সার্ভার রুটের মাধ্যমে চলে" },
        { en: "Long-form research articles", bn: "দীর্ঘ গবেষণা নিবন্ধ" },
        { en: "A chapter-by-chapter journey through the life of the Prophet, with maps and a genealogy chart", bn: "মানচিত্র ও বংশতালিকাসহ নবীজির জীবনের অধ্যায়ভিত্তিক যাত্রা" },
        { en: "A profile screen and bookmarks, as the README describes", bn: "README-তে বর্ণিত প্রোফাইল স্ক্রিন ও বুকমার্ক" },
        { en: "Installable as a PWA", bn: "PWA হিসেবে ইনস্টল করা যায়" }
      ],
      planned: [],
      role: {
        en: "The README credits me as the builder. The repository contains CLAUDE.md and AGENTS.md files, so AI coding tools were part of the workflow. The exact split between my decisions and AI-assisted work is still to be added.",
        bn: "README-তে আমাকে নির্মাতা হিসেবে উল্লেখ করা আছে। রিপোজিটরিতে CLAUDE.md ও AGENTS.md ফাইল আছে, অর্থাৎ কাজে এআই কোডিং টুল ব্যবহৃত হয়েছে। আমার সিদ্ধান্ত আর এআই-সহায়তার সুনির্দিষ্ট ভাগ এখনও যোগ হয়নি।"
      },
      tech: ["Next.js", "TypeScript", "Firebase", "Google Gemini", "Tailwind CSS", "Vercel"],
      shots: [],
      challenges: {
        en: "The README notes that NUR is called from a server route so the Gemini key never reaches the browser.",
        bn: "README-তে লেখা আছে নূর সার্ভার রুট থেকে ডাকা হয়, যাতে জেমিনি কী কখনও ব্রাউজারে না পৌঁছায়।"
      },
      limitations: {
        en: "NUR is an AI companion, so its answers should be reviewed by a qualified person before being relied on.",
        bn: "নূর একটি এআই সহচর, তাই এর উত্তরের উপর নির্ভর করার আগে যোগ্য কাউকে দিয়ে যাচাই করা উচিত।"
      },
      basis: ["README", "app/components", "app/api/nur", "package.json"],
      links: { demo: "https://furqan-tan.vercel.app", repo: "https://github.com/Kayes2323/furqan" },
      related: ["mino", "determind"]
    }
  ],

  ui: {
    en: {
      skip: "Skip to content", brand: "Abdul Aziz Kayes", langLabel: "Language", navLabel: "Primary",
      nHome: "Home", nIntro: "Intro", nAbout: "About", nEdu: "Education", nSkills: "Skills", nProj: "Projects", nContact: "Contact",
      loc: "Hajiganj, Chandpur, Bangladesh", hPort: "Portfolio", hScript: "Builder",
      hLine: "I build digital products to solve real-world problems.",
      hCopy: "I'm Abdul Aziz Kayes, a product builder from Hajiganj, Chandpur, Bangladesh. I explore how technology can address practical problems, and I learn by turning ideas into working digital products.",
      ctaWork: "Explore My Work", ctaStory: "My Story",
      iHead: "Introduction", iScript: "Intro",
      iP1: "My journey is still unfolding. I became interested in technology as a way to turn ideas into something practical. Through independent projects, I have been exploring problems across community services, education, fitness, and digital applications.",
      iP2: "Each project gives me a chance to learn, test assumptions, and understand what it takes to build something useful. I want to continue developing my skills and create products that address meaningful problems.",
      aHi: "Hello, I'm", aName: "Abdul Aziz<br>Kayes", aMe: "About Me",
      aCopy: "Product builder, web developer and aspiring entrepreneur. I use AI-assisted development tools in my workflow, and each case study will say clearly which parts are my own decisions and which were assisted.",
      mHead: "Beyond code", mScript: "Moments", mCopy: "A few moments from outside the screen.",
      eHead: "Education", hsc: "Higher Secondary Certificate (HSC), 2024", hscS: "Dhaka College", gpa: "GPA 5.00",
      ssc: "Secondary School Certificate (SSC)", sscS: "Ahmadia Kamil Madrasa, Hajiganj, Chandpur",
      sHead: "Skills", sScript: "Workflow",
      skills: [
        ["Product thinking", "Real-project examples: pending audit"],
        ["Frontend development", "Verified in code: React, Next.js, Vite, TypeScript, Tailwind CSS"],
        ["Backend, database and APIs", "Verified in code: Firebase, Supabase, Stripe, server routes"],
        ["AI-assisted workflow", "AI tools used in the workflow; per-project split pending"],
        ["UI/UX and responsive design", "Real-project examples: pending audit"],
        ["Deployment and tools", "Verified in code: Vercel, PWA service workers, Git"]
      ],
      bHead: "What I build", bL1: "Product Building", bL2: "Web Development",
      pHead: "Portfolio", pScript: "Projects",
      pIntro: "Five projects. Details come from each repository's README, code and docs. Live links are as reported there.",
      pjScript: "Project", caseLink: "Case study →", catPending: "Category: to be confirmed",
      liveLink: "Live ↗", codeLink: "GitHub ↗", shotNeeded: "Screenshot needed",
      cHead: "Let's work", cScript: "Together",
      cCopy: "Open to relevant conversations and collaboration. More profile links will be added once supplied.",
      mail: "Email", tbp: "To be provided",
      phDesk: "Photo needed: your desk or workspace", phShot: "Authentic screenshot or work photo needed",
      foot: "Content marked as pending is not yet verified. © Abdul Aziz Kayes",
      alt: {
        hero: "Abdul Aziz Kayes smiling in front of a flowering bougainvillea", intro: "Abdul Aziz Kayes standing by a lake", about: "Abdul Aziz Kayes looking up at the evening sky",
        edu: "Abdul Aziz Kayes beside the Dhaka College Science Club emblem", s1: "Abdul Aziz Kayes reading a book in a bookshop", s2: "Abdul Aziz Kayes at a railway platform",
        mWater: "Abdul Aziz Kayes sitting in front of a waterfall", mLamp: "Abdul Aziz Kayes beside a street lamp at dusk", mJersey: "Abdul Aziz Kayes sitting on grass",
        mKurta: "Abdul Aziz Kayes in a pink kurta", mHaj: "Abdul Aziz Kayes in the evening in Hajiganj"
      },
      cs: {
        back: "← All projects", crumb: "Case study", pending: "Pending repository audit and confirmation.",
        legI: "Found in code", legP: "Planned", legC: "Concept",
        sections: ["Project overview", "The problem or need", "Target users", "Concept and proposed solution", "Features", "My role and contribution", "Technology stack", "Selected screenshots", "Challenges and lessons learned", "Status and known limitations", "Live demo and GitHub", "Related projects"],
        demo: "Live demo ↗", repo: "GitHub ↗", noLinks: "No verified links yet.", related: "Related", basis: "Based on", repoName: "Repository name",
        liveNote: "Live links come from the repository and my GitHub profile and were not re-checked when this page was built."
      },
      nf: { head: "404", copy: "This page does not exist.", home: "Back to the homepage" }
    },
    bn: {
      skip: "মূল অংশে যান", brand: "আব্দুল আজিজ কায়েস", langLabel: "ভাষা", navLabel: "প্রধান মেনু",
      nHome: "হোম", nIntro: "ভূমিকা", nAbout: "পরিচিতি", nEdu: "শিক্ষা", nSkills: "দক্ষতা", nProj: "প্রকল্প", nContact: "যোগাযোগ",
      loc: "হাজীগঞ্জ, চাঁদপুর, বাংলাদেশ", hPort: "পোর্টফোলিও", hScript: "বিল্ডার",
      hLine: "আমি বাস্তব সমস্যার সমাধানে ডিজিটাল পণ্য তৈরি করি।",
      hCopy: "আমি আব্দুল আজিজ কায়েস, হাজীগঞ্জ, চাঁদপুর, বাংলাদেশের একজন প্রোডাক্ট বিল্ডার। বাস্তব সমস্যার সমাধানে প্রযুক্তি কীভাবে কাজে লাগতে পারে তা খুঁজে দেখি, আর ধারণাকে কাজের ডিজিটাল পণ্যে রূপ দিয়ে শিখি।",
      ctaWork: "আমার কাজ দেখুন", ctaStory: "আমার গল্প",
      iHead: "ভূমিকা", iScript: "শুরুর কথা",
      iP1: "আমার যাত্রা এখনও চলছে। প্রযুক্তিতে আগ্রহী হয়েছি কারণ এটি ধারণাকে কাজে লাগার মতো কিছুতে রূপ দিতে সাহায্য করে। নিজের উদ্যোগে করা প্রকল্পগুলোর মাধ্যমে কমিউনিটি সেবা, শিক্ষা, ফিটনেস ও ডিজিটাল অ্যাপ্লিকেশনের নানা সমস্যা নিয়ে কাজ করছি।",
      iP2: "প্রতিটি প্রকল্প আমাকে শেখার, অনুমান পরীক্ষা করার এবং কাজের মতো কিছু বানাতে কী লাগে তা বোঝার সুযোগ দেয়। আমি দক্ষতা বাড়াতে চাই এবং অর্থবহ সমস্যার সমাধান করে এমন পণ্য তৈরি করতে চাই।",
      aHi: "আমি", aName: "আব্দুল আজিজ<br>কায়েস", aMe: "আমার পরিচিতি",
      aCopy: "প্রোডাক্ট বিল্ডার, ওয়েব ডেভেলপার এবং উদ্যোক্তা হতে আগ্রহী। কাজের ধাপে আমি এআই-সহায়ক টুল ব্যবহার করি, আর প্রতিটি কেস স্টাডিতে স্পষ্ট করে দেখানো হবে কোনটা আমার নিজের সিদ্ধান্ত এবং কোনটাতে এআই সহায়তা করেছে।",
      mHead: "কোডের বাইরে", mScript: "মুহূর্ত", mCopy: "পর্দার বাইরের কিছু মুহূর্ত।",
      eHead: "শিক্ষা", hsc: "উচ্চ মাধ্যমিক সার্টিফিকেট (এইচএসসি), ২০২৪", hscS: "ঢাকা কলেজ", gpa: "জিপিএ ৫.০০",
      ssc: "মাধ্যমিক স্কুল সার্টিফিকেট (এসএসসি)", sscS: "আহমাদিয়া কামিল মাদরাসা, হাজীগঞ্জ, চাঁদপুর",
      sHead: "দক্ষতা", sScript: "কাজের ধারা",
      skills: [
        ["পণ্য ভাবনা", "বাস্তব প্রকল্পের উদাহরণ: যাচাই বাকি"],
        ["ফ্রন্টএন্ড ডেভেলপমেন্ট", "কোডে যাচাইকৃত: React, Next.js, Vite, TypeScript, Tailwind CSS"],
        ["ব্যাকএন্ড, ডেটাবেস ও এপিআই", "কোডে যাচাইকৃত: Firebase, Supabase, Stripe, সার্ভার রুট"],
        ["এআই-সহায়ক কাজের ধারা", "কাজে এআই টুল ব্যবহার করি; প্রকল্পভিত্তিক ভাগ যাচাই বাকি"],
        ["ইউআই/ইউএক্স ও রেসপনসিভ ডিজাইন", "বাস্তব প্রকল্পের উদাহরণ: যাচাই বাকি"],
        ["ডিপ্লয়মেন্ট ও টুল", "কোডে যাচাইকৃত: Vercel, PWA সার্ভিস ওয়ার্কার, Git"]
      ],
      bHead: "যা বানাই", bL1: "পণ্য নির্মাণ", bL2: "ওয়েব ডেভেলপমেন্ট",
      pHead: "পোর্টফোলিও", pScript: "প্রকল্প",
      pIntro: "পাঁচটি প্রকল্প। বিস্তারিত প্রতিটি রিপোজিটরির README, কোড ও ডকুমেন্ট থেকে নেওয়া। লাইভ লিংক সেখানে উল্লেখ অনুযায়ী।",
      pjScript: "প্রকল্প", caseLink: "কেস স্টাডি →", catPending: "বিভাগ: নিশ্চিত করা হবে",
      liveLink: "লাইভ ↗", codeLink: "গিটহাব ↗", shotNeeded: "স্ক্রিনশট প্রয়োজন",
      cHead: "চলুন কাজ করি", cScript: "একসাথে",
      cCopy: "প্রাসঙ্গিক আলোচনা ও সহযোগিতার জন্য উন্মুক্ত। আরও প্রোফাইল লিংক পাওয়ার পর যোগ হবে।",
      mail: "ইমেইল", tbp: "পরে দেওয়া হবে",
      phDesk: "ছবি প্রয়োজন: আপনার ডেস্ক বা ওয়ার্কস্পেস", phShot: "আসল স্ক্রিনশট বা কাজের ছবি প্রয়োজন",
      foot: "\"যাচাই বাকি\" চিহ্নিত অংশ এখনও যাচাই হয়নি। © আব্দুল আজিজ কায়েস",
      alt: {
        hero: "ফুলে ভরা বাগানবিলাসের সামনে হাসিমুখে আব্দুল আজিজ কায়েস", intro: "লেকের পাশে দাঁড়িয়ে আব্দুল আজিজ কায়েস", about: "সন্ধ্যার আকাশের দিকে তাকিয়ে আব্দুল আজিজ কায়েস",
        edu: "ঢাকা কলেজ সায়েন্স ক্লাবের প্রতীকের পাশে আব্দুল আজিজ কায়েস", s1: "বইয়ের দোকানে বই পড়ছেন আব্দুল আজিজ কায়েস", s2: "রেলস্টেশনের প্ল্যাটফর্মে আব্দুল আজিজ কায়েস",
        mWater: "ঝরনার সামনে বসে আছেন আব্দুল আজিজ কায়েস", mLamp: "গোধূলিতে রাস্তার বাতির পাশে আব্দুল আজিজ কায়েস", mJersey: "ঘাসের উপর বসে আব্দুল আজিজ কায়েস",
        mKurta: "গোলাপি পাঞ্জাবিতে আব্দুল আজিজ কায়েস", mHaj: "সন্ধ্যায় হাজীগঞ্জে আব্দুল আজিজ কায়েস"
      },
      cs: {
        back: "← সব প্রকল্প", crumb: "কেস স্টাডি", pending: "রিপোজিটরি যাচাই ও নিশ্চিতকরণের অপেক্ষায়।",
        legI: "কোডে আছে", legP: "পরিকল্পিত", legC: "ধারণা",
        sections: ["প্রকল্পের সারসংক্ষেপ", "সমস্যা বা প্রয়োজন", "লক্ষ্য ব্যবহারকারী", "ধারণা ও প্রস্তাবিত সমাধান", "ফিচার", "আমার ভূমিকা ও অবদান", "প্রযুক্তি স্ট্যাক", "নির্বাচিত স্ক্রিনশট", "চ্যালেঞ্জ ও শেখা", "অবস্থা ও জানা সীমাবদ্ধতা", "লাইভ ডেমো ও গিটহাব", "সম্পর্কিত প্রকল্প"],
        demo: "লাইভ ডেমো ↗", repo: "গিটহাব ↗", noLinks: "এখনও কোনো যাচাইকৃত লিংক নেই।", related: "সম্পর্কিত", basis: "যার ভিত্তিতে", repoName: "রিপোজিটরির নাম",
        liveNote: "লাইভ লিংকগুলো রিপোজিটরি ও আমার গিটহাব প্রোফাইল থেকে নেওয়া, পেজ বানানোর সময় আবার যাচাই করা হয়নি।"
      },
      nf: { head: "৪০৪", copy: "এই পেজটি নেই।", home: "হোমপেজে ফিরুন" }
    }
  }
};
