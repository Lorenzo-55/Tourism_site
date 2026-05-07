const HaputaleTrainJourneyArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Haputale", to: "/places/haputale" },
    { label: "Haputale Train Journey" },
  ],

  hero: {
    kicker: "Scenic Rail Journey",
    title: "Haputale Train Journey",
    subtitle:
      "A memorable highland train ride through tea plantations, misty valleys, waterfalls, and mountain villages.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Haputale/train-journey/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "One of Sri Lanka’s Most Scenic Train Routes",
    paragraphs: [
      "The Haputale train journey forms part of the famous rail route between Kandy and Ella, passing through some of Sri Lanka’s most beautiful highland scenery.",
      "The route winds through green tea plantations, misty mountains, deep valleys, waterfalls, and small villages, making it one of the most memorable travel experiences in the country.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "journey-overview",
      kicker: "The Route",
      title: "Kandy, Nanu Oya, Haputale and Ella",
      align: "left",

      content: [
        {
          type: "p",
          text: "The journey from Kandy through Nuwara Eliya, Haputale, and onward to Ella is often considered one of the most beautiful train journeys in the world.",
        },
        {
          type: "p",
          text: "It is a slow, traditional rail journey that usually takes around 6 to 8 hours, giving travellers plenty of time to enjoy the changing mountain scenery.",
        },
        {
          type: "split-paragraph",
          heading: "Highland Scenery",
          headingLevel: "h3",
          paragraphs: [
            "Along the way, the train passes vast tea estates, mist-covered valleys, mountain villages, and waterfalls.",
            "Haputale is one of the scenic stops on this route and is especially well placed for travellers exploring Sri Lanka’s central highlands.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Haputale/train-journey/highland-scenery.webp`,
          imageAlt: "Train passing through tea plantations near Haputale",
          mediaPosition: "right",
        },
        {
          type: "p",
          text: "Travellers can also choose to board the train at Nanu Oya near Nuwara Eliya, or leave the train earlier depending on their route and schedule.",
        },
      ],
    },

    {
      type: "text",
      id: "tickets-and-classes",
      kicker: "Tickets",
      title: "Tickets and Train Classes",
      align: "left",

      content: [
        {
          type: "p",
          text: "Demand for train tickets is very high, especially for reserved seats on the Kandy to Ella route.",
        },
        {
          type: "h3",
          text: "Available Classes",
        },
        {
          type: "p",
          text: "<strong>1st Class Observation Saloon:</strong> Offers large windows, soft seats, and air conditioning. It is the most comfortable option, but windows and doors are usually closed, so it offers less of the open-door train experience. It is also the most difficult class to book.",
        },
        {
          type: "p",
          text: "<strong>2nd Class Reserved:</strong> A popular option with fixed seats, open windows and doors, fans, and a good balance between comfort and atmosphere.",
        },
        {
          type: "p",
          text: "<strong>2nd Class Non-Reserved:</strong> Does not guarantee a seat. You may need to stand, and it can become crowded, so it is not ideal for the full Kandy to Ella journey unless you are flexible.",
        },
        {
          type: "p",
          text: "<strong>3rd Class Hard Seats:</strong> The cheapest and most local option. Windows and doors remain open, but it is the least comfortable and can be very crowded.",
        },

        {
          type: "h3",
          text: "Booking a Ticket",
        },
        {
          type: "p",
          text: "<strong>Reserved Seats:</strong> 1st, 2nd, and 3rd class reserved seats should be booked well in advance, sometimes 1 to 2 months ahead during peak season.",
        },
        {
          type: "p",
          text: "Tickets can be arranged through a local travel agent, your accommodation, or online through official partners, though surcharges may apply.",
        },
        {
          type: "button",
          label: "Book Train Tickets Online",
          href: "https://seatreservation.railway.gov.lk/mtktwebslr",
        },
        {
          type: "p",
          text: "<strong>Non-Reserved Tickets:</strong> These are only available at the station on the day of departure. They allow you to board the train, but they do not guarantee a seat.",
        },
      ],
    },

    {
      type: "text",
      id: "travel-tips",
      kicker: "Travel Tips",
      title: "Practical Tips for the Journey",
      align: "left",

      content: [
        {
          type: "split-paragraph",
          heading: "Best Views from the Train",
          headingLevel: "h3",
          paragraphs: [
            "<strong>Kandy to Nanu Oya:</strong> Sit on the right side of the train for some of the best views.",
            "<strong>Nanu Oya to Ella:</strong> Sit on the left side for the most scenic section toward Ella.",
            "For the famous view near Nine Arch Bridge, travellers often stand near an open door around Ella, but this should be done with extreme care.",
          ],
          image: `${import.meta.env.BASE_URL}Destinations/Haputale/train-journey/train-view.webp`,
          imageAlt: "Scenic view from a train window in Sri Lanka",
          mediaPosition: "left",
        },
        {
          type: "p",
          text: "<strong>Travel Time:</strong> The journey officially takes around 6 to 7 hours, but delays are common. Avoid planning tight onward connections.",
        },
        {
          type: "p",
          text: "<strong>Food and Drink:</strong> Bring enough water and snacks. Vendors may sell local snacks on board, but a full meal is not usually served.",
        },
        {
          type: "p",
          text: "<strong>Clothing:</strong> Bring a cardigan or sweater, especially for morning or evening travel. The highland areas can feel cold despite Sri Lanka’s tropical climate.",
        },
      ],
    },

    {
      type: "text",
      id: "alternative-routes",
      kicker: "Planning",
      title: "Alternative Route Options",
      align: "left",

      content: [
        {
          type: "p",
          text: "If you cannot book a reserved seat for the entire journey, there are still several good ways to experience the route.",
        },
        {
          type: "p",
          text: "<strong>Travel in Reverse:</strong> Consider taking the train from Ella to Kandy, which can sometimes be slightly quieter.",
        },
        {
          type: "p",
          text: "<strong>Do a Shorter Section:</strong> The stretch from Nanu Oya near Nuwara Eliya to Ella is one of the most scenic parts of the journey and takes around 3 hours.",
        },
        {
          type: "p",
          text: "In short, the Haputale train journey is unforgettable, but good preparation is essential. Booking tickets in advance is especially important for a more relaxed experience.",
        },
        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.768431796067612,80.9576189238709",
        },
      ],
    },
  ],
};

export default HaputaleTrainJourneyArticle;