import SectionHeader from "../../SectionHeader/SectionHeader.jsx";
import ContentCard from "../../../../../Components/ContentCard/ContentCard.jsx";
import "./CardsSection.css";

export default function CardsSection({ section }) {
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
              to={item.to}
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