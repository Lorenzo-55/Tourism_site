const MuseumsArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Colombo", to: "/places/colombo" },
    { label: "Museums in Colombo", to: "/places/colombo/museums" },
  ],

  hero: {
    kicker: "COLOMBO CULTURE",
    title: "Museums in Colombo",
    subtitle: "",
    backgroundImage: "/Tourism_site/Destinations/Colombo/Colombo-National-Museumx.jpg",
  },

  overview: {
    kicker: "OVERVIEW",
    title: "A broad guide to Colombo’s museums",
    paragraphs: [
      "Colombo has a surprisingly wide museum scene, ranging from major national institutions and colonial-period houses to specialist collections focused on money, maritime history, postal services, aviation, contemporary art, and religious heritage. Some are formal state museums, others feel more personal, niche, or unexpected.",
      "This page brings the city’s main museum and museum-like experiences into one guide. It covers what each place focuses on, where it is, and what makes it worth visiting, so the page works both as an introduction and as a practical planning reference.",
    ],
  },

  sections: [
    {
      type: "cards",
      kicker: "QUICK GUIDE",
      title: "Main museums and collections covered on this page",
      align: "center",
      items: [
        {
          to: "#colombo-national-museum",
          image: "/Tourism_site/Destinations/Colombo/ColomboMuseum2.jpg",
          imageAlt: "Colombo National Museum",
          title: "Colombo National Museum",
          description: "Sri Lanka’s main museum for archaeology, regalia, sculpture, and long-span cultural history.",
        },
        {
          to: "#natural-history-museum",
          image: "/Tourism_site/Destinations/Colombo/ColomboMuseum3x.webp",
          imageAlt: "National Museum of Natural History",
          title: "National Museum of Natural History",
          description: "Endemic wildlife, geology, fossils, zoological specimens, and the island’s natural heritage.",
        },
        {
          to: "#independence-museum",
          image: "/Tourism_site/Destinations/Colombo/ColomboMuseum4.jpg",
          imageAlt: "Independence Memorial Museum",
          title: "Independence Memorial Museum",
          description: "A compact museum beneath Independence Memorial Hall focused on the road to independence.",
        },
        {
          to: "#colombo-dutch-museum",    
          image: "/Tourism_site/Destinations/Colombo/ColomboMuseum5.jpg",
          imageAlt: "Colombo Dutch Museum",
          title: "Colombo Dutch Museum",
          description: "Dutch-period architecture, furniture, coins, documents, and life in colonial Colombo.",
        },
        {
          to: "#economic-history-museum",
          image: "/Tourism_site/Destinations/Colombo/ColomboMuseum6.jpg",
          imageAlt: "Economic History Museum of Sri Lanka",
          title: "Economic History Museum",
          description: "Ancient currency, trade, banking, minting, and the monetary history of Sri Lanka.",
        },
        {
          to: "#port-maritime-museum",
          image: "/Tourism_site/Destinations/Colombo/ColomboMuseum7.webp",
          imageAlt: "Colombo Port Maritime Museum",
          title: "Port Maritime Museum",
          description: "Ship models, port history, colonial trade, and Sri Lanka’s maritime connections.",
        },
        {
          to: "#gangaramaya-museum",
          image: "/Tourism_site/Destinations/Colombo/ColomboMuseum8x.webp",
          imageAlt: "Gangaramaya Temple Museum",
          title: "Gangaramaya Temple Museum",
          description: "A dense and eclectic collection of religious objects, antiques, vehicles, and gifts.",
        },
        {
          to: "#national-postal-museum",
          image: "/Tourism_site/Destinations/Colombo/ColomboMuseum9x.webp",
          imageAlt: "National Postal Museum",
          title: "National Postal Museum",
          description: "Stamps, equipment, transport, pillar boxes, and the history of communication services.",
        },
        {
          to: "#jayewardene-centre-museum",
          image: "/Tourism_site/Destinations/Colombo/ColomboMuseum10x.webp",
          imageAlt: "J.R. Jayewardene Centre and Museum",
          title: "J.R. Jayewardene Centre & Museum",
          description: "A museum, archive, and library dedicated to the former president’s life and career.",
        },
        {
          to: "#old-town-hall-museum",
          image: "/Tourism_site/Destinations/Colombo/ColomboMuseum11x.JPG",
          imageAlt: "Old Town Hall Building and Museum",
          title: "Old Town Hall Museum",
          description: "Neo-Gothic civic history, municipal artifacts, and a recreated council chamber.",
        },
        {
          to: "#modern-contemporary-art-museum",
          image: "/Tourism_site/Destinations/Colombo/ColomboMuseum12x.webp",
          imageAlt: "Museum of Modern and Contemporary Art Sri Lanka",
          title: "MMCA Sri Lanka",
          description: "A contemporary art initiative centered on exhibitions, research, and public engagement.",
        },
        {
          to: "#number-11-bawa",
          image: "/Tourism_site/Destinations/Colombo/ColomboMuseum13x.webp",
          imageAlt: "Number 11 Geoffrey Bawa Residence",
          title: "Number 11",
          description: "Geoffrey Bawa’s former home, visited by guided tour, and essential for architecture lovers.",
        },
      ],
    },

    {
      type: "text",
      kicker: "MAJOR NATIONAL SITES",
      title: "The core museums most visitors start with",
      align: "left",
      content: [
        { type: "h3", text: "Colombo National Museum", id: "colombo-national-museum"},
        { type: "p", text: "The Colombo National Museum, also known as the Sri Lanka National Museum, is the country’s largest and most important museum. It was established on January 1, 1877 by Sir William Henry Gregory and remains the clearest single introduction to Sri Lanka’s long cultural history." },
        { type: "p", text: "The main building is a striking white Italianate structure with a neo-Baroque feel. Construction was overseen by James George Smither and built by Arasi Marikar Wapchie Marikar. The setting in Colombo 7, beside Viharamahadevi Park, adds to its prominence." },
        { type: "p", text: "Its ground floor is arranged in a historical sequence, moving through ancient kingdoms such as Anuradhapura and Polonnaruwa and covering themes like agriculture, irrigation, religion, literature, and court culture. One of its best-known highlights is the regalia of the last King of Kandy, including the royal crown, throne, and ceremonial objects." },
        { type: "p", text: "The museum also displays major stone sculpture and antiquities, including the serene Tholuwila Buddha, moonstones, guard stones, and inscriptions. Upstairs, the emphasis shifts toward arts and everyday life, with masks, textiles, ceramics, currency, weaponry, colonial-era objects, and paintings." },
        { type: "p", text: "Location: Sir Marcus Fernando Mawatha, Colombo 07. Typical hours are around 9:00 AM to 5:00 PM, with closures commonly reported on public holidays and Poya days." },

        { type: "h3", text: "National Museum of Natural History", id: "natural-history-museum" },
        { type: "p", text: "Located within the same museum complex in a separate building, the National Museum of Natural History is Sri Lanka’s dedicated natural history museum. Established in 1986, it focuses on endemic and endangered species, geology, fossils, zoological specimens, and the island’s biodiversity." },
        { type: "p", text: "Its collections cover mammals, birds, reptiles, fish, amphibians, and insects, along with geological material including rocks, minerals, and fossils dating back as far as the Jurassic period. It is especially valuable for visitors who want the natural side of Sri Lanka to sit alongside the archaeological and historical story told by the main museum." },
        { type: "p", text: "Notable exhibits include the skull of Megacerus giganteus, displays linked to the Punani Leopard, and preserved material associated with the famous tusker Nadungamuwe Raja. A combined ticket is often used for both museums." },
        { type: "p", text: "Location: inside the National Museum complex, facing Ananda Coomaraswamy Mawatha, Colombo 07. Reported hours vary, but it is generally described as operating during the daytime and closed on public holidays." },

        { type: "h3", text: "Independence Memorial Museum", id: "independence-museum" },
        { type: "p", text: "Beneath the Independence Memorial Hall at Independence Square, this museum presents a more focused historical narrative centered on the struggle that led to independence in 1948. The memorial hall above, inspired by the Magul Maduwa of Kandy, gives the site a strong symbolic presence." },
        { type: "p", text: "Inside, visitors encounter a compact but meaningful sequence of displays on the end of native rule, colonial resistance, political leadership, and the final path to self-governance. Portraits, busts, documents, and timelines help connect personalities with the national story." },
        { type: "p", text: "The surrounding Independence Square, with the statue of D. S. Senanayake, makes the site feel like both a museum visit and a public civic landmark." },
      ],
    },

    {
      type: "text",
      kicker: "COLONIAL COLOMBO",
      title: "Museums that reveal the city’s Dutch, British, and civic past",
      align: "left",
      content: [
        { type: "h3", text: "Colombo Dutch Museum", id: "colombo-dutch-museum" },
        { type: "p", text: "The Dutch Period Museum on Prince Street in Pettah is one of the best places to understand Colombo during Dutch rule between 1656 and 1796. The museum occupies a restored 17th-century mansion associated with Governor Thomas van Rhee and later reused for many different functions before its eventual restoration." },
        { type: "p", text: "The building itself is a major part of the experience: high ceilings, verandas, and an inner courtyard create a calm colonial atmosphere right in the middle of busy Pettah. Its galleries feature Dutch-period furniture, ceramics, glassware, weapons, VOC coins, maps, portraits, and tombstones from the old Dutch cemetery." },
        { type: "p", text: "This is one of Colombo’s strongest examples of how architecture and collection can reinforce each other. It works especially well for visitors already exploring Pettah and the old colonial core." },

        { type: "h3", text: "Old Town Hall Building and Museum", id: "old-town-hall-museum" },
        { type: "p", text: "Also in Pettah, the Old Town Hall is one of Colombo’s most important colonial civic buildings. Opened in 1873 and designed by J. G. Smither, it originally served as the headquarters of the Colombo Municipal Council before the civic administration moved to the newer Town Hall in the 20th century." },
        { type: "p", text: "The building is notable for its Neo-Gothic design, with pointed arches, cast-iron columns, intricate woodwork, and matching furniture. After later restoration, it became a museum and cultural space." },
        { type: "p", text: "The most memorable feature is the recreated council chamber upstairs, where life-size mannequins sit around the original table as if a municipal meeting is still underway. Downstairs, the displays include steam engines, old machinery, street signs, maps, typewriters, and other artifacts related to Colombo’s civic and municipal development." },

        { type: "h3", text: "Colombo Port Maritime Museum", id: "port-maritime-museum" },
        { type: "p", text: "Close to the port on Chaithya Road in Fort, this museum is housed in a preserved Dutch-period warehouse from 1676. Its historic structure, once linked to the old fortifications and reportedly used for storage and prison functions, makes it one of the most atmospheric maritime sites in the city." },
        { type: "p", text: "The museum traces Sri Lanka’s long relationship with the sea, from legendary early arrivals and Buddhist connections to colonial trade and the modern evolution of Colombo Port. Ship models, paintings, marine artifacts, cannons, anchors, and displays on port infrastructure help explain why the island mattered so much in Indian Ocean trade." },
        { type: "p", text: "It is a quieter museum than some of the better-known city institutions, but it covers an aspect of Sri Lankan history that is central rather than peripheral: maritime exchange, movement, and strategic geography." },
      ],
    },

    {
      type: "text",
      kicker: "SPECIALIST MUSEUMS",
      title: "Smaller institutions with very specific themes",
      align: "left",
      content: [
        { type: "h3", text: "Economic History Museum of Sri Lanka", id: "economic-history-museum" },
        { type: "p", text: "Located in the historic Central Point Building on Chatham Street in Fort, this museum is operated by the Central Bank of Sri Lanka and focuses on money, trade, and banking across more than two millennia. It is often called the Currency Museum or Money Museum." },
        { type: "p", text: "The building itself is impressive, with Corinthian columns, a glass dome, and an atrium that gives the museum a grand institutional setting. Inside, the displays move from barter systems to early coinage, medieval currencies, colonial money, and the rupee-cent system of the modern state." },
        { type: "p", text: "Ancient punch-marked Kahapana coins, Elephant and Swastika coins, Lakshmi plaques, gold Rankahavanu, colonial VOC pieces, banknotes, commemorative issues, and exhibits on minting and printing make this one of Colombo’s most distinctive museum experiences. It is also usually described as free to enter on weekdays." },

        { type: "h3", text: "National Postal Museum", id: "postal-museum" },
        { type: "p", text: "The National Postal Museum in the Postal Headquarters building near Maradana presents the history of communication infrastructure on the island. It traces the story from early colonial postal systems to modern mail services, with a strong emphasis on stamps, transport, equipment, and logistics." },
        { type: "p", text: "The displays include historic postman uniforms, life-size delivery transport models, old pillar boxes with British royal initials, telegraph machines, rotary telephones, weighing scales, date stamps, and a wide philatelic collection. It is one of the city’s more underrated museums, especially for visitors interested in infrastructure rather than courtly or colonial history alone." },

        { type: "h3", text: "J.R. Jayewardene Centre & Museum", id: "jrj-museum" },
        { type: "p", text: "This institution on Dharmapala Mawatha is a museum, archive, and research center dedicated to the life and political career of J. R. Jayewardene, Sri Lanka’s first Executive President. It is housed partly in Vaijantha, a house associated with his childhood." },
        { type: "p", text: "The collections include diplomatic gifts, personal memorabilia, medals, sculptures, manuscripts, correspondence, and a large library. There is also a Japanese section reflecting the goodwill generated by Jayewardene’s 1951 San Francisco Peace Treaty speech. For anyone interested in post-independence politics and statecraft, it offers a more focused, personality-centered kind of museum visit." },
      ],
    },

    {
      type: "text",
      kicker: "ART, RELIGION, AND LIVING COLLECTIONS",
      title: "Museums and museum-like spaces with a different feel",
      align: "left",
      content: [
        { type: "h3", text: "Gangaramaya Temple Museum", id: "gangaramaya-museum" },
        { type: "p", text: "Within the Gangaramaya Temple complex in Colombo 2, this museum is unlike a conventional state institution. It feels dense, layered, and highly personal, built from gifts, donations, sacred objects, antiques, and collected curiosities accumulated over time." },
        { type: "p", text: "Its rooms hold large numbers of Buddha statues from different countries and styles, manuscripts, ivory and wood carvings, coins, watches, jewelry, colonial objects, and a striking range of unexpected items, including vintage cars and ceremonial gifts. The contrast between devotional space and eclectic collection is exactly what makes it memorable." },
        { type: "p", text: "Visitors should dress modestly and remove shoes before entering temple areas. The temple museum is best approached as both a religious site and a visual archive of patronage, global connection, and collecting culture." },

        { type: "h3", text: "Museum of Modern and Contemporary Art Sri Lanka", id: "mmca-sri-lanka" },
        { type: "p", text: "MMCA Sri Lanka is a different kind of institution altogether. Rather than operating as a traditional museum with a permanent public collection, it is a museum in the making: a non-profit, education-led initiative dedicated to modern and contemporary Sri Lankan art, research, conservation, and public access." },
        { type: "p", text: "Its exhibitions are thematic and rotating, and the organization has been known for strong trilingual educational material, guided tours, talks, and public programming. Because it has operated through temporary spaces and changing phases of development, checking its current location and exhibition status is essential before visiting." },

        { type: "h3", text: "National Art Gallery", id: "national-art-gallery" },
        { type: "p", text: "The National Art Gallery on Ananda Coomaraswamy Mawatha is Sri Lanka’s first state-sponsored art gallery and serves as a major public venue for local art. Its permanent collection includes works by important Sri Lankan artists, while the east and west halls have long been used for temporary exhibitions." },
        { type: "p", text: "The institution is significant for the development of public art culture in Colombo, but it is also known for unpredictable accessibility and occasional closures. When open, it provides a useful bridge between historical collections and the present-day art scene." },

        { type: "h3", text: "Number 11 – Geoffrey Bawa’s Residence", id: "number-11-bawa" },
        { type: "p", text: "Number 11 is not a museum in the conventional sense, but it belongs on any serious Colombo cultural itinerary. This was the home of architect Geoffrey Bawa, assembled over decades from several adjacent houses into one deeply layered architectural composition." },
        { type: "p", text: "The experience here is about space, sequence, mood, light, material, and the blurring of inside and outside. It also contains art, furniture, and objects collected by Bawa, but the building itself is the real exhibit. Visits are by guided tour only and require advance booking, making it one of the city’s most rewarding but least spontaneous museum experiences." },
      ],
    },

    {
      type: "text",
      kicker: "BEYOND CENTRAL COLOMBO",
      title: "Notable museum visits a little farther out",
      align: "left",
      content: [
        { type: "h3", text: "Sri Lanka Air Force Museum", id: "air-force-museum" },
        { type: "p", text: "In Ratmalana, south of central Colombo, the Sri Lanka Air Force Museum is the country’s only national museum devoted entirely to aviation. It includes outdoor aircraft displays, hangars of restored planes, helicopters, uniforms, medals, vehicles, and wartime material." },
        { type: "p", text: "The collection ranges from early aircraft such as the Tiger Moth to later jets and helicopters, with remnants from wartime episodes and a research-oriented library component. It is especially strong for families, aviation enthusiasts, and anyone interested in military or technical history." },

        { type: "h3", text: "Traditional Puppet Art Museum", id: "puppet-art-museum" },
        { type: "p", text: "Closer to Colombo than the better-known southern puppet traditions of Ambalangoda, the Traditional Puppet Art Museum in the Dehiwala area focuses on preserving Sri Lanka’s string-puppet heritage. It features colourful puppets representing kings, jesters, devils, villagers, and mythological figures used in storytelling and performance." },
        { type: "p", text: "This museum adds a valuable folk and performance dimension to Colombo’s broader museum landscape. Instead of grand state history or colonial collections, it points toward theatrical tradition, craftsmanship, and narrative culture." },
      ],
    },

    {
      type: "split",
      kicker: "PRACTICAL NOTES",
      title: "How to plan a museum day in Colombo",
      image: "/Tourism_site/Destinations/Colombo/ColomboMuseum14x.jpg",
      imageAlt: "Museum district in Colombo",
      content: [
        { type: "h3", text: "Best pairings" },
        { type: "p", text: "The easiest pairing is the Colombo National Museum with the National Museum of Natural History, since both sit in the same complex. Independence Memorial Hall and its museum also combine well with other Colombo 7 stops such as the National Art Gallery or Number 11, depending on bookings and opening status." },
        { type: "h3", text: "For colonial and urban history" },
        { type: "p", text: "Pettah and Fort work well as a museum cluster. The Dutch Museum, Old Town Hall, Maritime Museum, and Economic History Museum all connect naturally to a walking exploration of old Colombo." },
        { type: "h3", text: "For art and design" },
        { type: "p", text: "The National Art Gallery, MMCA Sri Lanka, Gangaramaya, and Number 11 offer very different visual experiences, from public institutional art to contemporary curation, religious collecting culture, and major tropical modernist architecture." },
        { type: "h3", text: "Before visiting" },
        { type: "p", text: "Opening times and closures can vary significantly between institutions, especially on weekends, public holidays, Poya days, or during maintenance periods. Places such as MMCA Sri Lanka, Number 11, and sometimes the National Art Gallery are particularly worth checking in advance." },
      ],
    },
  ],
};

export default MuseumsArticle;