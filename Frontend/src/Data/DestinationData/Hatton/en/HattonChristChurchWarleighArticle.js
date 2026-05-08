const ChristChurchWarleighArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Hatton", to: "/places/hatton" },
    { label: "Christ Church Warleigh" },
  ],

  hero: {
    kicker: "Colonial Heritage",
    title: "Christ Church Warleigh",
    subtitle:
      "A historic Anglican church in Sri Lanka’s tea country, known for its colonial architecture, stained glass, and peaceful setting near Castlereagh Reservoir.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Hatton/christ-church-warleigh/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Historic Church in Hatton’s Tea Country",
    paragraphs: [
      "Christ Church Warleigh is a historically significant Anglican church located in the Dickoya area near Hatton.",
      "Set among tea estates and close to the Castlereagh Reservoir region, the church is valued for its colonial-era architecture, preserved interior details, and serene highland surroundings.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history-and-location",
      kicker: "Heritage Site",
      title: "History and Location",
      align: "left",

      content: [
        {
          type: "p",
          text: "Christ Church Warleigh is situated in Dickoya in Sri Lanka’s Central Province, near the town of Hatton.",
        },

        {
          type: "p",
          text: "It is often visited as part of a journey through the tea country, especially by travellers exploring the Castlereagh Reservoir and surrounding plantation landscapes.",
        },

        {
          type: "split-paragraph",
          heading: "Colonial Origins",
          headingLevel: "h3",

          paragraphs: [
            "The church was built in 1878 during the British colonial period.",
            "It was established by William Scott, the manager of the Governor’s Mansion, mainly for British tea planters and their families living in the Warleigh Division of the surrounding tea estates.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hatton/christ-church-warleigh/church-exterior.webp`,
          imageAlt: "Christ Church Warleigh exterior in Dickoya",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "architecture-and-features",
      kicker: "Architecture",
      title: "Architecture and Interior Features",
      align: "left",

      content: [
        {
          type: "p",
          text: "The church is built from solid granite stone in the style of an old British country church.",
        },

        {
          type: "p",
          text: "Its preserved architecture and quiet setting make it one of the most atmospheric colonial-era religious sites in the Hatton region.",
        },

        {
          type: "h3",
          text: "Notable Features",
        },

        {
          type: "p",
          text: "<strong>Granite Structure:</strong> The church building is constructed from solid granite stones, giving it a sturdy and timeless appearance.",
        },

        {
          type: "p",
          text: "<strong>Wooden Interior:</strong> The interior includes original wooden furniture, a wooden pulpit, and an ancient pipe organ.",
        },

        {
          type: "p",
          text: "<strong>Stained Glass Windows:</strong> The church is famous for its 19th-century stained glass windows imported from England, depicting scenes from the life of Jesus Christ.",
        },

        {
          type: "p",
          text: "<strong>Floral Floor Tiles:</strong> The floor is laid with imported floral tiles from England.",
        },

        {
          type: "p",
          text: "<strong>Historic Bible:</strong> One of the church’s treasured artifacts is a 140-year-old Bible presented to the church in 1879.",
        },

        {
          type: "split-paragraph",
          heading: "A Preserved Colonial Interior",
          headingLevel: "h4",

          paragraphs: [
            "Inside, the church still carries the character of the British plantation era, with timber fittings, stained glass, and period details preserved within a small and peaceful worship space.",
            "The combination of stone walls, old wooden furniture, and imported decorative elements gives the church a strong sense of history.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hatton/christ-church-warleigh/interior.webp`,
          imageAlt: "Interior of Christ Church Warleigh",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "churchyard-and-current-status",
      kicker: "Churchyard",
      title: "Cemetery and Current Status",
      align: "left",

      content: [
        {
          type: "p",
          text: "The churchyard beside Christ Church Warleigh contains the tombstones of many British tea planters and their families who lived and died in the region during the colonial era.",
        },

        {
          type: "p",
          text: "It is also believed to be the final resting place of Sir George William Robert Campbell, the first British colonial Inspector General of the Ceylon Police.",
        },

        {
          type: "h3",
          text: "An Active Heritage Church",
        },

        {
          type: "p",
          text: "Christ Church Warleigh is still active and is administered by the Church of Ceylon.",
        },

        {
          type: "p",
          text: "It continues to hold services while also remaining a notable tourist attraction due to its historical preservation and scenic location overlooking the Castlereagh Reservoir region.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=VH7W%2B74%20Dickoya%2C%20Sri%20Lanka",
        },
      ],
    },
  ],
};

export default ChristChurchWarleighArticle;