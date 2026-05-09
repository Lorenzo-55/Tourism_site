const KalpitiyaMarineLifeWildlifeArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Kalpitiya", to: "/places/kalpitiya" },
    { label: "Marine Life and Wildlife" },
  ],

  hero: {
    kicker: "Marine Wildlife",
    title: "Marine Life and Wildlife in Kalpitiya",
    subtitle:
      "Dolphin super pods, migrating whales, and rich marine ecosystems along Sri Lanka’s northwest coast.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kalpitiya/marine-life/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "One of Sri Lanka’s Best Marine Wildlife Destinations",
    paragraphs: [
      "Kalpitiya is internationally known as one of Sri Lanka’s top destinations for dolphin watching and marine wildlife experiences.",
      "The waters off the Kalpitiya Peninsula are especially famous for enormous pods of Spinner Dolphins, while deeper offshore areas also offer opportunities to spot whales during migration seasons.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "dolphin-watching",
      kicker: "Dolphin Watching",
      title: "Dolphin Watching in Kalpitiya",
      align: "left",

      content: [
        {
          type: "p",
          text: "Kalpitiya is widely regarded as one of the best places in Sri Lanka for dolphin watching, particularly for sightings of Spinner Dolphins.",
        },

        {
          type: "p",
          text: "Large groups of dolphins are commonly seen offshore, often performing acrobatic jumps and spins above the water.",
        },

        {
          type: "split-paragraph",
          heading: "Spinner Dolphin Super Pods",
          headingLevel: "h3",

          paragraphs: [
            "Spinner Dolphins are the main attraction in Kalpitiya and are famous for their energetic spinning leaps.",
            "These dolphins often travel in massive groups known as “super pods,” sometimes numbering in the hundreds or even thousands.",
            "Watching the pods move and leap across the ocean surface is considered one of the most memorable wildlife experiences in Sri Lanka.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalpitiya/marine-life/spinner-dolphins.webp`,
          imageAlt: "Spinner dolphins off the coast of Kalpitiya",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Best Dolphin Watching Season",
        },

        {
          type: "p",
          text: "<strong>Main Season:</strong> November to April generally offers the calmest seas and best conditions.",
        },

        {
          type: "p",
          text: "<strong>Peak Months:</strong> February and March are often considered the best months for large dolphin concentrations and reliable sightings.",
        },

        {
          type: "p",
          text: "<strong>Sea Conditions:</strong> The calmer northeast monsoon season allows boats to reach the nutrient-rich “Dolphin Line” offshore more comfortably.",
        },

        {
          type: "h3",
          text: "Other Dolphin Species",
        },

        {
          type: "p",
          text: "<strong>Bottlenose Dolphins:</strong> Frequently spotted and among the most recognizable dolphin species.",
        },

        {
          type: "p",
          text: "<strong>Risso’s Dolphins:</strong> Identifiable by their square-shaped heads and scarred skin.",
        },

        {
          type: "p",
          text: "<strong>Indo-Pacific Humpback Dolphins:</strong> Sometimes called “pink dolphins,” occasionally seen near the Puttalam Lagoon area.",
        },

        {
          type: "h3",
          text: "Tour Information",
        },

        {
          type: "p",
          text: "<strong>Departure Time:</strong> Tours usually begin early in the morning between 6:30 AM and 7:30 AM.",
        },

        {
          type: "p",
          text: "<strong>Duration:</strong> Most tours last around 3 to 4 hours.",
        },

        {
          type: "p",
          text: "<strong>Departure Areas:</strong> Common starting points include Alankuda and Kudawa.",
        },

        {
          type: "p",
          text: "<strong>Success Rate:</strong> Dolphin sightings during peak season are extremely reliable and often cited above 85%.",
        },
      ],
    },

    {
      type: "text",
      id: "responsible-tourism",
      kicker: "Responsible Tourism",
      title: "Marine Conservation and Responsible Tours",
      align: "left",

      content: [
        {
          type: "p",
          text: "Responsible wildlife tourism is important for protecting Kalpitiya’s marine ecosystem and minimizing stress on dolphins and whales.",
        },

        {
          type: "split-paragraph",
          heading: "Choosing Responsible Operators",
          headingLevel: "h3",

          paragraphs: [
            "Visitors are encouraged to choose tour operators that follow guidelines issued by the Department of Wildlife Conservation (DWC).",
            "Responsible operators maintain safe viewing distances, avoid chasing animals, and reduce noise and disturbance around marine wildlife.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalpitiya/marine-life/dolphin-tour.webp`,
          imageAlt: "Boat tour for dolphin watching in Kalpitiya",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "<strong>DWC Permit:</strong> Visitors are generally required to purchase a Department of Wildlife Conservation permit for marine wildlife tours.",
        },

        {
          type: "p",
          text: "<strong>Environmental Awareness:</strong> Avoid littering and do not attempt to touch or feed marine animals during tours.",
        },
      ],
    },

    {
      type: "text",
      id: "whale-watching",
      kicker: "Whale Watching",
      title: "Whale Watching in Kalpitiya",
      align: "left",

      content: [
        {
          type: "p",
          text: "Although Kalpitiya is more famous for dolphins, the region also offers opportunities for whale watching due to the deep offshore waters near the continental shelf.",
        },

        {
          type: "p",
          text: "Whales are generally seen during the same calm-season period used for dolphin watching tours.",
        },

        {
          type: "split-paragraph",
          heading: "Whale Watching Season",
          headingLevel: "h3",

          paragraphs: [
            "The main whale watching season runs from November to April, with activity often peaking between November and December and again between March and April.",
            "November and April are especially noted for migrating whales passing closer to shore.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalpitiya/marine-life/whale-watching.webp`,
          imageAlt: "Whale watching boat in Kalpitiya",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Whale Species",
        },

        {
          type: "p",
          text: "<strong>Sperm Whales:</strong> The most commonly sighted whale species in Kalpitiya.",
        },

        {
          type: "p",
          text: "<strong>Blue Whales:</strong> Occasionally seen during migration periods, especially around November and April.",
        },

        {
          type: "p",
          text: "<strong>Other Species:</strong> Bryde’s Whales, Minke Whales, Melon-Headed Whales, Dwarf Sperm Whales, and occasionally Orcas may also appear.",
        },

        {
          type: "h3",
          text: "Tour Details",
        },

        {
          type: "p",
          text: "<strong>Departure Time:</strong> Whale tours usually begin around 7:00 AM.",
        },

        {
          type: "p",
          text: "<strong>Duration:</strong> Tours typically last between 3 and 5 hours.",
        },

        {
          type: "p",
          text: "<strong>Whale Sighting Success Rate:</strong> Lower than dolphin watching, often estimated around 30% during the season.",
        },

        {
          type: "h3",
          text: "Comparison with Other Whale Watching Destinations",
        },

        {
          type: "p",
          text: "<strong>Mirissa:</strong> Generally considered Sri Lanka’s top destination for Blue Whale sightings during November to April.",
        },

        {
          type: "p",
          text: "<strong>Trincomalee:</strong> The east coast whale-watching season runs mainly from May to October.",
        },

        {
          type: "p",
          text: "Kalpitiya is best suited for travellers looking to combine highly reliable dolphin sightings with the possibility of seeing whales in a quieter and more authentic coastal setting.",
        },
      ],
    },
  ],
};

export default KalpitiyaMarineLifeWildlifeArticle;