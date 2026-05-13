const TangalleTurtleWatchingRekawaBeachArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Tangalle", to: "/places/tangalle" },
    { label: "Turtle Watching at Rekawa Beach" },
  ],

  hero: {
    kicker: "Wildlife & Conservation",
    title: "Turtle Watching at Rekawa Beach",
    subtitle:
      "An ethical night-time turtle watching experience at one of Sri Lanka’s most important sea turtle nesting beaches.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Tangalle/turtle-watching-rekawa-beach/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Community-Based Turtle Conservation Site",
    paragraphs: [
      "Rekawa Beach, often called Turtle Beach, is one of Sri Lanka’s most important sea turtle nesting sites and a major conservation attraction near Tangalle.",
      "The beach is best known for its ethical, community-based turtle watching program, where visitors may observe mother turtles nesting at night while supporting in-situ conservation efforts.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "turtle-watching-experience",
      kicker: "Night Wildlife Experience",
      title: "Turtle Watching at Rekawa",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Rekawa Turtle Conservation Project, now often associated with the community organization Nature Friends of Rekawa, runs a nightly Turtle Watch program on the beach.",
        },

        {
          type: "p",
          text: "Visitors wait at the conservation center until beach patrols spot a nesting turtle, after which a guide leads the group quietly to the nesting site.",
        },

        {
          type: "split-paragraph",
          heading: "The Night Watch Process",
          headingLevel: "h3",

          paragraphs: [
            "The experience requires patience because turtles arrive according to natural conditions, not a schedule.",
            "Once a turtle has started laying eggs, she enters a calmer, trance-like state and visitors may be guided closer while maintaining a respectful distance.",
            "The full waiting and nesting process can take several hours, making this a slow but meaningful wildlife experience.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/turtle-watching-rekawa-beach/turtle-watch.webp`,
          imageAlt: "Turtle watching at Rekawa Beach near Tangalle",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Species Seen",
        },

        {
          type: "p",
          text: "Five of the world’s seven sea turtle species nest at Rekawa Beach.",
        },

        {
          type: "p",
          text: "<strong>Green Turtle:</strong> The most commonly seen nesting species at Rekawa.",
        },

        {
          type: "p",
          text: "<strong>Loggerhead:</strong> Occasionally nests along the beach.",
        },

        {
          type: "p",
          text: "<strong>Hawksbill:</strong> A rarer but important nesting visitor.",
        },

        {
          type: "p",
          text: "<strong>Olive Ridley:</strong> Sometimes seen during the nesting season.",
        },

        {
          type: "p",
          text: "<strong>Leatherback:</strong> Rare, but among the most remarkable species recorded at the site.",
        },
      ],
    },

    {
      type: "text",
      id: "best-time",
      kicker: "Season & Timing",
      title: "Best Time for Turtle Watching",
      align: "left",

      content: [
        {
          type: "p",
          text: "Turtle nesting at Rekawa can occur at different times of the year, but sightings are more reliable during the main nesting season.",
        },

        {
          type: "split-paragraph",
          heading: "Seasonal Chances",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Peak Season:</strong> April to July offers the highest chance of sightings, sometimes with multiple turtles nesting in a single night.",
            "<strong>Good Season:</strong> January to July generally has strong nesting activity.",
            "<strong>Low Season:</strong> October to January may still produce sightings, but usually fewer turtles appear each night.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/turtle-watching-rekawa-beach/rekawa-beach.webp`,
          imageAlt: "Rekawa Beach turtle nesting area",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "<strong>Night Watch Time:</strong> The turtle watch usually runs from around 8:30 PM to 1:00 AM.",
        },

        {
          type: "p",
          text: "<strong>Arrival Tip:</strong> Visitors should arrive by around 9:00 PM at the latest and be prepared to wait.",
        },
      ],
    },

    {
      type: "text",
      id: "ethical-conservation",
      kicker: "Responsible Tourism",
      title: "Ethical Guidelines and Conservation Focus",
      align: "left",

      content: [
        {
          type: "p",
          text: "Rekawa Turtle Watch is known for prioritizing turtle welfare over tourist convenience.",
        },

        {
          type: "p",
          text: "Unlike many commercial hatcheries, the project focuses mainly on protecting nests where the eggs were naturally laid.",
        },

        {
          type: "h3",
          text: "In-Situ Protection",
        },

        {
          type: "p",
          text: "The project’s main approach is in-situ conservation, meaning turtle nests are protected directly on the beach rather than routinely moving the eggs elsewhere.",
        },

        {
          type: "p",
          text: "This matters because the temperature of the sand influences the sex of turtle hatchlings, making the natural nesting location important for healthy population balance.",
        },

        {
          type: "p",
          text: "Eggs are usually relocated only if they are in immediate danger from tides, erosion, or human activity.",
        },

        {
          type: "split-paragraph",
          heading: "Strict Visitor Rules",
          headingLevel: "h3",

          paragraphs: [
            "<strong>No Flash Photography:</strong> Flash can disturb nesting turtles and is not allowed.",
            "<strong>No White or Yellow Light:</strong> Only red-filtered torches provided by guides should be used.",
            "<strong>Keep Quiet:</strong> Noise should be kept to a minimum throughout the experience.",
            "<strong>Do Not Touch:</strong> Visitors must not touch turtles, eggs, or hatchlings.",
            "<strong>Follow the Guide:</strong> Guides manage distance, timing, and movement to reduce stress on the animals.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/turtle-watching-rekawa-beach/conservation.webp`,
          imageAlt: "Sea turtle conservation work at Rekawa Beach",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-center",
      kicker: "Conservation Center",
      title: "Visitor Center and Hatchling Policy",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Visitor Center provides information about sea turtle species, nesting behavior, habitats, and the conservation work carried out at Rekawa.",
        },

        {
          type: "p",
          text: "Entrance fees and donations help support the community-based conservation project and night beach patrols.",
        },

        {
          type: "h3",
          text: "Hatchlings and Natural Release",
        },

        {
          type: "p",
          text: "Although the project may protect eggs that are at high risk, the focus remains on natural nesting and hatching whenever possible.",
        },

        {
          type: "p",
          text: "Visitors may be lucky enough to witness a natural hatchling release, but this should never be expected or requested.",
        },

        {
          type: "p",
          text: "Rekawa’s approach avoids encouraging unethical practices such as premature hatchling release for tourist viewing or tips.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.0457113006020275,80.85546731037401",
        },
      ],
    },
  ],
};

export default TangalleTurtleWatchingRekawaBeachArticle;