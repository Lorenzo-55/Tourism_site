const SigiriyaMuseumsAndLocalLifeArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Sigiriya", to: "/places/sigiriya" },
    { label: "Museums & Local Life" },
  ],

  hero: {
    kicker: "Museums & Local Culture",
    title: "Museums & Local Life",
    subtitle:
      "From the archaeological story of Sigiriya to the bustling trade of Dambulla’s vegetable market, these experiences reveal everyday life and history in Sri Lanka’s cultural triangle.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Sigiriya/museums-local-life/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "History, Archaeology, and Everyday Sri Lanka",
    paragraphs: [
      "The Sigiriya region is not only known for ancient ruins and rock fortresses, but also for museums, local markets, and everyday cultural experiences.",
      "The Sigiriya Museum helps visitors understand the engineering and history behind Lion Rock, while the Dambulla Vegetable Market offers a direct glimpse into the agricultural and trading life of central Sri Lanka. :contentReference[oaicite:0]{index=0}",
    ],
  },

  sections: [
    {
      type: "text",
      id: "sigiriya-museum",
      kicker: "Museum",
      title: "Sigiriya Museum",
      align: "left",

      content: [
        {
          type: "p",
          text: "Located at the entrance to the Sigiriya complex, the Sigiriya Museum provides historical and archaeological context for the famous rock fortress. :contentReference[oaicite:1]{index=1}",
        },

        {
          type: "p",
          text: "The museum is modern, well-organized, and designed to help visitors understand the construction, symbolism, and engineering of Sigiriya before climbing Lion Rock itself. :contentReference[oaicite:2]{index=2}",
        },

        {
          type: "split-paragraph",
          heading: "Archaeological Finds and Reconstructions",
          headingLevel: "h4",

          paragraphs: [
            "The exhibitions include pottery, tools, jewelry, coins, and other artifacts uncovered during excavations around Sigiriya.",
            "Detailed scale models and reconstructions show how the palace complex, gardens, and water systems may have appeared during the reign of King Kashyapa.",
            "These displays help visitors visualize the scale and sophistication of the ancient royal city. :contentReference[oaicite:3]{index=3}",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Sigiriya/museums-local-life/sigiriya-museum.webp`,
          imageAlt: "Sigiriya Museum exhibits and models",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "<strong>Sigiriya Frescoes:</strong> The museum contains reproductions of the famous “Cloud Maiden” frescoes, allowing visitors to study the paintings more closely without damaging the originals on the rock. :contentReference[oaicite:4]{index=4}",
        },

        {
          type: "p",
          text: "<strong>Mirror Wall Graffiti:</strong> Photographs and explanations of the ancient Mirror Wall inscriptions provide insight into how visitors from past centuries viewed Sigiriya. :contentReference[oaicite:5]{index=5}",
        },

        {
          type: "p",
          text: "<strong>Hydraulic Engineering:</strong> Diagrams and reconstructions explain the advanced system of reservoirs, fountains, canals, and water gardens that made Sigiriya one of the engineering marvels of ancient Sri Lanka. :contentReference[oaicite:6]{index=6}",
        },

        {
          type: "p",
          text: "<strong>Visiting Tip:</strong> It is best to visit the museum before climbing Sigiriya Rock so the information can provide context for the ruins and structures seen during the ascent. :contentReference[oaicite:7]{index=7}",
        },
      ],
    },

    {
      type: "text",
      id: "dambulla-market",
      kicker: "Local Life",
      title: "The Dambulla Vegetable Market",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Dambulla Vegetable Market, officially known as the Dambulla Dedicated Economic Centre, is one of the largest wholesale markets in Sri Lanka. :contentReference[oaicite:8]{index=8}",
        },

        {
          type: "p",
          text: "Although primarily a working wholesale market rather than a tourist attraction, it offers one of the most authentic glimpses into daily economic life in the region. :contentReference[oaicite:9]{index=9}",
        },

        {
          type: "split-paragraph",
          heading: "A Major Agricultural Hub",
          headingLevel: "h4",

          paragraphs: [
            "Farmers from across surrounding agricultural districts bring fresh produce to Dambulla for nationwide distribution.",
            "Traders purchase vegetables, fruits, coconuts, and spices before transporting them to markets, supermarkets, and village shops throughout Sri Lanka.",
            "The market operates around the clock, though the busiest activity happens during the late night and early morning hours. :contentReference[oaicite:10]{index=10}",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Sigiriya/museums-local-life/dambulla-market.webp`,
          imageAlt: "Dambulla Vegetable Market",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "<strong>Atmosphere:</strong> The market is noisy, crowded, colorful, and fast-moving, filled with trucks, tricycles, baskets, sacks, and constant trading activity. :contentReference[oaicite:11]{index=11}",
        },

        {
          type: "p",
          text: "<strong>Products:</strong> Visitors can see large quantities of bananas, pineapples, mangoes, coconuts, spices, and many varieties of vegetables from across Sri Lanka’s agricultural regions. :contentReference[oaicite:12]{index=12}",
        },

        {
          type: "p",
          text: "<strong>Cultural Experience:</strong> A visit provides insight into the importance of agriculture in Sri Lankan daily life and the interactions between farmers, traders, and transport workers. :contentReference[oaicite:13]{index=13}",
        },
      ],
    },

    {
      type: "text",
      id: "market-visitor-tips",
      kicker: "Visitor Information",
      title: "Practical Tips for Visiting",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Best Time:</strong> Early morning is the best time to experience the market at its busiest and most active. Activity usually peaks between around 2:00 AM and 10:00 AM. :contentReference[oaicite:14]{index=14}",
        },

        {
          type: "p",
          text: "<strong>Guides:</strong> Visiting with a local guide can help visitors understand the products, trading systems, and local interactions within the market. :contentReference[oaicite:15]{index=15}",
        },

        {
          type: "p",
          text: "<strong>Clothing:</strong> Wear comfortable clothes and shoes suitable for wet or slippery floors. :contentReference[oaicite:16]{index=16}",
        },

        {
          type: "p",
          text: "<strong>Photography:</strong> Always ask permission before photographing people working in the market. :contentReference[oaicite:17]{index=17}",
        },

        {
          type: "p",
          text: "<strong>Safety:</strong> Keep personal belongings secure, especially during busy trading hours. :contentReference[oaicite:18]{index=18}",
        },

        {
          type: "p",
          text: "<strong>Experience:</strong> The market can feel chaotic, hot, and crowded, but for many travelers it becomes one of the most memorable local experiences in the region. :contentReference[oaicite:19]{index=19}",
        },

        {
          type: "button",
          label: "View Sigiriya Museum on Google Maps",
          href: "https://www.google.com/maps?q=7.957304533327268,80.75187879626066",
        },

        {
          type: "button",
          label: "View Dambulla Vegetable Market on Google Maps",
          href: "https://www.google.com/maps?q=7.866175038315197,80.65173490853567",
        },
      ],
    },
  ],
};

export default SigiriyaMuseumsAndLocalLifeArticle;