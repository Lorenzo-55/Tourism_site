const KalutaraBodhiyaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Kalutara", to: "/places/kalutara" },
    { label: "Kalutara Bodhiya" },
  ],

  hero: {
    kicker: "Sacred Buddhist Site",
    title: "Kalutara Bodhiya",
    subtitle:
      "A sacred Bodhi tree shrine beside the Kalu Ganga, known for its historic lineage, traveler blessings, and unique hollow stupa.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kalutara/kalutara-bodhiya/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "One of Sri Lanka’s Most Revered Bodhi Shrines",
    paragraphs: [
      "Kalutara Bodhiya is among the most important Buddhist pilgrimage sites on Sri Lanka’s west coast and has been a place of devotion for generations.",
      "Situated beside the Colombo–Galle road where the Kalu Ganga meets the Indian Ocean, the site combines religious significance, riverside scenery, and a long-standing tradition of blessing travelers journeying along the southern coast.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "sacred-bodhi-tree",
      kicker: "Sacred Heritage",
      title: "The Sacred Bodhi Tree",
      align: "left",

      content: [
        {
          type: "p",
          text: "At the center of the complex stands the ancient Bodhi tree, or <em>Ficus religiosa</em>, which is deeply revered by Buddhist devotees across Sri Lanka.",
        },

        {
          type: "p",
          text: "The tree is believed to be one of the 32 saplings that originated from the Jaya Sri Maha Bodhi in Anuradhapura.",
        },

        {
          type: "split-paragraph",
          heading: "A Living Connection to Buddhist History",
          headingLevel: "h4",

          paragraphs: [
            "The Jaya Sri Maha Bodhi itself grew from a branch of the original Bodhi tree in Bodh Gaya, India, under which Lord Buddha attained Enlightenment.",
            "Because of this sacred lineage, the Kalutara Bodhiya is regarded as one of the most historically significant living Buddhist relics in the country.",
            "Devotees regularly visit the shrine to offer flowers, light oil lamps, meditate, and seek blessings.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/kalutara-bodhiya/bodhi-tree.webp`,
          imageAlt: "Sacred Bodhi tree at Kalutara Bodhiya",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "travelers-blessing",
      kicker: "Pilgrimage Tradition",
      title: "The Traveler’s Blessing",
      align: "left",

      content: [
        {
          type: "p",
          text: "Kalutara Bodhiya occupies a highly visible location beside the main Colombo–Galle highway, close to the Kalutara Bridge and the mouth of the Kalu Ganga.",
        },

        {
          type: "p",
          text: "For decades, travelers journeying along the southern coastline have stopped here to pay homage and receive blessings for a safe journey.",
        },

        {
          type: "split-paragraph",
          heading: "A Deeply Rooted Local Custom",
          headingLevel: "h4",

          paragraphs: [
            "It is common to see drivers slow down near the shrine or briefly stop to make a small donation before continuing south or north.",
            "This custom has made the temple not only a pilgrimage destination, but also a symbolic gateway to Sri Lanka’s southern coast.",
            "The riverside setting and the surrounding movement of travelers give the site a unique atmosphere that blends spirituality with everyday life.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/kalutara-bodhiya/kalutara-bridge.webp`,
          imageAlt: "Kalutara Bodhiya near the bridge and river",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "chaitya-and-terraces",
      kicker: "Temple Complex",
      title: "Kalutara Chaitya and the Temple Grounds",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Kalutara Bodhiya complex is divided into two main terraces connected by a staircase, creating a layered temple layout beside the river.",
        },

        {
          type: "p",
          text: "The lower terrace is centered around the sacred Bodhi tree, while the upper terrace is dominated by the striking white Kalutara Chaitya.",
        },

        {
          type: "split-paragraph",
          heading: "Pahala Maluwa and Uda Maluwa",
          headingLevel: "h4",

          paragraphs: [
            "<strong>Pahala Maluwa:</strong> The lower terrace where the sacred Bodhi tree stands beside the main road and receives the majority of daily offerings from devotees.",
            "<strong>Uda Maluwa:</strong> The elevated upper terrace that contains the large white Chaitya and panoramic viewpoints overlooking the Kalu Ganga and surrounding coastline.",
            "The staircase between the two levels creates a gradual transition from the busy roadside atmosphere to a quieter elevated prayer area.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/kalutara-bodhiya/upper-terrace.webp`,
          imageAlt: "Upper terrace of Kalutara Bodhiya",
          mediaPosition: "right",
        },

        {
          type: "split-paragraph",
          heading: "The Hollow Kalutara Chaitya",
          headingLevel: "h4",

          paragraphs: [
            "The Kalutara Chaitya is one of the few hollow stupas in the world.",
            "Unlike traditional solid stupas, visitors can walk inside the structure and view murals, statues, and decorative artwork within the dome.",
            "Its bright white exterior has become one of the most recognizable landmarks along Sri Lanka’s southern coastal route.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/kalutara-bodhiya/kalutara-chaitya.webp`,
          imageAlt: "Kalutara Chaitya",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Temple Etiquette and Travel Tips",
      align: "left",

      content: [
        {
          type: "p",
          text: "Kalutara Bodhiya remains an active and highly sacred place of worship, and visitors are expected to follow traditional temple etiquette.",
        },

        {
          type: "p",
          text: "<strong>Dress Code:</strong> Clothing should cover the shoulders and knees. Long trousers, skirts, dresses, or sarongs are recommended.",
        },

        {
          type: "p",
          text: "<strong>Footwear:</strong> Shoes, sandals, hats, and caps must be removed before entering the main religious areas.",
        },

        {
          type: "p",
          text: "<strong>Photography:</strong> Visitors should avoid posing with their back toward Buddha statues and should behave respectfully around worshippers.",
        },

        {
          type: "p",
          text: "<strong>Best Time to Visit:</strong> Morning hours are usually cooler and more peaceful, while weekends and religious holidays attract larger crowds of devotees.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.587166411662259,79.96016719503422",
        },
      ],
    },
  ],
};

export default KalutaraBodhiyaArticle;