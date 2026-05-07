const MuseumsAndHeritageArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Galle", to: "/places/galle" },
    { label: "Museums and Heritage" },
  ],

  hero: {
    kicker: "Museums & Heritage",
    title: "Museums and Heritage",
    subtitle:
      "Restored colonial buildings, cultural collections, and maritime history inside Galle Fort.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Galle/museums1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Colonial Heritage and Cultural Collections",
    paragraphs: [
      "Galle Fort is home to several important heritage sites and museums that preserve the city’s colonial, cultural, and maritime history.",
      "From the restored Old Dutch Hospital to the National Museum and Maritime Archaeology Museum, these sites show how Galle Fort blends historic architecture with cultural memory and modern visitor experiences.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "old-dutch-hospital",
      kicker: "Restored Heritage Building",
      title: "Old Dutch Hospital",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Old Dutch Hospital in Galle is a beautifully restored historical building that has been repurposed as a vibrant commercial and dining complex.",
        },
        {
          type: "p",
          text: "It is a strong example of how Galle Fort blends its rich colonial history with modern lifestyle.",
        },

        {
          type: "h3",
          text: "History as a Hospital",
        },
        {
          type: "p",
          text: "<strong>Construction:</strong> The hospital was built by the Dutch in the 17th century, during the late 1600s.",
        },
        {
          type: "p",
          text: "<strong>Purpose:</strong> It was established to care for Dutch East India Company personnel, especially officers and seafarers arriving through the busy port of Galle.",
        },
        {
          type: "p",
          text: "Its strategic location near the harbor made it especially useful for serving Dutch sailors and officials.",
        },

        {
          type: "split-paragraph",
          heading: "Architectural Design",
          headingLevel: "h4",

          paragraphs: [
            "The building is a prime example of Dutch colonial architecture adapted to the tropical climate.",
            "<strong>Thick Walls:</strong> Heavy walls, often made from coral stone, helped keep the interior cool.",
            "<strong>Ventilation:</strong> High ceilings and large open spaces improved airflow.",
            "<strong>Verandas:</strong> Long colonnaded verandas run along both floors, creating shaded walkways and gathering areas.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Galle/museums2.webp`,
          imageAlt: "Old Dutch Hospital building in Galle Fort",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Later Uses",
        },
        {
          type: "p",
          text: "After the Dutch period, the building served several purposes under British rule, including as a military barracks and the office of the Chief Administrator.",
        },
        {
          type: "p",
          text: "After Sri Lanka’s independence, it was used as the Galle Town Hall and later for other government offices.",
        },

        {
          type: "h3",
          text: "Modern Transformation",
        },
        {
          type: "p",
          text: "<strong>Restoration:</strong> The building underwent careful conservation work to preserve its original 17th-century architectural character.",
        },
        {
          type: "p",
          text: "<strong>Current Use:</strong> In 2014, the Old Dutch Hospital was formally opened as a shopping and dining precinct.",
        },
        {
          type: "p",
          text: "<strong>Atmosphere:</strong> Today, it has a lively open-air atmosphere centered around internal courtyards and shaded verandas.",
        },
        {
          type: "p",
          text: "It is especially popular in the evening for dining, socializing, and enjoying views from the upper floor.",
        },

        {
          type: "h3",
          text: "What to Expect Today",
        },
        {
          type: "p",
          text: "<strong>Restaurants and Cafés:</strong> The complex includes a variety of eateries serving Sri Lankan and international food.",
        },
        {
          type: "p",
          text: "<strong>Boutique Shops:</strong> Visitors can find souvenirs, jewelry, local crafts, garments, and curated lifestyle products.",
        },
        {
          type: "p",
          text: "<strong>Relaxation:</strong> It is a good place to take a break from walking the ramparts, have coffee, or enjoy a sunset dinner overlooking the Bay of Galle.",
        },
        {
          type: "button",
          label: "View Old Dutch Hospital on Google Maps",
          href: "https://www.google.com/maps?q=26G9%2BQQ%20Galle%2C%20Sri%20Lanka",
        },
      ],
    },

    {
      type: "text",
      id: "galle-national-museum",
      kicker: "Cultural Museum",
      title: "Galle National Museum",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Galle National Museum focuses on the anthropological and cultural heritage of Southern Sri Lanka, with particular attention to the colonial period.",
        },

        {
          type: "split-paragraph",
          heading: "Location and Building History",
          headingLevel: "h4",

          paragraphs: [
            "<strong>Location:</strong> The museum is located within Galle Fort on Church Street, next to the Amangalla Hotel, formerly the New Oriental Hotel.",
            "<strong>Building History:</strong> It is housed in the oldest remaining Dutch building in the fort.",
            "The building was originally constructed in 1656 as a commissariat store for the Dutch garrison.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Galle/museums3.webp`,
          imageAlt: "Galle National Museum inside Galle Fort",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Collections",
        },
        {
          type: "p",
          text: "The exhibits are generally divided into three main galleries.",
        },

        {
          type: "h4",
          text: "Gallery 1: Cottage Industry",
        },
        {
          type: "p",
          text: "This gallery displays objects related to traditional local crafts.",
        },
        {
          type: "p",
          text: "<strong>Beeralu Lace:</strong> Traditional pillow lace weaving from the region.",
        },
        {
          type: "p",
          text: "<strong>Wooden Masks:</strong> Examples connected to traditional mask carving.",
        },
        {
          type: "p",
          text: "<strong>Turtle-Shell Jewelry:</strong> Historical examples of turtle-shell jewelry manufacturing, a practice that is largely historical today.",
        },

        {
          type: "h4",
          text: "Gallery 2: Dutch Period",
        },
        {
          type: "p",
          text: "This gallery contains Dutch-era artifacts connected to colonial life and trade.",
        },
        {
          type: "p",
          text: "<strong>Artifacts:</strong> Furniture, weaponry, and porcelain from Dutch East India Company ships.",
        },

        {
          type: "h4",
          text: "Gallery 3: Sri Lanka China Friendship Gallery",
        },
        {
          type: "p",
          text: "This gallery is dedicated to historical and archaeological evidence of trade relations between China and Sri Lanka.",
        },

        {
          type: "h3",
          text: "Opening Hours",
        },
        {
          type: "p",
          text: "<strong>Hours:</strong> Typically open from 9:00 AM to 5:00 PM, Tuesday to Saturday.",
        },
        {
          type: "button",
          label: "View Galle National Museum on Google Maps",
          href: "https://www.google.com/maps?q=26H8%2BHQ6%2C%20Church%20St%2C%20Galle%2080000%2C%20Sri%20Lanka",
        },
      ],
    },

    {
      type: "text",
      id: "maritime-archaeology-museum",
      kicker: "Maritime Museum",
      title: "National Maritime Archaeology Museum",
      align: "left",

      content: [
        {
          type: "p",
          text: "The National Maritime Archaeology Museum is dedicated to Sri Lanka’s long and important relationship with the sea.",
        },
        {
          type: "p",
          text: "Its exhibitions focus on marine life, maritime trade, fishing communities, and archaeological discoveries from shipwrecks.",
        },

        {
          type: "split-paragraph",
          heading: "Location and Building History",
          headingLevel: "h4",

          paragraphs: [
            "<strong>Location:</strong> The museum is located within Galle Fort, housed in a Dutch Warehouse near the Old Gate entrance.",
            "<strong>Building History:</strong> The warehouse dates back to 1671.",
            "<strong>Impact of the Tsunami:</strong> The museum was badly damaged during the 2004 Indian Ocean tsunami, with a significant loss of artifacts. It was later restored with international assistance and reopened.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/Galle/museums4.webp`,
          imageAlt: "National Maritime Archaeology Museum in Galle Fort",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Collections",
        },
        {
          type: "p",
          text: "The museum’s exhibitions cover two main themes.",
        },

        {
          type: "h4",
          text: "Maritime History and Archaeology",
        },
        {
          type: "p",
          text: "This section includes artifacts recovered from shipwrecks off the southern coast, some nearly 800 years old.",
        },
        {
          type: "p",
          text: "<strong>Objects:</strong> Maps, ropes, earthenware, artillery, and other shipwreck materials.",
        },
        {
          type: "p",
          text: "<strong>Watercraft:</strong> Models of ancient and traditional Sri Lankan vessels, including the oruva and kattumaram.",
        },
        {
          type: "p",
          text: "The displays also explore maritime trade and seafaring history.",
        },

        {
          type: "h4",
          text: "Marine Ecology and Anthropology",
        },
        {
          type: "p",
          text: "This section highlights the marine ecosystem of the southern coast and the communities connected to it.",
        },
        {
          type: "p",
          text: "<strong>Marine Life:</strong> Displays include skeletons and models of marine mammals, turtles, sea birds, and other coastal species.",
        },
        {
          type: "p",
          text: "A large whale skeleton is among the museum’s notable displays.",
        },
        {
          type: "p",
          text: "<strong>Fishing Communities:</strong> Exhibits also present the lifestyle and fishing techniques of local coastal communities.",
        },

        {
          type: "h3",
          text: "Opening Hours",
        },
        {
          type: "p",
          text: "<strong>Hours:</strong> Typically open from 8:30 AM or 9:00 AM to 4:30 PM or 5:00 PM daily.",
        },
        {
          type: "button",
          label: "View Maritime Archaeology Museum on Google Maps",
          href: "https://www.google.com/maps?q=26H9%2B644%2C%20Queens%20St%2C%20Galle%2080000%2C%20Sri%20Lanka",
        },
      ],
    },
  ],
};

export default MuseumsAndHeritageArticle;