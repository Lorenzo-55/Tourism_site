// src/components/ContentCard/ContentCard.jsx
import { Link } from "react-router-dom";
import "./ContentCard.css";

export default function ContentCard({
  to = "/",
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

  if (external && href) {
    return (
      <a
        href={href}
        className={`content-card ${className}`}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className={`content-card ${className}`}>
      {content}
    </Link>
  );
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