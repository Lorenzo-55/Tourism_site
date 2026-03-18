// src/Pages/PlacePage/PlacePage.jsx

import { useParams } from "react-router-dom";
import ArticlePage from "../ArticlePage/ArticlePage.jsx";

import lotusTowerArticle from "../../Data/DestinationData/Colombo/en/LotusTowerArticle.js";
import  NightLifeArticle  from "../../Data/DestinationData/Colombo/en/NightLifeArticle.js";
import  BeachesArticle  from "../../Data/DestinationData/Colombo/en/BeachesArticle.js";
import EconomyArticle  from "../../Data/DestinationData/Colombo/en/EconomyArticle.js";  
import PettahArticle from "../../Data/DestinationData/Colombo/en/PettahArticle.js"; 
import FortAreaArticle from "../../Data/DestinationData/Colombo/en/FortAreaAritcle.js";

import MataraArticle from "../../Data/DestinationData/Matara/en/MataraArticle.js";

const placeRegistry = {
  "lotus-tower": lotusTowerArticle,
  "nightlife": NightLifeArticle,
  "beaches": BeachesArticle,
  "economy": EconomyArticle,
  "pettah": PettahArticle,
  "fort": FortAreaArticle,

  "matara": MataraArticle,
};

export default function PlacePage() {
  const { slug } = useParams();

  const data = placeRegistry[slug];

  if (!data) {
    return <div>Place not found</div>;
  }

  return <ArticlePage data={data} />;
}