const UnawatunaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Unawatuna" },
  ],

  hero: {
    kicker: "Southern Province",
    title: "Unawatuna",
    subtitle:
      "A vibrant coastal town near Galle known for its sheltered bay, relaxed atmosphere, and easy access to beaches, reefs, and cultural landmarks.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Unawatuna/unawatuna-hero.jpg`,
  },

  overview: {
    kicker: "Overview",
    title: "A Lively Bay Close to Galle",
    paragraphs: [
      "Unawatuna is one of the most popular beach destinations on Sri Lanka’s southern coast, known for its golden shoreline, calm swimming conditions, and laid-back yet lively atmosphere. Its location just a short distance from Galle makes it both a beach escape and a convenient base for exploring nearby cultural sites.",
      "The town combines easy beach access with restaurants, cafes, and nightlife, while still offering quieter spots and natural areas within a short distance. This balance has made Unawatuna a consistent favorite among both short-term visitors and longer stays.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "beaches",
      kicker: "Beaches",
      title: "A Sheltered Bay with Variety",
      align: "left",
      content: [
        {
          type: "p",
          text: "Unawatuna Beach is the main attraction, a curved bay with golden sand and relatively calm waters due to its protected shape. This makes it one of the safer and more accessible swimming beaches along the southern coast.",
        },
        {
          type: "p",
          text: "The beachfront is lined with cafes, restaurants, and bars, creating a relaxed but social atmosphere, especially in the evenings. Despite its popularity, nearby areas offer quieter alternatives within a short distance.",
        },
        {
          type: "split-paragraph",
          heading: "Nearby Beaches and Hidden Spots",
          headingLevel: "h4",
          paragraphs: [
            "Jungle Beach, located across the bay and accessible by a short walk or tuk-tuk ride, offers a more secluded environment with clear water suitable for swimming and snorkeling.",
            "Dalawella and Wijaya Beach form a nearby stretch of coastline known for natural rock pools and frequent sea turtle sightings. The famous rope swing at Dalawella has become one of the most recognizable coastal spots in the area.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Unawatuna/jungle-beach.jpg`,
          imageAlt: "Jungle Beach near Unawatuna",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "surfing",
      kicker: "Surfing",
      title: "Nearby Beginner-Friendly Waves",
      align: "left",
      paragraphs: [
        "While Unawatuna itself is better known for calm water, nearby beaches provide good conditions for surfing. Dewata Beach, also known as Closenburg Beach, is the most accessible option and is especially suitable for beginners due to its gentle waves and sandy bottom.",
        "Surf schools and board rentals are readily available, making it easy for first-time surfers to get started. The main surf season on this part of the south-west coast typically runs from November to April, when conditions are most consistent.",
      ],
    },

    {
      type: "text",
      id: "snorkeling-diving",
      kicker: "Water Activities",
      title: "Snorkeling, Diving, and Marine Life",
      align: "left",
      content: [
        {
          type: "p",
          text: "Unawatuna offers a range of marine activities, from casual snorkeling to more advanced diving. Dalawella and Wijaya Beach are particularly known for their high chance of encountering sea turtles in shallow water.",
        },
        {
          type: "p",
          text: "Jungle Beach provides good visibility and shallow coral areas, making it suitable for beginners, while the Rumassala Reef offers more varied marine life for those exploring further.",
        },
        {
          type: "p",
          text: "For diving, Unawatuna serves as a local hub with access to reefs and shipwreck sites. Certified dive centers in the area organize trips and provide equipment, catering to intermediate and advanced divers.",
        },
      ],
    },

    {
      type: "horizontal-scroll",
      kicker: "Things to See",
      title: "Nearby Landmarks and Experiences",
      align: "center",
      titleStyle: "",

      collapsible: false,
      defaultOpen: true,

      toggleLabelOpen: "",
      toggleLabelClose: "",

      items: [
        {
          title: "Galle Fort",
          description:
            "Located about 15–20 minutes away, this UNESCO World Heritage Site features a fortified old town with colonial architecture, boutique shops, cafes, and the iconic Galle Lighthouse.",
          image: `${import.meta.env.BASE_URL}Destinations/Unawatuna/galle-fort.jpg`,
          imageAlt: "Galle Fort",
        },
        {
          title: "Japanese Peace Pagoda",
          description:
            "Situated on Rumassala Hill, this serene white stupa offers wide views over the bay and is especially popular at sunset. It is part of a global network of peace pagodas built by a Japanese Buddhist order.",
          image: `${import.meta.env.BASE_URL}Destinations/Unawatuna/peace-pagoda.jpg`,
          imageAlt: "Japanese Peace Pagoda",
        },
        {
          title: "Whale Watching",
          description:
            "Tours depart from nearby Mirissa, about 40 minutes away, during the season. This is one of the main marine experiences in the region.",
          image: `${import.meta.env.BASE_URL}Destinations/Unawatuna/whale-watching.jpg`,
          imageAlt: "Whale watching near Unawatuna",
        },
        {
          title: "Yatagala Rajamaha Viharaya",
          description:
            "An ancient rock temple inland from Unawatuna with a history of over 2,300 years, offering a quieter and more spiritual setting away from the coast.",
          image: `${import.meta.env.BASE_URL}Destinations/Unawatuna/yatagala.jpg`,
          imageAlt: "Yatagala Rajamaha Viharaya",
        },
      ],
    },

    {
      type: "cards",
      kicker: "Highlights",
      title: "Points of Interest",
      align: "center",

      items: [
        {
          image: `${import.meta.env.BASE_URL}Destinations/Unawatuna/beaches.jpg`,
          imageAlt: "Beaches in Unawatuna",
          title: "Beaches",
          description:
            "From the main bay to quieter spots like Jungle Beach and Dalawella, Unawatuna offers a range of coastal experiences.",
          to: "/places/unawatuna/beaches",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Unawatuna/nearby.jpg`,
          imageAlt: "Nearby highlights near Unawatuna",
          title: "Nearby Highlights",
          description:
            "Close proximity to Galle and other landmarks makes Unawatuna a convenient base for exploring the south coast.",
          to: "/places/unawatuna/nearby-highlights",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Unawatuna/wildlife.jpg`,
          imageAlt: "Wildlife around Unawatuna",
          title: "Wildlife",
          description:
            "Sea turtles, reef life, and nearby whale watching opportunities make the area appealing for marine wildlife experiences.",
          to: "/places/unawatuna/wildlife",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Unawatuna/yatagala.jpg`,
          imageAlt: "Yatagala Rajamaha Viharaya",
          title: "Yatagala Rajamaha Viharaya",
          description:
            "A historic inland temple offering a peaceful contrast to the coastal setting of Unawatuna.",
          to: "/places/unawatuna/yatagala-rajamaha-viharaya",
        },
      ],
    },
  ],
};

export default UnawatunaArticle;