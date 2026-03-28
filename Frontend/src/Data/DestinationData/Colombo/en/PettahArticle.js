// src/Data/DestinationData/Colombo/en/PettahArticle.js

const PettahArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Colombo", to: "/places/colombo" },
    { label: "Pettah", to: "/places/colombo/pettah" },
  ],

  hero: {
    kicker: "MARKET DISTRICT",
    title: "Pettah",
    subtitle:
      "A dense, energetic trading hub where Colombo’s commercial life unfolds in full intensity.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Colombo/ColomboPettah1x.webp`,
  },

  overview: {
    kicker: "OVERVIEW",
    title: "The Commercial Heart of Colombo",
    subtitle:
      "A historic marketplace defined by movement, trade, and constant activity.",
    paragraphs: [
      "Pettah is not just a market—it is the historical, commercial, and logistical core of Colombo. The area is known for its fast-paced, crowded streets and an atmosphere often described as organized chaos, offering a raw and authentic look at Sri Lankan trade and street life.",
      "The name 'Pita Kotuwa' means 'outside the Fort,' referring to its position just beyond the old colonial Fort walls. Today, Pettah remains a central hub for wholesale trade, small businesses, and daily commerce.",
    ],
  },

  sections: [
    {
      type: "text",
      kicker: "EXPLORING",
      title: "Navigating the Bazaar",
      subtitle:
        "A grid of streets, each specializing in specific goods.",
      paragraphs: [
        "Pettah’s bazaar is laid out in a structured grid, with different streets dedicated to different types of products. Understanding this layout is key to navigating the area efficiently.",
        "The five main Cross Streets are the busiest and most intense parts of the market, each offering a distinct experience depending on what is being sold.",
      ],
    },

    {
      type: "cards",
      kicker: "MARKET STREETS",
      title: "What to Find Where",
      subtitle:
        "Each street focuses on a specific type of trade or product.",
      items: [
        {
          image: "/images/pettah-main-street.jpg",
          imageAlt: "Main Street Pettah",
          title: "Main Street",
          description:
            "The main artery of Pettah, filled with wholesale goods, shoes, bags, clothing, and large showrooms. It is one of the busiest and most chaotic streets in the area.",
        },
        {
          image: "/images/pettah-sea-street.jpg",
          imageAlt: "Sea Street gold shops",
          title: "Sea Street",
          description:
            "Sri Lanka’s primary gold and jewelry market, lined with hundreds of small shops. Traditionally dominated by Tamil traders, it is the center of the country’s gold trade.",
        },
        {
          image: "/images/pettah-cross-street.jpg",
          imageAlt: "Electronics street Pettah",
          title: "1st Cross Street",
          description:
            "The go-to area for mobile phones, electronics, and accessories such as cables, covers, and batteries.",
        },
        {
          image: "/images/red-mosque-pettah.jpg",
          imageAlt: "Red Mosque Pettah",
          title: "2nd Cross Street",
          description:
            "Known for textiles, sarees, and fabrics. It is also home to the iconic Jami Ul-Alfar Mosque, one of Colombo’s most recognizable landmarks.",
        },
        {
          image: "/images/pettah-produce.jpg",
          imageAlt: "Wholesale produce Pettah",
          title: "4th Cross Street",
          description:
            "A busy wholesale zone for produce such as onions, potatoes, spices, and grains. Expect heavy traffic and porters moving large loads.",
        },
        {
          image: "/images/pettah-prince-street.jpg",
          imageAlt: "Prince Street Pettah",
          title: "Prince Street",
          description:
            "A mix of toys, plastic goods, lighting, and home items. It also houses the Colombo Dutch Museum.",
        },
        {
          image: "/images/pettah-china-street.jpg",
          imageAlt: "China Street Pettah",
          title: "China Street",
          description:
            "Specializes in party supplies, decorations, candles, wrapping paper, and chinaware—ideal for events and celebrations.",
        },
      ],
    },

    {
      type: "split",
      kicker: "LANDMARKS",
      title: "Architectural and Cultural Sites",
      subtitle:
        "Historic structures scattered within the market streets.",
      image: "/images/red-mosque-close.jpg",
      imageAlt: "Jami Ul-Alfar Mosque close view",
      paragraphs: [
        "Amid the dense commercial streets, Pettah also features several important landmarks. The Jami Ul-Alfar Mosque, known for its striking red-and-white pattern, stands out as one of the city’s most iconic buildings.",
        "The Colombo Dutch Museum on Prince Street offers a quiet contrast to the busy streets, showcasing artifacts from the Dutch colonial period inside a preserved 17th-century mansion.",
        "Nearby, the Khan Clock Tower marks the entrance to Pettah near the Fort Railway Station, while the Old Town Hall at Kayman’s Gate reflects the city’s colonial past with its aging structure and small museum.",
      ],
    },

    {
      type: "text",
      kicker: "EXPERIENCE",
      title: "Food and Local Life",
      subtitle:
        "Street food, fresh produce, and unique market experiences.",
      paragraphs: [
        "Pettah is known for its street food and fresh produce. One of the most popular snacks is Isso Vade—spicy lentil fritters topped with prawns, often sold near the Red Mosque or bus stand.",
        "The area is also a major distribution center for tropical fruits, where you can find seasonal varieties such as mangosteen, rambutan, and wood apple at low prices.",
        "For a calmer experience, the Pettah Floating Market near Bastian Mawatha offers a more organized setting, with stalls on platforms and boats selling handicrafts, souvenirs, and local snacks along a canal connected to Beira Lake.",
      ],
    },

    {
      type: "text",
      kicker: "VISITING",
      title: "Tips for Exploring Pettah",
      subtitle:
        "Practical advice for navigating the busy market.",
      paragraphs: [
        "Visit in the morning to avoid the peak heat and crowds, although the market is most active between late morning and afternoon.",
        "Keep personal belongings secure, as the crowded and narrow streets can make it easy to lose track of items.",
        "Bargaining is common, especially in smaller stalls, so negotiating prices is expected.",
        "Wear comfortable shoes and be prepared for noise, dust, and heavy foot traffic throughout the area.",
        "Vehicles have limited access inside the market, so it is best to arrive by tuk-tuk or get dropped at the edge and continue on foot.",
      ],
    },
  ],
};

export default PettahArticle;  