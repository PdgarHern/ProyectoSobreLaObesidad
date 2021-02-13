window.onload = initialize;

var municipalitiesTenerife = [
    {
        name: "San Cristóbal de la Laguna",
        weigth_average: 60
    },
    {
        name: "Santa Cruz de Tenerife",
        weigth_average: 75
    },
    {
        name: "Tegueste",
        weigth_average: 54
    },
    {
        name: "El Rosario",
        weigth_average: 62
    },
    {
        name: "Tacoronte",
        weigth_average: 80
    },
    {
        name: "El Sauzal",
        weigth_average: 65
    },
    {
        name: "La Matanza",
        weigth_average: 57
    },
    {
        name: "La Victoria",
        weigth_average: 90
    },
    {
        name: "Santa Úrsula",
        weigth_average: 51
    },
    {
        name: "Puerto de la Cruz",
        weigth_average: 67
    },
    {
        name: "Los Realejos",
        weigth_average: 71
    },
    {
        name: "San Juan de la Rambla",
        weigth_average: 60
    },
    {
        name: "La Guancha",
        weigth_average: 56
    },
    {
        name: "Icod de los Vinos",
        weigth_average: 80
    },
    {
        name: "Garachico",
        weigth_average: 57
    },
    {
        name: "El Tanque",
        weigth_average: 60
    },
    {
        name: "Los Silos",
        weigth_average: 63
    },
    {
        name: "Buenavista del Norte",
        weigth_average: 50
    },
    {
        name: "Santiago del Teide",
        weigth_average: 55
    },
    {
        name: "Guía de Isora",
        weigth_average: 64
    },
    {
        name: "Candelaria",
        weigth_average: 21
    },
    {
        name: "Arafo",
        weigth_average: 34
    },
    {
        name: "Güímar",
        weigth_average: 15
    },
    {
        name: "Fasnia",
        weigth_average: 45
    },
    {
        name: "Arico",
        weigth_average: 12
    },
    {
        name: "Granadilla",
        weigth_average: 39
    },
    {
        name: "San Miguel de Abona",
        weigth_average: 48
    },
    {
        name: "Arona",
        weigth_average: 36
    },
    {
        name: "Vilaflor",
        weigth_average: 5
    },
    {
        name: "Adeje",
        weigth_average: 12
    },
    {
        name: "La Orotava",
        weigth_average: 24
    }
];

var municipalitiesGranCanaria = [
    {
        name: "Las Palmas de Gran Canaria",
        weigth_average: 65
    },
    {
        name: "Telde",
        weigth_average: 70
    },
    {
        name: "Gáldar",
        weigth_average: 75
    },
    {
        name: "Agaete",
        weigth_average: 60
    },
    {
        name: "San Bartolomé de Tirajana",
        weigth_average: 80
    },
    {
        name: "Mogán",
        weigth_average: 95
    },
    {
        name: "Ingenio",
        weigth_average: 5
    },
    {
        name: "Agüimes",
        weigth_average: 10
    },
    {
        name: "Santa Lucía de Tirajana",
        weigth_average: 30
    },
    {
        name: "Arucas",
        weigth_average: 20
    },
    {
        name: "Firgas",
        weigth_average: 15
    },
    {
        name: "Moya",
        weigth_average: 5
    },
    {
        name: "Santa María de Guía de Gran Canaria",
        weigth_average: 6
    },
    {
        name: "Artenara",
        weigth_average: 15
    },
    {
        name: "Tejeda",
        weigth_average: 10
    },
    {
        name: "San Nicolás de Tolentino",
        weigth_average: 1
    },
    {
        name: "Valleseco",
        weigth_average: 20
    },
    {
        name: "Teror",
        weigth_average: 12
    },
    {
        name: "Santa Brígida",
        weigth_average: 5
    },
    {
        name: "San Mateo",
        weigth_average: 2
    },
    {
        name: "Valsequillo",
        weigth_average: 16
    }
];

var municipalitiesFuerteventura = [
    {
        name: "La Oliva",
        weigth_average: 68
    },
    {
        name: "Pájara",
        weigth_average: 99
    },
    {
        name: "Puerto del Rosario",
        weigth_average: 20
    },
    {
        name: "Betancuria",
        weigth_average: 35
    },
    {
        name: "Antigua",
        weigth_average: 10
    },
    {
        name: "Tuineje",
        weigth_average: 17
    }
];

var municipalitiesLanzarote = [
    {
        name: "Arrecife",
        weigth_average: 60
    },
    {
        name: "San Bartolomé",
        weigth_average: 50
    },
    {
        name: "Tías",
        weigth_average: 55
    },
    {
        name: "Haría",
        weigth_average: 20
    },
    {
        name: "Teguise",
        weigth_average: 10
    },
    {
        name: "Tinajo",
        weigth_average: 30
    },
    {
        name: "Yaiza",
        weigth_average: 5
    }
];

var municipalitiesLaPalma = [
    {
        name: "Tijarafe",
        weigth_average: 50
    },
    {
        name: "Puntagorda",
        weigth_average: 64
    },
    {
        name: "Garafía",
        weigth_average: 52
    },
    {
        name: "Barlovento",
        weigth_average: 70
    },
    {
        name: "San Andrés y Sauces",
        weigth_average: 86
    },
    {
        name: "Puntallana",
        weigth_average: 54
    },
    {
        name: "Santa Cruz de La Palma",
        weigth_average: 68
    },
    {
        name: "El Paso",
        weigth_average: 15
    },
    {
        name: "Breña Alta",
        weigth_average: 20
    },
    {
        name: "Breña Baja",
        weigth_average: 10
    },
    {
        name: "Villa de Mazo",
        weigth_average: 34
    },
    {
        name: "Tazacorte",
        weigth_average: 5
    },
    {
        name: "Los Llanos de Aridane",
        weigth_average: 45
    },
    {
        name: "Fuencaliente de La Palma",
        weigth_average: 56
    }
];

var municipalitiesLaGomera = [
    {
        name: "Vallehermoso",
        weigth_average: 20
    },
    {
        name: "Valle Gran Rey",
        weigth_average: 10
    },
    {
        name: "Agulo",
        weigth_average: 5
    },
    {
        name: "Hermigua",
        weigth_average: 50
    },
    {
        name: "Alajeró",
        weigth_average: 60
    },
    {
        name: "San Sebastián",
        weigth_average: 70
    }
];

var municipalitiesElHierro = [
    {
        name: "Frontera",
        weigth_average: 50
    },
    {
        name: "Valverde",
        weigth_average: 30
    },
    {
        name: "El Pinar",
        weigth_average: 15
    }
];

function initialize() {

    checkIfUserIsLoggedIn();

    var signOut = document.getElementById("sign-out");
    signOut.addEventListener("click", logout);


    var svgControlTenerife = document.getElementById("weight-graph-tenerife");
    var svgControlGranCanaria = document.getElementById("weight-graph-gran-canaria");
    var svgControlFuerteventura = document.getElementById("weight-graph-fuerteventura");
    var svgControlLanzarote = document.getElementById("weight-graph-lanzarote");
    var svgControlLaPalma = document.getElementById("weight-graph-la-palma");
    var svgControlLaGomera = document.getElementById("weight-graph-la-gomera");
    var svgControlElHierro = document.getElementById("weight-graph-el-hierro");

    for (var i = 0; i < municipalitiesTenerife.length; i++) {
        svgControlTenerife.innerHTML += `<rect x="0" y="${i * 22}" height="20" width="${municipalitiesTenerife[i].weigth_average * 10}" fill="lightblue"></rect>`;
        svgControlTenerife.innerHTML += `<text x="0" y="${i * 22 + 16}" font-family="Verdana" font-size="18" fill="black">${municipalitiesTenerife[i].name}</text>`;
    }
    for (var i = 0; i < municipalitiesGranCanaria.length; i++) {
        svgControlGranCanaria.innerHTML += `<rect x="0" y="${i * 22}" height="20" width="${municipalitiesGranCanaria[i].weigth_average * 10}" fill="lightblue"></rect>`;
        svgControlGranCanaria.innerHTML += `<text x="0" y="${i * 22 + 16}" font-family="Verdana" font-size="18" fill="black">${municipalitiesGranCanaria[i].name}</text>`;
    }
    for (var i = 0; i < municipalitiesFuerteventura.length; i++) {
        svgControlFuerteventura.innerHTML += `<rect x="0" y="${i * 22}" height="20" width="${municipalitiesFuerteventura[i].weigth_average * 10}" fill="lightblue"></rect>`;
        svgControlFuerteventura.innerHTML += `<text x="0" y="${i * 22 + 16}" font-family="Verdana" font-size="18" fill="black">${municipalitiesFuerteventura[i].name}</text>`;
    }
    for (var i = 0; i < municipalitiesLanzarote.length; i++) {
        svgControlLanzarote.innerHTML += `<rect x="0" y="${i * 22}" height="20" width="${municipalitiesLanzarote[i].weigth_average * 10}" fill="lightblue"></rect>`;
        svgControlLanzarote.innerHTML += `<text x="0" y="${i * 22 + 16}" font-family="Verdana" font-size="18" fill="black">${municipalitiesLanzarote[i].name}</text>`;
    }
    for (var i = 0; i < municipalitiesLaPalma.length; i++) {
        svgControlLaPalma.innerHTML += `<rect x="0" y="${i * 22}" height="20" width="${municipalitiesLaPalma[i].weigth_average * 10}" fill="lightblue"></rect>`;
        svgControlLaPalma.innerHTML += `<text x="0" y="${i * 22 + 16}" font-family="Verdana" font-size="18" fill="black">${municipalitiesLaPalma[i].name}</text>`;
    }
    for (var i = 0; i < municipalitiesLaGomera.length; i++) {
        svgControlLaGomera.innerHTML += `<rect x="0" y="${i * 22}" height="20" width="${municipalitiesLaGomera[i].weigth_average * 10}" fill="lightblue"></rect>`;
        svgControlLaGomera.innerHTML += `<text x="0" y="${i * 22 + 16}" font-family="Verdana" font-size="18" fill="black">${municipalitiesLaGomera[i].name}</text>`;
    }
    for (var i = 0; i < municipalitiesElHierro.length; i++) {
        svgControlElHierro.innerHTML += `<rect x="0" y="${i * 22}" height="20" width="${municipalitiesElHierro[i].weigth_average * 10}" fill="lightblue"></rect>`;
        svgControlElHierro.innerHTML += `<text x="0" y="${i * 22 + 16}" font-family="Verdana" font-size="18" fill="black">${municipalitiesElHierro[i].name}</text>`;
    }

    var overWeightControlTenerife = document.getElementById("over-weight-tenerife");
    var overWeightControlGranCanaria = document.getElementById("over-weight-gran-canaria");
    var overWeightControlFuerteventura = document.getElementById("over-weight-fuerteventura");
    var overWeightControlLanzarote = document.getElementById("over-weight-lanzarote");
    var overWeightControlLaPalma = document.getElementById("over-weight-la-palma");
    var overWeightControlLaGomera = document.getElementById("over-weight-la-gomera");
    var overWeightControlElHierro = document.getElementById("over-weight-el-hierro");

    const OVER_WEIGHT_THRESHOLD = 49;
    var municipalitiesOverThresholdTenerife = 0;
    var municipalitiesOverThresholdGranCanaria = 0;
    var municipalitiesOverThresholdFuerteventura = 0;
    var municipalitiesOverThresholdLanzarote = 0;
    var municipalitiesOverThresholdLaPalma = 0;
    var municipalitiesOverThresholdLaGomera = 0;
    var municipalitiesOverThresholdElHierro = 0;

    for (var i = 0; i < municipalitiesTenerife.length; i++) {
        if (municipalitiesTenerife[i].weigth_average > OVER_WEIGHT_THRESHOLD) municipalitiesOverThresholdTenerife++;
    }
    for (var i = 0; i < municipalitiesGranCanaria.length; i++) {
        if (municipalitiesGranCanaria[i].weigth_average > OVER_WEIGHT_THRESHOLD) municipalitiesOverThresholdGranCanaria++;
    }
    for (var i = 0; i < municipalitiesFuerteventura.length; i++) {
        if (municipalitiesFuerteventura[i].weigth_average > OVER_WEIGHT_THRESHOLD) municipalitiesOverThresholdFuerteventura++;
    }
    for (var i = 0; i < municipalitiesLanzarote.length; i++) {
        if (municipalitiesLanzarote[i].weigth_average > OVER_WEIGHT_THRESHOLD) municipalitiesOverThresholdLanzarote++;
    }
    for (var i = 0; i < municipalitiesLaPalma.length; i++) {
        if (municipalitiesLaPalma[i].weigth_average > OVER_WEIGHT_THRESHOLD) municipalitiesOverThresholdLaPalma++;
    }
    for (var i = 0; i < municipalitiesLaGomera.length; i++) {
        if (municipalitiesLaGomera[i].weigth_average > OVER_WEIGHT_THRESHOLD) municipalitiesOverThresholdLaGomera++;
    }
    for (var i = 0; i < municipalitiesElHierro.length; i++) {
        if (municipalitiesElHierro[i].weigth_average > OVER_WEIGHT_THRESHOLD) municipalitiesOverThresholdElHierro++;
    }

    overWeightControlTenerife.innerHTML = municipalitiesOverThresholdTenerife;
    overWeightControlGranCanaria.innerHTML = municipalitiesOverThresholdGranCanaria;
    overWeightControlFuerteventura.innerHTML = municipalitiesOverThresholdFuerteventura;
    overWeightControlLanzarote.innerHTML = municipalitiesOverThresholdLanzarote;
    overWeightControlLaPalma.innerHTML = municipalitiesOverThresholdLaPalma;
    overWeightControlLaGomera.innerHTML = municipalitiesOverThresholdLaGomera;
    overWeightControlElHierro.innerHTML = municipalitiesOverThresholdElHierro;
}

function checkIfUserIsLoggedIn() {

    var showEmail = document.getElementById("user-email");

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("User is signed in.")
            console.log(user.email);

            showEmail.innerHTML = user.email;

            document.getElementById("register").style.display = "none";
            document.getElementById("sign-in").style.display = "none";
            document.getElementById("user-email").style.display = "block";
            document.getElementById("sign-out").style.display = "block";
            
        } else {
            console.log("No user is signed in.")

            document.getElementById("register").style.display = "block";
            document.getElementById("sign-in").style.display = "block";
            document.getElementById("user-email").style.display = "none";
            document.getElementById("sign-out").style.display = "none";
        }
    })
}

function logout() {
    console.log("Hola")
    firebase.auth().signOut().then(() => {
        console.log("User logged out")
    }).catch((error) => {
        console.log(error.message)
    });
    
}
