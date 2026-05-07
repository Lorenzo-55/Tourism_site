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
      type: "text",
      id: "surrounding-area",
      kicker: "Nearby Highlights",
      title: "What to See in the Surrounding Area",
      align: "left",

      content: [
        {
          type: "split-paragraph",
          heading: "Galle International Stadium",
          headingLevel: "h3",

          paragraphs: [
            "Located just outside the fort walls, the Galle International Stadium is widely considered one of the most picturesque cricket grounds in the world.",
            "The stadium is uniquely framed by the ocean and the historic ramparts of Galle Fort, creating one of the most recognizable sporting settings in Sri Lanka.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Galle/nearby/galle-stadium.webp`,
          imageAlt: "Galle International Stadium",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Galle Markets",
        },

        {
          type: "p",
          text: "Located outside the fort area, the local markets of Galle offer a more authentic glimpse into daily Sri Lankan life.",
        },

        {
          type: "p",
          text: "Visitors can find fresh produce, spices, seafood, household goods, and a busy local atmosphere very different from the more tourist-oriented streets inside the fort.",
        },

        {
          type: "split-paragraph",
          heading: "Yatagala Rajamaha Viharaya Temple",
          headingLevel: "h3",

          paragraphs: [
            "Yatagala Rajamaha Viharaya is an ancient Buddhist temple located a short drive from Galle.",
            "Built among large natural rock formations, the temple is known for its peaceful atmosphere, cave-like surroundings, and historic religious significance.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Galle/nearby/yatagala-temple.webp`,
          imageAlt: "Yatagala Rajamaha Viharaya Temple",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Japanese Peace Pagoda",
        },

        {
          type: "p",
          text: "Located on Rumassala Hill near Unawatuna, the Japanese Peace Pagoda overlooks the coastline and Galle Fort from an elevated viewpoint.",
        },

        {
          type: "p",
          text: "The white pagoda and surrounding hill area are popular for panoramic views, quiet walks, and sunset scenery over the southern coast.",
        },
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
          to: "/places/galle-fort-core",
        },
        {
          title: "Religious & Cultural Sites",
          description: "Churches, mosques, and temples reflecting the city’s diverse heritage.",
          image: `${import.meta.env.BASE_URL}Destinations/Galle/poi/religious-sites.webp`,
          imageAlt: "Religious sites in Galle",
          to: "/places/galle-religious-sites",
        },
        {
          title: "Museums & Heritage",
          description: "Museums and preserved buildings showcasing Galle’s layered past.",
          image: `${import.meta.env.BASE_URL}Destinations/Galle/poi/museums.webp`,
          imageAlt: "Museums in Galle",
          to: "/places/galle-museums",
        },
        {
          title: "Activities (Water & Adventure)",
          description: "Surfing, diving, and other coastal activities in the region.",
          image: `${import.meta.env.BASE_URL}Destinations/Galle/poi/activities.webp`,
          imageAlt: "Water activities in Galle",
          to: "/places/galle-activities",
        },
      ],
    },
  ],
};

export default GalleArticle;