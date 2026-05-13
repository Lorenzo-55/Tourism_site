const MirissaStiltFishermenArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Mirissa", to: "/places/mirissa" },
    { label: "Stilt Fishermen" },
  ],

  hero: {
    kicker: "Coastal Tradition",
    title: "Stilt Fishermen",
    subtitle:
      "One of Sri Lanka’s most iconic coastal images, seen along the southern shoreline between Mirissa, Weligama, Ahangama, and Koggala.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Mirissa/stilt-fishermen/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Famous Southern Coast Tradition",
    paragraphs: [
      "Stilt fishermen, known as <em>Ritipanna</em> in Sinhala, are among the most recognizable cultural images of Sri Lanka’s southern coast.",
      "Although the practice was once a genuine fishing method, many stilt fishermen seen today are primarily set up for tourist photography, especially along the coast between Mirissa and Koggala.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "location",
      kicker: "Location",
      title: "Where to See Stilt Fishermen",
      align: "left",

      content: [
        {
          type: "p",
          text: "The most famous and accessible places to see stilt fishermen are along the coastline around Koggala, Ahangama, Weligama, Kathaluwa, and the coastal stretch between Mirissa and Koggala.",
        },
        {
          type: "p",
          text: "The stilts are often visible directly from the main Matara Road where the road runs close to the sea.",
        },
        {
          type: "split-paragraph",
          heading: "Best Viewing Spots",
          headingLevel: "h3",
          paragraphs: [
            "Near Koggala, the area around the Stick Fisherman View Restaurant is a known viewing point.",
            "The stretch between Ahangama and Koggala is especially associated with the classic stilt fishing scene and is often visited by photographers.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Mirissa/stilt-fishermen/coastline.webp`,
          imageAlt: "Stilt fishermen along Sri Lanka's southern coast",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "tradition-and-authenticity",
      kicker: "Tradition",
      title: "The Technique and Modern Reality",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Origin",
        },
        {
          type: "p",
          text: "The practice is relatively modern and is believed to have developed after World War II, when food shortages and crowded fishing spots pushed local fishermen to find new ways to fish in shallow coastal waters.",
        },
        {
          type: "h3",
          text: "The Technique",
        },
        {
          type: "p",
          text: "A fisherman sits on a small crossbar called a <em>petta</em>, attached to a vertical pole fixed into the sandy seabed a few meters offshore.",
        },
        {
          type: "p",
          text: "From this raised position, he uses a simple rod and line to catch small fish such as spotted herrings and mackerels. The height helps prevent his shadow from scaring the fish.",
        },
        {
          type: "split-paragraph",
          heading: "Current Reality",
          headingLevel: "h3",
          paragraphs: [
            "Although stilt fishing was once a real livelihood for coastal fishermen, the 2004 tsunami damaged coral reefs and reduced fish availability in many areas.",
            "Today, the practice is often maintained as a cultural performance for visitors. Many fishermen pose for photographs and earn income from tourism, especially during the best light hours.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Mirissa/stilt-fishermen/ritipanna.webp`,
          imageAlt: "Traditional Ritipanna stilt fishing method",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "best-time",
      kicker: "Timing",
      title: "Best Time to Visit",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Sunrise:</strong> Around 6:00 AM – 7:30 AM is one of the best times for the classic silhouette view.",
        },
        {
          type: "p",
          text: "<strong>Sunset:</strong> Around 4:30 PM – 6:30 PM offers warm light and the famous travel-photography silhouette effect.",
        },
        {
          type: "p",
          text: "<strong>Traditional Fishing Times:</strong> Historically, fishermen worked early in the morning until around 9:00 AM and again in the late afternoon.",
        },
        {
          type: "p",
          text: "<strong>Peak Season:</strong> You are most likely to see them during the non-monsoon months, although tourist-oriented setups may appear year-round.",
        },
      ],
    },

    {
      type: "text",
      id: "photos-and-fees",
      kicker: "Visitor Tips",
      title: "Taking Photos and Fees",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Be Prepared to Pay:</strong> If you stop to take photos, especially of fishermen actively posing near the road, they will usually expect a small payment.",
        },
        {
          type: "p",
          text: "<strong>Typical Fee:</strong> Expect around LKR 500–1,000 per camera or person for a simple photo from the road, depending on the location and how close you get.",
        },
        {
          type: "p",
          text: "<strong>Experience Fee:</strong> If you want to climb onto a stilt yourself or take close-up photos with the fishermen, the fee will usually be higher.",
        },
        {
          type: "p",
          text: "<strong>Agree First:</strong> Always agree on the price before taking photos to avoid confusion or negotiation issues afterward.",
        },
        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=5.9880358230498185,80.32904590546353",
        },
      ],
    },
  ],
};

export default MirissaStiltFishermenArticle;