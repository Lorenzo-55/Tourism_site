const KalametiyaBirdSanctuaryArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Kalametiya Bird Sanctuary" },
  ],

  hero: {
    kicker: "Wetlands & Birdlife",
    title: "Kalametiya Bird Sanctuary",
    subtitle: "A peaceful coastal wetland near Tangalle, known for its mangroves, lagoons, and rich birdlife.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kalametiya/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Coastal Sanctuary for Birds and Wetland Life",
    paragraphs: [
      "Kalametiya Bird Sanctuary is a well-known coastal wetland and lagoon ecosystem on the southeastern coast of Sri Lanka, in the Hambantota District. It is valued for its quiet natural setting and its importance as a habitat for both resident and migratory bird species.",
      "With brackish lagoons, mangrove forests, salt marshes, and surrounding scrubland, the sanctuary offers a calmer and more intimate nature experience than the country’s larger national parks.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "setting",
      kicker: "Setting",
      title: "Location and Ecosystem",
      align: "left",
      content: [
        {
          type: "h4",
          text: "Location",
        },
        {
          type: "p",
          text: "The sanctuary is located near the village of Kalametiya, roughly 20 to 30 kilometers west of Tangalle. It is also relatively close to Bundala National Park, placing it within one of Sri Lanka’s most ecologically rich coastal regions.",
        },
        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.079723389806011,80.93006845085333",
        },

        {
          type: "split-paragraph",
          heading: "Ecosystem",
          headingLevel: "h4",
          paragraphs: [
            "Kalametiya is a sanctuary of brackish water lagoons, dense mangrove forests, salt marshes, and scrubland. These interconnected habitats support a wide variety of birdlife and other wetland species.",
            "The landscape is especially appealing for visitors who enjoy quiet observation, photography, and slow-paced exploration in a natural coastal setting.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Kalametiya/lagoon.webp`,
          imageAlt: "Kalametiya lagoon and wetland landscape",
          mediaPosition: "right",
        },

        {
          type: "h4",
          text: "Birdlife",
        },
        {
          type: "p",
          text: "The sanctuary is home to over 150 species of birds, including both resident and migratory species. Migratory birds are especially common between <strong>November and March</strong>, and notable sightings may include the Indian reef heron, glossy ibis, and black-capped purple kingfisher.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-info",
      kicker: "Visitor Info",
      title: "Visitor Information",
      align: "left",
      content: [
        {
          type: "h4",
          text: "Best Season",
        },
        {
          type: "p",
          text: "<strong>November to March</strong> is the best period for migratory birds, when the sanctuary sees the greatest variety of visiting species.",
        },

        {
          type: "h4",
          text: "Best Time of Day",
        },
        {
          type: "p",
          text: "Early morning and late afternoon are the most rewarding times for bird activity. The best windows are generally <strong>6:00 AM to around 9:00 AM</strong> and <strong>3:30 PM to 6:00 PM</strong>, when the light is softer and the heat is less intense.",
        },

        {
          type: "h4",
          text: "General Hours",
        },
        {
          type: "p",
          text: "The sanctuary area is generally accessible throughout the day, with approximate hours of <strong>5:30 AM to 7:00 PM</strong>.",
        },

        {
          type: "h4",
          text: "Tour and Experience",
        },
        {
          type: "p",
          text: "The main activity here is a <strong>boat safari</strong> through the lagoon. These tours usually last between <strong>2 to 3 hours</strong> and are designed to offer a quiet and eco-friendly experience.",
        },

        {
          type: "h4",
          text: "Mode of Transport",
        },
        {
          type: "p",
          text: "Boat tours are often conducted using paddle boats or modified traditional dugout canoes, helping preserve the calm atmosphere of the sanctuary while minimizing disturbance to wildlife.",
        },

        {
          type: "h4",
          text: "Guides",
        },
        {
          type: "p",
          text: "Hiring a local guide or naturalist is highly recommended. They know the best observation points and can help identify the many bird species found throughout the wetland.",
        },
      ],
    },

    {
      type: "text",
      id: "tips",
      kicker: "Tips",
      title: "Essential Tips for Visitors",
      align: "left",
      content: [
        {
          type: "h4",
          text: "Sun Protection",
        },
        {
          type: "p",
          text: "Carry sunscreen, a hat, and sunglasses, especially if your visit extends into the mid-morning sun.",
        },

        {
          type: "h4",
          text: "Hydration",
        },
        {
          type: "p",
          text: "Bring bottled water to stay hydrated during your visit, particularly on warmer days.",
        },

        {
          type: "h4",
          text: "Clothing",
        },
        {
          type: "p",
          text: "Wear comfortable, breathable clothing. Neutral colors such as green, brown, and beige are best for birdwatching, as they help you blend more naturally into the environment.",
        },

        {
          type: "h4",
          text: "Gear",
        },
        {
          type: "p",
          text: "Binoculars and a camera are highly recommended for close-up viewing and photography.",
        },

        {
          type: "h4",
          text: "Respect Nature",
        },
        {
          type: "p",
          text: "Keep noise to a minimum and do not leave any plastic or litter behind. The sanctuary is a sensitive ecosystem and should be treated with care.",
        },
      ],
    },

    {
      type: "text",
      id: "cost",
      kicker: "Access",
      title: "Admission and Cost",
      align: "left",
      content: [
        {
          type: "h4",
          text: "Admission Ticket",
        },
        {
          type: "p",
          text: "Some sources suggest that a formal entrance ticket to the sanctuary itself may not always be required, though this can vary depending on local arrangements.",
        },

        {
          type: "h4",
          text: "Tour Cost",
        },
        {
          type: "p",
          text: "Visitors should expect to pay for the boat and the services of a guide. Prices for private or shared safaris vary depending on the operator, inclusions such as hotel pickup, and the type of tour booked. Guided boat safaris can usually be arranged on arrival or in advance through a hotel or local operator.",
        },
      ],
    },
  ],
};

export default KalametiyaBirdSanctuaryArticle;