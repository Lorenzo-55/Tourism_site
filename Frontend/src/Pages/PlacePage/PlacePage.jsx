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

import ArugamBayArticle from "../../Data/DestinationData/Arugambay/en/_ArugambayArticle.js";
import ElephantRockArticleSection from "../../Data/DestinationData/Arugambay/en/ArugambayElephantRock.js";
import MuhuduMahaViharayaArticle from "../../Data/DestinationData/Arugambay/en/ArugambayMuhuduMahaViharaya.js";

import NegomboArticle from "../../Data/DestinationData/Negombo/en/_NegomboArticle.js";
import NegomboFishMarketArticle from "../../Data/DestinationData/Negombo/en/NegomboFishMarket.js";
import NegomboDutchFortArticle from "../../Data/DestinationData/Negombo/en/NegomboDutchFort.js";
import NegomboHamiltonCanalArticle from "../../Data/DestinationData/Negombo/en/NegomboDutchCanal.js";
import NegomboStMarysChurchArticle from "../../Data/DestinationData/Negombo/en/NegomboStMarysChurch.js";
import NegomboAngurukaramullaTempleArticle from "../../Data/DestinationData/Negombo/en/NegomboAngurukaramullaTemple.js";
import NegomboMuthurajawelaMarshArticle from "../../Data/DestinationData/Negombo/en/NegomboMuthurajawelaMarsh.js";
import NegomboCityArticle from "../../Data/DestinationData/Negombo/en/NegomboCity.js";

import BadullaArticle from "../../Data/DestinationData/Badulla/en/_BadullaArticle.js";

import BatticaloaArticle from "../../Data/DestinationData/Batticaloa/en/_BatticaloaArticle.js";

import DambullaArticle from "../../Data/DestinationData/Dambulla/en/_DambullaArticle.js";

import DickwellaArticle from "../../Data/DestinationData/Dickwella/en/Dickwella.js";

import EllaArticle from "../../Data/DestinationData/Ella/en/_EllaArticle.js";

import GalleArticle from "../../Data/DestinationData/Galle/en/_GalleArticle.js";

import GampahaArticle from "../../Data/DestinationData/Gampaha/en/_GampahaArticle.js";

import HambantotaArticle from "../../Data/DestinationData/Hambantota/en/_HambantotaArticle.js";

import HaputaleArticle from "../../Data/DestinationData/Haputale/en/_HaputaleArticle.js";

import HattonArticle from "../../Data/DestinationData/Hatton/en/_HattonArticle.js";

import HikkaduwaArticle from "../../Data/DestinationData/Hikkaduwa/en/_HikkaduwaArticle.js";

import JaffnaArticle from "../../Data/DestinationData/Jaffna/en/_JaffnaArticle.js";

import KalpitiyaArticle from "../../Data/DestinationData/Kalpitiya/en/_KalpitiyaArticle.js";

import KandyArticle from "../../Data/DestinationData/Kandy/en/_KandyArticle.js";

import KataragamaArticle from "../../Data/DestinationData/Kataragama/en/_KataragamaArticle.js";

import KitulgalaArticle from "../../Data/DestinationData/Kitulgala/en/_KitulgalaArticle.js";

import KoggalaArticle from "../../Data/DestinationData/Koggala/en/_KoggalaArticle.js";  

import MadampellaArticle from "../../Data/DestinationData/Madampalla/en/_MadampellaArticle.js";

import MannarArticle from "../../Data/DestinationData/Mannar/en/_MannarArticle.js";

import MataleArticle from "../../Data/DestinationData/Matale/en/_MataleArticle.js";

import MihintaleArticle from "../../Data/DestinationData/Mihintale/en/_MihintaleArticle.js";

import MirissaArticle from "../../Data/DestinationData/Mirissa/en/_MirissaArticle.js";

import NuwaraEliyaArticle from "../../Data/DestinationData/NuwaraEliya/en/_NuwaraEliyaArticle.js";

import TrincomaleeArticle from "../../Data/DestinationData/Trincomalee/en/_TrincomaleeArticle.js";

import PassikudahArticle from "../../Data/DestinationData/Pasikudah/en/_PasikudahArticle.js";

import PinnawalaArticle from "../../Data/DestinationData/Pinnawala/en/_PinnawalaArticle.js";

import TangalleArticle from "../../Data/DestinationData/Tangalle/en/_TangalleArticle.js";

import TissamaharamaArticle from "../../Data/DestinationData/Tissamaharama/en/_TissamaharamaArticle.js";

import UnawatunaArticle from "../../Data/DestinationData/Unawatuna/en/_UnawatunaArticle.js";

import WeligamaArticle from "../../Data/DestinationData/Weligama/en/_WeligamaArticle.js";

import PolonnaruwaArticle from "../../Data/DestinationData/Polonaruwa/en/_PolonaruwaArticle.js";

import RatnapuraArticle from "../../Data/DestinationData/Ratnapura/en/_RatnapuraArticle.js";

import SigiriyaArticle from "../../Data/DestinationData/Sigiriya/en/_SigiriyaArticle.js";

import MoratuwaArticle from "../../Data/DestinationData/Moratuwa/en/_MoratuwaArticle.js";

import KalutaraArticle from "../../Data/DestinationData/Kalutara/en/_KalutaraArticle.js";

//================================== Parks ==================================


import AdamsPeakArticle from "../../Data/Parks/AdamsPeak/en/_AdamsPeakArticle.js";

import AngammedillaArticle from "../../Data/Parks/AngammedillaNP/en/_AngammedillaNP.js";

import BundalaArticle from "../../Data/Parks/BundalaNP/en/_BundalaNP.js";

import EllakandaArticle from "../../Data/Parks/Ellakanda/en/_EllakandaNP.js";

import HiyareReservoirArticle from "../../Data/Parks/HiyareRV/en/_HiyareRV.js";

import SevenVirginsMountainRangeArticle from "../../Data/Parks/SevenVirginsMR/en/_SevenVirginsMR.js";

import KalametiyaBirdSanctuaryArticle from "../../Data/Parks/KalametiyaSanctuary/en/_KalametiyaSanctuary.js";

import HuruluEcoParkArticle from "../../Data/Parks/HuruluNP/en/_HuruluNP.js";

import KaudullaNPArticle from "../../Data/Parks/KaudullaNP/en/_KaudullaNP.js";

import KumanaNationalParkArticle from "../../Data/Parks/KumanaNP/en/_KumanaNP.js";

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

  "arugam-bay": ArugamBayArticle,
  "arugam-bay-elephant-rock": ElephantRockArticleSection,
  "arugam-bay-muhudu-maha-viharaya": MuhuduMahaViharayaArticle,

  "negombo": NegomboArticle,
  "negombo-fish-market": NegomboFishMarketArticle,
  "negombo-dutch-fort": NegomboDutchFortArticle,
  "negombo-hamilton-canal": NegomboHamiltonCanalArticle,
  "negombo-st-marys-church": NegomboStMarysChurchArticle,
  "negombo-angurukaramulla-temple": NegomboAngurukaramullaTempleArticle,
  "negombo-muthurajawela-marsh": NegomboMuthurajawelaMarshArticle,
  "negombo-city": NegomboCityArticle,

  "badulla": BadullaArticle,

  "batticaloa": BatticaloaArticle,

  "dambulla": DambullaArticle,

  "dickwella": DickwellaArticle,

  "ella": EllaArticle,

  "galle": GalleArticle,

  "gampaha": GampahaArticle,

  "hambantota": HambantotaArticle,

  "haputale": HaputaleArticle,

  "hatton": HattonArticle,

  "hikkaduwa": HikkaduwaArticle,

  "jaffna": JaffnaArticle,

  "kalpitiya": KalpitiyaArticle,

  "kandy": KandyArticle,

  "kataragama": KataragamaArticle,

  "kitulgala": KitulgalaArticle,

  "koggala": KoggalaArticle,

  "madampella": MadampellaArticle,

  "mannar": MannarArticle,

  "matale": MataleArticle,

  "mihintale": MihintaleArticle,

  "mirissa": MirissaArticle,

  "nuwara-eliya": NuwaraEliyaArticle,

  "trincomalee": TrincomaleeArticle,

  "pasikudah": PassikudahArticle,

  "pinnawala": PinnawalaArticle,

  "tangalle": TangalleArticle,

  "tissamaharama": TissamaharamaArticle,

  "unawatuna": UnawatunaArticle,

  "weligama": WeligamaArticle,

  "polonnaruwa": PolonnaruwaArticle,

  "ratnapura": RatnapuraArticle,

  "sigiriya": SigiriyaArticle,

  "moratuwa": MoratuwaArticle,

  "kalutara": KalutaraArticle,

  //======================= Parks =======================

  "adams-peak": AdamsPeakArticle,

  "angammedilla-national-park": AngammedillaArticle,

  "bundala-national-park": BundalaArticle,

  "ellakanda-national-park": EllakandaArticle,

  "hiyare-reservoir": HiyareReservoirArticle,

  "seven-virgins-mountain-range": SevenVirginsMountainRangeArticle,

  "kalametiya-bird-sanctuary": KalametiyaBirdSanctuaryArticle,

  "hurulu-eco-park": HuruluEcoParkArticle,

  "kaudulla-national-park": KaudullaNPArticle,

  "kumana-national-park": KumanaNationalParkArticle,
};

export default function PlacePage() {
  const { slug } = useParams();

  const data = placeRegistry[slug];

  if (!data) {
    return <div>Place not found</div>;
  }

  return <ArticlePage data={data} />;
}