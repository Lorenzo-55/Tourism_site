const KandyHistoryArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Kandy", to: "/places/kandy" },
    { label: "History" },
  ],

  hero: {
    kicker: "Kingdom History",
    title: "History of Kandy",
    subtitle:
      "The story of Sri Lanka’s last independent kingdom, its resistance to colonial powers, and the preservation of Sinhalese culture and Buddhism.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Kandy/history/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "The Last Independent Kingdom of Sri Lanka",
    paragraphs: [
      "Kandy, historically known as Senkadagalapura, became the capital of the Kingdom of Kandy, the last independent Sinhalese kingdom on the island of Ceylon.",
      "Surrounded by the central highlands, the kingdom resisted Portuguese, Dutch, and British colonial expansion for centuries and became the final stronghold of Sinhalese culture, Buddhism, and political independence.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "kingdom-overview",
      kicker: "Kingdom of Kandy",
      title: "The Kingdom of Kandy",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Kingdom of Kandy existed approximately from 1521 until 1815, although the city itself was founded earlier around 1470.",
        },

        {
          type: "p",
          text: "Its mountainous location in central Sri Lanka made the kingdom difficult for colonial powers to conquer and helped preserve its independence for centuries.",
        },

        {
          type: "split-paragraph",
          heading: "The Sacred Tooth Relic",
          headingLevel: "h3",

          paragraphs: [
            "One of the kingdom’s greatest sources of political and religious legitimacy was the Sacred Tooth Relic of the Buddha, housed in the Temple of the Tooth (Sri Dalada Maligawa).",
            "According to tradition, possession of the Tooth Relic symbolized the right to rule the island.",
            "When the relic was brought to Kandy in 1592, the city’s importance as both a political and religious capital grew enormously.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kandy/history/tooth-relic.webp`,
          imageAlt: "Temple of the Tooth in Kandy",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Key Facts",
        },

        {
          type: "p",
          text: "<strong>Capital:</strong> Kandy, also known historically as Maha Nuwara.",
        },

        {
          type: "p",
          text: "<strong>Importance:</strong> Last independent Sinhalese kingdom in Sri Lanka.",
        },

        {
          type: "p",
          text: "<strong>Main Relic:</strong> Sacred Tooth Relic of the Buddha.",
        },

        {
          type: "p",
          text: "<strong>End of the Kingdom:</strong> British annexation in 1815.",
        },
      ],
    },

    {
      type: "text",
      id: "foundation-and-rise",
      kicker: "Early History",
      title: "Foundation and Rise of Kandy",
      align: "left",

      content: [
        {
          type: "p",
          text: "The city of Kandy was founded between 1470 and 1508 by King Bhuvanaikabahu VI.",
        },

        {
          type: "p",
          text: "It later developed into a semi-independent kingdom under rulers linked to the Kotte dynasty, including Sena Sammatha Wickramabahu.",
        },

        {
          type: "p",
          text: "As Portuguese control expanded along the coast, Kandy gradually emerged as the center of resistance and independence in the interior highlands.",
        },

        {
          type: "p",
          text: "By the late 16th century, after much of the coastal region had fallen under Portuguese influence, Kandy officially became the capital of the last independent Sinhalese kingdom.",
        },
      ],
    },

    {
      type: "text",
      id: "portuguese-conflict",
      kicker: "Portuguese Era",
      title: "Conflict with the Portuguese",
      align: "left",

      content: [
        {
          type: "p",
          text: "From the early 16th century onward, the Portuguese gradually conquered Sri Lanka’s coastal kingdoms, including Kotte and Sitawaka.",
        },

        {
          type: "p",
          text: "Kandy remained the only major independent Sinhalese kingdom and became a symbol of resistance against colonial rule.",
        },

        {
          type: "split-paragraph",
          heading: "The Battle of Danture (1594)",
          headingLevel: "h3",

          paragraphs: [
            "One of the most important victories of the Kandyan Kingdom occurred during the Battle of Danture in 1594.",
            "Portuguese forces led by Pedro Lopes de Sousa invaded the kingdom but were decisively defeated by King Vimala Dharma Suriya I.",
            "The defeat halted Portuguese expansion into the hill country and secured Kandyan independence for more than a century.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kandy/history/portuguese-conflict.webp`,
          imageAlt: "Illustration of Kandyan resistance against the Portuguese",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Portuguese Expansion",
        },

        {
          type: "p",
          text: "<strong>Arrival:</strong> The Portuguese arrived in Sri Lanka in 1505 and focused on controlling the coast and major trade routes.",
        },

        {
          type: "p",
          text: "<strong>Dharmapala of Kotte:</strong> In 1580, King Dharmapala converted to Catholicism and bequeathed his kingdom to the Portuguese Crown, intensifying Kandyan resistance.",
        },

        {
          type: "p",
          text: "<strong>Naval Warfare:</strong> Kandyan forces also attacked Portuguese shipping between 1612 and 1613, capturing cargo and damaging Portuguese trade operations.",
        },

        {
          type: "p",
          text: "The inability of the Portuguese to fully conquer the interior highlands made Kandy the lasting center of Sinhalese independence.",
        },
      ],
    },

    {
      type: "text",
      id: "dutch-voc-relations",
      kicker: "Dutch Period",
      title: "The Dutch VOC and Kandy",
      align: "left",

      content: [
        {
          type: "p",
          text: "Kandy’s relationship with the Dutch East India Company (VOC) was complex, involving military alliances, trade agreements, and later open conflict.",
        },

        {
          type: "p",
          text: "The kingdom strategically used alliances with European powers to weaken Portuguese influence while attempting to maintain independence.",
        },

        {
          type: "split-paragraph",
          heading: "Alliance Against the Portuguese",
          headingLevel: "h3",

          paragraphs: [
            "In 1602, King Vimala Dharma Suriya I formed an early alliance with Dutch admiral Joris van Spilbergen.",
            "Later, in 1638, King Raja Singha II signed a major treaty with the VOC.",
            "In exchange for military support against the Portuguese, Kandy granted the Dutch monopoly rights over cinnamon and elephant exports.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kandy/history/dutch-voc.webp`,
          imageAlt: "Dutch VOC influence in Sri Lanka",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Expulsion of the Portuguese",
        },

        {
          type: "p",
          text: "By 1658, combined Kandyan and VOC military campaigns successfully expelled the Portuguese from Sri Lanka.",
        },

        {
          type: "p",
          text: "However, tensions quickly emerged when the VOC refused to hand conquered coastal territories back to Kandy.",
        },

        {
          type: "p",
          text: "<strong>VOC Justification:</strong> The Dutch claimed the kingdom could not repay wartime debts, so they retained the coastal regions as collateral.",
        },

        {
          type: "p",
          text: "<strong>Trade Dependence:</strong> Despite political tensions, the VOC depended heavily on Kandyan cinnamon and elephant trade.",
        },

        {
          type: "h3",
          text: "The Treaty of 1766",
        },

        {
          type: "p",
          text: "After conflict and Dutch invasions in the 1760s, King Kirti Sri Rajasingha was forced to sign the Treaty of 1766.",
        },

        {
          type: "p",
          text: "This agreement ceded the entire coastal strip of Sri Lanka to the VOC and effectively made Kandy a landlocked kingdom.",
        },
      ],
    },

    {
      type: "text",
      id: "british-conquest",
      kicker: "British Era",
      title: "The British Conquest and the Fall of the Kingdom",
      align: "left",

      content: [
        {
          type: "p",
          text: "The British took control of the Dutch coastal territories in 1796 during the Napoleonic Wars and gradually turned their attention toward Kandy.",
        },

        {
          type: "p",
          text: "By the early 19th century, the kingdom faced increasing internal unrest, especially among Kandyan chiefs dissatisfied with the rule of King Sri Wickrama Rajasinghe.",
        },

        {
          type: "split-paragraph",
          heading: "The Kandyan Convention (1815)",
          headingLevel: "h3",

          paragraphs: [
            "The Kandyan chiefs eventually allied themselves with the British governor Sir Robert Brownrigg.",
            "On March 2, 1815, the Kandyan Convention was signed at the Temple of the Tooth, officially deposing King Sri Wickrama Rajasinghe and transferring sovereignty to the British Crown.",
            "This marked the end of the independent Sinhalese monarchy and the first time the entire island came under a single foreign colonial power.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Kandy/history/kandyan-convention.webp`,
          imageAlt: "Historical depiction of the Kandyan Convention",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Key Terms of the Convention",
        },

        {
          type: "p",
          text: "<strong>End of the Monarchy:</strong> King Sri Wickrama Rajasinghe was deposed and exiled.",
        },

        {
          type: "p",
          text: "<strong>British Sovereignty:</strong> The British Crown gained control over the Kandyan Kingdom.",
        },

        {
          type: "p",
          text: "<strong>Protection of Buddhism:</strong> The British promised to preserve Buddhism and protect the Sacred Tooth Relic.",
        },

        {
          type: "h3",
          text: "The Uva-Wellassa Rebellion",
        },

        {
          type: "p",
          text: "Disillusionment with British rule quickly led to the Uva-Wellassa Rebellion of 1817–1818, one of the largest anti-colonial uprisings in Sri Lankan history.",
        },

        {
          type: "p",
          text: "The rebellion was brutally suppressed, and the British subsequently abolished many of the rights previously granted to the Kandyan chiefs.",
        },

        {
          type: "p",
          text: "From that point onward, the British established direct colonial administration over the Kandyan territories.",
        },
      ],
    },
  ],
};

export default KandyHistoryArticle;