
//\src\Data\DestinationData\Colombo\index.js
import { districts as enDistricts } from "./en/Districts";
import { pageContent as enPageContent } from "./en/PageContent";
import { pointsOfInterest as enPointsOfInterest, poiHeader as enPoiHeader } from "./en/PointsOfInterest";

import { districts as frDistricts } from "./fr/Districts";
import { pageContent as frPageContent } from "./fr/PageContent";
import { pointsOfInterest as frPointsOfInterest, poiHeader as frPoiHeader } from "./fr/PointsOfInterest";

const colomboData = {
  en: {
    districts: enDistricts,
    pageContent: enPageContent,
    pointsOfInterest: enPointsOfInterest,
    poiHeader: enPoiHeader,
  },
  fr: {
    districts: frDistricts,
    pageContent: frPageContent,
    pointsOfInterest: frPointsOfInterest,
    poiHeader: frPoiHeader,
  },
};

export function getColomboData(language) {
  return colomboData[language] || colomboData.en;
}