const JaffnaIslandsArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Jaffna", to: "/places/jaffna" },
    { label: "Jaffna Islands" },
  ],

  hero: {
    kicker: "Island Exploration",
    title: "Jaffna Islands",
    subtitle:
      "Sacred temples, colonial ruins, wild ponies, and remote island landscapes across the northern archipelago of Sri Lanka.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Jaffna/islands/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Exploring the Northern Islands",
    paragraphs: [
      "The islands surrounding Jaffna offer a very different side of Sri Lanka, with quiet villages, spiritual sites, windswept coastlines, and traces of colonial history.",
      "Among the most well-known are Nainativu, famous for its Buddhist and Hindu temples, and Delft Island, known for its wild ponies, coral-built structures, and remote island atmosphere.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "nainativu",
      kicker: "Sacred Island",
      title: "Nainativu (Nagadeepa)",
      align: "left",

      content: [
        {
          type: "p",
          text: "Nainativu, also known as Nagadeepa, is one of the most spiritually important islands in northern Sri Lanka.",
        },

        {
          type: "p",
          text: "Despite its small size, the island attracts both Buddhist and Hindu pilgrims due to the presence of two major religious sites located close to one another.",
        },

        {
          type: "split-paragraph",
          heading: "An Island of Religious Harmony",
          headingLevel: "h3",

          paragraphs: [
            "Nainativu is notable for the peaceful coexistence of important Buddhist and Hindu temples on the same island.",
            "Pilgrims and visitors from different communities travel here throughout the year, creating a unique atmosphere of spirituality and cultural connection.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Jaffna/islands/nainativu.webp`,
          imageAlt: "Nainativu island temples in Jaffna",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Nagadeepa Purana Viharaya",
        },

        {
          type: "p",
          text: "According to Buddhist tradition, this is the site where the Buddha visited to settle a dispute between two Naga kings over a jeweled throne.",
        },

        {
          type: "p",
          text: "The temple features a striking silver stupa and a bronze Buddha statue donated by Myanmar in 1956.",
        },

        {
          type: "p",
          text: "It remains one of the most important Buddhist pilgrimage destinations in northern Sri Lanka.",
        },

        {
          type: "h3",
          text: "Nagapooshani Amman Kovil",
        },

        {
          type: "p",
          text: "This Hindu temple is one of the 64 Shakti Peethas dedicated to the goddess Shakti.",
        },

        {
          type: "p",
          text: "The temple is dedicated to Nagapooshani Amman, an incarnation of Parvati, and is known for its colorful Dravidian architecture and towering Raja Raja Gopuram.",
        },

        {
          type: "p",
          text: "The annual Mahostavam festival, held during June and July, attracts thousands of pilgrims to the island.",
        },

        {
          type: "h3",
          text: "Getting There",
        },

        {
          type: "p",
          text: "Travellers usually reach Nainativu by first traveling to Kurikadduwan Jetty on Punkudutivu Island before taking a local ferry to the island.",
        },

        {
          type: "p",
          text: "The ferry ride takes around 20 minutes and offers scenic views across the northern waters.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=9.618552068497594,79.7744506494076",
        },
      ],
    },

    {
      type: "text",
      id: "delft-island",
      kicker: "Remote Island",
      title: "Delft Island (Neduntheevu)",
      align: "left",

      content: [
        {
          type: "p",
          text: "Delft Island, locally known as Neduntheevu, is one of the most unusual and remote islands in Sri Lanka’s northern archipelago.",
        },

        {
          type: "p",
          text: "Named after the Dutch city of Delft during the VOC colonial period, the island is known for its wild ponies, coral architecture, and isolated landscapes.",
        },

        {
          type: "split-paragraph",
          heading: "Wild Ponies and Open Landscapes",
          headingLevel: "h3",

          paragraphs: [
            "The island’s most famous feature is its herds of wild ponies, believed to be descendants of horses left behind by Portuguese and Dutch settlers.",
            "They roam freely across Delft’s dry plains, creating one of the most distinctive landscapes in Sri Lanka.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Jaffna/islands/delft-island.webp`,
          imageAlt: "Wild ponies on Delft Island",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Main Attractions",
        },

        {
          type: "p",
          text: "<strong>Baobab Tree:</strong> A massive centuries-old baobab tree believed to have been brought by Arab traders.",
        },

        {
          type: "p",
          text: "<strong>Delft Fort Ruins:</strong> Coral and limestone ruins originally built by the Portuguese and later expanded by the Dutch.",
        },

        {
          type: "p",
          text: "<strong>Coral Walls and Houses:</strong> Traditional structures built using coral fragments and limestone, giving the island a unique appearance.",
        },

        {
          type: "p",
          text: "<strong>Giant’s Footprint:</strong> A large footprint-shaped mark in stone associated with local legends connected to Hanuman.",
        },

        {
          type: "p",
          text: "<strong>Dovecote:</strong> A Dutch-era pigeon tower once used for communication between the island and the mainland.",
        },

        {
          type: "p",
          text: "<strong>Queen’s Tower:</strong> Also known as the Quindah Tower, formerly used as a lighthouse for ships.",
        },

        {
          type: "h3",
          text: "Travel Information",
        },

        {
          type: "p",
          text: "Most visitors explore Delft Island by tuk-tuk after arriving at the ferry terminal.",
        },

        {
          type: "p",
          text: "<strong>Getting There:</strong> Ferries depart from Kurikadduwan Jetty on Punkudutivu Island, which is connected to the Jaffna mainland by road bridges.",
        },

        {
          type: "p",
          text: "<strong>Ferry Duration:</strong> Around 1 hour depending on sea conditions.",
        },

        {
          type: "p",
          text: "<strong>Visitor Tip:</strong> Start early in the morning to allow enough time before the final ferry back to the mainland in the late afternoon.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=9.50683685428208,79.6950374785509",
        },
      ],
    },
  ],
};

export default JaffnaIslandsArticle;