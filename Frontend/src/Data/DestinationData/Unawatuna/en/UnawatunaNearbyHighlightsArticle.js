const UnawatunaNearbyHighlightsArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Unawatuna", to: "/places/unawatuna" },
    { label: "Nearby Highlights" },
  ],

  hero: {
    kicker: "Nearby Attractions",
    title: "Nearby Highlights",
    subtitle:
      "Historic fortifications, panoramic viewpoints, peaceful temples, and cultural landmarks surrounding Unawatuna.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Unawatuna/nearby-highlights/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Exploring Beyond the Beach",
    paragraphs: [
      "While Unawatuna is best known for its beaches, the surrounding area also contains some of southern Sri Lanka’s most important cultural and historical attractions.",
      "Within a short distance, visitors can explore the colonial streets of Galle Fort, panoramic viewpoints on Rumassala Hill, and peaceful religious landmarks overlooking the Indian Ocean.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "galle-fort",
      kicker: "UNESCO Heritage Site",
      title: "Galle Fort",
      align: "left",

      content: [
        {
          type: "p",
          text: "Galle Fort is one of Sri Lanka’s most famous historical landmarks and is located only around 15–20 minutes from Unawatuna by tuk-tuk.",
        },

        {
          type: "p",
          text: "The fortified old town is a UNESCO World Heritage Site known for its blend of Portuguese, Dutch, and British colonial architecture.",
        },

        {
          type: "split-paragraph",
          heading: "Colonial Streets and Ocean Views",
          headingLevel: "h3",

          paragraphs: [
            "Inside the fort walls, visitors can explore narrow streets lined with cafés, boutique hotels, art galleries, museums, and restored colonial buildings.",
            "The fort ramparts provide scenic ocean views and are especially popular during sunset.",
            "One of the most recognizable landmarks is the white Galle Lighthouse standing near the southeastern edge of the fort.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Unawatuna/nearby-highlights/galle-fort.webp`,
          imageAlt: "Historic Galle Fort",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "The fort area combines history with modern tourism and is one of the best places in southern Sri Lanka for walking, photography, dining, and cultural exploration.",
        },
      ],
    },

    {
      type: "text",
      id: "japanese-peace-pagoda",
      kicker: "Hilltop Landmark",
      title: "Japanese Peace Pagoda",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Japanese Peace Pagoda, officially known as the Sama Ceitya, is a striking white Buddhist stupa located on top of Rumassala Hill near Unawatuna.",
        },

        {
          type: "p",
          text: "Built by Japanese Buddhist monks of the Nipponzan Myōhōji order, the pagoda forms part of an international movement promoting non-violence, peace, and unity.",
        },

        {
          type: "split-paragraph",
          heading: "Views Across Galle Bay",
          headingLevel: "h3",

          paragraphs: [
            "The pagoda sits high above the coastline and offers panoramic views across Galle Bay, the Indian Ocean, and the distant Galle Fort.",
            "Sunrise and sunset are especially popular times to visit because of the dramatic lighting over the ocean.",
            "The white dome contrasts beautifully with the surrounding jungle-covered slopes of Rumassala Hill.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Unawatuna/nearby-highlights/japanese-peace-pagoda.webp`,
          imageAlt: "Japanese Peace Pagoda on Rumassala Hill",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Symbolism and Features",
        },

        {
          type: "p",
          text: "The pagoda was constructed during Sri Lanka’s civil conflict period as a symbol of harmony and reconciliation.",
        },

        {
          type: "p",
          text: "Around the stupa walkway are four golden Buddha statues representing important stages in the Buddha’s life, including enlightenment and Parinibbana.",
        },

        {
          type: "h3",
          text: "Rumassala and the Ramayana",
        },

        {
          type: "p",
          text: "Rumassala Hill itself is connected to Ramayana mythology.",
        },

        {
          type: "p",
          text: "According to legend, the monkey-warrior Hanuman dropped part of a Himalayan mountain here while carrying medicinal herbs, which is why the hill is associated with rare plants and healing vegetation.",
        },

        {
          type: "split-paragraph",
          heading: "Visitor Information",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Opening Hours:</strong> Generally accessible from around 7:00 AM to 9:00 PM.",
            "<strong>Entrance Fee:</strong> Usually free, though donations are welcomed.",
            "<strong>Dress Code:</strong> Visitors should cover shoulders and knees and remove footwear before entering the upper platform.",
            "<strong>Getting There:</strong> A short but steep tuk-tuk ride or walk from Unawatuna town.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Unawatuna/nearby-highlights/pagoda-viewpoint.webp`,
          imageAlt: "View from the Japanese Peace Pagoda",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "The Peace Pagoda is often combined with visits to Jungle Beach and other Rumassala viewpoints.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.017142097515518,80.23822739304421",
        },
      ],
    },
  ],
};

export default UnawatunaNearbyHighlightsArticle;