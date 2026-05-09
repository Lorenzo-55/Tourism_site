const KandyReligiousCulturalArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Kandy", to: "/places/kandy" },
    { label: "Religious and Cultural Sites" },
  ],

  hero: {
    kicker: "Religious Heritage",
    title: "Religious and Cultural Sites in Kandy",
    subtitle:
      "Sacred Buddhist relics, royal traditions, and one of the world’s most famous cultural festivals in Sri Lanka’s hill capital.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kandy/religious-cultural/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "The Spiritual Heart of Kandy",
    paragraphs: [
      "Kandy is one of Sri Lanka’s most important religious and cultural centers, deeply connected to Buddhism, royal history, and national identity.",
      "The city is best known for the Temple of the Tooth and the world-famous Esala Perahera festival, both of which remain central to Sri Lankan spiritual and cultural life.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "temple-of-the-tooth",
      kicker: "Sacred Temple",
      title: "Temple of the Tooth (Sri Dalada Maligawa)",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Temple of the Tooth, officially known as Sri Dalada Maligawa, is one of the most sacred Buddhist pilgrimage sites in the world.",
        },

        {
          type: "p",
          text: "Located within the former royal palace complex of Kandy, the temple houses Sri Lanka’s most revered Buddhist relic — the Sacred Tooth Relic of the Buddha.",
        },

        {
          type: "split-paragraph",
          heading: "The Sacred Tooth Relic",
          headingLevel: "h3",

          paragraphs: [
            "According to tradition, the temple houses the upper left canine tooth of Gautama Buddha.",
            "The relic has immense spiritual and political significance in Sri Lanka, as ancient belief held that whoever possessed the relic had the right to rule the country.",
            "Because of this connection, Sinhalese kings carefully protected the relic and kept it within the kingdom’s capital.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kandy/religious-cultural/temple-of-the-tooth.webp`,
          imageAlt: "Temple of the Tooth in Kandy",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "History of the Relic",
        },

        {
          type: "p",
          text: "According to legend, the tooth relic was recovered from Buddha’s funeral pyre in India after his cremation.",
        },

        {
          type: "p",
          text: "In the 4th century AD, Prince Dantha and Princess Hemamala secretly brought the relic to Sri Lanka, hiding it within the princess’s hair.",
        },

        {
          type: "p",
          text: "As Sri Lanka’s capitals changed over time, the relic was moved repeatedly for protection until it finally arrived in Kandy in the 16th century.",
        },

        {
          type: "p",
          text: "The present temple structure mainly dates from the 18th century during the reign of King Kirthi Sri Rajasinghe, after earlier destruction during Portuguese invasions.",
        },

        {
          type: "h3",
          text: "The Relic Chamber",
        },

        {
          type: "p",
          text: "The actual tooth relic is not visible to the public.",
        },

        {
          type: "p",
          text: "It is kept inside seven nested golden caskets shaped like stupas and decorated with precious stones.",
        },

        {
          type: "p",
          text: "During prayer ceremonies, only the outer caskets are displayed to devotees and visitors.",
        },

        {
          type: "split-paragraph",
          heading: "Daily Pooja Ceremonies",
          headingLevel: "h4",

          paragraphs: [
            "Traditional Pooja ceremonies are held three times each day, usually around 5:30 AM, 9:30 AM, and 6:30 PM.",
            "During these ceremonies, devotees make offerings of lotus flowers and prayers while traditional drumming fills the temple complex.",
            "The evening ceremony is generally the most crowded and atmospheric.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kandy/religious-cultural/pooja-ceremony.webp`,
          imageAlt: "Pooja ceremony at the Temple of the Tooth",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "UNESCO and Cultural Importance",
        },

        {
          type: "p",
          text: "The presence of the Sacred Tooth Relic transformed Kandy into Sri Lanka’s religious and cultural capital.",
        },

        {
          type: "p",
          text: "The city of Kandy, including the temple complex, is recognized as a UNESCO World Heritage Site.",
        },

        {
          type: "p",
          text: "The temple was also targeted in a bombing by the LTTE in 1998 but was quickly restored due to its immense national significance.",
        },

        {
          type: "h3",
          text: "Visitor Information",
        },

        {
          type: "p",
          text: "<strong>Dress Code:</strong> Visitors must cover shoulders and knees. Shoes must be removed before entering the temple complex.",
        },

        {
          type: "p",
          text: "<strong>Best Time to Visit:</strong> Early morning is quieter, while evening Pooja ceremonies provide the most vibrant atmosphere.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=7.293843117205192,80.64133572387412",
        },
      ],
    },

    {
      type: "text",
      id: "esala-perahera",
      kicker: "Cultural Festival",
      title: "Kandy Esala Perahera Festival",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Kandy Esala Perahera is one of the oldest and most spectacular Buddhist festivals in the world.",
        },

        {
          type: "p",
          text: "Held annually in July or August during the Sinhala month of Esala, the festival honors the Sacred Tooth Relic of the Buddha.",
        },

        {
          type: "split-paragraph",
          heading: "A Festival of Tradition and Devotion",
          headingLevel: "h3",

          paragraphs: [
            "The Esala Perahera combines Buddhist devotion with centuries-old Kandyan cultural traditions.",
            "Originally linked to rituals asking the gods for rain and successful harvests, it later merged with ceremonies honoring the Sacred Tooth Relic.",
            "Today, the festival attracts thousands of pilgrims and visitors from around the world.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kandy/religious-cultural/esala-perahera.webp`,
          imageAlt: "Kandy Esala Perahera procession",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Highlights of the Procession",
        },

        {
          type: "p",
          text: "<strong>Decorated Elephants:</strong> Dozens of elephants dressed in embroidered ceremonial garments parade through the streets of Kandy.",
        },

        {
          type: "p",
          text: "<strong>The Maligawa Tusker:</strong> The lead elephant carries a replica of the golden casket containing the Sacred Tooth Relic.",
        },

        {
          type: "p",
          text: "<strong>Kandyan Dancers:</strong> Traditional dancers perform elaborate routines accompanied by drums and flutes.",
        },

        {
          type: "p",
          text: "<strong>Drummers and Musicians:</strong> Rhythmic Kandyan drumming forms the soundtrack of the procession.",
        },

        {
          type: "p",
          text: "<strong>Fire Dancers and Acrobats:</strong> Fire performers and acrobats add dramatic spectacle to the event.",
        },

        {
          type: "p",
          text: "<strong>Whip Crackers:</strong> Performers with long whips announce the beginning of the procession with loud cracking sounds.",
        },

        {
          type: "split-paragraph",
          heading: "Kumbal and Randoli Perahera",
          headingLevel: "h4",

          paragraphs: [
            "The ten-day festival gradually grows larger and more elaborate each night.",
            "The first five nights are known as the Kumbal Perahera, which is relatively smaller and centered around the temple complex.",
            "The final five nights are called the Randoli Perahera, featuring the grandest processions, the most elaborately decorated elephants, and the largest crowds.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kandy/religious-cultural/randoli-perahera.webp`,
          imageAlt: "Decorated elephants during the Esala Perahera",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "The Closing Ceremony",
        },

        {
          type: "p",
          text: "The festival concludes with the Diya Kepeema, or Water-Cutting Ceremony, held at the Mahaweli River in Getambe.",
        },

        {
          type: "p",
          text: "This ritual marks the official end of the Perahera and symbolizes purification and renewal.",
        },

        {
          type: "p",
          text: "The Kandy Esala Perahera remains one of Sri Lanka’s greatest cultural treasures and one of the most iconic festivals in South Asia.",
        },
      ],
    },
  ],
};

export default KandyReligiousCulturalArticle;