const TangalleArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Tangalle" },
  ],

  hero: {
    kicker: "Southern Province",
    title: "Tangalle",
    subtitle:
      "A relaxed coastal town known for wide beaches, fishing activity, surfing access, and nature-based attractions along Sri Lanka’s southern shoreline.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Tangalle/tangalle-hero.jpg`,
  },

  overview: {
    kicker: "Overview",
    title: "A Scenic Coastal Town with a Quieter Character",
    paragraphs: [
      "Tangalle is a coastal town in Sri Lanka’s Southern Province, located in the Hambantota District. Known for its broad beaches, rocky features, and palm-lined shoreline, it offers a more spacious and often quieter beach experience than some of the island’s busier southern destinations.",
      "The town functions both as a regional fishing harbor and as a growing tourism center. This combination gives Tangalle a character that blends working coastal life with a more laid-back style of travel focused on beaches, nature, and nearby excursions.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "identity",
      kicker: "Character",
      title: "Coastline, Name, and Local Setting",
      align: "left",
      paragraphs: [
        "The name Tangalle means “protruding rock,” a reference to the rocky features found along parts of the coastline. These outcrops create a contrast with the area’s long sandy beaches and help define the visual identity of the town.",
        "Although Tangalle is increasingly known as a tourist destination, it also remains an active coastal settlement with a functioning fishing harbor. This gives the town a more grounded and local atmosphere compared to places centered almost entirely on tourism.",
      ],
    },

    {
      type: "text",
      id: "beaches",
      kicker: "Beaches",
      title: "Wide Sands and a More Peaceful Shoreline",
      align: "left",
      content: [
        {
          type: "p",
          text: "Tangalle and its surrounding coastline are known for wide sandy beaches lined with palm trees. These beaches are often quieter than other parts of Sri Lanka’s south coast, making the area appealing to travelers looking for more space and a slower pace.",
        },
        {
          type: "p",
          text: "Popular beaches in the region include Goyambokka Beach and Silent Beach. Both reflect the area’s reputation for scenic coastal beauty, although sea conditions can be rough in certain places, so caution is needed when entering the water.",
        },
      ],
    },

    {
      type: "text",
      id: "surfing",
      kicker: "Surfing",
      title: "A Convenient Base for Nearby Breaks",
      align: "left",
      content: [
        {
          type: "p",
          text: "Tangalle is a good base for surfing, although many of the most reliable and popular breaks are found a short drive to the west rather than directly in town. This makes the area especially practical for travelers who want beach accommodation while still accessing different surf spots nearby.",
        },
        {
          type: "p",
          text: "For beginners, booking a lesson is one of the best ways to approach surfing in the area. Surf schools can provide equipment, guidance, and transport to the safest and most suitable break based on current conditions and skill level.",
        },
        {
          type: "split-paragraph",
          heading: "Practical Surf Conditions",
          headingLevel: "h4",
          paragraphs: [
            "Early mornings usually offer the lightest winds and the cleanest wave conditions, making them the preferred time for most sessions. This is especially useful for learners or anyone looking for more manageable surf.",
            "Because some breaks in the region are reef breaks, local guidance is important. Understanding the tide, listening to instructors, and using reef protection where needed can help avoid injury and make the experience much safer.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/surfing.jpg`,
          imageAlt: "Surfing near Tangalle",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "water-activities",
      kicker: "Activities",
      title: "More Than a Beach Destination",
      align: "left",
      paragraphs: [
        "In addition to surfing, Tangalle also offers diving and snorkeling opportunities, adding more variety to the coastal experience. These activities complement the town’s appeal as a place where visitors can combine rest with light adventure.",
        "The wider area is also well suited to short trips focused on nature, temples, and marine life, making Tangalle a practical base for exploring this part of the southern coast.",
      ],
    },

    {
      type: "cards",
      kicker: "Highlights",
      title: "Points of Interest",
      align: "center",

      items: [
        {
          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/water-activities.jpg`,
          imageAlt: "Water activities in Tangalle",
          title: "Water Activities",
          description:
            "Tangalle offers a mix of coastal activities including surfing, snorkeling, and diving, with nearby breaks and marine experiences adding variety to a beach stay.",
          to: "/places/tangalle/water-activities",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/beaches.jpg`,
          imageAlt: "Beaches in Tangalle",
          title: "Beaches",
          description:
            "Wide sandy beaches such as Goyambokka Beach and Silent Beach give Tangalle its relaxed coastal appeal and quieter atmosphere.",
          to: "/places/tangalle/beaches",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/nature.jpg`,
          imageAlt: "Nature and unique attractions near Tangalle",
          title: "Nature & Unique Attractions",
          description:
            "The surrounding area includes scenic coastline, rocky landscapes, and distinctive sites that add depth beyond the main beach experience.",
          to: "/places/tangalle/nature-unique-attractions",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/rekawa-turtles.jpg`,
          imageAlt: "Turtle watching at Rekawa Beach",
          title: "Turtle Watching (Rekawa Beach)",
          description:
            "Rekawa Beach is one of the region’s best-known wildlife experiences, where sea turtles are known to come ashore to nest.",
          to: "/places/tangalle/turtle-watching-rekawa-beach",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/mulkirigala.jpg`,
          imageAlt: "Mulkirigala Rock Temple",
          title: "Mulkirigala Rock Temple",
          description:
            "This striking rock temple inland from Tangalle offers religious significance, elevated views, and a different cultural dimension to the coastal area.",
          to: "/places/tangalle/mulkirigala-rock-temple",
        },
        {
          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/nilwella-gallery.jpg`,
          imageAlt: "The Nilwella Underwater Gallery",
          title: "The Nilwella Underwater Gallery",
          description:
            "An unusual marine attraction near Tangalle, combining underwater exploration with a more distinctive and memorable coastal experience.",
          to: "/places/tangalle/the-nilwella-underwater-gallery",
        },
      ],
    },
  ],
};

export default TangalleArticle;