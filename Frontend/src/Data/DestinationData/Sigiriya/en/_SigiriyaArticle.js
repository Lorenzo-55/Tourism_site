const SigiriyaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Sigiriya" },
  ],

  hero: {
    kicker: "Cultural Triangle",
    title: "Sigiriya",
    subtitle: "A peaceful village at the heart of Sri Lanka’s cultural triangle, offering more than just its iconic rock fortress.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Sigiriya/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Beyond the Lion Rock",
    paragraphs: [
      "The village of Sigiriya is much more than just the gateway to the famous Lion Rock. It is a charming and serene place that has become an excellent base for exploring Sri Lanka's cultural triangle.",
      "While the Lion Rock is the main attraction, the village and its surroundings offer a rich blend of nature, culture, and authentic experiences, making it a destination in its own right.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "village",
      kicker: "Village Life",
      title: "Life in Sigiriya",
      align: "left",
      content: [
        {
          type: "h3",
          text: "Rural Atmosphere",
        },
        {
          type: "p",
          text: "In contrast to the bustling cities, the village of Sigiriya exudes a tranquil, rural atmosphere. It is surrounded by lush rice paddies, dense forests, and serene lakes. The local population makes a living largely from agriculture and tourism, and daily life unfolds at a slower pace. It is common to see ox carts or tuk-tuks moving along narrow dirt roads, adding to the sense of authenticity.",
        },

        {
          type: "h3",
          text: "Tourism Hub",
        },
        {
          type: "p",
          text: "Despite its tranquility, the village has developed into a well-established tourism hub. Visitors can choose from a wide range of accommodations, from simple guesthouses and homestays to luxury eco-lodges and resorts. The growing number of restaurants and cafes offers both traditional Sri Lankan cuisine and international options, catering to a diverse range of travelers.",
        },

        {
          type: "h3",
          text: "Cycling and Hiking",
        },
        {
          type: "p",
          text: "The area around Sigiriya is ideal for exploring by bicycle or on foot. Hidden paths wind through rice paddies and small villages, providing opportunities to observe local life up close. Many accommodations offer bicycles, and renting one is an easy way to discover the surrounding countryside at your own pace.",
        },
      ],
    },

    {
      type: "text",
      id: "dambulla",
      kicker: "Nearby Heritage",
      title: "Dambulla Cave Temples",
      align: "left",
      paragraphs: [
        "The Dambulla Cave Temple, officially known as the Rangiri Dambulla Viharaya (Golden Rock Temple of Dambulla), is a spectacular and immensely significant site in Sri Lanka.",
        "It is a UNESCO World Heritage Site and the largest and best-preserved cave temple complex in the country, featuring richly decorated interiors, centuries-old murals, and numerous Buddha statues carved into natural rock caves.",
      ],
    },

    {
      type: "cards",
      kicker: "Highlights",
      title: "Things to See Around Sigiriya",
      align: "center",
      items: [
        {
          image: `${import.meta.env.BASE_URL}Destinations/Sigiriya/lionrock.webp`,
          imageAlt: "Sigiriya Lion Rock",
          title: "Lion Rock",
          description: "The iconic rock fortress and one of Sri Lanka’s most famous landmarks.",
          to: "/places/sigiriya-lion-rock",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Sigiriya/pidurangala.webp`,
          imageAlt: "Pidurangala Rock",
          title: "Pidurangala Rock",
          description: "A popular climb offering panoramic views of Sigiriya and the surrounding landscape.",
          to: "/places/pidurangala-rock",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Sigiriya/minneriya.webp`,
          imageAlt: "Minneriya or Kaudulla National Park",
          title: "Minneriya or Kaudulla National Park",
          description: "Famous for large elephant gatherings and diverse wildlife.",
          to: "/places/minneriya-national-park",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Sigiriya/village.webp`,
          imageAlt: "Hiriwadunna village tour",
          title: "Hiriwadunna Village Tour",
          description: "Experience traditional rural life through guided village tours.",
          to: "#village",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Sigiriya/temples.webp`,
          imageAlt: "Temples and heritage",
          title: "Temples & Heritage",
          description: "Explore nearby historical and religious sites including Dambulla.",
          to: "#dambulla",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Sigiriya/museum.webp`,
          imageAlt: "Museums and local life",
          title: "Museums & Local Life",
          description: "Discover the region’s culture, archaeology, and everyday traditions.",
          to: "#village",
        },
      ],
    },
  ],
};

export default SigiriyaArticle;