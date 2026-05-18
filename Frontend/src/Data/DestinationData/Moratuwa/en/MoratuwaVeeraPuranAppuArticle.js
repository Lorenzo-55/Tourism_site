const MoratuwaVeeraPuranAppuArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Moratuwa", to: "/places/moratuwa" },
    { label: "Veera Puran Appu Museum & Monument" },
  ],

  hero: {
    kicker: "Colonial History",
    title: "Veera Puran Appu Museum & Monument",
    subtitle:
      "A tribute to one of Sri Lanka’s most celebrated anti-colonial heroes and Moratuwa’s most famous historical figure.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Moratuwa/veera-puran-appu/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Remembering a National Hero",
    paragraphs: [
      "The Veera Puran Appu Museum and Monument in Moratuwa commemorates one of Sri Lanka’s most important anti-colonial figures and preserves the memory of the 1848 Matale Rebellion.",
      "For Moratuwa, the site is a major point of local pride, honoring a man whose resistance against British colonial rule made him a national hero in Sri Lankan history.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "who-was-veera-puran-appu",
      kicker: "Historical Figure",
      title: "Who Was Veera Puran Appu?",
      align: "left",

      content: [
        {
          type: "p",
          text: "Veera Puran Appu was born in Moratuwa in 1812 as Weerahannadige Francisco Fernando.",
        },

        {
          type: "p",
          text: "He later became widely known as Veera Puran Appu and emerged as one of the strongest symbols of resistance against British colonial rule in 19th-century Sri Lanka.",
        },

        {
          type: "split-paragraph",
          heading: "The 1848 Matale Rebellion",
          headingLevel: "h4",

          paragraphs: [
            "Veera Puran Appu became a leading figure in the Matale Rebellion of 1848 alongside Gongalegoda Banda.",
            "The uprising was largely driven by public anger over oppressive British taxation, forced labor systems, and colonial economic policies.",
            "Although the rebellion was eventually suppressed, Puran Appu’s courage and leadership turned him into one of Sri Lanka’s enduring national heroes.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Moratuwa/veera-puran-appu/puran-appu-statue.webp`,
          imageAlt: "Monument dedicated to Veera Puran Appu",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "After the rebellion failed, Veera Puran Appu was captured and executed by the British. His sacrifice became an important symbol of resistance and patriotism in Sri Lankan history.",
        },
      ],
    },

    {
      type: "text",
      id: "museum-and-monument",
      kicker: "Museum & Memorial",
      title: "The Museum and Monument in Moratuwa",
      align: "left",

      content: [
        {
          type: "p",
          text: "Moratuwa preserves the memory of Veera Puran Appu through both a museum and a public monument dedicated to his life and legacy.",
        },

        {
          type: "p",
          text: "<strong>The Museum:</strong> The museum is generally associated with the Weera Puran Appu Vidyalaya on New Galle Road and contains documents, historical materials, and exhibits connected to his role in the anti-colonial struggle.",
        },

        {
          type: "p",
          text: "<strong>The Monument:</strong> A commemorative monument or statue near the Moratuwa Municipal Council area honors him as Moratuwa’s most famous historical figure.",
        },

        {
          type: "split-paragraph",
          heading: "A Window Into Colonial-Era Sri Lanka",
          headingLevel: "h4",

          paragraphs: [
            "Visiting the museum provides insight into Sri Lanka’s political and social conditions during the mid-19th century.",
            "The exhibits reflect the hardships faced under colonial rule and the sacrifices made by local leaders who resisted British authority.",
            "For many visitors, the site is both educational and symbolic, linking Moratuwa directly to one of the country’s defining anti-colonial movements.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Moratuwa/veera-puran-appu/museum.webp`,
          imageAlt: "Veera Puran Appu Museum in Moratuwa",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "connection-to-matale",
      kicker: "Historical Context",
      title: "The Connection to Matale",
      align: "left",

      content: [
        {
          type: "p",
          text: "Although Veera Puran Appu was born in Moratuwa, the major events of the rebellion itself unfolded in the Central Province, especially around Matale.",
        },

        {
          type: "p",
          text: "The decisive confrontations with British forces, as well as his eventual capture and execution, took place during the Matale campaign.",
        },

        {
          type: "p",
          text: "Matale today also contains major memorials connected to the 1848 uprising, including monuments dedicated to Veera Puran Appu and Gongalegoda Banda.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Visiting the Site",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Location:</strong> The museum and memorial are located in Moratuwa, near the New Galle Road and Moratuwa Municipal Council area.",
        },

        {
          type: "p",
          text: "<strong>Experience:</strong> The site is best visited by travelers interested in Sri Lankan history, anti-colonial movements, and local heritage.",
        },

        {
          type: "p",
          text: "<strong>Atmosphere:</strong> The memorial area is relatively quiet and mainly visited by locals, students, and those interested in national history.",
        },

        {
          type: "p",
          text: "<strong>Nearby Context:</strong> The site can easily be combined with visits to Bolgoda Lake, Lunawa Beach, and other Moratuwa attractions.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.787217219861209,79.87931596619968",
        },
      ],
    },
  ],
};

export default MoratuwaVeeraPuranAppuArticle;