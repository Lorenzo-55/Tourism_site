const TrincomaleeArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Trincomalee" },
  ],

  hero: {
    kicker: "Eastern Province",
    title: "Trincomalee, Uppuveli & Nilaveli",
    subtitle:
      "A historic port city and coastal region known for its natural harbor, beaches, marine life, and a mix of lively and tranquil seaside experiences.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Trincomalee/trincomalee-hero.jpg`,
  },

  overview: {
    kicker: "Overview",
    title: "A Coastal Region of History, Culture, and Beaches",
    paragraphs: [
      "Trincomalee, often called “Trinco,” is a port city on Sri Lanka’s east coast, known for its vast natural harbor and long-standing strategic importance. Alongside its historical significance, the surrounding coastline offers some of the country’s most appealing beach destinations, including Uppuveli and Nilaveli.",
      "Together, these locations form a diverse coastal region where history, culture, and marine-based tourism come together. Visitors can explore colonial landmarks and temples in Trincomalee, enjoy a lively beach atmosphere in Uppuveli, or experience a quieter and more untouched environment in Nilaveli.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history",
      kicker: "History",
      title: "A Strategic Harbor Through the Ages",
      align: "left",
      paragraphs: [
        "Trincomalee’s natural harbor, one of the largest in the world, has shaped its importance for centuries. Its strategic location attracted colonial powers, each leaving a lasting imprint on the region.",
        "The Portuguese first established control in the 16th century, constructing Fort Frederick. The Dutch later captured and rebuilt the fort in the 17th century, and in the 18th century, the British took over, using the harbor as a major naval base, including during World War II.",
        "Beyond its colonial history, Trincomalee has long been a center of religious importance, with sites such as the ancient Koneswaram Temple reflecting its role in both Hindu and Buddhist traditions.",
      ],
    },

    {
      type: "text",
      id: "present",
      kicker: "Present Day",
      title: "Tourism, Marine Life, and Coastal Attractions",
      align: "left",
      paragraphs: [
        "Today, Trincomalee is a more relaxed city that has gradually developed into a popular tourist destination. Many of the visible impacts of the civil war have faded, allowing the area to re-emerge as a place for travel and exploration.",
        "Visitors are drawn to historical landmarks such as Fort Frederick and Koneswaram Temple, as well as scenic viewpoints like Lover’s Leap. The surrounding waters are also known for whale and dolphin watching, adding to the region’s appeal.",
        "Nearby Pigeon Island National Park is one of the main natural highlights, offering clear waters and coral reefs that make it ideal for snorkeling and diving.",
      ],
    },

    {
      type: "text",
      id: "uppuveli",
      kicker: "Uppuveli",
      title: "A Lively Beachfront Near the City",
      align: "left",
      paragraphs: [
        "Uppuveli is a seaside suburb located about 6 kilometers northwest of Trincomalee. It is known for its long stretch of golden sand and calm, shallow waters, making it well suited for swimming and relaxation.",
        "Compared to other nearby beaches, Uppuveli has a more active and social atmosphere. The beachfront is lined with restaurants, guesthouses, and beach bars, creating a setting that is especially lively in the evenings.",
        "Popular spots such as Fernando’s Bar contribute to the relaxed yet vibrant character of the area, offering casual places to unwind by the sea.",
      ],
    },

    {
      type: "text",
      id: "nilaveli",
      kicker: "Nilaveli",
      title: "A Quieter Coastal Escape",
      align: "left",
      paragraphs: [
        "Located about 12 kilometers north of Trincomalee, Nilaveli offers a more tranquil alternative to Uppuveli. It is known for its wide, less crowded beaches and a slower pace of travel.",
        "The area was heavily affected by both the civil war and the 2004 tsunami, which delayed tourism development for many years. As a result, Nilaveli remained relatively untouched, preserving its natural beauty and calm atmosphere.",
        "Today, it is often chosen by visitors looking for a quieter beach experience, with fewer crowds and a stronger sense of seclusion.",
      ],
    },

    {
      type: "text",
      id: "diving",
      kicker: "Activities",
      title: "Diving and Snorkeling Along the East Coast",
      align: "left",
      content: [
        {
          type: "p",
          text: "The waters around Trincomalee and Nilaveli are well suited for diving and snorkeling, with clear visibility, warm temperatures, and a variety of underwater environments.",
        },
        {
          type: "p",
          text: "Dive sites range from coral reefs to shipwrecks, offering experiences for both beginners and more experienced divers. The nearby reefs and marine ecosystems make the region one of the most attractive diving areas on Sri Lanka’s east coast.",
        },
        {
          type: "split-paragraph",
          heading: "Marine Life and Coastal Exploration",
          headingLevel: "h4",
          paragraphs: [
            "Snorkeling is easily accessible in calm conditions, particularly around protected areas such as Pigeon Island. These locations provide opportunities to observe fish, corals, and other marine life in relatively shallow water.",
            "Combined with whale and dolphin watching opportunities offshore, the region offers a wide range of marine-focused experiences.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Trincomalee/diving.jpg`,
          imageAlt: "Diving and snorkeling in Trincomalee",
          mediaPosition: "right",
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
          image: `${import.meta.env.BASE_URL}Destinations/Trincomalee/landmarks.jpg`,
          imageAlt: "Landmarks and culture in Trincomalee",
          title: "Landmarks & Culture",
          description:
            "Historic forts, temples, and viewpoints reflect Trincomalee’s long history and cultural significance.",
          to: "/places/trincomalee/landmarks-culture",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Trincomalee/pigeon-island.jpg`,
          imageAlt: "Pigeon Island National Park",
          title: "Pigeon Island",
          description:
            "A protected marine park known for coral reefs, snorkeling, and diverse marine life just off the coast.",
          to: "/places/trincomalee/pigeon-island",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Trincomalee/hot-springs.jpg`,
          imageAlt: "Hot springs in Trincomalee",
          title: "Hot Springs",
          description:
            "Natural geothermal wells near Trincomalee, known for their warm mineral-rich waters and cultural significance.",
          to: "/places/trincomalee/hot-springs",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Trincomalee/diving.jpg`,
          imageAlt: "Diving in Trincomalee and Nilaveli",
          title: "Diving in Trincomalee and Nilaveli",
          description:
            "Clear waters and varied dive sites make the region ideal for underwater exploration at all levels.",
          to: "/places/trincomalee/diving",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Trincomalee/beaches.jpg`,
          imageAlt: "Beaches in Trincomalee region",
          title: "Beaches",
          description:
            "From lively Uppuveli to tranquil Nilaveli, the coastline offers a range of beach experiences.",
          to: "/places/trincomalee/beaches",
        },
      ],
    },
  ],
};

export default TrincomaleeArticle;