const HattonArticle = {
  breadcrumbItems: [
    { label: "Places", to: "/places" },
    { label: "Hatton", to: "/places/hatton" },
  ],

  hero: {
    kicker: "Hill Country",
    title: "Hatton",
    subtitle:
      "A highland town surrounded by tea-covered hills, scenic landscapes, and important routes to some of Sri Lanka’s most famous mountain attractions.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Hatton/hero/hatton-hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Tea Country, Tourism, and Mountain Gateways",
    paragraphs: [
      "Hatton is a town in the Nuwara Eliya District of Sri Lanka, renowned for its stunning scenery, tea estates, and as a major transit point for pilgrims to Adam's Peak.",
      "Today, Hatton is known for the strong link between its plantation economy and its growing tourism sector, making it both a working town and an important base for travelers exploring the central highlands.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "hatton-economy",
      kicker: "Economy",
      title: "Tea Industry and Tourism",
      align: "left",
      content: [
        {
          type: "p",
          text: "The economy of Hatton is heavily dependent on the tea industry and tourism. These two sectors shape the town’s identity, daily life, and importance within Sri Lanka’s hill country.",
        },
        {
          type: "p",
          text: "Hatton is often considered the heart of Ceylon’s tea region. The surrounding hills are covered with tea plantations, and much of the local economy revolves around the cultivation, manufacture, and export of world-famous Ceylon tea.",
        },
        {
          type: "p",
          text: "Many residents work directly in the tea sector, whether as tea pickers on the estates, factory workers, transport workers, or in businesses connected to the plantation trade. This gives Hatton a strong agricultural and industrial character despite its scenic surroundings.",
        },
        {
          type: "split-paragraph",
          heading: "Tourism and Location",
          headingLevel: "h4",
          paragraphs: [
            "Hatton also plays an important role in tourism because of its location near major attractions such as Adam’s Peak, reservoirs, waterfalls, and the wider tea country landscape. For many travelers, it functions as a practical and scenic stopping point before continuing deeper into the highlands.",
            "This supports a growing network of hotels, guesthouses, restaurants, transport services, and small tourism-related businesses. The mix of working tea estates and natural beauty gives Hatton a distinct atmosphere that feels both active and deeply connected to the landscape.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Hatton/main/tourism.webp`,
          imageAlt: "Scenery and tourism in Hatton",
          mediaPosition: "right",
        },
        {
          type: "p",
          text: "Because of this combination of tea production and visitor traffic, Hatton serves as more than just a plantation town. It is an important regional center where commerce, transport, and tourism all meet.",
        },
      ],
    },

    {
      type: "cards",
      kicker: "Explore",
      title: "Points of Interest",
      align: "center",
      items: [
        {
          title: "Climb Adam's Peak (Sri Pada)",
          description:
            "Hatton is one of the main gateway towns for travelers heading to the sacred mountain and its famous pilgrimage route.",
          image: `${import.meta.env.BASE_URL}Destinations/Hatton/poi/adams-peak.webp`,
          imageAlt: "Adam's Peak near Hatton",
          to: "/places/hatton/adams-peak",
        },
        {
          title: "Visit Christ Church Warleigh",
          description:
            "A historic church in the tea country, known for its colonial character and peaceful setting.",
          image: `${import.meta.env.BASE_URL}Destinations/Hatton/poi/christ-church-warleigh.webp`,
          imageAlt: "Christ Church Warleigh",
          to: "/places/hatton/christ-church-warleigh",
        },
        {
          title: "Waterfalls",
          description:
            "The wider Hatton region is home to several waterfalls shaped by the highland terrain and heavy rainfall.",
          image: `${import.meta.env.BASE_URL}Destinations/Hatton/poi/waterfalls.webp`,
          imageAlt: "Waterfalls near Hatton",
          to: "/places/hatton/waterfalls",
        },
        {
          title: "Nature & Landscapes",
          description:
            "Rolling hills, misty valleys, reservoirs, and mountain scenery define the visual identity of the Hatton area.",
          image: `${import.meta.env.BASE_URL}Destinations/Hatton/poi/nature-landscapes.webp`,
          imageAlt: "Nature and landscapes in Hatton",
          to: "/places/hatton/nature-landscapes",
        },
        {
          title: "Explore Tea Estates and Factories",
          description:
            "Tea estates and factories offer a closer look at the landscape, labor, and production behind Ceylon tea.",
          image: `${import.meta.env.BASE_URL}Destinations/Hatton/poi/tea-estates.webp`,
          imageAlt: "Tea estates and factories in Hatton",
          to: "/places/hatton/tea-estates-and-factories",
        },
      ],
    },
  ],
};

export default HattonArticle;