const KandyCityHighlightsArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Kandy", to: "/places/kandy" },
    { label: "City Highlights" },
  ],

  hero: {
    kicker: "City Attractions",
    title: "City Highlights of Kandy",
    subtitle:
      "Historic lakeside landmarks, bustling markets, panoramic viewpoints, and royal-era architecture in Sri Lanka’s hill capital.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kandy/city-highlights/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Exploring the Heart of Kandy",
    paragraphs: [
      "Kandy combines royal history, Buddhist heritage, colonial influence, and everyday local life within a compact city surrounded by hills.",
      "From the iconic Kandy Lake and the Temple of the Tooth to busy local markets and panoramic hilltop viewpoints, the city offers a blend of culture, history, and scenic beauty.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "kandy-lake",
      kicker: "Historic Landmark",
      title: "Kandy Lake (Upper Lake)",
      align: "left",

      content: [
        {
          type: "p",
          text: "Kandy Lake, also known as Kiri Muhuda or “Sea of Milk,” is one of the city’s most iconic landmarks.",
        },

        {
          type: "p",
          text: "Located beside the Temple of the Tooth, the artificial lake forms the scenic center of Kandy and plays an important role in the city’s historical landscape.",
        },

        {
          type: "split-paragraph",
          heading: "Construction and Royal Origins",
          headingLevel: "h3",

          paragraphs: [
            "The lake was constructed in 1807 by King Sri Wickrama Rajasinghe, the last ruler of the Kingdom of Kandy.",
            "The area originally consisted of paddy fields known as Tigolwela before being transformed into the lake.",
            "The renowned architect Deveda Moolacharya is believed to have designed the project.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kandy/city-highlights/kandy-lake.webp`,
          imageAlt: "Kandy Lake beside the Temple of the Tooth",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Important Features",
        },

        {
          type: "p",
          text: "<strong>Diyatilaka Mandapaya:</strong> The small island in the center of the lake was reportedly used by the king for relaxation and by the royal family as a bathing pavilion.",
        },

        {
          type: "p",
          text: "<strong>Ulpange:</strong> A partially submerged royal bathing pavilion later converted into a British-era library.",
        },

        {
          type: "p",
          text: "<strong>Temple of the Tooth:</strong> The sacred temple stands directly beside the lake, creating one of Kandy’s most recognizable views.",
        },

        {
          type: "p",
          text: "<strong>Wildlife:</strong> The lake area is home to birds, fish, pelicans, cormorants, and large Asian Water Monitor Lizards.",
        },

        {
          type: "h3",
          text: "Activities and Atmosphere",
        },

        {
          type: "p",
          text: "The shaded walking path around the lake stretches roughly 3.2 to 3.4 kilometers and is popular with both locals and visitors.",
        },

        {
          type: "p",
          text: "Boat rides are available on the lake, and the surrounding hills create a scenic backdrop, especially during the early morning or late afternoon.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=7.292002044117469,80.64000534825489",
        },
      ],
    },

    {
      type: "text",
      id: "kandy-market",
      kicker: "Local Culture",
      title: "Kandy Municipal Central Market",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Kandy Municipal Central Market is one of the city’s busiest and most vibrant places, offering a direct glimpse into everyday local life.",
        },

        {
          type: "p",
          text: "Spread across several sections and floors, the market is filled with colors, sounds, spices, fresh produce, and local products.",
        },

        {
          type: "split-paragraph",
          heading: "Market Atmosphere",
          headingLevel: "h3",

          paragraphs: [
            "The market is where many local residents shop daily for fruits, vegetables, spices, tea, meat, and household goods.",
            "Walking through the crowded aisles provides an authentic experience of Kandy’s urban culture and food traditions.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kandy/city-highlights/central-market.webp`,
          imageAlt: "Kandy Municipal Central Market",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "What You Can Find",
        },

        {
          type: "p",
          text: "<strong>Fruit and Vegetables:</strong> Tropical produce such as mangoes, pineapples, bananas, rambutan, mangosteen, and durian.",
        },

        {
          type: "p",
          text: "<strong>Spices and Tea:</strong> Cinnamon, cloves, cardamom, curry powders, and loose-leaf Sri Lankan tea.",
        },

        {
          type: "p",
          text: "<strong>Crafts and Souvenirs:</strong> Batik fabrics, handicrafts, wood carvings, jewelry, and textiles.",
        },

        {
          type: "p",
          text: "<strong>Street Food:</strong> Traditional Sri Lankan snacks and sweets can also be found throughout the market.",
        },

        {
          type: "h3",
          text: "Visitor Information",
        },

        {
          type: "p",
          text: "<strong>Location:</strong> Market Street, near Kandy Lake and major attractions.",
        },

        {
          type: "p",
          text: "<strong>Opening Hours:</strong> Usually from around 7:00 AM to 9:00 PM.",
        },

        {
          type: "p",
          text: "<strong>Best Time:</strong> Early morning is the liveliest period when fresh produce arrives.",
        },

        {
          type: "p",
          text: "<strong>Tips:</strong> Carry cash in Sri Lankan Rupees, as smaller vendors may not accept cards.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=7.292359833862961,80.63450999503847",
        },
      ],
    },

    {
      type: "text",
      id: "bahiravokanda-buddha",
      kicker: "Hilltop Landmark",
      title: "Bahiravokanda Vihara Buddha Statue",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Bahiravokanda Vihara Buddha Statue is one of the most recognizable landmarks overlooking Kandy.",
        },

        {
          type: "p",
          text: "Located on Bahirawa Kanda Hill, the giant white seated Buddha can be seen from many parts of the city.",
        },

        {
          type: "split-paragraph",
          heading: "The Hilltop Buddha",
          headingLevel: "h3",

          paragraphs: [
            "The statue stands approximately 26.8 meters (88 feet) tall, making it one of the largest seated Buddha statues in Sri Lanka.",
            "The Buddha is shown in the Dhyana Mudra, representing meditation and enlightenment.",
            "Construction of the statue was completed in 1992, while the temple itself dates to 1972.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kandy/city-highlights/bahiravokanda.webp`,
          imageAlt: "Bahiravokanda Buddha Statue overlooking Kandy",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Panoramic Views",
        },

        {
          type: "p",
          text: "One of the main reasons to visit the temple is the panoramic view over Kandy Lake, the Temple of the Tooth, and the surrounding hills.",
        },

        {
          type: "p",
          text: "The late afternoon and evening are especially popular times to visit because of the sunset and city lights.",
        },

        {
          type: "p",
          text: "<strong>Dress Code:</strong> Visitors should cover shoulders and knees and remove footwear before entering.",
        },

        {
          type: "p",
          text: "<strong>Name Meaning:</strong> Bahirawa Kanda translates roughly as “Gnome Mountain” or “Devil’s Mountain,” linked to local legends about spirits.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=7.29583199341905,80.63095809108303",
        },
      ],
    },

    {
      type: "text",
      id: "walakulu-bemma",
      kicker: "Architectural Landmark",
      title: "Walakulu Bemma (Cloud Wall)",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Walakulu Bemma, or “Cloud Wall,” is one of the most recognizable architectural features surrounding Kandy Lake.",
        },

        {
          type: "p",
          text: "Built during the reign of King Sri Wickrama Rajasinghe, the wall symbolizes the final architectural achievements of the Kandyan Kingdom.",
        },

        {
          type: "split-paragraph",
          heading: "Design and Symbolism",
          headingLevel: "h3",

          paragraphs: [
            "The parapet wall follows the edge of the lake with a decorative design intended to resemble ocean waves and clouds.",
            "Its distinctive triangular openings were historically used to place oil lamps during festivals, illuminating the lakeside at night.",
            "The wall stretches for approximately 630 to 634 meters around the lake.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kandy/city-highlights/walakulu-bemma.webp`,
          imageAlt: "Walakulu Bemma along Kandy Lake",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "<strong>Architect:</strong> Devendra Moolacharya, the master craftsman who also worked on the Temple of the Tooth complex.",
        },

        {
          type: "p",
          text: "<strong>Unfinished Construction:</strong> The wall was never fully completed after the British conquest of Kandy in 1815.",
        },
      ],
    },

    {
      type: "text",
      id: "wales-park",
      kicker: "Scenic Viewpoint",
      title: "Wales Park (Wace Park)",
      align: "left",

      content: [
        {
          type: "p",
          text: "Wales Park is a small hilltop park overlooking Kandy Lake and the city center.",
        },

        {
          type: "p",
          text: "Although modified during the British colonial era, the site was historically connected to the royal precincts of Kandy.",
        },

        {
          type: "split-paragraph",
          heading: "Panoramic City Views",
          headingLevel: "h3",

          paragraphs: [
            "The park is widely considered one of the best viewpoints in Kandy, offering clear views of the Temple of the Tooth, Kandy Lake, and the surrounding hills.",
            "It is especially popular at sunset, when the city begins to light up below.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kandy/city-highlights/wales-park.webp`,
          imageAlt: "View from Wales Park in Kandy",
          mediaPosition: "right",
        },

        {
          type: "p",
          text: "<strong>Historic Feature:</strong> The park contains a ceremonial cannon captured by the British from Russia during the Crimean War.",
        },

        {
          type: "p",
          text: "<strong>Entrance Fee:</strong> Usually around LKR 100–200.",
        },

        {
          type: "p",
          text: "<strong>Best Time:</strong> Late afternoon and sunset for panoramic views and cooler temperatures.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=7.290648787259505,80.63730982202462",
        },
      ],
    },
  ],
};

export default KandyCityHighlightsArticle;