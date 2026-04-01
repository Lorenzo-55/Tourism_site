// src/Data/DestinationData/ArugamBay/en/ArugamBayArticle.js

const ArugamBayArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Arugam Bay" },
  ],

  hero: {
    kicker: "East Coast Sri Lanka",
    title: "Arugam Bay",
    subtitle: "Sri Lanka’s most iconic surf destination",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Arugambay/ArugambayHero.webp`,
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
    defaultOpen: true,
    toggleLabelOpen: "Click here to see them all",
    toggleLabelClose: "Hide surf spots",

    text:
        "These spots are known for their forgiving waves, sandy bottoms, and excellent surf schools. They are ideal for building confidence and progressing safely in Arugam Bay.",

    items: [
        {
        title: "Baby Point",
        description:
            "Located right in Arugam Bay town, this is the inside section of Main Point with small, gentle waves and a sandy bottom—ideal for beginners. It’s the safest place to learn, though it can get crowded with surf schools.",
        image: `${import.meta.env.BASE_URL}Destinations/Arugambay/main/Babypointx.jpg`,
        },
        {
        title: "Elephant Rock",
        description:
            "A scenic right-hand wave just south of town with soft, forgiving conditions—great for beginners and intermediates. The surrounding landscape and sunsets make it one of the most visually rewarding spots to surf.",
        image: `${import.meta.env.BASE_URL}Destinations/Arugambay/main/ElephantRock.webp`,
        },
        {
        title: "Peanut Farm",
        description:
            "A relaxed spot about 20 minutes south offering two breaks: one mellow for learners and one more powerful for progression. The laid-back, slightly remote vibe makes it a favorite for longer, chilled surf sessions.",
        image: `${import.meta.env.BASE_URL}Destinations/Arugambay/main/PenutFarm.webp`,
        },
        {
        title: "Whisky Point",
        description:
            "Located north of Arugam Bay, this break offers long, mellow right-hand waves ideal for intermediates practicing turns. It’s generally less crowded than the main bay, with a calmer and more relaxed atmosphere.",
        image: `${import.meta.env.BASE_URL}Destinations/Arugambay/main/WhiskyPoint.jpg`,
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
    defaultOpen: true,
    toggleLabelOpen: "Click here to see them all",
    toggleLabelClose: "Hide surf spots",

    text:
        "These breaks are better suited to surfers who already feel confident reading waves, handling faster takeoffs, and riding with more control. They offer longer walls, more power, and a bigger step up from the beginner-friendly spots around the bay.",

    items: [
        {
        title: "Main Point",
        description:
            "Arugam Bay’s most famous wave, Main Point is a long right-hand point break known for fast sections, powerful rides, and occasional barrels. It attracts experienced surfers looking for one of Sri Lanka’s most iconic surf experiences.",
        image: `${import.meta.env.BASE_URL}Destinations/Arugambay/main/MainPointx.webp`,
        },
        {
        title: "Pottuvil Point",
        description:
            "Located north of Arugam Bay, this point offers long, clean right-hand rides in a more open and less crowded setting. It is a great option for intermediate and advanced surfers who want quality waves with a little more space.",
        image: `${import.meta.env.BASE_URL}Destinations/Arugambay/main/PottuvilPointx.webp`,
        },
        {
        title: "Okanda",
        description:
            "This remote break near Kumana National Park delivers stronger, more powerful waves for advanced surfers seeking a wilder surf session. Its isolated setting adds to the adventure, but it is best tackled by those comfortable in more demanding conditions.",
        image: `${import.meta.env.BASE_URL}Destinations/Arugambay/main/Okandax.jpg`,
        },
        {
        title: "Lighthouse",
        description:
            "An inconsistent but rewarding wave, Lighthouse can produce long, powerful rides when the swell and wind line up properly. When it works, it offers a more raw and less crowded experience for surfers chasing stronger conditions.",
        image: `${import.meta.env.BASE_URL}Destinations/Arugambay/main/Lighthouse.jpg`,
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
    defaultOpen: true,
    toggleLabelOpen: "Click here to see them all",
    toggleLabelClose: "Hide rental options",

    text:
        "Surfboard rentals are easy to find around Arugam Bay, whether you are staying in town, learning through a camp, or heading straight to the beach. Different rental options suit different budgets, levels of convenience, and board preferences.",

    items: [
        {
        title: "Surf Shops",
        description:
            "Dedicated surf shops such as Banana Surf Camp and Dylan’s Surf Company usually offer the widest range of boards, from beginner soft-tops to performance shapes. They are often the best choice if you want more variety, better equipment, and advice on which board suits the day’s conditions.",
        image: `${import.meta.env.BASE_URL}Destinations/Arugambay/main/SurfShop.jpg`,
        },
        {
        title: "Surf Camps",
        description:
            "Many surf camps include board rentals as part of their lesson packages or accommodation deals, making them convenient for travelers who want everything arranged in one place. This can be especially useful for beginners who also want coaching and local guidance.",
        image: `${import.meta.env.BASE_URL}Destinations/Arugambay/main/SurfCamp.jpg`,
        },
        {
        title: "Guesthouses",
        description:
            "A number of guesthouses and small hotels keep a few boards available for guests, offering a simple and flexible option without needing to visit a separate rental shop. The selection is usually smaller, but it can be perfect for casual sessions close to where you stay.",
        image: `${import.meta.env.BASE_URL}Destinations/Arugambay/main/Guesthouses.jpg`,
        },
        {
        title: "Beach Vendors",
        description:
            "At some popular surf spots, local vendors rent boards directly near the beach, which can be handy for quick and spontaneous sessions. It is a practical option when you want to get in the water fast, though board quality and choice can vary.",
        image: `${import.meta.env.BASE_URL}Destinations/Arugambay/main/BeachVendors.jpg`,
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
    defaultOpen: true,
    toggleLabelOpen: "Click here to see them all",
    toggleLabelClose: "Hide board types",

    text:
        "Rental places in Arugam Bay usually carry a mix of boards for different skill levels and wave conditions. Choosing the right type makes a big difference in how comfortable, safe, and enjoyable your session feels.",

    items: [
        {
        title: "Soft-Tops",
        description:
            "Soft-top boards are the most beginner-friendly option, offering extra stability, buoyancy, and a softer surface that feels safer during wipeouts. They are ideal for first lessons and early practice sessions when balance and confidence matter most.",
        image: `${import.meta.env.BASE_URL}Destinations/Arugambay/main/SoftTopSurfBoard.jpg`,
        },
        {
        title: "Longboards",
        description:
            "Longboards are great for mellow waves and surfers who want smooth takeoffs, easier paddling, and longer rides. They work well for intermediates, but they can also be enjoyable for relaxed cruising sessions at friendly breaks.",
        image: `${import.meta.env.BASE_URL}Destinations/Arugambay/main/LongBoard.jpg`,
        },
        {
        title: "Shortboards",
        description:
            "Shortboards are designed for more advanced surfers looking for speed, sharper turns, and higher-performance surfing in steeper waves. They require more skill and control, but they are the preferred choice for stronger, faster breaks.",
        image: `${import.meta.env.BASE_URL}Destinations/Arugambay/main/shortboard.jpg`,
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
        image: `${import.meta.env.BASE_URL}Destinations/Arugambay/main/BoardInspect.jpg`,
        },
        {
        title: "Check Fins & Leash",
        description:
            "Ensure fins are secure and the leash is in good condition to avoid accidents or losing the board. A damaged leash can snap unexpectedly in stronger waves.",
        image: `${import.meta.env.BASE_URL}Destinations/Arugambay/main/FinsLeash.jpg`,
        },
        {
        title: "Ask for Advice",
        description:
            "Rental staff can recommend the best board and surf spots based on your skill level and conditions. Local knowledge can significantly improve your surf session.",
        image: `${import.meta.env.BASE_URL}Destinations/Arugambay/main/SurfAdvice.jpg`,
        },
        {
        title: "Repairs",
        description:
            "If the board gets damaged, expect to pay for repairs. Most shops handle quick and affordable fixes, so issues can usually be resolved without much delay.",
        image: `${import.meta.env.BASE_URL}Destinations/Arugambay/main/BoardRepair.jpg`,
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
            href: "https://maps.app.goo.gl/FVPreVFur9scGbVg7",
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
          image: `${import.meta.env.BASE_URL}/Destinations/Arugambay/main/BananaSurfShop.webp`,
          button: {
            label: "Google Maps",
            href: "https://maps.app.goo.gl/VTtHsfrXcRQ5K41b6",
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
          image: `${import.meta.env.BASE_URL}/Destinations/Arugambay/main/PappysSurf.webp`,
          button: {
            label: "Google Maps",
            href: "https://maps.app.goo.gl/yT5imKci3MHSQF5x5",
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
          image: `${import.meta.env.BASE_URL}/Destinations/Arugambay/main/SafaSurf.jpg`,
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
          image: `${import.meta.env.BASE_URL}/Destinations/Arugambay/main/SurfCenter.jpg`,
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
          image: `${import.meta.env.BASE_URL}/Destinations/Arugambay/main/SurfSoul.jpg`,
          button: {
            label: "Google Maps",
            href: "https://google.com",
          },
        },
      ],
    },

    {
      type: "text",
      kicker: "Surfing",
      title: "What to Expect from a Surf School",
      align: "left",
      content: [
        { type: "p", text: "A typical surf lesson in Arugam Bay for a beginner will include:" },

        { type: "h4", text: "Transportation" },
        { type: "p", text: "Most surf schools include tuk-tuk transport to the best spot for the day's conditions, such as Baby Point, Peanut Farm, or Elephant Rock." },

        { type: "h4", text: "Board Rental" },
        { type: "p", text: "A soft-top board is usually included in the lesson price." },

        { type: "h4", text: "Theory on the Beach" },
        { type: "p", text: "The lesson will start with a safety briefing and a dry session on the sand, where you'll learn the fundamentals of paddling, standing up (the \"pop-up\"), and surf etiquette." },

        { type: "h4", text: "In-Water Instruction:" },
        { type: "p", text: "Your instructor will be with you in the water, helping you catch waves and offering immediate feedback to improve your technique." },

        { type: "p", text: "For intermediate surfers, the lessons will focus on things like improving your paddling, learning to \"read\" waves, and perfecting your bottom and top turns. Many schools also offer video analysis to help you see what you're doing right and where you can improve." },
      ],
    },

    {
      type: "text",
      kicker: "Advice",
      title: "Tips for Choosing a Surf School",
      align: "left",
      content: [
        { type: "h4", text: "Check Certification:" },
        { type: "p", text: "While many local instructors are highly skilled, looking for a school with ISA-certified instructors can give you confidence in their safety and teaching methods." },

        { type: "h4", text: "Read Reviews" },
        { type: "p", text: "Online reviews on platforms like TripAdvisor and Google can give you a good idea of other travelers' experiences with a particular school." },

        { type: "h4", text: "Go in Person" },
        { type: "p", text: "The best way to get a feel for a surf school is to visit them in person. Chat with the instructors and staff, look at the equipment, and see if the vibe matches what you're looking for." },

        { type: "h4", text: "Negotiate a Package" },
        { type: "p", text: "If you're planning on taking multiple lessons, ask about a package deal. It's often cheaper than paying for lessons individually." },
      ],
    },

    {
      type: "text",
      kicker: "Getting Around",
      title: "Tuk-Tuk Riding",
      align: "left",
      content: [
        { type: "p", text: "Riding a tuk-tuk is a quintessential part of the Arugam Bay experience." },
        { type: "p", text: "These three-wheeled vehicles are the most common and convenient way to get around the area, whether you're heading to a surf break, a restaurant, or exploring the nearby villages and attractions." },
        { type: "p", text: "Here's what you need to know about taking a tuk-tuk ride in the Arugam Bay neighborhood:" },

        { type: "h2", text: "How to Get a Tuk-Tuk" },

        { type: "h4", text: "Hail one on the street:" },
        { type: "p", text: "It's as simple as waving down a passing tuk-tuk. There are always plenty of drivers waiting on the main road, especially in the central part of Arugam Bay." },

        { type: "h4", text: "Ask your accommodation:" },
        { type: "p", text: "Most guesthouses and hotels have a list of trusted tuk-tuk drivers they work with. This is a good option if you want to book a specific driver for the day or for a longer trip." },

        { type: "h4", text: "Arrange a tour:" },
        { type: "p", text: "Many drivers offer \"tuk-tuk safaris\" or day tours to nearby sites like Kumana National Park, Kudumbigala Monastery, or the various surf spots. This is a great way to have a local guide who knows the area well." },

        { type: "h2", text: "Typical Rides and Destinations" },
        { type: "p", text: "A tuk-tuk ride is the perfect way to get to all the key places in the Arugam Bay area. Common short rides include:" },

        { type: "h4", text: "Surf Breaks:" },
        { type: "p", text: "Getting from your guesthouse to surf spots like Main Point, Baby Point, or to the more distant Peanut Farm and Elephant Rock." },

        { type: "h4", text: "Restaurants:" },
        { type: "p", text: "A quick ride to a different part of the main street for a specific restaurant or café." },

        { type: "h4", text: "The Neighborhood:" },
        { type: "p", text: "Exploring the different areas of Arugam Bay and Pottuvil, seeing local life, and finding the best places to eat or shop." },

        { type: "h2", text: "Self-Drive vs. Hired Driver" },
        { type: "p", text: "You have two main options for getting around:" },

        { type: "h4", text: "Hiring a Driver:" },
        { type: "p", text: "This is the most common choice. A local driver will take you to your destination, wait for you if needed, and can also act as a guide. Prices should be agreed upon before you start the journey." },

        { type: "h4", text: "Renting a Tuk-Tuk:" },
        { type: "p", text: "For the adventurous traveller, it's possible to rent a tuk-tuk and drive it yourself. This gives you the ultimate freedom to explore at your own pace. However, be aware that you need a special Sri Lankan driving permit to do so legally, and you will need to get accustomed to the local driving style, which can be chaotic. Several rental companies cater specifically to tourists and can help with the permit process." },

        { type: "h2", text: "Tips for Tuk-Tuk Rides" },
        { type: "h4", text: "Agree on the price beforehand:" },
        { type: "p", text: "Always, without fail, negotiate and agree on the fare before you get into the tuk-tuk. This prevents any misunderstandings or disputes at the end of the ride." },

        { type: "h4", text: "Know the typical fares:" },
        { type: "p", text: "A short ride within the main area of Arugam Bay should be relatively inexpensive. Trips to further surf points like Elephant Rock or Peanut Farm will be more expensive. For longer journeys, it's a good idea to ask a few different drivers to get a sense of the fair price." },

        { type: "h4", text: "Have small bills:" },
        { type: "p", text: "Drivers may not always have change for large denominations, especially for short rides, so try to have some smaller rupee notes on hand." },

        { type: "h4", text: "Be clear about your destination:" },
        { type: "p", text: "While many drivers speak English, it's helpful to be precise about your destination to avoid any confusion. Showing a map on your phone can be a great way to ensure you're on the same page." },
      ],
    },

    {
      type: "text",
      kicker: "Transport",
      title: "Rent a Scooter",
      align: "left",
      content: [
        { type: "p", text: "Renting a scooter is a popular and empowering way to explore Arugam Bay and its surrounding areas, giving you the freedom to discover surf spots, local villages, and hidden beaches at your own pace." },
        { type: "p", text: "Here's what you need to know about renting a scooter in Arugam Bay:" },

        { type: "h2", text: "Where to Rent a Scooter" },
        { type: "p", text: "Scooter rentals are widely available throughout Arugam Bay. You'll find:" },

        { type: "h4", text: "Guesthouses and Hotels:" },
        { type: "p", text: "Many accommodations, particularly those catering to surfers and backpackers, offer scooter rentals directly to their guests. This is often the easiest and most convenient option." },

        { type: "h4", text: "Small Shops on the Main Street:" },
        { type: "p", text: "There are numerous small shops and local businesses along the main road that specialize in scooter and tuk-tuk rentals." },

        { type: "h4", text: "Online Rental Companies:" },
        { type: "p", text: "Some larger companies, like those that also rent tuk-tuks, have a presence in Arugam Bay and offer online booking." },

        { type: "p", text: "It's always a good idea to check a few different places to compare prices and the condition of the scooters." },

        { type: "h2", text: "Rental Price" },
        { type: "p", text: "The cost of a scooter rental in Arugam Bay is generally affordable. The price can vary based on a few factors:" },

        { type: "h4", text: "Rental Period:" },
        { type: "p", text: "Daily rates are typically a bit higher than a long-term rental (e.g., a week or more). You can expect to pay a daily rate that is a very small fraction of the cost of a tuk-tuk for a full day of travel." },

        { type: "h4", text: "Time of Year:" },
        { type: "p", text: "Prices may be slightly higher during the peak surf season (May to September) when demand is high." },

        { type: "h2", text: "Requirements and Legalities" },
        { type: "p", text: "This is the most crucial part of renting a scooter in Sri Lanka." },

        { type: "h4", text: "Driving Permit:" },
        { type: "p", text: "To legally drive a scooter or motorbike in Sri Lanka, you need a Sri Lankan Recognition Permit. This is a special permit that validates your foreign driver's license in Sri Lanka. It is a legal requirement." },

        { type: "h4", text: "Process:" },
        { type: "p", text: "You can get a temporary permit issued at the Automobile Association of Ceylon (AAC) in Colombo, or some rental companies may be able to arrange one for you in advance, sometimes for an extra fee." },

        { type: "h4", text: "Reality vs. Law:" },
        { type: "p", text: "While the legal requirement is clear, many travelers choose to drive without the proper permit. You will almost certainly find rental places that don't ask for any paperwork. Be aware that if you get stopped by the police, you may face a fine. While police often go easy on tourists, there is a risk, and it can become a serious issue in the event of an accident." },

        { type: "h4", text: "Passport:" },
        { type: "p", text: "Many rental places will ask to hold your passport as a deposit. It is generally not recommended to leave your passport with them. Instead, try to offer a cash deposit or a copy of your passport." },

        { type: "h2", text: "Essential Tips for Renting and Driving" },

        { type: "h4", text: "Check the Scooter:" },
        { type: "p", text: "Before you agree to the rental, thoroughly inspect the scooter for any existing damage (scratches, dents, etc.). Take photos or a video to avoid being held responsible for them later." },

        { type: "h4", text: "Test Drive:" },
        { type: "p", text: "Make sure the brakes, lights, and horn are all in working order." },

        { type: "h4", text: "Helmet:" },
        { type: "p", text: "Always wear a helmet. Not only is it a legal requirement in Sri Lanka, but it's essential for your safety." },

        { type: "h4", text: "Driving in Sri Lanka:" },
        { type: "p", text: "Traffic in Sri Lanka can be chaotic, especially on main roads. Drive defensively and be aware of tuk-tuks, buses, and animals that may be on the road." },

        { type: "h4", text: "Surf Rack:" },
        { type: "p", text: "If you're a surfer, you'll want to ask for a scooter with a surfboard rack. While there can be some legal ambiguity around them, they are a common sight in Arugam Bay and are essential for getting your board to the waves." },

        { type: "h4", text: "Fuel:" },
        { type: "p", text: "You will be responsible for the fuel, and most scooters run on petrol. Be sure to check how much fuel is in the tank when you rent it and return it with a similar amount. There are a few petrol stations in the area." },
      ],
    },

    {
      type: "cards",
      kicker: "Explore",
      title: "Points of Interest",
      align: "center",
      items: [
        {
          title: "Elephant Rock",
          description: "Scenic rock viewpoint with surf and sunset views.",
          image: `${import.meta.env.BASE_URL}Destinations/Arugambay/main/ElephantRock.webp`,
          imageAlt: "Elephant Rock Arugam Bay",
          to: "/places/arugam-bay-elephant-rock",

        },
        {
          title: "Muhudu Maha Viharaya",
          description: "Ancient coastal Buddhist temple near Pottuvil.",
          image: `${import.meta.env.BASE_URL}Destinations/Arugambay/main/MuhuduMahaViharaya.webp`,
          imageAlt: "Muhudu Maha Viharaya temple",
          to: "/places/arugam-bay-muhudu-maha-viharaya",
        },
      ],
    }
  ],
};

export default ArugamBayArticle;