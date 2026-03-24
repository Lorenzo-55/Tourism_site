// src/Data/DestinationData/Colombo/en/FortAreaArticle.js

const FortAreaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Colombo", to: "/places/colombo" },
    { label: "Fort Area", to: "/places/colombo/fort-area" },
  ],

  hero: {
    kicker: "HISTORIC CORE",
    title: "Colombo Fort Area",
    subtitle:
      "The historic and financial heart of Colombo, where colonial legacy meets modern commerce.",
    backgroundImage: "/images/colombo-fort-hero.jpg",
  },

  overview: {
    kicker: "OVERVIEW",
    title: "The Historical Fort Area (Colombo 01)",
    subtitle:
      "From fortified stronghold to modern financial district.",
    paragraphs: [
      "The Fort area is the Central Business District (CBD) and historic core of Colombo. Its name originates from the fortified settlement first established by the Portuguese in the 16th century, later expanded by the Dutch and eventually dismantled by the British in the 19th century to allow for urban development.",
      "Although the original fortifications no longer exist, the area retains its identity as the center of commerce, finance, and administration in Sri Lanka.",
    ],
  },

  sections: [
    {
      type: "split",
      kicker: "MODERN ROLE",
      title: "Commercial and Administrative Center",
      subtitle:
        "The operational heart of Sri Lanka’s economy and governance.",
      image: "/images/colombo-wtc.jpg",
      imageAlt: "World Trade Center Colombo",
      paragraphs: [
        "Today, Colombo Fort functions as the country’s primary financial hub. It is home to major banking headquarters, including the Central Bank of Sri Lanka, the Bank of Ceylon, and the Colombo Stock Exchange.",
        "The skyline is defined by modern high-rises such as the World Trade Center twin towers, reflecting the city’s role in global trade and finance.",
        "The area also serves as an administrative center, housing key government institutions such as the President’s House and the Presidential Secretariat, located within the historic Old Parliament Building.",
      ],
    },

    {
      type: "cards",
      kicker: "LANDMARKS",
      title: "Key Places to See",
      subtitle:
        "A walk through Fort reveals a blend of colonial architecture and modern structures.",
      items: [
        {
          image: "/images/dutch-hospital.jpg",
          imageAlt: "Old Dutch Hospital Colombo",
          title: "Old Dutch Hospital",
          description:
            "A beautifully restored 17th-century Dutch colonial building, now home to restaurants, cafes, and boutique shops. It is a popular spot for dining and evening visits.",
        },
        {
          image: "/images/old-parliament.jpg",
          imageAlt: "Old Parliament Building Colombo",
          title: "Old Parliament Building",
          description:
            "A grand Neo-Baroque structure from the British era, now housing the Presidential Secretariat. It stands as a major symbol of Sri Lanka’s political history.",
        },
        {
          image: "/images/colombo-clock-tower.jpg",
          imageAlt: "Colombo Lighthouse Clock Tower",
          title: "Lighthouse Clock Tower",
          description:
            "Built in 1857, this historic clock tower once functioned as a lighthouse before being overshadowed by modern buildings.",
        },
        {
          image: "/images/cargills-building.jpg",
          imageAlt: "Cargills Building Colombo",
          title: "Cargills Building",
          description:
            "A striking red-and-white colonial structure on York Street, known for its distinctive British architectural style.",
        },
        {
          image: "/images/galle-face-green.jpg",
          imageAlt: "Galle Face Green Colombo",
          title: "Galle Face Green",
          description:
            "A large seaside urban park bordering the Fort area, popular for sunset views, evening walks, and local street food.",
        },
        {
          image: "/images/sambodhi-chaithya.jpg",
          imageAlt: "Sambodhi Chaithya",
          title: "Sambodhi Chaithya",
          description:
            "A unique modern Buddhist stupa built on elevated concrete arches near the port. Visitors can climb to the top for views of the harbor.",
        },
      ],
    },

    {
      type: "text",
      kicker: "EXPERIENCE",
      title: "Exploring the Fort Area",
      subtitle:
        "Best experienced on foot to appreciate its contrasts.",
      paragraphs: [
        "The Fort area is best explored by walking, allowing you to experience the contrast between historic colonial buildings and modern skyscrapers.",
        "Within a short distance, you can move from quiet heritage sites to busy financial streets, reflecting the layered history and evolving identity of Colombo.",
        "Its proximity to the ocean adds to the experience, with coastal views and open public spaces like Galle Face Green providing a break from the dense urban environment.",
      ],
    },
  ],
};

export default FortAreaArticle;