const HikkaduwaHistoricalCulturalArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Hikkaduwa", to: "/places/hikkaduwa" },
    { label: "Historical and Cultural Sites" },
  ],

  hero: {
    kicker: "History & Culture",
    title: "Historical and Cultural Sites",
    subtitle:
      "Memorials, education centers, and places of reflection connected to Hikkaduwa’s recent history and community resilience.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/historical-cultural/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Places of Memory and Reflection",
    paragraphs: [
      "Hikkaduwa is best known for its beaches, coral reefs, and coastal atmosphere, but the area also holds important sites connected to Sri Lanka’s recent history.",
      "The Community Tsunami Education Center & Museum and Tsunami Honganji Vihara offer spaces for remembrance, education, and reflection on the 2004 Indian Ocean tsunami and the resilience of the communities affected by it.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "community-tsunami-education-center-museum",
      kicker: "Museum & Memorial",
      title: "Community Tsunami Education Center & Museum",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Community Tsunami Education Center & Museum in Hikkaduwa is an important memorial and educational site dedicated to the 2004 Indian Ocean tsunami.",
        },

        {
          type: "p",
          text: "It is a deeply moving place that helps visitors understand the scale of the disaster, the human stories behind it, and the recovery of the local community.",
        },

        {
          type: "split-paragraph",
          heading: "Memorial and Education",
          headingLevel: "h3",

          paragraphs: [
            "The museum provides a dedicated space for reflection, often displaying names of the deceased, survivor stories, recovered objects, and photographs from the disaster.",
            "It also explains the science behind tsunamis, how they form, and why disaster preparedness is essential for coastal communities.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/historical-cultural/tsunami-museum.webp`,
          imageAlt: "Community Tsunami Education Center and Museum in Hikkaduwa",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Key Aspects of the Center",
        },

        {
          type: "p",
          text: "<strong>Memorial and Reflection:</strong> The museum includes spaces for quiet remembrance of those who lost their lives in the tsunami.",
        },

        {
          type: "p",
          text: "<strong>Photographs and Artifacts:</strong> Exhibits include recovered items and powerful images documenting the events of December 26, 2004.",
        },

        {
          type: "p",
          text: "<strong>Personal Stories:</strong> Survivor accounts and local testimonies show the human impact of the disaster.",
        },

        {
          type: "p",
          text: "<strong>Science of Tsunamis:</strong> Educational displays explain the geology and formation of tsunamis.",
        },

        {
          type: "p",
          text: "<strong>Disaster Preparedness:</strong> The center teaches lessons about disaster management and how future catastrophes can be reduced through awareness and preparation.",
        },

        {
          type: "h3",
          text: "Visitor Information",
        },

        {
          type: "p",
          text: "<strong>Purpose:</strong> The center serves as both a memorial and an educational hub focused on the tsunami, its aftermath, and the community’s recovery.",
        },

        {
          type: "p",
          text: "<strong>Atmosphere:</strong> The experience is emotional and sobering, offering a strong contrast to Hikkaduwa’s usual beach and nightlife atmosphere.",
        },

        {
          type: "p",
          text: "<strong>Location Significance:</strong> The museum is located near areas heavily affected by the tsunami, making the visit especially impactful.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=539Q%2B88F%2C%20Galle%20Rd%2C%20Hikkaduwa%2C%20Sri%20Lanka",
        },
      ],
    },

    {
      type: "text",
      id: "tsunami-honganji-vihara",
      kicker: "Memorial Temple",
      title: "Tsunami Honganji Vihara",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Tsunami Honganji Vihara, often known as the Big Buddha Statue, is a peaceful memorial site near Hikkaduwa in the Peraliya area.",
        },

        {
          type: "p",
          text: "It was created as a tribute to the lives lost during the 2004 Indian Ocean tsunami and stands as a symbol of remembrance, resilience, and hope.",
        },

        {
          type: "split-paragraph",
          heading: "The Big Buddha Memorial",
          headingLevel: "h3",

          paragraphs: [
            "The statue stands approximately 30 meters high and depicts Lord Buddha in the Abhaya Mudra, a gesture symbolizing protection and fearlessness.",
            "It faces the ocean and serves as a solemn reminder of the devastation caused by the tsunami, especially the tragedy of the Queen of the Sea train nearby.",
            "The statue is a replica of the ancient Bamiyan Buddha statues in Afghanistan and was built in 2006 with support from Japanese donations.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Hikkaduwa/historical-cultural/tsunami-honganji-vihara.webp`,
          imageAlt: "Tsunami Honganji Vihara Big Buddha Statue near Hikkaduwa",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Key Facts",
        },

        {
          type: "p",
          text: "<strong>Memorial Purpose:</strong> The vihara honors the thousands of lives lost in the tsunami, including the many victims of the Queen of the Sea train disaster near Peraliya.",
        },

        {
          type: "p",
          text: "<strong>Big Buddha Statue:</strong> The standing Buddha statue is nearly 100 feet tall and is one of the largest standing Buddha statues in Sri Lanka.",
        },

        {
          type: "p",
          text: "<strong>Symbolism:</strong> The Abhaya Mudra represents protection, courage, and fearlessness.",
        },

        {
          type: "p",
          text: "<strong>Atmosphere:</strong> The temple grounds are calm and peaceful, offering space for contemplation, prayer, and remembrance.",
        },

        {
          type: "p",
          text: "<strong>Other Exhibits:</strong> The site may include a small museum or photo display showing the impact of the tsunami.",
        },

        {
          type: "h3",
          text: "Visitor Tips",
        },

        {
          type: "p",
          text: "<strong>Dress Code:</strong> Visitors should dress modestly with shoulders and knees covered.",
        },

        {
          type: "p",
          text: "<strong>Footwear:</strong> Shoes must be removed before approaching the statue and temple area.",
        },

        {
          type: "p",
          text: "<strong>Location:</strong> The vihara is located along Galle Road, around 5 to 7 minutes by tuk-tuk from the main Hikkaduwa beach area.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=537R%2B6MG%2C%20Peraliya%2C%20Sri%20Lanka",
        },
      ],
    },
  ],
};

export default HikkaduwaHistoricalCulturalArticle;