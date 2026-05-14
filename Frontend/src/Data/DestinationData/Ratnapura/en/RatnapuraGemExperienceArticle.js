const RatnapuraGemExperienceArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Ratnapura", to: "/places/ratnapura" },
    { label: "Gem Experience" },
  ],

  hero: {
    kicker: "Gem Experience",
    title: "Gem Experience",
    subtitle:
      "Traditional gem pits, bustling sapphire markets, and the living gemstone culture of Sri Lanka’s ‘City of Gems.’",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Ratnapura/gem-experience/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Exploring the Gem Capital of Sri Lanka",
    paragraphs: [
      "Ratnapura has been associated with gemstones for centuries and remains the heart of Sri Lanka’s gem industry. :contentReference[oaicite:0]{index=0}",
      "From traditional mining pits and rough stone trading to gem testing laboratories and museums, visiting Ratnapura offers a rare chance to see the gemstone trade beyond polished jewelry displays. :contentReference[oaicite:1]{index=1}",
    ],
  },

  sections: [
    {
      type: "text",
      id: "gem-pits",
      kicker: "Traditional Mining",
      title: "Visiting a Gem Pit",
      align: "left",

      content: [
        {
          type: "p",
          text: "A visit to a gem pit in Ratnapura is a raw and fascinating experience that reveals how gemstones are traditionally extracted from the earth. :contentReference[oaicite:2]{index=2}",
        },

        {
          type: "p",
          text: "Unlike large industrial mining operations found elsewhere in the world, much of Ratnapura’s mining still relies on small-scale traditional shafts known as <em>galam</em>. :contentReference[oaicite:3]{index=3}",
        },

        {
          type: "split-paragraph",
          heading: "Inside the Mining Process",
          headingLevel: "h3",

          paragraphs: [
            "Miners dig deep vertical shafts, often between 10 and 50 meters deep, reinforced with timber and layers of ferns to prevent collapses. :contentReference[oaicite:4]{index=4}",
            "The objective is to reach the gem-bearing gravel layer known as the <em>Illama</em>, an ancient riverbed deposit where sapphires, rubies, cat’s eyes, and alexandrites are found. :contentReference[oaicite:5]{index=5}",
            "Workers at the bottom fill bamboo baskets with gravel, which are hauled to the surface using simple wooden pulley systems before being washed in nearby water sources. :contentReference[oaicite:6]{index=6}",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Ratnapura/gem-experience/gem-pit.webp`,
          imageAlt: "Traditional gem mining pit in Ratnapura",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "The Washing Process",
        },

        {
          type: "p",
          text: "The most dramatic moment comes during the washing stage, when miners swirl cone-shaped baskets in water to remove lighter sediment and reveal heavier gemstones hidden within the gravel. :contentReference[oaicite:7]{index=7}",
        },
      ],
    },

    {
      type: "text",
      id: "gem-market",
      kicker: "Street Trading",
      title: "Ratnapura Gem Market",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Ratnapura Gem Market is one of the most atmospheric parts of the city and offers a glimpse into the fast-moving world of gemstone trading. :contentReference[oaicite:8]{index=8}",
        },

        {
          type: "p",
          text: "Rather than a conventional market with shops and display cases, the trade often takes place directly on the streets through informal negotiations and broker networks. :contentReference[oaicite:9]{index=9}",
        },

        {
          type: "split-paragraph",
          heading: "Peak Trading Hours",
          headingLevel: "h3",

          paragraphs: [
            "The busiest period is early in the morning, usually between 7:00 AM and 10:30 AM. :contentReference[oaicite:10]{index=10}",
            "The earliest hours are dominated by rough uncut stones brought directly from the mines, while more polished and faceted gems appear later in the morning. :contentReference[oaicite:11]{index=11}",
            "By around 11:00 AM, many traders move into private offices and cutting workshops. :contentReference[oaicite:12]{index=12}",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Ratnapura/gem-experience/gem-market.webp`,
          imageAlt: "Gem traders in Ratnapura market",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Where the Trading Happens",
        },

        {
          type: "p",
          text: "<strong>Saviya Mawatha:</strong> The heart of the street trading scene, located close to the Ratnapura Clock Tower. :contentReference[oaicite:13]{index=13}",
        },

        {
          type: "p",
          text: "<strong>Demuwawatha Bridge:</strong> An area near the Kalu Ganga known for traders specializing in high-quality sapphires and cat’s eye stones. :contentReference[oaicite:14]{index=14}",
        },

        {
          type: "h3",
          text: "How the Trade Works",
        },

        {
          type: "p",
          text: "Gem transactions are often carried out through brokers and dealers gathered in small huddles, examining stones with torches or under natural sunlight. :contentReference[oaicite:15]{index=15}",
        },

        {
          type: "p",
          text: "Many traders use a distinctive blue paper to wrap yellow and white sapphires because the color contrast highlights the natural brilliance of the stones. :contentReference[oaicite:16]{index=16}",
        },
      ],
    },

    {
      type: "text",
      id: "travel-tips",
      kicker: "Visitor Advice",
      title: "Important Tips for Travelers",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Observe Respectfully",
        },

        {
          type: "p",
          text: "Visitors are welcome to observe trading activity, but touching stones without permission is discouraged, as handling a gem may be interpreted as an intention to negotiate. :contentReference[oaicite:17]{index=17}",
        },

        {
          type: "h3",
          text: "Street Scams",
        },

        {
          type: "p",
          text: "Travelers are often approached by unofficial ‘guides’ offering access to private markets or special shops. While some are legitimate, others operate mainly for commission. Sticking to the main public trading streets is usually the safest option. :contentReference[oaicite:18]{index=18}",
        },

        {
          type: "split-paragraph",
          heading: "Buying Gemstones",
          headingLevel: "h3",

          paragraphs: [
            "Buying gems without professional knowledge can be risky, as treated and synthetic stones are common in the market. :contentReference[oaicite:19]{index=19}",
            "If purchasing a gemstone, it is strongly recommended to have it tested immediately by the National Gem and Jewellery Authority (NGJA). :contentReference[oaicite:20]{index=20}",
            "Official gem reports or ‘memos’ can confirm whether a stone is natural, treated, or synthetic. :contentReference[oaicite:21]{index=21}",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Ratnapura/gem-experience/gemstones.webp`,
          imageAlt: "Gemstones from Ratnapura",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "ngja-and-museum",
      kicker: "Museums & Education",
      title: "NGJA and Gemmological Museum",
      align: "left",

      content: [
        {
          type: "h3",
          text: "National Gem and Jewellery Authority (NGJA)",
        },

        {
          type: "p",
          text: "The NGJA is the government body responsible for regulating Sri Lanka’s gem industry and is an essential stop for anyone buying gemstones in Ratnapura. :contentReference[oaicite:22]{index=22}",
        },

        {
          type: "p",
          text: "The Ratnapura regional office provides gem testing reports and serves as a trusted point of verification for buyers. :contentReference[oaicite:23]{index=23}",
        },

        {
          type: "p",
          text: "<strong>Opening Hours:</strong> Typically Monday to Friday, 8:30 AM – 4:30 PM. Usually closed on weekends and Poya days. :contentReference[oaicite:24]{index=24}",
        },

        {
          type: "h3",
          text: "Private Gemmological Museum",
        },

        {
          type: "p",
          text: "Ratnapura also contains private gem museums created by veteran gemologists to showcase the geological richness of the region. :contentReference[oaicite:25]{index=25}",
        },

        {
          type: "split-paragraph",
          heading: "What You Can See",
          headingLevel: "h3",

          paragraphs: [
            "Collections often include sapphires, alexandrites, cat’s eye stones, fossils, and rare minerals found in Ratnapura’s gem pits. :contentReference[oaicite:26]{index=26}",
            "Some museums feature life-sized gem pit models that explain how traditional mining systems operate. :contentReference[oaicite:27]{index=27}",
            "Short educational films about gem mining in the Sabaragamuwa Province are also commonly shown. :contentReference[oaicite:28]{index=28}",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Ratnapura/gem-experience/gem-museum.webp`,
          imageAlt: "Gemmological museum in Ratnapura",
          mediaPosition: "left",
        },

        {
          type: "p",
          text: "<strong>Opening Hours:</strong> Generally around 8:00 AM – 5:00 PM daily, though private museum schedules may vary. :contentReference[oaicite:29]{index=29}",
        },

        {
          type: "button",
          label: "View Gem Market on Google Maps",
          href: "https://www.google.com/maps?q=6.678960745764631,80.40428897969214",
        },

        {
          type: "button",
          label: "View Gemmological Museum on Google Maps",
          href: "https://www.google.com/maps?q=6.6752949463969165,80.41913761470505",
        },
      ],
    },
  ],
};

export default RatnapuraGemExperienceArticle;