const MoratuwaNatureWaterArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Moratuwa", to: "/places/moratuwa" },
    { label: "Nature & Water" },
  ],

  hero: {
    kicker: "Nature & Water",
    title: "Nature & Water",
    subtitle:
      "Lakes, lagoons, beaches, birdlife, water sports, and quiet coastal scenery around Moratuwa.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Moratuwa/nature-water/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Water Landscapes Around Moratuwa",
    paragraphs: [
      "Moratuwa is closely shaped by water, with Bolgoda Lake, Lunawa Lagoon, and the Indian Ocean forming some of the area’s most important natural landscapes.",
      "From lake cruises and birdwatching to quiet beach walks and sunset views, the region offers a softer, more local alternative to Sri Lanka’s major resort beaches.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "bolgoda-lake",
      kicker: "Lake & Wetland",
      title: "Bolgoda Lake",
      align: "left",

      content: [
        {
          type: "p",
          text: "Bolgoda Lake is a sprawling and scenic waterway in Sri Lanka’s Western Province, extending across the Colombo and Kalutara districts.",
        },

        {
          type: "p",
          text: "Often cited as the largest natural freshwater lake in the country, it is both an important ecological area and a popular weekend escape from Colombo.",
        },

        {
          type: "split-paragraph",
          heading: "Geography and Structure",
          headingLevel: "h4",

          paragraphs: [
            "Bolgoda is not a single lake but a broad water system covering roughly 374 square kilometers.",
            "<strong>Bolgoda North Lake:</strong> The larger and more developed section, known for villas, resorts, and yacht clubs.",
            "<strong>Bolgoda South Lake:</strong> A quieter and more rustic section often preferred for nature exploration and traditional fishing.",
            "The two sections are connected by the Bolgoda River, or Bolgoda Ganga, which eventually drains into the Indian Ocean at the Panadura estuary.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Moratuwa/nature-water/bolgoda-lake.webp`,
          imageAlt: "Bolgoda Lake near Moratuwa",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "bolgoda-activities",
      kicker: "Activities",
      title: "Things to Do Around Bolgoda Lake",
      align: "left",

      content: [
        {
          type: "p",
          text: "Bolgoda is one of the best places near Colombo for water-based recreation, nature watching, and relaxed lakeside dining.",
        },

        {
          type: "p",
          text: "<strong>Water Sports:</strong> The lake is home to the Ceylon Motor Yacht Club, founded in 1936, and supports activities such as jet skiing, kayaking, canoeing, windsurfing, and boating.",
        },

        {
          type: "p",
          text: "<strong>Birdwatching:</strong> The wetland environment attracts kingfishers, egrets, cormorants, herons, and white-bellied sea eagles.",
        },

        {
          type: "p",
          text: "<strong>Fishing:</strong> Traditional and recreational fishing are common, with some local fishermen still using <em>Ja-Kotuwa</em> bamboo traps to catch fish and prawns at night.",
        },

        {
          type: "p",
          text: "<strong>Sunset Cruises:</strong> Evening boat tours are popular for calm water, reflections, and warm sunset light over the lake.",
        },
      ],
    },

    {
      type: "text",
      id: "bolgoda-environment",
      kicker: "Ecology",
      title: "Biodiversity and Conservation",
      align: "left",

      content: [
        {
          type: "p",
          text: "Bolgoda Lake forms part of the Bolgoda Environmental Protection Area and supports a varied wetland ecosystem.",
        },

        {
          type: "split-paragraph",
          heading: "A Wetland Habitat",
          headingLevel: "h4",

          paragraphs: [
            "<strong>Flora:</strong> The lake system includes mangrove forests, marshes, peat bogs, and riverside vegetation.",
            "<strong>Fauna:</strong> The area supports more than 45 fish species, around 97 bird species, reptiles such as water monitors, and occasional crocodiles.",
            "<strong>Endemic Wildlife:</strong> The surrounding habitats also support rare species such as the Purple-faced Langur, a primate found only in Sri Lanka.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Moratuwa/nature-water/bolgoda-wetlands.webp`,
          imageAlt: "Wetland habitat around Bolgoda Lake",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "<strong>Current Challenges:</strong> Urbanization, luxury development, shanty settlement expansion, industrial runoff, domestic waste, and invasive plants such as water hyacinth all place pressure on the lake ecosystem.",
        },

        {
          type: "p",
          text: "<strong>Conservation:</strong> Efforts by the Central Environmental Authority and environmental groups aim to protect mangrove buffers, improve water quality, and preserve the lake’s remaining habitats.",
        },

        {
          type: "button",
          label: "View Bolgoda Lake on Google Maps",
          href: "https://www.google.com/maps?q=6.770870147118405,79.90368725779288",
        },
      ],
    },

    {
      type: "text",
      id: "lunawa-beach",
      kicker: "Local Beach",
      title: "Lunawa Beach",
      align: "left",

      content: [
        {
          type: "p",
          text: "Lunawa Beach is a quiet local coastal spot in Moratuwa, better suited for peaceful walks, sunsets, fishing scenes, and ocean breezes than resort-style beach tourism.",
        },

        {
          type: "p",
          text: "The beach has a wide stretch of golden sand and is mostly used by local families, joggers, and fishermen.",
        },

        {
          type: "split-paragraph",
          heading: "The Beach Experience",
          headingLevel: "h4",

          paragraphs: [
            "<strong>Sunsets:</strong> Lunawa is one of the better places in the Moratuwa area for clear sunset views over the Indian Ocean.",
            "<strong>Local Atmosphere:</strong> Unlike major tourist beaches, the area feels more everyday and residential, with a simple local rhythm.",
            "<strong>Lunawa Lagoon:</strong> The beach sits close to Lunawa Lagoon, also known as the Blue Lagoon, which has undergone environmental restoration to improve water quality and biodiversity.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Moratuwa/nature-water/lunawa-beach.webp`,
          imageAlt: "Lunawa Beach in Moratuwa",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "lunawa-lagoon-and-tips",
      kicker: "Lagoon & Tips",
      title: "Lunawa Lagoon and Visitor Tips",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Lagoon Walkway:</strong> The lagoon area has a scenic walkway suitable for morning or evening strolls, with chances to spot pelicans, herons, kingfishers, and other wetland birds.",
        },

        {
          type: "p",
          text: "<strong>Dining:</strong> The surrounding area has local eateries and casual food spots. For a more formal drink or meal, Machan Rella is a nearby pub with ocean views.",
        },

        {
          type: "p",
          text: "<strong>Water Sports:</strong> For serious water sports such as jet skiing or tube rides, visitors usually head to Bolgoda Lake or water sports clubs around Mount Lavinia.",
        },

        {
          type: "p",
          text: "<strong>Safety:</strong> The sea at Lunawa can be rough with strong currents, especially during the May to September monsoon period. It is better for walking and wading than deep swimming.",
        },

        {
          type: "p",
          text: "<strong>Cleanliness:</strong> Like many urban beaches, cleanliness can vary despite community cleanup efforts. It is best visited for atmosphere, views, and local character rather than pristine swimming conditions.",
        },

        {
          type: "p",
          text: "<strong>Quiet Time:</strong> Weekday mornings are usually the calmest time to visit.",
        },

        {
          type: "button",
          label: "View Lunawa Beach on Google Maps",
          href: "https://www.google.com/maps?q=6.785910144708783,79.8753370796928",
        },
      ],
    },
  ],
};

export default MoratuwaNatureWaterArticle;