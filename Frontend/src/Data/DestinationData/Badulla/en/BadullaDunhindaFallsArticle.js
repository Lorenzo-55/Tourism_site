const DunhindaFallsArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Badulla", to: "/places/badulla" },
    { label: "Dunhinda Falls" },
  ],

  hero: {
    kicker: "Waterfall & Nature",
    title: "Dunhinda Falls",
    subtitle:
      "One of Sri Lanka’s most famous waterfalls, known for its misty cascade and forested trek near Badulla.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Badulla/dunhinda1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "The Bridal Veil Falls of Badulla",
    paragraphs: [
      "Dunhinda Falls is one of the most stunning and famous waterfalls in Sri Lanka, located near the town of Badulla.",
      "Often referred to as the “Bridal Veil Falls,” the waterfall is known for its misty white cascade, forested approach trail, and dramatic plunge into the pool below.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "waterfall-name",
      kicker: "Natural Feature",
      title: "The Waterfall and Its Name",
      align: "left",

      content: [
        {
          type: "split-paragraph",
          heading: "Height and Source",
          headingLevel: "h3",

          paragraphs: [
            "Dunhinda Falls plunges dramatically from a height of approximately 64 meters, or 210 feet.",
            "The waterfall is formed by the Badulu Oya stream.",
            "Its powerful drop and surrounding mist make it one of the most recognizable natural landmarks in the Uva Province.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Badulla/dunhinda2.webp`,
          imageAlt: "Dunhinda Falls near Badulla",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "The Name",
        },
        {
          type: "p",
          text: "The name Dunhinda comes from the Sinhala words “Dun,” meaning smoke or mist, and “Hinda,” meaning pour or evaporate.",
        },
        {
          type: "p",
          text: "The name describes the fine, smoky spray created as the water crashes into the pool below.",
        },

        {
          type: "h3",
          text: "The Trek",
        },
        {
          type: "p",
          text: "The waterfall is reached by a rewarding 1.5 km, or 0.9 mile, trek along a designated footpath from the main road entrance at Dunhinda Junction.",
        },
        {
          type: "p",
          text: "The path includes steps, small bridges, and safety railings.",
        },
        {
          type: "p",
          text: "Along the way, visitors pass a smaller cascade known as Kuda Dunhinda, or Little Dunhinda.",
        },
        {
          type: "p",
          text: "The final view is from a constructed viewing platform, which provides the safest and best panorama of the waterfall.",
        },
      ],
    },

    {
      type: "text",
      id: "legend-folklore",
      kicker: "Folklore",
      title: "Legend and Folklore",
      align: "left",

      content: [
        {
          type: "p",
          text: "Dunhinda Falls is steeped in local folklore, with several legends connected to the waterfall and the surrounding landscape.",
        },

        {
          type: "h3",
          text: "The Giant Creeper",
        },
        {
          type: "p",
          text: "One famous legend says that during the time of an ancient king, sometimes identified as King Rajasinghe, a colossal fern or vine became lodged between the rocks at the top of the falls.",
        },
        {
          type: "p",
          text: "This natural blockage acted like a dam and caused severe flooding in Badulla town.",
        },
        {
          type: "p",
          text: "A brave individual named Ranhavadidaraya was tasked with clearing it, which he eventually achieved after three months of effort, saving the town from flooding.",
        },

        {
          type: "split-paragraph",
          heading: "Star-Crossed Lovers",
          headingLevel: "h3",

          paragraphs: [
            "Another tragic tale tells of a princess and her commoner lover.",
            "To avoid the wrath of the princess’s father, the pair are said to have leaped together from the top of the waterfall.",
            "According to the legend, a great storm followed their deaths.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Badulla/dunhinda3.webp`,
          imageAlt: "Forested trail leading to Dunhinda Falls",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Location, Hours, and Safety",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Location",
        },
        {
          type: "p",
          text: "Dunhinda Falls is located approximately 5 to 6 km, or around 3 miles, north of Badulla town on the Badulla–Mahiyangana main road.",
        },
        {
          type: "p",
          text: "The entrance is at Dunhinda Junction, and tuk-tuks from Badulla town can take visitors directly there.",
        },

        {
          type: "h3",
          text: "Opening Hours",
        },
        {
          type: "p",
          text: "<strong>Daily:</strong> Generally open from 7:00 AM to 5:00 PM.",
        },

        {
          type: "h3",
          text: "Entrance Fee",
        },
        {
          type: "p",
          text: "<strong>Fee:</strong> A small entrance fee is usually charged, typically around LKR 200 for foreigners.",
        },

        {
          type: "h3",
          text: "Best Time to Visit",
        },
        {
          type: "p",
          text: "The falls are most powerful and spectacular during the rainy season from November to March.",
        },
        {
          type: "p",
          text: "June to July is also considered a popular time to visit.",
        },

        {
          type: "h3",
          text: "Safety",
        },
        {
          type: "p",
          text: "Visitors should not attempt to swim or approach the base of the falls closely.",
        },
        {
          type: "p",
          text: "The currents are extremely strong, and the rocks are slippery.",
        },
        {
          type: "p",
          text: "For safety, stay on the designated viewing platform.",
        },

        {
          type: "h3",
          text: "Nature Along the Trail",
        },
        {
          type: "p",
          text: "The trek itself is part of the experience, with opportunities to see local flora, butterflies, and sometimes monkeys along the path.",
        },
        {
          type: "p",
          text: "Dunhinda Falls remains one of the most striking natural highlights of the Uva Province.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=2396%2B5R%2C%20Badulla%2C%20Sri%20Lanka",
        },
      ],
    },
  ],
};

export default DunhindaFallsArticle;