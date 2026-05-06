const WaterActivitiesArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Dickwella", to: "/places/dickwella" },
    { label: "Water Activities" },
  ],

  hero: {
    kicker: "Ocean Activities",
    title: "Water Activities",
    subtitle:
      "Surfing, diving, snorkeling, and coastal experiences around Dickwella and Hiriketiya.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/WaterActivities/water1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Surfing and Ocean Experiences Near Dickwella",
    paragraphs: [
      "Water activities around Dickwella are primarily centered around nearby Hiriketiya Beach, one of the most popular bays on Sri Lanka’s south coast for surfing and ocean-based activities.",
      "While Dickwella Beach itself is relatively calm and quiet, the neighboring coastline offers surf breaks, diving opportunities, snorkeling spots, and seasonal whale watching.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "surfing",
      kicker: "Surfing",
      title: "Surfing in Dickwella and Hiriketiya",
      align: "left",

      content: [
        {
          type: "p",
          text: "Surfing in the Dickwella area is mainly associated with Hiriketiya Beach, a horseshoe-shaped bay located a short walk or tuk-tuk ride from Dickwella town.",
        },

        {
          type: "p",
          text: "Hiriketiya has developed into one of Sri Lanka’s main surf destinations due to its combination of beginner-friendly waves and more advanced reef breaks.",
        },

        {
          type: "h3",
          text: "Hiriketiya Bay",
        },

        {
          type: "p",
          text: "The bay offers two main surf areas suitable for different experience levels.",
        },

        {
          type: "h4",
          text: "Beginner to Intermediate Spot (Beach Break)",
        },

        {
          type: "split-paragraph",
          heading: "",
          headingLevel: "h5",

          paragraphs: [
            "<strong>Location:</strong> The western side of the bay, closer to the sandy beach.",
            "<strong>Wave:</strong> A gentle sandy-bottom beach break with mellow waves and manageable whitewater, ideal for beginners learning how to stand up and balance.",
            "<strong>Activity:</strong> Most surf schools and board rental shops are located in this section of the bay.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/WaterActivities/water2.webp`,
          imageAlt: "Beginner surfing area at Hiriketiya Beach",
          mediaPosition: "right",
        },

        {
          type: "h4",
          text: "Intermediate to Advanced Spot (Reef Break)",
        },

        {
          type: "p",
          text: "<strong>Location:</strong> The eastern side of the bay near the headland.",
        },

        {
          type: "p",
          text: "<strong>Wave:</strong> A faster and more powerful left-hand reef break offering longer rides over shallow reef sections.",
        },

        {
          type: "p",
          text: "This section is better suited to intermediate and advanced surfers comfortable surfing over reef conditions.",
        },

        {
          type: "h3",
          text: "Surf Schools and Rentals",
        },

        {
          type: "p",
          text: "Due to the popularity of Hiriketiya, there are numerous surf schools and rental shops operating along the beach.",
        },

        {
          type: "p",
          text: "<strong>Lessons:</strong> Beginner lessons usually last between 1 and 2 hours and generally include board rental, a safety briefing, and in-water instruction.",
        },

        {
          type: "p",
          text: "<strong>Rentals:</strong> Surfboards, especially beginner-friendly soft-top longboards, are widely available for rent by the hour or day.",
        },

        {
          type: "h3",
          text: "Dickwella Beach",
        },

        {
          type: "p",
          text: "Dickwella Beach itself is quieter and typically has gentler water conditions with only small ripples.",
        },

        {
          type: "p",
          text: "Although it can be suitable for someone trying a surfboard for the very first time, most organized lessons and surf activity take place at Hiriketiya.",
        },
      ],
    },

    {
      type: "text",
      id: "surf-season",
      kicker: "Best Season",
      title: "Best Time to Surf",
      align: "left",

      content: [
        {
          type: "p",
          text: "The main surfing season along the Dickwella and Hiriketiya coastline follows the dry season on Sri Lanka’s south coast.",
        },

        {
          type: "h3",
          text: "Peak Surf Season",
        },

        {
          type: "p",
          text: "<strong>Season:</strong> November to April.",
        },

        {
          type: "p",
          text: "During this period, the weather is generally sunny and the waves in Hiriketiya Bay are usually small to medium-sized and consistent, making conditions ideal for beginners and intermediate surfers.",
        },

        {
          type: "h3",
          text: "Off-Season",
        },

        {
          type: "p",
          text: "<strong>Season:</strong> May to October.",
        },

        {
          type: "p",
          text: "The southwest monsoon brings stronger winds and choppier ocean conditions, which are generally less suitable for beginners, although surfable days can still occur.",
        },
      ],
    },

    {
      type: "text",
      id: "diving-snorkeling",
      kicker: "Diving & Snorkeling",
      title: "Diving and Snorkeling",
      align: "left",

      content: [
        {
          type: "split-paragraph",
          heading: "",
          headingLevel: "h4",

          paragraphs: [
            "Dickwella and the nearby coastline also offer opportunities for diving and snorkeling, especially during the calmer months of the dry season.",
            "Hiriketiya Beach has become a center for water activities with diving schools, snorkeling tours, and surf operations based around the bay.",
            "Calm conditions and relatively clear water during peak season make the area suitable for recreational diving and casual snorkeling.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/WaterActivities/water3.webp`,
          imageAlt: "Snorkeling and ocean activities near Hiriketiya",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Nearby Spots for Water Activities",
        },

        {
          type: "p",
          text: "<strong>Hiriketiya Beach (“Hiri”):</strong> The main nearby hub for surfing, snorkeling, diving centers, cafés, and beach activity.",
        },

        {
          type: "p",
          text: "<strong>Polhena Beach:</strong> Located near Matara west of Dickwella, Polhena is well known for turtle sightings and snorkeling.",
        },

        {
          type: "p",
          text: "<strong>Mirissa:</strong> Further west along the coast, Mirissa is Sri Lanka’s main whale watching destination, especially between December and March.",
        },
      ],
    },
  ],
};

export default WaterActivitiesArticle;