const DickwellaArticle = {
  breadcrumbItems: [
    { label: "Places", to: "/places" },
    { label: "Dickwella", to: "/places/dickwella" },
  ],

  hero: {
    kicker: "South Coast",
    title: "Dickwella",
    subtitle:
      "A peaceful coastal town known for calm beaches, local markets, and a relaxed village atmosphere.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Dickwella/hero/dickwella-hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Coastal Calm and Local Life",
    paragraphs: [
      "Dickwella (also spelled Dikwella) is a small coastal town on the southern coast of Sri Lanka, located in the Matara district between Matara and Tangalle.",
      "Known for its peaceful and uncrowded atmosphere, it offers a quieter alternative to some of the busier beach destinations while still maintaining a strong sense of authentic Sri Lankan village life.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "location-vibe",
      kicker: "Location",
      title: "Location and Vibe",
      align: "left",
      paragraphs: [
        "Dickwella sits along Sri Lanka’s southern coastline, just east of Matara and before Tangalle, making it well-positioned along one of the country’s most popular coastal routes.",
        "Despite its location, the town remains relatively calm and less crowded, offering a laid-back environment that contrasts with nearby tourist-heavy areas.",
        "It retains the feel of a working local town, where everyday life continues alongside tourism, giving visitors a more grounded and authentic experience.",
      ],
    },

    {
      type: "text",
      id: "dickwella-beach",
      kicker: "Main Attractions",
      title: "Dickwella Beach and Hiriketiya",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Dickwella Beach",
        },
        {
          type: "p",
          text: "A long, sandy beach that is largely protected by natural reefs and sandbars.",
        },
        {
          type: "p",
          text: "This makes the water calmer and safer for swimming than many other beaches on the south coast, making it a favorite for families.",
        },

        {
          type: "split-paragraph",
          heading: "Hiriketiya Beach (Hiri)",
          headingLevel: "h3",

          paragraphs: [
            "A small, picturesque horseshoe-shaped bay located very close to Dickwella.",
            "It has rapidly become one of Sri Lanka’s trendiest coastal destinations, especially known for surfing.",
            "Hiriketiya is particularly popular with beginner and intermediate surfers and is also known for its boutique cafés and vibrant digital nomad and backpacker culture.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Dickwella/dickwella2.webp`,
          imageAlt: "Hiriketiya Beach near Dickwella",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "cards",
      kicker: "Explore",
      title: "Things to See and Do",
      align: "center",

      items: [
        {
          title: "Dickwella Market",
          description:
            "Explore one of the region’s busiest local markets, known for fresh produce, seafood, spices, handicrafts, and everyday goods.",
          image: `${import.meta.env.BASE_URL}Destinations/Dikwella/poi/dickwella-market.webp`,
          to: "/places/dickwella-market",
        },

        {
          title: "Wewurukannala Vihara Temple",
          description:
            "A famous Buddhist temple complex known for its giant seated Buddha statue and detailed religious artwork.",
          image: `${import.meta.env.BASE_URL}Destinations/Dikwella/poi/wewurukannala.webp`,
          to: "/places/dickwella-wewurukannala-vihara",
        },
 
        {
          title: "Hummanaya Blowhole",
          description:
            "Visit Sri Lanka’s largest natural blowhole, where powerful sea sprays erupt dramatically from coastal rock formations.",
          image: `${import.meta.env.BASE_URL}Destinations/Dikwella/poi/hummanaya.webp`,
          to: "/places/dickwella-hummanaya-blowhole",
        },

        {
          title: "Water Activities",
          description:
            "Enjoy snorkeling, surfing, swimming, fishing trips, and other coastal experiences around the Dikwella area.",
          image: `${import.meta.env.BASE_URL}Destinations/Dikwella/poi/water-activities.webp`,
          to: "/places/dickwella-water-activities",
        },
      ],
    },
  ],
};

export default DickwellaArticle;