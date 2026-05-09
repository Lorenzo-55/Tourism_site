const KandyExcursionsArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Kandy", to: "/places/kandy" },
    { label: "Excursions" },
  ],

  hero: {
    kicker: "Day Trips",
    title: "Excursions from Kandy",
    subtitle:
      "Mountain viewpoints, biodiversity sites, religious landmarks, and spice garden experiences within easy reach of Kandy.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kandy/excursions/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Easy Day Trips Around Kandy",
    paragraphs: [
      "Kandy is well placed for short excursions into the surrounding hills, towns, and countryside.",
      "Popular trips include the mountaintop Ambuluwawa Biodiversity Complex near Gampola and the spice gardens located on the outskirts of the city, both offering very different experiences beyond central Kandy.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "ambuluwawa-biodiversity-complex",
      kicker: "Mountain Viewpoint",
      title: "Ambuluwawa Biodiversity Complex",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Ambuluwawa Biodiversity Complex is located on Ambuluwawa Mountain near Gampola, roughly a 1 to 1.5-hour drive from Kandy.",
        },

        {
          type: "p",
          text: "Its most famous landmark is the white spiraling Ambuluwawa Tower, known for its dramatic staircase and sweeping 360-degree views over the Central Highlands.",
        },

        {
          type: "split-paragraph",
          heading: "Ambuluwawa Tower",
          headingLevel: "h3",

          paragraphs: [
            "The tower stands approximately 48 meters tall on a mountain summit about 1,087 meters above sea level.",
            "Its spiral form resembles a Buddhist stupa, but the climb becomes increasingly narrow near the top.",
            "For visitors comfortable with heights, the upper staircase offers one of the most unusual viewpoint experiences in Sri Lanka.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kandy/excursions/ambuluwawa-tower.webp`,
          imageAlt: "Ambuluwawa Tower near Gampola",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Biodiversity and Religious Harmony",
        },

        {
          type: "p",
          text: "The complex is known both as a biodiversity site and as a symbol of religious harmony.",
        },

        {
          type: "p",
          text: "<strong>Multi-Faith Centre:</strong> The mountaintop includes shrines representing Sri Lanka’s four main religions: a Buddhist temple, Hindu kovil, mosque, and Christian church.",
        },

        {
          type: "p",
          text: "<strong>Botanical Garden:</strong> The site is recognized as Sri Lanka’s fourth botanical garden and contains multiple ecological zones with diverse plants, birds, and other wildlife.",
        },

        {
          type: "p",
          text: "<strong>Views:</strong> On clear days, visitors may see Adam’s Peak, the Knuckles Mountain Range, Bible Rock, and other distant highland landmarks.",
        },

        {
          type: "h3",
          text: "Visitor Tips",
        },

        {
          type: "p",
          text: "<strong>Best Time:</strong> Early morning is recommended for clearer views and fewer crowds on the narrow staircase.",
        },

        {
          type: "p",
          text: "<strong>Dress Code:</strong> Shoulders and knees should be covered because the complex includes religious sites.",
        },

        {
          type: "p",
          text: "<strong>Access:</strong> The route from the entrance to the tower base is around 2.5 to 3 km uphill. Visitors can walk, use a tuk-tuk, or drive if the vehicle can handle the steep road.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=7.161518215069296,80.54730956620199",
        },
      ],
    },

    {
      type: "text",
      id: "spice-gardens",
      kicker: "Spice Experience",
      title: "Spice Gardens of Kandy",
      align: "left",

      content: [
        {
          type: "p",
          text: "Several commercial spice gardens are located on the outskirts of Kandy, offering short guided introductions to Sri Lanka’s spices and herbal plants.",
        },

        {
          type: "p",
          text: "These gardens are not royal or historic in the same way as Kandy’s major heritage sites, but they can be useful for visitors interested in seeing how spices are grown.",
        },

        {
          type: "split-paragraph",
          heading: "What to Expect",
          headingLevel: "h3",

          paragraphs: [
            "Guided tours usually explain how plants such as cinnamon, cardamom, pepper, cloves, and nutmeg are cultivated and used.",
            "Some gardens also include short demonstrations of herbal oils or traditional remedies.",
            "The tours are often presented as free, but they usually end with a sales pitch in the gift shop.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kandy/excursions/spice-garden.webp`,
          imageAlt: "Spice garden near Kandy",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Visitor Notes",
        },

        {
          type: "p",
          text: "<strong>Experience:</strong> Educational guided tours can be helpful for learning about Sri Lankan spices.",
        },

        {
          type: "p",
          text: "<strong>Caution:</strong> Many spice gardens are highly commercialized, so visitors should expect strong sales pressure after the tour.",
        },

        {
          type: "p",
          text: "<strong>Best For:</strong> Travellers interested in spices, herbal products, and a short stop outside the city.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=7.065333492962363,80.56035096620136",
        },
      ],
    },
  ],
};

export default KandyExcursionsArticle;