const MannarAdamsBridgeArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Mannar", to: "/places/mannar" },
    { label: "Adam's Bridge" },
  ],

  hero: {
    kicker: "Geology & Mythology",
    title: "Adam’s Bridge",
    subtitle:
      "A chain of shoals, sandbars, and coral reefs linking Mannar Island with India, shaped by geology, mythology, and modern controversy.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Mannar/adams-bridge/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Natural Formation with Legendary Meaning",
    paragraphs: [
      "Adam’s Bridge, better known in India as Rama Setu, is one of South Asia’s most fascinating geographical features.",
      "Stretching between Mannar Island in Sri Lanka and Pamban Island in India, it combines shallow coastal geology, religious mythology, maritime history, and environmental importance.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "what-is-adams-bridge",
      kicker: "Geography",
      title: "What is Adam’s Bridge?",
      align: "left",

      content: [
        {
          type: "p",
          text: "Adam’s Bridge is a chain of shoals, sandbars, and small coral reefs stretching for approximately 48 kilometers between Dhanushkodi on Pamban Island in India and Mannar Island in Sri Lanka.",
        },

        {
          type: "p",
          text: "The formation separates the Gulf of Mannar to the southwest from the Palk Strait to the northeast.",
        },

        {
          type: "split-paragraph",
          heading: "Shallow Waters and Sandbars",
          headingLevel: "h3",
          paragraphs: [
            "The waters around Adam’s Bridge are extremely shallow, rarely deeper than 1 to 3 meters.",
            "Because of this shallow depth, large ships cannot pass through the area, making the formation a major natural obstruction between the two coasts.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Mannar/adams-bridge/sandbars.webp`,
          imageAlt: "Sandbars and shallow waters of Adam's Bridge",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Geological Origin",
        },

        {
          type: "p",
          text: "Geologists often describe Adam’s Bridge as a natural formation, similar to a tombolo, created through the accumulation of sediment and coral.",
        },

        {
          type: "p",
          text: "Some studies suggest that certain stone formations may be older than the sand supporting them, which keeps the exact geological history of the structure a subject of continued debate.",
        },
      ],
    },

    {
      type: "text",
      id: "mythological-names",
      kicker: "Mythology",
      title: "Mythological Names and Meanings",
      align: "left",

      content: [
        {
          type: "p",
          text: "The structure is known by two prominent names: Adam’s Bridge and Rama Setu.",
        },

        {
          type: "p",
          text: "Each name reflects a different religious and cultural tradition connected to Sri Lanka and South Asia.",
        },

        {
          type: "split-paragraph",
          heading: "Rama Setu in Hindu Tradition",
          headingLevel: "h3",
          paragraphs: [
            "In the ancient Sanskrit epic <em>Ramayana</em>, the bridge is said to have been built by Rama and his army of Vanaras, led by Nala.",
            "According to the story, the bridge allowed Rama to cross the strait to Lanka and rescue Sita from Ravana.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Mannar/adams-bridge/rama-setu.webp`,
          imageAlt: "Coastal view associated with Rama Setu near Mannar",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Adam’s Bridge in Islamic Tradition",
        },

        {
          type: "p",
          text: "The name Adam’s Bridge was likely popularized by British cartographers from around 1804.",
        },

        {
          type: "p",
          text: "It is connected to the tradition that Adam travelled across this bridge after being banished from the Garden of Eden, eventually reaching Adam’s Peak in Sri Lanka where he left a footprint.",
        },
      ],
    },

    {
      type: "text",
      id: "current-status-and-controversies",
      kicker: "Modern Issues",
      title: "Current Status and Controversies",
      align: "left",

      content: [
        {
          type: "p",
          text: "Adam’s Bridge remains important not only as a natural and cultural landmark, but also as a subject of maritime and political debate.",
        },

        {
          type: "h3",
          text: "Maritime Obstruction",
        },

        {
          type: "p",
          text: "Because the water is too shallow for large ships, vessels travelling between India’s west and east coasts must usually sail around Sri Lanka.",
        },

        {
          type: "p",
          text: "This adds hundreds of nautical miles and many additional hours to the journey.",
        },

        {
          type: "h3",
          text: "Sethusamudram Canal Project",
        },

        {
          type: "p",
          text: "The Sethusamudram Canal Project is a controversial Indian proposal intended to dredge the shallow sandbanks and create a shipping channel.",
        },

        {
          type: "p",
          text: "The project has faced strong opposition from Hindu groups and political parties who regard Rama Setu as a sacred structure that should not be damaged.",
        },

        {
          type: "p",
          text: "It has been delayed and repeatedly challenged in the Indian Supreme Court.",
        },
      ],
    },

    {
      type: "text",
      id: "visit-from-mannar",
      kicker: "Visitor Experience",
      title: "Visiting Adam’s Bridge from Mannar",
      align: "left",

      content: [
        {
          type: "p",
          text: "From Mannar, the Sri Lankan end of Adam’s Bridge can be experienced as a series of sandbars extending into the sea.",
        },

        {
          type: "p",
          text: "Visitors can travel toward the westernmost tip of Mannar Island, where the first shoals may be visible on clear days.",
        },

        {
          type: "split-paragraph",
          heading: "Nature and Conservation",
          headingLevel: "h3",
          paragraphs: [
            "The area around Mannar and Adam’s Bridge is important for conservation because of its sandbars, coral reefs, coastal habitats, and migratory birdlife.",
            "Its isolated shoreline and shallow marine environment give the region a distinctive character compared with the busier coastal areas of Sri Lanka.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Mannar/adams-bridge/coastal-landscape.webp`,
          imageAlt: "Coastal landscape near Adam's Bridge in Mannar",
          mediaPosition: "right",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=9.098934524367671,79.57316614230083",
        },
      ],
    },
  ],
};

export default MannarAdamsBridgeArticle;