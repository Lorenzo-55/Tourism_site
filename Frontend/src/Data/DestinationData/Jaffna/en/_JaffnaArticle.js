const JaffnaArticle = {
  breadcrumbItems: [
    { label: "Places", to: "/places" },
    { label: "Jaffna", to: "/places/jaffna" },
  ],

  hero: {
    kicker: "Northern Sri Lanka",
    title: "Jaffna",
    subtitle:
      "A historic northern city shaped by Tamil heritage, colonial rule, civil conflict, and a continuing period of recovery and renewal.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Jaffna/hero/jaffna-hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "History, Identity, and Rebuilding",
    paragraphs: [
      "Jaffna is a fascinating city in the far north of Sri Lanka with a rich, yet turbulent, history. After years of civil war, the city has been rapidly developing since 2009, and a growing number of tourists are finding their way to this authentic and culturally rich region.",
      "Known for its deep Tamil cultural roots, major historical landmarks, and distinctive northern identity, Jaffna remains one of the most important and characterful cities in Sri Lanka.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history-of-jaffna",
      kicker: "History",
      title: "The Historical Development of Jaffna",
      align: "left",
      content: [
        {
          type: "p",
          text: "The history of Jaffna is closely intertwined with Tamil culture and with the wider history of northern Sri Lanka. For centuries, the city has served as a political, cultural, and religious center, giving it a distinct identity that remains strong today.",
        },
        {
          type: "p",
          text: "Jaffna was the center of the medieval Jaffna Kingdom, which established itself around the 11th century. The kingdom flourished in the 15th century, when Hindu temples were built, arts and literature developed, and the city maintained close commercial and political ties with South India and other parts of Sri Lanka.",
        },
        {
          type: "split-paragraph",
          heading: "Colonial Rule",
          headingLevel: "h4",
          paragraphs: [
            "The arrival of the Portuguese in the early 16th century marked the end of Jaffna’s independent kingdom. In 1619, they conquered the city, arrested the last king, Sangili II, and killed him. They also built a fort and destroyed many Hindu temples, reshaping the religious and political landscape of the region.",
            "In 1658, the Dutch East India Company captured the fort from the Portuguese. The Dutch rebuilt and greatly expanded it, turning Jaffna Fort into one of the largest and strongest VOC forts in Asia. Compared to the Portuguese, they were more tolerant of local religion, and many Hindu temples were rebuilt during this period. Trade and population also grew under Dutch rule, before the British took control of Ceylon from the Dutch in 1795.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Jaffna/history/jaffna-fort.webp`,
          imageAlt: "Jaffna Fort",
          mediaPosition: "right",
        },
        {
          type: "p",
          text: "This long sequence of Tamil rule, Portuguese conquest, Dutch expansion, and British control gave Jaffna a layered historical character. The city’s architecture, religious sites, and urban identity still reflect these different eras.",
        },
      ],
    },

    {
      type: "text",
      id: "civil-war-and-recovery",
      kicker: "Modern History",
      title: "Civil War, Loss, and Recovery",
      align: "left",
      content: [
        {
          type: "p",
          text: "Jaffna and the surrounding northern region were at the center of Sri Lanka’s civil war, which lasted from 1983 to 2009. The conflict was driven by the struggle of the LTTE, or Tamil Tigers, who fought for an independent Tamil state in the north and east of the island.",
        },
        {
          type: "p",
          text: "During the war, Jaffna was severely affected by fighting, displacement, and destruction. Important landmarks, including Jaffna Fort and the public library, were damaged or destroyed, and the city’s social and economic life was deeply disrupted.",
        },
        {
          type: "p",
          text: "The war also had a devastating human cost for the local population. Events such as the Jaffna Hospital Massacre in 1987 remain painful parts of the city’s modern history and reflect the scale of suffering experienced in the region.",
        },
        {
          type: "split-paragraph",
          heading: "Rebuilding Since 2009",
          headingLevel: "h4",
          paragraphs: [
            "Since the end of the war in 2009, Jaffna has been rebuilding and gradually opening up again to visitors. Roads, services, public spaces, and local businesses have improved, and the city has entered a new phase of development.",
            "Today, Jaffna is increasingly seen not only as a place of historical importance, but also as a destination for travelers looking for an authentic cultural experience. Its recovery has been gradual, but the city’s resilience and strong sense of identity remain among its defining features.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Jaffna/main/rebuilding.webp`,
          imageAlt: "Jaffna rebuilding and development",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "jaffna-today",
      kicker: "Present Day",
      title: "Jaffna Today",
      align: "left",
      paragraphs: [
        "Modern Jaffna is a city where culture, memory, and change exist side by side. Visitors are drawn by its temples, churches, historic sites, northern cuisine, and the slower, more grounded atmosphere that sets it apart from other parts of Sri Lanka.",
        "The city continues to develop as more domestic and international travelers explore the far north. At the same time, Jaffna remains deeply connected to its Tamil heritage, which can be seen in its language, food, festivals, religious traditions, and everyday life.",
        "This balance between historical depth and present-day renewal is part of what makes Jaffna such a distinctive place. It is not just a destination for sightseeing, but a region with a powerful cultural identity and a story that continues to shape its future.",
      ],
    },

    {
      type: "cards",
      kicker: "Explore",
      title: "Points of Interest",
      align: "center",
      items: [
        {
          title: "Jaffna City",
          description:
            "Explore the historic urban center, cultural landmarks, temples, churches, and the everyday life of northern Sri Lanka.",
          image: `${import.meta.env.BASE_URL}Destinations/Jaffna/poi/jaffna-city.webp`,
          imageAlt: "Jaffna City",
          to: "/places/jaffna/jaffna-city",
        },
        {
          title: "Jaffna Islands",
          description:
            "Discover the nearby islands known for coastal scenery, quiet roads, local villages, and distinctive northern landscapes.",
          image: `${import.meta.env.BASE_URL}Destinations/Jaffna/poi/jaffna-islands.webp`,
          imageAlt: "Jaffna Islands",
          to: "/places/jaffna/jaffna-islands",
        },
        {
          title: "Archaeological / Cultural",
          description:
            "Visit sites that reflect Jaffna’s Tamil heritage, religious history, and layered colonial past.",
          image: `${import.meta.env.BASE_URL}Destinations/Jaffna/poi/archaeological-cultural.webp`,
          imageAlt: "Archaeological and cultural sites in Jaffna",
          to: "/places/jaffna/archaeological-cultural",
        },
        {
          title: "Point Pedro Area",
          description:
            "Head toward the northeastern edge of the peninsula for coastal views, villages, and one of the island’s northernmost areas.",
          image: `${import.meta.env.BASE_URL}Destinations/Jaffna/poi/point-pedro-area.webp`,
          imageAlt: "Point Pedro area",
          to: "/places/jaffna/point-pedro-area",
        },
      ],
    },
  ],
};

export default JaffnaArticle;