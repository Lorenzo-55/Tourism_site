const RatnapuraNationalMuseumArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Ratnapura", to: "/places/ratnapura" },
    { label: "Ratnapura National Museum" },
  ],

  hero: {
    kicker: "Museum & Heritage",
    title: "Ratnapura National Museum",
    subtitle:
      "A regional museum housed in the historic Ehelepola Walawwa, preserving the natural, cultural, and gem-rich heritage of Sabaragamuwa Province.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Ratnapura/national-museum/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Museum in the City of Gems",
    paragraphs: [
      "The Ratnapura National Museum is one of the key cultural institutions in Sri Lanka’s Sabaragamuwa Province.",
      "Located in the historic Ehelepola Walawwa, the museum presents the region’s geological wealth, prehistoric discoveries, extinct fauna, traditional crafts, gem heritage, and local cultural identity.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "historic-building",
      kicker: "Historic Mansion",
      title: "Ehelepola Walawwa",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Ratnapura National Museum is housed in the historic Ehelepola Walawwa, a mansion connected to the final period of the Kandyan Kingdom.",
        },

        {
          type: "p",
          text: "The building was once the residence of Ehelepola Maha Adikaram, a powerful courtier and the First Adigar of King Sri Vikrama Rajasinha, the last king of Kandy.",
        },

        {
          type: "split-paragraph",
          heading: "A Kandyan-Era Landmark",
          headingLevel: "h3",

          paragraphs: [
            "The mansion itself is an important architectural and historical monument.",
            "Its connection to Ehelepola Maha Adikaram gives the museum added significance beyond its exhibits.",
            "The Department of National Museums acquired the building, and the museum officially opened on May 13, 1988.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Ratnapura/national-museum/ehelepola-walawwa.webp`,
          imageAlt: "Ehelepola Walawwa housing the Ratnapura National Museum",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "natural-heritage",
      kicker: "Natural History",
      title: "Paleontology and Natural Heritage",
      align: "left",

      content: [
        {
          type: "p",
          text: "Ratnapura’s gem-bearing alluvial deposits have also produced important prehistoric fossils, making the region significant for natural history as well as gemstones.",
        },

        {
          type: "p",
          text: "The museum displays fossilized remains, models, and interpretive exhibits connected to extinct animals found in the famous Ratnapura beds.",
        },

        {
          type: "split-paragraph",
          heading: "Extinct Fauna of the Ratnapura Beds",
          headingLevel: "h3",

          paragraphs: [
            "The exhibits include remains and reconstructions of prehistoric animals such as ancient elephants, rhinoceros, and hippopotamus-like species.",
            "These discoveries show that the Sabaragamuwa region once supported a very different prehistoric environment.",
            "The museum grounds also include a Palaeobiodiversity Park with life-sized sculptures of extinct animals.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Ratnapura/national-museum/palaeobiodiversity-park.webp`,
          imageAlt: "Palaeobiodiversity Park at Ratnapura National Museum",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "The natural heritage displays also cover local flora, fauna, minerals, and precious stones connected to Ratnapura’s identity as the City of Gems.",
        },
      ],
    },

    {
      type: "text",
      id: "prehistory-archaeology",
      kicker: "Prehistory",
      title: "Pre-History and Archaeology",
      align: "left",

      content: [
        {
          type: "p",
          text: "The museum includes prehistoric stone tools and artifacts that provide evidence of early human settlement in the Sabaragamuwa region.",
        },

        {
          type: "p",
          text: "These exhibits are especially connected to the wider archaeological story of Balangoda Man, one of Sri Lanka’s most important prehistoric human cultures.",
        },

        {
          type: "p",
          text: "Together with the fossil displays, the archaeological collections help explain Ratnapura’s importance as both a geological and human-history landscape.",
        },
      ],
    },

    {
      type: "text",
      id: "cultural-heritage",
      kicker: "Regional Culture",
      title: "Sabaragamuwa Cultural Heritage",
      align: "left",

      content: [
        {
          type: "p",
          text: "The museum also preserves and presents the rich cultural traditions of Sabaragamuwa Province.",
        },

        {
          type: "split-paragraph",
          heading: "Traditional Life and Craft",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Gem Mining:</strong> Models and displays explain traditional gem mining methods associated with Ratnapura.",
            "<strong>Costumes and Jewelry:</strong> Exhibits include Kandyan and regional ornamentation, clothing, and decorative traditions.",
            "<strong>Crafts and Industries:</strong> Local crafts and traditional occupations are represented through objects and interpretive displays.",
            "<strong>Sabaragamuwa Dance and Rituals:</strong> The museum highlights regional performance traditions and ritual culture.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Ratnapura/national-museum/cultural-exhibits.webp`,
          imageAlt: "Cultural exhibits inside Ratnapura National Museum",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Weapons and Historical Objects",
        },

        {
          type: "p",
          text: "The museum includes weapons and historical artifacts such as Sinhala swords, old firearms, and military objects.",
        },

        {
          type: "p",
          text: "One sword is traditionally associated with Ehelepola Maha Adikaram, while other displays include weapons from later historical periods.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-experience",
      kicker: "Visitor Experience",
      title: "Why Visit the Museum",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Ratnapura National Museum offers a compact but wide-ranging introduction to the region’s identity.",
        },

        {
          type: "p",
          text: "It connects Ratnapura’s gemstone fame with much deeper stories of prehistoric life, ancient human settlement, Kandyan-era politics, and Sabaragamuwa’s local traditions.",
        },

        {
          type: "p",
          text: "For visitors interested in gems, history, archaeology, or regional culture, the museum is one of the best starting points for understanding Ratnapura beyond its markets and mines.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.6844842200856185,80.39954343736349",
        },
      ],
    },
  ],
};

export default RatnapuraNationalMuseumArticle;