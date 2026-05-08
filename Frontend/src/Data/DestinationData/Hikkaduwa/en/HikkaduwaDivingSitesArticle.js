const HikkaduwaDivingSitesArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Hikkaduwa", to: "/places/hikkaduwa" },
    { label: "Diving Sites" },
  ],

  hero: {
    kicker: "Diving & Snorkeling",
    title: "Diving Sites",
    subtitle:
      "Shipwreck dives, coral reefs, snorkeling spots, and surf breaks along one of Sri Lanka’s most popular coastal towns.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/diving-sites/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Reefs, Wrecks, and Ocean Adventures",
    paragraphs: [
      "Hikkaduwa is one of Sri Lanka’s best-known destinations for snorkeling, scuba diving, and surfing.",
      "The shallow reef is ideal for casual snorkeling and glass-bottom boat rides, while nearby shipwrecks such as the SS Conch and Earl of Shaftesbury make the area especially popular with divers.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "snorkeling-and-diving",
      kicker: "Ocean Activities",
      title: "Snorkeling and Diving",
      align: "left",

      content: [
        {
          type: "p",
          text: "Hikkaduwa offers excellent snorkeling in shallow coastal waters, with easy access to coral reefs and colorful marine life.",
        },

        {
          type: "p",
          text: "Visitors can rent snorkeling gear from local vendors or take a glass-bottom boat ride to view the reef without entering the water.",
        },

        {
          type: "split-paragraph",
          heading: "Accessible Reef Experience",
          headingLevel: "h3",

          paragraphs: [
            "The shallow reef areas near Hikkaduwa are suitable for beginners, families, and travellers looking for a relaxed marine experience.",
            "For certified divers, Hikkaduwa also offers deeper reef areas and several well-known shipwrecks located offshore.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/diving-sites/snorkeling-reef.webp`,
          imageAlt: "Snorkeling reef in Hikkaduwa",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "<strong>Dive Shops:</strong> Local dive centers offer guided dives, equipment rental, and PADI courses for beginners and certified divers.",
        },
      ],
    },

    {
      type: "text",
      id: "ss-conch",
      kicker: "Shipwreck Dive",
      title: "SS Conch Wreck",
      align: "left",

      content: [
        {
          type: "p",
          text: "The SS Conch is one of the most historically significant shipwrecks near Hikkaduwa.",
        },

        {
          type: "p",
          text: "It is notable as one of the world’s earliest oil tankers and the first oil tanker known to have sunk in Sri Lankan waters.",
        },

        {
          type: "h3",
          text: "Ship History",
        },

        {
          type: "p",
          text: "<strong>Type:</strong> Steam-powered oil tanker.",
        },

        {
          type: "p",
          text: "<strong>Built:</strong> 1892 in Stockton for the Shell Transport and Trading Company.",
        },

        {
          type: "p",
          text: "<strong>Tonnage:</strong> 3,555 tons.",
        },

        {
          type: "p",
          text: "<strong>Sinking:</strong> On June 3, 1903, the SS Conch ran aground on Akkurala Rock while carrying bulk oil from Novorossiysk and Colombo to Madras.",
        },

        {
          type: "split-paragraph",
          heading: "The Wreck Today",
          headingLevel: "h3",

          paragraphs: [
            "The wreck lies off Akkurala near Hikkaduwa at a maximum depth of around 21 meters.",
            "The vessel is broken into two main sections, with the triple-expansion engine and three large boilers still visible near the stern.",
            "One section of the hull lies upside down, forming a large cavern-like space that experienced divers may explore safely with guidance.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/diving-sites/ss-conch.webp`,
          imageAlt: "SS Conch shipwreck dive site near Hikkaduwa",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Marine Life",
        },

        {
          type: "p",
          text: "The SS Conch has become part of the reef ecosystem and provides shelter for groupers, snappers, angelfish, and schools of reef fish.",
        },
      ],
    },

    {
      type: "text",
      id: "earl-of-shaftesbury",
      kicker: "Historic Wreck",
      title: "Earl of Shaftesbury Wreck",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Earl of Shaftesbury is another famous wreck dive near Hikkaduwa and Akurala.",
        },

        {
          type: "p",
          text: "It was a four-masted iron sailing cargo ship that struck a reef and capsized during rough seas in the late 19th century.",
        },

        {
          type: "h3",
          text: "Ship History",
        },

        {
          type: "p",
          text: "<strong>Type:</strong> Four-masted iron sailing cargo ship.",
        },

        {
          type: "p",
          text: "<strong>Built:</strong> 1883 by Ramage & Ferguson in Leith, United Kingdom.",
        },

        {
          type: "p",
          text: "<strong>Tonnage:</strong> Approximately 2,100 tons.",
        },

        {
          type: "p",
          text: "<strong>Wreck Date:</strong> Early May 1893.",
        },

        {
          type: "p",
          text: "<strong>Cause of Loss:</strong> Struck a reef and capsized in rough seas while travelling from Bombay to Diamond Island near Rangoon.",
        },

        {
          type: "p",
          text: "<strong>Casualties:</strong> Six crew members were reported to have drowned.",
        },

        {
          type: "split-paragraph",
          heading: "Dive Site Conditions",
          headingLevel: "h3",

          paragraphs: [
            "Today, the wreck lies scattered across the sandy seabed at a depth of around 12 to 15 meters.",
            "Divers can see remnants of the hull, parts of the masts, and other ship structures spread across the site.",
            "The wreck now functions as an artificial reef, attracting stingrays, groupers, snappers, lionfish, and other marine life.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/diving-sites/earl-of-shaftesbury.webp`,
          imageAlt: "Earl of Shaftesbury shipwreck dive site near Hikkaduwa",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "surfing",
      kicker: "Surfing",
      title: "Surfing in Hikkaduwa",
      align: "left",

      content: [
        {
          type: "p",
          text: "Hikkaduwa is also a well-known surf destination, with breaks suitable for different skill levels.",
        },

        {
          type: "p",
          text: "<strong>Beginners:</strong> The Beach Break has a sandy bottom and is ideal for learning.",
        },

        {
          type: "p",
          text: "<strong>Intermediate and Advanced Surfers:</strong> Main Reef and Benny’s offer more challenging reef breaks.",
        },

        {
          type: "p",
          text: "Surf schools are widely available in Hikkaduwa and offer lessons, board rentals, and equipment for visitors.",
        },
      ],
    },
  ],
};

export default HikkaduwaDivingSitesArticle;