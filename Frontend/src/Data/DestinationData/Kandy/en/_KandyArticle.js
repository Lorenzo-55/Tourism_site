const KandyArticle = {
  breadcrumbItems: [
    { label: "Places", to: "/places" },
    { label: "Kandy", to: "/places/kandy" },
  ],

  hero: {
    kicker: "Central Province",
    title: "Kandy",
    subtitle:
      "A historic hill capital where royal power, Buddhist heritage, and modern city life come together in one of Sri Lanka’s most important cultural centers.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kandy/hero/kandy-hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Royal Legacy and Cultural Importance",
    paragraphs: [
      "Kandy is a fascinating city in Sri Lanka, known for its rich history, Buddhist shrines, and picturesque surroundings.",
      "As the last capital of the independent Sinhalese kingdom and now one of the country’s most important cultural and religious cities, Kandy holds a central place in both Sri Lanka’s history and present-day identity.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "kandy-history",
      kicker: "History",
      title: "From Kingdom Capital to Modern Cultural City",
      align: "left",
      content: [
        {
          type: "p",
          text: "Kandy, originally known as Senkadagalapura, became the capital of the independent Kingdom of Kandy and remained the last independent Sinhalese kingdom in Sri Lanka. Its location in the central highlands gave it both strategic protection and symbolic importance.",
        },
        {
          type: "p",
          text: "The city’s significance increased even more after the Tooth Relic of the Buddha was brought to Kandy. Historically, the ruler who held this relic was seen as having the right to rule the country, making the city not only a royal capital but also a sacred political center.",
        },
        {
          type: "p",
          text: "For centuries, the Kingdom of Kandy was the only Sri Lankan kingdom able to resist early European colonial expansion. The Portuguese focused on controlling the fertile coastal regions, while Kandy maintained its power in the more difficult inland terrain. This created a long period of conflict and rivalry.",
        },
        {
          type: "p",
          text: "The kingdom’s relationship with the Dutch East India Company was more complex. At different times, it involved alliances, trade arrangements, and conflict, showing that Kandy was not simply isolated but deeply engaged in the wider struggle for control of the island.",
        },
        {
          type: "split-paragraph",
          heading: "The Fall of the Kingdom",
          headingLevel: "h4",
          paragraphs: [
            "The final phase of Kandy’s independence came with the rise of British power after they took over Dutch territories in Sri Lanka. The relationship between Kandy and the British shaped the last chapter in the struggle for control of the island.",
            "In 1815, the independent kingdom came to an end with the signing of the Kandyan Convention. This marked the fall of the Kandyan monarchy and the incorporation of the last independent Sri Lankan kingdom into British rule.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Kandy/history/kandyan-legacy.webp`,
          imageAlt: "Historical legacy of Kandy",
          mediaPosition: "right",
        },
        {
          type: "p",
          text: "Today, Kandy is the capital of the Central Province and remains one of the country’s most important cultural and religious centers. Recognized as the Holy City of Kandy, it is also a UNESCO World Heritage Site, reflecting both its historic prestige and its living spiritual importance.",
        },
      ],
    },

    {
      type: "text",
      id: "population-and-city-role",
      kicker: "City Profile",
      title: "Population and Urban Importance",
      align: "left",
      paragraphs: [
        "Kandy is one of the larger cities in Sri Lanka and has an estimated population of around 112,000 within the city center. As the capital of the Kandy District and the Central Province, it plays an important administrative role in addition to its cultural status.",
        "The city functions as a major urban center in the hill country, linking government, religion, commerce, education, and tourism. This gives Kandy an importance that goes beyond its physical size.",
      ],
    },

    {
      type: "text",
      id: "kandy-economy",
      kicker: "Economy",
      title: "Tourism, Trade, and the Regional Economy",
      align: "left",
      content: [
        {
          type: "p",
          text: "The economy in and around Kandy is shaped by several key sectors, with tourism standing out as one of the most important. As a UNESCO World Heritage city and the home of the Temple of the Tooth Relic and the Royal Botanic Gardens, Kandy attracts large numbers of domestic and international visitors throughout the year.",
        },
        {
          type: "p",
          text: "Tourism supports a wide range of livelihoods in the city, including hotels, restaurants, transport services such as tuk-tuks and taxis, souvenir businesses, and other visitor-related services. This makes Kandy one of the strongest tourism-centered urban economies in Sri Lanka.",
        },
        {
          type: "p",
          text: "The wider regional economy is also linked to agriculture and plantations. The Kandy Plateau is known for tropical cultivation, especially tea, which has long been historically and economically important to the surrounding hill country. Paddy cultivation also remains part of the district’s agricultural base.",
        },
        {
          type: "split-paragraph",
          heading: "Trade and Economic Context",
          headingLevel: "h4",
          paragraphs: [
            "Local trade is another important part of Kandy’s economy. The Kandy Municipal Central Market is a busy commercial center where vegetables, fruits, spices, clothing, and everyday goods are sold, supporting both local residents and the surrounding region. Small and medium-sized enterprises, along with microenterprises, also contribute to the city’s economic activity.",
            "Kandy’s economy also exists within the broader context of Sri Lanka’s national economy, which is dominated by the services sector, followed by industry and agriculture. In recent years, the country’s economic crisis has affected living conditions across Sri Lanka, including Kandy, where changing costs and rising poverty have influenced the social and economic environment.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Kandy/main/market.webp`,
          imageAlt: "Trade and daily life in Kandy",
          mediaPosition: "left",
        },
        {
          type: "p",
          text: "Because of this mix of religion, tourism, administration, trade, and surrounding agricultural production, Kandy has a diverse economy with both local and national importance. It is a city where heritage and daily commerce remain closely connected.",
        },
      ],
    },

    {
      type: "cards",
      kicker: "Explore",
      title: "Points of Interest",
      align: "center",
      items: [
        {
          title: "History",
          description:
            "Explore the royal and colonial history that shaped Kandy into the last independent kingdom of Sri Lanka.",
          image: `${import.meta.env.BASE_URL}Destinations/Kandy/poi/history.webp`,
          imageAlt: "History of Kandy",
          to: "/places/kandy/history",
        },
        {
          title: "Religious / Cultural",
          description:
            "Discover sacred sites, Buddhist heritage, and the cultural traditions that define Kandy’s identity.",
          image: `${import.meta.env.BASE_URL}Destinations/Kandy/poi/religious-cultural.webp`,
          imageAlt: "Religious and cultural landmarks in Kandy",
          to: "/places/kandy/religious-cultural",
        },
        {
          title: "City Highlights",
          description:
            "See the main urban attractions, viewpoints, and everyday landmarks that shape the city experience.",
          image: `${import.meta.env.BASE_URL}Destinations/Kandy/poi/city-highlights.webp`,
          imageAlt: "City highlights in Kandy",
          to: "/places/kandy/city-highlights",
        },
        {
          title: "Museums & Heritage",
          description:
            "Visit museums and heritage sites that preserve the memory of Kandyan royalty, religion, and local history.",
          image: `${import.meta.env.BASE_URL}Destinations/Kandy/poi/museums-heritage.webp`,
          imageAlt: "Museums and heritage in Kandy",
          to: "/places/kandy/museums-heritage",
        },
        {
          title: "Nature & Gardens",
          description:
            "Enjoy botanical gardens, lake views, and the green landscapes that surround the hill capital.",
          image: `${import.meta.env.BASE_URL}Destinations/Kandy/poi/nature-gardens.webp`,
          imageAlt: "Nature and gardens in Kandy",
          to: "/places/kandy/nature-gardens",
        },
        {
          title: "Excursions",
          description:
            "Use Kandy as a base for nearby hill country trips, scenic routes, and cultural day excursions.",
          image: `${import.meta.env.BASE_URL}Destinations/Kandy/poi/excursions.webp`,
          imageAlt: "Excursions from Kandy",
          to: "/places/kandy/excursions",
        },
      ],
    },
  ],
};

export default KandyArticle;