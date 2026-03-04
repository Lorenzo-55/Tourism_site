// src/Components/MapSection/MapMarker.jsx
import "./MapMarker.css";

export default function MapMarker({ x, y, label, isActive, onClick }) {
  return (
    <button
      type="button"
      className={`map-marker ${isActive ? "active" : ""}`}
      style={{ left: `${x}%`, top: `${y}%` }}
      onClick={onClick}
      aria-label={`Open info for ${label}`}
      title={label}
    >
      <span className="map-marker-dot" />
    </button>
  );
}