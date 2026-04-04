import SectionHeader from "../../SectionHeader/SectionHeader.jsx";
import RichText from "../../RichText/RichText.jsx";
import "./TextSection.css";

export default function TextSection({ section }) {
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