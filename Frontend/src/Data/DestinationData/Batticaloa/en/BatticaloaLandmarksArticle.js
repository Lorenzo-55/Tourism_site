const BatticaloaLandmarksArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Batticaloa", to: "/places/batticaloa" },
    { label: "Landmarks" },
  ],

  hero: {
    kicker: "Landmarks & Heritage",
    title: "Landmarks of Batticaloa",
    subtitle:
      "Historic bridges, coastal views, colonial-era structures, and local legends in Batticaloa.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Batticaloa/landmarks1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Historic and Cultural Landmarks",
    paragraphs: [
      "Batticaloa is home to several landmarks that reflect the city’s colonial history, lagoon landscapes, and local folklore.",
      "Among the most recognizable are the Batticaloa Lighthouse at the edge of the lagoon and the historic Kallady Bridge, famous for the legend of the “singing fish.”",
    ],
  },

  sections: [
    {
      type: "text",
      id: "batticaloa-lighthouse",
      kicker: "Colonial Landmark",
      title: "Batticaloa Lighthouse",
      align: "left",

      content: [
        {
          type: "p",
          text: "Batticaloa Lighthouse, also known locally as the “Muttuwaran” Lighthouse, is a historical monument on Sri Lanka’s east coast and one of the city’s best-known landmarks.",
        },

        {
          type: "h3",
          text: "History and Location",
        },

        {
          type: "p",
          text: "<strong>Construction:</strong> The lighthouse was built in 1913 during British colonial rule and served as an important navigational aid for ships entering Batticaloa Harbor.",
        },

        {
          type: "p",
          text: "<strong>Location:</strong> The lighthouse stands at the confluence of Batticaloa Lagoon and the Indian Ocean.",
        },

        {
          type: "p",
          text: "Its position provides panoramic views of both the lagoon and the open sea.",
        },

        {
          type: "p",
          text: "<strong>Name:</strong> The local Tamil name “Muttuwaran” means “where the lagoon meets the ocean,” describing the lighthouse’s location.",
        },

        {
          type: "split-paragraph",
          heading: "What to See",
          headingLevel: "h4",

          paragraphs: [
            "<strong>The Lighthouse:</strong> The tower stands approximately 28 meters tall and is painted in a distinctive white color typical of British colonial lighthouse architecture.",
            "Although visitors are not always permitted to climb the structure, it remains an important historical landmark.",
            "<strong>Panoramic Views:</strong> The surrounding area offers views over Batticaloa Lagoon, nearby islands, mangroves, and the Indian Ocean.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Batticaloa/landmarks2.webp`,
          imageAlt: "Batticaloa Lighthouse near the lagoon",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "<strong>Peaceful Setting:</strong> The lighthouse surroundings are known for their calm atmosphere and scenic coastal environment.",
        },

        {
          type: "p",
          text: "Local fishermen in canoes and families relaxing by the lagoon are common sights around the area.",
        },

        {
          type: "h3",
          text: "Useful Information",
        },

        {
          type: "p",
          text: "<strong>Location:</strong> Palameenmadu area, approximately 5 km from the center of Batticaloa.",
        },

        {
          type: "p",
          text: "<strong>Accessibility:</strong> Easily reachable by tuk-tuk, bicycle, or on foot from nearby areas.",
        },

        {
          type: "p",
          text: "<strong>Admission:</strong> Access to the surrounding site is generally free.",
        },

        {
          type: "p",
          text: "If visitors wish to climb the tower, permission must usually be requested from the caretaker and is not always granted.",
        },

        {
          type: "button",
          label: "View Batticaloa Lighthouse on Google Maps",
          href: "https://www.google.com/maps?q=QM3P%2BW5R%2C%20Batticaloa%2C%20Sri%20Lanka",
        },
      ],
    },

    {
      type: "text",
      id: "kallady-bridge",
      kicker: "Historic Bridge",
      title: "Kallady Bridge and the Singing Fish",
      align: "left",

      content: [
        {
          type: "p",
          text: "Kallady Bridge is one of Batticaloa’s most iconic landmarks and is closely connected to the city’s famous legend of the “singing fish.”",
        },

        {
          type: "h3",
          text: "The Bridge",
        },

        {
          type: "p",
          text: "<strong>Old Bridge:</strong> The original Kallady Bridge was constructed during the British colonial period and dates back to 1928.",
        },

        {
          type: "p",
          text: "At the time of its completion, it was the longest bridge in Sri Lanka.",
        },

        {
          type: "p",
          text: "<strong>New Bridge:</strong> A newer modern bridge was later built nearby to handle increasing traffic volumes.",
        },

        {
          type: "p",
          text: "The original bridge has been preserved and remains an important historical structure.",
        },

        {
          type: "split-paragraph",
          heading: "The Legend of the Singing Fish",
          headingLevel: "h4",

          paragraphs: [
            "Kallady Bridge is internationally known for the mysterious phenomenon of the “singing fish.”",
            "<strong>The Phenomenon:</strong> On calm, windless nights, particularly during the full moon, faint melodic humming sounds are said to rise from the waters below the bridge.",
            "Many describe the sound as a soft song or harmonious hum coming from the lagoon.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Batticaloa/landmarks3.webp`,
          imageAlt: "Kallady Bridge over Batticaloa Lagoon",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "<strong>Scientific Explanation:</strong> Scientists believe the sounds are produced by certain fish species using vibrations from their swim bladders.",
        },

        {
          type: "p",
          text: "<strong>Cultural Significance:</strong> For local residents, the phenomenon remains part of Batticaloa’s folklore and cultural identity.",
        },

        {
          type: "p",
          text: "The legend continues to attract visitors hoping to hear the mysterious sounds for themselves.",
        },

        {
          type: "h3",
          text: "What to Do Around the Bridge",
        },

        {
          type: "p",
          text: "<strong>Views:</strong> The bridge offers scenic views across Batticaloa Lagoon and the surrounding landscape.",
        },

        {
          type: "p",
          text: "It is a popular location for photography, especially during sunrise and sunset.",
        },

        {
          type: "p",
          text: "<strong>Fishing:</strong> Local fishermen are frequently seen navigating the lagoon in traditional canoes.",
        },

        {
          type: "p",
          text: "<strong>Boat Trips:</strong> Boat rides across the lagoon are available nearby and offer opportunities to explore mangroves and aquatic life.",
        },

        {
          type: "p",
          text: "<strong>Evening Atmosphere:</strong> Locals often gather around the bridge in the evenings to enjoy the cooler air, lagoon scenery, and sunset views.",
        },

        {
          type: "p",
          text: "A visit to Kallady Bridge combines history, natural scenery, and one of Batticaloa’s most enduring local legends.",
        },

        {
          type: "button",
          label: "View Kallady Bridge on Google Maps",
          href: "https://www.google.com/maps?q=PP94%2BMRX%2C%20Kallady%2C%20Sri%20Lanka",
        },
      ],
    },
  ],
};

export default BatticaloaLandmarksArticle;