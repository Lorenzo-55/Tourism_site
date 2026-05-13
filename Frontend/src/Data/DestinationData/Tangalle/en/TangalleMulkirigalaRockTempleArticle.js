const TangalleMulkirigalaRockTempleArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Tangalle", to: "/places/tangalle" },
    { label: "Mulkirigala Rock Temple" },
  ],

  hero: {
    kicker: "Ancient Buddhist Temple",
    title: "Mulkirigala Rock Temple",
    subtitle:
      "A dramatic rock temple complex near Tangalle, known for cave shrines, Kandyan-era murals, reclining Buddha statues, and panoramic summit views.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Tangalle/mulkirigala-rock-temple/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Less-Touristy Counterpart to Dambulla",
    paragraphs: [
      "Mulkirigala Rock Temple, officially known as Mulkirigala Raja Maha Vihara, is an ancient Buddhist temple complex built into a massive natural rock in Sri Lanka’s Southern Province.",
      "Located around 17–20 km inland from Tangalle, the temple is often called ‘Little Sigiriya’ because of its dramatic rock setting, terraced layout, cave temples, and sweeping views from the summit.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "location-and-layout",
      kicker: "Rock Temple Complex",
      title: "Location, Rock, and Terraced Structure",
      align: "left",

      content: [
        {
          type: "p",
          text: "The temple is situated in Mulkirigala in the Hambantota District, approximately 17–20 km inland from the coastal town of Tangalle.",
        },

        {
          type: "p",
          text: "The complex is built around a huge rock outcrop rising about 205 meters above the surrounding flat landscape.",
        },

        {
          type: "split-paragraph",
          heading: "Five Terraced Levels",
          headingLevel: "h3",

          paragraphs: [
            "The temple is arranged across five terraced levels connected by more than 500 steps carved into the rock face.",
            "These terraces contain seven cave temples, shrine rooms, Buddha images, sacred trees, and stupas.",
            "The climb is part of the experience, gradually revealing cave shrines, murals, and increasingly wide views of the surrounding countryside.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/mulkirigala-rock-temple/rock-steps.webp`,
          imageAlt: "Stone steps climbing Mulkirigala Rock Temple",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Main Terraces",
        },

        {
          type: "p",
          text: "<strong>Lower Terrace:</strong> Also known as Patha Maluwa, this level contains the first set of cave temples.",
        },

        {
          type: "p",
          text: "<strong>Bo Tree Terrace:</strong> Known as Bodhi Maluwa, this terrace features one of the 32 saplings of the sacred Jaya Sri Maha Bodhi tree from Anuradhapura.",
        },

        {
          type: "p",
          text: "<strong>Great King’s Temple Terrace:</strong> Also called Raja Maha Vihara Maluwa, this level contains additional cave temples.",
        },

        {
          type: "p",
          text: "<strong>Upper Bo Tree Terrace:</strong> Known as Uda Bodhi Maluwa, forming part of the upper sacred area.",
        },

        {
          type: "p",
          text: "<strong>Chetiya Terrace:</strong> Also called Chaitya Maluwa, this is the highest level and is crowned by a stupa believed to contain Buddha relics.",
        },
      ],
    },

    {
      type: "text",
      id: "history-and-significance",
      kicker: "History",
      title: "Historical and Cultural Significance",
      align: "left",

      content: [
        {
          type: "p",
          text: "Mulkirigala’s history is believed to date back to the 3rd century BCE.",
        },

        {
          type: "p",
          text: "The monastery is traditionally associated with King Saddhatissa, the brother of King Dutugemunu, and is also considered one of the 64 temples built by King Kawantissa.",
        },

        {
          type: "split-paragraph",
          heading: "Ancient Origins",
          headingLevel: "h3",

          paragraphs: [
            "Ancient Brahmi rock inscriptions confirm the early use of the site as a Buddhist monastic complex.",
            "Over the centuries, the temple remained an important religious center, though it experienced periods of neglect and later restoration.",
            "Its elevated rock setting and cave shrines make it one of the most distinctive sacred sites in southern Sri Lanka.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/mulkirigala-rock-temple/cave-temple.webp`,
          imageAlt: "Cave temple at Mulkirigala Rock Temple",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "The Dutch Connection",
        },

        {
          type: "p",
          text: "During the 18th century, Dutch rulers mistakenly referred to the rock as ‘Adam’s Berg,’ believing it to be connected to the final resting place of Adam and Eve.",
        },

        {
          type: "h3",
          text: "Mahavamsa Discovery",
        },

        {
          type: "p",
          text: "The site is also significant because British civil servant George Turnour discovered the Vamsattappakasini, or Tika, here.",
        },

        {
          type: "p",
          text: "This discovery helped with the translation and interpretation of the Mahavamsa, Sri Lanka’s ancient historical chronicle.",
        },
      ],
    },

    {
      type: "text",
      id: "art-and-caves",
      kicker: "Art & Architecture",
      title: "Murals, Cave Temples, and Buddha Statues",
      align: "left",

      content: [
        {
          type: "p",
          text: "Mulkirigala is especially valued for its cave temples, murals, and Buddhist sculptures.",
        },

        {
          type: "p",
          text: "Many of the artworks visible today are connected to the Kandyan period, particularly after renovation work during the 18th century.",
        },

        {
          type: "split-paragraph",
          heading: "Kandyan-Era Murals",
          headingLevel: "h3",

          paragraphs: [
            "The cave interiors are filled with colorful murals depicting scenes from the life of the Buddha.",
            "Jataka stories, which recount the Buddha’s previous lives, are also painted across the walls and ceilings.",
            "These murals create a richly detailed visual record of Buddhist storytelling and Kandyan religious art.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/mulkirigala-rock-temple/murals.webp`,
          imageAlt: "Murals inside Mulkirigala Rock Temple cave shrine",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Buddha Images",
        },

        {
          type: "p",
          text: "The cave temples contain seated, standing, and reclining Buddha statues.",
        },

        {
          type: "p",
          text: "Several large reclining Buddha images represent Parinirvana, the Buddha’s passing into final Nirvana.",
        },

        {
          type: "p",
          text: "Together with the murals and cave architecture, these statues make the temple one of the most important artistic sites near Tangalle.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Visiting Mulkirigala Rock Temple",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Best Time to Visit:</strong> Early morning or late afternoon is recommended to avoid the intense midday heat during the climb.",
        },

        {
          type: "p",
          text: "<strong>Climb:</strong> Be prepared for more than 500 steps to reach the upper terraces and summit area.",
        },

        {
          type: "p",
          text: "<strong>Distance from Tangalle:</strong> Approximately 16–20 km inland, depending on the route.",
        },

        {
          type: "split-paragraph",
          heading: "Dress Code and Etiquette",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Shoulders and Knees:</strong> Must be covered because this is a sacred Buddhist site.",
            "<strong>Footwear and Hats:</strong> Shoes and hats must be removed before entering temple areas.",
            "<strong>Socks:</strong> Useful because the rock and stone steps can become very hot during the day.",
            "<strong>Photography:</strong> Often prohibited inside cave temples and shrine rooms, especially around murals and Buddha images.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/mulkirigala-rock-temple/summit-view.webp`,
          imageAlt: "View from the summit of Mulkirigala Rock Temple",
          mediaPosition: "left",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.122617140823199,80.73815322201794",
        },
      ],
    },
  ],
};

export default TangalleMulkirigalaRockTempleArticle;