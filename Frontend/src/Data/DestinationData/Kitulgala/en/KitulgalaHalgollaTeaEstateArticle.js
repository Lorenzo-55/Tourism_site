const KitulgalaHalgollaTeaEstateArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Kitulgala", to: "/places/kitulgala" },
    { label: "Halgolla Tea Estate" },
  ],

  hero: {
    kicker: "Tea Country",
    title: "Halgolla Tea Estate / Wewalthalawa Plateau",
    subtitle:
      "A scenic highland tea estate and plateau near Yatiyanthota, known for lush tea landscapes, mountain views, and sustainable cultivation.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kitulgala/halgolla-tea-estate/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Tea Estate and Highland Plateau",
    paragraphs: [
      "The Halgolla Tea Estate and Wewalthalawa Plateau are notable destinations in Sri Lanka’s plantation sector, located near Yatiyanthota in the Kegalle District.",
      "Known for scenic tea fields, misty mountain surroundings, and high rainfall, the area combines classic tea-country beauty with an important role in sustainable tea cultivation.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "halgolla-tea-estate",
      kicker: "Plantation Landscape",
      title: "Halgolla Tea Estate",
      align: "left",

      content: [
        {
          type: "p",
          text: "Halgolla Tea Estate is located in Yatiyanthota within the Kelani Valley region of Sri Lanka.",
        },

        {
          type: "p",
          text: "The estate has a history dating back to 1898 and remains an active tea-growing area surrounded by forest patches, mountain scenery, and high rainfall landscapes.",
        },

        {
          type: "split-paragraph",
          heading: "Tea, Rainfall, and Climate",
          headingLevel: "h3",

          paragraphs: [
            "The region receives some of the highest rainfall in Sri Lanka, creating lush conditions for tea cultivation.",
            "Across the estate, the tea bushes cover the slopes and plateau like a green carpet, especially during misty or wet weather.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/halgolla-tea-estate/tea-fields.webp`,
          imageAlt: "Tea fields at Halgolla Tea Estate",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Sustainability Significance",
        },

        {
          type: "p",
          text: "Halgolla Estate has gained modern recognition for its commitment to sustainable agriculture.",
        },

        {
          type: "p",
          text: "It was certified as the world’s first tea estate to receive Regenerative Agriculture, or regenagri, certification.",
        },
      ],
    },

    {
      type: "text",
      id: "wewalthalawa-plateau",
      kicker: "Highland Viewpoint",
      title: "Wewalthalawa Plateau",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Wewalthalawa Plateau is the high-altitude centerpiece of the Halgolla Tea Estate.",
        },

        {
          type: "p",
          text: "It is a broad, relatively flat plateau located around 2,800 to 3,500 feet above sea level and surrounded by a ring of mountains.",
        },

        {
          type: "split-paragraph",
          heading: "Panoramic Tea-Country Views",
          headingLevel: "h3",

          paragraphs: [
            "The plateau offers wide views over tea plantations, mountain ridges, and misty highland scenery.",
            "Because it sits within an operational estate, the landscape feels quieter and less commercial than many better-known tea-country viewpoints.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/halgolla-tea-estate/wewalthalawa-plateau.webp`,
          imageAlt: "Wewalthalawa Plateau tea country view",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Access and Visitor Notes",
        },

        {
          type: "p",
          text: "<strong>Access Road:</strong> The road to the plateau begins near the Halgolla Tea Factory.",
        },

        {
          type: "p",
          text: "<strong>Road Conditions:</strong> The drive is scenic but challenging, with narrow, winding roads through tea fields and forest patches.",
        },

        {
          type: "p",
          text: "<strong>Permission:</strong> Prior permission is usually required because the plateau is part of an active tea estate.",
        },

        {
          type: "p",
          text: "<strong>Dripping Rock:</strong> A notable feature along the route is a vertical rock face where a small stream of water continuously drips down.",
        },

        {
          type: "p",
          text: "The Wewalthalawa Plateau is best suited for visitors interested in quiet tea-country scenery, highland views, and Sri Lanka’s plantation landscapes.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=7.0514178129137335,80.38325569503695",
        },
      ],
    },
  ],
};

export default KitulgalaHalgollaTeaEstateArticle;