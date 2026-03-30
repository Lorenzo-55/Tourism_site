const NegomboExploreCityArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Negombo", to: "/places/negombo" },
    { label: "Explore the City" },
  ],

  hero: {
    title: "Explore the City",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Negombo/ExploreCity.jpg`,
  },

  sections: [
    {
      type: "text",
      title: "Explore the City",
      paragraphs: [
        "Rent a tuk-tuk taxi for a tour of the sights and local markets, or take a bike ride to experience local life and architecture up close.",
      ],
    },
    {
      type: "text",
      title: "Guided Bicycle Ride",
      paragraphs: [
        "Take a scenic bicycle ride with a local guide through the rural Madampella (about 15 km from Negombo) and experience how the locals live and earn their living.",
        "You'll receive information about a traditional brick factory, a roof tile factory, a rice mill, and a coconut husk processing factory, among other things.",
        "Make an appointment with Anusha: +94 776066668",
      ],
    },
    {
      type: "text",
      title: "Curry Cooking Workshop",
      paragraphs: [
        "Together with the hostess of Nature View Boutique Glaming Resort, you'll prepare a delicious curry meal.",
        "She'll teach you which spices are used to achieve the wonderful flavor.",
        "Make an appointment with Anusha: +94 776066668 (www.natureviewmadampella.com)",
      ],
    },
    {
      type: "text",
      title: "Relax on the Beach",
      paragraphs: [
        "Negombo Beach is long and wide, perfect for a stroll, sunbathing, or enjoying a meal overlooking the sea.",
        "Be aware that some parts of the beach may be less clean than elsewhere in Sri Lanka.",
      ],
    },
  ],
};

export default NegomboExploreCityArticle;