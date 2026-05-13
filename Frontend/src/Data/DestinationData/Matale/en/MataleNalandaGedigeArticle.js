const MataleNalandaGedigeArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Matale", to: "/places/matale" },
    { label: "Nalanda Gedige" },
  ],

  hero: {
    kicker: "Ancient Architecture",
    title: "Nalanda Gedige",
    subtitle:
      "A mysterious stone monument near Matale, known for its rare fusion of Buddhist, Hindu, Sinhalese, and South Indian architectural traditions.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Matale/nalanda-gedige/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Sri Lanka’s Architectural Enigma",
    paragraphs: [
      "Nalanda Gedige is one of the most unusual and architecturally fascinating ancient sites in Sri Lanka.",
      "Located near Matale and often cited as the geographical center of the island, the monument is known for its hybrid design, religious symbolism, and careful relocation during the construction of the Bowatenne Reservoir.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "architectural-enigma",
      kicker: "Architecture",
      title: "The Architectural Enigma",
      align: "left",

      content: [
        {
          type: "p",
          text: "The most striking feature of Nalanda Gedige is its unusual blend of architectural styles.",
        },

        {
          type: "p",
          text: "Unlike most ancient monuments in Sri Lanka, it combines South Indian, Sinhalese, Buddhist, Hindu, and tantric elements within a single compact stone structure.",
        },

        {
          type: "split-paragraph",
          heading: "Fusion of Styles",
          headingLevel: "h3",

          paragraphs: [
            "<strong>South Indian Influence:</strong> The structure shows Dravidian and Pallava-style features, including the vimana tower, mandapam-style entrance space, and temple-like form.",
            "<strong>Sinhalese Buddhist Elements:</strong> The entrance includes decorative features such as a moonstone and crocodile balustrades.",
            "<strong>Scholarly Interpretation:</strong> The mix of a Buddhist ground plan, Hindu vestibule, and Tamilian door jambs suggests a deliberate fusion of Sinhalese and Tamil cultural traditions.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Matale/nalanda-gedige/architecture.webp`,
          imageAlt: "Stone architecture of Nalanda Gedige",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Religious Syncretism",
        },

        {
          type: "p",
          text: "The original religious purpose of Nalanda Gedige is still debated, with interpretations ranging from Hindu worship to Mahayana Buddhist use.",
        },

        {
          type: "p",
          text: "Archaeological finds include fragments connected to both Buddhist and Hindu traditions, including Buddha and Bodhisattva figures as well as images of Ganesha, Lakshmi, and Kuvera.",
        },

        {
          type: "p",
          text: "This mixture points to a period of religious coexistence and cultural exchange in ancient Sri Lanka.",
        },

        {
          type: "h3",
          text: "Tantric Carvings",
        },

        {
          type: "p",
          text: "Nalanda Gedige is also known for rare tantric carvings, including maithuna sculptures similar in theme to those seen at Khajuraho in India.",
        },

        {
          type: "p",
          text: "These carvings are often linked to Vajrayana or Tantric Buddhist influence, making the site especially unusual within Sri Lankan temple architecture.",
        },
      ],
    },

    {
      type: "text",
      id: "history-and-relocation",
      kicker: "History",
      title: "Dating, Construction, and Relocation",
      align: "left",

      content: [
        {
          type: "p",
          text: "Nalanda Gedige is generally dated to between the 8th and 10th centuries CE, during the late Anuradhapura and early Polonnaruwa periods.",
        },

        {
          type: "p",
          text: "Its construction reflects a time when South Indian influence was strong and cultural interaction shaped the religious and architectural landscape of the island.",
        },

        {
          type: "split-paragraph",
          heading: "The Gedige Style",
          headingLevel: "h3",

          paragraphs: [
            "The term <em>Gedige</em> usually refers to a hollow, vaulted image house, often built with brick.",
            "Nalanda Gedige is unusual because it is constructed almost entirely from interlocking stone blocks of crystalline limestone.",
            "The structure was built without mortar, giving it a rare and distinctive character among Sri Lankan monuments.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Matale/nalanda-gedige/stone-structure.webp`,
          imageAlt: "Interlocking stone blocks at Nalanda Gedige",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Saved from the Bowatenne Reservoir",
        },

        {
          type: "p",
          text: "One of the most important events in the modern history of Nalanda Gedige was its relocation during the 1980s.",
        },

        {
          type: "p",
          text: "When the construction of the Bowatenne Reservoir threatened to submerge the original site, the entire stone structure was carefully dismantled, moved, and reconstructed on higher ground near the reservoir bund.",
        },

        {
          type: "p",
          text: "This meticulous relocation preserved the monument and allowed it to remain accessible to future generations.",
        },
      ],
    },

    {
      type: "text",
      id: "key-highlights",
      kicker: "Highlights",
      title: "Key Highlights at Nalanda Gedige",
      align: "left",

      content: [
        {
          type: "p",
          text: "Today, Nalanda Gedige stands in a quiet and scenic setting, offering visitors a close look at one of Sri Lanka’s most distinctive ancient structures.",
        },

        {
          type: "p",
          text: "<strong>The Gedige Style:</strong> The temple is built entirely from interlocking stone blocks without mortar, making it architecturally rare.",
        },

        {
          type: "p",
          text: "<strong>Architectural Fusion:</strong> The monument combines South Indian temple features with Buddhist decorative elements and tantric carvings.",
        },

        {
          type: "p",
          text: "<strong>Small Museum:</strong> A small on-site museum displays artifacts found during excavations and provides background on the relocation project.",
        },

        {
          type: "p",
          text: "<strong>The Center Point:</strong> A marker on the site indicates its traditional status as the geographical center of Sri Lanka.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Opening Hours, Access, and Etiquette",
      align: "left",

      content: [
        {
          type: "p",
          text: "<strong>Opening Hours:</strong> Generally open daily from around 7:00 AM to 5:00 PM.",
        },

        {
          type: "p",
          text: "<strong>Entrance Fee:</strong> Free, with no official ticket price currently listed for locals or foreigners.",
        },

        {
          type: "p",
          text: "<strong>Location:</strong> Matale District, about 20 km north of Matale town and 25 km south of Dambulla, just off the A9 highway.",
        },

        {
          type: "p",
          text: "<strong>Duration:</strong> Around 30–60 minutes is usually enough to explore the monument and small museum.",
        },

        {
          type: "split-paragraph",
          heading: "Visitor Etiquette",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Dress Code:</strong> Modest clothing is required. Shoulders and knees should be covered.",
            "<strong>Footwear:</strong> Shoes must be removed before entering the temple grounds. On hot days, socks are useful because the stone surface can become very hot.",
            "<strong>Photography:</strong> Photos are generally allowed, but visitors should not pose with their back to Buddha statues.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Matale/nalanda-gedige/site-view.webp`,
          imageAlt: "Nalanda Gedige temple grounds",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Travel Tips",
        },

        {
          type: "p",
          text: "<strong>Weather:</strong> If it has been raining, the path can become muddy. The drier period between December and April is usually more comfortable for visiting.",
        },

        {
          type: "p",
          text: "<strong>Local Guides:</strong> Local guides may offer to explain the site’s history. They are not always official staff, but many are knowledgeable; a tip of around LKR 500–1,000 is commonly appreciated if you use their service.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=7.670047650779274,80.64574187969853",
        },
      ],
    },
  ],
};

export default MataleNalandaGedigeArticle;