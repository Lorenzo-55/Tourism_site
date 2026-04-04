import "./SectionHeader.css";

export default function SectionHeader({
  kicker,
  title,
  subtitle,
  align = "left",
}) {
  if (!kicker && !title && !subtitle) return null;

  return (
    <div className={`article-sectionHead article-sectionHead--${align}`}>
      {kicker && <div className="article-sectionKicker">{kicker}</div>}

      {title && <h2 className="article-sectionTitle">{title}</h2>}

      {subtitle && (
        <p className="article-sectionSubtitle">{subtitle}</p>
      )}
    </div>
  );
}