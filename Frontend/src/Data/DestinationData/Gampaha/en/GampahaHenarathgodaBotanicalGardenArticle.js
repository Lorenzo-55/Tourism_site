const HenarathgodaBotanicalGardenArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Gampaha", to: "/places/gampaha" },
    { label: "Henarathgoda Botanical Garden" },
  ],

  hero: {
    kicker: "Botanical Landmark",
    title: "Henarathgoda Botanical Garden",
    subtitle:
      "The historic botanical garden where the rubber industry of South and Southeast Asia began.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Gampaha/henarathgoda1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Historic Botanical and Economic Landmark",
    paragraphs: [
      "The Henarathgoda Botanical Garden, often called the Gampaha Botanical Garden, is one of Sri Lanka’s most historically important botanical sites.",
      "Although smaller than the Royal Botanic Gardens in Peradeniya, the garden played a major role in the development of the global rubber industry and remains an important center for botanical research, conservation, and recreation.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "historical-significance",
      kicker: "History",
      title: "Historical Significance",
      align: "left",

      content: [
        {
          type: "h3",
          text: "The Birthplace of Asian Rubber",
        },

        {
          type: "p",
          text: "The history of Henarathgoda Botanical Garden is closely connected to the global rubber industry.",
        },

        {
          type: "p",
          text: "<strong>Establishment (1876):</strong> The garden was established by the British colonial administration as a center for experimenting with exotic economic plants, especially Para Rubber (Hevea brasiliensis).",
        },

        {
          type: "p",
          text: "<strong>The First Rubber Tree:</strong> In 1876, 1,919 rubber seedlings collected from the Amazon rainforest by Sir Henry Wickham and cultivated at Kew Gardens in London were imported and planted here.",
        },

        {
          type: "split-paragraph",
          heading: "Economic Revolution",
          headingLevel: "h4",

          paragraphs: [
            "The success of the rubber experiments at Henarathgoda transformed the economy of Sri Lanka and many other British colonies in Asia.",
            "The garden became the first nursery for the development of the rubber industry in South and Southeast Asia, including regions such as Malaysia and Myanmar.",
            "This breakthrough eventually ended South America’s monopoly on global rubber production.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Gampaha/henarathgoda2.webp`,
          imageAlt: "Historic rubber trees at Henarathgoda Botanical Garden",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "<strong>National Monument:</strong> Although the original rubber tree planted in 1876 eventually collapsed during a storm in 1988, descendants from the original stock remain preserved as a National Monument.",
        },

        {
          type: "p",
          text: "<strong>Old Railway Station:</strong> The nearby Henarathgoda Old Railway Station, built in 1866, is also preserved as an archaeological site and played an important role in transporting officials and researchers involved in the early rubber experiments.",
        },
      ],
    },

    {
      type: "text",
      id: "main-attractions",
      kicker: "Collections & Attractions",
      title: "Main Attractions and Collections",
      align: "left",

      content: [
        {
          type: "p",
          text: "The garden covers approximately 43 acres and lies within a low-country tropical climate beside the Attanagalu Oya river.",
        },

        {
          type: "p",
          text: "Today, it serves both as a recreational park and as an important center for floriculture development and botanical research.",
        },

        {
          type: "h3",
          text: "Major Attractions",
        },

        {
          type: "p",
          text: "<strong>The Original Rubber Grove:</strong> The most historically important section of the garden, preserving descendants and remnants of the original rubber trees planted in the 19th century.",
        },

        {
          type: "p",
          text: "<strong>Palms Collection (Palmetum):</strong> An extensive collection of palm species gathered from around the world.",
        },

        {
          type: "p",
          text: "<strong>Orchid House:</strong> A dedicated glasshouse displaying various orchid species, including rare specimens such as the Queen of Orchids (Cattleya).",
        },

        {
          type: "split-paragraph",
          heading: "Themed Gardens and Natural Features",
          headingLevel: "h4",

          paragraphs: [
            "<strong>The Japanese Garden:</strong> A landscaped area designed in a tranquil Japanese style.",
            "<strong>Medicinal Garden:</strong> Features medicinal plant species, including several endemic to Sri Lanka.",
            "<strong>The Attanagalu Oya:</strong> The river bordering the garden provides scenic views, while newer additions include a bridge and occasional boat rides.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Gampaha/henarathgoda3.webp`,
          imageAlt: "Japanese Garden and landscaped areas at Henarathgoda",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Wildlife and Biodiversity",
        },

        {
          type: "p",
          text: "The garden’s lush environment supports a wide variety of wildlife.",
        },

        {
          type: "p",
          text: "<strong>Birdlife:</strong> More than 80 bird species have been recorded, including 10 endemic species.",
        },

        {
          type: "p",
          text: "<strong>Mammals:</strong> Around 18 mammal species inhabit the area, including the Sri Lankan flying squirrel.",
        },

        {
          type: "p",
          text: "Butterflies, dragonflies, and other small wildlife are also commonly seen throughout the garden.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Guide",
      title: "Visitor Information",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Operating Hours",
        },

        {
          type: "p",
          text: "<strong>Open Days:</strong> Open throughout the year.",
        },

        {
          type: "p",
          text: "<strong>Opening Hours:</strong> 7:30 AM to 6:00 PM.",
        },

        {
          type: "p",
          text: "<strong>Ticketing Hours:</strong> 7:30 AM to 5:00 PM.",
        },

        {
          type: "h3",
          text: "Entrance Fees",
        },

        {
          type: "p",
          text: "<strong>Foreign Adults:</strong> LKR 3540.",
        },

        {
          type: "p",
          text: "<strong>Foreign Children (Below 12 Years):</strong> LKR 1770.",
        },

        {
          type: "p",
          text: "<strong>Local Adults:</strong> LKR 200.",
        },

        {
          type: "p",
          text: "<strong>Local Children (Below 12 Years):</strong> LKR 30.",
        },

        {
          type: "p",
          text: "<strong>Note:</strong> Students may qualify for discounted rates with valid identification.",
        },

        {
          type: "split-paragraph",
          heading: "Facilities and Activities",
          headingLevel: "h4",

          paragraphs: [
            "<strong>Guided Tours:</strong> Available for visitors interested in the garden’s botanical collections and history.",
            "<strong>Boat Rides:</strong> Swan boat rides are sometimes available on the central lake for an additional fee.",
            "<strong>Children’s Park:</strong> Includes swings and slides, making the garden suitable for families.",
            "<strong>Amenities:</strong> Canteens, washrooms, and parking facilities are available within the grounds.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Gampaha/henarathgoda4.webp`,
          imageAlt: "Visitors exploring Henarathgoda Botanical Garden",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "<strong>Photography:</strong> The themed gardens, orchid collections, and greenery provide excellent photography opportunities. Professional photography may require additional permission or fees.",
        },

        {
          type: "p",
          text: "Weekdays are generally quieter and more peaceful compared to weekends, which tend to attract larger numbers of families and school groups.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=4X2P%2BRP%20Gampaha%2C%20Sri%20Lanka",
        },
      ],
    },
  ],
};

export default HenarathgodaBotanicalGardenArticle;