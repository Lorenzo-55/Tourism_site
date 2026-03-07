// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/LandingPage/LandingPage.jsx";
import PlacePage from "./Pages/PlacePage/PlacePage.jsx";
import ColomboPage from "./Pages/Destinations/Colombo/ColomboPage.jsx";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />

        {/* dedicated page */}
        <Route path="/places/colombo" element={<ColomboPage />} />

        {/* all other place pages */}
        <Route path="/places/:slug" element={<PlacePage />} />

        <Route path="*" element={<Landing />} />
      </Routes>
    </>
  );
}