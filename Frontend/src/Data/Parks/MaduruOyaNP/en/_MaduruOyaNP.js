const MaduruOyaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Maduru Oya National Park" },
  ],

  hero: {
    kicker: "Wildlife & Heritage",
    title: "Maduru Oya National Park",
    subtitle:
      "A remote sanctuary where wildlife, ancient engineering, and indigenous culture intersect.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/MaduruOya/maduruoya1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Quiet Wilderness with Deep Cultural Roots",
    paragraphs: [
      "Maduru Oya National Park, located primarily in Sri Lanka’s Eastern Province, is one of the country’s more secluded wildlife reserves, offering a quieter and more untouched safari experience. Established in 1983 as part of the Accelerated Mahaweli Development Programme, the park plays a crucial role in protecting key reservoir catchments and supporting wildlife habitats.",
      "Beyond its ecological importance, the area is rich in history, with ancient irrigation systems, Buddhist ruins, and long-standing connections to Sri Lanka’s indigenous Vedda community. This combination of nature and heritage gives the park a distinct character compared to more commercialized destinations.",
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
        "The region around Maduru Oya has been important for thousands of years due to its water resources and early human settlements. Archaeological remains within the park include an ancient stone and brick sluice gate, believed to date back to before the 6th century BCE, showcasing advanced irrigation engineering for its time.",
        "Scattered across the landscape are ruins of Buddhist shrines, temples, dagobas, and hermitages, along with Brahmi inscriptions dating between the 3rd and 1st centuries BCE. These findings reflect the area’s long-standing religious and cultural importance.",
        "The modern park was officially designated on November 9, 1983, with the dual purpose of protecting five major reservoirs and providing a sanctuary for wildlife, particularly the Asian elephant.",
      ],
    },

    {
      type: "text",
      id: "wildlife",
      kicker: "Nature",
      title: "Wildlife and Ecology",
      align: "left",
      paragraphs: [
        "Maduru Oya National Park is known for its relatively undisturbed ecosystem and strong wildlife presence. Large herds of Asian elephants are a defining feature, often seen moving across open areas and near water sources.",
        "The park also supports species such as sloth bears, leopards, water buffalo, spotted deer, and endemic animals like the grey slender loris. Birdlife is equally diverse, with over 100 recorded species including painted storks, white-bellied sea eagles, and the Sri Lankan junglefowl.",
        "Its quieter environment compared to parks like Yala or Minneriya allows for a more immersive and less crowded wildlife experience.",
      ],
    },

    {
      type: "text",
      id: "activities",
      kicker: "Experience",
      title: "Safari and Activities",
      align: "left",
      content: [
        {
          type: "p",
          text: "Jeep safaris are the primary way to explore Maduru Oya, offering access to wildlife-rich areas and scenic landscapes. The low number of vehicles enhances the sense of solitude, often making it feel like a private safari experience.",
        },
        {
          type: "p",
          text: "Birdwatching and nature photography are popular due to the park’s rich biodiversity and open terrain. Visitors can also explore ancient ruins, including the historic sluice gate, which adds a cultural dimension to the safari.",
        },
        {
          type: "p",
          text: "Camping facilities are available for those seeking a deeper wilderness experience, while cultural encounters with the local Vedda community may be arranged through responsible guides.",
        },
        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=7.647795093430274,81.18678930853402",
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
        "The best time to visit Maduru Oya National Park is during the dry season from March to September, when wildlife is easier to spot as animals gather around reservoirs and limited water sources. Safari durations typically range from half-day excursions of three to four hours to full-day experiences lasting up to eight hours.",
        "The park is accessible via routes through Aralaganwila or Manampitiya, and while there are no hotels within the park itself, accommodations are available in nearby areas, along with campsites and bungalows managed by the Department of Wildlife Conservation.",
        "Entrance costs generally include conservation fees, vehicle charges, and taxes, with jeep hire for a half-day safari typically ranging from $50 to $70. It is advisable to confirm total costs in advance with a tour operator to avoid confusion.",
      ],
    },

    {
      type: "text",
      id: "vedda",
      kicker: "Culture",
      title: "The Vedda Community and Henanigala",
      align: "left",
      content: [
        {
          type: "p",
          text: "Maduru Oya National Park is closely connected to the Vedda people, the indigenous inhabitants of Sri Lanka whose history stretches back tens of thousands of years. Traditionally hunter-gatherers, they lived in close harmony with the forest, relying on hunting, gathering, and deep ecological knowledge.",
        },
        {
          type: "p",
          text: "The establishment of the park in 1983 led to the displacement of many Vedda communities, who were resettled in areas such as Henanigala. This transition forced a shift from forest-based living to agriculture, significantly impacting their cultural practices and economic stability.",
        },
        {
          type: "split-paragraph",
          heading: "Henanigala: Culture and Archaeology",
          headingLevel: "h4",
          paragraphs: [
            "Henanigala represents a unique intersection of living culture and ancient history. It is both a resettlement village for Vedda communities and the location of an important archaeological site with roots dating back to early Buddhist monastic settlements.",
            "Nearby, the Henanigala rock site features the remains of a large ancient stupa, long cave complexes with drip-ledges, and Brahmi inscriptions.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/MaduruOya/maduruoya2.webp`,
          imageAlt: "Henanigala rock and ruins",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "henanigala-visit",
      kicker: "Practical Info",
      title: "Visiting Henanigala",
      align: "left",
      content: [
        {
          type: "p",
          text: "Henanigala Raja Maha Viharaya is an accessible archaeological and religious site featuring a large rock outcrop, cave complexes, and ancient ruins. Visitors can explore the area, climb the rock, and view remnants of the ancient monastery.",
        },
        {
          type: "p",
          text: "As an active Buddhist site, modest dress is required, and visitors must remove shoes and hats before entering sacred areas. A visit typically takes two to three hours.",
        },
        {
          type: "button",
          label: "View Henanigala on Google Maps",
          href: "https://www.google.com/maps?q=7.570667585958948,81.0640186972574",
        },
      ],
    },
  ],
};

export default MaduruOyaArticle;