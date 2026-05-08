const HikkaduwaNightlifeArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Hikkaduwa", to: "/places/hikkaduwa" },
    { label: "Nightlife" },
  ],

  hero: {
    kicker: "Beach Nightlife",
    title: "Nightlife in Hikkaduwa",
    subtitle:
      "Beach bars, late-night parties, rooftop lounges, and lively music along Sri Lanka’s south coast.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/nightlife/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "One of Sri Lanka’s Best Beach Party Towns",
    paragraphs: [
      "Hikkaduwa is widely known as one of the liveliest nightlife destinations on Sri Lanka’s south coast, especially during the high season from around November to April.",
      "Most of the nightlife is centered around Narigama Beach, where beach bars, clubs, and casual lounges create a relaxed but energetic party atmosphere by the sea.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "nightlife-overview",
      kicker: "The Scene",
      title: "Beach-Focused Nightlife",
      align: "left",

      content: [
        {
          type: "p",
          text: "Hikkaduwa’s nightlife is strongly connected to the beach, with many venues located directly on the sand or close to the shoreline.",
        },

        {
          type: "p",
          text: "The evening often begins with relaxed drinks, cocktails, and music before turning into louder beach parties later at night.",
        },

        {
          type: "split-paragraph",
          heading: "Narigama Beach Party Strip",
          headingLevel: "h3",

          paragraphs: [
            "Narigama Beach is the main area for nightlife in Hikkaduwa, especially during the tourist season.",
            "Many beach bars and party venues are located along this stretch, allowing travellers to move easily between relaxed lounges, music bars, and late-night beach parties.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/nightlife/narigama-beach.webp`,
          imageAlt: "Nightlife along Narigama Beach in Hikkaduwa",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "<strong>Music:</strong> The sound varies from reggae and chilled-out beach music in the early evening to electronic, house, and dub later at night.",
        },

        {
          type: "p",
          text: "<strong>Dress Code:</strong> The atmosphere is casual and beach-friendly, so light and relaxed clothing is normal.",
        },

        {
          type: "p",
          text: "<strong>Late-Night Hours:</strong> Parties usually begin around 9:00 PM or 10:00 PM and can continue until 3:00 AM or 4:00 AM.",
        },
      ],
    },

    {
      type: "text",
      id: "party-venues",
      kicker: "Venues",
      title: "Popular Nightlife Venues",
      align: "left",

      content: [
        {
          type: "p",
          text: "Many of Hikkaduwa’s main venues are known for hosting their biggest beach party on a specific night of the week, creating a party trail for travellers.",
        },

        {
          type: "h3",
          text: "Weekly Beach Party Spots",
        },

        {
          type: "p",
          text: "<strong>Funky De Bar:</strong> Thursday is the main party night. It is known for lively beach parties, affordable drinks, good music, and a mix of locals and travellers.",
        },

        {
          type: "p",
          text: "<strong>Vibration Music Bar:</strong> Friday is the main party night. It is one of Hikkaduwa’s best-known venues for Electronic Dance Music, with local and international DJs.",
        },

        {
          type: "p",
          text: "<strong>Mambo’s Place:</strong> Saturday is the main party night. It is known for energetic beach parties, DJ nights, and a lively atmosphere popular with surfers.",
        },

        {
          type: "p",
          text: "<strong>Top Secret:</strong> Sunday is the main party night. It has a relaxed beach-party setting with sunbeds, hammocks, a pool, ping pong, and late-night music.",
        },

        {
          type: "split-paragraph",
          heading: "Following the Party Trail",
          headingLevel: "h4",

          paragraphs: [
            "Because different venues host their biggest parties on different nights, many travellers follow the weekly nightlife schedule from one beach bar to the next.",
            "This makes Hikkaduwa especially active during the high season, when beach parties draw both backpackers and local visitors.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/nightlife/beach-party.webp`,
          imageAlt: "Beach party atmosphere in Hikkaduwa",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "chilled-evenings",
      kicker: "Relaxed Evenings",
      title: "Quieter Nightlife Options",
      align: "left",

      content: [
        {
          type: "p",
          text: "Not every night out in Hikkaduwa has to be a full beach party. Several venues offer a more relaxed evening atmosphere with drinks, food, views, and casual entertainment.",
        },

        {
          type: "p",
          text: "<strong>Surf Control Rooftop Lounge:</strong> A more chilled and romantic option with indoor and outdoor seating, shisha, and good views.",
        },

        {
          type: "p",
          text: "<strong>Sam’s Bar:</strong> A sports-bar style venue suitable for watching games, having food and drinks, and enjoying a more pub-like evening.",
        },

        {
          type: "p",
          text: "These venues are better suited for travellers who want a quieter night without joining the main beach-party circuit.",
        },
      ],
    },
  ],
};

export default HikkaduwaNightlifeArticle;