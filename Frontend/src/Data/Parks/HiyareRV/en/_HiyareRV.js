const HiyareReservoirArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Hiyare Reservoir" },
  ],

  hero: {
    kicker: "Nature & Wildlife",
    title: "Hiyare Reservoir",
    subtitle: "A शांत rainforest reservoir near Galle, known for biodiversity, birdlife, and peaceful natural surroundings.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Hiyare/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Quiet Escape Near Galle",
    paragraphs: [
      "The Hiyare Reservoir is a significant natural site located near the city of Galle, offering a peaceful environment surrounded by dense rainforest. Originally built as a water source, it has become a popular destination for nature lovers and those seeking a quieter alternative to more crowded attractions.",
      "Today, the area is valued not only for its scenic beauty but also for its biodiversity, making it an ideal spot for birdwatching, photography, and relaxed exploration.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "location",
      kicker: "Location",
      title: "Setting and Purpose",
      align: "left",
      content: [
        {
          type: "split-paragraph",
          heading: "Location and Surroundings",
          headingLevel: "h3",
          paragraphs: [
            "The reservoir is situated approximately 15–17 km northeast of Galle city. Surrounded by lush rainforest, it offers a tranquil setting that feels far removed from the nearby urban areas.",
            "The surrounding forest forms part of a rich ecosystem, supporting a wide range of plant and animal life while creating a calm, shaded environment for visitors.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Hiyare/reservoir.webp`,
          imageAlt: "Hiyare Reservoir surrounded by rainforest",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Purpose",
        },
        {
          type: "p",
          text: "The reservoir was originally constructed in 1911 to supply water to the Galle area and continues to serve this purpose today. It also functions as a Biodiversity Research Center, highlighting its ecological importance beyond its role as a water source.",
        },
      ],
    },

    {
      type: "text",
      id: "activities",
      kicker: "Experience",
      title: "Activities and Highlights",
      align: "left",
      content: [
        {
          type: "h4",
          text: "Nature Walks and Hiking",
        },
        {
          type: "p",
          text: "Visitors can explore trails through the surrounding 600-acre secondary lowland rainforest, a recognized biodiversity hotspot with a calm and immersive natural atmosphere.",
        },

        {
          type: "h4",
          text: "Birdwatching",
        },
        {
          type: "p",
          text: "The area is home to around 118 bird species, including endemic species such as the <strong>Sri Lanka Junglefowl</strong>. It is considered one of the best locations near Galle for birdwatching.",
        },

        {
          type: "h4",
          text: "Wildlife Viewing",
        },
        {
          type: "p",
          text: "In addition to birds, the area supports butterflies, dragonflies, reptiles, amphibians, and small mammals such as deer, making it a rewarding destination for wildlife observation.",
        },

        {
          type: "h4",
          text: "Animal Rescue Programme",
        },
        {
          type: "p",
          text: "A facility operated by the Wildlife Conservation Society of Galle is located here, focusing on rescuing, treating, and rehabilitating injured wild animals before releasing them back into their natural habitat.",
        },

        {
          type: "h4",
          text: "Boating",
        },
        {
          type: "p",
          text: "Paddle boat rides on the reservoir are occasionally available, offering a relaxed way to experience the surrounding scenery from the water.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-info",
      kicker: "Visitor Info",
      title: "Planning Your Visit",
      align: "left",
      content: [
        {
          type: "h4",
          text: "Location",
        },
        {
          type: "p",
          text: "Approximately 15–17 km northeast of Galle city.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.058653185428905,80.31551817784745",
        },

        {
          type: "h4",
          text: "Best For",
        },
        {
          type: "p",
          text: "Nature enthusiasts, birdwatchers, quiet retreats, and wildlife photography.",
        },

        {
          type: "h4",
          text: "Time Needed",
        },
        {
          type: "p",
          text: "Around 2 to 4 hours is usually sufficient to explore the area at a relaxed pace.",
        },

        {
          type: "h4",
          text: "Entrance Fee",
        },
        {
          type: "p",
          text: "A small entrance fee is typically charged at the gate, often around <strong>LKR 200 per person</strong>. Guided tours may cost more and usually include transport, a naturalist guide, and entry.",
        },

        {
          type: "h4",
          text: "Opening Hours",
        },
        {
          type: "p",
          text: "There are generally no strict official closing times, but visiting during daylight hours (approximately <strong>7:30 AM – 6:00 PM</strong>) is recommended. Late afternoons are often quieter and more relaxed.",
        },

        {
          type: "h4",
          text: "Facilities",
        },
        {
          type: "p",
          text: "Facilities are limited, and there are usually no food outlets on-site. Visitors should bring their own water and snacks.",
        },
      ],
    },

    {
      type: "text",
      id: "tips",
      kicker: "Tips",
      title: "Practical Advice",
      align: "left",
      content: [
        {
          type: "h4",
          text: "Transport",
        },
        {
          type: "p",
          text: "The most convenient way to reach the reservoir is by tuk-tuk or car from Galle, with a journey time of around 30 minutes. The access road can be uneven or damaged in places, so careful driving is advised.",
        },

        {
          type: "h4",
          text: "Food and Water",
        },
        {
          type: "p",
          text: "As there are no food outlets inside the site, it is best to bring your own refreshments.",
        },

        {
          type: "h4",
          text: "Swimming",
        },
        {
          type: "p",
          text: "Swimming or bathing in the reservoir is strictly forbidden, as it is a primary drinking water source and can be unsafe due to depth.",
        },

        {
          type: "h4",
          text: "Equipment",
        },
        {
          type: "p",
          text: "Bringing insect repellent, a hat, and binoculars is recommended. If exploring deeper forest areas, some guides may provide leech socks due to the damp rainforest environment.",
        },
      ],
    },
  ],
};

export default HiyareReservoirArticle;