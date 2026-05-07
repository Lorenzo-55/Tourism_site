const ReligiousAndCulturalSitesArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Galle", to: "/places/galle" },
    { label: "Religious and Cultural Sites" },
  ],

  hero: {
    kicker: "Religious Heritage",
    title: "Religious and Cultural Sites",
    subtitle:
      "Historic churches, mosques, and colonial-era places of worship within Galle Fort.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Galle/religious1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Religious Diversity Inside Galle Fort",
    paragraphs: [
      "Galle Fort is home to several important religious and cultural landmarks that reflect the city’s colonial history and multi-religious heritage.",
      "Dutch churches, Anglican architecture, and historic mosques stand within the fort walls, illustrating centuries of cultural exchange between European colonial powers and local Sri Lankan communities.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "groote-kerk",
      kicker: "Dutch Colonial Church",
      title: "Dutch Reformed Church (Groote Kerk)",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Dutch Reformed Church in Galle, locally known as the Groote Kerk, meaning “Great Church,” is one of the most significant and well-preserved examples of Dutch colonial architecture in Sri Lanka.",
        },

        {
          type: "h3",
          text: "History and Significance",
        },

        {
          type: "p",
          text: "<strong>Location:</strong> The church stands on the highest point within Galle Fort near the main entrance.",
        },

        {
          type: "p",
          text: "<strong>Construction:</strong> The present structure was completed in 1755 during Dutch rule and is believed to be the third church building serving the Dutch Reformed congregation inside the fort.",
        },

        {
          type: "p",
          text: "<strong>Significance:</strong> It remains one of the oldest Protestant churches still in continuous use in Sri Lanka.",
        },

        {
          type: "p",
          text: "<strong>Origin Story:</strong> The church was funded by the Dutch Commandeur of Galle, Casparus de Jong, and his wife as a thanksgiving offering for the birth of their daughter.",
        },

        {
          type: "split-paragraph",
          heading: "Architectural Features",
          headingLevel: "h4",

          paragraphs: [
            "The church reflects the Dutch Doric architectural style of the 18th century.",
            "One of its most unusual features is the floor paved with gravestones taken from the old Dutch cemetery, many of which contain Dutch inscriptions commemorating colonial officials and settlers.",
            "Other notable elements include an elaborately carved baroque pulpit made from local woods such as calamander and satinwood, a high vaulted ceiling originally painted blue with golden stars, and memorial plaques dedicated to prominent Dutch families.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Galle/religious2.webp`,
          imageAlt: "Dutch Reformed Church inside Galle Fort",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "The church also contains a rare organ placed in a decorated gallery above the entrance.",
        },

        {
          type: "p",
          text: "Its detached bell tower, or belfry, stands separately across the street and dates back to 1701.",
        },

        {
          type: "h3",
          text: "Visitor Experience",
        },

        {
          type: "p",
          text: "Visitors are generally welcome to walk inside and admire the architecture, gravestone floor, and carved woodwork.",
        },

        {
          type: "p",
          text: "The church’s restoration in the early 2000s received a UNESCO Asia Pacific Heritage Award for conservation work.",
        },

        {
          type: "p",
          text: "It also famously survived the 2004 Indian Ocean tsunami due to its elevated position and the protection offered by the fort walls.",
        },

        {
          type: "button",
          label: "View Groote Kerk on Google Maps",
          href: "https://www.google.com/maps?q=26H8%2B7R%20Galle%2C%20Sri%20Lanka",
        },
      ],
    },

    {
      type: "text",
      id: "meeran-jumma-mosque",
      kicker: "Historic Mosque",
      title: "Meeran Jumma Mosque",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Meeran Jumma Mosque, often called the Galle Fort Mosque, is one of the most recognizable religious landmarks within Galle Fort.",
        },

        {
          type: "h3",
          text: "Location and Architecture",
        },

        {
          type: "p",
          text: "<strong>Location:</strong> The mosque stands at the corner of Leyn Baan Street and Rampart Street, close to the fort ramparts and lighthouse.",
        },

        {
          type: "p",
          text: "<strong>Architectural Style:</strong> The building is known for its distinctive blend of Victorian and Baroque colonial architecture combined with Islamic details such as minarets, a dome, and Arabic inscriptions.",
        },

        {
          type: "split-paragraph",
          heading: "History of the Mosque",
          headingLevel: "h4",

          paragraphs: [
            "The current two-storey structure was commissioned and completed in 1904 by Ahamed Haji Ismail.",
            "Although the present building dates to the early 20th century, historical records suggest that a mosque existed on the site since at least the Dutch period in the mid-18th century.",
            "The mosque reflects the long-standing presence of Muslim Moor traders in Galle.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Galle/religious3.webp`,
          imageAlt: "Meeran Jumma Mosque in Galle Fort",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "<strong>Name:</strong> The mosque is named after Meeran Saheb, a revered Sufi saint associated with sailors and traders traveling to and from Sri Lanka.",
        },

        {
          type: "p",
          text: "<strong>Jumma Masjid:</strong> The term means “Friday Mosque,” indicating its importance for congregational Friday prayers.",
        },

        {
          type: "h3",
          text: "Visitor Information",
        },

        {
          type: "p",
          text: "As an active place of worship, visitors should dress modestly, covering shoulders and knees, and remove shoes before entering prayer areas.",
        },

        {
          type: "button",
          label: "View Meeran Jumma Mosque on Google Maps",
          href: "https://www.google.com/maps?q=26Q5%2B5R%20Galle%2C%20Sri%20Lanka",
        },
      ],
    },

    {
      type: "text",
      id: "all-saints-church",
      kicker: "Anglican Church",
      title: "All Saints' Church",
      align: "left",

      content: [
        {
          type: "p",
          text: "All Saints’ Church is a historic Anglican church located within the walls of Galle Fort and represents the influence of the British colonial period.",
        },

        {
          type: "h3",
          text: "History and Establishment",
        },

        {
          type: "p",
          text: "<strong>Location:</strong> The church stands at the junction of Church Street and Church Cross Street inside Galle Fort.",
        },

        {
          type: "p",
          text: "<strong>Foundation:</strong> The foundation stone was laid in 1868, and the church was officially consecrated in 1871.",
        },

        {
          type: "p",
          text: "<strong>Architectural Style:</strong> The building is an example of Gothic Revival architecture, popular during the British colonial era.",
        },

        {
          type: "split-paragraph",
          heading: "Design Features",
          headingLevel: "h4",

          paragraphs: [
            "The church includes classic Gothic architectural elements such as pointed arches, high ceilings, stained glass windows, and wooden furnishings.",
            "Inside, visitors can also see plaques dedicated to British residents connected to the fort during the colonial period.",
            "The structure adds another layer to the multi-religious heritage of Galle Fort.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Galle/religious4.webp`,
          imageAlt: "All Saints' Church inside Galle Fort",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Historical Context",
        },

        {
          type: "p",
          text: "The site where the church stands is believed to have once been the location of the gallows during the Dutch colonial period, when the surrounding area functioned as a courthouse.",
        },

        {
          type: "h3",
          text: "Visitor Information",
        },

        {
          type: "p",
          text: "The church is generally open to visitors outside of active services. Guests are encouraged to maintain respectful quietness and dress appropriately.",
        },

        {
          type: "button",
          label: "View All Saints' Church on Google Maps",
          href: "https://www.google.com/maps?q=26H8%2B2X8%2C%20Church%20St%2C%20Galle%2080000%2C%20Sri%20Lanka",
        },
      ],
    },
  ],
};

export default ReligiousAndCulturalSitesArticle;