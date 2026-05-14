const UnawatunaWildlifeArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Unawatuna", to: "/places/unawatuna" },
    { label: "Wildlife" },
  ],

  hero: {
    kicker: "Wildlife & Ocean Safaris",
    title: "Wildlife",
    subtitle:
      "Whale watching tours from nearby Mirissa, with chances to see blue whales, sperm whales, dolphins, and other marine life.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Unawatuna/wildlife/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Marine Wildlife Near Unawatuna",
    paragraphs: [
      "Unawatuna is close enough to Mirissa to make whale watching a practical day trip during the south coast season.",
      "Mirissa is one of Sri Lanka’s main whale watching hubs, especially known for blue whale sightings, early morning boat tours, and encounters with dolphins and other marine species.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "whale-watching-mirissa",
      kicker: "Ocean Safari",
      title: "Whale Watching from Mirissa",
      align: "left",

      content: [
        {
          type: "p",
          text: "Whale watching tours near Unawatuna usually depart from Mirissa, which is about a 40-minute drive away.",
        },

        {
          type: "p",
          text: "Sri Lanka is considered one of the best places in the world to see blue whales, the largest animals on Earth.",
        },

        {
          type: "split-paragraph",
          heading: "The Mirissa Experience",
          headingLevel: "h3",

          paragraphs: [
            "Mirissa is the most popular south coast whale watching hub because of its accessible harbor and high seasonal sighting rate.",
            "Tours usually last around 3 to 5 hours and depart early in the morning, when the sea is generally calmer.",
            "Most boats leave between 6:00 AM and 7:00 AM and return before the midday heat becomes intense.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Unawatuna/wildlife/whale-watching.webp`,
          imageAlt: "Whale watching boat tour from Mirissa",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "<strong>Best Season:</strong> Generally November to April or May for whale watching from Mirissa.",
        },

        {
          type: "p",
          text: "<strong>Cost:</strong> Standard shared tours for foreigners usually range from around USD 50–70 per adult.",
        },

        {
          type: "p",
          text: "<strong>Included:</strong> Many tours include government wildlife tax, light breakfast or snacks, and water.",
        },

        {
          type: "button",
          label: "View Mirissa Whale Watching Area",
          href: "https://www.google.com/maps?q=5.948024533586046,80.45160709056103",
        },
      ],
    },

    {
      type: "text",
      id: "marine-life",
      kicker: "Marine Life",
      title: "Whales and Dolphins You May See",
      align: "left",

      content: [
        {
          type: "p",
          text: "The deep waters off Sri Lanka’s southern coast form an important migratory route for whales and dolphins.",
        },

        {
          type: "split-paragraph",
          heading: "Common Sightings",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Blue Whale:</strong> The main attraction and the whale most strongly associated with Mirissa during the peak season.",
            "<strong>Sperm Whale:</strong> Recognizable by its large square head and deep-diving behavior.",
            "<strong>Bryde’s Whale:</strong> A smaller rorqual whale sometimes seen close to the surface.",
            "<strong>Spinner Dolphins:</strong> Large pods are commonly seen and often become one of the most lively parts of the tour.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Unawatuna/wildlife/blue-whale.webp`,
          imageAlt: "Blue whale sighting off Sri Lanka's south coast",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "Rare sightings may include humpback whales, fin whales, minke whales, and occasionally orcas.",
        },

        {
          type: "p",
          text: "Operators may advertise very high sighting chances during peak season, but sightings are never guaranteed because these are wild animals.",
        },
      ],
    },

    {
      type: "text",
      id: "travel-tips",
      kicker: "Travel Tips",
      title: "Tips for Whale Watching",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Choose an Ethical Operator:</strong> Use a reputable whale watching company that keeps a safe distance from animals and avoids crowding or chasing whales.",
        },

        {
          type: "p",
          text: "<strong>Seasickness:</strong> The ocean can be rough, especially on smaller boats, so motion sickness medication is recommended about one hour before departure.",
        },

        {
          type: "p",
          text: "<strong>Sun Protection:</strong> Bring sunglasses, sunscreen, and a hat because you will be exposed on open water for several hours.",
        },

        {
          type: "p",
          text: "<strong>Layers:</strong> Early mornings can feel cool on the boat, but the sun becomes strong quickly after sunrise.",
        },

        {
          type: "p",
          text: "<strong>No Guarantee:</strong> Many operators offer a free second trip if no whales are sighted, but policies vary by company.",
        },
      ],
    },
  ],
};

export default UnawatunaWildlifeArticle;