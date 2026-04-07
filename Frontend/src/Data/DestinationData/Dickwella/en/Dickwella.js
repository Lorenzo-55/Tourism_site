const DickwellaArticle = {
  breadcrumbItems: [
    { label: "Places", to: "/places" },
    { label: "Dickwella", to: "/places/dickwella" },
  ],

  hero: {
    kicker: "South Coast",
    title: "Dickwella",
    subtitle:
      "A peaceful coastal town known for calm beaches, local markets, and a relaxed village atmosphere.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Dickwella/hero/dickwella-hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Coastal Calm and Local Life",
    paragraphs: [
      "Dickwella (also spelled Dikwella) is a small coastal town on the southern coast of Sri Lanka, located in the Matara district between Matara and Tangalle.",
      "Known for its peaceful and uncrowded atmosphere, it offers a quieter alternative to some of the busier beach destinations while still maintaining a strong sense of authentic Sri Lankan village life.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "location-vibe",
      kicker: "Location",
      title: "Location and Vibe",
      align: "left",
      paragraphs: [
        "Dickwella sits along Sri Lanka’s southern coastline, just east of Matara and before Tangalle, making it well-positioned along one of the country’s most popular coastal routes.",
        "Despite its location, the town remains relatively calm and less crowded, offering a laid-back environment that contrasts with nearby tourist-heavy areas.",
        "It retains the feel of a working local town, where everyday life continues alongside tourism, giving visitors a more grounded and authentic experience.",
      ],
    },

    {
      type: "text",
      id: "dickwella-beach",
      kicker: "Beach Life",
      title: "Dickwella Beach",
      align: "left",
      paragraphs: [
        "Dickwella Beach is a long stretch of sandy coastline that stands out for its calm and protected waters.",
        "Natural reefs and sandbars create a barrier that reduces strong waves, making the sea safer for swimming compared to many other beaches along the south coast.",
        "This makes it especially popular for families and those looking for a relaxed beach experience without heavy surf conditions.",
      ],
    },

    {
      type: "text",
      id: "dickwella-market",
      kicker: "Local Life",
      title: "Dickwella Market",
      align: "left",
      content: [
        {
          type: "p",
          text: "The town center of Dickwella is a busy commercial area, with the Saturday market being one of the largest and most vibrant on the island. It serves as a central hub for trade, attracting vendors and visitors from across the region.",
        },
        {
          type: "p",
          text: "The main market takes place every Saturday and typically runs from 6:00 AM to 6:00 PM, although the best time to visit is in the morning when produce is freshest and activity is at its peak.",
        },
        {
          type: "p",
          text: "While Saturday is the primary market day, smaller trading activity can also be found on Sundays, particularly near the beach, though these are less formal compared to the main weekly market.",
        },

        {
          type: "split-paragraph",
          heading: "What You Can Find",
          headingLevel: "h4",
          paragraphs: [
            "The market offers a wide variety of goods, including fresh fruits, vegetables, flowers, and seafood caught along the nearby coast. It also features aromatic spices, traditional items such as clay pots and incense, and locally made handicrafts.",
            "In addition, visitors can find general merchandise like clothing, household goods, and beachwear, making it both a practical shopping spot for locals and an interesting place for visitors to explore.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Dickwella/market/market.webp`,
          imageAlt: "Dickwella market",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "Visiting the Dickwella Market provides an authentic glimpse into local life. It is a lively and colorful environment where bargaining, trading, and daily routines unfold in a dynamic setting.",
        },
        {
          type: "p",
          text: "It is also a great place to sample local food, interact with vendors, and pick up unique souvenirs at reasonable prices. The market is located in the town center along the main road connecting Matara and Tangalle.",
        },
      ],
    },

    {
        type: "horizontal-scroll",
        kicker: "Highlights",
        title: "What to Explore Around Dickwella",
        text: "Key experiences and attractions in and around the area.",
        align: "center",
        collapsible: false,
        defaultOpen: true,
        toggleLabelOpen: "Show highlights",
        toggleLabelClose: "Hide highlights",
        titleStyle: "",
        items: [
            {
            title: "Surfing in Dickwella / Hiriketiya",
            description:
                "Suitable for different skill levels, with surf schools and seasonal waves attracting beginners and experienced surfers.",
            image: `${import.meta.env.BASE_URL}Destinations/Dickwella/highlights/surfing.webp`,
            button: {
                label: "Explore",
                to: "/places/dickwella/surfing",
            },
            },
            {
            title: "Diving and Snorkeling",
            description:
                "Opportunities to explore underwater life through local dive spots and nearby excursions.",
            image: `${import.meta.env.BASE_URL}Destinations/Dickwella/highlights/diving.webp`,
            button: {
                label: "Explore",
                to: "/places/dickwella/diving-snorkeling",
            },
            },
            {
            title: "Hiriketiya Beach (Hiri)",
            description:
                "A trendy bay known for its relaxed atmosphere, surf culture, and growing digital nomad scene.",
            image: `${import.meta.env.BASE_URL}Destinations/Dickwella/highlights/hiriketiya.webp`,
            button: {
                label: "Explore",
                to: "/places/dickwella/hiriketiya-beach",
            },
            },
            {
            title: "Wewurukannala Vihara Temple",
            description:
                "Famous for its giant Buddha statue and the unique ‘Tunnel of Hell’ depicting Buddhist teachings.",
            image: `${import.meta.env.BASE_URL}Destinations/Dickwella/highlights/wewurukannala.webp`,
            button: {
                label: "Explore",
                to: "/places/dickwella/wewurukannala-temple",
            },
            },
            {
            title: "Hummanaya Blowhole",
            description:
                "A natural coastal phenomenon where seawater shoots high into the air through a rock formation.",
            image: `${import.meta.env.BASE_URL}Destinations/Dickwella/highlights/hummanaya.webp`,
            button: {
                label: "Explore",
                to: "/places/dickwella/hummanaya-blowhole",
            },
            },
        ],
    }
  ],
};

export default DickwellaArticle;