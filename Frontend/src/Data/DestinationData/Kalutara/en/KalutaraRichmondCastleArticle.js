const KalutaraRichmondCastleArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Kalutara", to: "/places/kalutara" },
    { label: "Richmond Castle" },
  ],

  hero: {
    kicker: "Colonial Landmark",
    title: "Richmond Castle",
    subtitle:
      "An elegant Edwardian mansion overlooking the Kalu Ganga, blending colonial luxury, engineering innovation, and a deeply personal history.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kalutara/richmond-castle/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Mansion of Grandeur and Tragedy",
    paragraphs: [
      "Richmond Castle is one of Sri Lanka’s most remarkable colonial-era mansions, located on a hill in Palatota near Kalutara.",
      "Built during the early 20th century by a wealthy Mudaliyar, the estate combines British, Indian, and local influences while overlooking the Kalu Ganga River and surrounding countryside.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history",
      kicker: "History",
      title: "The Story of Richmond Castle",
      align: "left",

      content: [
        {
          type: "p",
          text: "Richmond Castle was constructed by Mudaliyar Don Arthur de Silva Wijesinghe Siriwardena, an influential landowner and philanthropist during the British colonial period.",
        },

        {
          type: "p",
          text: "The title of Mudaliyar was granted by the British Crown and represented one of the highest local honors during colonial rule.",
        },

        {
          type: "split-paragraph",
          heading: "Inspired by Indian Royalty",
          headingLevel: "h3",

          paragraphs: [
            "The mansion was inspired by the palace of the Maharaja of Ramnad in India, who had been a schoolmate of the Mudaliyar.",
            "Its architecture combines Eastern and Western influences, resulting in one of the most distinctive aristocratic residences in Sri Lanka.",
            "The castle was built on a vast 42-acre estate overlooking the Kalu Ganga River near Kalutara.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/richmond-castle/exterior.webp`,
          imageAlt: "Exterior of Richmond Castle",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "architecture",
      kicker: "Architecture",
      title: "An Architectural Fusion",
      align: "left",

      content: [
        {
          type: "p",
          text: "Richmond Castle is known for its unique blend of British Edwardian, Indian, and Gothic architectural influences.",
        },

        {
          type: "h3",
          text: "Imported Materials and Craftsmanship",
        },

        {
          type: "p",
          text: "Many of the mansion’s materials and decorative elements were imported from overseas during construction.",
        },

        {
          type: "p",
          text: "<strong>Burmese Teak:</strong> Used for the grand spiral staircase and carved wooden pillars.",
        },

        {
          type: "p",
          text: "<strong>Italian Tiles:</strong> Imported floor tiles added elegance to the interior spaces.",
        },

        {
          type: "p",
          text: "<strong>Scottish Glass:</strong> Decorative stained-glass windows were brought from Scotland.",
        },

        {
          type: "p",
          text: "<strong>English Ironwork:</strong> Iron fixtures and fittings were imported from England.",
        },

        {
          type: "split-paragraph",
          heading: "Engineering Innovations",
          headingLevel: "h3",

          paragraphs: [
            "The mansion incorporated sophisticated engineering techniques that were highly advanced for the period.",
            "Small openings beneath the ballroom floor connected to underground ducts that carried cool air from the nearby Kalu Ganga, functioning as a natural air-conditioning system.",
            "The bedrooms were designed with thick soundproof walls that also helped maintain cooler indoor temperatures in the tropical climate.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/richmond-castle/interior.webp`,
          imageAlt: "Interior architecture of Richmond Castle",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "tragic-legacy",
      kicker: "Legacy",
      title: "A Tragic Personal Story",
      align: "left",

      content: [
        {
          type: "p",
          text: "Despite its grandeur, Richmond Castle is closely tied to a tragic personal story involving the Mudaliyar and his wife, Clarice Matilda Maude Suriyabandara.",
        },

        {
          type: "p",
          text: "The couple were unable to have children, which reportedly caused deep heartbreak and eventually contributed to the breakdown of their marriage.",
        },

        {
          type: "split-paragraph",
          heading: "The Garden Statues",
          headingLevel: "h3",

          paragraphs: [
            "The statues of children placed within the front gardens are associated with local stories surrounding the couple’s longing for a family.",
            "According to local tradition, the statues were positioned so they could be viewed from the main bedroom windows.",
            "These details contribute to the emotional atmosphere and folklore surrounding the mansion today.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/richmond-castle/gardens.webp`,
          imageAlt: "Gardens and statues at Richmond Castle",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "philanthropy",
      kicker: "Philanthropy",
      title: "A Legacy of Charity",
      align: "left",

      content: [
        {
          type: "p",
          text: "Before his death in 1947, the Mudaliyar donated the mansion and much of his wealth to the Public Trustee of Sri Lanka.",
        },

        {
          type: "p",
          text: "His wish was for the estate to become a home and educational center for underprivileged children.",
        },

        {
          type: "p",
          text: "This act of philanthropy transformed Richmond Castle from a private aristocratic residence into a place associated with education and community support.",
        },
      ],
    },
    {
    type: "text",
    id: "visitor-information",
    kicker: "Visitor Information",
    title: "Visiting Richmond Castle",
    align: "left",

    content: [
        {
        type: "p",
        text: "<strong>Location:</strong> Richmond Castle is located in Palatota, a few kilometers from Kalutara town, overlooking the Kalu Ganga River.",
        },

        {
        type: "p",
        text: "<strong>Opening Hours:</strong> Generally open daily from 9:00 AM to 4:00 PM.",
        },

        {
        type: "p",
        text: "<strong>What to Explore:</strong> Visitors can walk through the mansion’s halls, view the imported furnishings and decorative details, and explore the spacious gardens surrounding the estate.",
        },

        {
        type: "p",
        text: "Local guides are often available to explain the history, architecture, and folklore associated with the castle.",
        },

        {
        type: "button",
        label: "View on Google Maps",
        href: "https://www.google.com/maps?q=6.601776605050132,79.97530263736301",
        },
    ],
    },
  ],
};

export default KalutaraRichmondCastleArticle;