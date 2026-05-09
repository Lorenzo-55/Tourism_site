const KitulgalaAdventureActivitiesArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Kitulgala", to: "/places/kitulgala" },
    { label: "Adventure Activities" },
  ],

  hero: {
    kicker: "Adventure Sports",
    title: "Adventure Activities",
    subtitle:
      "Canyoning, waterfall abseiling, confidence jumps, and zip-lining through the rainforests and rivers of Kitulgala.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kitulgala/adventure-activities/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Rainforest Adventure in Kitulgala",
    paragraphs: [
      "Kitulgala is one of Sri Lanka’s top adventure destinations, combining tropical rainforest landscapes with river-based outdoor activities.",
      "Beyond white-water rafting, the area is famous for canyoning, confidence jumps, waterfall abseiling, and zip-lining, offering a mix of adrenaline, nature, and teamwork experiences.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "canyoning-rock-sliding",
      kicker: "Rainforest Adventure",
      title: "Canyoning & Rock Sliding",
      align: "left",

      content: [
        {
          type: "p",
          text: "Canyoning is one of Kitulgala’s signature adventure activities and is usually combined with natural rock slides, confidence jumps, trekking, and swimming.",
        },

        {
          type: "p",
          text: "The activity takes place mainly in the Kataran-Oya Stream, a scenic tributary of the Kelani River surrounded by rainforest.",
        },

        {
          type: "split-paragraph",
          heading: "The Canyoning Experience",
          headingLevel: "h3",

          paragraphs: [
            "Participants navigate through rocky stream sections, natural pools, and smooth water-worn rock formations.",
            "The route combines trekking, swimming, sliding down natural waterslides, and jumping into deep rainforest pools.",
            "The experience usually lasts around 2 to 3 hours, often including a short rainforest trek to the canyoning area.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/adventure-activities/canyoning.webp`,
          imageAlt: "Canyoning in Kitulgala rainforest streams",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Activities Included",
        },

        {
          type: "p",
          text: "<strong>Natural Rock Slides:</strong> Smooth rock formations act as natural waterslides into clear pools.",
        },

        {
          type: "p",
          text: "<strong>Confidence Jumps:</strong> Jumps from rocky ledges and mini-waterfalls into deep natural pools.",
        },

        {
          type: "p",
          text: "<strong>Swimming:</strong> Participants swim through sections of the stream and pools.",
        },

        {
          type: "p",
          text: "<strong>Trekking:</strong> Rainforest hiking forms part of the journey.",
        },

        {
          type: "h3",
          text: "Difficulty and Safety",
        },

        {
          type: "p",
          text: "<strong>Difficulty:</strong> Usually considered beginner to intermediate level.",
        },

        {
          type: "p",
          text: "<strong>Safety Equipment:</strong> Operators provide helmets, life jackets, and professional guidance.",
        },

        {
          type: "p",
          text: "<strong>Fitness:</strong> Moderate physical fitness and comfort walking on slippery terrain are recommended.",
        },

        {
          type: "p",
          text: "<strong>Age Limit:</strong> Typically suitable for participants aged around 7 years and above.",
        },

        {
          type: "split-paragraph",
          heading: "Best Time to Go",
          headingLevel: "h4",

          paragraphs: [
            "The drier months from January to April usually provide calmer and more predictable water levels.",
            "However, canyoning is commonly available throughout the year depending on weather and river conditions.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/adventure-activities/rock-sliding.webp`,
          imageAlt: "Natural rock sliding in Kitulgala",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "waterfall-abseiling",
      kicker: "Extreme Adventure",
      title: "Waterfall Abseiling",
      align: "left",

      content: [
        {
          type: "p",
          text: "Waterfall abseiling, also known as waterfall rappelling, is one of the most intense adventure sports available in the Kitulgala region.",
        },

        {
          type: "p",
          text: "The activity involves descending a steep rock face beside rushing water while secured to a rope and harness system.",
        },

        {
          type: "split-paragraph",
          heading: "Descending Sandun Ella",
          headingLevel: "h3",

          paragraphs: [
            "The main waterfall abseiling site is Sandun Ella Waterfall near Belilena Cave.",
            "The descent is approximately 105 to 120 feet high, creating a dramatic and adrenaline-filled experience.",
            "Participants descend directly beside powerful cascading water into a natural rainforest pool below.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/adventure-activities/waterfall-abseiling.webp`,
          imageAlt: "Waterfall abseiling in Kitulgala",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "The Experience",
        },

        {
          type: "p",
          text: "<strong>Rainforest Trek:</strong> The activity usually begins with a jungle hike lasting between 30 minutes and 1 hour.",
        },

        {
          type: "p",
          text: "<strong>Safety Briefing:</strong> Professional guides explain rope handling, body positioning, and descent techniques.",
        },

        {
          type: "p",
          text: "<strong>The Descent:</strong> Participants control their own pace while descending the waterfall face.",
        },

        {
          type: "p",
          text: "<strong>Natural Pool:</strong> The route ends in a freshwater pool suitable for swimming.",
        },

        {
          type: "h3",
          text: "Safety and Requirements",
        },

        {
          type: "p",
          text: "<strong>Difficulty:</strong> More challenging than standard canyoning but still suitable for adventurous beginners.",
        },

        {
          type: "p",
          text: "<strong>Experience Needed:</strong> No previous abseiling experience is required.",
        },

        {
          type: "p",
          text: "<strong>Equipment:</strong> International-standard ropes, harnesses, helmets, and safety systems are used by reputable operators.",
        },

        {
          type: "p",
          text: "<strong>What to Wear:</strong> Quick-dry clothing and shoes with strong grip are recommended.",
        },

        {
          type: "p",
          text: "Waterfall abseiling is often combined with rafting or canyoning as part of a full-day adventure package.",
        },
      ],
    },

    {
      type: "text",
      id: "confidence-jumps",
      kicker: "Adrenaline Activity",
      title: "Confidence Jumps",
      align: "left",

      content: [
        {
          type: "p",
          text: "Confidence jumps are one of Kitulgala’s most popular water-based adventure experiences and are commonly included in canyoning packages.",
        },

        {
          type: "p",
          text: "The activity focuses on overcoming fear and leaping from natural rock ledges into deep rainforest pools.",
        },

        {
          type: "split-paragraph",
          heading: "The Jump Experience",
          headingLevel: "h3",

          paragraphs: [
            "The jumps take place in the Kataran-Oya Stream where water has carved deep pools and smooth rock formations.",
            "Participants can gradually progress from lower beginner jumps to higher and more challenging leaps.",
            "The combination of rainforest scenery and clear water makes the experience both thrilling and scenic.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/adventure-activities/confidence-jumps.webp`,
          imageAlt: "Confidence jump into rainforest pools",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Jump Heights",
        },

        {
          type: "p",
          text: "<strong>Standard Jumps:</strong> Usually range from around 4 feet up to approximately 15 feet (5 meters).",
        },

        {
          type: "p",
          text: "<strong>Advanced Jumps:</strong> Some advanced canyoning locations may include jumps as high as 40 feet.",
        },

        {
          type: "h3",
          text: "Safety",
        },

        {
          type: "p",
          text: "<strong>Equipment:</strong> Helmets and life jackets are provided.",
        },

        {
          type: "p",
          text: "<strong>Guides:</strong> Certified guides inspect water depth and supervise each jump.",
        },

        {
          type: "p",
          text: "<strong>Suitability:</strong> Suitable for beginners, families, and team-building groups with moderate physical fitness.",
        },

        {
          type: "p",
          text: "<strong>Minimum Age:</strong> Commonly around 7 years for standard routes.",
        },
      ],
    },

    {
      type: "text",
      id: "zip-lining",
      kicker: "Aerial Adventure",
      title: "Zip-lining",
      align: "left",

      content: [
        {
          type: "p",
          text: "Zip-lining is a popular complementary activity in Kitulgala and is often included alongside rafting and canyoning adventures.",
        },

        {
          type: "p",
          text: "The experience allows visitors to glide above rainforest canopy and river scenery from an elevated perspective.",
        },

        {
          type: "split-paragraph",
          heading: "Flying Above the Rainforest",
          headingLevel: "h3",

          paragraphs: [
            "Kitulgala’s ziplines are usually around 300 to 400 meters long and suspended roughly 30 feet above the ground.",
            "The activity offers panoramic views of dense jungle and sections of the Kelani River.",
            "Although short in duration, it provides a fast and exciting aerial experience.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kitulgala/adventure-activities/zipline.webp`,
          imageAlt: "Zip-lining above Kitulgala rainforest",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Visitor Information",
        },

        {
          type: "p",
          text: "<strong>Duration:</strong> Usually around 5 to 10 minutes plus briefing and preparation time.",
        },

        {
          type: "p",
          text: "<strong>Experience Needed:</strong> No prior zip-lining experience is necessary.",
        },

        {
          type: "p",
          text: "<strong>Typical Age Limit:</strong> Often around 10 years old depending on the operator.",
        },

        {
          type: "p",
          text: "<strong>Weight Restrictions:</strong> Operators commonly apply minimum and maximum weight limits for safety.",
        },

        {
          type: "p",
          text: "<strong>Safety:</strong> Reputable operators provide harnesses, helmets, and professional supervision.",
        },

        {
          type: "p",
          text: "Zip-lining provides a different perspective of Kitulgala’s rainforest environment and is a popular addition to full-day adventure itineraries.",
        },
      ],
    },
  ],
};

export default KitulgalaAdventureActivitiesArticle;