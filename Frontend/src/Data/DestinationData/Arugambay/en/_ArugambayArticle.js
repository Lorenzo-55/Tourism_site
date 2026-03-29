// src/Data/DestinationData/ArugamBay/en/ArugamBayArticle.js

const ArugamBayArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Places", to: "/places" },
    { label: "Arugam Bay" },
  ],

  hero: {
    kicker: "East Coast Sri Lanka",
    title: "Arugam Bay",
    subtitle: "Sri Lanka’s most iconic surf destination",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/ArugamBay/ArugamBayHero.jpg`,
  },

  overview: {
    kicker: "Overview",
    title: "A World-Class Surf Destination",
    paragraphs: [
      "Arugam Bay (also known as A-Bay) is a coastal town on the southeast coast of Sri Lanka, widely recognized as one of the best surfing destinations in the country and among the top surf spots globally.",
      "Beyond surfing, the area offers a laid-back, bohemian atmosphere with beach huts, guesthouses, and a relaxed coastal lifestyle that attracts travelers from around the world.",
      "It also serves as a gateway to Kumana National Park, where visitors can spot elephants, leopards, and diverse birdlife. The region is rich in history, with nearby sites like Muhudu Maha Viharaya and Kudumbigala Monastery.",
      "Despite being affected by the civil war and the 2004 tsunami, Arugam Bay has rebuilt and now thrives as a major tourism hub.",
    ],
  },

  sections: [
    {
      type: "text",
      kicker: "Surfing",
      title: "Why Arugam Bay is Famous",
      paragraphs: [
        "Arugam Bay is known for its consistent right-hand point breaks and wide range of surf spots suitable for all levels.",
        "The main surf season runs from April to October, with the best conditions typically from May to September when the southwest monsoon creates ideal swells.",
      ],
    },

    // HS,i → horizontal scroll with images
    {
    type: "horizontal-scroll",
    kicker: "Surf Spots",
    title: "Beginner & Intermediate Waves",
    className: "with-images",

    // new
    collapsible: true,
    toggleLabelOpen: "Click here to see them all",
    toggleLabelClose: "Hide surf spots",

    text:
        "These spots are known for their forgiving waves, sandy bottoms, and excellent surf schools. They are ideal for building confidence and progressing safely in Arugam Bay.",

    items: [
        {
        title: "Baby Point",
        description:
            "Located right in Arugam Bay town, this is the inside section of Main Point with small, gentle waves and a sandy bottom—ideal for beginners. It’s the safest place to learn, though it can get crowded with surf schools.",
        image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/BabyPoint.jpg`,
        },
        {
        title: "Elephant Rock",
        description:
            "A scenic right-hand wave just south of town with soft, forgiving conditions—great for beginners and intermediates. The surrounding landscape and sunsets make it one of the most visually rewarding spots to surf.",
        image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/ElephantRock.jpg`,
        },
        {
        title: "Peanut Farm",
        description:
            "A relaxed spot about 20 minutes south offering two breaks: one mellow for learners and one more powerful for progression. The laid-back, slightly remote vibe makes it a favorite for longer, chilled surf sessions.",
        image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/PeanutFarm.jpg`,
        },
        {
        title: "Whisky Point",
        description:
            "Located north of Arugam Bay, this break offers long, mellow right-hand waves ideal for intermediates practicing turns. It’s generally less crowded than the main bay, with a calmer and more relaxed atmosphere.",
        image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/WhiskyPoint.jpg`,
        },
    ],
    },

    {
      type: "horizontal-scroll",
      kicker: "Surf Spots",
      title: "Intermediate & Advanced Waves",
      className: "with-images",
      items: [
        {
          title: "Main Point",
          description:
            "Iconic right-hand point break with long, powerful rides and occasional barrels.",
          image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/MainPoint.jpg`,
        },
        {
          title: "Pottuvil Point",
          description:
            "Long, clean rides in a less crowded setting north of Arugam Bay.",
          image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/PottuvilPoint.jpg`,
        },
        {
          title: "Okanda",
          description:
            "Remote, powerful waves near Kumana National Park for advanced surfers.",
          image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/Okanda.jpg`,
        },
        {
          title: "Lighthouse",
          description:
            "Inconsistent but rewarding spot with powerful long rides when conditions align.",
          image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/Lighthouse.jpg`,
        },
      ],
    },

    // HS → horizontal scroll (no images required)
    {
      type: "horizontal-scroll",
      kicker: "Rentals",
      title: "Where to Rent a Surfboard",
      items: [
        {
          title: "Surf Shops",
          description:
            "Shops like Banana Surf Camp and Dylan’s Surf Company offer a wide range of boards and gear.",
        },
        {
          title: "Surf Camps",
          description:
            "Lessons and rentals often included in surf camp packages.",
        },
        {
          title: "Guesthouses",
          description:
            "Many accommodations provide boards for guests.",
        },
        {
          title: "Beach Vendors",
          description:
            "Local vendors rent boards directly at popular surf spots.",
        },
      ],
    },

    {
      type: "horizontal-scroll",
      kicker: "Equipment",
      title: "Types of Boards Available",
      items: [
        {
          title: "Soft-Tops",
          description:
            "Best for beginners—stable, buoyant, and safe.",
        },
        {
          title: "Longboards",
          description:
            "Great for intermediates and mellow waves.",
        },
        {
          title: "Shortboards",
          description:
            "Designed for advanced surfers and high-performance waves.",
        },
      ],
    },

    {
    type: "text",
    kicker: "Costs",
    title: "Rental Prices",
    paragraphs: [
        "Surfboard rental prices in Arugam Bay are generally quite affordable. While prices can vary based on the season, the type of board, and the rental duration, you can expect to pay a daily rate.",
        "It's always best to ask around at a few different shops to compare prices. Most shops offer half-day, full-day, and long-term (weekly or monthly) rates, with longer rentals being more cost-effective per day.",
    ],
    },

    {
    type: "horizontal-scroll",
    kicker: "Tips",
    title: "Surfboard Rental Tips",
    className: "with-images",
    items: [
        {
        title: "Inspect the Board",
        description:
            "Thoroughly check for any dings or damage before renting. Take photos or videos to avoid being charged for pre-existing issues. Even small cracks can worsen in the water, so it’s worth checking carefully.",
        image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/BoardInspect.jpg`,
        },
        {
        title: "Check Fins & Leash",
        description:
            "Ensure fins are secure and the leash is in good condition to avoid accidents or losing the board. A damaged leash can snap unexpectedly in stronger waves.",
        image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/FinsLeash.jpg`,
        },
        {
        title: "Ask for Advice",
        description:
            "Rental staff can recommend the best board and surf spots based on your skill level and conditions. Local knowledge can significantly improve your surf session.",
        image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/SurfAdvice.jpg`,
        },
        {
        title: "Repairs",
        description:
            "If the board gets damaged, expect to pay for repairs. Most shops handle quick and affordable fixes, so issues can usually be resolved without much delay.",
        image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/BoardRepair.jpg`,
        },
    ],
    },

    // HS,i → horizontal scroll with images
    {
      type: "horizontal-scroll",
      kicker: "Surf Schools",
      title: "Popular Surf Schools & Camps",
      className: "with-images",
      items: [
        {
          title: "Dylan's Surf Company",
          description:
            "Highly regarded school with ISA-certified instructors and structured lessons.",
          image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/DylansSurf.jpg`,
        },
        {
          title: "Banana Surf Camp",
          description:
            "Offers lessons, rentals, and repairs for all levels.",
          image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/BananaSurf.jpg`,
        },
        {
          title: "Pappy's Surf",
          description:
            "Friendly local instructors known for fast progression.",
          image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/PappysSurf.jpg`,
        },
        {
          title: "Safa Surf Camp",
          description:
            "All-in-one surf experience with coaching, yoga, and accommodation.",
          image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/SafaSurf.jpg`,
        },
        {
          title: "Arugam Bay Surf Center",
          description:
            "Centrally located with packages for all skill levels.",
          image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/SurfCenter.jpg`,
        },
        {
          title: "Surf Soul Co",
          description:
            "Focuses on a holistic surf experience and connection with the ocean.",
          image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/SurfSoul.jpg`,
        },
      ],
    },

    {
      type: "text",
      kicker: "Lessons",
      title: "What to Expect from a Surf School",
      paragraphs: [
        "Most lessons include tuk-tuk transport to the best surf spot of the day.",
        "Beginner lessons start with theory on the beach, covering safety, paddling, and technique.",
        "Instructors provide in-water guidance to help catch waves and improve form.",
        "Intermediate lessons focus on wave reading, paddling efficiency, and turning techniques, often with video analysis.",
      ],
    },
  ],
};

export default ArugamBayArticle;