const KalpitiyaWaterSportsArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Kalpitiya", to: "/places/kalpitiya" },
    { label: "Water Sports" },
  ],

  hero: {
    kicker: "Water Sports",
    title: "Water Sports in Kalpitiya",
    subtitle:
      "Kitesurfing lagoons, ocean riding, island kite safaris, and reliable wind seasons on Sri Lanka’s northwest coast.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kalpitiya/water-sports/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "One of Asia’s Best Kitesurfing Destinations",
    paragraphs: [
      "Kalpitiya is considered one of the best and most reliable kitesurfing destinations in Asia, with strong wind seasons and a variety of riding conditions.",
      "The area offers shallow lagoon water for beginners, ocean waves for advanced riders, and nearby island spots for flat-water kite safaris.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "kitesurfing",
      kicker: "Kitesurfing",
      title: "Kitesurfing in Kalpitiya",
      align: "left",

      content: [
        {
          type: "p",
          text: "Kalpitiya is especially popular because it offers reliable wind, warm water, and different riding environments within a relatively small area.",
        },

        {
          type: "p",
          text: "Beginners can learn in the calm lagoon, while experienced riders can explore the ocean, wave spots, downwind routes, and nearby island lagoons.",
        },

        {
          type: "split-paragraph",
          heading: "Kalpitiya Lagoon",
          headingLevel: "h3",

          paragraphs: [
            "The large Kalpitiya Lagoon is the main learning area for kitesurfing.",
            "Its shallow, flat, and warm water makes it ideal for beginners, body dragging, water starts, and freestyle practice.",
            "Most kite schools are based around this lagoon, making lessons and equipment rental easy to arrange.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalpitiya/water-sports/kalpitiya-lagoon.webp`,
          imageAlt: "Kitesurfing on Kalpitiya Lagoon",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "kitesurfing-seasons",
      kicker: "Wind Seasons",
      title: "Kitesurfing Seasons",
      align: "left",

      content: [
        {
          type: "p",
          text: "Kalpitiya has two main wind seasons, making it suitable for kitesurfing for much of the year.",
        },

        {
          type: "p",
          text: "<strong>Summer Season:</strong> May to October is the peak season, with strong and consistent southwest winds often lasting throughout the day. This season is ideal for downwinders and ocean riding.",
        },

        {
          type: "p",
          text: "<strong>Winter Season:</strong> Mid-December to mid-March usually brings milder northwest winds, often strongest in the afternoon. This season is especially good for lagoon riding and can be combined with dolphin watching.",
        },

        {
          type: "p",
          text: "<strong>In-Between Seasons:</strong> April and November to early December generally have less predictable wind conditions.",
        },
      ],
    },

    {
      type: "text",
      id: "kitesurfing-locations",
      kicker: "Kite Spots",
      title: "Best Kitesurfing Locations",
      align: "left",

      content: [
        {
          type: "p",
          text: "Kalpitiya is known for its mix of flat-water lagoons, ocean spots, wave areas, and nearby island locations.",
        },

        {
          type: "split-paragraph",
          heading: "Dream Spot and Vellai Island",
          headingLevel: "h3",

          paragraphs: [
            "Dream Spot and Vellai Island are reached by short boat trips and offer shallow, mirror-flat water.",
            "These locations are popular for day trips, kite safaris, and relaxed riding in scenic surroundings.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalpitiya/water-sports/dream-spot.webp`,
          imageAlt: "Flat-water kitesurfing spot near Kalpitiya",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "<strong>Kalpitiya Lagoon:</strong> Best for beginners and freestyle riders because of its large, shallow, flat-water conditions.",
        },

        {
          type: "p",
          text: "<strong>Sea and Ocean:</strong> Better suited to advanced riders, freeriders, and those looking for waves and rougher water.",
        },

        {
          type: "p",
          text: "<strong>Dream Spot / Vellai Island:</strong> Suitable for all levels when visited with a boat tour or kite safari.",
        },

        {
          type: "p",
          text: "<strong>Donkey Point:</strong> A well-known summer wave-riding spot, popular for downwinders and ocean sessions.",
        },
      ],
    },

    {
      type: "text",
      id: "lessons-and-rental",
      kicker: "Lessons & Rental",
      title: "Kitesurfing Lessons and Equipment",
      align: "left",

      content: [
        {
          type: "p",
          text: "Kalpitiya has several IKO-certified kitesurfing schools with both local and international instructors.",
        },

        {
          type: "p",
          text: "Many schools offer beginner packages that combine accommodation, lessons, equipment, and rescue support.",
        },

        {
          type: "h3",
          text: "Indicative Prices",
        },

        {
          type: "p",
          text: "<strong>Beginner Course:</strong> A standard 9 to 12 hour course often starts from around €270 to €400 per person, depending on whether lessons are private or group-based.",
        },

        {
          type: "p",
          text: "<strong>Private Lessons:</strong> Usually around €50 to €70 per hour.",
        },

        {
          type: "p",
          text: "<strong>Equipment Rental:</strong> Full equipment rental is commonly around €55 to €60 per day and may include rescue boat support.",
        },

        {
          type: "h3",
          text: "Beginner Advice",
        },

        {
          type: "p",
          text: "The shallow, flat lagoon makes Kalpitiya an excellent place to learn kitesurfing, especially for first-time riders.",
        },

        {
          type: "p",
          text: "<strong>Protection:</strong> Water shoes are recommended in the lagoon because of shells, and strong sunscreen is essential during long sessions on the water.",
        },
      ],
    },
  ],
};

export default KalpitiyaWaterSportsArticle;