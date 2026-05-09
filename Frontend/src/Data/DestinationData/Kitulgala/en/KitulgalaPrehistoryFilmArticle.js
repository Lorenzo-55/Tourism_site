const KitulgalaPrehistoryFilmArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Kitulgala", to: "/places/kitulgala" },
    { label: "Prehistory & Film" },
  ],

  hero: {
    kicker: "Archaeology & Cinema",
    title: "Prehistory & Film",
    subtitle:
      "Ancient human history and Hollywood filmmaking in the rainforests and rivers of Kitulgala.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kitulgala/prehistory-film/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Ancient Discoveries and Cinematic Legacy",
    paragraphs: [
      "Kitulgala is known not only for adventure sports and rainforest scenery, but also for its remarkable archaeological importance and connection to classic Hollywood cinema.",
      "The area contains one of Sri Lanka’s most important prehistoric cave sites and later became internationally famous as the filming location for the Academy Award-winning movie <em>The Bridge on the River Kwai</em>.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "belilena-cave",
      kicker: "Prehistoric Archaeology",
      title: "Belilena Cave",
      align: "left",

      content: [
        {
          type: "p",
          text: "Belilena Cave, also known as Kitulgala Belilena, is one of the most important prehistoric archaeological sites in Sri Lanka and South Asia.",
        },

        {
          type: "p",
          text: "The cave is famous for discoveries connected to the prehistoric Balangoda Man, considered among the earliest anatomically modern humans identified in South Asia.",
        },

        {
          type: "split-paragraph",
          heading: "Home of the Balangoda Man",
          headingLevel: "h3",

          paragraphs: [
            "Archaeological excavations conducted between 1978 and 1983 uncovered evidence of human occupation dating back as far as 32,000 years.",
            "Skeletal remains of several individuals identified as Balangoda Man were found in layers dating to around 16,000 years before present.",
            "These discoveries made Belilena one of the most significant prehistoric cave sites in Sri Lanka.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/prehistory-film/belilena-cave.webp`,
          imageAlt: "Belilena Cave near Kitulgala",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Major Archaeological Discoveries",
        },

        {
          type: "p",
          text: "<strong>Geometric Microliths:</strong> Extremely ancient refined stone tools less than 4 cm long, some dating back nearly 30,000 years.",
        },

        {
          type: "p",
          text: "<strong>Technological Importance:</strong> The tools demonstrated advanced prehistoric technology in Sri Lanka far earlier than previously expected.",
        },

        {
          type: "p",
          text: "<strong>Bone Tools and Fire:</strong> Researchers discovered evidence of tool-making and controlled use of fire.",
        },

        {
          type: "p",
          text: "<strong>Dietary Evidence:</strong> Animal remains, wild breadfruit, and kekuna nuts provided insight into prehistoric food habits.",
        },

        {
          type: "h3",
          text: "Location and Trekking Experience",
        },

        {
          type: "p",
          text: "The cave is located around 8 kilometers from Kitulgala and is usually reached by hiking through the Makandawa Forest Reserve and nearby tea or rubber plantations.",
        },

        {
          type: "p",
          text: "During rainy periods, the cave entrance may appear partially hidden behind flowing water, adding to its dramatic atmosphere.",
        },

        {
          type: "split-paragraph",
          heading: "Visiting Belilena",
          headingLevel: "h4",

          paragraphs: [
            "Visiting the cave combines hiking, rainforest scenery, and archaeological exploration.",
            "The route includes uphill sections and may require moderate physical fitness depending on conditions.",
            "Guided tours are recommended to better understand the site’s archaeological significance.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/prehistory-film/makandawa-trail.webp`,
          imageAlt: "Forest trail leading to Belilena Cave",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "<strong>Best Time to Visit:</strong> The dry season from roughly December to April offers easier trekking conditions.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=7.002386176376838,80.43577066620097",
        },
      ],
    },

    {
      type: "text",
      id: "bridge-on-the-river-kwai",
      kicker: "Hollywood Legacy",
      title: "The Bridge on the River Kwai",
      align: "left",

      content: [
        {
          type: "p",
          text: "Kitulgala gained international recognition during the 1950s as the main filming location for the classic war film <em>The Bridge on the River Kwai</em>.",
        },

        {
          type: "p",
          text: "The movie, released in 1957, became one of the most famous war films ever made and won multiple Academy Awards.",
        },

        {
          type: "split-paragraph",
          heading: "Filming in Kitulgala",
          headingLevel: "h3",

          paragraphs: [
            "The enormous wooden bridge featured in the film was specially constructed across the Kelani River system near Kitulgala.",
            "The bridge was ultimately destroyed during the movie’s dramatic climax scene.",
            "Today, visitors can still see some of the original concrete foundations remaining near the riverbank.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/prehistory-film/river-kwai-location.webp`,
          imageAlt: "Kelani River filming location in Kitulgala",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Other Sri Lankan Filming Locations",
        },

        {
          type: "p",
          text: "<strong>Mount Lavinia Hotel:</strong> Used as the military hospital where William Holden’s character recuperates.",
        },

        {
          type: "p",
          text: "<strong>Peradeniya Botanical Gardens:</strong> Used as the British headquarters scenes in the film.",
        },

        {
          type: "h3",
          text: "The Real Bridge",
        },

        {
          type: "p",
          text: "Although the movie was filmed in Sri Lanka, the real story was inspired by the Burma Railway built during World War II in Thailand and Myanmar.",
        },

        {
          type: "p",
          text: "The actual bridge connected to the story crosses the Khwae Yai River at Kanchanaburi in Thailand and differs significantly from the large wooden bridge created for the film.",
        },

        {
          type: "split-paragraph",
          heading: "Modern Kitulgala",
          headingLevel: "h4",

          paragraphs: [
            "Today, the former filming area around the Kelani River is better known for white-water rafting and adventure tourism.",
            "However, the cinematic connection still remains one of Kitulgala’s most famous historical associations.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/prehistory-film/kelani-river.webp`,
          imageAlt: "Kelani River in Kitulgala",
          mediaPosition: "left",
        },
      ],
    },
  ],
};

export default KitulgalaPrehistoryFilmArticle;