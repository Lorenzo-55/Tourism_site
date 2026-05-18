const SigiriyaLionRockArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Sigiriya", to: "/places/sigiriya" },
    { label: "Lion Rock" },
  ],

  hero: {
    kicker: "UNESCO World Heritage Site",
    title: "Lion Rock",
    subtitle:
      "Sri Lanka’s iconic rock fortress, famous for ancient gardens, royal ruins, frescoes, mirror wall poetry, and panoramic views across the jungle plains.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Sigiriya/lion-rock/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Sri Lanka’s Legendary Rock Fortress",
    paragraphs: [
      "Lion Rock is one of Sri Lanka’s most famous landmarks and one of the finest surviving examples of ancient urban planning, architecture, engineering, and art.",
      "Rising dramatically above the central plains, the UNESCO World Heritage Site preserves the story of King Kashyapa, his royal citadel, and one of the most remarkable palace-fortress complexes in South Asia.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history-and-king-kashyapa",
      kicker: "History",
      title: "King Kashyapa and the Rise of Sigiriya",
      align: "left",

      content: [
        {
          type: "p",
          text: "Sigiriya’s history is closely tied to a dramatic royal struggle for power during the 5th century CE.",
        },

        {
          type: "p",
          text: "The fortress was built between 477 and 495 CE by King Kashyapa I, who moved his capital from Anuradhapura to this highly defensible rock outcrop.",
        },

        {
          type: "split-paragraph",
          heading: "A Palace Built for Protection",
          headingLevel: "h4",

          paragraphs: [
            "According to tradition, Kashyapa seized the throne after killing his father, King Dhatusena, by walling him up alive.",
            "Fearing revenge from his half-brother Mogallan, the rightful heir, Kashyapa transformed the 200-meter-high rock into a fortified royal capital.",
            "At the summit, he built a palace complex surrounded by defensive walls, gardens, moats, and elaborate water systems.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Sigiriya/lion-rock/rock-fortress.webp`,
          imageAlt: "Sigiriya Lion Rock rising above the surrounding landscape",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "After 18 years, Mogallan returned with an army from South India. During the battle, Kashyapa’s army abandoned him, and the king took his own life.",
        },

        {
          type: "p",
          text: "After the fall of Kashyapa, Sigiriya once again became a Buddhist monastery and remained in use until it was eventually abandoned around the 14th century.",
        },
      ],
    },

    {
      type: "text",
      id: "gardens-and-waterworks",
      kicker: "Ancient Engineering",
      title: "Water Gardens and Royal Landscape Design",
      align: "left",

      content: [
        {
          type: "p",
          text: "At the foot of Lion Rock lies one of the oldest surviving landscaped garden systems in Asia.",
        },

        {
          type: "p",
          text: "The gardens combine symmetry, water engineering, architecture, and natural rock formations to create a ceremonial approach toward the fortress.",
        },

        {
          type: "split-paragraph",
          heading: "Ancient Hydraulic Systems",
          headingLevel: "h4",

          paragraphs: [
            "The water gardens include basins, canals, pools, and fountains supplied by an advanced hydraulic system.",
            "Some of the fountains still function during the rainy season, more than 1,600 years after they were first constructed.",
            "The layout shows the sophistication of ancient Sri Lankan engineering and the royal ambition behind the Sigiriya complex.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Sigiriya/lion-rock/water-gardens.webp`,
          imageAlt: "Water gardens at Sigiriya Lion Rock",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "main-sights",
      kicker: "Main Sights",
      title: "What to See on the Climb",
      align: "left",

      content: [
        {
          type: "p",
          text: "The climb to the summit passes several of Sigiriya’s most important artistic and architectural features.",
        },

        {
          type: "split-paragraph",
          heading: "Lion’s Paw Terrace",
          headingLevel: "h4",

          paragraphs: [
            "About halfway up the climb, visitors reach the famous Lion’s Paw Terrace.",
            "Only the massive paws and claws of the original lion sculpture remain today.",
            "In the ancient design, the staircase to the summit passed through the open mouth of a giant lion, giving the site its name: Lion Rock.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Sigiriya/lion-rock/lions-paw-terrace.webp`,
          imageAlt: "Lion's Paw Terrace at Sigiriya",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "<strong>The Mirror Wall:</strong> This polished wall was once so smooth that it reflected the image of those walking beside it. Today, it is famous for ancient graffiti and poems written by visitors between the 6th and 14th centuries.",
        },

        {
          type: "p",
          text: "<strong>The Sigiriya Frescoes:</strong> In a sheltered rock alcove reached by a spiral staircase are 21 surviving frescoes of graceful female figures known as the “Cloud Maidens.” These paintings are among the finest examples of classical Sinhalese art.",
        },

        {
          type: "p",
          text: "<strong>The Summit Palace:</strong> The top of the rock contains the remains of King Kashyapa’s palace, including building foundations, a royal throne, a large pond, and broad views across the surrounding jungle and rice fields.",
        },
      ],
    },

    {
      type: "text",
      id: "summit-experience",
      kicker: "Summit",
      title: "The Palace at the Top",
      align: "left",

      content: [
        {
          type: "p",
          text: "The summit of Lion Rock preserves the remains of one of the most unusual royal palaces in Sri Lankan history.",
        },

        {
          type: "split-paragraph",
          heading: "Views Across the Central Plains",
          headingLevel: "h4",

          paragraphs: [
            "From the summit, visitors can see a 360-degree panorama of forest, villages, lakes, and distant mountains.",
            "The foundations of the palace buildings reveal how carefully the flat summit was organized into royal living spaces, reservoirs, and defensive areas.",
            "The climb is demanding, but the view from the top is one of the most memorable experiences in Sigiriya.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Sigiriya/lion-rock/summit-view.webp`,
          imageAlt: "View from the summit of Sigiriya Lion Rock",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Climbing Lion Rock",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Climb:</strong> The ascent includes approximately 1,860 steps and is physically demanding, especially in hot weather.",
        },

        {
          type: "p",
          text: "<strong>Duration:</strong> Depending on pace and crowds, the climb can take around 45 minutes to 2 hours.",
        },

        {
          type: "p",
          text: "<strong>Best Time:</strong> Early morning just after opening around 7:00 AM or late afternoon is recommended to avoid the strongest heat and largest crowds.",
        },

        {
          type: "p",
          text: "<strong>Entrance Fee:</strong> The ticket price is relatively high compared with many other Sri Lankan attractions.",
        },

        {
          type: "p",
          text: "<strong>What to Bring:</strong> Sturdy shoes, plenty of water, sunscreen, and a hat are strongly recommended.",
        },

        {
          type: "p",
          text: "<strong>Alternative Viewpoint:</strong> Pidurangala Rock nearby offers a shorter and cheaper climb with one of the best panoramic views of Sigiriya itself.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=7.957240198516755,80.76022480853631",
        },
      ],
    },
  ],
};

export default SigiriyaLionRockArticle;