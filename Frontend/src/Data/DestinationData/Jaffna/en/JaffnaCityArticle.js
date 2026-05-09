const JaffnaCityArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Jaffna", to: "/places/jaffna" },
    { label: "Jaffna City" },
  ],

  hero: {
    kicker: "Northern Heritage",
    title: "Jaffna City",
    subtitle:
      "Historic forts, sacred temples, colonial landmarks, and cultural institutions in the heart of northern Sri Lanka.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Jaffna/city/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "The Cultural Heart of Northern Sri Lanka",
    paragraphs: [
      "Jaffna City is the cultural and historical center of Sri Lanka’s northern peninsula, shaped by centuries of Tamil heritage, colonial influence, and modern history.",
      "The city is known for its temples, colonial-era architecture, historic fortifications, libraries, and museums, many of which reflect both the resilience and cultural identity of the region.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "jaffna-fort",
      kicker: "Colonial Fort",
      title: "Jaffna Fort",
      align: "left",

      content: [
        {
          type: "p",
          text: "Jaffna Fort is one of the city’s most important historical landmarks and one of the best-preserved colonial fortifications in Sri Lanka.",
        },

        {
          type: "p",
          text: "Located beside the Jaffna Lagoon, the fort offers panoramic views, historic ruins, and insight into the region’s colonial and wartime history.",
        },

        {
          type: "split-paragraph",
          heading: "Portuguese and Dutch History",
          headingLevel: "h3",

          paragraphs: [
            "The original fort was constructed by the Portuguese in 1619 after the conquest of the Jaffna Kingdom.",
            "In 1658, the Dutch East India Company captured the fort and rebuilt it into the large pentagonal structure seen today, naming the bastions after Dutch provinces.",
            "The walls were built using coral and limestone and surrounded by a wide defensive moat.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Jaffna/city/jaffna-fort.webp`,
          imageAlt: "Jaffna Fort overlooking the lagoon",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Civil War and Restoration",
        },

        {
          type: "p",
          text: "During the Sri Lankan Civil War, the fort served as a major military base and suffered extensive artillery damage.",
        },

        {
          type: "p",
          text: "Since the end of the conflict, restoration projects supported partly by the Dutch government have aimed to preserve the fort and reopen it to visitors.",
        },

        {
          type: "p",
          text: "<strong>Main Highlights:</strong> Fort walls, bastions, colonial ruins, the moat, and panoramic lagoon views.",
        },

        {
          type: "p",
          text: "<strong>Visitor Tip:</strong> Late afternoon is ideal for cooler temperatures and sunset views over the lagoon.",
        },
      ],
    },

    {
      type: "text",
      id: "nallur-kandaswamy-kovil",
      kicker: "Sacred Temple",
      title: "Nallur Kandaswamy Kovil",
      align: "left",

      content: [
        {
          type: "p",
          text: "Nallur Kandaswamy Kovil is the most iconic Hindu temple in Jaffna and one of the most important Hindu religious sites in Sri Lanka.",
        },

        {
          type: "p",
          text: "Dedicated to Lord Murugan, the temple is deeply connected to Tamil identity, culture, and religious life in northern Sri Lanka.",
        },

        {
          type: "split-paragraph",
          heading: "History and Reconstruction",
          headingLevel: "h3",

          paragraphs: [
            "The earliest temple on the site dates back to around 948 AD and later became closely linked to the Jaffna Kingdom.",
            "The Portuguese destroyed the temple in 1621 during their conquest of the region.",
            "The present temple was rebuilt in 1734 during the Dutch colonial period, when religious tolerance allowed reconstruction.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Jaffna/city/nallur-kovil.webp`,
          imageAlt: "Nallur Kandaswamy Kovil in Jaffna",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Architecture and Religious Life",
        },

        {
          type: "p",
          text: "The temple is a magnificent example of Dravidian architecture, with elaborately decorated gopurams covered in mythological figures and Hindu symbolism.",
        },

        {
          type: "p",
          text: "<strong>Main Shrine:</strong> Dedicated to Lord Murugan, with the sacred spear known as the “Vel” serving as the primary symbol of worship.",
        },

        {
          type: "p",
          text: "<strong>Annual Festival:</strong> The famous Nallur Festival lasts around 25 days and attracts pilgrims from around the world.",
        },

        {
          type: "p",
          text: "<strong>Kavadi Ritual:</strong> Some devotees express devotion through body-piercing rituals performed during the festival.",
        },

        {
          type: "h3",
          text: "Visitor Information",
        },

        {
          type: "p",
          text: "<strong>Dress Code:</strong> Men must remove shirts before entering the temple complex. Shoulders and legs should be covered.",
        },

        {
          type: "p",
          text: "<strong>Footwear:</strong> Shoes must be removed before entering.",
        },

        {
          type: "p",
          text: "<strong>Photography:</strong> Usually permitted in outer areas but not inside the main shrines.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=M2FH%2BXM5%2C%20Jaffna%2040000%2C%20Sri%20Lanka",
        },
      ],
    },

    {
      type: "text",
      id: "jaffna-public-library",
      kicker: "Cultural Landmark",
      title: "Jaffna Public Library",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Jaffna Public Library is one of the city’s most important cultural landmarks and a powerful symbol of Tamil heritage and resilience.",
        },

        {
          type: "p",
          text: "Originally founded in 1933, it became one of the largest libraries in Asia, housing rare manuscripts, palm-leaf texts, and an extensive collection of books.",
        },

        {
          type: "split-paragraph",
          heading: "The Fire of 1981",
          headingLevel: "h3",

          paragraphs: [
            "On May 31, 1981, the library was deliberately burned down, destroying thousands of irreplaceable manuscripts and historical works.",
            "The destruction is widely regarded as one of the most significant acts of cultural destruction in modern Sri Lankan history and contributed to rising tensions before the civil war.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Jaffna/city/public-library.webp`,
          imageAlt: "Jaffna Public Library building",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Reconstruction and Present-Day Role",
        },

        {
          type: "p",
          text: "The library was gradually rebuilt and officially reopened in the early 2000s, symbolizing the determination of the local community to preserve its culture and identity.",
        },

        {
          type: "p",
          text: "Today, it functions as both a modern public library and a symbolic monument to the memory and resilience of the Tamil community.",
        },

        {
          type: "p",
          text: "Visitors can still notice signs of wartime damage, including shell marks visible on parts of the structure.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=M266%2BVP2%20Clock%20Tower%20Road%2C%20South%2C%20Jaffna%2C%20Sri%20Lanka",
        },
      ],
    },

    {
      type: "text",
      id: "archaeological-museum",
      kicker: "Museum",
      title: "Jaffna Archaeological Museum",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Jaffna Archaeological Museum is a small but important museum showcasing artifacts from the region’s long and diverse history.",
        },

        {
          type: "p",
          text: "Its collection spans from the Anuradhapura period to the colonial era and highlights both Buddhist and Hindu traditions in northern Sri Lanka.",
        },

        {
          type: "h3",
          text: "Collection Highlights",
        },

        {
          type: "p",
          text: "<strong>Buddhist Sculptures:</strong> Including Buddha torsos and archaeological finds from Kantarodai.",
        },

        {
          type: "p",
          text: "<strong>Hindu Sculptures:</strong> Statues of gods and goddesses reflecting Tamil religious traditions.",
        },

        {
          type: "p",
          text: "<strong>Historical Artifacts:</strong> Coins, pottery, weapons, and daily-use objects from different historical periods.",
        },

        {
          type: "p",
          text: "<strong>Colonial Relics:</strong> Cannons and military objects from the Dutch and British colonial periods.",
        },

        {
          type: "split-paragraph",
          heading: "A Compact Historical Collection",
          headingLevel: "h4",

          paragraphs: [
            "Although relatively small, the museum provides a direct and accessible introduction to Jaffna’s layered cultural history.",
            "Its location near Nallur Kandaswamy Kovil also makes it easy to combine with other major attractions in the city.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Jaffna/city/archaeological-museum.webp`,
          imageAlt: "Jaffna Archaeological Museum exhibits",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "<strong>Opening Hours:</strong> Usually open Wednesday to Monday from 9:00 AM to 4:00 PM and closed on Tuesdays and Poya holidays.",
        },

        {
          type: "p",
          text: "<strong>Admission:</strong> Generally free, though donations are appreciated.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=M29F%2BJMG%2C%20Navalar%20Rd%2C%20Jaffna%2C%20Sri%20Lanka",
        },
      ],
    },

    {
      type: "text",
      id: "colonial-buildings",
      kicker: "Colonial Heritage",
      title: "Colonial Buildings and Clock Tower",
      align: "left",

      content: [
        {
          type: "p",
          text: "Walking through Jaffna reveals many traces of the colonial period, including civic buildings, churches, and old commercial structures.",
        },

        {
          type: "p",
          text: "The mix of Dutch, British, and local architecture gives the city a distinctive identity shaped by centuries of trade, conflict, and cultural exchange.",
        },

        {
          type: "split-paragraph",
          heading: "Jaffna Clock Tower",
          headingLevel: "h3",

          paragraphs: [
            "The Jaffna Clock Tower was built in 1882 to commemorate the visit of the Prince of Wales to Ceylon.",
            "The structure was badly damaged during the civil war and later restored with British assistance before reopening in 2002.",
            "Today, the clock tower symbolizes the city’s reconstruction and resilience after decades of conflict.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Jaffna/city/clock-tower.webp`,
          imageAlt: "Jaffna Clock Tower",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Other Colonial Landmarks",
        },

        {
          type: "p",
          text: "<strong>Old Kachcheri Building:</strong> A 19th-century British colonial government building featuring Roman arches and courtyards.",
        },

        {
          type: "p",
          text: "<strong>St. Mary’s Cathedral:</strong> A major Catholic church combining Portuguese and Goanese architectural influences.",
        },

        {
          type: "p",
          text: "<strong>Colonial Houses and Shops:</strong> Many streets still contain buildings with colonial architectural features, often marked by visible scars from the civil war.",
        },

        {
          type: "p",
          text: "Together, these structures reflect Jaffna’s layered history and its importance as both a cultural and strategic center in northern Sri Lanka.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=9.663448599146179,80.01328545088015",
        },
      ],
    },
  ],
};

export default JaffnaCityArticle;