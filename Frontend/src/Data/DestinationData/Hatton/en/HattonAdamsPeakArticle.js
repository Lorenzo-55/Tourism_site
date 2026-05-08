const HattonAdamsPeakArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Hatton", to: "/places/hatton" },
    { label: "Adam's Peak" },
  ],

  hero: {
    kicker: "Sacred Mountain",
    title: "Adam’s Peak (Sri Pada)",
    subtitle:
      "A sacred pilgrimage mountain revered by multiple religions and famous for its sunrise climb above the clouds.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Hatton/adams-peak/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Sri Lanka’s Sacred Mountain Pilgrimage",
    paragraphs: [
      "Adam’s Peak, also known as Sri Pada or Samanalakanda, is one of Sri Lanka’s most important religious and cultural landmarks.",
      "The mountain is revered by Buddhists, Hindus, Muslims, and Christians, while also being famous for its breathtaking sunrise views, pilgrimage atmosphere, and dramatic mountain scenery.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "sacred-mountain",
      kicker: "Sacred Site",
      title: "The Sacred Footprint",
      align: "left",

      content: [
        {
          type: "p",
          text: "The mountain’s religious significance centers around the famous “Sri Pada” or Sacred Footprint located near the summit.",
        },

        {
          type: "p",
          text: "This large indentation in the rock has been associated with different religious traditions for centuries.",
        },

        {
          type: "split-paragraph",
          heading: "Multi-Religious Importance",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Buddhism:</strong> Buddhists believe the footprint belongs to Gautama Buddha and consider the mountain one of the island’s most sacred pilgrimage sites.",
            "<strong>Hinduism:</strong> Hindus associate the footprint with the god Shiva and refer to it as Sivan Adi Padham.",
            "<strong>Islam and Christianity:</strong> Muslim and Christian traditions connect the footprint with Adam after his expulsion from the Garden of Eden.",
            "<strong>Indigenous Beliefs:</strong> Long before the arrival of these religions, the indigenous Vedda people revered the mountain as the dwelling place of the deity Saman.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hatton/adams-peak/sacred-footprint.webp`,
          imageAlt: "Adam's Peak summit pilgrimage area",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "Because of this shared religious importance, Adam’s Peak remains one of the world’s most remarkable sites of religious coexistence and pilgrimage.",
        },
      ],
    },

    {
      type: "text",
      id: "history",
      kicker: "History",
      title: "Historical and Cultural Legacy",
      align: "left",

      content: [
        {
          type: "p",
          text: "The mountain has been an important pilgrimage destination for centuries and was visited by both local pilgrims and international travelers.",
        },

        {
          type: "h3",
          text: "Pilgrimage Infrastructure",
        },

        {
          type: "p",
          text: "Medieval Sri Lankan kings improved the pilgrimage route by constructing rest shelters known as ambalamas and installing chains to assist climbers on steep sections.",
        },

        {
          type: "p",
          text: "<strong>King Vijayabahu I:</strong> Improved the route during the 11th century.",
        },

        {
          type: "p",
          text: "<strong>King Parakramabahu II:</strong> Continued developments during the 13th century.",
        },

        {
          type: "h3",
          text: "Global Recognition",
        },

        {
          type: "p",
          text: "Famous historical travelers such as Marco Polo and Ibn Battuta documented the mountain in their writings, helping establish Adam’s Peak as a major international pilgrimage destination.",
        },

        {
          type: "split-paragraph",
          heading: "Peak Wilderness Sanctuary",
          headingLevel: "h4",

          paragraphs: [
            "Adam’s Peak is located within the Peak Wilderness Sanctuary, a UNESCO World Heritage region known for its tropical rainforest ecosystem.",
            "The mountain also serves as an important watershed and is the source of several major rivers in Sri Lanka.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hatton/adams-peak/peak-wilderness.webp`,
          imageAlt: "Forest landscape around Adam's Peak",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "pilgrimage-season",
      kicker: "Pilgrimage",
      title: "Pilgrimage Season and Climb Experience",
      align: "left",

      content: [
        {
          type: "p",
          text: "The main pilgrimage season runs from the full moon in December until the full moon in May during Vesak season.",
        },

        {
          type: "p",
          text: "During this period, the approximately 5,500-step route is illuminated at night, and food stalls and tea shops operate along the path.",
        },

        {
          type: "h3",
          text: "The Ascent",
        },

        {
          type: "p",
          text: "<strong>Total Steps:</strong> Approximately 5,500 steps on the main route.",
        },

        {
          type: "p",
          text: "<strong>Elevation Gain:</strong> More than 1,000 meters.",
        },

        {
          type: "p",
          text: "<strong>Difficulty:</strong> The climb is physically demanding due to the steep and continuous staircase ascent.",
        },

        {
          type: "p",
          text: "<strong>Recommended Start Time:</strong> Most climbers begin between 2:00 AM and 3:00 AM to reach the summit before sunrise.",
        },

        {
          type: "p",
          text: "<strong>Average Climb Time:</strong> Approximately 3 to 4 hours depending on pace and crowd conditions.",
        },

        {
          type: "split-paragraph",
          heading: "Sunrise and the Triangular Shadow",
          headingLevel: "h3",

          paragraphs: [
            "The main goal for most climbers is to witness the spectacular sunrise from the summit.",
            "After sunrise, the mountain famously casts a perfectly triangular shadow across the clouds below, creating one of Sri Lanka’s most iconic natural scenes.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hatton/adams-peak/sunrise.webp`,
          imageAlt: "Sunrise from Adam's Peak summit",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "Pilgrims traditionally ring the summit bell to mark the number of times they have completed the climb.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Routes, Packing, and Practical Tips",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Starting Point",
        },

        {
          type: "p",
          text: "The most popular route begins from the village of Nallathanniya, also known as Dalhousie.",
        },

        {
          type: "p",
          text: "This route is considered the easiest and has the best facilities during the pilgrimage season.",
        },

        {
          type: "h3",
          text: "Getting There",
        },

        {
          type: "p",
          text: "<strong>Train to Hatton:</strong> Hatton Railway Station is the nearest major transport hub on the scenic Kandy to Ella railway line.",
        },

        {
          type: "p",
          text: "<strong>Hatton to Dalhousie:</strong> Local buses and tuk-tuks connect Hatton with Dalhousie in around 1 to 2 hours.",
        },

        {
          type: "p",
          text: "<strong>Overnight Stay:</strong> Many travellers stay overnight in Dalhousie before beginning the climb in the early morning hours.",
        },

        {
          type: "h3",
          text: "What to Bring",
        },

        {
          type: "p",
          text: "<strong>Clothing:</strong> Wear light clothing for the climb but bring a warm jacket or sweater for the cold summit conditions before sunrise.",
        },

        {
          type: "p",
          text: "<strong>Footwear:</strong> Comfortable trainers or walking shoes with good support are recommended.",
        },

        {
          type: "p",
          text: "<strong>Essentials:</strong> Water, snacks, and a torch or headlamp are highly recommended, especially during the off-season.",
        },

        {
          type: "p",
          text: "<strong>Walking Stick:</strong> Helpful for both the ascent and especially the descent, which can strain the knees.",
        },

        {
          type: "h3",
          text: "Visitor Etiquette",
        },

        {
          type: "p",
          text: "<strong>Respect the Pilgrimage:</strong> For many visitors this is a deeply spiritual journey, so respectful behaviour is important.",
        },

        {
          type: "p",
          text: "<strong>Dress Modestly:</strong> Shoulders and knees should be covered near the summit shrine.",
        },

        {
          type: "p",
          text: "<strong>Shoes Off:</strong> Footwear must be removed before entering the summit temple area.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=RF5X%2BVQ%20Heramitipana%2C%20Sri%20Lanka",
        },
      ],
    },
  ],
};

export default HattonAdamsPeakArticle;