const MadampellaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Madampella" },
  ],

  hero: {
    kicker: "Western Province",
    title: "Madampella",
    subtitle:
      "A rural community near Negombo known for its handloom heritage, coconut landscapes, and proximity to Sri Lanka’s main international airport.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Madampella/madampella-hero.jpg`,
  },

  overview: {
    kicker: "Overview",
    title: "A Rural Community with Strategic Importance",
    paragraphs: [
      "Madampella is a populated place in Sri Lanka’s Western Province, located in the Gampaha District near Katana and Negombo. While it retains a strong rural identity, its location close to the country’s main international gateway gives it a unique balance between traditional life and accessibility.",
      "The area is characterized by coconut plantations, rice fields, and small-scale industries, offering a quieter alternative to nearby urban centers while still being within easy reach of key transport routes.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "location-access",
      kicker: "Location",
      title: "Proximity and Accessibility",
      align: "left",

      paragraphs: [
        "A defining feature of Madampella is its close proximity to Bandaranaike International Airport (BIA), Sri Lanka’s primary international gateway. This has contributed to its growing relevance, particularly for short stays and transit accommodation.",
        "The accessibility has encouraged small-scale tourism, including boutique stays such as colonial-style villas set within plantation landscapes, offering a calm environment near a major travel hub.",
      ],
    },

    {
      type: "text",
      id: "community",
      kicker: "Community",
      title: "Culture and Religious Life",
      align: "left",

      paragraphs: [
        "The population in Madampella is predominantly Sinhalese, with a mix of Buddhists and Christians. Catholicism is particularly prominent in the wider Negombo and Katana region, shaping local traditions and community life.",
        "Religious institutions play an active role in the area, with communities such as the Capuchin Sisters contributing to parish activities and maintaining close ties with local residents. This reflects a strong sense of social cohesion and community engagement.",
      ],
    },

    {
      type: "text",
      id: "economy",
      kicker: "Economy",
      title: "Rural Landscape and Economic Activity",
      align: "left",

      paragraphs: [
        "Madampella is situated in a rural-coastal environment defined by coconut plantations and agricultural land. Alongside farming, traditional industries continue to play a key role in the local economy.",
        "Among these, the handloom sector stands out as a long-established and culturally significant activity, supporting livelihoods across generations and maintaining a connection to Sri Lanka’s textile heritage.",
      ],

      content: [
        {
          type: "split-paragraph",
          heading: "Handloom Tradition",
          headingLevel: "h4",
          paragraphs: [
            "The handloom industry in Ihala Madampella dates back to around 1932, making it one of the oldest weaving communities in the Western Province. It developed as a cottage industry, with families—often women—working from home using small to medium-scale looms.",
            "Over time, this industry became a central part of the village’s socio-economic structure, providing steady employment and sustaining traditional skills within the community.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Madampella/handloom.jpg`,
          imageAlt: "Handloom weaving in Madampella",
          mediaPosition: "right",
        },

        {
          type: "split-paragraph",
          heading: "Products and Craftsmanship",
          headingLevel: "h4",
          paragraphs: [
            "Handloom products from Madampella are known for their traditional patterns, vibrant colors, and use of natural materials such as cotton and silk. These textiles reflect both functional design and cultural expression.",
            "Common products include sarees, sarongs, shawls, household linens, and upholstery fabrics, all produced through labor-intensive methods that preserve traditional weaving techniques.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Madampella/products.jpg`,
          imageAlt: "Traditional handloom products",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "industry-structure",
      kicker: "Industry",
      title: "Structure and Development",
      align: "left",

      paragraphs: [
        "The handloom sector in Madampella operates largely as a community-based enterprise, consisting of independent weavers and small-scale producers within a defined local area. This decentralized structure allows flexibility but also presents challenges in coordination and market access.",
        "Government bodies and organizations such as the Liya Abhiman Organisation have supported the industry through initiatives aimed at improving infrastructure, introducing new designs, and providing training. Efforts have also included upgrading community facilities like the Handloom Textile Design Development and Services Centre in Ihala Madampella.",
        "Despite facing modern pressures, the industry has achieved a level of stability and continues to contribute meaningfully to the local economy.",
      ],
    },

    {
      type: "text",
      id: "challenges",
      kicker: "Challenges",
      title: "Issues Facing the Handloom Sector",
      align: "left",

      paragraphs: [
        "Like many traditional cottage industries in Sri Lanka, the handloom sector in Madampella faces a range of structural challenges that affect sustainability and growth.",
        "Weavers often struggle with the high cost and limited availability of raw materials, which directly impacts profitability. In addition, the absence of centralized collection and distribution systems makes it difficult to reach broader markets.",
        "Competition from low-cost, machine-made textiles further reduces demand for handcrafted products, while limited access to technical support—such as skilled mechanics for loom maintenance—can disrupt production. These factors, combined with strong bargaining pressure from suppliers and buyers, result in narrow profit margins for many producers.",
      ],
    },

    {
      type: "text",
      id: "tourism",
      kicker: "Tourism",
      title: "Experiences and Local Activities",
      align: "left",

      paragraphs: [
        "Although not a major tourist destination, Madampella offers a range of low-key, experience-based activities that highlight local industries and rural life.",
        "Guided bicycle tours organized by Nature View Boutique Glamping Resort cover approximately 9 kilometers and include visits to local production sites such as roof tile factories, brick kilns, sawmills, cocopeat processing facilities, and handloom workshops.",
        "The resort also offers cooking workshops and short stays, making the area suitable for brief visits either after arrival or before departure due to its proximity to the airport.",
      ],
    },

    {
      type: "cards",
      kicker: "Community",
      title: "Local Highlights",
      align: "center",

      items: [
        {
          image: `${import.meta.env.BASE_URL}Destinations/Madampella/nazareth.jpg`,
          imageAlt: "Nazareth Gedara Madampella",
          title: "Nazareth Gedara",
          description:
            "A community-focused location reflecting the social and religious fabric of Madampella, closely tied to local parish life and outreach activities.",
          to: "/places/madampella/nazareth-gedara",
        },
      ],
    },
  ],
};

export default MadampellaArticle;