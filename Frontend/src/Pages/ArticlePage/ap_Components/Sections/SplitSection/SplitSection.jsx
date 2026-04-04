import SectionHeader from "../../SectionHeader/SectionHeader.jsx";
import RichText from "../../RichText/RichText.jsx";
import "./SplitSection.css";

export default function SplitSection({ section }) {
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