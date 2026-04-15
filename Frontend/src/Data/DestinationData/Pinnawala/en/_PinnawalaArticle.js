const PinnawalaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Pinnawala" },
  ],

  hero: {
    kicker: "Sabaragamuwa Province",
    title: "Pinnawala & Millennium Elephant Foundation",
    subtitle:
      "A major center for elephant care in Sri Lanka, combining conservation efforts, tourism, and ongoing debates around animal welfare.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Pinnawala/pinnawala-hero.jpg`,
  },

  overview: {
    kicker: "Overview",
    title: "Elephant Care, Conservation, and Tourism",
    paragraphs: [
      "Pinnawala is one of Sri Lanka’s most well-known wildlife attractions, centered around the Pinnawala Elephant Orphanage. Established to care for orphaned and injured elephants, it has grown into a large facility that combines conservation work with tourism. :contentReference[oaicite:0]{index=0}",
      "Nearby, the Millennium Elephant Foundation offers an alternative, smaller-scale approach focused on rehabilitation and welfare. Together, these two locations provide different perspectives on elephant care in Sri Lanka. :contentReference[oaicite:1]{index=1}",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history",
      kicker: "History",
      title: "The Origins of Pinnawala Elephant Orphanage",
      align: "left",
      paragraphs: [
        "The Pinnawala Elephant Orphanage was established in 1975 by the Sri Lanka Department of Wildlife Conservation. It was created as a sanctuary for orphaned and abandoned elephants, many of which had lost their mothers due to natural causes or human-elephant conflict. :contentReference[oaicite:2]{index=2}",
        "The facility began with just five baby elephants and was later relocated to its current site near the Maha Oya river. Management was transferred to the National Zoological Gardens in 1978, and a captive breeding program was introduced in 1982, with the first birth recorded in 1984. :contentReference[oaicite:3]{index=3}",
        "Over time, the orphanage developed into one of the largest centers for captive elephants in the world, with multiple generations living within the herd. :contentReference[oaicite:4]{index=4}",
      ],
    },

    {
      type: "text",
      id: "today",
      kicker: "Present Day",
      title: "Elephant Care and Visitor Experience",
      align: "left",
      content: [
        {
          type: "p",
          text: "Today, Pinnawala is home to a large herd of captive Asian elephants, typically numbering between 70 and 90 animals. The facility provides food, medical care, and daily management for elephants that would not survive independently in the wild. :contentReference[oaicite:5]{index=5}",
        },
        {
          type: "p",
          text: "Tourism plays a central role in funding the orphanage, supporting the high daily costs of feeding, healthcare, and staff. Visitors are drawn to structured activities that showcase the elephants and their daily routines. :contentReference[oaicite:6]{index=6}",
        },
        {
          type: "split-paragraph",
          heading: "Bathing and Feeding Routines",
          headingLevel: "h4",
          paragraphs: [
            "One of the most recognizable experiences at Pinnawala is watching the herd walk to the Maha Oya river for their twice-daily bath. This procession has become one of the most photographed and memorable aspects of a visit.",
            "Visitors can also observe feeding sessions, including bottle-feeding for young calves that require additional care, providing a closer view of elephant behavior and management.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Pinnawala/elephant-bathing.jpg`,
          imageAlt: "Elephants bathing in the river at Pinnawala",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "ethics",
      kicker: "Considerations",
      title: "Welfare and Ethical Discussions",
      align: "left",
      paragraphs: [
        "Pinnawala has been the subject of ongoing discussion regarding animal welfare. One of the main concerns is that elephants raised or kept at the orphanage are generally not released back into the wild, as they become dependent on human care. :contentReference[oaicite:7]{index=7}",
        "There has also been criticism related to practices such as chaining certain elephants for safety reasons and the structured nature of visitor interactions, which some view as being designed primarily for tourism. :contentReference[oaicite:8]{index=8}",
        "These discussions reflect a broader global debate about balancing conservation, education, and tourism in wildlife facilities.",
      ],
    },

    {
      type: "text",
      id: "mef",
      kicker: "Alternative",
      title: "Millennium Elephant Foundation",
      align: "left",
      content: [
        {
          type: "p",
          text: "The Millennium Elephant Foundation (MEF), located nearby, offers a different model of elephant care. Established in 1999 as a non-profit organization, it focuses on rescuing and rehabilitating mistreated, elderly, or sick elephants. :contentReference[oaicite:9]{index=9}",
        },
        {
          type: "p",
          text: "With a smaller number of elephants, the foundation emphasizes individual care and aims to provide a more natural and less intensive environment compared to larger facilities. :contentReference[oaicite:10]{index=10}",
        },
        {
          type: "split-paragraph",
          heading: "Visitor Experience and Interaction",
          headingLevel: "h4",
          paragraphs: [
            "Visitors at MEF can take part in guided experiences such as walking alongside elephants, assisting with bathing in the river, and feeding them under supervision. These interactions are designed to be more controlled and educational.",
            "The foundation also promotes awareness through talks, a small museum, and volunteer programs, focusing on the long-term welfare of captive elephants.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Pinnawala/mef-elephants.jpg`,
          imageAlt: "Elephants at Millennium Elephant Foundation",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "visit",
      kicker: "Visiting",
      title: "Experience and Practical Notes",
      align: "left",
      paragraphs: [
        "Both Pinnawala and the Millennium Elephant Foundation rely heavily on tourism revenue to support their operations, including food, veterinary care, and staff costs. Visitors play a direct role in sustaining these facilities.",
        "At the Millennium Elephant Foundation, it is also possible to enjoy a traditional Sri Lankan meal on-site, providing an additional way to support the organization while experiencing local cuisine.",
        "Together, these locations offer insight into elephant care in Sri Lanka, highlighting both the scale of conservation efforts and the evolving perspectives on ethical wildlife tourism.",
      ],
    },
  ],
};

export default PinnawalaArticle;