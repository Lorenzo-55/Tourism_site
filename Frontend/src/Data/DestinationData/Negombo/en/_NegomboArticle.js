const NegomboArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Negombo" },
  ],

  hero: {
    kicker: "West Coast Sri Lanka",
    title: "Negombo",
    subtitle: "Colonial legacy, canals, and coastal life",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Negombo/NegomboHero.jpg`,
  },

    overview: {
    kicker: "Overview",
    title: "A Historic Coastal City",
    paragraphs: [
        "Negombo, located on the west coast of Sri Lanka, is a city with a rich history, largely due to its position as an important trading port.",
        "Its strategic coastal location and natural lagoon made it a key hub for trade, attracting colonial powers who shaped much of its identity over centuries.",
        "Today, Negombo is a vibrant, modern city, a major commercial center, and a popular tourist destination, partly due to its proximity to Colombo International Airport. Fishing remains a crucial economic sector.",
    ],
    },

  sections: [

       {
      type: "text",
      kicker: "Introduction",
      title: "Negombo: A Coastal Gateway for Travelers",
      paragraphs: [
        "Negombo is one of Sri Lanka’s best-known tourist destinations, largely because of its convenient location close to Bandaranaike International Airport. For many visitors, it is the first or last stop of a journey, making it a popular place to rest, explore, and enjoy the coast without traveling far from Colombo or the airport.",
        "The town has a long-established tourism scene with a wide range of hotels, restaurants, pubs, guesthouses, and beachside stays. Visitors can find everything from larger resort-style properties to smaller boutique hotels, along with many casual dining spots and more refined restaurants that cater to both international travelers and locals.",
        "Negombo’s beach area is one of its main attractions, offering a lively tourist atmosphere with seaside views, sunset walks, cafes, bars, and easy access to the town’s hospitality areas. Its combination of beach life, convenience, and visitor-friendly facilities has made Negombo a major tourism hub on Sri Lanka’s west coast.",
      ],
    },

    {
      type: "horizontal-scroll",
      kicker: "Dining",
      title: "Restaurants in Negombo",
      align: "left",
      titleStyle: "styleblue",
      collapsible: false,
      items: [
        {
          title: "Dolce Vita",
          description:
            "A popular restaurant choice for visitors looking for a relaxed setting and a tourist-friendly dining experience.",
          image: `${import.meta.env.BASE_URL}Destinations/Negombo/RandH/DolceVitaNegombo.webp`,
          button: {
            label: "View More",
            to: "https://maps.app.goo.gl/GPXaJnkBGoXdqEh8A",
          },
        },
        {
          title: "Ulivo Pizza Bar",
          description:
            "A stylish dining spot in Negombo known for its modern atmosphere and polished presentation.",
          image: `${import.meta.env.BASE_URL}Destinations/Negombo/RandH/ulivo.webp`,
          button: {
            label: "View More",
            to: "https://maps.app.goo.gl/3VwEEn6n49H44mNT6",
          },
        },
        {
          title: "Lords Restaurant",
          description:
            "One of Negombo’s best-known restaurants, often chosen for its lively atmosphere and strong reputation among travelers.",
          image: `${import.meta.env.BASE_URL}Destinations/Negombo/RandH/LordsRestaurant.webp`,
          button: {
            label: "View More",
            to: "https://maps.app.goo.gl/96kBs5NCehe9z2ud6",
          },
        },
      ],
    },

    {
      type: "horizontal-scroll",
      kicker: "Stay",
      title: "Hotels in Negombo",
      align: "left",
      titleStyle: "styleblue",
      collapsible: false,
      items: [
        {
          title: "Jetwing Blue",
          description:
            "A well-known hotel name in Negombo, offering a more upscale stay close to the beach and tourist area.",
          image: `${import.meta.env.BASE_URL}Destinations/Negombo/RandH/JetwingBlue.webp`,
          button: {
            label: "View More",
            to: "https://maps.app.goo.gl/FURfcK2CDb39jjwBA",
          },
        },
        {
          title: "Heritance",
          description:
            "A recognized luxury hotel option in the area, known for a comfortable resort-style experience by the coast.",
          image: `${import.meta.env.BASE_URL}Destinations/Negombo/RandH/HeritanceNegombo.webp`,
          button: {
            label: "View More",
            to: "https://maps.app.goo.gl/YojGy3ZvGHDDuhK5A",
          },
        },
        {
          title: "Villa Dominikku",
          description:
            "A smaller and more intimate accommodation choice for visitors who want a quieter stay in Negombo.",
          image: `${import.meta.env.BASE_URL}Destinations/Negombo/RandH/VillaDominikku.webp`,
          button: {
            label: "View More",
            to: "https://maps.app.goo.gl/3H6uTRLr21ZzLXmBA",
          },
        },
      ],
    },

    {
    type: "text",
    kicker: "History",
    title: "Colonial Influence",
    paragraphs: [
        "Negombo has a strong colonial identity shaped by the Portuguese, Dutch, and British, each leaving lasting marks on the city’s culture, religion, and infrastructure.",
        "Its position as a coastal trading hub made it highly valuable, attracting successive colonial powers over several centuries.",
        "These influences are still clearly visible today, from churches and canals to the layout of the city itself.",
    ],
    },

    {
    type: "text",
    kicker: "Portuguese Period",
    title: "Portuguese Legacy: Religion and Trade",
    content: [
        {
        type: "p",
        text: "The relationship between Negombo and the Portuguese is fundamental to the city's identity. The Portuguese were the first Europeans to settle here and have left a lasting legacy that distinguishes Negombo from many other cities in Sri Lanka. Their presence shaped the religious and social fabric of the region in a lasting way. Many traditions and cultural patterns seen today can be traced directly back to this period.",
        },

        { type: "h3", text: "Below are the key aspects of this historical connection:" },

        { type: "h4", text: "“Little Rome”" },
        {
        type: "p",
        text: "The most visible and lasting legacy of the Portuguese is religion. Their influence permanently changed the spiritual identity of the region. This shift continues to define Negombo’s character even in modern times.",
        },

        { type: "h4", text: "Catholicism" },
        {
        type: "p",
        text: "The Portuguese introduced Roman Catholicism in the 16th century, particularly among the local fishing communities. This religious conversion was widespread and deeply rooted in daily life. Today, Catholic traditions remain central to many communities in Negombo.",
        },

        { type: "h4", text: "Identity" },
        {
        type: "p",
        text: "Negombo is often called the \"Little Rome\" of Sri Lanka because of its high percentage of Catholic residents and the abundance of large, striking churches that dominate the cityscape. The skyline itself reflects this identity with prominent church structures. This nickname highlights how deeply religion is embedded in the city’s image.",
        },

        { type: "h4", text: "Landmarks" },
        {
        type: "p",
        text: "St. Mary's Church is one of the largest and most beautiful cathedrals in Sri Lanka and a clear example of the Portuguese influence on local culture and architecture. Its scale and design make it a major landmark in the city. The church continues to attract both worshippers and visitors alike.",
        },

        { type: "h3", text: "Trade and Fishing" },
        {
        type: "p",
        text: "The Portuguese were primarily interested in trade, particularly in cinnamon, which grew abundantly in the region. Negombo, with its natural lagoon and strategic coastal location, became a major trading hub. This economic focus helped establish the city’s long-standing connection to maritime activity.",
        },

        { type: "h4", text: "Fishing" },
        {
        type: "p",
        text: "Fishing has remained a central activity since Portuguese rule. The fishing community, which converted to Catholicism, remains the backbone of the local economy to this day. Generations of families have continued this livelihood, maintaining strong coastal traditions.",
        },

        { type: "h3", text: "Negombo Fort" },

        { type: "h4", text: "Origin" },
        {
        type: "p",
        text: "The original Negombo Fort (or fortaleza) was built by the Portuguese in the 17th century, although it was initially a relatively weak structure. It was constructed to secure trade routes and protect colonial interests. Its location was chosen strategically to oversee key access points.",
        },

        { type: "h4", text: "Theater of Battle" },
        {
        type: "p",
        text: "The fort became a crucial battleground in the 17th century, fiercely contested by both the Portuguese and the emerging Dutch East India Company (VOC). Control of the fort meant control over trade and regional power. This made it a focal point in colonial conflicts.",
        },

        { type: "h4", text: "Current Condition" },
        {
        type: "p",
        text: "The Portuguese fort was later destroyed and rebuilt by the Dutch. Today, the remains of the fort, with its mix of Portuguese, Dutch, and British influences, serve as Negombo's prison. Although much has changed, traces of its layered history still remain visible.",
        },

        {
        type: "p",
        text: "In short, the Portuguese were crucial to the formation of Negombo. Their legacy is evident not so much in the perfectly preserved architecture, but rather in the vibrant cultural fabric, the dominant Roman Catholic identity, and the abundance of churches that have earned the city the nickname \"Little Rome.\" This influence continues to shape how the city is experienced today.",
        },
    ],
    },

   {
      type: "text",
      kicker: "Dutch Period",
      title: "Dutch (VOC) Influence: Trade and Infrastructure",
      content: [
        {
          type: "split-paragraph",
          mediaPosition: "right",
          image: `${import.meta.env.BASE_URL}Destinations/Negombo/NegomboDutchCanal.jpg`,
          imageAlt: "Dutch Canal in Negombo",
          paragraphs: [
            "The Dutch conquered the fort, fortified it, and built canals (such as the Dutch Canal and later the Hamilton Canal) for the transport of spices, particularly cinnamon, for which the region was famous. The original fort was enlarged by them and later demolished by the British to build a prison. These developments reshaped the physical and economic landscape of Negombo. Their infrastructure projects were designed to maximize efficiency and control over trade.",
            "The Dutch East India Company (VOC) profoundly influenced Negombo, then part of Ceylon. The city was of great strategic importance to the Dutch due to the lucrative cinnamon trade. This importance made Negombo a key administrative and logistical center. Much of this influence can still be seen in the city’s layout today."
          ]
        },

        {
          type: "p",
          text: "The VOC expelled the Portuguese from Negombo and subsequently used the city as a vital logistical hub for a century and a half (1640–1796). The legacy of the VOC is still visible in Negombo's infrastructure today. Their long presence ensured lasting economic and structural changes. These systems continued to be used even after their rule ended."
        },

        { type: "h3", text: "The Conquest and the Fort" },
        {
          type: "p",
          text: "Negombo was a crucial link in the struggle between the Portuguese and the VOC. Control over the fort meant control over trade routes and regional power. This made the city a strategic priority for both sides."
        },

        { type: "h5", text: "Conquest:" },
        {
          type: "p",
          text: "The VOC captured the Negombo fort from the Portuguese in 1640. After a Portuguese reconquest, the VOC finally captured the fort in 1644. These repeated conflicts highlight the importance of the location. Each capture strengthened Dutch control over the region."
        },

        { type: "h5", text: "Fortification:" },
        {
          type: "p",
          text: "The Dutch rebuilt and reinforced the original Portuguese structure into a more robust fort. They rebuilt it on a smaller, more defensible site, with an eye toward European fortifications. This redesign improved both defense and efficiency. It reflected advanced military architecture of the time."
        },

        { type: "h5", text: "Current Condition:" },
        {
          type: "p",
          text: "Of the original Dutch Fort, only a section of the wall and the monumental gateway from 1678 remain today. This remnant is located on the site of what is now Negombo Prison. Despite limited remains, it still represents a key part of the city’s history. It serves as a visible reminder of colonial conflict and control."
        },

        { type: "h4", text: 'The Waterways: The "Dutch Canal"' },
        {
          type: "p",
          text: "One of the most functional and visible remnants of the Dutch East India Company (VOC) in Negombo is the extensive canal system. These waterways were essential for trade and transport. They also played a role in shaping the surrounding settlements."
        },

        { type: "h3", text: "Purpose:" },
        {
          type: "p",
          text: "The VOC constructed a network of canals to efficiently and safely transport cinnamon and other spices from the interior to the port of Colombo. This helped them monopolize the trade. It allowed for faster and more secure movement of goods. This system gave the Dutch a strong economic advantage."
        },

        {
          type: "p",
          text: "The name Dutch Canal refers to the entire network of waterways that the VOC constructed or improved along the west coast (between Colombo and Puttalam). The section running through Negombo was later improved by the British and is also known as the Hamilton Canal. This network connected multiple trading points efficiently. It became a backbone of coastal transport."
        },

        {
          type: "p",
          text: "The canals are still used today for both fishing and local transport, and are a popular spot for boat trips. They remain an active part of daily life in Negombo. Their continued use highlights their lasting practicality."
        },

        { type: "h3", text: "The Economic Focus: Cinnamon" },
        {
          type: "p",
          text: "The Dutch East India Company (VOC) presence in Negombo was entirely focused on the cinnamon trade, Ceylon's most important export. The fertile coastal strip around Negombo and Colombo was the primary area for growing this extremely valuable spice. This focus shaped the entire regional economy. It made Negombo central to global trade networks."
        },

        { type: "h3", text: "Economic Monopoly for the VOC" },

        { type: "h4", text: "Top Quality:" },
        {
          type: "p",
          text: "Ceylon cinnamon (Cinnamomum verum or 'true' cinnamon) was known worldwide as the finest quality, and the island was the leading producer in the 17th and 18th centuries. Its reputation made it highly valuable in international markets. This demand drove colonial competition."
        },

        {
          type: "p",
          text: "The Dutch East India Company (VOC) entered into an alliance with the king of Kandy with the promise to drive out the Portuguese in exchange for a monopoly on the cinnamon trade. Once the Portuguese were expelled (around 1658), the VOC took control of the cinnamon-growing areas and forts along the coast, including Negombo. This agreement secured their dominance over trade. It allowed them to control both production and distribution."
        },

        { type: "h4", text: "Coat of Arms of Negombo:" },
        {
          type: "p",
          text: "Negombo was located on the fertile coastal strip between Colombo and Puttalam, the main cinnamon-growing area. The fort in Negombo served as an important trading post for the procurement and storage of cinnamon and elephants. Its location made it highly strategic for trade operations. This further increased its importance under Dutch rule."
        },

        { type: "h3", text: "Harvest and Logistics" },

        { type: "h4", text: "Labor:" },
        {
          type: "p",
          text: "For the extraction of cinnamon, local, often caste-specific, laborers were employed to peel and roll the outer bark of the cinnamon tree. The VOC introduced strict registrations to monitor labor and production. This system ensured consistent supply. It also allowed tight control over the workforce."
        },

        {
          type: "p",
          text: "Within the walls of Negombo Fort (later known as the \"Dutch Fort\") were cinnamon warehouses where the precious spice was stored before being shipped to major ports. These storage systems were essential for export. They ensured the protection and organization of valuable goods."
        },

        {
          type: "p",
          text: "The construction and improvement of the Dutch Canal (which runs through Negombo) was directly linked to the cinnamon trade. The canal served as an efficient waterway for transporting large shipments of cinnamon from the harvesting areas to the forts and ports (such as Colombo). This integration of infrastructure supported large-scale trade. It made transport faster and more reliable."
        },

        { type: "h3", text: "Later Period (British)" },
        {
          type: "p",
          text: "Under the British, who took over Ceylon in 1796, cinnamon initially remained important, but they later diversified the economy by focusing on tea and rubber inland. The British continued the Dutch's practice of establishing cinnamon gardens and modernized the plantations. This transition marked a shift in economic priorities. It expanded the island’s overall agricultural output."
        }
      ]
    },





    {
    type: "text",
    kicker: "British Period",
    title: "British Rule: Change and Legacy",
    align: "left",
    content: [
        {
        type: "p",
        text: "The British role in Negombo began in 1796, when they took over the Dutch (VOC) territories in Ceylon. Although the Portuguese and Dutch influences (churches and canals) are most visible, the British also left their mark, particularly through the transformation of the historic fort. Their approach focused less on ornament and more on administrative efficiency, reshaping existing structures to suit colonial governance."
        },

        { type: "h2", text: "Key Points of British Influence in Negombo" },

        {
        type: "h5",
        text: "Demolition:"
        },
        {
        type: "p",
        text: "The British demolished most of the pentagonal Dutch fort at the end of the 19th century. This marked a clear shift away from military fortification toward civil use of the land."
        },

        {
        type: "h5",
        text: "Current Use (Prison):"
        },
        {
        type: "p",
        text: "The stones from the demolished fort were used to build a prison and courthouse. The site of the former fort remains the location of the Negombo Prison to this day, making the fort inaccessible to the public."
        },

        {
        type: "h5",
        text: "Clock Tower:"
        },
        {
        type: "p",
        text: "The iconic clock tower on the Dutch gateway is a British addition, built in honor of Queen Victoria. It stands as one of the few visible reminders of British architectural influence in the area."
        },

        { type: "h2", text: "Infrastructure and Trade" },

        {
        type: "h4",
        text: "Hamilton Canal:"
        },
        {
        type: "p",
        text: "Although often called the \"Dutch Canal,\" the British improved part of this VOC canal network and named it the Hamilton Canal (after a British official), with the aim of strengthening the connection between Colombo and Puttalam. These upgrades enhanced trade efficiency and regional connectivity."
        },

        {
        type: "h4",
        text: "Railways:"
        },
        {
        type: "p",
        text: "The British introduced the railways, which had a huge impact on transport and the city's development in relation to the capital, Colombo. This integration accelerated movement of goods and people, reinforcing Negombo’s economic relevance."
        },

        { type: "h4", text: "Religion and Society" },

        {
        type: "h5",
        text: "St. Mary's Church:"
        },
        {
        type: "p",
        text: "Construction of the enormous and magnificent St. Mary's Church, one of the largest cathedrals in Sri Lanka, began during the British period (in 1874) and was completed in 1922. It remains one of the most significant religious landmarks in Negombo."
        },

        {
        type: "h5",
        text: "Driving Style:"
        },
        {
        type: "p",
        text: "A less visible, but enduring legacy throughout Sri Lanka (including Negombo) is the direction of traffic: driving is on the left, a typical British colonial custom. This system continues to shape daily life and transport norms across the country."
        },

        { type: "h3", text: "Present" },

        {
        type: "p",
        text: "Today, Negombo is a vibrant, modern city, a major commercial center, and a popular tourist destination, partly due to its proximity to Colombo International Airport. Fishing remains a crucial economic sector. The layered colonial influences—Portuguese, Dutch, and British—continue to define the city’s character and identity."
        }
    ]
    },

    {
    type: "cards",
    kicker: "Points of Interest",
    title: "Places to Explore in Negombo",
    align: "center",
    items: [
        {
        title: "Visit the Fish Market (Lellama)",
        image: `${import.meta.env.BASE_URL}Destinations/Negombo/NegomboFishMarket.jpg`,
        imageAlt: "Negombo Fish Market",
        to: "/places/negombo-fish-market",
        },
        {
        title: "Dutch Fort (Fort Negombo)",
        image: `${import.meta.env.BASE_URL}Destinations/Negombo/NegomboFort2.jpg`,
        imageAlt: "Dutch Fort Negombo",
        to: "/places/negombo-dutch-fort",
        },
        {
        title: "Dutch/Hamilton Canal",
        image: `${import.meta.env.BASE_URL}Destinations/Negombo/NegomboCanal2.jpg`,
        imageAlt: "Dutch Hamilton Canal",
        to: "/places/negombo-hamilton-canal",
        },
        {
        title: "St. Mary’s Church",
        image: `${import.meta.env.BASE_URL}Destinations/Negombo/NegomboStMaryChurch.jpg`,
        imageAlt: "St Mary's Church",
        to: "/places/negombo-st-marys-church",
        },
        {
        title: "Angurukaramulla Temple",
        image: `${import.meta.env.BASE_URL}Destinations/Negombo/NegomboBuddhistTemple.jpg`,
        imageAlt: "Angurukaramulla Temple",
        to: "/places/negombo-angurukaramulla-temple",
        },
        {
        title: "Muthurajawela Marsh",
        image: `${import.meta.env.BASE_URL}Destinations/Negombo/NegomboMuthurajawelaMarsh.jpg`,
        imageAlt: "Muthurajawela Marsh",
        to: "/places/negombo-muthurajawela-marsh",
        },
        {
        title: "Explore the city",
        image: `${import.meta.env.BASE_URL}Destinations/Negombo/NegomboCity.jpg`,
        imageAlt: "Explore Negombo city",
        to: "/places/negombo-city",
        },
    ],
    }
  ],
};

export default NegomboArticle;