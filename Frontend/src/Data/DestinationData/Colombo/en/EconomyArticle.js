// src/Data/DestinationData/Colombo/en/EconomyArticle.js

const EconomyArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Colombo", to: "/places/colombo" },
    { label: "Economy" },
  ],

  hero: {
    kicker: "ECONOMIC ENGINE",
    title: "Colombo’s Economy",
    subtitle:
      "The financial and commercial core of Sri Lanka, driven by services, trade, and rapid urban development.",
    backgroundImage: "/images/colombo-economy-hero.jpg",
  },

  overview: {
    kicker: "OVERVIEW",
    title: "Structure and Importance",
    subtitle:
      "A service-dominated economy with strong links to global trade and finance.",
    paragraphs: [
      "Colombo’s economy is heavily concentrated in the services and industrial sectors, reflecting Sri Lanka’s broader economic structure where services contribute the majority of national output.",
      "As the country’s commercial capital, Colombo acts as the central hub for finance, trade, logistics, and administration. Its economic performance is closely tied to national conditions, global trade flows, and foreign investment trends.",
    ],
  },

  sections: [
    {
      type: "split",
      kicker: "CORE DRIVER",
      title: "Financial and Services Hub",
      subtitle:
        "The backbone of Colombo’s economic activity.",
      image: "/images/colombo-financial-district.jpg",
      imageAlt: "Colombo financial district skyline",
      paragraphs: [
        "Colombo serves as the financial, legal, and administrative center of Sri Lanka. It hosts the headquarters of the Central Bank, the Colombo Stock Exchange, and nearly all major local and international banks.",
        "The city is also a key logistics hub. The Port of Colombo ranks among the busiest transshipment ports in South Asia, supporting extensive shipping, freight, and warehousing industries.",
        "In recent years, the ICT and Business Process Outsourcing (BPO) sectors have grown rapidly. Colombo attracts international companies with its skilled, English-speaking workforce and competitive operating costs.",
      ],
    },

    {
      type: "cards",
      kicker: "TRADE & INDUSTRY",
      title: "Key Economic Activities",
      subtitle:
        "Colombo remains central to the movement and management of goods and production.",
      items: [
        {
          image: "/images/colombo-port.jpg",
          imageAlt: "Port of Colombo",
          title: "Trade and Logistics",
          description:
            "Colombo is the primary gateway for Sri Lanka’s imports and exports. Nearly all merchandise trade flows through the city, making logistics and port-related services critical to the national economy.",
        },
        {
          image: "/images/garment-industry.jpg",
          imageAlt: "Garment industry",
          title: "Garment and Apparel",
          description:
            "Although manufacturing is spread across the country, Colombo hosts the headquarters, design centers, and export management operations of Sri Lanka’s globally significant apparel industry.",
        },
        {
          image: "/images/tea-processing.jpg",
          imageAlt: "Tea processing",
          title: "Processing Industries",
          description:
            "The city supports industries linked to Sri Lanka’s key exports, including tea, rubber, and coconut products, focusing on processing, packaging, and export coordination.",
        },
      ],
    },

    {
      type: "text",
      kicker: "URBAN GROWTH",
      title: "Development and Real Estate",
      subtitle:
        "Infrastructure and construction are reshaping the city skyline.",
      paragraphs: [
        "Colombo is undergoing rapid urban transformation, driven by both local demand and foreign investment. High-rise residential buildings, commercial towers, and luxury hotels are reshaping the city’s landscape.",
        "A major centerpiece of this growth is the Colombo Port City, a large-scale development built on reclaimed land. Designed as a Special Economic Zone, it aims to position Colombo as a major international financial and business hub in the Indian Ocean region.",
      ],
    },

    {
      type: "split",
      kicker: "GLOBAL CONNECTION",
      title: "Tourism and Business Travel",
      subtitle:
        "The main gateway for international visitors to Sri Lanka.",
      image: "/images/colombo-hotel.jpg",
      imageAlt: "Colombo hotel skyline",
      paragraphs: [
        "Colombo plays a key role in the country’s tourism sector, serving as the primary entry point for international travelers. The city offers a wide range of hotels, restaurants, and entertainment venues catering to both leisure and business visitors.",
        "A significant share of tourism revenue comes from business travel, particularly MICE tourism—meetings, incentives, conferences, and exhibitions—supported by the city’s convention facilities and infrastructure.",
      ],
    },


    {
      type: "text",
      kicker: "CURRENT CONTEXT",
      title: "Economic Outlook",
      subtitle:
        "Stability, investment, and reform shape the current direction.",
      paragraphs: [
        "The performance of Colombo’s economy is closely tied to the broader national outlook. Following a severe economic crisis in recent years, the focus has shifted toward stabilization and recovery.",
        "Efforts are being directed at attracting foreign direct investment, strengthening exports, and implementing structural reforms aimed at improving long-term competitiveness and resilience.",
      ],
    },
  ],
};

export default EconomyArticle;