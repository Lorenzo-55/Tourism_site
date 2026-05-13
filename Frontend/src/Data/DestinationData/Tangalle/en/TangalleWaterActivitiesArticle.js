const TangalleWaterActivitiesArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Tangalle", to: "/places/tangalle" },
    { label: "Water Activities" },
  ],

  hero: {
    kicker: "Surfing & Diving",
    title: "Water Activities",
    subtitle:
      "Surfing bays, reef breaks, snorkeling spots, diving sites, and warm Indian Ocean waters along the Tangalle coast.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Tangalle/water-activities/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Surfing, Diving, and Snorkeling Around Tangalle",
    paragraphs: [
      "Tangalle is a relaxed base for water activities on Sri Lanka’s southern coast, with nearby surfing beaches, diving spots, sheltered bays, and snorkeling locations. :contentReference[oaicite:0]{index=0}",
      "While Tangalle’s main beaches are better known for scenery and relaxation, several excellent surf and dive locations can be reached within a short tuk-tuk ride.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "surfing-season",
      kicker: "Surfing",
      title: "Surf Season and Conditions",
      align: "left",

      content: [
        {
          type: "p",
          text: "Tangalle is an excellent base for surfing on Sri Lanka’s southern coast, especially because several well-known surf bays are located nearby.",
        },

        {
          type: "split-paragraph",
          heading: "Best Surf Season",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Peak Season:</strong> November to April offers the best conditions, with cleaner swells, lighter winds, and more reliable surf.",
            "<strong>Off-Season:</strong> From May to October, the southwest monsoon creates less consistent conditions and rougher seas.",
            "During the off-season, many experienced surfers move toward Sri Lanka’s east coast, particularly Arugam Bay.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/water-activities/surfing.webp`,
          imageAlt: "Surfing near Tangalle",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "Early mornings usually provide the cleanest waves and lightest winds across the southern coast.",
        },
      ],
    },

    {
      type: "text",
      id: "surf-spots",
      kicker: "Surf Spots",
      title: "Best Surf Beaches Near Tangalle",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Hiriketiya Beach",
        },

        {
          type: "p",
          text: "Hiriketiya — often called ‘Hiri’ — is the most famous surf spot near Tangalle.",
        },

        {
          type: "p",
          text: "The horseshoe-shaped bay offers both beginner-friendly beach breaks and an intermediate reef break on the eastern side of the bay.",
        },

        {
          type: "p",
          text: "<strong>Level:</strong> Beginner to Intermediate.",
        },

        {
          type: "p",
          text: "<strong>Distance:</strong> Approximately 20–30 minutes from Tangalle by tuk-tuk.",
        },

        {
          type: "split-paragraph",
          heading: "Other Nearby Surf Spots",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Unakuruwa:</strong> A quieter right-hand reef point break better suited for intermediate surfers.",
            "<strong>Kudawella:</strong> Gentle white-water waves ideal for complete beginners and first surf lessons.",
            "<strong>Nilwella:</strong> Beginner-friendly sandy-bottom surf spot with both left and right breaks.",
            "Goyambokka and Tangalle Beach itself are generally not considered good surf beaches because of heavy shorebreak conditions.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/water-activities/hiriketiya.webp`,
          imageAlt: "Hiriketiya surf bay near Tangalle",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "surf-schools",
      kicker: "Lessons & Rentals",
      title: "Surf Schools Around Tangalle",
      align: "left",

      content: [
        {
          type: "p",
          text: "Surf schools around Tangalle often operate as mobile schools, selecting the best beach each day depending on conditions and student skill level.",
        },

        {
          type: "h3",
          text: "Bandula Surfing School",
        },

        {
          type: "p",
          text: "Known for its focus on safety, certified instructors, and lessons tailored for beginner through advanced surfers.",
        },

        {
          type: "p",
          text: "Lessons are often held at locations such as Hiriketiya, Nilwella, or Unakuruwa depending on wave conditions.",
        },

        {
          type: "h3",
          text: "Tangalle Surf School",
        },

        {
          type: "p",
          text: "Offers private and group lessons, equipment rental, transport to surf spots, and ocean safety guidance.",
        },

        {
          type: "split-paragraph",
          heading: "Surfing Tips",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Book a Lesson:</strong> Especially recommended for beginners unfamiliar with reef conditions and local currents.",
            "<strong>Reef Awareness:</strong> Several nearby surf breaks are reef breaks, so caution is needed around shallow sections.",
            "<strong>Equipment:</strong> Schools usually provide boards, rash guards, and transport.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/water-activities/surf-school.webp`,
          imageAlt: "Surf lesson near Tangalle",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "diving",
      kicker: "Diving",
      title: "Diving Around Tangalle",
      align: "left",

      content: [
        {
          type: "p",
          text: "Tangalle also offers diving opportunities, with reef dives, wreck sites, and warm tropical waters along the southern coastline.",
        },

        {
          type: "p",
          text: "<strong>Best Season:</strong> November/December to April generally provides the calmest sea and best visibility.",
        },

        {
          type: "p",
          text: "Visibility can vary between approximately 7–10 meters, reaching 15–20 meters during especially good conditions.",
        },

        {
          type: "split-paragraph",
          heading: "Dive Sites and Marine Life",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Cargo Wreck / Beauty 25:</strong> Popular wreck dive site around 25 meters deep.",
            "<strong>Underwater Reef Museum:</strong> Artificial underwater attraction created with submerged vehicles and statues, often used for snorkeling and beginner dives.",
            "Marine life includes angelfish, lionfish, pufferfish, parrotfish, triggerfish, octopus, lobsters, turtles, and occasionally whale sharks.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/water-activities/diving.webp`,
          imageAlt: "Diving near Tangalle",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "Several dive centers in the area offer PADI courses, Discover Scuba Diving experiences, guided dives, and equipment rental.",
        },
      ],
    },

    {
      type: "text",
      id: "snorkeling",
      kicker: "Snorkeling",
      title: "Snorkeling Near Tangalle",
      align: "left",

      content: [
        {
          type: "p",
          text: "Snorkeling is possible in calmer sheltered bays near Tangalle, particularly during the dry season when visibility improves.",
        },

        {
          type: "p",
          text: "Locations such as Unakuruwa and parts of Nilwella offer gentler conditions suitable for casual snorkeling.",
        },

        {
          type: "split-paragraph",
          heading: "Snorkeling Conditions",
          headingLevel: "h3",

          paragraphs: [
            "The Underwater Reef Museum is also known as a snorkeling location because of its shallow depth.",
            "Snorkeling tours are commonly organized by local dive centers and may include transport between nearby bays.",
            "Snorkeling gear can usually be rented directly from local dive operators.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/water-activities/snorkeling.webp`,
          imageAlt: "Snorkeling in the Tangalle area",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "<strong>Water Temperature:</strong> The ocean remains warm year-round, generally between 27°C and 30°C.",
        },
      ],
    },
  ],
};

export default TangalleWaterActivitiesArticle;