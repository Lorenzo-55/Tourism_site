// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/LandingPage/LandingPage.jsx";
import PlacePage from "./Pages/PlacePage/PlacePage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/places/:slug" element={<PlacePage />} />
      <Route path="*" element={<Landing />} />
    </Routes>
  );
}