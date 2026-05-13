const NuwaraEliyaGardensMythologyArticle = {
  breadcrumbItems: [
    { label: "Home", to: "/" },
    { label: "Nuwara Eliya", to: "/places/nuwara-eliya" },
    { label: "Gardens & Mythology" },
  ],

  hero: {
    kicker: "Gardens & Mythology",
    title: "Gardens & Mythology",
    subtitle:
      "Botanical gardens, mountain scenery, and Ramayana-linked sacred sites near Nuwara Eliya.",
    backgroundImage: `${import.meta.env.BASE_URL}Destinations/NuwaraEliya/gardens-mythology/hero.webp`,
  },

  overview: {
    kicker: "Overview",
    title: "Hakgala, Seetha Eliya, and the Ramayana Landscape",
    paragraphs: [
      "The area southeast of Nuwara Eliya brings together cool-climate gardens, highland forests, Hindu pilgrimage traditions, and stories from the Ramayana.",
      "Hakgala Botanical Garden and Seetha Amman Temple are among the most visited sites in this region, linking natural beauty with mythology, devotion, and Sri Lanka’s hill-country setting.",
    ],
  },

  sections: [
    {
      type: "text",
      id: "hakgala-botanical-garden",
      kicker: "Botanical Garden",
      title: "Hakgala Botanical Garden",
      align: "left",

      content: [
        {
          type: "p",
          text: "Hakgala Botanical Garden is one of Sri Lanka’s most famous botanical gardens and a major attraction near Nuwara Eliya.",
        },

        {
          type: "p",
          text: "The garden is located at the foot of Hakgala Mountain at an elevation of approximately 1,745 meters above sea level.",
        },

        {
          type: "split-paragraph",
          heading: "History of the Garden",
          headingLevel: "h3",

          paragraphs: [
            "Hakgala Botanical Garden was established by the British in 1861.",
            "It was first used as an experimental nursery for cinchona, the plant from which quinine is extracted, and was later used for tea-related experimentation.",
            "In 1884, it was developed into an ornamental botanical garden, making it one of the most historic garden landscapes in Sri Lanka.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/NuwaraEliya/gardens-mythology/hakgala-botanical-garden.webp`,
          imageAlt: "Hakgala Botanical Garden near Nuwara Eliya",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Climate and Flora",
        },

        {
          type: "p",
          text: "The garden covers approximately 28 hectares, making it the second-largest botanical garden in Sri Lanka.",
        },

        {
          type: "p",
          text: "Its cool temperate climate supports a wide variety of subtropical and temperate plant species, including native montane flora and many introduced ornamental plants.",
        },

        {
          type: "p",
          text: "Hakgala is especially known for its orchids, roses, fern collections, and seasonal flower displays.",
        },

        {
          type: "h3",
          text: "Main Highlights",
        },

        {
          type: "p",
          text: "<strong>Rose Garden:</strong> One of the most popular parts of the garden, especially during the flowering season.",
        },

        {
          type: "p",
          text: "<strong>Upper Flower Garden:</strong> A scenic area known for colorful seasonal blooms.",
        },

        {
          type: "p",
          text: "<strong>Fernery:</strong> A lush section showcasing ferns and cool-climate greenery.",
        },

        {
          type: "p",
          text: "<strong>Best Time to Visit:</strong> March to April is often the most popular flowering season.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.927561043585839,80.82158203088447",
        },
      ],
    },

    {
      type: "text",
      id: "hakgala-mountain",
      kicker: "Mountain Landscape",
      title: "Hakgala Mountain",
      align: "left",

      content: [
        {
          type: "p",
          text: "Hakgala Mountain rises above the botanical garden and forms a dramatic natural backdrop to the area.",
        },

        {
          type: "p",
          text: "The peak reaches approximately 2,169 meters, or 7,116 feet, and much of the mountain is covered in protected forest.",
        },

        {
          type: "split-paragraph",
          heading: "Nature Reserve and Name Meaning",
          headingLevel: "h3",

          paragraphs: [
            "Large parts of the mountain are included within the Hakgala Strict Nature Reserve, an important protected area of highland forest.",
            "The name Hakgala is commonly interpreted as ‘Jaw Rock’ or ‘Elephant Jaw Rock’ in Sinhalese, referring to the shape of the rock formation.",
            "The mountain’s forested slopes and cool climate make it one of the defining natural landmarks near Nuwara Eliya.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/NuwaraEliya/gardens-mythology/hakgala-mountain.webp`,
          imageAlt: "Hakgala Mountain near Nuwara Eliya",
          mediaPosition: "left",
        },
      ],
    },

    {
      type: "text",
      id: "ramayana-mythology",
      kicker: "Mythology",
      title: "Ramayana Legends Around Hakgala",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Hakgala region is strongly connected to the Ramayana tradition and is part of Sri Lanka’s wider Ramayana Trail.",
        },

        {
          type: "h3",
          text: "Ashok Vatika",
        },

        {
          type: "p",
          text: "According to legend, the area around Hakgala was the Ashok Vatika, the garden where Ravana held Sita after abducting her from India.",
        },

        {
          type: "p",
          text: "The garden was said to have been offered to Sita to soothe her grief during her captivity.",
        },

        {
          type: "h3",
          text: "Hanuman and the Mountain",
        },

        {
          type: "p",
          text: "Another legend says that Mount Hakgala was formed from a piece of earth brought from the Himalayas by Hanuman while searching for a medicinal plant to save Rama’s brother.",
        },

        {
          type: "p",
          text: "These stories give the landscape a strong mythological identity, especially for Hindu pilgrims and visitors following Ramayana-related sites in Sri Lanka.",
        },
      ],
    },

    {
      type: "text",
      id: "seetha-amman-temple",
      kicker: "Hindu Temple",
      title: "Seetha Amman Temple",
      align: "left",

      content: [
        {
          type: "p",
          text: "The Seetha Amman Temple is a famous Hindu temple located in Seetha Eliya, a short distance from Nuwara Eliya.",
        },

        {
          type: "p",
          text: "It is widely regarded as the only temple complex in the world specifically dedicated to Sita Devi, the wife of Lord Rama.",
        },

        {
          type: "split-paragraph",
          heading: "The Ramayana Connection",
          headingLevel: "h3",

          paragraphs: [
            "The temple is believed to mark the area where Sita was held captive by Ravana after her abduction.",
            "According to the tradition, Sita stayed here praying and waiting for Rama to rescue her.",
            "This is also believed to be the place where Hanuman first met Sita and gave her Rama’s wedding ring as a sign of hope.",
          ],

          image: `${import.meta.env.BASE_URL}Destinations/NuwaraEliya/gardens-mythology/seetha-amman-temple.webp`,
          imageAlt: "Seetha Amman Temple in Seetha Eliya",
          mediaPosition: "right",
        },

        {
          type: "h3",
          text: "Sacred Stream and Footprints",
        },

        {
          type: "p",
          text: "A stream flows beside the temple and is believed to be where Sita Devi bathed and prayed daily.",
        },

        {
          type: "p",
          text: "Three idols were discovered in the stream around a century ago, strengthening the sacred identity of the site.",
        },

        {
          type: "p",
          text: "Rock impressions near the stream are believed by some devotees to be Hanuman’s footprints, varying in size according to his mythical ability to change form.",
        },

        {
          type: "h3",
          text: "The Temple Today",
        },

        {
          type: "p",
          text: "The temple is built in a modern South Indian architectural style and includes shrines dedicated to Sita Devi, Lord Rama, Lakshmana, and Hanuman.",
        },

        {
          type: "p",
          text: "It remains an important pilgrimage destination for Hindus, especially those following the Ramayana route in Sri Lanka.",
        },

        {
          type: "h3",
          text: "Visitor Information",
        },

        {
          type: "p",
          text: "<strong>Location:</strong> Seetha Eliya, around 5–10 km from Nuwara Eliya.",
        },

        {
          type: "p",
          text: "<strong>Entrance Fee:</strong> No entrance fee is usually charged.",
        },

        {
          type: "p",
          text: "<strong>Dress Code:</strong> Visitors should dress respectfully, with shoulders and knees covered.",
        },

        {
          type: "button",
          label: "View on Google Maps",
          href: "https://www.google.com/maps?q=6.9334285502783315,80.81049046620048",
        },
      ],
    },
  ],
};

export default NuwaraEliyaGardensMythologyArticle;