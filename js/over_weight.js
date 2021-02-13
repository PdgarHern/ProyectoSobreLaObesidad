window.onload = initialize;

var municipalitiesTenerife = [
  {
    name: "San Cristóbal de la Laguna",
    overWeight: 1
  },
  {
    name: "Santa Cruz de Tenerife",
    overWeight: 1
  },
  {
    name: "Tegueste",
    overWeight: 1
  },
  {
    name: "El Rosario",
    overWeight: 1
  },
  {
    name: "Tacoronte",
    overWeight: 1
  },
  {
    name: "El Sauzal",
    overWeight: 1
  },
  {
    name: "La Matanza",
    overWeight: 1
  },
  {
    name: "La Victoria",
    overWeight: 1
  },
  {
    name: "Santa Úrsula",
    overWeight: 1
  },
  {
    name: "Puerto de la Cruz",
    overWeight: 1
  },
  {
    name: "Los Realejos",
    overWeight: 1
  },
  {
    name: "San Juan de la Rambla",
    overWeight: 1
  },
  {
    name: "La Guancha",
    overWeight: 1
  },
  {
    name: "Icod de los Vinos",
    overWeight: 1
  },
  {
    name: "Garachico",
    overWeight: 1
  },
  {
    name: "El Tanque",
    overWeight: 1
  },
  {
    name: "Los Silos",
    overWeight: 1
  },
  {
    name: "Buenavista del Norte",
    overWeight: 1
  },
  {
    name: "Santiago del Teide",
    overWeight: 1
  },
  {
    name: "Guía de Isora",
    overWeight: 1
  },
  {
    name: "Candelaria",
    overWeight: 0
  },
  {
    name: "Arafo",
    overWeight: 0
  },
  {
    name: "Güímar",
    overWeight: 0
  },
  {
    name: "Fasnia",
    overWeight: 0
  },
  {
    name: "Arico",
    overWeight: 0
  },
  {
    name: "Granadilla",
    overWeight: 0
  },
  {
    name: "San Miguel de Abona",
    overWeight: 0
  },
  {
    name: "Arona",
    overWeight: 0
  },
  {
    name: "Vilaflor",
    overWeight: 0
  },
  {
    name: "Adeje",
    overWeight: 0
  },
  {
    name: "La Orotava",
    overWeight: 0
  }

];

var municipalitiesGranCanaria = [
  {
    name: "Las Palmas de Gran Canaria",
    overWeight: 1
  },
  {
    name: "Telde",
    overWeight: 1
  },
  {
    name: "Gáldar",
    overWeight: 1
  },
  {
    name: "Agaete",
    overWeight: 1
  },
  {
    name: "San Bartolomé de Tirajana",
    overWeight: 1
  },
  {
    name: "Mogán",
    overWeight: 1
  },
  {
    name: "Ingenio",
    overWeight: 0
  },
  {
    name: "Agüimes",
    overWeight: 0
  },
  {
    name: "Santa Lucía de Tirajana",
    overWeight: 0
  },
  {
    name: "Arucas",
    overWeight: 0
  },
  {
    name: "Firgas",
    overWeight: 0
  },
  {
    name: "Moya",
    overWeight: 0
  },
  {
    name: "Santa María de Guía de Gran Canaria",
    overWeight: 0
  },
  {
    name: "Artenara",
    overWeight: 0
  },
  {
    name: "Tejeda",
    overWeight: 0
  },
  {
    name: "San Nicolás de Tolentino",
    overWeight: 0
  },
  {
    name: "Valleseco",
    overWeight: 0
  },
  {
    name: "Teror",
    overWeight: 0
  },
  {
    name: "Santa Brígida",
    overWeight: 0
  },
  {
    name: "San Mateo",
    overWeight: 0
  },
  {
    name: "Valsequillo",
    overWeight: 0
  }
];

var municipalitiesFuerteventura = [
  {
    name: "La Oliva",
    overWeight: 1
  },
  {
    name: "Pájara",
    overWeight: 1
  },
  {
    name: "Puerto del Rosario",
    overWeight: 0
  },
  {
    name: "Betancuria",
    overWeight: 0
  },
  {
    name: "Antigua",
    overWeight: 0
  },
  {
    name: "Tuineje",
    overWeight: 0
  }
];

var municipalitiesLanzarote = [
  {
    name: "Arrecife",
    overWeight: 1
  },
  {
    name: "San Bartolomé",
    overWeight: 1
  },
  {
    name: "Tías",
    overWeight: 1
  },
  {
    name: "Haría",
    overWeight: 0
  },
  {
    name: "Teguise",
    overWeight: 0
  },
  {
    name: "Tinajo",
    overWeight: 0
  },
  {
    name: "Yaiza",
    overWeight: 0
  }
];

var municipalitiesLaPalma = [
  {
    name: "Tijarafe",
    overWeight: 1
  },
  {
    name: "Puntagorda",
    overWeight: 1
  },
  {
    name: "Garafía",
    overWeight: 1
  },
  {
    name: "Barlovento",
    overWeight: 1
  },
  {
    name: "San Andrés y Sauces",
    overWeight: 1
  },
  {
    name: "Puntallana",
    overWeight: 1
  },
  {
    name: "Santa Cruz de La Palma",
    overWeight: 1
  },
  {
    name: "El Paso",
    overWeight: 0
  },
  {
    name: "Breña Alta",
    overWeight: 0
  },
  {
    name: "Breña Baja",
    overWeight: 0
  },
  {
    name: "Villa de Mazo",
    overWeight: 0
  },
  {
    name: "Tazacorte",
    overWeight: 0
  },
  {
    name: "Los Llanos de Aridane",
    overWeight: 0
  },
  {
    name: "Fuencaliente de La Palma",
    overWeight: 1
  }
];

var municipalitiesLaGomera = [
  {
    name: "Vallehermoso",
    overWeight: 0
  },
  {
    name: "Valle Gran Rey",
    overWeight: 0
  },
  {
    name: "Agulo",
    overWeight: 0
  },
  {
    name: "Hermigua",
    overWeight: 1
  },
  {
    name: "Alajeró",
    overWeight: 1
  },
  {
    name: "San Sebastián",
    overWeight: 1
  }
];

var municipalitiesElHierro = [
  {
    name: "Frontera",
    overWeight: 1
  },
  {
    name: "Valverde",
    overWeight: 0
  },
  {
    name: "El Pinar",
    overWeight: 0
  }
];

function initialize() {
  var overWeightControlTenerife = document.getElementById("over-weight-tenerife");
  var overWeightControlGranCanaria = document.getElementById("over-weight-gran-canaria");
  var overWeightControlFuerteventura = document.getElementById("over-weight-fuerteventura");
  var overWeightControlLanzarote = document.getElementById("over-weight-lanzarote");
  var overWeightControlLaPalma = document.getElementById("over-weight-la-palma");
  var overWeightControlLaGomera = document.getElementById("over-weight-la-gomera");
  var overWeightControlElHierro = document.getElementById("over-weight-el-hierro");

  const OVER_WEIGHT_THRESHOLD = 0;
  var municipalitiesOverThresholdTenerife = 0;
  var municipalitiesOverThresholdGranCanaria = 0;
  var municipalitiesOverThresholdFuerteventura = 0;
  var municipalitiesOverThresholdLanzarote = 0;
  var municipalitiesOverThresholdLaPalma = 0;
  var municipalitiesOverThresholdLaGomera = 0;
  var municipalitiesOverThresholdElHierro = 0;

  for (var i = 0; i < municipalitiesTenerife.length; i++) {
    if (municipalitiesTenerife[i].overWeight > OVER_WEIGHT_THRESHOLD) municipalitiesOverThresholdTenerife++;
  }
  for (var i = 0; i < municipalitiesGranCanaria.length; i++) {
    if (municipalitiesGranCanaria[i].overWeight > OVER_WEIGHT_THRESHOLD) municipalitiesOverThresholdGranCanaria++;
  }
  for (var i = 0; i < municipalitiesFuerteventura.length; i++) {
    if (municipalitiesFuerteventura[i].overWeight > OVER_WEIGHT_THRESHOLD) municipalitiesOverThresholdFuerteventura++;
  }
  for (var i = 0; i < municipalitiesLanzarote.length; i++) {
    if (municipalitiesLanzarote[i].overWeight > OVER_WEIGHT_THRESHOLD) municipalitiesOverThresholdLanzarote++;
  }
  for (var i = 0; i < municipalitiesLaPalma.length; i++) {
    if (municipalitiesLaPalma[i].overWeight > OVER_WEIGHT_THRESHOLD) municipalitiesOverThresholdLaPalma++;
  }
  for (var i = 0; i < municipalitiesLaGomera.length; i++) {
    if (municipalitiesLaGomera[i].overWeight > OVER_WEIGHT_THRESHOLD) municipalitiesOverThresholdLaGomera++;
  }
  for (var i = 0; i < municipalitiesElHierro.length; i++) {
    if (municipalitiesElHierro[i].overWeight > OVER_WEIGHT_THRESHOLD) municipalitiesOverThresholdElHierro++;
  }

  overWeightControlTenerife.innerHTML = municipalitiesOverThresholdTenerife;
  overWeightControlGranCanaria.innerHTML = municipalitiesOverThresholdGranCanaria;
  overWeightControlFuerteventura.innerHTML = municipalitiesOverThresholdFuerteventura;
  overWeightControlLanzarote.innerHTML = municipalitiesOverThresholdLanzarote;
  overWeightControlLaPalma.innerHTML = municipalitiesOverThresholdLaPalma;
  overWeightControlLaGomera.innerHTML = municipalitiesOverThresholdLaGomera;
  overWeightControlElHierro.innerHTML = municipalitiesOverThresholdElHierro;
}
