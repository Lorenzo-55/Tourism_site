// src/Pages/PlacePage/PlacePage.jsx

import { useParams } from "react-router-dom";
import ArticlePage from "../ArticlePage/ArticlePage.jsx";

import lotusTowerArticle from "../../Data/DestinationData/Colombo/en/LotusTowerArticle.js";
import NightLifeArticle  from "../../Data/DestinationData/Colombo/en/NightLifeArticle.js";
import BeachesArticle  from "../../Data/DestinationData/Colombo/en/BeachesArticle.js";
import EconomyArticle  from "../../Data/DestinationData/Colombo/en/EconomyArticle.js";  
import PettahArticle from "../../Data/DestinationData/Colombo/en/PettahArticle.js"; 
import FortAreaArticle from "../../Data/DestinationData/Colombo/en/FortAreaAritcle.js";
import ColomboHistoryArticle from "../../Data/DestinationData/Colombo/en/ColomboHistory.js";
import MuseumsArticle from "../../Data/DestinationData/Colombo/en/MuseumsArticle.js";
import TemplesChurchesMosquesArticle from "../../Data/DestinationData/Colombo/en/TemplesChurchesMosquesArticle.js";

import MataraArticle from "../../Data/DestinationData/Matara/en/MataraArticle.js";

import AhungallaArticle from "../../Data/DestinationData/Ahungalla/en/AhungallaArticle.js";
import KothduwaTempleData from "../../Data/DestinationData/Ahungalla/en/KothduwaTemple.js";
import MaduRiverSafariData from "../../Data/DestinationData/Ahungalla/en/SafariArticle.js";
import TurtleConservationData from "../../Data/DestinationData/Ahungalla/en/TurtleConservationArticle.js";
import AhungallaBeachData from "../../Data/DestinationData/Ahungalla/en/AhungallaBeachArticle.js";

import AluthgamaData from "../../Data/DestinationData/Aluthgama/en/AluthgamaArticle.js";
import KandeViharayaData from "../../Data/DestinationData/Aluthgama/en/KandeViharayaTemple.js";
import AluthgamaBeachesData from "../../Data/DestinationData/Aluthgama/en/AluthgamaBeaches.js";
import AluthgamaBentotaRiverMouthData from "../../Data/DestinationData/Aluthgama/en/AluthgamaBentotaRiverMouth.js";
import BriefGardenData from "../../Data/DestinationData/Aluthgama/en/AluthgamaBriefGarden.js";

import AnuradhapuraData from "../../Data/DestinationData/Anuradhapura/en/_AnuradhapuraArticle.js";
import JayaSriMahaBodhiData from "../../Data/DestinationData/Anuradhapura/en/AnuradhapuraJayaSriMahaBhodi.js";
import RuwanweliseyaData from "../../Data/DestinationData/Anuradhapura/en/AnuradhapuraRuwanweliseya.js";
import ThuparamayaData from "../../Data/DestinationData/Anuradhapura/en/AnuradhapuraThuparamayaDagoba.js";
import IsurumuniyaData from "../../Data/DestinationData/Anuradhapura/en/AnuradhapuraIsurumuniyaTemple.js";
import MihintaleData from "../../Data/DestinationData/Anuradhapura/en/AnuradhapuraMihintale.js";
import AbhayagiriData from "../../Data/DestinationData/Anuradhapura/en/AnuradhapuraAbhayagiriVihara.js";
import MoonstoneData from "../../Data/DestinationData/Anuradhapura/en/AnuradhapuraMoonstone.js";

const placeRegistry = {
  "lotus-tower": lotusTowerArticle,
  "nightlife": NightLifeArticle,
  "beaches": BeachesArticle,
  "economy": EconomyArticle,
  "pettah": PettahArticle,
  "fort": FortAreaArticle,
  "history": ColomboHistoryArticle,
  "museums": MuseumsArticle,
  "temples-churches-mosques": TemplesChurchesMosquesArticle,

  "matara": MataraArticle,

  "ahungalla": AhungallaArticle,
  "ahungalla-kothduwa-temple": KothduwaTempleData,
  "ahungalla-madu-river-safari": MaduRiverSafariData,
  "ahungalla-turtle-conservation": TurtleConservationData,
  "ahungalla-beach": AhungallaBeachData,

  "aluthgama": AluthgamaData,
  "aluthgama-kande-viharaya-temple": KandeViharayaData,
  "aluthgama-beaches": AluthgamaBeachesData,
  "aluthgama-bentota-river-mouth": AluthgamaBentotaRiverMouthData,
  "aluthgama-brief-garden": BriefGardenData,

  "anuradhapura": AnuradhapuraData,
  "anuradhapura-jaya-sri-maha-bodhi": JayaSriMahaBodhiData,
  "anuradhapura-ruwanweliseya": RuwanweliseyaData,
  "anuradhapura-thuparamaya": ThuparamayaData,
  "anuradhapura-isurumuniya": IsurumuniyaData,
  "anuradhapura-mihintale": MihintaleData,
  "anuradhapura-abhayagiri": AbhayagiriData,
  "anuradhapura-moonstone": MoonstoneData,

};

export default function PlacePage() {
  const { slug } = useParams();

  const data = placeRegistry[slug];

  if (!data) {
    return <div>Place not found</div>;
  }

  return <ArticlePage data={data} />;
}