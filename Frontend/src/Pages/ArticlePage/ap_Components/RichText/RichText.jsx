import "./RichText.css";

export default function RichText({ paragraphs = [], content = [] }) {
  const hasStructured = content && content.length > 0;

  if (!hasStructured && !paragraphs.length) return null;

  return (
    <div className="article-copy">
      {hasStructured
        ? content.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2 key={index} className="article-h2">
                  {block.text}
                </h2>
              );
            }

            if (block.type === "h3") {
              return (
                <h3 key={index} className="article-h3" id={block.id}>
                  {block.text}
                </h3>
              );
            }

            if (block.type === "h4") {
              return (
                <h4 key={index} className="article-h4">
                  {block.text}
                </h4>
              );
            }

            if (block.type === "h5") {
              return (
                <h5 key={index} className="article-h5">
                  {block.text}
                </h5>
              );
            }

            if (block.type === "h6") {
              return (
                <h6 key={index} className="article-h6">
                  {block.text}
                </h6>
              );
            }

            if (block.type === "split-paragraph") {
              return (
                <div
                  key={index}
                  className={`article-inlineSplit ${
                    block.mediaPosition === "right"
                      ? "article-inlineSplit--mediaRight"
                      : ""
                  }`}
                >
                  <div className="article-inlineSplit__text">
                    {block.heading &&
                      (block.headingLevel === "h4" ? (
                        <h4 className="article-h4">{block.heading}</h4>
                      ) : block.headingLevel === "h5" ? (
                        <h5 className="article-h5">{block.heading}</h5>
                      ) : block.headingLevel === "h6" ? (
                        <h6 className="article-h6">{block.heading}</h6>
                      ) : (
                        <h3 className="article-h3">{block.heading}</h3>
                      ))}

                    {Array.isArray(block.paragraphs)
                      ? block.paragraphs.map((text, pIndex) => (
                          <p key={pIndex}>{text}</p>
                        ))
                      : block.paragraph && <p>{block.paragraph}</p>}
                  </div>

                  <div className="article-inlineSplit__media">
                    <img
                      src={block.image}
                      alt={block.imageAlt || "Section image"}
                    />
                  </div>
                </div>
              );
            }

            return <p key={index}>{block.text}</p>;
          })
        : paragraphs.map((text, index) => <p key={index}>{text}</p>)}
    </div>
  );
}