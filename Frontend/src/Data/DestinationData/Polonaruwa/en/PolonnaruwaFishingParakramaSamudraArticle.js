const PolonnaruwaFishingParakramaSamudraArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Polonnaruwa", to: "/places/polonnaruwa" },
    { label: "Fishing in Parakrama Samudra" },
  ],

  hero: {
    kicker: "Nature & Local Experiences",
    title: "Fishing in Parakrama Samudra",
    subtitle:
      "A peaceful fishing experience on the historic waters of Parakrama Samudra, surrounded by nature, village life, and ancient irrigation landscapes.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Polonnaruwa/fishing-parakrama-samudra/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Fishing on the Sea of Parakrama",
    paragraphs: [
      "The Parakrama Samudra is not only one of the great engineering achievements of ancient Sri Lanka, but also an important part of the region’s modern ecosystem and fishing culture.",
      "Fishing here offers a calm and authentic local experience, allowing visitors to spend time on the vast reservoir while learning about traditional freshwater fishing practices that have supported communities around Polonnaruwa for generations.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "local-fishing-experience",
      kicker: "Local Experience",
      title: "Fishing with Local Fishermen",
      align: "left",

      content: [
        {
          type: "p",
          text: "Fishing in the Parakrama Samudra is less about sport fishing and more about experiencing local life and the peaceful atmosphere of the reservoir.",
        },

        {
          type: "p",
          text: "Some local guides and tour providers arrange trips with fishermen who still use traditional methods on the lake.",
        },

        {
          type: "split-paragraph",
          heading: "Traditional Canoes and Bamboo Rods",
          headingLevel: "h3",

          paragraphs: [
            "Visitors may travel across the reservoir in traditional dugout canoes carved from hollowed tree trunks.",
            "Fishing is often done using simple bamboo rods and local techniques passed down through generations.",
            "The experience focuses on tranquility, scenery, and cultural immersion rather than large trophy catches.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Polonnaruwa/fishing-parakrama-samudra/local-fishing.webp`,
          imageAlt: "Traditional fishing on Parakrama Samudra",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "fish-species",
      kicker: "Freshwater Ecosystem",
      title: "Fish Species and the Reservoir Environment",
      align: "left",

      content: [
        {
          type: "p",
          text: "The freshwater lakes and reservoirs of Sri Lanka, including the Parakrama Samudra, support a variety of fish species that are important to local communities.",
        },

        {
          type: "p",
          text: "Common species include catfish and several types of cyprinids found within the reservoir ecosystem.",
        },

        {
          type: "split-paragraph",
          heading: "A Scenic Environment",
          headingLevel: "h3",

          paragraphs: [
            "The calm waters, birdlife, and open landscapes create a relaxing atmosphere for spending time on the lake.",
            "Fishing trips often become as much about enjoying the scenery as the fishing itself.",
            "Sunrise and late afternoon are especially beautiful times to experience the reservoir.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Polonnaruwa/fishing-parakrama-samudra/lake-scenery.webp`,
          imageAlt: "Scenic waters of Parakrama Samudra",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "other-fishing-spots",
      kicker: "Nearby Waters",
      title: "Other Fishing Opportunities",
      align: "left",

      content: [
        {
          type: "p",
          text: "Besides the Parakrama Samudra itself, the wider Polonnaruwa region contains smaller lakes, irrigation tanks, and reservoirs where local fishing also takes place.",
        },

        {
          type: "p",
          text: "Local residents are often willing to point out fishing spots or help visitors arrange simple fishing excursions around the countryside.",
        },
      ],
    },

    {
      type: "text",
      id: "travel-tips",
      kicker: "Practical Tips",
      title: "Important Considerations",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Cultural Experience Over Sport Fishing",
        },

        {
          type: "p",
          text: "Freshwater fishing in inland Sri Lanka is generally not developed as a large-scale recreational sport activity. The emphasis is usually on local traditions, nature, and village life.",
        },

        {
          type: "h3",
          text: "Fishing Seasons and Water Levels",
        },

        {
          type: "p",
          text: "Water levels can vary significantly depending on the season. During dry periods, lower water levels may affect fishing conditions and access to certain areas.",
        },

        {
          type: "split-paragraph",
          heading: "Using Local Guides",
          headingLevel: "h3",

          paragraphs: [
            "Going with a local guide is highly recommended for the best experience.",
            "Local fishermen understand the reservoir, fish behavior, weather conditions, and the safest areas for fishing.",
            "Using local guides also supports the surrounding communities and helps ensure a more responsible and authentic experience.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Polonnaruwa/fishing-parakrama-samudra/fisherman.webp`,
          imageAlt: "Local fisherman on Parakrama Samudra",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "A fishing excursion on the Parakrama Samudra is a peaceful way to step away from the archaeological ruins and experience the quieter natural side of Polonnaruwa.",
        },
      ],
    },
  ],
};

export default PolonnaruwaFishingParakramaSamudraArticle;