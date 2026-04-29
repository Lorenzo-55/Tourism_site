const LunugamveheraArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Lunugamvehera National Park" },
  ],

  hero: {
    kicker: "Wildlife & Nature",
    title: "Lunugamvehera National Park",
    subtitle:
      "A quiet yet vital wildlife sanctuary connecting Sri Lanka’s most famous national parks.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Lunugamvehera/lunugamvehera1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "A Hidden Corridor of Wildlife and Water",
    paragraphs: [
      "Lunugamvehera National Park is located in Sri Lanka’s dry zone in the Monaragala District and plays a crucial ecological role despite being less visited than nearby parks like Yala and Udawalawe. The park was established primarily to protect the catchment area of the Lunugamvehera Reservoir, ensuring the stability of water systems that support surrounding regions.",
      "Beyond its hydrological importance, the park serves as a key migration corridor for elephants, allowing them to move safely between Yala National Park and Udawalawe National Park. Its quieter nature offers a more relaxed safari experience while still providing excellent opportunities for wildlife observation.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "history",
      kicker: "Background",
      title: "History and Establishment",
      align: "left",

      paragraphs: [
        "The area surrounding Lunugamvehera has deep historical roots, with archaeological remains from ancient Buddhist monasteries indicating early human settlements that existed until as recently as the 1980s. This long-standing interaction between people and landscape has shaped the region’s cultural and environmental identity.",
        "The modern foundation of the park began with the construction of the Lunugamvehera Reservoir between 1981 and 1986. Protecting the reservoir’s catchment area became a priority, leading to the official declaration of Lunugamvehera as a National Park on December 8, 1995.",
        "The park was also designed to function as an elephant corridor linking Yala and Udawalawe, ensuring safe migration routes for wildlife. After a period of closure during the Sri Lankan Civil War, it was reopened to the public in February 2005.",
      ],
    },

    {
      type: "text",
      id: "ecology",
      kicker: "Nature",
      title: "Ecology and Biodiversity",
      align: "left",

      paragraphs: [
        "Lunugamvehera National Park is part of Sri Lanka’s dry zone ecosystem, characterized by a mosaic of dry mixed evergreen forests, scrublands, and grasslands. This varied landscape supports a wide range of wildlife and makes the park an important biodiversity hotspot.",
        "The park is home to over 40 species of mammals, including large populations of Sri Lankan elephants, wild buffalo, spotted deer, wild boar, and smaller species like mongoose and giant squirrels. Leopards and sloth bears are also present, though sightings are rare due to their low densities and the park’s dense vegetation.",
        "Birdlife is particularly rich, with nearly 200 recorded species. Water birds such as painted storks and spot-billed pelicans are commonly seen, making the park a strong destination for birdwatching. Reptiles, including the mugger crocodile, and a variety of amphibians further add to the park’s ecological diversity.",
      ],

      content: [
        {
          type: "split-paragraph",
          heading: "Conservation Role",
          headingLevel: "h4",
          paragraphs: [
            "The park continues to play a critical role in maintaining the ecological balance of the region. Protecting the reservoir’s catchment ensures water stability for downstream systems, including wetlands like Bundala National Park.",
            "Ongoing conservation efforts focus on managing human-wildlife conflict and controlling invasive plant species that threaten native vegetation and reduce available grazing for animals.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Lunugamvehera/lunugamvehera2.webp`,
          imageAlt: "Lunugamvehera landscape and reservoir",
          mediaPosition: "right",
        },
      ],
    },

    {
      type: "text",
      id: "visiting",
      kicker: "Travel Guide",
      title: "Visitor Information",
      align: "left",

      paragraphs: [
        "The best time to visit Lunugamvehera National Park is during the dry season from May to September, when animals gather around the reservoir due to limited water sources, making wildlife easier to spot. September may see slightly more visitors as nearby Yala National Park typically closes for maintenance during that period.",
        "The wet season from November to December brings heavier rainfall, which can make some tracks difficult to access and cause wildlife to disperse. However, the park remains open throughout the year.",
        "The park operates daily from 6:00 AM to 6:00 PM, with early morning and late afternoon safaris offering the best conditions for wildlife viewing and photography due to cooler temperatures.",
        "Entrance fees for foreign visitors generally range from $25 to $30 for adults and $10 to $15 for children, with additional vehicle fees. Visitors are required to hire a private 4x4 safari jeep with a driver, typically costing between LKR 7,500 and 10,000 for a half-day safari.",
        "The main entrance is located near Thanamalwila on the Hambantota–Wellawaya Road, while the quieter Galge entrance provides access from the Sella Kataragama–Buttala Road.",
      ],
    },

    {
      type: "text",
      id: "activities",
      kicker: "Experience",
      title: "Safari and Wildlife Experiences",
      align: "left",

      content: [
        {
          type: "p",
          text: "Exploring Lunugamvehera National Park is done exclusively through jeep safaris, offering a guided way to navigate its diverse terrain and wildlife habitats. The park’s relatively low visitor numbers create a more peaceful and less crowded experience compared to other major parks.",
        },
        {
          type: "p",
          text: "Elephant sightings are the highlight, with large herds frequently seen near the reservoir, especially during the dry months. The park’s role as a migration corridor increases the chances of observing elephants moving across landscapes.",
        },
        {
          type: "p",
          text: "Birdwatching is another major attraction, with both migratory and endemic species present. Other commonly seen animals include wild buffalo, spotted deer, wild boar, and various smaller mammals.",
        },
        {
          type: "p",
          text: "While elusive species such as leopards and sloth bears do inhabit the park, sightings are rare, adding an element of unpredictability to each safari experience.",
        },
        {
          type: "button",
          label: "View on Google Maps",
          href: "https://maps.app.goo.gl/oErFm3uwYhgvDGwr8",
        },
      ],
    }
  ],
};

export default LunugamveheraArticle;