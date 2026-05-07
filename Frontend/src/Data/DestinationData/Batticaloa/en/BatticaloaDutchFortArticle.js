const BatticaloaDutchFortArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Batticaloa", to: "/places/batticaloa" },
    { label: "Dutch Fort of Batticaloa" },
  ],

  hero: {
    kicker: "Colonial Landmark",
    title: "Dutch Fort of Batticaloa",
    subtitle:
      "One of the east coast’s most historic monuments, shaped by Portuguese, Dutch, British, and modern Sri Lankan history.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Batticaloa/dutchfort1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Fort on the Lagoon",
    paragraphs: [
      "The Dutch Fort of Batticaloa is one of the most historic monuments on Sri Lanka’s east coast and tells the story of the island’s colonial past.",
      "Built on an islet in the Batticaloa Lagoon, the fort has passed through Portuguese, Dutch, British, and Sri Lankan control, and today remains a working government site as well as a place of historical interest.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history",
      kicker: "History",
      title: "History of the Fort",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Portuguese Origin",
        },
        {
          type: "p",
          text: "The fort was originally built by the Portuguese in 1622 on an islet in the Batticaloa Lagoon.",
        },

        {
          type: "h3",
          text: "VOC Conquest and Reconstruction",
        },
        {
          type: "p",
          text: "In 1638, the fort was captured by the Dutch East India Company, or VOC, under the command of Willem Jacobsz. Coster.",
        },
        {
          type: "p",
          text: "Initially, the fort was considered redundant and destroyed, but the Dutch soon realized its strategic importance and rebuilt it in 1665.",
        },
        {
          type: "p",
          text: "The VOC added four bastions named after Dutch cities: Galle, Amsterdam, Haarlem, and Colombo.",
        },

        {
          type: "h3",
          text: "British and Sri Lankan Control",
        },
        {
          type: "p",
          text: "In 1796, the fort fell into British hands.",
        },
        {
          type: "p",
          text: "After Sri Lanka’s independence, the fort was used for government offices, and even today it still houses several government departments.",
        },
      ],
    },

    {
      type: "text",
      id: "what-to-see",
      kicker: "What to See",
      title: "Inside the Dutch Fort",
      align: "left",

      content: [
        {
          type: "p",
          text: "Although the fort is still used by the government, it is open to visitors and offers an interesting glimpse into Batticaloa’s colonial past.",
        },

        {
          type: "split-paragraph",
          heading: "The Walls and Bastions",
          headingLevel: "h3",

          paragraphs: [
            "Visitors can walk along the old fort walls and enjoy views over Batticaloa Lagoon and the city.",
            "Several old cannons still adorn the ramparts, adding to the historic character of the site.",
            "The four bastions and other remnants of Dutch architecture remain among the main features to observe.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Batticaloa/dutchfort2.webp`,
          imageAlt: "Ramparts and walls of the Dutch Fort of Batticaloa",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Water Gate",
        },
        {
          type: "p",
          text: "One of the most notable details is the water gate bearing the VOC logo and the year 1682.",
        },
        {
          type: "p",
          text: "This feature remains a quiet reminder of the Dutch presence in Batticaloa.",
        },

        {
          type: "h3",
          text: "The Lagoon",
        },
        {
          type: "p",
          text: "The fort is strategically positioned on an island in the lagoon, with a narrow passage to the sea.",
        },
        {
          type: "p",
          text: "This location made it a highly defensible position and gave it control over movement through the lagoon and coastal approach.",
        },

        {
          type: "h3",
          text: "Museum and Colonial Remains",
        },
        {
          type: "p",
          text: "There is a small museum on the fort grounds with artifacts from the colonial era.",
        },
        {
          type: "p",
          text: "Visitors can also see old cannons, bastions, ramparts, and other remains of Dutch-period architecture.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Useful Information",
      title: "Location, Hours, and Admission",
      align: "left",

      content: [
        {
          type: "split-paragraph",
          heading: "Location",
          headingLevel: "h3",

          paragraphs: [
            "The Dutch Fort is located on Puliyanthivu Island along Fort Road in Batticaloa.",
            "It is surrounded by the Batticaloa Lagoon and sits close to the city center.",
            "From the ramparts, visitors can enjoy views toward the lagoon and nearby Kallady Bridge.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Batticaloa/dutchfort3.webp`,
          imageAlt: "Dutch Fort of Batticaloa beside the lagoon",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Opening Hours",
        },
        {
          type: "p",
          text: "General opening hours are usually between 8:00 or 8:30 AM and 5:00 PM.",
        },
        {
          type: "p",
          text: "Because part of the fort functions as an administrative building, access generally follows normal business hours.",
        },

        {
          type: "h3",
          text: "Admission Fee",
        },
        {
          type: "p",
          text: "Admission to the fort is generally free, with no entrance fee required.",
        },

        {
          type: "h3",
          text: "Duration of Visit",
        },
        {
          type: "p",
          text: "A visit usually takes 1 to 2 hours, allowing time to walk along the ramparts, view the lagoon, explore the colonial remains, and take photographs.",
        },

        {
          type: "h3",
          text: "Current Use",
        },
        {
          type: "p",
          text: "The fort is still a working government building housing local administrative offices.",
        },
        {
          type: "p",
          text: "This creates a distinctive mix of colonial history and modern local life.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-tips",
      kicker: "Visitor Tips",
      title: "Tips for Visiting",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Best Time:</strong> Visit in the early morning or late afternoon to avoid the hottest hours and catch the best light for photography.",
        },

        {
          type: "p",
          text: "<strong>Weekdays:</strong> Be aware that government officials and visitors may be present around the administrative offices on weekdays.",
        },

        {
          type: "p",
          text: "<strong>Guides:</strong> Official tours may not always be available, but local guides can sometimes explain the fort’s history for a fee.",
        },

        {
          type: "p",
          text: "<strong>Ambience:</strong> The fort is generally less crowded than more famous sites such as Galle Fort, giving it a peaceful and relaxed atmosphere.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=PP62%2BPRH%2C%20Fort%20Road%2C%20Batticaloa%2C%20Sri%20Lanka",
        },
      ],
    },
  ],
};

export default BatticaloaDutchFortArticle;