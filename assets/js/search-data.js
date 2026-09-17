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
          title: "Publications",
          description: "Papers and presentation materials, by year.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Open-source systems and selected software projects.",
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
        },{id: "nav-teaching-amp-service",
          title: "Teaching &amp; Service",
          description: "Teaching experience and academic service.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-our-paper-byzantine-protocols-with-asymptotically-optimal-communication-complexity-has-been-accepted-at-eai-securecomm-2023",
          title: 'Our paper Byzantine Protocols with Asymptotically Optimal Communication Complexity has been accepted at...',
          description: "",
          section: "News",},{id: "news-i-joined-uc-davis-as-a-ph-d-student-advised-by-prof-mohammad-sadoghi",
          title: 'I joined UC Davis as a Ph.D. student, advised by Prof. Mohammad Sadoghi....',
          description: "",
          section: "News",},{id: "news-our-paper-ladon-high-performance-multi-bft-consensus-via-dynamic-global-ordering-has-been-accepted-at-acm-eurosys-2025",
          title: 'Our paper Ladon: High-Performance Multi-BFT Consensus via Dynamic Global Ordering has been accepted...',
          description: "",
          section: "News",},{id: "news-our-preprint-fides-scalable-censorship-resistant-dag-consensus-via-trusted-components-is-now-available-on-arxiv",
          title: 'Our preprint Fides: Scalable Censorship-Resistant DAG Consensus via Trusted Components is now available...',
          description: "",
          section: "News",},{id: "news-our-paper-orthrus-accelerating-multi-bft-consensus-through-concurrent-partial-ordering-of-transactions-has-been-accepted-at-ieee-icde-2025",
          title: 'Our paper Orthrus: Accelerating Multi-BFT Consensus through Concurrent Partial Ordering of Transactions has...',
          description: "",
          section: "News",},{id: "news-our-paper-hydra-breaking-the-global-ordering-barrier-in-multi-bft-consensus-has-been-accepted-at-ieee-icde-2026",
          title: 'Our paper Hydra: Breaking the Global Ordering Barrier in Multi-BFT Consensus has been...',
          description: "",
          section: "News",},{id: "news-i-passed-my-ph-d-qualifying-examination-and-advanced-to-ph-d-candidacy-at-uc-davis",
          title: 'I passed my Ph.D. qualifying examination and advanced to Ph.D. candidacy at UC...',
          description: "",
          section: "News",},{id: "news-our-preprint-cassandra-consensus-with-partial-progress-via-robust-partitionable-view-synchronization-is-now-available-on-arxiv",
          title: 'Our preprint Cassandra: Consensus with Partial Progress via Robust Partitionable View Synchronization is...',
          description: "",
          section: "News",},{id: "news-our-paper-fides-scalable-censorship-resistant-dag-consensus-via-trusted-components-has-been-accepted-at-vldb-2026",
          title: 'Our paper Fides: Scalable Censorship-Resistant DAG Consensus via Trusted Components has been accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-cassandra-consensus-with-partial-progress-via-robust-partitionable-view-synchronization-has-been-accepted-at-vldb-2027",
          title: 'Our paper Cassandra: Consensus with Partial Progress via Robust Partitionable View Synchronization has...',
          description: "",
          section: "News",},{id: "news-presentation-materials-are-now-available-for-fides-at-vldb-2026-poster-slides-and-hydra-at-ieee-icde-2026-poster-slides",
          title: 'Presentation materials are now available for Fides at VLDB 2026 (poster, slides) and...',
          description: "",
          section: "News",},{id: "news-i-am-leading-the-upcoming-apache-resilientdb-v1-13-0-release",
          title: 'I am leading the upcoming Apache ResilientDB v1.13.0 release.',
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
            },},{id: "projects-apache-resilientdb",
          title: 'Apache ResilientDB',
          description: "A Byzantine fault-tolerant distributed ledger. PPMC member and release lead for v1.13.0, scheduled for September 30, 2026.",
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
      },];
