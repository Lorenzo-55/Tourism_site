const WeligamaExcursionsArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Weligama", to: "/places/weligama" },
    { label: "Excursions" },
  ],

  hero: {
    kicker: "Day Trips & Excursions",
    title: "Excursions",
    subtitle:
      "Boat trips, mangrove lagoons, cinnamon islands, coastal viewpoints, and scenic day trips from Weligama.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Weligama/excursions/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Easy Trips from Weligama",
    paragraphs: [
      "Weligama is well placed for short excursions along Sri Lanka’s southern coast, with peaceful lagoons, cultural island visits, and famous coastal viewpoints nearby.",
      "Koggala Lake offers a calm nature-focused boat trip through mangroves and small islands, while Coconut Tree Hill in nearby Mirissa is one of the south coast’s most iconic photography spots.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "koggala-lake-boat-trip",
      kicker: "Lagoon Boat Safari",
      title: "Koggala Lake Boat Trip",
      align: "left",

      content: [
        {
          type: "p",
          text: "A boat trip on Koggala Lake, also known as Koggala Lagoon, is a peaceful excursion through one of the southern coast’s most scenic freshwater lagoons.",
        },

        {
          type: "p",
          text: "The experience offers a quieter contrast to the nearby beaches, combining mangrove scenery, birdlife, small islands, and local cultural stops.",
        },

        {
          type: "split-paragraph",
          heading: "The Boat Safari Experience",
          headingLevel: "h3",

          paragraphs: [
            "The typical boat safari lasts around 2 to 3 hours.",
            "The route crosses calm lagoon waters bordered by lush mangrove forests and dotted with small islands.",
            "Wildlife sightings may include herons, eagles, hawks, water monitors, monkeys, and occasionally crocodiles.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Weligama/excursions/koggala-lake.webp`,
          imageAlt: "Boat trip on Koggala Lake",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Island Stops",
        },

        {
          type: "p",
          text: "<strong>Cinnamon Island:</strong> Visitors can learn about traditional Ceylon Cinnamon cultivation and peeling methods at a small local farm.",
        },

        {
          type: "p",
          text: "<strong>Temple Island:</strong> A small island with a Buddhist shrine and a peaceful religious atmosphere.",
        },

        {
          type: "p",
          text: "<strong>Bird Island:</strong> Mangrove-covered islets that act as a sanctuary for many bird species.",
        },

        {
          type: "h3",
          text: "Cost and Best Time",
        },

        {
          type: "p",
          text: "<strong>Typical Cost:</strong> Around LKR 3,500–4,000 per boat for local hire, with higher prices for all-inclusive tour packages.",
        },

        {
          type: "p",
          text: "<strong>Best Time:</strong> Morning around 9:00 AM or late afternoon around 3:00 PM for cooler weather and better wildlife viewing.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=5.9985385998192085,80.32100414585132",
        },
      ],
    },

    {
      type: "text",
      id: "coconut-tree-hill",
      kicker: "Coastal Viewpoint",
      title: "Coconut Tree Hill",
      align: "left",

      content: [
        {
          type: "p",
          text: "Coconut Tree Hill in Mirissa is one of the most photographed coastal viewpoints in Sri Lanka.",
        },

        {
          type: "p",
          text: "The small lateritic headland is covered with tall coconut palms, creating a distinctive silhouette against the Indian Ocean.",
        },

        {
          type: "split-paragraph",
          heading: "Why It Is Famous",
          headingLevel: "h3",

          paragraphs: [
            "The hill is known for its symmetrical grove of palm trees overlooking the sea.",
            "Its open coastal setting makes it especially popular for sunrise, sunset, and travel photography.",
            "Although the land is privately owned, public access is generally allowed and the viewpoint remains free to enter.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Weligama/excursions/coconut-tree-hill.webp`,
          imageAlt: "Coconut Tree Hill in Mirissa",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "How to Get There",
        },

        {
          type: "p",
          text: "<strong>Via the Beach:</strong> Walk east along Mirissa Beach, pass Parrot Rock, and continue along the coastline before following the path up the small hill.",
        },

        {
          type: "p",
          text: "<strong>Via the Road:</strong> Take a tuk-tuk or walk toward the eastern side of Mirissa near Bandaramulla Temple, then follow the small dirt path toward the coast.",
        },

        {
          type: "p",
          text: "<strong>Note:</strong> Beach access may be difficult during high tide or rough sea conditions.",
        },

        {
          type: "h3",
          text: "Best Time to Visit",
        },

        {
          type: "p",
          text: "<strong>Sunrise:</strong> Usually the best option for soft light, fewer crowds, and a calmer atmosphere.",
        },

        {
          type: "p",
          text: "<strong>Sunset:</strong> Very scenic, but often crowded with visitors waiting for photos.",
        },

        {
          type: "p",
          text: "<strong>Footwear:</strong> The path up the hill can be uneven and rocky, so comfortable shoes are recommended.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=5.939406033957375,80.46828491037343",
        },
      ],
    },
  ],
};

export default WeligamaExcursionsArticle;