const MirissaViewpointsAndLandmarksArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Mirissa", to: "/places/mirissa" },
    { label: "Viewpoints & Landmarks" },
  ],

  hero: {
    kicker: "Coastal Landmarks",
    title: "Viewpoints & Landmarks",
    subtitle:
      "Panoramic ocean viewpoints, iconic palm-covered cliffs, rocky beach lookouts, and Sri Lanka’s southernmost lighthouse.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Mirissa/viewpoints-landmarks/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Scenic Coastal Highlights Around Mirissa",
    paragraphs: [
      "Mirissa and the surrounding southern coastline are home to several of Sri Lanka’s most photographed viewpoints and coastal landmarks.",
      "From the palm-covered cliffs of Coconut Tree Hill to Parrot Rock and the historic Dondra Lighthouse, the area combines dramatic ocean scenery with historic maritime landmarks.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "coconut-tree-hill",
      kicker: "Viewpoint",
      title: "Coconut Tree Hill",
      align: "left",

      content: [
        {
          type: "p",
          text: "Coconut Tree Hill is one of the most famous and recognizable viewpoints on Sri Lanka’s southern coast.",
        },

        {
          type: "p",
          text: "The site consists of a small coastal headland covered with a dense grove of coconut palms overlooking the Indian Ocean, creating one of the country’s most photographed landscapes.",
        },

        {
          type: "split-paragraph",
          heading: "How to Get There",
          headingLevel: "h3",

          paragraphs: [
            "<strong>From Mirissa Beach:</strong> Walk east along the main beach past Parrot Rock and continue toward the smaller bay often called Turtle Beach. The walk takes approximately 15–20 minutes.",
            "<strong>From the Main Road:</strong> A side road near Bandaramulla Temple, sometimes marked as Coconut Tree Hill Road, leads to a short dirt path up the hill.",
            "<strong>Trail Conditions:</strong> The final climb takes around 5–10 minutes and can become uneven or muddy after rain, so comfortable footwear is recommended.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Mirissa/viewpoints-landmarks/coconut-tree-hill.webp`,
          imageAlt: "Coconut Tree Hill in Mirissa",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Best Time to Visit",
        },

        {
          type: "p",
          text: "<strong>Sunrise:</strong> Before 6:00 AM is ideal for solitude, soft lighting, and fewer crowds.",
        },

        {
          type: "p",
          text: "<strong>Golden Hour:</strong> Around 5:00 PM offers beautiful lighting, though the area becomes crowded approaching sunset.",
        },

        {
          type: "p",
          text: "<strong>Sunset:</strong> Approximately 5:45 PM – 6:30 PM is popular for ocean sunset views, but crowds are usually at their highest.",
        },

        {
          type: "p",
          text: "<strong>Midday Heat:</strong> It is generally best to avoid visiting between 10:00 AM and 2:00 PM because of strong sun exposure.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=5.93941136144864,80.46822053763883",
        },
      ],
    },

    {
      type: "text",
      id: "parrot-rock",
      kicker: "Beach Viewpoint",
      title: "Parrot Rock",
      align: "left",

      content: [
        {
          type: "p",
          text: "Parrot Rock is a large rock formation located just off Mirissa Beach and is one of the area’s best coastal viewpoints.",
        },

        {
          type: "p",
          text: "Visitors can cross through shallow water at low tide and climb the rock for panoramic views across Mirissa Beach and the surrounding coastline.",
        },

        {
          type: "h3",
          text: "Checking the Tide",
        },

        {
          type: "p",
          text: "<strong>Low Tide:</strong> Essential for a safe crossing. At low tide, the water usually reaches only ankle or knee height.",
        },

        {
          type: "p",
          text: "<strong>High Tide:</strong> Can become dangerous with deeper water and strong waves. Visitors are strongly advised to check local tide times before attempting the crossing.",
        },

        {
          type: "split-paragraph",
          heading: "Crossing and Climbing",
          headingLevel: "h3",

          paragraphs: [
            "The crossing begins from the left side of Mirissa Beach when facing the ocean. Visitors must wade through shallow water to reach the base of the rock.",
            "After crossing, a small staircase leads to the flat summit. The rocks and steps can be slippery, especially after waves or rain.",
            "Footwear with grip, such as strapped sandals or reef shoes, is highly recommended.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Mirissa/viewpoints-landmarks/parrot-rock.webp`,
          imageAlt: "Parrot Rock in Mirissa",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Photography Tips",
        },

        {
          type: "p",
          text: "<strong>Sunrise:</strong> Around 5:30 AM offers peaceful conditions and soft lighting with fewer visitors.",
        },

        {
          type: "p",
          text: "<strong>Sunset:</strong> Late afternoon around 5:00 PM is ideal for golden-hour photography but is also the busiest time.",
        },

        {
          type: "p",
          text: "<strong>Electronics:</strong> Waterproof bags are recommended because waves and splashing water are common during the crossing.",
        },

        {
          type: "p",
          text: "Parrot Rock is also one of the best places to photograph Coconut Tree Hill further along the coastline.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=5.941603804476807,80.46223776619527",
        },
      ],
    },

    {
      type: "text",
      id: "dondra-lighthouse",
      kicker: "Historic Landmark",
      title: "Dondra Lighthouse",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Dondra Head Lighthouse is one of Sri Lanka’s most important maritime landmarks and stands at the southernmost tip of the island at Dondra Head, also known as Devundara.",
        },

        {
          type: "p",
          text: "It remains an active working lighthouse operated by the Sri Lanka Ports Authority.",
        },

        {
          type: "h3",
          text: "Historical Background",
        },

        {
          type: "p",
          text: "<strong>Construction:</strong> Commissioned in 1890 during the British colonial period and designed by Sir James Nicholas Douglass.",
        },

        {
          type: "p",
          text: "<strong>Imported Materials:</strong> Granite and steel used in the construction were brought from England and Scotland.",
        },

        {
          type: "p",
          text: "<strong>Height:</strong> At 49 meters (161 feet), it is the tallest lighthouse in Sri Lanka.",
        },

        {
          type: "split-paragraph",
          heading: "Visiting the Lighthouse",
          headingLevel: "h3",

          paragraphs: [
            "The lighthouse grounds are generally open to visitors, and climbing the tower is often possible depending on staff approval and operational conditions.",
            "Visitors who climb the 196 steps are rewarded with panoramic views across the coastline and the Indian Ocean. On clear days, distant inland mountain ranges may also be visible.",
            "A small payment to the lighthouse keeper is often expected for tower access.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Mirissa/viewpoints-landmarks/dondra-lighthouse.webp`,
          imageAlt: "Dondra Head Lighthouse",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Visitor Information",
        },

        {
          type: "p",
          text: "<strong>Location:</strong> Around 6 km southeast of Matara in Sri Lanka’s Southern Province.",
        },

        {
          type: "p",
          text: "<strong>Opening Hours:</strong> Often cited as approximately 9:00 AM – 6:00 PM daily.",
        },

        {
          type: "p",
          text: "<strong>Best Time:</strong> Morning or late afternoon is recommended to avoid the midday heat.",
        },

        {
          type: "p",
          text: "<strong>Getting There:</strong> Easily reached by tuk-tuk from Matara in around 15–20 minutes.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=5.9213956395503065,80.59414718153768",
        },
      ],
    },
  ],
};

export default MirissaViewpointsAndLandmarksArticle;