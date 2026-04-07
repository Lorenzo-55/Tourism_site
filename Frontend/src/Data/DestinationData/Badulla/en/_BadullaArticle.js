const BadullaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Badulla", to: "/places/badulla" },
  ],

  hero: {
    kicker: "Uva Province",
    title: "Badulla",
    subtitle:
      "A historic highland city shaped by ancient heritage, resistance, and the tea country landscapes of Sri Lanka.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Badulla/hero/badulla-hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "History, Heritage, and Highland Life",
    paragraphs: [
      "Badulla, the capital of Uva Province in Sri Lanka, has a rich and layered history that transitions into a thriving modern-day city, predominantly known for its natural beauty and tea industry.",
      "From ancient settlements and sacred religious sites to anti-colonial resistance and modern agriculture, Badulla reflects many of the defining strands of Sri Lanka’s past and present.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "badulla-history",
      kicker: "History",
      title: "Badulla’s Historical Background",
      align: "left",
      paragraphs: [
        "Badulla's history stretches from ancient times through the colonial era, playing a significant role in the island's political and economic life.",
        "The area has evidence of ancient settlements dating back to the Anuradhapura Kingdom, showing its long-standing importance in Sri Lanka’s early civilization.",
        "The city is home to the Muthiyangana Raja Maha Vihara, a revered Buddhist temple believed to have been visited by the Gautama Buddha, dating back to the 2nd century BCE.",
        "Before the British conquest, Badulla served as a base for a local Sinhalese prince or regional ruler who governed under the Kandyan Kingdom.",
      ],
    },

    {
      type: "text",
      id: "uva-wellassa-uprising",
      kicker: "Colonial Period",
      title: "The Uva-Wellassa Uprising of 1817–1818",
      align: "left",
      content: [
        {
          type: "p",
          text: "The Uva-Wellassa Uprising of 1817–1818, also known as the Great Rebellion of 1818, was a major and widespread revolt against British colonial rule in the former Kandyan Kingdom. It marked the first large-scale resistance movement after the British took control of the entire island.",
        },
        {
          type: "p",
          text: "The rebellion began in the southeastern regions of Uva and Wellassa, areas that were central to the Kandyan Kingdom. It was driven by growing dissatisfaction among the Kandyan chiefs and people, who believed the British had violated the Kandyan Convention of 1815.",
        },
        {
          type: "p",
          text: "Key grievances included the British failure to respect traditional authority structures, particularly the roles of Kandyan chiefs and Buddhist clergy. The appointment of a non-traditional local leader further intensified tensions, as it was seen as undermining indigenous leadership.",
        },
        {
          type: "p",
          text: "There was also concern over the neglect of Buddhism, despite earlier promises to protect it. Alongside this, a desire to restore native rule emerged, with a claimant to the Kandyan throne proclaimed as king, giving the rebellion a clear political direction.",
        },
        {
          type: "p",
          text: "The uprising gained momentum when Monarawila Keppetipola Disawe, initially sent by the British to suppress the revolt, joined the rebels. His leadership transformed the movement into a large-scale resistance that spread across the Kandyan territories.",
        },
        {
          type: "split-paragraph",
          heading: "Suppression and Consequences",
          headingLevel: "h4",
          paragraphs: [
            "The British response was severe. Governor Robert Brownrigg imposed martial law and implemented a scorched-earth policy, destroying villages, crops, and irrigation systems to cut off supplies and weaken the rebellion.",
            "The uprising was eventually crushed due to internal divisions, widespread starvation caused by these tactics, and the capture of key leaders. Keppetipola Disawe and other leaders were executed in 1818, marking the end of the rebellion.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Badulla/history/keppetipola.webp`,
          imageAlt: "Historical landscape tied to the Uva-Wellassa uprising",
          mediaPosition: "right",
        },
        {
          type: "p",
          text: "The aftermath left the Uva-Wellassa region devastated both economically and demographically. British control tightened, and new land policies later enabled the expansion of plantation agriculture, especially coffee and tea.",
        },
        {
          type: "p",
          text: "Today, the Uva-Wellassa Uprising is remembered as a significant and tragic struggle for independence, and a defining moment in Sri Lanka’s resistance to colonial rule.",
        },
      ],
    },

    {
      type: "text",
      id: "badulla-nowadays",
      kicker: "Present Day",
      title: "Badulla Nowadays",
      align: "left",
      paragraphs: [
        "Today, Badulla is a scenic and multi-ethnic city that serves as a key administrative, commercial, and tourist hub in the Uva Province.",
        "Its economy is largely based on agriculture, with tea, rubber, and vegetable cultivation playing a central role. The region is one of Sri Lanka’s leading tea-producing areas and functions as a marketplace for surrounding rural communities and estates.",
        "Badulla is culturally diverse, with a mix of Sinhalese and Tamil communities living together. Religious sites and local festivals, including the Esala Perahera and the Muthiyangana Temple, reflect its rich cultural identity.",
        "The city is well-connected by road and by the upcountry railway line, known for its scenic routes through Sri Lanka’s hill country, linking Badulla with Colombo and Kandy.",
      ],
    },
    {
        type: "cards",
        kicker: "Explore",
        title: "Points of Interest",
        align: "center", // "left" | "center"

        items: [
            {
            title: "Muthiyangana Raja Maha Vihara",
            image: `${import.meta.env.BASE_URL}Destinations/Badulla/poi/muthiyangana.webp`,
            imageAlt: "Muthiyangana Raja Maha Vihara",
            to: "/places/badulla/muthiyangana-raja-maha-vihara",
            },
            {
            title: "Bogoda Wooden Bridge",
            image: `${import.meta.env.BASE_URL}Destinations/Badulla/poi/bogoda-bridge.webp`,
            imageAlt: "Bogoda Wooden Bridge",
            to: "/places/badulla/bogoda-wooden-bridge",
            },
            {
            title: "Dunhinda Falls",
            image: `${import.meta.env.BASE_URL}Destinations/Badulla/poi/dunhinda-falls.webp`,
            imageAlt: "Dunhinda Falls",
            to: "/places/badulla/dunhinda-falls",
            },
            {
            title: "Namunukula Mountain Range",
            image: `${import.meta.env.BASE_URL}Destinations/Badulla/poi/namunukula.webp`,
            imageAlt: "Namunukula Mountain Range",
            to: "/places/badulla/namunukula-mountain-range",
            },
            {
            title: "Colonial Landmarks",
            image: `${import.meta.env.BASE_URL}Destinations/Badulla/poi/colonial-landmarks.webp`,
            imageAlt: "Colonial landmarks in Badulla",
            to: "/places/badulla/colonial-landmarks",
            },
        ],
    }
  ],
};

export default BadullaArticle;