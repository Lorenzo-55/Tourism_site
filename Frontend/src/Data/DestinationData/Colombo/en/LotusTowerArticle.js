const lotusTowerArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Colombo", to: "/colombo" },
    { label: "Lotus Tower", to: "/colombo/lotus-tower" },
  ],

  hero: {
    kicker: "LANDMARK",
    title: "Colombo Lotus Tower",
    subtitle:
      "A modern icon of Colombo and one of the city’s most striking attractions, known for panoramic views, dining, and entertainment.",
    backgroundImage: "/images/lotus-tower-hero.jpg",
  },

  overview: {
    kicker: "OVERVIEW",
    title: "An unmissable feature of the Colombo skyline",
    paragraphs: [
      "The Colombo Lotus Tower, also known as Nelum Kuluna, is a stunning modern landmark that dominates the Colombo skyline. It is the tallest self-supported structure in South Asia and one of Sri Lanka’s most recognizable attractions.",
      "Inspired by the lotus flower, a symbol of purity in Sri Lankan culture, the tower combines telecommunications functions with tourism, leisure, dining, and entertainment. For many visitors, it is one of the best places in Colombo to experience the city from above.",
    ],
  },

  sections: [
    {
      type: "text",
      kicker: "VISITOR GUIDE",
      title: "Key facts",
      paragraphs: [
        "Height: 350 meters (approximately 1,150 feet).",
        "Significance: The tallest self-supported structure in South Asia and the tallest skyscraper in Sri Lanka.",
        "Design: Inspired by the lotus flower, with a distinctive bulb-shaped upper section.",
        "Purpose: Primarily a telecommunications and television tower, while also serving as a major tourism and leisure destination.",
      ],
    },

    {
      type: "cards",
      kicker: "EXPERIENCES",
      title: "What to see and do",
      subtitle:
        "The observation deck is the main highlight, but the complex includes several other attractions.",
      align: "center",
      items: [
        {
          title: "Observation Deck",
          description:
            "Located on the 29th floor at about 244 meters, with sweeping 360-degree views of Colombo, the Indian Ocean, Fort, and Port City.",
          image: "/images/lotus-tower-observation-deck.jpg",
          imageAlt: "Observation deck at Colombo Lotus Tower",
          to: "#",
        },
        {
          title: "Blue Orbit Revolving Restaurant",
          description:
            "Located on the 27th floor, this revolving restaurant completes a full rotation in about 90 minutes while offering changing views during dining.",
          image: "/images/lotus-tower-restaurant.jpg",
          imageAlt: "Blue Orbit Revolving Restaurant",
          to: "#",
        },
        {
          title: "Pixel Bloom Digital Art Museum",
          description:
            "An immersive digital art experience on the ground floor featuring interactive and layered 3D visuals related to Sri Lankan culture and the tower’s history.",
          image: "/images/lotus-tower-pixel-bloom.jpg",
          imageAlt: "Pixel Bloom Digital Art Museum",
          to: "#",
        },
        {
          title: "Ground Floor Facilities",
          description:
            "Includes a food court, ice cream lab, and souvenir shop called Celebrate Lotus Colombo with locally made items and themed merchandise.",
          image: "/images/lotus-tower-ground-floor.jpg",
          imageAlt: "Ground floor facilities at Lotus Tower",
          to: "#",
        },
        {
          title: "Rooftop Promenade",
          description:
            "An open-air space on the 3rd floor that is suitable for photos, short walks, and relaxed views around the complex.",
          image: "/images/lotus-tower-promenade.jpg",
          imageAlt: "Rooftop promenade at Lotus Tower",
          to: "#",
        },
      ],
    },

    {
      type: "text",
      kicker: "BEST TIME",
      title: "When to visit",
      paragraphs: [
        "The best time to visit is just before sunset, usually between 5:30 PM and 6:30 PM. This gives you a chance to see Colombo in daylight and then watch the city gradually light up after dark.",
        "This transition from sunset to nighttime is one of the most memorable parts of the Lotus Tower experience, especially from the observation deck.",
      ],
    },

    {
      type: "text",
      kicker: "TICKETS",
      title: "Tickets and timings",
      paragraphs: [
        "Ticket prices are generally higher for foreign tourists than for locals, so it is best to confirm the latest rates at the ticket counter on arrival.",
        "Foreign Tourist: Observation Deck + Pixel Bloom approximately USD 20 for adults and USD 10 for children aged 3 to 10.",
        "Operating Hours: Weekdays from 9:00 AM to 10:00 PM, and weekends from 9:00 AM to 11:00 PM.",
        "Tickets are typically issued up to one hour before official closing time.",
        "An Express Pass may sometimes be available for a higher fee, allowing visitors to skip the regular queue.",
      ],
    },

    {
      type: "split",
      kicker: "LOCATION",
      title: "Where it is",
      subtitle: "Easy to reach from central Colombo.",
      image: "/images/lotus-tower-location.jpg",
      imageAlt: "Colombo Lotus Tower near Beira Lake",
      paragraphs: [
        "The Lotus Tower is located on the banks of Beira Lake, in a central part of Colombo that is easy to reach by taxi or tuk-tuk.",
        "It is a short ride from areas such as Fort and Cinnamon Gardens, making it a convenient stop for both first-time visitors and local travelers exploring the city.",
      ],
    },
  ],
};

export default lotusTowerArticle;