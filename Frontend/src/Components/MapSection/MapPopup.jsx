import "./MapPopup.css";

export default function MapPopup({
  x,
  y,
  zoom,
  title,
  summary,
  onClose,
  onOpen,
  side = "left",
}) {
  const isRightSide = side === "right";

  return (
    <div
      className={`map-popup ${isRightSide ? "right-side" : "left-side"}`}
      onPointerDown={(e) => e.stopPropagation()}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: isRightSide
          ? `translate(10px, -100%) scale(${1 / zoom})`
          : `translate(calc(-100% - 10px), -100%) scale(${1 / zoom})`,
        transformOrigin: isRightSide ? "bottom left" : "bottom right",
      }}
    >
      <button
        type="button"
        className="map-popup-close"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={onClose}
        aria-label="Close popup"
      >
        ×
      </button>

      <div
        className="map-popup-body"
        role="button"
        tabIndex={0}
        onPointerDown={(e) => e.stopPropagation()}
        onClick={onOpen}
      >
        <h4 className="map-popup-title">{title}</h4>
        <p className="map-popup-summary">{summary}</p>
        <span className="map-popup-cta">View details →</span>
      </div>
    </div>
  );
}