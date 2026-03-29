//src/Components/MapSection/MapMarker.jsx

import { FaLocationDot } from "react-icons/fa6";
import "./MapMarker.css";

// toggle here
const SHOW_LABEL = false;

export default function MapMarker({ x, y, label, isActive, onClick, zoom }) {
  return (
    <button
      type="button"
      className={`map-marker ${isActive ? "active" : ""}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -100%) scale(${1 / zoom})`,
        transformOrigin: "center bottom",
      }}
      onPointerDown={(e) => e.stopPropagation()}
      onClick={onClick}
      aria-label={`Open info for ${label}`}
    >
      <FaLocationDot className="marker-icon" />

      {SHOW_LABEL && (
        <span className="marker-label">{label}</span>
      )}
    </button>
  );
}