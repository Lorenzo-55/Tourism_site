// src/Pages/ArticlePage/ArticlePage.jsx

import NavBar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs.jsx";
import ContentCard from "../../Components/ContentCard/ContentCard.jsx";
import HorizontalScrollCards from "../../Components/HorizontalScrollCards/HorizontalScrollCards.jsx";

import SectionHeader from "./ap_Components/SectionHeader/SectionHeader.jsx";
import RichText from "./ap_Components/RichText/RichText.jsx";

import TextSection from "./ap_Components/Sections/TextSection/TextSection.jsx";
import CardsSection from "./ap_Components/Sections/CardsSection/CardsSection.jsx";
import SplitSection from "./ap_Components/Sections/SplitSection/SplitSection.jsx";
import HorizontalScrollSection from "./ap_Components/Sections/HS_Section/HS_Section.jsx";

import "./ArticlePage.css";


function renderSection(section, index) {
  switch (section.type) {
    case "text":
      return <TextSection key={index} section={section} />;

    case "cards":
      return <CardsSection key={index} section={section} />;

    case "split":
      return <SplitSection key={index} section={section} />;

    case "horizontal-scroll":
      return <HorizontalScrollSection key={index} section={section} />;

    default:
      return null;
  }
}

export default function ArticlePage({ data }) {
  if (!data) return null;

  const {
    breadcrumbItems = [],
    hero = {},
    overview = {},
    sections = [],
  } = data;

  return (
    <div className="article-page">
      <NavBar />

      <header
        className="article-hero"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.22), rgba(0, 0, 0, 0.34)),
            url("${hero.backgroundImage}")
          `,
        }}
      >
        <div className="article-heroOverlay" />
        <div className="container article-heroInner">
          {hero.kicker && <div className="article-heroKicker">{hero.kicker}</div>}
          {hero.title && <h1 className="article-heroTitle">{hero.title}</h1>}
          {hero.subtitle && <p className="article-heroSubtitle">{hero.subtitle}</p>}
        </div>
      </header>

      <main>
        <section className="section article-intro">
          <div className="container article-introGrid">
            <div className="article-introHead">
              {!!breadcrumbItems.length && <Breadcrumbs items={breadcrumbItems} />}

              <SectionHeader
                kicker={overview.kicker}
                title={overview.title}
                align="left"
              />
            </div>

            <RichText paragraphs={overview.paragraphs} />
          </div>
        </section>

        {sections.map((section, index) => renderSection(section, index))}
      </main>

      <Footer />
    </div>
  );
}