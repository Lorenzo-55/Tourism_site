const MannarBaobabTreeArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Mannar", to: "/places/mannar" },
    { label: "Baobab Tree" },
  ],

  hero: {
    kicker: "Natural Heritage",
    title: "Baobab Tree",
    subtitle:
      "A rare African baobab in Mannar, linked to ancient maritime trade routes and centuries of cultural exchange.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Mannar/baobab-tree/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Living Link to Ancient Trade",
    paragraphs: [
      "The baobab tree in Mannar is one of Sri Lanka’s most unusual natural landmarks.",
      "Although baobabs are not native to Sri Lanka, their presence in Mannar reflects the island’s ancient maritime trade connections with Africa, Arabia, India, and the wider Indian Ocean world.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "characteristics-of-the-baobab",
      kicker: "The Tree",
      title: "Characteristics of the Baobab",
      align: "left",

      content: [
        {
          type: "p",
          text: "The baobab, scientifically known as <em>Adansonia digitata</em>, is one of the world’s most distinctive trees.",
        },

        {
          type: "p",
          text: "It is also known as the monkey bread tree and the “Upside-Down Tree” because its bare branches can resemble roots reaching into the sky.",
        },

        {
          type: "split-paragraph",
          heading: "The Tree of Life",
          headingLevel: "h3",
          paragraphs: [
            "Baobabs are famous for their massive swollen trunks, which can store enormous amounts of water.",
            "Some baobabs are capable of holding up to 120,000 liters of water, allowing them to survive in extremely dry environments.",
            "In Sri Lanka, the tree is sometimes called <em>Ali Gaha</em>, meaning “Elephant Tree,” because its rough bark resembles elephant hide.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Mannar/baobab-tree/baobab-trunk.webp`,
          imageAlt: "Large baobab tree trunk in Mannar",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "<strong>Origin:</strong> The baobab is not native to Sri Lanka. It is native to regions of Africa, Madagascar, and Australia.",
        },
      ],
    },

    {
      type: "text",
      id: "baobab-in-mannar",
      kicker: "Mannar Landmark",
      title: "The Baobab in Mannar",
      align: "left",

      content: [
        {
          type: "p",
          text: "Mannar is considered the last stronghold of the baobab in Sri Lanka, with most of the country’s surviving trees found in the district.",
        },

        {
          type: "p",
          text: "There are only around 40 baobab trees in Sri Lanka, and about 34 of them are located in the Mannar District.",
        },

        {
          type: "split-paragraph",
          heading: "The Famous Pallimunai Baobab",
          headingLevel: "h3",
          paragraphs: [
            "The most famous and largest baobab tree in Sri Lanka is located in Pallimunai, close to Mannar town.",
            "This old tree is estimated to be around 700 to 800 years old.",
            "Its enormous trunk has a circumference of up to 20 meters, making it one of the most striking natural landmarks in northern Sri Lanka.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Mannar/baobab-tree/pallimunai-baobab.webp`,
          imageAlt: "Famous baobab tree at Pallimunai in Mannar",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "history-and-trade",
      kicker: "History",
      title: "History and Trade Connections",
      align: "left",

      content: [
        {
          type: "p",
          text: "The baobab is generally believed to have been introduced to Sri Lanka by Arab traders.",
        },

        {
          type: "p",
          text: "Mannar’s position on ancient maritime trade routes between the Middle East, India, and Ceylon made it a natural place for such introductions.",
        },

        {
          type: "p",
          text: "The tree may have been valued for its fruit, sometimes described as a superfood, as well as for its fiber and practical uses.",
        },
      ],
    },

    {
      type: "text",
      id: "tourism-significance",
      kicker: "Visitor Experience",
      title: "Tourism Significance",
      align: "left",

      content: [
        {
          type: "p",
          text: "The baobab tree in Mannar is a major attraction because of its rarity, age, and unusual appearance.",
        },

        {
          type: "p",
          text: "It offers visitors a rare opportunity to see a monumental baobab outside Africa and Madagascar.",
        },

        {
          type: "p",
          text: "<strong>Rarity:</strong> Because of its age and scarcity, the baobab is protected as an archaeological monument in Sri Lanka.",
        },

        {
          type: "p",
          text: "<strong>Access:</strong> The famous Pallimunai baobab is easily accessible from Mannar town.",
        },

        {
          type: "p",
          text: "<strong>Experience:</strong> The tree is a memorable stop for visitors exploring the natural and historical landscape of northern Sri Lanka.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=8.981882636674976,79.92320092388746",
        },
      ],
    },
  ],
};

export default MannarBaobabTreeArticle;