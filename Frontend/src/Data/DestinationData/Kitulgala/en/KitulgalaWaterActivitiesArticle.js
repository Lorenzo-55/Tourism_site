const KitulgalaWaterActivitiesArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Kitulgala", to: "/places/kitulgala" },
    { label: "Water Activities" },
  ],

  hero: {
    kicker: "Adventure Sports",
    title: "Water Activities",
    subtitle:
      "White-water rafting, calm river safaris, rainforest scenery, and adventure experiences on the Kelani River.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kitulgala/water-activities/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Adventure on the Kelani River",
    paragraphs: [
      "Kitulgala is Sri Lanka’s best-known destination for river-based adventure activities, centered around the scenic Kelani River.",
      "The area offers both adrenaline-filled white-water rafting through rainforest rapids and calmer flat-water experiences focused on relaxation, birdwatching, and nature exploration.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "white-water-rafting",
      kicker: "Adventure Activity",
      title: "White Water Rafting",
      align: "left",

      content: [
        {
          type: "p",
          text: "White-water rafting is the signature activity in Kitulgala and the main reason the town is widely regarded as Sri Lanka’s adventure capital.",
        },

        {
          type: "p",
          text: "The rafting takes place on the Kelani River, the same river system associated with the filming of <em>The Bridge on the River Kwai</em>.",
        },

        {
          type: "split-paragraph",
          heading: "The Rafting Experience",
          headingLevel: "h3",

          paragraphs: [
            "The main rafting stretch is generally between 5 and 6.5 kilometers long and usually takes around 1.5 to 2 hours depending on water levels.",
            "The course combines exciting rapids with calmer sections flowing through rainforest scenery and dense tropical vegetation.",
            "The activity is suitable for both beginners and more experienced rafters.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/water-activities/white-water-rafting.webp`,
          imageAlt: "White-water rafting on the Kelani River",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Rapids and Difficulty",
        },

        {
          type: "p",
          text: "<strong>Grade 2 Rapids:</strong> Moderate rough water requiring basic paddling and maneuvering.",
        },

        {
          type: "p",
          text: "<strong>Grade 3 Rapids:</strong> Stronger white water and small drops requiring more active paddling and guidance.",
        },

        {
          type: "p",
          text: "<strong>Famous Rapids:</strong> Rapids often have colorful names such as “Head Chopper,” “Virgin’s Breast,” “Butter Crunch,” and “Killer Fall.”",
        },

        {
          type: "h3",
          text: "Safety and Accessibility",
        },

        {
          type: "p",
          text: "<strong>Safety Equipment:</strong> Reputable operators provide helmets, approved life jackets, and safety briefings before the trip.",
        },

        {
          type: "p",
          text: "<strong>Guides:</strong> Rafts are led by trained professional guides experienced in white-water rescue.",
        },

        {
          type: "p",
          text: "<strong>Swimming Ability:</strong> Participants do not need to know how to swim, as life jackets are compulsory.",
        },

        {
          type: "p",
          text: "<strong>Age Limit:</strong> Most operators allow participants aged around 10 years and above.",
        },

        {
          type: "split-paragraph",
          heading: "Best Time for Rafting",
          headingLevel: "h4",

          paragraphs: [
            "<strong>May to December:</strong> Higher river levels create faster currents and more thrilling rapids.",
            "<strong>January to March or April:</strong> Lower and calmer water levels make rafting gentler and more family-friendly.",
            "During periods of extreme rainfall, rafting may temporarily stop for safety reasons.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/water-activities/kelani-river-rapids.webp`,
          imageAlt: "Rafting rapids in Kitulgala",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "flat-water-rafting",
      kicker: "Relaxed River Experience",
      title: "Flat Water Rafting & River Safari",
      align: "left",

      content: [
        {
          type: "p",
          text: "Flat-water rafting and river safaris provide a calm alternative to Kitulgala’s more intense white-water activities.",
        },

        {
          type: "p",
          text: "These activities take place on the quieter sections of the Kelani River and focus on scenery, wildlife, and relaxation.",
        },

        {
          type: "split-paragraph",
          heading: "Flat Water Rafting",
          headingLevel: "h3",

          paragraphs: [
            "Flat-water rafting uses the same inflatable rafts as white-water rafting but on calm river sections without rapids.",
            "The experience is designed for peaceful floating through rainforest surroundings and is suitable for families, children, and visitors seeking a lower-impact activity.",
            "Trip lengths vary from short 30–40 minute floats to much longer journeys that may include picnic stops.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/water-activities/flat-water-rafting.webp`,
          imageAlt: "Flat-water rafting in Kitulgala",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "River Safari and Bird Watching",
        },

        {
          type: "p",
          text: "The calm sections of the Kelani River are also ideal for nature-focused river safaris using rafts, canoes, or small boats.",
        },

        {
          type: "p",
          text: "<strong>Birdwatching:</strong> The surrounding rainforest is a biodiversity hotspot known for endemic bird species.",
        },

        {
          type: "p",
          text: "<strong>Wildlife:</strong> Visitors may spot species such as the Sri Lanka Orange-billed Babbler, Chestnut-backed Owlet, and Sri Lanka Spurfowl.",
        },

        {
          type: "p",
          text: "<strong>Photography:</strong> The slow pace allows for excellent rainforest and river photography.",
        },

        {
          type: "p",
          text: "<strong>Scenic Highlights:</strong> Some routes also pass areas connected to the filming location of <em>The Bridge on the River Kwai</em>.",
        },

        {
          type: "split-paragraph",
          heading: "A Different Side of Kitulgala",
          headingLevel: "h4",

          paragraphs: [
            "Flat-water activities reveal a quieter side of Kitulgala compared to its adrenaline-focused reputation.",
            "The combination of rainforest scenery, wildlife, and calm river sections makes these experiences especially appealing for families and nature lovers.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/water-activities/river-safari.webp`,
          imageAlt: "River safari on the Kelani River",
          mediaPosition: "left",
        },
      ],
    },
  ],
};

export default KitulgalaWaterActivitiesArticle;