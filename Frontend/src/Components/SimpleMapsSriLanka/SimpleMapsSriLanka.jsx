// src/Components/SimpleMapsSriLanka/SimpleMapsSriLanka.jsx
import { useEffect, useRef } from "react";
import "./SimpleMapsSriLanka.css";

export default function SimpleMapsSriLanka() {
  const containerRef = useRef(null);

  useEffect(() => {
    const base = import.meta.env.BASE_URL;

    function loadScript(src, attr) {
      return new Promise((resolve, reject) => {
        const existing = document.querySelector(
          `script[data-simplemaps="${attr}"]`
        );

        if (existing) {
          if (existing.dataset.loaded === "true") {
            resolve();
            return;
          }

          existing.addEventListener("load", resolve, { once: true });
          existing.addEventListener("error", reject, { once: true });
          return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        script.dataset.simplemaps = attr;

        script.onload = () => {
          script.dataset.loaded = "true";
          resolve();
        };

        script.onerror = reject;
        document.body.appendChild(script);
      });
    }

    async function initMap() {
      try {
        await loadScript(`${base}simplemaps/lk/mapdata.js`, "lk-mapdata");

        if (window.simplemaps_countrymap_mapdata?.main_settings) {
          window.simplemaps_countrymap_mapdata.main_settings.auto_load = "no";
        }

        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <div class="simplemaps-sl__inner">
              <div id="map"></div>
            </div>
          `;
        }

        await loadScript(`${base}simplemaps/lk/countrymap.js`, "lk-countrymap");

        if (window.simplemaps_countrymap?.load) {
          window.simplemaps_countrymap.load();
        }
      } catch (err) {
        console.error("Simplemaps failed to load:", err);
      }
    }

    initMap();

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return <div ref={containerRef} className="simplemaps-sl__frame" />;
}