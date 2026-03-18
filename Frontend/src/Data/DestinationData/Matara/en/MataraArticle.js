// src/Data/DestinationData/Matara/en/MataraArticle.js

const MataraArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Matara", to: "/matara" },
  ],

  hero: {
    kicker: "SOUTH COAST CITY",
    title: "Matara",
    subtitle: ".",
    backgroundImage: `${import.meta.env.BASE_URL}/Destinations/Matara/Matara1.jpg`,
  },

  overview: {
    kicker: "OVERVIEW",
    title: "An Introduction to Matara",
    subtitle:
      "Matara offers a grounded, local South Coast experience shaped by history, faith, and the sea.",
    paragraphs: [
      "Matara is a major city on the southern coast of Sri Lanka, known for its mix of historic character, everyday local life, and access to some of the region’s best beaches. Set at the mouth of the Nilwala River, it feels more rooted and lived-in than many of the island’s resort-focused coastal towns.",
      "The city carries a strong colonial legacy, especially through its surviving Dutch fortifications, but Matara is not only about the past. Temples, markets, oceanfront views, and nearby surf towns give it a broad appeal for travelers who want more than just a beach stop.",
      "Its location also makes it a useful base for exploring the wider South Coast. Well-known places like Weligama, Polhena, Talalla, and Hiriketiya are all within easy reach, while Matara itself offers a quieter and more local atmosphere.",
      "For many visitors, Matara works best as an entry point into the surrounding area: a place to understand the region’s history, enjoy the coastline, and branch out into culture, nature, and water-based experiences.",
      "The driest and most popular period on this side of the island is generally from November to April, when seas are calmer and conditions are best for beach time, surfing, and snorkeling. Outside that window, the city still remains active, but ocean conditions can become rougher depending on the monsoon season.",
    ],
  },

  sections: [
    {
      type: "cards",
      kicker: "POINTS OF INTEREST",
      title: "Explore Matara",
      subtitle:
        "Use these sections as starting points to break Matara into its main themes and experiences.",
      align: "center",
      items: [
        {
          title: "History",
          description:
            "Explore Matara’s colonial past, strategic role on the southern coast, and the legacy of Portuguese, Dutch, and British rule.",
          image: `${import.meta.env.BASE_URL}/Destinations/Matara/MataraHistory.webp`,
          imageAlt: "Historic fort walls and colonial atmosphere in Matara",
          to: "/matara/history",
        },
        {
          title: "Key Attractions",
          description:
            "See the city’s best-known landmarks, from forts and heritage structures to temples and coastal viewpoints.",
          image: `${import.meta.env.BASE_URL}/Destinations/Matara/MataraAttractions.webp`,
          imageAlt: "Landmarks and attractions in Matara",
          to: "/matara/attractions",
        },
        {
          title: "Culture",
          description:
            "Get a feel for Matara’s religious heritage, local identity, and everyday cultural life beyond the beach.",
          image: `${import.meta.env.BASE_URL}/Destinations/Matara/MataraCulture.webp`,
          imageAlt: "Cultural and religious life in Matara",
          to: "/matara/culture",
        },
        {
          title: "Beaches",
          description:
            "Discover calm local beaches, scenic coastal stretches, and nearby bays suited to swimming and relaxed seaside days.",
          image: `${import.meta.env.BASE_URL}/Destinations/Matara/MataraBeaches.webp`,
          imageAlt: "Beach scene near Matara",
          to: "/matara/beaches",
        },
        {
          title: "Surfing",
          description:
            "From beginner-friendly bays to stronger reef breaks, Matara connects easily to some of the South Coast’s best surf zones.",
          image: `${import.meta.env.BASE_URL}/Destinations/Matara/MataraSurfing.webp`,
          imageAlt: "Surfing near Matara",
          to: "/matara/surfing",
        },
        {
          title: "Diving and Snorkeling",
          description:
            "Find calm reef areas, turtle sightings, and nearby dive options for visitors interested in marine life and clear coastal water.",
          image: `${import.meta.env.BASE_URL}/Destinations/Matara/MataraSnorkeling.webp`,
          imageAlt: "Snorkeling and diving near Matara",
          to: "/matara/diving-snorkeling",
        },
      ],
    },
  ],
};

export default MataraArticle;