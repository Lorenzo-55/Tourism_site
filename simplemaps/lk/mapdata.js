// /public/simplemaps/lk/mapdata.js
var simplemaps_countrymap_mapdata = {
  main_settings: {
    // General settings
    width: "responsive",
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",

    // State defaults
    state_description: "",
    state_color: "#d9dde3",
    state_hover_color: "#111111",
    state_url: "",
    border_size: 1.2,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    state_hover_opacity: 1,

    // Location defaults
    location_description: "",
    location_url: "",
    location_color: "#111111",
    location_opacity: 1,
    location_hover_opacity: 1,
    location_size: 30,
    location_type: "marker",
    location_image_source: "",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

    // Label defaults
    label_color: "#111111",
    label_hover_color: "#111111",
    label_size: 12,
    label_font: "Arial, sans-serif",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "yes",
    hide_eastern_labels: "yes",

    // Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 1,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,

    // Popup settings
    popup_color: "white",
    popup_opacity: 0.95,
    popup_shadow: 1,
    popup_corners: 12,
    popup_font: "12px/1.5 Arial, Helvetica, sans-serif",
    popup_nocss: "no",

    // Advanced settings
    div: "map",
    auto_load: "no",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View details",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },

  state_specific: {
    LK11: {
      name: "Colombo",
      description: "Sri Lanka’s commercial capital with city life, food, shopping, and coastal energy.",
      url: "/colombo"
    },
    LK12: {
      name: "Gampaha",
      description: "Historic towns, wetlands, and easy access to the west coast."
    },
    LK13: {
      name: "Kalutara",
      description: "Beaches, riverside scenery, and laid-back southwest coastal travel."
    },
    LK21: {
      name: "Kandy",
      description: "Hill-country heritage, sacred sites, and scenic lake views.",
      url: "/kandy"
    },
    LK22: {
      name: "Matale",
      description: "Cultural triangle access, spice gardens, and inland landscapes."
    },
    LK23: {
      name: "Nuwara Eliya",
      description: "Tea country, cool climate, and colonial-era hill station charm."
    },
    LK31: {
      name: "Galle",
      description: "Fort walls, cafés, colonial streets, and south coast beauty.",
      url: "/galle"
    },
    LK32: {
      name: "Matara",
      description: "Southern beaches, surfing routes, and coastal town life."
    },
    LK33: {
      name: "Hambantota",
      description: "Wildlife parks, open landscapes, and the deep south coast."
    },
    LK41: {
      name: "Jaffna",
      description: "Northern culture, islands, seafood, and unique regional identity.",
      url: "/jaffna"
    },
    LK42: {
      name: "Kilinochchi",
      description: "Northern plains and a key inland route through the north."
    },
    LK43: {
      name: "Mannar",
      description: "Remote coastline, birdlife, and island-linked landscapes."
    },
    LK44: {
      name: "Vavuniya",
      description: "Gateway district linking the north and the rest of the island."
    },
    LK45: {
      name: "Mullaitivu",
      description: "Quiet northeastern coastlines and lesser-visited natural scenery."
    },
    LK51: {
      name: "Batticaloa",
      description: "Eastern lagoons, beaches, and a distinct coastal culture."
    },
    LK52: {
      name: "Ampara",
      description: "Wild coastlines, national parks, and surfing access."
    },
    LK53: {
      name: "Trincomalee",
      description: "Harbor city with beaches, temples, and whale-watching potential.",
      url: "/trincomalee"
    },
    LK61: {
      name: "Kurunegala",
      description: "Central transport hub surrounded by rock outcrops and farmland."
    },
    LK62: {
      name: "Puttalam",
      description: "Lagoons, coastal birdlife, and routes toward the northwest."
    },
    LK71: {
      name: "Anuradhapura",
      description: "Ancient capital filled with major archaeological and sacred sites.",
      url: "/anuradhapura"
    },
    LK72: {
      name: "Polonnaruwa",
      description: "Historic ruins, reservoirs, and key cultural triangle experiences.",
      url: "/polonnaruwa"
    },
    LK81: {
      name: "Badulla",
      description: "Mountain scenery, rail journeys, waterfalls, and highland travel."
    },
    LK82: {
      name: "Monaragala",
      description: "Rural southeast landscapes and access to nature-focused journeys."
    },
    LK91: {
      name: "Ratnapura",
      description: "Gem country, rainforest gateways, and lush southwestern interior."
    },
    LK92: {
      name: "Kegalle",
      description: "Green inland scenery and routes toward the hill country."
    }
  },

  locations: {
    0: {
      name: "Colombo",
      lat: 6.9271,
      lng: 79.8612,
      description: "Vibrant urban coast, food, shopping, and nightlife.",
      url: "/colombo",
      color: "#111111",
      size: 50
    },
    1: {
      name: "Kandy",
      lat: 7.2906,
      lng: 80.6337,
      description: "Sacred city, lake views, and hill-country heritage.",
      url: "/kandy",
      color: "#111111",
    },
    2: {
      name: "Galle",
      lat: 6.0535,
      lng: 80.221,
      description: "Historic fort, ocean views, and charming southern streets.",
      url: "/galle",
      color: "#111111",
    },
    3: {
      name: "Trincomalee",
      lat: 8.5874,
      lng: 81.2152,
      description: "Harbor city with beaches, temples, and eastern coast appeal.",
      url: "/trincomalee",
      color: "#111111",
    },
    4: {
      name: "Jaffna",
      lat: 9.6615,
      lng: 80.0255,
      description: "Northern cultural center with a distinct identity and cuisine.",
      url: "/jaffna",
      color: "#111111",
    },
    5: {
      name: "Anuradhapura",
      lat: 8.3114,
      lng: 80.4037,
      description: "Ancient city of stupas, monasteries, and sacred history.",
      url: "/anuradhapura",
      color: "#111111",
    },
    6: {
      name: "Polonnaruwa",
      lat: 7.9403,
      lng: 81.0188,
      description: "Historic ruins and one of the island’s great ancient capitals.",
      url: "/polonnaruwa",
      color: "#111111",
    },
    7: {
      name: "Nuwara Eliya",
      lat: 6.9497,
      lng: 80.7891,
      description: "Cool-climate tea country and colonial hill station scenery.",
      url: "/nuwara-eliya",
      color: "#111111",
    },
    8: {
      name: "Ella",
      lat: 6.8667,
      lng: 81.0466,
      description: "Hill-country viewpoints, train routes, and hiking landscapes.",
      url: "/ella",
      color: "#111111",
    },
    9: {
      name: "Sigiriya",
      lat: 7.957,
      lng: 80.7603,
      description: "Iconic rock fortress and one of Sri Lanka’s standout landmarks.",
      url: "/sigiriya",
      color: "#111111",
    }
  },

  labels: {},

  legend: {
    entries: []
  },

  regions: {}
};