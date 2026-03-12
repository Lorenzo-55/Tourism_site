import NavBar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs.jsx";
import ContentCard from "../../Components/ContentCard/ContentCard.jsx";

import "./ArticlePage.css";

function SectionHeader({ kicker, title, subtitle, align = "left" }) {
  if (!kicker && !title && !subtitle) return null;

  return (
    <div className={`article-sectionHead article-sectionHead--${align}`}>
      {kicker && <div className="article-sectionKicker">{kicker}</div>}
      {title && <h2 className="article-sectionTitle">{title}</h2>}
      {subtitle && <p className="article-sectionSubtitle">{subtitle}</p>}
    </div>
  );
}

function RichText({ paragraphs = [] }) {
  if (!paragraphs?.length) return null;

  return (
    <div className="article-copy">
      {paragraphs.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
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
          subtitle={section.subtitle}
          align={section.align || "center"}
        />

        <div className="article-cardGrid">
          {section.items?.map((item, index) => (
            <ContentCard
              key={item.title || index}
              to={item.to || "#"}
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

function TextSection({ section }) {
  return (
    <section className="section">
      <div className="container article-narrow">
        <SectionHeader
          kicker={section.kicker}
          title={section.title}
          subtitle={section.subtitle}
          align={section.align || "left"}
        />
        <RichText paragraphs={section.paragraphs} />
      </div>
    </section>
  );
}

function SplitSection({ section }) {
  return (
    <section className="section article-splitSection">
      <div className="container article-splitGrid">
        <div className="article-splitMedia">
          {section.image && (
            <img
              src={section.image}
              alt={section.imageAlt || section.title || "Section image"}
            />
          )}
        </div>

        <div className="article-splitContent">
          <SectionHeader
            kicker={section.kicker}
            title={section.title}
            subtitle={section.subtitle}
            align="left"
          />
          <RichText paragraphs={section.paragraphs} />
        </div>
      </div>
    </section>
  );
}

function QuoteSection({ section }) {
  return (
    <section className="section">
      <div className="container article-quoteWrap">
        <blockquote className="article-quote">
          {section.quote && <p className="article-quoteText">“{section.quote}”</p>}
          {section.author && <footer className="article-quoteAuthor">— {section.author}</footer>}
        </blockquote>
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

    case "quote":
      return <QuoteSection key={index} section={section} />;

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
                subtitle={overview.subtitle}
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