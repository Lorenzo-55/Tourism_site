const WewurukannalaViharaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Dickwella", to: "/places/dickwella" },
    { label: "Wewurukannala Vihara Temple" },
  ],

  hero: {
    kicker: "Temple & Heritage",
    title: "Wewurukannala Vihara Temple",
    subtitle:
      "A unique Buddhist temple famous for Sri Lanka’s largest seated Buddha statue and its vivid depictions of Buddhist hell.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Wewurukannala/wewurukannala1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "One of Sri Lanka’s Most Unusual Temples",
    paragraphs: [
      "Wewurukannala Vihara Temple, also spelled Wewurukannala Viharaya, is one of the most prominent and distinctive Buddhist temples in Sri Lanka’s Southern Province.",
      "Located inland from Dickwella Beach in the Matara District, the temple is best known for its colossal seated Buddha statue and its highly graphic “Tunnel of Hell,” which presents Buddhist teachings on karma and morality through vivid sculptures and murals.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "giant-buddha",
      kicker: "Main Attraction",
      title: "The Giant Seated Buddha Statue",
      align: "left",

      content: [
        {
          type: "split-paragraph",
          heading: "",
          headingLevel: "h4",

          paragraphs: [
            "The centerpiece of the temple complex is a monumental seated Buddha figure that towers above the surrounding buildings.",
            "<strong>Size:</strong> Approximately 50 meters (160 feet) tall, making it the largest seated Buddha statue in Sri Lanka.",
            "<strong>Aura:</strong> The statue is visible from a considerable distance and is known for its imposing spiritual presence and serene expression.",
            "<strong>Access:</strong> Visitors can climb through the multi-story structure beneath the statue to reach viewing areas that provide close-up views of the Buddha’s face as well as panoramic views over the surrounding landscape.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Wewurukannala/wewurukannala2.webp`,
          imageAlt: "Giant seated Buddha statue at Wewurukannala Vihara Temple",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "tunnel-of-hell",
      kicker: "Most Distinctive Feature",
      title: "The “Tunnel of Hell”",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Chamber of Horrors",
        },
        {
          type: "p",
          text: "One of the most famous and unsettling parts of the temple is the so-called “Tunnel of Hell,” a chamber designed to illustrate the consequences of sinful behavior according to Buddhist teachings.",
        },

        {
          type: "h3",
          text: "Graphic Depictions",
        },
        {
          type: "p",
          text: "The hall contains life-sized, vividly painted sculptures of demons punishing sinners in various ways.",
        },
        {
          type: "p",
          text: "Scenes include people being disemboweled, sawn in half, pierced with weapons, and immersed in boiling cauldrons.",
        },

        {
          type: "h3",
          text: "Purpose",
        },
        {
          type: "p",
          text: "These depictions are intended as moral lessons about karma, ethical conduct, and the suffering believed to await those who stray from the path to enlightenment.",
        },
      ],
    },

    {
      type: "text",
      id: "historical-sections",
      kicker: "Temple Complex",
      title: "Historical and Artistic Sections",
      align: "left",

      content: [
        {
          type: "h3",
          text: "The Oldest Temple",
        },
        {
          type: "p",
          text: "The oldest section of the temple dates back to the late 18th century during the reign of King Rajadhi Rajasinghe in the Kandyan Period.",
        },
        {
          type: "p",
          text: "This area contains traditional murals and an image house used for worship and religious ceremonies.",
        },

        {
          type: "h3",
          text: "The Hall of Murals",
        },
        {
          type: "p",
          text: "The temple walls are covered with hundreds of detailed mural-style paintings presented almost like a visual comic strip.",
        },
        {
          type: "p",
          text: "These murals depict important events from the life of the Buddha as well as Jataka tales, stories of the Buddha’s previous lives.",
        },

        {
          type: "split-paragraph",
          heading: "Temple Museum",
          headingLevel: "h4",

          paragraphs: [
            "The temple complex also includes a small museum displaying historical and religious artifacts.",
            "One of its most notable objects is a large ornate chiming clock crafted by a local artisan in 1926.",
            "The clock is still operational today and rings during morning and evening service times.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Wewurukannala/wewurukannala3.webp`,
          imageAlt: "Murals and temple interiors at Wewurukannala Vihara",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Location, History, and Dress Code",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Location:</strong> Dickwella (Dikwella), Matara District, a short distance inland from Dickwella Beach.",
        },

        {
          type: "p",
          text: "<strong>History:</strong> The temple’s origins date back to the 18th century during the Kandyan Period.",
        },

        {
          type: "h3",
          text: "Dress Code",
        },

        {
          type: "p",
          text: "As with all Buddhist temples in Sri Lanka, visitors are expected to dress respectfully.",
        },

        {
          type: "p",
          text: "<strong>Cover Shoulders and Knees:</strong> Clothing should cover shoulders and extend below the knees.",
        },

        {
          type: "p",
          text: "<strong>Remove Footwear:</strong> Shoes, hats, and footwear must be removed before entering sacred areas of the temple.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=XMGX%2BMJ%20Dickwella%2C%20Sri%20Lanka",
        },
      ],
    },
  ],
};

export default WewurukannalaViharaArticle;