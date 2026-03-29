// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Open-source projects and software I have contributed to.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Education, experience, awards, and more.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses I have been a teaching assistant for.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-paper-byzantine-protocols-with-asymptotically-optimal-communication-complexity-is-accepted-by-securecomm-2023",
          title: 'Paper Byzantine Protocols with Asymptotically Optimal Communication Complexity is accepted by SecureComm’2023.',
          description: "",
          section: "News",},{id: "news-formally-become-a-ph-d-student-at-uc-davis-advised-by-prof-mohammad-sadoghi",
          title: 'Formally become a Ph.D. student at UC Davis advised by Prof. Mohammad Sadoghi....',
          description: "",
          section: "News",},{id: "news-paper-ladon-high-performance-multi-bft-consensus-via-dynamic-global-ordering-is-accepted-by-eurosys-2025",
          title: 'Paper Ladon: High-Performance Multi-BFT Consensus via Dynamic Global Ordering is accepted by EuroSys’2025....',
          description: "",
          section: "News",},{id: "news-paper-fides-scalable-censorship-resistant-dag-consensus-via-trusted-components-arxiv-preprint-is-now-available",
          title: 'Paper Fides: Scalable Censorship-Resistant DAG Consensus via Trusted Components arXiv preprint is now...',
          description: "",
          section: "News",},{id: "news-paper-orthrus-accelerating-multi-bft-consensus-through-concurrent-partial-ordering-of-transactions-is-accepted-by-icde-2025",
          title: 'Paper Orthrus: Accelerating Multi-BFT Consensus through Concurrent Partial Ordering of Transactions is accepted...',
          description: "",
          section: "News",},{id: "news-paper-hydra-breaking-the-global-ordering-barrier-in-multi-bft-consensus-is-accepted-by-icde-2026",
          title: 'Paper Hydra: Breaking the Global Ordering Barrier in Multi-BFT Consensus is accepted by...',
          description: "",
          section: "News",},{id: "projects-invasion-code-name-x",
          title: 'Invasion Code Name X',
          description: "A small-scale PVP MOBA game developed using C# and Unity engine during NUS Summer Workshop 2022.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/invasion-code-name-x/";
            },},{id: "projects-online-course-learning-platform",
          title: 'Online Course Learning Platform',
          description: "An online learning platform with video storage, live streaming, assignment submission, and permission management.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/online-course-platform/";
            },},{id: "projects-rescanvas",
          title: 'ResCanvas',
          description: "A decentralized drawing application built on top of ResilientDB.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rescanvas/";
            },},{id: "projects-apache-resilientdb",
          title: 'Apache ResilientDB',
          description: "Podling Project Management Committee (PPMC) member. Conducting research on a resilient data platform and helping maintain the system.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/resilientdb/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%6B%78%69%65@%75%63%64%61%76%69%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ziRt4M8AAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ShaokangXie", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/Shaokang-Xie", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Shaokang-Xie/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
