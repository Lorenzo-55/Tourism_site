const HikkaduwaArticle = {
  breadcrumbItems: [
    { label: "Places", to: "/places" },
    { label: "Hikkaduwa", to: "/places/hikkaduwa" },
  ],

  hero: {
    kicker: "Southwest Coast",
    title: "Hikkaduwa",
    subtitle:
      "A lively beach town known for coral reefs, sea turtles, surfing, and one of Sri Lanka’s most established coastal tourism scenes.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/hero/hikkaduwa-hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Beaches, Reefs, and Coastal Energy",
    paragraphs: [
      "Hikkaduwa, located on the southwest coast of Sri Lanka, is a vibrant beach town famous for its beaches, coral sanctuary, and excellent surfing conditions.",
      "It combines marine beauty, a long-established tourism culture, and a busy seaside atmosphere, making it one of the best-known beach destinations in the country.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "hikkaduwa-history",
      kicker: "History",
      title: "Tourism, Marine Identity, and the Tsunami",
      align: "left",
      content: [
        {
          type: "p",
          text: "Hikkaduwa was one of the first major beach destinations in Sri Lanka to gain international attention, especially from the early 1960s onward. This early wave of tourism helped shape the town into one of the country’s best-known coastal resorts.",
        },
        {
          type: "p",
          text: "Its growing popularity was closely linked to the beauty of its shoreline and the marine richness just offshore. Over time, Hikkaduwa became especially famous for its coral reef, which later contributed to the protection of the area as part of Hikkaduwa National Park.",
        },
        {
          type: "split-paragraph",
          heading: "The 2004 Tsunami",
          headingLevel: "h4",
          paragraphs: [
            "Hikkaduwa was deeply affected by the Indian Ocean tsunami on Boxing Day in 2004. The disaster caused major destruction along the coast and left a lasting mark on the town and its people.",
            "Today, memorials and educational sites such as the Community Tsunami Education Center & Museum and the Tsunami Honganji Vihara help preserve the memory of the victims and tell the story of what happened. These places add another layer to Hikkaduwa’s identity, linking its beach tourism with remembrance and resilience.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/history/tsunami-memorial.webp`,
          imageAlt: "Tsunami memorial in Hikkaduwa",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "hikkaduwa-nowadays",
      kicker: "Present Day",
      title: "Hikkaduwa Nowadays and Tourism",
      align: "left",
      paragraphs: [
        "Today, Hikkaduwa has evolved into a lively and well-developed tourist hub on Sri Lanka’s southwest coast. It attracts a wide range of visitors, from backpackers and surfers to families and holidaymakers looking for a relaxed beach atmosphere.",
        "The town’s main coastal road forms a busy strip of around four kilometers, lined with hotels, restaurants, bars, shops, cafés, and guesthouses. This gives Hikkaduwa a vibrant, active feel, especially during the travel season.",
        "Despite its popularity, the town still keeps a laid-back character. Visitors can move easily between beach time, water activities, casual dining, nightlife, and local shopping, which makes the area feel both energetic and easygoing.",
        "The best season to visit is generally from November to April, when the seas are calmer and conditions are more favorable for snorkeling, diving, and enjoying the beaches. During this period, Hikkaduwa is at its busiest and most lively.",
      ],
    },

    {
      type: "text",
      id: "beaches-and-reef",
      kicker: "Coast and Marine Life",
      title: "Beaches, Reef, and Sea Life",
      align: "left",
      content: [
        {
          type: "p",
          text: "Hikkaduwa’s appeal is strongly tied to its beaches and marine environment. The main beach area is lively and central, offering swimming, easy access to the reef, and frequent sea turtle sightings close to the shore, especially in the mornings.",
        },
        {
          type: "p",
          text: "Just south of the main town, Narigama Beach offers a different atmosphere. It is longer, wider, and generally more relaxed, and has become especially well known for surfing. This makes it popular with visitors who want a quieter beach while still staying close to the center.",
        },
        {
          type: "split-paragraph",
          heading: "Coral Sanctuary and National Park",
          headingLevel: "h4",
          paragraphs: [
            "The Hikkaduwa Coral Sanctuary, part of Hikkaduwa National Park, is one of Sri Lanka’s best-known marine attractions. Its shallow reef is unusually accessible from the shore, allowing visitors to experience colorful fish, coral formations, and sea turtles without needing to travel far offshore.",
            "Because of this easy access and rich marine life, the area has become one of the country’s leading destinations for snorkeling and reef-based tourism. It remains especially important for visitors interested in marine ecosystems and coastal conservation.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/main/coral-reef.webp`,
          imageAlt: "Coral reef in Hikkaduwa",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "cards",
      kicker: "Explore",
      title: "Points of Interest",
      align: "center",
      items: [
        {
          title: "Historical / Cultural",
          description:
            "Explore memorials, museums, and cultural landmarks connected to Hikkaduwa’s past and community life.",
          image: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/poi/historical-cultural.webp`,
          imageAlt: "Historical and cultural places in Hikkaduwa",
          to: "/places/hikkaduwa/historical-cultural",
        },
        {
          title: "Marine & Nature",
          description:
            "Discover coral reefs, coastal habitats, and the marine environments that define Hikkaduwa.",
          image: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/poi/marine-nature.webp`,
          imageAlt: "Marine and nature attractions in Hikkaduwa",
          to: "/places/hikkaduwa/marine-and-nature",
        },
        {
          title: "Madu River Safari",
          description:
            "Take a boat ride through mangroves and waterways for a different natural experience beyond the beach.",
          image: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/poi/madu-river-safari.webp`,
          imageAlt: "Madu River Safari",
          to: "/places/hikkaduwa/madu-river-safari",
        },
        {
          title: "Diving Sites",
          description:
            "Visit underwater sites known for reef life, clear water in season, and easy access from the coast.",
          image: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/poi/diving-sites.webp`,
          imageAlt: "Diving in Hikkaduwa",
          to: "/places/hikkaduwa/diving-sites",
        },
        {
          title: "Spot Sea Turtles",
          description:
            "One of Hikkaduwa’s best-known experiences is seeing sea turtles near the shore and around the reef areas.",
          image: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/poi/sea-turtles.webp`,
          imageAlt: "Sea turtles in Hikkaduwa",
          to: "/places/hikkaduwa/spot-sea-turtles",
        },
        {
          title: "Nightlife",
          description:
            "Enjoy the lively side of the town through bars, restaurants, music, and its energetic coastal strip.",
          image: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/poi/nightlife.webp`,
          imageAlt: "Nightlife in Hikkaduwa",
          to: "/places/hikkaduwa/nightlife",
        },
      ],
    },
  ],
};

export default HikkaduwaArticle;