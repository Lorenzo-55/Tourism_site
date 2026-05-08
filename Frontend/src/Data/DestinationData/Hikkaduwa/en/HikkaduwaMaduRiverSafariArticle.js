const MaduRiverSafariArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Hikkaduwa", to: "/places/hikkaduwa" },
    { label: "Madu River Safari" },
  ],

  hero: {
    kicker: "Wetland Safari",
    title: "Madu River Safari",
    subtitle:
      "A peaceful day trip through mangrove tunnels, island temples, cinnamon gardens, and biodiverse wetlands near Balapitiya.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/madu-river-safari/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Scenic Wetland Day Trip",
    paragraphs: [
      "The Madu River, also known as Madu Ganga, is a vast wetland ecosystem near Balapitiya on Sri Lanka’s southwest coast.",
      "Located within easy reach of Hikkaduwa, Bentota, and Galle, the river is known for its mangrove forests, island communities, wildlife, and relaxing boat safari experiences.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "safari-experience",
      kicker: "Boat Safari",
      title: "The Safari Experience",
      align: "left",

      content: [
        {
          type: "p",
          text: "Most Madu River boat safaris last around 1.5 to 2 hours, making the trip manageable as a half-day or day excursion from nearby coastal towns.",
        },

        {
          type: "p",
          text: "The river widens into the Madu Lagoon and passes through a network of mangrove forests, waterways, and more than 60 islands.",
        },

        {
          type: "split-paragraph",
          heading: "Mangroves and Lagoon Views",
          headingLevel: "h3",

          paragraphs: [
            "One of the main highlights of the safari is gliding through dense mangrove tunnels, where the branches form shaded passages over the water.",
            "The calm lagoon scenery, reflections, and narrow waterways create a quiet contrast to the busy beach towns along Sri Lanka’s southwest coast.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/madu-river-safari/mangrove-tunnels.webp`,
          imageAlt: "Boat safari through mangrove tunnels on the Madu River",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "highlights",
      kicker: "Highlights",
      title: "Things to See on the Madu River",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Madu River safari combines natural scenery with small cultural stops, making it both relaxing and educational.",
        },

        {
          type: "p",
          text: "<strong>Mangrove Tunnels:</strong> Boats pass through shaded mangrove passages that are among the most memorable parts of the trip.",
        },

        {
          type: "p",
          text: "<strong>Wildlife Spotting:</strong> The wetland is home to birds such as kingfishers, herons, and cormorants, as well as water monitor lizards, monkeys, and occasionally crocodiles or water snakes.",
        },

        {
          type: "p",
          text: "<strong>Cinnamon Island:</strong> Many safaris stop at an island where visitors can see traditional cinnamon harvesting and peeling, with fresh cinnamon often available to buy.",
        },

        {
          type: "p",
          text: "<strong>Buddhist Temple:</strong> Some tours include a visit to a small island temple, with Kothduwa Temple being one of the popular stops.",
        },

        {
          type: "p",
          text: "<strong>Fish Therapy:</strong> A floating fish spa enclosure is a popular optional stop, usually available for a small additional fee.",
        },

        {
          type: "p",
          text: "<strong>Traditional Fishing:</strong> Visitors may see local fishing methods, including prawn and shrimp traps used along the waterways.",
        },

        {
          type: "split-paragraph",
          heading: "Wetland Wildlife",
          headingLevel: "h4",

          paragraphs: [
            "The Madu River wetland is especially rewarding for birdwatching and slow-paced nature observation.",
            "Morning and late-afternoon trips often offer better conditions for wildlife viewing and softer light for photography.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/madu-river-safari/wetland-wildlife.webp`,
          imageAlt: "Wildlife and mangroves along the Madu River",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Practical Information for Visitors",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Best Time to Go:</strong> Morning or late afternoon is recommended to avoid the midday heat and improve chances of wildlife sightings.",
        },

        {
          type: "p",
          text: "<strong>Duration:</strong> Most boat safaris take approximately 1.5 to 2 hours.",
        },

        {
          type: "p",
          text: "<strong>Estimated Price:</strong> For foreign visitors, boat safari prices generally range from around $25 to $35 USD per adult and $10 to $15 USD for children.",
        },

        {
          type: "p",
          text: "<strong>Price Note:</strong> Costs vary depending on the operator, package inclusions, transport arrangements, and whether the tour is private or shared.",
        },

        {
          type: "p",
          text: "<strong>Booking:</strong> Tours can be booked through local operators near the river mouth in Balapitiya or as part of a package through hotels and travel agents in areas such as Hikkaduwa, Bentota, and Galle.",
        },

        {
          type: "h3",
          text: "What to Bring",
        },

        {
          type: "p",
          text: "<strong>Clothing:</strong> Light, comfortable clothing is recommended for the warm and humid wetland environment.",
        },

        {
          type: "p",
          text: "<strong>Sun Protection:</strong> Bring sunscreen, a hat, and sunglasses.",
        },

        {
          type: "p",
          text: "<strong>Insect Repellent:</strong> Useful around mangroves and wetland areas.",
        },

        {
          type: "p",
          text: "<strong>Camera:</strong> A camera with zoom is helpful for birds and wildlife.",
        },

        {
          type: "p",
          text: "<strong>Water and Snacks:</strong> Food and drinks are often not included, so carrying your own is recommended.",
        },

        {
          type: "p",
          text: "Overall, the Madu River safari is a relaxing and educational experience that offers a close look at the ecological and cultural life of a Sri Lankan wetland.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.273482307225597,80.03924713508015",
        },
      ],
    },
  ],
};

export default MaduRiverSafariArticle;