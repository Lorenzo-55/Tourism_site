const KalpitiyaArticle = {
  breadcrumbItems: [
    { label: "Places", to: "/places" },
    { label: "Kalpitiya", to: "/places/kalpitiya" },
  ],

  hero: {
    kicker: "Northwestern Coast",
    title: "Kalpitiya",
    subtitle:
      "A coastal peninsula where trade, colonial history, fishing life, and modern water-sports tourism come together in one of Sri Lanka’s most distinctive seaside regions.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kalpitiya/hero/kalpitiya-hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Coastal Heritage and Modern Adventure",
    paragraphs: [
      "Kalpitiya, located on the northwestern coast of Sri Lanka, has a rich and strategically important history, and it has recently transformed into a major tourism hub.",
      "Its peninsula setting, maritime past, colonial landmarks, and growing reputation for eco-tourism and water sports make Kalpitiya one of the most distinctive coastal destinations in the country.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "kalpitiya-history",
      kicker: "History",
      title: "Ancient Trade and Colonial Importance",
      align: "left",
      content: [
        {
          type: "p",
          text: "Kalpitiya’s peninsula location, controlling the entrance to the Puttalam Lagoon, made it a key maritime and trading center for centuries. Its geography gave it strategic importance far beyond its size, especially for powers seeking control over trade routes and coastal access.",
        },
        {
          type: "p",
          text: "In ancient times, the area was known to Arab merchants, who referred to it as Kav Putti. It was an important point along maritime trade routes and formed part of the wider commercial networks that linked Sri Lanka to the Indian Ocean world.",
        },
        {
          type: "split-paragraph",
          heading: "Portuguese and Dutch Rule",
          headingLevel: "h4",
          paragraphs: [
            "The Portuguese invaded the area in 1544 and named it Kardiv Island. During their period of control, they established a small garrison and built a Jesuit church known as Our Lady of the Assumption, leaving an early European religious and military imprint on the peninsula.",
            "In the 17th century, King Rajasinghe II of Kandy sought Dutch help to remove the Portuguese. The Dutch captured the area in 1659 but did not return it to the Kandyan Kingdom. They then built the Kalpitiya Dutch Fort between 1667 and 1676, using it to control the external trade of the Kandyan Kingdom and enforce their cinnamon monopoly, since the surrounding Puttalam region was an important cinnamon-growing area.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Kalpitiya/history/dutch-fort.webp`,
          imageAlt: "Kalpitiya Dutch Fort",
          mediaPosition: "right",
        },
        {
          type: "p",
          text: "The British took over the fort in 1795 and continued to use it for military purposes until 1859. In the more recent past, the fort was neglected for many years before becoming a base for the Sri Lankan Navy, which still maintains it today.",
        },
        {
          type: "p",
          text: "This long sequence of trade, conquest, and colonial control left Kalpitiya with a layered historical identity. Even now, its surviving churches, fort, and settlement patterns reflect the importance it once held in regional politics and commerce.",
        },
      ],
    },

    {
      type: "text",
      id: "kalpitiya-nowadays",
      kicker: "Present Day",
      title: "Kalpitiya Nowadays",
      align: "left",
      content: [
        {
          type: "p",
          text: "Today, Kalpitiya is developing into one of Sri Lanka’s main eco-tourism and adventure travel destinations. Its combination of lagoon, sea, sandbanks, and relatively uncrowded coastal scenery gives it a very different character from the island’s more commercial beach towns.",
        },
        {
          type: "p",
          text: "The area is especially well known for water sports. Kalpitiya is widely regarded as one of the best kitesurfing destinations in Asia thanks to its flat-water lagoon and reliable wind conditions, particularly from May to October and again from mid-December to mid-February.",
        },
        {
          type: "p",
          text: "Other activities such as windsurfing, kayaking, paddleboarding, and boat-based excursions have also become increasingly popular. This has helped turn the peninsula into a destination that attracts both adventure travelers and visitors looking for quieter, nature-based coastal experiences.",
        },
        {
          type: "split-paragraph",
          heading: "Economy and Local Life",
          headingLevel: "h4",
          paragraphs: [
            "Despite the rapid growth of tourism, the local economy is still strongly rooted in traditional livelihoods such as fishing and agriculture, especially coconut and chili cultivation. These activities continue to shape everyday life across the peninsula and connect Kalpitiya to the wider economy of the Puttalam region.",
            "Tourism, however, is becoming increasingly important. Many local residents now operate guesthouses, organize boat tours, or work in businesses linked to water sports and hospitality. This has created a changing but still recognizably local coastal economy, where traditional life and new visitor-oriented services exist side by side.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Kalpitiya/main/fishing-life.webp`,
          imageAlt: "Fishing and coastal life in Kalpitiya",
          mediaPosition: "left",
        },
        {
          type: "p",
          text: "Kalpitiya therefore offers a distinctive combination of colonial heritage, working fishing communities, and modern adventure tourism. That mix is part of what makes the area feel both authentic and increasingly important as a destination.",
        },
      ],
    },

    {
      type: "text",
      id: "beaches-and-coast",
      kicker: "Coastline",
      title: "Beaches and Coastal Atmosphere",
      align: "left",
      paragraphs: [
        "Because Kalpitiya is a peninsula bordered by both the ocean and a lagoon, it offers an unusual variety of beaches and waterfront settings. Many of these beaches are known for their open space, relative quiet, and less crowded atmosphere compared with other major beach areas in Sri Lanka.",
        "In general, Kalpitiya’s beaches are defined by golden sand, palm-fringed shorelines, and a calm natural character. This makes the area attractive not only for adventure sports such as kitesurfing and diving, but also for travelers seeking a more peaceful coastal escape.",
        "The combination of sea, lagoon, dunes, and changing light across the peninsula gives the landscape a strong visual identity. It is one of the reasons Kalpitiya has become increasingly valued for both recreation and nature-based tourism.",
      ],
    },

    {
      type: "text",
      id: "historical-and-cultural-sites",
      kicker: "Landmarks",
      title: "Historical and Cultural Sites",
      align: "left",
      paragraphs: [
        "Kalpitiya’s past is still visible in several important landmarks across the region. The Dutch Fort remains the most prominent historical structure, although its current use as a naval base can limit full public access.",
        "Religious heritage also plays an important role in the area’s identity. The Dutch Church stands as a reminder of the colonial period, while St. Anne’s Church in Thalawila is one of the most important Catholic pilgrimage sites in Sri Lanka and continues to attract large numbers of devotees.",
        "Together, these places reflect the peninsula’s long connection to trade, empire, religion, and coastal community life. They add cultural depth to a destination that is often first known for its beaches and water sports.",
      ],
    },

    {
      type: "cards",
      kicker: "Explore",
      title: "Points of Interest",
      align: "center",
      items: [
        {
          title: "History",
          description:
            "Explore the deeper historical background of Kalpitiya as a coastal trade point and colonial stronghold.",
          image: `${import.meta.env.BASE_URL}Destinations/Kalpitiya/poi/history.webp`,
          imageAlt: "History of Kalpitiya",
          to: "/places/kalpitiya/history",
        },
        {
          title: "Historical / Cultural Sites",
          description:
            "Visit forts, churches, and religious landmarks that reflect the peninsula’s layered colonial and spiritual heritage.",
          image: `${import.meta.env.BASE_URL}Destinations/Kalpitiya/poi/historical-cultural-sites.webp`,
          imageAlt: "Historical and cultural sites in Kalpitiya",
          to: "/places/kalpitiya/historical-cultural-sites",
        },
        {
          title: "Marine & Wildlife",
          description:
            "Discover the lagoon, coastal ecosystems, and wildlife-rich environments that shape Kalpitiya’s eco-tourism appeal.",
          image: `${import.meta.env.BASE_URL}Destinations/Kalpitiya/poi/marine-wildlife.webp`,
          imageAlt: "Marine and wildlife in Kalpitiya",
          to: "/places/kalpitiya/marine-and-wildlife",
        },
        {
          title: "Diving & Reef",
          description:
            "Experience underwater landscapes, reef areas, and marine life in one of Sri Lanka’s emerging coastal activity zones.",
          image: `${import.meta.env.BASE_URL}Destinations/Kalpitiya/poi/diving-reef.webp`,
          imageAlt: "Diving and reef areas in Kalpitiya",
          to: "/places/kalpitiya/diving-and-reef",
        },
        {
          title: "Water Sports",
          description:
            "Kalpitiya is especially known for kitesurfing, with strong seasonal winds and lagoon conditions ideal for action on the water.",
          image: `${import.meta.env.BASE_URL}Destinations/Kalpitiya/poi/water-sports.webp`,
          imageAlt: "Water sports in Kalpitiya",
          to: "/places/kalpitiya/water-sports",
        },
      ],
    },
  ],
};

export default KalpitiyaArticle;