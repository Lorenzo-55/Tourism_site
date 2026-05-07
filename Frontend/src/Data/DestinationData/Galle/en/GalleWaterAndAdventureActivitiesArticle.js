const WaterAndAdventureActivitiesArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Galle", to: "/places/galle" },
    { label: "Activities (Water & Adventure)" },
  ],

  hero: {
    kicker: "Water & Adventure",
    title: "Activities (Water & Adventure)",
    subtitle:
      "Surfing, beaches, snorkeling, diving, and coastal experiences around Galle and the southern coastline.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Galle/water1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Coastal Activities Around Galle",
    paragraphs: [
      "The coastline surrounding Galle is one of the most popular regions in Sri Lanka for beach activities and water sports.",
      "From relaxed swimming beaches and beginner surf spots to snorkeling reefs and historic shipwreck dives, the area offers a wide variety of coastal experiences throughout the southern season.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "beaches",
      kicker: "Beaches",
      title: "Popular Beaches",
      align: "left",

      content: [
        {
          type: "split-paragraph",
          heading: "Unawatuna Beach",
          headingLevel: "h3",

          paragraphs: [
            "Located about 15 minutes from Galle, Unawatuna Beach is one of the most famous beaches on Sri Lanka’s south coast.",
            "It is known for its crescent-shaped shoreline, calm waters, and relaxed atmosphere.",
            "The beach is especially popular for swimming and casual beachside dining.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Galle/water2.webp`,
          imageAlt: "Unawatuna Beach near Galle",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Dalawella Beach / Mihiripenna Beach",
        },

        {
          type: "p",
          text: "Dalawella and Mihiripenna are quieter beaches south of Unawatuna, known for their relaxed atmosphere and scenic coastline.",
        },

        {
          type: "p",
          text: "The area is famous for the iconic “swing palm” and for natural rock pools that become visible during calmer sea conditions.",
        },

        {
          type: "h3",
          text: "Thalpe Beach",
        },

        {
          type: "p",
          text: "Thalpe Beach is known for its quieter setting and reef-lined shoreline.",
        },

        {
          type: "p",
          text: "The beach is popular with visitors looking for a calmer and less crowded coastal environment.",
        },

        {
          type: "split-paragraph",
          heading: "Hikkaduwa",
          headingLevel: "h3",

          paragraphs: [
            "Located north of Galle, Hikkaduwa is one of Sri Lanka’s best-known beach towns.",
            "It is popular for surfing, nightlife, beach cafés, and a more energetic atmosphere compared to the quieter beaches further south.",
            "The area also has several well-known surf breaks suitable for different skill levels.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Galle/water3.webp`,
          imageAlt: "Hikkaduwa Beach and surf area",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "surfing",
      kicker: "Surfing",
      title: "Surfing Around Galle",
      align: "left",

      content: [
        {
          type: "p",
          text: "The south coast surfing season generally runs from November to April, when sea conditions are calmer and waves are more consistent.",
        },

        {
          type: "h3",
          text: "Dewata Beach (Closenberg)",
        },

        {
          type: "p",
          text: "Dewata Beach is the closest surf spot to Galle and is especially popular with beginners.",
        },

        {
          type: "p",
          text: "The beach has a gentle beach break and several surf schools offering lessons and rentals.",
        },

        {
          type: "h3",
          text: "Unawatuna Beach",
        },

        {
          type: "p",
          text: "Unawatuna offers relatively gentle waves suitable for beginner and intermediate surfers.",
        },

        {
          type: "p",
          text: "Its calmer conditions make it a comfortable location for learning basic surfing skills.",
        },

        {
          type: "split-paragraph",
          heading: "Kabalana (The Rock)",
          headingLevel: "h3",

          paragraphs: [
            "Kabalana is located further south and is known for more powerful surf breaks.",
            "The area includes the famous “The Rock” break, which attracts experienced and advanced surfers.",
            "Wave conditions here are more demanding than beginner beaches closer to Galle.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Galle/water4.webp`,
          imageAlt: "Surfing near Kabalana Beach",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "diving-snorkeling",
      kicker: "Marine Activities",
      title: "Diving and Snorkeling",
      align: "left",

      content: [
        {
          type: "p",
          text: "The best diving and snorkeling conditions along the Galle coast are typically from October to April.",
        },

        {
          type: "h3",
          text: "Snorkeling in Unawatuna and Jungle Beach",
        },

        {
          type: "p",
          text: "The calm waters around Unawatuna and nearby Jungle Beach provide good conditions for snorkeling and beginner diving.",
        },

        {
          type: "p",
          text: "Jungle Beach, located at the base of Rumassala Hill, is especially known for its clear water and coral reef areas.",
        },

        {
          type: "split-paragraph",
          heading: "Wreck Diving in Galle Harbour",
          headingLevel: "h3",

          paragraphs: [
            "The waters around Galle Harbour are known for several historic and modern shipwreck dive sites.",
            "<strong>SS Rangoon:</strong> A well-preserved 19th-century steamer wreck located at a depth of around 30 to 35 meters.",
            "<strong>Goda Gala (Lord Nelson Wreck):</strong> A more modern wreck site located between 8 and 15 meters deep, now serving as a habitat for marine life.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Galle/water5.webp`,
          imageAlt: "Diving near Galle Harbour wreck sites",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "These dive sites attract both recreational divers and underwater photography enthusiasts interested in marine life and maritime history.",
        },
      ],
    },
  ],
};

export default WaterAndAdventureActivitiesArticle;