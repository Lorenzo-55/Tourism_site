const HambantotaMartelloTowerArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Hambantota", to: "/places/hambantota" },
    { label: "Hambantota Martello Tower" },
  ],

  hero: {
    kicker: "Colonial Landmark",
    title: "Hambantota Martello Tower",
    subtitle:
      "Sri Lanka’s only Martello Tower, a rare British coastal defence structure now home to a Fisheries Museum.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Hambantota/martello1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Sri Lanka’s Only Martello Tower",
    paragraphs: [
      "Sri Lanka is home to exactly one Martello Tower, located in the southern coastal town of Hambantota.",
      "This rare architectural relic is especially notable because very few Martello Towers were ever built in Asia, making it an unusual colonial landmark on the island’s southern coast.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history-origins",
      kicker: "History",
      title: "History and Origins",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Hambantota Martello Tower was built by the British between 1804 and 1806.",
        },

        {
          type: "p",
          text: "Although many people locally mistake it for a Dutch structure, it was actually constructed during the early years of British rule in Ceylon.",
        },

        {
          type: "h3",
          text: "Purpose",
        },

        {
          type: "p",
          text: "The tower was built to protect the strategic Hambantota port and the nearby salt pans, also known as salterns.",
        },

        {
          type: "p",
          text: "The decision to build it followed an unsuccessful attack by Kandyan insurgents in 1803, which showed that the town needed stronger defences.",
        },

        {
          type: "h3",
          text: "The Architect",
        },

        {
          type: "p",
          text: "Credit is generally given to Captain William Gosset, or possibly a Captain Goper, of the Royal Engineers.",
        },

        {
          type: "p",
          text: "The design was closely modeled after Martello Towers the British had recently built in Simon’s Town, South Africa.",
        },

        {
          type: "split-paragraph",
          heading: "Military Role",
          headingLevel: "h4",

          paragraphs: [
            "Unlike the many Martello Towers built in England, the Hambantota tower was designed to defend against land-based rebellions as well as possible sea invasions.",
            "It never saw major combat.",
            "Over time, it was used as a barracks, a land registry office, and eventually a storehouse.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hambantota/martello2.webp`,
          imageAlt: "Hambantota Martello Tower exterior",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "present-day",
      kicker: "Museum",
      title: "Present Day: The Fisheries Museum",
      align: "left",

      content: [
        {
          type: "p",
          text: "After years of neglect, during which the tower was even inhabited by local goats, it was restored in the late 1990s with help from the Norwegian Agency for Development, known as NORAD.",
        },

        {
          type: "h3",
          text: "Usage",
        },

        {
          type: "p",
          text: "Today, the tower houses a Fisheries Museum.",
        },

        {
          type: "p",
          text: "Inside, visitors can see traditional fishing gear, nets, and exhibits related to local marine life and the history of the Hambantota fishing community.",
        },

        {
          type: "split-paragraph",
          heading: "Architecture",
          headingLevel: "h4",

          paragraphs: [
            "The tower stands approximately 25 feet, or 7.6 meters, tall.",
            "Its thick walls are made from limestone and coral.",
            "It retains its distinctive 360-degree roof platform, although the original heavy cannons are no longer present.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hambantota/martello3.webp`,
          imageAlt: "Interior or upper platform of Hambantota Martello Tower",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Location, Hours, and Entry",
      align: "left",

      content: [
        {
          type: "p",
          text: "The tower is a quiet but fascinating stop for visitors interested in colonial history, coastal defence, and Hambantota’s fishing heritage.",
        },

        {
          type: "h3",
          text: "Location",
        },

        {
          type: "p",
          text: "The Martello Tower is located on Kachcheri Road in Hambantota.",
        },

        {
          type: "p",
          text: "It stands on a rocky promontory overlooking the sea, next to the historic Hambantota Lighthouse.",
        },

        {
          type: "h3",
          text: "Opening Hours",
        },

        {
          type: "p",
          text: "<strong>General Hours:</strong> Monday to Saturday, 8:30 AM to 4:00 PM.",
        },

        {
          type: "p",
          text: "Hours can sometimes be flexible, so morning visits are usually the safest option.",
        },

        {
          type: "h3",
          text: "Entry",
        },

        {
          type: "p",
          text: "Entry is often free or requires only a very small nominal fee to support the museum.",
        },

        {
          type: "h3",
          text: "Note",
        },

        {
          type: "p",
          text: "As of 2026, the tower is considered a protected archaeological monument.",
        },

        {
          type: "p",
          text: "Although it has faced maintenance issues in the past, it remains one of the best places in Hambantota for panoramic views of the Indian Ocean.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=44CG%2BRQM%2C%20Hambantota%2C%20Sri%20Lanka",
        },
      ],
    },
  ],
};

export default HambantotaMartelloTowerArticle;