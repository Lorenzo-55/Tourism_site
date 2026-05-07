const WildlifeAndNatureArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Hambantota", to: "/places/hambantota" },
    { label: "Wildlife and Nature" },
  ],

  hero: {
    kicker: "Wildlife & Safari",
    title: "Wildlife and Nature",
    subtitle:
      "National parks, bird sanctuaries, safari experiences, and wildlife attractions in the Hambantota region.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Hambantota/wildlife1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Nature and Wildlife Around Hambantota",
    paragraphs: [
      "The Hambantota region is one of Sri Lanka’s most important wildlife destinations, home to national parks, wetlands, migratory bird habitats, and safari experiences.",
      "From the leopard-rich forests of Yala to the wetlands of Bundala and the open safari zones of Ridiyagama, the area offers a wide range of wildlife experiences for visitors.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "yala-national-park",
      kicker: "National Park",
      title: "Yala National Park",
      align: "left",

      content: [
        {
          type: "split-paragraph",
          heading: "",
          headingLevel: "h4",

          paragraphs: [
            "Yala National Park is Sri Lanka’s second-largest national park and is internationally famous for having one of the world’s highest leopard densities.",
            "The park is also home to elephants, sloth bears, crocodiles, deer, wild boar, and numerous bird species.",
            "Its combination of dry forests, lagoons, grasslands, and coastal scenery makes it one of the country’s premier wildlife destinations.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hambantota/wildlife2.webp`,
          imageAlt: "Leopard in Yala National Park",
          mediaPosition: "right",
        },

        {
          type: "button",
          label: "See Yala National Park",
          to: "/places/yala-national-park",
        },
      ],
    },

    {
      type: "text",
      id: "bundala-national-park",
      kicker: "Wetland Reserve",
      title: "Bundala National Park",
      align: "left",

      content: [
        {
          type: "split-paragraph",
          heading: "",
          headingLevel: "h4",

          paragraphs: [
            "Bundala National Park is a UNESCO-designated biosphere reserve and one of Sri Lanka’s most important wetland habitats.",
            "The park is especially well known for birdwatching and becomes particularly active during the migratory season between October and April.",
            "Flamingos, pelicans, painted storks, crocodiles, elephants, and other aquatic bird species are among the wildlife commonly seen within the park.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hambantota/wildlife3.webp`,
          imageAlt: "Birdlife at Bundala National Park",
          mediaPosition: "left",
        },

        {
          type: "button",
          label: "See Bundala National Park",
          to: "/places/bundala-national-park",
        },
      ],
    },

    {
      type: "text",
      id: "ridiyagama-safari-park",
      kicker: "Safari Park",
      title: "Ridiyagama Safari Park",
      align: "left",

      content: [
        {
          type: "p",
          text: "Ridiyagama Safari Park is Sri Lanka’s first man-made open-concept safari park and offers a different wildlife experience compared to traditional national parks such as Yala or Udawalawe.",
        },

        {
          type: "h3",
          text: "Location",
        },

        {
          type: "p",
          text: "The park is located in Ridiyagama near Ambalantota in the Hambantota District of Sri Lanka’s Southern Province.",
        },

        {
          type: "h3",
          text: "Size and Concept",
        },

        {
          type: "p",
          text: "The safari park covers approximately 500 acres, or around 200 hectares.",
        },

        {
          type: "p",
          text: "Its concept is based on visitors remaining inside protected vehicles while animals roam freely within large enclosures.",
        },

        {
          type: "p",
          text: "Visitors travel through the park using either park-operated shuttle buses or private safari jeeps.",
        },

        {
          type: "split-paragraph",
          heading: "Safari Zones",
          headingLevel: "h4",

          paragraphs: [
            "<strong>African Lion Zone:</strong> A large enclosure where African lions can be observed roaming freely.",
            "<strong>Sri Lanka Elephant Zone:</strong> A spacious area dedicated to Sri Lankan elephants.",
            "<strong>Herbivore Zone:</strong> One of the park’s largest sections, featuring zebras, giraffes, African Cape buffaloes, Bactrian camels, antelopes, Arabian Oryx, and ostriches.",
            "<strong>Carnivore Zones:</strong> Separate areas are dedicated to animals such as Bengal tigers and leopards.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hambantota/wildlife4.webp`,
          imageAlt: "Ridiyagama Safari Park animals",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Wildlife",
        },

        {
          type: "p",
          text: "The park contains both native Sri Lankan species and exotic international species, making it distinct from Sri Lanka’s national parks.",
        },

        {
          type: "p",
          text: "Around 22 species of animals, mainly mammals and birds, are exhibited throughout the park.",
        },

        {
          type: "h3",
          text: "Visitor Experience",
        },

        {
          type: "p",
          text: "The experience is designed as a controlled drive-through safari, making it suitable for families, children, and visitors looking for a more accessible wildlife outing.",
        },

        {
          type: "p",
          text: "Guided tours are usually provided, often with automated commentary explaining the animals and safari zones.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Hours, Fees, and Transport",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Opening Hours",
        },

        {
          type: "p",
          text: "<strong>Daily:</strong> Generally 8:30 AM to 4:30 PM.",
        },

        {
          type: "p",
          text: "Some sources suggest a slightly earlier closing time on weekends and holidays.",
        },

        {
          type: "h3",
          text: "Best Time to Visit",
        },

        {
          type: "p",
          text: "Early morning or late afternoon is recommended to avoid the midday heat and increase the chances of active animal sightings.",
        },

        {
          type: "h3",
          text: "Approximate Entrance Fees",
        },

        {
          type: "p",
          text: "<strong>Foreign Adults:</strong> USD $15.00 – $17.70",
        },

        {
          type: "p",
          text: "<strong>Foreign Children:</strong> USD $7.50 – $8.85",
        },

        {
          type: "p",
          text: "<strong>SAARC Adults:</strong> USD $10.00 – $11.80",
        },

        {
          type: "p",
          text: "<strong>SAARC Children:</strong> USD $5.00 – $5.90",
        },

        {
          type: "p",
          text: "<strong>Local Adults:</strong> Approximately LKR 500 – 590",
        },

        {
          type: "p",
          text: "<strong>Local Children:</strong> Approximately LKR 200 – 236",
        },

        {
          type: "p",
          text: "Prices may be subject to VAT and can change over time.",
        },

        {
          type: "h3",
          text: "Transport Options",
        },

        {
          type: "p",
          text: "<strong>Private Safari Jeep:</strong> Approximately LKR 4,500 – 5,000 per jeep.",
        },

        {
          type: "p",
          text: "<strong>AC Shuttle Bus:</strong> Approximately LKR 200 per person.",
        },

        {
          type: "p",
          text: "<strong>Non-AC Shuttle Bus:</strong> Approximately LKR 100 per person.",
        },

        {
          type: "h3",
          text: "Contact Information",
        },

        {
          type: "p",
          text: "<strong>Phone:</strong> +94 472 030 300",
        },

        {
          type: "button",
          label: "View Ridiyagama Safari Park on Google Maps",
          href: "https://www.google.com/maps?q=6XWM%2B8CF%2C%20Ridiyagama%2C%20Sri%20Lanka",
        },
      ],
    },
  ],
};

export default WildlifeAndNatureArticle;