const AdamsPeakArticle = {
  breadcrumbItems: [
    { label: "Places", to: "/places" },
    { label: "Adam’s Peak", to: "/places/adams-peak" },
  ],

  hero: {
    kicker: "Sacred Mountain",
    title: "Adam’s Peak (Sri Pada)",
    subtitle:
      "A legendary mountain of pilgrimage, where religion, nature, and tradition converge at one of Sri Lanka’s most iconic summits.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/AdamsPeak/hero/adams-peak.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Multi-Faith Sacred Landmark",
    paragraphs: [
      "Adam's Peak, also known as Sri Pada (\"sacred footprint\") or Samanalakanda (\"butterfly mountain\"), is a major mountain in southwestern Sri Lanka revered for its immense multi-religious significance.",
      "For centuries, it has drawn pilgrims and travelers from around the world, each connected by the mystery of the sacred footprint at its summit and the powerful experience of the climb.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "multi-faith-history",
      kicker: "History",
      title: "A Multi-Faith Sacred Site",
      align: "left",
      content: [
        {
          type: "p",
          text: "The mountain’s history centers around the \"Sri Pada\" (Sacred Footprint), a large rock indentation near the summit measuring approximately 1.7 meters long and 0.46 meters wide. What makes Adam’s Peak unique is that multiple religions claim this footprint as their own, giving the site an extraordinary shared spiritual significance.",
        },
        {
          type: "p",
          text: "In Buddhism, the footprint is believed to belong to Gautama Buddha, left during his third and final visit to Sri Lanka. This belief dates back to at least the first century BCE and makes Sri Pada one of the most sacred sites in Sri Lankan Buddhism.",
        },
        {
          type: "p",
          text: "Hindus identify the footprint as that of Lord Shiva, known as Sivan Adi Padham, marking the place where the god is said to have stood during his cosmic dance.",
        },
        {
          type: "p",
          text: "In Islamic and Christian traditions, the mountain is associated with Adam, who is believed to have stood here in repentance after being cast out of Eden. Some Christian traditions also connect the site with St. Thomas the Apostle.",
        },
        {
          type: "p",
          text: "Even before these organized religions, the indigenous Veddas people revered the mountain as the dwelling place of the deity Saman, showing that its sacred importance extends far into prehistory.",
        },
      ],
    },

    {
      type: "text",
      id: "historical-development",
      kicker: "Development",
      title: "Pilgrimage and Historical Legacy",
      align: "left",
      content: [
        {
          type: "p",
          text: "Over time, the mountain evolved into one of the most important pilgrimage destinations in Sri Lanka. Medieval kings such as King Vijayabahu I and King Parakramabahu II improved the pilgrimage routes by constructing rest houses and installing iron chains to assist climbers on steep sections.",
        },
        {
          type: "p",
          text: "Adam’s Peak also gained international recognition through accounts by famous travelers such as Marco Polo in the 13th century and Ibn Battuta in the 14th century. Their writings helped establish the mountain’s reputation as a major global pilgrimage site.",
        },
        {
          type: "split-paragraph",
          heading: "Modern Pilgrimage",
          headingLevel: "h4",
          paragraphs: [
            "Today, Adam’s Peak remains one of the world’s most unique examples of religious pluralism, attracting over a million visitors each year. Pilgrims and tourists alike take part in the climb, especially during the main pilgrimage season.",
            "The season runs from December to May, during which the entire path is illuminated at night and lined with rest stops offering food and refreshments. The climb itself is both a spiritual journey and a shared cultural experience.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/AdamsPeak/history/pilgrimage.webp`,
          imageAlt: "Pilgrimage to Adam’s Peak",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "the-climb",
      kicker: "Experience",
      title: "The Climb and the Summit",
      align: "left",
      content: [
        {
          type: "p",
          text: "Most climbers begin the ascent at night, aiming to reach the summit before sunrise. The journey consists of approximately 5,500 steps and an elevation gain of over 1,000 meters, making it physically demanding but achievable for most visitors.",
        },
        {
          type: "p",
          text: "The highlight of the climb is witnessing the sunrise and the unique triangular shadow cast by the mountain across the clouds below, a natural phenomenon that adds to the experience.",
        },
        {
          type: "p",
          text: "At the summit, pilgrims visit the shrine housing the sacred footprint, remove their shoes as a sign of respect, and take part in rituals such as ringing the bell to mark completed ascents.",
        },
        {
          type: "p",
          text: "The climb is also deeply social, with people from different backgrounds sharing the same path, resting at tea stalls, and encouraging each other along the way.",
        },
      ],
    },

    {
      type: "text",
      id: "ecology",
      kicker: "Nature",
      title: "Ecological Importance",
      align: "left",
      paragraphs: [
        "Adam’s Peak is located within the Peak Wilderness Sanctuary, a tropical rainforest and UNESCO-designated World Heritage Site known for its biodiversity.",
        "The mountain is a critical watershed, serving as the source of several major rivers in Sri Lanka, and is home to a wide variety of endemic flora and fauna.",
        "This combination of ecological value and spiritual importance makes the region one of the most unique natural environments in the country.",
      ],
    },

    {
      type: "text",
      id: "visitor-info",
      kicker: "Visitor Guide",
      title: "Planning Your Visit",
      align: "left",
      content: [
        {
          type: "p",
          text: "The best time to visit Adam’s Peak is during the pilgrimage season from December to May. During this period, the path is fully lit, the weather is generally clearer, and facilities such as food stalls are available along the route.",
        },
        {
          type: "p",
          text: "The off-season, from June to November, is not recommended due to heavy rain, slippery conditions, and limited access to facilities. Landslides and poor visibility can make the climb dangerous.",
        },
        {
          type: "p",
          text: "Climbers typically start from Nallathanniya (Dalhousie), the most popular and accessible route. Many visitors travel via Hatton, which is connected by train to major cities like Kandy and Colombo.",
        },
        {
          type: "split-paragraph",
          heading: "Climb Tips",
          headingLevel: "h4",
          paragraphs: [
            "A typical climb takes between 3 to 5 hours, and most people begin around 2:00 AM to reach the summit for sunrise. Starting earlier may help avoid crowds, especially during weekends and full moon (Poya) days.",
            "Bring layered clothing, as the summit can be very cold before dawn, along with water, snacks, and comfortable footwear. A walking stick is highly recommended for the descent, which can be tough on the knees.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/AdamsPeak/guide/climb.webp`,
          imageAlt: "Climbing Adam’s Peak",
          mediaPosition: "left",
        },
        {
          type: "p",
          text: "Visitors should also respect the religious significance of the site by dressing modestly, remaining quiet near shrines, and removing footwear at the summit temple.",
        },

        {
          type: "button",
          label: "Open in Google Maps",
          href: "https://maps.app.goo.gl/QvhPNGN7iXo73fqh6",
        },
      ],
    },
  ],
};

export default AdamsPeakArticle;