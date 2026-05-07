const GalleFortCoreArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Galle", to: "/places/galle" },
    { label: "Galle Fort Core" },
  ],

  hero: {
    kicker: "UNESCO Heritage",
    title: "Galle Fort Core",
    subtitle:
      "Historic ramparts, colonial landmarks, ocean views, and the cultural heart of Galle Fort.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Galle/ramparts1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "The Historic Core of Galle Fort",
    paragraphs: [
      "The core area of Galle Fort is one of the most historically and culturally significant places in Sri Lanka.",
      "Centered around the old ramparts, bastions, lighthouse, and clock tower, the fort combines Dutch colonial architecture, oceanfront scenery, and everyday local life within a UNESCO World Heritage setting.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "rampart-walk",
      kicker: "Experience",
      title: "The Rampart Walk",
      align: "left",

      content: [
        {
          type: "p",
          text: "The rampart walk forms a loop around the fort and can take anywhere from one to three hours depending on pace and stops along the way.",
        },

        {
          type: "p",
          text: "The route is best started near the Galle Clock Tower before continuing around the peninsula and along the ocean-facing walls.",
        },

        {
          type: "p",
          text: "Along the route, visitors can see major bastions including the Sun Bastion, Moon Bastion, and Star Bastion.",
        },

        {
          type: "split-paragraph",
          heading: "Views and Atmosphere",
          headingLevel: "h3",

          paragraphs: [
            "The ramparts provide panoramic views of the Indian Ocean, Galle Harbour, the inner fort streets, and the nearby Galle International Cricket Stadium.",
            "The area is especially popular during sunset, when both locals and tourists gather along the walls to watch the changing colors over the ocean.",
            "The atmosphere becomes lively and social in the late afternoon, while mornings are quieter and more peaceful.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Galle/ramparts2.webp`,
          imageAlt: "Walking along the Galle Fort ramparts",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Flag Rock Bastion",
        },

        {
          type: "p",
          text: "Flag Rock Bastion was originally used by the Dutch to raise warning flags for ships approaching dangerous rocks below the fort.",
        },

        {
          type: "p",
          text: "Today, it is best known for the local cliff jumpers who leap from the ramparts into the sea during the late afternoon, often performing for visitors gathered nearby.",
        },

        {
          type: "p",
          text: "The site combines dramatic ocean scenery with a lively local atmosphere and remains one of the fort’s most memorable sunset locations.",
        },

        {
          type: "h3",
          text: "Triton Bastion",
        },

        {
          type: "p",
          text: "Triton Bastion is another excellent viewpoint along the ramparts and is particularly popular during sunset hours.",
        },
      ],
    },

    {
      type: "text",
      id: "clock-tower",
      kicker: "Colonial Landmark",
      title: "Galle Fort Clock Tower",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Galle Fort Clock Tower, also known as the Anthonisz Memorial Clock Tower, is one of the most recognizable landmarks within Galle Fort.",
        },

        {
          type: "h3",
          text: "Location and Structure",
        },

        {
          type: "p",
          text: "<strong>Location:</strong> The tower stands at the northern end of the fort on the Moon Bastion, built on the site of a former guard room.",
        },

        {
          type: "p",
          text: "<strong>Significance:</strong> It traditionally serves as the starting point for the rampart walk and offers views toward the fort, the cricket stadium, and the surrounding town.",
        },

        {
          type: "p",
          text: "<strong>Architecture:</strong> The structure is approximately four storeys tall and combines Victorian and Moorish architectural influences from the British colonial era.",
        },

        {
          type: "split-paragraph",
          heading: "History and Dedication",
          headingLevel: "h4",

          paragraphs: [
            "The tower was constructed in 1883 during British rule.",
            "Unlike many colonial structures, it was funded through public subscription by the people of Galle.",
            "It was built in memory of Dr. Peter Daniel Anthonisz, a respected Colonial Surgeon for the Southern Province.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Galle/ramparts3.webp`,
          imageAlt: "Galle Fort Clock Tower",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "A plaque on the tower commemorates Dr. Anthonisz and recognizes his service in relieving human suffering.",
        },

        {
          type: "p",
          text: "The clock mechanism itself was donated separately by Mudaliyar Samson de Abrew Rajapakse as a gift of gratitude.",
        },

        {
          type: "button",
          label: "View Clock Tower on Google Maps",
          href: "https://www.google.com/maps?q=26J8%2B22%20Galle%2C%20Sri%20Lanka",
        },
      ],
    },

    {
      type: "text",
      id: "galle-lighthouse",
      kicker: "Lighthouse",
      title: "Galle Lighthouse",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Galle Lighthouse, also known as the Pointe de Galle Light, is perhaps the most iconic and photographed landmark within Galle Fort.",
        },

        {
          type: "h3",
          text: "Location and Appearance",
        },

        {
          type: "p",
          text: "<strong>Location:</strong> The lighthouse stands on the Point Utrecht Bastion at the southern end of the fort ramparts.",
        },

        {
          type: "p",
          text: "<strong>Appearance:</strong> It is a cylindrical white masonry tower framed by palm trees and overlooking the Indian Ocean.",
        },

        {
          type: "p",
          text: "<strong>Height:</strong> The current structure stands approximately 26.5 meters, or 87 feet, high.",
        },

        {
          type: "p",
          text: "<strong>Function:</strong> The lighthouse remains operational today under the management of the Sri Lanka Ports Authority.",
        },

        {
          type: "split-paragraph",
          heading: "History of the Lighthouse",
          headingLevel: "h4",

          paragraphs: [
            "The original lighthouse was built by the British in 1848 and was an 80-foot iron structure.",
            "That original tower was destroyed by a major fire in 1934.",
            "The current concrete lighthouse was constructed in 1939 approximately 100 meters from the original site.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Galle/ramparts4.webp`,
          imageAlt: "Galle Lighthouse on the ramparts",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "The lighthouse originally used a sophisticated prism lens system floating in a mercury bath before later modernization with an automated electrical system.",
        },

        {
          type: "h3",
          text: "Visitor Experience",
        },

        {
          type: "p",
          text: "The lighthouse area offers panoramic views of the ocean, fort walls, and surrounding streets.",
        },

        {
          type: "p",
          text: "Although visitors are generally not allowed to climb the tower itself, the surrounding ramparts remain freely accessible.",
        },

        {
          type: "p",
          text: "It is one of the best locations in Galle for photography, especially during sunrise and sunset.",
        },

        {
          type: "button",
          label: "View Galle Lighthouse on Google Maps",
          href: "https://www.google.com/maps?q=26F9%2BVQ%20Galle%2C%20Sri%20Lanka",
        },
      ],
    },
    {
        type: "text",
        id: "pedlar-street",
        kicker: "Historic Street",
        title: "Pedlar Street",
        align: "left",

        content: [
            {
            type: "p",
            text: "Pedlar Street is one of the most famous and vibrant streets within the UNESCO World Heritage Site of Galle Fort.",
            },

            {
            type: "p",
            text: "It is widely considered the main commercial and tourist artery within the interior of the fort.",
            },

            {
            type: "h3",
            text: "Name Origin",
            },

            {
            type: "p",
            text: "The name Pedlar Street is a direct English translation of the Dutch name Marskramerstraat, meaning “Peddler’s Street.”",
            },

            {
            type: "p",
            text: "The name reflects the street’s historical role as a center for small-scale traders, many of whom belonged to the Muslim Moor and Tamil communities.",
            },

            {
            type: "split-paragraph",
            heading: "Atmosphere and Architecture",
            headingLevel: "h4",

            paragraphs: [
                "Pedlar Street is a lively, narrow, and mostly pedestrian-friendly cobblestone street that is ideal for wandering and people-watching.",
                "The street is lined with beautifully preserved Dutch and British colonial buildings featuring high ceilings, large wooden doors, and colorful facades.",
                "Many of these historic structures have been carefully adapted into modern shops, cafés, and galleries while still retaining their colonial character.",
            ],

            image: `${import.meta.env.BASE_URL}Destinations/Galle/pedlar-street1.webp`,
            imageAlt: "Pedlar Street inside Galle Fort",
            mediaPosition: "right",
            },

            {
            type: "h3",
            text: "Shopping and Culture",
            },

            {
            type: "p",
            text: "Pedlar Street is one of the best places in Galle Fort for boutique shopping and local design culture.",
            },

            {
            type: "p",
            text: "<strong>Boutique Shops:</strong> Stores selling designer clothing, hand-loomed textiles, and curated homeware.",
            },

            {
            type: "p",
            text: "<strong>Art and Galleries:</strong> Local art, photography, and vintage-style “Ceylon” poster collections.",
            },

            {
            type: "p",
            text: "<strong>Jewelry:</strong> Shops specializing in Sri Lankan gemstones and precious stones.",
            },

            {
            type: "h3",
            text: "Dining",
            },

            {
            type: "p",
            text: "Pedlar Street and its surrounding alleys are filled with cafés, restaurants, and eateries offering both Sri Lankan and international cuisine.",
            },

            {
            type: "p",
            text: "The street becomes especially lively in the evening, when visitors gather for dinner, drinks, and the atmosphere of the fort after sunset.",
            },

            {
            type: "p",
            text: "A walk along Pedlar Street offers a blend of history, architecture, shopping, dining, and contemporary local life within the walls of Galle Fort.",
            },

            {
            type: "button",
            label: "View Pedlar Street on Google Maps",
            href: "https://www.google.com/maps?q=Galle%2080000%2C%20Sri%20Lanka",
            },
        ],
        },

    {
      type: "text",
      id: "best-time",
      kicker: "Best Time",
      title: "Best Time to Visit",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Morning Walk",
        },

        {
          type: "p",
          text: "Sunrise and early morning are ideal for a quieter experience with cooler temperatures and softer lighting.",
        },

        {
          type: "p",
          text: "At this time, the ramparts are often shared mainly with joggers, early vendors, and local residents.",
        },

        {
          type: "h3",
          text: "Sunset",
        },

        {
          type: "p",
          text: "Late afternoon and sunset are considered the best times to visit the ramparts.",
        },

        {
          type: "p",
          text: "This is when the fort becomes most vibrant, with visitors gathering to watch the sunset over the Indian Ocean and observe the cliff jumpers at Flag Rock Bastion.",
        },

        {
          type: "p",
          text: "<strong>Tip:</strong> Wear comfortable walking shoes, as parts of the stone pathways can be uneven, and carry water during hotter parts of the day.",
        },
      ],
    },
  ],
};

export default GalleFortCoreArticle;