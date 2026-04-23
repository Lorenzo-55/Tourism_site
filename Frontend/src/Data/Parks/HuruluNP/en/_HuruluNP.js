const HuruluEcoParkArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Hurulu Eco Park" },
  ],

  hero: {
    kicker: "Wildlife & Elephants",
    title: "Hurulu Eco Park",
    subtitle: "A key elephant habitat in Sri Lanka’s dry zone, offering seasonal wildlife safaris within a UNESCO-designated forest reserve.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Hurulu/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Vital Part of the Elephant Corridor",
    paragraphs: [
      "Hurulu Eco Park is a managed safari area located within the larger Hurulu Forest Reserve in Sri Lanka’s North Central Province. While the forest reserve itself is the official protected area, the Eco Park is the section developed for eco-tourism and wildlife safaris.",
      "The area plays a crucial role in elephant migration and conservation, forming part of the well-known ‘elephant triangle’ alongside Minneriya and Kaudulla National Parks.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "reserve",
      kicker: "Background",
      title: "Hurulu Forest Reserve",
      align: "left",
      content: [
        {
          type: "p",
          text: "The Hurulu Forest Reserve is a large protected area with significant ecological importance, particularly for dry-zone forest conservation and elephant movement.",
        },

        {
          type: "h4",
          text: "UNESCO Biosphere Reserve",
        },
        {
          type: "p",
          text: "The reserve was designated a UNESCO Man and the Biosphere Reserve in <strong>January 1977</strong>, recognizing its importance for conservation and sustainable land use.",
        },

        {
          type: "h4",
          text: "Ecosystem",
        },
        {
          type: "p",
          text: "It represents the dry-zone dry evergreen forest ecosystem, characterized by hardy vegetation that retains foliage during long dry periods.",
        },

        {
          type: "h4",
          text: "Management",
        },
        {
          type: "p",
          text: "Unlike national parks, the reserve is managed by the Department of Forest Conservation, reflecting its broader conservation and land-use role.",
        },

        {
          type: "h4",
          text: "Area",
        },
        {
          type: "p",
          text: "The reserve spans approximately <strong>255 sq km (25,500 hectares)</strong>, making it a substantial protected landscape.",
        },
      ],
    },

    {
      type: "text",
      id: "corridor",
      kicker: "Ecology",
      title: "Elephant Corridor",
      align: "left",
      content: [
        {
          type: "split-paragraph",
          heading: "The Elephant Triangle",
          headingLevel: "h4",
          paragraphs: [
            "Hurulu forms one corner of the famous elephant triangle, linking it with Minneriya and Kaudulla National Parks. This connection allows elephants to migrate freely between these areas depending on seasonal conditions.",
            "During wetter months, when Minneriya and Kaudulla become flooded, elephants move into Hurulu’s higher, drier forest areas where food is more accessible.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Hurulu/elephants.webp`,
          imageAlt: "Elephants in Hurulu Eco Park",
          mediaPosition: "right",
        },

        {
          type: "h4",
          text: "Conservation Challenge",
        },
        {
          type: "p",
          text: "The reserve faces ongoing pressure from human settlement expansion and forest clearance, leading to human-elephant conflict, which remains a major conservation concern in the region.",
        },
      ],
    },

    {
      type: "text",
      id: "wildlife",
      kicker: "Wildlife",
      title: "Animals of Hurulu",
      align: "left",
      content: [
        {
          type: "p",
          text: "The forest reserve supports a diverse range of dry-zone flora and fauna, with a strong focus on large mammals and birdlife.",
        },

        {
          type: "h4",
          text: "Elephants",
        },
        {
          type: "p",
          text: "The <strong>Sri Lankan elephant</strong> is the most iconic species here, with large herds moving through the park as part of their seasonal migration.",
        },

        {
          type: "h4",
          text: "Other Mammals",
        },
        {
          type: "p",
          text: "Visitors may encounter spotted deer, sambar deer, wild boar, golden jackals, and primates such as the tufted grey langur. Rare sightings include the Sri Lankan leopard and the elusive rusty-spotted cat.",
        },

        {
          type: "h4",
          text: "Birdlife",
        },
        {
          type: "p",
          text: "The park hosts a variety of bird species, including the <strong>Sri Lanka Junglefowl</strong>, Indian peafowl, and several raptors, making it a rewarding destination for birdwatchers.",
        },
      ],
    },

    {
      type: "text",
      id: "visiting",
      kicker: "Visitor Info",
      title: "Visiting Hurulu Eco Park",
      align: "left",
      content: [
        {
          type: "h4",
          text: "Location",
        },
        {
          type: "p",
          text: "The park is located near Habarana in the North Central Province, with the entrance situated along the A12 road.",
        },
        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=8.209913537319661,80.84985365271648",
        },

        {
          type: "h4",
          text: "Safari Experience",
        },
        {
          type: "p",
          text: "The only way to explore the park is via a licensed safari jeep. Most safaris last <strong>3 to 4 hours</strong> and are available in morning and afternoon sessions.",
        },

        {
          type: "h4",
          text: "Operating Hours",
        },
        {
          type: "p",
          text: "The park is generally open daily from <strong>7:00 AM to 6:00 PM</strong>, with early morning and late afternoon being the best times for wildlife activity.",
        },
      ],
    },

    {
      type: "text",
      id: "timing",
      kicker: "Seasonality",
      title: "Best Time to Visit",
      align: "left",
      content: [
        {
          type: "h4",
          text: "Peak Season for Hurulu",
        },
        {
          type: "p",
          text: "<strong>November to April</strong> is the best period for seeing large elephant herds, as animals migrate here when nearby parks are flooded.",
        },

        {
          type: "h4",
          text: "Low Season",
        },
        {
          type: "p",
          text: "During <strong>July to September</strong>, most elephants move to Minneriya for the famous ‘Gathering’, resulting in fewer sightings in Hurulu.",
        },

        {
          type: "p",
          text: "Outside of the Gathering season, Hurulu Eco Park is often one of the best places in the region to observe elephants in the wild.",
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
          type: "h4",
          text: "Park Entrance Fee",
        },
        {
          type: "p",
          text: "Typically around <strong>LKR 3,000 to 5,000</strong> per person (approximately $18–$25 USD), paid at the entrance gate.",
        },

        {
          type: "h4",
          text: "Jeep and Driver",
        },
        {
          type: "p",
          text: "Safari jeep hire usually costs between <strong>LKR 8,000 to 12,000</strong>, shared among passengers for a 3–4 hour safari.",
        },

        {
          type: "h4",
          text: "Total Cost",
        },
        {
          type: "p",
          text: "Many tours bundle entrance fees, jeep hire, and guide services into packages ranging from <strong>$65 to $80 USD per person</strong>. Always confirm what is included before booking.",
        },
      ],
    },
  ],
};

export default HuruluEcoParkArticle;