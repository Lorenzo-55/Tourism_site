const KalutaraDivingAndSnorkelingArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Kalutara", to: "/places/kalutara" },
    { label: "Diving and Snorkeling" },
  ],

  hero: {
    kicker: "Marine Activities",
    title: "Diving and Snorkeling",
    subtitle:
      "Seasonal reef diving, snorkeling boat trips, coral gardens, wreck sites, and relaxed underwater experiences along the Kalutara coast.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kalutara/diving-and-snorkeling/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Underwater Experiences Around Kalutara",
    paragraphs: [
      "Kalutara offers enjoyable diving and snorkeling opportunities during the west coast dry season, when the sea is calmer and underwater visibility improves.",
      "Compared with busier diving destinations further south, Kalutara provides a quieter and more relaxed base for reef exploration, snorkeling trips, and seasonal dive excursions.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "best-time",
      kicker: "Season",
      title: "Best Time for Diving and Snorkeling",
      align: "left",

      content: [
        {
          type: "p",
          text: "The diving and snorkeling season in Kalutara follows the dry-season pattern of Sri Lanka’s west and south coasts.",
        },

        {
          type: "split-paragraph",
          heading: "Peak Season Conditions",
          headingLevel: "h4",

          paragraphs: [
            "<strong>Peak Season:</strong> November to April is the best period for diving and snorkeling around Kalutara.",
            "<strong>Conditions:</strong> During this season, the sea is usually calmer, the weather is sunnier, and underwater visibility can range from around 10 to 25 meters.",
            "<strong>Off-Season:</strong> May to September is generally best avoided because the southwest monsoon brings rougher seas and reduced visibility.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/diving-and-snorkeling/kalutara-coast.webp`,
          imageAlt: "Calm coastal waters near Kalutara during diving season",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "diving-highlights",
      kicker: "Dive Sites",
      title: "Diving and Snorkeling Highlights",
      align: "left",

      content: [
        {
          type: "p",
          text: "Kalutara’s underwater experience is generally quieter than more famous southern coast locations such as Hikkaduwa or Unawatuna.",
        },

        {
          type: "p",
          text: "<strong>Reef Diving:</strong> Dive sites around the Kalutara coast may include coral gardens, tropical fish, sea turtles, and other marine life.",
        },

        {
          type: "p",
          text: "<strong>Wreck Diving:</strong> Several wrecks along this part of the Sri Lankan coast have become artificial reefs, offering interesting sites for certified divers.",
        },

        {
          type: "split-paragraph",
          heading: "Snorkeling by Boat",
          headingLevel: "h4",

          paragraphs: [
            "Snorkeling is usually centered around shallower reef areas reached by boat.",
            "Local operators and hotel-based watersports providers can arrange short trips to the most suitable snorkeling locations depending on sea conditions.",
            "The best visibility and safest conditions are usually found during the main dry season.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kalutara/diving-and-snorkeling/snorkeling.webp`,
          imageAlt: "Snorkeling near reef areas off the Kalutara coast",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "operators-and-services",
      kicker: "Planning",
      title: "Operators and Dive Services",
      align: "left",

      content: [
        {
          type: "p",
          text: "Kalutara is a quieter coastal base, so some dive services may operate from nearby beach areas such as Bentota or other southern coast towns during the high season.",
        },

        {
          type: "p",
          text: "Reputable dive centers may offer hotel pickup, seasonal excursions, reef dives, wreck dives, and beginner-friendly programs.",
        },

        {
          type: "p",
          text: "<strong>PADI-Certified Centers:</strong> During the peak season, visitors can usually find certified operators offering beginner and certified-diver services.",
        },

        {
          type: "p",
          text: "<strong>Discover Scuba Diving:</strong> Introductory programs are available for absolute beginners who want to try diving under supervision.",
        },

        {
          type: "p",
          text: "<strong>Certification Courses:</strong> Some operators offer PADI Open Water, Advanced, and other training courses.",
        },

        {
          type: "p",
          text: "<strong>Fun Dives:</strong> Certified divers can join guided reef or wreck dives depending on weather and visibility.",
        },

        {
          type: "p",
          text: "<strong>Snorkeling Trips:</strong> Dive centers and hotel watersports desks can arrange short boat trips to suitable reef areas.",
        },
      ],
    },
  ],
};

export default KalutaraDivingAndSnorkelingArticle;