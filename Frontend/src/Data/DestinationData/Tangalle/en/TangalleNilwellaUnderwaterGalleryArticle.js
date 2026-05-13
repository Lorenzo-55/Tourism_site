const TangalleNilwellaUnderwaterGalleryArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Tangalle", to: "/places/tangalle" },
    { label: "Nilwella Underwater Gallery" },
  ],

  hero: {
    kicker: "Underwater Attraction",
    title: "Nilwella Underwater Gallery",
    subtitle:
      "An artificial reef and underwater sculpture site near Tangalle featuring submerged statues, marine life, snorkeling, and beginner-friendly diving.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Tangalle/nilwella-underwater-gallery/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "An Underwater Sculpture and Reef Project",
    paragraphs: [
      "The Nilwella Underwater Gallery is a unique marine attraction located near Blue Beach Island, around 15–20 minutes west of Tangalle.",
      "Created around 2022, the site combines underwater sculptures, artificial reef structures, and marine conservation elements, making it popular for snorkeling and beginner diving experiences.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "underwater-gallery",
      kicker: "Artificial Reef",
      title: "The Underwater Gallery",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Nilwella Underwater Gallery was designed as both a diving attraction and an artificial reef project to encourage marine growth.",
        },

        {
          type: "split-paragraph",
          heading: "What’s Underwater",
          headingLevel: "h3",

          paragraphs: [
            "The site contains a collection of eco-friendly sculptures arranged to resemble a submerged town beneath the sea.",
            "Visitors can see human figures, cultural statues, and submerged vehicle and aircraft parts positioned across the sandy seabed.",
            "Over time, the structures have begun attracting coral growth and marine life, gradually transforming the gallery into a living reef system.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/nilwella-underwater-gallery/sculptures.webp`,
          imageAlt: "Underwater sculptures at Nilwella Underwater Gallery",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "The combination of sculptures, clear water, and marine biodiversity gives the site a distinctive underwater atmosphere unlike traditional reef-only dive locations.",
        },
      ],
    },

    {
      type: "text",
      id: "diving-and-snorkeling",
      kicker: "Water Activities",
      title: "Snorkeling and Diving",
      align: "left",

      content: [
        {
          type: "p",
          text: "Because the gallery is located at relatively shallow depths, it is suitable for both snorkeling and beginner diving.",
        },

        {
          type: "p",
          text: "<strong>Depth:</strong> Approximately 3–10 meters (10–30 feet).",
        },

        {
          type: "split-paragraph",
          heading: "Skill Level",
          headingLevel: "h3",

          paragraphs: [
            "The shallow conditions make the site ideal for first-time divers and discovery scuba experiences.",
            "Visitors do not necessarily need a full PADI certification to see the main underwater gallery.",
            "Snorkelers can also enjoy parts of the site during clear and calm sea conditions.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/nilwella-underwater-gallery/snorkeling.webp`,
          imageAlt: "Snorkeling near Nilwella Underwater Gallery",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "The calm waters near Blue Beach Island often make the area more accessible than deeper offshore dive locations.",
        },
      ],
    },

    {
      type: "text",
      id: "marine-life",
      kicker: "Marine Biodiversity",
      title: "Marine Life Around the Gallery",
      align: "left",

      content: [
        {
          type: "p",
          text: "As coral begins growing across the submerged sculptures, the gallery is increasingly attracting marine life.",
        },

        {
          type: "split-paragraph",
          heading: "Species Commonly Seen",
          headingLevel: "h3",

          paragraphs: [
            "Schools of reef fish are commonly seen swimming through the structures.",
            "Honeycomb moray eels are known to inhabit sections of the artificial reef.",
            "Sea turtles are occasionally spotted in the surrounding waters.",
            "The site continues evolving naturally as coral growth and marine biodiversity increase over time.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/nilwella-underwater-gallery/marine-life.webp`,
          imageAlt: "Marine life around the Nilwella Underwater Gallery",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "How to Visit",
      align: "left",

      content: [
        {
          type: "p",
          text: "Trips to the Nilwella Underwater Gallery are usually organized through local dive centers around Tangalle and Hiriketiya.",
        },

        {
          type: "p",
          text: "<strong>Best Season:</strong> November to April generally offers the clearest water and calmest sea conditions.",
        },

        {
          type: "p",
          text: "<strong>Nearby Attractions:</strong> Visits are often combined with snorkeling around Blue Beach Island or dives to the nearby Cargo Wreck for experienced divers.",
        },

        {
          type: "split-paragraph",
          heading: "Planning Your Visit",
          headingLevel: "h3",

          paragraphs: [
            "Most operators provide snorkeling equipment, diving gear, and boat transfers.",
            "Morning trips usually provide the best underwater visibility.",
            "Sea conditions can vary depending on weather and monsoon patterns, so local operators normally select the safest time for departures.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/nilwella-underwater-gallery/boat-trip.webp`,
          imageAlt: "Boat trip to the Nilwella Underwater Gallery",
          mediaPosition: "left",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=5.961573397865747,80.72090695270228",
        },
      ],
    },
  ],
};

export default TangalleNilwellaUnderwaterGalleryArticle;