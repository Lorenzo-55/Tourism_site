const GampahaSmartCityProgrammeArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Gampaha", to: "/places/gampaha" },
    { label: "Gampaha Smart City Programme" },
  ],

  hero: {
    kicker: "Urban Development",
    title: "Gampaha Smart City Programme",
    subtitle:
      "A long-term initiative focused on sustainable urbanization, digital governance, climate resilience, and modern infrastructure development.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Gampaha/smartcity1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Transforming Gampaha into a Smart City",
    paragraphs: [
      "The Gampaha Smart City Programme is an initiative led by the Sri Lankan government through the Urban Development Authority (UDA), together with international and private-sector partners.",
      "The programme aims to transform Gampaha into a sustainable, technology-enabled, and highly livable urban center while serving as a model for future smart city development in Sri Lanka.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "vision-and-goals",
      kicker: "Urban Vision",
      title: "Vision and Goals",
      align: "left",

      content: [
        {
          type: "p",
          text: "The long-term vision for Gampaha is described as creating “The Flourishing Green Capital of Siyane” through planned and sustainable urbanization.",
        },

        {
          type: "p",
          text: "The programme integrates Information and Communication Technologies (ICT) and innovative urban planning solutions into city infrastructure and public services.",
        },

        {
          type: "p",
          text: "The project is also intended to demonstrate how an existing Sri Lankan city can evolve into a modern smart city aligned with the national goal of building a technology-based society.",
        },

        {
          type: "split-paragraph",
          heading: "Strategic Interventions",
          headingLevel: "h4",

          paragraphs: [
            "The Smart Gampaha Planning Framework identifies three major strategic areas for development.",
            "<strong>Transport-Oriented Development (TOD):</strong> Improving transportation systems, reducing traffic congestion, and strengthening public connectivity.",
            "<strong>Transparent and Effective Administrative Services:</strong> Using digital systems to improve efficiency, transparency, and service delivery for citizens and businesses.",
            "<strong>Quality Living Environment Development:</strong> Expanding infrastructure, public amenities, and climate resilience to improve overall quality of life.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Gampaha/smartcity2.webp`,
          imageAlt: "Urban planning and transport development in Gampaha",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "key-focus-areas",
      kicker: "Development Strategy",
      title: "Key Focus Areas",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Gampaha Smart City Programme follows a holistic development approach that addresses environmental, economic, and social needs together.",
        },

        {
          type: "h3",
          text: "Climate Sustainability",
        },

        {
          type: "p",
          text: "The project includes a Climate Sustainability Framework and Adaptation Roadmap focused on reducing the city’s vulnerability to climate change.",
        },

        {
          type: "p",
          text: "Particular attention is given to flooding issues through improved drainage systems, urban planning strategies, and infrastructure upgrades.",
        },

        {
          type: "h3",
          text: "Economic Revitalization",
        },

        {
          type: "p",
          text: "The programme aims to revitalize Gampaha’s urban economy by strengthening the city core and encouraging new investment opportunities.",
        },

        {
          type: "p",
          text: "Its role as a regional administrative center is expected to support future commercial growth and economic activity.",
        },

        {
          type: "split-paragraph",
          heading: "Green and Digital Initiatives",
          headingLevel: "h4",

          paragraphs: [
            "<strong>Green Initiatives:</strong> Environmental projects such as the “Adopt-A-Tree” campaign aim to increase urban greenery and promote sustainable development.",
            "These projects are implemented together with the Municipal Council and local organizations.",
            "<strong>Digital Governance:</strong> Technologies such as the Internet of Things (IoT), Artificial Intelligence (AI), and Geographic Information Systems (GIS) are planned for use in city management.",
            "These systems are intended to improve traffic control, optimize resource use, and modernize public administration services.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Gampaha/smartcity3.webp`,
          imageAlt: "Digital governance and smart city technology in Gampaha",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "collaboration-and-management",
      kicker: "Implementation",
      title: "Collaboration and Management",
      align: "left",

      content: [
        {
          type: "p",
          text: "The programme is implemented through collaboration between the Urban Development Authority (UDA), the Good City Foundation (GCF), and the MG Group of Companies.",
        },

        {
          type: "p",
          text: "This partnership represents a public-private collaboration model focused on long-term urban modernization and sustainable development.",
        },

        {
          type: "p",
          text: "The Gampaha Smart City Programme remains one of Sri Lanka’s most notable ongoing initiatives aimed at integrating sustainability, technology, infrastructure, and urban planning into a single development framework.",
        },
      ],
    },
  ],
};

export default GampahaSmartCityProgrammeArticle;