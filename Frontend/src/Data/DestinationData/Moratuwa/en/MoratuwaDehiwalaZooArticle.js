const DehiwalaZooArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Dehiwala", to: "/places/dehiwala" },
    { label: "Dehiwala Zoo" },
  ],

  hero: {
    kicker: "Wildlife & Family Attraction",
    title: "Dehiwala Zoo",
    subtitle:
      "One of Asia’s oldest zoological gardens, known for its aquarium, aviaries, butterfly garden, animal collections, and family-friendly experiences.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Dehiwala/dehiwala-zoo/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "The National Zoological Gardens of Sri Lanka",
    paragraphs: [
      "The National Zoological Gardens of Sri Lanka, commonly known as Dehiwala Zoo, is one of the oldest and largest zoos in Asia.",
      "Located in a suburb of Colombo and spread across nearly 30 acres, the zoo is a major family attraction with landscaped pathways, animal exhibits, an aquarium, aviaries, and educational programs.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "main-attractions",
      kicker: "Main Attractions",
      title: "What to See at Dehiwala Zoo",
      align: "left",

      content: [
        {
          type: "p",
          text: "Dehiwala Zoo is known for its wide collection of animals, shaded walking paths, and several specialty sections that appeal to both children and adults.",
        },

        {
          type: "split-paragraph",
          heading: "Aquarium and Butterfly Garden",
          headingLevel: "h4",

          paragraphs: [
            "<strong>The Aquarium:</strong> Often considered one of the zoo’s star attractions, it houses hundreds of varieties of aquatic life, including species found in Sri Lanka.",
            "<strong>Butterfly Garden:</strong> A small landscaped enclosure with controlled humidity and mist, featuring several butterfly species at different stages of their life cycle.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Dehiwala/dehiwala-zoo/aquarium.webp`,
          imageAlt: "Aquarium section at Dehiwala Zoo",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "<strong>Walk-through Aviaries:</strong> The zoo has large bird enclosures with many species of birds, while the flooded quarry area often attracts wild aquatic birds during afternoon feeding times.",
        },

        {
          type: "p",
          text: "<strong>Big Cats and Mammals:</strong> Visitors can see animals such as lions, Bengal tigers, leopards, jaguars, zebras, giraffes, and the endemic sloth bear.",
        },

        {
          type: "split-paragraph",
          heading: "A Large Urban Wildlife Park",
          headingLevel: "h4",

          paragraphs: [
            "The zoo combines animal exhibits with leafy paths, ponds, gardens, and older colonial-era landscaping.",
            "Because the grounds are fairly large, visitors should plan enough time to walk between sections without rushing.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Dehiwala/dehiwala-zoo/zoo-path.webp`,
          imageAlt: "Walking path inside Dehiwala Zoo",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "animal-shows",
      kicker: "Programs",
      title: "Daily Animal Shows",
      align: "left",

      content: [
        {
          type: "p",
          text: "Dehiwala Zoo is also known for its afternoon animal programs, though schedules can change slightly depending on the day.",
        },

        {
          type: "p",
          text: "<strong>Elephant Show:</strong> Usually held around 4:00 PM or 4:30 PM at the Elephant Arena.",
        },

        {
          type: "p",
          text: "<strong>Sea Lion Performance:</strong> Usually held around 4:00 PM at the Sea Lion pool.",
        },

        {
          type: "p",
          text: "<strong>Chimpanzee Educational Program:</strong> Often held in the early afternoon and may feature Sanju, a hand-raised chimpanzee.",
        },

        {
          type: "p",
          text: "<strong>Bird Feeding:</strong> The flooded quarry area can attract wild aquatic birds around the afternoon feeding period, commonly around 3:30 PM.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Opening Hours, Tickets, and Visit Duration",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Opening Hours:</strong> Usually open daily from 8:30 AM to 6:00 PM, with ticket counters generally closing around 5:00 PM.",
        },

        {
          type: "p",
          text: "<strong>Best Time to Visit:</strong> Arrive between 8:30 AM and 10:30 AM to avoid the strongest heat and see animals when they are more active.",
        },

        {
          type: "p",
          text: "<strong>Duration:</strong> Plan around 3–5 hours if you want to see the major sections and attend the shows.",
        },

        {
          type: "p",
          text: "<strong>Foreign Adults:</strong> Around USD 15, approximately LKR 4,500–5,500 depending on current pricing and taxes.",
        },

        {
          type: "p",
          text: "<strong>Foreign Children:</strong> Around USD 7.50 for children aged 3–12.",
        },

        {
          type: "p",
          text: "<strong>SAARC Adults:</strong> Around LKR 700–1,000.",
        },

        {
          type: "p",
          text: "<strong>Local Adults:</strong> Around LKR 250.",
        },

        {
          type: "p",
          text: "<strong>Local Children:</strong> Around LKR 100.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.856171731475663,79.8731978519511",
        },
      ],
    },

    {
      type: "text",
      id: "travel-tips",
      kicker: "Travel Tips",
      title: "Useful Tips for Visiting",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Night Safari:</strong> Check locally whether the night safari is active during your visit. It is usually associated with selected weekend evenings and gives visitors a different view of nocturnal animals.",
        },

        {
          type: "p",
          text: "<strong>New Animals:</strong> The zoo has introduced species such as anacondas, zebras, and giraffes through international exchange programs.",
        },

        {
          type: "p",
          text: "<strong>Food and Drinks:</strong> Snack stalls and cafeterias are available inside, but carrying your own water bottle is useful because the walk can be long.",
        },

        {
          type: "p",
          text: "<strong>Heat:</strong> The midday period can feel hot and tiring, especially for children, so morning visits are usually more comfortable.",
        },
      ],
    },
  ],
};

export default DehiwalaZooArticle;