// src/pages/ColomboPage/ColomboPage.jsx
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";

import NavBar from "../../../Components/Navbar/Navbar.jsx";
import Footer from "../../../Components/Footer/Footer.jsx";
import ContentCard from "../../../Components/ContentCard/ContentCard.jsx";
import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";

import { useLanguage } from "../../../Context/LanguageContext.jsx";
import { getColomboData } from "../../../Data/DestinationData/Colombo/index.js";

import "./ColomboPage.css";

const breadcrumbItems = [
  { label: "Home", to: "/" },
  { label: "Colombo", to: "/colombo" },
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
              <div key={district.name} className={`district-item ${isOpen ? "open" : ""}`}>
                <button
                  className="district-summary"
                  onClick={() => setOpen(isOpen ? null : index)}
                  type="button"
                >
                  <div className="district-left">
                    <span className="district-icon">
                      {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                    </span>

                    <strong className="district-name">{district.name}</strong>
                  </div>

                  <span className="district-type">{district.character}</span>
                </button>

                <div className="district-body">
                  {district.bestKnownFor && (
                    <p className="district-best">
                      <strong>Best known for:</strong> {district.bestKnownFor}
                    </p>
                  )}

                  {district.description && <p>{district.description}</p>}

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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function ColomboPage() {
  const { language } = useLanguage();

const { districts, pageContent, pointsOfInterest, poiHeader } = getColomboData(language);

  return (
    <div className="colombo-page">
      <NavBar />

      <header className="colombo-hero">
        <div className="colombo-heroOverlay" />
        <div className="container colombo-heroInner">
          <div className="colombo-heroKicker">
            {pageContent.hero.kicker}
          </div>
          <h1 className="colombo-heroTitle">
            {pageContent.hero.title}
          </h1>
        </div>
      </header>

      <main>
        <section className="section colombo-intro">
          <div className="container colombo-introGrid">
            <div className="colombo-sectionHead">
              <Breadcrumbs items={breadcrumbItems} />
              <div className="colombo-sectionKicker">
                {pageContent.overview.kicker}
              </div>
              <h2 className="colombo-sectionTitle">
                {pageContent.overview.title}
              </h2>
            </div>

            <div className="colombo-copy">
              {pageContent.overview.paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
        </section>

        <DistrictsSection districts={districts} />

        <section className="section colombo-poi">
          <div className="container">
            <div className="colombo-poiHead">
              <div className="colombo-sectionKicker">
                {poiHeader.kicker}
              </div>
              <h2 className="colombo-sectionTitle">
                {poiHeader.title}
              </h2>
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