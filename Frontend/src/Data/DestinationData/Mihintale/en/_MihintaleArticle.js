const MihintaleArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Mihintale" },
  ],

  hero: {
    kicker: "North Central Province",
    title: "Mihintale",
    subtitle:
      "A sacred hill near Anuradhapura, regarded as the birthplace of Buddhism in Sri Lanka and one of its most important pilgrimage sites.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Mihintale/mihintale-hero.jpg`,
  },

  overview: {
    kicker: "Overview",
    title: "The Cradle of Buddhism in Sri Lanka",
    paragraphs: [
      "Mihintale, located about 11 kilometers from Anuradhapura, is one of the most spiritually significant sites in Sri Lanka. It is widely regarded as the place where Buddhism was first introduced to the island, making it a major pilgrimage destination for Buddhists.",
      "Set on a rocky hill surrounded by forest and plains, Mihintale combines religious importance with scenic views and ancient ruins, offering both a spiritual and historical experience.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history",
      kicker: "History",
      title: "The Introduction of Buddhism",
      align: "left",
      content: [
        {
          type: "p",
          text: "Mihintale’s importance is rooted in a defining moment in Sri Lankan history. In the 3rd century BC, the Buddhist monk Mahinda, son of Emperor Ashoka of India, met King Devanampiya Tissa on this hill.",
        },
        {
          type: "p",
          text: "After testing the king’s wisdom through a series of questions, Mahinda introduced him to Buddhism. The king’s acceptance marked the beginning of Buddhism on the island, shaping Sri Lanka’s religious and cultural identity for centuries to come.",
        },
        {
          type: "p",
          text: "This historic event is commemorated annually during the Poson Poya festival in June, when thousands of pilgrims gather at Mihintale to celebrate and honor its significance.",
        },
        {
          type: "button",
          label: "View on Google Maps",
          href: "https://maps.app.goo.gl/YJxVZF8fEZvdsYyNA",
        },
      ],
    },

    {
      type: "text",
      id: "attractions",
      kicker: "Highlights",
      title: "Climbing Mihintale and Key Sites",
      align: "left",
      content: [
        {
          type: "p",
          text: "A visit to Mihintale involves a climb to the summit, typically via a monumental staircase of around 1,800 steps. The ascent itself is part of the experience, passing ancient ruins and quiet spaces once used by monks.",
        },

        {
          type: "split-paragraph",
          heading: "The Great Staircase and Maha Seya",
          headingLevel: "h4",
          paragraphs: [
            "The climb is both physical and spiritual, leading past monastic ruins and meditation areas. At the top stands the Maha Seya Dagoba, a large white stupa offering panoramic views of the surrounding plains of Anuradhapura.",
            "From this point, the landscape opens out across greenery and rice fields, creating one of the most rewarding viewpoints in the region.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Mihintale/maha-seya.jpg`,
          imageAlt: "Maha Seya Dagoba at Mihintale",
          mediaPosition: "right",
        },

        {
          type: "split-paragraph",
          heading: "Aradhana Gala and the Sacred Encounter",
          headingLevel: "h4",
          paragraphs: [
            "Aradhana Gala, also known as the Meditation Rock, is believed to be the exact spot where Mahinda met King Devanampiya Tissa. It can be climbed for an even higher viewpoint, though the ascent is steep.",
            "The site holds deep symbolic meaning and is closely tied to the story of Buddhism’s arrival in Sri Lanka.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Mihintale/aradhana-gala.jpg`,
          imageAlt: "Aradhana Gala Mihintale",
          mediaPosition: "left",
        },

        {
          type: "split-paragraph",
          heading: "Buddha Statue and Monastic Ruins",
          headingLevel: "h4",
          paragraphs: [
            "A large white Buddha statue overlooks the surrounding area, providing a calm and reflective space along the climb. The lower slopes of Mihintale contain extensive monastery ruins, including a refectory, meditation caves, and ancient bathing areas.",
            "These remains offer insight into the daily life of monks who once lived and practiced in this sacred environment.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Mihintale/buddha-statue.jpg`,
          imageAlt: "White Buddha statue Mihintale",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "tips",
      kicker: "Travel Tips",
      title: "Practical Information for Visitors",
      align: "left",
      paragraphs: [
        "As a sacred religious site, visitors are expected to dress modestly, covering shoulders and knees. Carrying a sarong can be useful, especially when visiting multiple temples.",
        "Shoes must be removed before entering sacred areas. Since the stone surfaces can become very hot during the day, bringing socks or visiting during cooler hours can make the experience more comfortable.",
        "The best time to visit is early morning or late afternoon, when temperatures are lower and the light enhances the views. Mihintale is easily reached from Anuradhapura by tuk-tuk, and drivers can often be arranged to wait during the visit.",
        "Monkeys are present in the area and can be bold, so keeping food and belongings secure is recommended.",
      ],
    },
  ],
};

export default MihintaleArticle;