const SigiriyaHiriwadunnaVillageTourArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Sigiriya", to: "/places/sigiriya" },
    { label: "Hiriwadunna Village Tour" },
  ],

  hero: {
    kicker: "Village Experience",
    title: "Hiriwadunna Village Tour",
    subtitle:
      "A traditional village experience near Sigiriya with bullock cart rides, lake crossings, cooking demonstrations, and local Sri Lankan lunch.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Sigiriya/hiriwadunna-village-tour/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Traditional Village Life Near Sigiriya",
    paragraphs: [
      "The Hiriwadunna Village Tour is a popular cultural experience near Sigiriya and Habarana, offering visitors a closer look at rural life in Sri Lanka’s dry zone.",
      "A typical tour includes a bullock cart ride, a catamaran boat crossing on Hiriwadunna Lake, a cooking demonstration, and a traditional rice and curry lunch with a local family.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "village-experience",
      kicker: "Tour Experience",
      title: "The Village Experience",
      align: "left",

      content: [
        {
          type: "p",
          text: "A typical visit to Hiriwadunna lasts around 2 to 3 hours and is designed as a slow, immersive introduction to village life.",
        },

        {
          type: "p",
          text: "The experience is usually arranged by local tour operators and follows a route through paddy fields, village paths, lake scenery, and a traditional home.",
        },

        {
          type: "split-paragraph",
          heading: "Bullock Cart Ride",
          headingLevel: "h4",

          paragraphs: [
            "The tour often begins with a ride through red-earth village tracks and green paddy fields on a traditional wooden cart pulled by oxen.",
            "This slow-paced ride gives visitors a sense of older rural transport methods and the agricultural setting of the village.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Sigiriya/hiriwadunna-village-tour/bullock-cart.webp`,
          imageAlt: "Bullock cart ride through Hiriwadunna village",
          mediaPosition: "right",
        },

        {
          type: "split-paragraph",
          heading: "Hiriwadunna Lake",
          headingLevel: "h4",

          paragraphs: [
            "Visitors then usually cross Hiriwadunna Lake, or wewa, on a traditional catamaran-style dugout canoe.",
            "The reservoir is known for lotus flowers, water lilies, birdlife, and wide views across the dry-zone landscape.",
            "On clear days, Sigiriya Rock and Pidurangala can sometimes be seen in the distance.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Sigiriya/hiriwadunna-village-tour/lake-crossing.webp`,
          imageAlt: "Traditional boat ride on Hiriwadunna Lake",
          mediaPosition: "left",
        },

        {
          type: "split-paragraph",
          heading: "Traditional Village Lunch",
          headingLevel: "h4",

          paragraphs: [
            "One of the main highlights is visiting a mud-brick village house for a cooking demonstration.",
            "Meals are usually prepared over a wood-fired hearth and served in a simple traditional style.",
            "Visitors commonly enjoy a rice and curry lunch served on lotus leaves, offering a direct experience of local food culture.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Sigiriya/hiriwadunna-village-tour/village-lunch.webp`,
          imageAlt: "Traditional Sri Lankan village lunch served on lotus leaves",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "<strong>Farming and Tree Houses:</strong> Tours may also include local vegetable gardens and chena cultivation areas, along with elevated tree houses known as <em>pela</em>, where farmers stay at night to protect crops from wild elephants.",
        },
      ],
    },

    {
      type: "text",
      id: "nature-and-wildlife",
      kicker: "Nature & Wildlife",
      title: "Birdlife, Lake Views, and Dry-Zone Wildlife",
      align: "left",

      content: [
        {
          type: "p",
          text: "Hiriwadunna is also known for its peaceful dry-zone scenery, making the village tour appealing for nature lovers as well as culture-focused travelers.",
        },

        {
          type: "p",
          text: "<strong>Birdwatching:</strong> The area is a good place to spot kingfishers, egrets, herons, and the Grey-headed Fish Eagle.",
        },

        {
          type: "p",
          text: "<strong>Occasional Wildlife:</strong> While crossing the lake, visitors may see mugger crocodiles resting near the banks, as well as monkeys and giant squirrels in the surrounding forest.",
        },

        {
          type: "p",
          text: "<strong>Landscape:</strong> The mix of reservoir, paddy fields, forest patches, and distant rock views creates one of the most scenic village settings near Sigiriya.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Practical Information",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Location:</strong> Around 2 km from Habarana and roughly 15 km from Sigiriya.",
        },

        {
          type: "p",
          text: "<strong>Best Time:</strong> Early morning from 7:00 AM to 9:00 AM is best for birdwatching and cooler weather. Around 11:00 AM is ideal if you want the tour to include lunch.",
        },

        {
          type: "p",
          text: "<strong>Duration:</strong> Most tours take around 2.5 to 3 hours.",
        },

        {
          type: "p",
          text: "<strong>Cost:</strong> Usually around USD 25–45 per person, depending on transport, group size, rides, and lunch inclusions.",
        },

        {
          type: "p",
          text: "<strong>What to Wear:</strong> Comfortable outdoor clothing, a hat, and modest dress are recommended when visiting local homes.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=8.01999221152956,80.74521090853682",
        },
      ],
    },
  ],
};

export default SigiriyaHiriwadunnaVillageTourArticle;