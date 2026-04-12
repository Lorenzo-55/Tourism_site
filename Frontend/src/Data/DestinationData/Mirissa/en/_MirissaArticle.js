const MirissaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Mirissa" },
  ],

  hero: {
    kicker: "Southern Province",
    title: "Mirissa",
    subtitle:
      "A lively beach destination on Sri Lanka’s south coast, known for golden sands, surfing, marine activities, and a relaxed seaside atmosphere.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Mirissa/mirissa-hero.jpg`,
  },

  overview: {
    kicker: "Overview",
    title: "A Popular Coastal Escape on the South Coast",
    paragraphs: [
      "Mirissa is one of the best-known beach destinations on Sri Lanka’s southern coast, combining scenic shoreline views with a lively tourism atmosphere. Its palm-lined beaches, restaurants, and easy access to water activities have made it especially popular with both local and international visitors.",
      "The area offers a mix of relaxation and activity, from beachside sunsets and swimming to surfing, snorkeling, and diving. Although it is more developed and energetic than some quieter coastal spots, Mirissa still retains much of its tropical appeal.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "beach-life",
      kicker: "Beaches",
      title: "Golden Sand, Calm Coves, and Coastal Variety",
      align: "left",
      content: [
        {
          type: "p",
          text: "Mirissa’s coastline is one of its main attractions, offering a mix of lively beachfront areas and smaller, quieter coves. The main beach is a long curved stretch of golden sand lined with palm trees, restaurants, and bars, making it ideal for relaxing, swimming, sunbathing, and watching the sunset.",
        },
        {
          type: "p",
          text: "In the evenings, the beach becomes especially vibrant, with beachside dining and a more social atmosphere. For visitors looking for something quieter, Secret Beach offers a smaller and more secluded setting, even if it is no longer especially hidden.",
        },
        {
          type: "split-paragraph",
          heading: "Nearby Turtle Beach at Polhena",
          headingLevel: "h4",
          paragraphs: [
            "A short drive from Mirissa, Polhena Beach is known for its calmer waters and for the chance to snorkel with sea turtles close to shore. A protective reef helps create gentler conditions, making it one of the most appealing nearby spots for casual marine exploration.",
            "This gives visitors in Mirissa access not only to a lively main beach but also to nearby coastal experiences that feel quieter and more nature-focused.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Mirissa/polhena-beach.jpg`,
          imageAlt: "Polhena Beach near Mirissa",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "surfing",
      kicker: "Surfing",
      title: "From Reef Breaks to Beginner-Friendly Bays",
      align: "left",
      paragraphs: [
        "Mirissa is a good base for surfing, though the experience varies depending on the exact location. The western end of Mirissa Beach has a reef break that is better suited to intermediate and advanced surfers.",
        "For beginners, nearby Weligama Bay is often the more accessible option. Located around 10 to 15 minutes away, it is widely known for its sandy bottom, gentle waves, and many surf schools offering lessons and board rentals. This makes the wider Mirissa area attractive to surfers across different skill levels.",
      ],
    },

    {
      type: "text",
      id: "marine-activities",
      kicker: "Water Activities",
      title: "Snorkeling, Diving, and Marine Encounters",
      align: "left",
      content: [
        {
          type: "p",
          text: "Mirissa is also well known for marine activities beyond surfing. Snorkeling can be done directly from Mirissa Beach, especially around rocky areas such as Parrot Rock, or through short boat trips arranged locally.",
        },
        {
          type: "p",
          text: "For more reliable turtle sightings, Polhena Beach is often the preferred nearby spot. The area around Mirissa also offers diving opportunities, with coral formations, fish life, and the possibility of encountering turtles.",
        },
        {
          type: "p",
          text: "Local dive centers can arrange excursions, making Mirissa a convenient coastal base for visitors interested in combining beach time with light marine adventure.",
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
          image: `${import.meta.env.BASE_URL}Destinations/Mirissa/beaches.jpg`,
          imageAlt: "Beaches in Mirissa",
          title: "Beaches",
          description:
            "Mirissa offers a mix of lively beachfront areas and quieter nearby coves, with palm-lined sands, sunset views, swimming spots, and easy access to the coast.",
          to: "/places/mirissa/beaches",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Mirissa/whale-watching.jpg`,
          imageAlt: "Whale watching in Mirissa",
          title: "Whale Watching",
          description:
            "Mirissa is widely associated with whale watching excursions, making marine life one of the area’s most recognized tourism draws.",
          to: "/places/mirissa/whale-watching",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Mirissa/viewpoints.jpg`,
          imageAlt: "Viewpoints and landmarks in Mirissa",
          title: "Viewpoints & Landmarks",
          description:
            "Rocky coastal viewpoints and recognizable local landmarks add scenic variety to Mirissa’s beach setting and help shape its character.",
          to: "/places/mirissa/viewpoints-and-landmarks",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Mirissa/stilt-fishermen.jpg`,
          imageAlt: "Stilt fishermen near Mirissa",
          title: "Stilt Fishermen",
          description:
            "The stilt fishermen associated with Sri Lanka’s southern coast remain one of the most iconic cultural images linked to the wider Mirissa area.",
          to: "/places/mirissa/stilt-fishermen",
        },
      ],
    },
  ],
};

export default MirissaArticle;