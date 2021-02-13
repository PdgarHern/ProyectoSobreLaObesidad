window.onload = initialize;

var svg;
var currentMunicipalityTenerife;
var currentMunicipalityGranCanaria;
var currentMunicipalityFuerteveuntura;
var currentMunicipalityLanzarote;
var currentMunicipalityLaPalma;
var currentMunicipalityLaGomera;
var currentMunicipalityElHierro;

function initialize() {

    checkIfUserIsLoggedIn();

    var signOut = document.getElementById("sign-out");
    signOut.addEventListener("click", logout);

    var svgObject = document.getElementById('svg-object').contentDocument;
    console.log(svgObject)
    svg = svgObject.getElementById('Municipios de la provincia de Santa Cruz de Tenerife');
    console.log(svg)

    var tenerife = svg.getElementById("Tenerife");
    var municipalitiesInTenerife = tenerife.getElementsByTagName("path");
    var selectMunicipalitiesInTenerife = document.getElementById("municipalities-in-tenerife");

    for (var i = 0; i < municipalitiesInTenerife.length; i++) {
        var node = document.createElement("option");                 
        var textnode = document.createTextNode(municipalitiesInTenerife[i].id.toString());         
        node.appendChild(textnode); 
        node.value = municipalitiesInTenerife[i].id.toString();                            
        selectMunicipalitiesInTenerife.appendChild(node);

        municipalitiesInTenerife[i].addEventListener("click", clickOnMunicipalityTenerife);
    }

    currentMunicipalityTenerife = municipalitiesInTenerife[0].id.toString();

    selectMunicipalitiesInTenerife.addEventListener("change", selectMunicipalityInTenerife);

    var granCanaria = svg.getElementById("Gran Canaria");
    var municipalitiesInGranCanaria = granCanaria.getElementsByTagName("path");
    var selectMunicipalitiesInGranCanaria = document.getElementById("municipalities-in-gran-canaria");

    for (var i = 0; i < municipalitiesInGranCanaria.length; i++) {
        var node = document.createElement("option");                 
        var textnode = document.createTextNode(municipalitiesInGranCanaria[i].id.toString());         
        node.appendChild(textnode); 
        node.value = municipalitiesInGranCanaria[i].id.toString();                            
        selectMunicipalitiesInGranCanaria.appendChild(node);

        municipalitiesInGranCanaria[i].addEventListener("click", clickOnMunicipalityGranCanaria);
    }

    currentMunicipalityGranCanaria = municipalitiesInGranCanaria[0].id.toString();

    selectMunicipalitiesInGranCanaria.addEventListener("change", selectMunicipalityInGranCanaria);

    var fuerteventura = svg.getElementById("Fuerteventura");
    var municipalitiesInFuerteventura = fuerteventura.getElementsByTagName("path");
    var selectMunicipalitiesInTFuerteventura = document.getElementById("municipalities-in-fuerteventura");

    for (var i = 0; i < municipalitiesInFuerteventura.length; i++) {
        var node = document.createElement("option");                 
        var textnode = document.createTextNode(municipalitiesInFuerteventura[i].id.toString());         
        node.appendChild(textnode); 
        node.value = municipalitiesInFuerteventura[i].id.toString();                            
        selectMunicipalitiesInTFuerteventura.appendChild(node);

        municipalitiesInFuerteventura[i].addEventListener("click", clickOnMunicipalityFuerteventura);
    }

    currentMunicipalityFuerteveuntura = municipalitiesInFuerteventura[0].id.toString();

    selectMunicipalitiesInTFuerteventura.addEventListener("change", selectMunicipalityInFuerteventura);

    var lanzarote = svg.getElementById("Lanzarote y Chinijos");
    var municipalitiesInLanzarote = lanzarote.getElementsByTagName("path");
    var selectMunicipalitiesInLanzarote = document.getElementById("municipalities-in-lanzarote");

    for (var i = 0; i < municipalitiesInLanzarote.length; i++) {
        var node = document.createElement("option");                 
        var textnode = document.createTextNode(municipalitiesInLanzarote[i].id.toString());         
        node.appendChild(textnode); 
        node.value = municipalitiesInLanzarote[i].id.toString();                            
        selectMunicipalitiesInLanzarote.appendChild(node);

        municipalitiesInLanzarote[i].addEventListener("click", clickOnMunicipalityLanzarote);
    }

    currentMunicipalityLanzarote = municipalitiesInLanzarote[0].id.toString();

    selectMunicipalitiesInLanzarote.addEventListener("change", selectMunicipalityInLanzarote);

    var laPalma = svg.getElementById("La Palma");
    var municipalitiesInLaPalma = laPalma.getElementsByTagName("path");
    var selectMunicipalitiesInLaPalma = document.getElementById("municipalities-in-la-palma");

    for (var i = 0; i < municipalitiesInLaPalma.length; i++) {
        var node = document.createElement("option");                 
        var textnode = document.createTextNode(municipalitiesInLaPalma[i].id.toString());         
        node.appendChild(textnode); 
        node.value = municipalitiesInLaPalma[i].id.toString();                            
        selectMunicipalitiesInLaPalma.appendChild(node);

        municipalitiesInLaPalma[i].addEventListener("click", clickOnMunicipalityLaPalma);
    }

    currentMunicipalityLaPalma = municipalitiesInLaPalma[0].id.toString();

    selectMunicipalitiesInLaPalma.addEventListener("change", selectMunicipalityInLaPalma);

    var laGomera = svg.getElementById("Gomera");
    var municipalitiesInLaGomera = laGomera.getElementsByTagName("path");
    var selectMunicipalitiesInLaGomera = document.getElementById("municipalities-in-la-gomera");

    for (var i = 0; i < municipalitiesInLaGomera.length; i++) {
        var node = document.createElement("option");                 
        var textnode = document.createTextNode(municipalitiesInLaGomera[i].id.toString());         
        node.appendChild(textnode); 
        node.value = municipalitiesInLaGomera[i].id.toString();                            
        selectMunicipalitiesInLaGomera.appendChild(node);

        municipalitiesInLaGomera[i].addEventListener("click", clickOnMunicipalityLaGomera);
    }

    currentMunicipalityLaGomera = municipalitiesInLaGomera[0].id.toString();

    selectMunicipalitiesInLaGomera.addEventListener("change", selectMunicipalityInLaGomera);

    var elHierro = svg.getElementById("El Hierro");
    var municipalitiesInElHierro = elHierro.getElementsByTagName("path");
    var selectMunicipalitiesInElHierro = document.getElementById("municipalities-in-el-hierro");

    for (var i = 0; i < municipalitiesInElHierro.length; i++) {
        var node = document.createElement("option");                 
        var textnode = document.createTextNode(municipalitiesInElHierro[i].id.toString());         
        node.appendChild(textnode); 
        node.value = municipalitiesInElHierro[i].id.toString();                            
        selectMunicipalitiesInElHierro.appendChild(node);

        municipalitiesInElHierro[i].addEventListener("click", clickOnMunicipalityElHierro);
    }

    currentMunicipalityElHierro = municipalitiesInElHierro[0].id.toString();

    selectMunicipalitiesInElHierro.addEventListener("change", selectMunicipalityInElHierro);
}

function selectMunicipalityInTenerife(){
    var selectMunicipalitiesInTenerife = document.getElementById("municipalities-in-tenerife");
    var oldMunicipalityTenerife = currentMunicipalityTenerife;
    currentMunicipalityTenerife = selectMunicipalitiesInTenerife.options[selectMunicipalitiesInTenerife.selectedIndex].text;
    svg.getElementById(oldMunicipalityTenerife).style.fill = "#fff8dc";
    svg.getElementById(currentMunicipalityTenerife).style.fill = "blue";
};

function clickOnMunicipalityTenerife(event){
    var selectMunicipalitiesInTenerife = document.getElementById("municipalities-in-tenerife");
    selectMunicipalitiesInTenerife.value = event.target.id.toString();
    selectMunicipalityInTenerife();
};

function selectMunicipalityInGranCanaria(){
    var selectMunicipalitiesInGranCanaria = document.getElementById("municipalities-in-gran-canaria");
    var oldMunicipalityGranCanaria = currentMunicipalityGranCanaria;
    currentMunicipalityGranCanaria = selectMunicipalitiesInGranCanaria.options[selectMunicipalitiesInGranCanaria.selectedIndex].text;
    svg.getElementById(oldMunicipalityGranCanaria).style.fill = "#fff8dc";
    svg.getElementById(currentMunicipalityGranCanaria).style.fill = "blue";
};

function clickOnMunicipalityGranCanaria(event){
    var selectMunicipalitiesInGranCanaria = document.getElementById("municipalities-in-gran-canaria");
    selectMunicipalitiesInGranCanaria.value = event.target.id.toString();
    selectMunicipalityInGranCanaria();
};

function selectMunicipalityInFuerteventura(){
    var selectMunicipalitiesInFuerteventura = document.getElementById("municipalities-in-fuerteventura");
    var oldMunicipalityFuerteventura = currentMunicipalityFuerteveuntura;
    currentMunicipalityFuerteveuntura = selectMunicipalitiesInFuerteventura.options[selectMunicipalitiesInFuerteventura.selectedIndex].text;
    svg.getElementById(oldMunicipalityFuerteventura).style.fill = "#fff8dc";
    svg.getElementById(currentMunicipalityFuerteveuntura).style.fill = "blue";
};

function clickOnMunicipalityFuerteventura(event){
    var selectMunicipalitiesInFuerteventura = document.getElementById("municipalities-in-fuerteventura");
    selectMunicipalitiesInFuerteventura.value = event.target.id.toString();
    selectMunicipalityInFuerteventura();
};

function selectMunicipalityInLanzarote(){
    var selectMunicipalitiesInLanzarote = document.getElementById("municipalities-in-lanzarote");
    var oldMunicipalityLanzarote = currentMunicipalityLanzarote;
    currentMunicipalityLanzarote = selectMunicipalitiesInLanzarote.options[selectMunicipalitiesInLanzarote.selectedIndex].text;
    svg.getElementById(oldMunicipalityLanzarote).style.fill = "#fff8dc";
    svg.getElementById(currentMunicipalityLanzarote).style.fill = "blue";
};

function clickOnMunicipalityLanzarote(event){
    var selectMunicipalitiesInLanzarote = document.getElementById("municipalities-in-lanzarote");
    selectMunicipalitiesInLanzarote.value = event.target.id.toString();
    selectMunicipalityInLanzarote();
};

function selectMunicipalityInLaPalma(){
    var selectMunicipalitiesInLaPalma = document.getElementById("municipalities-in-la-palma");
    var oldMunicipalityLaPalma = currentMunicipalityLaPalma;
    currentMunicipalityLaPalma = selectMunicipalitiesInLaPalma.options[selectMunicipalitiesInLaPalma.selectedIndex].text;
    svg.getElementById(oldMunicipalityLaPalma).style.fill = "#fff8dc";
    svg.getElementById(currentMunicipalityLaPalma).style.fill = "blue";
};

function clickOnMunicipalityLaPalma(event){
    var selectMunicipalitiesInLaPalma = document.getElementById("municipalities-in-la-palma");
    selectMunicipalitiesInLaPalma.value = event.target.id.toString();
    selectMunicipalityInLaPalma();
};

function selectMunicipalityInLaGomera(){
    var selectMunicipalitiesInLaGomera = document.getElementById("municipalities-in-la-gomera");
    var oldMunicipalityLaGomera = currentMunicipalityLaGomera;
    currentMunicipalityLaGomera = selectMunicipalitiesInLaGomera.options[selectMunicipalitiesInLaGomera.selectedIndex].text;
    svg.getElementById(oldMunicipalityLaGomera).style.fill = "#fff8dc";
    svg.getElementById(currentMunicipalityLaGomera).style.fill = "blue";
};

function clickOnMunicipalityLaGomera(event){
    var selectMunicipalitiesInLaGomera = document.getElementById("municipalities-in-la-gomera");
    selectMunicipalitiesInLaGomera.value = event.target.id.toString();
    selectMunicipalityInLaGomera();
};

function selectMunicipalityInElHierro(){
    var selectMunicipalitiesInElHierro = document.getElementById("municipalities-in-el-hierro");
    var oldMunicipalityElHierro = currentMunicipalityElHierro;
    currentMunicipalityElHierro = selectMunicipalitiesInElHierro.options[selectMunicipalitiesInElHierro.selectedIndex].text;
    svg.getElementById(oldMunicipalityElHierro).style.fill = "#fff8dc";
    svg.getElementById(currentMunicipalityElHierro).style.fill = "blue";
};

function clickOnMunicipalityElHierro(event){
    var selectMunicipalitiesInElHierro = document.getElementById("municipalities-in-el-hierro");
    selectMunicipalitiesInElHierro.value = event.target.id.toString();
    selectMunicipalityInElHierro();
};

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
