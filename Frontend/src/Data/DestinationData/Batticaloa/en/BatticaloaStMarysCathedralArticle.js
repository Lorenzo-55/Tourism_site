const StMarysCathedralArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Batticaloa", to: "/places/batticaloa" },
    { label: "St. Mary's Cathedral" },
  ],

  hero: {
    kicker: "Religious Landmark",
    title: "St. Mary's Cathedral",
    subtitle:
      "An important Catholic landmark reflecting the religious and cultural heritage of Sri Lanka’s Eastern Province.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Batticaloa/stmarys1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Historic Cathedral in Batticaloa",
    paragraphs: [
      "St. Mary’s Cathedral in Batticaloa is an important religious and historical landmark located on Puliyantivu Island in the center of the city.",
      "The cathedral stands as a symbol of the Catholic heritage of Sri Lanka’s Eastern Province and remains an active place of worship and community life.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history-architecture",
      kicker: "History",
      title: "History and Architecture",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Origin",
        },

        {
          type: "p",
          text: "The first church on this site was built in 1808 by Paschal Mudaliyar.",
        },

        {
          type: "p",
          text: "Part of this original structure can still be seen today as the sacristy of the current cathedral.",
        },

        {
          type: "h3",
          text: "Current Building",
        },

        {
          type: "p",
          text: "Construction of the present cathedral began in 1874.",
        },

        {
          type: "p",
          text: "The church was elevated to co-cathedral status in 1967.",
        },

        {
          type: "p",
          text: "In 2012, it became the cathedral of the newly established Diocese of Batticaloa.",
        },

        {
          type: "split-paragraph",
          heading: "Architectural Style",
          headingLevel: "h4",

          paragraphs: [
            "The cathedral combines Gothic and neoclassical architectural influences.",
            "Its most recognizable features include pointed arches, stained-glass windows, and an imposing façade.",
            "The interior reflects a traditional Catholic church design with ornate decorative elements and a calm, contemplative atmosphere.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Batticaloa/stmarys2.webp`,
          imageAlt: "St. Mary's Cathedral in Batticaloa",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "things-to-see",
      kicker: "Visitor Experience",
      title: "What to See and Do",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Exploring the Building",
        },

        {
          type: "p",
          text: "The cathedral is a peaceful location for quiet reflection and appreciating its architecture.",
        },

        {
          type: "p",
          text: "Visitors can explore both the imposing exterior and the ornate interior spaces.",
        },

        {
          type: "h3",
          text: "Cultural and Religious Importance",
        },

        {
          type: "p",
          text: "St. Mary’s Cathedral continues to play an important role in the religious, social, and cultural life of the local Catholic community.",
        },

        {
          type: "p",
          text: "Visitors may attend regular services and observe the atmosphere of devotion and worship within the cathedral.",
        },

        {
          type: "split-paragraph",
          heading: "Location",
          headingLevel: "h4",

          paragraphs: [
            "The cathedral is located on Puliyantivu Island in the center of Batticaloa.",
            "It is within walking distance of the Dutch Fort of Batticaloa, making it easy to combine both sites in a single visit.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Batticaloa/stmarys3.webp`,
          imageAlt: "Interior of St. Mary's Cathedral Batticaloa",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Admission and Etiquette",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Admission:</strong> The cathedral is generally open to the public and entry is free.",
        },

        {
          type: "p",
          text: "<strong>Dress Code:</strong> As an active religious site, visitors should dress and behave respectfully.",
        },

        {
          type: "p",
          text: "<strong>Nearby Attractions:</strong> The Dutch Fort of Batticaloa is located nearby and is commonly visited together with the cathedral.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=PM6W%2BWCV%2C%20Batticaloa%2C%20Sri%20Lanka",
        },
      ],
    },
  ],
};

export default StMarysCathedralArticle;