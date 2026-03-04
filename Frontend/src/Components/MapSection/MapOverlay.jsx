// src/Components/MapSection/MapOverlay.jsx
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MapOverlay.css";
import MapMarker from "./MapMarker";
import MapPopup from "./MapPopup";

export default function MapOverlay({ imageSrc, locations }) {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(null);

  const activeLocation = useMemo(
    () => locations.find((l) => l.id === activeId) || null,
    [activeId, locations]
  );

  const onMarkerClick = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const onPopupClick = (slug) => {
    navigate(`/places/${slug}`);
  };

  return (
    <div className="map-stage">
      <img src={imageSrc} alt="Map of Sri Lanka" className="map-image" />

      {/* Markers */}
      {locations.map((loc) => (
        <MapMarker
          key={loc.id}
          x={loc.x}
          y={loc.y}
          label={loc.name}
          isActive={loc.id === activeId}
          onClick={() => onMarkerClick(loc.id)}
        />
      ))}

      {/* Popup */}
      {activeLocation && (
        <MapPopup
          x={activeLocation.x}
          y={activeLocation.y}
          title={activeLocation.name}
          summary={activeLocation.summary}
          onClose={() => setActiveId(null)}
          onOpen={() => onPopupClick(activeLocation.slug)}
        />
      )}
    </div>
  );
}