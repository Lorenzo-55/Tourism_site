const WeligamaArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Weligama" },
  ],

  hero: {
    kicker: "Southern Province",
    title: "Weligama",
    subtitle:
      "A lively coastal town known for its wide sandy bay, beginner-friendly surf, and easy access to other popular breaks along the south coast.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Weligama/weligama-hero.jpg`,
  },

  overview: {
    kicker: "Overview",
    title: "A Sandy Bay Built Around Surf and Coastal Life",
    paragraphs: [
      "Weligama is a coastal town in the Matara District on Sri Lanka’s southern coast. Its name, meaning “sandy village,” reflects the wide bay that defines the area and gives it a strong identity as both a beach destination and a surfing hub.",
      "Today, Weligama combines the atmosphere of a working fishing town with a growing tourism scene. It is especially popular with surfers, but it also appeals to travelers looking for swimming, diving, yoga, and easy access to nearby coastal attractions.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "beaches",
      kicker: "Beaches",
      title: "A Long Bay for Surfing, Swimming, and Daily Coastal Life",
      align: "left",
      paragraphs: [
        "Weligama Beach is the town’s main coastal draw, stretching along a broad half-moon-shaped bay with golden sand and a shallow sandy bottom. Its protected position helps create gentle, rolling waves, which makes it especially appealing for beginner surfing and relaxed swimming during the calmer season.",
        "The beach has an energetic atmosphere, with a mix of local fishermen, surfers, travelers, cafes, and rental shops lining the shore. It works both as a social beachfront and as one of the most practical places in Sri Lanka to start learning how to surf.",
        "Weligama is also a good base for exploring nearby beaches and surf spots. Midigama, Mirissa, Jungle Beach, and Coconut Point are all within a short tuk-tuk ride, giving visitors access to a wider range of wave types and coastal settings.",
      ],
    },

    {
      type: "text",
      id: "surfing",
      kicker: "Surfing",
      title: "One of Sri Lanka’s Best Places to Learn",
      align: "left",
      content: [
        {
          type: "p",
          text: "Surfing is the main activity in Weligama, and the town is widely regarded as one of the best beginner surf destinations in Sri Lanka. The main beach break runs for roughly 2 kilometers and offers gentle, slow-moving waves that are ideal for first-time surfers and longboarders.",
        },
        {
          type: "p",
          text: "The sandy bottom and low-power waves make the bay more forgiving than reef breaks, while the protected shape of the bay often keeps it surfable even when conditions are less favorable elsewhere on the coast.",
        },
        {
          type: "p",
          text: "Early mornings usually offer the quietest sessions and the cleanest conditions. The main season for the south coast runs from November to April, though Weligama can still work in the off-season, especially for beginners.",
        },

        { type: "h4", text: "Spots for Intermediates and Advanced:" },

        {
          type: "p",
          text: "Weligama Bay also has nearby reef breaks for more experienced surfers, often a short tuk-tuk ride away in the neighboring areas of Midigama and Ahangama.",
        },

        { type: "h5", text: "Fishermen’s Point (or Tuna Reef)" },
        {
          type: "p",
          text: "A reef break near the harbor, good for progressing from the main beach break, offering long, mellow left and right waves, usually around 2 to 6 feet.",
        },

        { type: "h5", text: "Jungle Beach (Left/Right)" },
        {
          type: "p",
          text: "A reef break suitable for intermediate to advanced surfers.",
        },

        { type: "h5", text: "Rams Right (Midigama)" },
        {
          type: "p",
          text: "A technical and more powerful reef break that is best suited to intermediate and advanced surfers.",
        },

        { type: "h5", text: "Plantation Point" },
        {
          type: "p",
          text: "A reef break suitable for a range of levels, including intermediate surfers looking for a first reef experience.",
        },
      ],
    },

    {
      type: "horizontal-scroll",
      kicker: "Activities",
      title: "Coastal Activities in Weligama",
      align: "center",
      titleStyle: "",
      collapsible: false,
      defaultOpen: true,
      toggleLabelOpen: "",
      toggleLabelClose: "",
      items: [
        {
          title: "Surfing",
          description:
            "The signature activity in Weligama, with lessons, rentals, and a variety of waves for different skill levels.",
          image: `${import.meta.env.BASE_URL}Destinations/Weligama/surfing.jpg`,
          imageAlt: "Surfing in Weligama",
        },
        {
          title: "Stilt Fishermen",
          description:
            "Traditional stilt fishermen can sometimes be seen near the shore, adding a recognizable cultural image to the coastline.",
          image: `${import.meta.env.BASE_URL}Destinations/Weligama/stilt-fishermen.jpg`,
          imageAlt: "Stilt fishermen near Weligama",
        },
        {
          title: "Snorkeling & Diving",
          description:
            "Tours operate to nearby coral reefs with marine life including turtles, reef fish, moray eels, and colorful corals.",
          image: `${import.meta.env.BASE_URL}Destinations/Weligama/diving.jpg`,
          imageAlt: "Snorkeling and diving near Weligama",
        },
        {
          title: "Relaxation & Yoga",
          description:
            "Many resorts, guesthouses, and surf camps offer yoga classes and relaxed beachfront spaces with ocean views.",
          image: `${import.meta.env.BASE_URL}Destinations/Weligama/yoga.jpg`,
          imageAlt: "Yoga and relaxation in Weligama",
        },
      ],
    },

    {
      type: "text",
      id: "diving-snorkeling",
      kicker: "Water Activities",
      title: "Snorkeling and Diving on the South Coast",
      align: "left",
      paragraphs: [
        "Weligama is also a good location for diving and snorkeling, particularly during the main south-west coast season from November to mid-April. Sea conditions are usually calmer during this time, and underwater visibility is often best from December to February.",
        "The area is suitable for both beginners and experienced divers. Local dive centers offer guided dives and PADI courses, while the nearby reefs support a variety of marine life including reef fish, moray eels, sea turtles, and colorful corals. In some cases, divers may also encounter whale sharks or manta rays, especially between January and April.",
        "Notable dive sites near Weligama include Dispa Rock, Yala Rock, Patch Point, Noisy Rock, and Mirissa Point. Nearby areas such as Mirissa and Unawatuna also provide additional snorkeling opportunities, sometimes with chances to swim near turtles.",
      ],
    },

    {
      type: "text",
      id: "other-activities",
      kicker: "Beyond the Beach",
      title: "Nearby Experiences and Excursions",
      align: "left",
      paragraphs: [
        "Weligama offers more than just surfing and diving. The town is a convenient base for nearby coastal trips, whether to Mirissa for whale watching or to Midigama for more advanced surf breaks.",
        "Inland experiences are also easy to add to a stay. One of the best-known excursions is a visit to the Handunugoda Tea Estate, where visitors can learn about tea cultivation and production while enjoying a tasting.",
      ],
    },

    {
  type: "cards",
  kicker: "Highlights",
  title: "Points of Interest",
  align: "center",

  items: [
    {
      image: `${import.meta.env.BASE_URL}Destinations/Weligama/nearby-beaches.jpg`,
      imageAlt: "Nearby beaches and surf spots around Weligama",
      title: "Nearby Beaches & Surf Spots",
      description:
        "Short rides from Weligama lead to spots like Midigama, Mirissa, and Coconut Point, offering a wider range of waves and beach experiences.",
      to: "/places/weligama/nearby-beaches-surf-spots",
    },
    {
      image: `${import.meta.env.BASE_URL}Destinations/Weligama/activities.jpg`,
      imageAlt: "Activities on Weligama coast",
      title: "Activities on Weligama's Coast",
      description:
        "Surfing, snorkeling, diving, and beachfront relaxation define the main coastal experience in Weligama.",
      to: "/places/weligama/activities-coast",
    },
    {
      image: `${import.meta.env.BASE_URL}Destinations/Weligama/wildlife.jpg`,
      imageAlt: "Nature and wildlife around Weligama",
      title: "Nature & Wildlife",
      description:
        "Marine life including turtles, reef fish, and seasonal sightings of larger species can be experienced through snorkeling and diving.",
      to: "/places/weligama/nature-wildlife",
    },
    {
      image: `${import.meta.env.BASE_URL}Destinations/Weligama/culture.jpg`,
      imageAlt: "Cultural and heritage experiences in Weligama",
      title: "Cultural & Heritage",
      description:
        "Local fishing traditions, including stilt fishing, and nearby historic towns provide cultural depth beyond the beach.",
      to: "/places/weligama/cultural-heritage",
    },
    {
      image: `${import.meta.env.BASE_URL}Destinations/Weligama/tea.jpg`,
      imageAlt: "Tea and local industry near Weligama",
      title: "Tea & Local Industry",
      description:
        "Visits to nearby estates such as Handunugoda offer insight into Sri Lanka’s tea production and local industries.",
      to: "/places/weligama/tea-local-industry",
    },
    {
      image: `${import.meta.env.BASE_URL}Destinations/Weligama/excursions.jpg`,
      imageAlt: "Excursions from Weligama",
      title: "Excursions",
      description:
        "Weligama is a convenient base for trips to Mirissa, Galle, and other south coast destinations.",
      to: "/places/weligama/excursions",
    },
    {
      image: `${import.meta.env.BASE_URL}Destinations/Weligama/wellness.jpg`,
      imageAlt: "Wellness and yoga in Weligama",
      title: "Wellness",
      description:
        "Yoga classes, surf camps, and beachfront relaxation spaces make Weligama a popular spot for wellness-focused stays.",
      to: "/places/weligama/wellness",
    },
  ],
}
  ],
};

export default WeligamaArticle;