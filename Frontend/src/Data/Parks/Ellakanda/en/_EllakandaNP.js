const EllakandaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Ellakanda" },
  ],

  hero: {
    kicker: "Nature Reserve",
    title: "Ellakanda",
    subtitle: "A quiet forest reserve near Matara, offering a peaceful escape into nature away from Sri Lanka’s busier parks.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Ellakanda/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Lesser-Known Natural Escape",
    paragraphs: [
      "Ellakanda refers to a beautiful natural area in southern Sri Lanka, though it is not a major officially recognized National Park like Yala or Wilpattu. Instead, it is best understood as a forest reserve with rich biodiversity and a tranquil atmosphere.",
      "Often referred to locally as 'Ellakanda National Park,' the area offers a quieter, less-developed alternative to larger parks, making it ideal for visitors seeking a more relaxed and uncrowded nature experience.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "location",
      kicker: "Location",
      title: "Where is Ellakanda",
      align: "left",
      content: [
        {
          type: "h3",
          text: "Ellakanda Forest Reserve",
        },
        {
          type: "p",
          text: "Ellakanda is primarily associated with the Ellakanda Forest Reserve in the Matara District. Located about 10 km from Matara town in the Southern Province, the reserve is known for its dense vegetation, biodiversity, and relatively untouched natural environment.",
        },

        {
          type: "h3",
          text: "Ellakanda Wewa (Kekanadura Wewa)",
        },
        {
          type: "p",
          text: "Within the forest reserve lies Ellakanda Wewa, also known as Kekanadura Wewa. This reservoir is a central feature of the area, offering calm waters, scenic views, and a peaceful setting that attracts nature lovers and photographers.",
        },

        {
          type: "h3",
          text: "Ella Kanda (Horana Area)",
        },
        {
          type: "p",
          text: "There is also a separate location called Ella Kanda near Horana in the Kalutara District. While it shares a similar name and natural appeal, it is distinct from the Ellakanda Forest Reserve in Matara.",
        },
      ],
    },

    {
      type: "text",
      id: "experience",
      kicker: "Experience",
      title: "Wildlife and Activities",
      align: "left",
      content: [
        {
          type: "h3",
          text: "Wildlife",
        },
        {
          type: "p",
          text: "The forest reserve provides habitat for a variety of wildlife, although it is not as densely populated as Sri Lanka’s major national parks. Visitors may encounter species such as spotted deer, iguanas, and a range of birdlife, particularly around the reservoir and forest edges.",
        },

        {
          type: "h3",
          text: "Activities",
        },
        {
          type: "p",
          text: "Ellakanda is best explored at a relaxed pace. Nature walks, light hiking, birdwatching, and photography are the main activities, especially around the reservoir where the landscape opens up and offers scenic views.",
        },

        {
          type: "p",
          text: "Since the area is less formalized than major parks, it provides a more authentic and quiet experience, without crowds or structured safari routes.",
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
        text: "Location",
        },
        {
        type: "p",
        text: "Approximately 10 km from Matara town, near the village of Aparekka.",
        },

        {
        type: "h4",
        text: "Activities",
        },
        {
        type: "p",
        text: "Nature walks, bird watching around the reservoir (wewa), hiking, and photography of the tranquil, picturesque scenery.",
        },

        {
        type: "h4",
        text: "Entry & Tickets",
        },
        {
        type: "p",
        text: "As a Forest Reserve and reservoir area (rather than a major National Park like Yala), there is typically no formal tourist ticket counter or official entry fee, though this can vary. The area is generally very accessible.",
        },

        {
        type: "h4",
        text: "Operating Hours",
        },
        {
        type: "p",
        text: "The natural area is generally accessible during daylight hours. Visiting early in the morning is recommended for cooler temperatures, better light, and a more peaceful atmosphere.",
        },

        {
        type: "h4",
        text: "Facilities",
        },
        {
        type: "p",
        text: "Facilities are basic and limited. It is advisable to bring your own water and snacks, as nearby Matara or local villages provide more comprehensive services.",
        },

        {
        type: "h4",
        text: "Getting There (Matara Location)",
        },
        {
        type: "p",
        text: "The site is not located on a major highway, so a short-distance transfer is required from Matara.",
        },

        {
        type: "h5",
        text: "From Matara",
        },
        {
        type: "p",
        text: "The easiest way to reach the reservoir area is by tuk-tuk or taxi. The journey from Matara Bus Station takes approximately 20–30 minutes. Showing the driver the location <strong>Ellakanda Wewa, Aparekka</strong> will help ensure accurate navigation.",
        },
    ],
    },
    {
    type: "text",
    id: "tips",
    kicker: "Tips",
    title: "Local Tips for Visitors",
    align: "left",
    content: [
        {
        type: "h4",
        text: "Pack a Picnic",
        },
        {
        type: "p",
        text: "The beautiful, serene setting, especially by the reservoir, is perfect for a picnic.",
        },

        {
        type: "h4",
        text: "Wear Appropriate Footwear",
        },
        {
        type: "p",
        text: "Comfortable shoes are essential for walking along the trails and around the reservoir.",
        },

        {
        type: "h4",
        text: "Responsible Tourism",
        },
        {
        type: "p",
        text: "Since it's a less-trafficked, environmentally sensitive area, ensure you carry out all trash and respect the local flora and fauna.",
        },
    ],
    }
  ],
};

export default EllakandaArticle;