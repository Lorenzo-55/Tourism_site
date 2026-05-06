const DhowaRockTempleArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Ella", to: "/places/ella" },
    { label: "Dhowa Rock Temple" },
  ],

  hero: {
    kicker: "Temple & Heritage",
    title: "Dhowa Rock Temple",
    subtitle:
      "An ancient Buddhist cave temple famous for its unfinished rock-carved Buddha statue.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/DhowaRockTemple/dhowa1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Dhowa Rock Temple",
    paragraphs: [
      "Dhowa Rock Temple, also known as Dowa Raja Maha Viharaya, is a significant ancient Buddhist cave temple located a few kilometers from Bandarawela town on the Badulla road in Sri Lanka’s Uva Province.",
      "The temple is best known for its massive unfinished Buddha image carved directly into the rock face, along with its cave shrine, murals, legends, and historical connection to King Walagamba.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history",
      kicker: "History",
      title: "History and Origins",
      align: "left",

      content: [
        {
          type: "h4",
          text: "Ancient Origin",
        },
        {
          type: "p",
          text: "The temple is believed to have been constructed during the 1st century BC by King Walagamba, also known as Vattagamini Abhaya, while he was in exile hiding from South Indian invaders.",
        },

        {
          type: "h4",
          text: "Royal Connection",
        },
        {
          type: "p",
          text: "According to local tradition, King Walagamba used the area as a refuge during his years in hiding before reclaiming the Anuradhapura Kingdom.",
        },
      ],
    },

    {
      type: "text",
      id: "buddha",
      kicker: "Main Attraction",
      title: "The Unfinished Buddha Statue",
      align: "left",

      content: [
            {
            type: "h4",
            text: "The Rock-Carved Buddha",
            },
            {
            type: "split-paragraph",
            heading: "",
            headingLevel: "h4",

            paragraphs: [
                "The most famous feature of Dhowa Rock Temple is the large unfinished Buddha statue carved in semi-relief into the vertical rock face.",
                "<strong>Height:</strong> Approximately 38 feet (12 meters).",
                "Local legend suggests that King Walagamba himself began carving the statue but was forced to flee before it could be completed.",
            ],

            image: `${import.meta.env.BASE_URL}Destinations/DhowaRockTemple/dhowa2.webp`,
            imageAlt: "Rock-carved unfinished Buddha statue at Dhowa Rock Temple",
            mediaPosition: "right",
            },
      ],
    },

    {
      type: "text",
      id: "cave-shrine",
      kicker: "Temple Complex",
      title: "Cave Shrine and Features",
      align: "left",

      content: [
        {
          type: "h4",
          text: "Cave Shrine",
        },
        {
          type: "p",
          text: "The temple complex includes a cave-turned-image house known as the Gal Vihara Geya.",
        },
        {
          type: "p",
          text: "Its interior contains colorful murals, mainly in the Kandyan style, depicting Jataka stories from the Buddha’s past lives.",
        },

        {
          type: "h4",
          text: "Legendary Tunnel",
        },
        {
          type: "p",
          text: "The temple is associated with the legend of the Ravana Guhawa, an underground tunnel said to connect Dhowa with other temples such as Ravana Maha Viharaya and Bogoda Raja Maha Viharaya.",
        },
        {
          type: "p",
          text: "According to legend, King Walagamba used this tunnel system while escaping from invaders.",
        },

        {
          type: "h4",
          text: "Architectural Features",
        },
        {
          type: "p",
          text: "Other features within the temple complex include a sacred Bo tree, a natural water spring, and entrance guardians believed to represent the Rakshasa leaders Watuka and Kuvera.",
        },
      ],
    },

    {
      type: "text",
      id: "visiting",
      kicker: "Visitor Information",
      title: "Opening Hours and Temple Etiquette",
      align: "left",

      content: [
        {
          type: "h4",
          text: "Opening Hours",
        },
        {
          type: "p",
          text: "<strong>Daily:</strong> Generally open from 8:00 AM to 5:00 PM.",
        },

        {
          type: "h4",
          text: "Entrance Fee",
        },
        {
          type: "p",
          text: "There is no fixed entrance fee for the temple itself.",
        },
        {
          type: "p",
          text: "Visitors are encouraged to make a small donation to support the maintenance and preservation of the temple.",
        },

        {
          type: "h4",
          text: "Local Guides",
        },
        {
          type: "p",
          text: "Local guides may be available near the entrance, and donations for their service are generally expected.",
        },

        {
          type: "h4",
          text: "Dress Code",
        },
        {
          type: "p",
          text: "<strong>Cover Shoulders:</strong> Sleeveless tops and tank tops are not appropriate.",
        },
        {
          type: "p",
          text: "<strong>Cover Knees:</strong> Shorts, skirts, and dresses should extend below the knee.",
        },
        {
          type: "p",
          text: "<strong>Remove Footwear:</strong> Shoes, socks, and hats must be removed before entering the main temple areas.",
        },

        {
          type: "h4",
          text: "Photography",
        },
        {
          type: "p",
          text: "Photography is generally allowed on the temple grounds, particularly near the unfinished Buddha statue.",
        },
        {
          type: "p",
          text: "Photography inside the cave image house may be restricted, especially around murals and statues. Visitors should follow signs and temple instructions.",
        },
      ],
    },

    {
      type: "text",
      id: "getting-there",
      kicker: "Travel Guide",
      title: "Location and Best Time to Visit",
      align: "left",

      content: [
        {
          type: "h4",
          text: "Location",
        },
        {
          type: "p",
          text: "The temple is located directly on the Badulla–Bandarawela main road (A16) in Sri Lanka’s Uva Province.",
        },

        {
          type: "h4",
          text: "From Bandarawela",
        },
        {
          type: "p",
          text: "Approximately 6–7 km from Bandarawela town center.",
        },
        {
          type: "p",
          text: "Accessible by local Badulla-bound bus or tuk-tuk.",
        },

        {
          type: "h4",
          text: "From Ella",
        },
        {
          type: "p",
          text: "Approximately a 15–20 minute drive from Ella, making it a popular half-day cultural excursion.",
        },

        {
          type: "h4",
          text: "Best Time to Visit",
        },
        {
          type: "p",
          text: "<strong>Time of Day:</strong> Morning visits offer cooler temperatures, softer lighting for photography, and fewer crowds.",
        },
        {
          type: "p",
          text: "<strong>Best Seasons:</strong> Generally December to April and June to September.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=V24C%2BGWC%2C%20Sri%20Lanka",
        },
      ],
    },
  ],
};

export default DhowaRockTempleArticle;