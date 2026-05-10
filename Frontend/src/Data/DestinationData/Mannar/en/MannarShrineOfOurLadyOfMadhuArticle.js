const MannarShrineOfOurLadyOfMadhuArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Mannar", to: "/places/mannar" },
    { label: "Shrine of Our Lady of Madhu" },
  ],

  hero: {
    kicker: "Sacred Pilgrimage Site",
    title: "Shrine of Our Lady of Madhu",
    subtitle:
      "Sri Lanka’s most important Roman Catholic pilgrimage shrine, revered as a place of devotion, unity, refuge, and peace.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Mannar/shrine-of-our-lady-of-madhu/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Sri Lanka’s Holiest Catholic Shrine",
    paragraphs: [
      "The Shrine of Our Lady of Madhu is the most sacred Roman Catholic pilgrimage site in Sri Lanka, dedicated to the Virgin Mary.",
      "Beyond its religious importance, the shrine is widely regarded as a symbol of unity and peace, drawing Tamil and Sinhalese Catholics as well as Buddhist, Hindu, and Muslim pilgrims.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "significance",
      kicker: "Significance",
      title: "A Shrine of Faith, Unity, and Peace",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Shrine of Our Lady of Madhu holds a central place in Sri Lanka’s Catholic tradition.",
        },

        {
          type: "p",
          text: "It is considered the holiest Catholic shrine in the country and is dedicated to Our Lady of Madhu.",
        },

        {
          type: "split-paragraph",
          heading: "Symbol of Unity",
          headingLevel: "h3",
          paragraphs: [
            "The shrine has long been visited by both Tamil and Sinhalese Catholics, making it a rare and meaningful place of shared devotion.",
            "It also attracts Buddhist, Hindu, and Muslim visitors, reinforcing its role as a symbol of racial and religious harmony.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Mannar/shrine-of-our-lady-of-madhu/shrine-exterior.webp`,
          imageAlt: "Shrine of Our Lady of Madhu exterior",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Civil War and Refuge",
        },

        {
          type: "p",
          text: "During the Sri Lankan Civil War from 1983 to 2009, the shrine served as a neutral refuge and demilitarized zone for thousands of displaced civilians.",
        },

        {
          type: "p",
          text: "This role strengthened its identity as a place of peace, protection, and hope during one of the country’s most difficult periods.",
        },

        {
          type: "h3",
          text: "Papal Visit",
        },

        {
          type: "p",
          text: "In January 2015, Pope Francis visited the Shrine of Our Lady of Madhu during his visit to Sri Lanka, highlighting its importance beyond the island itself.",
        },
      ],
    },

    {
      type: "text",
      id: "history-and-origins",
      kicker: "History",
      title: "History and Origins",
      align: "left",

      content: [
        {
          type: "p",
          text: "The history of the Shrine of Our Lady of Madhu goes back more than 400 years.",
        },

        {
          type: "p",
          text: "Its origins are closely connected to Catholic communities who sought refuge during a period of colonial persecution.",
        },

        {
          type: "split-paragraph",
          heading: "Escape from Persecution",
          headingLevel: "h3",
          paragraphs: [
            "The devotion began in 1670, when Catholic families fled persecution under Dutch colonial rule after the Portuguese had been expelled.",
            "About 20 Catholic families carried a venerated statue of Mary from their church in Manthai on the coast and found refuge in the remote area of Maruthamadhu, now known as Madhu.",
            "Later, other Catholics from the Jaffna Peninsula joined them, and the combined communities established a new shrine for the statue.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Mannar/shrine-of-our-lady-of-madhu/madhu-statue.webp`,
          imageAlt: "Religious statue at the Shrine of Our Lady of Madhu",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Development of the Current Church",
        },

        {
          type: "p",
          text: "Although devotion began in the 17th century, the present large church was built in 1872.",
        },

        {
          type: "p",
          text: "The statue received a Papal Coronation in 1924, and the church was consecrated in 1944.",
        },
      ],
    },

    {
      type: "text",
      id: "pilgrimages-and-festivals",
      kicker: "Pilgrimage",
      title: "Pilgrimages and Festivals",
      align: "left",

      content: [
        {
          type: "p",
          text: "The shrine is a year-round destination for pilgrims, but its annual festivals attract especially large crowds.",
        },

        {
          type: "p",
          text: "Pilgrims often travel in groups, stay in nearby pilgrim houses, and participate in religious observances connected to Our Lady of Madhu.",
        },

        {
          type: "h3",
          text: "Main Festival",
        },

        {
          type: "p",
          text: "<strong>August 15:</strong> The largest and most important festival is held on August 15, in honor of the Solemnity of the Assumption of Mary.",
        },

        {
          type: "p",
          text: "This festival coincides with school holidays, allowing many families to make the long journey to the remote shrine.",
        },

        {
          type: "h3",
          text: "Second Festival",
        },

        {
          type: "p",
          text: "<strong>July 2:</strong> A second major festival is traditionally celebrated on July 2.",
        },

        {
          type: "p",
          text: "Pilgrims may also take consecrated Madhu soil, which is traditionally believed to have medicinal properties, especially against snake bites.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=8.854978399864244,80.20304451224267",
        },
      ],
    },
  ],
};

export default MannarShrineOfOurLadyOfMadhuArticle;