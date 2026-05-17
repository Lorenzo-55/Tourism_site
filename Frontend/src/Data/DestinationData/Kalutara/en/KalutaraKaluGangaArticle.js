const KalutaraKaluGangaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Kalutara", to: "/places/kalutara" },
    { label: "Kalu Ganga" },
  ],

  hero: {
    kicker: "River & Landscape",
    title: "Kalu Ganga",
    subtitle:
      "A major river flowing from Sri Pada through Sri Lanka’s rainforest hills before reaching the Indian Ocean at Kalutara.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kalutara/kalu-ganga/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "The Black River of the Southwest",
    paragraphs: [
      "The Kalu Ganga, meaning the “Black River” in Sinhala, is one of Sri Lanka’s most important rivers and a defining feature of the Kalutara region.",
      "Originating from the forests around Sri Pada (Adam’s Peak), the river travels through Ratnapura and Kalutara before meeting the Indian Ocean beside the famous Kalutara Bodhiya.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "river-overview",
      kicker: "Geography",
      title: "A River Shaped by Rainforest and Mountains",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Kalu Ganga stretches for approximately 129 km (80 miles), making it one of the longest and most significant rivers in Sri Lanka.",
        },

        {
          type: "p",
          text: "It begins in the mountainous forests surrounding the sacred Sri Pada and flows through some of the island’s wettest regions before reaching the sea at Kalutara.",
        },

        {
          type: "split-paragraph",
          heading: "One of Sri Lanka’s Great Rivers",
          headingLevel: "h4",

          paragraphs: [
            "The river is second only to the Mahaweli Ganga in terms of annual water volume and catchment size.",
            "Its waters support agriculture, settlements, ecosystems, and transport across the southwestern districts.",
            "The river’s broad lower section near Kalutara creates the scenic riverfront landscapes that define the town today.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/kalu-ganga/river-view.webp`,
          imageAlt: "View of the Kalu Ganga in Kalutara",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "river-mouth",
      kicker: "Landscape",
      title: "Where the River Meets the Ocean",
      align: "left",

      content: [
        {
          type: "p",
          text: "One of Kalutara’s most recognizable natural features is the meeting point between the Kalu Ganga and the Indian Ocean.",
        },

        {
          type: "p",
          text: "This area combines river scenery, coastal views, mangroves, fishing activity, and major religious landmarks within a single landscape.",
        },

        {
          type: "split-paragraph",
          heading: "Kalutara Bodhiya and the Riverfront",
          headingLevel: "h4",

          paragraphs: [
            "The sacred Kalutara Bodhiya sits close to the river mouth, making the Kalu Ganga an important visual and spiritual backdrop to the shrine.",
            "From the upper temple terraces, visitors can see the Kalutara Bridge, the river, and the Indian Ocean stretching toward the coastline.",
            "The location has historically made Kalutara a natural stopping point for travelers journeying along Sri Lanka’s southern coastal route.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/kalu-ganga/river-mouth.webp`,
          imageAlt: "Kalu Ganga meeting the Indian Ocean",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "river-cruises",
      kicker: "Activities",
      title: "River Cruises and Boat Safaris",
      align: "left",

      content: [
        {
          type: "p",
          text: "The calmer lower reaches of the Kalu Ganga are popular for boat safaris and scenic river cruises.",
        },

        {
          type: "p",
          text: "These excursions provide a quieter contrast to the coastline and allow visitors to experience the river’s mangroves, wildlife, and riverside communities.",
        },

        {
          type: "split-paragraph",
          heading: "What to Expect on the River",
          headingLevel: "h4",

          paragraphs: [
            "Boat rides often pass through peaceful stretches lined with mangroves and dense riverside vegetation.",
            "Birdwatchers may spot kingfishers, egrets, herons, and other wetland species along the banks.",
            "Late afternoon cruises are especially popular because of the reflections and changing colors where the river widens near the sea.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/kalu-ganga/boat-safari.webp`,
          imageAlt: "Boat safari on the Kalu Ganga",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "richmond-castle",
      kicker: "Colonial Heritage",
      title: "Richmond Castle and Riverside Heritage",
      align: "left",

      content: [
        {
          type: "p",
          text: "One of the most famous landmarks connected to the river is Richmond Castle, an elegant colonial-era mansion overlooking the Kalu Ganga.",
        },

        {
          type: "split-paragraph",
          heading: "A Mansion Above the River",
          headingLevel: "h4",

          paragraphs: [
            "The grand Edwardian mansion was built on elevated ground with panoramic views across the river and surrounding greenery.",
            "Its architecture combines British, Indian, and local influences, making it one of the most distinctive heritage buildings near Kalutara.",
            "The combination of colonial architecture, landscaped gardens, and river scenery makes the estate one of the region’s most scenic historical attractions.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/kalu-ganga/richmond-castle.webp`,
          imageAlt: "Richmond Castle overlooking the Kalu Ganga",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-tips",
      kicker: "Visitor Information",
      title: "Travel Tips and Best Time to Visit",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Best Time:</strong> Morning and late afternoon usually provide cooler temperatures and softer lighting for photography.",
        },

        {
          type: "p",
          text: "<strong>Boat Excursions:</strong> River safaris and cruises can usually be arranged through local operators and hotels around Kalutara.",
        },

        {
          type: "p",
          text: "<strong>Combined Visits:</strong> Many travelers combine a visit to the Kalu Ganga area with nearby attractions such as Kalutara Bodhiya and Richmond Castle.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.587166411662259,79.96016719503422",
        },
      ],
    },
  ],
};

export default KalutaraKaluGangaArticle;