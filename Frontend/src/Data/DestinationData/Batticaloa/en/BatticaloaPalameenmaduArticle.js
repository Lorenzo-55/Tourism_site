const PalameenmaduArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Batticaloa", to: "/places/batticaloa" },
    { label: "Palameenmadu" },
  ],

  hero: {
    kicker: "Nature & Lagoon",
    title: "Palameenmadu",
    subtitle:
      "A peaceful coastal area where Batticaloa Lagoon meets the Indian Ocean.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Batticaloa/palameenmadu1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Quiet Lagoon and Coastal Landscape",
    paragraphs: [
      "Palameenmadu is a scenic area near Batticaloa known for its tranquil natural surroundings and relaxed atmosphere.",
      "Located where Batticaloa Lagoon meets the Indian Ocean, the area combines lagoons, mangroves, beaches, fishing villages, and birdlife, making it ideal for visitors seeking a quieter and more authentic experience on Sri Lanka’s east coast.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "lagoon-estuary",
      kicker: "Nature",
      title: "The Lagoon and Estuary",
      align: "left",

      content: [
        {
          type: "split-paragraph",
          heading: "",
          headingLevel: "h4",

          paragraphs: [
            "The Batticaloa Lagoon is the largest lagoon system in the region and forms the defining landscape of Palameenmadu.",
            "The meeting point between the lagoon and the Indian Ocean creates a rich estuarine ecosystem with diverse aquatic life and bird habitats.",
            "Boat trips are available in the lagoon area, which also remains an important fishing zone for local communities.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Batticaloa/palameenmadu2.webp`,
          imageAlt: "Batticaloa Lagoon near Palameenmadu",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "fishing",
      kicker: "Local Life",
      title: "Fishing and Daily Life",
      align: "left",

      content: [
        {
          type: "p",
          text: "Palameenmadu is traditionally known as a fishing area and remains closely connected to the lagoon and the sea.",
        },

        {
          type: "p",
          text: "Visitors can observe local fishermen preparing nets, navigating canoes, and returning with their catch along the lagoon shoreline.",
        },

        {
          type: "p",
          text: "Fishing excursions may also be available through local operators or fishermen in the area.",
        },
      ],
    },

    {
      type: "text",
      id: "birdwatching",
      kicker: "Wildlife",
      title: "Birdwatching and Nature",
      align: "left",

      content: [
        {
          type: "p",
          text: "The mangroves and wetlands around the lagoon provide an important habitat for numerous bird species.",
        },

        {
          type: "p",
          text: "Palameenmadu is considered a good location for birdwatching, especially during calmer morning and evening hours.",
        },

        {
          type: "p",
          text: "The Palameenmadu Ecopark includes a birdwatching observation point overlooking parts of the lagoon and surrounding wetlands.",
        },

        {
          type: "split-paragraph",
          heading: "Quiet Beaches",
          headingLevel: "h4",

          paragraphs: [
            "The coastal areas around the lighthouse and nearby shoreline include several quiet beaches with calm surroundings.",
            "Compared to more developed beach destinations such as Passikudah, these beaches are far less crowded and maintain a peaceful atmosphere.",
            "The area is suitable for relaxing walks, photography, and enjoying the natural scenery.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Batticaloa/palameenmadu3.webp`,
          imageAlt: "Quiet beach near Palameenmadu",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "cycling-walking",
      kicker: "Activities",
      title: "Cycling and Walking",
      align: "left",

      content: [
        {
          type: "p",
          text: "The relatively flat landscape around Palameenmadu makes the area suitable for cycling and walking.",
        },

        {
          type: "p",
          text: "Visitors can explore the coastline, fishing villages, and lagoon surroundings while observing everyday local life.",
        },

        {
          type: "p",
          text: "The peaceful environment and low traffic levels contribute to the relaxed character of the area.",
        },

        {
          type: "p",
          text: "Palameenmadu is especially suited to travelers seeking a slower-paced experience focused on nature, local culture, and quiet coastal scenery.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Best Time and Access",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Best Time to Visit",
        },

        {
          type: "p",
          text: "The best period to visit Batticaloa and Palameenmadu is generally from April to September.",
        },

        {
          type: "p",
          text: "During these months, the weather is typically drier with less rainfall compared to the northeast monsoon season between November and March.",
        },

        {
          type: "h3",
          text: "Getting There",
        },

        {
          type: "p",
          text: "Palameenmadu is located approximately 5 kilometers from the center of Batticaloa.",
        },

        {
          type: "p",
          text: "<strong>Transportation:</strong> Tuk-tuks are the most common and convenient way to travel between Batticaloa town and Palameenmadu.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=7.758218793207059,81.6455022206071",
        },
      ],
    },
  ],
};

export default PalameenmaduArticle;