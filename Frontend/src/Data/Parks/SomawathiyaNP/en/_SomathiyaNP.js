const SomawathiyaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Somawathiya National Park" },
  ],

  hero: {
    kicker: "Wildlife & Heritage",
    title: "Somawathiya National Park",
    subtitle:
      "A unique blend of sacred history and floodplain wilderness in Sri Lanka’s dry zone.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Somawathiya/somawathiya1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Where Nature and Spiritual Heritage Meet",
    paragraphs: [
      "Somawathiya National Park is a distinctive protected area in Sri Lanka, known for combining rich biodiversity with deep religious significance. Located along the Mahaweli River floodplains, the park protects a unique wetland ecosystem while also housing one of the country’s most revered Buddhist sites.",
      "The presence of the Somawathiya Chaitya within the park creates a rare setting where wildlife conservation and pilgrimage coexist, making it both a natural sanctuary and a spiritual destination.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history",
      kicker: "Background",
      title: "History and Cultural Significance",
      align: "left",
      paragraphs: [
        "The origins of Somawathiya trace back to the 2nd century BC, when the Somawathiya Chaitya was built by Prince Abhaya for Princess Somawathi, the sister of King Kavan Tissa. The stupa is believed to enshrine a sacred tooth relic of the Buddha, making it one of the most important pilgrimage sites in Sri Lanka.",
        "Over time, the area surrounding the shrine remained ecologically significant, leading to its designation as a Wildlife Sanctuary in 1966. It was later upgraded to National Park status in 1986 as part of the Mahaweli River Development Project, ensuring protection for both its cultural heritage and natural environment.",
        "This dual identity continues today, with the park serving both as a place of religious devotion and a protected habitat for wildlife.",
      ],
    },

    {
      type: "text",
      id: "ecosystem",
      kicker: "Nature",
      title: "Ecosystem and Wildlife",
      align: "left",
      paragraphs: [
        "Somawathiya National Park is centered around floodplain wetlands known as ‘villus,’ which are seasonally flooded grasslands that support a rich diversity of wildlife. These habitats are essential for sustaining large populations of herbivores and birdlife.",
        "The park is particularly well known for its population of Sri Lankan elephants, with large herds often seen moving through the floodplains. Other wildlife includes sambar deer, wild boar, water buffalo, mugger crocodiles, and a wide variety of resident and migratory birds.",
        "Its connection with nearby protected areas such as Flood Plains National Park and Trikonamadu Nature Reserve forms part of a larger ecological network, allowing wildlife to move across a broader landscape.",
      ],
    },

    {
      type: "text",
      id: "challenges",
      kicker: "Conservation",
      title: "Conservation Challenges",
      align: "left",
      paragraphs: [
        "Despite its protected status, Somawathiya faces ongoing environmental pressures. Encroachment for agriculture and illegal clearing of forest land continue to threaten the integrity of the park’s boundaries.",
        "Human-elephant conflict remains a major issue as expanding settlements and farming activities overlap with traditional elephant habitats. This often leads to damage to crops and risks to both human and animal life.",
        "Additional challenges include illegal grazing, poaching, and habitat degradation caused by unsustainable land use, all of which place strain on the fragile wetland ecosystem.",
      ],
    },

    {
      type: "text",
      id: "safari",
      kicker: "Experience",
      title: "Safari and Exploration",
      align: "left",
      content: [
        {
          type: "p",
          text: "Jeep safaris are the primary way to explore Somawathiya National Park, allowing visitors to navigate its floodplains and observe wildlife in their natural habitat. Due to the park’s remote nature, visitor numbers are relatively low, creating a quieter and more immersive experience.",
        },
        {
          type: "p",
          text: "The park is best known for its elephant sightings, with large herds often visible depending on the season. Birdwatching is also rewarding, particularly during periods when wetlands are filled and attract migratory species.",
        },
        {
          type: "p",
          text: "Access to the park can be challenging, with rough dirt roads that often require a 4x4 vehicle. Routes typically pass through Sungawila from Polonnaruwa or Minneriya.",
        },
        {
          type: "button",
          label: "View on Google Maps",
          href: "https://maps.app.goo.gl/SNx9uHbKQFANGRqKA",
        },
      ],
    },

    {
      type: "text",
      id: "chaitya",
      kicker: "Spiritual Site",
      title: "Somawathiya Chaitya",
      align: "left",
      content: [
        {
          type: "p",
          text: "The Somawathiya Chaitya, located within the park, is one of Sri Lanka’s most sacred Buddhist sites. Built in the 2nd century BC, it is believed to enshrine a tooth relic of the Buddha, giving it immense religious importance.",
        },
        {
          type: "p",
          text: "After being lost to the jungle for centuries, the site was rediscovered in the 20th century and later restored. Today, it continues to attract pilgrims from across the country, especially on religious observance days.",
        },
        {
          type: "p",
          text: "Visitors entering the temple complex must follow proper customs, including modest dress and removing footwear. The site is typically open from early morning until evening.",
        },
        {
          type: "button",
          label: "View Chaitya on Google Maps",
          href: "https://maps.app.goo.gl/JTbst4KSd8K8v2LH6",
        },
      ],
    },

    {
      type: "text",
      id: "visiting",
      kicker: "Travel Guide",
      title: "Visitor Information",
      align: "left",
      paragraphs: [
        "The best time to visit Somawathiya depends on the type of experience. From October to January, the wetlands are filled with water, attracting elephants and birds, while the dry season from May to September offers easier travel conditions and clearer access to safari routes.",
        "The park is located about 40 kilometers from Polonnaruwa, with Sungawila serving as a key access point before reaching the entrance. Due to rough terrain, a 4x4 safari vehicle is strongly recommended.",
        "Entrance fees are relatively moderate compared to other parks, with separate costs for the safari vehicle and guide. Given the travel distance and terrain, a full-day visit is often the most practical way to experience both the wildlife and the religious site.",
      ],
    },
  ],
};

export default SomawathiyaArticle;