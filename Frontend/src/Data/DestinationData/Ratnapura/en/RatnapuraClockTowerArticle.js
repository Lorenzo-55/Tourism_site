const RatnapuraClockTowerArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Ratnapura", to: "/places/ratnapura" },
    { label: "Ratnapura Clock Tower" },
  ],

  hero: {
    kicker: "City Landmark",
    title: "Ratnapura Clock Tower",
    subtitle:
      "The central landmark of the Gem City, surrounded by markets, transport links, banks, tea shops, and the daily rhythm of Ratnapura’s gem trade.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Ratnapura/ratnapura-clock-tower/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "The Heart of Ratnapura",
    paragraphs: [
      "The Ratnapura Clock Tower is one of the city’s most recognizable landmarks and a useful reference point for exploring the Gem City.",
      "At first glance, it may seem like a simple civic structure, but the area around it forms a busy commercial center connected to gem trading, transport, banking, food stalls, and everyday city life.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "city-center",
      kicker: "City Center",
      title: "The Commercial North Star of Ratnapura",
      align: "left",

      content: [
        {
          type: "p",
          text: "For visitors navigating Ratnapura, the Clock Tower functions as one of the easiest orientation points in the city.",
        },

        {
          type: "p",
          text: "Many important locations are described by their distance from the tower, especially places connected to the gem trade and transport network.",
        },

        {
          type: "split-paragraph",
          heading: "What Lies Around the Tower",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Gem Market:</strong> The morning street trading area is only a short walk east along Saviya Mawatha.",
            "<strong>Fort Area:</strong> Walking west leads toward the police station, colonial fort precinct, and the National Gem and Jewellery Authority.",
            "<strong>Transport Hub:</strong> The main bus stand is located nearby, making the tower a common arrival point for travelers coming from Colombo, Ella, or other towns.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Ratnapura/ratnapura-clock-tower/city-center.webp`,
          imageAlt: "Ratnapura Clock Tower city center",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "architecture-and-atmosphere",
      kicker: "Architecture & Atmosphere",
      title: "Architecture and Street Life",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Clock Tower is a classic example of post-colonial Sri Lankan civic architecture.",
        },

        {
          type: "p",
          text: "It features a white, tiered structure with a four-sided clock face and stands at one of the busiest intersections in the city.",
        },

        {
          type: "split-paragraph",
          heading: "The Gem City Vibe",
          headingLevel: "h3",

          paragraphs: [
            "The area around the tower is energetic from early morning, especially when gem brokers and traders begin moving toward the nearby market streets.",
            "You may see men carrying small umbrellas, folded papers, and blue wrapping sheets used for examining gemstones.",
            "Nearby tea shops often become informal meeting places where gem discussions and negotiations continue over cups of tea.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Ratnapura/ratnapura-clock-tower/street-life.webp`,
          imageAlt: "Street life around Ratnapura Clock Tower",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "nearby-utilities",
      kicker: "Nearby Stops",
      title: "Useful Places Nearby",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Clock Tower area is surrounded by some of Ratnapura’s most practical visitor stops.",
        },

        {
          type: "h3",
          text: "Tea Shops and Local Cafés",
        },

        {
          type: "p",
          text: "Small cafés and tea shops near the tower are part of the city’s gem-trading atmosphere, often filled with brokers, traders, and locals discussing deals.",
        },

        {
          type: "h3",
          text: "Banks and ATMs",
        },

        {
          type: "p",
          text: "Several major banks and ATMs are clustered around the area, which is especially useful because the gem market remains strongly cash-based.",
        },

        {
          type: "h3",
          text: "Fruit Stalls",
        },

        {
          type: "p",
          text: "Behind and around the tower, vendors often sell seasonal fruits such as rambutan, mangosteen, and other local produce.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-tips",
      kicker: "Visitor Tips",
      title: "Practical Tips for Visitors",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Traffic:</strong> The roundabout around the Clock Tower can be chaotic, with buses, tuk-tuks, and private vehicles moving quickly through the intersection. Cross carefully.",
        },

        {
          type: "p",
          text: "<strong>Freelance Guides:</strong> Visitors may be approached by unofficial guides offering gem market tours or private shop visits. Stay polite but cautious unless you already know what you are looking for.",
        },

        {
          type: "p",
          text: "<strong>Photography:</strong> A good angle for photographing the tower is from one of the nearby upstairs cafés or bakeries, especially with the green Sabaragamuwa hills in the background.",
        },

        {
          type: "p",
          text: "The Clock Tower is best understood as a practical starting point for exploring Ratnapura’s gem market, museum area, transport hub, and everyday street life.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.680493269175057,80.40214682387034",
        },
      ],
    },
  ],
};

export default RatnapuraClockTowerArticle;