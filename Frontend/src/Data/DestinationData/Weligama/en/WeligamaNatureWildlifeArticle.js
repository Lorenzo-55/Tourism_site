const WeligamaNatureWildlifeArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Weligama", to: "/places/weligama" },
    { label: "Nature & Wildlife" },
  ],

  hero: {
    kicker: "Nature & Wildlife",
    title: "Nature & Wildlife",
    subtitle:
      "Whale watching from nearby Mirissa, with chances to see blue whales, sperm whales, dolphins, sea turtles, and other marine life.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Weligama/nature-wildlife/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Marine Wildlife Near Weligama",
    paragraphs: [
      "Weligama is a convenient base for exploring the marine wildlife of Sri Lanka’s southern coast, especially through whale watching tours departing from nearby Mirissa.",
      "Mirissa is one of the world’s best-known locations for spotting blue whales, with seasonal boat tours also offering chances to see sperm whales, dolphins, sea turtles, and other ocean wildlife.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "whale-watching-mirissa",
      kicker: "Whale Watching",
      title: "Whale Watching from Mirissa",
      align: "left",

      content: [
        {
          type: "p",
          text: "Whale watching is one of the main wildlife experiences near Weligama, with tours usually departing from Mirissa Harbour.",
        },

        {
          type: "p",
          text: "Mirissa is located a short distance from Weligama and is especially famous for blue whale sightings during the south coast whale watching season.",
        },

        {
          type: "split-paragraph",
          heading: "Why Mirissa Is Special",
          headingLevel: "h3",

          paragraphs: [
            "A deep-sea trench just offshore from Mirissa creates a nutrient-rich environment that attracts large marine mammals.",
            "This makes the area one of the most reliable places in the world to see blue whales during the peak season.",
            "Tours usually head out early in the morning when the sea is calmer and wildlife viewing conditions are better.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Weligama/nature-wildlife/whale-watching.webp`,
          imageAlt: "Whale watching boat near Mirissa",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "best-time",
      kicker: "Season",
      title: "Best Time to Go",
      align: "left",

      content: [
        {
          type: "p",
          text: "The best season for whale watching from Mirissa is generally from November to April, when the seas are calmer between monsoon periods.",
        },

        {
          type: "p",
          text: "<strong>Peak Months:</strong> December, January, February, and March usually offer the highest chance of sightings.",
        },

        {
          type: "p",
          text: "<strong>Off-Season:</strong> From May to October, the southwest monsoon brings rougher seas and lower visibility, and many reputable operators suspend tours.",
        },

        {
          type: "p",
          text: "<strong>Best Time of Day:</strong> Most tours leave between 6:00 AM and 7:00 AM because the ocean is usually calmer in the morning.",
        },
      ],
    },

    {
      type: "text",
      id: "marine-life",
      kicker: "Marine Life",
      title: "What You Can See",
      align: "left",

      content: [
        {
          type: "p",
          text: "The waters off Mirissa are known for a wide variety of cetaceans and other marine life.",
        },

        {
          type: "split-paragraph",
          heading: "Whales, Dolphins, and Sea Life",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Blue Whales:</strong> The main attraction and the species most strongly associated with Mirissa whale watching.",
            "<strong>Sperm Whales:</strong> Large toothed whales that are also commonly spotted in the region.",
            "<strong>Other Whales:</strong> Bryde’s whales, fin whales, sei whales, and occasionally humpback whales or orcas may be seen.",
            "<strong>Dolphins:</strong> Spinner dolphins and bottlenose dolphins often travel in lively pods and may accompany boats.",
            "<strong>Other Marine Life:</strong> Flying fish and sea turtles are sometimes seen during tours.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Weligama/nature-wildlife/blue-whale.webp`,
          imageAlt: "Blue whale near Sri Lanka's southern coast",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "tour-details",
      kicker: "Tour Information",
      title: "Tour Operators, Duration, and Cost",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Tour Duration:</strong> Most tours last around 3 to 5 hours, depending on sea conditions and how far boats need to travel to find whales.",
        },

        {
          type: "p",
          text: "<strong>Typical Cost:</strong> Reputable shared boat tours usually cost around USD 50–60 per adult and often include government taxes, light breakfast, snacks, and water.",
        },

        {
          type: "p",
          text: "<strong>Booking:</strong> During the peak season, it is best to book directly with a reputable operator or through a trusted hotel.",
        },

        {
          type: "h3",
          text: "Choosing an Ethical Operator",
        },

        {
          type: "p",
          text: "Visitors should choose operators that follow ethical whale watching guidelines and prioritize the welfare of marine animals.",
        },

        {
          type: "p",
          text: "Responsible operators maintain a respectful distance, slow down near whales, avoid chasing animals, and do not crowd whale pods.",
        },

        {
          type: "p",
          text: "Some companies offer a free second trip if no whales are seen, though government tax may still apply.",
        },
      ],
    },

    {
      type: "text",
      id: "travel-tips",
      kicker: "Travel Tips",
      title: "Essential Tips for a Smooth Trip",
      align: "left",

      content: [
        {
          type: "split-paragraph",
          heading: "Before You Go",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Take Motion Sickness Tablets:</strong> The ocean can be rough even during peak season, so take seasickness medication before departure if needed.",
            "<strong>Dress in Layers:</strong> Early mornings can feel cool on the boat, but the sun becomes strong later.",
            "<strong>Sun Protection:</strong> Bring sunscreen, sunglasses, and a hat for several hours on open water.",
            "<strong>Camera:</strong> A camera with good zoom is useful because boats should maintain distance from whales.",
            "<strong>Arrive Early:</strong> Be at Mirissa Harbour around 30–45 minutes before departure.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Weligama/nature-wildlife/mirissa-harbour.webp`,
          imageAlt: "Mirissa Harbour early morning whale watching departure",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "Always follow the crew’s instructions, especially when whales or dolphins are sighted.",
        },

        {
          type: "button",
          label: "View Mirissa Harbour on Google Maps",
          href: "https://www.google.com/maps?q=5.9475774856525305,80.45154772626282",
        },
      ],
    },
  ],
};

export default WeligamaNatureWildlifeArticle;