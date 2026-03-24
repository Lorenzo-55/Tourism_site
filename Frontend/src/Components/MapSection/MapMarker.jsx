// src/Components/MapSection/MapMarker.jsx
import { CiLocationOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import "./MapMarker.css";

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
      <CiLocationOn className="marker-icon default-icon" />
      <FaLocationDot className="marker-icon hover-icon" />

      <span className="marker-label">{label}</span>
    </button>
  );
}