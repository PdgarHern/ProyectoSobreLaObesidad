window.onload = initialize;

const CREATE = "Terminar formulario";
const UPDATE = "Actualizar formulario";

var buttonMode = CREATE;

var refFormEntryEdit;

function initialize(){
    
    checkIfUserIsLoggedIn();

    var formObesity = document.getElementById("form-obesity");

    formObesity.addEventListener("submit", validateFormObesity);

    tbodyObesityTable = document.getElementById("tbody-table-personal-data");

    var signOut = document.getElementById("sign-out");
    signOut.addEventListener("click", logout);

    
}

function validateFormObesity(event){
    event.preventDefault();

    var formObesity = event.target;

    var error = false;

    var name = formObesity["name"].value;
    if(!name){
        error = true;
        document.getElementById("error-name").style.display = "block";
    } else {
        document.getElementById("error-name").style.display = "none";
    }

    var lastName = formObesity.lastName.value;
    if(!lastName){
        error = true;
        document.getElementById("error-last-name").style.display = "block";
    } else {
        document.getElementById("error-last-name").style.display = "none";
    }

    var name = formObesity["email"].value;
    if(!email){
        error = true;
        document.getElementById("error-email").style.display = "block";
    } else {
        document.getElementById("error-email").style.display = "none";
    }

    var age = formObesity.age.value;
    if(!age || (age < 5 || age > 18)){
        error = true;
        document.getElementById("error-age").style.display = "block";
    } else {
        document.getElementById("error-age").style.display = "none";
    }

    var height = formObesity.height.value;
    if(!height || (height < 130 || height > 230)){
        error = true;
        document.getElementById("error-height").style.display = "block";
    } else {
        document.getElementById("error-height").style.display = "none";
    }

    var sport = formObesity["sport"].value;
    if(!sport){
        error = true;
        document.getElementById("error-sport").style.display = "block";
    } else {
        document.getElementById("error-sport").style.display = "none";
    }

    var weight = formObesity.weight.value;
    if(weight == "weight"){
        error = true;
        document.getElementById("error-weight").style.display = "block";
    } else {
        document.getElementById("error-weight").style.display = "none";
    }

    if(!error) pushObesityData(formObesity);
}

function pushObesityData(formObesity){
    var refObesity = firebase.database().ref().child("obesity");
    switch(buttonMode) {
        case CREATE:
            refObesity.push({
                "name": formObesity["name"].value,
                lastName: formObesity.lastName.value,
                "email": formObesity["email"].value,
                age: formObesity.age.value,
                height: formObesity.height.value,
                "sport": formObesity["sport"].value,
                weight: formObesity.weight.value
            });
            break;

        case UPDATE:
            refFormEntryEdit.update({
                "name": formObesity["name"].value,
                lastName: formObesity.lastName.value,
                "email": formObesity["email"].value,
                age: formObesity.age.value,
                height: formObesity.height.value,
                "sport": formObesity["sport"].value,
                weight: formObesity.weight.value
            });

            document.getElementById("send-button").value = CREATE;
            buttonMode = CREATE;

            break;
    }

    formObesity.reset();
}

function showObesityDataFromFirebaseAdmin() {
    var refObesity = firebase.database().ref().child("obesity");

    refObesity.on("value", function(snap){
        var data = snap.val();
        var rowsToShow = "";
        for (var key in data) {
            rowsToShow += "<tr>" + 
                            "<td>" + 
                                data[key].name +
                            "</td>" + 
                            "<td>" + 
                                data[key].lastName +
                            "</td>" +
                            "<td>" + 
                                data[key].age +
                            "</td>" +
                            "<td>" + 
                                data[key].sport +
                            "</td>" +
                            "<td>" + 
                                data[key].weight +
                            "</td>" +
                            "<td><button class='btn btn-secondary edit' form-data='" + key + "' id='edit-button'><img src='img/pencil.png' alt='pencil' class='img-fluid' style='width: 20px;'></img></button></td>" +
                            "<td><button class='btn btn-danger delete' form-data='" + key + "'><img src='img/PaperBin.png' alt='paperBin' class='img-fluid' style='width: 20px;'></img></button></td>" +
                        "</tr>";
        }

        tbodyObesityTable.innerHTML = rowsToShow;

        if (rowsToShow != "") {
            var elementsToEdit = document.getElementsByClassName("edit");

            for (var i = 0; i < elementsToEdit.length; i++) {
                elementsToEdit[i].addEventListener("click", editFormEntry, false);
            }

            var elementsToDelete = document.getElementsByClassName("delete");

            for (var i = 0; i < elementsToDelete.length; i++) {
                elementsToDelete[i].addEventListener("click", deleteFormEntry, false);
            }
        }

        

        

    });
}

function showObesityDataFromFirebaseNormal() {
    var refObesity = firebase.database().ref().child("obesity");

    refObesity.on("value", function(snap){
        var data = snap.val();
        var rowsToShow = "";
        for (var key in data) {
            rowsToShow += "<tr>" + 
                            "<td>" + 
                                data[key].name +
                            "</td>" + 
                            "<td>" + 
                                data[key].lastName +
                            "</td>" +
                            "<td>" + 
                                data[key].age +
                            "</td>" +
                            "<td>" + 
                                data[key].sport +
                            "</td>" +
                            "<td>" + 
                                data[key].weight +
                            "</td>" +
                        "</tr>";
        }

        tbodyObesityTable.innerHTML = rowsToShow;

        if (rowsToShow != "") {
            var elementsToEdit = document.getElementsByClassName("edit");

            for (var i = 0; i < elementsToEdit.length; i++) {
                elementsToEdit[i].addEventListener("click", editFormEntry, false);
            }

            var elementsToDelete = document.getElementsByClassName("delete");

            for (var i = 0; i < elementsToDelete.length; i++) {
                elementsToDelete[i].addEventListener("click", deleteFormEntry, false);
            }
        }

        

        

    });
}

function showObesityDataFromFirebaseUser() {
    var refObesity = firebase.database().ref().child("obesity");

    refObesity.on("value", function(snap){
        var data = snap.val();
        var rowsToShow = "";
        for (var key in data) {
            rowsToShow += "<tr>" + 
                            "<td>" + 
                                data[key].name +
                            "</td>" + 
                            "<td>" + 
                                data[key].lastName +
                            "</td>" +
                            "<td>" + 
                                data[key].age +
                            "</td>" +
                            "<td>" + 
                                data[key].sport +
                            "</td>" +
                            "<td>" + 
                                data[key].weight +
                            "</td>" +
                            "<td><button class='btn btn-secondary edit' form-data='" + key + "' id='edit-button'><img src='img/pencil.png' alt='pencil' class='img-fluid' style='width: 20px;'></img></button></td>" +
                        "</tr>";
        }

        tbodyObesityTable.innerHTML = rowsToShow;

        if (rowsToShow != "") {
            var elementsToEdit = document.getElementsByClassName("edit");

            for (var i = 0; i < elementsToEdit.length; i++) {
                elementsToEdit[i].addEventListener("click", editFormEntry, false);
            }

            var elementsToDelete = document.getElementsByClassName("delete");

            for (var i = 0; i < elementsToDelete.length; i++) {
                elementsToDelete[i].addEventListener("click", deleteFormEntry, false);
            }
        }

        

        

    });
}

function deleteFormEntry() {
    var refObesity = firebase.database().ref().child("obesity");

    var formEntryKeyDelete = this.getAttribute("form-data");
    var refFormEntryDelete = refObesity.child(formEntryKeyDelete);
    refFormEntryDelete.remove();
}

function editFormEntry() {
    var refObesity = firebase.database().ref().child("obesity");

    var formEntryKeyEdit = this.getAttribute("form-data");
    refFormEntryEdit = refObesity.child(formEntryKeyEdit);
    refFormEntryEdit.once("value", function(snap) {
        var data = snap.val();
        document.getElementById("name").value = data.name;
        document.getElementById("lastName").value = data.lastName;
        document.getElementById("email").value = data.email;
        document.getElementById("age").value = data.age;
        document.getElementById("height").value = data.height;
        //document.getElementsByName("sport").value = data.sport;
        if (data.sport == "Todos los días") {
            document.getElementById("every-day").checked = true;
        } else if (data.sport == "De vez en cuando"){
            document.getElementById("often").checked = true;
            console.log("Hola");
        } else {
            document.getElementById("no-sport").checked = true;
        };
        document.getElementById("weight").value = data.weight;
    });
    document.getElementById("send-button").value = UPDATE;
    buttonMode = UPDATE;
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

            if (user.email == "admin@admin.com") {
                showObesityDataFromFirebaseAdmin();
            } else {
                showObesityDataFromFirebaseUser();
            }
            
        } else {
            console.log("No user is signed in.")

            document.getElementById("register").style.display = "block";
            document.getElementById("sign-in").style.display = "block";
            document.getElementById("user-email").style.display = "none";
            document.getElementById("sign-out").style.display = "none";
            showObesityDataFromFirebaseNormal()
        }
    })
}

function logout() {
    location.reload();

    console.log("Hola")
    firebase.auth().signOut().then(() => {
        console.log("User logged out")
    }).catch((error) => {
        console.log(error.message)
    });
    
}
