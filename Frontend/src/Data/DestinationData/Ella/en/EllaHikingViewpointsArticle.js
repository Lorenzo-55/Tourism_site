const HikingViewpointsArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Ella", to: "/places/ella" },
    { label: "Hiking & Viewpoints" },
  ],

  hero: {
    kicker: "Hiking & Nature",
    title: "Hiking & Viewpoints",
    subtitle:
      "Mountain hikes, panoramic viewpoints, tea trails, and scenic landscapes across Ella and Haputale.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/HikingViewpoints/hiking1.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Exploring the Highlands",
    paragraphs: [
      "The central highlands around Ella and Haputale are among the most scenic regions in Sri Lanka, known for dramatic valleys, tea plantations, mountain viewpoints, and railway landscapes.",
      "From the iconic summit of Ella Rock to the tea-covered slopes around Lipton’s Seat, the region offers a combination of hiking, photography, history, and panoramic scenery.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "ella-rock",
      kicker: "Hiking",
      title: "Ella Rock",
      align: "left",

      content: [
        {
          type: "p",
          text: "Ella Rock is one of the most popular hiking destinations near the village of Ella in the Sri Lankan highlands.",
        },

        {
          type: "h3",
          text: "Duration of the Hike",
        },
        {
          type: "p",
          text: "The total round-trip hike usually takes between 3 and 5 hours, including time spent at the summit.",
        },
        {
          type: "p",
          text: "The total duration depends on your starting point, either Ella village or Kithalella Station, as well as your walking pace.",
        },

        {
          type: "h3",
          text: "Difficulty Level",
        },
        {
          type: "p",
          text: "The hike is generally considered moderate.",
        },
        {
          type: "p",
          text: "The first section along the railway line is relatively flat, while the final section through tea plantations and eucalyptus forest is steeper and more physically demanding.",
        },
        {
          type: "p",
          text: "Good walking shoes are strongly recommended.",
        },

        {
          type: "split-paragraph",
          heading: "The Route",
          headingLevel: "h4",

          paragraphs: [
            "The hike usually begins by walking along the railway line toward Kithalella Station.",
            "At a certain point, the trail leaves the tracks and climbs through tea plantations before entering forested sections on the way to the summit.",
            "The route can be confusing due to side trails, so many travelers use offline navigation apps such as Maps.me or AllTrails instead of hiring a guide.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/HikingViewpoints/hiking2.webp`,
          imageAlt: "View from Ella Rock",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Tips",
        },
        {
          type: "p",
          text: "<strong>Start Early:</strong> Begin before 8:00 AM to avoid heat and crowds.",
        },
        {
          type: "p",
          text: "<strong>Bring Supplies:</strong> Carry enough water and snacks.",
        },
        {
          type: "p",
          text: "<strong>Be Cautious:</strong> Some locals may insist you are on the wrong route and offer guiding services even when unnecessary.",
        },
        {
          type: "p",
          text: "<strong>Entrance Fee:</strong> A small fee is sometimes charged on the final stretch of the climb, around LKR 930 for foreigners, though this can vary depending on the route.",
        },

        {
          type: "h3",
          text: "Views",
        },
        {
          type: "p",
          text: "The summit offers panoramic views of the surrounding green hills, valleys, and often Little Adam’s Peak in the distance.",
        },

        {
          type: "button",
          label: "View Ella Rock on Google Maps",
          href: "https://www.google.com/maps?q=V26W%2BFQG%2C%20Ella%2C%20Sri%20Lanka",
        },
      ],
    },

    {
      type: "text",
      id: "little-adams-peak",
      kicker: "Viewpoint",
      title: "Little Adam’s Peak",
      align: "left",

      content: [
        {
          type: "p",
          text: "Little Adam’s Peak is one of the most popular and accessible hiking destinations in Ella.",
        },

        {
          type: "p",
          text: "The mountain is named after the sacred Adam’s Peak due to its similar conical shape and is famous for its easy ascent and panoramic views.",
        },

        {
          type: "h3",
          text: "Important Information",
        },

        {
          type: "p",
          text: "<strong>Location:</strong> Ella, in the central highlands of Sri Lanka.",
        },

        {
          type: "p",
          text: "<strong>Elevation:</strong> Approximately 1,141 meters above sea level.",
        },

        {
          type: "p",
          text: "<strong>Hiking Time:</strong> Around 1 to 1.5 hours round trip from the trailhead near 98 Acres Resort.",
        },

        {
          type: "p",
          text: "<strong>Difficulty:</strong> Easy to moderate. Suitable for most fitness levels.",
        },

        {
          type: "p",
          text: "<strong>Cost:</strong> Free admission.",
        },

        {
          type: "split-paragraph",
          heading: "The Walk",
          headingLevel: "h4",

          paragraphs: [
            "The hike begins from Ella’s main street, with many visitors either walking to the trailhead near 98 Acres Resort or taking a short tuk-tuk ride.",
            "The first section passes through lush tea plantations where tea pickers are often seen working.",
            "The final climb consists of a well-maintained staircase made of concrete and natural stone leading toward the summit.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/HikingViewpoints/hiking3.webp`,
          imageAlt: "Little Adam's Peak trail through tea plantations",
          mediaPosition: "left",
        },

        {
          type: "h3",
          text: "Views",
        },

        {
          type: "p",
          text: "The summit offers 360-degree views over Ella Gap, Ella Rock, rolling green hills, and valleys. Ravana Falls can often be seen in the distance.",
        },

        {
          type: "p",
          text: "There are also one or two additional viewpoints further along the ridge, reached via a steeper and quieter trail.",
        },

        {
          type: "h3",
          text: "Best Time to Visit",
        },

        {
          type: "p",
          text: "<strong>Sunrise:</strong> Very popular for golden light and misty valley views.",
        },

        {
          type: "p",
          text: "<strong>Sunset:</strong> Also offers excellent scenery.",
        },

        {
          type: "p",
          text: "<strong>To Avoid Crowds:</strong> Visit early in the morning.",
        },

        {
          type: "h3",
          text: "Visitor Tips",
        },

        {
          type: "p",
          text: "<strong>Dress Code:</strong> Wear comfortable closed-toe shoes and bring water, sunscreen, and a hat.",
        },

        {
          type: "p",
          text: "<strong>Nearby Activities:</strong> The Flying Ravana Zipline and Ravana Pool Club are located near the trailhead.",
        },

        {
          type: "button",
          label: "View Little Adam’s Peak on Google Maps",
          href: "https://www.google.com/maps?q=V3G6%2BP8%20Demodara%2C%20Sri%20Lanka",
        },
      ],
    },

    {
      type: "text",
      id: "pekoe-trail",
      kicker: "Long Distance Trail",
      title: "The Pekoe Trail Near Ella",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Pekoe Trail is a 300+ km hiking route divided into 22 stages, stretching through Sri Lanka’s Central Highlands from Kandy to Badulla.",
        },

        {
          type: "p",
          text: "The stages around Ella are among the most popular due to their iconic viewpoints and railway scenery.",
        },

        {
          type: "h3",
          text: "Stage 16: Ella to Demodara",
        },

        {
          type: "p",
          text: "<strong>Distance:</strong> Approximately 8.5–9.5 km.",
        },

        {
          type: "p",
          text: "<strong>Duration:</strong> Around 2.5–3 hours.",
        },

        {
          type: "p",
          text: "<strong>Difficulty:</strong> Generally easy and suitable for beginners.",
        },

        {
          type: "h4",
          text: "Highlights",
        },

        {
          type: "p",
          text: "<strong>Nine Arch Bridge:</strong> The route passes through Ella Forest Reserve and crosses the famous “Bridge in the Sky.”",
        },

        {
          type: "p",
          text: "<strong>Demodara Railway Loop:</strong> The endpoint is Demodara Railway Station, known for its spiral railway design where trains loop beneath the station.",
        },

        {
          type: "p",
          text: "<strong>Tea Plantations:</strong> The trail passes through tea fields and rural villages.",
        },

        {
          type: "h3",
          text: "Stage 15: Makulella to Ella",
        },

        {
          type: "p",
          text: "<strong>Distance:</strong> Approximately 9.5–10 km.",
        },

        {
          type: "p",
          text: "<strong>Duration:</strong> Around 3 hours.",
        },

        {
          type: "p",
          text: "<strong>Difficulty:</strong> Moderate due to climbs and descents.",
        },

        {
          type: "h4",
          text: "Highlights",
        },

        {
          type: "p",
          text: "<strong>Ella Rock:</strong> The route includes the summit of Ella Rock with views over Ella Gap and Little Adam’s Peak.",
        },

        {
          type: "p",
          text: "<strong>Eucalyptus Forests:</strong> The trail passes through fragrant eucalyptus forests and tea gardens.",
        },

        {
          type: "p",
          text: "<strong>Views:</strong> The stage begins in Makulella and ends at Ella Railway Station.",
        },

        {
          type: "h3",
          text: "Key Tips",
        },

        {
          type: "p",
          text: "<strong>Navigation:</strong> The Pekoe Trail is well-marked and supported by an official app, while routes are also available on hiking apps like AllTrails.",
        },

        {
          type: "p",
          text: "<strong>Guide:</strong> Many hikers choose local guides for cultural insights and added safety, though the trail can also be completed independently.",
        },

        {
          type: "p",
          text: "<strong>Time:</strong> Early morning starts are recommended, especially for Stage 15.",
        },
      ],
    },

    {
      type: "text",
      id: "liptons-seat",
      kicker: "Historic Viewpoint",
      title: "Lipton’s Seat",
      align: "left",

      content: [
        {
          type: "p",
          text: "Lipton’s Seat is one of Sri Lanka’s most famous viewpoints and is deeply connected to the history of the global tea industry.",
        },

        {
          type: "h3",
          text: "History of Lipton’s Seat",
        },

        {
          type: "p",
          text: "The viewpoint is named after Sir Thomas Lipton, the Scottish tea magnate who revolutionized the tea trade.",
        },

        {
          type: "h4",
          text: "Colonial Era Arrival",
        },

        {
          type: "p",
          text: "Lipton arrived in British Ceylon around 1890 after coffee plantations had been devastated by blight.",
        },

        {
          type: "p",
          text: "Recognizing the potential of tea cultivation, he purchased estates including the Dambatenne Tea Estate near Haputale and built the Dambatenne Tea Factory in 1890.",
        },

        {
          type: "h4",
          text: "Tea Empire",
        },

        {
          type: "p",
          text: "Lipton became famous for eliminating middlemen and bringing affordable, high-quality tea directly to consumers.",
        },

        {
          type: "h4",
          text: "The Viewpoint",
        },

        {
          type: "p",
          text: "Lipton’s Seat sits on Poonagala Hill at nearly 1,970 meters above sea level and was Sir Thomas Lipton’s favorite place to survey his plantations.",
        },

        {
          type: "p",
          text: "On clear days, the panoramic view is said to extend across up to seven of Sri Lanka’s nine provinces.",
        },

        {
          type: "split-paragraph",
          heading: "Lipton’s Seat Today",
          headingLevel: "h4",

          paragraphs: [
            "Today, Lipton’s Seat remains one of Sri Lanka’s best-known viewpoints and a living monument to the island’s tea heritage.",
            "The surrounding landscape is still covered in rolling tea plantations within the Dambatenne Tea Estate near Haputale.",
            "<strong>Statue:</strong> A life-sized statue of Sir Thomas Lipton seated on a bench stands at the summit.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/HikingViewpoints/hiking4.webp`,
          imageAlt: "Lipton's Seat viewpoint in Haputale",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Access",
        },

        {
          type: "p",
          text: "The viewpoint can be reached via a scenic 7–8 km hike from the Dambatenne Tea Factory or by tuk-tuk through the tea estates.",
        },

        {
          type: "h3",
          text: "Visitor Information",
        },

        {
          type: "p",
          text: "<strong>Location:</strong> Poonagala Hill within the Dambatenne Tea Estate near Haputale.",
        },

        {
          type: "p",
          text: "<strong>Best Time:</strong> Sunrise to around 9:00 AM before fog and mist obscure the view.",
        },

        {
          type: "p",
          text: "<strong>Opening Hours:</strong> Generally 6:00 AM to 5:00 PM.",
        },

        {
          type: "p",
          text: "<strong>Foreign Adult Entry Fee:</strong> Approximately LKR 500–550.",
        },

        {
          type: "p",
          text: "<strong>Vehicle Fee:</strong> A small additional charge may apply for tuk-tuks or vehicles.",
        },

        {
          type: "p",
          text: "<strong>Best Season:</strong> November to March for clearer weather and visibility.",
        },

        {
          type: "button",
          label: "View Lipton’s Seat on Google Maps",
          href: "https://www.google.com/maps?q=Q2J8%2B766%20Dambethenna%20Estate%2C%20Lipton%20Seat%20Rd%2C%20Haputale%2C%20Sri%20Lanka",
        },
      ],
    },
  ],
};

export default HikingViewpointsArticle;