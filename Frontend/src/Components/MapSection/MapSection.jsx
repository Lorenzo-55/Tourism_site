// src/Components/MapSection/MapSection.jsx
import "./MapSection.css";

export default function MapSection() {
  return (
    <section className="map-section">
      <div className="map-container">
        {/* Left Side – Map Image */}
        <div className="map-image-wrap">
          {/* Replace with your real image */}
          <img
            src="/Map.PNG"
            alt="Map of Sri Lanka"
            className="map-image"
          />
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

          <a href="#" className="map-button">
            START EXPLORING
          </a>
        </div>
      </div>
    </section>
  );
}