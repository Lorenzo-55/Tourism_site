// src/Components/MapSection/MapPopup.jsx
import "./MapPopup.css";

export default function MapPopup({ x, y, title, summary, onClose, onOpen }) {
  return (
    <div className="map-popup" style={{ left: `${x}%`, top: `${y}%` }}>
      <button
        type="button"
        className="map-popup-close"
        onClick={onClose}
        aria-label="Close popup"
      >
        ×
      </button>

      <div className="map-popup-body" role="button" tabIndex={0} onClick={onOpen}>
        <h4 className="map-popup-title">{title}</h4>
        <p className="map-popup-summary">{summary}</p>
        <span className="map-popup-cta">View details →</span>
      </div>
    </div>
  );
}