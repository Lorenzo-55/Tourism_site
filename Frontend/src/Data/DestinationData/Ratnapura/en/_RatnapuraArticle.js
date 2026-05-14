const RatnapuraArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Ratnapura" },
  ],

  hero: {
    kicker: "City of Gems",
    title: "Ratnapura",
    subtitle: "Sri Lanka’s gem capital, where centuries-old traditions of mining and trade continue to shape the city’s identity.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Ratnapura/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Sri Lanka’s Gem Capital",
    paragraphs: [
      "Ratnapura, often called the 'City of Gems,' is the primary hub for Sri Lanka's precious and semi-precious stone industry.",
      "Set in a region rich in mineral deposits and surrounded by lush landscapes, the city blends natural beauty with a long-standing tradition of gem mining and trade that has attracted merchants and explorers for centuries.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "gems",
      kicker: "Gem Industry",
      title: "Gem Mines and Industry",
      align: "left",
      content: [
        {
          type: "h3",
          text: "The City of Gems",
        },
        {
          type: "p",
          text: "The name Ratnapura is Sanskrit for 'city of gems,' and the area is globally famous for its gem mining, producing stones like sapphires (including the highly valued blue and star sapphires), rubies, cat's eyes, and more. For centuries, Ratnapura has been one of the most important gem-producing regions in the world, supplying stones to international markets and royal collections. The surrounding riverbeds and alluvial plains are particularly rich in gem-bearing gravel, making the region uniquely suited for mining.",
        },

        {
          type: "h3",
          text: "Gem Mines",
        },
        {
          type: "p",
          text: "There are an estimated 20,000 gem mines in Ratnapura. Tourists can visit active gem pits to witness traditional mining methods, including pit digging, washing, and sorting of gravel known as illama, and even try their hand at gem panning. These techniques have remained largely unchanged for generations, relying on manual labor and local knowledge rather than heavy machinery. Visiting a mine offers a direct insight into the daily life of miners and the risks and rewards of the trade.",
        },

        {
          type: "h3",
          text: "Gem Markets & Museums",
        },
        {
          type: "p",
          text: "The city features bustling Gem Markets for trading and the Gemological Museum, managed by the National Gem and Jewellery Authority, where visitors can learn about the history, geology, and variety of Sri Lankan gemstones. The Ratnapura Gem Market is where the 'theatre' of the trade unfolds. Unlike a typical retail market with shops and price tags, this is a fast-paced street exchange where negotiations happen in seconds and large sums of money change hands openly, offering a rare glimpse into the authentic workings of the gem industry.",
        },
      ],
    },

        {
      type: "text",
      id: "excursions",
      kicker: "Excursions",
      title: "Excursions from Ratnapura",
      align: "left",
      content: [
        {
          type: "h3",
          text: "Sinharaja Forest Reserve",
        },
        {
          type: "p",
          text: "A UNESCO World Heritage Site and biodiversity hotspot, Sinharaja Forest Reserve is one of Sri Lanka’s last remaining primary rainforests, known for guided treks, endemic wildlife, and exceptional birdwatching opportunities.",
        },
        {
          type: "button",
          label: "Read Chapter: Sinharaja Rainforest",
          to: "/places/sinharaja-rainforest",
        },

        {
          type: "h3",
          text: "Adam's Peak (Sri Pada / Samanalakande)",
        },
        {
          type: "p",
          text: "Located near Ratnapura, Adam’s Peak is a sacred mountain revered by multiple religions. Ratnapura serves as the starting point for one of the main pilgrimage routes to the summit, known for being longer and more challenging than the more commonly used paths.",
        },
        {
          type: "button",
          label: "Read Chapter: Adam’s Peak",
          to: "/places/adams-peak",
        },
      ],
    },

    {
      type: "cards",
      kicker: "Highlights",
      title: "Things to See in Ratnapura",
      align: "center",
      items: [
        {
          image: `${import.meta.env.BASE_URL}Destinations/Ratnapura/gems.webp`,
          imageAlt: "Gem experience Ratnapura",
          title: "Gem Experience",
          description: "Visit mines and markets to experience the full gem journey from extraction to trade.",
          to: "/places/ratnapura-gem-experience",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Ratnapura/museum.webp`,
          imageAlt: "Ratnapura National Museum",
          title: "Ratnapura National Museum",
          description: "Explore regional history and cultural artifacts in a colonial-era building.",
          to: "/places/ratnapura-national-museum",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Ratnapura/dewalaya.webp`,
          imageAlt: "Maha Saman Dewalaya",
          title: "Maha Saman Dewalaya",
          description: "A major Buddhist shrine dedicated to the guardian deity of the region.",
          to: "/places/ratnapura-maha-saman-dewalaya",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Ratnapura/clocktower.webp`,
          imageAlt: "Ratnapura Clock Tower",
          title: "Ratnapura Clock Tower",
          description: "A historic landmark at the center of the city.",
          to: "/places/ratnapura-clock-tower",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Ratnapura/waterfalls.webp`,
          imageAlt: "Waterfalls near Ratnapura",
          title: "Waterfalls",
          description: "The surrounding region is dotted with scenic waterfalls hidden in dense greenery.",
          to: "/places/ratnapura-waterfalls",
        },
      ],
    },
  ],
};

export default RatnapuraArticle;