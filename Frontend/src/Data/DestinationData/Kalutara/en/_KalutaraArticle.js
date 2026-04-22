const KalutaraArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Kalutara" },
  ],

  hero: {
    kicker: "Coastal Town",
    title: "Kalutara",
    subtitle: "A historic coastal destination known for its sacred sites, river landscapes, and colonial past.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kalutara/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Where River, Coast, and History Meet",
    paragraphs: [
      "Kalutara is a coastal town in Sri Lanka with a rich history, particularly noted for its religious significance and its strategic role during colonial eras. Today, it thrives as a major religious and tourist destination.",
      "Located along the southwestern coast, Kalutara combines heritage, natural beauty, and accessibility, making it an important stop between Colombo and the southern beaches.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history",
      kicker: "History",
      title: "Colonial Legacy and Strategic Importance",
      align: "left",
      paragraphs: [
        "Kalutara was a strategic stronghold during the Portuguese, Dutch, and British colonial periods. Its location at the mouth of the Kalu Ganga made it an important defensive and trading point.",
        "The Portuguese built a fort at the river mouth, which the Dutch later captured and rebuilt. The British then used the fort as part of their administrative system, although its remains were eventually demolished to allow for the expansion of road and rail infrastructure.",
      ],
    },

    {
      type: "text",
      id: "religion",
      kicker: "Religion",
      title: "Kalutara Bodhiya",
      align: "left",
      paragraphs: [
        "Kalutara is most famous for the Kalutara Bodhiya, an extremely sacred Bodhi tree believed to be one of the 32 saplings from the Jaya Sri Maha Bodhi in Anuradhapura. This lineage connects it directly to the original tree under which the Buddha attained enlightenment.",
        "The site has been a major pilgrimage destination for Buddhists for centuries, attracting visitors from across the country who come to offer prayers and seek blessings in a deeply spiritual setting.",
      ],
    },

    {
      type: "text",
      id: "river",
      kicker: "Nature",
      title: "Kalu Ganga",
      align: "left",
      content: [
        {
          type: "split-paragraph",
          heading: "Kalu Ganga",
          headingLevel: "h3",
          paragraphs: [
            "The Kalu Ganga, meaning 'Black River,' is one of the most significant rivers in Sri Lanka and plays a central role in the identity of Kalutara.",
            "Flowing through the region before meeting the Indian Ocean, the river supports local livelihoods, transport, and agriculture, while also offering scenic views that define the town’s landscape.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/kalu-ganga.webp`,
          imageAlt: "Kalu Ganga river in Kalutara",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "modern",
      kicker: "Present Day",
      title: "Kalutara Today",
      align: "left",
      content: [
        {
          type: "p",
          text: "Today, Kalutara is a vibrant town in the Western Province, approximately 43 km south of Colombo, known for its religious landmarks, coastal scenery, and growing tourism industry.",
        },

        {
          type: "h3",
          text: "Tourism",
        },
        {
          type: "p",
          text: "The town’s golden sandy beaches and proximity to Colombo make it a popular beach resort destination. Visitors can enjoy a mix of relaxation and cultural exploration, supported by a wide range of hotels and resorts catering to both local and international travelers.",
        },

        {
          type: "h3",
          text: "Infrastructure and Economy",
        },
        {
          type: "p",
          text: "Kalutara serves as an important junction on Sri Lanka’s main road and rail network, linking the capital with the southern regions. It is also a commercial center for surrounding areas, known for its coir products, basketware, and fishing activities.",
        },
      ],
    },

    {
      type: "text",
      id: "economy",
      kicker: "Economy",
      title: "Agriculture, Trade, and Industry",
      align: "left",
      content: [
        {
          type: "p",
          text: "The economy of the Kalutara District is driven by a combination of plantation agriculture, small and medium industries, and tourism. The region’s favorable climate supports a wide variety of crops and economic activities.",
        },

        {
          type: "h3",
          text: "Agriculture and Plantation Crops",
        },
        {
          type: "p",
          text: "Kalutara is an important contributor to Sri Lanka’s export crops. Rubber is widely cultivated, while coconut plantations are common throughout the area, supporting industries such as rope and basket production. The district also produces low-grown tea, along with spices like cinnamon and pepper, and fruits such as mangosteen, which was introduced from Malaysia. Paddy cultivation is also practiced in suitable areas.",
        },

        {
          type: "h3",
          text: "Trade and Industry",
        },
        {
          type: "p",
          text: "Historically a major spice-trading center, Kalutara continues to function as a hub for commercial and industrial activity. The district hosts a range of manufacturing enterprises, while handicrafts made from coconut by-products remain an important part of the local economy.",
        },

        {
          type: "h3",
          text: "Tourism",
        },
        {
          type: "p",
          text: "Tourism is a major contributor to the local economy. Coastal attractions such as Calido Beach, along with religious landmarks like the Kalutara Bodhiya and the hollow dagoba at Kalutara Vihara, draw visitors throughout the year. The hospitality sector, including hotels and resorts, plays a key role in supporting this industry.",
        },
      ],
    },

    {
      type: "cards",
      kicker: "Highlights",
      title: "Things to See in Kalutara",
      align: "center",
      items: [
        {
          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/bodhiya.webp`,
          imageAlt: "Kalutara Bodhiya and Chaitya",
          title: "Kalutara Bodhiya & Chaitya",
          description: "A sacred Buddhist site featuring a revered Bodhi tree and unique hollow stupa.",
          to: "#religion",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/river.webp`,
          imageAlt: "Kalu Ganga river",
          title: "Kalu Ganga (Black River)",
          description: "A major river shaping the town’s landscape and local life.",
          to: "#river",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/castle.webp`,
          imageAlt: "Richmond Castle",
          title: "Richmond Castle",
          description: "A colonial-era mansion showcasing unique architecture and history.",
          to: "/places/richmond-castle",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/waterfall.webp`,
          imageAlt: "Thudugala Ella waterfall",
          title: "Thudugala Ella (Thudugala Waterfall)",
          description: "A scenic waterfall surrounded by lush greenery, ideal for short visits.",
          to: "/places/thudugala-ella",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/diving.webp`,
          imageAlt: "Diving and snorkeling",
          title: "Diving and Snorkeling",
          description: "Explore marine life and coastal waters along the southwestern coast.",
          to: "#",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/experiences.webp`,
          imageAlt: "Experiences in Kalutara",
          title: "Experiences",
          description: "A mix of cultural, coastal, and nature-based activities around the town.",
          to: "#",
        },
      ],
    },
  ],
};

export default KalutaraArticle;