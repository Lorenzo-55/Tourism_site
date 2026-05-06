const DambullaCaveTempleArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Dambulla", to: "/places/dambulla" },
    { label: "Dambulla Cave Temple" },
  ],

  hero: {
    kicker: "Temple & UNESCO Heritage",
    title: "Dambulla Cave Temple",
    subtitle:
      "Sri Lanka’s largest and best-preserved cave temple complex, with over 2,200 years of Buddhist art, worship, and history.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/DambullaCaveTemple/dambulla1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Rangiri Dambulla Viharaya",
    paragraphs: [
      "The Dambulla Cave Temple, officially known as the Rangiri Dambulla Viharaya or Golden Rock Temple of Dambulla, is one of Sri Lanka’s most spectacular and significant religious sites.",
      "It is a UNESCO World Heritage Site and the largest and best-preserved cave temple complex in the country, with a history spanning more than 2,200 years of continuous Buddhist practice, art, and architecture.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history-significance",
      kicker: "History",
      title: "Key History and Significance",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Royal Refuge and Foundation",
        },
        {
          type: "p",
          text: "The temple’s origins date back to the 1st century BCE.",
        },
        {
          type: "p",
          text: "According to tradition, King Valagamba, also known as Vattagamani Abhaya, was forced into exile by invaders and took refuge in these caves for 15 years.",
        },
        {
          type: "p",
          text: "After regaining his throne, he transformed the caves into magnificent rock temples out of gratitude.",
        },

        {
          type: "h3",
          text: "Continuous Patronage",
        },
        {
          type: "p",
          text: "The complex was continually embellished by various kings over the centuries.",
        },
        {
          type: "p",
          text: "King Nissanka Malla in the 12th century is said to have gilded some of the statues, giving rise to the name “Golden Rock.”",
        },
        {
          type: "p",
          text: "The Kandyan kings in the 18th century commissioned many of the vibrant murals seen in the caves today.",
        },

        {
          type: "h3",
          text: "UNESCO Status",
        },
        {
          type: "p",
          text: "Dambulla Cave Temple was inscribed as a UNESCO World Heritage Site in 1991.",
        },
        {
          type: "p",
          text: "It was recognized as an outstanding example of Sri Lankan religious art and expression, as well as a living Buddhist pilgrimage site with more than two millennia of continuous ritual practice.",
        },
      ],
    },

    {
      type: "text",
      id: "five-caves",
      kicker: "Cave Complex",
      title: "Artistic and Architectural Splendor",
      align: "left",

      content: [
        {
          type: "split-paragraph",
          heading: "The Five Caves",
          headingLevel: "h3",

          paragraphs: [
            "The Dambulla complex consists of five main caves carved beneath a vast overhanging rock.",
            "Together, they contain an extraordinary collection of Buddhist sculpture, murals, and sacred spaces.",
            "The caves form one of the finest preserved examples of Buddhist cave art in Sri Lanka.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/DambullaCaveTemple/dambulla2.webp`,
          imageAlt: "Interior murals and Buddha statues at Dambulla Cave Temple",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Cave 1: Devaraja Viharaya",
        },
        {
          type: "p",
          text: "<strong>Cave of the Divine King:</strong> This cave is dominated by a massive 14-meter (46 ft) reclining Buddha carved out of the rock, depicting the Buddha’s parinirvana, or final passing away.",
        },
        {
          type: "p",
          text: "<strong>Highlights:</strong> Statues of Ananda, the Buddha’s favorite disciple, and the Hindu god Vishnu, who is said to have aided the cave’s creation.",
        },

        {
          type: "h3",
          text: "Cave 2: Maharaja Viharaya",
        },
        {
          type: "p",
          text: "<strong>Cave of the Great Kings:</strong> This is the largest and most spectacular cave in the complex.",
        },
        {
          type: "p",
          text: "It contains 56 Buddha statues in seated, standing, and reclining postures, along with statues of the founding kings Valagamba and Nissanka Malla.",
        },
        {
          type: "p",
          text: "<strong>Highlights:</strong> Murals cover more than 2,100 square meters, depicting scenes from the Buddha’s life, Jataka tales, and episodes from Sri Lankan history.",
        },
        {
          type: "p",
          text: "The cave also contains a natural spring that never dries up.",
        },

        {
          type: "h3",
          text: "Cave 3: Maha Aluth Viharaya",
        },
        {
          type: "p",
          text: "<strong>Great New Temple:</strong> This cave is known for its distinctive 18th-century Kandyan-style paintings covering the walls and ceiling.",
        },
        {
          type: "p",
          text: "It contains more than 50 Buddha statues and a statue of King Kirti Sri Rajasinha.",
        },
        {
          type: "p",
          text: "<strong>Highlights:</strong> Richly painted geometric and religious patterns characteristic of the Kandyan era.",
        },

        {
          type: "h3",
          text: "Cave 4: Pachchima Viharaya",
        },
        {
          type: "p",
          text: "<strong>Western Temple:</strong> This is a smaller cave featuring a small dagoba, or stupa, and several finely carved Buddha figures.",
        },

        {
          type: "h3",
          text: "Cave 5: Devana Aluth Viharaya",
        },
        {
          type: "p",
          text: "<strong>Second New Temple:</strong> This is the newest and smallest cave in the complex.",
        },
        {
          type: "p",
          text: "It features a large reclining Buddha statue and figures made from plaster and brick rather than carved rock.",
        },
        {
          type: "p",
          text: "<strong>Highlights:</strong> Contains statues of Hindu deities such as Vishnu and Kataragama.",
        },
      ],
    },

    {
      type: "text",
      id: "golden-temple",
      kicker: "Modern Entrance",
      title: "The Modern Golden Temple Facade",
      align: "left",

      content: [
        {
          type: "split-paragraph",
          heading: "",
          headingLevel: "h4",

          paragraphs: [
            "At the base of the rock is the modern Golden Temple of Dambulla.",
            "It is easily recognizable by its large Golden Buddha statue in the Dharmachakra Mudra, or preaching pose, and its brightly painted entrance building.",
            "This modern structure serves as the main entry point to the wider site but is architecturally distinct from the ancient cave shrines above.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/DambullaCaveTemple/dambulla3.webp`,
          imageAlt: "Golden Buddha statue at the modern Golden Temple of Dambulla",
          mediaPosition: "left",
        },
        {
          type: "p",
          text: "The overall complex is a unique treasure, blending natural cave formations with a millennia-old gallery of Buddhist art.",
        },
      ],
    },

    {
      type: "text",
      id: "timing-weather",
      kicker: "Visitor Information",
      title: "When to Visit: Timing and Weather",
      align: "left",

      content: [
        {
          type: "h3",
          text: "Operating Hours",
        },
        {
          type: "p",
          text: "<strong>Daily:</strong> 7:00 AM to 7:00 PM.",
        },
        {
          type: "p",
          text: "The site is an active temple, allowing visits throughout the day.",
        },

        {
          type: "h3",
          text: "Ticket Office Hours",
        },
        {
          type: "p",
          text: "The ticket office usually closes around 5:00 PM or 6:00 PM.",
        },
        {
          type: "p",
          text: "<strong>Crucial:</strong> You must buy your ticket at the base before climbing the rock.",
        },

        {
          type: "h3",
          text: "Best Time of Day",
        },
        {
          type: "p",
          text: "<strong>Early Morning:</strong> 7:00 AM to 9:00 AM.",
        },
        {
          type: "p",
          text: "<strong>Late Afternoon:</strong> 4:00 PM to 6:00 PM.",
        },
        {
          type: "p",
          text: "Avoid the heat where possible. The climb is exposed, and the stone floor at the top can become extremely hot between 10:00 AM and 3:00 PM.",
        },
        {
          type: "p",
          text: "Late afternoon also offers beautiful views and golden light.",
        },

        {
          type: "h3",
          text: "Best Time of Year",
        },
        {
          type: "p",
          text: "<strong>Dry Season:</strong> December to April.",
        },
        {
          type: "p",
          text: "This period usually provides drier paths and more pleasant weather for the climb.",
        },

        {
          type: "h3",
          text: "Duration",
        },
        {
          type: "p",
          text: "<strong>Suggested Visit Time:</strong> 1.5 to 2.5 hours including the climb.",
        },
        {
          type: "p",
          text: "The climb takes around 20–30 minutes each way, and at least one hour is recommended to explore the five caves.",
        },
      ],
    },

    {
      type: "text",
      id: "entrances-climb",
      kicker: "Access",
      title: "How to Visit: Entrances and the Climb",
      align: "left",

      content: [
        {
          type: "p",
          text: "There are two main routes at the base of the site, but only one is the correct entrance for purchasing tickets before climbing to the caves.",
        },

        {
          type: "h3",
          text: "The Correct Entrance: Western Entrance",
        },
        {
          type: "p",
          text: "<strong>Location:</strong> This entrance is generally located slightly away from the main road and the Golden Temple complex.",
        },
        {
          type: "p",
          text: "This is where your driver or tuk-tuk should drop you off first.",
        },
        {
          type: "p",
          text: "<strong>Ticket Purchase:</strong> The ticket booth is located at the base of the rock near the designated parking area on the correct side of the complex.",
        },
        {
          type: "p",
          text: "<strong>Foreigner Fee:</strong> Approximately LKR 2,000, or around $6.50–$10 USD for adults. Confirm the current local price on arrival, as this can change.",
        },
        {
          type: "p",
          text: "Payment is typically required in cash using Sri Lankan Rupees.",
        },
        {
          type: "p",
          text: "<strong>The Climb:</strong> This path is the ancient and traditional way up.",
        },
        {
          type: "p",
          text: "It is a moderately strenuous climb of around 350+ steps. The path is well maintained and offers panoramic views of the surrounding flatlands and Sigiriya Rock Fortress in the distance.",
        },

        {
          type: "h3",
          text: "The Incorrect Entrance: Golden Temple Entrance",
        },
        {
          type: "p",
          text: "<strong>Location:</strong> This entrance is at the modern Golden Buddha statue and Buddhist Museum, just off the main Kandy–Jaffna Highway.",
        },
        {
          type: "p",
          text: "<strong>Warning:</strong> Many visitors mistakenly begin their ascent here.",
        },
        {
          type: "p",
          text: "There is no ticket booth at the top of this route. If you climb from here without a ticket, you may be required to climb back down the other side to buy one and then climb back up to the caves.",
        },
        {
          type: "p",
          text: "<strong>Recommendation:</strong> Visit the Golden Temple and museum complex after completing the climb to the cave temples.",
        },
      ],
    },

    {
      type: "text",
      id: "dress-etiquette",
      kicker: "Temple Etiquette",
      title: "Important Dress Code and Etiquette",
      align: "left",

      content: [
        {
          type: "p",
          text: "Dambulla Cave Temple is an active and highly sacred Buddhist site, so strict etiquette rules apply.",
        },

        {
          type: "h3",
          text: "Modest Attire",
        },
        {
          type: "p",
          text: "<strong>Shoulders and Knees:</strong> Both men and women must cover shoulders and knees.",
        },
        {
          type: "p",
          text: "Shorts, mini-skirts, and sleeveless tops are not allowed inside the temple caves.",
        },

        {
          type: "h3",
          text: "Footwear",
        },
        {
          type: "p",
          text: "Shoes and hats must be removed before entering the upper rock complex and temple area.",
        },
        {
          type: "p",
          text: "A paid shoe-storage facility is available near the top for a small fee.",
        },

        {
          type: "h3",
          text: "Tip",
        },
        {
          type: "p",
          text: "Bring thick socks to wear on the stone pathways, as they can become painfully hot in the midday sun.",
        },

        {
          type: "h3",
          text: "Photography",
        },
        {
          type: "p",
          text: "Visitors are not allowed to pose with Buddha statues, including turning their backs to the statues for photos.",
        },
        {
          type: "p",
          text: "Photography of murals should be done without flash.",
        },

        {
          type: "h3",
          text: "Respect",
        },
        {
          type: "p",
          text: "Walk clockwise around the dagoba, or stupa, inside Cave 4, and remain respectful toward monks and other worshippers.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=7.855073514703837,80.65055916640657",
        },
      ],
    },
  ],
};

export default DambullaCaveTempleArticle;