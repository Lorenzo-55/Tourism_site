// src/Components/MapSection/MapMarker.jsx
import { CiLocationOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
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
      <CiLocationOn className="marker-icon default-icon" />
      <FaLocationDot className="marker-icon hover-icon" />
    </button>
  );
}