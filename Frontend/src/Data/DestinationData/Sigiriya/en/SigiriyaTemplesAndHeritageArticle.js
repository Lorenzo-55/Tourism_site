const SigiriyaTemplesAndHeritageArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Sigiriya", to: "/places/sigiriya" },
    { label: "Temples & Heritage" },
  ],

  hero: {
    kicker: "Ancient Buddhist Heritage",
    title: "Temples & Heritage",
    subtitle:
      "Ancient cave temples, forest monasteries, sacred murals, and centuries of Buddhist history surrounding the Sigiriya region.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Sigiriya/temples-heritage/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Sacred History Beyond Sigiriya",
    paragraphs: [
      "The Sigiriya region is surrounded by some of Sri Lanka’s most important Buddhist heritage sites, ranging from ancient cave temples to hidden forest monasteries.",
      "Dambulla Cave Temple preserves over two millennia of religious art and worship, while Ritigala Monastery offers a quieter and more mysterious experience deep within a protected forest reserve.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "dambulla-cave-temple",
      kicker: "UNESCO Heritage",
      title: "Dambulla Cave Temple",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Dambulla Cave Temple, officially known as the Rangiri Dambulla Viharaya, is the largest and best-preserved cave temple complex in Sri Lanka.",
        },

        {
          type: "p",
          text: "The site has remained an active place of Buddhist worship for more than 2,200 years and became a UNESCO World Heritage Site in 1991.",
        },

        {
          type: "split-paragraph",
          heading: "King Valagamba and the Origins of the Temple",
          headingLevel: "h4",

          paragraphs: [
            "According to tradition, King Valagamba took refuge inside these caves for 15 years after being forced into exile.",
            "After reclaiming his throne in the 1st century BCE, he converted the caves into Buddhist temples as an act of gratitude.",
            "Later kings expanded and decorated the caves over many centuries, especially during the Kandyan era when many of the colorful murals were added.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Sigiriya/temples-heritage/dambulla-caves.webp`,
          imageAlt: "Dambulla Cave Temple complex",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "five-sacred-caves",
      kicker: "Art & Architecture",
      title: "The Five Sacred Caves",
      align: "left",

      content: [
        {
          type: "p",
          text: "The temple complex consists of five major caves beneath a huge overhanging rock, each filled with Buddha statues, murals, and centuries of religious artwork.",
        },

        {
          type: "p",
          text: "<strong>Cave 1 – Devaraja Viharaya:</strong> Features a massive reclining Buddha carved directly into the rock.",
        },

        {
          type: "p",
          text: "<strong>Cave 2 – Maharaja Viharaya:</strong> The largest and most famous cave, containing dozens of Buddha statues and extensive ceiling paintings.",
        },

        {
          type: "p",
          text: "<strong>Cave 3 – Maha Aluth Viharaya:</strong> Known for Kandyan-era murals and richly painted interiors.",
        },

        {
          type: "p",
          text: "<strong>Cave 4 – Pachchima Viharaya:</strong> A smaller cave centered around a stupa and stone Buddha figures.",
        },

        {
          type: "p",
          text: "<strong>Cave 5 – Devana Aluth Viharaya:</strong> Contains later plaster statues and Hindu deity figures.",
        },

        {
          type: "split-paragraph",
          heading: "Murals and Sacred Art",
          headingLevel: "h4",

          paragraphs: [
            "The walls and ceilings are covered with intricate paintings showing scenes from the Buddha’s life, Jataka tales, and Sri Lankan religious history.",
            "Together, the caves contain one of the most important surviving collections of Buddhist art in South Asia.",
            "The dim lighting, incense, murals, and statues create a deeply atmospheric and sacred environment.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Sigiriya/temples-heritage/murals.webp`,
          imageAlt: "Murals and Buddha statues inside Dambulla Cave Temple",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "golden-temple-and-climb",
      kicker: "Visiting Dambulla",
      title: "The Golden Temple and the Climb",
      align: "left",

      content: [
        {
          type: "p",
          text: "At the base of the rock sits the modern Golden Temple complex, easily recognized by its massive golden Buddha statue.",
        },

        {
          type: "p",
          text: "Visitors must climb roughly 350 steps to reach the cave temples above.",
        },

        {
          type: "p",
          text: "<strong>Best Time:</strong> Early morning or late afternoon is recommended to avoid the midday heat on the exposed stone pathways.",
        },

        {
          type: "p",
          text: "<strong>Dress Code:</strong> Shoulders and knees must be covered, and footwear must be removed before entering the temple grounds.",
        },

        {
          type: "p",
          text: "<strong>Photography:</strong> Visitors should avoid posing with their back toward Buddha statues and should not use flash photography inside the caves.",
        },
      ],
    },

    {
      type: "text",
      id: "ritigala-monastery",
      kicker: "Forest Monastery",
      title: "Ritigala Monastery",
      align: "left",

      content: [
        {
          type: "p",
          text: "Ritigala Monastery is one of the most atmospheric archaeological sites near Sigiriya, hidden within a forested mountain reserve.",
        },

        {
          type: "p",
          text: "Unlike the grand monuments of Anuradhapura or Polonnaruwa, Ritigala is known for its simplicity, silence, and isolated jungle setting.",
        },

        {
          type: "split-paragraph",
          heading: "The Pansukulika Monks",
          headingLevel: "h4",

          paragraphs: [
            "The monastery was mainly used by the Pansukulika monks, an austere Buddhist order that rejected luxury and lived a strict forest-dwelling lifestyle.",
            "Instead of elaborate temples and stupas, the monastery focused on meditation spaces and practical communal living.",
            "Most visible ruins today date to the 9th century during the reign of King Sena I.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Sigiriya/temples-heritage/ritigala-pathway.webp`,
          imageAlt: "Ancient stone pathways at Ritigala Monastery",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "ritigala-features",
      kicker: "Archaeological Features",
      title: "Ruins Hidden in the Forest",
      align: "left",

      content: [
        {
          type: "p",
          text: "The monastery complex spreads through the forest along ancient stone pathways and terraces.",
        },

        {
          type: "p",
          text: "<strong>Banda Pokuna:</strong> A large ancient reservoir believed to have been used for ritual bathing before entering the monastery.",
        },

        {
          type: "p",
          text: "<strong>The Monastic Hospital:</strong> Includes stone medicinal baths and grinding stones once used for preparing herbal remedies.",
        },

        {
          type: "p",
          text: "<strong>The Double Platforms:</strong> Unique meditation platforms connected by narrow stone bridges, associated with the Pansukulika tradition.",
        },

        {
          type: "p",
          text: "<strong>Decorated Urinal Stones:</strong> Rare decorative carvings believed to symbolize rejection of luxury and attachment.",
        },

        {
          type: "split-paragraph",
          heading: "Forest Atmosphere and Isolation",
          headingLevel: "h4",

          paragraphs: [
            "Ritigala’s mountain environment creates a cooler and wetter microclimate than the surrounding dry zone.",
            "The forest is filled with medicinal plants, jungle sounds, and ruins hidden beneath thick vegetation.",
            "The silence and remote setting give Ritigala a mysterious atmosphere very different from the larger heritage sites nearby.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Sigiriya/temples-heritage/ritigala-forest.webp`,
          imageAlt: "Forest ruins at Ritigala Monastery",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Travel Tips for Dambulla and Ritigala",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Dambulla Opening Hours:</strong> Usually open daily from 7:00 AM to 7:00 PM, though ticket counters may close earlier.",
        },

        {
          type: "p",
          text: "<strong>Ritigala Opening Hours:</strong> Generally around 6:00 AM to 6:00 PM.",
        },

        {
          type: "p",
          text: "<strong>Footwear:</strong> Comfortable walking shoes are recommended, especially at Ritigala where the terrain includes uneven stone paths and forest trails.",
        },

        {
          type: "p",
          text: "<strong>Water & Sun Protection:</strong> Carry drinking water, sunscreen, and a hat, especially when visiting Dambulla during warmer hours.",
        },

        {
          type: "p",
          text: "<strong>Guides:</strong> Local guides can provide useful historical context, particularly at Ritigala where many ruins blend into the forest landscape.",
        },

        {
          type: "button",
          label: "View Dambulla Cave Temple on Google Maps",
          href: "https://www.google.com/maps?q=7.855094771036488,80.65056989504248",
        },

        {
          type: "button",
          label: "View Ritigala Monastery on Google Maps",
          href: "https://www.google.com/maps?q=8.123984246386776,80.66421808032064",
        },
      ],
    },
  ],
};

export default SigiriyaTemplesAndHeritageArticle;