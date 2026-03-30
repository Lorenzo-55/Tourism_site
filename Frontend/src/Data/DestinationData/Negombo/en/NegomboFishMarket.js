const NegomboFishMarketArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Negombo", to: "/places/negombo" },
    { label: "Fish Market (Lellama)" },
  ],

  hero: {
    kicker: "Points of Interest",
    title: "Negombo Fish Market",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Negombo/FishMarket/LellamaHero.jpg`,
  },

  sections: [
    {
      type: "text",
      title: "Visit the Fish Market (Lellama)",
      paragraphs: [
        "The Negombo Fish Market, known locally as Lellama (sometimes simply as the 'Lellama Fish Market'), is one of the largest and most authentic fish markets in Sri Lanka and an absolute must-see in the city.",
        "This is the beating heart of the local fishing community, where the daily life of the coastal dwellers is presented in a raw and unfiltered way.",
      ],
    },
    {
      type: "text",
      title: "Key Points about Lellama",
      paragraphs: [
        "Location: Located in Negombo, near the mouth of the lagoon and the Indian Ocean (often accessible via the Munnakare Bridge).",
        "Meaning of 'Lellama': The term refers to the wholesale market or auction area where fish is traded from the boats, usually through lively negotiations or auctions.",
        "Best Time to Visit: Very early in the morning is essential. The fishing boats return with the night's catch, and trading begins. The most activity can be seen between 5:00 and 8:00 AM.",
        "Activity: The market is a chaotic and energetic place where fresh catch (sharks, tuna, shrimp, crabs, etc.) is displayed and traded straight from the boats.",
        "Two Parts: The market often consists of two main sections: The Wet Market for the sale of freshly caught fish, and the Dry Fish Market where much of the catch, not sold immediately, is salted and dried in long rows on mats on the beach in the sun.",
        "Cultural Experience: A visit offers a sensory experience, with the smell of salt and fish, the din of vendors and buyers, and the opportunity to witness traditional fishing and preserving processes.",
        "Tip for visitors: Due to Negombo's Catholic majority, the market is often quieter or closed on Sundays (although the drying process and the fish may still be visible). Go on a weekday to experience the full bustle of the 'wet' market.",
      ],
    },
  ],
};

export default NegomboFishMarketArticle;