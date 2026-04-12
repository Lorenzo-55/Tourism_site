const MannarArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Mannar" },
  ],

  hero: {
    kicker: "Northern Province",
    title: "Mannar",
    subtitle:
      "A historic peninsula shaped by trade, colonial rule, marine life, and a quieter side of northern Sri Lanka.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Mannar/mannar-hero.jpg`,
  },

  overview: {
    kicker: "Overview",
    title: "A Distinctive Coastal Region in Northern Sri Lanka",
    paragraphs: [
      "Mannar is a peninsula and district in Sri Lanka’s Northern Province, known for its strategic location, coastal landscapes, and layered history. Its position close to India has long shaped its role in trade, movement, and cultural exchange, giving the region a character that feels distinct from many other parts of the island.",
      "Today, Mannar remains quieter and less developed for tourism than Sri Lanka’s southern and central destinations, but that is also part of its appeal. With historic landmarks, birdlife, beaches, fishing communities, and a strong sense of place, it offers a more rustic and authentic travel experience.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history",
      kicker: "History",
      title: "A Region Shaped by Trade, Empire, and Conflict",
      align: "left",
      paragraphs: [
        "Mannar’s past is closely tied to its strategic location near the Indian coast. For centuries, it served as an important point for trade and transit, connecting Sri Lanka with wider regional networks across the Palk Strait.",
        "The area later became a significant colonial stronghold and came under the rule of the Portuguese, the Dutch, and the British. These phases of foreign control left behind lasting historical traces, including military and religious landmarks that still define the region’s identity.",
        "Like much of the Tamil-dominated north, Mannar was also deeply affected by the civil war between 1983 and 2009. Its position made it an important entry and exit point to India during that period. After the war ended, the region gradually reopened and began a longer process of rehabilitation, reconstruction, and renewed development.",
      ],
    },

    {
      type: "text",
      id: "economy-development",
      kicker: "Present Day",
      title: "Rehabilitation, Livelihoods, and Emerging Tourism",
      align: "left",
      paragraphs: [
        "In the post-war period, Mannar has undergone reconstruction and development, with growing interest in its economic and tourism potential. While it remains relatively quiet compared to more established destinations, its coastline, historical sites, and natural environment have increasingly drawn attention.",
        "The local economy has traditionally been centered on fishing and marine resources, supported by Mannar’s location on the Gulf of Mannar. Fish and seafood continue to be major sources of livelihood for many families in the district.",
        "Agriculture is also present, though the region’s identity and economy remain more closely tied to the sea. Tourism is viewed as an emerging sector, with particular potential in nature-based travel, heritage sites, birdwatching, and low-key coastal experiences.",
      ],
    },

    {
      type: "text",
      id: "pearling",
      kicker: "Heritage",
      title: "The Legacy of the Pearl Fishery",
      align: "left",
      content: [
        {
          type: "p",
          text: "One of Mannar’s most notable historical industries is pearling. The region’s pearl banks once gave it international significance, and the story of Mannar’s pearls stretches from ancient prominence to colonial-era overexploitation.",
        },
        {
          type: "p",
          text: "In more recent times, the pearling legacy has also been associated with scientific and economic efforts to restore the lost prominence of the region. This history remains an important part of Mannar’s identity, linking its marine environment to trade, wealth, and historical memory.",
        },
        {
          type: "split-paragraph",
          heading: "Marine Wealth and Historical Importance",
          headingLevel: "h4",
          paragraphs: [
            "The pearling grounds of Mannar once helped make the region famous far beyond Sri Lanka. Their abundance contributed to trade networks and drew outside powers to the area, reinforcing Mannar’s strategic and economic value.",
            "Although the industry no longer holds the same dominance, its legacy still shapes how Mannar is remembered, especially in relation to its maritime history and natural resources.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Mannar/pearling-industry.jpg`,
          imageAlt: "Marine heritage of Mannar and its historic pearling industry",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "landscape-experiences",
      kicker: "Experiences",
      title: "Nature, Coastline, and Everyday Travel",
      align: "left",
      paragraphs: [
        "Mannar is known for its quiet beaches, open coastal landscapes, and slower pace of travel. The beaches are often less developed than those in the south, making them better suited to visitors looking for space, calm, and a less commercial atmosphere.",
        "The peninsula is also known for its wild horses, which can sometimes be seen roaming in certain areas. Their presence adds to the unusual and memorable character of the landscape, giving Mannar an atmosphere unlike anywhere else in the country.",
        "Because the area remains relatively quiet, transport planning is useful. Visitors often rely on tuk-tuks or buses, and arranging movement in advance can make travel easier. Local markets, churches, and temple festivals can also offer a more grounded and culturally meaningful experience of the region.",
      ],
    },

    {
      type: "cards",
      kicker: "Highlights",
      title: "Key Places in and Around Mannar",
      align: "center",
      items: [
        {
          image: `${import.meta.env.BASE_URL}Destinations/Mannar/history.jpg`,
          imageAlt: "Historical heritage of Mannar",
          title: "History",
          description:
            "Mannar’s past reflects its role as a trading point, colonial stronghold, and borderland shaped by both regional exchange and the civil war.",
          to: "/places/mannar/history",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Mannar/pearling-industry.jpg`,
          imageAlt: "Pearling heritage in Mannar",
          title: "Pearling Industry",
          description:
            "A defining chapter of Mannar’s history, the pearl fishery once brought the region international importance and lasting maritime significance.",
          to: "/places/mannar/pearling-industry",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Mannar/mannar-fort.jpg`,
          imageAlt: "Mannar Fort",
          title: "Mannar Fort",
          description:
            "Originally built by the Portuguese and later rebuilt by the Dutch, the fort remains one of the clearest reminders of Mannar’s colonial past.",
          to: "/places/mannar/mannar-fort",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Mannar/adams-bridge.jpg`,
          imageAlt: "Adam's Bridge near Mannar",
          title: "Adam's Bridge",
          description:
            "A remarkable chain of shoals linking Sri Lanka and India, long associated with geography, legend, and Mannar’s strategic location.",
          to: "/places/mannar/adams-bridge",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Mannar/madhu-shrine.jpg`,
          imageAlt: "Shrine of Our Lady of Madhu",
          title: "Shrine of Our Lady of Madhu",
          description:
            "One of Sri Lanka’s most important Catholic pilgrimage sites, closely connected to the wider cultural and religious landscape of the region.",
          to: "/places/mannar/shrine-of-our-lady-of-madhu",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Mannar/baobab-tree.jpg`,
          imageAlt: "Baobab Tree in Mannar",
          title: "Baobab Tree",
          description:
            "A striking and unusual landmark in Mannar, often noted for its rare presence in Sri Lanka and its connection to older trade routes.",
          to: "/places/mannar/baobab-tree",
        },
      ],
    },
  ],
};

export default MannarArticle;