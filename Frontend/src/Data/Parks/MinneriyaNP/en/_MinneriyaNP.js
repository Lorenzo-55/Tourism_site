const MinneriyaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Minneriya National Park" },
  ],

  hero: {
    kicker: "Wildlife & Nature",
    title: "Minneriya National Park",
    subtitle:
      "Home to one of the world’s largest gatherings of wild elephants.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Minneriya/minneriya1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "An Ancient Reservoir Turned Wildlife Haven",
    paragraphs: [
      "Minneriya National Park is one of Sri Lanka’s most important wildlife destinations, combining ancient history with modern conservation. Located in the North Central Province, the park is centered around the Minneriya Tank, a vast reservoir that continues to shape the surrounding ecosystem.",
      "Originally created for irrigation during ancient times, the area has evolved into a protected sanctuary where wildlife thrives. Today, it is especially known for its role as a key elephant habitat and its place within a larger migratory corridor connecting nearby parks.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history",
      kicker: "Background",
      title: "History and Origins",
      align: "left",
      paragraphs: [
        "The origins of Minneriya date back to the 3rd century AD, when King Mahasen constructed the Minneriya Tank as part of an advanced irrigation system that supported agriculture across the region. This engineering achievement remains central to the park’s identity and ecological balance.",
        "The area was later declared a wildlife sanctuary in 1938 to protect both the reservoir’s catchment and the animals that depended on it. In 1997, it was officially designated as a National Park, ensuring long-term protection for its biodiversity and its importance as an elephant migration route.",
        "Even today, the reservoir continues to function as the lifeline of the park, sustaining wildlife and shaping seasonal movement patterns.",
      ],
    },

    {
      type: "text",
      id: "gathering",
      kicker: "Highlight",
      title: "The Elephant Gathering",
      align: "left",
      paragraphs: [
        "Minneriya National Park is globally renowned for ‘The Gathering,’ one of the largest seasonal congregations of wild Asian elephants. During the dry season, typically from June to October, water sources across surrounding areas begin to dry up.",
        "As a result, hundreds of elephants migrate to the Minneriya Tank, where fresh grass and water remain available. At its peak, the gathering can include several hundred elephants, making it one of the most remarkable wildlife spectacles in Asia.",
        "This phenomenon is made possible by the park’s role within a broader elephant corridor linking Minneriya, Kaudulla, and Hurulu Eco Park.",
      ],
    },

    {
      type: "text",
      id: "biodiversity",
      kicker: "Nature",
      title: "Biodiversity and Conservation",
      align: "left",
      paragraphs: [
        "Spanning nearly 9,000 hectares, Minneriya National Park encompasses a range of habitats including dry mixed evergreen forests, scrublands, grasslands, and wetlands. This diversity supports a wide array of wildlife.",
        "The park is home to mammals such as elephants, leopards, sloth bears, and sambar deer, along with endemic species like the purple-faced langur and toque macaque. Birdlife is also abundant, with around 160 recorded species, alongside reptiles, fish, and butterflies.",
        "Despite its importance, the park faces ongoing conservation challenges, including habitat degradation, human-wildlife conflict, and pressures from increasing tourism.",
      ],
    },

    {
      type: "text",
      id: "safari",
      kicker: "Experience",
      title: "Safari Experience",
      align: "left",
      content: [
        {
          type: "p",
          text: "Jeep safaris are the primary way to explore Minneriya National Park, with both morning and afternoon options available. Each safari typically lasts around three hours and is guided by an experienced driver.",
        },
        {
          type: "p",
          text: "Morning safaris offer good opportunities for birdwatching and observing animals during cooler hours, while afternoon safaris are considered the best time to witness the Elephant Gathering as herds gather near the reservoir.",
        },
        {
          type: "p",
          text: "The park is a key stop within Sri Lanka’s Cultural Triangle and is often combined with visits to nearby historical sites such as Sigiriya and Polonnaruwa.",
        },
        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=8.021357183922985,80.84502572455472",
        },
      ],
    },

    {
      type: "text",
      id: "visiting",
      kicker: "Travel Guide",
      title: "How to Visit",
      align: "left",
      paragraphs: [
        "The main entrance to Minneriya National Park is located near Habarana along the Habarana–Polonnaruwa road. The park is easily accessible from major nearby destinations such as Sigiriya, Dambulla, and Polonnaruwa.",
        "Visitors are required to hire a private safari jeep, as personal vehicles are not allowed inside the park’s wildlife zones. Safaris are generally conducted in two time slots: early morning and late afternoon.",
        "The park is typically open daily from 6:00 AM to 6:30 PM, with ticket purchases closing earlier in the evening. Entrance fees are paid separately from jeep hire, and it is advisable to confirm whether tour packages include all charges in advance.",
      ],
    },
  ],
};

export default MinneriyaArticle;