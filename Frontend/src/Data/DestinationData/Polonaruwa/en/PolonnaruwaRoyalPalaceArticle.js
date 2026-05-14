const PolonnaruwaRoyalPalaceArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Polonnaruwa", to: "/places/polonnaruwa" },
    { label: "Royal Palace" },
  ],

  hero: {
    kicker: "Ancient Royal City",
    title: "Royal Palace",
    subtitle:
      "The ruined palace complex of King Parakramabahu I, once the political and ceremonial heart of Polonnaruwa’s royal citadel.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Polonnaruwa/royal-palace/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "The Citadel of Polonnaruwa",
    paragraphs: [
      "The Royal Palace of Polonnaruwa is one of the most fascinating ruins in the ancient city and an important part of the former royal citadel.",
      "Built during the reign of King Parakramabahu I in the 12th century, the palace complex reflects the scale, ambition, and architectural skill of the Sinhalese kingdom during Polonnaruwa’s golden age.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history",
      kicker: "History",
      title: "Palace of King Parakramabahu I",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Royal Palace was built in the 12th century CE during the reign of King Parakramabahu I, who ruled from 1153 to 1186.",
        },

        {
          type: "p",
          text: "Parakramabahu I transformed Polonnaruwa into a powerful center of trade, religion, administration, and culture.",
        },

        {
          type: "split-paragraph",
          heading: "Seat of Royal Power",
          headingLevel: "h3",

          paragraphs: [
            "The palace served as the king’s residence and the administrative center of government.",
            "It formed the heart of the royal citadel, where royal authority, courtly life, and state administration were concentrated.",
            "Although only ruins remain today, the scale of the foundations and walls still suggests the grandeur of the original complex.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Polonnaruwa/royal-palace/palace-ruins.webp`,
          imageAlt: "Ruins of the Royal Palace of Polonnaruwa",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "main-palace-building",
      kicker: "Architecture",
      title: "The Main Palace Building",
      align: "left",

      content: [
        {
          type: "p",
          text: "The main palace building was once a massive structure, traditionally described as having seven stories and as many as 50 rooms.",
        },

        {
          type: "p",
          text: "The upper levels were likely built largely from wood, which explains why only the brick foundations, lower walls, and structural remains survive today.",
        },

        {
          type: "split-paragraph",
          heading: "Thick Walls and Lost Upper Floors",
          headingLevel: "h3",

          paragraphs: [
            "The remaining palace walls are exceptionally thick, suggesting they were designed to support a tall multi-storey structure.",
            "Although the upper wooden floors have disappeared, the surviving brickwork gives a strong impression of the palace’s original size.",
            "The ruins still reveal the craftsmanship and engineering ability of Polonnaruwa’s ancient builders.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Polonnaruwa/royal-palace/main-building.webp`,
          imageAlt: "Thick brick walls of the Royal Palace ruins",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "audience-hall",
      kicker: "Royal Court",
      title: "Royal Audience Hall",
      align: "left",

      content: [
        {
          type: "p",
          text: "Beside the main palace ruins stands the Royal Audience Hall, one of the most visually impressive parts of the palace complex.",
        },

        {
          type: "p",
          text: "The hall is built on a raised stone platform and was likely used for royal ceremonies, official meetings, and matters of state.",
        },

        {
          type: "split-paragraph",
          heading: "Elephant Friezes",
          headingLevel: "h3",

          paragraphs: [
            "The platform is decorated with detailed stone carvings, especially the famous frieze of elephants around the base.",
            "Each elephant is carved in a different pose, creating a sense of movement and royal strength.",
            "These carvings symbolize power and remain among the finest decorative features of the palace area.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Polonnaruwa/royal-palace/audience-hall.webp`,
          imageAlt: "Royal Audience Hall with elephant carvings in Polonnaruwa",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "royal-bath",
      kicker: "Royal Bath",
      title: "Kumara Pokuna",
      align: "left",

      content: [
        {
          type: "p",
          text: "Near the Audience Hall are the remains of the royal bath, known as the Kumara Pokuna.",
        },

        {
          type: "p",
          text: "This elegant bathing pond was supplied by water channels and formed part of the refined palace environment.",
        },

        {
          type: "p",
          text: "The stone steps, basin design, and decorative details show the importance of water architecture within the royal complex.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-experience",
      kicker: "Visitor Experience",
      title: "Why Visit the Royal Palace",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Royal Palace ruins tell the story of a powerful and prosperous royal city, even though only part of the original complex survives.",
        },

        {
          type: "p",
          text: "Visitors need some imagination to picture the palace in its full height and grandeur, but the remaining walls, foundations, Audience Hall, and royal bath still make the site one of the key highlights of Polonnaruwa.",
        },
      ],
    },
  ],
};

export default PolonnaruwaRoyalPalaceArticle;