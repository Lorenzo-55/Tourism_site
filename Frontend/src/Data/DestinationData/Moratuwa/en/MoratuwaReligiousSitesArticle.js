const MoratuwaReligiousSitesArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Moratuwa", to: "/places/moratuwa" },
    { label: "Religious Sites" },
  ],

  hero: {
    kicker: "Religious Heritage",
    title: "Religious Sites",
    subtitle:
      "Historic churches, colonial-era architecture, and centuries of Christian heritage woven into the cultural identity of Moratuwa.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Moratuwa/religious-sites/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Colonial-Era Churches and Community Heritage",
    paragraphs: [
      "Moratuwa is home to some of Sri Lanka’s most historically significant Christian landmarks, reflecting the city’s strong Anglican and Catholic traditions.",
      "From towering Gothic churches to long-standing parish communities, these religious sites preserve centuries of architecture, worship, philanthropy, and local history.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "holy-emmanuel-church",
      kicker: "Anglican Heritage",
      title: "Holy Emmanuel Church",
      align: "left",

      content: [
        {
          type: "p",
          text: "Holy Emmanuel Church is one of Moratuwa’s most famous colonial-era landmarks and one of the most historically significant Anglican churches in Sri Lanka.",
        },

        {
          type: "p",
          text: "The church was officially consecrated on December 27, 1860, although the site itself had already been used for religious services for many decades before the present structure was built.",
        },

        {
          type: "split-paragraph",
          heading: "History and Philanthropy",
          headingLevel: "h4",

          paragraphs: [
            "The construction of the church was heavily supported by Gate Mudaliyar Jeronis de Soysa and his brother, both known for their philanthropy and influence during the colonial period.",
            "Jeronis de Soysa had originally been associated with Buddhist monastic traditions before later embracing Christianity.",
            "The site previously contained earlier Dutch-era and Anglican church structures dating back to the 17th and early 19th centuries.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Moratuwa/religious-sites/holy-emmanuel.webp`,
          imageAlt: "Holy Emmanuel Church in Moratuwa",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "holy-emmanuel-architecture",
      kicker: "Architecture",
      title: "Victorian Gothic Architecture",
      align: "left",

      content: [
        {
          type: "p",
          text: "The church was designed by Major Thomas Skinner of the Public Works Department in a striking Victorian Gothic architectural style.",
        },

        {
          type: "p",
          text: "<strong>Bell Tower:</strong> The entrance tower rises approximately 37 meters (120 feet), once making it one of the tallest structures in the country and a major landmark in Moratuwa.",
        },

        {
          type: "p",
          text: "<strong>Interior Design:</strong> The nave features a roof supported by six arches, while imported stained-glass windows from England add to the church’s historic atmosphere.",
        },

        {
          type: "p",
          text: "<strong>Community Role:</strong> Holy Emmanuel Church historically served one of the largest Anglican communities in Sri Lanka and remains an active spiritual and social center today.",
        },

        {
          type: "button",
          label: "View Holy Emmanuel Church on Google Maps",
          href: "https://www.google.com/maps?q=6.785091367152064,79.88654329503534",
        },
      ],
    },

    {
      type: "text",
      id: "st-sebastians-church",
      kicker: "Catholic Heritage",
      title: "St. Sebastian’s Church",
      align: "left",

      content: [
        {
          type: "p",
          text: "St. Sebastian’s Church in Kandawala is one of the oldest and most important Catholic churches in the Moratuwa area.",
        },

        {
          type: "p",
          text: "The church reflects Moratuwa’s long-standing identity as one of Sri Lanka’s strongest Catholic communities.",
        },

        {
          type: "split-paragraph",
          heading: "Origins and Construction",
          headingLevel: "h4",

          paragraphs: [
            "The site had already been used for Catholic worship for centuries before the current structure was built.",
            "Construction of the grand church began under Rev. Fr. Benedict Bondoni, an Italian missionary who arrived in 1861.",
            "Although Fr. Bondoni died before the church was completed, the project was continued by Rev. Fr. Aloysius Maver, and the church was officially blessed in 1875.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Moratuwa/religious-sites/st-sebastians.webp`,
          imageAlt: "St. Sebastian’s Church in Moratuwa",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "st-sebastians-feast",
      kicker: "Tradition & Community",
      title: "Annual Feast and Religious Traditions",
      align: "left",

      content: [
        {
          type: "p",
          text: "The church is dedicated to Saint Sebastian, the Christian martyr traditionally invoked for protection against disease and epidemics.",
        },

        {
          type: "p",
          text: "<strong>Architecture:</strong> The structure is large and imposing, reflecting colonial-era Catholic church design traditions built to serve Moratuwa’s growing congregation.",
        },

        {
          type: "p",
          text: "<strong>Flag Mast:</strong> One of the church’s most recognizable features is its massive ceremonial flag mast, often raised collectively by parishioners before the annual feast.",
        },

        {
          type: "p",
          text: "<strong>Annual Feast:</strong> The Feast of St. Sebastian is celebrated every January and includes masses, processions, lights, community gatherings, and charitable food distribution.",
        },

        {
          type: "split-paragraph",
          heading: "A Living Religious Landmark",
          headingLevel: "h4",

          paragraphs: [
            "During the feast season, the surrounding village is decorated with lights and religious banners.",
            "Large processions carry the statue of Saint Sebastian through the streets while devotees gather for prayer and celebration.",
            "The church remains one of Moratuwa’s most important spiritual landmarks and a central part of local identity.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Moratuwa/religious-sites/st-sebastians-feast.webp`,
          imageAlt: "Annual feast celebrations at St. Sebastian’s Church",
          mediaPosition: "right",
        },

        {
          type: "button",
          label: "View St. Sebastian’s Church on Google Maps",
          href: "https://www.google.com/maps?q=6.774278179819484,79.8831648661996",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Visiting the Churches",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Respectful Conduct:</strong> Both churches are active places of worship, so visitors should remain quiet and respectful during services and prayer times.",
        },

        {
          type: "p",
          text: "<strong>Dress Code:</strong> Modest clothing is recommended when entering church premises.",
        },

        {
          type: "p",
          text: "<strong>Photography:</strong> Photography is usually permitted outside, though visitors should be considerate when taking photos inside during religious services.",
        },

        {
          type: "p",
          text: "<strong>Best Time to Visit:</strong> Weekday mornings and afternoons are generally quieter, while Sundays and feast days can be much busier.",
        },

        {
          type: "p",
          text: "Together, Holy Emmanuel Church and St. Sebastian’s Church showcase the deep religious diversity and colonial-era heritage that continue to shape Moratuwa today.",
        },
      ],
    },
  ],
};

export default MoratuwaReligiousSitesArticle;