const KandyMuseumsHeritageArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Kandy", to: "/places/kandy" },
    { label: "Museums and Heritage" },
  ],

  hero: {
    kicker: "Museums & Heritage",
    title: "Museums and Heritage in Kandy",
    subtitle:
      "Royal artifacts, Kandyan history, tea heritage, and cultural collections in Sri Lanka’s hill capital.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kandy/museums-heritage/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Kandy’s Cultural and Historical Collections",
    paragraphs: [
      "Kandy’s museums preserve the city’s royal legacy, religious heritage, and connection to Sri Lanka’s tea industry.",
      "From the former Royal Palace complex beside the Temple of the Tooth to the historic Hantana Tea Factory, these sites offer a deeper look into the Kandyan Kingdom and the development of Ceylon tea.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "national-museum-of-kandy",
      kicker: "Cultural History Museum",
      title: "National Museum of Kandy",
      align: "left",

      content: [
        {
          type: "p",
          text: "The National Museum of Kandy is an important cultural history museum located beside the Temple of the Sacred Tooth Relic within the former Royal Palace complex.",
        },

        {
          type: "p",
          text: "It focuses mainly on the history, culture, and material heritage of the Kandyan Kingdom from the 17th to 19th centuries.",
        },

        {
          type: "split-paragraph",
          heading: "Palle Vahala",
          headingLevel: "h3",

          paragraphs: [
            "The museum’s main collection is housed in the historic building known as Palle Vahala, meaning “Lower Palace.”",
            "This building originally served as the residence of the queens and royal household of King Sri Vikrama Rajasingha, the last king of Kandy.",
            "Its traditional Kandyan architectural style, including ornate wooden carvings, makes the building itself an important heritage feature.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kandy/museums-heritage/national-museum.webp`,
          imageAlt: "National Museum of Kandy in the former Royal Palace complex",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "The Collection",
        },

        {
          type: "p",
          text: "The museum opened to the public in 1942 and contains more than 5,000 artifacts connected to Kandyan history and culture.",
        },

        {
          type: "p",
          text: "<strong>Royal and Noble Items:</strong> Weapons, jewelry, thrones, ceremonial costumes, and items associated with Kandyan nobility.",
        },

        {
          type: "p",
          text: "<strong>Cultural and Ethnographic Pieces:</strong> Traditional tools, musical instruments, coins, handicrafts, and everyday objects.",
        },

        {
          type: "p",
          text: "<strong>Religious Art:</strong> Exhibits connected to Buddhism and the guardian deities worshipped in Kandy.",
        },

        {
          type: "p",
          text: "<strong>Historical Documents:</strong> A copy of the 1815 agreement ceding the Kandyan provinces to the British is displayed among the museum’s important records.",
        },

        {
          type: "h3",
          text: "Visitor Information",
        },

        {
          type: "p",
          text: "<strong>Opening Hours:</strong> Generally from 9:00 AM to 5:00 PM.",
        },

        {
          type: "p",
          text: "<strong>Closed:</strong> Usually closed on Sundays, Mondays, and public holidays.",
        },

        {
          type: "p",
          text: "<strong>Admission:</strong> An entrance fee applies, usually higher for foreign visitors than locals. Payment is often cash-only in local currency.",
        },

        {
          type: "p",
          text: "<strong>Tip:</strong> Visit early in the morning and combine it with the nearby Temple of the Tooth before the area becomes crowded.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=7.293356165247441,80.64182939503849",
        },
      ],
    },

    {
      type: "text",
      id: "ceylon-tea-museum",
      kicker: "Tea Heritage",
      title: "Ceylon Tea Museum",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Ceylon Tea Museum is one of Kandy’s most interesting heritage attractions for visitors interested in Sri Lanka’s tea industry.",
        },

        {
          type: "p",
          text: "Located in Hantana, around 3 to 5 kilometers south of Kandy city center, the museum is housed inside the former Hantana Tea Factory, built in 1925.",
        },

        {
          type: "split-paragraph",
          heading: "Tea History in the Kandy Hills",
          headingLevel: "h3",

          paragraphs: [
            "The Kandy region was one of the earliest areas where tea was successfully cultivated in Sri Lanka after the decline of the coffee industry.",
            "Because of this history, the former Hantana Tea Factory is a fitting setting for a museum dedicated to Ceylon tea.",
            "The museum explains how tea became one of Sri Lanka’s most important exports and cultural symbols.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kandy/museums-heritage/ceylon-tea-museum.webp`,
          imageAlt: "Ceylon Tea Museum in Hantana near Kandy",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "What to See",
        },

        {
          type: "p",
          text: "<strong>Ground Floor:</strong> Historic tea-processing machinery, including rollers, dryers, and sorters used during the colonial period.",
        },

        {
          type: "p",
          text: "<strong>First Floor:</strong> A library and auditorium with audiovisual presentations about tea history.",
        },

        {
          type: "p",
          text: "<strong>Second Floor:</strong> Exhibits about tea pioneers such as James Taylor and Thomas Lipton, along with vintage tea packaging and artifacts.",
        },

        {
          type: "p",
          text: "<strong>Third Floor:</strong> A café and tea room where visitors can enjoy Ceylon tea and views over Kandy, the hills, and nearby tea plantations.",
        },

        {
          type: "h3",
          text: "Visitor Information",
        },

        {
          type: "p",
          text: "<strong>Opening Hours:</strong> Tuesday to Friday, usually 8:30 AM to 4:00 PM. Saturday and Sunday are often 8:00 AM to 5:00 PM.",
        },

        {
          type: "p",
          text: "<strong>Closed:</strong> Mondays and occasionally Poya days.",
        },

        {
          type: "p",
          text: "<strong>Admission:</strong> Foreign adult tickets are often around LKR 1,000, while foreign child tickets are around LKR 500. Prices may change.",
        },

        {
          type: "p",
          text: "<strong>Guides:</strong> Guided tours are often available and help explain the tea production process in more detail.",
        },

        {
          type: "p",
          text: "The Ceylon Tea Museum is a useful stop for understanding how tea shaped the economy, landscapes, and identity of Sri Lanka’s hill country.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=7.268606076320949,80.63254156620272",
        },
      ],
    },
  ],
};

export default KandyMuseumsHeritageArticle;