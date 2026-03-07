// src/data/placesData.js

const base = import.meta.env.BASE_URL;

export const placesData = [
  {
    slug: "colombo",
    name: "Colombo",
    kicker: "Commercial Capital",
    heroImage: `${base}images2.jpg`,
    summary:
      "Colombo is Sri Lanka’s commercial capital, where colonial history, busy markets, religious landmarks, and a fast-changing skyline meet the Indian Ocean.",
    quickFacts: [
      { label: "Province", value: "Western Province" },
      { label: "Best For", value: "History, city life, culture, food" },
      { label: "Vibe", value: "Urban, coastal, multicultural" },
      { label: "Ideal Stay", value: "2–3 days" },
    ],

    history: [
      {
        title: "Ancient Trading Port",
        body:
          "Colombo has been connected to regional and global trade for over 2,000 years. Its natural harbor attracted Roman, Arab, and Chinese traders long before colonial rule.",
      },
      {
        title: "Portuguese Period",
        body:
          "The Portuguese established an early fort and trading presence, using Colombo as a strategic base for trade and military control along the coast.",
      },
      {
        title: "Dutch Period",
        body:
          "The Dutch rebuilt and expanded Colombo’s fortifications, laid out parts of the city grid, and shaped the urban structure of areas like Pettah and Fort.",
      },
      {
        title: "British Period",
        body:
          "Under British rule, Colombo grew into the island’s main administrative and commercial center, with railways, harbor development, civic buildings, and new suburbs.",
      },
      {
        title: "Today",
        body:
          "Today Colombo is Sri Lanka’s financial and commercial center, blending colonial landmarks, modern towers, religious diversity, and a lively urban atmosphere.",
      },
    ],

    highlights: [
      {
        name: "Historical Fort Area",
        category: "Historic District",
        description:
          "The historic and financial core of Colombo, home to colonial landmarks, government buildings, and major commercial offices.",
      },
      {
        name: "Pettah",
        category: "Market District",
        description:
          "A dense and energetic market quarter filled with specialty streets, traders, food, and heritage buildings.",
      },
      {
        name: "Gangaramaya Temple & Seema Malaka",
        category: "Religious Landmark",
        description:
          "One of Colombo’s most iconic temple complexes, combining history, design, and a serene lakeside setting.",
      },
      {
        name: "Colombo Lotus Tower",
        category: "Modern Landmark",
        description:
          "A modern skyline icon offering panoramic city views, dining, and entertainment experiences.",
      },
      {
        name: "Galle Face Green",
        category: "Seafront",
        description:
          "A popular urban promenade for sunset walks, street food, and ocean views.",
      },
    ],

    beaches: [
      {
        name: "Galle Face Green",
        type: "Promenade",
        description:
          "Best for sunset strolls and city atmosphere rather than swimming.",
      },
      {
        name: "Mount Lavinia Beach",
        type: "Swimming Beach",
        description:
          "A popular nearby beach known for swimming, dining, and an easy coastal escape from the city.",
      },
    ],

    activities: [],

    culture: [
      {
        name: "National Museum",
        type: "Museum",
        description:
          "Sri Lanka’s most important museum, covering archaeology, royal regalia, and historical artifacts.",
      },
      {
        name: "Jami Ul-Alfar Mosque",
        type: "Mosque",
        description:
          "The famous Red Mosque in Pettah, known for its striking red-and-white striped architecture.",
      },
      {
        name: "Wolvendaal Church",
        type: "Church",
        description:
          "A key Dutch colonial church and one of the most important surviving historic religious structures in Colombo.",
      },
      {
        name: "Sri Kailawasanathan Swami Devasthanam Kovil",
        type: "Hindu Temple",
        description:
          "One of the oldest Hindu temples in Colombo, with rich Dravidian architectural detail.",
      },
    ],

    practicalInfo: [
      "Best for travelers interested in heritage, city culture, religion, food, and urban exploration.",
      "Traffic can be heavy, especially during peak hours.",
      "Dress modestly when visiting religious sites and remove footwear where required.",
      "Use ride-hailing apps like PickMe or Uber for easier transport within the city.",
    ],
  },

  {
    slug: "matara",
    name: "Matara",
    kicker: "Southern Coast",
    heroImage: `${base}images4.avif`,
    summary:
      "Matara is a southern coastal city known for Dutch-era fortifications, religious landmarks, local beaches, and easy access to surfing and snorkeling spots.",
    quickFacts: [
      { label: "Province", value: "Southern Province" },
      { label: "Best For", value: "Beaches, history, surfing, culture" },
      { label: "Vibe", value: "Coastal, historic, relaxed" },
      { label: "Ideal Stay", value: "2–4 days" },
    ],

    history: [
      {
        title: "Portuguese Period",
        body:
          "The Portuguese established an early fortification at the mouth of the Nilwala River to control coastal trade, especially cinnamon.",
      },
      {
        title: "Dutch Period",
        body:
          "The Dutch transformed Matara into a major fortified administrative and trade center, rebuilding the fort and constructing the Star Fort after inland attacks.",
      },
      {
        title: "British Period",
        body:
          "Under the British, the forts shifted from military to administrative use, while landmarks like Dondra Head Lighthouse reflected Matara’s maritime importance.",
      },
    ],

    highlights: [
      {
        name: "Matara Fort",
        category: "Fort",
        description:
          "A historic coastal fort first established by the Portuguese and later expanded by the Dutch.",
      },
      {
        name: "Star Fort",
        category: "Fort",
        description:
          "A distinctive six-pointed Dutch fort built to defend inland approaches to Matara.",
      },
      {
        name: "Old Dutch Trade Centre",
        category: "Colonial Landmark",
        description:
          "Also known as the Nupe Market, this historic structure reflects Matara’s old commercial role.",
      },
      {
        name: "Dondra Head Lighthouse",
        category: "Lighthouse",
        description:
          "Sri Lanka’s tallest lighthouse, built during the British period near the island’s southern tip.",
      },
      {
        name: "Parey Dewa Temple",
        category: "Temple",
        description:
          "A scenic island temple reached by a pedestrian bridge, offering sea views and a peaceful setting.",
      },
    ],

    beaches: [
      {
        name: "Polhena Beach",
        type: "Swimming / Snorkeling",
        description:
          "A calm reef-protected beach ideal for swimming, beginner snorkeling, and spotting sea turtles.",
      },
      {
        name: "Matara Beach",
        type: "City Beach",
        description:
          "A quieter local beach suitable for walks and coastal views near the city center.",
      },
      {
        name: "Weligama Beach",
        type: "Surf Beach",
        description:
          "One of Sri Lanka’s best beginner surf beaches, just a short ride from Matara.",
      },
      {
        name: "Talalla Beach",
        type: "Relaxation Beach",
        description:
          "A quieter stretch of sand known for its scenic and less crowded atmosphere.",
      },
      {
        name: "Hiriketiya Beach",
        type: "Surf / Cove Beach",
        description:
          "A lively horseshoe-shaped cove popular for surfing, cafes, and a laid-back coastal vibe.",
      },
    ],

    activities: [
      {
        title: "Surfing",
        body:
          "Matara is a strong base for exploring nearby surf spots. Weligama is ideal for beginners, Hiriketiya suits mixed skill levels, and Madiha offers more advanced reef breaks.",
      },
      {
        title: "Surf Schools",
        body:
          "Most surf schools are concentrated in Weligama, Hiriketiya, and the Polhena/Madiha area, making it easy to choose based on your level and where you stay.",
      },
      {
        title: "Diving & Snorkeling",
        body:
          "Polhena is the standout snorkeling spot near Matara, with calm water and regular turtle sightings. Local dive centers also run trips to nearby reef and wreck sites.",
      },
    ],

    culture: [
      {
        name: "Parey Dewa Temple",
        type: "Buddhist Temple",
        description:
          "An offshore island temple offering a peaceful setting and strong local religious significance.",
      },
      {
        name: "Weherahena Temple",
        type: "Buddhist Temple",
        description:
          "An important religious site in the Matara area known for its large Buddha image and tunnel temple features.",
      },
    ],

    practicalInfo: [
      "Best season for beaches, surfing, snorkeling, and diving is generally from November to April.",
      "Polhena is one of the best local options for calm swimming and snorkeling.",
      "Matara works well as both a short stop and a base for nearby coastal towns.",
      "For first-time surfing, Weligama is the easiest nearby place to start.",
    ],
  },
];