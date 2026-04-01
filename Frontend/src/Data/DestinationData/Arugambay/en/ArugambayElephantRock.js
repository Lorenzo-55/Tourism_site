const ElephantRockArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Arugam Bay", to: "/places/arugam-bay" },
    { label: "Elephant Rock" },
  ],

  hero: {
    kicker: "Arugam Bay Landmark",
    title: "Elephant Rock",
    subtitle:
      "A scenic coastal escape known for surf, sunsets, wild landscapes, and one of the best viewpoints near Arugam Bay.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Arugambay/main/ElephantRock.webp`,
  },

  sections: [
    {
      type: "split",
      kicker: "Natural Highlight",
      title: "A Landmark South of Arugam Bay",
      mediaPosition: "right",
      image: `${import.meta.env.BASE_URL}Destinations/ArugamBay/ElephantRock/ElephantRockView.jpg`,
      imageAlt: "View of Elephant Rock near Arugam Bay",
      paragraphs: [
        "Elephant Rock is a prominent natural landmark located a few kilometers south of Arugam Bay on Sri Lanka’s east coast. It is one of the area’s most popular short trips, combining beautiful scenery with a relaxed and adventurous atmosphere.",
        "The site is known for its striking coastal setting, easy viewpoint climb, beginner-friendly surf, and raw natural surroundings. It feels quieter and more untouched than the main surf points, which adds to its appeal.",
        "Whether you visit for the view, the waves, or the sunset, Elephant Rock offers a memorable mix of nature and laid-back beach culture.",
      ],
    },

    {
      type: "text",
      kicker: "The Viewpoint",
      title: "The Viewpoint and Sunset Spot",
      align: "left",
      content: [
        { type: "h4", text: "Aptly Named" },
        {
          type: "p",
          text: "The rock formation is said to resemble the profile of a sleeping elephant, which gives it its name.",
        },
        {
          type: "p",
          text: "That distinctive shape makes it one of the most recognizable natural landmarks in the Arugam Bay area.",
        },

        { type: "h4", text: "Stunning Panoramas" },
        {
          type: "p",
          text: "The climb to the top is short and fairly easy, and the reward is a sweeping 360-degree view of the coastline, nearby lagoons, and surrounding jungle.",
        },
        {
          type: "p",
          text: "It is widely considered one of the best viewpoints near Arugam Bay, especially for visitors who want a scenic stop without a long hike.",
        },

        { type: "h4", text: "The Perfect Sunset" },
        {
          type: "p",
          text: "Elephant Rock is especially famous for its sunsets, when the sky turns vibrant with warm evening colors over the sea.",
        },
        {
          type: "p",
          text: "It becomes a peaceful gathering place at the end of the day, with both locals and travelers coming to relax and take in the view.",
        },
      ],
    },

    {
      type: "text",
      kicker: "Surfing",
      title: "A Beginner’s Surfing Paradise",
      align: "left",
      content: [
        { type: "h4", text: "Gentle Waves" },
        {
          type: "p",
          text: "Elephant Rock is a well-known surf spot for beginners and intermediate surfers. It offers a gentle right-hand point break with a sandy bottom, making it safer and more forgiving than some of the region’s more demanding breaks.",
        },
        {
          type: "p",
          text: "The softer conditions make it a comfortable place to practice, improve, and spend time in the water without the pressure of crowded peak-season surf points.",
        },

        { type: "h4", text: "Surf Lessons and Rentals" },
        {
          type: "p",
          text: "Surf instructors and board rentals are easy to find right on the beach, so it is a convenient place to take a first lesson or rent equipment for a relaxed session.",
        },

        { type: "h4", text: "Less Crowded" },
        {
          type: "p",
          text: "Because it sits a little away from the main road and central town area, Elephant Rock is often less crowded than the main Arugam Bay surf points.",
        },
        {
          type: "p",
          text: "That quieter setting gives it a more easygoing and spacious feel, which many visitors prefer.",
        },
      ],
    },

    {
      type: "text",
      kicker: "Wild Setting",
      title: "Wildlife Encounters",
      align: "left",
      content: [
        { type: "h4", text: "Elephants and Crocodiles" },
        {
          type: "p",
          text: "The area around Elephant Rock is known for its wildlife. Wild elephants are sometimes spotted nearby, especially in the early morning or late evening when they may come toward the lagoon.",
        },
        {
          type: "p",
          text: "The lagoon is also home to crocodiles, so visitors should avoid swimming there and stay aware of the surroundings.",
        },

        { type: "h4", text: "A Wild, Untouched Feel" },
        {
          type: "p",
          text: "The landscape has a raw and undeveloped feel, with long stretches of beach, patches of jungle, and open natural scenery.",
        },
        {
          type: "p",
          text: "That sense of remoteness is part of what makes Elephant Rock stand out from busier and more built-up coastal spots.",
        },
      ],
    },

    {
      type: "text",
      kicker: "Getting There",
      title: "How to Get There",
      align: "left",
      content: [
        { type: "h4", text: "Tuk-Tuk or Scooter" },
        {
          type: "p",
          text: "The most common way to reach Elephant Rock is by tuk-tuk or scooter from Arugam Bay. The journey usually takes around 15 to 20 minutes.",
        },
        {
          type: "p",
          text: "It is a short trip, but it feels like a small escape from the busier center of town.",
        },

        { type: "h4", text: "A Little Adventure" },
        {
          type: "p",
          text: "The road to the beach includes a dirt track that can be bumpy and a little adventurous, especially during the rainy season.",
        },
        {
          type: "p",
          text: "From the drop-off point, there is a short walk and a bit of a scramble to reach the rock and the main beach area.",
        },
      ],
    },

    {
      type: "text",
      kicker: "Location",
      title: "Where to Find It",
      align: "left",
      paragraphs: [
        "RR5F+XP, Arugam Bay, Sri Lanka",
        "A visit to Elephant Rock is a simple but rewarding way to experience the natural beauty, surf culture, and relaxed atmosphere that make Arugam Bay so well known. It is the kind of place where a short trip can easily turn into a full afternoon.",
      ],
    },
  ],
};

export default ElephantRockArticle;