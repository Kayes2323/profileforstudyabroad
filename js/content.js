/* All site content lives here, separate from presentation.
   Text is { en, bn }. A value of null means "not verified yet": the page shows a visible placeholder
   instead of inventing anything. See README.md for how to add or update a project. */
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
    hero: "assets/img/hero.webp",
    intro: "assets/img/intro.jpg",
    about: "assets/img/about.jpg",
    edu: "assets/img/edu.jpg",
    skills: ["assets/img/skills-1.jpg", "assets/img/skills-2.jpg"]
  },

  education: [
    { id: "hsc", year: "2024" },
    { id: "ssc", year: null }
  ],

  /* Fill in only after the repository audit or the owner's confirmation. */
  contact: { github: null, linkedin: null, email: null, other: [] },

  statusLabels: {
    unverified: { en: "Status: not yet verified", bn: "অবস্থা: এখনও যাচাই হয়নি" },
    prototype: { en: "Status: prototype", bn: "অবস্থা: প্রোটোটাইপ" },
    active: { en: "Status: in active development", bn: "অবস্থা: সক্রিয় উন্নয়নে" },
    complete: { en: "Status: implemented", bn: "অবস্থা: বাস্তবায়িত" },
    deployed: { en: "Status: deployed", bn: "অবস্থা: ডিপ্লয় করা" }
  },

  /* Add a project by copying one entry. Slugs are used in project.html#slug. */
  projects: [
    { slug: "sondhan", name: "Sondhan", status: "unverified", category: null, summary: null, problem: null, users: null, concept: null,
      implemented: [], planned: [], role: null, tech: [], shots: [], challenges: null, limitations: null,
      links: { demo: null, repo: null }, related: ["vocabrain", "move"] },
    { slug: "vocabrain", name: "Vocabrain", status: "unverified", category: null, summary: null, problem: null, users: null, concept: null,
      implemented: [], planned: [], role: null, tech: [], shots: [], challenges: null, limitations: null,
      links: { demo: null, repo: null }, related: ["sondhan", "furqan"] },
    { slug: "move", name: "MOVE", status: "unverified", category: null, summary: null, problem: null, users: null, concept: null,
      implemented: [], planned: [], role: null, tech: [], shots: [], challenges: null, limitations: null,
      links: { demo: null, repo: null }, related: ["determind", "sondhan"] },
    { slug: "furqan", name: "Furqan", status: "unverified", category: null, summary: null, problem: null, users: null, concept: null,
      implemented: [], planned: [], role: null, tech: [], shots: [], challenges: null, limitations: null,
      links: { demo: null, repo: null }, related: ["vocabrain", "bazare"] },
    { slug: "determind", name: "DeterMind", status: "unverified", category: null, summary: null, problem: null, users: null, concept: null,
      implemented: [], planned: [], role: null, tech: [], shots: [], challenges: null, limitations: null,
      links: { demo: null, repo: null }, related: ["move", "bazare"] },
    { slug: "bazare", name: "Bazare", status: "unverified", category: null, summary: null, problem: null, users: null, concept: null,
      implemented: [], planned: [], role: null, tech: [], shots: [], challenges: null, limitations: null,
      links: { demo: null, repo: null }, related: ["furqan", "determind"] }
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
        ["Frontend development", "Verified technologies: pending audit"],
        ["Backend, database and APIs", "Verified technologies: pending audit"],
        ["AI-assisted workflow", "How it was used per project: pending"],
        ["UI/UX and responsive design", "Real-project examples: pending audit"],
        ["Deployment and tools", "Verified tools: pending audit"]
      ],
      bHead: "What I build", bL1: "Product Building", bL2: "Web Development",
      pHead: "Portfolio", pScript: "Projects",
      pIntro: "Six projects, added only after each is checked against its repository and live demo.",
      pjScript: "Project", caseLink: "Case study →", catPending: "Category: to be confirmed",
      cHead: "Let's work", cScript: "Together",
      cCopy: "Open to relevant conversations and collaboration. Profile links will be added once supplied.",
      mail: "Email", tbp: "To be provided",
      phDesk: "Photo needed: your desk or workspace", phShot: "Authentic screenshot or work photo needed",
      foot: "Content marked as pending is not yet verified. © Abdul Aziz Kayes",
      alt: {
        hero: "Abdul Aziz Kayes", intro: "Abdul Aziz Kayes standing by a lake", about: "Abdul Aziz Kayes looking up at the evening sky",
        edu: "Abdul Aziz Kayes beside the Dhaka College Science Club emblem", s1: "Abdul Aziz Kayes reading a book in a bookshop", s2: "Abdul Aziz Kayes at a railway platform",
        mWater: "Abdul Aziz Kayes sitting in front of a waterfall", mLamp: "Abdul Aziz Kayes beside a street lamp at dusk", mJersey: "Abdul Aziz Kayes sitting on grass",
        mKurta: "Abdul Aziz Kayes in a pink kurta", mHaj: "Abdul Aziz Kayes in the evening in Hajiganj"
      },
      cs: {
        back: "← All projects", crumb: "Case study", pending: "Pending repository audit and confirmation.",
        legI: "Implemented", legP: "Planned", legC: "Concept",
        sections: ["Project overview", "The problem or need", "Target users", "Concept and proposed solution", "Features", "My role and contribution", "Technology stack", "Selected screenshots", "Challenges and lessons learned", "Status and known limitations", "Live demo and GitHub", "Related projects"],
        demo: "Live demo", repo: "GitHub", noLinks: "No verified links yet.", related: "Related"
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
        ["ফ্রন্টএন্ড ডেভেলপমেন্ট", "যাচাইকৃত প্রযুক্তি: যাচাই বাকি"],
        ["ব্যাকএন্ড, ডেটাবেস ও এপিআই", "যাচাইকৃত প্রযুক্তি: যাচাই বাকি"],
        ["এআই-সহায়ক কাজের ধারা", "প্রতিটি প্রকল্পে ব্যবহার: যাচাই বাকি"],
        ["ইউআই/ইউএক্স ও রেসপনসিভ ডিজাইন", "বাস্তব প্রকল্পের উদাহরণ: যাচাই বাকি"],
        ["ডিপ্লয়মেন্ট ও টুল", "যাচাইকৃত টুল: যাচাই বাকি"]
      ],
      bHead: "যা বানাই", bL1: "পণ্য নির্মাণ", bL2: "ওয়েব ডেভেলপমেন্ট",
      pHead: "পোর্টফোলিও", pScript: "প্রকল্প",
      pIntro: "ছয়টি প্রকল্প, প্রতিটির রিপোজিটরি ও লাইভ ডেমো যাচাইয়ের পরেই যোগ হবে।",
      pjScript: "প্রকল্প", caseLink: "কেস স্টাডি →", catPending: "বিভাগ: নিশ্চিত করা হবে",
      cHead: "চলুন কাজ করি", cScript: "একসাথে",
      cCopy: "প্রাসঙ্গিক আলোচনা ও সহযোগিতার জন্য উন্মুক্ত। প্রোফাইল লিংক পাওয়ার পর যোগ হবে।",
      mail: "ইমেইল", tbp: "পরে দেওয়া হবে",
      phDesk: "ছবি প্রয়োজন: আপনার ডেস্ক বা ওয়ার্কস্পেস", phShot: "আসল স্ক্রিনশট বা কাজের ছবি প্রয়োজন",
      foot: "\"যাচাই বাকি\" চিহ্নিত অংশ এখনও যাচাই হয়নি। © আব্দুল আজিজ কায়েস",
      alt: {
        hero: "আব্দুল আজিজ কায়েস", intro: "লেকের পাশে দাঁড়িয়ে আব্দুল আজিজ কায়েস", about: "সন্ধ্যার আকাশের দিকে তাকিয়ে আব্দুল আজিজ কায়েস",
        edu: "ঢাকা কলেজ সায়েন্স ক্লাবের প্রতীকের পাশে আব্দুল আজিজ কায়েস", s1: "বইয়ের দোকানে বই পড়ছেন আব্দুল আজিজ কায়েস", s2: "রেলস্টেশনের প্ল্যাটফর্মে আব্দুল আজিজ কায়েস",
        mWater: "ঝরনার সামনে বসে আছেন আব্দুল আজিজ কায়েস", mLamp: "গোধূলিতে রাস্তার বাতির পাশে আব্দুল আজিজ কায়েস", mJersey: "ঘাসের উপর বসে আব্দুল আজিজ কায়েস",
        mKurta: "গোলাপি পাঞ্জাবিতে আব্দুল আজিজ কায়েস", mHaj: "সন্ধ্যায় হাজীগঞ্জে আব্দুল আজিজ কায়েস"
      },
      cs: {
        back: "← সব প্রকল্প", crumb: "কেস স্টাডি", pending: "রিপোজিটরি যাচাই ও নিশ্চিতকরণের অপেক্ষায়।",
        legI: "বাস্তবায়িত", legP: "পরিকল্পিত", legC: "ধারণা",
        sections: ["প্রকল্পের সারসংক্ষেপ", "সমস্যা বা প্রয়োজন", "লক্ষ্য ব্যবহারকারী", "ধারণা ও প্রস্তাবিত সমাধান", "ফিচার", "আমার ভূমিকা ও অবদান", "প্রযুক্তি স্ট্যাক", "নির্বাচিত স্ক্রিনশট", "চ্যালেঞ্জ ও শেখা", "অবস্থা ও জানা সীমাবদ্ধতা", "লাইভ ডেমো ও গিটহাব", "সম্পর্কিত প্রকল্প"],
        demo: "লাইভ ডেমো", repo: "গিটহাব", noLinks: "এখনও কোনো যাচাইকৃত লিংক নেই।", related: "সম্পর্কিত"
      },
      nf: { head: "৪০৪", copy: "এই পেজটি নেই।", home: "হোমপেজে ফিরুন" }
    }
  }
};
