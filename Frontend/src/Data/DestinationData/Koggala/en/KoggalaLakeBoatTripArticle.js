const KoggalaLakeBoatTripArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Koggala", to: "/places/koggala" },
    { label: "Koggala Lake Boat Trip" },
  ],

  hero: {
    kicker: "Lake & Mangroves",
    title: "Koggala Lake Boat Trip",
    subtitle:
      "A peaceful boat safari through mangroves, islands, bird habitats, and cinnamon plantations on one of Sri Lanka’s most scenic coastal lagoons.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Koggala/lake-boat-trip/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Exploring Koggala Lake",
    paragraphs: [
      "A boat trip on Koggala Lake, also known as Koggala Lagoon, is one of the most popular experiences along Sri Lanka’s southern coast.",
      "The lake is known for its calm freshwater scenery, mangrove forests, birdlife, and small islands connected to local culture, cinnamon cultivation, and literature.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "boat-safari-experience",
      kicker: "Boat Safari",
      title: "The Koggala Lake Experience",
      align: "left",

      content: [
        {
          type: "p",
          text: "The typical Koggala Lake boat safari lasts around 2 to 3 hours and offers a slower, more peaceful alternative to the nearby beaches.",
        },

        {
          type: "p",
          text: "The journey takes visitors across a large scenic lagoon surrounded by mangroves and dotted with small islands.",
        },

        {
          type: "split-paragraph",
          heading: "Nature and Wildlife",
          headingLevel: "h3",

          paragraphs: [
            "The lake is home to a wide variety of birdlife including herons, eagles, hawks, and other water birds.",
            "Visitors may also spot water monitors, monkeys, and occasionally crocodiles along the mangrove-lined shores.",
            "The calm environment and dense vegetation create a quiet and relaxing atmosphere throughout the journey.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Koggala/lake-boat-trip/mangroves.webp`,
          imageAlt: "Mangroves and wildlife on Koggala Lake",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "island-visits",
      kicker: "Island Stops",
      title: "Islands of Koggala Lake",
      align: "left",

      content: [
        {
          type: "p",
          text: "Most boat tours include stops at several of the small islands scattered across the lagoon.",
        },

        {
          type: "h3",
          text: "Cinnamon Island",
        },

        {
          type: "p",
          text: "Cinnamon Island, sometimes associated with Madol Doowa, is one of the most popular stops on the lake.",
        },

        {
          type: "p",
          text: "Visitors can see traditional methods of cultivating and peeling Ceylon Cinnamon, also known as True Cinnamon, which has long been an important product of Sri Lanka’s southern region.",
        },

        {
          type: "h3",
          text: "Madol Doowa",
        },

        {
          type: "p",
          text: "Madol Doowa is famous through the classic Sinhala novel written by Martin Wickramasinghe, one of Sri Lanka’s most celebrated literary figures and a native of Koggala.",
        },

        {
          type: "split-paragraph",
          heading: "Temple Island and Bird Island",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Temple Island:</strong> Home to a small Buddhist shrine and peaceful temple setting surrounded by the waters of the lagoon.",
            "<strong>Bird Island:</strong> A group of mangrove-covered islets serving as a sanctuary for many bird species found around the lake.",
            "Together, these islands combine nature, local culture, and traditional village life within the landscape of Koggala Lake.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Koggala/lake-boat-trip/islands.webp`,
          imageAlt: "Small islands on Koggala Lake",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Practical Information and Tips",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Duration",
        },

        {
          type: "p",
          text: "Most boat safaris last approximately 2 to 3 hours depending on the route and number of island stops.",
        },

        {
          type: "h3",
          text: "Cost",
        },

        {
          type: "p",
          text: "Prices vary depending on whether the tour is private, the size of the group, and any included transport or guide services.",
        },

        {
          type: "p",
          text: "<strong>Typical Local Hire:</strong> Around LKR 3,500–4,000 per boat.",
        },

        {
          type: "p",
          text: "<strong>Tour Packages:</strong> Organized tours may range from approximately USD 25–75 depending on inclusions and group size.",
        },

        {
          type: "h3",
          text: "Best Time to Visit",
        },

        {
          type: "p",
          text: "<strong>Morning:</strong> Around 9:00 AM for cooler temperatures and active wildlife.",
        },

        {
          type: "p",
          text: "<strong>Late Afternoon:</strong> Around 3:00 PM for softer lighting and pleasant scenery.",
        },

        {
          type: "h3",
          text: "What to Bring",
        },

        {
          type: "p",
          text: "<strong>Sun Protection:</strong> Sunglasses, sunscreen, and a hat are recommended due to the exposed water conditions.",
        },

        {
          type: "p",
          text: "<strong>Camera:</strong> The lake is especially popular for photography because of its reflections, birdlife, and mangrove scenery.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=5.998111796021498,80.3218302661955",
        },
      ],
    },
  ],
};

export default KoggalaLakeBoatTripArticle;