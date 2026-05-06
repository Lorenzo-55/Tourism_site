const WildlifeSafarisArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Dambulla", to: "/places/dambulla" },
    { label: "Wildlife & Safaris" },
  ],

  hero: {
    kicker: "Wildlife & Nature",
    title: "Wildlife & Safaris",
    subtitle:
      "Elephant gatherings, safari experiences, and national parks in Sri Lanka’s Cultural Triangle.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/WildlifeSafaris/wildlife1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Safaris in the Cultural Triangle",
    paragraphs: [
      "The Cultural Triangle region of Sri Lanka is not only famous for ancient cities and temples but also for some of the country’s most important wildlife reserves.",
      "Minneriya and Kaudulla National Parks are internationally known for their elephant populations, seasonal migrations, and safari experiences centered around ancient reservoirs and dry-zone ecosystems.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "minneriya-history",
      kicker: "National Park",
      title: "Minneriya National Park",
      align: "left",

      content: [
        {
          type: "p",
          text: "Minneriya National Park is one of Sri Lanka’s most significant wildlife destinations and is closely connected to the ancient irrigation systems of the island’s early kingdoms.",
        },

        {
          type: "h3",
          text: "History",
        },

        {
          type: "p",
          text: "The centerpiece of the park is the Minneriya Tank, a massive ancient reservoir originally constructed during the reign of King Mahasen between 274 and 301 CE.",
        },

        {
          type: "p",
          text: "The reservoir was built for irrigation and demonstrates the advanced hydraulic engineering of ancient Sri Lankan civilization.",
        },

        {
          type: "p",
          text: "King Mahasen remains revered locally as “Minneri Deviyo,” the guardian deity of Minneriya.",
        },

        {
          type: "p",
          text: "<strong>Wildlife Sanctuary:</strong> The surrounding area was officially declared a Wildlife Sanctuary in 1938 to protect the Minneriya Tank catchment and the wildlife dependent on it.",
        },

        {
          type: "p",
          text: "<strong>National Park Status:</strong> On August 12, 1997, Minneriya was upgraded to National Park status to provide stronger long-term protection for the region’s biodiversity and elephant migration routes.",
        },

        {
          type: "split-paragraph",
          heading: "The Elephant Gathering",
          headingLevel: "h4",

          paragraphs: [
            "Minneriya is globally famous for “The Gathering,” one of the world’s largest seasonal congregations of wild Asian elephants.",
            "During the dry season, generally between June and October, elephants migrate from nearby forests such as Wasgamuwa and Kaudulla toward the shrinking waters and grasslands around the Minneriya Tank.",
            "Hundreds of elephants, sometimes reported as high as 700, may gather around the reservoir during peak periods.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/WildlifeSafaris/wildlife2.webp`,
          imageAlt: "Elephants gathered near Minneriya Tank",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "The park forms part of a larger elephant corridor linking Minneriya, Kaudulla, and Hurulu Eco Park.",
        },

        {
          type: "h3",
          text: "Conservation and Biodiversity",
        },

        {
          type: "p",
          text: "Minneriya National Park covers approximately 8,889 hectares and includes dry mixed evergreen forests, scrublands, grasslands, and wetlands.",
        },

        {
          type: "p",
          text: "<strong>Mammals:</strong> Wildlife includes elephants, leopards, sloth bears, sambar deer, purple-faced langurs, and toque macaques.",
        },

        {
          type: "p",
          text: "<strong>Birdlife:</strong> Around 160 species of birds have been recorded within the park.",
        },

        {
          type: "p",
          text: "<strong>Other Wildlife:</strong> The park also supports reptiles, fish, butterflies, and numerous smaller species.",
        },

        {
          type: "p",
          text: "<strong>Challenges:</strong> Modern conservation challenges include habitat degradation, human-wildlife conflict, water pollution, and pressure from increasing tourism.",
        },
      ],
    },

    {
      type: "text",
      id: "minneriya-safari",
      kicker: "Safari Experience",
      title: "Visiting Minneriya National Park",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Safari Experience",
        },

        {
          type: "p",
          text: "The primary activity in the park is a jeep safari conducted in open-top 4x4 vehicles.",
        },

        {
          type: "p",
          text: "Safaris are usually offered as half-day tours during either the morning or afternoon.",
        },

        {
          type: "p",
          text: "<strong>Morning Safari:</strong> Usually from 6:00 AM to 9:00 AM and considered especially good for birdwatching and cooler temperatures.",
        },

        {
          type: "p",
          text: "<strong>Afternoon Safari:</strong> Usually from around 2:30 PM or 3:00 PM until 6:00 PM.",
        },

        {
          type: "p",
          text: "Late afternoon is generally considered the best time to witness the Elephant Gathering, as herds gather around the reservoir to drink and bathe.",
        },

        {
          type: "h3",
          text: "How to Visit",
        },

        {
          type: "p",
          text: "Visitors cannot enter the wildlife areas using private vehicles and must hire a safari jeep with a driver or guide.",
        },

        {
          type: "p",
          text: "<strong>Main Entrance:</strong> The official entrance and ticket office are located near Habarana along the Habarana–Polonnaruwa road.",
        },

        {
          type: "p",
          text: "<strong>Opening Hours:</strong> The park is generally open daily from 6:00 AM to 6:30 PM.",
        },

        {
          type: "p",
          text: "<strong>Ticket Purchase:</strong> The last ticket sales usually occur around 5:00 PM.",
        },

        {
          type: "p",
          text: "<strong>Costs:</strong> Visitors pay both a Department of Wildlife Conservation entrance fee and a separate safari jeep rental fee.",
        },

        {
          type: "p",
          text: "It is recommended to confirm whether the entrance ticket is included in the safari package or must be paid separately at the gate.",
        },

        {
          type: "p",
          text: "During the safari, visitors must remain inside the vehicle except at designated areas such as the park office.",
        },

        {
          type: "button",
          label: "View Minneriya National Park on Google Maps",
          href: "https://www.google.com/maps?q=2RMF%2B7M%20Polonnaruwa%2C%20Sri%20Lanka",
        },
      ],
    },

    {
      type: "text",
      id: "kaudulla",
      kicker: "National Park",
      title: "Kaudulla National Park",
      align: "left",

      content: [
        {
          type: "p",
          text: "Kaudulla National Park is another major wildlife destination in Sri Lanka’s North Central Province, located near Polonnaruwa and accessible from Habarana.",
        },

        {
          type: "p",
          text: "The park is centered around the Kaudulla Reservoir, an ancient tank originally built by King Mahasen.",
        },

        {
          type: "h3",
          text: "Main Attraction",
        },

        {
          type: "split-paragraph",
          heading: "",
          headingLevel: "h4",

          paragraphs: [
            "Kaudulla is best known for its large gatherings of wild Asian elephants around the reservoir.",
            "The park forms part of a vital elephant migration corridor connecting Minneriya, Kaudulla, and Somawathie National Parks.",
            "During peak migration periods, large herds gather near the water sources and surrounding grasslands.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/WildlifeSafaris/wildlife3.webp`,
          imageAlt: "Elephants at Kaudulla National Park",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Best Time to Visit",
        },

        {
          type: "p",
          text: "The best time to see the highest elephant numbers is generally between August and December.",
        },

        {
          type: "p",
          text: "The peak is often around September and October, when elephants migrate toward the reservoir during the dry season.",
        },

        {
          type: "p",
          text: "Kaudulla is sometimes considered the continuation or follow-up to the famous Minneriya Elephant Gathering.",
        },

        {
          type: "p",
          text: "Elephants can still be seen throughout the year, though numbers vary by season.",
        },

        {
          type: "h3",
          text: "Other Wildlife",
        },

        {
          type: "p",
          text: "<strong>Mammals:</strong> Wildlife includes Sri Lankan sambar deer, axis deer, wild boar, leopard, sloth bear, chevrotain, and gray slender loris.",
        },

        {
          type: "p",
          text: "Reports of rare albino axis deer have also emerged from the park.",
        },

        {
          type: "p",
          text: "<strong>Reptiles:</strong> Crocodiles are commonly seen near the reservoir.",
        },

        {
          type: "p",
          text: "<strong>Birdlife:</strong> Around 160 bird species have been recorded within the park.",
        },

        {
          type: "h3",
          text: "Geography",
        },

        {
          type: "p",
          text: "Kaudulla includes tropical dry mixed evergreen forests, grasslands, wetlands, and abandoned chena cultivation areas surrounding the reservoir.",
        },

        {
          type: "h3",
          text: "Location",
        },

        {
          type: "p",
          text: "The park is located approximately 197 km from Colombo and around 22 km north of Habarana.",
        },

        {
          type: "p",
          text: "Many visitors consider Kaudulla one of the best parks in Sri Lanka for elephant safaris, particularly during peak migration season.",
        },

        {
          type: "button",
          label: "View Kaudulla National Park on Google Maps",
          href: "https://www.google.com/maps?q=8.13474738621765,80.8760125865114",
        },
      ],
    },
  ],
};

export default WildlifeSafarisArticle;