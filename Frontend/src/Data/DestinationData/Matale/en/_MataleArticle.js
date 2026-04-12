const MataleArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Matale" },
  ],

  hero: {
    kicker: "Central Province",
    title: "Matale",
    subtitle:
      "A historic highland city shaped by ancient Buddhist heritage, colonial resistance, agriculture, and a diverse cultural identity.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Matale/matale-hero.jpg`,
  },

  overview: {
    kicker: "Overview",
    title: "A Historic and Agricultural Center in the Central Highlands",
    paragraphs: [
      "Matale is a major city in Sri Lanka’s Central Province and an important urban center with deep historical roots. Positioned within a fertile highland valley, it has long been connected to religion, trade, agriculture, and political power, giving it a prominent place in the island’s past and present.",
      "Today, Matale serves as the administrative capital of the Matale District and remains one of the key cities of the Central Province. It is known for its ancient religious heritage, spice cultivation, plantation landscapes, and multi-ethnic urban character.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history",
      kicker: "History",
      title: "Ancient Significance and Colonial Resistance",
      align: "left",
      paragraphs: [
        "Matale’s history stretches back to the pre-historic era, and the region later became closely tied to some of the most important religious and political developments in Sri Lanka. It was also an important part of the Kandyan Kingdom, with its location giving it strategic value as a link between the central highlands and the eastern coast.",
        "One of the most significant landmarks in the area is the Aluvihare Rock Temple, where the Tripitaka, the sacred Buddhist scriptures, was first written down in Pali on palm leaves during the reign of King Walagamba between 89 and 77 B.C. This event is regarded as one of the most important moments in Sri Lankan Buddhist history.",
        "During the colonial period, Matale remained strategically important. The British built Fort MacDowall in the region, and the area later became the center of the Matale Rebellion of 1848, a major uprising against British colonial rule led by figures such as Weera Puran Appu and Gongalegoda Banda. Colonial plantation expansion also reshaped the landscape, with tea, rubber, and cacao becoming part of the district’s economic structure.",
      ],
    },

    {
      type: "text",
      id: "culture",
      kicker: "Culture",
      title: "Religious Heritage and Cultural Harmony",
      align: "left",
      paragraphs: [
        "Matale reflects a long history of religious and cultural coexistence. The region contains sites that show how different traditions developed alongside one another and, in some cases, directly influenced local architecture and worship.",
        "The Nalanda Gedige, located near Matale, is one of the most remarkable examples of this. The site is known for its blend of Buddhist and Hindu architectural styles and is believed to have served as a place of worship for both religions. The city is also home to the Sri Muthumariamman Temple, a large and vibrant Hindu shrine that remains an important spiritual and cultural landmark.",
      ],
    },

    {
      type: "text",
      id: "economy",
      kicker: "Economy",
      title: "Agriculture, Plantations, and Local Trade",
      align: "left",
      content: [
        {
          type: "p",
          text: "Matale’s economy is strongly rooted in agriculture, supported by the fertile lands of the surrounding valley. The region is especially known for its spice gardens, which produce crops such as pepper, cloves, coffee, and cocoa.",
        },
        {
          type: "p",
          text: "Tea and rubber plantations also remain important across the district, continuing a pattern established during the colonial period. Alongside agriculture, tourism, business, and trade contribute to the city’s economy and support its role as a regional center.",
        },
        {
          type: "split-paragraph",
          heading: "Spice Gardens and Fertile Landscapes",
          headingLevel: "h4",
          paragraphs: [
            "Matale is widely associated with Sri Lanka’s spice-growing tradition. The district’s climate and terrain support a range of crops, making it one of the country’s best-known areas for spice cultivation.",
            "These agricultural landscapes are not only economically important but also form part of the region’s identity, linking everyday livelihoods with the sensory and cultural appeal of the central highlands.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Matale/spice-garden.jpg`,
          imageAlt: "Spice garden landscape in Matale",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "urban-life",
      kicker: "City Life",
      title: "A Growing Multi-Ethnic Urban Center",
      align: "left",
      paragraphs: [
        "Today, Matale is the administrative capital of its district and the second-largest urban center in the Central Province after Kandy. It functions as both a government and commercial hub while maintaining strong ties to its agricultural surroundings.",
        "The city has a multi-ethnic and multi-cultural population, with Sinhalese forming the majority, followed by Muslims and Sri Lankan Tamils. This diversity contributes to Matale’s social and cultural texture, visible in its places of worship, local commerce, and daily life.",
        "Like many expanding urban centers in Sri Lanka, Matale also faces challenges linked to development and population growth. Even so, it continues to balance its historic identity with its role as a modern district capital.",
      ],
    },

    {
        type: "cards",
        kicker: "Highlights",
        title: "Points of Interest",
        align: "center",

        items: [
            {
            image: `${import.meta.env.BASE_URL}Destinations/Matale/colonial-era.jpg`,
            imageAlt: "Matale colonial history",
            title: "Colonial Era and Rebellions",
            description:
                "Matale played a central role during British rule and was the epicenter of the 1848 rebellion, a major uprising led by national figures such as Weera Puran Appu and Gongalegoda Banda.",
            to: "/places/matale/colonial-era-and-rebellions",
            },
            {
            image: `${import.meta.env.BASE_URL}Destinations/Matale/aluvihare.jpg`,
            imageAlt: "Aluvihare Rock Temple",
            title: "Aluvihare Rock Temple",
            description:
                "A major Buddhist site where the Tripitaka was first written down in Pali on palm leaves, marking a defining moment in Sri Lankan religious history.",
            to: "/places/matale/aluvihare-rock-temple",
            },
            {
            image: `${import.meta.env.BASE_URL}Destinations/Matale/muthumariamman.jpg`,
            imageAlt: "Sri Muthumariamman Temple",
            title: "Sri Muthumariamman Temple",
            description:
                "A large and vibrant Hindu temple in Matale, known for its detailed architecture and importance to the local Tamil Hindu community.",
            to: "/places/matale/sri-muthumariamman-temple",
            },
            {
            image: `${import.meta.env.BASE_URL}Destinations/Matale/nalanda-gedige.jpg`,
            imageAlt: "Nalanda Gedige",
            title: "Nalanda Gedige",
            description:
                "An unique archaeological structure blending Buddhist and Hindu architectural elements, believed to have served as a shared place of worship.",
            to: "/places/matale/nalanda-gedige",
            },
            {
            image: `${import.meta.env.BASE_URL}Destinations/Matale/fort-macdowall.jpg`,
            imageAlt: "Fort MacDowall",
            title: "Fort MacDowall",
            description:
                "A British-era fort built for strategic control of the region, reflecting Matale’s importance during the colonial period.",
            to: "/places/matale/fort-macdowall",
            },
        ],
    }
  ],
};

export default MataleArticle;