const KoggalaCulturalAttractionsArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Koggala", to: "/places/koggala" },
    { label: "Cultural Attractions" },
  ],

  hero: {
    kicker: "Culture & Traditions",
    title: "Cultural Attractions",
    subtitle:
      "Literary heritage, folk traditions, and the iconic stilt fishermen culture of Sri Lanka’s southern coast.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Koggala/cultural-attractions/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Culture and Identity Around Koggala",
    paragraphs: [
      "Koggala is closely connected to Sri Lanka’s literary heritage, traditional coastal culture, and local fishing traditions.",
      "From the Martin Wickramasinghe Folk Museum to the famous stilt fishermen along the southern shoreline, the area preserves important aspects of village life, storytelling, and coastal identity.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "martin-wickramasinghe-folk-museum",
      kicker: "Literary Heritage",
      title: "Martin Wickramasinghe Folk Museum",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Martin Wickramasinghe Folk Museum in Koggala is dedicated to the life and work of Martin Wickramasinghe, widely regarded as the father of modern Sinhala literature.",
        },

        {
          type: "p",
          text: "The museum complex preserves both the author’s personal history and the traditional rural culture that inspired many of his famous works, including <em>Gamperaliya</em> and <em>Madol Doova</em>.",
        },

        {
          type: "split-paragraph",
          heading: "The Author’s Ancestral Home",
          headingLevel: "h3",

          paragraphs: [
            "At the center of the complex is the preserved ancestral home where Martin Wickramasinghe was born and spent his childhood.",
            "The nearly 200-year-old house contains original furniture, personal belongings, and exhibits connected to his life and literary career.",
            "The house also carries stories connected to its survival during World War II.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Koggala/cultural-attractions/martin-wickramasinghe-house.webp`,
          imageAlt: "Martin Wickramasinghe ancestral home in Koggala",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "The Museum Complex",
        },

        {
          type: "p",
          text: "<strong>Folk Museum of Culture:</strong> Displays over a thousand artifacts connected to traditional Sri Lankan rural life and folk technology.",
        },

        {
          type: "p",
          text: "<strong>Traditional Industries:</strong> Exhibits include tools and objects related to agriculture, fishing, pottery, metal crafts, and agro-industries.",
        },

        {
          type: "p",
          text: "<strong>Folk Culture:</strong> Traditional costumes, puppetry, folk dances, Buddhist artifacts, and local religious practices are also represented.",
        },

        {
          type: "p",
          text: "<strong>The Hall of Life:</strong> A gallery documenting Martin Wickramasinghe’s literary journey through photographs, paintings, manuscripts, and awards.",
        },

        {
          type: "p",
          text: "<strong>The Samadhi:</strong> The final resting place of Martin Wickramasinghe and his wife, marked by a simple memorial connected symbolically to Koggala’s coastal landscape.",
        },

        {
          type: "split-paragraph",
          heading: "Restored Eco-Environment",
          headingLevel: "h4",

          paragraphs: [
            "The seven-acre grounds surrounding the museum have been restored into a tranquil rural environment.",
            "Traditional features such as an Ambalama resting place and shaded garden areas create a peaceful atmosphere for visitors exploring the site.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Koggala/cultural-attractions/folk-museum.webp`,
          imageAlt: "Traditional rural environment at the folk museum",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Visitor Information",
        },

        {
          type: "p",
          text: "<strong>Location:</strong> Koggala, near Galle in Sri Lanka’s Southern Province.",
        },

        {
          type: "p",
          text: "<strong>Focus:</strong> The life and works of Martin Wickramasinghe and the preservation of Sri Lankan folk culture.",
        },

        {
          type: "p",
          text: "<strong>Opening Hours:</strong> Daily from 9:00 AM to 5:00 PM.",
        },

        {
          type: "p",
          text: "<strong>Recommended Visit Time:</strong> Around 1–2 hours.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=5.98955689135201,80.3274478548253",
        },
      ],
    },

    {
      type: "text",
      id: "stilt-fishermen",
      kicker: "Coastal Tradition",
      title: "Stilt Fishermen",
      align: "left",

      content: [
        {
          type: "p",
          text: "The stilt fishermen, known locally as <em>Ritipanna</em>, are among the most iconic cultural images associated with Sri Lanka’s southern coast.",
        },

        {
          type: "p",
          text: "This traditional fishing method involves fishermen balancing on a narrow crossbar attached to a vertical pole fixed into the shallow seabed.",
        },

        {
          type: "h3",
          text: "Where to See Them",
        },

        {
          type: "p",
          text: "The most famous viewing areas are along the coast around Koggala, Ahangama, Weligama, and Kathaluwa.",
        },

        {
          type: "p",
          text: "Many of the fishing stilts can be seen directly from the Matara Road, especially near the coastal stretch around the Stick Fisherman View Restaurant in Koggala.",
        },

        {
          type: "split-paragraph",
          heading: "The Fishing Technique",
          headingLevel: "h3",

          paragraphs: [
            "A fisherman sits on a small crossbar called a petta attached to a vertical pole positioned several meters offshore.",
            "Using a simple fishing rod and line, they traditionally caught small fish such as mackerels and spotted herrings.",
            "The elevated position helped prevent their shadow from disturbing the fish in the shallow water.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Koggala/cultural-attractions/stilt-fishermen.webp`,
          imageAlt: "Traditional stilt fishermen near Koggala",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Origins and Modern Reality",
        },

        {
          type: "p",
          text: "The practice is believed to have developed after World War II, when overcrowded fishing areas and food shortages encouraged fishermen to experiment with new techniques in shallow coastal waters.",
        },

        {
          type: "p",
          text: "Following the 2004 tsunami and damage to coral reef ecosystems, traditional stilt fishing became less profitable.",
        },

        {
          type: "p",
          text: "Today, many stilt fishermen continue the practice partly as a cultural performance for visitors and photographers.",
        },

        {
          type: "h3",
          text: "Best Time to Visit",
        },

        {
          type: "p",
          text: "<strong>Sunrise:</strong> Approximately 6:00 AM – 7:30 AM for the classic silhouette photography conditions.",
        },

        {
          type: "p",
          text: "<strong>Sunset:</strong> Approximately 4:30 PM – 6:30 PM for softer lighting and scenic coastal views.",
        },

        {
          type: "p",
          text: "<strong>Traditional Fishing Times:</strong> Historically, fishing took place mainly in the early morning and late afternoon.",
        },

        {
          type: "h3",
          text: "Photography and Fees",
        },

        {
          type: "p",
          text: "<strong>Photography Payments:</strong> Fishermen posing for photos generally expect a small payment.",
        },

        {
          type: "p",
          text: "<strong>Typical Fee:</strong> Usually around LKR 500–1,000 depending on location and proximity.",
        },

        {
          type: "p",
          text: "<strong>Experience Fee:</strong> Visitors wanting to climb onto a stilt or take close-up photos should agree on a price beforehand.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=5.9859063270570525,80.32789193735982",
        },
      ],
    },
  ],
};

export default KoggalaCulturalAttractionsArticle;