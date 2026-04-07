const HambantotaArticle = {
  breadcrumbItems: [
    { label: "Places", to: "/places" },
    { label: "Hambantota", to: "/places/hambantota" },
  ],

  hero: {
    kicker: "South Coast",
    title: "Hambantota",
    subtitle:
      "A developing coastal city shaped by large-scale infrastructure, agriculture, and access to some of Sri Lanka’s most important wildlife regions.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Hambantota/hero/hambantota-hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Development, Nature, and Strategic Growth",
    paragraphs: [
      "Hambantota is a city on the southeastern coast of Sri Lanka, known for its growing infrastructure, natural surroundings, and strategic importance in trade and transport.",
      "While rooted in agriculture and traditional industries, the region is rapidly transforming through major development projects, positioning itself as a future economic hub.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "population-demographics",
      kicker: "Population",
      title: "Population and Demographics",
      align: "left",
      paragraphs: [
        "Hambantota District has an estimated population of around 680,981 people as of 2023, making it a moderately populated region compared to other districts in Sri Lanka.",
        "The majority of the population is Sinhalese, and Buddhism is the dominant religion. There are also smaller communities of Muslims, Christians, and Hindus, contributing to a diverse but predominantly Sinhala-Buddhist cultural identity.",
      ],
    },

    {
      type: "text",
      id: "economy-infrastructure",
      kicker: "Economy",
      title: "Economy and Infrastructure",
      align: "left",
      content: [
        {
          type: "p",
          text: "Hambantota’s economy has traditionally been based on agriculture, with a large portion of the workforce engaged in paddy cultivation, livestock farming, and related activities such as curd and milk production.",
        },
        {
          type: "p",
          text: "Salt production is another defining feature of the region, with extensive salt plains forming a prominent part of the landscape and contributing to local industry.",
        },
        {
          type: "p",
          text: "In recent years, Hambantota has undergone major transformation through large-scale infrastructure and investment projects aimed at turning it into a key trade and industrial hub in South Asia.",
        },

        {
          type: "split-paragraph",
          heading: "Port and Industrial Development",
          headingLevel: "h4",
          paragraphs: [
            "The Port of Hambantota is a major deep-sea port designed to handle international shipping, including bunkering, shipbuilding, and logistics operations. It is strategically located along major maritime routes, making it significant for regional trade.",
            "Alongside the port, plans for a Special Economic Zone (SEZ) include factories, LNG plants, and refineries, aimed at attracting foreign investment and boosting industrial growth in the region.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Hambantota/economy/port.webp`,
          imageAlt: "Port of Hambantota",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "Hambantota is also supported by major infrastructure projects that improve connectivity. The Mattala Rajapaksa International Airport (MRIA), located nearby, serves as Sri Lanka’s second international airport.",
        },
        {
          type: "p",
          text: "The region is connected by the A2 highway, as well as ongoing projects such as the extension of the Southern Expressway and the Matara–Kataragama Railway Line, further integrating Hambantota with the rest of the country.",
        },
        {
          type: "p",
          text: "In addition, renewable energy initiatives such as the Hambantota Wind Farm highlight the region’s role in future energy development.",
        },
      ],
    },

    {
      type: "text",
      id: "tourism",
      kicker: "Tourism",
      title: "What to See for Tourists",
      align: "left",
      content: [
        {
          type: "p",
          text: "Hambantota serves as a gateway to some of Sri Lanka’s most famous national parks and natural attractions, making it an important base for wildlife tourism.",
        },

        {
          type: "split-paragraph",
          heading: "Wildlife and Nature",
          headingLevel: "h4",
          paragraphs: [
            "Yala National Park, located nearby, is Sri Lanka’s second-largest national park and is internationally known for having one of the highest densities of leopards. It is also home to elephants, sloth bears, crocodiles, and a wide variety of bird species.",
            "Bundala National Park is a UNESCO-designated biosphere reserve and a major destination for birdwatchers, especially during the migratory season from October to April. It is particularly famous for flamingos and other aquatic birds.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Hambantota/tourism/yala.webp`,
          imageAlt: "Wildlife near Hambantota",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "Another unique attraction is the Ridiyagama Safari Park, the country’s first man-made open-concept safari park. It offers a different kind of wildlife experience compared to traditional national parks, allowing visitors to observe animals in large, controlled environments.",
        },
      ],
    },

    {
      type: "cards",
      kicker: "Explore",
      title: "Categories of Attractions",
      align: "center", // "left" | "center"

      items: [
        {
          title: "Wildlife & Nature",
          description: "National parks, reserves, and natural ecosystems.",
          image: `${import.meta.env.BASE_URL}Destinations/Hambantota/categories/wildlife.webp`,
        },
        {
          title: "Gardens & Natural Attractions",
          description: "Scenic landscapes and environmental highlights.",
          image: `${import.meta.env.BASE_URL}Destinations/Hambantota/categories/gardens.webp`,
        },
        {
          title: "Religious & Cultural Sites",
          description: "Temples, shrines, and places of cultural importance.",
          image: `${import.meta.env.BASE_URL}Destinations/Hambantota/categories/religious.webp`,
        },
        {
          title: "Historical & Architecture",
          description: "Sites reflecting the region’s built heritage and development.",
          image: `${import.meta.env.BASE_URL}Destinations/Hambantota/categories/history.webp`,
        },
      ],
    },
  ],
};

export default HambantotaArticle;