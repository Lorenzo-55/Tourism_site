const KaudullaNationalParkArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Kaudulla National Park" },
  ],

  hero: {
    kicker: "Wildlife & Elephants",
    title: "Kaudulla National Park",
    subtitle: "A key elephant habitat in Sri Lanka’s dry zone, known for seasonal gatherings around its ancient reservoir.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kaudulla/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Core Part of the Elephant Corridor",
    paragraphs: [
      "Kaudulla National Park is a major wildlife destination in Sri Lanka’s North Central Province, located near Polonnaruwa and easily accessible from Habarana. It forms part of an important network of protected areas that support elephant migration across the region.",
      "Centered around the historic Kaudulla reservoir, the park offers a mix of open grasslands, forest, and water sources that attract large herds of wildlife, particularly during the dry season.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "elephants",
      kicker: "Wildlife",
      title: "Elephant Gatherings",
      align: "left",
      content: [
        {
          type: "split-paragraph",
          heading: "Main Attraction",
          headingLevel: "h4",
          paragraphs: [
            "Kaudulla is most famous for its large gatherings of wild Asian elephants, particularly around the Kaudulla reservoir, an ancient tank originally built by King Mahasen.",
            "The park forms part of a vital elephant corridor linking Minneriya and Somawathie National Parks, allowing elephants to move freely in search of water and grazing land.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Kaudulla/elephants.webp`,
          imageAlt: "Elephants at Kaudulla reservoir",
          mediaPosition: "right",
        },

        {
          type: "h4",
          text: "Best Time to Visit",
        },
        {
          type: "p",
          text: "The peak period to observe large elephant herds is typically between <strong>August and December</strong>, with numbers often highest in <strong>September and October</strong>. During this time, elephants gather near the reservoir as water levels drop and food becomes concentrated. This season is often considered a continuation of the famous Minneriya ‘Gathering’. Elephants, however, can be seen throughout the year.",
        },
      ],
    },

    {
      type: "text",
      id: "wildlife",
      kicker: "Wildlife",
      title: "Other Animals",
      align: "left",
      content: [
        {
          type: "p",
          text: "In addition to elephants, Kaudulla supports a diverse range of wildlife across its varied habitats.",
        },

        {
          type: "h4",
          text: "Mammals",
        },
        {
          type: "p",
          text: "The park is home to species such as Sri Lankan sambar deer, axis deer (including rare sightings of an albino individual), chevrotain, wild boar, and occasionally Sri Lankan leopards and sloth bears. The elusive gray slender loris has also been reported in the area.",
        },

        {
          type: "h4",
          text: "Reptiles",
        },
        {
          type: "p",
          text: "Crocodiles are commonly sighted near the reservoir and water bodies, particularly in calmer areas where they bask or hunt.",
        },

        {
          type: "h4",
          text: "Birds",
        },
        {
          type: "p",
          text: "Kaudulla is an important bird habitat, with around <strong>160 recorded species</strong>. The mix of wetlands and forest edges makes it a rewarding destination for birdwatching.",
        },
      ],
    },

    {
      type: "text",
      id: "geography",
      kicker: "Landscape",
      title: "Geography and Environment",
      align: "left",
      content: [
        {
          type: "p",
          text: "The park is centered around the Kaudulla reservoir and features a combination of tropical dry mixed evergreen forest, open grasslands, and areas of abandoned chena cultivation. This diversity of habitats supports a wide range of wildlife and creates varied viewing conditions during safaris.",
        },
      ],
    },

    {
      type: "text",
      id: "location",
      kicker: "Access",
      title: "Location and Getting There",
      align: "left",
      content: [
        {
          type: "h4",
          text: "Location",
        },
        {
          type: "p",
          text: "Kaudulla National Park is located approximately <strong>197 km from Colombo</strong>. The nearest major city is Polonnaruwa, while the entrance is about <strong>22 km north of Habarana</strong>.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=8.13393864731485,80.87686739504458",
        },

        {
          type: "p",
          text: "Kaudulla is often recommended as an alternative to Minneriya National Park, especially during peak seasons when elephant sightings can be equally impressive with fewer crowds.",
        },
      ],
    },
  ],
};

export default KaudullaNationalParkArticle;