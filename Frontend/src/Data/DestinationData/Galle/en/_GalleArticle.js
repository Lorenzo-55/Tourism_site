const GalleArticle = {
  breadcrumbItems: [
    { label: "Places", to: "/places" },
    { label: "Galle", to: "/places/galle" },
  ],

  hero: {
    kicker: "South Coast",
    title: "Galle",
    subtitle:
      "A historic coastal city defined by its iconic fort, layered colonial past, and vibrant modern cultural life.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Galle/hero/galle-hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Living Fort and Coastal Heritage",
    paragraphs: [
      "Galle, on the southwestern coast of Sri Lanka, is a stunning city best known for the magnificent Galle Fort, a UNESCO World Heritage Site.",
      "Blending centuries of global trade, colonial architecture, and modern tourism, Galle stands as one of the most unique and visually distinctive cities on the island.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "galle-history",
      kicker: "History",
      title: "From Ancient Port to Colonial Stronghold",
      align: "left",
      content: [
        {
          type: "p",
          text: "Known as Gimhathiththa in ancient times, Galle was a prominent seaport long before Western colonial rule. It served as an important trading hub, connecting Sri Lanka with Persians, Arabs, Greeks, Romans, and Chinese merchants.",
        },
        {
          type: "p",
          text: "Its strategic coastal location made it highly valuable, eventually attracting European powers who transformed it into one of the most fortified cities in the region.",
        },
        {
          type: "split-paragraph",
          heading: "Colonial Transformation",
          headingLevel: "h4",
          paragraphs: [
            "The Portuguese established the first fort in 1588, known as Santa Cruz, marking the beginning of European influence in Galle. Their presence laid the foundation for what would later become a major fortified city.",
            "In 1640, the Dutch captured Galle and extensively rebuilt the fort, constructing the massive granite ramparts and many of the colonial-era buildings that still define the city today. The British later took control in 1796, preserving the fort and using it as an administrative center.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Galle/history/galle-fort.webp`,
          imageAlt: "Galle Fort ramparts",
          mediaPosition: "right",
        },
        {
          type: "p",
          text: "Through these successive colonial periods, Galle evolved into one of the best-preserved fortified cities in Asia, with layers of architecture and culture reflecting its diverse influences.",
        },
      ],
    },

    {
      type: "text",
      id: "galle-nowadays",
      kicker: "Present Day",
      title: "Galle Nowadays",
      align: "left",
      paragraphs: [
        "Today, Galle Fort is often described as a living museum. Rather than being a static historical site, it remains an active and vibrant community where people live, work, and interact within centuries-old walls.",
        "Its narrow cobblestone streets, colonial-era buildings, and fortified ramparts are now home to boutique hotels, stylish cafes, art galleries, unique shops, and religious sites including churches and mosques.",
        "The city blends Sri Lankan daily life with European architectural heritage, creating a distinctive atmosphere that attracts both local and international visitors.",
        "As one of the most important cultural and architectural hubs in Sri Lanka, Galle continues to preserve its history while evolving into a modern destination for tourism, creativity, and coastal living.",
      ],
    },

    {
      type: "cards",
      kicker: "Explore",
      title: "Attractions",
      align: "center", // "left" | "center"

      items: [
        {
          title: "Galle Fort Core",
          description: "The historic heart of the city, with ramparts, streets, and colonial architecture.",
          image: `${import.meta.env.BASE_URL}Destinations/Galle/poi/fort-core.webp`,
          imageAlt: "Galle Fort core",
          to: "/places/galle/fort-core",
        },
        {
          title: "Religious & Cultural Sites",
          description: "Churches, mosques, and temples reflecting the city’s diverse heritage.",
          image: `${import.meta.env.BASE_URL}Destinations/Galle/poi/religious-sites.webp`,
          imageAlt: "Religious sites in Galle",
          to: "/places/galle/religious-sites",
        },
        {
          title: "Museums & Heritage",
          description: "Museums and preserved buildings showcasing Galle’s layered past.",
          image: `${import.meta.env.BASE_URL}Destinations/Galle/poi/museums.webp`,
          imageAlt: "Museums in Galle",
          to: "/places/galle/museums",
        },
        {
          title: "Beaches & Coastal Areas",
          description: "Scenic coastal stretches and beaches surrounding the city.",
          image: `${import.meta.env.BASE_URL}Destinations/Galle/poi/beaches.webp`,
          imageAlt: "Beaches near Galle",
          to: "/places/galle/beaches",
        },
        {
          title: "Activities (Water & Adventure)",
          description: "Surfing, diving, and other coastal activities in the region.",
          image: `${import.meta.env.BASE_URL}Destinations/Galle/poi/activities.webp`,
          imageAlt: "Water activities in Galle",
          to: "/places/galle/activities",
        },
        {
          title: "Surroundings & Local Life",
          description: "Nearby villages, local culture, and everyday coastal living.",
          image: `${import.meta.env.BASE_URL}Destinations/Galle/poi/local-life.webp`,
          imageAlt: "Local life around Galle",
          to: "/places/galle/local-life",
        },
      ],
    },
  ],
};

export default GalleArticle;