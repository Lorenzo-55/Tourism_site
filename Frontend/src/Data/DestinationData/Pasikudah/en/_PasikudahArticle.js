const PassikudahArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Passikudah" },
  ],

  hero: {
    kicker: "Eastern Province",
    title: "Passikudah",
    subtitle:
      "A serene beach destination on Sri Lanka’s east coast, known for its shallow bay, post-war revival, and relaxed coastal atmosphere.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Passikudah/passikudah-hero.jpg`,
  },

  overview: {
    kicker: "Overview",
    title: "A Coastal Destination Rebuilt Around Its Natural Beauty",
    paragraphs: [
      "Passikudah is a coastal town in eastern Sri Lanka known today for its calm waters, long stretch of golden sand, and growing collection of beach resorts. Although it is now associated with relaxation and seaside tourism, the town has also experienced major disruption through war and natural disaster.",
      "Its modern identity has been shaped by recovery and redevelopment. What was once a damaged and largely neglected stretch of coast has gradually re-emerged as one of the east coast’s better-known beach destinations, offering a quieter and more resort-oriented alternative to busier parts of the island.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history",
      kicker: "History",
      title: "From Popular Bay to Years of Disruption",
      align: "left",
      paragraphs: [
        "Before the outbreak of the civil war in 1983, Passikudah and nearby Kalkudah were already recognized as attractive seaside destinations. The bay was considered one of the most beautiful coastal areas in the country and drew visitors for its scenery and calm waters.",
        "That changed during the civil war, when Sri Lanka’s east coast became one of the least developed and least visited parts of the island. Tourism collapsed, infrastructure declined, and the region remained largely cut off from broader travel activity until the war ended in 2009.",
        "Passikudah was then struck again in 2004 by the Indian Ocean tsunami, which caused severe damage across the coastal settlement. Large parts of the village were destroyed or heavily affected, adding another layer of disruption to an already fragile region.",
      ],
    },

    {
      type: "text",
      id: "revival",
      kicker: "Present Day",
      title: "Reconstruction and Tourism Revival",
      align: "left",
      paragraphs: [
        "In the years following the end of the civil war and the tsunami, Passikudah gradually began to recover. Government-backed planning helped accelerate this process, with the area being designated as a Special Tourism Development Zone and attracting increased investment.",
        "This redevelopment has transformed Passikudah into a more established coastal destination, with new hotels and resorts shaping much of its present-day identity. Even with this growth, it remains known more for tranquility and comfort than for heavy commercial activity.",
      ],
    },

    {
      type: "text",
      id: "beach-experience",
      kicker: "Beach Experience",
      title: "Calm Waters and a Relaxed Coastal Setting",
      align: "left",
      content: [
        {
          type: "p",
          text: "Passikudah is best known for its unusually shallow bay, where the sea remains calm and relatively low for a long distance from the shore. This makes it especially appealing for visitors looking for easy swimming conditions and a gentler beach environment.",
        },
        {
          type: "p",
          text: "The beach’s golden sand and broad shoreline contribute to its reputation as a peaceful place to unwind. Unlike more energetic beach towns, Passikudah is generally associated with a slower pace and a more resort-focused atmosphere.",
        },
        {
          type: "split-paragraph",
          heading: "A Bay Designed for Leisure",
          headingLevel: "h4",
          paragraphs: [
            "One of Passikudah’s most distinctive qualities is that visitors can walk far into the water without it becoming deep. This creates a calm and accessible environment that is especially suited to relaxed swimming and long hours by the shore.",
            "The setting has helped define Passikudah as a destination centered on comfort, scenery, and an easy coastal rhythm rather than intense nightlife or dense urban activity.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Passikudah/beach.jpg`,
          imageAlt: "Shallow waters and beach in Passikudah",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "activities",
      kicker: "Activities",
      title: "Water Sports and Seaside Recreation",
      align: "left",
      paragraphs: [
        "Although Passikudah is primarily valued for relaxation, it also offers a range of water-based activities. Visitors can take part in windsurfing, kayaking, snorkeling, and diving, making the bay suitable not only for rest but also for light adventure.",
        "These activities are supported by the area’s calm coastal conditions and help broaden its appeal beyond luxury stays and beach lounging. The combination of quiet surroundings and accessible recreation is one of the main reasons the destination continues to grow in popularity.",
      ],
    },

    {
      type: "text",
      id: "surroundings",
      kicker: "Nearby Context",
      title: "Culture and Attractions Beyond the Beach",
      align: "left",
      paragraphs: [
        "Passikudah itself is mainly a beach destination, but the wider region offers access to historical and cultural places of interest. Nearby attractions include sites such as the Dutch Fort in Batticaloa and the Trincomalee War Cemetery.",
        "These surrounding landmarks give travelers the option to combine a beach stay with day trips that add historical and cultural depth to the visit, especially for those exploring more of Sri Lanka’s east coast.",
      ],
    },
  ],
};

export default PassikudahArticle;