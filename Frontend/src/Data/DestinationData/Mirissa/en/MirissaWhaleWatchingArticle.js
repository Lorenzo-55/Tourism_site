const MirissaWhaleWatchingArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Mirissa", to: "/places/mirissa" },
    { label: "Whale Watching" },
  ],

  hero: {
    kicker: "Marine Wildlife",
    title: "Whale Watching",
    subtitle:
      "One of the world’s best locations to spot Blue Whales, dolphins, and other marine giants along Sri Lanka’s southern coast.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Mirissa/whale-watching/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Whale Watching in Mirissa",
    paragraphs: [
      "Mirissa is internationally known as one of the best places in the world for whale watching, especially for sightings of the Blue Whale, the largest animal on Earth.",
      "During the main season, visitors have a strong chance of seeing Blue Whales, Sperm Whales, dolphins, and other marine life as migration routes pass relatively close to Sri Lanka’s southern coastline.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "best-time",
      kicker: "Season",
      title: "Best Time for Whale Watching",
      align: "left",

      content: [
        {
          type: "p",
          text: "The whale watching season in Mirissa is strongly influenced by ocean conditions and seasonal migration patterns.",
        },

        {
          type: "h3",
          text: "Peak Season",
        },

        {
          type: "p",
          text: "<strong>Best Period:</strong> November to April is considered the main whale watching season on Sri Lanka’s southern coast.",
        },

        {
          type: "p",
          text: "During this period, the ocean is generally calmer and the Blue Whale migration route passes relatively close to shore, creating a very high probability of sightings.",
        },

        {
          type: "p",
          text: "<strong>Best Months:</strong> January, February, and March usually offer the calmest seas and highest chances of successful sightings.",
        },

        {
          type: "split-paragraph",
          heading: "Off-Season Conditions",
          headingLevel: "h3",

          paragraphs: [
            "From May to October, the southwest monsoon brings rougher sea conditions to the southern coast.",
            "Visibility and whale sighting opportunities are generally lower during this period, and many operators suspend or reduce tours.",
            "The calmer east coast becomes the preferred region for marine activities during these months.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Mirissa/whale-watching/ocean.webp`,
          imageAlt: "Whale watching boat in Mirissa waters",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "tour-details",
      kicker: "Boat Tours",
      title: "Whale Watching Tours",
      align: "left",

      content: [
        {
          type: "p",
          text: "Most whale watching tours operate from Mirissa Harbour and begin early in the morning when sea conditions are usually calmer.",
        },

        {
          type: "h3",
          text: "Departure Time",
        },

        {
          type: "p",
          text: "Tours generally depart between 6:00 AM and 7:00 AM.",
        },

        {
          type: "p",
          text: "Visitors are usually expected to arrive at the harbour or meeting point around 6:00–6:30 AM before departure.",
        },

        {
          type: "h3",
          text: "Tour Duration",
        },

        {
          type: "p",
          text: "Most tours last approximately 3 to 5 hours depending on sea conditions and how quickly whales are located.",
        },

        {
          type: "h3",
          text: "What You Might See",
        },

        {
          type: "p",
          text: "<strong>Blue Whales:</strong> The most famous and commonly sought species around Mirissa.",
        },

        {
          type: "p",
          text: "<strong>Sperm Whales:</strong> Frequently seen during the season.",
        },

        {
          type: "p",
          text: "<strong>Other Whale Species:</strong> Bryde’s Whales and Fin Whales are occasionally spotted.",
        },

        {
          type: "p",
          text: "<strong>Dolphins:</strong> Spinner Dolphins and Bottlenose Dolphins are commonly encountered during tours.",
        },

        {
          type: "p",
          text: "<strong>Rare Sightings:</strong> Orcas (Killer Whales) and Whale Sharks are occasionally reported.",
        },

        {
          type: "split-paragraph",
          heading: "Life at Sea",
          headingLevel: "h3",

          paragraphs: [
            "The early-morning journey across the Indian Ocean is part of the experience itself, often accompanied by dolphins, seabirds, and wide open ocean views.",
            "Depending on conditions, sightings may happen close to the boat or farther in the distance, making binoculars or zoom lenses especially useful.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Mirissa/whale-watching/blue-whale.webp`,
          imageAlt: "Blue whale near Mirissa",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "ethical-whale-watching",
      kicker: "Responsible Tourism",
      title: "Ethical Whale Watching",
      align: "left",

      content: [
        {
          type: "p",
          text: "Choosing a responsible operator is important for protecting whales and reducing stress on marine wildlife.",
        },

        {
          type: "p",
          text: "Some operators may approach whales too closely or crowd animals in order to satisfy passengers, which can disturb natural behavior.",
        },

        {
          type: "h3",
          text: "Responsible Practices",
        },

        {
          type: "p",
          text: "<strong>Safe Distance:</strong> Ethical operators maintain a respectful distance, usually around 100 meters or more.",
        },

        {
          type: "p",
          text: "<strong>Noise Reduction:</strong> Engines are slowed or minimized near whales to reduce disturbance.",
        },

        {
          type: "p",
          text: "<strong>Education:</strong> Good operators often include trained naturalists or guides who explain whale behavior and marine ecology.",
        },

        {
          type: "p",
          text: "<strong>No Swimming with Whales:</strong> Responsible operators do not offer direct swimming encounters, which are often considered unethical or illegal.",
        },

        {
          type: "h3",
          text: "Operators Often Mentioned for Ethical Practices",
        },

        {
          type: "p",
          text: "<strong>Raja & the Whales</strong>",
        },

        {
          type: "p",
          text: "<strong>Whale Watching Club Mirissa</strong>",
        },
      ],
    },

    {
      type: "text",
      id: "travel-tips",
      kicker: "Travel Tips",
      title: "What to Bring and Practical Advice",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Sea Sickness:</strong> Motion sickness tablets such as Dramamine are strongly recommended, even during the calm season.",
        },

        {
          type: "p",
          text: "<strong>Sun Protection:</strong> Bring sunscreen, sunglasses, and a hat, as the morning sun becomes strong quickly on the open water.",
        },

        {
          type: "p",
          text: "<strong>Clothing:</strong> A lightweight jacket or windbreaker is useful because the sea breeze can feel cool during the early morning departure.",
        },

        {
          type: "p",
          text: "<strong>Photography:</strong> A camera with a zoom lens or binoculars can help with distant sightings.",
        },

        {
          type: "p",
          text: "<strong>Food and Drinks:</strong> Many tours include a light breakfast along with tea, coffee, or bottled water.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=8.35257300626466,80.49965281352574",
        },
      ],
    },
  ],
};

export default MirissaWhaleWatchingArticle;