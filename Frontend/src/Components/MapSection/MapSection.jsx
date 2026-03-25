// src/Components/MapSection/MapSection.jsx
import "./MapSection.css";
import MapOverlay from "./MapOverlay";
import { locations } from "../../Data/LocationMap/Location";
import SimpleMapsSriLanka from "../SimpleMapsSriLanka/SimpleMapsSriLanka";

const SHOW_SIMPLEMAPS = false;

function getCoords(e) {
  const rect = e.currentTarget.getBoundingClientRect();

  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  console.log(`x: ${x.toFixed(2)}, y: ${y.toFixed(2)}`);
}

export default function MapSection() {
  return (
    <section className="map-section">
      <div className="map-container">
        {/* Left Side – Map */}
        <div className="map-image-wrap" onClick={getCoords}>
          {SHOW_SIMPLEMAPS ? (
            <SimpleMapsSriLanka />
          ) : (
            <MapOverlay
              imageSrc={`${import.meta.env.BASE_URL}/Maps/Map2.jpg`}
              locations={locations}
            />
          )}
        </div>

        {/* Right Side – Text Content */}
        <div className="map-content">
          <h2 className="map-title">EXPLORE SRI LANKA</h2>

          <p className="map-text">
            Discover ancient cities, golden beaches, misty mountains and lush
            rainforests across the island. From vibrant coastal towns to serene
            hill-country escapes, every region offers something unique.
          </p>

          <p className="map-text">
            Navigate through cultural landmarks, wildlife parks, and hidden
            gems waiting to be explored. Your journey begins here.
          </p>

          <a href="#places" className="map-button">
            START EXPLORING
          </a>
        </div>
      </div>
    </section>
  );
}