const MoratuwaUniversityOfMoratuwaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Moratuwa", to: "/places/moratuwa" },
    { label: "University of Moratuwa" },
  ],

  hero: {
    kicker: "Education & Innovation",
    title: "University of Moratuwa",
    subtitle:
      "Sri Lanka’s leading technological university, known for engineering, architecture, information technology, research, and its lakeside campus beside Bolgoda Lake.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Moratuwa/university-of-moratuwa/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Leading Center for Technology and Applied Sciences",
    paragraphs: [
      "The University of Moratuwa, often known as UoM, is one of Sri Lanka’s premier higher education institutions and is especially recognized for engineering, architecture, information technology, and applied sciences.",
      "Located in Katubedda beside Bolgoda Lake, the university is both an important academic landmark in Moratuwa and a major contributor to Sri Lanka’s technological and professional development.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "key-facts",
      kicker: "Key Facts",
      title: "Sri Lanka’s Technological University",
      align: "left",

      content: [
        {
          type: "p",
          text: "The University of Moratuwa is widely regarded as the country’s leading institution for technological higher education.",
        },

        {
          type: "p",
          text: "Its academic focus is strongly connected to high-demand professional fields such as engineering, architecture, information technology, management, medicine, and research.",
        },

        {
          type: "split-paragraph",
          heading: "Campus Setting and Origins",
          headingLevel: "h4",

          paragraphs: [
            "The main campus is located in Katubedda, Moratuwa, overlooking the scenic Bolgoda Lake.",
            "Its historical roots can be traced back to the Government Technical School established in Colombo in 1893.",
            "The institution officially gained university status in 1978, becoming one of Sri Lanka’s most important centers for technology-focused education.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Moratuwa/university-of-moratuwa/campus.webp`,
          imageAlt: "University of Moratuwa campus near Bolgoda Lake",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "<strong>Employability:</strong> Graduates from UoM are highly sought after, reflecting the university’s practical, industry-focused training and strong reputation among employers.",
        },
      ],
    },

    {
      type: "text",
      id: "faculties",
      kicker: "Academic Focus",
      title: "Faculties and Fields of Study",
      align: "left",

      content: [
        {
          type: "p",
          text: "The University of Moratuwa has a strong academic profile centered on technology, design, applied science, and professional education.",
        },

        {
          type: "p",
          text: "<strong>Faculty of Engineering:</strong> The largest and most famous faculty, offering fields such as civil, electrical, mechanical, and transport and logistics engineering. Many programs are internationally accredited.",
        },

        {
          type: "p",
          text: "<strong>Faculty of Architecture:</strong> A major center for architecture, town and country planning, and facilities management education in Sri Lanka.",
        },

        {
          type: "p",
          text: "<strong>Faculty of Information Technology:</strong> Focuses on computer science, information technology, artificial intelligence, computational mathematics, and related advanced fields.",
        },

        {
          type: "p",
          text: "<strong>Faculty of Business:</strong> Covers management, business, and technology-related commerce.",
        },

        {
          type: "p",
          text: "<strong>Faculty of Graduate Studies:</strong> Supports postgraduate degrees, advanced research, and academic development.",
        },

        {
          type: "p",
          text: "<strong>Faculty of Medicine:</strong> A newer addition that expands the university’s academic scope into medical and clinical sciences.",
        },
      ],
    },

    {
      type: "text",
      id: "achievements",
      kicker: "Reputation",
      title: "Research, Innovation, and Alumni",
      align: "left",

      content: [
        {
          type: "p",
          text: "The university is known for research, innovation, and close links with industry and national development projects.",
        },

        {
          type: "split-paragraph",
          heading: "A Practical and Industry-Focused Institution",
          headingLevel: "h4",

          paragraphs: [
            "UoM graduates have contributed to engineering, architecture, information technology, public service, academia, and national infrastructure development.",
            "The university has produced influential professionals, pioneering engineers, academics, and public figures across Sri Lanka.",
            "Its research culture and industry collaborations make it one of the country’s most important institutions for technological progress.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Moratuwa/university-of-moratuwa/innovation.webp`,
          imageAlt: "Research and innovation at the University of Moratuwa",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "<strong>Global Recognition:</strong> The university is especially recognized for specialized fields such as engineering, architecture, and computer science.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Visiting the University Area",
      align: "left",

      content: [
        {
          type: "p",
          text: "The University of Moratuwa is an active academic campus, so visitors cannot freely wander through academic buildings without permission.",
        },

        {
          type: "p",
          text: "<strong>Location:</strong> Katubedda, Moratuwa, beside Bolgoda Lake.",
        },

        {
          type: "p",
          text: "<strong>Boat Yard Area:</strong> The university’s lakeside area near Bolgoda Lake can be an interesting sight, especially for those curious about the campus setting and its relationship with the lake.",
        },

        {
          type: "p",
          text: "<strong>Nearby Context:</strong> The campus can be viewed as part of the wider Moratuwa landscape, close to Bolgoda Lake, residential neighborhoods, and important transport routes.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.795308702200998,79.90082407969287",
        },
      ],
    },
  ],
};

export default MoratuwaUniversityOfMoratuwaArticle;