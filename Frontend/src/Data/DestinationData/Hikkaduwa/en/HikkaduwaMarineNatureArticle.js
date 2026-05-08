const HikkaduwaMarineNatureArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Hikkaduwa", to: "/places/hikkaduwa" },
    { label: "Marine and Nature" },
  ],

  hero: {
    kicker: "Marine & Nature",
    title: "Marine and Nature Attractions in Hikkaduwa",
    subtitle:
      "Coral reefs, sea turtles, mangrove ecosystems, and coastal temples along Sri Lanka’s southwest coast.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/marine-nature/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Marine Life and Coastal Landscapes",
    paragraphs: [
      "Hikkaduwa is one of Sri Lanka’s best-known coastal destinations for marine life, coral reefs, and ocean-based activities.",
      "The area combines protected coral ecosystems, sea turtle conservation projects, and unique coastal temples with easy access to snorkeling, diving, and nature experiences.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "coral-sanctuary",
      kicker: "Marine Park",
      title: "Hikkaduwa Coral Sanctuary and Reef",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Hikkaduwa Coral Sanctuary, part of Hikkaduwa National Park, is one of Sri Lanka’s most accessible coral reef systems.",
        },

        {
          type: "p",
          text: "Located just offshore from the main beach, the reef is famous for its colorful marine life, shallow waters, and frequent sea turtle sightings.",
        },

        {
          type: "split-paragraph",
          heading: "Snorkeling and Marine Life",
          headingLevel: "h3",

          paragraphs: [
            "The calm and shallow waters make Hikkaduwa an ideal snorkeling destination for beginners and families.",
            "Visitors can easily rent masks, snorkels, and fins from beach vendors before swimming directly out to the reef.",
            "The reef is home to more than 60 coral species and over 170 species of reef fish, including parrotfish, angelfish, and butterflyfish.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/marine-nature/coral-reef.webp`,
          imageAlt: "Coral reef and snorkeling in Hikkaduwa",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Sea Turtles",
        },

        {
          type: "p",
          text: "Hikkaduwa is especially known for its resident sea turtles, including Green and Hawksbill turtles, which are often seen swimming in the shallow bay.",
        },

        {
          type: "p",
          text: "Visitors should observe turtles respectfully from a distance and avoid touching or feeding them.",
        },

        {
          type: "h3",
          text: "Ways to Explore the Reef",
        },

        {
          type: "p",
          text: "<strong>Snorkeling:</strong> The most popular and affordable option for exploring the shallow reef areas.",
        },

        {
          type: "p",
          text: "<strong>Glass-Bottom Boat Tours:</strong> Suitable for non-swimmers, families, and visitors who prefer to stay dry while viewing marine life.",
        },

        {
          type: "p",
          text: "<strong>Scuba Diving:</strong> Deeper reefs and shipwreck sites such as the SS Conch and Earl of Shaftesbury attract certified and beginner divers.",
        },

        {
          type: "p",
          text: "<strong>Best Time to Visit:</strong> November to April generally offers the clearest water visibility and calmest sea conditions.",
        },
      ],
    },

    {
      type: "text",
      id: "sea-turtle-hatchery",
      kicker: "Conservation",
      title: "Sea Turtle Hatchery and Rescue Centers",
      align: "left",

      content: [
        {
          type: "p",
          text: "Sea Turtle Hatchery and Rescue Centers near Hikkaduwa play an important role in protecting endangered sea turtles along Sri Lanka’s coastline.",
        },

        {
          type: "p",
          text: "Most centers are small conservation projects or non-profit initiatives focused on rehabilitation, education, and turtle protection.",
        },

        {
          type: "h3",
          text: "Conservation Work",
        },

        {
          type: "p",
          text: "<strong>Egg Protection:</strong> Eggs laid on beaches are relocated to protected hatchery areas to prevent damage from predators, poaching, or tides.",
        },

        {
          type: "p",
          text: "<strong>Hatchling Releases:</strong> Baby turtles are usually released into the ocean shortly after hatching, often during the evening for better survival chances.",
        },

        {
          type: "p",
          text: "<strong>Rescue and Rehabilitation:</strong> Injured turtles suffering from fishing-net entanglement or boat injuries are treated until they can return to the sea.",
        },

        {
          type: "split-paragraph",
          heading: "Turtle Species",
          headingLevel: "h4",

          paragraphs: [
            "Several turtle species are protected along Sri Lanka’s southern coast, including Green Turtles, Hawksbill Turtles, Olive Ridley Turtles, Loggerhead Turtles, and occasionally Leatherback Turtles.",
            "Many hatcheries also educate visitors about pollution, habitat destruction, and marine conservation.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/marine-nature/turtle-hatchery.webp`,
          imageAlt: "Sea turtle hatchery near Hikkaduwa",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Visitor Experience",
        },

        {
          type: "p",
          text: "Visitors usually see tanks containing hatchlings as well as larger turtles recovering from injuries.",
        },

        {
          type: "p",
          text: "Some centers occasionally allow visitors to witness hatchling releases into the ocean, which is considered one of the highlights of the experience.",
        },

        {
          type: "p",
          text: "<strong>Ethical Note:</strong> Visitors should avoid touching turtles, using flash photography, or feeding turtles unless instructed by conservation staff.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.164255703034429,80.09052241326806",
        },
      ],
    },

    {
      type: "text",
      id: "seenigama-muhudu-viharaya",
      kicker: "Coastal Temple",
      title: "Seenigama Muhudu Viharaya",
      align: "left",

      content: [
        {
          type: "p",
          text: "Seenigama Muhudu Viharaya is a unique coastal temple complex located just north of Hikkaduwa.",
        },

        {
          type: "p",
          text: "The site consists of a mainland shrine and a Buddhist temple located on a small offshore island.",
        },

        {
          type: "split-paragraph",
          heading: "The Island Temple",
          headingLevel: "h3",

          paragraphs: [
            "The main temple sits on a rocky islet approximately 100 to 200 meters offshore and can only be reached by a short boat ride.",
            "The small island setting, ocean surroundings, and peaceful atmosphere make it one of the more distinctive religious sites on Sri Lanka’s southwest coast.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/marine-nature/seenigama-temple.webp`,
          imageAlt: "Seenigama Muhudu Viharaya island temple",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Devol Devalaya",
        },

        {
          type: "p",
          text: "The mainland shrine is dedicated to Devol Deviyo, a local deity especially revered by fishing communities as a protector and bringer of justice.",
        },

        {
          type: "p",
          text: "The temple is known for traditional rituals performed by people seeking justice after experiences such as theft or personal wrongdoing.",
        },

        {
          type: "h3",
          text: "Tsunami Survival",
        },

        {
          type: "p",
          text: "Seenigama Muhudu Viharaya became a symbol of resilience after the 2004 tsunami, when the surrounding mainland village suffered severe destruction while the small island temple remarkably survived.",
        },

        {
          type: "h3",
          text: "Visitor Information",
        },

        {
          type: "p",
          text: "<strong>Access:</strong> Visitors reach the island by a short boat ride from the mainland shore.",
        },

        {
          type: "p",
          text: "<strong>Dress Code:</strong> Modest clothing with covered shoulders and knees is recommended.",
        },

        {
          type: "p",
          text: "<strong>Best Time:</strong> Daylight hours are recommended for safer boat access and sightseeing.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.155444147621526,80.09001615085376",
        },
      ],
    },
  ],
};

export default HikkaduwaMarineNatureArticle;