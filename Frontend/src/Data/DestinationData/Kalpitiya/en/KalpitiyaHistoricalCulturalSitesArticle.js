const KalpitiyaHistoricalCulturalSitesArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Kalpitiya", to: "/places/kalpitiya" },
    { label: "Historical and Cultural Sites" },
  ],

  hero: {
    kicker: "Colonial & Religious Heritage",
    title: "Historical and Cultural Sites in Kalpitiya",
    subtitle:
      "Dutch forts, colonial churches, pilgrimage traditions, and coastal heritage along the Kalpitiya Peninsula.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kalpitiya/historical-cultural/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Colonial History and Pilgrimage Traditions",
    paragraphs: [
      "Kalpitiya’s history reflects centuries of maritime trade, colonial influence, and religious devotion along Sri Lanka’s northwest coast.",
      "The peninsula preserves important Dutch-era structures, historic churches, and major pilgrimage sites that continue to shape the region’s cultural identity today.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "kalpitiya-dutch-fort",
      kicker: "Dutch Fortification",
      title: "Kalpitiya Dutch Fort",
      align: "left",

      content: [
        {
          type: "p",
          text: "Kalpitiya Dutch Fort, also known as Fort Calpentijn, is one of the most important remaining Dutch colonial structures in northwestern Sri Lanka.",
        },

        {
          type: "p",
          text: "The fort was built by the Dutch East India Company between 1667 and 1676 to control trade and maintain the VOC cinnamon monopoly in the region.",
        },

        {
          type: "split-paragraph",
          heading: "Strategic Coastal Position",
          headingLevel: "h3",

          paragraphs: [
            "The fort guarded access to the Puttalam Lagoon, which was an important area for cinnamon cultivation and trade linked to the Kingdom of Kandy.",
            "Its position allowed the Dutch East India Company to control commercial activity and exert influence over surrounding coastal areas.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalpitiya/historical-cultural/dutch-fort.webp`,
          imageAlt: "Kalpitiya Dutch Fort overlooking the lagoon",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Architecture and Features",
        },

        {
          type: "p",
          text: "<strong>Structure:</strong> The fort has a square layout with bastions at the corners and walls approximately 6 meters high.",
        },

        {
          type: "p",
          text: "<strong>Building Materials:</strong> Constructed using local coral stone and limestone.",
        },

        {
          type: "p",
          text: "<strong>VOC Symbol:</strong> The gatehouse still displays the VOC emblem, often featuring elephants and a coconut tree.",
        },

        {
          type: "p",
          text: "<strong>Yellow IJssel Bricks:</strong> Dutch “IJssel stones” imported from the Netherlands as ship ballast can still be seen around the entrance area.",
        },

        {
          type: "h3",
          text: "Inside the Fort",
        },

        {
          type: "p",
          text: "Within the walls are the remains of warehouses, ammunition depots, soldiers’ quarters, and a Jesuit church originally built by the Portuguese.",
        },

        {
          type: "p",
          text: "After the Dutch period, the fort was occupied by the British and later used by the Sri Lankan Navy before restoration work began.",
        },

        {
          type: "p",
          text: "<strong>Visitor Note:</strong> Since the fort area has historically been used by the Navy, visitors may be asked to leave identification at the entrance.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=8.235772337330465,79.76600365881187",
        },
      ],
    },

    {
      type: "text",
      id: "dutch-reformed-church",
      kicker: "Colonial Church",
      title: "Kalpitiya Dutch Reformed Church",
      align: "left",

      content: [
        {
          type: "p",
          text: "Built in 1706, the Kalpitiya Dutch Reformed Church is one of the oldest surviving colonial churches in Sri Lanka.",
        },

        {
          type: "p",
          text: "Originally serving the Dutch garrison stationed at the nearby fort, the church remains one of the peninsula’s most atmospheric colonial landmarks.",
        },

        {
          type: "split-paragraph",
          heading: "A Weathered Colonial Landmark",
          headingLevel: "h3",

          paragraphs: [
            "Unlike the larger Dutch churches in Colombo or Galle, the Kalpitiya church has a quieter and more rugged character that reflects its history as a remote coastal outpost.",
            "Its yellow exterior, coral-stone walls, and surrounding palm trees make it especially photogenic in the late afternoon light.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalpitiya/historical-cultural/dutch-church.webp`,
          imageAlt: "Kalpitiya Dutch Reformed Church",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Architectural Features",
        },

        {
          type: "p",
          text: "<strong>Construction:</strong> Built with thick coral and limestone walls typical of Dutch coastal architecture.",
        },

        {
          type: "p",
          text: "<strong>Interior:</strong> The church contains original wooden pews and a pulpit, though many show signs of age and weathering.",
        },

        {
          type: "p",
          text: "<strong>Gravestones:</strong> The floor and nearby garden contain carved Dutch tombstones belonging to colonial officials and their families.",
        },

        {
          type: "p",
          text: "<strong>Belfry:</strong> A separate bell tower still stands near the church, although the original bell is gone.",
        },

        {
          type: "h3",
          text: "Visitor Information",
        },

        {
          type: "p",
          text: "<strong>Entrance Fee:</strong> Free, though a small donation to the caretaker is appreciated.",
        },

        {
          type: "p",
          text: "<strong>Opening Hours:</strong> Usually around 9:00 AM to 4:00 PM, though the church may remain locked unless the caretaker is nearby.",
        },

        {
          type: "p",
          text: "<strong>Dress Code:</strong> Visitors should wear modest clothing covering shoulders and knees.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=8.237476463990797,79.76473330853844",
        },
      ],
    },

    {
      type: "text",
      id: "st-annes-shrine",
      kicker: "Pilgrimage Site",
      title: "St. Anne’s Church (Thalawila Church)",
      align: "left",

      content: [
        {
          type: "p",
          text: "St. Anne’s National Shrine in Thalawila is one of the oldest and most important Catholic pilgrimage sites in Sri Lanka.",
        },

        {
          type: "p",
          text: "Located on the Kalpitiya Peninsula near the coast, the shrine attracts pilgrims from across the country, including people from different religious communities.",
        },

        {
          type: "split-paragraph",
          heading: "Legend of St. Anne",
          headingLevel: "h3",

          paragraphs: [
            "According to tradition, a Portuguese or French trader carrying a wooden statue of St. Anne was shipwrecked near the Kalpitiya coast.",
            "After surviving the disaster, he vowed to build a church if his fortunes recovered.",
            "Another version of the story says St. Anne appeared to him in a dream beneath a banyan tree and instructed him to establish the shrine.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalpitiya/historical-cultural/st-annes-church.webp`,
          imageAlt: "St Anne's National Shrine in Thalawila",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Historical Development",
        },

        {
          type: "p",
          text: "Christian missionary activity in the region began around 1606 during the Jesuit period.",
        },

        {
          type: "p",
          text: "The present church structure was begun in 1837 and completed in 1843, with additional sections added later in the 19th century.",
        },

        {
          type: "h3",
          text: "Pilgrimage and Festivals",
        },

        {
          type: "p",
          text: "<strong>National Importance:</strong> The shrine is considered one of Sri Lanka’s major Catholic pilgrimage destinations.",
        },

        {
          type: "p",
          text: "<strong>Annual Festivals:</strong> Large religious festivals traditionally take place in March and August.",
        },

        {
          type: "p",
          text: "<strong>Mass Pilgrimage:</strong> Hundreds of thousands of pilgrims gather during festival periods, often camping along the beach and surrounding land for days or weeks.",
        },

        {
          type: "p",
          text: "<strong>Symbol of Unity:</strong> The shrine is visited not only by Catholics but also by Buddhists, Hindus, and Protestants seeking blessings and healing.",
        },

        {
          type: "h3",
          text: "Visitor Experience",
        },

        {
          type: "p",
          text: "For most of the year, the church has a calm and peaceful atmosphere beside the beach, making it suitable for reflection and quiet visits.",
        },

        {
          type: "p",
          text: "<strong>Dress Code:</strong> Visitors should dress modestly out of respect for the sacred site.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=8.112766642737048,79.70344786620879",
        },
      ],
    },
  ],
};

export default KalpitiyaHistoricalCulturalSitesArticle;