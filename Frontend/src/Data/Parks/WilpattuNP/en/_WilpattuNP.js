const WilpattuArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Wilpattu National Park" },
  ],

  hero: {
    kicker: "Wildlife & Wilderness",
    title: "Wilpattu National Park",
    subtitle:
      "Sri Lanka’s largest national park, known for its unique lakes and elusive predators.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Wilpattu/wilpattu1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "The Land of Lakes and Solitary Safaris",
    paragraphs: [
      "Wilpattu National Park is Sri Lanka’s largest and one of its oldest protected areas, located in the island’s northwestern dry zone. Known for its remote setting and low visitor numbers, it offers a quieter and more immersive safari experience compared to other national parks.",
      "The park is defined by its network of natural water basins known as ‘villus,’ which play a central role in sustaining wildlife. Combined with its deep historical roots and strong predator population, Wilpattu stands out as one of the most distinctive wildlife destinations in the country.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history",
      kicker: "Background",
      title: "History and Ancient Significance",
      align: "left",
      paragraphs: [
        "Wilpattu’s history blends ancient legend with archaeological evidence. The coastal area at Kudrimalai Point is recorded in the Mahavamsa as the landing site of Prince Vijaya in 543 BC, marking the beginning of the Sinhalese civilization.",
        "The region was historically known as Tambapanni, meaning ‘copper-colored land,’ referring to the reddish sand that stained the feet of Vijaya and his followers. Archaeological remains, including sites believed to be associated with Queen Kuveni, are found within the park.",
        "In modern times, the area was first declared a sanctuary in 1905 and later upgraded to National Park status in 1938, making it one of the earliest protected areas in Sri Lanka.",
      ],
    },

    {
      type: "text",
      id: "war-impact",
      kicker: "Modern History",
      title: "Civil War and Recovery",
      align: "left",
      paragraphs: [
        "Wilpattu was closed for an extended period during the Sri Lankan Civil War, which limited conservation efforts and led to issues such as poaching and habitat disturbance.",
        "Following its reopening, efforts have focused on restoring the park’s ecological balance and reestablishing it as a premier wildlife destination.",
      ],
    },

    {
      type: "text",
      id: "villus",
      kicker: "Landscape",
      title: "The Villus Ecosystem",
      align: "left",
      paragraphs: [
        "The defining feature of Wilpattu is its system of over 50 ‘villus,’ shallow natural water basins bordered by sandy rims. These basins fill with rainwater and act as vital water sources for wildlife, especially during dry periods.",
        "The name ‘Wilpattu’ itself translates to ‘Land of Lakes,’ reflecting the importance of these water bodies in shaping the park’s ecosystem and animal movement patterns.",
      ],
    },

    {
      type: "text",
      id: "wildlife",
      kicker: "Wildlife",
      title: "Wildlife and Biodiversity",
      align: "left",
      paragraphs: [
        "Wilpattu is one of the best places in Sri Lanka to spot the Sri Lankan leopard, with a healthy population living within the park. It is also known for sightings of the elusive sloth bear, along with elephants, spotted deer, and a wide range of bird species.",
        "The presence of permanent and seasonal water sources attracts both resident and migratory wildlife, creating dynamic viewing opportunities throughout the year.",
        "Due to its lower visitor numbers, wildlife encounters often feel more natural and less disturbed compared to more crowded parks.",
      ],
    },

    {
      type: "text",
      id: "challenges",
      kicker: "Conservation",
      title: "Current Challenges",
      align: "left",
      paragraphs: [
        "Wilpattu faces ongoing environmental pressures, particularly from habitat loss due to land clearing for agriculture and settlements near its boundaries.",
        "Controversies over illegal road access through the park have raised conservation concerns, as such developments could disrupt wildlife movement and damage sensitive ecosystems.",
        "Seasonal droughts can reduce water availability in the villus, impacting wildlife populations. Additionally, health concerns such as disease outbreaks among animals, including sloth bears, have highlighted the need for stronger monitoring and conservation measures.",
      ],
    },

    {
      type: "text",
      id: "access",
      kicker: "Travel Guide",
      title: "Access and Entrances",
      align: "left",
      content: [
        {
          type: "p",
          text: "Wilpattu National Park has two main entrances. The Hunuwilagama entrance, located near Anuradhapura, is the primary access point and the most commonly used by visitors.",
        },
        {
          type: "p",
          text: "The Eluwankulama entrance, located further south near Puttalam, provides access to less-traveled areas of the park and is often preferred by those seeking a quieter safari experience.",
        },
        {
          type: "p",
          text: "The choice of entrance typically depends on your travel route and accommodation location.",
        },
      ],
    },

    {
      type: "text",
      id: "visiting",
      kicker: "Visitor Info",
      title: "Safari and Visitor Information",
      align: "left",
      content: [
        {
          type: "p",
          text: "Wilpattu can only be explored via a guided safari in an approved 4x4 vehicle. Independent entry by private car or on foot is not permitted within the park.",
        },
        {
          type: "p",
          text: "Safaris are usually arranged through hotels or local tour operators, and it is recommended to book in advance, especially during peak travel periods.",
        },
        {
          type: "p",
          text: "The park is open daily from 6:00 AM to 6:00 PM, with early morning safaris offering the best chance for wildlife sightings.",
        },
        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=8.479625400137353,80.04902443608336",
        },
      ],
    },
  ],
};

export default WilpattuArticle;