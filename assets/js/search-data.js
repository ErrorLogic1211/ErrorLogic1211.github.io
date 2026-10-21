// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed papers, NTIRE challenge reports, and work under review. Earlier work appears under the name Mohab M. Eid.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-started-my-direct-ph-d-in-electrical-and-computer-engineering-at-mcmaster-university-canada-under-the-supervision-of-prof-jun-chen",
          title: 'Started my direct Ph.D. in Electrical and Computer Engineering at McMaster University, Canada,...',
          description: "",
          section: "News",},{id: "news-4th-place-in-the-ntire-2024-dense-and-non-homogeneous-dehazing-challenge",
          title: '4th place in the NTIRE 2024 Dense and Non-Homogeneous Dehazing Challenge',
          description: "Our team, ITB Dehaze, placed 4th in the NTIRE 2024 Dense and Non-Homogeneous Dehazing Challenge at CVPR 2024.",
          section: "News",handler: () => {
              window.location.href = "/news/ntire2024-dehazing/";
            },},{id: "news-fedlane-published-in-scientific-reports",
          title: 'FedLane published in Scientific Reports',
          description: "FedLane, a federated learning system for lane segmentation on autonomous vehicles, is published in Scientific Reports.",
          section: "News",handler: () => {
              window.location.href = "/news/fedlane-scientific-reports/";
            },},{id: "news-2nd-place-in-the-ntire-2025-low-light-image-enhancement-challenge",
          title: '2nd place in the NTIRE 2025 Low Light Image Enhancement Challenge',
          description: "Our team, Imagine, placed 2nd with the highest PSNR in the NTIRE 2025 Low Light Image Enhancement Challenge at CVPR 2025.",
          section: "News",handler: () => {
              window.location.href = "/news/ntire2025-lowlight/";
            },},{id: "news-passed-my-ph-d-comprehensive-examination-at-mcmaster-university",
          title: 'Passed my Ph.D. comprehensive examination at McMaster University.',
          description: "",
          section: "News",},{id: "news-4th-and-5th-place-at-the-ntire-2026-challenges",
          title: '4th and 5th place at the NTIRE 2026 challenges',
          description: "RetinexDualV2 placed 4th in the NTIRE 2026 Raindrop Removal Challenge and 5th in the joint denoising and low-light enhancement track.",
          section: "News",handler: () => {
              window.location.href = "/news/ntire2026-results/";
            },},{id: "news-retinexdual-accepted-to-icpr-2026",
          title: 'RetinexDual accepted to ICPR 2026',
          description: "RetinexDual, a Retinex-based dual-branch network for ultra-high-definition image restoration, is accepted to ICPR 2026.",
          section: "News",handler: () => {
              window.location.href = "/news/retinexdual-icpr2026/";
            },},{id: "news-retinexdualv2-accepted-to-cvpr-2026-workshops",
          title: 'RetinexDualV2 accepted to CVPR 2026 Workshops',
          description: "RetinexDualV2, a physically grounded dual Retinex network for UHD image restoration, is accepted to the CVPR 2026 Workshops.",
          section: "News",handler: () => {
              window.location.href = "/news/retinexdualv2-cvprw2026/";
            },},{id: "news-presented-retinexdualv2-as-a-poster-at-the-cvpr-2026-ntire-workshop-in-denver-colorado",
          title: 'Presented RetinexDualV2 as a poster at the CVPR 2026 NTIRE Workshop in Denver,...',
          description: "",
          section: "News",},{id: "news-released-the-retinexdual-code-and-pre-trained-weights-for-all-four-uhd-restoration-tasks",
          title: 'Released the RetinexDual code and pre-trained weights for all four UHD restoration tasks....',
          description: "",
          section: "News",},{id: "news-presented-retinexdual-as-a-poster-at-icpr-2026-in-lyon-france-the-paper-is-now-available-in-the-proceedings-springer-lncs",
          title: 'Presented RetinexDual as a poster at ICPR 2026 in Lyon, France. The paper...',
          description: "",
          section: "News",},{
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
