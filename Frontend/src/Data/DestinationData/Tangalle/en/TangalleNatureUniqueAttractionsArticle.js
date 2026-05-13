const TangalleNatureUniqueAttractionsArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Tangalle", to: "/places/tangalle" },
    { label: "Nature & Unique Attractions" },
  ],

  hero: {
    kicker: "Nature & Unique Attractions",
    title: "Nature & Unique Attractions",
    subtitle:
      "Coastal islands, natural rock formations, underwater attractions, and rare geological wonders around Tangalle.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Tangalle/nature-unique-attractions/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Unusual Coastal Landscapes Near Tangalle",
    paragraphs: [
      "Tangalle and the surrounding southern coast are known not only for beaches, but also for distinctive natural attractions shaped by waves, rocks, reefs, and coastal geography.",
      "Blue Beach Island and the Hummanaya Blowhole are two of the area’s most memorable sites, offering a mix of scenery, adventure, marine activity, and geological interest.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "blue-beach-island",
      kicker: "Coastal Island",
      title: "Blue Beach Island",
      align: "left",

      content: [
        {
          type: "p",
          text: "Blue Beach Island is a picturesque coastal destination near Nilwella and Dickwella, close to Tangalle on Sri Lanka’s southern coast.",
        },

        {
          type: "p",
          text: "It is known for clear blue water, quiet surroundings, rocky viewpoints, and one of the more unusual coastal formations in the region.",
        },

        {
          type: "split-paragraph",
          heading: "The Tombolo Sand Connection",
          headingLevel: "h3",

          paragraphs: [
            "The island is connected to the mainland by a narrow strip of sand known as a tombolo.",
            "This natural sand connection is relatively rare in Sri Lanka and makes the island especially distinctive.",
            "The strip can sometimes be submerged during high tide or certain sea conditions, so visitors should check local conditions before crossing.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/nature-unique-attractions/blue-beach-island.webp`,
          imageAlt: "Blue Beach Island near Tangalle",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Views and Atmosphere",
        },

        {
          type: "p",
          text: "The island is especially known for sunrise and sunset views from its rocky high points.",
        },

        {
          type: "p",
          text: "Although it has become more popular, the area still offers a peaceful and scenic escape compared with busier beach destinations.",
        },

        {
          type: "h3",
          text: "Activities",
        },

        {
          type: "p",
          text: "<strong>Beach Camping:</strong> Blue Beach Island is a well-known camping location, often requiring advance booking and permission because parts of the area are privately managed.",
        },

        {
          type: "p",
          text: "<strong>Snorkeling and Swimming:</strong> The clear water and rock formations make the area suitable for swimming and snorkeling during calm conditions.",
        },

        {
          type: "p",
          text: "<strong>Nilwella Underwater Gallery:</strong> Located just offshore, this artificial reef and underwater museum was created by the Sri Lanka Navy and has made the area popular for snorkeling and diving.",
        },

        {
          type: "p",
          text: "<strong>Kayaking:</strong> Calm waters around the area are also suitable for kayaking when conditions are safe.",
        },

        {
          type: "p",
          text: "<strong>Relaxation:</strong> Many visitors come simply to enjoy the sand, ocean views, and quiet coastal atmosphere.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=5.960827439773425,80.72023602386662",
        },
      ],
    },

    {
      type: "text",
      id: "hummanaya-blowhole",
      kicker: "Natural Phenomenon",
      title: "Hummanaya Blowhole",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Hummanaya Blowhole is a dramatic natural attraction located near Kudawella, close to Dikwella and Tangalle.",
        },

        {
          type: "p",
          text: "It is known as the only recognized blowhole in Sri Lanka and is often described as one of the largest blowholes in the world.",
        },

        {
          type: "split-paragraph",
          heading: "How the Blowhole Works",
          headingLevel: "h3",

          paragraphs: [
            "A blowhole forms when a sea cave extends upward into a vertical shaft and opens through the surface of the rock.",
            "When strong waves crash into the cave below, water and compressed air are forced upward through the opening.",
            "At Hummanaya, the resulting seawater jet can rise around 25 to 30 meters during powerful sea conditions.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/nature-unique-attractions/hummanaya-blowhole.webp`,
          imageAlt: "Hummanaya Blowhole near Tangalle",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "The Sound and Experience",
        },

        {
          type: "p",
          text: "The name Hummanaya comes from the deep humming or ‘hoo’ sound heard before the water erupts.",
        },

        {
          type: "p",
          text: "The spout does not happen continuously, so visitors often need to wait several minutes between eruptions.",
        },

        {
          type: "p",
          text: "The height and force of the water depend heavily on tide, wave strength, and sea conditions.",
        },

        {
          type: "h3",
          text: "Best Time to Visit",
        },

        {
          type: "p",
          text: "<strong>High Tide:</strong> The blowhole is usually more powerful when the tide is high.",
        },

        {
          type: "p",
          text: "<strong>Rough Sea Season:</strong> April to September, especially during the southwest monsoon period, often produces stronger eruptions.",
        },

        {
          type: "p",
          text: "<strong>Time of Day:</strong> Early morning or late afternoon is better for avoiding the strongest midday heat.",
        },

        {
          type: "h3",
          text: "Visitor Information",
        },

        {
          type: "p",
          text: "<strong>Location:</strong> Kudawella village, near Dikwella and Tangalle in the Southern Province.",
        },

        {
          type: "p",
          text: "<strong>Access:</strong> Visitors turn off from the A2 main road at Kudawella, then walk about 1 km through the village and climb a short set of steps to the viewing area.",
        },

        {
          type: "p",
          text: "<strong>Facilities:</strong> A small entrance fee is usually charged, and local vendors often sell refreshments and snacks along the path.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=5.977733721999069,80.73867060852409",
        },
      ],
    },
  ],
};

export default TangalleNatureUniqueAttractionsArticle;