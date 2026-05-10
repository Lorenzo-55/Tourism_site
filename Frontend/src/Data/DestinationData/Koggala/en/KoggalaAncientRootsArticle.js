const AncientRootsArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Koggala", to: "/places/koggala" },
    { label: "Ancient Roots" },
  ],

  hero: {
    kicker: "History & Culture",
    title: "Ancient Roots",
    subtitle:
      "Colonial murals, ancient temple heritage, wartime aviation history, and literary legacy around Koggala.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Koggala/ancient-roots/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Koggala’s Historical and Cultural Identity",
    paragraphs: [
      "Koggala’s cultural landscape combines ancient Buddhist heritage, colonial-era art, World War II history, and the legacy of one of Sri Lanka’s greatest literary figures.",
      "From the rare murals of Kataluwa Purana Maha Vihara to the wartime seaplane base on Koggala Lake and the birthplace of Martin Wickramasinghe, the area preserves several layers of Sri Lanka’s southern history.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "kataluwa-purana-maha-vihara",
      kicker: "Ancient Temple",
      title: "Kataluwa Purana Maha Vihara",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Kataluwa Purana Maha Vihara, also known as Kathaluwa Poorvarama, is a historic Buddhist temple located near Koggala and Ahangama.",
        },

        {
          type: "p",
          text: "Built in the 13th century, the temple is best known for its rare Kandyan-style murals and its unusual colonial-era paintings, including depictions connected to Queen Victoria.",
        },

        {
          type: "split-paragraph",
          heading: "Colonial Murals",
          headingLevel: "h3",

          paragraphs: [
            "The temple is famous for its Image House, or Budu Ge, which contains a rare artistic fusion of traditional Buddhist themes and 19th-century European life.",
            "These murals are especially unusual because they show colonial scenes within a Buddhist temple setting, creating a visual time capsule of the British period.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Koggala/ancient-roots/kataluwa-vihara.webp`,
          imageAlt: "Kataluwa Purana Maha Vihara near Koggala",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Key Information",
        },

        {
          type: "p",
          text: "<strong>Entrance Fee:</strong> Free, but it is highly customary to leave a donation of around Rs. 500–1,000 for the monk who opens the shrine and guides visitors.",
        },

        {
          type: "p",
          text: "<strong>Opening Hours:</strong> Generally open from dawn to dusk, around 6:30 AM – 6:30 PM.",
        },

        {
          type: "p",
          text: "<strong>Best Time to Visit:</strong> 9:00 AM – 11:00 AM or mid-afternoon. The temple is rarely crowded, allowing a personal experience with the artwork.",
        },

        {
          type: "h3",
          text: "The Queen Victoria Murals",
        },

        {
          type: "p",
          text: "What makes the temple especially notable is the Image House, which preserves rare paintings connected to the British colonial era.",
        },

        {
          type: "p",
          text: "<strong>The British Crest:</strong> Above the main entrance is a painted Royal Crest of Queen Victoria dated 1886. It was painted as a gesture of gratitude because the British granted freedom for Buddhist worship on the island.",
        },

        {
          type: "p",
          text: "<strong>Secular Scenes:</strong> The murals include European soldiers in uniform carrying rifles, figures in Victorian-style dresses and hats, scenes of men playing cards and drinking wine, steam trains, horse carriages, and even a monk on a bicycle.",
        },

        {
          type: "p",
          text: "<strong>Classical Roots:</strong> Beneath the colonial details, the temple follows a 13th-century layout and includes the five-dagoba complex style associated with Kandyan influence in the south.",
        },

        {
          type: "split-paragraph",
          heading: "Location and Access",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Address:</strong> Kathaluwa-Thiththagalla Road, Koggala, about 2 km inland from the A2 highway.",
            "<strong>Getting There:</strong> It is around a 10-minute tuk-tuk ride from Ahangama or Midigama beaches. If driving from Galle, turn inland at the 134 km post and follow the signposts.",
            "<strong>Entry Tip:</strong> The shrine room is often locked to protect the fragile murals. If it is closed, look for a monk or caretaker in the nearby living quarters; they are usually happy to open the doors and explain the stories.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Koggala/ancient-roots/kataluwa-murals.webp`,
          imageAlt: "Murals inside Kataluwa Purana Maha Vihara",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Visitor Etiquette",
        },

        {
          type: "p",
          text: "<strong>Dress Code:</strong> Shoulders and knees must be covered. Wearing white is a sign of respect, but any modest clothing is acceptable.",
        },

        {
          type: "p",
          text: "<strong>Photography:</strong> Photography is generally permitted, but flash should not be used near the murals because salt air and light can damage the old pigments. Visitors should also avoid posing with their back to Buddha statues.",
        },

        {
          type: "p",
          text: "<strong>Shoes:</strong> Footwear must be removed before stepping onto the temple terrace or entering the shrine room.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=5.9872821486940095,80.35087039503105",
        },
      ],
    },

    {
      type: "text",
      id: "wwii-double-sunrise",
      kicker: "Wartime History",
      title: "The WWII Double Sunrise",
      align: "left",

      content: [
        {
          type: "p",
          text: "During World War II, Koggala became a vital military hub when the British Royal Air Force established a seaplane base on Koggala Lake.",
        },

        {
          type: "p",
          text: "This base gave Koggala an important role in wartime aviation and long-distance air travel across the Indian Ocean.",
        },

        {
          type: "h3",
          text: "Strategic Role",
        },

        {
          type: "p",
          text: "A Catalina flying boat operating from Koggala spotted the Japanese fleet in 1942, helping prevent a surprise attack on Sri Lanka.",
        },

        {
          type: "h3",
          text: "The World’s Longest Flight",
        },

        {
          type: "p",
          text: "Koggala was also linked to the “Flight of the Double Sunrise,” a 28-hour non-stop flight to Perth, Australia.",
        },

        {
          type: "p",
          text: "The journey was so long that passengers saw the sunrise twice during a single flight, giving the route its memorable name.",
        },
      ],
    },

    {
      type: "text",
      id: "martin-wickramasinghe",
      kicker: "Literary Heritage",
      title: "Birthplace of Martin Wickramasinghe",
      align: "left",

      content: [
        {
          type: "p",
          text: "Koggala is the birthplace of Martin Wickramasinghe, who lived from 1890 to 1976 and is widely regarded as one of the most important figures in modern Sinhala literature.",
        },

        {
          type: "p",
          text: "His works captured village life, cultural change, and the transition of Sri Lankan society during the modern period.",
        },

        {
          type: "h3",
          text: "The Koggala Trilogy",
        },

        {
          type: "p",
          text: "His famous Koggala Trilogy — <em>Gamperaliya</em>, <em>Kaliyugaya</em>, and <em>Yuganthaya</em> — helped immortalize the culture and social transformation of the village.",
        },
      ],
    },
  ],
};

export default AncientRootsArticle;