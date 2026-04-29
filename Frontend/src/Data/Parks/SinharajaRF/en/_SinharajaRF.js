const SinharajaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Sinharaja Rainforest" },
  ],

  hero: {
    kicker: "Nature & Conservation",
    title: "Sinharaja Rainforest",
    subtitle:
      "Sri Lanka’s last major tropical rainforest and a globally recognized biodiversity hotspot.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Sinharaja/sinharaja1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Living Ecosystem of Global Importance",
    paragraphs: [
      "Sinharaja Rainforest, meaning “Lion Kingdom,” is the last viable area of primary tropical rainforest in Sri Lanka and one of the most important biodiversity hotspots in the world. Located in the island’s wet zone, it remains largely untouched due to its dense and rugged terrain.",
      "Recognized internationally for its ecological value, Sinharaja is both a UNESCO Biosphere Reserve and a World Heritage Site, attracting researchers, nature enthusiasts, and birdwatchers from around the world.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history",
      kicker: "Background",
      title: "History and Protection",
      align: "left",
      paragraphs: [
        "Sinharaja was known to ancient Sri Lankan civilizations but remained largely undisturbed for centuries due to its impenetrable terrain. During the British colonial period, limited selective logging took place, but large-scale exploitation was avoided.",
        "In 1875, the forest was officially declared a Reserved Forest, marking the beginning of formal protection. However, in the 1960s, plans for commercial timber extraction threatened the forest’s survival until conservation efforts successfully halted logging by 1977.",
        "Its ecological importance was later recognized globally, with designation as a UNESCO Biosphere Reserve in 1978 and a World Heritage Site in 1988, ensuring stronger protection for its unique ecosystems.",
      ],
    },

    {
      type: "text",
      id: "biodiversity",
      kicker: "Nature",
      title: "Biodiversity and Ecology",
      align: "left",
      paragraphs: [
        "Sinharaja is one of the most biologically rich areas in Sri Lanka, with exceptionally high levels of endemism. A majority of its tree species are found nowhere else, and the forest supports a large proportion of the country’s endemic mammals, butterflies, and nearly all endemic rainforest bird species.",
        "The dense canopy and layered vegetation create a complex ecosystem that continues to be a valuable site for scientific research, with new species still being discovered.",
        "This rich biodiversity, combined with its relatively undisturbed condition, makes Sinharaja a vital natural laboratory for studying tropical ecosystems and biological evolution.",
      ],
    },

    {
      type: "text",
      id: "conservation",
      kicker: "Protection",
      title: "Conservation Challenges",
      align: "left",
      paragraphs: [
        "Despite its protected status as a National Heritage Wilderness Area, Sinharaja faces ongoing conservation challenges. Encroachment from agriculture, road construction, and human settlements continues to threaten the forest’s boundaries and fragment habitats.",
        "Illegal activities such as logging, poaching, and the collection of rare species also pose risks to its delicate ecosystem. These pressures are compounded by increasing tourism, which must be carefully managed to avoid environmental degradation.",
        "Particularly vulnerable is the forest’s small population of Sri Lankan elephants, which has become isolated due to the loss of migratory corridors. Conservation efforts now focus on maintaining buffer zones and engaging local communities in sustainable protection initiatives.",
      ],
    },

    {
      type: "text",
      id: "visiting",
      kicker: "Travel Guide",
      title: "Visitor Information",
      align: "left",
      content: [
        {
          type: "p",
          text: "Sinharaja Forest Reserve can be accessed through several entrances, with Kudawa (near Ratnapura) and Pitadeniya (near Deniyaya) being the most commonly used. Other entry points such as Lankagama and Morningside offer more remote and less crowded access.",
        },
        {
          type: "p",
          text: "A licensed local guide is mandatory for entry, ensuring both visitor safety and protection of the forest. Entrance fees typically include the guide service, and payments are usually made in Sri Lankan Rupees at the gate.",
        },
        {
          type: "p",
          text: "The best time to visit is during the drier periods from January to March and August to September, when trails are easier to navigate. However, as a rainforest, rainfall can occur at any time.",
        },
        {
          type: "p",
          text: "Visitors should prepare for wet and humid conditions by wearing proper hiking footwear, long clothing for protection against insects and leeches, and carrying water and essentials.",
        },
        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.3985024038792515,80.46684612630152",
        },
      ],
    },
  ],
};

export default SinharajaArticle;