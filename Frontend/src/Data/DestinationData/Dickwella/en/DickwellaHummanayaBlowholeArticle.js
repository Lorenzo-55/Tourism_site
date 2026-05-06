const HummanayaBlowholeArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Dickwella", to: "/places/dickwella" },
    { label: "Hummanaya Blowhole" },
  ],

  hero: {
    kicker: "Natural Wonder",
    title: "Hummanaya Blowhole",
    subtitle:
      "Sri Lanka’s only known blowhole, famous for its powerful sea spray and deep humming sound.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/HummanayaBlowhole/hummanaya1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Dramatic Coastal Phenomenon",
    paragraphs: [
      "The Hummanaya Blowhole is a spectacular natural phenomenon located near the small fishing village of Kudawella, close to the towns of Dikwella and Tangalle on Sri Lanka’s southern coast.",
      "It is renowned as the only known blowhole in Sri Lanka and is often cited as the second-largest blowhole in the world.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "features",
      kicker: "Key Features",
      title: "Key Features and Experience",
      align: "left",

      content: [
        {
          type: "split-paragraph",
          heading: "",
          headingLevel: "h4",

          paragraphs: [
            "<strong>The Phenomenon:</strong> A blowhole is a geological feature formed when a sea cave grows upward into a vertical shaft and eventually breaks through the land surface.",
            "When powerful waves crash into the cavern, the water and air inside are forcefully compressed and ejected upwards through the opening in the rock.",
            "<strong>The Water Spout:</strong> The resulting jet of seawater can reach impressive heights, often soaring between 25 to 30 meters (82 to 98 feet) high.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/HummanayaBlowhole/hummanaya2.webp`,
          imageAlt: "Water spout at Hummanaya Blowhole",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "<strong>The Sound:</strong> The name “Hummanaya” is derived from the distinct deep humming or “hoo” sound that can be heard from a distance just before the water erupts.",
        },
        {
          type: "p",
          text: "This sound is caused by air pressure building up inside the sea cave.",
        },
        {
          type: "p",
          text: "<strong>The Timing:</strong> The blowhole’s activity is highly dependent on the strength and mood of the sea.",
        },
        {
          type: "p",
          text: "The spout occurs at intervals of several minutes, so visitors need some patience to witness a truly massive eruption.",
        },
      ],
    },

    {
      type: "text",
      id: "best-time",
      kicker: "Best Time",
      title: "Best Time to Visit",
      align: "left",

      content: [
        {
          type: "p",
          text: "To see the most dramatic and highest water spouts, it is generally recommended to visit when the sea is active and the tide is high.",
        },
        {
          type: "p",
          text: "<strong>During High Tide:</strong> The hydraulic pressure is at its maximum when the tide is high.",
        },
        {
          type: "p",
          text: "<strong>During the Southwest Monsoon:</strong> The months between April and September, or sometimes May to August, typically bring rougher seas in this area.",
        },
        {
          type: "p",
          text: "These rougher sea conditions usually produce the most vigorous and highest eruptions.",
        },
        {
          type: "p",
          text: "<strong>Time of Day:</strong> Early morning or late afternoon visits are often advised to avoid the intense midday sun.",
        },
      ],
    },

    {
      type: "text",
      id: "visiting-information",
      kicker: "Visitor Information",
      title: "Location and Access",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Location:</strong> Kudawella village, near Dikwella and Tangalle in Sri Lanka’s Southern Province.",
        },
        {
          type: "p",
          text: "<strong>Access:</strong> From the main A2 road, turn off at Kudawella and walk about one kilometer toward the blowhole.",
        },
        {
          type: "p",
          text: "The walk usually passes through a scenic village area with local vendors along the way.",
        },
        {
          type: "p",
          text: "The final part involves a short climb up a few steps to reach the viewing platform.",
        },
        {
          type: "p",
          text: "<strong>Facilities:</strong> There is typically a small entrance fee for foreign visitors, and local vendors often sell refreshments and snacks along the pathway.",
        },
        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=XPHQ%2B2FG%2C%20Kudawella%2C%20Sri%20Lanka",
        },
      ],
    },
  ],
};

export default HummanayaBlowholeArticle;