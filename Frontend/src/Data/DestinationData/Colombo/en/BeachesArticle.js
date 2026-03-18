// src/Data/DestinationData/Colombo/en/BeachesArticle.js

const BeachesArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Colombo", to: "/places/colombo" },
    { label: "Beaches" },
  ],

  hero: {
    kicker: "COASTAL COLOMBO",
    title: "Beaches in and Around Colombo",
    subtitle:
      "From lively city promenades to relaxed coastal escapes, Colombo’s shoreline offers a mix of urban energy and nearby tropical beauty.",
    backgroundImage: "/images/colombo-beaches-hero.jpg",
  },

  overview: {
    kicker: "OVERVIEW",
    title: "City Coast vs. Coastal Escapes",
    subtitle:
      "Colombo’s beaches are best understood as two different experiences.",
    paragraphs: [
      "As a major commercial port city, Colombo’s central coastline is shaped as much by urban life as it is by the ocean. Within the city itself, beaches are typically used for walking, relaxing, and watching the sunset rather than swimming.",
      "For calmer waters and classic tropical beach conditions, locals and visitors head slightly outside the city. A short drive or train ride north or south reveals cleaner sands, gentler waves, and a more relaxed atmosphere suited for swimming and beachside leisure.",
    ],
  },

  sections: [
    {
      type: "cards",
      kicker: "EXPLORE",
      title: "Beaches In & Near Colombo",
      subtitle:
        "Two of the most popular coastal spots, each offering a very different experience.",
      items: [
        {
          image: "/images/mount-lavinia-beach.jpg",
          imageAlt: "Mount Lavinia Beach",
          title: "Mount Lavinia Beach",
          description:
            "The closest true swimming beach to Colombo, Mount Lavinia is known for its wide sandy stretch, calmer waters, and laid-back atmosphere. Just a short ride from the city, it’s popular for sunbathing, swimming, and beachside dining, especially in the evenings when restaurants set up tables right on the sand.",
        },
        {
          image: "/images/galle-face-green.jpg",
          imageAlt: "Galle Face Green",
          title: "Galle Face Green",
          description:
            "A historic oceanfront promenade in the heart of Colombo, Galle Face Green is more about atmosphere than swimming. It’s a social hub where locals gather to fly kites, enjoy street food, and watch dramatic sunsets over the Indian Ocean. The energy peaks in the evening, making it one of the city’s most iconic public spaces.",
        },
      ],
    },

    {
      type: "text",
      kicker: "BEYOND THE CITY",
      title: "Better Beaches Nearby",
      subtitle:
        "Short trips unlock a more classic tropical beach experience.",
      paragraphs: [
        "Heading south from Colombo quickly transforms the coastal scenery. Areas like Dehiwala, Mount Lavinia, and further down toward Bentota and Hikkaduwa offer cleaner waters and more developed beach tourism infrastructure.",
        "These beaches are better suited for swimming and water activities, with calmer conditions depending on the season. Many also feature resorts, cafes, and water sports, making them ideal for a full day trip or overnight stay.",
        "The coastal railway line makes access easy and scenic, running right alongside the ocean for much of the journey, offering one of the most memorable train rides in Sri Lanka.",
      ],
    },

    {
      type: "split",
      kicker: "EXPERIENCE",
      title: "Sunsets by the Indian Ocean",
      subtitle:
        "Even without swimming, Colombo’s coastline delivers unforgettable evenings.",
      image: "/images/colombo-sunset-beach.jpg",
      imageAlt: "Sunset in Colombo beach",
      paragraphs: [
        "One of the highlights of Colombo’s beaches is the sunset. As the day winds down, the sky turns shades of orange and pink, reflecting across the ocean and creating a relaxed, almost cinematic atmosphere.",
        "Galle Face Green becomes especially lively at this time, with families, couples, and street vendors all gathering along the promenade. The combination of sea breeze, city lights, and local food creates a uniquely urban coastal experience.",
      ],
    },
  ],
};


export default BeachesArticle;