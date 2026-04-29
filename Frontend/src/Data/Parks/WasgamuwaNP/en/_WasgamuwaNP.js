const WasgamuwaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Wasgamuwa National Park" },
  ],

  hero: {
    kicker: "Wildlife & Heritage",
    title: "Wasgamuwa National Park",
    subtitle:
      "A remote sanctuary shaped by ancient civilizations, irrigation systems, and modern conservation.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Wasgamuwa/wasgamuwa1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Landscape Layered with History and Ecology",
    paragraphs: [
      "Wasgamuwa National Park is one of Sri Lanka’s most historically rich and ecologically significant protected areas, located near the Cultural Triangle. While it is less visited than major parks, it offers a more undisturbed and authentic wildlife experience.",
      "The park exists today largely due to the displacement of wildlife caused by large-scale irrigation and settlement projects, but its landscape carries over two millennia of human history, from ancient kingdoms to advanced hydraulic engineering systems.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "buduruwayaya",
      kicker: "Archaeology",
      title: "Buduruwayaya Ruins",
      align: "left",
      content: [
        {
          type: "p",
          text: "The Buduruwayaya archaeological site, located near the southwestern boundary of Wasgamuwa, is an ancient Buddhist monastic complex near Bakamuna. It provides a rare and quiet glimpse into Sri Lanka’s early religious history.",
        },
        {
          type: "p",
          text: "Its most notable feature is a large reclining Buddha statue carved directly into rock, depicting the Parinirvana of the Buddha. The statue measures roughly between 12 to 25 feet (some sources suggest up to 36 feet) and is considered one of the largest rock-cut reclining Buddhas in the country.",
        },
        {
          type: "p",
          text: "The site also includes remains of a stupa dating back to the Anuradhapura period, stone pillars, moonstones, guardstones, Buddha footprint slabs, and even an ancient medicinal bathing pond used by monks.",
        },
      ],
    },

    {
      type: "text",
      id: "chulangani",
      kicker: "Ancient Civilizations",
      title: "Chulangani Chaitya",
      align: "left",
      content: [
        {
          type: "p",
          text: "Located within the park, the Chulangani Chaitya is an immense ancient stupa attributed to King Mahanaga from the 3rd century BC. Its size was remarkable, with a recorded circumference of approximately 966 feet, exceeding even that of Ruwanwelisaya.",
        },
        {
          type: "p",
          text: "Today, the structure remains as a large overgrown mound, but its scale reflects the importance of the region as a major religious and population center in ancient Sri Lanka.",
        },
        {
          type: "p",
          text: "The surrounding area is historically associated with Yudangana Pitiya, believed to be a battlefield between King Dutugemunu and King Elara, placing the site at a key intersection of religious and military history.",
        },
      ],
    },

    {
      type: "text",
      id: "irrigation",
      kicker: "Engineering",
      title: "Ancient Irrigation Systems",
      align: "left",
      content: [
        {
          type: "p",
          text: "Wasgamuwa lies within one of Sri Lanka’s most advanced ancient irrigation networks. Systems such as the Kalinga Yodha Ela diverted water from the Amban Ganga River to major reservoirs like Minneriya and Giritale.",
        },
        {
          type: "p",
          text: "The canal system originated under King Vasabha and was later expanded by King Mahasen and King Parakramabahu I. These massive engineering works enabled agriculture across the dry zone and supported large populations.",
        },
        {
          type: "p",
          text: "Remnants of these canals still exist near the park, particularly along its western boundary, highlighting the scale and precision of ancient Sri Lankan hydraulic engineering.",
        },
      ],
    },

    {
      type: "text",
      id: "mahaweli",
      kicker: "Modern History",
      title: "Mahaweli Development Project",
      align: "left",
      content: [
        {
          type: "p",
          text: "The modern existence of Wasgamuwa National Park is directly tied to the Mahaweli Development Project, Sri Lanka’s largest national development initiative aimed at irrigation, hydro-power, and resettlement.",
        },
        {
          type: "p",
          text: "Large-scale dam construction and land clearing displaced significant wildlife populations, especially elephants. To mitigate this, Wasgamuwa was designated as a National Park in 1984 to serve as a refuge for displaced animals.",
        },
        {
          type: "p",
          text: "Despite this, the development also intensified human-elephant conflict, as new settlements were established along traditional migratory routes.",
        },
      ],
    },

    {
      type: "text",
      id: "wildlife",
      kicker: "Nature",
      title: "Wildlife and Biodiversity",
      align: "left",
      paragraphs: [
        "Wasgamuwa is known for its high biodiversity and supports a wide range of species. It is particularly important as an elephant habitat, with herds frequently gathering near water sources during dry months.",
        "Other species include sloth bears, leopards, deer, monkeys, and a large variety of birds, earning it recognition as an Important Bird Area.",
        "The name ‘Wasgamuwa’ is believed to derive from ‘Walas Gamuwa,’ meaning ‘land of bears,’ reflecting the historical presence of sloth bears in the region.",
      ],
    },

    {
      type: "text",
      id: "challenges",
      kicker: "Challenges",
      title: "Conservation Issues",
      align: "left",
      paragraphs: [
        "Human-elephant conflict remains the most significant challenge, as agricultural expansion continues to overlap with elephant habitats.",
        "Other issues include habitat fragmentation, invasive species, poaching, and competition from domestic cattle grazing within park boundaries.",
        "Modern conservation strategies focus on electric fencing, buffer zones, and community-based coexistence programs.",
      ],
    },

    {
      type: "text",
      id: "visiting",
      kicker: "Travel Guide",
      title: "Visitor Information",
      align: "left",
      content: [
        {
          type: "p",
          text: "The park is open daily from 6:00 AM to 6:00 PM, with morning and evening safaris being the most popular times for wildlife viewing.",
        },
        {
          type: "p",
          text: "The best season for elephant sightings is generally from November to May, when animals gather around limited water sources.",
        },
        {
          type: "p",
          text: "Entrance fees for foreign visitors are typically around $12 for adults and $6 for children, with additional vehicle and tax charges applied.",
        },
        {
          type: "p",
          text: "Safari jeep hire ranges from approximately LKR 7,500 to 15,000 for a half-day, or higher for full-day trips, depending on the operator.",
        },
        {
          type: "p",
          text: "Access is via two main entrances: Handungamuwa (main entrance) and Kiri Oya, which is convenient for visitors coming from Polonnaruwa or Sigiriya.",
        },
        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=7.753390722829024,80.92073077969917",
        },
      ],
    },
  ],
};

export default WasgamuwaArticle;