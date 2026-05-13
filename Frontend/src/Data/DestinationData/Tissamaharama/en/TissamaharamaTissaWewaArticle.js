const TissamaharamaTissaWewaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Tissamaharama", to: "/places/tissamaharama" },
    { label: "Tissa Wewa" },
  ],

  hero: {
    kicker: "Ancient Reservoir",
    title: "Tissa Wewa",
    subtitle:
      "A vast ancient reservoir beside Tissamaharama, known for its irrigation history, birdlife, and scenic views surrounding the ancient Ruhuna capital.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Tissamaharama/tissa-wewa/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "An Ancient Reservoir of the Ruhuna Kingdom",
    paragraphs: [
      "Tissa Wewa is an ancient man-made reservoir located beside the historic town of Tissamaharama in southern Sri Lanka.",
      "Dating back to the 3rd century BCE, the reservoir played a vital role in supporting the ancient Ruhuna Kingdom through irrigation, water storage, and agriculture, while today it remains a scenic and ecologically important landmark.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history-and-construction",
      kicker: "Ancient Engineering",
      title: "History and Construction",
      align: "left",

      content: [
        {
          type: "p",
          text: "Tissa Wewa is considered one of the oldest and most significant irrigation reservoirs in the southern region of Sri Lanka.",
        },

        {
          type: "p",
          text: "The reservoir is closely associated with the ancient city of Mahagama, the historic capital of the Ruhuna Kingdom.",
        },

        {
          type: "split-paragraph",
          heading: "Origins of the Reservoir",
          headingLevel: "h3",

          paragraphs: [
            "The tank is traditionally believed to have been constructed during the 3rd century BCE.",
            "Historical traditions attribute its construction either to King Mahanaga of Ruhuna or to his successor King Yatala Tissa.",
            "The reservoir was created to provide irrigation for paddy cultivation and a stable water supply for the ancient city and surrounding monasteries.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Tissamaharama/tissa-wewa/ancient-reservoir.webp`,
          imageAlt: "Ancient reservoir landscape at Tissa Wewa",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "Its sophisticated water management system, including channels diverting water from the Kirindi Oya, is considered a remarkable achievement of ancient Sri Lankan hydraulic engineering.",
        },
      ],
    },

    {
      type: "text",
      id: "importance-and-function",
      kicker: "Ruhuna Kingdom",
      title: "Importance of Tissa Wewa",
      align: "left",

      content: [
        {
          type: "p",
          text: "Tissa Wewa was a core part of the ancient irrigation network that supported the agricultural economy of the Ruhuna Kingdom.",
        },

        {
          type: "h3",
          text: "Irrigation and Agriculture",
        },

        {
          type: "p",
          text: "The reservoir supplied water to extensive paddy fields surrounding Tissamaharama, helping sustain settlements and Buddhist monasteries across the region.",
        },

        {
          type: "p",
          text: "Its water system contributed to the prosperity of the southern kingdom for centuries.",
        },

        {
          type: "split-paragraph",
          heading: "Ancient Hydraulic System",
          headingLevel: "h3",

          paragraphs: [
            "The reservoir formed part of a wider network of ancient tanks in the Tissamaharama area.",
            "Nearby reservoirs such as Yoda Wewa and Debarawewa Wewa were connected through sophisticated irrigation planning.",
            "These interconnected reservoirs demonstrate the advanced engineering knowledge of ancient Sri Lankan kingdoms.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Tissamaharama/tissa-wewa/bund.webp`,
          imageAlt: "Bund and water system at Tissa Wewa",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "landscape-and-wildlife",
      kicker: "Nature & Scenery",
      title: "Landscape and Birdlife",
      align: "left",

      content: [
        {
          type: "p",
          text: "Today, Tissa Wewa is known not only for its historical significance but also for its calm scenery and abundant birdlife.",
        },

        {
          type: "p",
          text: "The reservoir forms a scenic backdrop to the white Tissamaharama Dagoba, especially during sunrise and sunset.",
        },

        {
          type: "split-paragraph",
          heading: "Wildlife Around the Reservoir",
          headingLevel: "h3",

          paragraphs: [
            "The lake and surrounding wetlands attract a variety of bird species, including egrets, herons, and water birds.",
            "Fruit bat colonies are also commonly seen in trees around the reservoir area.",
            "The peaceful bund surrounding the lake has become a popular place for walks, photography, and enjoying evening views.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Tissamaharama/tissa-wewa/birdlife.webp`,
          imageAlt: "Birdlife around Tissa Wewa",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "Because of its large open water surface and quiet surroundings, the reservoir remains one of the most recognizable landmarks in Tissamaharama.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Visiting Tissa Wewa",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Location:</strong> Just north of Tissamaharama town in Sri Lanka’s Southern Province.",
        },

        {
          type: "p",
          text: "<strong>Nearby Attractions:</strong> The reservoir is located close to the Tissamaharama Raja Maha Vihara and several ancient Buddhist archaeological sites.",
        },

        {
          type: "p",
          text: "<strong>Best Time to Visit:</strong> Early morning and late afternoon provide cooler temperatures and the best light for scenery and photography.",
        },

        {
          type: "split-paragraph",
          heading: "Travel Experience",
          headingLevel: "h3",

          paragraphs: [
            "Visitors often stop at the reservoir while traveling to Yala National Park or exploring the ancient Ruhuna region.",
            "The bund road provides wide views across the lake toward the surrounding countryside and temples.",
            "The area is especially peaceful in the evening when bird activity increases and the stupa reflects in the water.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Tissamaharama/tissa-wewa/evening-view.webp`,
          imageAlt: "Evening scenery at Tissa Wewa",
          mediaPosition: "left",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.28826904742486,81.28434945868194",
        },
      ],
    },
  ],
};

export default TissamaharamaTissaWewaArticle;