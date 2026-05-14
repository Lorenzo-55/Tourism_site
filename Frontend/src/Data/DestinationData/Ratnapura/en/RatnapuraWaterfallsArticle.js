const RatnapuraWaterfallsArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Ratnapura", to: "/places/ratnapura" },
    { label: "Waterfalls" },
  ],

  hero: {
    kicker: "Waterfalls & Nature",
    title: "Waterfalls",
    subtitle:
      "Leaf-shaped cascades, jungle waterfalls, local legends, and scenic escapes around Ratnapura and the Sabaragamuwa highlands.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Ratnapura/waterfalls/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Waterfalls Around Ratnapura",
    paragraphs: [
      "Ratnapura and the surrounding Sabaragamuwa region are rich in waterfalls, many shaped by the heavy rainfall, forested hills, and river systems flowing down from the central highlands.",
      "Bopath Ella and Kalthota Doowili Ella are two of the region’s most memorable waterfalls, combining natural beauty with folklore, local bathing traditions, and dramatic landscapes.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "bopath-ella",
      kicker: "Iconic Waterfall",
      title: "Bopath Ella Waterfall",
      align: "left",

      content: [
        {
          type: "p",
          text: "Bopath Ella is one of Sri Lanka’s most photographed waterfalls, located near Kuruwita about 30 minutes from Ratnapura.",
        },

        {
          type: "p",
          text: "Its name means ‘Bo-leaf Fall,’ referring to the way the cascade widens as it drops, resembling the leaf of the sacred Bo tree.",
        },

        {
          type: "split-paragraph",
          heading: "Waterfall Fast Facts",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Height:</strong> Approximately 30 meters, or 98 feet.",
            "<strong>Source:</strong> The Kuru Ganga, a tributary of the Kalu Ganga.",
            "<strong>Shape:</strong> The waterfall falls in three distinct segments, creating its famous symmetrical outline.",
            "<strong>Accessibility:</strong> One of the most accessible waterfalls in Sri Lanka, reached by a short paved walk from the parking area.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Ratnapura/waterfalls/bopath-ella.webp`,
          imageAlt: "Bopath Ella Waterfall near Ratnapura",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Myths and Folklore",
        },

        {
          type: "p",
          text: "<strong>The Ghost of the Blue Light:</strong> Local stories tell of a heartbroken village girl who drowned herself at the falls, with her spirit said to appear as a strange blue light near the water.",
        },

        {
          type: "p",
          text: "<strong>The Hidden Treasure:</strong> Another legend claims that treasure lies hidden in a cave behind the waterfall, though it is said to be cursed.",
        },

        {
          type: "p",
          text: "<strong>Royal Bathing:</strong> Historical traditions suggest that kings from the Sitawaka and Kandyan periods stopped here to bathe while traveling on pilgrimage to Saman Devalaya.",
        },

        {
          type: "split-paragraph",
          heading: "Safety and Visitor Tips",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Flash Floods:</strong> Water levels can rise suddenly because the upstream catchment receives heavy rainfall, even when it is not raining at the falls.",
            "<strong>Bathing:</strong> A natural pool is used by visitors, but the deep center and rocks directly beneath the waterfall should be avoided because of strong currents.",
            "<strong>Crowds:</strong> Weekends and public holidays can be very busy, so weekday mornings are best for a quieter visit.",
            "<strong>Fees:</strong> There is usually no formal entrance fee, though parking or nearby facility fees may apply.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Ratnapura/waterfalls/bopath-ella-pool.webp`,
          imageAlt: "Natural pool at Bopath Ella",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "<strong>Getting There:</strong> From Ratnapura, take the A4 toward Colombo, turn at Higgashinna Junction in Kuruwita, and follow the signs for about 3 km.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.801889733087256,80.36942219503543",
        },
      ],
    },

    {
      type: "text",
      id: "kalthota-doowili-ella",
      kicker: "Jungle Waterfall",
      title: "Kalthota Doowili Ella Falls",
      align: "left",

      content: [
        {
          type: "p",
          text: "Kalthota Doowili Ella, also spelled Duwili Ella, is a powerful waterfall in the remote Kalthota area near the foothills of the Balangoda range.",
        },

        {
          type: "p",
          text: "The name means ‘Dust Fall,’ referring to the cloud of fine spray created when the water crashes into the deep basin below.",
        },

        {
          type: "split-paragraph",
          heading: "The Dust Waterfall",
          headingLevel: "h3",

          paragraphs: [
            "The waterfall stands around 40 meters high and is a major feature of the Walawe River.",
            "Its heavy volume creates constant mist around the base, often forming rainbows in sunny weather.",
            "The surrounding landscape is drier and more rugged than many commercial waterfall sites, with jungle scenery linked to the Rajawaka Forest Reserve.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Ratnapura/waterfalls/kalthota-doowili-ella.webp`,
          imageAlt: "Kalthota Doowili Ella Falls",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Myths and Local Legend",
        },

        {
          type: "p",
          text: "<strong>The Golden Eel:</strong> Local legend says a giant gold-colored eel with a golden ring in its mouth lives in the deep pool below the falls.",
        },

        {
          type: "p",
          text: "<strong>The Bottomless Pool:</strong> The main basin is extremely deep, with strong undercurrents. Local stories warn that the pool takes a life every year, reflecting the real danger of swimming near the main fall.",
        },

        {
          type: "split-paragraph",
          heading: "Access and Safety",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Access:</strong> From Balangoda, take the Kalthota road for about 27 km through a scenic but steep and winding route.",
            "<strong>The Hike:</strong> From the parking area, a paved path of roughly 300–400 steps leads down to the observation deck.",
            "<strong>Bathing:</strong> Use only the safer shallow basin further downstream. Avoid the dark main pool directly under the falls.",
            "<strong>Facilities:</strong> A small ticket office, children’s park, and parking area are usually available near the site.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Ratnapura/waterfalls/doowili-ella-viewpoint.webp`,
          imageAlt: "Viewpoint at Kalthota Doowili Ella",
          mediaPosition: "left",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.662500251867546,80.865809566199",
        },
      ],
    },
  ],
};

export default RatnapuraWaterfallsArticle;