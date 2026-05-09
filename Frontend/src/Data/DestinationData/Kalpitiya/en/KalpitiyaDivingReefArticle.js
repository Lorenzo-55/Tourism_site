const KalpitiyaDivingReefArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Kalpitiya", to: "/places/kalpitiya" },
    { label: "Diving and Reef" },
  ],

  hero: {
    kicker: "Diving & Snorkeling",
    title: "Diving and Reef Experiences in Kalpitiya",
    subtitle:
      "Coral reefs, marine sanctuaries, snorkeling trips, and scuba diving along Sri Lanka’s northwest coast.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kalpitiya/diving-reef/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Exploring the Waters of Kalpitiya",
    paragraphs: [
      "Kalpitiya is one of Sri Lanka’s top marine destinations for snorkeling, scuba diving, and reef exploration.",
      "The region is especially known for the Bar Reef Marine Sanctuary, a large coral reef ecosystem rich in marine biodiversity and accessible by short boat rides from the peninsula.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "bar-reef-marine-sanctuary",
      kicker: "Marine Sanctuary",
      title: "Bar Reef Marine Sanctuary",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Bar Reef Marine Sanctuary is one of the largest coral reef systems in Sri Lanka and one of the country’s most important marine ecosystems.",
        },

        {
          type: "p",
          text: "Although some parts of the reef have suffered damage over time, many sections remain vibrant and support a rich variety of marine life.",
        },

        {
          type: "split-paragraph",
          heading: "Marine Biodiversity",
          headingLevel: "h3",

          paragraphs: [
            "The reef is home to colorful coral fish, sea turtles, groupers, triggerfish, rays, and occasionally reef sharks.",
            "Whale sharks have also been reported in deeper offshore waters around the reef system.",
            "The shallow coral areas create excellent conditions for both snorkeling and scuba diving.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalpitiya/diving-reef/bar-reef.webp`,
          imageAlt: "Bar Reef Marine Sanctuary in Kalpitiya",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Reef Experience",
        },

        {
          type: "p",
          text: "The reef’s clear water, coral formations, and marine biodiversity make it one of the most rewarding underwater environments on Sri Lanka’s northwest coast.",
        },

        {
          type: "p",
          text: "Many snorkeling and diving trips focus on the healthier and more colorful sections of the reef closer to the surface.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=8.393815315009027,79.73062023885376",
        },
      ],
    },

    {
      type: "text",
      id: "diving-in-kalpitiya",
      kicker: "Scuba Diving",
      title: "Diving in Kalpitiya",
      align: "left",

      content: [
        {
          type: "p",
          text: "Kalpitiya offers diving opportunities for both beginners and experienced divers.",
        },

        {
          type: "p",
          text: "Local dive centers organize reef trips, guided dives, and internationally recognized PADI certification courses.",
        },

        {
          type: "split-paragraph",
          heading: "Dive Centers and Courses",
          headingLevel: "h3",

          paragraphs: [
            "Established operators such as Kalpitiya Diving Center provide a full range of PADI training programs.",
            "Beginners can try introductory Discover Scuba Diving sessions, while certified divers can continue toward Open Water and advanced certifications.",
            "Guided boat trips usually include visits to two separate reef dive sites during the same excursion.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalpitiya/diving-reef/scuba-diving.webp`,
          imageAlt: "Scuba diving near Kalpitiya reefs",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Popular Dive Sites",
        },

        {
          type: "p",
          text: "<strong>St. Anne’s Reef:</strong> Known for coral formations and reef fish.",
        },

        {
          type: "p",
          text: "<strong>Shantha’s Longer Reef:</strong> A longer reef stretch with diverse marine life.",
        },

        {
          type: "p",
          text: "<strong>Broken Anchor Reef:</strong> Popular among experienced divers exploring reef structures and marine habitats.",
        },

        {
          type: "p",
          text: "<strong>Snapper Point:</strong> Known for schools of fish and reef biodiversity.",
        },

        {
          type: "h3",
          text: "Best Diving Season",
        },

        {
          type: "p",
          text: "<strong>Peak Season:</strong> November to April.",
        },

        {
          type: "p",
          text: "<strong>Conditions:</strong> Calm seas and clearer underwater visibility during these months create the best diving conditions.",
        },
      ],
    },

    {
      type: "text",
      id: "snorkeling",
      kicker: "Snorkeling",
      title: "Snorkeling in Kalpitiya",
      align: "left",

      content: [
        {
          type: "p",
          text: "Snorkeling is one of the most accessible marine activities in Kalpitiya and is suitable for visitors with little or no diving experience.",
        },

        {
          type: "p",
          text: "Boat trips are usually organized to the shallower sections of the Bar Reef where visibility and coral coverage are best.",
        },

        {
          type: "split-paragraph",
          heading: "Short Boat Trips to the Reef",
          headingLevel: "h3",

          paragraphs: [
            "Many reef sites are located relatively close to shore, allowing snorkeling trips to reach the reef in as little as 15 minutes by boat.",
            "The shallow reef areas provide good opportunities to observe coral fish, sea turtles, and colorful marine habitats from the surface.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalpitiya/diving-reef/snorkeling.webp`,
          imageAlt: "Snorkeling at Bar Reef in Kalpitiya",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Lagoon and Ocean Activities",
        },

        {
          type: "p",
          text: "The Kalpitiya Lagoon itself is more commonly associated with kitesurfing and mangrove exploration rather than coral snorkeling.",
        },

        {
          type: "p",
          text: "Coral reefs and marine snorkeling activities take place offshore in the ocean around the Bar Reef Marine Sanctuary.",
        },

        {
          type: "h3",
          text: "Best Snorkeling Season",
        },

        {
          type: "p",
          text: "<strong>Peak Season:</strong> November to April offers the calmest seas and clearest visibility.",
        },

        {
          type: "p",
          text: "<strong>Conditions:</strong> The calmer water during this period makes snorkeling safer and improves visibility for marine life observation.",
        },
      ],
    },
  ],
};

export default KalpitiyaDivingReefArticle;