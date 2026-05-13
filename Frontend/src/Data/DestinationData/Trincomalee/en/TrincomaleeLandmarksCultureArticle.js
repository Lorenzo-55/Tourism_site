const TrincomaleeLandmarksCultureArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Trincomalee", to: "/places/trincomalee" },
    { label: "Landmarks & Culture" },
  ],

  hero: {
    kicker: "Landmarks & Culture",
    title: "Landmarks & Culture",
    subtitle:
      "Colonial forts, sacred cliffside temples, mythology, and layered cultural history overlooking Trincomalee Bay.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Trincomalee/landmarks-culture/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Sacred Cliffs and Colonial Forts",
    paragraphs: [
      "Trincomalee is home to some of Sri Lanka’s most historically layered landmarks, where colonial military history, Hindu mythology, Buddhist heritage, and dramatic coastal scenery intersect.",
      "The Fort Frederick and Koneswaram Temple complex is one of the most culturally significant and visually striking locations in eastern Sri Lanka. :contentReference[oaicite:0]{index=0}",
    ],
  },

  sections: [
    {
      type: "text",
      id: "fort-frederick",
      kicker: "Colonial Fortress",
      title: "Fort Frederick",
      align: "left",

      content: [
        {
          type: "p",
          text: "Fort Frederick, also known as Trincomalee Fort, is a historic coastal fortress overlooking Trincomalee Bay.",
        },

        {
          type: "p",
          text: "It is a rare site where colonial military architecture, sacred religious landmarks, wildlife, and a modern military presence coexist within the same space.",
        },

        {
          type: "split-paragraph",
          heading: "Portuguese Origins and Temple Destruction",
          headingLevel: "h3",

          paragraphs: [
            "The fort was first constructed by the Portuguese in 1623 under Constantine de Saa.",
            "In one of the most controversial episodes in Trincomalee’s history, stones and carved remains from the destroyed Koneswaram Temple — once known as the ‘Temple of a Thousand Pillars’ — were used to build the fort walls.",
            "Much of the original sacred architecture was pushed over the cliff into the sea during the destruction.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Trincomalee/landmarks-culture/fort-frederick.webp`,
          imageAlt: "Fort Frederick in Trincomalee",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Dutch and British Periods",
        },

        {
          type: "p",
          text: "The Dutch captured the fort in 1639 and later rebuilt and expanded it in 1665, naming it Fort Frederick after Frederick of Orange-Nassau.",
        },

        {
          type: "p",
          text: "Many of the stone ramparts visible today are of Dutch origin.",
        },

        {
          type: "p",
          text: "The British seized the fort in 1795 and maintained it as a strategic military location for more than 150 years.",
        },

        {
          type: "p",
          text: "Wellesley Lodge within the fort complex was once used by Arthur Wellesley, who later became the Duke of Wellington.",
        },

        {
          type: "h3",
          text: "The Fort Today",
        },

        {
          type: "p",
          text: "Today, the fort remains an active Sri Lankan Army garrison while also serving as the main access route to the Koneswaram Temple and Gokanna Vihara.",
        },

        {
          type: "p",
          text: "Despite the military presence, the atmosphere is surprisingly calm, with large banyan trees, shaded roads, and freely roaming spotted deer throughout the grounds.",
        },

        {
          type: "split-paragraph",
          heading: "Highlights Inside the Fort",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Main Gateway:</strong> Features the British Royal Coat of Arms above the entrance.",
            "<strong>Ramparts:</strong> Certain sections of the old Dutch walls offer panoramic views across Dutch Bay and Back Bay.",
            "<strong>Wellesley Lodge:</strong> Colonial-era building associated with Arthur Wellesley.",
            "<strong>Wild Deer:</strong> Spotted deer are commonly seen resting beneath the ancient banyan trees.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Trincomalee/landmarks-culture/deer-fort-frederick.webp`,
          imageAlt: "Spotted deer roaming inside Fort Frederick",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Visitor Information",
        },

        {
          type: "p",
          text: "<strong>Opening Hours:</strong> Daily from 6:00 AM to 10:00 PM.",
        },

        {
          type: "p",
          text: "<strong>Entrance Fee:</strong> Free.",
        },

        {
          type: "p",
          text: "<strong>Best Time:</strong> 7:00 AM – 9:00 AM or late afternoon around sunset.",
        },

        {
          type: "p",
          text: "<strong>Photography:</strong> Photography of scenery and temples is allowed, but military checkpoints, barracks, and personnel should not be photographed.",
        },

        {
          type: "p",
          text: "<strong>Wildlife Etiquette:</strong> Visitors should avoid feeding the deer.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=8.577443870857874,81.24323826142005",
        },
      ],
    },

    {
      type: "text",
      id: "koneswaram-temple",
      kicker: "Sacred Hindu Temple",
      title: "Koneswaram Temple",
      align: "left",

      content: [
        {
          type: "p",
          text: "Koneswaram Temple is one of the most sacred Hindu temples in Sri Lanka and is widely known as the historic ‘Temple of a Thousand Pillars.’",
        },

        {
          type: "p",
          text: "Perched dramatically on Swami Rock above the Indian Ocean, the temple combines mythology, ancient worship traditions, colonial tragedy, and modern spiritual revival.",
        },

        {
          type: "split-paragraph",
          heading: "Ancient Origins",
          headingLevel: "h3",

          paragraphs: [
            "Historical traditions and the Ramayana suggest the temple has existed for more than 2,500 years.",
            "Koneswaram is one of the five Pancha Ishwarams, the sacred abodes of Lord Shiva in Sri Lanka.",
            "The site was historically known as Dakshina Kailasam, or ‘Kailash of the South,’ because it was believed to align spiritually with Mount Kailash.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Trincomalee/landmarks-culture/koneswaram-temple.webp`,
          imageAlt: "Koneswaram Temple on Swami Rock",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "The Golden Era and Destruction",
        },

        {
          type: "p",
          text: "Under the Chola and Pandyan kingdoms, Koneswaram became a wealthy and architecturally grand temple complex filled with granite carvings, gold, pearls, and massive halls.",
        },

        {
          type: "p",
          text: "In 1624, Portuguese forces destroyed the temple during a raid led by Constantine de Saa.",
        },

        {
          type: "p",
          text: "The temple structures were pushed over the cliff into the sea, and many stones were later reused to construct Fort Frederick.",
        },

        {
          type: "h3",
          text: "Rediscovery and Reconstruction",
        },

        {
          type: "p",
          text: "For nearly 300 years, much of the original temple remained lost beneath the sea.",
        },

        {
          type: "p",
          text: "In the 1950s, divers — including famous science-fiction author Arthur C. Clarke — helped rediscover statues and temple remains from the ocean floor.",
        },

        {
          type: "p",
          text: "The temple was reconstructed in 1963 and continues today as a major Hindu pilgrimage center.",
        },

        {
          type: "split-paragraph",
          heading: "Highlights of the Temple",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Giant Shiva Statue:</strong> A large golden seated Shiva overlooking the coastline.",
            "<strong>Cliffside Views:</strong> Panoramic scenery across the Indian Ocean and Trincomalee Bay.",
            "<strong>Ravana’s Cleft:</strong> A deep fissure in the rock linked to Ramayana mythology.",
            "<strong>Lover’s Leap:</strong> The dramatic cliff-edge viewpoint associated with local legend.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Trincomalee/landmarks-culture/shiva-statue.webp`,
          imageAlt: "Golden Shiva statue at Koneswaram Temple",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Visitor Information",
        },

        {
          type: "p",
          text: "<strong>Opening Hours:</strong> 6:00 AM – 1:00 PM and 4:00 PM – 7:00 PM.",
        },

        {
          type: "p",
          text: "<strong>Entrance Fee:</strong> Free, though donations are welcomed.",
        },

        {
          type: "p",
          text: "<strong>Puja Times:</strong> Morning at 7:30 AM, noon at 12:00 PM, and evening at 6:30 PM.",
        },

        {
          type: "p",
          text: "<strong>Dress Code:</strong> Shoulders and knees must be covered. Shoes must be removed before entering.",
        },

        {
          type: "p",
          text: "<strong>Photography:</strong> Photography is permitted around the grounds, but visitors should not photograph the inner sanctum.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=8.582560287110384,81.24534486621263",
        },
      ],
    },

    {
      type: "text",
      id: "lovers-leap",
      kicker: "Legend & Viewpoint",
      title: "Lover’s Leap",
      align: "left",

      content: [
        {
          type: "p",
          text: "Lover’s Leap is a dramatic cliff-edge viewpoint located beside Koneswaram Temple on Swami Rock.",
        },

        {
          type: "split-paragraph",
          heading: "The Legend of Francina van Reede",
          headingLevel: "h3",

          paragraphs: [
            "According to local legend, Francina van Reede was the daughter of a high-ranking Dutch official in colonial Ceylon.",
            "After her engagement to a Dutch officer was broken and he sailed back toward Holland, she stood on the cliff watching his ship disappear into the horizon.",
            "Heartbroken, she leapt from the cliff into the sea below, giving rise to the name ‘Lover’s Leap.’",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Trincomalee/landmarks-culture/lovers-leap.webp`,
          imageAlt: "Lover's Leap viewpoint in Trincomalee",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "A memorial is said to have been built on Swami Rock by her father during the Dutch period.",
        },

        {
          type: "p",
          text: "Today, the viewpoint is visited for both its tragic legend and its sweeping views across Trincomalee Bay and the Indian Ocean.",
        },

        {
          type: "p",
          text: "The cliff edge is extremely steep, and visitors should exercise caution while exploring the viewpoint area.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=8.583583656143617,81.24554542203443",
        },
      ],
    },
  ],
};

export default TrincomaleeLandmarksCultureArticle;