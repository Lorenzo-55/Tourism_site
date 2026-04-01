const NegomboDutchFortArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Negombo", to: "/places/negombo" },
    { label: "Dutch Fort (Fort Negombo)" },
  ],

  hero: {
    title: "Dutch Fort (Fort Negombo)",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/Negombo/NegomboFort2.jpg`,
  },

  sections: [
    {
      type: "text",
      title: "Dutch Fort (Fort Negombo)",
      paragraphs: [
        "Today, the remains of the fort, including the land gate, serve as a prison, but it is an important colonial monument.",
      ],
    },
    {
      type: "text",
      title: "Historical Background",
      paragraphs: [
        "Origin: Originally, the Portuguese (from the 16th century onwards) built a fort at this strategic location on the lagoon to protect the important cinnamon trade.",
        "Dutch Period (VOC): The Dutch East India Company (VOC) captured the fort in 1640, and after several reconquests by the Portuguese, the Dutch established permanent residence in 1644. The current, more fortified fort was built around 1672 on the ruins of the Portuguese fort. It had a unique, unfinished pentagonal plan with four bastions. The main entrance, the Landpoort (Land Gate), bears the date 1678.",
        "British Period: The British captured the fort without resistance in 1796. At the end of the 19th century, they demolished a large part of the fort and used the stones to build a prison.",
      ],
    },
    {
      type: "text",
      title: "Current Status",
      paragraphs: [
        "Only a small part of the original, imposing VOC fort remains:",
        "The Old Gate: The most prominent remnant is the massive, arched Landpoort (eastern wall), surmounted by an inscription with the year 1678 and a British-era clock tower (in honor of Queen Victoria's Jubilee).",
        "Walls and Bastions: Parts of the eastern wall and the remains (earthen ramparts) of two bastions are still visible.",
        "Current Function: The site of the former fort is still used as Negombo's city prison, a function established by the British. This means that the courtyard and most of the remaining buildings are not open to the public.",
      ],
    },
    {
      type: "text",
      title: "Visitor Information",
      paragraphs: [
        "You can view the historic Landpoort, the clock tower, and the exterior of the remaining walls.",
        "It's an interesting, if modest, remnant of Sri Lanka's Dutch colonial period.",
        "It's located near the famous Fish Market (Lellama) and the Hamilton Canal.",
      ],
    },
  ],
};

export default NegomboDutchFortArticle;