const DambullaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Dambulla", to: "/places/dambulla" },
  ],

  hero: {
    kicker: "Cultural Triangle",
    title: "Dambulla",
    subtitle:
      "A historic city built around its iconic cave temple, now a major hub for tourism, agriculture, and trade in central Sri Lanka.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Dambulla/hero/dambulla-hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Sacred Heritage and Economic Powerhouse",
    paragraphs: [
      "Dambulla is a city with a rich history, primarily centered around its world-renowned Dambulla Cave Temple, and today it serves as a bustling hub for tourism and commerce.",
      "Blending religious significance with one of the most important agricultural markets in the country, Dambulla plays a central role in both Sri Lanka’s cultural identity and its modern economy.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "dambulla-nowadays",
      kicker: "Present Day",
      title: "Dambulla Nowadays: Tourism and Economy",
      align: "left",
      content: [
        {
          type: "p",
          text: "Today, Dambulla is a vital city in the Matale District and a crucial part of Sri Lanka's Cultural Triangle. It serves as both a major tourism destination and an economic center that connects different regions of the country.",
        },
        {
          type: "p",
          text: "Its primary modern significance lies in tourism, with the Dambulla Cave Temple remaining its most important attraction. The city also acts as a convenient base for exploring nearby cultural sites, making it a key stop for travelers visiting central Sri Lanka.",
        },
        {
          type: "p",
          text: "At the same time, Dambulla plays an equally important role in the national economy through its agricultural trade. The city is best known as the central hub for vegetable and fruit distribution in Sri Lanka, making it a critical part of the country’s food supply chain.",
        },

        {
          type: "split-paragraph",
          heading: "The Dambulla Dedicated Economic Centre",
          headingLevel: "h4",
          paragraphs: [
            "The vegetable market in Dambulla, officially known as the Dambulla Dedicated Economic Centre (DDEC), is the most significant wholesale hub for produce in Sri Lanka. It functions as the main collection and redistribution point for fruits and vegetables coming from districts such as Anuradhapura, Polonnaruwa, Matale, and Nuwara Eliya.",
            "Handling an estimated 60% to 70% of the country’s wholesale vegetable market, the DDEC sees over 2,500 metric tons of produce traded daily, with more than 10,000 traders and farmers passing through. Its creation helped decentralize trade away from Colombo and provided farmers with better pricing and more direct access to markets.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Dambulla/economy/market.webp`,
          imageAlt: "Dambulla vegetable market",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "The market operates almost around the clock, earning Dambulla the reputation of being a city that never sleeps. The busiest periods occur during early mornings and late evenings, when trucks arrive, unload produce, and trading activity peaks.",
        },
        {
          type: "p",
          text: "The atmosphere is intense and energetic, often described as organized chaos. Massive lorries move constantly, while stacks of produce—from pumpkins and chillies to tropical fruits—fill the space. Traders, vendors, and porters move quickly through crowded lanes, negotiating prices and coordinating shipments.",
        },
        {
          type: "p",
          text: "The DDEC primarily operates as a wholesale market, supplying goods in bulk to smaller markets and retailers across the island. While small purchases are sometimes possible, its main function is large-scale distribution.",
        },

        {
          type: "split-paragraph",
          heading: "Experience for Visitors",
          headingLevel: "h4",
          paragraphs: [
            "For visitors, the Dambulla market offers a rare and authentic glimpse into the everyday workings of Sri Lanka’s economy. Unlike the nearby ancient temples, it presents a raw, fast-paced environment filled with real-time trade and human activity.",
            "The best time to visit is early in the morning, around 5:00 AM, when trading is at its peak. Visitors should expect a crowded and busy setting with heavy vehicle traffic, and exploring with a local guide can provide a better understanding of how the system operates.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Dambulla/economy/market-activity.webp`,
          imageAlt: "Market activity in Dambulla",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "Beyond the market, Dambulla also supports smaller industries connected to agriculture, including storage, processing, and value-added production such as rice mills. These industries further strengthen the city’s role in the regional economy.",
        },
        {
          type: "p",
          text: "In addition, the Rangiri Dambulla International Cricket Stadium occasionally hosts major matches and events, contributing to sports tourism and bringing additional economic activity into the area.",
        },
        {
          type: "p",
          text: "Altogether, Dambulla stands out as a city where cultural heritage and economic vitality intersect, making it both a key destination for visitors and a critical center for Sri Lanka’s agricultural and commercial life.",
        },
      ],
    },

    {
        type: "cards",
        kicker: "Explore",
        title: "Points of Interest",
        align: "center", // "left" | "center"

        items: [
            {
            title: "Dambulla Cave Temple",
            description: "A UNESCO-listed cave temple complex and the city’s most iconic religious site.",
            image: `${import.meta.env.BASE_URL}Destinations/Dambulla/poi/dambulla-cave-temple.webp`,
            imageAlt: "Dambulla Cave Temple",
            to: "/places/dambulla/dambulla-cave-temple",
            },
            {
            title: "Sigiriya Rock Fortress (Lion Rock)",
            description: "An ancient rock fortress rising dramatically above the plains, known for its history and views.",
            image: `${import.meta.env.BASE_URL}Destinations/Dambulla/poi/sigiriya.webp`,
            imageAlt: "Sigiriya Rock Fortress",
            to: "/places/dambulla/sigiriya",
            },
            {
            title: "Pidurangala Rock",
            description: "A popular hiking spot offering panoramic views of Sigiriya and the surrounding landscape.",
            image: `${import.meta.env.BASE_URL}Destinations/Dambulla/poi/pidurangala.webp`,
            imageAlt: "Pidurangala Rock",
            to: "/places/dambulla/pidurangala",
            },
            {
            title: "Minneriya National Park",
            description: "Famous for large gatherings of elephants and seasonal wildlife activity.",
            image: `${import.meta.env.BASE_URL}Destinations/Dambulla/poi/minneriya.webp`,
            imageAlt: "Minneriya National Park",
            to: "/places/dambulla/minneriya-national-park",
            },
            {
            title: "Kaudulla National Park",
            description: "A wildlife reserve known for elephants, birdlife, and scenic tank landscapes.",
            image: `${import.meta.env.BASE_URL}Destinations/Dambulla/poi/kaudulla.webp`,
            imageAlt: "Kaudulla National Park",
            to: "/places/dambulla/kaudulla-national-park",
            },
            {
            title: "Jathika Namal Uyana (Rose Quartz Mountain)",
            description: "A unique natural site featuring pink quartz formations and forested surroundings.",
            image: `${import.meta.env.BASE_URL}Destinations/Dambulla/poi/namal-uyana.webp`,
            imageAlt: "Jathika Namal Uyana",
            to: "/places/dambulla/namal-uyana",
            },
        ],
    }
  ],
};

export default DambullaArticle;