// src/components/ContentCard/ContentCard.jsx
import { Link } from "react-router-dom";
import "./ContentCard.css";

export default function ContentCard({
  to,
  href,
  external = false,
  image,
  imageAlt = "",
  kicker,
  title,
  description,
  tags = [],
  buttonLabel,
  className = "",
}) {
  const isExternalLink = external && !!href;
  const isInternalLink = !external && !!to;
  const isClickable = isExternalLink || isInternalLink;

  const cardClassName = `content-card ${
    isClickable ? "content-card--clickable" : "content-card--static"
  } ${className}`.trim();

  const content = (
    <>
      {image && (
        <div className="content-card__media">
          <img
            src={image}
            alt={imageAlt || title || "Card image"}
            className="content-card__image"
          />
        </div>
      )}

      <div className={`content-card__body ${!image ? "content-card__body--noImage" : ""}`}>
        {kicker && <div className="content-card__kicker">{kicker}</div>}

        {title && <h3 className="content-card__title">{title}</h3>}

        {description && <p className="content-card__description">{description}</p>}

        {tags.length > 0 && (
          <div className="content-card__tags">
            {tags.map((tag, index) => (
              <span key={`${tag}-${index}`} className="content-card__tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        {buttonLabel && <span className="content-card__button">{buttonLabel}</span>}
      </div>
    </>
  );

  if (isExternalLink) {
    return (
      <a
        href={href}
        className={cardClassName}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  if (isInternalLink) {
    return (
      <Link to={to} className={cardClassName}>
        {content}
      </Link>
    );
  }

  return <div className={cardClassName}>{content}</div>;
}


//   <ContentCard
//     to="/places/galle-face-green"
//     image="/images/galle-face.jpg"
//     imageAlt="Galle Face Green"
//     kicker="Sunset / Promenade"
//     title="Galle Face Green"
//     description="A famous oceanfront public space popular for walks, kites, snacks, and sunset views."
//     tags={["Sunset", "Families", "Street Food"]}
//     buttonLabel="Map"
//   />