const NuwaraEliyaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Nuwara Eliya" },
  ],

  hero: {
    kicker: "Central Highlands",
    title: "Nuwara Eliya",
    subtitle:
      "A highland city known as ‘Little England,’ shaped by colonial history, tea plantations, cool climate, and scenic landscapes.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/NuwaraEliya/nuwara-eliya-hero.jpg`,
  },

  overview: {
    kicker: "Overview",
    title: "A Colonial-Era Hill Town in Sri Lanka’s Highlands",
    paragraphs: [
      "Nuwara Eliya, often referred to as “Little England,” is a distinctive city in Sri Lanka’s central highlands, located at an altitude of around 1,868 meters. Its cool, temperate climate and scenic surroundings made it a favored retreat during the British colonial period, and that influence remains visible today. :contentReference[oaicite:0]{index=0}",
      "The city blends colonial architecture, tea-covered hills, and natural attractions, creating a setting that feels different from the rest of the island. Today, it serves as both a tourist destination and a center for Sri Lanka’s tea industry. :contentReference[oaicite:1]{index=1}",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history",
      kicker: "History",
      title: "Colonial Origins and the Rise of Tea",
      align: "left",
      paragraphs: [
        "Nuwara Eliya was formally established in the 19th century by British Governor Samuel Baker, although the area had earlier been used by local travelers. It quickly developed into a colonial retreat where British officials and planters escaped the heat of the lowlands. :contentReference[oaicite:2]{index=2}",
        "The British influence remains visible in the town’s architecture, with Tudor-style houses, colonial hotels, and landscaped gardens reflecting European design. :contentReference[oaicite:3]{index=3}",
        "Initially, coffee plantations dominated the region, but after disease devastated crops, tea cultivation replaced coffee. This shift turned Nuwara Eliya into the heart of Sri Lanka’s tea industry, a role it continues to hold today. :contentReference[oaicite:4]{index=4}",
      ],
    },

    {
      type: "text",
      id: "tea-industry",
      kicker: "Economy",
      title: "Tea Production and Highland Landscapes",
      align: "left",
      content: [
        {
          type: "p",
          text: "Tea plantations dominate the landscape around Nuwara Eliya, forming the foundation of the local economy and shaping the visual identity of the region. The area is widely regarded as the center of Ceylon tea production, attracting visitors interested in both the scenery and the process behind the industry. :contentReference[oaicite:5]{index=5}",
        },
        {
          type: "p",
          text: "Many tea estates and factories are open to visitors, offering insight into the journey from leaf to cup. Locations such as Damro Labookellie Tea Centre, Bluefield Tea Gardens, and the Heritance Tea Factory provide experiences ranging from guided tours to immersive stays. :contentReference[oaicite:6]{index=6}",
        },
        {
          type: "split-paragraph",
          heading: "Tea Pickers and Daily Life",
          headingLevel: "h4",
          paragraphs: [
            "The tea industry relies heavily on the labor of tea pickers, many of whom belong to Indian Tamil communities brought to the region during the colonial period. Their work remains essential to maintaining Sri Lanka’s global reputation for tea.",
            "While the industry is economically vital, it is also associated with ongoing social and economic challenges, reflecting a complex legacy that continues to shape the region.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/NuwaraEliya/tea-pickers.jpg`,
          imageAlt: "Tea pickers in Nuwara Eliya",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "culture",
      kicker: "Culture",
      title: "Colonial Influence and Modern Identity",
      align: "left",
      paragraphs: [
        "Nuwara Eliya retains a strong colonial atmosphere, with landmarks such as the Grand Hotel and the Nuwara Eliya Golf Club reflecting its British heritage. Activities like golf and horse racing at the Nuwara Eliya Racecourse continue traditions introduced during that era. :contentReference[oaicite:7]{index=7}",
        "Today, the city blends these colonial elements with modern tourism and local culture. Although relatively small in population, the wider district is diverse, with a strong presence of Indian Tamil communities connected to the tea plantations. :contentReference[oaicite:8]{index=8}",
      ],
    },

    {
      type: "text",
      id: "nature",
      kicker: "Nature",
      title: "Parks, Lakes, and Highland Scenery",
      align: "left",
      paragraphs: [
        "Nuwara Eliya is surrounded by natural attractions that complement its cooler climate. Gregory Lake and Victoria Park are among the most popular recreational spots, offering space for boating, walking, and outdoor relaxation. :contentReference[oaicite:9]{index=9}",
        "The city also serves as a gateway to nearby natural destinations such as Horton Plains National Park, while Sri Lanka’s highest mountain, Pidurutalagala, rises above the surrounding landscape. :contentReference[oaicite:10]{index=10}",
      ],
    },

    {
      type: "text",
      id: "markets",
      kicker: "Local Life",
      title: "Markets and Everyday Experience",
      align: "left",
      content: [
        {
          type: "p",
          text: "Nuwara Eliya’s markets provide a glimpse into local life, with fresh produce, regional goods, and everyday trade forming a central part of the city’s rhythm. The Central Market, located near New Bazaar Street, is one of the most active and recognizable spots in town. :contentReference[oaicite:11]{index=11}",
        },
        {
          type: "split-paragraph",
          heading: "Local Specialties and Small-Scale Production",
          headingLevel: "h4",
          paragraphs: [
            "Beyond the main market, smaller specialty locations add to the local experience. One example is the Franciscan Sisters’ Jam Room, where handmade jams and condiments are produced as part of a small cottage industry.",
            "These places reflect the combination of local tradition and small-scale enterprise that continues to shape everyday life in the region.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/NuwaraEliya/jam-room.jpg`,
          imageAlt: "Franciscan Sisters Jam Room",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "events",
      kicker: "Events",
      title: "Seasonal Atmosphere and Festivals",
      align: "left",
      paragraphs: [
        "Nuwara Eliya experiences a peak in activity during April, when the Sinhala and Tamil New Year brings an influx of visitors. The cooler climate makes it a popular holiday destination during this period, and the town becomes more lively with seasonal events and gatherings. :contentReference[oaicite:12]{index=12}",
        "Throughout the year, the city maintains a balance between its historic identity and its role as a modern tourism destination, combining heritage, nature, and local culture in a single setting. :contentReference[oaicite:13]{index=13}",
      ],
    },

    {
      type: "cards",
      kicker: "Highlights",
      title: "Points of Interest",
      align: "center",

      items: [
        {
          image: `${import.meta.env.BASE_URL}Destinations/NuwaraEliya/history.jpg`,
          imageAlt: "Colonial history of Nuwara Eliya",
          title: "History & Colonial",
          description:
            "Nuwara Eliya’s identity is deeply shaped by its British colonial past, visible in its architecture, institutions, and urban layout.",
          to: "/places/nuwara-eliya/history-colonial",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/NuwaraEliya/tea.jpg`,
          imageAlt: "Tea plantations in Nuwara Eliya",
          title: "Tea & Industry",
          description:
            "The surrounding tea estates form the heart of Sri Lanka’s tea industry, offering both economic importance and iconic landscapes.",
          to: "/places/nuwara-eliya/tea-industry",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/NuwaraEliya/nature.jpg`,
          imageAlt: "Nature and parks in Nuwara Eliya",
          title: "Nature & Parks",
          description:
            "Parks, lakes, and nearby highland reserves provide a cooler, scenic environment ideal for outdoor activities and exploration.",
          to: "/places/nuwara-eliya/nature-parks",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/NuwaraEliya/waterfalls.jpg`,
          imageAlt: "Waterfalls near Nuwara Eliya",
          title: "Waterfalls",
          description:
            "The surrounding highlands are home to several waterfalls, adding to the region’s natural appeal and landscape variety.",
          to: "/places/nuwara-eliya/waterfalls",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/NuwaraEliya/religion.jpg`,
          imageAlt: "Religious and cultural sites",
          title: "Religion & Culture",
          description:
            "A mix of colonial heritage and local traditions creates a diverse cultural and religious landscape across the region.",
          to: "/places/nuwara-eliya/religion-culture",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/NuwaraEliya/markets.jpg`,
          imageAlt: "Markets in Nuwara Eliya",
          title: "Markets & Local Life",
          description:
            "Local markets and small-scale producers reflect the everyday rhythm and community life of the highland town.",
          to: "/places/nuwara-eliya/markets-local-life",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/NuwaraEliya/events.jpg`,
          imageAlt: "Events in Nuwara Eliya",
          title: "Events",
          description:
            "Seasonal celebrations, especially during the New Year period, bring energy and activity to the cool highland setting.",
          to: "/places/nuwara-eliya/events",
        },
      ],
    },
  ],
};

export default NuwaraEliyaArticle;