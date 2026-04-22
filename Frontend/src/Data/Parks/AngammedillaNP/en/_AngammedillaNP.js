const AngammedillaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Angammedilla National Park" },
  ],

  hero: {
    kicker: "Wildlife & Nature",
    title: "Angammedilla National Park",
    subtitle:
      "A secluded sanctuary in Sri Lanka’s dry zone, known for elephants, ancient irrigation, and untouched wilderness.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Angammedilla/angammedilla-hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Quiet Link in the Elephant Corridor",
    paragraphs: [
      "Angammedilla National Park is one of Sri Lanka’s newer and more secluded wildlife sanctuaries, located in the Polonnaruwa District. Established in 2006, it plays a vital role as part of the <strong>Elephant Corridor</strong>, linking Minneriya, Kaudulla, and Wasgamuwa National Parks.",
      "Because it receives far fewer visitors than its neighboring parks, it offers a more tranquil and <em>off-the-beaten-path</em> experience, making it especially appealing for those seeking a quieter connection with nature.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "landscape",
      kicker: "Environment",
      title: "Landscape and Setting",
      align: "left",

      paragraphs: [
        "The park is defined by a diverse landscape of dry evergreen forest and riverine habitats, shaped by the Sudu Kanda mountain range that stretches across the region. This mix of terrain supports a wide variety of wildlife while also creating a rugged and scenic environment.",
        "A key purpose of the park’s establishment was to protect the catchment area of the <strong>Parakrama Samudra</strong>, one of Sri Lanka’s most important ancient reservoirs, ensuring the long-term sustainability of both water resources and surrounding ecosystems.",
      ],

      content: [
        {
          type: "split-paragraph",
          heading: "Parakrama Samudra – The Sea of Parakrama",
          headingLevel: "h4",
          paragraphs: [
            "Parakrama Samudra, often called the <em>“Sea of Parakrama,”</em> is a vast 12th-century reservoir that dominates the landscape near Polonnaruwa. Built by King Parakramabahu I, it stands as one of the greatest engineering achievements of the ancient world.",
            "Covering over 2,500 hectares, it is so expansive that strong winds can create waves that resemble those of the ocean. Rather than being a single tank, it was formed by connecting five reservoirs through a sophisticated system of canals and dams.",
            "<strong>The main embankment</strong>, which now functions as a road, stretches for approximately 14 kilometers, offering sweeping views across the water.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Angammedilla/parakrama-samudra.webp`,
          imageAlt: "Parakrama Samudra reservoir",
          mediaPosition: "right",
        },

        {
          type: "split-paragraph",
          heading: "Ancient Irrigation and the Gal Amuna",
          headingLevel: "h4",
          paragraphs: [
            "Within the park itself, remnants of ancient irrigation systems remain visible, including the Angammedilla Gal Amuna, a stone weir once used to divert water with precision. These structures highlight the advanced hydraulic knowledge of Sri Lanka’s ancient civilizations.",
            "The surrounding canal network continues to influence the landscape today, sustaining both wildlife habitats and nearby agricultural regions.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Angammedilla/gal-amuna.webp`,
          imageAlt: "Ancient stone weir Angammedilla",
          mediaPosition: "left",
        },

        {
          type: "split-paragraph",
          heading: "Sudu Kanda – The White Mountain",
          headingLevel: "h4",
          paragraphs: [
            "Sudu Kanda, meaning <strong>“White Mountain,”</strong> forms a striking backdrop to the park. Rising to around 470 meters, it is known for its distinctive pale appearance, caused by large deposits of quartz and marble reflecting the sunlight.",
            "Part of the Wasgamuwa range, the area has a strong association with wildlife, including the elusive sloth bear. The name Wasgamuwa itself is derived from <em>Walas Gamuwa</em>, meaning “Woods of the Bear.”",
            "While many visitors remain focused on nearby cultural sites, Sudu Kanda offers a more remote and adventurous experience for those willing to explore beyond the usual routes.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Angammedilla/sudu-kanda.webp`,
          imageAlt: "Sudu Kanda white mountain",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "wildlife",
      kicker: "Wildlife",
      title: "Elephants and Biodiversity",
      align: "left",

      paragraphs: [
        "Angammedilla is best known for its role as a major elephant corridor, allowing herds of Sri Lankan elephants to move freely between surrounding national parks. As a result, elephant sightings are frequent, especially during the dry season when animals gather near water sources.",
        "Beyond elephants, the park supports a rich diversity of species across different habitats, making it an excellent destination for wildlife enthusiasts and birdwatchers alike.",
      ],

      content: [
        {
          type: "p",
          text: "<strong>Mammals:</strong> Sambar deer, water buffalo, wild boar, and occasionally the elusive leopard or sloth bear.",
        },
        {
          type: "p",
          text: "<strong>Primates:</strong> Purple-faced langur, tufted gray langur, and the nocturnal red slender loris.",
        },
        {
          type: "p",
          text: "<strong>Birdlife:</strong> Sri Lanka junglefowl, peafowl, and numerous migratory species around the waterways.",
        },
      ],
    },

    {
      type: "text",
      id: "activities",
      kicker: "Experiences",
      title: "Things to Do",
      align: "left",

      paragraphs: [
        "The park offers a range of low-impact activities that allow visitors to experience its wilderness while preserving its natural character.",
      ],

      content: [
        {
          type: "p",
          text: "<strong>Jeep Safaris:</strong> The most popular way to explore the park, offering access to remote areas and the best chance of spotting elephants and other wildlife.",
        },
        {
          type: "p",
          text: "<strong>Hiking:</strong> Unlike many national parks, certain areas permit guided nature walks, particularly around the Sudu Kanda hills.",
        },
        {
          type: "p",
          text: "<strong>Camping:</strong> Designated camping sites and a Department of Wildlife Conservation bungalow allow for overnight stays in a quiet, natural setting.",
        },
      ],
    },

    {
      type: "text",
      id: "practical",
      kicker: "Visitor Info",
      title: "Practical Information",
      align: "left",

      paragraphs: [
        "Angammedilla National Park is located approximately 20 km from Polonnaruwa, with access via the Parakrama Samudra bund road followed by a drive along the Angammedilla canal. The journey itself offers scenic views of both water and forest landscapes.",
        "The best time to visit is during the dry season from May to September, when wildlife is easier to spot near water sources. January to April is also notable for increased butterfly activity across the park.",
      ],

      content: [
        {
          type: "p",
          text: "<strong>Operating Hours:</strong> 6:00 AM – 6:00 PM <br /> (ticket counters typically close by 4:00 PM).",
        },
        {
          type: "p",
          text: "<strong>Entrance Fees (Approx.):</strong> Foreign adults: $12–$20 USD + taxes. Local adults: LKR 60–100. Vehicle fee: LKR 300–400.",
        },
        {
          type: "p",
          text: "<strong>Total Estimated Cost:</strong> Around $40–$50 USD for two foreign visitors including taxes and vehicle entry, excluding jeep hire.",
        },
        {
          type: "p",
          text: "<strong>Coordinates:</strong> 7.9255728, 80.9207630",
        },
      ],
    },
  ],
};

export default AngammedillaArticle;