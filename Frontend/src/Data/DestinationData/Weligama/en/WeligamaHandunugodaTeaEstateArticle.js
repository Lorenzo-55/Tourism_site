const WeligamaHandunugodaTeaEstateArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Weligama", to: "/places/weligama" },
    { label: "Handunugoda Tea Estate" },
  ],

  hero: {
    kicker: "Tea Estate Visit",
    title: "Handunugoda Tea Estate",
    subtitle:
      "A rare coastal tea estate near Ahangama known for Virgin White Tea, traditional production methods, and guided tea tastings.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Weligama/handunugoda-tea-estate/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Coastal Tea Plantation Near Weligama",
    paragraphs: [
      "Handunugoda Tea Estate is a distinctive tea plantation near Ahangama, within easy reach of Weligama and Sri Lanka’s southern coast.",
      "Unlike the highland tea estates of Nuwara Eliya and Hatton, Handunugoda is known for its low-country coastal setting, diversified plantation landscape, and its famous luxury tea known as Virgin White Tea.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "coastal-tea-estate",
      kicker: "Coastal Plantation",
      title: "A Tea Estate Close to the Sea",
      align: "left",

      content: [
        {
          type: "p",
          text: "Handunugoda Tea Estate is widely regarded as one of the closest tea plantations in the world to the sea.",
        },

        {
          type: "p",
          text: "Its coastal location gives it a very different character from Sri Lanka’s famous hill-country tea estates.",
        },

        {
          type: "split-paragraph",
          heading: "A Diversified Working Estate",
          headingLevel: "h3",

          paragraphs: [
            "The estate covers around 200 acres and is privately owned as a working plantation.",
            "In addition to tea, the estate also grows rubber, cinnamon, coconut, and pepper.",
            "This mix of crops gives Handunugoda a varied landscape and makes the visit feel more like a broader plantation experience than a standard tea factory tour.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Weligama/handunugoda-tea-estate/coastal-tea-estate.webp`,
          imageAlt: "Tea plantation landscape at Handunugoda Tea Estate",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "virgin-white-tea",
      kicker: "Signature Tea",
      title: "The Famous Virgin White Tea",
      align: "left",

      content: [
        {
          type: "p",
          text: "Handunugoda is internationally known for its flagship Virgin White Tea, one of the estate’s most unusual and expensive products.",
        },

        {
          type: "p",
          text: "The tea is inspired by an ancient Chinese imperial tea ritual and is produced with a focus on purity, delicacy, and minimal handling.",
        },

        {
          type: "split-paragraph",
          heading: "Untouched by Human Hands",
          headingLevel: "h3",

          paragraphs: [
            "The production process is designed so the tea buds are never touched by bare human hands.",
            "Workers use soft gloves and small scissors to cut the unopened silver tea buds.",
            "The buds are collected into clean pouches or bowls before being naturally dried and carefully packaged.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Weligama/handunugoda-tea-estate/virgin-white-tea.webp`,
          imageAlt: "Virgin White Tea production at Handunugoda Tea Estate",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Rarity and Value",
        },

        {
          type: "p",
          text: "Because the tea is made only from carefully selected unopened buds, production is slow and limited.",
        },

        {
          type: "p",
          text: "A picker may collect only a small quantity of buds in a day, making Virgin White Tea a rare luxury product.",
        },

        {
          type: "p",
          text: "The tea is also marketed for its naturally high antioxidant content and delicate flavor profile.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-experience",
      kicker: "Visitor Experience",
      title: "Tours, Factory Visit, and Tea Tasting",
      align: "left",

      content: [
        {
          type: "p",
          text: "Handunugoda is a popular visitor attraction and offers a detailed introduction to tea cultivation and production.",
        },

        {
          type: "split-paragraph",
          heading: "Guided Estate Tour",
          headingLevel: "h3",

          paragraphs: [
            "Visitors are usually taken through the plantation to see the tea bushes and learn about the estate’s cultivation methods.",
            "The tour then continues into the factory, where the main stages of tea processing are explained.",
            "The visit also introduces the special production method behind Virgin White Tea.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Weligama/handunugoda-tea-estate/factory-tour.webp`,
          imageAlt: "Tea factory tour at Handunugoda Tea Estate",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Factory and Museum",
        },

        {
          type: "p",
          text: "The factory contains vintage British-made tea machinery, some of it more than 145 years old.",
        },

        {
          type: "p",
          text: "Because the equipment is still preserved and displayed as part of the visitor route, the factory functions partly as a working museum.",
        },

        {
          type: "h3",
          text: "Tea Tasting",
        },

        {
          type: "p",
          text: "Most visits end with a complimentary tea tasting session.",
        },

        {
          type: "p",
          text: "Guests can sample a range of teas produced on the estate, including black tea, green tea, oolong, and Virgin White Tea.",
        },

        {
          type: "p",
          text: "The estate produces more than 25 varieties of tea, giving visitors a broad introduction to Sri Lankan tea beyond the usual highland black teas.",
        },
      ],
    },

    {
      type: "text",
      id: "estate-owner",
      kicker: "Tea Heritage",
      title: "Malinga Herman Gunaratne and the Estate Legacy",
      align: "left",

      content: [
        {
          type: "p",
          text: "Handunugoda Tea Estate is owned by Malinga Herman Gunaratne, a well-known figure in Sri Lanka’s tea industry.",
        },

        {
          type: "p",
          text: "His passion for tea production and experimentation helped shape Handunugoda’s reputation as one of the most distinctive tea estates on the southern coast.",
        },

        {
          type: "p",
          text: "The estate stands out because it combines traditional machinery, coastal cultivation, diversified crops, and unusual specialty teas within one visitor-friendly plantation.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.012396001651601,80.36393459503122",
        },
      ],
    },
  ],
};

export default WeligamaHandunugodaTeaEstateArticle;