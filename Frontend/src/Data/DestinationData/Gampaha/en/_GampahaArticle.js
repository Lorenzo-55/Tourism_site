const GampahaArticle = {
  breadcrumbItems: [
    { label: "Places", to: "/places" },
    { label: "Gampaha", to: "/places/gampaha" },
  ],

  hero: {
    kicker: "Western Province",
    title: "Gampaha",
    subtitle:
      "A historically rooted region that has grown into a major administrative, economic, and urban center near Colombo.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Gampaha/hero/gampaha-hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "From Forest Settlements to Urban Growth",
    paragraphs: [
      "Gampaha, located in the Western Province of Sri Lanka, is a region with a rich history and a fast-developing present.",
      "Once a largely forested area tied to ancient kingdoms, it has evolved into one of the country’s most important districts, balancing heritage, agriculture, and rapid urban expansion.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history-of-gampaha",
      kicker: "History",
      title: "History of Gampaha",
      align: "left",
      content: [
        {
          type: "p",
          text: "The name \"Gampaha\" literally means \"Five Villages\" in Sinhala, referring to Ihalagama, Pahalagama, Medagama, Pattiyagama, and Aluthgama. These early settlements formed the foundation of what would later become a major district in Sri Lanka.",
        },
        {
          type: "p",
          text: "Before 1815, the area was largely covered in dense forest, though it was historically part of the ancient Kingdom of Sitawaka. Its transformation into a more structured settlement began during the colonial period.",
        },
        {
          type: "p",
          text: "Under Portuguese rule, important routes connecting the lowlands to the hill country passed through Gampaha, increasing its strategic importance. The Dutch later used the region as a center for cinnamon collection, linking it to the island’s valuable spice trade.",
        },
        {
          type: "split-paragraph",
          heading: "British Development and Expansion",
          headingLevel: "h4",
          paragraphs: [
            "The arrival of the British marked a turning point in Gampaha’s development. Infrastructure improvements accelerated growth, most notably with the completion of the Henarathgoda railway station in 1866 as part of the Colombo line.",
            "In 1867, the first rubber tree in Sri Lanka was planted at the Henarathgoda Botanical Garden. This event tied Gampaha closely to botanical research and the development of one of the country’s most important export industries.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Gampaha/history/botanical-garden.webp`,
          imageAlt: "Henarathgoda Botanical Garden",
          mediaPosition: "right",
        },
        {
          type: "p",
          text: "Administratively, Gampaha remained a village council until 1945, when it was upgraded to an urban council. A major milestone came in 1978, when the Gampaha District was created from the northern part of the Colombo District, making Gampaha its administrative capital and driving rapid development.",
        },
        {
          type: "p",
          text: "The region also holds cultural and religious importance, with Buddhist heritage sites such as Attanagalla Raja Maha Viharaya and the historic cave temples of Pilikuththuwa and Maligatenna reflecting its long-standing spiritual significance.",
        },
      ],
    },

    {
      type: "text",
      id: "gampaha-nowadays",
      kicker: "Present Day",
      title: "Gampaha Nowadays",
      align: "left",
      content: [
        {
          type: "p",
          text: "Today, Gampaha District is the second most populous district in Sri Lanka after Colombo and has developed into a dynamic urban and economic center.",
        },
        {
          type: "p",
          text: "Its proximity to Colombo, located about 27 km away, and to Bandaranaike International Airport has made it a key residential and commercial hub. Ongoing infrastructure projects, including expressways and transport systems, continue to strengthen its connectivity and growth.",
        },
        {
          type: "p",
          text: "As the administrative capital of the district, Gampaha hosts key government institutions such as the District Secretariat, reinforcing its importance in governance and regional management.",
        },
        {
          type: "p",
          text: "The local economy is diverse, combining agriculture—such as paddy, rubber, coconut, and pineapple—with rural industries like pottery and textiles. Manufacturing has also expanded due to its proximity to Free Trade Zones, while the service sector continues to grow.",
        },
        {
          type: "p",
          text: "Education plays a major role in the district, with high literacy rates and strong institutions. Gampaha is connected to the University of Kelaniya and is home to the Gampaha Wickramarachchi Ayurveda Institute, contributing to both modern and traditional education systems.",
        },
        {
          type: "p",
          text: "Culturally, Gampaha reflects a predominantly Sinhalese and Buddhist identity, while also supporting Christian, Hindu, and Muslim communities. This diversity is visible in its temples, churches, and places of worship, creating a setting of interfaith coexistence.",
        },
        {
          type: "p",
          text: "Overall, Gampaha successfully balances its agricultural roots and cultural heritage with ongoing urbanization and industrial growth, making it an increasingly important and attractive region in Sri Lanka.",
        },
      ],
    },

    {
      type: "cards",
      kicker: "Explore",
      title: "Key Aspects of Gampaha",
      align: "center",
      items: [
        {
          title: "Historical Kingdoms & Eras",
          description: "From the Kingdom of Sitawaka to colonial transformation.",
          image: `${import.meta.env.BASE_URL}Destinations/Gampaha/cards/history.webp`,
        },
        {
          title: "Religious & Historical Sites",
          description: "Temples and heritage sites reflecting deep cultural roots.",
          image: `${import.meta.env.BASE_URL}Destinations/Gampaha/cards/temples.webp`,
        },
        {
          title: "Education & Modern Institutions",
          description: "Universities and institutes shaping regional development.",
          image: `${import.meta.env.BASE_URL}Destinations/Gampaha/cards/education.webp`,
        },
        {
          title: "Urban Development",
          description: "Rapid expansion driven by infrastructure and connectivity.",
          image: `${import.meta.env.BASE_URL}Destinations/Gampaha/cards/urban.webp`,
        },
        {
          title: "Henarathgoda Botanical Garden",
          description: "Site of Sri Lanka’s first rubber tree and botanical research.",
          image: `${import.meta.env.BASE_URL}Destinations/Gampaha/cards/botanical.webp`,
        },
        {
          title: "Notable Remains Today",
          description: "Visible traces of history embedded in the modern landscape.",
          image: `${import.meta.env.BASE_URL}Destinations/Gampaha/cards/remains.webp`,
        },
      ],
    },
  ],
};

export default GampahaArticle;