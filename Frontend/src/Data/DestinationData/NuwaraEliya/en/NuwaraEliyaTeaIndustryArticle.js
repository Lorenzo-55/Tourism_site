const NuwaraEliyaTeaIndustryArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Nuwara Eliya", to: "/places/nuwara-eliya" },
    { label: "Tea Industry" },
  ],

  hero: {
    kicker: "Tea Heritage",
    title: "Tea Industry",
    subtitle:
      "Tea plantations, colonial-era factories, and the workers behind Sri Lanka’s world-famous Ceylon tea.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/NuwaraEliya/tea-industry/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "The Heart of Ceylon Tea",
    paragraphs: [
      "The rolling green tea estates surrounding Nuwara Eliya are among the most iconic landscapes in Sri Lanka and form the heart of the country’s internationally renowned Ceylon tea industry.",
      "Visitors to the region can explore historic tea factories, walk through plantations, learn about the tea-making process, and gain insight into the lives of the workers who sustain this major industry.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "tea-pickers",
      kicker: "Tea Workers",
      title: "The Tea Pickers of Nuwara Eliya",
      align: "left",

      content: [
        {
          type: "p",
          text: "The tea pickers of Nuwara Eliya are the backbone of Sri Lanka’s tea industry and play a vital role in producing some of the world’s most famous black teas.",
        },

        {
          type: "h3",
          text: "Ethnic Background",
        },

        {
          type: "p",
          text: "Most tea pickers in the region are Indian Tamils, descendants of laborers brought from South India by the British during the 19th and early 20th centuries to work on coffee and later tea plantations.",
        },

        {
          type: "p",
          text: "This plantation community forms a distinct ethnic group separate from the Sri Lankan Tamil population of the north and east.",
        },

        {
          type: "split-paragraph",
          heading: "The Tea Picking Process",
          headingLevel: "h3",

          paragraphs: [
            "Tea picking is traditionally carried out by women, who are valued for the precision needed to select only the youngest shoots known as ‘two leaves and a bud.’",
            "The work remains entirely manual because machines cannot replicate the delicate selection process without reducing tea quality.",
            "Workers are generally expected to meet daily targets of around 18–20 kilograms of fresh tea leaves in order to receive their full wage.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/NuwaraEliya/tea-industry/tea-pickers.webp`,
          imageAlt: "Tea pickers working in the hills of Nuwara Eliya",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Living Conditions and Challenges",
        },

        {
          type: "p",
          text: "<strong>Low Wages:</strong> Plantation wages remain a major political and social issue. Although increases are periodically discussed, tea workers continue to be among the most economically disadvantaged groups in Sri Lanka.",
        },

        {
          type: "p",
          text: "<strong>Colonial Housing:</strong> Many plantation families still live in cramped ‘line rooms’ originally built during the colonial era, often with limited sanitation and privacy.",
        },

        {
          type: "p",
          text: "<strong>Health Challenges:</strong> Repetitive physical labor, prolonged standing, and carrying heavy baskets often lead to long-term musculoskeletal problems.",
        },

        {
          type: "p",
          text: "<strong>Food Insecurity:</strong> Economic pressures and recent national crises have increased food insecurity in some plantation communities.",
        },

        {
          type: "p",
          text: "Despite these challenges, the tea industry remains one of Sri Lanka’s most important export sectors, generating over one billion dollars annually in foreign exchange revenue.",
        },
      ],
    },

    {
      type: "text",
      id: "damro-labookellie",
      kicker: "Tea Factory",
      title: "Damro Labookellie Tea Centre",
      align: "left",

      content: [
        {
          type: "p",
          text: "Formerly known as Mackwoods Labookellie Tea Centre, this estate remains one of the most famous tea tourism destinations near Nuwara Eliya.",
        },

        {
          type: "split-paragraph",
          heading: "Factory Tour and Tea Lounge",
          headingLevel: "h3",

          paragraphs: [
            "Visitors can join a guided factory tour where the tea-making process — withering, rolling, fermenting, drying, and grading — is explained in detail.",
            "The tea lounge is especially popular for complimentary cups of BOP tea and the estate’s well-known chocolate cake.",
            "The estate museum also presents the history of Labookellie, which dates back to 1841.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/NuwaraEliya/tea-industry/labookellie.webp`,
          imageAlt: "Damro Labookellie Tea Centre",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "<strong>Location:</strong> Along the A5 Kandy–Nuwara Eliya Road in Labookellie, around 15 km north of Nuwara Eliya town.",
        },

        {
          type: "p",
          text: "<strong>Opening Hours:</strong> Daily from 8:30 AM to 6:30 PM.",
        },

        {
          type: "p",
          text: "<strong>Travel Tip:</strong> Early mornings are best for seeing the factory at full activity, while the surrounding hills offer some of the most photogenic tea landscapes in Sri Lanka.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=7.024205869371247,80.71935760852986",
        },
      ],
    },

    {
      type: "text",
      id: "bluefield-tea-gardens",
      kicker: "Tea Estate",
      title: "Bluefield Tea Gardens",
      align: "left",

      content: [
        {
          type: "p",
          text: "Located in Ramboda, Bluefield Tea Gardens is popular among travelers seeking a more interactive tea plantation experience.",
        },

        {
          type: "h3",
          text: "Hands-On Tea Picking",
        },

        {
          type: "p",
          text: "Visitors can wear traditional tea-plucking baskets and learn the classic ‘two leaves and a bud’ technique directly in the tea fields alongside estate workers.",
        },

        {
          type: "split-paragraph",
          heading: "Factory, Tasting, and Dining",
          headingLevel: "h3",

          paragraphs: [
            "Bluefield’s large tea factory provides a detailed look at the stages of tea production, from withering and rolling to drying and grading.",
            "The estate also offers tea tasting sessions featuring different grades such as BOP and Silver Tips.",
            "An on-site restaurant and tea emporium make the estate a popular lunch and shopping stop for travelers between Kandy and Nuwara Eliya.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/NuwaraEliya/tea-industry/bluefield.webp`,
          imageAlt: "Bluefield Tea Gardens in Ramboda",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "<strong>Operating Hours:</strong> Daily from 8:30 AM to 6:00 PM.",
        },

        {
          type: "p",
          text: "<strong>Tip:</strong> Closed-toe shoes are recommended if participating in tea picking, especially during rainy periods when hillsides can become slippery.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=7.0431136463411415,80.69785753736562",
        },
      ],
    },

    {
      type: "text",
      id: "heritance-tea-factory",
      kicker: "Boutique Experience",
      title: "Heritance Tea Factory",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Heritance Tea Factory in Kandapola is one of Sri Lanka’s most famous concept hotels, created from a restored 19th-century tea factory.",
        },

        {
          type: "p",
          text: "Situated at over 2,000 meters above sea level, the property combines luxury accommodation with tea heritage experiences.",
        },

        {
          type: "split-paragraph",
          heading: "Mini Tea Factory Tour",
          headingLevel: "h3",

          paragraphs: [
            "Guests and some outside visitors can participate in the Mini Tea Factory Tour, learning about tea processing while also experiencing tea picking and small-scale production activities.",
            "The boutique-style experience offers a more personal alternative to larger commercial tea factories.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/NuwaraEliya/tea-industry/heritance.webp`,
          imageAlt: "Heritance Tea Factory hotel",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "Typical tea factory tours in the region generally last between 20 and 45 minutes and often conclude with tea tasting and shopping opportunities.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.991422428952616,80.83372369503654",
        },
      ],
    },

    {
      type: "text",
      id: "pedro-tea-factory",
      kicker: "Historic Factory",
      title: "Pedro Tea Factory",
      align: "left",

      content: [
        {
          type: "p",
          text: "Pedro Tea Factory is one of the oldest tea factories near Nuwara Eliya, originally established in 1885.",
        },

        {
          type: "p",
          text: "The factory still contains machinery dating back to the 19th century and offers visitors a compact but informative introduction to tea production.",
        },

        {
          type: "split-paragraph",
          heading: "The Visitor Experience",
          headingLevel: "h3",

          paragraphs: [
            "Guided tours usually last around 20 minutes and explain the production of high-grown ‘Pedro Light’ tea.",
            "Because much of the processing takes place during cooler nighttime hours, daytime visitors may not always see the full machinery in operation.",
            "Tea tasting at the onsite café is usually included, with views overlooking the surrounding tea-covered hills.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/NuwaraEliya/tea-industry/pedro.webp`,
          imageAlt: "Pedro Tea Factory and surrounding tea fields",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "<strong>Opening Hours:</strong> Daily from 8:00 AM to 5:00 PM, with no tours during the lunch break from 12:30 PM to 2:00 PM.",
        },

        {
          type: "p",
          text: "<strong>Entrance Fee:</strong> Approximately LKR 250–500 including tea tasting.",
        },

        {
          type: "p",
          text: "<strong>Photography:</strong> Photography is not permitted inside the factory, though visitors may freely photograph the tea fields outside.",
        },

        {
          type: "p",
          text: "<strong>Nearby Attraction:</strong> Lover’s Leap Waterfall is located within the estate grounds and can be reached after the factory visit.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.970236667938,80.7964797055484",
        },
      ],
    },
  ],
};

export default NuwaraEliyaTeaIndustryArticle;