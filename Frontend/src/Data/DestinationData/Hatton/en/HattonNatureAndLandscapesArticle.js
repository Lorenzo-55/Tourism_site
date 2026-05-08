const HattonNatureAndLandscapesArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Hatton", to: "/places/hatton" },
    { label: "Nature and Landscapes" },
  ],

  hero: {
    kicker: "Nature & Landscapes",
    title: "Nature and Landscapes Around Hatton",
    subtitle:
      "Reservoirs, misty mountains, tea-covered hills, and peaceful highland scenery in Sri Lanka’s central tea country.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Hatton/nature/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Reservoirs and Highland Landscapes",
    paragraphs: [
      "The Hatton region is known for its dramatic mountain scenery, cool climate, and vast tea plantations spread across Sri Lanka’s central highlands.",
      "Among its most scenic features are the Castlereagh and Maskeliya reservoirs, both of which play important roles in the country’s hydroelectric system while also serving as major scenic attractions surrounded by tea estates and mountain ranges.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "castlereagh-reservoir",
      kicker: "Highland Reservoir",
      title: "Castlereagh Reservoir",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Castlereagh Reservoir is one of Sri Lanka’s most picturesque reservoirs, located near Hatton in the heart of the island’s tea country.",
        },

        {
          type: "p",
          text: "The reservoir was created by the Castlereagh Dam, a gravity dam built across the Kehelgamu Oya, one of the major tributaries of the Kelani River.",
        },

        {
          type: "h3",
          text: "Hydroelectric Importance",
        },

        {
          type: "p",
          text: "Its primary purpose is hydroelectric power generation as part of the Laxapana Hydropower Complex.",
        },

        {
          type: "p",
          text: "Water from the reservoir is diverted to the Wimalasurendra Power Station near Norton Bridge, which contributes significantly to Sri Lanka’s national power grid.",
        },

        {
          type: "split-paragraph",
          heading: "Scenic Landscape",
          headingLevel: "h3",

          paragraphs: [
            "The reservoir sits within a narrow mountain valley surrounded by rolling hills covered in lush tea plantations.",
            "Its calm waters often reflect the surrounding landscape, creating mirror-like views with shades of emerald and aquamarine depending on the weather and light.",
            "Mist frequently drifts across the hills in the mornings and evenings, adding to the atmosphere of the highlands.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hatton/nature/castlereagh-reservoir.webp`,
          imageAlt: "Castlereagh Reservoir surrounded by tea plantations",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Tourism and Activities",
        },

        {
          type: "p",
          text: "<strong>Luxury Retreats:</strong> Several colonial-era tea bungalows and luxury resorts overlook the reservoir, including properties associated with the Tea Trails region.",
        },

        {
          type: "p",
          text: "<strong>Boating and Canoeing:</strong> Visitors can explore the tranquil waters by boat or canoe.",
        },

        {
          type: "p",
          text: "<strong>Picnicking:</strong> Scenic viewpoints and lakeside areas make the reservoir popular for relaxing stops and photography.",
        },

        {
          type: "p",
          text: "<strong>Seaplane Service:</strong> The Castlereagh Water Airport allows scenic flights and rapid travel connections from Colombo.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=VH8F%2BP9%2C%20Hatton%2C%20Sri%20Lanka",
        },
      ],
    },

    {
      type: "text",
      id: "maskeliya-reservoir",
      kicker: "Mountain Reservoir",
      title: "Maskeliya Reservoir (Maussakelle Reservoir)",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Maskeliya Reservoir, also widely known as the Maussakelle Reservoir, is another major reservoir located within Sri Lanka’s central highlands.",
        },

        {
          type: "p",
          text: "Surrounded by mountains and tea estates, it is both a critical hydroelectric reservoir and one of the most scenic landscapes in the Hatton region.",
        },

        {
          type: "h3",
          text: "Hydroelectric Function",
        },

        {
          type: "p",
          text: "The reservoir was formed by the construction of the Maskeliya Dam across the Maskeliya Oya, another important tributary of the Kelani River.",
        },

        {
          type: "p",
          text: "Like Castlereagh Reservoir, it forms part of the Laxapana Hydropower Complex and supplies water to the Canyon Hydroelectric Power Station.",
        },

        {
          type: "split-paragraph",
          heading: "The Sunken Town of Old Maskeliya",
          headingLevel: "h3",

          paragraphs: [
            "One of the reservoir’s most unusual features is the occasional reappearance of the submerged Old Maskeliya town during severe droughts.",
            "The original town was intentionally flooded in 1968 during the construction of the hydroelectric scheme.",
            "When water levels become extremely low, remnants of the old settlement emerge from the reservoir, including a colonial-era bridge, building foundations, and religious sites such as a kovil, mosque, and Buddhist shrine.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hatton/nature/maskeliya-reservoir.webp`,
          imageAlt: "Maskeliya Reservoir in Sri Lanka highlands",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Landscape and Activities",
        },

        {
          type: "p",
          text: "<strong>Photography:</strong> The still waters and misty hills make the reservoir a popular photography location.",
        },

        {
          type: "p",
          text: "<strong>Boating and Canoeing:</strong> The calm environment is ideal for quiet water activities.",
        },

        {
          type: "p",
          text: "<strong>Nature Walks:</strong> Tea estate roads and mountain paths around the reservoir are popular for walking and hiking.",
        },

        {
          type: "p",
          text: "<strong>Mountain Views:</strong> The reservoir is surrounded by the dramatic Seven Virgins Mountain Range and rolling tea plantations.",
        },

        {
          type: "p",
          text: "Together, the reservoirs and surrounding landscapes create some of the most peaceful and visually striking scenery in Sri Lanka’s hill country.",
        },
      ],
    },
  ],
};

export default HattonNatureAndLandscapesArticle;