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

    align: "center",
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

    align: "center",
    collapsible: true,
    toggleLabelOpen: "Click here to see them all",
    toggleLabelClose: "Hide surf spots",

    text:
        "These breaks are better suited to surfers who already feel confident reading waves, handling faster takeoffs, and riding with more control. They offer longer walls, more power, and a bigger step up from the beginner-friendly spots around the bay.",

    items: [
        {
        title: "Main Point",
        description:
            "Arugam Bay’s most famous wave, Main Point is a long right-hand point break known for fast sections, powerful rides, and occasional barrels. It attracts experienced surfers looking for one of Sri Lanka’s most iconic surf experiences.",
        image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/MainPoint.jpg`,
        },
        {
        title: "Pottuvil Point",
        description:
            "Located north of Arugam Bay, this point offers long, clean right-hand rides in a more open and less crowded setting. It is a great option for intermediate and advanced surfers who want quality waves with a little more space.",
        image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/PottuvilPoint.jpg`,
        },
        {
        title: "Okanda",
        description:
            "This remote break near Kumana National Park delivers stronger, more powerful waves for advanced surfers seeking a wilder surf session. Its isolated setting adds to the adventure, but it is best tackled by those comfortable in more demanding conditions.",
        image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/Okanda.jpg`,
        },
        {
        title: "Lighthouse",
        description:
            "An inconsistent but rewarding wave, Lighthouse can produce long, powerful rides when the swell and wind line up properly. When it works, it offers a more raw and less crowded experience for surfers chasing stronger conditions.",
        image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/Lighthouse.jpg`,
        },
    ],
    },

    {
    type: "horizontal-scroll",
    kicker: "Rentals",
    title: "Where to Rent a Surfboard",
    className: "with-images",

    align: "center",
    collapsible: true,
    toggleLabelOpen: "Click here to see them all",
    toggleLabelClose: "Hide rental options",

    text:
        "Surfboard rentals are easy to find around Arugam Bay, whether you are staying in town, learning through a camp, or heading straight to the beach. Different rental options suit different budgets, levels of convenience, and board preferences.",

    items: [
        {
        title: "Surf Shops",
        description:
            "Dedicated surf shops such as Banana Surf Camp and Dylan’s Surf Company usually offer the widest range of boards, from beginner soft-tops to performance shapes. They are often the best choice if you want more variety, better equipment, and advice on which board suits the day’s conditions.",
        image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/SurfShops.jpg`,
        },
        {
        title: "Surf Camps",
        description:
            "Many surf camps include board rentals as part of their lesson packages or accommodation deals, making them convenient for travelers who want everything arranged in one place. This can be especially useful for beginners who also want coaching and local guidance.",
        image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/SurfCamps.jpg`,
        },
        {
        title: "Guesthouses",
        description:
            "A number of guesthouses and small hotels keep a few boards available for guests, offering a simple and flexible option without needing to visit a separate rental shop. The selection is usually smaller, but it can be perfect for casual sessions close to where you stay.",
        image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/Guesthouses.jpg`,
        },
        {
        title: "Beach Vendors",
        description:
            "At some popular surf spots, local vendors rent boards directly near the beach, which can be handy for quick and spontaneous sessions. It is a practical option when you want to get in the water fast, though board quality and choice can vary.",
        image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/BeachVendors.jpg`,
        },
    ],
    },

    {
    type: "horizontal-scroll",
    kicker: "Equipment",
    title: "Types of Boards Available",
    className: "with-images",

    align: "center",
    collapsible: true,
    toggleLabelOpen: "Click here to see them all",
    toggleLabelClose: "Hide board types",

    text:
        "Rental places in Arugam Bay usually carry a mix of boards for different skill levels and wave conditions. Choosing the right type makes a big difference in how comfortable, safe, and enjoyable your session feels.",

    items: [
        {
        title: "Soft-Tops",
        description:
            "Soft-top boards are the most beginner-friendly option, offering extra stability, buoyancy, and a softer surface that feels safer during wipeouts. They are ideal for first lessons and early practice sessions when balance and confidence matter most.",
        image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/SoftTops.jpg`,
        },
        {
        title: "Longboards",
        description:
            "Longboards are great for mellow waves and surfers who want smooth takeoffs, easier paddling, and longer rides. They work well for intermediates, but they can also be enjoyable for relaxed cruising sessions at friendly breaks.",
        image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/Longboards.jpg`,
        },
        {
        title: "Shortboards",
        description:
            "Shortboards are designed for more advanced surfers looking for speed, sharper turns, and higher-performance surfing in steeper waves. They require more skill and control, but they are the preferred choice for stronger, faster breaks.",
        image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/Shortboards.jpg`,
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
    align: "center",
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
  titleStyle: "styleblue",
  className: "with-images",

  align: "left",
  collapsible: false,

  text:
    "Arugam Bay has a wide range of surf schools and camps, from small local operations to more established setups offering full packages. Many combine lessons, rentals, and a relaxed beach-town vibe, making it easy to find something that fits your level and style.",

  items: [
    {
      title: "Dylan’s Surf Company",
      description:
        "This is a well-known and highly-regarded surf school, often mentioned as a top choice for beginners and intermediates. They offer lessons, surf packages, and even have their own shop. Their instructors are known for their professional approach and many are certified by the International Surfing Association (ISA).",
      info: {
        label: "Google Maps",
        text: "P/05 Main street, Arugam Bay, Pottuvil 32500, Sri Lanka",
      },
      image: `${import.meta.env.BASE_URL}/Destinations/Arugambay/main/dylan-surf-company-x.webp`,
      button: {
        label: "Google Maps",
        href: "https://www.google.com/maps/place/Dylan's+Surf+Company/@6.845151,81.830646,17z/data=!4m6!3m5!1s0x3ae5bd2e62768e8f:0xd33b08d443a42f05!8m2!3d6.845151!4d81.830646!16s%2Fg%2F11cp5zcvgs?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D",
      },
    },
    {
      title: "Banana Surf Camp",
      description:
        "This is both a surf camp and a shop that offers lessons, equipment rentals, and board repair. They cater to all levels, from beginners who have never touched a board to intermediates looking to refine their skills. They pride themselves on having ISA-certified instructors and a variety of boards to choose from.",
      info: {
        label: "Google Maps",
        text: "Panama Road Arugam Bay, P/05 Main Street, Pottuvil 32500, Sri Lanka",
      },
      image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/BananaSurf.jpg`,
      button: {
        label: "Google Maps",
        href: "https://google.com",
      },
    },
    {
      title: "Pappy's Surf",
      description:
        "A popular local surf school with excellent reviews, known for its friendly and fun instructors. They offer lessons and equipment rentals and are praised for their patience and ability to help students progress quickly.",
      info: {
        label: "Google Maps",
        text: "pappy's surf school, Arugam Bay, Sri Lanka",
      },
      image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/PappysSurf.jpg`,
      button: {
        label: "Google Maps",
        href: "https://google.com",
      },
    },
    {
      title: "Safa Surf Camp",
      description:
        "A locally owned and operated surf camp and school located in the main town. They offer comprehensive surf coaching sessions, theory lessons, yoga, and accommodation, making it a great all-in-one option for a surf-focused trip.",
      info: {
        label: "Google Maps",
        text: "Galaxy Rd, Arugam Bay, Sri Lanka",
      },
      image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/SafaSurf.jpg`,
      button: {
        label: "Google Maps",
        href: "https://google.com",
      },
    },
    {
      title: "Arugam Bay Surf Center",
      description:
        "This surf camp and school is centrally located and offers packages for all skill levels, from beginner to advanced. They highlight their ISA-accredited instructors and the convenience of being close to both Main Point and the main street.",
      info: {
        label: "Google Maps",
        text: "Al Aksha School Rd, Arugam Bay 32500, Sri Lanka",
      },
      image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/SurfCenter.jpg`,
      button: {
        label: "Google Maps",
        href: "https://google.com",
      },
    },
    {
      title: "Surf Soul Co",
      description:
        'This is another option that emphasizes a holistic approach, offering not just lessons and rentals but also a "soulful" experience that connects you with the ocean.',
      info: {
        label: "Google Maps",
        text: "Panama Rd, Arugam Bay 32500, Sri Lanka",
      },
      image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/SurfSoul.jpg`,
      button: {
        label: "Google Maps",
        href: "https://google.com",
      },
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