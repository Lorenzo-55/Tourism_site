const MannarPearlingIndustryArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Mannar", to: "/places/mannar" },
    { label: "Pearling Industry" },
  ],

  hero: {
    kicker: "Maritime Heritage",
    title: "Pearling Industry",
    subtitle:
      "The rise, collapse, and modern revival efforts of Mannar’s once-famous natural pearl industry in the Gulf of Mannar.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Mannar/pearling-industry/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "The Pearl Legacy of Mannar",
    paragraphs: [
      "The pearl industry of Mannar is a story of ancient global fame, colonial-era extraction, environmental decline, and modern scientific attempts to restore the region’s marine heritage.",
      "For more than 2,000 years, the Gulf of Mannar was recognized as one of the world’s most productive sources of natural pearls, earning a reputation that connected the region to ancient trade, empire, and maritime wealth.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "historical-legacy",
      kicker: "Historical Legacy",
      title: "The Pearl of the Orient",
      align: "left",

      content: [
        {
          type: "p",
          text: "For centuries, the Gulf of Mannar was known as one of the richest natural pearl-producing regions in the world.",
        },

        {
          type: "p",
          text: "Its pearls were sought after across ancient trade networks and became part of the region’s identity as a maritime and commercial center.",
        },

        {
          type: "split-paragraph",
          heading: "Ancient Fame",
          headingLevel: "h3",
          paragraphs: [
            "Mannar’s pearls are mentioned in sources such as the <em>Mahavamsa</em>, the Greek <em>Periplus</em>, and the writings of Marco Polo.",
            "They were highly valued in the Roman world, where Pliny the Elder described pearls as among the most expensive animal products.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Mannar/pearling-industry/gulf-of-mannar.webp`,
          imageAlt: "Coastal landscape of the Gulf of Mannar",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "The Doric Influence",
        },

        {
          type: "p",
          text: "During the British colonial period in the 1800s, the pearl industry became highly organized and industrialized.",
        },

        {
          type: "p",
          text: "The Doric Bungalow at Arippu was built for the first British Governor, Frederick North, specifically to oversee the pearl fisheries.",
        },

        {
          type: "h3",
          text: "The Divers",
        },

        {
          type: "p",
          text: "Historically, the industry depended on skilled freedivers, mainly Arab and Tamil divers, who descended to the oyster beds on a single breath.",
        },

        {
          type: "p",
          text: "Using stone weights, these divers could reach depths of up to 30 meters, making pearl harvesting both dangerous and physically demanding.",
        },
      ],
    },

    {
      type: "text",
      id: "decline",
      kicker: "Decline",
      title: "Collapse of the Natural Pearl Fishery",
      align: "left",

      content: [
        {
          type: "p",
          text: "By the early 1920s, Mannar’s natural pearl industry had effectively collapsed.",
        },

        {
          type: "p",
          text: "The decline was caused by a combination of over-harvesting, environmental changes, and international competition from cultured pearls.",
        },

        {
          type: "split-paragraph",
          heading: "Why the Industry Declined",
          headingLevel: "h3",
          paragraphs: [
            "<strong>Over-harvesting:</strong> Large-scale extraction during the colonial period exhausted the oyster beds, especially those of <em>Pinctada fucata</em>.",
            "<strong>Environmental Changes:</strong> Shifts in sea temperature and currents affected oyster breeding patterns.",
            "<strong>Japanese Cultured Pearls:</strong> The rise of affordable cultured pearls developed by Kokichi Mikimoto in Japan made the risky natural pearl hunt in Mannar commercially unviable.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Mannar/pearling-industry/pearl-oysters.webp`,
          imageAlt: "Pearl oysters connected to Mannar pearl history",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "current-status",
      kicker: "Current Status",
      title: "Modern Pearl Culture and Research",
      align: "left",

      content: [
        {
          type: "p",
          text: "Today, the natural pearl fishery is essentially extinct as a commercial industry in Mannar.",
        },

        {
          type: "p",
          text: "Natural pearls are now rare, and most pearls sold in Sri Lanka are imported from countries such as Japan or Australia.",
        },

        {
          type: "h3",
          text: "Revival Efforts",
        },

        {
          type: "p",
          text: "<strong>NARA Initiatives:</strong> The National Aquatic Resources Research and Development Agency has launched projects to reintroduce pearl culture using modern techniques such as ropes and spat attachment in areas including Silavathura and Kiranchi.",
        },

        {
          type: "p",
          text: "<strong>Archaeology:</strong> Excavations of shell middens, or ancient heaps of oyster shells, are helping researchers understand historical exploitation levels and ecological conditions.",
        },

        {
          type: "p",
          text: "<strong>Environmental Concerns:</strong> Coral bleaching and coastal erosion remain major challenges for any revival of oyster populations.",
        },

        {
          type: "p",
          text: "<strong>Artificial Reefs:</strong> Artificial reef projects are being used to help stabilize the marine ecosystem and support potential oyster regrowth.",
        },
      ],
    },

    {
      type: "text",
      id: "where-to-see-history",
      kicker: "Places to Visit",
      title: "Where to See the History Today",
      align: "left",

      content: [
        {
          type: "p",
          text: "Visitors to Mannar can still explore several places connected to the history of the pearl industry.",
        },

        {
          type: "h3",
          text: "The Doric Bungalow, Arippu",
        },

        {
          type: "p",
          text: "The ruins of Governor Frederick North’s residence remain one of the strongest symbols of Mannar’s pearl fishery era.",
        },

        {
          type: "p",
          text: "Although heavily eroded by the sea, the Doric Bungalow still reflects the colonial “Pearl Fever” period and the administrative importance of the pearl trade.",
        },

        {
          type: "button",
          label: "View Doric Bungalow on Google Maps",
          href: "https://www.google.com/maps?q=8.781150943675886,79.93439104505",
        },

        {
          type: "h3",
          text: "Silavathura",
        },

        {
          type: "p",
          text: "Silavathura was once a busy center for pearl auctions and coastal activity connected to the fisheries.",
        },

        {
          type: "p",
          text: "Today, it is a quieter fishing village and one of the areas associated with modern pearl culture research.",
        },

        {
          type: "button",
          label: "View Silavathura on Google Maps",
          href: "https://www.google.com/maps?q=8.748074026699657,79.95249825830861",
        },

        {
          type: "h3",
          text: "Kondachchi",
        },

        {
          type: "p",
          text: "Kondachchi was historically connected to some of the richest pearl banks in the region.",
        },

        {
          type: "p",
          text: "It is now part of a scenic coastal drive through Mannar’s pearl history landscape.",
        },

        {
          type: "button",
          label: "View Kondachchi on Google Maps",
          href: "https://www.google.com/maps?q=8.664394981575017,79.94764527041359",
        },
      ],
    },
  ],
};

export default MannarPearlingIndustryArticle;