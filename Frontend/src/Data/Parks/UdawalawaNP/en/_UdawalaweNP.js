const UdawalaweArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Udawalawe National Park" },
  ],

  hero: {
    kicker: "Wildlife & Nature",
    title: "Udawalawe National Park",
    subtitle:
      "One of the best places in the world to see wild elephants up close in their natural habitat.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Udawalawe/udawalawe1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Premier Elephant Safari Destination",
    paragraphs: [
      "Udawalawe National Park is one of Sri Lanka’s most popular wildlife destinations, known for its high density of elephants and open landscapes that make sightings frequent and clear. Located in the dry zone, the park offers a savanna-like environment shaped by forests, grasslands, and the expansive Udawalawe Reservoir.",
      "Established in 1972, the park was created to protect the watershed of the Udawalawe Reservoir and provide a sanctuary for elephants displaced by its construction. Today, it stands as a key site for conservation, research, and ecotourism.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "wildlife",
      kicker: "Nature",
      title: "Wildlife and Landscape",
      align: "left",
      paragraphs: [
        "Udawalawe is home to a large and stable population of elephants, with hundreds living within and around the park. Herds are commonly seen throughout the day, making it one of the most reliable locations in Asia for elephant sightings.",
        "In addition to elephants, the park supports a variety of wildlife including water buffalo, spotted deer, monkeys, crocodiles, and numerous bird species. With over 200 recorded bird species, it is also a strong destination for birdwatching.",
        "Although leopards are present, sightings are less frequent compared to parks like Yala, due to their lower numbers and the open nature of the terrain.",
      ],
    },

    {
      type: "text",
      id: "safari",
      kicker: "Experience",
      title: "Safari Experience",
      align: "left",
      content: [
        {
          type: "p",
          text: "Jeep safaris are the main activity in Udawalawe National Park, offering close encounters with wildlife across open grasslands and near water sources. The landscape allows for excellent visibility, increasing the chances of observing animals in natural behavior.",
        },
        {
          type: "p",
          text: "The best times for safaris are early morning and late afternoon, when temperatures are cooler and animals are more active. During these periods, elephants are often seen gathering near water bodies to drink and bathe.",
        },
        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.475190342777124,80.87608435534608",
        },
      ],
    },

    {
      type: "text",
      id: "eth",
      kicker: "Conservation",
      title: "Elephant Transit Home",
      align: "left",
      paragraphs: [
        "The Elephant Transit Home (ETH) in Udawalawe is a dedicated rehabilitation center for orphaned and injured elephant calves. Its primary goal is to care for young elephants and eventually release them back into the wild, typically into Udawalawe National Park.",
        "Unlike traditional elephant orphanages, the ETH follows a strict policy of minimal human interaction to ensure the animals remain wild and capable of surviving independently. Since its establishment in 1995, many elephants have been successfully reintroduced into their natural habitat.",
      ],

      content: [
        {
          type: "split-paragraph",
          heading: "Visiting the Transit Home",
          headingLevel: "h4",
          paragraphs: [
            "Visitors can observe the elephants during scheduled feeding sessions, where calves gather to drink milk and interact with each other from a safe distance. Viewing is done from a raised platform, ensuring minimal disturbance to the animals.",
            "Feeding sessions take place several times a day, and arriving early is recommended to secure a good viewing spot. This experience is considered one of the most ethical ways to observe elephants in a conservation-focused environment.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Udawalawe/udawalawe2.webp`,
          imageAlt: "Elephant Transit Home feeding session",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "reservoir",
      kicker: "Landscape",
      title: "Udawalawe Reservoir",
      align: "left",
      paragraphs: [
        "The Udawalawe Reservoir is a defining feature of the region and plays a central role in sustaining wildlife throughout the year. As one of the few permanent water sources in the area, it attracts elephants, buffalo, and other animals, particularly during the dry season.",
        "The reservoir also supports a rich variety of birdlife, including herons, storks, kingfishers, and birds of prey. Reptiles such as mugger crocodiles and monitor lizards are often seen along its banks.",
        "Many safari routes pass along the edges of the reservoir, offering some of the best opportunities to observe wildlife in open settings.",
      ],
    },

    {
      type: "text",
      id: "visiting",
      kicker: "Travel Guide",
      title: "Visitor Information",
      align: "left",
      paragraphs: [
        "Udawalawe is accessible year-round and is one of the easier national parks in Sri Lanka to visit. Its open terrain and well-defined tracks make navigation straightforward compared to more forested reserves.",
        "In addition to safaris, visitors can explore viewpoints along the Udawalawe Dam, which offers panoramic views of the reservoir and surrounding landscape, especially at sunrise and sunset.",
        "The combination of reliable wildlife sightings, accessibility, and conservation-focused attractions makes Udawalawe a well-rounded destination for both first-time and experienced visitors.",
      ],
    },
  ],
};

export default UdawalaweArticle;