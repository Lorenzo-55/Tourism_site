const PointPedroAreaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Jaffna", to: "/places/jaffna" },
    { label: "Point Pedro Area" },
  ],

  hero: {
    kicker: "Northern Coast",
    title: "Point Pedro Area",
    subtitle:
      "Sri Lanka’s northernmost town, known for fishing communities, coastal scenery, historic landmarks, and quiet local life.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Jaffna/point-pedro/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Sri Lanka’s Northernmost Coastal Town",
    paragraphs: [
      "Point Pedro is the northernmost town in Sri Lanka, located at the tip of the Jaffna Peninsula.",
      "The area offers a quiet and authentic glimpse into local life, shaped by fishing, agriculture, coastal traditions, and a long history of maritime connections.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "point-pedro-town",
      kicker: "Northern Town",
      title: "Point Pedro",
      align: "left",

      content: [
        {
          type: "p",
          text: "Point Pedro’s name is derived from the Portuguese phrase “Ponta das Pedras,” meaning “the rocky cape.”",
        },

        {
          type: "p",
          text: "Its Tamil name, Paruthithurai, means “Cotton Port,” reflecting the town’s historical role as a trading port for cotton exports to South India.",
        },

        {
          type: "split-paragraph",
          heading: "A Quiet Coastal Town",
          headingLevel: "h3",

          paragraphs: [
            "Point Pedro is not a heavily commercialized tourist destination, which gives it a more local and everyday atmosphere.",
            "The town is strongly connected to fishing and agriculture, and visitors can see coastal life continuing much as it has for generations.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Jaffna/point-pedro/point-pedro-town.webp`,
          imageAlt: "Point Pedro coastal town in northern Sri Lanka",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "<strong>Transport:</strong> Point Pedro is accessible from Jaffna by bus or tuk-tuk, with the journey taking about one hour.",
        },

        {
          type: "p",
          text: "<strong>Authentic Experience:</strong> The town is quieter than many tourist areas, making it suitable for travellers interested in local life and less-commercial coastal scenery.",
        },
      ],
    },

    {
      type: "text",
      id: "northernmost-point",
      kicker: "Geographic Landmark",
      title: "Sri Lanka’s Northernmost Point",
      align: "left",

      content: [
        {
          type: "p",
          text: "One of Point Pedro’s main attractions is its location as the northernmost point of Sri Lanka.",
        },

        {
          type: "p",
          text: "The area is marked by a monument and sign, with wide views over the Indian Ocean and a rugged coastal setting.",
        },

        {
          type: "split-paragraph",
          heading: "Ocean Views and Fishing Life",
          headingLevel: "h3",

          paragraphs: [
            "The northern tip of Sri Lanka has a raw, open coastal atmosphere with sea winds, rocky edges, and working fishing activity nearby.",
            "On clear days, the Indian coastline may be visible in the distance, adding to the sense of standing at the island’s northern edge.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Jaffna/point-pedro/northernmost-point.webp`,
          imageAlt: "Sri Lanka northernmost point near Point Pedro",
          mediaPosition: "left",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=9.836065884439549,80.2118925013249",
        },
      ],
    },

    {
      type: "text",
      id: "point-pedro-lighthouse",
      kicker: "Coastal Landmark",
      title: "Point Pedro Lighthouse",
      align: "left",

      content: [
        {
          type: "p",
          text: "Point Pedro Lighthouse is one of the area’s most recognizable coastal landmarks.",
        },

        {
          type: "p",
          text: "Built in 1916, the lighthouse stands around 32 meters tall and is one of Sri Lanka’s active lighthouses.",
        },

        {
          type: "p",
          text: "It is a photogenic stop and a good place to appreciate the coastline, especially around sunset.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=9.826975375870342,80.2496936373888",
        },
      ],
    },

    {
      type: "text",
      id: "beaches-and-coastal-landscape",
      kicker: "Coastline",
      title: "Beaches and Coastal Landscape",
      align: "left",

      content: [
        {
          type: "p",
          text: "The area around Point Pedro includes several long sandy beaches and quiet stretches of coastline.",
        },

        {
          type: "p",
          text: "The east coast near the town is known for sand dunes that can rise up to around 30 meters, creating a distinctive coastal landscape.",
        },

        {
          type: "p",
          text: "The beaches are best suited for peaceful walks, coastal photography, and watching local fishing boats along the shore.",
        },
      ],
    },

    {
      type: "text",
      id: "vallipuram-kovil",
      kicker: "Religious Site",
      title: "Vallipuram Kovil",
      align: "left",

      content: [
        {
          type: "p",
          text: "Vallipuram Kovil, located near Point Pedro, is one of the oldest Hindu temples in Sri Lanka.",
        },

        {
          type: "p",
          text: "Dedicated to Lord Vishnu, it is an important religious center in the region and is known for its spiritual atmosphere and temple architecture.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=9.789535184849596,80.24239937350936",
        },
      ],
    },

    {
      type: "text",
      id: "local-life-and-history",
      kicker: "Local Life",
      title: "Fishing Community and Historic Character",
      align: "left",

      content: [
        {
          type: "p",
          text: "Point Pedro remains a working fishing port, and a visit to the local market in the morning offers a direct look at the daily rhythm of the community.",
        },

        {
          type: "p",
          text: "Although the town was heavily affected by the civil war and the 2004 tsunami, it has recovered with resilience.",
        },

        {
          type: "p",
          text: "Remnants of colonial buildings can still be found around the town, showing influences from the Portuguese, Dutch, and British periods.",
        },

        {
          type: "p",
          text: "Together, these elements make Point Pedro a meaningful stop for travellers interested in northern Sri Lanka’s coastal life, history, and quieter landscapes.",
        },
      ],
    },
  ],
};

export default PointPedroAreaArticle;