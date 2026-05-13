const NuwaraEliyaHikingArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Nuwara Eliya", to: "/places/nuwara-eliya" },
    { label: "Hiking" },
  ],

  hero: {
    kicker: "Hiking & Tea Trails",
    title: "Hiking",
    subtitle:
      "Highland walking routes, tea plantation paths, misty landscapes, and Pekoe Trail stages around Nuwara Eliya.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/NuwaraEliya/hiking/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Walking Through Sri Lanka’s Tea Highlands",
    paragraphs: [
      "Nuwara Eliya is one of Sri Lanka’s best areas for cool-climate hiking, with tea plantations, colonial-era landscapes, misty hills, and scenic village paths.",
      "The region is also an important part of the Pekoe Trail, a long-distance hiking route through the central highlands that connects tea country, local communities, and historic plantation landscapes.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "pekoe-trail",
      kicker: "Long-Distance Trail",
      title: "The Pekoe Trail Around Nuwara Eliya",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Pekoe Trail is a long-distance hiking route through the central highlands of Sri Lanka, and the Nuwara Eliya region forms one of its key sections.",
        },

        {
          type: "p",
          text: "The trail runs for approximately 300 kilometers, or 186 miles, and is divided into 22 stages from Kandy to Nuwara Eliya.",
        },

        {
          type: "split-paragraph",
          heading: "Purpose of the Trail",
          headingLevel: "h3",

          paragraphs: [
            "The Pekoe Trail was created to promote sustainable tourism while connecting hikers with Sri Lanka’s tea country, hill-country communities, and plantation heritage.",
            "Along the route, hikers experience tea estates, village roads, forest edges, old colonial infrastructure, and viewpoints across the central highlands.",
            "Around Nuwara Eliya, the trail passes through some of the country’s highest and coolest landscapes.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/NuwaraEliya/hiking/pekoe-trail.webp`,
          imageAlt: "Pekoe Trail through tea plantations near Nuwara Eliya",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Stages Around Nuwara Eliya",
        },

        {
          type: "p",
          text: "Nuwara Eliya is either the final destination or starting point of the Pekoe Trail, depending on the direction of the hike.",
        },

        {
          type: "p",
          text: "The surrounding region includes the final stages of the route, roughly Stages 19 through 22, passing through cool tea country and highland settlements.",
        },
      ],
    },

    {
      type: "text",
      id: "stage-22",
      kicker: "Day Hike",
      title: "Stage 22: Kandapola to Pedro Estate",
      align: "left",

      content: [
        {
          type: "p",
          text: "Stage 22 is one of the most accessible and iconic Pekoe Trail sections around Nuwara Eliya.",
        },

        {
          type: "p",
          text: "It runs between Kandapola and Pedro Estate, ending or beginning very close to Nuwara Eliya town.",
        },

        {
          type: "split-paragraph",
          heading: "Route Details",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Length:</strong> Approximately 10.8–11.3 km.",
            "<strong>Duration:</strong> Around 3.5 to 4.5 hours depending on pace, weather, and stops.",
            "<strong>Landscape:</strong> The route passes through wide tea plantations, local villages, and historic tea estates such as Pedro Estate and Courtlodge.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/NuwaraEliya/hiking/pedro-estate-trail.webp`,
          imageAlt: "Hiking trail near Pedro Estate in Nuwara Eliya",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "Because of its proximity to Nuwara Eliya, this stage is a practical day hike for travelers staying in town.",
        },
      ],
    },

    {
      type: "text",
      id: "what-to-expect",
      kicker: "Trail Experience",
      title: "What to Expect on the Hike",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Tea Plantations:</strong> Much of the trail passes through narrow paths and estate roads between emerald-green tea bushes.",
        },

        {
          type: "p",
          text: "<strong>Colonial Atmosphere:</strong> Around Nuwara Eliya, hikers may see old plantation bungalows, gardens, historic tea factories, and landscapes linked to the town’s ‘Little England’ identity.",
        },

        {
          type: "p",
          text: "<strong>Elevation:</strong> The route crosses some of Sri Lanka’s highest tea-growing areas, where the weather is often cool, misty, and dramatic.",
        },

        {
          type: "p",
          text: "<strong>Ramayana Side Trips:</strong> Seetha Amman Temple and Hakgala Botanical Garden, associated with the Ashok Vatika tradition, are accessible as side trips from the wider Nuwara Eliya area.",
        },

        {
          type: "p",
          text: "<strong>Trail Markings:</strong> The route is generally marked with orange dots and arrows, and the official Pekoe Trail app can be used for navigation.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.998068575585392,80.82333345270789",
        },
      ],
    },
  ],
};

export default NuwaraEliyaHikingArticle;