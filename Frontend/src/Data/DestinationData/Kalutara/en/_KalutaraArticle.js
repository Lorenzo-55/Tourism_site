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
      type: "text",
      id: "beaches",
      kicker: "Beaches",
      title: "Kalutara’s Coastline and Calido Beach",
      align: "left",
      content: [
        {
          type: "p",
          text: "Kalutara is famous for its long golden-sand coastline, which forms a major part of its appeal as a resort town. The beach area along the Indian Ocean has a relaxed tropical atmosphere, with many hotels and resorts located close to the shore.",
        },
        {
          type: "p",
          text: "Kalutara Beach is ideal for long walks, sunbathing, watching local fishermen at work, and enjoying sunsets over the ocean. Well-known beachfront properties such as Avani Kalutara Resort, Anantara Kalutara Resort, and Tangerine Beach Hotel are located along this coastal stretch.",
        },
        {
          type: "split-paragraph",
          heading: "Calido Beach",
          headingLevel: "h3",
          paragraphs: [
            "Calido Beach is a distinct strip of preserved land between the Kalu Ganga and the Indian Ocean. Its position gives visitors views of both the river and the sea, making it one of Kalutara’s most scenic coastal areas.",
            "Located south of the Kalutara Bridge near the Kalutara Bodhiya, it is especially attractive for nature lovers and for walks near the point where the river meets the ocean.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/calido-beach.webp`,
          imageAlt: "Calido Beach between the Kalu Ganga and Indian Ocean",
          mediaPosition: "right",
        },
        {
          type: "h3",
          text: "Activities and Attractions",
        },
        {
          type: "p",
          text: "The beaches around Kalutara offer simple coastal relaxation, including sunbathing, sunset viewing, and resting under palm trees. Larger beachfront resorts may also offer water sports such as jet skiing and windsurfing.",
        },
        {
          type: "p",
          text: "Because Kalutara sits at the mouth of the Kalu Ganga, beach visits can easily be combined with river-based activities such as boat rides or river safaris. Local fishing activity along the coast also adds to the town’s everyday coastal character.",
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
          to: "/places/kalutara-bodhiya",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/river.webp`,
          imageAlt: "Kalu Ganga river",
          title: "Kalu Ganga (Black River)",
          description: "A major river shaping the town’s landscape and local life.",
          to: "/places/kalutara-kalu-ganga",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/castle.webp`,
          imageAlt: "Richmond Castle",
          title: "Richmond Castle",
          description: "A colonial-era mansion showcasing unique architecture and history.",
          to: "/places/kalutara-richmond-castle",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/waterfall.webp`,
          imageAlt: "Thudugala Ella waterfall",
          title: "Thudugala Ella (Thudugala Waterfall)",
          description: "A scenic waterfall surrounded by lush greenery, ideal for short visits.",
          to: "/places/kalutara-thudugala-ella",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/diving.webp`,
          imageAlt: "Diving and snorkeling",
          title: "Diving and Snorkeling",
          description: "Explore marine life and coastal waters along the southwestern coast.",
          to: "/places/kalutara-diving-snorkeling",
        },
      ],
    },
  ],
};

export default KalutaraArticle;