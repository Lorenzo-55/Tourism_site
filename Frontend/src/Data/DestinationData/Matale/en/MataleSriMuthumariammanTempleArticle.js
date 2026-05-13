const MataleSriMuthumariammanTempleArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Matale", to: "/places/matale" },
    { label: "Sri Muthumariamman Temple" },
  ],

  hero: {
    kicker: "Hindu Heritage",
    title: "Sri Muthumariamman Temple",
    subtitle:
      "A vibrant Dravidian-style Hindu temple in Matale known for its towering Raja Gopuram, religious inclusivity, and grand annual chariot festival.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Matale/sri-muthumariamman-temple/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "One of Sri Lanka’s Most Impressive Hindu Temples",
    paragraphs: [
      "The Sri Muthumariamman Temple, also known as Sri Muthumariamman Kovil, is one of the most important Hindu shrines in Matale and one of the most visually striking temples in Sri Lanka.",
      "Located in the heart of the town, the temple is renowned for its colorful Dravidian architecture, massive Raja Gopuram, and its role as a symbol of cultural and religious harmony.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "religious-significance",
      kicker: "Religious Significance",
      title: "The Goddess Mariamman",
      align: "left",

      content: [
        {
          type: "p",
          text: "The temple is dedicated to Mariamman, the Hindu goddess associated with rain, fertility, and protection from diseases such as smallpox and cholera.",
        },

        {
          type: "p",
          text: "The name Mariamman is traditionally understood through the Tamil words <em>Muthu</em> meaning pearl, <em>Mari</em> meaning rain, and <em>Amman</em> meaning mother.",
        },

        {
          type: "split-paragraph",
          heading: "Religious Inclusivity",
          headingLevel: "h3",

          paragraphs: [
            "The temple is notable for its strong tradition of religious inclusivity and is visited by both Hindus and Buddhists.",
            "Many Buddhists in the region associate Mariamman with the Goddess Pattini, who is linked with fertility, protection, and healing in Sri Lankan Buddhist traditions.",
            "This shared reverence has helped make the temple an important cultural landmark in Matale.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Matale/sri-muthumariamman-temple/shrine.webp`,
          imageAlt: "Sri Muthumariamman Temple shrine area",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "architecture",
      kicker: "Architecture",
      title: "Dravidian Design and the Raja Gopuram",
      align: "left",

      content: [
        {
          type: "p",
          text: "The temple is one of the finest examples of Dravidian-style Hindu architecture in Sri Lanka.",
        },

        {
          type: "p",
          text: "Its exterior is filled with vibrant colors, layered carvings, and elaborate sculptural detail typical of South Indian temple traditions.",
        },

        {
          type: "h3",
          text: "The Raja Gopuram",
        },

        {
          type: "p",
          text: "The temple’s most famous feature is the towering Raja Gopuram, or Royal Tower, positioned above the main entrance.",
        },

        {
          type: "p",
          text: "<strong>Height:</strong> Approximately 32.9 meters (108 feet), making it one of the tallest and largest gopurams in Sri Lanka.",
        },

        {
          type: "p",
          text: "<strong>Statues:</strong> The tower is decorated with 1,008 statues representing various Hindu deities and mythological figures.",
        },

        {
          type: "split-paragraph",
          heading: "Construction and Restoration",
          headingLevel: "h3",

          paragraphs: [
            "The present temple structure was built in 1874 and was largely funded by the wealthy Nattukkottai Chettiar merchant community.",
            "The temple suffered major damage during the anti-Tamil riots of July 1983 but was later carefully restored by the local community.",
            "Its restoration reaffirmed the temple’s importance as both a spiritual center and a symbol of resilience.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Matale/sri-muthumariamman-temple/gopuram.webp`,
          imageAlt: "Raja Gopuram of Sri Muthumariamman Temple",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "theru-festival",
      kicker: "Festival",
      title: "The Annual Theru Festival",
      align: "left",

      content: [
        {
          type: "p",
          text: "The temple is especially famous for its annual Theru Festival, also known as the Chariot Festival.",
        },

        {
          type: "p",
          text: "Held usually in February or March, it is considered one of the largest Hindu religious festivals in Sri Lanka.",
        },

        {
          type: "h3",
          text: "Festival Processions",
        },

        {
          type: "p",
          text: "During the festival, large and richly decorated chariots carrying statues of Hindu deities are pulled through the streets of Matale.",
        },

        {
          type: "p",
          text: "The processions often include statues of Mariamman, Shiva, and Ganesha accompanied by music, traditional rituals, and large crowds of devotees.",
        },

        {
          type: "p",
          text: "The event transforms the town into a vibrant cultural and religious celebration attracting both pilgrims and visitors.",
        },
      ],
    },

    {
      type: "text",
      id: "visitor-information",
      kicker: "Visitor Information",
      title: "Opening Hours, Tickets, and Etiquette",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Opening Hours",
        },

        {
          type: "p",
          text: "The temple is generally open from around 4:30 AM to 8:00 PM daily, though specific puja and prayer times may vary.",
        },

        {
          type: "h3",
          text: "Entrance Fee",
        },

        {
          type: "p",
          text: "<strong>Visitor Ticket:</strong> Approximately LKR 300, though prices may vary.",
        },

        {
          type: "split-paragraph",
          heading: "Dress Code and Etiquette",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Footwear:</strong> Shoes must be removed before entering the temple grounds.",
            "<strong>Dress Code:</strong> Shorts and revealing clothing are generally not permitted. Shoulders and knees should be covered.",
            "<strong>Respectful Behaviour:</strong> Visitors should remain respectful during prayer times and avoid disturbing worshippers.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Matale/sri-muthumariamman-temple/temple-interior.webp`,
          imageAlt: "Colorful interior details of Sri Muthumariamman Temple",
          mediaPosition: "right",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=7.301667994730097,80.63377615086034",
        },
      ],
    },
  ],
};

export default MataleSriMuthumariammanTempleArticle;