const UnawatunaBeachesArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Unawatuna", to: "/places/unawatuna" },
    { label: "Beaches" },
  ],

  hero: {
    kicker: "Beaches & Coastline",
    title: "Beaches",
    subtitle:
      "Golden bays, jungle coves, sea turtles, snorkeling spots, and some of the most iconic beaches on Sri Lanka’s southern coast.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Unawatuna/beaches/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "The Beaches Around Unawatuna",
    paragraphs: [
      "Unawatuna is one of Sri Lanka’s best-known beach destinations, combining calm swimming bays, lively beachfront cafés, hidden jungle coves, and marine life encounters.",
      "From the busy atmosphere of Unawatuna Beach to the quieter shores of Jungle Beach and the turtle-filled waters of Dalawella and Wijaya Beach, the coastline offers a variety of beach experiences within a short distance of each other.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "unawatuna-main-beach",
      kicker: "Main Beach",
      title: "Unawatuna Beach",
      align: "left",

      content: [
        {
          type: "p",
          text: "Unawatuna Beach is the main beach area of the town and one of the most popular coastal destinations in southern Sri Lanka.",
        },

        {
          type: "p",
          text: "The beach is known for its curved golden bay, relaxed tropical atmosphere, and generally calm swimming conditions.",
        },

        {
          type: "split-paragraph",
          heading: "Atmosphere and Swimming",
          headingLevel: "h3",

          paragraphs: [
            "Because the bay is naturally protected, the water is usually calmer than many other beaches along the southern coastline.",
            "This makes Unawatuna a popular place for swimming, relaxing, and casual beach activities.",
            "The beachfront is lined with cafés, seafood restaurants, bars, boutique hotels, and guesthouses, creating a lively but laid-back atmosphere.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Unawatuna/beaches/unawatuna-beach.webp`,
          imageAlt: "Main beach in Unawatuna",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "<strong>Best Season:</strong> December to April generally provides the calmest sea conditions and sunniest weather.",
        },

        {
          type: "p",
          text: "<strong>Sunset:</strong> Late afternoon and sunset are especially popular along the beachfront restaurants and bars.",
        },
      ],
    },

    {
      type: "text",
      id: "jungle-beach",
      kicker: "Hidden Cove",
      title: "Jungle Beach",
      align: "left",

      content: [
        {
          type: "p",
          text: "Jungle Beach is one of the quieter and more secluded beaches near Unawatuna, located on the western side of Rumassala Hill.",
        },

        {
          type: "p",
          text: "Surrounded by dense greenery and forest from the Rumassala Wildlife Sanctuary, the beach has a more hidden and peaceful atmosphere compared to the main Unawatuna Bay.",
        },

        {
          type: "split-paragraph",
          heading: "The Beach and Snorkeling",
          headingLevel: "h3",

          paragraphs: [
            "The area consists of two small sandy coves backed by jungle vegetation.",
            "The water is generally calm and shallow, making it suitable for swimming.",
            "Jungle Beach is also one of the more accessible snorkeling spots near Unawatuna, with tropical fish visible around the nearby coral reef.",
            "Although parts of the reef have degraded over time, snorkeling remains a popular activity here.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Unawatuna/beaches/jungle-beach.webp`,
          imageAlt: "Jungle Beach near Unawatuna",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Getting There",
        },

        {
          type: "p",
          text: "Most visitors reach Jungle Beach by tuk-tuk or by walking through the forested paths around Rumassala Hill.",
        },

        {
          type: "p",
          text: "A common route is to take a tuk-tuk toward the Japanese Peace Pagoda and then continue with a short 10–15 minute downhill jungle walk to the beach.",
        },

        {
          type: "h3",
          text: "Practical Tips",
        },

        {
          type: "p",
          text: "<strong>Bring Water:</strong> Only limited snack and café options are usually available.",
        },

        {
          type: "p",
          text: "<strong>Footwear:</strong> Comfortable shoes are useful for the uneven jungle path.",
        },

        {
          type: "p",
          text: "<strong>Sun Protection:</strong> Natural shade on the sand is limited during midday.",
        },

        {
          type: "p",
          text: "<strong>Best Season:</strong> December to April generally offers the clearest snorkeling conditions.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.018949352984879,80.23942969503128",
        },
      ],
    },

    {
      type: "text",
      id: "dalawella-wijaya",
      kicker: "Protected Lagoon",
      title: "Dalawella Beach / Wijaya Beach",
      align: "left",

      content: [
        {
          type: "p",
          text: "Dalawella Beach and Wijaya Beach refer to the same stretch of coastline just east of Unawatuna, famous for calm lagoon-like swimming conditions and sea turtle encounters.",
        },

        {
          type: "p",
          text: "Wijaya Beach is most commonly associated with the well-known beachfront restaurant and hotel located directly beside the protected swimming area.",
        },

        {
          type: "split-paragraph",
          heading: "Natural Reef Lagoon",
          headingLevel: "h3",

          paragraphs: [
            "An offshore coral reef acts as a natural barrier that softens the force of incoming waves.",
            "This creates a calm shallow swimming area that resembles a natural lagoon or reef pool.",
            "Because of these protected waters, the beach is especially popular with families and visitors looking for gentle swimming conditions.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Unawatuna/beaches/wijaya-beach.webp`,
          imageAlt: "Protected lagoon at Wijaya Beach",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Sea Turtle Encounters",
        },

        {
          type: "p",
          text: "Dalawella and Wijaya Beach are among the easiest places in Sri Lanka to see wild Green Sea Turtles swimming close to shore.",
        },

        {
          type: "p",
          text: "The turtles are commonly seen grazing on seaweed around the protected reef area and can often be spotted while snorkeling directly from the beach.",
        },

        {
          type: "p",
          text: "<strong>Important:</strong> Visitors should never touch, feed, or chase the turtles. Maintaining distance helps protect the animals and reduces stress on wildlife.",
        },

        {
          type: "p",
          text: "<strong>Snorkeling:</strong> Calm conditions make this one of the easiest beginner snorkeling spots near Unawatuna.",
        },

        {
          type: "button",
          label: "View Dalawella Beach",
          href: "https://www.google.com/maps?q=5.99976548481178,80.26370464715399",
        },

        {
          type: "button",
          label: "View Wijaya Beach",
          href: "https://www.google.com/maps?q=6.0010082666984275,80.26148530749491",
        },
      ],
    },

    {
      type: "text",
      id: "rope-swing",
      kicker: "Famous Photo Spot",
      title: "The Dalawella Rope Swing",
      align: "left",

      content: [
        {
          type: "p",
          text: "The rope swing at Dalawella Beach has become one of the most photographed and recognizable attractions on Sri Lanka’s south coast.",
        },

        {
          type: "split-paragraph",
          heading: "The Swing Experience",
          headingLevel: "h3",

          paragraphs: [
            "The swing is attached to a tall leaning palm tree that extends toward the ocean.",
            "Visitors swing out above the sand and water while locals often help by giving pushes or showing visitors how to climb the tree safely.",
            "The tropical backdrop and ocean views have made the swing especially popular for photography and social media.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Unawatuna/beaches/rope-swing.webp`,
          imageAlt: "The famous rope swing at Dalawella Beach",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Location and Cost",
        },

        {
          type: "p",
          text: "The most famous swing is generally located near Dream Cabana Guesthouse on Dalawella Beach.",
        },

        {
          type: "p",
          text: "<strong>Fee:</strong> Visitors usually pay a small fee of around LKR 500 for access and photos.",
        },

        {
          type: "h3",
          text: "Best Time to Visit",
        },

        {
          type: "p",
          text: "<strong>Sunset:</strong> The most popular time for photography, though queues can become long.",
        },

        {
          type: "p",
          text: "<strong>Early Morning:</strong> Usually quieter and better for avoiding crowds.",
        },

        {
          type: "p",
          text: "<strong>Safety:</strong> The swing is more physically demanding than it appears in photos, so visitors should follow local instructions carefully.",
        },

        {
          type: "p",
          text: "Large sea turtles are often visible in the nearby water, especially during calmer conditions.",
        },
      ],
    },
  ],
};

export default UnawatunaBeachesArticle;