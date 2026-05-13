const TrincomaleeDolphinWatchingArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Trincomalee", to: "/places/trincomalee" },
    { label: "Dolphin Watching" },
  ],

  hero: {
    kicker: "Marine Wildlife",
    title: "Dolphin Watching",
    subtitle:
      "Early morning boat trips from Trincomalee, Nilaveli, and Uppuveli to see spinner dolphins, bottlenose dolphins, and occasional whales.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Trincomalee/dolphin-watching/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "One of Sri Lanka’s Best Dolphin Watching Areas",
    paragraphs: [
      "Trincomalee is one of Sri Lanka’s leading destinations for dolphin watching, helped by deep offshore submarine canyons that bring marine life close to the coast.",
      "Boat tours usually leave early in the morning from Nilaveli or Uppuveli, when the sea is calmer and dolphins are most active.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "best-time",
      kicker: "Season",
      title: "Best Time to Go",
      align: "left",

      content: [
        {
          type: "p",
          text: "The best time for dolphin watching in Trincomalee is during the east coast marine season, when the sea is calmer and visibility is better.",
        },

        {
          type: "split-paragraph",
          heading: "Peak Dolphin Watching Season",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Peak Season:</strong> March to September is generally the ideal window for dolphin watching around Trincomalee.",
            "During these months, the sea is usually calmer, boat rides are smoother, and wildlife sightings are more reliable.",
            "<strong>Best Time of Day:</strong> Tours usually start between 5:30 AM and 6:30 AM, returning by around 9:00 AM before the heat becomes intense.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Trincomalee/dolphin-watching/early-morning-sea.webp`,
          imageAlt: "Early morning sea near Trincomalee",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "what-you-see",
      kicker: "Marine Life",
      title: "What You Might See",
      align: "left",

      content: [
        {
          type: "p",
          text: "The main highlight of dolphin watching in Trincomalee is the spinner dolphin, famous for its energetic leaps and spinning movements above the water.",
        },

        {
          type: "split-paragraph",
          heading: "Dolphins and Whales",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Spinner Dolphins:</strong> The most commonly seen species, often traveling in lively groups and performing acrobatic jumps.",
            "<strong>Bottlenose Dolphins:</strong> Often curious and sometimes seen swimming close to boats.",
            "<strong>Risso’s and Fraser’s Dolphins:</strong> More likely to appear in deeper offshore waters.",
            "<strong>Whales:</strong> Dolphin tours may sometimes overlap with whale sightings, including Blue Whales and Sperm Whales, especially between March and May.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Trincomalee/dolphin-watching/spinner-dolphins.webp`,
          imageAlt: "Spinner dolphins off the coast of Trincomalee",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "Wildlife sightings can never be guaranteed, but dolphin sighting rates around Trincomalee are usually considered very high during the peak season.",
        },
      ],
    },

    {
      type: "text",
      id: "tour-details",
      kicker: "Boat Tours",
      title: "Tour Details and Logistics",
      align: "left",

      content: [
        {
          type: "p",
          text: "Most dolphin watching tours are short early-morning boat trips designed to return before the midday heat.",
        },

        {
          type: "p",
          text: "<strong>Departure Points:</strong> Most boats leave from Nilaveli Beach or Uppuveli.",
        },

        {
          type: "p",
          text: "<strong>Duration:</strong> Tours usually last around 2 to 3 hours.",
        },

        {
          type: "p",
          text: "<strong>Cost:</strong> Prices generally range from about USD 35–50 per person, depending on whether you join a shared boat or book a private trip.",
        },

        {
          type: "p",
          text: "<strong>Sighting Probability:</strong> Dolphin sightings are commonly reported as highly likely during peak season, though they depend on weather and natural animal movement.",
        },
      ],
    },

    {
      type: "text",
      id: "travel-tips",
      kicker: "Travel Tips",
      title: "Tips for a Better Trip",
      align: "left",

      content: [
        {
          type: "split-paragraph",
          heading: "Practical Advice",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Seasickness:</strong> Even on calm mornings, the Indian Ocean can have a light swell. Taking a seasickness tablet about an hour before boarding can help sensitive travelers.",
            "<strong>Sun Protection:</strong> Bring a hat, sunglasses, and high-SPF sunscreen because sunlight reflects strongly off the water.",
            "<strong>Ethical Viewing:</strong> Choose operators that maintain a safe distance from dolphin pods and avoid chasing or crowding the animals.",
            "<strong>Reputable Operators:</strong> Licensed operators and established centers around Nilaveli, Uppuveli, and Trincomalee are generally better choices for safety and responsible viewing.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Trincomalee/dolphin-watching/boat-tour.webp`,
          imageAlt: "Dolphin watching boat tour near Trincomalee",
          mediaPosition: "right",
        },
      ],
    },
  ],
};

export default TrincomaleeDolphinWatchingArticle;