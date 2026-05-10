const MadampellaCapuchinSistersArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Madampella", to: "/places/madampella" },
    { label: "Capuchin Sisters" },
  ],

  hero: {
    kicker: "Catholic Community",
    title: "Capuchin Sisters in Madampella",
    subtitle:
      "A Catholic religious community serving through formation, parish collaboration, pastoral care, and local community life.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Madampella/capuchin-sisters/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Nazareth Gedara and Local Catholic Life",
    paragraphs: [
      "The Capuchin Sisters in Madampella belong to the congregation of the Capuchin Tertiary Sisters of the Holy Family, known in Spanish as Terciarias Capuchinas.",
      "Their house, known as Nazareth Gedara, is not primarily a tourist site, but an important religious and community center connected to formation, parish service, and Catholic village life.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "nazareth-gedara",
      kicker: "Community House",
      title: "Nazareth Gedara: The Madampella Community",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Capuchin Sisters’ house in Madampella is known as Nazareth Gedara.",
        },

        {
          type: "p",
          text: "It is located at 176 Bolagala Road, Madampella, Katana, Negombo, close to St. James Parish.",
        },

        {
          type: "split-paragraph",
          heading: "A Local Religious Community",
          headingLevel: "h3",
          paragraphs: [
            "The Madampella community has a significant role within the local Catholic setting.",
            "It serves as both a home for religious formation and a base for parish collaboration, allowing the sisters to stay closely connected with the daily life of the village.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Madampella/capuchin-sisters/nazareth-gedara.webp`,
          imageAlt: "Nazareth Gedara Capuchin Sisters house in Madampella",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "history",
      kicker: "History",
      title: "Establishment and Early Presence",
      align: "left",

      content: [
        {
          type: "p",
          text: "The first Capuchin Tertiary Sisters arrived in Sri Lanka in August and October of 2011.",
        },

        {
          type: "p",
          text: "They initially stayed in Negombo to learn Sinhala and adapt to the local language and community setting.",
        },

        {
          type: "p",
          text: "Near Christmas 2011, the sisters moved to a house in Madampella adjacent to St. James Parish.",
        },

        {
          type: "p",
          text: "The house was offered by the Archdiocese of Colombo, reflecting the sisters’ close collaboration with the local Church authority.",
        },
      ],
    },

    {
      type: "text",
      id: "mission-and-role",
      kicker: "Mission",
      title: "Primary Roles and Mission",
      align: "left",

      content: [
        {
          type: "p",
          text: "The community in Madampella serves two main interconnected functions: religious formation and parish collaboration.",
        },

        {
          type: "split-paragraph",
          heading: "Formation House",
          headingLevel: "h3",
          paragraphs: [
            "Nazareth Gedara functions as a formation house for young women discerning a religious vocation.",
            "Aspirants, postulants, and novices from Sri Lanka and India may be formed through this community, making it an important center for the growth of the congregation in Asia.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Madampella/capuchin-sisters/community-life.webp`,
          imageAlt: "Capuchin Sisters community life in Madampella",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Parish Collaboration",
        },

        {
          type: "p",
          text: "The sisters actively collaborate in the parish work of St. James Parish, Madampella.",
        },

        {
          type: "p",
          text: "Through this direct involvement, they remain in close contact with the realities, needs, and daily experiences of the local people.",
        },
      ],
    },

    {
      type: "text",
      id: "community-activities",
      kicker: "Community Service",
      title: "Community Activities and Charism",
      align: "left",

      content: [
        {
          type: "p",
          text: "The mission of the Capuchin Tertiary Sisters is shaped by the Franciscan charism of fraternity, simplicity, and mercy.",
        },

        {
          type: "p",
          text: "Their wider work often focuses on education, assistance to children and youth, care for the sick, and service to local communities.",
        },

        {
          type: "h3",
          text: "Activities in Madampella",
        },

        {
          type: "p",
          text: "<strong>Pastoral Action:</strong> The sisters work with the local priest and lay community through catechism, spiritual guidance, and religious events.",
        },

        {
          type: "p",
          text: "<strong>Family and Sick Visits:</strong> They engage with the local population by visiting families and providing care or communion to the sick and homebound.",
        },

        {
          type: "p",
          text: "<strong>Community Life:</strong> The sisters live a simple and prayerful life shaped by the Franciscan spirit and the spirituality of Nazareth.",
        },

        {
          type: "p",
          text: "In essence, the Capuchin Sisters’ presence in Madampella is a vital center of religious formation and community service, deeply integrated into the life of the local Catholic village.",
        },
      ],
    },
  ],
};

export default MadampellaCapuchinSistersArticle;