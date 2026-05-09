const KataragamaTissaWewaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Kataragama", to: "/places/kataragama" },
    { label: "Tissa Wewa" },
  ],

  hero: {
    kicker: "Nature & Heritage",
    title: "Tissa Wewa",
    subtitle:
      "An ancient reservoir near Tissamaharama, known for peaceful lake scenery, birdwatching, rain trees, and sunset views.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kataragama/tissa-wewa/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Ancient Lake and Scenic Safari Base",
    paragraphs: [
      "Tissa Wewa, also known as Tissa Lake, is a large ancient man-made reservoir in southern Sri Lanka.",
      "Located near Tissamaharama, it is a peaceful place for sunrise and sunset views, birdwatching, boat rides, and photography, especially for travellers using the area as a base for Yala National Park safaris.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history-and-setting",
      kicker: "Ancient Reservoir",
      title: "History and Setting",
      align: "left",

      content: [
        {
          type: "p",
          text: "Tissa Wewa was built in the 3rd century BCE and is traditionally associated with King Yatala Tissa or Mahanaga of the ancient Ruhuna Kingdom.",
        },

        {
          type: "p",
          text: "The reservoir formed an important part of the region’s irrigation system and continues to shape the landscape around Tissamaharama today.",
        },

        {
          type: "split-paragraph",
          heading: "Peaceful Lake Scenery",
          headingLevel: "h3",

          paragraphs: [
            "The lake is especially beautiful during sunrise and sunset, when the water reflects the surrounding trees, birds, and distant landmarks.",
            "One of the most iconic views is the reflection of the white Tissamaharama Raja Maha Vihara stupa across the water.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kataragama/tissa-wewa/lake-view.webp`,
          imageAlt: "Tissa Wewa lake near Tissamaharama",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "wildlife-and-activities",
      kicker: "Birdwatching",
      title: "Wildlife and Activities",
      align: "left",

      content: [
        {
          type: "p",
          text: "Tissa Wewa is a rewarding stop for nature lovers, especially visitors interested in birds, lake scenery, and quiet photography locations.",
        },

        {
          type: "p",
          text: "<strong>Birdwatching:</strong> Pelicans, egrets, kingfishers, and other water birds are commonly seen around the lake.",
        },

        {
          type: "p",
          text: "<strong>Boat Rides:</strong> Scenic boat rides are available and usually cost around LKR 2,000–3,000.",
        },

        {
          type: "p",
          text: "<strong>Flying Foxes:</strong> Large colonies of fruit bats hang from the lakeside trees during the day and fly out in large numbers around sunset.",
        },

        {
          type: "split-paragraph",
          heading: "The Tree-Lined Bund",
          headingLevel: "h3",

          paragraphs: [
            "The southern bund of Tissa Wewa is famous for its huge old rain trees, also known as Indian Rain Trees.",
            "These trees form a shaded green canopy over the road and are one of the most recognizable features of the lake area.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kataragama/tissa-wewa/rain-tree-road.webp`,
          imageAlt: "Tree-lined road along Tissa Wewa",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Planning Your Visit",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Entrance Fee:</strong> Free.",
        },

        {
          type: "p",
          text: "<strong>Best Time:</strong> Early morning or sunset for cooler weather, bird activity, and softer light.",
        },

        {
          type: "p",
          text: "<strong>Gateway to Yala:</strong> Many travellers stay in Tissamaharama because it is a convenient base for safaris to Yala National Park.",
        },

        {
          type: "p",
          text: "Tissa Wewa is best visited slowly, either by walking along the lake edge, taking a short boat ride, or stopping at sunset to watch birds and flying foxes over the water.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.291724264204276,81.28104497730517",
        },
      ],
    },
  ],
};

export default KataragamaTissaWewaArticle;