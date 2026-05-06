const DickwellaMarketArticle = {
    breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Dickwella", to: "/places/dickwella" },
    { label: "Dickwella Market" },
    ],

  hero: {
    kicker: "Market & Culture",
    title: "Dickwella Market",
    subtitle:
      "One of the largest and busiest traditional markets in southern Sri Lanka.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/DickwellaMarket/dickwella1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Bustling Local Marketplace",
    paragraphs: [
      "The town center of Dickwella is a busy commercial area, and its weekly market is considered one of the largest traditional markets in Sri Lanka.",
      "Held mainly on Saturdays, the market attracts vendors and visitors from across the surrounding region, creating a lively atmosphere filled with fresh produce, seafood, spices, clothing, household goods, and local handicrafts.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "market-day",
      kicker: "Market Schedule",
      title: "Market Days and Opening Times",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Primary Market Day",
        },
        {
          type: "p",
          text: "The main public market takes place every Saturday.",
        },

        {
          type: "h3",
          text: "Operating Hours",
        },
        {
          type: "p",
          text: "The market generally operates from around 6:00 AM to 6:00 PM.",
        },
        {
          type: "p",
          text: "Morning is usually considered the best time to visit, when produce is freshest and the market is at its busiest.",
        },

        {
          type: "h3",
          text: "Other Market Activity",
        },
        {
          type: "p",
          text: "Some smaller market activity and local trading can also be found on Sundays, especially closer to the beach areas, though the official main market is held on Saturdays.",
        },
      ],
    },

    {
      type: "text",
      id: "products",
      kicker: "Shopping",
      title: "What You Can Find",
      align: "left",

      content: [
        {
          type: "split-paragraph",
          heading: "",
          headingLevel: "h4",

          paragraphs: [
            "The Dickwella Market is a lively commercial hub where vendors from surrounding villages and towns gather to sell a wide variety of goods.",
            "<strong>Fresh Produce:</strong> Colourful displays of fruits, vegetables, and flowers are among the most prominent sights in the market.",
            "<strong>Seafood:</strong> Freshly caught fish and seafood are widely available due to Dickwella’s coastal location.",
            "<strong>Spices:</strong> Visitors can find aromatic Sri Lankan spices including cinnamon, pepper, and curry blends.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/DickwellaMarket/dickwella2.webp`,
          imageAlt: "Fresh produce and local vendors at Dickwella Market",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "<strong>Local Goods:</strong> Traditional clay pots, incense, handcrafted items, and locally produced goods are commonly sold throughout the market.",
        },

        {
          type: "p",
          text: "<strong>General Merchandise:</strong> The market also includes household items, cookware, clothing such as t-shirts and beachwear, and various trinkets and accessories.",
        },
      ],
    },

    {
      type: "text",
      id: "experience",
      kicker: "Local Culture",
      title: "Visitor Experience",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Experience Local Life",
        },
        {
          type: "p",
          text: "Visiting the market is considered one of the best ways to experience the daily life and atmosphere of Dickwella.",
        },
        {
          type: "p",
          text: "The market offers a chance to observe bargaining, interact with local vendors, and experience the rhythm of a busy Sri Lankan town.",
        },

        {
          type: "h3",
          text: "Sample Local Food",
        },
        {
          type: "p",
          text: "Street stalls and food vendors sell snacks, refreshments, and local ingredients throughout the market area.",
        },

        {
          type: "h3",
          text: "Shop for Souvenirs",
        },
        {
          type: "p",
          text: "The market is also a good place to purchase local spices, handicrafts, and small souvenirs at relatively affordable prices.",
        },

        {
          type: "split-paragraph",
          heading: "Location",
          headingLevel: "h4",

          paragraphs: [
            "The market is located in the town center of Dickwella along the main road connecting Matara and Tangalle.",
            "Its central location makes it easily accessible for both locals and visitors staying along the southern coast.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/DickwellaMarket/dickwella3.webp`,
          imageAlt: "Crowds and stalls at Dickwella Market",
          mediaPosition: "left",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=XMGX%2BPFR%2C%20Dikwella%2C%20Sri%20Lanka",
        },
      ],
    },
  ],
};

export default DickwellaMarketArticle;