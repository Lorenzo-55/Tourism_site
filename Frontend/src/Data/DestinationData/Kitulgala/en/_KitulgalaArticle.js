const KitulgalaArticle = {
  breadcrumbItems: [
    { label: "Places", to: "/places" },
    { label: "Kitulgala", to: "/places/kitulgala" },
  ],

  hero: {
    kicker: "Adventure Capital",
    title: "Kitulgala",
    subtitle:
      "A rainforest town on the Kelani River, known for adventure sports, prehistoric significance, and one of Sri Lanka’s most immersive eco-tourism landscapes.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kitulgala/hero/kitulgala-hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "River Adventure, Rainforest, and Deep History",
    paragraphs: [
      "Kitulgala is a small, picturesque town in the wet zone of Sri Lanka, known today as the country's adventure capital due to its location on the swiftly flowing Kelani River and surrounding rainforests.",
      "Its identity is shaped by a striking mix of nature, adrenaline tourism, local traditions, and prehistoric importance, making it one of the most distinctive inland destinations in Sri Lanka.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "kitulgala-identity",
      kicker: "Character",
      title: "A River Town Shaped by Nature and Experience",
      align: "left",
      content: [
        {
          type: "p",
          text: "Kitulgala’s present-day reputation is built around the Kelani River, the surrounding rainforest, and a tourism culture centered on adventure and nature. Its setting in Sri Lanka’s wet zone gives the town a lush, dramatic landscape that feels very different from the island’s dry and coastal regions.",
        },
        {
          type: "p",
          text: "The town is especially popular with travelers looking for active outdoor experiences, but it also has a quieter side shaped by local products, forest life, and a strong connection to the river. This balance between adrenaline and atmosphere is part of what gives Kitulgala its appeal.",
        },
        {
          type: "p",
          text: "Its wider significance is also defined by prehistory and by its connection to a globally known Hollywood film, giving the town a cultural dimension beyond adventure tourism alone.",
        },
      ],
    },

    {
      type: "text",
      id: "local-economy-and-name",
      kicker: "Local Identity",
      title: "Naming, Local Products, and Everyday Economy",
      align: "left",
      content: [
        {
          type: "p",
          text: "The name Kitulgala comes from the kitul palm, or Caryota urens, which grows abundantly in the region. This tree has long been important to local life and remains closely tied to the area’s identity.",
        },
        {
          type: "p",
          text: "The sap of the kitul palm is processed into syrup and crystallized into jaggery, a traditional sweetener widely used in Sri Lanka. These products are an important part of local economic life and connect the town to older patterns of food production and rural industry.",
        },
        {
          type: "p",
          text: "Although tourism is now the dominant outward-facing part of Kitulgala’s identity, these traditional products still reflect the region’s close relationship with its natural environment. They help preserve a sense of place that goes beyond the adventure image for which the town is now best known.",
        },
      ],
    },

    {
      type: "text",
      id: "adventure-and-ecotourism",
      kicker: "Present Day",
      title: "Adventure Hub and Eco-Tourism",
      align: "left",
      content: [
        {
          type: "p",
          text: "Today, Kitulgala is best known as one of Sri Lanka’s main eco-tourism and adventure destinations. Its dense rainforest, fast-moving river, and rugged terrain make it ideal for both adrenaline activities and nature-based travel.",
        },
        {
          type: "p",
          text: "The town attracts visitors looking for rafting, canyoning, abseiling, and river-based excursions, but it also appeals to those interested in rainforest scenery, birdlife, and quieter exploration. This gives Kitulgala a broad appeal, from thrill-seekers to nature lovers.",
        },
        {
          type: "p",
          text: "What makes the area especially memorable is that many of its activities take place directly within the landscape itself. Rather than being separated from nature, visitors experience the forest, river, rocks, and waterfalls as the setting for the adventure.",
        },
      ],
    },

    {
      type: "horizontal-scroll",
      kicker: "Adventure Activities",
      title: "Adventure Activities on the Kelani River",
      text: "Kitulgala is one of Sri Lanka’s leading destinations for river-based adventure, with experiences ranging from high-adrenaline water sports to calmer nature-focused excursions.",
      align: "center",
      collapsible: false,
      defaultOpen: true,
      toggleLabelOpen: "Show activities",
      toggleLabelClose: "Hide activities",
      titleStyle: "",
      items: [
        {
          title: "White Water Rafting",
          description:
            "This is Kitulgala’s best-known activity, with guided trips along the Kelani River passing through several Class II and Class III rapids. It is the signature adventure experience in the area and one of the main reasons travelers visit the town.",
          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/adventure/white-water-rafting.webp`,
          imageAlt: "White water rafting in Kitulgala",
        },
        {
          title: "Canyoning / Rock Sliding",
          description:
            "Canyoning is one of the other major water adventures associated with Kitulgala and often includes rock sliding and confidence jumps in tributary streams of the Kelani River. It combines physical excitement with close contact with the rainforest and river environment.",
          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/adventure/canyoning.webp`,
          imageAlt: "Canyoning in Kitulgala",
        },
        {
          title: "Waterfall Abseiling",
          description:
            "Waterfall abseiling, or waterfall rappelling, is among the most intense adventure activities in the region. It involves descending steep rock faces while water rushes nearby, creating a dramatic and highly physical experience.",
          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/adventure/waterfall-abseiling.webp`,
          imageAlt: "Waterfall abseiling in Kitulgala",
        },
        {
          title: "Confidence Jumps",
          description:
            "Often included within canyoning experiences, confidence jumps involve leaping from natural rock ledges into deep pools of water. The activity is as much about overcoming hesitation as it is about the jump itself, which makes it especially popular with groups.",
          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/adventure/confidence-jumps.webp`,
          imageAlt: "Confidence jumps in Kitulgala",
        },
        {
          title: "Flat Water Rafting / River Safari",
          description:
            "For a calmer alternative, flat water rafting and river safaris take place on quieter sections of the Kelani River. These trips focus more on scenery, relaxation, and family-friendly exploration than on speed and adrenaline.",
          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/adventure/river-safari.webp`,
          imageAlt: "Flat water rafting in Kitulgala",
        },
        {
          title: "Zip-lining",
          description:
            "Zip-lining has become another popular activity in Kitulgala, offering sweeping views and a different kind of fast-paced outdoor experience. The town is one of Sri Lanka’s most recognized locations for this activity.",
          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/adventure/zipline.webp`,
          imageAlt: "Zip-lining in Kitulgala",
        },
      ],
    },

    {
      type: "text",
      id: "nature-and-history",
      kicker: "Nature and Heritage",
      title: "Prehistory, Forest, and Natural Significance",
      align: "left",
      content: [
        {
          type: "p",
          text: "Beyond adventure tourism, Kitulgala also has major historical and ecological importance. One of the most significant nearby sites is Belilena Cave, located about 8 kilometers away, where archaeological discoveries include skeletal remains of the prehistoric Balangoda Man dating back more than 30,000 years.",
        },
        {
          type: "p",
          text: "This gives the area an importance that reaches far beyond modern recreation. Kitulgala is not only a place of rivers and rainforests, but also part of the deep human history of Sri Lanka.",
        },
        {
          type: "split-paragraph",
          heading: "Makandawa Forest Reserve",
          headingLevel: "h4",
          paragraphs: [
            "The Makandawa Forest Reserve, also known as the Kitulgala Forest Reserve, is one of Sri Lanka’s oldest and most pristine lowland rainforests. Covering more than 1,100 hectares, it is a major biodiversity hotspot and one of the ecological treasures of the region.",
            "Its dense greenery, high rainfall, and rich wildlife make it central to Kitulgala’s eco-tourism identity. The reserve adds depth to the area’s appeal by offering a more immersive natural experience beyond the better-known river adventures.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/main/makandawa-forest.webp`,
          imageAlt: "Makandawa Forest Reserve",
          mediaPosition: "right",
        },
        {
          type: "p",
          text: "Together, the cave, the forest, and the river landscape make Kitulgala a destination where excitement and deep natural history exist side by side. That combination is a major reason the town feels richer and more varied than a simple adventure stop.",
        },
      ],
    },

    {
      type: "cards",
      kicker: "Explore",
      title: "Points of Interest",
      align: "center",
      items: [
        {
          title: "Prehistory & Film",
          description:
            "Discover Kitulgala’s prehistoric significance and its association with an internationally famous film legacy.",
          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/poi/prehistory-film.webp`,
          imageAlt: "Prehistory and film in Kitulgala",
          to: "/places/kitulgala/prehistory-and-film",
        },
        {
          title: "Water Activities",
          description:
            "Explore river-based experiences ranging from rafting to calmer safari-style journeys on the Kelani River.",
          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/poi/water-activities.webp`,
          imageAlt: "Water activities in Kitulgala",
          to: "/places/kitulgala/water-activities",
        },
        {
          title: "Adventure Activities",
          description:
            "See the full range of high-energy outdoor activities that make Kitulgala Sri Lanka’s adventure capital.",
          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/poi/adventure-activities.webp`,
          imageAlt: "Adventure activities in Kitulgala",
          to: "/places/kitulgala/adventure-activities",
        },
        {
          title: "Makandawa Forest Reserve",
          description:
            "Visit one of Sri Lanka’s most important lowland rainforests and a key ecological attraction of the area.",
          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/poi/makandawa-forest-reserve.webp`,
          imageAlt: "Makandawa Forest Reserve",
          to: "/places/kitulgala/makandawa-forest-reserve",
        },
        {
          title: "Waterfalls",
          description:
            "Discover the waterfalls and rocky streams that help define the area’s landscape and adventure setting.",
          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/poi/waterfalls.webp`,
          imageAlt: "Waterfalls in Kitulgala",
          to: "/places/kitulgala/waterfalls",
        },
        {
          title: "Halgolla Tea Estate / Wewalthalawa Plateau",
          description:
            "Explore elevated scenery, plantation landscapes, and quieter viewpoints beyond the river adventure zone.",
          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/poi/halgolla-wewalthalawa.webp`,
          imageAlt: "Halgolla Tea Estate and Wewalthalawa Plateau",
          to: "/places/kitulgala/halgolla-tea-estate-wewalthalawa-plateau",
        },
      ],
    },
  ],
};

export default KitulgalaArticle;