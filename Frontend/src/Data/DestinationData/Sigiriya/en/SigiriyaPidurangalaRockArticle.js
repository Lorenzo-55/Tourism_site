const SigiriyaPidurangalaRockArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Sigiriya", to: "/places/sigiriya" },
    { label: "Pidurangala Rock" },
  ],

  hero: {
    kicker: "Rock Viewpoint",
    title: "Pidurangala Rock",
    subtitle:
      "A scenic and historic rock climb near Sigiriya, known for its monastery ruins, reclining Buddha statue, and panoramic views of Lion Rock.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Sigiriya/pidurangala-rock/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "The Best View of Sigiriya Lion Rock",
    paragraphs: [
      "Pidurangala Rock is one of the best alternatives or additions to climbing Sigiriya, offering a dramatic viewpoint over Lion Rock and the surrounding jungle plains.",
      "Slightly lower and usually much cheaper than Sigiriya, the climb is especially popular at sunrise and sunset, when the landscape is lit by soft golden light.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history-and-religious-significance",
      kicker: "History & Religion",
      title: "A Monastic Rock Before Sigiriya",
      align: "left",

      content: [
        {
          type: "p",
          text: "Pidurangala is more than a viewpoint. Long before King Kashyapa built his palace on nearby Lion Rock, the area was already used as a Buddhist monastic site.",
        },

        {
          type: "p",
          text: "When Kashyapa developed Sigiriya as a royal fortress and garden complex, he moved the monks from the base of Sigiriya and offered them a new home at Pidurangala.",
        },

        {
          type: "split-paragraph",
          heading: "Kashyapa’s Relocation of the Monks",
          headingLevel: "h4",

          paragraphs: [
            "King Kashyapa renovated caves and built new religious structures at Pidurangala so the displaced monks could continue their monastic life.",
            "This connection makes Pidurangala closely tied to the story of Sigiriya, but with a quieter and more religious character.",
            "The remaining ruins, caves, and temple structures show that the rock remained an important Buddhist center for centuries.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Sigiriya/pidurangala-rock/monastery-ruins.webp`,
          imageAlt: "Monastery ruins at Pidurangala Rock",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "<strong>Reclining Buddha Statue:</strong> One of the most striking features on the route is the large reclining Buddha statue, partly carved from the rock itself. Although damaged by looters, the outline of the body and foundations remain clearly visible.",
        },
      ],
    },

    {
      type: "text",
      id: "the-climb",
      kicker: "The Climb",
      title: "Trail, Boulder Scramble, and Summit",
      align: "left",

      content: [
        {
          type: "p",
          text: "The climb begins at the entrance of Pidurangala Monastery and first passes temple buildings, ruins, and a cave area before continuing toward the summit.",
        },

        {
          type: "p",
          text: "The trail is shorter than the Sigiriya climb, but it is less formal and feels more natural.",
        },

        {
          type: "split-paragraph",
          heading: "The Final Boulder Section",
          headingLevel: "h4",

          paragraphs: [
            "Most of the path is straightforward, but the last 10–15 minutes require light scrambling over large boulders.",
            "This final section is the most challenging part of the climb and can be awkward in sandals or weak footwear.",
            "Good shoes are strongly recommended, especially if climbing before sunrise or after rain.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Sigiriya/pidurangala-rock/boulder-climb.webp`,
          imageAlt: "Boulder section near the summit of Pidurangala Rock",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "summit-view",
      kicker: "Viewpoint",
      title: "The Panoramic View",
      align: "left",

      content: [
        {
          type: "p",
          text: "The main reward for climbing Pidurangala is the spectacular 360-degree view from the summit.",
        },

        {
          type: "split-paragraph",
          heading: "Lion Rock from Above the Jungle",
          headingLevel: "h4",

          paragraphs: [
            "From the top, Sigiriya Lion Rock rises dramatically above the surrounding jungle, rice fields, lakes, and villages.",
            "Many travelers consider this the most impressive view of Sigiriya because it allows you to see the full shape and scale of Lion Rock from a distance.",
            "The viewpoint is especially striking at sunrise or sunset, when the warm light highlights both the rock and the landscape below.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Sigiriya/pidurangala-rock/summit-view.webp`,
          imageAlt: "View of Sigiriya Lion Rock from Pidurangala",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "sunrise-and-sunset",
      kicker: "Best Time",
      title: "Sunrise or Sunset",
      align: "left",

      content: [
        {
          type: "p",
          text: "Most visitors climb Pidurangala at sunrise, when the air is cooler and the first light spreads across the jungle plains.",
        },

        {
          type: "p",
          text: "Sunset is also beautiful and is often slightly less crowded, though the descent may require extra care as the light fades.",
        },

        {
          type: "p",
          text: "<strong>Sunrise:</strong> Best for cooler temperatures, golden morning light, and watching the landscape slowly brighten.",
        },

        {
          type: "p",
          text: "<strong>Sunset:</strong> Best for warm evening colors and a quieter atmosphere, but bring a flashlight for the descent.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Practical Tips for Pidurangala",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Entrance Fee:</strong> The entrance fee is much lower than Sigiriya and helps support the upkeep of the monastery.",
        },

        {
          type: "p",
          text: "<strong>Clothing:</strong> The trail passes through a sacred monastery area, so shoulders and knees should be covered at the entrance.",
        },

        {
          type: "p",
          text: "<strong>Footwear:</strong> Wear sturdy shoes that protect your toes, especially for the final boulder scramble.",
        },

        {
          type: "p",
          text: "<strong>Flashlight:</strong> If climbing before sunrise or descending after sunset, bring a torch or headlamp.",
        },

        {
          type: "p",
          text: "<strong>Heat:</strong> Avoid the middle of the day, when the exposed rock becomes very hot.",
        },

        {
          type: "p",
          text: "<strong>Combining with Sigiriya:</strong> Many travelers climb Sigiriya during the day and Pidurangala at sunset, or climb Pidurangala at sunrise and visit Sigiriya afterward.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=7.966611723258743,80.76178425086508",
        },
      ],
    },
  ],
};

export default SigiriyaPidurangalaRockArticle;