const MannarFortArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Mannar", to: "/places/mannar" },
    { label: "Mannar Fort" },
  ],

  hero: {
    kicker: "Colonial Heritage",
    title: "Mannar Fort",
    subtitle:
      "A historic coastal fort on Mannar Island shaped by Portuguese, Dutch, British, and modern Sri Lankan history.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Mannar/mannar-fort/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Colonial Landmark on Mannar Island",
    paragraphs: [
      "Mannar Fort is an important historical monument located on Mannar Island, near the bridge connecting the island with mainland Sri Lanka.",
      "The fort reflects several layers of colonial and military history, from Portuguese construction and Dutch rebuilding to British occupation and its later role during the Sri Lankan Civil War.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history-of-mannar-fort",
      kicker: "History",
      title: "History of Mannar Fort",
      align: "left",

      content: [
        {
          type: "p",
          text: "Mannar Fort has been shaped by successive colonial powers because of its strategic location along the northwestern coast of Sri Lanka.",
        },

        {
          type: "split-paragraph",
          heading: "Portuguese Origins",
          headingLevel: "h3",
          paragraphs: [
            "The Portuguese built the original fort around 1560 and named it São Jorge.",
            "It served as a military base for Portuguese expansion toward the Jaffna kingdom and helped them control the strategically important coastline of Mannar.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Mannar/mannar-fort/fort-walls.webp`,
          imageAlt: "Stone walls of Mannar Fort",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Dutch VOC Period",
        },

        {
          type: "p",
          text: "In 1658, the Dutch East India Company, or VOC, captured the fort after a fierce battle, making it one of the last Portuguese strongholds in Ceylon.",
        },

        {
          type: "p",
          text: "The Dutch rebuilt and strengthened the fort in 1696, giving it much of its current architectural form.",
        },

        {
          type: "p",
          text: "For the VOC, Mannar Fort was important for defending shipping routes to India and controlling the pearl fisheries, elephant trade, and other valuable goods.",
        },

        {
          type: "h3",
          text: "British Rule",
        },

        {
          type: "p",
          text: "In 1795, the British took control of Mannar Fort after the Dutch surrender.",
        },

        {
          type: "p",
          text: "They continued to use the fort until Sri Lanka’s independence, maintaining its role as part of the colonial administrative and military landscape.",
        },

        {
          type: "h3",
          text: "Recent History",
        },

        {
          type: "p",
          text: "During the Sri Lankan Civil War, the fort was closed to the public for decades due to military activity in the region.",
        },

        {
          type: "p",
          text: "After the end of the war in 2009, Mannar Fort was gradually reopened to visitors.",
        },
      ],
    },

    {
      type: "text",
      id: "architecture-and-condition",
      kicker: "Architecture",
      title: "Architecture and Current Condition",
      align: "left",

      content: [
        {
          type: "p",
          text: "Mannar Fort is a classic example of European military architecture adapted to Sri Lanka’s coastal setting.",
        },

        {
          type: "p",
          text: "Although damaged, it remains an impressive ruin with visible fortifications, bastions, and internal colonial remains.",
        },

        {
          type: "split-paragraph",
          heading: "Form and Design",
          headingLevel: "h3",
          paragraphs: [
            "The fort has a square layout with four bastions positioned at the corners.",
            "Originally, it was completely surrounded by a moat, which connected to the sea on the eastern side.",
            "The structure was built using granite stones and bricks, giving the fort its solid and weathered appearance.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Mannar/mannar-fort/bastion-view.webp`,
          imageAlt: "Bastion and ramparts at Mannar Fort",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "What Remains Today",
        },

        {
          type: "p",
          text: "<strong>Fortifications:</strong> The outer walls and defensive bastions are still largely visible.",
        },

        {
          type: "p",
          text: "<strong>Church Ruins:</strong> Within the walls are the remains of a colonial-period church, reflecting the religious history of the occupying powers.",
        },

        {
          type: "p",
          text: "<strong>Management:</strong> The fort is managed by the Sri Lanka Department of Archaeology.",
        },

        {
          type: "p",
          text: "<strong>Surrounding Use:</strong> Some surrounding areas are used by the police.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Access and What to See",
      align: "left",

      content: [
        {
          type: "p",
          text: "Mannar Fort is generally open to the public and is usually visited without an entrance fee.",
        },

        {
          type: "p",
          text: "Its quiet atmosphere and coastal setting make it a peaceful stop for visitors interested in Sri Lanka’s colonial and military history.",
        },

        {
          type: "h3",
          text: "Location",
        },

        {
          type: "p",
          text: "The fort is located on Mannar Island near the new bridge that connects the island to mainland Sri Lanka.",
        },

        {
          type: "h3",
          text: "What to See",
        },

        {
          type: "p",
          text: "<strong>Ramparts:</strong> Visitors can walk along parts of the ramparts, though caution is needed because of the fort’s damaged condition.",
        },

        {
          type: "p",
          text: "<strong>Four Bastions:</strong> The corner bastions show the defensive layout of the fort.",
        },

        {
          type: "p",
          text: "<strong>Internal Ruins:</strong> The remains of colonial-period buildings, including the church, can still be explored.",
        },

        {
          type: "p",
          text: "<strong>Views:</strong> The fort offers picturesque views of the ocean and the surrounding Mannar area.",
        },

        {
          type: "p",
          text: "Mannar Fort is especially worthwhile for travellers interested in the Dutch East India Company period, coastal defense architecture, and the quieter historical sites of northern Sri Lanka.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=8.97604664518627,79.91695347970918",
        },
      ],
    },
  ],
};

export default MannarFortArticle;