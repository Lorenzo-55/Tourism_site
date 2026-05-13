const TrincomaleeDivingArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Trincomalee", to: "/places/trincomalee" },
    { label: "Diving" },
  ],

  hero: {
    kicker: "Diving & Marine Life",
    title: "Diving in Trincomalee and Nilaveli",
    subtitle:
      "Coral reefs, reef sharks, tropical fish, and historic shipwrecks along Sri Lanka’s east coast.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Trincomalee/diving/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "East Coast Diving in Sri Lanka",
    paragraphs: [
      "The Trincomalee and Nilaveli region is one of Sri Lanka’s best diving destinations, offering warm clear waters, coral reefs, marine life, and historic wreck dives.",
      "The area caters to all experience levels, from beginner try-dives near shallow coral reefs to advanced dives around deep wartime shipwrecks.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "diving-season",
      kicker: "Season",
      title: "Best Time for Diving",
      align: "left",

      content: [
        {
          type: "p",
          text: "The diving season on Sri Lanka’s east coast runs opposite to the southwest monsoon season affecting the south and west coasts.",
        },

        {
          type: "split-paragraph",
          heading: "Optimal Diving Conditions",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Best Season:</strong> May to October.",
            "During these months, the sea is generally calm, winds are lighter, and underwater visibility can reach around 20–25 meters.",
            "Water temperatures remain warm throughout the year, usually ranging between 26°C and 30°C.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Trincomalee/diving/east-coast-diving.webp`,
          imageAlt: "Diving conditions off the east coast of Sri Lanka",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "<strong>Off-Season:</strong> From November to April, monsoon conditions can create rough seas and reduced visibility, making diving less reliable.",
        },
      ],
    },

    {
      type: "text",
      id: "pigeon-island-diving",
      kicker: "Marine Sanctuary",
      title: "Pigeon Island Diving",
      align: "left",

      content: [
        {
          type: "p",
          text: "Pigeon Island National Park is the most famous diving and snorkeling location near Trincomalee.",
        },

        {
          type: "p",
          text: "The reef is relatively shallow and accessible, making it suitable for beginners, snorkelers, and certified divers alike.",
        },

        {
          type: "split-paragraph",
          heading: "What You Can See",
          headingLevel: "h3",

          paragraphs: [
            "The coral reef contains colorful hard and soft corals along with dense marine biodiversity.",
            "Divers and snorkelers commonly encounter tropical reef fish, sea turtles, clownfish, parrotfish, and blacktip reef sharks.",
            "The sharks are generally juvenile and non-aggressive, often swimming in shallow water close to the reef edge.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Trincomalee/diving/pigeon-island-diving.webp`,
          imageAlt: "Snorkeling and diving around Pigeon Island",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "Because of its calm conditions and marine life density, Pigeon Island is often considered the best location in the region for first-time underwater experiences.",
        },
      ],
    },

    {
      type: "text",
      id: "shipwreck-dives",
      kicker: "Wreck Diving",
      title: "Historic Shipwrecks",
      align: "left",

      content: [
        {
          type: "p",
          text: "Trincomalee Harbor’s strategic naval history has created several important wreck diving sites around the region.",
        },

        {
          type: "split-paragraph",
          heading: "HMS Hermes",
          headingLevel: "h3",

          paragraphs: [
            "One of the most famous wrecks is the HMS Hermes, a British aircraft carrier sunk by Japanese forces during World War II in 1942.",
            "The wreck lies in deeper water and is considered an advanced dive site suitable mainly for experienced divers.",
            "Because of depth and conditions, dives to HMS Hermes usually require technical planning and favorable weather.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Trincomalee/diving/wreck-diving.webp`,
          imageAlt: "Historic shipwreck diving near Trincomalee",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "The region’s naval history and natural harbor make Trincomalee one of Sri Lanka’s most historically interesting diving destinations.",
        },
      ],
    },

    {
      type: "text",
      id: "reef-dives",
      kicker: "Coral Reefs",
      title: "Reef Dive Sites",
      align: "left",

      content: [
        {
          type: "p",
          text: "Besides Pigeon Island, the Trincomalee region contains numerous reef dive sites known for colorful coral formations and marine biodiversity.",
        },

        {
          type: "h3",
          text: "Swami Rock",
        },

        {
          type: "p",
          text: "Swami Rock combines dramatic underwater rock formations with reef ecosystems and schools of tropical fish.",
        },

        {
          type: "h3",
          text: "Eel Rock",
        },

        {
          type: "p",
          text: "Eel Rock is known for moray eels, reef fish, rays, and healthy coral sections.",
        },

        {
          type: "split-paragraph",
          heading: "Marine Life",
          headingLevel: "h3",

          paragraphs: [
            "Common sightings across reef sites include rays, moray eels, reef sharks, turtles, schools of fish, and dense coral growth.",
            "Both hard and soft coral species are found throughout the area.",
            "Visibility during peak season allows divers to fully appreciate the reef formations and underwater topography.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Trincomalee/diving/coral-reef.webp`,
          imageAlt: "Coral reef diving near Trincomalee",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "dive-schools",
      kicker: "Dive Centers",
      title: "Dive Schools and Courses",
      align: "left",

      content: [
        {
          type: "p",
          text: "Trincomalee, Uppuveli, and Nilaveli contain several PADI-certified dive schools offering courses and guided excursions.",
        },

        {
          type: "h3",
          text: "Discover Scuba Diving",
        },

        {
          type: "p",
          text: "Beginner programs allow first-time visitors to experience diving under instructor supervision without needing prior certification.",
        },

        {
          type: "h3",
          text: "Certification Courses",
        },

        {
          type: "p",
          text: "Visitors can complete PADI Open Water certifications and more advanced diving courses in the region.",
        },

        {
          type: "h3",
          text: "Fun Dives",
        },

        {
          type: "p",
          text: "Certified divers can join guided reef dives, wreck dives, and marine life excursions organized by local dive centers.",
        },

        {
          type: "split-paragraph",
          heading: "Convenience and Transport",
          headingLevel: "h3",

          paragraphs: [
            "Many dive schools provide free hotel pickup from Trincomalee, Uppuveli, and Nilaveli.",
            "Equipment rental is usually available for both diving and snorkeling activities.",
            "Boat transfers to dive sites are commonly included within organized dive packages.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Trincomalee/diving/dive-school.webp`,
          imageAlt: "Dive school boats in Nilaveli and Trincomalee",
          mediaPosition: "right",
        },
      ],
    },
  ],
};

export default TrincomaleeDivingArticle;