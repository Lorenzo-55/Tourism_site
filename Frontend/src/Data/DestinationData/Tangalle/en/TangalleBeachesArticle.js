const TangalleBeachesArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Tangalle", to: "/places/tangalle" },
    { label: "Beaches" },
  ],

  hero: {
    kicker: "Beaches & Coast",
    title: "Beaches",
    subtitle:
      "Wide sandy bays, palm-lined coves, quiet swimming spots, and some of the most scenic coastal landscapes around Tangalle.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Tangalle/beaches/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Quiet Beaches on Sri Lanka’s Southern Coast",
    paragraphs: [
      "Tangalle and its surrounding coast are known for beautiful, often quieter beaches with wide stretches of sand, coconut palms, and a more relaxed atmosphere than busier southern beach towns.",
      "The area includes postcard-like coves such as Goyambokka Beach and secluded stretches like Silent Beach, though sea conditions can be rough in some places and care is needed when swimming.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "goyambokka-beach",
      kicker: "Scenic Cove",
      title: "Goyambokka Beach",
      align: "left",

      content: [
        {
          type: "p",
          text: "Goyambokka Beach is widely considered one of the most beautiful and peaceful beaches near Tangalle.",
        },

        {
          type: "p",
          text: "Located a few kilometers west of town, it is a small horse-shoe-shaped cove with golden sand, leaning palms, and a more intimate atmosphere than the larger beaches nearby.",
        },

        {
          type: "split-paragraph",
          heading: "What to Expect",
          headingLevel: "h3",

          paragraphs: [
            "<strong>The Vibe:</strong> Relaxed, quiet, and ideal for visitors looking for a calm beach atmosphere away from the busier southern coast.",
            "<strong>The Water:</strong> Usually clearer and calmer than Tangalle’s main beach because the bay is partly protected, though waves can become stronger in the afternoon.",
            "<strong>The Scenery:</strong> Golden sand, coconut palms, and large granite boulders give the beach a classic tropical look.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/beaches/goyambokka-beach.webp`,
          imageAlt: "Goyambokka Beach near Tangalle",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Best Time to Visit",
        },

        {
          type: "p",
          text: "<strong>Peak Season:</strong> December to April is the best time for calmer water, clearer conditions, swimming, and snorkeling.",
        },

        {
          type: "p",
          text: "<strong>Green Season:</strong> May to October brings larger swells and stronger currents. The beach can feel wilder and quieter, but swimming is less safe.",
        },

        {
          type: "p",
          text: "Goyambokka has become increasingly recognized internationally, but it still keeps a relaxed and low-key character compared with beaches such as Mirissa or Unawatuna.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.01011774558115,80.78038955610617",
        },
      ],
    },

    {
      type: "text",
      id: "silent-beach",
      kicker: "Secluded Beach",
      title: "Silent Beach",
      align: "left",

      content: [
        {
          type: "p",
          text: "Silent Beach, also known locally as Amanwella Beach, is one of the most visually striking beaches near Tangalle.",
        },

        {
          type: "p",
          text: "It is located close to Goyambokka and can be reached by a short walk or quick tuk-tuk ride.",
        },

        {
          type: "split-paragraph",
          heading: "Why It Stands Out",
          headingLevel: "h3",

          paragraphs: [
            "<strong>Private Feel:</strong> The beach is hidden behind coconut palms and a steep coastal slope, giving it a secluded atmosphere.",
            "<strong>Scenery:</strong> Deep golden sand, turquoise water, and leaning palms create one of the most photogenic beach settings in Sri Lanka.",
            "<strong>Quiet Atmosphere:</strong> There are only a few simple local beach shacks, with little noise and very few crowds compared with more developed beaches.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Tangalle/beaches/silent-beach.webp`,
          imageAlt: "Silent Beach near Tangalle",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Swimming Safety",
        },

        {
          type: "p",
          text: "Silent Beach can look calm and inviting, but swimming conditions can be dangerous because of the quick drop-off and powerful shorebreak.",
        },

        {
          type: "p",
          text: "<strong>Best Practice:</strong> During the calmer months from December to March, the beach may be suitable for a short dip or paddle, but large swells should be avoided.",
        },

        {
          type: "p",
          text: "<strong>Safer Swimming:</strong> Goyambokka is usually the better choice for easier and safer swimming conditions.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.006222910135778,80.77689149970782",
        },
      ],
    },
  ],
};

export default TangalleBeachesArticle;