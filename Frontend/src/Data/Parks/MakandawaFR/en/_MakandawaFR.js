const MakandawaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Makandawa Forest Reserve" },
  ],

  hero: {
    kicker: "Nature & Adventure",
    title: "Makandawa Forest Reserve",
    subtitle:
      "A lush rainforest escape in Kitulgala known for biodiversity, trekking, and river adventures.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Makandawa/makandawa1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Rainforest Gateway in Kitulgala",
    paragraphs: [
      "Makandawa Forest Reserve, often referred to as the Kitulgala Forest Reserve, is a key biodiversity hotspot located in Sri Lanka’s wet zone near the town of Kitulgala. Known for its dense greenery and rich wildlife, the reserve forms an essential part of the region’s natural landscape and attracts both nature enthusiasts and adventure seekers.",
      "The forest lies along the Kelani River, and reaching it is part of the experience, typically involving a crossing by canoe or raft. This setting, combined with its ecological importance, makes Makandawa one of the most distinctive rainforest destinations in the country.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "environment",
      kicker: "Landscape",
      title: "Location and Environment",
      align: "left",

      paragraphs: [
        "Makandawa Forest Reserve is situated in the Sabaragamuwa Province within Sri Lanka’s wet zone, where heavy rainfall from two monsoon seasons sustains its dense vegetation. Covering approximately 1,155 hectares, it is classified as a secondary lowland rainforest, characterized by thick canopy cover and high humidity.",
        "The surrounding Kelani River plays a defining role in the landscape, forming a natural boundary and contributing to the region’s ecosystem. During drier periods, it may be possible to wade across, but most visitors access the forest by boat.",
        "The area gained international recognition as the filming location for the 1957 film “The Bridge on the River Kwai,” particularly along the dramatic Kelani River gorge.",
      ],
    },

    {
      type: "text",
      id: "biodiversity",
      kicker: "Wildlife",
      title: "Biodiversity and Wildlife",
      align: "left",

      paragraphs: [
        "Makandawa Forest Reserve is widely regarded as one of the best locations in Sri Lanka for birdwatching, with over 50 recorded species including several endemics. Notable birds include the Sri Lanka orange-billed babbler, green-billed coucal, chestnut-backed owlet, yellow-fronted barbet, and Sri Lanka grey hornbill.",
        "Beyond birdlife, the forest supports a range of reptiles, amphibians, and mammals. Species such as the grizzled giant squirrel are commonly seen, while rarer sightings may include the red slender loris.",
        "The flora is equally rich, with towering dipterocarp trees, ferns, orchids, and a variety of medicinal plants contributing to the dense and layered rainforest environment.",
      ],
    },

    {
      type: "text",
      id: "activities",
      kicker: "Experience",
      title: "Activities and Exploration",
      align: "left",

      content: [
        {
          type: "p",
          text: "Rainforest trekking is the main activity within Makandawa, with guided trails leading through dense jungle, across streams, and into hidden clearings. These walks provide opportunities to observe wildlife and experience the forest up close.",
        },
        {
          type: "p",
          text: "The path to Belilena Cave, an important prehistoric archaeological site, often passes through the reserve, combining natural exploration with historical interest.",
        },
        {
          type: "p",
          text: "Several waterfalls, including Makulu Ella and Lenakiri Ella, are found within the forest, offering scenic viewpoints and quiet resting spots along trekking routes.",
        },
        {
          type: "p",
          text: "The surrounding Kitulgala area extends the experience with adventure activities along the Kelani River, including white water rafting, canyoning, and waterfall abseiling.",
        },
        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.991621974184581,80.40441680852965",
        },
      ],
    },

    {
      type: "text",
      id: "visiting",
      kicker: "Travel Guide",
      title: "Visitor Information",
      align: "left",

      paragraphs: [
        "The best time to visit Makandawa Forest Reserve is during the relatively drier months from December to February and August to September, when trails are easier to navigate. The rest of the year is influenced by heavy monsoon rains, which can make trekking more challenging.",
        "Visitors should be prepared for rainforest conditions by bringing insect repellent, wearing proper hiking shoes, and using anti-leech socks where necessary. Carrying water is essential due to the humid climate.",
        "Hiring an experienced local guide is strongly recommended for safe navigation and better wildlife spotting, as well as for gaining deeper insight into the forest’s ecology.",
        "The reserve is generally open daily, typically from early morning to late afternoon, and a small entrance fee is required.",
      ],
    },
  ],
};

export default MakandawaArticle;