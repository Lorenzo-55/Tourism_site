const AhungallaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Ahungalla" },
  ],

  hero: {
    kicker: "Southern Coast",
    title: "Ahungalla",
    subtitle: "",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Ahungalla/AhungallaHero.jpg`,
  },

  overview: {
    kicker: "Overview",
    title: "A Quiet Coastal Escape on Sri Lanka’s Southwest Shore",
    paragraphs: [
      "Ahungalla is a small coastal town in the Galle District of Sri Lanka, known for its long sandy shoreline, peaceful atmosphere, and close connection to the natural beauty of the island’s southwest coast. Although modest in scale, it holds an important place within the region because of the way it combines beachside relaxation, ecological attractions, and access to sites of cultural significance.",
      "What makes Ahungalla distinctive is not urban energy or heavy development, but its calm character. The town has grown into a sought-after coastal retreat where visitors come for quiet beaches, luxury resorts, river safaris, turtle conservation experiences, and easy access to nearby heritage sites. It is one of those places where the appeal lies in the balance between scenery, comfort, and a slower pace of life.",
      "Today, Ahungalla stands as a destination shaped by both its natural setting and its evolution over time. It remains closely linked to the sea, the surrounding wetlands, and the traditions of nearby communities, while also serving as an elegant stop along Sri Lanka’s southern coastal route.",
    ],
  },

  sections: [
    {
      type: "text",
      title: "History and Significance",
      paragraphs: [
        "Historically, Ahungalla was a small coastal settlement whose life was rooted mainly in fishing and agriculture. For much of its earlier history, it was known more as a quiet local village than as a major destination. Its transformation came gradually, as the beauty of its coastline and its position along the southern coastal corridor made it increasingly attractive to travelers and developers.",
        "One of the most important turning points in Ahungalla’s modern identity was the construction of the Heritance Ahungalla, originally known as Hotel Triton, between 1979 and 1981. Designed by the celebrated Sri Lankan architect Geoffrey Bawa, the hotel became one of the notable architectural landmarks on the coast and a major expression of his tropical modernist style. Its presence helped place Ahungalla on the map for sophisticated travelers and gave the town a reputation tied not only to beach tourism, but also to design and high-end hospitality.",
        "Ahungalla was also deeply affected by the 2004 Indian Ocean earthquake and tsunami, which devastated much of Sri Lanka’s southern coastline. The disaster caused severe destruction and loss, and the area had to undergo extensive reconstruction in the years that followed. That event remains one of the defining moments in the town’s recent history, shaping both its physical recovery and its broader story.",
        "Beyond tourism and modern development, the wider Ahungalla area also carries cultural and spiritual importance. Nearby places such as Kothduwa Temple on the Madu Ganga reflect a deeper local heritage that connects the coast to longstanding religious traditions, sacred stories, and the daily life of surrounding communities.",
      ],
    },

    {
      type: "text",
      title: "Ahungalla Today",
      paragraphs: [
        "Today, Ahungalla is best known as a peaceful coastal resort town with a strong tourism focus and a reputation for natural beauty. Rather than the busy, crowded feel of some better-known beach destinations, it offers a more relaxed and spacious atmosphere that appeals to visitors looking for calm, scenery, and comfort.",
        "Its beachfront is one of its main attractions, with long stretches of soft golden sand backed by coconut palms and open views of the Indian Ocean. The setting feels tranquil and uncrowded, making it especially attractive for travelers who want to unwind rather than seek nightlife or heavy commercial activity. During the drier months, the sea is often gentle enough for swimming and relaxed beach time, while the sunsets add to the town’s quiet appeal.",
        "Ahungalla’s modern identity is also strengthened by its accommodation sector. Luxury properties, especially the historic Heritance Ahungalla, continue to shape the image of the town as a refined coastal retreat. These hotels and resorts attract both international and local visitors seeking all-inclusive stays, boutique experiences, and easy access to the surrounding landscape.",
        "Nature plays a major role in how Ahungalla is experienced today. Many of the area’s most popular activities are connected to nearby wetlands, mangroves, wildlife habitats, and conservation efforts. Visitors often combine beach stays with Madu River safaris, temple visits, and turtle conservation experiences, giving Ahungalla a broader appeal than simply being a seaside resort.",
        "In essence, Ahungalla has evolved from a quiet village into an important stop along Sri Lanka’s Southern Rail Line and A2 highway, known for its blend of beautiful coastline, high-end hospitality, and proximity to ecological and cultural attractions. Its appeal lies in this combination of serenity, scenery, and meaningful nearby experiences.",
      ],
    },

    {
      type: "cards",
      kicker: "Explore More",
      title: "Points of Interest",
      align: "center",
      items: [
        {
          to: "/places/ahungalla-kothduwa-temple",
          image: `${import.meta.env.BASE_URL}Destinations/Ahungalla/KothduwaTemple.jpg`,
          imageAlt: "Kothduwa Temple",
          title: "Kothduwa Temple",
          description:
            "A peaceful island temple on the Madu River lagoon, known for its spiritual atmosphere, sacred Bo tree, and links to the history of the Tooth Relic.",
        },
        {
          to: "/places/ahungalla-madu-river-safari",
          image: `${import.meta.env.BASE_URL}Destinations/Ahungalla/MaduRiver.jpg`,
          imageAlt: "Madu River Safari",
          title: "Madu River Safari",
          description:
            "A relaxing boat journey through mangrove tunnels, island communities, wildlife habitats, cinnamon stops, and wetland landscapes.",
        },
        {
          to: "/places/ahungalla-turtle-conservation",
          image: `${import.meta.env.BASE_URL}Destinations/Ahungalla/TurtleConservation.jpg`,
          imageAlt: "Kosgoda Sea Turtle Conservation Project",
          title: "Kosgoda Sea Turtle Conservation Project",
          description:
            "One of the southwest coast’s best-known conservation attractions, focused on protecting turtle eggs, hatchlings, and injured sea turtles.",
        },
        {
          to: "/places/ahungalla-beach",
          image: `${import.meta.env.BASE_URL}Destinations/Ahungalla/AhungallaBeach.jpg`,
          imageAlt: "Ahungalla Beach",
          title: "Ahungalla Beach",
          description:
            "A long stretch of golden sand and swaying palms offering a quieter coastal experience, gentle waters, and beautiful sunset views.",
        },
      ],
    },
  ],
};

export default AhungallaArticle;