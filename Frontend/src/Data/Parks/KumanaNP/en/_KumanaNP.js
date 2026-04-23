const KumanaNationalParkArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Kumana National Park" },
  ],

  hero: {
    kicker: "Wildlife & Birdlife",
    title: "Kumana National Park",
    subtitle: "A quieter alternative to Yala, known for its wetlands, birdlife, and peaceful safari experience.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kumana/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Sanctuary for Birds and Wetlands",
    paragraphs: [
      "Kumana National Park is a major wildlife reserve on the southeastern coast of Sri Lanka, known for its rich birdlife and tranquil safari environment. Compared to nearby Yala, it offers a more relaxed and less crowded experience.",
      "Centered around its wetlands and lagoons, the park is especially important for migratory birds and serves as a key ecological zone within Sri Lanka’s protected areas.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history",
      kicker: "History",
      title: "From Sanctuary to National Park",
      align: "left",
      content: [
        {
          type: "p",
          text: "The area that is now Kumana National Park has a history spanning over 2,000 years, with evidence of ancient settlements and rock inscriptions dating back to the 2nd and 1st centuries BC.",
        },

        {
          type: "h4",
          text: "1938",
        },
        {
          type: "p",
          text: "A portion of the area was declared the Kumana Bird Sanctuary by the British administration, recognizing its importance for birdlife.",
        },

        {
          type: "h4",
          text: "1970",
        },
        {
          type: "p",
          text: "The park was formally established as 'Yala East National Park' on January 20 and became part of the larger Yala ecosystem.",
        },

        {
          type: "h4",
          text: "1985–2003",
        },
        {
          type: "p",
          text: "The park remained closed due to security concerns related to regional conflict.",
        },

        {
          type: "h4",
          text: "2004",
        },
        {
          type: "p",
          text: "The coastal areas were affected by the Indian Ocean tsunami.",
        },

        {
          type: "h4",
          text: "2006",
        },
        {
          type: "p",
          text: "On September 5, the park was officially renamed Kumana National Park.",
        },

        {
          type: "h4",
          text: "2010",
        },
        {
          type: "p",
          text: "Its wetland system was designated as a Ramsar Wetland, highlighting its international ecological importance.",
        },
      ],
    },

    {
      type: "text",
      id: "features",
      kicker: "Highlights",
      title: "Main Features",
      align: "left",
      content: [
        {
          type: "split-paragraph",
          heading: "Kumana Villu",
          headingLevel: "h4",
          paragraphs: [
            "The central feature of the park is the Kumana Villu, a large natural mangrove swamp fed by the Kumbukkan Oya river. This wetland serves as a major nesting and breeding ground for thousands of birds.",
            "Between April and July, large numbers of migratory and resident waterbirds gather here, making it one of the most important bird habitats in the country.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Kumana/villu.webp`,
          imageAlt: "Kumana Villu wetland",
          mediaPosition: "right",
        },

        {
          type: "h4",
          text: "Birdlife",
        },
        {
          type: "p",
          text: "Kumana is known as a birdwatcher’s paradise, with over 255 recorded species. Rare sightings include the black-necked stork, lesser adjutant, and Eurasian spoonbill.",
        },

        {
          type: "h4",
          text: "Other Wildlife",
        },
        {
          type: "p",
          text: "Beyond birds, the park supports wildlife such as Sri Lankan elephants, golden jackals, wild boar, and European otters. Leopards are present but are seen less frequently than in Yala. Mugger crocodiles are commonly found near water bodies.",
        },

        {
          type: "h4",
          text: "Safari Experience",
        },
        {
          type: "p",
          text: "Kumana is often described as a quieter alternative to Yala National Park, offering a more peaceful and less crowded safari experience.",
        },
      ],
    },

    {
      type: "text",
      id: "culture",
      kicker: "Culture",
      title: "Cultural Significance",
      align: "left",
      content: [
        {
          type: "h4",
          text: "Pada Yatra",
        },
        {
          type: "p",
          text: "The park lies along the route of the traditional annual Hindu pilgrimage known as the Pada Yatra, which passes through the area on its way to the Kataragama temple, typically during April and May.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-info",
      kicker: "Visitor Info",
      title: "Planning Your Visit",
      align: "left",
      content: [
        {
          type: "h4",
          text: "Best Time for Birdwatching",
        },
        {
          type: "p",
          text: "April to July is the peak period, when large numbers of waterbirds gather at Kumana Villu.",
        },

        {
          type: "h4",
          text: "Best Time for Wildlife",
        },
        {
          type: "p",
          text: "February to July offers better chances of spotting mammals as animals gather around water sources during the dry season.",
        },

        {
          type: "h4",
          text: "Opening Hours",
        },
        {
          type: "p",
          text: "6:00 AM – 6:00 PM<br />Entry is usually not permitted after 4:30 PM.",
        },

        {
          type: "h4",
          text: "Safari Times",
        },
        {
          type: "p",
          text: "Morning safaris run from 6:00 AM to around 10:00–11:00 AM, while afternoon safaris run from 2:00 PM to 6:00 PM. Full-day safaris are also available.",
        },

        {
          type: "h4",
          text: "Access",
        },
        {
          type: "p",
          text: "Entry is only possible via a licensed safari jeep with a guide. The main entrance is at Okanda, accessed through the village of Panama.",
        },

        {
          type: "h4",
          text: "Location",
        },
        {
          type: "p",
          text: "The park is located on the southeastern coast, with Arugam Bay being the most common base for visitors, approximately 45–60 minutes away by jeep.",
        },
        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.649516177120651,81.77006815695152",
        },
      ],
    },
    {
    type: "text",
    id: "cost",
    kicker: "Costs",
    title: "Entrance and Safari Costs",
    align: "left",
    content: [
        {
        type: "p",
        text: "<strong>Adult Ticket:</strong> Around US$ 65 per foreign adult.",
        },
        {
        type: "p",
        text: "<strong>Child Ticket:</strong> Approximately US$ 30–35 for children aged 5–12.",
        },
        {
        type: "p",
        text: "<strong>Jeep Hire:</strong> Half-day jeep hire typically ranges between LKR 10,000 and 15,000 per vehicle.",
        },
        {
        type: "p",
        text: "<strong>Note:</strong> Fees and rates may change and should be confirmed with a local operator before visiting.",
        },
    ],
    },
    {
    type: "text",
    id: "tips",
    kicker: "Tips",
    title: "Practical Tips",
    align: "left",
    content: [
        {
        type: "p",
        text: "<strong>Dress Code:</strong> Wear neutral-colored, lightweight clothing such as khaki, brown, or green to avoid disturbing wildlife.",
        },
        {
        type: "p",
        text: "<strong>Essentials:</strong> Bring binoculars, sunscreen, a hat, and plenty of drinking water.",
        },
        {
        type: "p",
        text: "<strong>Photography:</strong> Early morning and late afternoon provide the best light for wildlife photography.",
        },
        {
        type: "p",
        text: "<strong>Food:</strong> Rest areas are limited, so safari operators often arrange packed meals for longer visits.",
        },
    ],
    },

    {
      type: "text",
      id: "nearby",
      kicker: "Nearby",
      title: "Kudumbigala Monastery",
      align: "left",
      content: [
        {
          type: "split-paragraph",
          heading: "A Historic Forest Hermitage",
          headingLevel: "h4",
          paragraphs: [
            "Kudumbigala Monastery is an ancient Buddhist hermitage located near the entrance to Kumana National Park, dating back to the 2nd century BC. It is known for its caves with Brahmi inscriptions and its long history as a place of meditation.",
            "The site is built around a large rocky outcrop, featuring over 200 caves and a unique cylindrical stupa at the summit. The climb offers panoramic views over the surrounding jungle and coastline, making it both a spiritual and scenic experience.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Kumana/kudumbigala.webp`,
          imageAlt: "Kudumbigala Monastery",
          mediaPosition: "right",
        },

        {
          type: "h4",
          text: "Visiting Tips",
        },
        {
          type: "p",
          text: "The monastery is located along the Panama–Kumana road and can be reached by tuk-tuk or jeep. Visitors should dress modestly, covering shoulders and legs, as it remains an active religious site.",
        },
        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.672262923557438,81.7431060796921",
        },
      ],
    },
  ],
};

export default KumanaNationalParkArticle;