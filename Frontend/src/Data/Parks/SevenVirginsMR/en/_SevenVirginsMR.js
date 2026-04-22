const SevenVirginsMountainRangeArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Seven Virgins Mountain Range" },
  ],

  hero: {
    kicker: "Highlands & Peaks",
    title: "Seven Virgins Mountain Range",
    subtitle: "A mist-covered mountain range in Sri Lanka’s central highlands, known for its striking peaks and historic significance.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/SevenVirgins/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Saptha Kanya – The Seven Maidens",
    paragraphs: [
      "The Seven Virgins Mountain Range is a prominent and picturesque range in Sri Lanka’s central highlands, known for both its natural beauty and a deeply significant historical event. Locally referred to as Saptha Kanya, meaning 'Seven Virgins' or 'Seven Maidens' in Sinhala, the range is a recognizable feature of the region.",
      "With its mist-covered peaks and surrounding landscapes of forest and tea estates, the range stands as both a scenic landmark and a place of historical memory.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "features",
      kicker: "Geography",
      title: "Key Features",
      align: "left",
      content: [
        {
          type: "h4",
          text: "Location",
        },
        {
          type: "p",
          text: "The range is situated near the town of Maskeliya in the Nuwara Eliya District. It forms a striking backdrop to the Maskeliya Reservoir (Maussakelle Reservoir) and the surrounding Laxapana area.",
        },

        {
          type: "h4",
          text: "Composition",
        },
        {
          type: "p",
          text: "As the name suggests, the range consists of seven distinct peaks or ridges. The highest peak rises to approximately <strong>1,569 meters (5,148 feet)</strong>, making it a notable feature within the central highlands.",
        },

        {
          type: "split-paragraph",
          heading: "Natural Beauty",
          headingLevel: "h4",
          paragraphs: [
            "The mountains are often shrouded in mist and covered in lush rainforest vegetation alongside rolling tea estates, creating a dramatic and ever-changing landscape.",
            "The area offers panoramic views of surrounding valleys, including nearby waterfalls such as Laxapana Falls and distant landmarks like <em>Adam’s Peak (Sri Pada)</em>, making it especially appealing for trekking and nature exploration.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/SevenVirgins/landscape.webp`,
          imageAlt: "Seven Virgins Mountain Range landscape",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "history",
      kicker: "History",
      title: "The Martinair Flight 138 Tragedy",
      align: "left",
      content: [
        {
          type: "p",
          text: "The Seven Virgins Mountain Range is most famously associated with Sri Lanka’s deadliest aviation disaster, a tragic event that has become part of the area’s history.",
        },

        {
          type: "h4",
          text: "The Crash",
        },
        {
          type: "p",
          text: "On <strong>December 4, 1974</strong>, Martinair Flight 138, a chartered DC-8 carrying Indonesian Hajj pilgrims to Mecca, crashed into the fifth mountain of the range during its approach.",
        },

        {
          type: "h4",
          text: "Casualties",
        },
        {
          type: "p",
          text: "All <strong>191 people on board</strong> (182 passengers and 9 crew members) lost their lives in the disaster, making it the deadliest aviation accident in Sri Lanka’s history.",
        },

        {
          type: "h4",
          text: "Memorial",
        },
        {
          type: "p",
          text: "A small memorial near Norton Bridge, including a recovered aircraft tire, commemorates those who died. The crash site itself remains a place of reflection, and the story is deeply embedded in local history and folklore.",
        },

        {
          type: "p",
          text: "Today, the range represents both natural beauty and historical significance, offering challenging hikes alongside a quiet reminder of the past.",
        },
      ],
    },
  ],
};

export default SevenVirginsMountainRangeArticle;