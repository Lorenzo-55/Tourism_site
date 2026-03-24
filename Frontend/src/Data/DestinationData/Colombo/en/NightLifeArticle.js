// src/Data/DestinationData/Colombo/en/NightLifeArticle.js

const NightLifeArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Colombo", to: "/places/colombo" },
    { label: "Nightlife in Colombo", to: "/places/colombo/nightlife" },
  ],

  hero: {
    kicker: "COLOMBO AFTER DARK",
    title: "Nightlife in Colombo",
    subtitle:
      "From rooftop sunsets to dance floors, Colombo offers a polished, energetic nightlife scene with something for every mood.",
    backgroundImage: "/images/colombo-nightlife-hero.jpg",
  },

  overview: {
    kicker: "OVERVIEW",
    title: "An Evening Side of the City",
    subtitle:
      "Colombo’s nightlife is stylish, concentrated, and easy to explore in a single evening.",
    paragraphs: [
      "Colombo has a lively nightlife scene that blends rooftop glamour, hotel lounges, classic pubs, late-night clubs, and casino entertainment. While Sri Lanka is generally conservative, the city’s after-dark culture thrives in dedicated venues, often centered around high-end hotels and popular entertainment districts.",
      "One of Colombo’s defining evening experiences is the rooftop bar, where visitors can enjoy cocktails with views of the Indian Ocean, the skyline, and the illuminated Lotus Tower. For those looking for more energy, the city also offers dance venues, live music spots, relaxed pubs, and full-scale casinos.",
      "Whether you want a quiet drink with a view or a more upbeat night out, Colombo offers a compact but diverse range of options."
    ],
  },

  sections: [
    {
      type: "cards",
      kicker: "SIGNATURE EXPERIENCES",
      title: "Rooftop Bars & Sunset Views",
      subtitle:
        "A rooftop drink is one of the most iconic ways to experience Colombo at night.",
      align: "center",
      items: [
        {
          title: "Sky Lounge",
          image: "/images/colombo-sky-lounge.jpg",
          imageAlt: "Sky Lounge rooftop bar in Colombo",
          description:
            "An elegant rooftop setting at The Kingsbury Hotel, known for sweeping city views, ocean-facing evenings, and a polished atmosphere.",
        },
        {
          title: "Vistas Bar",
          image: "/images/colombo-vistas-bar.jpg",
          imageAlt: "Vistas Bar rooftop setting",
          description:
            "Located at Mövenpick Hotel Colombo, this rooftop venue is popular for skyline views, cocktails, and a modern city-night feel.",
        },
        {
          title: "ON14 Rooftop Lounge & Bar",
          image: "/images/colombo-on14.jpg",
          imageAlt: "ON14 rooftop lounge in Colombo",
          description:
            "A stylish rooftop at Radisson Hotel Colombo, combining sea views, music, and a more relaxed lounge-style setting.",
        },
        {
          title: "Cloud Red",
          image: "/images/colombo-cloud-red.jpg",
          imageAlt: "Cloud Red rooftop bar",
          description:
            "A well-known rooftop venue at Cinnamon Red Hotel with dramatic views and a vibrant evening crowd.",
        },
      ],
    },

    {
      type: "text",
      kicker: "LATE-NIGHT ENERGY",
      title: "Nightclubs & Dancing",
      subtitle:
        "For music, crowds, and a later night out, Colombo has a small number of well-known dance venues.",
      align: "left",
      paragraphs: [
        "If your ideal night involves louder music and a busy dance floor, Colombo’s nightlife shifts from rooftop lounges to a few established club venues.",
        "Rhythm and Blues, often called R&B, is one of the city’s best-known nightlife names and has long been associated with late-night music and dancing.",
        "The Love Bar at Flamingo House offers a more stylish and curated club atmosphere, appealing to visitors looking for a lively but design-conscious night out.",
      ],
    },

    {
      type: "split",
      kicker: "RELAXED EVENINGS",
      title: "Classic Pubs & Live Music",
      subtitle:
        "Not every night out in Colombo needs to be high-energy. The city also does relaxed drinking spots very well.",
      image: "/images/colombo-pubs.jpg",
      imageAlt: "Pub atmosphere in Colombo at night",
      paragraphs: [
        "For a slower-paced evening, Colombo’s pubs and casual bars provide a more social atmosphere focused on drinks, comfort food, and conversation.",
        "In...on the Green at Cinnamon Grand is one of the city’s classic pub-style venues and remains a familiar choice for both locals and visitors.",
        "Taphouse by RnR at Dutch Hospital brings a more casual urban feel, while The RE.PUB.LK offers another easygoing option for drinks and a laid-back night with friends.",
      ],
    },

    {
      type: "text",
      kicker: "ENTERTAINMENT",
      title: "Casinos",
      subtitle:
        "Gaming venues add another side to Colombo nightlife, often combining tables, dining, and live entertainment.",
      align: "left",
      paragraphs: [
        "Colombo is also known for its casino scene, which attracts both locals and visitors looking for a full evening experience under one roof.",
        "Bally’s Casino is one of the city’s most established names, while Bellagio Casino is another popular option for gaming and entertainment.",
        "These venues often position themselves as more than just casinos, pairing gaming floors with food, music, and a lively late-night atmosphere.",
      ],
    },

    {
      type: "text",
      kicker: "PRACTICAL ADVICE",
      title: "Nightlife Tips",
      subtitle:
        "A little preparation makes an evening in Colombo smoother, safer, and more enjoyable.",
      align: "left",
      paragraphs: [
        "Many upscale rooftop bars and clubs follow a smart-casual dress code. Shorts, flip-flops, and caps may not be accepted, especially in hotel venues and late-night clubs.",
        "Some nightclubs charge an entry or cover fee. In certain cases, this may be reduced or waived for ladies or couples, particularly earlier in the evening.",
        "Late-night public transport is limited, so ride-hailing apps such as PickMe and Uber are usually the most reliable way to travel safely between venues and return home afterward.",
      ],
    },
  ],
};

export default NightLifeArticle;