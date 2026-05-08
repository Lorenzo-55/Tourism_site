const HattonWaterfallsArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Hatton", to: "/places/hatton" },
    { label: "Waterfalls" },
  ],

  hero: {
    kicker: "Waterfalls & Nature",
    title: "Waterfalls Around Hatton",
    subtitle:
      "Tea-country waterfalls, dramatic mountain cascades, and scenic viewpoints across Sri Lanka’s central highlands.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Hatton/waterfalls/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Scenic Waterfalls of Sri Lanka’s Tea Country",
    paragraphs: [
      "The Hatton region is surrounded by some of Sri Lanka’s most famous waterfalls, many of them located within the lush tea estates and mountain valleys of the central highlands.",
      "From roadside viewpoints overlooking wide cascades to adventurous jungle trails leading to powerful mountain falls, the area offers a mix of scenic stops, photography locations, and nature experiences.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "devon-falls",
      kicker: "Tea Country Waterfall",
      title: "Devon Falls",
      align: "left",

      content: [
        {
          type: "p",
          text: "Known as the “Veil of the Valley,” Devon Falls is one of Sri Lanka’s most elegant waterfalls.",
        },

        {
          type: "p",
          text: "At 97 meters high, it is the 19th highest waterfall in Sri Lanka and one of the classic scenic stops along the Hatton–Nuwara Eliya road.",
        },

        {
          type: "split-paragraph",
          heading: "Viewing Points",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Mlesna Tea Centre:</strong> The most popular viewpoint, located directly along the A7 highway with panoramic views of the falls and surrounding valley.",
            "<strong>20th Mile Post:</strong> Often considered one of the clearest photography spots for viewing the waterfall.",
            "<strong>Hidden Trail:</strong> A lesser-known walking path near the Dimbulla–Nawalapitiya road leads closer to the upper section of the falls, though conditions can be slippery.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hatton/waterfalls/devon-falls.webp`,
          imageAlt: "Devon Falls in Sri Lanka tea country",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Visitor Information",
        },

        {
          type: "p",
          text: "<strong>Entrance Fee:</strong> Free.",
        },

        {
          type: "p",
          text: "<strong>Best Time to Visit:</strong> December to March for stronger water flow or February to May for clearer weather.",
        },

        {
          type: "p",
          text: "<strong>From Hatton:</strong> Approximately 30 minutes by road.",
        },

        {
          type: "p",
          text: "<strong>Safety:</strong> Swimming near the waterfall is strongly discouraged due to slippery rocks and unpredictable currents.",
        },
      ],
    },

    {
      type: "text",
      id: "st-clairs-falls",
      kicker: "Wide Cascade",
      title: "St. Clair’s Falls",
      align: "left",

      content: [
        {
          type: "p",
          text: "Often called the “Little Niagara of Sri Lanka,” St. Clair’s Falls is one of the widest waterfalls in the country.",
        },

        {
          type: "p",
          text: "The waterfall consists of two cascades known as Maha Ella and Kuda Ella and is located only a few kilometers from Devon Falls.",
        },

        {
          type: "h3",
          text: "Best Viewing Areas",
        },

        {
          type: "p",
          text: "<strong>St. Clair’s Tea Castle:</strong> A castle-style tea center overlooking the valley and waterfall.",
        },

        {
          type: "p",
          text: "<strong>Main Road Viewpoint:</strong> A popular viewing gallery located directly beside the Hatton–Talawakele highway.",
        },

        {
          type: "p",
          text: "<strong>The Train View:</strong> One of the few waterfalls in Sri Lanka clearly visible from the Kandy–Ella railway line.",
        },

        {
          type: "split-paragraph",
          heading: "Water Volume and Landscape",
          headingLevel: "h4",

          paragraphs: [
            "The water flow of St. Clair’s Falls is partly influenced by the Upper Kotmale Hydropower Project.",
            "Although the waterfall is less powerful than it once was during dry periods, it still remains one of the most scenic landscapes in Sri Lanka’s tea country.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hatton/waterfalls/st-clairs.webp`,
          imageAlt: "St Clair's Falls viewed from tea country",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Visitor Tips",
        },

        {
          type: "p",
          text: "<strong>Entrance Fee:</strong> Free.",
        },

        {
          type: "p",
          text: "<strong>Best Time:</strong> December to April for pleasant weather, or May to September for maximum water flow.",
        },

        {
          type: "p",
          text: "<strong>Leeches:</strong> Paths through the tea estate can contain leeches after rainfall, so long socks and repellents are recommended.",
        },

        {
          type: "p",
          text: "<strong>Combined Visit:</strong> Most travellers combine St. Clair’s Falls with Devon Falls during the same trip.",
        },
      ],
    },

    {
      type: "text",
      id: "laxapana-falls",
      kicker: "Mountain Cascade",
      title: "Laxapana Falls",
      align: "left",

      content: [
        {
          type: "p",
          text: "Laxapana Falls is one of Sri Lanka’s tallest and most powerful waterfalls, standing approximately 126 meters high.",
        },

        {
          type: "p",
          text: "The waterfall is associated with local legends claiming that Lord Buddha once repaired his saffron robe here while visiting Adam’s Peak.",
        },

        {
          type: "h3",
          text: "Lower and Upper Viewpoints",
        },

        {
          type: "p",
          text: "<strong>Lower Viewpoint:</strong> Reached by descending around 500–600 cemented steps to the base pool area.",
        },

        {
          type: "p",
          text: "<strong>Upper Viewpoint:</strong> Accessible through Kiriwaneliya village, offering dramatic views from near the top of the waterfall.",
        },

        {
          type: "split-paragraph",
          heading: "The Descent",
          headingLevel: "h4",

          paragraphs: [
            "The hike to the base of Laxapana Falls is physically demanding, especially on the return climb uphill.",
            "Visitors are rewarded with views of the massive plunge pool and the intense spray created by the waterfall.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hatton/waterfalls/laxapana.webp`,
          imageAlt: "Laxapana Falls in Sri Lanka",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Important Tips",
        },

        {
          type: "p",
          text: "<strong>Swimming:</strong> Swimming is generally discouraged due to dangerous currents and varying water depth.",
        },

        {
          type: "p",
          text: "<strong>Leeches:</strong> Trails can contain leeches after rainfall, especially through tea estate paths.",
        },

        {
          type: "p",
          text: "<strong>From Hatton:</strong> Approximately 1 hour by road.",
        },

        {
          type: "p",
          text: "<strong>Nearby Attraction:</strong> Aberdeen Falls is commonly combined with Laxapana as part of a day trip.",
        },
      ],
    },

    {
      type: "text",
      id: "aberdeen-falls",
      kicker: "Forest Waterfall",
      title: "Aberdeen Falls",
      align: "left",

      content: [
        {
          type: "p",
          text: "Often described as a hidden gem, Aberdeen Falls is a dramatic 98-meter waterfall surrounded by forest and tea estate landscapes.",
        },

        {
          type: "p",
          text: "The waterfall was named after the Scottish city of Aberdeen during the colonial tea estate period.",
        },

        {
          type: "h3",
          text: "Routes to the Falls",
        },

        {
          type: "p",
          text: "<strong>Ginigathena Route:</strong> The easier and more popular route, involving a scenic walk of around 1.2 km after reaching the Buddha statue near Ambatale Road.",
        },

        {
          type: "p",
          text: "<strong>Norton Bridge Route:</strong> A steeper and more rugged approach through dense vegetation.",
        },

        {
          type: "split-paragraph",
          heading: "The Forest Trail",
          headingLevel: "h4",

          paragraphs: [
            "The route to Aberdeen Falls passes through jungle scenery, tea bushes, and steep stairways.",
            "A concrete observation platform near the waterfall provides one of the best and safest viewpoints for photography.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hatton/waterfalls/aberdeen.webp`,
          imageAlt: "Aberdeen Falls surrounded by forest",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Travel Advice",
        },

        {
          type: "p",
          text: "<strong>Swimming:</strong> Swimming in the deep rock pool is generally discouraged due to strong currents and hidden depths.",
        },

        {
          type: "p",
          text: "<strong>Leech Protection:</strong> Long socks and salt or lime are useful during wet weather conditions.",
        },

        {
          type: "p",
          text: "<strong>Best Time:</strong> January to April for safer hiking and clearer photography conditions.",
        },

        {
          type: "p",
          text: "<strong>Combined Trip:</strong> Aberdeen Falls is frequently paired with Laxapana Falls during the same excursion.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=WJWW%2BW7V%2C%20Avissawella%20-%20Hatton%20-%20Nuwara%20Eliya%20Hwy%2C%20Talawakelle%2C%20Sri%20Lanka",
        },
      ],
    },
  ],
};

export default HattonWaterfallsArticle;