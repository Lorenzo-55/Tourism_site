// src/Pages/PlacePage/PlacePage.jsx

import { useParams } from "react-router-dom";
import ArticlePage from "../ArticlePage/ArticlePage.jsx";

import lotusTowerArticle from "../../Data/DestinationData/Colombo/en/LotusTowerArticle.js";
import  NightLifeArticle  from "../../Data/DestinationData/Colombo/en/NightLifeArticle.js";

const placeRegistry = {
  "lotus-tower": lotusTowerArticle,
  "nightlife": NightLifeArticle,
};

export default function PlacePage() {
  const { slug } = useParams();

  const data = placeRegistry[slug];

  if (!data) {
    return <div>Place not found</div>;
  }

  return <ArticlePage data={data} />;
}