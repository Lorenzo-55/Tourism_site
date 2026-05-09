const KandyNatureGardensArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Kandy", to: "/places/kandy" },
    { label: "Nature and Gardens" },
  ],

  hero: {
    kicker: "Nature & Gardens",
    title: "Nature and Gardens in Kandy",
    subtitle:
      "Botanical gardens, royal forest reserves, riverside landscapes, and mountain hiking areas around Sri Lanka’s hill capital.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kandy/nature-gardens/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Green Escapes Around Kandy",
    paragraphs: [
      "Kandy is surrounded by some of Sri Lanka’s most beautiful natural spaces, from carefully maintained botanical gardens to historic forest reserves and mountain landscapes.",
      "The Royal Botanical Gardens in Peradeniya and Udawattakele Forest Reserve offer easy access to nature close to the city, while the Knuckles Range provides a wilder hiking experience beyond Kandy.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "royal-botanical-gardens",
      kicker: "Botanical Garden",
      title: "Royal Botanical Gardens, Peradeniya",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Royal Botanical Gardens in Peradeniya are located around 5.5 to 6 kilometers west of Kandy’s city center, beside the Mahaweli River.",
        },

        {
          type: "p",
          text: "Covering approximately 147 acres, the gardens are considered among the finest botanical gardens in Sri Lanka and are home to more than 4,000 plant species.",
        },

        {
          type: "split-paragraph",
          heading: "Royal Origins and Botanical History",
          headingLevel: "h3",

          paragraphs: [
            "The site was used as a royal pleasure garden as early as 1371 during the reign of King Wickramabahu III.",
            "In 1821, the British colonial administration formally established it as a botanical garden, initially using it for experiments with commercial crops such as coffee and cinnamon.",
            "The gardens later played an important role in the development and study of tea cultivation after the decline of coffee plantations.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kandy/nature-gardens/royal-botanical-gardens.webp`,
          imageAlt: "Royal Botanical Gardens in Peradeniya",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Highlights and What to See",
        },

        {
          type: "p",
          text: "<strong>Orchid House:</strong> One of the main attractions, featuring exotic and native orchids, including Grammatophyllum speciosum, the world’s largest orchid.",
        },

        {
          type: "p",
          text: "<strong>Great Lawn:</strong> Home to a massive Javanese fig tree whose branches and roots spread like a giant living umbrella.",
        },

        {
          type: "p",
          text: "<strong>Palm Avenues:</strong> Includes the Avenue of Royal Palms and the Avenue of Double Coconut Palms.",
        },

        {
          type: "p",
          text: "<strong>Double Coconut Palm:</strong> A rare palm that produces the largest seed in the plant kingdom.",
        },

        {
          type: "p",
          text: "<strong>Memorial Trees:</strong> Trees planted by notable visitors including Queen Elizabeth II, Prince Philip, and Indira Gandhi.",
        },

        {
          type: "p",
          text: "<strong>Spice Garden:</strong> Displays important Sri Lankan spices such as cinnamon, pepper, and nutmeg.",
        },

        {
          type: "p",
          text: "<strong>Bamboo Collection:</strong> Includes Giant Bamboo of Burma, which can grow up to 40 meters tall.",
        },

        {
          type: "p",
          text: "<strong>Suspension Bridge:</strong> A picturesque bridge over the Mahaweli River.",
        },

        {
          type: "h3",
          text: "Visitor Information",
        },

        {
          type: "p",
          text: "<strong>Opening Hours:</strong> Usually open daily from around 7:30 or 8:00 AM to 5:00 or 5:30 PM.",
        },

        {
          type: "p",
          text: "<strong>Admission:</strong> International adult tickets usually range from around LKR 1,500 to LKR 3,000, with reduced rates for children and students.",
        },

        {
          type: "p",
          text: "<strong>Recommended Duration:</strong> Allow around 2 to 3 hours to explore the gardens properly.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=7.268327646890249,80.59663319503834",
        },
      ],
    },

    {
      type: "text",
      id: "udawattakele-forest-reserve",
      kicker: "Forest Reserve",
      title: "Udawattakele Forest Reserve",
      align: "left",

      content: [
        {
          type: "p",
          text: "Udawattakele Forest Reserve is located directly behind the Temple of the Sacred Tooth Relic and was once known as Uda Wasala Watta, meaning “Garden Above the Royal Palace.”",
        },

        {
          type: "p",
          text: "During the Kandyan Kingdom, the forest was reserved for the royal family and served as a pleasure garden, meditation retreat, and natural defense area during times of war.",
        },

        {
          type: "split-paragraph",
          heading: "The Forbidden Forest",
          headingLevel: "h3",

          paragraphs: [
            "Udawattakele is often remembered as a royal forest because ordinary people were historically restricted from entering it.",
            "Today, it is one of the easiest places in Kandy to experience forest trails, birdlife, monkeys, and quiet natural scenery close to the city center.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kandy/nature-gardens/udawattakele.webp`,
          imageAlt: "Forest trail inside Udawattakele Forest Reserve",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Key Highlights",
        },

        {
          type: "p",
          text: "<strong>Royal Pond:</strong> A historic pond said to have been used by the queens of Kandy.",
        },

        {
          type: "p",
          text: "<strong>Senkanda Cave:</strong> Associated with the hermit Senkanda, who is said to have advised the king to establish the kingdom in this location.",
        },

        {
          type: "p",
          text: "<strong>Pus Wela:</strong> A giant ancient liana or creeper believed to be centuries old.",
        },

        {
          type: "p",
          text: "<strong>Wildlife:</strong> The reserve is a good place for birdwatching and spotting endemic Toque Macaque monkeys.",
        },

        {
          type: "h3",
          text: "Visitor Information",
        },

        {
          type: "p",
          text: "<strong>Opening Hours:</strong> Usually open from 7:00 AM to 5:00 PM.",
        },

        {
          type: "p",
          text: "<strong>Best For:</strong> Short forest walks, birdwatching, nature photography, and quiet breaks from the city.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=7.299059104971165,80.64239256620287",
        },
      ],
    },

    {
      type: "text",
      id: "knuckles-range",
      kicker: "Mountain Hiking",
      title: "Knuckles Range",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Knuckles Range is a beautiful and pristine mountain area located beyond Kandy, known for hiking, misty forests, waterfalls, and dramatic highland scenery.",
        },

        {
          type: "p",
          text: "It is especially suited for day hikes and nature-focused trips for travellers who want a wilder landscape outside the city.",
        },

        {
          type: "button",
          label: "Read the Knuckles Range Chapter",
          to: "/places/knuckles-range",
        },
      ],
    },
  ],
};

export default KandyNatureGardensArticle;