window.onload = initialize;

var municipalitiesAndWeightTenerife = [
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

var municipalitiesAndWeightGranCanaria = [
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

var municipalitiesAndWeightFuerteventura = [
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

var municipalitiesAndWeightLanzarote = [
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

var municipalitiesAndWeightLaPalma = [
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

var municipalitiesAndWeightLaGomera = [
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

var municipalitiesAndWeightElHierro = [
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

function initialize(){

    checkIfUserIsLoggedIn();

    var signOut = document.getElementById("sign-out");
    signOut.addEventListener("click", logout);

    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    municipalitiesTenerife.addEventListener("click", resetColorToTenerife);
    var laLaguna = municipalitiesTenerife.getElementById("San Cristóbal de la Laguna");
    laLaguna.addEventListener("mouseover", changeColorToLaLaguna);
    var santaCruz = municipalitiesTenerife.getElementById("Santa Cruz de Tenerife");
    santaCruz.addEventListener("mouseover", changeColorToSantaCruz);
    var tegueste = municipalitiesTenerife.getElementById("Tegueste");
    tegueste.addEventListener("mouseover", changeColorToTegueste);
    var elRosario = municipalitiesTenerife.getElementById("El Rosario");
    elRosario.addEventListener("mouseover", changeColorToElRosario);
    var tacoronte = municipalitiesTenerife.getElementById("Tacoronte");
    tacoronte.addEventListener("mouseover", changeColorToTacoronte);
    var elSauzal = municipalitiesTenerife.getElementById("El Sauzal");
    elSauzal.addEventListener("mouseover", changeColorToElSauzal);
    var laMatanza = municipalitiesTenerife.getElementById("La Matanza");
    laMatanza.addEventListener("mouseover", changeColorToLaMatanza);
    var laVictoria = municipalitiesTenerife.getElementById("La Victoria");
    laVictoria.addEventListener("mouseover", changeColorToLaVictoria);
    var santaUrsula = municipalitiesTenerife.getElementById("Santa Úrsula");
    santaUrsula.addEventListener("mouseover", changeColorToSantaUrsula);
    var puertoDeLaCruz = municipalitiesTenerife.getElementById("Puerto de la Cruz");
    puertoDeLaCruz.addEventListener("mouseover", changeColorToPuertoDeLaCruz);
    var losRealejos = municipalitiesTenerife.getElementById("Los Realejos");
    losRealejos.addEventListener("mouseover", changeColorToLosRealejos);
    var sanJuanDeLaRambla = municipalitiesTenerife.getElementById("San Juan de la Rambla");
    sanJuanDeLaRambla.addEventListener("mouseover", changeColorToSanJuanDeLaRambla);
    var laGuancha = municipalitiesTenerife.getElementById("La Guancha");
    laGuancha.addEventListener("mouseover", changeColorToLaGuancha);
    var icodDeLosVinos = municipalitiesTenerife.getElementById("Icod de los Vinos");
    icodDeLosVinos.addEventListener("mouseover", changeColorToIcodDeLosVinos);
    var garachico = municipalitiesTenerife.getElementById("Garachico");
    garachico.addEventListener("mouseover", changeColorToGarachico);
    var elTanque = municipalitiesTenerife.getElementById("El Tanque");
    elTanque.addEventListener("mouseover", changeColorToElTanque);
    var losSilos = municipalitiesTenerife.getElementById("Los Silos");
    losSilos.addEventListener("mouseover", changeColorToLosSilos);
    var buenaVistaDelNorte = municipalitiesTenerife.getElementById("Buenavista del Norte");
    buenaVistaDelNorte.addEventListener("mouseover", changeColorToBuenaVistaDelNorte);
    var santiagoDelTeide = municipalitiesTenerife.getElementById("Santiago del Teide");
    santiagoDelTeide.addEventListener("mouseover", changeColorToSantiagoDelTeide);
    var guiaDeIsora = municipalitiesTenerife.getElementById("Guía de Isora");
    guiaDeIsora.addEventListener("mouseover", changeColorToGuiaDeIsora);
    var candelaria = municipalitiesTenerife.getElementById("Candelaria");
    candelaria.addEventListener("mouseover", changeColorToCandelaria);
    var arafo = municipalitiesTenerife.getElementById("Arafo");
    arafo.addEventListener("mouseover", changeColorToArafo);
    var guimar = municipalitiesTenerife.getElementById("Güímar");
    guimar.addEventListener("mouseover", changeColorToGuimar);
    var fasnia = municipalitiesTenerife.getElementById("Fasnia");
    fasnia.addEventListener("mouseover", changeColorToFasnia);
    var arico = municipalitiesTenerife.getElementById("Arico");
    arico.addEventListener("mouseover", changeColorToArico);
    var granadillaDeAbona = municipalitiesTenerife.getElementById("Granadilla");
    granadillaDeAbona.addEventListener("mouseover", changeColorToGranadilla);
    var sanMiguelDeAbona = municipalitiesTenerife.getElementById("San Miguel de Abona");
    sanMiguelDeAbona.addEventListener("mouseover", changeColorToSanMiguel);
    var arona = municipalitiesTenerife.getElementById("Arona");
    arona.addEventListener("mouseover", changeColorToArona);
    var vilaflor = municipalitiesTenerife.getElementById("Vilaflor");
    vilaflor.addEventListener("mouseover", changeColorToVilaflor);
    var adeje = municipalitiesTenerife.getElementById("Adeje");
    adeje.addEventListener("mouseover", changeColorToAdeje);
    var laOrotava = municipalitiesTenerife.getElementById("La Orotava");
    laOrotava.addEventListener("mouseover", changeColorToLaOrotava);
    
    var municipalitiesGranCanaria = document.getElementById("municipalities-gran-canaria").contentDocument;
    municipalitiesGranCanaria.addEventListener("click", resetColorToGranCanaria);
    var lasPalmas = municipalitiesGranCanaria.getElementById("Las Palmas de Gran Canaria");
    lasPalmas.addEventListener("mouseover", changeColorToLasPalmas);
    var telde = municipalitiesGranCanaria.getElementById("Telde");
    telde.addEventListener("mouseover", changeColorToTelde);
    var galdar = municipalitiesGranCanaria.getElementById("Gáldar");
    galdar.addEventListener("mouseover", changeColorToGaldar);
    var agaete = municipalitiesGranCanaria.getElementById("Agaete");
    agaete.addEventListener("mouseover", changeColorToAgaete);
    var sanBartolome = municipalitiesGranCanaria.getElementById("San Bartolomé de Tirajana");
    sanBartolome.addEventListener("mouseover", changeColorToSanBartolome);
    var mogan = municipalitiesGranCanaria.getElementById("Mogán");
    mogan.addEventListener("mouseover", changeColorToMogan);
    var ingenio = municipalitiesGranCanaria.getElementById("Ingenio");
    ingenio.addEventListener("mouseover", changeColorToIngenio);
    var aguimes = municipalitiesGranCanaria.getElementById("Agüimes");
    aguimes.addEventListener("mouseover", changeColorToAguimes);
    var santaLucia = municipalitiesGranCanaria.getElementById("Santa Lucía de Tirajana");
    santaLucia.addEventListener("mouseover", changeColorToSantaLucia);
    var arucas = municipalitiesGranCanaria.getElementById("Arucas");
    arucas.addEventListener("mouseover", changeColorToArucas);
    var firgas = municipalitiesGranCanaria.getElementById("Firgas");
    firgas.addEventListener("mouseover", changeColorToFirgas);
    var moya = municipalitiesGranCanaria.getElementById("Moya");
    moya.addEventListener("mouseover", changeColorToMoya);
    var guia = municipalitiesGranCanaria.getElementById("Santa María de Guía de Gran Canaria");
    guia.addEventListener("mouseover", changeColorToGuia);
    var artenara = municipalitiesGranCanaria.getElementById("Artenara");
    artenara.addEventListener("mouseover", changeColorToArtenara);
    var tejeda = municipalitiesGranCanaria.getElementById("Tejeda");
    tejeda.addEventListener("mouseover", changeColorToTejeda);
    var laAldea = municipalitiesGranCanaria.getElementById("San Nicolás de Tolentino");
    laAldea.addEventListener("mouseover", changeColorToLaAldea);
    var valleseco = municipalitiesGranCanaria.getElementById("Valleseco");
    valleseco.addEventListener("mouseover", changeColorToValleseco);
    var teror = municipalitiesGranCanaria.getElementById("Teror");
    teror.addEventListener("mouseover", changeColorToTeror);
    var santaBrigida = municipalitiesGranCanaria.getElementById("Santa Brígida");
    santaBrigida.addEventListener("mouseover", changeColorToSantaBrigida);
    var sanMateo = municipalitiesGranCanaria.getElementById("Vega de San Mateo");
    sanMateo.addEventListener("mouseover", changeColorToSanMateo);
    var valsequillo = municipalitiesGranCanaria.getElementById("Valsequillo de Gran Canaria");
    valsequillo.addEventListener("mouseover", changeColorToValsequillo);

    var municipalitiesFuerteventura = document.getElementById("municipalities-fuerteventura").contentDocument;
    municipalitiesFuerteventura.addEventListener("click", resetColorToFuerteventura);
    var laOliva = municipalitiesFuerteventura.getElementById("La Oliva");
    laOliva.addEventListener("mouseover", changeColorToLaOliva);
    var pajara = municipalitiesFuerteventura.getElementById("Pájara");
    pajara.addEventListener("mouseover", changeColorToPajara);
    var puertoDelRosario = municipalitiesFuerteventura.getElementById("Puerto del Rosario");
    puertoDelRosario.addEventListener("mouseover", changeColorToPuertoDelRosario);
    var betancuria = municipalitiesFuerteventura.getElementById("Betancuria");
    betancuria.addEventListener("mouseover", changeColorToBetancuria);
    var antigua = municipalitiesFuerteventura.getElementById("Antigua");
    antigua.addEventListener("mouseover", changeColorToAntigua);
    var tuineje = municipalitiesFuerteventura.getElementById("Tuineje");
    tuineje.addEventListener("mouseover", changeColorToTuineje);

    var municipalitiesLanzarote = document.getElementById("municipalities-lanzarote").contentDocument;
    municipalitiesLanzarote.addEventListener("click", resetColorToLanzarote);
    var arrecife = municipalitiesLanzarote.getElementById("Arrecife");
    arrecife.addEventListener("mouseover", changeColorToArrecife);
    var sanBartolomeL = municipalitiesLanzarote.getElementById("San Bartolomé");
    sanBartolomeL.addEventListener("mouseover", changeColorToSanBartolomeL);
    var tias = municipalitiesLanzarote.getElementById("Tías");
    tias.addEventListener("mouseover", changeColorToTias);
    var haria = municipalitiesLanzarote.getElementById("Haría");
    haria.addEventListener("mouseover", changeColorToHaria);
    var teguise = municipalitiesLanzarote.getElementById("Teguise");
    teguise.addEventListener("mouseover", changeColorToTeguise);
    var tinajo = municipalitiesLanzarote.getElementById("Tinajo");
    tinajo.addEventListener("mouseover", changeColorToTinajo);
    var yaiza = municipalitiesLanzarote.getElementById("Yaiza");
    yaiza.addEventListener("mouseover", changeColorToYaiza);

    var municipalitiesLaPalma = document.getElementById("municipalities-la-palma").contentDocument;
    municipalitiesLaPalma.addEventListener("click", resetColorToLaPalma);
    var tijarafe = municipalitiesLaPalma.getElementById("Tijarafe");
    tijarafe.addEventListener("mouseover", changeColorToTijarafe);
    var puntagorda = municipalitiesLaPalma.getElementById("Puntagorda");
    puntagorda.addEventListener("mouseover", changeColorToPuntagorda);
    var garafia = municipalitiesLaPalma.getElementById("Garafía");
    garafia.addEventListener("mouseover", changeColorToGarafia);
    var barlovento = municipalitiesLaPalma.getElementById("Barlovento");
    barlovento.addEventListener("mouseover", changeColorToBarlovento);
    var sanAndresYSauces = municipalitiesLaPalma.getElementById("San Andrés y Sauces");
    sanAndresYSauces.addEventListener("mouseover", changeColorToSanAndresYSauces);
    var puntallana = municipalitiesLaPalma.getElementById("Puntallana");
    puntallana.addEventListener("mouseover", changeColorToPuntallana);
    var santaCruzDeLaPalma = municipalitiesLaPalma.getElementById("Santa Cruz de La Palma");
    santaCruzDeLaPalma.addEventListener("mouseover", changeColorToSantaCruzDeLaPalma);
    var elPaso = municipalitiesLaPalma.getElementById("El Paso");
    elPaso.addEventListener("mouseover", changeColorToElPaso);
    var breñaAlta = municipalitiesLaPalma.getElementById("Breña Alta");
    breñaAlta.addEventListener("mouseover", changeColorToBreñaAlta);
    var breñaBaja = municipalitiesLaPalma.getElementById("Breña Baja");
    breñaBaja.addEventListener("mouseover", changeColorToBreñaBaja);
    var villaDeMazo = municipalitiesLaPalma.getElementById("Villa de Mazo");
    villaDeMazo.addEventListener("mouseover", changeColorToVillaDeMazo);
    var tazacorte = municipalitiesLaPalma.getElementById("Tazacorte");
    tazacorte.addEventListener("mouseover", changeColorToTazacorte);
    var losLlanosDeAridane = municipalitiesLaPalma.getElementById("Los Llanos de Aridane");
    losLlanosDeAridane.addEventListener("mouseover", changeColorToLosLlanosDeAridane);
    var fuencaliente = municipalitiesLaPalma.getElementById("Fuencaliente");
    fuencaliente.addEventListener("mouseover", changeColorToFuencaliente);
    
    var municipalitiesLaGomera = document.getElementById("municipalities-la-gomera").contentDocument;
    municipalitiesLaGomera.addEventListener("click", resetColorToLaGomera);
    var vallehermoso = municipalitiesLaGomera.getElementById("Vallehermoso");
    vallehermoso.addEventListener("mouseover", changeColorToVallehermoso);
    var valleGranRey = municipalitiesLaGomera.getElementById("Valle Gran Rey");
    valleGranRey.addEventListener("mouseover", changeColorToValleGranRey);
    var agulo = municipalitiesLaGomera.getElementById("Agulo");
    agulo.addEventListener("mouseover", changeColorToAgulo);
    var hermigua = municipalitiesLaGomera.getElementById("Hermigua");
    hermigua.addEventListener("mouseover", changeColorToHermigua);
    var alajero = municipalitiesLaGomera.getElementById("Alajeró");
    alajero.addEventListener("mouseover", changeColorToAlajero);
    var sanSebastian = municipalitiesLaGomera.getElementById("San Sebastián de la Gomera");
    sanSebastian.addEventListener("mouseover", changeColorToSanSebastian);
    
    var municipalitiesElHierro = document.getElementById("municipalities-el-hierro").contentDocument;
    municipalitiesElHierro.addEventListener("click", resetColorToElHierro);
    var frontera = municipalitiesElHierro.getElementById("Frontera");
    frontera.addEventListener("mouseover", changeColorToFrontera);
    var valverde = municipalitiesElHierro.getElementById("Valverde");
    valverde.addEventListener("mouseover", changeColorToValverde);
    var elPinar = municipalitiesElHierro.getElementById("El Pinar");
    elPinar.addEventListener("mouseover", changeColorToElPinar);
}
function resetColorToTenerife(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var laLaguna = municipalitiesTenerife.getElementById("San Cristóbal de la Laguna");
    var santaCruz = municipalitiesTenerife.getElementById("Santa Cruz de Tenerife");
    var tegueste = municipalitiesTenerife.getElementById("Tegueste");
    var elRosario = municipalitiesTenerife.getElementById("El Rosario");
    var tacoronte = municipalitiesTenerife.getElementById("Tacoronte");
    var elSauzal = municipalitiesTenerife.getElementById("El Sauzal");
    var laMatanza = municipalitiesTenerife.getElementById("La Matanza");
    var laVictoria = municipalitiesTenerife.getElementById("La Victoria");
    var santaUrsula = municipalitiesTenerife.getElementById("Santa Úrsula");
    var puertoDeLaCruz = municipalitiesTenerife.getElementById("Puerto de la Cruz");
    var losRealejos = municipalitiesTenerife.getElementById("Los Realejos");
    var sanJuanDeLaRambla = municipalitiesTenerife.getElementById("San Juan de la Rambla");
    var laGuancha = municipalitiesTenerife.getElementById("La Guancha");
    var icodDeLosVinos = municipalitiesTenerife.getElementById("Icod de los Vinos");
    var garachico = municipalitiesTenerife.getElementById("Garachico");
    var elTanque = municipalitiesTenerife.getElementById("El Tanque");
    var losSilos = municipalitiesTenerife.getElementById("Los Silos");
    var buenaVistaDelNorte = municipalitiesTenerife.getElementById("Buenavista del Norte");
    var santiagoDelTeide = municipalitiesTenerife.getElementById("Santiago del Teide");
    var guiaDeIsora = municipalitiesTenerife.getElementById("Guía de Isora");
    var candelaria = municipalitiesTenerife.getElementById("Candelaria");
    var arafo = municipalitiesTenerife.getElementById("Arafo");
    var guimar = municipalitiesTenerife.getElementById("Güímar");
    var fasnia = municipalitiesTenerife.getElementById("Fasnia");
    var arico = municipalitiesTenerife.getElementById("Arico");
    var granadillaDeAbona = municipalitiesTenerife.getElementById("Granadilla");
    var sanMiguelDeAbona = municipalitiesTenerife.getElementById("San Miguel de Abona");
    var arona = municipalitiesTenerife.getElementById("Arona");
    var vilaflor = municipalitiesTenerife.getElementById("Vilaflor");
    var adeje = municipalitiesTenerife.getElementById("Adeje");
    var laOrotava = municipalitiesTenerife.getElementById("La Orotava");
    laLaguna.style.fill = "yellow";
    santaCruz.style.fill = "yellow";
    tegueste.style.fill = "yellow";
    elRosario.style.fill = "yellow";
    tacoronte.style.fill = "yellow";
    elSauzal.style.fill = "yellow";
    laMatanza.style.fill = "yellow";
    laVictoria.style.fill = "yellow";
    santaUrsula.style.fill = "yellow";
    puertoDeLaCruz.style.fill = "yellow";
    losRealejos.style.fill = "yellow";
    sanJuanDeLaRambla.style.fill = "yellow";
    laGuancha.style.fill = "yellow";
    icodDeLosVinos.style.fill = "yellow";
    garachico.style.fill = "yellow";
    elTanque.style.fill = "yellow";
    losSilos.style.fill = "yellow";
    buenaVistaDelNorte.style.fill = "yellow";
    santiagoDelTeide.style.fill = "yellow";
    guiaDeIsora.style.fill = "yellow";
    candelaria.style.fill = "yellow";
    arafo.style.fill = "yellow";
    guimar.style.fill = "yellow";
    fasnia.style.fill = "yellow";
    arico.style.fill = "yellow";
    granadillaDeAbona.style.fill = "yellow";
    sanMiguelDeAbona.style.fill = "yellow";
    arona.style.fill = "yellow";
    vilaflor.style.fill = "yellow";
    adeje.style.fill = "yellow";
    laOrotava.style.fill = "yellow";
}
function changeColorToLaLaguna(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var laLaguna = municipalitiesTenerife.getElementById("San Cristóbal de la Laguna");
    if(municipalitiesAndWeightTenerife[0].overWeight == 1){
        laLaguna.style.fill = "red";
    } else {
        laLaguna.style.fill = "green";
    }
}
function changeColorToSantaCruz(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var santaCruz = municipalitiesTenerife.getElementById("Santa Cruz de Tenerife");
    if(municipalitiesAndWeightTenerife[1].overWeight == 1){
        santaCruz.style.fill = "red";
    } else {
        santaCruz.style.fill = "green";
    }
}
function changeColorToTegueste(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var tegueste = municipalitiesTenerife.getElementById("Tegueste");
    if(municipalitiesAndWeightTenerife[2].overWeight == 1){
        tegueste.style.fill = "red";
    } else {
        tegueste.style.fill = "green";
    }
}
function changeColorToElRosario(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var elRosario = municipalitiesTenerife.getElementById("El Rosario");
    if(municipalitiesAndWeightTenerife[3].overWeight == 1){
        elRosario.style.fill = "red";
    } else {
        elRosario.style.fill = "green";
    }
}
function changeColorToTacoronte(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var tacoronte = municipalitiesTenerife.getElementById("Tacoronte");
    if(municipalitiesAndWeightTenerife[4].overWeight == 1){
        tacoronte.style.fill = "red";
    } else {
        tacoronte.style.fill = "green";
    }
}
function changeColorToElSauzal(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var elSauzal = municipalitiesTenerife.getElementById("El Sauzal");
    if(municipalitiesAndWeightTenerife[5].overWeight == 1){
        elSauzal.style.fill = "red";
    } else {
        elSauzal.style.fill = "green";
    }
}
function changeColorToLaMatanza(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var laMatanza = municipalitiesTenerife.getElementById("La Matanza");
    if(municipalitiesAndWeightTenerife[6].overWeight == 1){
        laMatanza.style.fill = "red";
    } else {
        laMatanza.style.fill = "green";
    }
}
function changeColorToLaVictoria(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var laVictoria = municipalitiesTenerife.getElementById("La Victoria");
    if(municipalitiesAndWeightTenerife[7].overWeight == 1){
        laVictoria.style.fill = "red";
    } else {
        laVictoria.style.fill = "green";
    }
}
function changeColorToSantaUrsula(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var santaUrsula = municipalitiesTenerife.getElementById("Santa Úrsula");
    if(municipalitiesAndWeightTenerife[8].overWeight == 1){
        santaUrsula.style.fill = "red";
    } else {
        santaUrsula.style.fill = "green";
    }
}
function changeColorToPuertoDeLaCruz(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var puertoDeLaCruz = municipalitiesTenerife.getElementById("Puerto de la Cruz");
    if(municipalitiesAndWeightTenerife[9].overWeight == 1){
        puertoDeLaCruz.style.fill = "red";
    } else {
        puertoDeLaCruz.style.fill = "green";
    }
}
function changeColorToLosRealejos(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var losRealejos = municipalitiesTenerife.getElementById("Los Realejos");
    if(municipalitiesAndWeightTenerife[10].overWeight == 1){
        losRealejos.style.fill = "red";
    } else {
        losRealejos.style.fill = "green";
    }
}
function changeColorToSanJuanDeLaRambla(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var sanJuanDeLaRambla = municipalitiesTenerife.getElementById("San Juan de la Rambla");
    if(municipalitiesAndWeightTenerife[11].overWeight == 1){
        sanJuanDeLaRambla.style.fill = "red";
    } else {
        sanJuanDeLaRambla.style.fill = "green";
    }
}
function changeColorToLaGuancha(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var laGuancha = municipalitiesTenerife.getElementById("La Guancha");
    if(municipalitiesAndWeightTenerife[12].overWeight == 1){
        laGuancha.style.fill = "red";
    } else {
        laGuancha.style.fill = "green";
    }
}
function changeColorToIcodDeLosVinos(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var icodDeLosVinos = municipalitiesTenerife.getElementById("Icod de los Vinos");
    if(municipalitiesAndWeightTenerife[13].overWeight == 1){
        icodDeLosVinos.style.fill = "red";
    } else {
        icodDeLosVinos.style.fill = "green";
    }
}
function changeColorToGarachico(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var garachico = municipalitiesTenerife.getElementById("Garachico");
    if(municipalitiesAndWeightTenerife[14].overWeight == 1){
        garachico.style.fill = "red";
    } else {
        garachico.style.fill = "green";
    }
}
function changeColorToElTanque(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var elTanque = municipalitiesTenerife.getElementById("El Tanque");
    if(municipalitiesAndWeightTenerife[15].overWeight == 1){
        elTanque.style.fill = "red";
    } else {
        elTanque.style.fill = "green";
    }
}
function changeColorToLosSilos(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var losSilos = municipalitiesTenerife.getElementById("Los Silos");
    if(municipalitiesAndWeightTenerife[16].overWeight == 1){
        losSilos.style.fill = "red";
    } else {
        losSilos.style.fill = "green";
    }
}
function changeColorToBuenaVistaDelNorte(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var buenaVistaDelNorte = municipalitiesTenerife.getElementById("Buenavista del Norte");
    if(municipalitiesAndWeightTenerife[17].overWeight == 1){
        buenaVistaDelNorte.style.fill = "red";
    } else {
        buenaVistaDelNorte.style.fill = "green";
    }
}
function changeColorToSantiagoDelTeide(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var santiagoDelTeide = municipalitiesTenerife.getElementById("Santiago del Teide");
    if(municipalitiesAndWeightTenerife[18].overWeight == 1){
        santiagoDelTeide.style.fill = "red";
    } else {
        santiagoDelTeide.style.fill = "green";
    }
}
function changeColorToGuiaDeIsora(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var guiaDeIsora = municipalitiesTenerife.getElementById("Guía de Isora");
    if(municipalitiesAndWeightTenerife[19].overWeight == 1){
        guiaDeIsora.style.fill = "red";
    } else {
        guiaDeIsora.style.fill = "green";
    }
}
function changeColorToCandelaria(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var candelaria = municipalitiesTenerife.getElementById("Candelaria");
    if(municipalitiesAndWeightTenerife[20].overWeight == 1){
        candelaria.style.fill = "red";
    } else {
        candelaria.style.fill = "green";
    }
}
function changeColorToArafo(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var arafo = municipalitiesTenerife.getElementById("Arafo");
    if(municipalitiesAndWeightTenerife[21].overWeight == 1){
        arafo.style.fill = "red";
    } else {
        arafo.style.fill = "green";
    }
}
function changeColorToGuimar(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var guimar = municipalitiesTenerife.getElementById("Güímar");
    if(municipalitiesAndWeightTenerife[22].overWeight == 1){
        guimar.style.fill = "red";
    } else {
        guimar.style.fill = "green";
    }
}
function changeColorToFasnia(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var fasnia = municipalitiesTenerife.getElementById("Fasnia");
    if(municipalitiesAndWeightTenerife[23].overWeight == 1){
        fasnia.style.fill = "red";
    } else {
        fasnia.style.fill = "green";
    }
}
function changeColorToArico(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var arico = municipalitiesTenerife.getElementById("Arico");
    if(municipalitiesAndWeightTenerife[24].overWeight == 1){
        arico.style.fill = "red";
    } else {
        arico.style.fill = "green";
    }
}
function changeColorToGranadilla(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var granadilla = municipalitiesTenerife.getElementById("Granadilla");
    if(municipalitiesAndWeightTenerife[25].overWeight == 1){
        granadilla.style.fill = "red";
    } else {
        granadilla.style.fill = "green";
    }
}
function changeColorToSanMiguel(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var sanMiguel = municipalitiesTenerife.getElementById("San Miguel de Abona");
    if(municipalitiesAndWeightTenerife[26].overWeight == 1){
        sanMiguel.style.fill = "red";
    } else {
        sanMiguel.style.fill = "green";
    }
}
function changeColorToArona(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var arona = municipalitiesTenerife.getElementById("Arona");
    if(municipalitiesAndWeightTenerife[27].overWeight == 1){
        arona.style.fill = "red";
    } else {
        arona.style.fill = "green";
    }
}
function changeColorToVilaflor(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var vilaflor = municipalitiesTenerife.getElementById("Vilaflor");
    if(municipalitiesAndWeightTenerife[28].overWeight == 1){
        vilaflor.style.fill = "red";
    } else {
        vilaflor.style.fill = "green";
    }
}
function changeColorToAdeje(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var adeje = municipalitiesTenerife.getElementById("Adeje");
    if(municipalitiesAndWeightTenerife[29].overWeight == 1){
        adeje.style.fill = "red";
    } else {
        adeje.style.fill = "green";
    }
}
function changeColorToLaOrotava(){
    var municipalitiesTenerife = document.getElementById("municipalities-tenerife").contentDocument;
    var laOrotava = municipalitiesTenerife.getElementById("La Orotava");
    if(municipalitiesAndWeightTenerife[30].overWeight == 1){
        laOrotava.style.fill = "red";
    } else {
        laOrotava.style.fill = "green";
    }
}
function resetColorToGranCanaria(){
    var municipalitiesGranCanaria = document.getElementById("municipalities-gran-canaria").contentDocument;
    var lasPalmas = municipalitiesGranCanaria.getElementById("Las Palmas de Gran Canaria");
    var telde = municipalitiesGranCanaria.getElementById("Telde");
    var galdar = municipalitiesGranCanaria.getElementById("Gáldar");
    var agaete = municipalitiesGranCanaria.getElementById("Agaete");
    var sanBartolome = municipalitiesGranCanaria.getElementById("San Bartolomé de Tirajana");
    var mogan = municipalitiesGranCanaria.getElementById("Mogán");
    var ingenio = municipalitiesGranCanaria.getElementById("Ingenio");
    var aguimes = municipalitiesGranCanaria.getElementById("Agüimes");
    var santaLucia = municipalitiesGranCanaria.getElementById("Santa Lucía de Tirajana");
    var arucas = municipalitiesGranCanaria.getElementById("Arucas");
    var firgas = municipalitiesGranCanaria.getElementById("Firgas");
    var moya = municipalitiesGranCanaria.getElementById("Moya");
    var guia = municipalitiesGranCanaria.getElementById("Santa María de Guía de Gran Canaria");
    var artenara = municipalitiesGranCanaria.getElementById("Artenara");
    var tejeda = municipalitiesGranCanaria.getElementById("Tejeda");
    var laAldea = municipalitiesGranCanaria.getElementById("San Nicolás de Tolentino");
    var valleseco = municipalitiesGranCanaria.getElementById("Valleseco");
    var teror = municipalitiesGranCanaria.getElementById("Teror");
    var santaBrigida = municipalitiesGranCanaria.getElementById("Santa Brígida");
    var sanMateo = municipalitiesGranCanaria.getElementById("Vega de San Mateo");
    var valsequillo = municipalitiesGranCanaria.getElementById("Valsequillo de Gran Canaria");
    lasPalmas.style.fill = "yellow";
    telde.style.fill = "yellow";
    galdar.style.fill = "yellow";
    agaete.style.fill = "yellow";
    sanBartolome.style.fill = "yellow";
    mogan.style.fill = "yellow";
    ingenio.style.fill = "yellow";
    aguimes.style.fill = "yellow";
    santaLucia.style.fill = "yellow";
    arucas.style.fill = "yellow";
    firgas.style.fill = "yellow";
    moya.style.fill = "yellow";
    guia.style.fill = "yellow";
    artenara.style.fill = "yellow";
    tejeda.style.fill = "yellow";
    laAldea.style.fill = "yellow";
    valleseco.style.fill = "yellow";
    teror.style.fill = "yellow";
    santaBrigida.style.fill = "yellow";
    sanMateo.style.fill = "yellow";
    valsequillo.style.fill = "yellow";
}
function changeColorToLasPalmas(){
    var municipalitiesGranCanaria = document.getElementById("municipalities-gran-canaria").contentDocument;
    var lasPalmas = municipalitiesGranCanaria.getElementById("Las Palmas de Gran Canaria");
    if(municipalitiesAndWeightGranCanaria[0].overWeight == 1){
        lasPalmas.style.fill = "red";
    } else {
        lasPalmas.style.fill = "green";
    }
}
function changeColorToTelde(){
    var municipalitiesGranCanaria = document.getElementById("municipalities-gran-canaria").contentDocument;
    var telde = municipalitiesGranCanaria.getElementById("Telde");
    if(municipalitiesAndWeightGranCanaria[1].overWeight == 1){
        telde.style.fill = "red";
    } else {
        telde.style.fill = "green";
    }
}
function changeColorToGaldar(){
    var municipalitiesGranCanaria = document.getElementById("municipalities-gran-canaria").contentDocument;
    var galdar = municipalitiesGranCanaria.getElementById("Gáldar");
    if(municipalitiesAndWeightGranCanaria[2].overWeight == 1){
        galdar.style.fill = "red";
    } else {
        galdar.style.fill = "green";
    }
}
function changeColorToAgaete(){
    var municipalitiesGranCanaria = document.getElementById("municipalities-gran-canaria").contentDocument;
    var agaete = municipalitiesGranCanaria.getElementById("Agaete");
    if(municipalitiesAndWeightGranCanaria[3].overWeight == 1){
        agaete.style.fill = "red";
    } else {
        agaete.style.fill = "green";
    }
}
function changeColorToSanBartolome(){
    var municipalitiesGranCanaria = document.getElementById("municipalities-gran-canaria").contentDocument;
    var sanBartolome = municipalitiesGranCanaria.getElementById("San Bartolomé de Tirajana");
    if(municipalitiesAndWeightGranCanaria[4].overWeight == 1){
        sanBartolome.style.fill = "red";
    } else {
        sanBartolome.style.fill = "green";
    }
}
function changeColorToMogan(){
    var municipalitiesGranCanaria = document.getElementById("municipalities-gran-canaria").contentDocument;
    var mogan = municipalitiesGranCanaria.getElementById("Mogán");
    if(municipalitiesAndWeightGranCanaria[5].overWeight == 1){
        mogan.style.fill = "red";
    } else {
        mogan.style.fill = "green";
    }
}
function changeColorToIngenio(){
    var municipalitiesGranCanaria = document.getElementById("municipalities-gran-canaria").contentDocument;
    var ingenio = municipalitiesGranCanaria.getElementById("Ingenio");
    if(municipalitiesAndWeightGranCanaria[6].overWeight == 1){
        ingenio.style.fill = "red";
    } else {
        ingenio.style.fill = "green";
    }
}
function changeColorToAguimes(){
    var municipalitiesGranCanaria = document.getElementById("municipalities-gran-canaria").contentDocument;
    var aguimes = municipalitiesGranCanaria.getElementById("Agüimes");
    if(municipalitiesAndWeightGranCanaria[7].overWeight == 1){
        aguimes.style.fill = "red";
    } else {
        aguimes.style.fill = "green";
    }
}
function changeColorToSantaLucia(){
    var municipalitiesGranCanaria = document.getElementById("municipalities-gran-canaria").contentDocument;
    var santaLucia = municipalitiesGranCanaria.getElementById("Santa Lucía de Tirajana");
    if(municipalitiesAndWeightGranCanaria[8].overWeight == 1){
        santaLucia.style.fill = "red";
    } else {
        santaLucia.style.fill = "green";
    }
}
function changeColorToArucas(){
    var municipalitiesGranCanaria = document.getElementById("municipalities-gran-canaria").contentDocument;
    var arucas = municipalitiesGranCanaria.getElementById("Arucas");
    if(municipalitiesAndWeightGranCanaria[9].overWeight == 1){
        arucas.style.fill = "red";
    } else {
        arucas.style.fill = "green";
    }
}
function changeColorToFirgas(){
    var municipalitiesGranCanaria = document.getElementById("municipalities-gran-canaria").contentDocument;
    var firgas = municipalitiesGranCanaria.getElementById("Firgas");
    if(municipalitiesAndWeightGranCanaria[10].overWeight == 1){
        firgas.style.fill = "red";
    } else {
        firgas.style.fill = "green";
    }
}
function changeColorToMoya(){
    var municipalitiesGranCanaria = document.getElementById("municipalities-gran-canaria").contentDocument;
    var moya = municipalitiesGranCanaria.getElementById("Moya");
    if(municipalitiesAndWeightGranCanaria[11].overWeight == 1){
        moya.style.fill = "red";
    } else {
        moya.style.fill = "green";
    }
}
function changeColorToGuia(){
    var municipalitiesGranCanaria = document.getElementById("municipalities-gran-canaria").contentDocument;
    var guia = municipalitiesGranCanaria.getElementById("Santa María de Guía de Gran Canaria");
    if(municipalitiesAndWeightGranCanaria[12].overWeight == 1){
        guia.style.fill = "red";
    } else {
        guia.style.fill = "green";
    }
}
function changeColorToArtenara(){
    var municipalitiesGranCanaria = document.getElementById("municipalities-gran-canaria").contentDocument;
    var artenara = municipalitiesGranCanaria.getElementById("Artenara");
    if(municipalitiesAndWeightGranCanaria[13].overWeight == 1){
        artenara.style.fill = "red";
    } else {
        artenara.style.fill = "green";
    }
}
function changeColorToTejeda(){
    var municipalitiesGranCanaria = document.getElementById("municipalities-gran-canaria").contentDocument;
    var tejeda = municipalitiesGranCanaria.getElementById("Tejeda");
    if(municipalitiesAndWeightGranCanaria[14].overWeight == 1){
        tejeda.style.fill = "red";
    } else {
        tejeda.style.fill = "green";
    }
}
function changeColorToLaAldea(){
    var municipalitiesGranCanaria = document.getElementById("municipalities-gran-canaria").contentDocument;
    var laAldea = municipalitiesGranCanaria.getElementById("San Nicolás de Tolentino");
    if(municipalitiesAndWeightGranCanaria[15].overWeight == 1){
        laAldea.style.fill = "red";
    } else {
        laAldea.style.fill = "green";
    }
}
function changeColorToValleseco(){
    var municipalitiesGranCanaria = document.getElementById("municipalities-gran-canaria").contentDocument;
    var valleseco = municipalitiesGranCanaria.getElementById("Valleseco");
    if(municipalitiesAndWeightGranCanaria[16].overWeight == 1){
        valleseco.style.fill = "red";
    } else {
        valleseco.style.fill = "green";
    }
}
function changeColorToTeror(){
    var municipalitiesGranCanaria = document.getElementById("municipalities-gran-canaria").contentDocument;
    var teror = municipalitiesGranCanaria.getElementById("Teror");
    if(municipalitiesAndWeightGranCanaria[17].overWeight == 1){
        teror.style.fill = "red";
    } else {
        teror.style.fill = "green";
    }
}
function changeColorToSantaBrigida(){
    var municipalitiesGranCanaria = document.getElementById("municipalities-gran-canaria").contentDocument;
    var santaBrigida = municipalitiesGranCanaria.getElementById("Santa Brígida");
    if(municipalitiesAndWeightGranCanaria[18].overWeight == 1){
        santaBrigida.style.fill = "red";
    } else {
        santaBrigida.style.fill = "green";
    }
}
function changeColorToSanMateo(){
    var municipalitiesGranCanaria = document.getElementById("municipalities-gran-canaria").contentDocument;
    var sanMateo = municipalitiesGranCanaria.getElementById("Vega de San Mateo");
    if(municipalitiesAndWeightGranCanaria[19].overWeight == 1){
        sanMateo.style.fill = "red";
    } else {
        sanMateo.style.fill = "green";
    }
}
function changeColorToValsequillo(){
    var municipalitiesGranCanaria = document.getElementById("municipalities-gran-canaria").contentDocument;
    var valsequillo = municipalitiesGranCanaria.getElementById("Valsequillo de Gran Canaria");
    if(municipalitiesAndWeightGranCanaria[20].overWeight == 1){
        valsequillo.style.fill = "red";
    } else {
        valsequillo.style.fill = "green";
    }
}
function resetColorToFuerteventura(){
    var municipalitiesFuerteventura = document.getElementById("municipalities-fuerteventura").contentDocument;
    var laOliva = municipalitiesFuerteventura.getElementById("La Oliva");
    var pajara = municipalitiesFuerteventura.getElementById("Pájara");
    var puertoDelRosario = municipalitiesFuerteventura.getElementById("Puerto del Rosario");
    var betancuria = municipalitiesFuerteventura.getElementById("Betancuria");
    var antigua = municipalitiesFuerteventura.getElementById("Antigua");
    var tuineje = municipalitiesFuerteventura.getElementById("Tuineje");
    laOliva.style.fill = "yellow";
    pajara.style.fill = "yellow";
    puertoDelRosario.style.fill = "yellow";
    betancuria.style.fill = "yellow";
    antigua.style.fill = "yellow";
    tuineje.style.fill = "yellow";
}
function changeColorToLaOliva(){
    var municipalitiesFuerteventura = document.getElementById("municipalities-fuerteventura").contentDocument;
    var laOliva = municipalitiesFuerteventura.getElementById("La Oliva");
    if(municipalitiesAndWeightFuerteventura[0].overWeight == 1){
        laOliva.style.fill = "red";
    } else {
        laOliva.style.fill = "green";
    }
}
function changeColorToPajara(){
    var municipalitiesFuerteventura = document.getElementById("municipalities-fuerteventura").contentDocument;
    var pajara = municipalitiesFuerteventura.getElementById("Pájara");
    if(municipalitiesAndWeightFuerteventura[1].overWeight == 1){
        pajara.style.fill = "red";
    } else {
        pajara.style.fill = "green";
    }
}
function changeColorToPuertoDelRosario(){
    var municipalitiesFuerteventura = document.getElementById("municipalities-fuerteventura").contentDocument;
    var puertoDelRosario = municipalitiesFuerteventura.getElementById("Puerto del Rosario");
    if(municipalitiesAndWeightFuerteventura[2].overWeight == 1){
        puertoDelRosario.style.fill = "red";
    } else {
        puertoDelRosario.style.fill = "green";
    }
}
function changeColorToBetancuria(){
    var municipalitiesFuerteventura = document.getElementById("municipalities-fuerteventura").contentDocument;
    var betancuria = municipalitiesFuerteventura.getElementById("Betancuria");
    if(municipalitiesAndWeightFuerteventura[3].overWeight == 1){
        betancuria.style.fill = "red";
    } else {
        betancuria.style.fill = "green";
    }
}
function changeColorToAntigua(){
    var municipalitiesFuerteventura = document.getElementById("municipalities-fuerteventura").contentDocument;
    var antigua = municipalitiesFuerteventura.getElementById("Antigua");
    if(municipalitiesAndWeightFuerteventura[4].overWeight == 1){
        antigua.style.fill = "red";
    } else {
        antigua.style.fill = "green";
    }
}
function changeColorToTuineje(){
    var municipalitiesFuerteventura = document.getElementById("municipalities-fuerteventura").contentDocument;
    var tuineje = municipalitiesFuerteventura.getElementById("Tuineje");
    if(municipalitiesAndWeightFuerteventura[5].overWeight == 1){
        tuineje.style.fill = "red";
    } else {
        tuineje.style.fill = "green";
    }
}
function resetColorToLanzarote(){
    var municipalitiesLanzarote = document.getElementById("municipalities-lanzarote").contentDocument;
    var arrecife = municipalitiesLanzarote.getElementById("Arrecife");
    var sanBartolomeL = municipalitiesLanzarote.getElementById("San Bartolomé");
    var tias = municipalitiesLanzarote.getElementById("Tías");
    var haria = municipalitiesLanzarote.getElementById("Haría");
    var teguise = municipalitiesLanzarote.getElementById("Teguise");
    var tinajo = municipalitiesLanzarote.getElementById("Tinajo");
    var yaiza = municipalitiesLanzarote.getElementById("Yaiza");
    arrecife.style.fill = "yellow";
    sanBartolomeL.style.fill = "yellow";
    tias.style.fill = "yellow";
    haria.style.fill = "yellow";
    teguise.style.fill = "yellow";
    tinajo.style.fill = "yellow";
    yaiza.style.fill = "yellow";
}
function changeColorToArrecife(){
    var municipalitiesLanzarote = document.getElementById("municipalities-lanzarote").contentDocument;
    var arrecife = municipalitiesLanzarote.getElementById("Arrecife");
    if(municipalitiesAndWeightLanzarote[0].overWeight == 1){
        arrecife.style.fill = "red";
    } else {
        arrecife.style.fill = "green";
    }
}
function changeColorToSanBartolomeL(){
    var municipalitiesLanzarote = document.getElementById("municipalities-lanzarote").contentDocument;
    var sanBartolomeL = municipalitiesLanzarote.getElementById("San Bartolomé");
    if(municipalitiesAndWeightLanzarote[1].overWeight == 1){
        sanBartolomeL.style.fill = "red";
    } else {
        sanBartolomeL.style.fill = "green";
    }
}
function changeColorToTias(){
    var municipalitiesLanzarote = document.getElementById("municipalities-lanzarote").contentDocument;
    var tias = municipalitiesLanzarote.getElementById("Tías");
    if(municipalitiesAndWeightLanzarote[2].overWeight == 1){
        tias.style.fill = "red";
    } else {
        tias.style.fill = "green";
    }
}
function changeColorToHaria(){
    var municipalitiesLanzarote = document.getElementById("municipalities-lanzarote").contentDocument;
    var haria = municipalitiesLanzarote.getElementById("Haría");
    if(municipalitiesAndWeightLanzarote[3].overWeight == 1){
        haria.style.fill = "red";
    } else {
        haria.style.fill = "green";
    }
}
function changeColorToTeguise(){
    var municipalitiesLanzarote = document.getElementById("municipalities-lanzarote").contentDocument;
    var teguise = municipalitiesLanzarote.getElementById("Teguise");
    if(municipalitiesAndWeightLanzarote[4].overWeight == 1){
        teguise.style.fill = "red";
    } else {
        teguise.style.fill = "green";
    }
}
function changeColorToTinajo(){
    var municipalitiesLanzarote = document.getElementById("municipalities-lanzarote").contentDocument;
    var tinajo = municipalitiesLanzarote.getElementById("Tinajo");
    if(municipalitiesAndWeightLanzarote[5].overWeight == 1){
        tinajo.style.fill = "red";
    } else {
        tinajo.style.fill = "green";
    }
}
function changeColorToYaiza(){
    var municipalitiesLanzarote = document.getElementById("municipalities-lanzarote").contentDocument;
    var yaiza = municipalitiesLanzarote.getElementById("Yaiza");
    if(municipalitiesAndWeightLanzarote[6].overWeight == 1){
        yaiza.style.fill = "red";
    } else {
        yaiza.style.fill = "green";
    }
}
function resetColorToLaPalma(){
    var municipalitiesLaPalma = document.getElementById("municipalities-la-palma").contentDocument;
    var tijarafe = municipalitiesLaPalma.getElementById("Tijarafe");
    var puntagorda = municipalitiesLaPalma.getElementById("Puntagorda");
    var garafia = municipalitiesLaPalma.getElementById("Garafía");
    var barlovento = municipalitiesLaPalma.getElementById("Barlovento");
    var sanAndresYSauces = municipalitiesLaPalma.getElementById("San Andrés y Sauces");
    var puntallana = municipalitiesLaPalma.getElementById("Puntallana");
    var santaCruzDeLaPalma = municipalitiesLaPalma.getElementById("Santa Cruz de La Palma");
    var elPaso = municipalitiesLaPalma.getElementById("El Paso");
    var breñaAlta = municipalitiesLaPalma.getElementById("Breña Alta");
    var breñaBaja = municipalitiesLaPalma.getElementById("Breña Baja");
    var villaDeMazo = municipalitiesLaPalma.getElementById("Villa de Mazo");
    var tazacorte = municipalitiesLaPalma.getElementById("Tazacorte");
    var losLlanosDeAridane = municipalitiesLaPalma.getElementById("Los Llanos de Aridane");
    var fuencaliente = municipalitiesLaPalma.getElementById("Fuencaliente");
    tijarafe.style.fill = "yellow";
    puntagorda.style.fill = "yellow";
    garafia.style.fill = "yellow";
    barlovento.style.fill = "yellow";
    sanAndresYSauces.style.fill = "yellow";
    puntallana.style.fill = "yellow";
    santaCruzDeLaPalma.style.fill = "yellow";
    elPaso.style.fill = "yellow";
    breñaAlta.style.fill = "yellow";
    breñaBaja.style.fill = "yellow";
    villaDeMazo.style.fill = "yellow";
    tazacorte.style.fill = "yellow";
    losLlanosDeAridane.style.fill = "yellow";
    fuencaliente.style.fill = "yellow";
}
function changeColorToTijarafe(){
	var municipalitiesLaPalma = document.getElementById("municipalities-la-palma").contentDocument;
	var tijarafe = municipalitiesLaPalma.getElementById("Tijarafe");
	if(municipalitiesAndWeightLaPalma[0].overWeight == 1){
        	tijarafe.style.fill = "red";
    	} else {
        	tijarafe.style.fill = "green";
    	}
}
function changeColorToPuntagorda(){
	var municipalitiesLaPalma = document.getElementById("municipalities-la-palma").contentDocument;
	var puntagorda = municipalitiesLaPalma.getElementById("Puntagorda");
	if(municipalitiesAndWeightLaPalma[1].overWeight == 1){
        	puntagorda.style.fill = "red";
    	} else {
        	puntagorda.style.fill = "green";
    	}
}
function changeColorToGarafia(){
	var municipalitiesLaPalma = document.getElementById("municipalities-la-palma").contentDocument;
	var garafia = municipalitiesLaPalma.getElementById("Garafía");
	if(municipalitiesAndWeightLaPalma[2].overWeight == 1){
        	garafia.style.fill = "red";
    	} else {
        	garafia.style.fill = "green";
    	}
}
function changeColorToBarlovento(){
	var municipalitiesLaPalma = document.getElementById("municipalities-la-palma").contentDocument;
	var barlovento = municipalitiesLaPalma.getElementById("Barlovento");
	if(municipalitiesAndWeightLaPalma[3].overWeight == 1){
        	barlovento.style.fill = "red";
    	} else {
        	barlovento.style.fill = "green";
    	}
}
function changeColorToSanAndresYSauces(){
	var municipalitiesLaPalma = document.getElementById("municipalities-la-palma").contentDocument;
	var sanAndresYSauces = municipalitiesLaPalma.getElementById("San Andrés y Sauces");
	if(municipalitiesAndWeightLaPalma[4].overWeight == 1){
        	sanAndresYSauces.style.fill = "red";
    	} else {
        	sanAndresYSauces.style.fill = "green";
    	}
}
function changeColorToPuntallana(){
	var municipalitiesLaPalma = document.getElementById("municipalities-la-palma").contentDocument;
	var puntallana = municipalitiesLaPalma.getElementById("Puntallana");
	if(municipalitiesAndWeightLaPalma[5].overWeight == 1){
        	puntallana.style.fill = "red";
    	} else {
        	puntallana.style.fill = "green";
    	}
}
function changeColorToSantaCruzDeLaPalma(){
	var municipalitiesLaPalma = document.getElementById("municipalities-la-palma").contentDocument;
	var santaCruzDeLaPalma = municipalitiesLaPalma.getElementById("Santa Cruz de La Palma");
	if(municipalitiesAndWeightLaPalma[6].overWeight == 1){
        	santaCruzDeLaPalma.style.fill = "red";
    	} else {
        	santaCruzDeLaPalma.style.fill = "green";
    	}
}
function changeColorToElPaso(){
	var municipalitiesLaPalma = document.getElementById("municipalities-la-palma").contentDocument;
	var elPaso = municipalitiesLaPalma.getElementById("El Paso");
	if(municipalitiesAndWeightLaPalma[7].overWeight == 1){
        	elPaso.style.fill = "red";
    	} else {
        	elPaso.style.fill = "green";
    	}
}
function changeColorToBreñaAlta(){
	var municipalitiesLaPalma = document.getElementById("municipalities-la-palma").contentDocument;
	var breñaAlta = municipalitiesLaPalma.getElementById("Breña Alta");
	if(municipalitiesAndWeightLaPalma[8].overWeight == 1){
        	breñaAlta.style.fill = "red";
    	} else {
        	breñaAlta.style.fill = "green";
    	}
}
function changeColorToBreñaBaja(){
	var municipalitiesLaPalma = document.getElementById("municipalities-la-palma").contentDocument;
	var breñaBaja = municipalitiesLaPalma.getElementById("Breña Baja");
	if(municipalitiesAndWeightLaPalma[9].overWeight == 1){
        	breñaBaja.style.fill = "red";
    	} else {
        	breñaBaja.style.fill = "green";
    	}
}
function changeColorToVillaDeMazo(){
	var municipalitiesLaPalma = document.getElementById("municipalities-la-palma").contentDocument;
	var villaDeMazo = municipalitiesLaPalma.getElementById("Villa de Mazo");
	if(municipalitiesAndWeightLaPalma[10].overWeight == 1){
        	villaDeMazo.style.fill = "red";
    	} else {
        	villaDeMazo.style.fill = "green";
    	}
}
function changeColorToTazacorte(){
	var municipalitiesLaPalma = document.getElementById("municipalities-la-palma").contentDocument;
	var tazacorte = municipalitiesLaPalma.getElementById("Tazacorte");
	if(municipalitiesAndWeightLaPalma[11].overWeight == 1){
        	tazacorte.style.fill = "red";
    	} else {
        	tazacorte.style.fill = "green";
    	}
}
function changeColorToLosLlanosDeAridane(){
	var municipalitiesLaPalma = document.getElementById("municipalities-la-palma").contentDocument;
	var losLlanosDeAridane = municipalitiesLaPalma.getElementById("Los Llanos de Aridane");
	if(municipalitiesAndWeightLaPalma[12].overWeight == 1){
        	losLlanosDeAridane.style.fill = "red";
    	} else {
        	losLlanosDeAridane.style.fill = "green";
    	}
}
function changeColorToFuencaliente(){
	var municipalitiesLaPalma = document.getElementById("municipalities-la-palma").contentDocument;
	var fuencaliente = municipalitiesLaPalma.getElementById("Fuencaliente");
	if(municipalitiesAndWeightLaPalma[13].overWeight == 1){
        	fuencaliente.style.fill = "red";
    	} else {
        	fuencaliente.style.fill = "green";
    	}
}
function resetColorToLaGomera(){
    var municipalitiesLaGomera = document.getElementById("municipalities-la-gomera").contentDocument;
    var vallehermoso = municipalitiesLaGomera.getElementById("Vallehermoso");
    var valleGranRey = municipalitiesLaGomera.getElementById("Valle Gran Rey");
    var agulo = municipalitiesLaGomera.getElementById("Agulo");
    var hermigua = municipalitiesLaGomera.getElementById("Hermigua");
    var alajero = municipalitiesLaGomera.getElementById("Alajeró");
    var sanSebastian = municipalitiesLaGomera.getElementById("San Sebastián de la Gomera");
    vallehermoso.style.fill = "yellow";
    valleGranRey.style.fill = "yellow";
    agulo.style.fill = "yellow";
    hermigua.style.fill = "yellow";
    alajero.style.fill = "yellow";
    sanSebastian.style.fill = "yellow";
}
function changeColorToVallehermoso(){
	var municipalitiesLaGomera = document.getElementById("municipalities-la-gomera").contentDocument;
	var vallehermoso = municipalitiesLaGomera.getElementById("Vallehermoso");
	if(municipalitiesAndWeightLaGomera[0].overWeight == 1){
        	vallehermoso.style.fill = "red";
    	} else {
        	vallehermoso.style.fill = "green";
    	}
}
function changeColorToValleGranRey(){
	var municipalitiesLaGomera = document.getElementById("municipalities-la-gomera").contentDocument;
	var valleGranRey = municipalitiesLaGomera.getElementById("Valle Gran Rey");
	if(municipalitiesAndWeightLaGomera[1].overWeight == 1){
        	valleGranRey.style.fill = "red";
    	} else {
        	valleGranRey.style.fill = "green";
    	}
}
function changeColorToAgulo(){
	var municipalitiesLaGomera = document.getElementById("municipalities-la-gomera").contentDocument;
	var agulo = municipalitiesLaGomera.getElementById("Agulo");
	if(municipalitiesAndWeightLaGomera[2].overWeight == 1){
        	agulo.style.fill = "red";
    	} else {
        	agulo.style.fill = "green";
    	}
}
function changeColorToHermigua(){
	var municipalitiesLaGomera = document.getElementById("municipalities-la-gomera").contentDocument;
	var hermigua = municipalitiesLaGomera.getElementById("Hermigua");
	if(municipalitiesAndWeightLaGomera[3].overWeight == 1){
        	hermigua.style.fill = "red";
    	} else {
        	hermigua.style.fill = "green";
    	}
}
function changeColorToAlajero(){
	var municipalitiesLaGomera = document.getElementById("municipalities-la-gomera").contentDocument;
	var alajero = municipalitiesLaGomera.getElementById("Alajeró");
	if(municipalitiesAndWeightLaGomera[4].overWeight == 1){
        	alajero.style.fill = "red";
    	} else {
        	alajero.style.fill = "green";
    	}
}
function changeColorToSanSebastian(){
	var municipalitiesLaGomera = document.getElementById("municipalities-la-gomera").contentDocument;
	var sanSebastian = municipalitiesLaGomera.getElementById("San Sebastián de la Gomera");
	if(municipalitiesAndWeightLaGomera[5].overWeight == 1){
        	sanSebastian.style.fill = "red";
    	} else {
        	sanSebastian.style.fill = "green";
    	}
}
function resetColorToElHierro(){
    var municipalitiesElHierro = document.getElementById("municipalities-el-hierro").contentDocument;
    var frontera = municipalitiesElHierro.getElementById("Frontera");
    var valverde = municipalitiesElHierro.getElementById("Valverde");
    var elPinar = municipalitiesElHierro.getElementById("El Pinar");
    frontera.style.fill = "yellow";
    valverde.style.fill = "yellow";
    elPinar.style.fill = "yellow";
}
function changeColorToFrontera(){
	var municipalitiesElHierro = document.getElementById("municipalities-el-hierro").contentDocument;
	var frontera = municipalitiesElHierro.getElementById("Frontera");
	if(municipalitiesAndWeightElHierro[0].overWeight == 1){
        	frontera.style.fill = "red";
    	} else {
        	frontera.style.fill = "green";
    	}
}
function changeColorToValverde(){
	var municipalitiesElHierro = document.getElementById("municipalities-el-hierro").contentDocument;
	var valverde = municipalitiesElHierro.getElementById("Valverde");
	if(municipalitiesAndWeightElHierro[1].overWeight == 1){
        	valverde.style.fill = "red";
    	} else {
        	valverde.style.fill = "green";
    	}
}
function changeColorToElPinar(){
	var municipalitiesElHierro = document.getElementById("municipalities-el-hierro").contentDocument;
	var elPinar = municipalitiesElHierro.getElementById("El Pinar");
	if(municipalitiesAndWeightElHierro[2].overWeight == 1){
        	elPinar.style.fill = "red";
    	} else {
        	elPinar.style.fill = "green";
    	}
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
