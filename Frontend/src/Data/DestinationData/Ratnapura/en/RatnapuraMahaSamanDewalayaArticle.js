const RatnapuraMahaSamanDewalayaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Ratnapura", to: "/places/ratnapura" },
    { label: "Maha Saman Dewalaya" },
  ],

  hero: {
    kicker: "Sacred Temple",
    title: "Maha Saman Dewalaya",
    subtitle:
      "A historic Kandyan-era shrine dedicated to Lord Saman, guardian deity of Sabaragamuwa and protector of Sri Pada (Adam’s Peak).",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Ratnapura/maha-saman-dewalaya/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "The Sacred Shrine of Lord Saman",
    paragraphs: [
      "The Maha Saman Dewalaya, also known as the Sri Sumana Saman Devalaya, is one of the most important religious sites in the Sabaragamuwa Province.",
      "Dedicated to the deity Saman Deviyo, the shrine combines deep spiritual significance, Kandyan architectural traditions, colonial-era history, and one of Sri Lanka’s great annual Perahera festivals.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "guardian-deity",
      kicker: "Guardian Deity",
      title: "Dedicated to Lord Saman",
      align: "left",

      content: [
        {
          type: "p",
          text: "The temple is dedicated to Saman Deviyo, one of the four guardian deities of Sri Lanka and the protector deity of the Sabaragamuwa region.",
        },

        {
          type: "p",
          text: "Lord Saman is most strongly associated with Sri Pada, also known as Adam’s Peak, the sacred mountain located near Ratnapura.",
        },

        {
          type: "split-paragraph",
          heading: "The Legend of Sumana",
          headingLevel: "h3",

          paragraphs: [
            "According to legend, Sumana was a regional ruler or administrator who met the Buddha during his first visit to Sri Lanka.",
            "He is said to have requested that the Buddha leave a sacred footprint on Sri Pada so future generations could worship there.",
            "After his death, Sumana was deified and became known as Saman Deviyo, guardian of the holy mountain and protector of the surrounding lands.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Ratnapura/maha-saman-dewalaya/lord-saman.webp`,
          imageAlt: "Maha Saman Dewalaya shrine in Ratnapura",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "history-architecture",
      kicker: "History & Architecture",
      title: "Ancient Origins and Kandyan Style",
      align: "left",

      content: [
        {
          type: "p",
          text: "The origins of the shrine are believed to date back to the Anuradhapura period, possibly around the 2nd century BCE.",
        },

        {
          type: "p",
          text: "The present form of the shrine is traditionally linked to the Dambadeniya Kingdom period and is believed to have been rebuilt around 1270 CE under King Parakramabahu II.",
        },

        {
          type: "split-paragraph",
          heading: "Portuguese Destruction and Rebuilding",
          headingLevel: "h3",

          paragraphs: [
            "During the Portuguese colonial period in the 17th century, the original shrine was destroyed.",
            "The Portuguese constructed a fort and church on the site, dramatically altering the sacred grounds.",
            "The temple was later rebuilt under King Rajasinghe II, and much of the current structure reflects Kandyan architectural traditions.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Ratnapura/maha-saman-dewalaya/kandyan-architecture.webp`,
          imageAlt: "Kandyan-style architecture at Maha Saman Dewalaya",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Historical Relics",
        },

        {
          type: "p",
          text: "The temple complex contains historical artifacts connected to its turbulent colonial past.",
        },

        {
          type: "p",
          text: "One notable sculpture from the Portuguese era is believed to depict a Portuguese soldier trampling a defeated Sinhalese warrior, reflecting the conflicts of the period.",
        },
      ],
    },

    {
      type: "text",
      id: "esala-perahera",
      kicker: "Festival",
      title: "The Grand Esala Perahera",
      align: "left",

      content: [
        {
          type: "p",
          text: "The annual Esala Perahera of the Maha Saman Dewalaya is one of the largest and most important cultural festivals in Sri Lanka.",
        },

        {
          type: "p",
          text: "Held during the Sinhala month of Esala, usually between July and September, the festival is considered second only to the Kandy Esala Perahera in scale and prestige.",
        },

        {
          type: "split-paragraph",
          heading: "Processions and Rituals",
          headingLevel: "h3",

          paragraphs: [
            "The festival includes several processions and ritual stages such as the Kumbal Perahera, Dewele Perahera, and the grand Maha Perahera.",
            "Traditional Kandyan, Sabaragamuwa, and Low Country dancers perform alongside drummers, torch bearers, and decorated elephants.",
            "The atmosphere combines religion, pageantry, music, and regional cultural identity.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Ratnapura/maha-saman-dewalaya/perahera.webp`,
          imageAlt: "Esala Perahera at Maha Saman Dewalaya",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Maha Bamba Kolama",
        },

        {
          type: "p",
          text: "One of the unique features of the festival is the Maha Bamba Kolama, a towering figure representing King Rajasinghe with two contrasting faces — one hostile and one benevolent.",
        },

        {
          type: "h3",
          text: "Diya Kapeema Ceremony",
        },

        {
          type: "p",
          text: "The Perahera concludes with the traditional Diya Kapeema, or Water-Cutting Ceremony, held at the nearby Kalu Ganga.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-experience",
      kicker: "Visitor Experience",
      title: "Why Visit the Maha Saman Dewalaya",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Maha Saman Dewalaya is one of Ratnapura’s most important religious and cultural landmarks.",
        },

        {
          type: "p",
          text: "Its connection to Sri Pada, its layered history through kingdoms and colonial rule, and its role in Sri Lanka’s festival traditions make it far more than a local shrine.",
        },

        {
          type: "p",
          text: "Visitors can appreciate its peaceful atmosphere, Kandyan-style architecture, historical artifacts, and the enduring spiritual significance of Lord Saman in the Sabaragamuwa region.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.690657985645989,80.37992278154162",
        },
      ],
    },
  ],
};

export default RatnapuraMahaSamanDewalayaArticle;