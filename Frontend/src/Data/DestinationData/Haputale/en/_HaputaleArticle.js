const HaputaleArticle = {
  breadcrumbItems: [
    { label: "Places", to: "/places" },
    { label: "Haputale", to: "/places/haputale" },
  ],

  hero: {
    kicker: "Hill Country",
    title: "Haputale",
    subtitle:
      "A quiet mountain village known for tea estates, colonial heritage, and sweeping views across Sri Lanka’s southern plains.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Haputale/hero/haputale-hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Tea Country, Views, and Colonial Legacy",
    paragraphs: [
      "Haputale is a charming and less touristy mountain village in Sri Lanka's Hill Country, known for its breathtaking views, colonial history, and tea plantations.",
      "It offers a quieter, more authentic alternative to busier destinations, while still capturing everything that defines the highlands—cool climate, mist-covered hills, and endless tea estates.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "haputale-history",
      kicker: "History",
      title: "Tea, Empire, and the Making of Haputale",
      align: "left",
      content: [
        {
          type: "p",
          text: "The history of Haputale is closely tied to the British colonial period and the rise of the Ceylon tea industry. What is now a peaceful mountain town was once part of a rapidly expanding plantation economy driven by global demand for tea.",
        },
        {
          type: "p",
          text: "The region is strongly associated with Sir Thomas Lipton, a key figure in the global tea trade. In the late 19th century, he purchased tea plantations in the area and established the Dambatenne Tea Factory in 1890, one of the earliest and largest tea factories in the Uva region, which still operates today.",
        },
        {
          type: "split-paragraph",
          heading: "Lipton’s Legacy",
          headingLevel: "h4",
          paragraphs: [
            "Haputale is considered the birthplace of the world-famous Lipton tea brand. From here, Lipton developed his plantations and built a system that would eventually supply tea to markets around the world.",
            "The famous Lipton’s Seat viewpoint is named after him, as it was his favorite place to observe his vast tea estates. Even today, it remains one of the most iconic viewpoints in Sri Lanka.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Haputale/history/lipton-seat.webp`,
          imageAlt: "Lipton's Seat viewpoint",
          mediaPosition: "right",
        },
        {
          type: "p",
          text: "British colonial influence is still clearly visible in Haputale. Structures such as Adisham Bungalow, originally a colonial residence and now a monastery, reflect the architectural legacy of the period.",
        },
        {
          type: "p",
          text: "The railway network built during this era also remains a defining feature. The train journey from Kandy to Ella, passing through Haputale, is considered one of the most scenic rail routes in the world and continues to attract travelers today.",
        },
      ],
    },

    {
      type: "text",
      id: "haputale-present",
      kicker: "Present Day",
      title: "Haputale Today",
      align: "left",
      content: [
        {
          type: "p",
          text: "Today, Haputale is known as a quieter alternative to nearby Ella, offering a more relaxed and less crowded experience of Sri Lanka’s Hill Country.",
        },
        {
          type: "p",
          text: "It serves as an excellent base for exploring tea plantations, enjoying scenic viewpoints, and experiencing local life without the intensity of more tourist-heavy destinations.",
        },
        {
          type: "split-paragraph",
          heading: "Location and Climate",
          headingLevel: "h4",
          paragraphs: [
            "Haputale sits at an altitude of approximately 1,431 to 1,500 meters above sea level, giving it a cool climate compared to the lowlands. The area is often covered in mist and cloud, creating a constantly changing landscape.",
            "On clear days, the views stretch far beyond the mountains, sometimes all the way to the southern coast, making it one of the most visually striking locations in the country.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Haputale/main/views.webp`,
          imageAlt: "Views from Haputale",
          mediaPosition: "left",
        },
        {
          type: "p",
          text: "The combination of altitude, climate, and landscape makes Haputale ideal for both relaxation and exploration, whether through short walks, scenic train journeys, or visits to nearby estates and viewpoints.",
        },
      ],
    },

    {
      type: "cards",
      kicker: "Explore",
      title: "Experiences and Highlights",
      align: "center", // "left" | "center"
      items: [
        {
          title: "Tea & Colonial Heritage",
          description:
            "Explore historic tea plantations, the Dambatenne Tea Factory, and colonial-era landmarks like Adisham Bungalow.",
          image: `${import.meta.env.BASE_URL}Destinations/Haputale/cards/tea-heritage.webp`,
          imageAlt: "Tea plantations in Haputale",
        },
        {
          title: "Nature & Scenic Attractions",
          description:
            "Enjoy sweeping viewpoints such as Lipton’s Seat and panoramic landscapes stretching across Sri Lanka’s southern plains.",
          image: `${import.meta.env.BASE_URL}Destinations/Haputale/cards/scenic.webp`,
          imageAlt: "Scenic views in Haputale",
        },
        {
          title: "Experiences",
          description:
            "Take one of the world’s most scenic train journeys, walk through misty hills, and experience life in the tea country.",
          image: `${import.meta.env.BASE_URL}Destinations/Haputale/cards/experiences.webp`,
          imageAlt: "Train journey through Haputale",
        },
      ],
    },
  ],
};

export default HaputaleArticle;