const TrincomaleePigeonIslandArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Trincomalee", to: "/places/trincomalee" },
    { label: "Pigeon Island" },
  ],

  hero: {
    kicker: "Marine National Park",
    title: "Pigeon Island",
    subtitle:
      "Coral reefs, reef sharks, snorkeling, sea turtles, and one of Sri Lanka’s most important marine conservation areas.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Trincomalee/pigeon-island/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Reef Sanctuary Off the Coast of Nilaveli",
    paragraphs: [
      "Pigeon Island National Park is one of Sri Lanka’s best-known marine destinations, located just off the coast of Nilaveli near Trincomalee.",
      "The island combines coral reefs, snorkeling, reef sharks, sea turtles, rocky hiking trails, and conservation-focused tourism within a protected marine ecosystem. :contentReference[oaicite:0]{index=0}",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history-conservation",
      kicker: "History & Conservation",
      title: "From Shooting Range to Marine Sanctuary",
      align: "left",

      content: [
        {
          type: "p",
          text: "Pigeon Island has a surprisingly unusual history, evolving from a colonial military zone into one of Sri Lanka’s most important marine national parks.",
        },

        {
          type: "h3",
          text: "Origin of the Name",
        },

        {
          type: "p",
          text: "The island is named after the Blue Rock Pigeon, which has nested on the rocky island for centuries and continues to breed there today.",
        },

        {
          type: "split-paragraph",
          heading: "Colonial Era and Legal Protection",
          headingLevel: "h3",

          paragraphs: [
            "During the British colonial period, the island was used as a naval shooting range because of its isolation from the mainland.",
            "In 1963, the area was first declared a sanctuary to protect both bird populations and coral ecosystems.",
            "In 2003, it was officially upgraded to National Park status to better manage tourism and marine conservation.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Trincomalee/pigeon-island/pigeon-island-aerial.webp`,
          imageAlt: "Aerial view of Pigeon Island National Park",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Tsunami and Civil War Impact",
        },

        {
          type: "p",
          text: "The 2004 Indian Ocean tsunami damaged sections of the shallow reef, although many coral areas later recovered.",
        },

        {
          type: "p",
          text: "For much of the Sri Lankan Civil War period, tourism to the area remained limited, unintentionally reducing human pressure on the reef system until tourism expanded again after 2009.",
        },

        {
          type: "h3",
          text: "Modern Conservation Challenges",
        },

        {
          type: "p",
          text: "Pigeon Island is now one of the biggest tourism attractions in eastern Sri Lanka, but increasing visitor numbers have created pressure on the fragile reef ecosystem.",
        },

        {
          type: "p",
          text: "Recent surveys indicate that coral cover remains relatively healthy compared to many regional reefs, although shallow coral areas have experienced trampling damage.",
        },

        {
          type: "p",
          text: "Conservation authorities have introduced zoning systems, buoy markers, visitor management plans, and coral restoration initiatives to protect the marine habitat.",
        },
      ],
    },

    {
      type: "text",
      id: "snorkeling-diving",
      kicker: "Marine Activities",
      title: "Snorkeling and Marine Life",
      align: "left",

      content: [
        {
          type: "p",
          text: "Snorkeling is the main activity at Pigeon Island, with coral reefs accessible directly from the beach without requiring a separate boat excursion once on the island.",
        },

        {
          type: "split-paragraph",
          heading: "The Coral Garden",
          headingLevel: "h3",

          paragraphs: [
            "The shallow Coral Garden is filled with colorful reef fish, table corals, and dense marine biodiversity.",
            "Common sightings include Butterflyfish, Parrotfish, Clownfish, Moray Eels, and schools of tropical reef fish.",
            "The shallow water and relatively calm conditions make many sections suitable even for beginner snorkelers.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Trincomalee/pigeon-island/coral-garden.webp`,
          imageAlt: "Coral reef snorkeling at Pigeon Island",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Blacktip Reef Sharks",
        },

        {
          type: "p",
          text: "One of the island’s most famous attractions is the Blacktip Reef Shark population commonly seen near ‘Shark Point.’",
        },

        {
          type: "p",
          text: "These sharks are generally juvenile, non-aggressive, and accustomed to snorkelers, making them a reliable highlight for visitors.",
        },

        {
          type: "h3",
          text: "Sea Turtles and Coral Diversity",
        },

        {
          type: "p",
          text: "Green turtles, Hawksbill turtles, and occasionally Olive Ridley turtles are regularly seen feeding around the reef.",
        },

        {
          type: "p",
          text: "The marine park contains more than 100 coral species and over 300 reef fish species, including both soft and hard corals.",
        },

        {
          type: "p",
          text: "Certain coral formations resemble stone brains or flower petals and are among the reasons the reef is heavily protected.",
        },
      ],
    },

    {
      type: "text",
      id: "hiking-photography",
      kicker: "Island Exploration",
      title: "Hiking, Photography, and Wildlife",
      align: "left",

      content: [
        {
          type: "p",
          text: "Beyond snorkeling, visitors can also explore the rocky island interior and short hiking paths.",
        },

        {
          type: "split-paragraph",
          heading: "The Island Viewpoint",
          headingLevel: "h3",

          paragraphs: [
            "A short but steep hiking trail leads to the island’s rocky summit.",
            "The climb usually takes around 10–15 minutes.",
            "From the top, visitors get panoramic views of the Indian Ocean, Nilaveli coastline, turquoise waters, and surrounding reefs.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Trincomalee/pigeon-island/viewpoint.webp`,
          imageAlt: "Viewpoint hike on Pigeon Island",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Bird Watching",
        },

        {
          type: "p",
          text: "The island remains an important nesting ground for Blue Rock Pigeons, especially in quieter rocky sections away from the main beach.",
        },

        {
          type: "p",
          text: "White-bellied sea eagles are also occasionally seen circling above the island searching for fish.",
        },

        {
          type: "h3",
          text: "Tide Pools and Rocky Shorelines",
        },

        {
          type: "p",
          text: "Small tide pools on the far side of the island become visible during low tide and contain tiny marine ecosystems with crabs, blennies, and other small creatures.",
        },
      ],
    },

    {
      type: "text",
      id: "zones-regulations",
      kicker: "Protection Rules",
      title: "Marine Zones and Conservation Rules",
      align: "left",

      content: [
        {
          type: "p",
          text: "To protect the reef ecosystem, the marine park is divided into different activity zones monitored by the Department of Wildlife Conservation.",
        },

        {
          type: "h3",
          text: "Reef Zones",
        },

        {
          type: "p",
          text: "<strong>Zone A:</strong> Outer reef area known for sharks, turtles, and larger marine life.",
        },

        {
          type: "p",
          text: "<strong>Zones B & C:</strong> Shallow coral gardens suitable for beginners and families.",
        },

        {
          type: "p",
          text: "<strong>Zone D:</strong> Deeper water area mainly used for SCUBA diving.",
        },

        {
          type: "split-paragraph",
          heading: "Strict Conservation Rules",
          headingLevel: "h3",

          paragraphs: [
            "<strong>No Touching Coral:</strong> Standing or walking on coral is prohibited.",
            "<strong>No Smoking or Alcohol:</strong> These are banned throughout the island.",
            "<strong>No Single-Use Plastics:</strong> Bags and plastic waste are checked before boarding boats.",
            "<strong>Fins Restrictions:</strong> Visitors may be asked to remove fins in shallow coral areas to avoid accidental reef damage.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Trincomalee/pigeon-island/snorkeling.webp`,
          imageAlt: "Snorkeling near coral reefs at Pigeon Island",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "Marine officers and rangers actively monitor the reef and may fine visitors who damage coral ecosystems.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Getting There and Practical Tips",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Location:</strong> Off the coast of Nilaveli Beach near Trincomalee.",
        },

        {
          type: "p",
          text: "<strong>Opening Hours:</strong> Daily from 7:00 AM to 5:30 PM.",
        },

        {
          type: "p",
          text: "<strong>Boat Transfer:</strong> Approximately 15 minutes from Nilaveli Beach.",
        },

        {
          type: "p",
          text: "<strong>Boat Cost:</strong> Roughly $15–25 USD per boat depending on group size.",
        },

        {
          type: "p",
          text: "<strong>Foreign Entry Fee:</strong> Approximately $49 USD per adult and $26 USD per child.",
        },

        {
          type: "p",
          text: "<strong>Rental Equipment:</strong> Snorkeling gear generally costs around $5–10 USD if not included in a tour package.",
        },

        {
          type: "split-paragraph",
          heading: "Essential Tips",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Arrive Early:</strong> Morning visits before 10:00 AM usually offer calmer seas and better visibility.",
            "<strong>Wear Water Shoes:</strong> Coral rubble and volcanic rocks can be sharp and extremely hot.",
            "<strong>Bring Water:</strong> There are no restaurants or shops on the island.",
            "<strong>Respect Wildlife:</strong> Avoid touching turtles, sharks, or marine life while snorkeling.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Trincomalee/pigeon-island/nilaveli-boat.webp`,
          imageAlt: "Boat transfer from Nilaveli to Pigeon Island",
          mediaPosition: "right",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=8.785120778608531,81.20353910290747",
        },
      ],
    },
  ],
};

export default TrincomaleePigeonIslandArticle;