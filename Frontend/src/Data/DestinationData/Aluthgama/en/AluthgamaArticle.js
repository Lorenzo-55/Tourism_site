const AluthgamaData = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Aluthgama" },
  ],

  hero: {
    kicker: "Southwest Coast",
    title: "Aluthgama",
    subtitle: "",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Aluthgama/AluthgamaHero.jpg`,
  },

  overview: {
    kicker: "Overview",
    title: "A Coastal Gateway Blending Local Life and Tourism",
    paragraphs: [
      "Aluthgama (also spelled Alutgama) is a coastal town in the Kalutara District of Sri Lanka’s Western Province, positioned along the northern bank of the Bentota River mouth. It sits directly opposite the well-known resort town of Bentota, connected by a bridge, making it both a quieter alternative and a convenient base for exploring the wider coastal region.",
      "The town offers a combination of relaxed beaches, river-based activities, and everyday Sri Lankan town life. Unlike purely resort-driven destinations, Aluthgama retains a strong local identity while still catering to tourism. Visitors can experience golden beaches, water sports on the Bentota River, mangrove safaris, and nearby cultural landmarks, all within a compact and accessible area.",
      "Its appeal lies in this balance. Aluthgama functions as both a working town and a tourist hub, where local markets, transport links, and community life coexist with hotels, river excursions, and beachside experiences. This makes it a practical and culturally grounded entry point to Sri Lanka’s southwest coast.",
    ],
  },

  sections: [
    {
      type: "text",
      title: "History",
      paragraphs: [
        "Aluthgama has a long history that traces back to medieval Sri Lanka, with references to the town appearing in historical literature. One of the earliest known mentions is found in the messenger poem “Thisara Sandesha,” written in 1366, which highlights the area’s beauty and confirms its existence as an established settlement during that period.",
        "In later centuries, particularly during the colonial era, Aluthgama developed as a center of coastal commerce. Before the rise of tourism, it was known for industries such as plumbago (graphite), tea, coral, lime, and arrack production. Its location along the Bentota River and the coastal trade routes made it an active point for movement of goods and local economic activity.",
        "More recently, the town gained international attention in June 2014 due to a wave of anti-Muslim riots that resulted in casualties and property damage. This event exposed underlying ethnic and religious tensions within the area and the country as a whole, marking a difficult chapter in its modern history.",
        "Despite these challenges, Aluthgama has continued to evolve, maintaining its relevance as both a residential town and a growing tourist destination connected to the broader coastal region.",
      ],
    },

    {
      type: "text",
      title: "Aluthgama Today",
      paragraphs: [
        "Today, Aluthgama functions as a blend of a traditional market town and an active tourist hub, shaped largely by its coastal setting and its close relationship with Bentota. Tourism and banking now form the main sources of income, supporting both the local population and the steady flow of international visitors staying in nearby resorts.",
        "The town still retains its role as a local commercial center, with markets and shops that cater to everyday needs. A notable feature is its lively fish market, reflecting the continued importance of fishing within the community. This combination of tourism and local commerce gives Aluthgama a more grounded and authentic feel compared to fully resort-oriented areas.",
        "Its location at the mouth of the Bentota River makes it one of the key hubs for water-based activities. Visitors are drawn to the area for jet skiing, water skiing, wakeboarding, fishing, and especially river safaris through mangrove forests, where wildlife and small island communities can be observed.",
        "Culturally, Aluthgama is known for its mix of communities and traditions, with both Sinhalese and Muslim populations contributing to its identity. Religious landmarks, particularly the Kande Viharaya Temple, remain central to the town’s cultural landscape and daily life.",
        "The town is also well connected, sitting along the main Coastal Rail Line and the A2 highway, with improved access through the Southern Expressway. This connectivity has strengthened its role as both a residential area and a convenient base for exploring the southwest coast, including Colombo and Galle.",
        "Overall, Aluthgama represents a resilient coastal town that has transitioned from a historical trading center into a modern gateway for beach tourism, while still maintaining its community character, cultural presence, and economic relevance.",
      ],
    },

    {
      type: "cards",
      kicker: "Explore More",
      title: "Points of Interest",
      align: "center",
      items: [
        {
          to: "/places/aluthgama-kande-viharaya-temple",
          image: `${import.meta.env.BASE_URL}Destinations/Aluthgama/AluthgamaKandeVihara.webp`,
          imageAlt: "Kande Viharaya Temple",
          title: "Kande Viharaya Temple",
          description:
            "A major Buddhist landmark featuring one of the tallest sitting Buddha statues in the world, known for its spiritual importance and striking architecture.",
        },
        {
          to: "/places/aluthgama-beaches",
          image: `${import.meta.env.BASE_URL}Destinations/Aluthgama/BentotaBeach.jpg`,
          imageAlt: "Beaches near Aluthgama",
          title: "Beaches",
          description:
            "Golden sandy beaches with a more relaxed atmosphere, offering a quieter coastal experience compared to busier resort towns.",
        },
        {
          to: "/places/aluthgama-bentota-river-mouth",
          image: `${import.meta.env.BASE_URL}Destinations/Aluthgama/BentotaRiver.webp`,
          imageAlt: "Bentota River",
          title: "Bentota River & Lagoon",
          description:
            "A hub for water sports and river safaris through mangroves, featuring wildlife, small islands, and scenic waterways.",
        },
        {
          to: "/places/aluthgama-brief-garden",
          image: `${import.meta.env.BASE_URL}Destinations/Aluthgama/BriefGarden2.webp`,
          imageAlt: "Brief Garden",
          title: "Brief Garden",
          description:
            "A beautifully landscaped garden estate created by Bevis Bawa, blending art, design, and tropical greenery in a peaceful setting.",
        },
      ],
    },
  ],
};

export default AluthgamaData;