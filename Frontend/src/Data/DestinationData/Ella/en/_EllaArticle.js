const EllaArticle = {
  breadcrumbItems: [
    { label: "Places", to: "/places" },
    { label: "Ella", to: "/places/ella" },
  ],

  hero: {
    kicker: "Central Highlands",
    title: "Ella",
    subtitle:
      "A once-quiet mountain village transformed into one of Sri Lanka’s most iconic destinations for nature, hiking, and scenic train travel.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Ella/hero/ella-hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "From Remote Village to Tourism Hotspot",
    paragraphs: [
      "Ella, Sri Lanka, was once a sleepy and remote mountain village, but in recent years it has rapidly become one of the most popular tourist destinations in the Central Highlands.",
      "Today, it is known for its dramatic landscapes, hiking trails, tea country scenery, and one of the most famous train journeys in the world.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "ella-tourism",
      kicker: "Tourism",
      title: "Tourism Development",
      align: "left",
      paragraphs: [
        "Ella’s rise in popularity is closely linked to the spectacular train journey between Kandy and Ella, which has helped put the town on the global travel map. What was once a quiet outpost is now a lively destination filled with accommodations, cafes, and restaurants.",
        "The town attracts backpackers, hikers, and nature lovers looking to experience Sri Lanka’s hill country at a slower pace, surrounded by tea plantations, misty mountains, and waterfalls.",
      ],
    },

    {
      type: "text",
      id: "train-journey",
      kicker: "Experience",
      title: "The Kandy to Ella Train Journey",
      align: "left",
      content: [
        {
          type: "p",
          text: "The train journey from Kandy to Ella, passing through Nuwara Eliya, is widely considered one of the most beautiful train rides in the world and is a highlight of any visit to Sri Lanka.",
        },
        {
          type: "p",
          text: "The route winds through lush green highlands, tea plantations, mist-covered mountains, waterfalls, and small rural villages. The slow pace of the train allows travelers to fully take in the scenery over a journey that typically lasts between 6 to 8 hours.",
        },
        {
          type: "p",
          text: "Many travelers choose to board at Nanu Oya (near Nuwara Eliya) or take only a portion of the route, especially the stretch toward Ella, which is considered the most scenic.",
        },

        {
          type: "split-paragraph",
          heading: "Tickets and Classes",
          headingLevel: "h4",
          paragraphs: [
            "Demand for tickets is very high, especially for reserved seating. First class offers the most comfort with air conditioning and large windows, but often limits the open-air experience. Second class reserved is the most popular option, balancing comfort with open windows and doors.",
            "Non-reserved tickets are only available on the day of travel and do not guarantee a seat. Third class offers the most local and authentic experience but can be crowded and less comfortable for long journeys.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Ella/train/train.webp`,
          imageAlt: "Train journey through Ella",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "Reserved tickets for all classes should be booked well in advance, sometimes one to two months ahead during peak season. Booking can be done through travel agents, accommodations, or official online systems.",
        },

        {
          type: "split-paragraph",
          heading: "Practical Travel Tips",
          headingLevel: "h4",
          paragraphs: [
            "For the best views, sit on the right side from Kandy to Nanu Oya, and on the left side from Nanu Oya to Ella. For the famous Nine Arch Bridge view, standing near an open doorway close to Ella provides the most iconic perspective, but caution is essential.",
            "The journey may experience delays, so tight travel schedules should be avoided. Bringing water, snacks, and a light sweater is recommended, as temperatures can be cool in the mountains despite the tropical climate.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Ella/train/view.webp`,
          imageAlt: "Scenic train views in Ella",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "If reserved seats are unavailable, alternative options include traveling in reverse from Ella to Kandy, which can be less crowded, or completing only a portion of the route, such as the Nanu Oya to Ella segment.",
        },
        {
          type: "p",
          text: "Overall, the journey is unforgettable, offering a unique combination of natural beauty and traditional rail travel, but proper planning is essential to fully enjoy the experience.",
        },
      ],
    },

    {
      type: "cards",
      kicker: "Explore",
      title: "Points of Interest",
      align: "center",
      items: [
        {
          title: "Dhowa Rock Temple",
          description: "A historic temple known for its unfinished Buddha carving.",
          image: `${import.meta.env.BASE_URL}Destinations/Ella/poi/dhowa.webp`,
          to: "/places/ella-dhowa-rock-temple",
        },
        {
          title: "Ravana / Ramayana",
          description: "Mythological sites and legends connected to King Ravana and the Ramayana story.",
          image: `${import.meta.env.BASE_URL}Destinations/Ella/poi/ravana-legends.webp`,
          to: "/places/ella-ravana-legends",
        },
        {
          title: "Hiking & Viewpoints",
          description: "Scenic hikes and panoramic viewpoints across the Ella highlands.",
          image: `${import.meta.env.BASE_URL}Destinations/Ella/poi/ella-rock.webp`,
          to: "/places/ella-hiking-viewpoints",
        },
        {
          title: "Nine Arch Bridge",
          description: "The iconic railway bridge surrounded by jungle scenery.",
          image: `${import.meta.env.BASE_URL}Destinations/Ella/poi/nine-arch.webp`,
          to: "/places/ella-nine-arch-bridge",
        },
        {
          title: "Tea Estates & Factories",
          description: "Tea estates and factories offering tours, tastings, and hill country views.",
          image: `${import.meta.env.BASE_URL}Destinations/Ella/poi/halpewatte.webp`,
          to: "/places/ella-tea-estates-factories",
        },
      ],
    },
  ],
};

export default EllaArticle;