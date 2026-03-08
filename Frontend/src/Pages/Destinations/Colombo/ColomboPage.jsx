// src/pages/ColomboPage/ColomboPage.jsx
import NavBar from "../../../Components/Navbar/Navbar.jsx";
import Footer from "../../../Components/Footer/Footer.jsx";
import ContentCard from "../../../Components/ContentCard/ContentCard.jsx";
import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";
import "./ColomboPage.css";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";

  const breadcrumbItems = [
    { label: "Home", to: "/" },
    { label: "Colombo", to: "/colombo" },
  ];

const pointsOfInterest = [
  {
    title: "Economy",
    image: "/images/colombo-economy.jpg",
    imageAlt: "Colombo economy",
  },
  {
    title: "Beaches",
    image: "/images/colombo-beaches.jpg",
    imageAlt: "Colombo beaches",
  },
  {
    title: "Museums",
    image: "/images/colombo-museums.jpg",
    imageAlt: "Colombo museums",
  },
  {
    title: "Temples, Churches, and Mosques",
    image: "/images/colombo-religious-sites.jpg",
    imageAlt: "Temples churches and mosques in Colombo",
  },
  {
    title: "Pettah",
    image: "/images/colombo-pettah.jpg",
    imageAlt: "Pettah market Colombo",
  },
  {
    title: "Lotus Tower",
    image: "/images/colombo-lotus-tower.jpg",
    imageAlt: "Lotus Tower Colombo",
  },
  {
    title: "Fort",
    image: "/images/colombo-fort.jpg",
    imageAlt: "Colombo Fort",
  },
  {
    title: "Nightlife",
    image: "/images/colombo-nightlife.jpg",
    imageAlt: "Colombo nightlife",
  },
  {
    title: "History",
    image: "/images/colombo-history.jpg",
    imageAlt: "Historic Colombo",
  },
  {
    title: "Restaurants",
    image: "/images/colombo-restaurants.jpg",
    imageAlt: "Restaurants in Colombo",
  },
  {
    title: "Shops",
    image: "/images/colombo-shops.jpg",
    imageAlt: "Shopping in Colombo",
  },
  {
    title: "Hotels",
    image: "/images/colombo-hotels.jpg",
    imageAlt: "Hotels in Colombo",
  },
];

const districts = [
  {
    name: "Colombo 1 – Fort (Kotuwa)",
    character: "Central Business District",
    bestKnownFor: "Colonial architecture, corporate offices, and government institutions",
    description:
      "The historic and financial core of Colombo where the city’s colonial past meets its modern corporate life. Fort contains government institutions, colonial-era buildings, banks, and corporate headquarters surrounding the harbor that once made Colombo a major trading port.",
    tags: ["History", "Architecture", "Business"],
  },
  {
    name: "Colombo 2 – Slave Island",
    character: "Mixed commercial and residential",
    bestKnownFor: "Beira Lake views and new high-rise development",
    description:
      "A centrally located neighborhood beside Beira Lake that has transformed rapidly in recent years. Modern residential towers and commercial buildings now rise alongside historic mosques, older housing communities, and lakeside walkways.",
    tags: ["Urban", "Lakefront", "Residential"],
  },
  {
    name: "Colombo 3 – Kollupitiya",
    character: "Upscale coastal district",
    bestKnownFor: "Embassies, hotels, and shopping along Galle Road",
    description:
      "A lively stretch of Colombo along the oceanfront Galle Road corridor known for its embassies, luxury apartments, hotels, and retail centers. It blends high-end living with busy commercial streets, restaurants, and nightlife close to the sea.",
    tags: ["Coastal", "Shopping", "Hotels"],
  },
  {
    name: "Colombo 4 – Bambalapitiya",
    character: "Commercial and residential hub",
    bestKnownFor: "Shopping centers and dense city life",
    description:
      "A busy district along Galle Road that mixes residential apartments with universities, shopping centers, cafes, and offices. It is one of the most active urban neighborhoods where everyday Colombo life meets commercial energy.",
    tags: ["Shopping", "Urban", "Dining"],
  },
  {
    name: "Colombo 5 – Havelock Town / Narahenpita / Kirulapone North",
    character: "Residential neighborhood",
    bestKnownFor: "Hospitals, schools, and quiet family neighborhoods",
    description:
      "Primarily a residential district with established neighborhoods, schools, hospitals, and local businesses. Compared with the coastal areas, it offers a quieter atmosphere while still being centrally connected to the rest of the city.",
    tags: ["Residential", "Schools", "Local life"],
  },
  {
    name: "Colombo 6 – Wellawatte / Pamankada",
    character: "Multicultural commercial area",
    bestKnownFor: "Textile shopping and diverse food culture",
    description:
      "A lively coastal neighborhood known for its multicultural community, textile shops, and busy local markets. Wellawatte is especially popular for affordable shopping, South Indian cuisine, and vibrant street activity.",
    tags: ["Food", "Shopping", "Culture"],
  },
  {
    name: "Colombo 7 – Cinnamon Gardens",
    character: "Prestigious residential district",
    bestKnownFor: "Museums, parks, and historic mansions",
    description:
      "One of Colombo’s most elegant neighborhoods with wide tree-lined avenues and colonial-era mansions. It is home to museums, embassies, the Town Hall, and several of the country’s most prestigious schools.",
    tags: ["Heritage", "Museums", "Parks"],
  },
  {
    name: "Colombo 8 – Borella",
    character: "Major transport junction",
    bestKnownFor: "Five Roads junction and major hospitals",
    description:
      "A major crossroads connecting several districts of Colombo and known for its busy commercial streets. Borella is centered around the famous Five Roads junction and is surrounded by hospitals, schools, and transport routes.",
    tags: ["Transport", "Commerce", "City life"],
  },
  {
    name: "Colombo 9 – Dematagoda",
    character: "Residential and industrial mix",
    bestKnownFor: "Railway links and industrial activity",
    description:
      "A district that blends residential neighborhoods with light industrial activity and railway infrastructure. Historically tied to Colombo’s transport networks, it remains an important connection point in the city.",
    tags: ["Industry", "Railway", "Residential"],
  },
  {
    name: "Colombo 10 – Maradana / Panchikawatte",
    character: "Transport and education hub",
    bestKnownFor: "Main railway station and colleges",
    description:
      "One of Colombo’s busiest transport hubs, home to the historic Maradana railway station. The area also contains many educational institutions, markets, and commercial streets that serve daily commuters.",
    tags: ["Transport", "Education", "Markets"],
  },
  {
    name: "Colombo 11 – Pettah (Pitakotuwa)",
    character: "Market and trading district",
    bestKnownFor: "Wholesale markets and crowded trading streets",
    description:
      "The traditional commercial heart of Colombo where traders, shops, and markets fill a dense grid of streets. Pettah is famous for its energetic atmosphere, wholesale trading, and maze-like shopping lanes.",
    tags: ["Markets", "Trading", "Street life"],
  },
  {
    name: "Colombo 12 – Hulftsdorp (Aluthkade)",
    character: "Legal district",
    bestKnownFor: "Supreme Court and legal institutions",
    description:
      "Colombo’s legal center where the Supreme Court and several major courts are located. The district has long been associated with the country’s judiciary and legal profession.",
    tags: ["Courts", "Government", "History"],
  },
  {
    name: "Colombo 13 – Kotahena / Kochchikade",
    character: "Historic northern district",
    bestKnownFor: "Religious landmarks and local communities",
    description:
      "A densely populated northern neighborhood known for its strong religious heritage and historic churches and temples. The district blends residential life with local businesses and community traditions.",
    tags: ["Culture", "Religion", "Local life"],
  },
  {
    name: "Colombo 14 – Grandpass",
    character: "Industrial and residential",
    bestKnownFor: "Historic working-class neighborhoods",
    description:
      "Traditionally an industrial district located in the northern part of the city. Grandpass developed around trade routes and working-class communities connected to Colombo’s port economy.",
    tags: ["Industry", "History", "Residential"],
  },
  {
    name: "Colombo 15 – Mutwal / Mattakkuliya / Modara",
    character: "Coastal northern suburbs",
    bestKnownFor: "Fishing communities and harbor life",
    description:
      "A northern coastal stretch where fishing communities and maritime traditions remain strong. The neighborhoods here reflect Colombo’s long connection to the sea and its port activities.",
    tags: ["Coastal", "Fishing", "Harbor"],
  },
];

function DistrictsSection({ districts }) {
  const [open, setOpen] = useState(null);

  return (
    <section className="colombo-districts">
      <div className="container">

        <div className="districts-head">
          <div className="districts-kicker">DISTRICTS</div>
          <h2 className="districts-title">District & Neighborhood Guide</h2>
        </div>

        <div className="districts-list">
          {districts.map((district, index) => {
            const isOpen = open === index;

            return (
              <div key={district.name} className="district-item">
                <button
                  className="district-summary"
                  onClick={() => setOpen(isOpen ? null : index)}
                >
                  <div className="district-left">
                    {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                    <strong>{district.name}</strong>
                  </div>

                  <span className="district-type">
                    {district.character}
                  </span>
                </button>

                {isOpen && (
                  <div className="district-body">
                    {district.bestKnownFor && (
                      <p className="district-best">
                        <strong>Best known for:</strong> {district.bestKnownFor}
                      </p>
                    )}

                    {district.description && (
                      <p>{district.description}</p>
                    )}

                    {district.tags && (
                      <div className="district-tags">
                        {district.tags.map((tag, i) => (
                          <span key={i} className="district-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function ColomboPage() {
  return (
    <div className="colombo-page">
      <NavBar />

      <header className="colombo-hero">
        <div className="colombo-heroOverlay" />
        <div className="container colombo-heroInner">
          <div className="colombo-heroKicker">CITY GUIDE</div>
          <h1 className="colombo-heroTitle">Colombo</h1>
        </div>
      </header>

      <main>
        <section className="section colombo-intro">
          <div className="container colombo-introGrid">
            <div className="colombo-sectionHead">
              <Breadcrumbs items={breadcrumbItems} />
              <div className="colombo-sectionKicker">OVERVIEW</div>
              <h2 className="colombo-sectionTitle">A fast-moving capital with many layers</h2>
            </div>

            <div className="colombo-copy">
              <p>
                Colombo today is a busy, energetic, and deeply diverse city that
                functions as the economic and commercial heart of Sri Lanka. It is
                where finance, trade, government activity, and daily urban life all
                meet, giving the city a rhythm that feels both practical and
                constantly in motion. Major companies, banks, and business
                institutions operate here, while the port plays a central role in
                the country’s connection to regional and global trade.
              </p>

              <p>
                What gives Colombo much of its character is the contrast between old
                and new. In parts of the city, especially around areas such as Fort,
                colonial-era buildings and historic streets still shape the urban
                atmosphere. Around them, modern Colombo continues to expand through
                high-rises, malls, office developments, and long-term urban projects
                aimed at making the city more competitive, livable, and
                internationally connected. At the same time, this rapid growth brings
                familiar urban pressures, including traffic, infrastructure demands,
                and the challenge of preserving heritage while moving forward.
              </p>

              <p>
                Colombo also remains one of the most culturally mixed places in the
                country. Sinhalese, Moors, Tamils, and smaller communities of other
                backgrounds all contribute to the city’s identity, shaping its
                neighborhoods, food, places of worship, and everyday life. Within
                the municipal limits, the city has a resident population of roughly
                555,000 to 612,000 people, packed into a relatively compact urban
                area, which adds to its dense, lively, and unmistakably metropolitan
                feel.
              </p>
            </div>
          </div>
        </section>

        <DistrictsSection districts={districts} />

        <section className="section colombo-poi">
          <div className="container">
            <div className="colombo-poiHead">
              <div className="colombo-sectionKicker">EXPLORE</div>
              <h2 className="colombo-sectionTitle">Points of Interest</h2>
            </div>

            <div className="colombo-cardGrid">
              {pointsOfInterest.map((item) => (
                <ContentCard
                  key={item.title}
                  to="#"
                  image={item.image}
                  imageAlt={item.imageAlt}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}