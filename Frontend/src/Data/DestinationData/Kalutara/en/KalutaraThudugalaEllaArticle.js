const KalutaraThudugalaEllaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Kalutara", to: "/places/kalutara" },
    { label: "Thudugala Ella" },
  ],

  hero: {
    kicker: "Waterfall & Nature",
    title: "Thudugala Ella",
    subtitle:
      "A forest waterfall in the Kalutara District known for its natural bathing pool, colonial estate ruins, and peaceful jungle setting.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kalutara/thudugala-ella/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Hidden Waterfall Near Kalutara",
    paragraphs: [
      "Thudugala Ella, also known as Thudugala Waterfall, is a scenic natural attraction located in the Kalutara District near Dodangoda and the Kalu River region.",
      "Surrounded by forest and old plantation land, the waterfall is popular for its natural swimming pool, peaceful atmosphere, and traces of colonial-era estate history.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "waterfall-overview",
      kicker: "The Waterfall",
      title: "Thudugala Ella and Its Natural Pool",
      align: "left",

      content: [
        {
          type: "p",
          text: "Thudugala Ella is a two-tiered waterfall with a total height of around 14 meters.",
        },

        {
          type: "p",
          text: "The upper section measures approximately 8 meters, while the lower cascade drops around 6 meters into the bathing area below.",
        },

        {
          type: "split-paragraph",
          heading: "Natural Swimming Area",
          headingLevel: "h4",

          paragraphs: [
            "The main attraction for most visitors is the natural swimming pool formed at the base of the falls.",
            "The pool is especially popular with local visitors looking for a refreshing bathing spot surrounded by forest scenery.",
            "The calm environment and shaded surroundings make it one of the more relaxing waterfall locations near the western coast.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/thudugala-ella/natural-pool.webp`,
          imageAlt: "Natural swimming pool at Thudugala Ella",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "<strong>Unique Feature:</strong> A small tunnel runs beneath part of the waterfall and emerges near the upper tier, adding to the site’s unusual character.",
        },
      ],
    },

    {
      type: "text",
      id: "estate-history",
      kicker: "Colonial History",
      title: "The Old Estate and Ruins",
      align: "left",

      content: [
        {
          type: "p",
          text: "The waterfall lies within the former Thudugala Estate, which was once owned by a British colonial planter.",
        },

        {
          type: "split-paragraph",
          heading: "Estate Remains",
          headingLevel: "h4",

          paragraphs: [
            "Visitors can still see the ruins of the old planter’s bungalow hidden among the greenery.",
            "A derelict rubber factory also survives nearby, reflecting the plantation history of the region.",
            "These abandoned structures give the area a quiet historical atmosphere alongside its natural scenery.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/thudugala-ella/estate-ruins.webp`,
          imageAlt: "Colonial estate ruins near Thudugala Ella",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "The surrounding landscape is filled with rubber plantations and dense vegetation, creating a secluded jungle-like environment.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-tips",
      kicker: "Travel Tips",
      title: "Getting There and Visiting Tips",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Location:</strong> Thudugala village, Dodangoda Divisional Secretariat, Kalutara District.",
        },

        {
          type: "p",
          text: "<strong>Distance from Kalutara:</strong> Approximately 15–20 km inland from Kalutara town.",
        },

        {
          type: "p",
          text: "<strong>Getting There:</strong> Most visitors travel via the Matugama Road to Thudugala Junction before continuing by tuk-tuk or on foot through the estate roads.",
        },

        {
          type: "split-paragraph",
          heading: "Important Tips",
          headingLevel: "h4",

          paragraphs: [
            "<strong>Best Time:</strong> The waterfall is usually strongest during the rainy season from May to November.",
            "<strong>Weekdays:</strong> Generally quieter and less crowded than weekends and holidays.",
            "<strong>Access Point:</strong> For the scenic natural pool, follow the road crossing the small bridge toward the original estate area.",
            "<strong>Facilities:</strong> Public facilities are limited, so visitors should bring essentials and take all trash back with them.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/thudugala-ella/forest-path.webp`,
          imageAlt: "Forest pathway leading to Thudugala Ella",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "<strong>Safety:</strong> Rocks can become slippery after rain, so caution is recommended near the water.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.571154618617028,80.0608116008559",
        },
      ],
    },
  ],
};

export default KalutaraThudugalaEllaArticle;