const NamunukulaMountainRangeArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Badulla", to: "/places/badulla" },
    { label: "Namunukula Mountain Range" },
  ],

  hero: {
    kicker: "Mountain & Hiking",
    title: "Namunukula Mountain Range",
    subtitle:
      "The highest mountain range in Uva Province, known for its nine peaks, tea estates, forests, and panoramic summit views.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Badulla/namunukula1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "The Nine Peaks of Uva",
    paragraphs: [
      "The Namunukula Mountain Range is a prominent and highly significant geographical feature located in the Uva Province of Sri Lanka, near the city of Badulla.",
      "The name “Namunukula” literally translates to “Nine Peaks” in Sinhala, referring to the distinctive serrated profile of the range when viewed from certain directions.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "key-facts",
      kicker: "Key Facts",
      title: "Key Facts and Significance",
      align: "left",

      content: [
        {
          type: "split-paragraph",
          heading: "Highest Point",
          headingLevel: "h3",

          paragraphs: [
            "The main peak of Namunukula reaches an elevation of approximately 2,036 meters, or 6,680 feet, above sea level.",
            "This makes it the highest mountain in Uva Province and one of the highest mountains in Sri Lanka.",
            "Its height and position make the range a dominant feature of the landscape around Badulla.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Badulla/namunukula2.webp`,
          imageAlt: "Namunukula Mountain Range near Badulla",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Location",
        },
        {
          type: "p",
          text: "Namunukula is located in the Badulla District.",
        },
        {
          type: "p",
          text: "Its slopes dominate the landscape around Spring Valley and Passara, areas known for their Uva tea plantations.",
        },

        {
          type: "h3",
          text: "Geographical Importance",
        },
        {
          type: "p",
          text: "The range is the most prominent mountain feature in the eastern sector of Sri Lanka’s central mountain mass.",
        },
        {
          type: "p",
          text: "It is also an important watershed and is the birthplace of several rivers, including the Kumbukkan Oya.",
        },

        {
          type: "h3",
          text: "Biodiversity",
        },
        {
          type: "p",
          text: "The Namunukula range is rich in biodiversity and includes a variety of ecosystems.",
        },
        {
          type: "p",
          text: "Hikers pass through tea estates, dense forest patches, and areas with endemic flora and fauna.",
        },
      ],
    },

    {
      type: "text",
      id: "hiking",
      kicker: "Hiking",
      title: "Hiking and Visitor Information",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Namunukula hike is a popular but challenging trekking experience.",
        },
        {
          type: "p",
          text: "The summit rewards hikers with panoramic views across the Uva Basin, including distant landmarks such as Dunhinda Falls and the Ella area.",
        },

        {
          type: "h3",
          text: "Trekking Routes",
        },
        {
          type: "p",
          text: "There are two main entry points for the hike, each offering a different level of difficulty and time commitment.",
        },
      ],
    },

    {
      type: "text",
      id: "third-mile-post-route",
      kicker: "Route",
      title: "Third Mile Post Route",
      align: "left",

      content: [
        {
          type: "split-paragraph",
          heading: "",
          headingLevel: "h4",

          paragraphs: [
            "<strong>Location:</strong> This route starts from the 3rd Milepost on the Badulla–Passara main road, also known as the A5, near Glenalpin Estate.",
            "<strong>Duration:</strong> Approximately 2 hours to reach the summit plateau.",
            "<strong>Difficulty:</strong> Steep, but it is the shortest route to the summit.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Badulla/namunukula3.webp`,
          imageAlt: "Trail route toward Namunukula summit",
          mediaPosition: "left",
        },

        {
          type: "button",
          label: "View Third Mile Post Route on Google Maps",
          href: "https://www.google.com/maps?q=V4V7%2B4RQ%2C%20Ella%20-%20Passara%20Rd%2C%20Badulla%2C%20Sri%20Lanka",
        },
      ],
    },

    {
      type: "text",
      id: "spring-valley-route",
      kicker: "Route",
      title: "Spring Valley / Memale Village Route",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Location:</strong> This longer route starts near Memale village in the scenic Spring Valley area.",
        },
        {
          type: "p",
          text: "<strong>Duration:</strong> Approximately 4 hours to reach the summit.",
        },
        {
          type: "p",
          text: "<strong>Experience:</strong> This route is favored by some hikers because it passes through beautiful tea plantations and wilder forest terrain.",
        },
      ],
    },

    {
      type: "text",
      id: "hiker-tips",
      kicker: "Tips",
      title: "Tips for Hikers",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Best Time to Visit",
        },
        {
          type: "p",
          text: "The dry season, generally from May to September, offers the clearest skies and best trekking conditions.",
        },
        {
          type: "p",
          text: "Avoid the monsoon periods from March to April and October to November, when trails can become slippery and visibility is poor.",
        },

        {
          type: "h3",
          text: "Safety",
        },
        {
          type: "p",
          text: "Start the hike early in the morning, ideally before 8:00 AM, to avoid midday heat and afternoon mist or rain.",
        },
        {
          type: "p",
          text: "Hiring a local guide is strongly recommended for safety and navigation.",
        },

        {
          type: "h3",
          text: "Essentials",
        },
        {
          type: "p",
          text: "<strong>Water:</strong> Carry at least 2 liters per person.",
        },
        {
          type: "p",
          text: "<strong>Footwear:</strong> Sturdy walking or hiking shoes are recommended.",
        },
        {
          type: "p",
          text: "<strong>Warm Clothing:</strong> Temperatures at the summit can drop significantly, especially for those planning to camp.",
        },

        {
          type: "h3",
          text: "Camping",
        },
        {
          type: "p",
          text: "The summit plateau has limited designated areas suitable for camping.",
        },
        {
          type: "p",
          text: "Camping at the summit offers a unique opportunity to watch the sunrise over the Uva landscape.",
        },
      ],
    },
  ],
};

export default NamunukulaMountainRangeArticle;