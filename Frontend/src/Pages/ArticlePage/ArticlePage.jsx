// src/Pages/ArticlePage/ArticlePage.jsx

import NavBar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs.jsx";
import ContentCard from "../../Components/ContentCard/ContentCard.jsx";
import HorizontalScrollCards from "../../Components/HorizontalScrollCards/HorizontalScrollCards.jsx";

import "./ArticlePage.css";

function SectionHeader({ kicker, title, subtitle, align = "left" }) {
  if (!kicker && !title && !subtitle) return null;

  return (
    <div className={`article-sectionHead article-sectionHead--${align}`}>
      {kicker && <div className="article-sectionKicker">{kicker}</div>}
      {title && <h2 className="article-sectionTitle">{title}</h2>}
    </div>
  );
}

function RichText({ paragraphs = [], content = [] }) {
  const hasStructured = content && content.length > 0;

  if (!hasStructured && !paragraphs.length) return null;

  return (
    <div className="article-copy">
      {hasStructured
        ? content.map((block, index) => {
            if (block.type === "h3") {
              return (
                <h3 key={index} className="article-subTitle" id={block.id}>
                  {block.text}
                </h3>
              );
            }

            return <p key={index}>{block.text}</p>;
          })
        : paragraphs.map((text, index) => <p key={index}>{text}</p>)}
    </div>
  );
}

function CardsSection({ section }) {
  return (
    <section className="section article-cardsSection">
      <div className="container">
        <SectionHeader
          kicker={section.kicker}
          title={section.title}
          align={section.align || "center"}
        />

        <div className="article-cardGrid">
          {section.items?.map((item, index) => (
            <ContentCard
              key={item.title || index}
              to={item.to }
              image={item.image}
              imageAlt={item.imageAlt || item.title || "Card image"}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function HorizontalScrollSection({ section }) {
  return (
    <HorizontalScrollCards
      items={section.items}
      kicker={section.kicker}
      title={section.title}
      sectionClassName={section.className}
    />
  );
}

function TextSection({ section }) {
  return (
    <section className="section" id={section.id}>
      <div className="container article-narrow">
        <SectionHeader
          kicker={section.kicker}
          title={section.title}
          align={section.align || "left"}
        />
        <RichText paragraphs={section.paragraphs} content={section.content} />
      </div>
    </section>
  );
}

function SplitSection({ section }) {
  const mediaRight = section.mediaPosition === "right";

  return (
    <section className="section article-splitSection">
      <div
        className={`container article-splitGrid ${
          mediaRight ? "article-splitGrid--mediaRight" : ""
        }`}
      >
        <div className="article-splitMedia">
          {section.images?.length > 0 ? (
            <div className="article-splitMediaStack">
              {section.images.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt || section.title || `Section image ${index + 1}`}
                />
              ))}
            </div>
          ) : (
            section.image && (
              <img
                src={section.image}
                alt={section.imageAlt || section.title || "Section image"}
              />
            )
          )}
        </div>

        <div className="article-splitContent">
          <SectionHeader
            kicker={section.kicker}
            title={section.title}
            align="left"
          />
          <RichText paragraphs={section.paragraphs} content={section.content} />
        </div>
      </div>
    </section>
  );
}


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