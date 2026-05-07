const CultureAndHistoryArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Hambantota", to: "/places/hambantota" },
    { label: "Culture and History" },
  ],

  hero: {
    kicker: "Culture & Heritage",
    title: "Culture and History",
    subtitle:
      "Ancient temples, sacred pilgrimage sites, and historical landmarks across the Hambantota region.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Hambantota/culture1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Sacred and Historic Sites of Hambantota",
    paragraphs: [
      "The Hambantota region is deeply connected to Sri Lanka’s religious traditions, ancient kingdoms, and historical legends.",
      "Rock temples, sacred stupas, pilgrimage centers, and coastal monasteries across the area preserve centuries of Buddhist heritage while also reflecting the region’s cultural diversity and folklore.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "kataragama-temple",
      kicker: "Pilgrimage Site",
      title: "Kataragama Temple",
      align: "left",

      content: [
        {
          type: "split-paragraph",
          heading: "",
          headingLevel: "h4",

          paragraphs: [
            "Kataragama Temple is one of the most important religious sites in Sri Lanka.",
            "The sacred complex attracts Buddhist, Hindu, and Muslim pilgrims from across the country and is known for its multi-religious significance and annual pilgrimage traditions.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hambantota/culture2.webp`,
          imageAlt: "Kataragama Temple complex",
          mediaPosition: "right",
        },

        {
          type: "button",
          label: "Read the Kataragama Chapter",
          to: "/places/kataragama",
        },
      ],
    },

    {
      type: "text",
      id: "mulkirigala-rock-temple",
      kicker: "Rock Temple",
      title: "Mulkirigala Rock Temple",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Mulkirigala Rock Temple, officially known as the Mulkirigala Raja Maha Vihara, is an ancient Buddhist temple complex built into a massive natural rock in the Southern Province.",
        },

        {
          type: "p",
          text: "Because of its dramatic setting and multi-tiered structure, it is often referred to as “Little Sigiriya” by locals.",
        },

        {
          type: "h3",
          text: "Location and Structure",
        },

        {
          type: "p",
          text: "<strong>Location:</strong> The temple is located in Mulkirigala in the Hambantota District, approximately 17–20 km inland from Tangalle.",
        },

        {
          type: "p",
          text: "<strong>The Rock:</strong> The temple rises around 205 meters above the surrounding landscape and offers panoramic views from the summit.",
        },

        {
          type: "p",
          text: "<strong>Terraces and Caves:</strong> The complex is spread across five terraced levels connected by more than 500 stone steps carved into the rock face.",
        },

        {
          type: "split-paragraph",
          heading: "Terraced Levels",
          headingLevel: "h4",

          paragraphs: [
            "<strong>Lower Terrace (Patha Maluwa):</strong> Contains the first cave temples.",
            "<strong>Bo Tree Terrace (Bodhi Maluwa):</strong> Home to one of the 32 saplings of the sacred Jaya Sri Maha Bodhi tree from Anuradhapura.",
            "<strong>Great King’s Temple Terrace (Raja Maha Vihara Maluwa):</strong> Contains additional cave shrines.",
            "<strong>Upper Bo Tree Terrace (Uda Bodhi Maluwa)</strong>",
            "<strong>Chetiya Terrace (Chaitya Maluwa):</strong> The highest level, crowned by a stupa believed to contain Buddha relics.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hambantota/culture3.webp`,
          imageAlt: "Mulkirigala Rock Temple terraces",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Historical and Cultural Significance",
        },

        {
          type: "p",
          text: "<strong>Ancient Origins:</strong> The monastery is believed to date back to the 3rd century BCE and is associated with King Saddhatissa, the brother of King Dutugemunu.",
        },

        {
          type: "p",
          text: "Ancient Brahmi inscriptions confirm its early use, and it is traditionally considered one of the 64 temples built by King Kavantissa.",
        },

        {
          type: "p",
          text: "<strong>Art and Architecture:</strong> The cave temples contain Kandyan-era murals, frescoes, reclining Buddha statues, and numerous seated and standing Buddha images.",
        },

        {
          type: "p",
          text: "<strong>The Dutch Connection:</strong> Dutch rulers once referred to the rock as “Adam’s Berg,” believing it to be linked to the resting place of Adam and Eve.",
        },

        {
          type: "p",
          text: "<strong>Mahavamsa Discovery:</strong> British civil servant George Turnour discovered the Vamsattappakasini or Tika at the site, helping with the translation of the ancient Mahavamsa chronicle.",
        },

        {
          type: "h3",
          text: "Visitor Information",
        },

        {
          type: "p",
          text: "<strong>Best Time:</strong> Early morning or late afternoon is recommended to avoid the intense midday heat during the climb.",
        },

        {
          type: "p",
          text: "<strong>Dress Code:</strong> Shoulders and knees must be covered, and footwear and hats must be removed before entering temple areas.",
        },

        {
          type: "p",
          text: "<strong>Photography:</strong> Photography is often restricted inside cave temples and shrine rooms.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=4PCQ%2BX7P%2C%20Mulgirigala%2C%20Sri%20Lanka",
        },
      ],
    },

    {
      type: "text",
      id: "tissamaharama-vihara",
      kicker: "Ancient Temple",
      title: "Tissamaharama Raja Maha Vihara",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Tissamaharama Raja Maha Vihara is one of Sri Lanka’s most important ancient Buddhist temples and one of the island’s sacred Solosmasthana sites.",
        },

        {
          type: "p",
          text: "It is traditionally believed that the Buddha consecrated the site during his third visit to Sri Lanka while meditating with 500 arhats.",
        },

        {
          type: "split-paragraph",
          heading: "The Tissamaharama Dagoba",
          headingLevel: "h3",

          paragraphs: [
            "The temple’s defining feature is the massive Tissamaharama Dagoba.",
            "The stupa stands approximately 47 meters high and is one of the largest stupas in Sri Lanka.",
            "It is built in the distinctive “Water Bubble Shape” style known as Bubbulakara.",
            "The dagoba is believed to enshrine sacred relics of the Buddha, possibly including the frontal-bone relic or the left tooth relic.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hambantota/culture4.webp`,
          imageAlt: "Tissamaharama Raja Maha Vihara",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Historical Importance",
        },

        {
          type: "p",
          text: "The temple was one of the four major Buddhist monasteries established shortly after Buddhism arrived in Sri Lanka during the 3rd century BCE.",
        },

        {
          type: "p",
          text: "From the 3rd century BCE until the 11th century CE, it served as an important educational and religious center for the Ruhuna Kingdom.",
        },

        {
          type: "p",
          text: "<strong>Founding:</strong> The monastery is associated with King Mahanaga, brother of King Devanampiyatissa.",
        },

        {
          type: "p",
          text: "<strong>Expansion:</strong> King Kavantissa significantly enlarged the complex and built the main stupa.",
        },

        {
          type: "h3",
          text: "Visitor Information",
        },

        {
          type: "p",
          text: "<strong>Location:</strong> The temple is located in Tissamaharama, a popular base town for safaris to Yala National Park.",
        },

        {
          type: "p",
          text: "<strong>Dress Code:</strong> Visitors must cover shoulders and knees.",
        },

        {
          type: "p",
          text: "<strong>Footwear:</strong> Shoes and hats must be removed before entering temple grounds.",
        },

        {
          type: "p",
          text: "<strong>Best Time:</strong> Early morning or evening visits are recommended for cooler weather and to witness daily pooja rituals.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=77JR%2B32%20Tissamaharama%2C%20Sri%20Lanka",
        },
      ],
    },

    {
      type: "text",
      id: "kirinda-vihara",
      kicker: "Coastal Temple",
      title: "Kirinda Vihara Maha Devi Temple",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Kirinda Vihara Maha Devi Temple, also known as Kirinda Raja Maha Viharaya, is a scenic ancient Buddhist temple overlooking the Indian Ocean.",
        },

        {
          type: "p",
          text: "The temple is especially famous for its connection to Queen Viharamahadevi, one of the most celebrated figures in Sri Lankan history.",
        },

        {
          type: "h3",
          text: "Location and Views",
        },

        {
          type: "p",
          text: "The temple is perched on a rocky outcrop above the coastal village of Kirinda in the Hambantota District.",
        },

        {
          type: "p",
          text: "Visitors climb a series of steps to reach panoramic views of the Indian Ocean, Kirinda fishing harbour, nearby sand dunes, and, on clear days, the distant Great Basses Reef Lighthouse.",
        },

        {
          type: "p",
          text: "Its elevated position also provided refuge for local residents during the 2004 Indian Ocean tsunami.",
        },

        {
          type: "split-paragraph",
          heading: "The Legend of Queen Viharamahadevi",
          headingLevel: "h3",

          paragraphs: [
            "According to legend, King Kelani Tissa angered the gods through a sacrilegious act, causing the sea to flood his kingdom.",
            "To save the land, his daughter was placed in a golden boat and set adrift as a sacrifice.",
            "The sea calmed immediately, and the princess survived, eventually washing ashore near Kirinda.",
            "She was later discovered by King Kavantissa of Ruhuna, who married her and named her Viharamahadevi.",
            "King Kavantissa is believed to have built the original dagoba at the site to commemorate her miraculous survival.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hambantota/culture5.webp`,
          imageAlt: "Kirinda Vihara overlooking the ocean",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Main Attractions",
        },

        {
          type: "p",
          text: "<strong>The Stupa:</strong> A white dagoba at the summit believed to have been built by King Kavantissa.",
        },

        {
          type: "p",
          text: "<strong>Statue of Queen Viharamahadevi:</strong> A modern statue honoring the queen’s sacrifice and courage.",
        },

        {
          type: "p",
          text: "<strong>Shrine Rooms and Devalaya:</strong> Includes Buddhist shrines and a devalaya reflecting Sri Lanka’s religious coexistence.",
        },

        {
          type: "p",
          text: "<strong>Ancient Inscriptions:</strong> Rock inscriptions provide archaeological insight into the area’s political and religious history.",
        },

        {
          type: "p",
          text: "<strong>Royal Insignia:</strong> Carvings associated with King Kavantissa are believed to mark the queen’s landing place.",
        },

        {
          type: "h3",
          text: "Visitor Tips",
        },

        {
          type: "p",
          text: "<strong>Dress Modestly:</strong> Shoulders and knees should be covered.",
        },

        {
          type: "p",
          text: "<strong>Remove Footwear:</strong> Shoes and hats must be removed before entering temple grounds.",
        },

        {
          type: "p",
          text: "<strong>Best Time:</strong> Early morning and sunset are especially recommended for cooler weather and scenic coastal views.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=3J39%2B557%2C%20Kirinda%20Puhulwella%2C%20Sri%20Lanka",
        },
      ],
    },
  ],
};

export default CultureAndHistoryArticle;