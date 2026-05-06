const NineArchBridgeArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Ella", to: "/places/ella" },
    { label: "Nine Arch Bridge" },
  ],

  hero: {
    kicker: "Railway & Heritage",
    title: "Nine Arch Bridge",
    subtitle:
      "An iconic colonial-era railway bridge surrounded by tea estates, jungle, and misty highland scenery.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/NineArchBridge/ninearch1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "The Bridge in the Sky",
    paragraphs: [
      "The iconic Nine Arch Bridge is a tribute to British engineering during the colonial era and was part of the construction of the railway line that made the region more accessible to tea plantations.",
      "Also known as the Bridge in the Sky, or Ahas Namaye Palama in Sinhala, the Nine Arch Bridge is one of Sri Lanka’s most recognizable landmarks, nestled in the central highlands near Ella and Demodara.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history",
      kicker: "History",
      title: "History of the Nine Arch Bridge",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Colonial Era Construction",
        },
        {
          type: "p",
          text: "The bridge was built during the British colonial period and was commissioned around 1921, though some sources suggest construction may have finished as early as 1919.",
        },
        {
          type: "p",
          text: "It forms a spectacular viaduct on the railway line between Ella and Demodara stations.",
        },

        {
          type: "h3",
          text: "A Feat of Engineering Without Steel",
        },
        {
          type: "p",
          text: "The most remarkable historical fact is that the bridge was constructed almost entirely from bricks, stones, and cement, with no structural steel or metal.",
        },

        {
          type: "h3",
          text: "Folklore",
        },
        {
          type: "p",
          text: "A popular legend attributes this to the outbreak of World War I, though some versions mention World War II, during which the steel consignment intended for the bridge was supposedly diverted for war efforts.",
        },
        {
          type: "p",
          text: "This led local engineers and builders to complete the project using available local materials.",
        },

        {
          type: "h3",
          text: "Local Builder",
        },
        {
          type: "p",
          text: "Folklore often attributes the successful completion of the bridge to a local Ceylonese builder named P.K. Appuhami, who supposedly devised the technique to anchor the columns in the marshy gap between the hills.",
        },
        {
          type: "p",
          text: "While his story is a beloved part of local heritage, official records primarily credit British engineers such as Harold Cuthbert Marwood and chief project manager D. J. Wimalasurendra for the design and construction of the railway section.",
        },

        {
          type: "h3",
          text: "Dimensions",
        },
        {
          type: "p",
          text: "<strong>Length:</strong> Approximately 91 meters (300 feet).",
        },
        {
          type: "p",
          text: "<strong>Height:</strong> Approximately 24 meters (80 feet).",
        },
        {
          type: "p",
          text: "The bridge is known for its nine graceful arches spanning a deep gorge surrounded by jungle and tea plantations.",
        },
      ],
    },

    {
      type: "text",
      id: "present-day",
      kicker: "Present Day",
      title: "A Major Tourist Attraction",
      align: "left",

      content: [
        {
          type: "split-paragraph",
          heading: "",
          headingLevel: "h4",
          paragraphs: [
            "The Nine Arch Bridge continues its original function as a working railway bridge but has transformed into one of Sri Lanka’s most visited and photographed tourist landmarks in the hill country.",
            "<strong>Active Railway:</strong> Trains, including those on the famous scenic route between Kandy and Ella, still regularly pass over the bridge.",
            "Tourists often check the train schedule in advance to witness a locomotive crossing the historic structure, which has become a signature Sri Lankan travel experience.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/NineArchBridge/ninearch2.webp`,
          imageAlt: "Train crossing the Nine Arch Bridge near Ella",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Iconic Scenery",
        },
        {
          type: "p",
          text: "Its stunning location, surrounded by lush tea estates, dense jungle, and misty hills, makes it a must-visit spot for photographers, hikers, and travelers.",
        },

        {
          type: "h3",
          text: "New Developments",
        },
        {
          type: "p",
          text: "To further boost tourism, recent initiatives as of 2025 have proposed decorative lighting to allow visitors to appreciate the bridge’s architecture and setting during the night.",
        },
        {
          type: "p",
          text: "The bridge stands today as a testament to colonial-era ingenuity and local construction skill, perfectly blending history with the natural beauty of the Sri Lankan highlands.",
        },
      ],
    },

    {
      type: "text",
      id: "getting-there",
      kicker: "Access",
      title: "How to Reach the Nine Arch Bridge",
      align: "left",

      content: [
        {
          type: "p",
          text: "Since the Nine Arch Bridge is located right outside the small town of Ella, there are three main ways to reach it, catering to different preferences for time and effort.",
        },

        {
          type: "h3",
          text: "Walk or Hike",
        },
        {
          type: "p",
          text: "Walking is the most rewarding way to reach the bridge, as it allows you to enjoy the beautiful surroundings.",
        },

        {
          type: "h4",
          text: "Via the Railway Tracks",
        },
        {
          type: "p",
          text: "<strong>Duration:</strong> 30–45 minutes.",
        },
        {
          type: "p",
          text: "Head to Ella Railway Station. Face the tracks, turn right in the direction of Demodara, and follow the railway line.",
        },
        {
          type: "p",
          text: "This route is very direct and passes through a short, dark tunnel shortly before reaching the bridge. Use caution and be aware of trains at all times.",
        },

        {
          type: "h4",
          text: "Via the Road and Jungle Path",
        },
        {
          type: "p",
          text: "<strong>Duration:</strong> 40–60 minutes.",
        },
        {
          type: "p",
          text: "From Ella town, follow the Ella–Passara Road. Look for signs or turn left at the Sri Kanaser Temple, or near the Art Cafe Umbrella, and follow the smaller road and paths past guesthouses.",
        },
        {
          type: "p",
          text: "This route is more scenic, passing through tea plantations and forested areas, and is often less busy.",
        },

        {
          type: "h4",
          text: "Tip",
        },
        {
          type: "p",
          text: "Many travelers combine the two routes, walking one way by the scenic path and returning by the railway tracks for variety.",
        },
      ],
    },

    {
      type: "text",
      id: "transport-options",
      kicker: "Transport",
      title: "Tuk-Tuk and Train Options",
      align: "left",

      content: [
        {
          type: "split-paragraph",
          heading: "Tuk-Tuk",
          headingLevel: "h3",
          paragraphs: [
            "If you are short on time or prefer not to walk the whole distance, a tuk-tuk is the fastest option.",
            "<strong>Duration:</strong> Approximately 10–15 minutes from Ella town.",
            "<strong>The Drop-Off:</strong> The tuk-tuk will take you to a designated parking spot or drop-off area near the bridge. From there, it is usually a short 5–10 minute downhill walk along a path to reach the bridge itself.",
            "<strong>Cost:</strong> Negotiate the fare beforehand. A one-way trip from Ella should be around 300–500 LKR, though prices are subject to change.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/NineArchBridge/ninearch3.webp`,
          imageAlt: "Path leading toward Nine Arch Bridge near Ella",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "By Train",
        },
        {
          type: "p",
          text: "You can experience the bridge exactly as it was intended, from a train window.",
        },
        {
          type: "p",
          text: "<strong>How:</strong> Take the train for one stop from Ella Station to Demodara Station, or from Demodara to Ella.",
        },
        {
          type: "p",
          text: "<strong>The View:</strong> The train slows down as it crosses the Nine Arch Bridge, giving passengers a memorable view and photo opportunity.",
        },
        {
          type: "p",
          text: "<strong>Logistics:</strong> Check the train timetable at Ella station, as times are often unpredictable. After crossing, you can return by train, tuk-tuk, or on foot from Demodara.",
        },
      ],
    },

    {
      type: "text",
      id: "safety",
      kicker: "Visitor Info",
      title: "Safety Note",
      align: "left",

      content: [
        {
          type: "p",
          text: "The bridge is on an active railway line. If you choose to walk on the tracks, always stay alert, listen for the train horn, and step far away from the tracks well before an approaching train.",
        },
        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=V3G6%2BP8%20Demodara%2C%20Sri%20Lanka",
        },
      ],
    },
  ],
};

export default NineArchBridgeArticle;