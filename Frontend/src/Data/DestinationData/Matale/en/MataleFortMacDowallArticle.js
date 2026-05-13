const MataleFortMacDowallArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Matale", to: "/places/matale" },
    { label: "Fort MacDowall" },
  ],

  hero: {
    kicker: "Colonial History",
    title: "Fort MacDowall",
    subtitle:
      "An inland British colonial fort in Matale connected to the Kandyan Wars, the 1848 Matale Rebellion, and Sri Lanka’s anti-colonial history.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Matale/fort-macdowall/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Colonial Fort with a Layered History",
    paragraphs: [
      "Fort MacDowall is one of the most significant colonial-era sites in Matale and one of the few inland forts constructed by the British in Sri Lanka.",
      "Built during the early stages of the Kandyan Wars, the fort later became closely associated with the Matale Rebellion of 1848, making it an important site in the history of colonial resistance and national memory.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "historical-overview",
      kicker: "Historical Overview",
      title: "British Fortification in Matale",
      align: "left",

      content: [
        {
          type: "p",
          text: "Fort MacDowall was constructed by the British in 1803 during the early stages of the Kandyan Wars.",
        },

        {
          type: "p",
          text: "It was named after Major General Hay MacDowall, the 6th General Officer Commanding in Ceylon, who led a British expedition into the Kingdom of Kandy.",
        },

        {
          type: "split-paragraph",
          heading: "Strategic Importance",
          headingLevel: "h3",

          paragraphs: [
            "The fort served as a vital British outpost and garrison in the Central Province.",
            "Its location along the important route connecting Kandy to Trincomalee made it useful for controlling movement through the region.",
            "As an inland fort, it reflects the British military strategy of securing key routes into the Kandyan interior.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Matale/fort-macdowall/fort-remains.webp`,
          imageAlt: "Remains of Fort MacDowall in Matale",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "key-events",
      kicker: "Key Events",
      title: "Sieges, Rebellion, and Colonial Suppression",
      align: "left",

      content: [
        {
          type: "h3",
          text: "First Siege in 1803",
        },

        {
          type: "p",
          text: "Soon after its construction, Fort MacDowall came under siege by the Kandyan army.",
        },

        {
          type: "p",
          text: "A small British garrison held the fort for several days before the commander withdrew the healthy troops.",
        },

        {
          type: "p",
          text: "The sick soldiers who were left behind were later massacred, making the incident one of the darker episodes connected to the early Kandyan Wars.",
        },

        {
          type: "split-paragraph",
          heading: "The Matale Rebellion of 1848",
          headingLevel: "h3",

          paragraphs: [
            "Fort MacDowall played a central role during the Matale Rebellion of 1848, also known as the Kandy Rebellion.",
            "Sinhalese rebels led by Weera Puran Appu and Gongalegoda Banda attacked and briefly besieged the fort as part of their uprising against British rule.",
            "Although the British repulsed the attack, the fort later became associated with the court-martial and execution of captured rebels.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Matale/fort-macdowall/rebellion-memorial.webp`,
          imageAlt: "Matale Rebellion memorial near Fort MacDowall",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "Because of this connection, Fort MacDowall is remembered not only as a military site but also as a symbol of colonial oppression and anti-colonial resistance.",
        },
      ],
    },

    {
      type: "text",
      id: "current-use",
      kicker: "Present Day",
      title: "Current Use and Site Features",
      align: "left",

      content: [
        {
          type: "p",
          text: "Today, the interior area of the former fort is used as the Matale Public Cemetery, also known as Fort MacDowall Cemetery.",
        },

        {
          type: "p",
          text: "Although much of the original fort has disappeared, several remnants and later historical additions remain on and around the hill.",
        },

        {
          type: "h3",
          text: "What to See at the Site",
        },

        {
          type: "p",
          text: "<strong>The Gateway and Ramparts:</strong> The most visible remains of the original 1803 fort include the old gateway and portions of stone ramparts.",
        },

        {
          type: "p",
          text: "<strong>Matale Cemetery:</strong> The former fort interior now contains graves and monuments belonging to different nationalities and religions, including Buddhist, Christian, and Hindu memorials.",
        },

        {
          type: "p",
          text: "<strong>Matale Rebellion Memorial:</strong> A monument nearby commemorates the 1848 rebellion led by Weera Puran Appu and Gongalegoda Banda.",
        },

        {
          type: "p",
          text: "<strong>Christ Church:</strong> A neo-Gothic church consecrated in 1860 stands on the same hill, marking the area where the fort once commanded the route toward Trincomalee.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Location, Access, and Practical Details",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Location:</strong> Fort MacDowall is situated on a small hill in Matale town in Sri Lanka’s Central Province, roughly 25 km north of Kandy.",
        },

        {
          type: "p",
          text: "<strong>Entrance Fee:</strong> Usually free, as the site is now an open public area.",
        },

        {
          type: "p",
          text: "<strong>Opening Hours:</strong> Generally accessible during daylight hours. Visiting between 8:00 AM and 5:00 PM is recommended.",
        },

        {
          type: "p",
          text: "<strong>Condition:</strong> Only remnants of the original fort remain, mainly the ancient gateway and sections of the stone ramparts.",
        },

        {
          type: "p",
          text: "The site is best appreciated as a layered historical location, combining colonial military remains, cemetery grounds, religious landmarks, and memories of the 1848 rebellion.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=7.4619368622460485,80.62277233736836",
        },
      ],
    },
  ],
};

export default MataleFortMacDowallArticle;