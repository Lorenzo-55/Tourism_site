const PolonnaruwaParakramaSamudraArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Polonnaruwa", to: "/places/polonnaruwa" },
    { label: "Parakrama Samudra" },
  ],

  hero: {
    kicker: "Ancient Engineering",
    title: "Parakrama Samudra",
    subtitle:
      "The vast ‘Sea of Parakrama,’ one of the greatest irrigation reservoirs of the ancient world and a symbol of Polonnaruwa’s hydraulic mastery.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Polonnaruwa/parakrama-samudra/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "The Sea of King Parakramabahu",
    paragraphs: [
      "Parakrama Samudra, meaning ‘Sea of Parakrama,’ is one of the most remarkable engineering achievements of ancient Sri Lanka.",
      "Built during the reign of King Parakramabahu I, this immense reservoir transformed Polonnaruwa into a prosperous agricultural and political center, supporting life across the dry zone through advanced irrigation and water management systems.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history-construction",
      kicker: "History",
      title: "The Vision of King Parakramabahu",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Parakrama Samudra was developed during the reign of King Parakramabahu the Great between 1153 and 1186 CE, during the golden age of Polonnaruwa.",
        },

        {
          type: "p",
          text: "Rather than constructing a completely new lake, the king’s engineers connected several smaller pre-existing reservoirs and canals into one enormous body of water.",
        },

        {
          type: "split-paragraph",
          heading: "The King’s Famous Vision",
          headingLevel: "h3",

          paragraphs: [
            "King Parakramabahu’s famous statement — <em>‘Let not even a drop of rainwater that falls on the land of this country flow into the sea unutilized’</em> — perfectly reflects the philosophy behind the reservoir.",
            "The project was intended to secure water supplies for agriculture, drinking water, and the survival of the kingdom in Sri Lanka’s dry zone.",
            "The reservoir became the lifeline of Polonnaruwa and one of the greatest hydraulic achievements in South Asian history.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Polonnaruwa/parakrama-samudra/reservoir-view.webp`,
          imageAlt: "View across the Parakrama Samudra reservoir",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "engineering",
      kicker: "Hydraulic Engineering",
      title: "Ancient Water Management",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Parakrama Samudra demonstrates the extraordinary engineering knowledge of ancient Sri Lankan builders.",
        },

        {
          type: "h3",
          text: "Main Dam and Structure",
        },

        {
          type: "p",
          text: "The main earthen bund stretches for nearly 14 kilometers and averages around 12 meters in height.",
        },

        {
          type: "p",
          text: "The system originally consisted of five interconnected reservoirs linked together with smaller dams to distribute pressure across the structure.",
        },

        {
          type: "split-paragraph",
          heading: "Canals and Sluice Gates",
          headingLevel: "h3",

          paragraphs: [
            "Water was brought into the reservoir through a sophisticated canal network connected to the Amban Ganga, a tributary of the Mahaweli River.",
            "Stone sluice gates regulated water flow, helping prevent flooding while ensuring controlled irrigation for surrounding farmland.",
            "The irrigation network was capable of supplying water to more than 18,000 acres of rice fields.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Polonnaruwa/parakrama-samudra/bund-and-water.webp`,
          imageAlt: "Bund and waters of Parakrama Samudra",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "purpose",
      kicker: "Purpose",
      title: "Supporting the Ancient Kingdom",
      align: "left",

      content: [
        {
          type: "p",
          text: "The primary purpose of the reservoir was irrigation, ensuring a stable and reliable water supply for the rice-growing economy of Polonnaruwa.",
        },

        {
          type: "p",
          text: "The system allowed the kingdom to remain productive and economically independent even during long dry periods.",
        },

        {
          type: "p",
          text: "In addition to agriculture, the reservoir also provided drinking water, fishing resources, and broader support for urban life in the capital.",
        },
      ],
    },

    {
      type: "text",
      id: "present-day",
      kicker: "Today",
      title: "A Living Part of the Landscape",
      align: "left",

      content: [
        {
          type: "p",
          text: "Although parts of the reservoir have been altered through later reconstruction projects, the Parakrama Samudra remains an active and important water source today.",
        },

        {
          type: "p",
          text: "It continues to irrigate thousands of acres of farmland and remains closely connected to the regional economy and landscape.",
        },

        {
          type: "split-paragraph",
          heading: "Scenery and Visitor Experience",
          headingLevel: "h3",

          paragraphs: [
            "Today the reservoir is also valued for its scenic beauty and peaceful atmosphere.",
            "The expansive waters are especially beautiful during sunrise and sunset, when the lake reflects the changing colors of the sky.",
            "The surrounding area is popular for cycling, birdwatching, photography, and quiet walks along the massive ancient bund.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Polonnaruwa/parakrama-samudra/sunset.webp`,
          imageAlt: "Sunset over Parakrama Samudra",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "The Parakrama Samudra remains one of the clearest living reminders of the ingenuity, ambition, and prosperity of Polonnaruwa’s golden age.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=7.942079636632017,80.99756843737184",
        },
      ],
    },
  ],
};

export default PolonnaruwaParakramaSamudraArticle;