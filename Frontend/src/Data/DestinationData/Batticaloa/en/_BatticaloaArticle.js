const BatticaloaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Batticaloa", to: "/places/batticaloa" },
  ],

  hero: {
    kicker: "East Coast",
    title: "Batticaloa",
    subtitle:
      "A lagoon city shaped by colonial rule, civil conflict, recovery, and the cultural diversity of Sri Lanka’s eastern coast.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Batticaloa/hero/batticaloa-hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "History, Resilience, and Coastal Identity",
    paragraphs: [
      "Batticaloa is a city with a rich and turbulent past, deeply shaped by colonial powers and the civil war. Today, it is a resilient and diverse city developing into a major hub on Sri Lanka's east coast.",
      "From its lagoon-centered identity and colonial fort to post-war recovery and cultural diversity, Batticaloa reflects both hardship and renewal.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "batticaloa-past",
      kicker: "History",
      title: "Batticaloa’s Past",
      align: "left",
      content: [
        {
          type: "p",
          text: "The Batticaloa region was traditionally a Tamil area, and the name \"Batticaloa\" derives from the Tamil \"Mattakkalappu,\" meaning \"the flat lagoon.\" The area has a long history of settlement, with traces of indigenous tribes such as the Veddas.",
        },
        {
          type: "p",
          text: "Its past is closely tied to the lagoon, to long-standing Tamil settlement, and later to the arrival of European colonial powers who reshaped the city’s political and administrative importance.",
        },
      ],
    },

    {
      type: "text",
      id: "colonial-period",
      kicker: "Colonial Period",
      title: "Portuguese, Dutch, and British Rule",
      align: "left",
      content: [
        {
          type: "p",
          text: "The Portuguese were the first Europeans to settle in Batticaloa, building a fort in 1622 on an islet in the lagoon, Puliyantivu. The fort served as a trading post and administrative center.",
        },
        {
          type: "p",
          text: "In 1638, the Dutch East India Company (VOC) conquered the fort in alliance with the Kingdom of Kandy. The Dutch rebuilt the fort extensively and named its four bastions after Dutch cities: Galle, Amsterdam, Haarlem, and Colombo.",
        },
        {
          type: "p",
          text: "The fort remained under Dutch control for almost two centuries, making it one of the most important colonial landmarks on Sri Lanka’s east coast.",
        },
        {
          type: "split-paragraph",
          heading: "British Takeover",
          headingLevel: "h4", // "h3" | "h4" | "h5" | "h6"
          paragraphs: [
            "The British took over Batticaloa and its fort from the Dutch in 1796. Under British rule, the fort continued to be used mainly for administrative purposes.",
            "This colonial succession left a visible mark on the city, and the fort still stands as one of the clearest reminders of Batticaloa’s layered European past.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Batticaloa/history/batticaloa-fort.webp`,
          imageAlt: "Batticaloa Fort",
          mediaPosition: "right", // "left" | "right"
        },
      ],
    },

    {
      type: "text",
      id: "civil-war-and-tsunami",
      kicker: "Modern History",
      title: "Civil War and Tsunami",
      align: "left",
      paragraphs: [
        "Batticaloa was one of the hardest-hit areas during the Sri Lankan Civil War from 1983 to 2009. The city was frequently the scene of conflict, and this period left deep social and physical scars on the region.",
        "In 2004, the coastline was also severely affected by the Indian Ocean tsunami, which caused enormous destruction and claimed many lives. These events made Batticaloa one of the places in Sri Lanka most defined by both conflict and disaster in recent history.",
      ],
    },

    {
      type: "text",
      id: "batticaloa-present",
      kicker: "Present Day",
      title: "Batticaloa in the Present",
      align: "left",
      paragraphs: [
        "After the end of the civil war and the post-tsunami reconstruction, Batticaloa has slowly recovered. The city has developed into a major commercial center, and its infrastructure has improved significantly.",
        "Today, Batticaloa stands as a resilient east coast city that continues to rebuild while strengthening its role in trade, transport, and regional development.",
      ],
    },

    {
      type: "text",
      id: "cultural-diversity-economy",
      kicker: "Culture and Economy",
      title: "Cultural Diversity and Economic Life",
      align: "left",
      paragraphs: [
        "Batticaloa is known for its diverse population, with Tamil, Muslim, and Sinhalese communities all shaping the character of the city. This cultural blend can be seen in everyday life and in the presence of temples, mosques, and churches across the area.",
        "The city’s identity is closely tied to this mix of traditions, languages, and religious practices, giving Batticaloa a distinct cultural atmosphere on Sri Lanka’s east coast.",
        "Batticaloa’s economy is based on agriculture, especially rice and coconut cultivation, as well as fishing and trade. Since the end of the civil war, tourism has also been increasing, particularly with the growing popularity of nearby Passikudah.",
        "Together, cultural diversity and local economic activity make Batticaloa not only historically significant, but also an important living center of eastern Sri Lanka.",
      ],
    },

    {
    type: "cards",
    kicker: "Discover",
    title: "Historical and Cultural Landmarks",
    align: "center", // "left" | "center"

    items: [
        {
        title: "Dutch Fort of Batticaloa",
        description: "A major colonial landmark reflecting the city’s layered European history.",
        image: `${import.meta.env.BASE_URL}Destinations/Batticaloa/poi/dutch-fort.webp`,
        imageAlt: "Dutch Fort of Batticaloa",
        to: "/places/batticaloa/dutch-fort",
        },
        {
        title: "St. Mary's Cathedral",
        description: "One of the most prominent Catholic churches in the region.",
        image: `${import.meta.env.BASE_URL}Destinations/Batticaloa/poi/st-marys-cathedral.webp`,
        imageAlt: "St. Mary's Cathedral Batticaloa",
        to: "/places/batticaloa/st-marys-cathedral",
        },
        {
        title: "Batticaloa Lighthouse",
        description: "A coastal landmark offering views over the lagoon and sea.",
        image: `${import.meta.env.BASE_URL}Destinations/Batticaloa/poi/lighthouse.webp`,
        imageAlt: "Batticaloa Lighthouse",
        to: "/places/batticaloa/lighthouse",
        },
        {
        title: "Kallady Bridge",
        description: "The famous bridge associated with the legendary ‘singing fish’ phenomenon.",
        image: `${import.meta.env.BASE_URL}Destinations/Batticaloa/poi/kallady-bridge.webp`,
        imageAlt: "Kallady Bridge",
        to: "/places/batticaloa/kallady-bridge",
        },
        {
        title: "Palameenmadu",
        description: "A scenic coastal area known for beaches and lagoon surroundings.",
        image: `${import.meta.env.BASE_URL}Destinations/Batticaloa/poi/palameenmadu.webp`,
        imageAlt: "Palameenmadu beach",
        to: "/places/batticaloa/palameenmadu",
        },
    ],
    }
  ],
};

export default BatticaloaArticle;