const RavanaLegendsArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Ella", to: "/places/ella" },
    { label: "Ravana Legends" },
  ],

  hero: {
    kicker: "Legend & Heritage",
    title: "Ravana Legends",
    subtitle:
      "Mythological sites near Ella connected to King Ravana, Princess Sita, and the Ramayana tradition.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/RavanaLegends/ravana1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Ravana, Sita, and the Legends of Ella",
    paragraphs: [
      "Ravana Falls and Ravana Cave are connected to the legend of King Ravana from the Hindu epic Ramayana.",
      "The legends surrounding Ravana are complex and differ considerably between Indian and Sri Lankan traditions. In the Ramayana, he is known as the demon king of Lanka, while in Sri Lankan traditions he is often remembered as a powerful, learned, and complex ruler.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "ravana-ramayana",
      kicker: "Ramayana",
      title: "Ravana in the Ramayana",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Indian Perspective — The Villain",
        },
        {
          type: "p",
          text: "In the classic Ramayana story, written by Valmiki, Ravana is primarily depicted as the villain.",
        },

        {
          type: "h4",
          text: "The Rakshasa King",
        },
        {
          type: "p",
          text: "Ravana is the king of the Rakshasas, a type of demon or supernatural being, and rules over the golden fortress of Lanka, identified by many with modern Sri Lanka. He had unlawfully seized the kingdom from his half-brother Kubera.",
        },

        {
          type: "h4",
          text: "Ten Heads",
        },
        {
          type: "p",
          text: "Ravana is traditionally depicted with ten heads and twenty arms. This symbolizes his immense knowledge, mastery of the four Vedas and the six Shastras, as well as his indomitable power.",
        },

        {
          type: "h4",
          text: "Invulnerability",
        },
        {
          type: "p",
          text: "Through years of intense meditation and sacrifices to the god Brahma, Ravana obtained the boon of invulnerability to all gods and demons. In his arrogance, he asked for no protection from humans or animals, which he considered insignificant.",
        },

        {
          type: "h4",
          text: "The Abduction of Sita",
        },
        {
          type: "p",
          text: "His downfall begins when he abducts Sita, the wife of Prince Rama, an incarnation of the god Vishnu. This was in retaliation for Rama’s brother Lakshmana cutting off his sister Surpanakha’s nose and ears.",
        },

        {
          type: "h4",
          text: "His Death",
        },
        {
          type: "p",
          text: "Ultimately, Ravana is killed in an epic battle by Rama, who uses his human form to circumvent Ravana’s invulnerability.",
        },
      ],
    },

    {
      type: "text",
      id: "ravana-sri-lanka",
      kicker: "Sri Lankan Traditions",
      title: "Ravana in Sri Lankan Legends",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Sri Lankan Perspective — The Great King",
        },
        {
          type: "p",
          text: "In Sri Lanka, Ravana is often seen as more nuanced and even as a tragic hero.",
        },

        {
          type: "h4",
          text: "Great Scholar and Devout Follower of Shiva",
        },
        {
          type: "p",
          text: "In Sri Lankan lore, Ravana is emphasized as a great scholar, a master of the Vedas, and a gifted musician. He is said to have invented the Ravanahatha, an ancient stringed instrument. Above all, he was an exceptionally devoted follower of the god Shiva.",
        },

        {
          type: "h4",
          text: "Pioneer in Science and Medicine",
        },
        {
          type: "p",
          text: "Ravana is seen as a skilled ruler under whose rule Lanka flourished and made great advances in medicine, especially Ayurveda, and science. He is also attributed with several scriptures on astrology and medicine.",
        },

        {
          type: "h4",
          text: "Technological Prowess",
        },
        {
          type: "p",
          text: "Legend mentions his flying machine, the Pushpaka Vimana, or “flower chariot,” with which he abducted Sita. Some locations in Sri Lanka, such as the Thotupola Mountains, are considered landing sites for this aircraft.",
        },

        {
          type: "h4",
          text: "The National Hero",
        },
        {
          type: "p",
          text: "Many Sri Lankans see Ravana as the mighty king who resisted a foreign invader, King Rama, and as a symbol of national pride and the ancient Hela civilization.",
        },
      ],
    },

    {
      type: "text",
      id: "ramayana-sites",
      kicker: "Ramayana Route",
      title: "Locations Connected to the Ravana Legend",
      align: "left",

      content: [
        {
          type: "p",
          text: "Many tourist and religious sites in the hills of Sri Lanka are closely linked to the Ramayana route.",
        },
        {
          type: "p",
          text: "<strong>Ravana Ella Waterfall and Ravana Cave:</strong> The cave near Ella is said to be one of the places where Ravana imprisoned Sita. Dhowa Rock Temple is also associated with tunnels said to be connected to Ravana’s caves.",
        },
        {
          type: "p",
          text: "<strong>Sita Amman Temple:</strong> Located near Nuwara Eliya, this is believed to be where Sita spent much of her captivity in Ashoka Vatika.",
        },
        {
          type: "p",
          text: "<strong>Divurumpola:</strong> This is traditionally identified as the place where Sita underwent the Agni Pariksha, or trial by fire, to prove her chastity after being rescued by Rama.",
        },
        {
          type: "p",
          text: "In short, the Ravana legends portray an incredibly complex figure: the ultimate antagonist in India, and simultaneously a proud, brilliant, if arrogant, king and cultural icon in Sri Lanka.",
        },
      ],
    },

    {
      type: "text",
      id: "ravana-falls",
      kicker: "Waterfall",
      title: "Ravana Falls",
      align: "left",

      content: [
        {
          type: "split-paragraph",
          heading: "",
          headingLevel: "h4",
          paragraphs: [
            "Ravana Falls, also known as Ravana Ella, is one of Sri Lanka’s most famous and picturesque waterfalls, located in the hills near the town of Ella.",
            "<strong>Location:</strong> The waterfall is located in the Ravana Ella Wildlife Sanctuary, approximately 6 kilometers from Ella, right off the main A23 Ella–Wellawaya Road.",
            "<strong>Height and Appearance:</strong> The waterfall is approximately 25 meters, or 82 feet, high and cascades in multiple tiers over a concave, oval-shaped rock face.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/RavanaLegends/ravana2.webp`,
          imageAlt: "Ravana Falls near Ella",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Best Time to Visit",
        },
        {
          type: "p",
          text: "The waterfall is most impressive during the rainy season, approximately October to March, when it flows in full force. During the dry season, the water flow is considerably less.",
        },

        {
          type: "h3",
          text: "Accessibility",
        },
        {
          type: "p",
          text: "<strong>From Ella:</strong> The waterfall is very easy to reach.",
        },
        {
          type: "p",
          text: "<strong>Tuk-Tuk:</strong> A tuk-tuk ride from Ella takes approximately 10–15 minutes.",
        },
        {
          type: "p",
          text: "<strong>Bus:</strong> Local buses to Wellawaya stop at the waterfall and are a very inexpensive option.",
        },
        {
          type: "p",
          text: "<strong>Access:</strong> The waterfall is directly visible from the main road, making it a popular and accessible photo stop. There is generally no entrance fee to view the waterfall.",
        },

        {
          type: "h3",
          text: "The Legend of Ravana",
        },
        {
          type: "p",
          text: "<strong>Ramayana Epic:</strong> The waterfall is named after the legendary demon king Ravana, the antagonist of the famous Hindu epic, the Ramayana.",
        },
        {
          type: "p",
          text: "<strong>Princess Sita:</strong> Legend says that King Ravana kidnapped Princess Sita, the wife of Lord Rama, and hid her in the caves behind the waterfall, now known as Ravana Ella Cave.",
        },
        {
          type: "p",
          text: "<strong>Bathing:</strong> It is believed that Princess Sita bathed in one of the pools formed by the waterfall’s waters.",
        },

        {
          type: "h3",
          text: "Important Note",
        },
        {
          type: "p",
          text: "It is possible to climb to the base of the waterfall, but caution is strongly advised, as the rocks can be very slippery and the current dangerous, especially during the rainy season. Climbing to the higher levels is generally discouraged due to safety risks.",
        },
        {
          type: "button",
          label: "View Ravana Falls on Google Maps",
          href: "https://www.google.com/maps?q=R3R3%2BCWP%2C%20Wellawaya-Ella-Kumbalwela%20Hwy%2C%20Ella%2C%20Sri%20Lanka",
        },
      ],
    },

    {
      type: "text",
      id: "princess-sita",
      kicker: "Mythology",
      title: "Princess Sita",
      align: "left",

      content: [
        {
          type: "p",
          text: "Princess Sita is a central and very important figure in Hindu mythology, particularly in the epic poem Ramayana.",
        },

        {
          type: "h3",
          text: "Sita in the Ramayana",
        },
        {
          type: "p",
          text: "<strong>Identity:</strong> Sita is the wife of Lord Rama, the seventh avatar of the god Vishnu, and is herself considered an incarnation of the goddess Lakshmi, the goddess of beauty, wealth, and prosperity.",
        },
        {
          type: "p",
          text: "<strong>Meaning:</strong> She is a symbol of the ideal woman and embodies the virtues of loyalty, courage, devotion, and purity. Her name also means “furrow” or “plough’s furrow,” which refers to her mystical birth from the earth.",
        },
        {
          type: "p",
          text: "<strong>The Epic:</strong> The central conflict of the Ramayana revolves around her abduction by the demon king Ravana and Rama’s subsequent quest and war to rescue her.",
        },

        {
          type: "h3",
          text: "Sita and Ravana Falls",
        },
        {
          type: "p",
          text: "The waterfalls and the nearby cave in Sri Lanka are directly linked to the legend of Sita’s captivity.",
        },
        {
          type: "p",
          text: "<strong>Abduction:</strong> After her abduction, Ravana brought her to his kingdom of Lanka, present-day Sri Lanka.",
        },
        {
          type: "p",
          text: "<strong>Residence:</strong> According to local legend, Ravana hid Princess Sita in the caves behind the waterfall, now known as Ravana Ella Cave, to keep her out of sight of her pursuers.",
        },
        {
          type: "p",
          text: "<strong>Bathing:</strong> It is also believed that Sita bathed in the water that pooled at the foot of Ravana Falls.",
        },
        {
          type: "p",
          text: "This mythical connection makes Ravana Falls and Ravana Ella Cave important cultural and historical attractions for both Sri Lankans and international visitors interested in the Ramayana.",
        },
      ],
    },

    {
      type: "text",
      id: "ravana-cave",
      kicker: "Cave",
      title: "Ravana Ella Cave",
      align: "left",

      content: [
        {
          type: "split-paragraph",
          heading: "",
          headingLevel: "h4",
          paragraphs: [
            "Ravana Ella Cave is a historically and mythologically significant site located near the popular tourist town of Ella.",
            "<strong>Hiding Place of Sita:</strong> According to Ramayana legend, this is one of the places where the demon king Ravana imprisoned Princess Sita after abducting her. The cave was hidden in dense jungle at the time.",
            "<strong>Tunnel Network:</strong> The cave is believed to be part of an extensive man-made tunnel network that Ravana allegedly used for rapid and secret movement through the hills. This network is believed to connect to other sites in Sri Lanka, such as Dhowa Rock Temple.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/RavanaLegends/ravana3.webp`,
          imageAlt: "Ravana Ella Cave near Ella",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Archaeology and History",
        },
        {
          type: "p",
          text: "<strong>Prehistoric Occupation:</strong> Excavations have revealed that the cave contains evidence of human habitation dating back more than 25,000 years, indicating that the site was in use long before the time of the Ramayana.",
        },
        {
          type: "p",
          text: "<strong>Ancient Temple:</strong> Close to the cave is the Rawana Ella Temple, a small Buddhist temple that may date back to the 2nd century BC.",
        },

        {
          type: "h3",
          text: "Location and Getting There",
        },
        {
          type: "p",
          text: "<strong>Location:</strong> About 2–3 km from Ella town, perched on a cliff at approximately 4,490 feet above sea level.",
        },
        {
          type: "p",
          text: "<strong>Directions:</strong> It is located near the Ravana Ella Temple and the famous Ravana Falls. From Ella, take the Wellawaya road for about 3 km, then turn off and go up a further 2 km to the Ravana Ella Temple. The trek up to the cave starts from near the temple.",
        },
        {
          type: "p",
          text: "<strong>Transportation:</strong> You can take a tuk-tuk from Ella town or hike to the base of the climb.",
        },

        {
          type: "h3",
          text: "The Climb and Cave Details",
        },
        {
          type: "p",
          text: "<strong>The Ascent:</strong> The cave is reached via a steep path with around 650 to 700 steps.",
        },
        {
          type: "p",
          text: "<strong>Difficulty:</strong> The climb is considered moderate and can be tough. The steps are often uneven, steep, and sometimes broken, replaced by rocks and tree roots. The last few meters can be the most challenging, sometimes requiring climbing up rocks without support.",
        },
        {
          type: "p",
          text: "<strong>Cave Size:</strong> The cave itself is relatively small, measuring about 150 feet long, 50 feet wide, and 60 feet high.",
        },
        {
          type: "p",
          text: "<strong>Exploration:</strong> Visitors are typically only allowed to go about 200 meters inside the cave due to a boulder blocking further entry.",
        },

        {
          type: "h3",
          text: "Timings and Fees",
        },
        {
          type: "p",
          text: "<strong>Opening Hours:</strong> Generally stated as 8:00 AM to 4:00 PM or 5:00 PM.",
        },
        {
          type: "p",
          text: "<strong>Entry Fee:</strong> The ticket price for foreigners is typically around LKR 200–300, approximately 1–2 USD. Prices for locals are lower.",
        },

        {
          type: "h3",
          text: "Visitor Tips",
        },
        {
          type: "p",
          text: "<strong>Best Time to Visit:</strong> Early morning or late afternoon is best to avoid the heat, as the climb is steep. The best time of year to visit is often cited as January to March.",
        },
        {
          type: "p",
          text: "<strong>What to Bring:</strong> Sturdy shoes with good grip, water for the hike, and a torch or flashlight, as it is very dark inside the cave.",
        },
        {
          type: "p",
          text: "<strong>Caution:</strong> The climb is not recommended for the elderly due to the difficulty of the steps.",
        },
        {
          type: "p",
          text: "<strong>Wildlife:</strong> Be aware of monkeys on the trek and avoid carrying food items openly in your hands.",
        },
        {
          type: "p",
          text: "<strong>Proximity to the Falls:</strong> The cave is located behind the famous Ravana Falls, also known as Ravana Ella Waterfall, named after King Ravana.",
        },
        {
          type: "button",
          label: "View Ravana Ella Cave on Google Maps",
          href: "https://www.google.com/maps?q=V27X%2BQFR%2C%20Ella%2C%20Sri%20Lanka",
        },
      ],
    },
  ],
};

export default RavanaLegendsArticle;