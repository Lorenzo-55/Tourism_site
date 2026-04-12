const KoggalaArticle = {
  breadcrumbItems: [
    { label: "Places", to: "/places" },
    { label: "Koggala", to: "/places/koggala" },
  ],

  hero: {
    kicker: "South Coast",
    title: "Koggala",
    subtitle:
      "A coastal strip between lagoon and ocean, blending history, quiet beaches, and access to some of Sri Lanka’s best surf.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Koggala/hero/koggala-hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Lagoon, Coastline, and Culture",
    paragraphs: [
      "Koggala is a coastal town in the Galle District of southern Sri Lanka, uniquely positioned between Koggala Lake and the Indian Ocean.",
      "It combines a peaceful atmosphere with historical significance, long beaches, and easy access to some of the most famous surf spots on the south coast.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "koggala-history",
      kicker: "History",
      title: "Ancient Roots, War, and Literary Legacy",
      align: "left",
      content: [
        {
          type: "p",
          text: "Koggala’s history blends ancient heritage, colonial influence, and global connections. The town’s name is believed to come from a rock carving of a crane, reflecting its early cultural roots.",
        },
        {
          type: "p",
          text: "The Kataluwa Purana Maha Vihara, dating back to the 13th century, is one of the most important local landmarks. It is known for its rare Kandyan-style murals, including unusual depictions of Queen Victoria, symbolizing a unique moment in the relationship between colonial rule and Buddhism.",
        },
        {
          type: "split-paragraph",
          heading: "World War II and the \"Double Sunrise\"",
          headingLevel: "h4",
          paragraphs: [
            "During World War II, Koggala became a strategic military location. The British Royal Air Force established a seaplane base on Koggala Lake, turning the town into an important hub in the Indian Ocean.",
            "From this base, a Catalina flying boat detected the approaching Japanese fleet in 1942, helping prevent a surprise attack on Sri Lanka. Koggala was also the starting point of the famous 28-hour 'Flight of the Double Sunrise' to Australia, where passengers witnessed two sunrises during a single journey.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Koggala/history/raf-base.webp`,
          imageAlt: "Koggala Lake RAF base",
          mediaPosition: "right",
        },
        {
          type: "p",
          text: "Koggala is also the birthplace of Martin Wickramasinghe, one of Sri Lanka’s most important literary figures. His works captured the transformation of rural life and helped preserve the cultural identity of the region.",
        },
      ],
    },

    {
      type: "text",
      id: "koggala-nowadays",
      kicker: "Present Day",
      title: "Koggala Today",
      align: "left",
      paragraphs: [
        "Today, Koggala is known as a quieter alternative to more crowded southern destinations like Unawatuna or Mirissa. It offers a slower pace, wider beaches, and a more open coastal atmosphere.",
        "Tourism exists here in a more relaxed form, with fewer crowds and more space, making it attractive for visitors who want both access to popular areas and a calmer base.",
      ],
    },

    {
      type: "text",
      id: "beaches",
      kicker: "Beaches",
      title: "Koggala Beach and Coastal Life",
      align: "left",
      content: [
        {
          type: "p",
          text: "Koggala Beach is one of the longest stretches of coastline in Sri Lanka, known for its golden sand and peaceful atmosphere. It is ideal for long walks, relaxation, and enjoying a quieter side of the south coast.",
        },
        {
          type: "p",
          text: "The water is generally clear, but some areas have strong currents and more powerful waves. While swimming is possible in certain sections, others are better suited for experienced surfers.",
        },
        {
          type: "split-paragraph",
          heading: "Nearby Beaches",
          headingLevel: "h4",
          paragraphs: [
            "Koggala is located close to several well-known beaches. Wijaya Beach in Talpe is famous for its natural rock pool and sea turtle sightings, making it a safe and scenic swimming location.",
            "Kabalana Beach in Ahangama is one of the top surf destinations in Sri Lanka, offering consistent waves and attracting surfers from around the world.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Koggala/main/beach.webp`,
          imageAlt: "Koggala Beach",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "surfing",
      kicker: "Surfing",
      title: "Surfing in the Koggala Area",
      align: "left",
      content: [
        {
          type: "p",
          text: "Surfing around Koggala offers options for all skill levels. The main local break, known as Koggala Lefts, is a reef break better suited for intermediate and advanced surfers due to its stronger currents and reef conditions.",
        },
        {
          type: "p",
          text: "A key advantage of Koggala is that it is often less crowded than nearby surf towns, making it ideal for those seeking a quieter experience in the water.",
        },
      ],
    },

{
  type: "horizontal-scroll",
  kicker: "Surf Spots Nearby",
  title: "Best Surf Spots Near Koggala",
  text: "The Koggala area is ideally positioned near some of the most famous surf breaks on Sri Lanka’s south coast, with options for beginners, intermediate surfers, and more advanced riders all within a short tuk-tuk ride.",
  align: "center",
  collapsible: false,
  defaultOpen: true,
  titleStyle: "",
  items: [
    {
      title: "Weligama Beach",
      description:
        "Widely regarded as the best surf spot in the area for beginners and first-time lessons. The bay is protected, creating small, consistent, and manageable waves that are ideal for building confidence.",
      image: `${import.meta.env.BASE_URL}Destinations/Koggala/surf/weligama.webp`,
      imageAlt: "Surfing at Weligama Beach",
      info: {
        label: "Wave Type:",
        text: "Beach Break",
      },
      tags: ["Beginner", "Surf Lessons", "Protected Bay"],
    },
    {
      title: 'Kabalana ("The Rock")',
      description:
        "Known for its iconic A-frame wave, Kabalana is often considered one of the best surf spots in Sri Lanka. It can handle a larger swell and is especially popular with more experienced shortboarders.",
      image: `${import.meta.env.BASE_URL}Destinations/Koggala/surf/kabalana.webp`,
      imageAlt: "Surfing at Kabalana",
      info: {
        label: "Wave Type:",
        text: "A-Frame Reef Break",
      },
      tags: ["Intermediate", "Advanced", "Larger Swell"],
    },
    {
      title: 'Midigama ("Lazy Left" & "Lazy Right")',
      description:
        "Midigama offers mellow reef and point breaks that are especially good for intermediate surfers. Lazy Left is known for its long, smooth left-hand ride over a deeper reef, while Lazy Right provides a similarly manageable right-hand break nearby.",
      image: `${import.meta.env.BASE_URL}Destinations/Koggala/surf/midigama.webp`,
      imageAlt: "Surfing at Midigama",
      info: {
        label: "Wave Type:",
        text: "Reef / Point Break",
      },
      tags: ["Intermediate", "Long Rides", "Practice Turns"],
    },
    {
      title: "Dalawella Beach",
      description:
        "A short, sharper left-hand reef break that works best on a pushing high tide. It is also a picturesque beach area with a safe swimming lagoon, making it a good option for combining surfing with a more relaxed coastal stop.",
      image: `${import.meta.env.BASE_URL}Destinations/Koggala/surf/dalawella.webp`,
      imageAlt: "Dalawella Beach surf area",
      info: {
        label: "Wave Type:",
        text: "Left-Hand Reef Break",
      },
      tags: ["Intermediate", "High Tide", "Swimming Lagoon"],
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
          title: "History & Culture",
          description:
            "Explore temples, heritage, and the literary legacy of Koggala.",
          image: `${import.meta.env.BASE_URL}Destinations/Koggala/poi/history-culture.webp`,
          to: "/places/koggala/history-and-culture",
        },
        {
          title: "Koggala Lake Boat Trip",
          description:
            "Discover mangroves, islands, and lagoon life on a scenic boat tour.",
          image: `${import.meta.env.BASE_URL}Destinations/Koggala/poi/lake.webp`,
          to: "/places/koggala/koggala-lake-boat-trip",
        },
        {
          title: "Cultural Attractions",
          description:
            "Visit important temples and cultural sites in the region.",
          image: `${import.meta.env.BASE_URL}Destinations/Koggala/poi/cultural.webp`,
          to: "/places/koggala/cultural-attractions",
        },
        {
          title: "Sea Turtle Hatchery",
          description:
            "Learn about conservation efforts and see rescued sea turtles.",
          image: `${import.meta.env.BASE_URL}Destinations/Koggala/poi/turtles.webp`,
          to: "/places/koggala/turtle-hatchery",
        },
        {
          title: "Diving and Snorkeling",
          description:
            "Explore marine life and underwater environments along the coast.",
          image: `${import.meta.env.BASE_URL}Destinations/Koggala/poi/diving.webp`,
          to: "/places/koggala/diving-and-snorkeling",
        },
      ],
    },
  ],
};

export default KoggalaArticle;