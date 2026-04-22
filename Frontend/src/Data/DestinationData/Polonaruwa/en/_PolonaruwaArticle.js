const PolonnaruwaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Polonnaruwa" },
  ],

  hero: {
    kicker: "Ancient Capital",
    title: "Polonnaruwa",
    subtitle: "Sri Lanka’s second royal capital, known for its remarkably preserved ruins and monumental heritage.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Polonnaruwa/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A City of Ruins and Royal Legacy",
    paragraphs: [
      "Polonnaruwa, located in the North Central Province of Sri Lanka, is a city with a rich and fascinating history. It was the second capital of Sri Lanka after the fall of the first capital, Anuradhapura in 993 AD. The ruins of the ancient city are exceptionally well-preserved and have been a UNESCO World Heritage Site since 1982.",
      "Today, Polonnaruwa offers one of the most complete glimpses into Sri Lanka’s medieval period, with vast archaeological zones, monumental structures, and advanced irrigation works that reflect the sophistication of its rulers.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history",
      kicker: "History",
      title: "Rise and Decline of a Royal City",
      align: "left",
      paragraphs: [
        "Polonnaruwa was already an important military post before it became the capital. After its conquest by the Cholas from South India, the city was called Jananathamangalam, and they built primarily Hindu monuments there.",
        "However, Polonnaruwa's heyday began only after King Vijayabahu I recaptured the city in 1070 and made it a royal city. The city was strategically located and easier to defend than Anuradhapura. The most impressive period was the 12th century under the rule of King Parakramabahu I, who transformed the city into a magnificent garden city with palaces, temples, and an advanced irrigation system, including the gigantic Parakramabahu Samudra Lake. His successor, King Nissanka Malla, also commissioned the construction of many monuments.",
        "The city fell into disrepair in the 13th century after the relocation of the capital and was slowly overgrown by jungle. British archaeologists discovered the ruins in the 20th century and began restoration, maintaining original methods by not using new materials.",
      ],
    },

    {
      type: "text",
      id: "sights",
      kicker: "Sights",
      title: "Exploring the Ancient City",
      align: "left",
      content: [
        {
          type: "split-paragraph",
          heading: "The Sacred Quadrangle",
          headingLevel: "h3",
          paragraphs: [
            "The Square, or 'Sacred Quadrangle,' is the most concentrated and impressive part of the ancient city of Polonnaruwa. It is a raised stone platform that houses a compact collection of the city's most important religious structures.",
            "This area was the ceremonial heart of the royal city and is also known as the Dalada Maluwa, meaning 'Terrace of the Tooth,' referring to the fact that the sacred tooth of the Buddha was once housed here. The structures date primarily from the 12th century and display a blend of Buddhist and Hindu architecture.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Polonnaruwa/quadrangle.webp`,
          imageAlt: "Sacred Quadrangle Polonnaruwa",
          mediaPosition: "right",
        },

        {
          type: "split-paragraph",
          heading: "Royal Palace and Citadel",
          headingLevel: "h3",
          paragraphs: [
            "The Royal Palace of Polonnaruwa is one of the most fascinating ruins in the ancient city, although only foundations remain today.",
            "The palace complex, part of the Citadel of Polonnaruwa, reflects the grandeur and architectural prowess of the Sinhalese kingdom during its peak.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Polonnaruwa/palace.webp`,
          imageAlt: "Royal Palace Polonnaruwa",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "northern-monuments",
      kicker: "Sights",
      title: "Northern Monuments",
      align: "left",
      content: [
        {
          type: "p",
          text: "The northern monuments of Polonnaruwa form one of the most impressive and spiritually charged parts of the archaeological site. This area lies just outside the central core and is known for its colossal Buddha statues and stupas.",
        },

        {
          type: "h4",
          text: "Gal Vihara",
        },
        {
          type: "p",
          text: "This is undoubtedly the highlight of the Northern Monuments and one of the most famous sights in all of Sri Lanka. The 'Rock Monastery' features four Buddha statues carved from a single granite rock. These include a 4.6-meter seated Buddha in meditation, a smaller seated Buddha inside a carved cave, a 7-meter standing Buddha with crossed arms, and a 14-meter reclining Buddha representing parinirvana.",
        },

        {
          type: "h4",
          text: "Rankot Vihara",
        },
        {
          type: "p",
          text: "This stupa is the largest in Polonnaruwa and the fourth largest in Sri Lanka. The name means 'Golden Peak Stupa.' Standing 55 meters high, it was built entirely of brick and modeled after the stupas of Anuradhapura by King Nissanka Malla.",
        },

        {
          type: "h4",
          text: "Lankatilaka Vihara",
        },
        {
          type: "p",
          text: "This is a majestic temple and one of the largest brick structures in Polonnaruwa. The walls reach 17 meters high, although the roof has collapsed. Inside stands a colossal 14-meter Buddha statue, now missing its head.",
        },

        {
          type: "h4",
          text: "Kiri Vehera",
        },
        {
          type: "p",
          text: "Kiri Vehera, meaning 'Milk-White Stupa,' is one of the best-preserved stupas in Polonnaruwa. It reaches a height of 24 meters and was built by one of the queens of King Parakramabahu I.",
        },

        {
          type: "h4",
          text: "Tivanka Image House",
        },
        {
          type: "p",
          text: "Tivanka Image House is known for its well-preserved 12th-century frescoes. The interior depicts scenes from the life of the Buddha and Jataka tales, offering a rare glimpse into the artistic traditions of the period.",
        },
      ],
    },

    {
      type: "text",
      id: "parakrama-samudra",
      kicker: "Sights",
      title: "Parakrama Samudra",
      align: "left",
      paragraphs: [
        "The Parakrama Samudra, meaning 'Sea of Parakrama,' is an immense artificial lake and one of the most advanced irrigation works of the ancient world.",
        "It symbolizes the engineering brilliance of the era and remains a defining feature of the landscape around Polonnaruwa.",
      ],
    },

    {
      type: "text",
      id: "parks",
      kicker: "Nearby Nature",
      title: "National Parks Near Polonnaruwa",
      align: "left",
      content: [
        {
          type: "h3",
          text: "Wasgamuwa National Park",
        },
        {
          type: "p",
          text: "About an hour’s drive from Polonnaruwa, this park offers a more peaceful safari experience compared to the more popular parks in the region. It is home to elephants, leopards, sloth bears, water buffalo, and a wide variety of bird species.",
        },
        {
          type: "button",
          label: "Explore Wasgamuwa National Park",
          to: "/places/wasgamuwa-national-park",
        },

        {
          type: "h3",
          text: "Angammedilla National Park",
        },
        {
          type: "p",
          text: "Located very close to Polonnaruwa, this lesser-known park plays an important role in protecting local watersheds. It offers opportunities to see elephants, leopards, sloth bears, and monkeys in a quieter environment.",
        },
        {
          type: "button",
          label: "Explore Angammedilla National Park",
          to: "/places/angammedilla-national-park",
        },
      ],
    },

    {
      type: "cards",
      kicker: "Highlights",
      title: "Key Experiences in Polonnaruwa",
      align: "center",
      items: [
        {
          image: `${import.meta.env.BASE_URL}Destinations/Polonnaruwa/quadrangle.webp`,
          imageAlt: "Sacred Quadrangle",
          title: "Sacred Quadrangle",
          description: "The ceremonial and religious heart of the ancient city.",
          to: "#sights",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Polonnaruwa/palace.webp`,
          imageAlt: "Royal Palace",
          title: "Royal Palace",
          description: "Ruins reflecting the grandeur of the royal court.",
          to: "#sights",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Polonnaruwa/samudra.webp`,
          imageAlt: "Parakrama Samudra",
          title: "Parakrama Samudra",
          description: "A vast artificial lake showcasing ancient engineering.",
          to: "#parakrama-samudra",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Polonnaruwa/fishing.webp`,
          imageAlt: "Fishing in Parakrama Samudra",
          title: "Fishing in Parakrama Samudra",
          description: "A glimpse into local life along the reservoir.",
          to: "#parakrama-samudra",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Polonnaruwa/wildlife.webp`,
          imageAlt: "Wildlife and Parks",
          title: "Wildlife & Parks",
          description: "Access to nearby national parks rich in biodiversity.",
          to: "#parks",
        },
      ],
    },
  ],
};

export default PolonnaruwaArticle;