// src/Pages/PlacePage/PlacePage.jsx
import React from "react";
import { useParams } from "react-router-dom";

export default function PlacePage() {
  const { slug } = useParams();

  return (
    <div style={{ padding: 24 }}>
      <h1>Place: {slug}</h1>
      <p>This page is working.</p>
    </div>
  );
}