// src/Components/MapSection/MapOverlay.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MapOverlay.css";
import MapMarker from "./MapMarker";
import MapPopup from "./MapPopup";

const ENABLE_ZOOM = false;

export default function MapOverlay({ imageSrc, locations }) {
  const navigate = useNavigate();
  const viewportRef = useRef(null);

  const [activeId, setActiveId] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || !ENABLE_ZOOM) return;

    const wheelHandler = (e) => {
      e.preventDefault();
      e.stopPropagation();

      const delta = e.deltaY < 0 ? 0.2 : -0.2;

      setZoom((prev) => {
        const next = Math.min(Math.max(prev + delta, 1), 3);

        if (next === 1) {
          setOffset({ x: 0, y: 0 });
        }

        return next;
      });
    };

    viewport.addEventListener("wheel", wheelHandler, { passive: false });

    return () => {
      viewport.removeEventListener("wheel", wheelHandler);
    };
  }, []);

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

  const zoomIn = () => {
    if (!ENABLE_ZOOM) return;
    setZoom((prev) => Math.min(prev + 0.2, 3));
  };

  const zoomOut = () => {
    if (!ENABLE_ZOOM) return;

    setZoom((prev) => {
      const next = Math.max(prev - 0.2, 1);

      if (next === 1) {
        setOffset({ x: 0, y: 0 });
      }

      return next;
    });
  };

  const handlePointerDown = (e) => {
    if (!ENABLE_ZOOM || zoom <= 1) return;

    const interactiveTarget = e.target.closest(
      ".map-marker, .map-popup, .map-popup-close, .map-popup-body"
    );

    if (interactiveTarget) return;

    setIsDragging(true);
    setDragStart({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });

    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!ENABLE_ZOOM || !isDragging) return;

    setOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handlePointerUp = (e) => {
    if (!ENABLE_ZOOM) return;

    setIsDragging(false);
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  const handlePointerLeave = () => {
    if (!ENABLE_ZOOM) return;
    setIsDragging(false);
  };

  const visibleLocations = useMemo(() => {
    if (!ENABLE_ZOOM) return locations;

    return locations.filter((loc) => {
      if (zoom <= 1.2) return loc.importance <= 1;
      if (zoom <= 1.6) return loc.importance <= 2;
      if (zoom <= 2.0) return loc.importance <= 3;
      if (zoom <= 2.4) return loc.importance <= 4;
      return loc.importance <= 5;
    });
  }, [locations, zoom]);

  return (
    <div className="map-overlay-shell">
      {ENABLE_ZOOM && (
        <div className="map-controls">
          <button type="button" onClick={zoomIn} aria-label="Zoom in">
            +
          </button>
          <button type="button" onClick={zoomOut} aria-label="Zoom out">
            −
          </button>
        </div>
      )}

      <div
        ref={viewportRef}
        className="map-viewport"
        style={{ touchAction: ENABLE_ZOOM ? "none" : "auto" }}
        onPointerMove={ENABLE_ZOOM ? handlePointerMove : undefined}
        onPointerUp={ENABLE_ZOOM ? handlePointerUp : undefined}
        onPointerLeave={ENABLE_ZOOM ? handlePointerLeave : undefined}
      >
        <div
          className={`map-stage ${isDragging ? "dragging" : ""}`}
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
            transformOrigin: "center center",
          }}
          onPointerDown={ENABLE_ZOOM ? handlePointerDown : undefined}
        >
          <img src={imageSrc} alt="Map of Sri Lanka" className="map-image" />

          {visibleLocations.map((loc) => (
            <MapMarker
              key={loc.id}
              x={loc.x}
              y={loc.y}
              label={loc.name}
              zoom={ENABLE_ZOOM ? zoom : 1}
              isActive={loc.id === activeId}
              onClick={() => onMarkerClick(loc.id)}
            />
          ))}

          {activeLocation &&
            visibleLocations.some((l) => l.id === activeLocation.id) && (
              <MapPopup
                x={activeLocation.x}
                y={activeLocation.y}
                zoom={ENABLE_ZOOM ? zoom : 1}
                title={activeLocation.name}
                summary={activeLocation.summary}
                side={
                  activeLocation.x > 50
                    ? "left"
                    : activeLocation.x < 50
                    ? "right"
                    : "left"
                }
                onClose={() => setActiveId(null)}
                onOpen={() => onPopupClick(activeLocation.slug)}
              />
            )}
        </div>
      </div>
    </div>
  );
}