const BogodaWoodenBridgeArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Badulla", to: "/places/badulla" },
    { label: "Bogoda Wooden Bridge" },
  ],

  hero: {
    kicker: "Historic Landmark",
    title: "Bogoda Wooden Bridge",
    subtitle:
      "Sri Lanka’s oldest surviving wooden bridge and a remarkable example of traditional craftsmanship and Kandyan-era architecture.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Badulla/bogoda1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "An Ancient Wooden Bridge",
    paragraphs: [
      "The Bogoda Wooden Bridge is widely considered the oldest surviving wooden bridge in Sri Lanka.",
      "Believed to date back to the 16th century during the Dambadeniya era, the bridge is famous for its entirely wooden construction, traditional carpentry techniques, and distinctive tiled roof structure.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "construction-architecture",
      kicker: "Engineering & Design",
      title: "Construction and Architecture",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Wooden Construction",
        },
        {
          type: "p",
          text: "The entire bridge, including its structure, planks, and joinery, is made entirely of wood.",
        },
        {
          type: "p",
          text: "Jackfruit and Kumbuk logs were primarily used in its construction.",
        },

        {
          type: "h3",
          text: "No Metal Fasteners",
        },
        {
          type: "p",
          text: "One of the bridge’s most remarkable features is that it was constructed without the use of iron nails or metal fasteners.",
        },
        {
          type: "p",
          text: "Instead, the structure relies entirely on intricate traditional carpentry and interlocking joinery techniques.",
        },

        {
          type: "split-paragraph",
          heading: "Roofed Bridge Design",
          headingLevel: "h4",

          paragraphs: [
            "The bridge features a distinctive tiled roof structure that extends across its full length of nearly 15 meters, or 49 feet.",
            "The covered design provided shelter for travelers crossing the bridge and reflects the architectural style of the Kandyan Kingdom period.",
            "Its appearance and craftsmanship make it one of the most unique historic bridges in Sri Lanka.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Badulla/bogoda2.webp`,
          imageAlt: "Bogoda Wooden Bridge with tiled roof",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Historical Route",
        },
        {
          type: "p",
          text: "The bridge spans the Gallanda Oya river and once formed part of an important ancient footpath and trade route connecting Badulla with the Kingdom of Kandy.",
        },
      ],
    },

    {
      type: "text",
      id: "adjacent-temple",
      kicker: "Temple Complex",
      title: "Bogoda Raja Maha Viharaya",
      align: "left",

      content: [
        {
          type: "p",
          text: "The bridge stands beside the Bogoda Raja Maha Viharaya, an ancient Buddhist temple that predates the bridge itself.",
        },

        {
          type: "h3",
          text: "Temple’s Age",
        },
        {
          type: "p",
          text: "The temple is believed to date back to the 1st century BC during the reign of King Valagamba in the Anuradhapura era.",
        },

        {
          type: "h3",
          text: "Temple Attractions",
        },
        {
          type: "p",
          text: "The temple complex contains a cave temple, ancient Brahmi script inscriptions, and murals influenced by the Kandyan period.",
        },

        {
          type: "split-paragraph",
          heading: "Legendary Tunnel",
          headingLevel: "h4",

          paragraphs: [
            "Local legends speak of an old tunnel within the temple premises.",
            "According to tradition, the tunnel may have been used as an escape route by King Valagamba.",
            "Although largely part of local folklore, the story remains closely associated with the site.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Badulla/bogoda3.webp`,
          imageAlt: "Bogoda Raja Maha Viharaya near the wooden bridge",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Location, Access, and Etiquette",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Location",
        },
        {
          type: "p",
          text: "The Bogoda Wooden Bridge is located in Bogoda village near Hali-Ela, approximately 7 kilometers west of Badulla.",
        },

        {
          type: "h3",
          text: "Accessibility",
        },
        {
          type: "p",
          text: "The site can be reached via a short detour from the main Badulla–Bandarawela road.",
        },
        {
          type: "p",
          text: "Tuk-tuks are generally the easiest way to visit from Badulla town.",
        },

        {
          type: "h3",
          text: "Opening Hours",
        },
        {
          type: "p",
          text: "The bridge and temple complex are generally open daily from 6:00 AM to 8:00 PM.",
        },

        {
          type: "h3",
          text: "Entrance",
        },
        {
          type: "p",
          text: "<strong>Admission:</strong> Free of charge.",
        },

        {
          type: "h3",
          text: "Temple Etiquette",
        },
        {
          type: "p",
          text: "Visitors must remove shoes and hats before walking on the bridge and when entering the temple area as a sign of respect.",
        },

        {
          type: "p",
          text: "The Bogoda Wooden Bridge is an ideal destination for visitors interested in ancient engineering, architecture, and lesser-known historical landmarks.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=2X5W%2B5G%20Narangala%2C%20Sri%20Lanka",
        },
      ],
    },
  ],
};

export default BogodaWoodenBridgeArticle;