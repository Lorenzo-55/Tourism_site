const KataragamaArticle = {
  breadcrumbItems: [
    { label: "Places", to: "/places" },
    { label: "Kataragama", to: "/places/kataragama" },
  ],

  hero: {
    kicker: "Pilgrimage Town",
    title: "Kataragama",
    subtitle:
      "A sacred town in southeastern Sri Lanka where multiple faiths meet in one of the island’s most powerful centers of devotion and pilgrimage.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kataragama/hero/kataragama-hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Faith, Pilgrimage, and Spiritual Harmony",
    paragraphs: [
      "Kataragama, also spelled Katirkamam, is a highly significant pilgrimage town in the southeastern part of Sri Lanka, located in the Monaragala District of Uva Province and near Yala National Park.",
      "It is one of the most remarkable sacred places in the country, known not only for its spiritual importance but also for the way it brings together devotees from different religious traditions in a shared sacred landscape.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "kataragama-significance",
      kicker: "Spiritual Importance",
      title: "A Multi-Religious Sacred Town",
      align: "left",
      content: [
        {
          type: "p",
          text: "Kataragama is renowned for its multi-religious significance and stands as one of the few pilgrimage sites in Sri Lanka that is deeply sacred to several different faith communities at the same time. This gives the town a spiritual atmosphere unlike almost anywhere else on the island.",
        },
        {
          type: "p",
          text: "For Buddhists, Kataragama is an important site connected with the worship of Kataragama Deviyo, a guardian deity who holds a major place in popular religious devotion. Buddhist pilgrims also visit the nearby Kiri Vehera stupa, which is one of the most important sacred monuments in the area.",
        },
        {
          type: "p",
          text: "For Hindus, the main shrine, Ruhunu Maha Kataragama Devalaya, is one of the most sacred centers associated with Skanda or Murugan, the God of War. It has long been a major place of worship for Hindu devotees from Sri Lanka and South India, and it remains one of the most spiritually important Murugan shrines in the region.",
        },
        {
          type: "p",
          text: "Muslims also revere Kataragama, paying homage to a Muslim saint identified as al-Khidir. This long-standing connection adds another dimension to the town’s sacred identity and reinforces its role as a place of shared reverence.",
        },
        {
          type: "p",
          text: "The town also holds meaning for the indigenous Vedda people, adding yet another layer to its spiritual heritage. Because of this, Kataragama is not simply a religious center for one tradition, but a rare place where several religious worlds overlap and continue to coexist.",
        },
      ],
    },

    {
      type: "text",
      id: "spiritual-and-cultural-exploration",
      kicker: "Culture",
      title: "Spiritual and Cultural Exploration",
      align: "left",
      content: [
        {
          type: "p",
          text: "Kataragama is widely seen as a symbol of spiritual harmony in Sri Lanka. Devotees from Buddhist, Hindu, Muslim, and indigenous traditions gather here, often participating in rituals and acts of worship side by side within the same sacred environment.",
        },
        {
          type: "p",
          text: "This shared devotional culture gives the town a powerful atmosphere. It is not only a destination for formal worship, but also a place where visitors can observe how belief, ritual, and pilgrimage are woven into everyday life.",
        },
        {
          type: "split-paragraph",
          heading: "Pilgrimage and Shared Devotion",
          headingLevel: "h4",
          paragraphs: [
            "Kataragama attracts pilgrims from across Sri Lanka as well as from South India, especially during important religious periods and festivals. For many, the journey itself is an act of devotion, making the town not only a destination but part of a wider spiritual experience.",
            "This continuing flow of pilgrims has helped preserve Kataragama’s role as a living sacred town rather than simply a historical site. The presence of different faith communities in one place gives it a distinctive identity rooted in both devotion and coexistence.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Kataragama/main/pilgrimage.webp`,
          imageAlt: "Pilgrimage and worship in Kataragama",
          mediaPosition: "right",
        },
        {
          type: "p",
          text: "Its location near Yala National Park also gives Kataragama a unique setting, where spiritual life exists close to forests, wildlife, and the dry-zone landscapes of southeastern Sri Lanka. This natural environment adds to the sense of atmosphere and pilgrimage associated with the town.",
        },
      ],
    },

    {
      type: "cards",
      kicker: "Explore",
      title: "Points of Interest",
      align: "center",
      items: [
        {
          title: "Religion & Deities",
          description:
            "Learn about the different faith traditions, sacred figures, and devotional practices that make Kataragama unique.",
          image: `${import.meta.env.BASE_URL}Destinations/Kataragama/poi/religion-deities.webp`,
          imageAlt: "Religion and deities in Kataragama",
          to: "/places/kataragama/religion-and-deities",
        },
        {
          title: "Main Sacred Sites",
          description:
            "Visit the most important shrines, temples, and sacred landmarks at the heart of Kataragama’s pilgrimage landscape.",
          image: `${import.meta.env.BASE_URL}Destinations/Kataragama/poi/main-sacred-sites.webp`,
          imageAlt: "Main sacred sites in Kataragama",
          to: "/places/kataragama/main-sacred-sites",
        },
        {
          title: "Kataragama Esala Festival",
          description:
            "Explore one of the town’s most important religious celebrations, known for devotion, ritual, and large pilgrim gatherings.",
          image: `${import.meta.env.BASE_URL}Destinations/Kataragama/poi/esala-festival.webp`,
          imageAlt: "Kataragama Esala Festival",
          to: "/places/kataragama/esala-festival",
        },
        {
          title: "Nearby Historical / Religious",
          description:
            "Discover important nearby places connected to the wider religious and historical landscape of the region.",
          image: `${import.meta.env.BASE_URL}Destinations/Kataragama/poi/nearby-historical-religious.webp`,
          imageAlt: "Nearby historical and religious places around Kataragama",
          to: "/places/kataragama/nearby-historical-religious",
        },
        {
          title: "Tissa Wewa",
          description:
            "Visit the nearby reservoir area for scenery, atmosphere, and a different side of the wider Kataragama region.",
          image: `${import.meta.env.BASE_URL}Destinations/Kataragama/poi/tissa-wewa.webp`,
          imageAlt: "Tissa Wewa",
          to: "/places/kataragama/tissa-wewa",
        },
        {
          title: "Museums & Experiences",
          description:
            "Explore cultural spaces and local experiences that deepen the understanding of Kataragama’s sacred identity.",
          image: `${import.meta.env.BASE_URL}Destinations/Kataragama/poi/museums-experiences.webp`,
          imageAlt: "Museums and experiences in Kataragama",
          to: "/places/kataragama/museums-and-experiences",
        },
      ],
    },
  ],
};

export default KataragamaArticle;