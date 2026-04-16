const TissamaharamaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Tissamaharama" },
  ],

  hero: {
    kicker: "Southern Province",
    title: "Tissamaharama",
    subtitle:
      "An ancient town of Buddhist heritage and one of Sri Lanka’s main gateways to wildlife safaris in the south.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Tissamaharama/tissamaharama-hero.jpg`,
  },

  overview: {
    kicker: "Overview",
    title: "A Historic Ruhuna Capital and Safari Gateway",
    paragraphs: [
      "Tissamaharama is a town in Sri Lanka’s Southern Province known for its deep historical roots, important Buddhist monuments, and strategic role as a base for exploring nearby national parks. It combines religious significance with access to some of the country’s best-known wildlife areas.",
      "Once a major center of the ancient Ruhuna Kingdom, the town remains closely tied to Sri Lanka’s early Buddhist history. At the same time, its location has made it one of the most practical starting points for safaris, nature excursions, and visits to historic temple sites in the surrounding region.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history",
      kicker: "History",
      title: "An Ancient Capital of Ruhuna",
      align: "left",
      paragraphs: [
        "Tissamaharama was once the capital of the ancient Kingdom of Ruhuna and was known in earlier times as Mahagama. Its importance dates back to at least the 3rd century B.C., making it one of the historically significant urban centers of southern Sri Lanka.",
        "For centuries, the town was also a major center for Buddhist learning and religious activity, with its influence extending from the 3rd century B.C. to the 11th century A.D. This long continuity helped establish the region as one of the most important historical and spiritual landscapes in the south.",
      ],
    },

    {
      type: "text",
      id: "religious-heritage",
      kicker: "Heritage",
      title: "Sacred Sites and Buddhist Legacy",
      align: "left",
      content: [
        {
          type: "p",
          text: "The Tissamaharama Raja Maha Vihara is one of the most important and ancient Buddhist temples in Sri Lanka. Located in the historic center of the town, it holds both religious and archaeological significance and remains a major place of worship.",
        },
        {
          type: "p",
          text: "The wider area also contains several other important Buddhist monuments linked to the history of the Ruhuna Kingdom. These sites reinforce Tissamaharama’s role as a key religious center in southern Sri Lanka.",
        },
        {
          type: "split-paragraph",
          heading: "Nearby Historical Temples",
          headingLevel: "h4",
          paragraphs: [
            "Among the nearby heritage sites is Yatala Dagoba, also known as Yatala Vehera, an ancient stupa of major historical importance. Another significant religious landmark is the Kirinda Vihara Maha Devi Temple, located in the coastal village of Kirinda and known for both its scenic setting and its connection to Sri Lankan legend.",
            "Together, these monuments create a dense network of sacred and historical sites that can be explored from Tissamaharama.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Tissamaharama/yatala-dagoba.jpg`,
          imageAlt: "Yatala Dagoba near Tissamaharama",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "safari-gateway",
      kicker: "Nature",
      title: "Gateway to National Parks",
      align: "left",
      paragraphs: [
        "Tissamaharama is widely known as the main base for safaris to nearby national parks, especially Yala National Park. This has made the town an important stop for visitors interested in wildlife and nature travel.",
        "Yala is famous for its leopard population and is also home to elephants, sloth bears, and a wide range of birdlife. Bundala National Park, another important destination nearby, is particularly well known as a major wintering ground for migratory water birds.",
        "Because of its location, Tissamaharama functions as a practical hub where religious heritage and wildlife tourism meet, allowing travelers to combine cultural visits with safari excursions.",
      ],
    },

    {
      type: "text",
      id: "local-experience",
      kicker: "Local Experience",
      title: "History, Landscape, and Regional Exploration",
      align: "left",
      paragraphs: [
        "Beyond its temples and safari access, Tissamaharama offers a broader experience of the southern dry-zone landscape, with reservoirs, open plains, and scattered historic remains shaping the region’s atmosphere.",
        "The town works well as a base for exploring both inland and coastal attractions, whether focused on Buddhist heritage, natural scenery, or the wider historical geography of Ruhuna.",
      ],
    },

    {
      type: "cards",
      kicker: "Highlights",
      title: "Points of Interest",
      align: "center",

      items: [
        {
          image: `${import.meta.env.BASE_URL}Destinations/Tissamaharama/religious-cultural.jpg`,
          imageAlt: "Religious and cultural sites in Tissamaharama",
          title: "Religious & Cultural",
          description:
            "Ancient temples and Buddhist monuments define Tissamaharama’s identity as one of the key sacred landscapes of the Ruhuna region.",
          to: "/places/tissamaharama/religious-cultural",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Tissamaharama/nature-landscape.jpg`,
          imageAlt: "Nature and landscape around Tissamaharama",
          title: "Nature & Landscape",
          description:
            "Reservoirs, dry-zone scenery, and surrounding open landscapes give the area a distinct natural character beyond its temple heritage.",
          to: "/places/tissamaharama/nature-landscape",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Tissamaharama/wildlife-safaris.jpg`,
          imageAlt: "Wildlife and safaris near Tissamaharama",
          title: "Wildlife & Safaris",
          description:
            "As the main base for Yala and a convenient point for Bundala, Tissamaharama is central to safari travel in southern Sri Lanka.",
          to: "/places/tissamaharama/wildlife-safaris",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Tissamaharama/sithulpawwa.jpg`,
          imageAlt: "Sithulpawwa Rock Temple",
          title: "Sithulpawwa Rock Temple",
          description:
            "An important ancient rock temple within the wider Yala region, combining religious significance with a dramatic natural setting.",
          to: "/places/tissamaharama/sithulpawwa-rock-temple",
        },
      ],
    },
  ],
};

export default TissamaharamaArticle;