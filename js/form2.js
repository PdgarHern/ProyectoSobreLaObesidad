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
    var formSchools = firebase.database().ref().child("centrosEducativos");
    
    event.preventDefault();

    var formObesity = event.target;

    var error = false;

    var educativeCenter = formObesity["educative-center"].value;
    if(!educativeCenter){
        error = true;
        document.getElementById("error-educative-center").style.display = "block";
    } else {

        formSchools.on("value", function(snap){
            var data = snap.val();

            for (var key in data) {
                if (data[key].Nombre == educativeCenter) {
                    error = false;
                    document.getElementById("error-educative-center").style.display = "none";
                    console.log("Hola");
                    break
                } else {
                    error = true;
                    document.getElementById("error-educative-center").style.display = "block";
                    console.log("Gussbai");
                }
            }
        })

    }

    var registerDate = formObesity["register-date"].value;
    if(!registerDate){
        error = true;
        document.getElementById("error-register-data").style.display = "block";
    } else {
        document.getElementById("error-register-data").style.display = "none";
    }

    var studentClass = formObesity["student-class"].value;
    if(!studentClass){
        error = true;
        document.getElementById("error-student-class").style.display = "block";
    } else {
        document.getElementById("error-student-class").style.display = "none";
    }

    var sex = formObesity["sex"].value;
    if(!sex){
        error = true;
        document.getElementById("error-sex").style.display = "block";
    } else {
        document.getElementById("error-sex").style.display = "none";
    }

    var age = formObesity.age.value;
    if(!age || (age < 5 || age > 18)){
        error = true;
        document.getElementById("error-age").style.display = "block";
    } else {
        document.getElementById("error-age").style.display = "none";
    }

    //----------------------------------------------------------------------------

    var weight = formObesity["weight"].value;
    if(!weight | weight < 40 | weight > 120){
        error = true;
        document.getElementById("error-weight").style.display = "block";
    } else {
        document.getElementById("error-weight").style.display = "none";
    }

    var bmi = formObesity["bmi"].value;
    if(!bmi){
        error = true;
        document.getElementById("error-bmi").style.display = "block";
    } else {
        document.getElementById("error-bmi").style.display = "none";
    }

    var fatPercentage = formObesity["fat-percentage"].value;
    if(!fatPercentage){
        error = true;
        document.getElementById("error-fat-percentage").style.display = "block";
    } else {
        document.getElementById("error-fat-percentage").style.display = "none";
    }

    var hydratationPercentage = formObesity["hydratation-percentage"].value;
    if(!hydratationPercentage){
        error = true;
        document.getElementById("error-hydratation-percentage").style.display = "block";
    } else {
        document.getElementById("error-hydratation-percentage").style.display = "none";
    }

    var muscleWeight = formObesity["muscle-weight"].value;
    if(!muscleWeight){
        error = true;
        document.getElementById("error-muscle-weight").style.display = "block";
    } else {
        document.getElementById("error-muscle-weight").style.display = "none";
    }

    var muscleMassLevel = formObesity["muscle-mass-level"].value;
    if(!muscleMassLevel){
        error = true;
        document.getElementById("error-muscle-mass-level").style.display = "block";
    } else {
        document.getElementById("error-muscle-mass-level").style.display = "none";
    }

    var boneWeight = formObesity["bone-weight"].value;
    if(!boneWeight){
        error = true;
        document.getElementById("error-bone-weight").style.display = "block";
    } else {
        document.getElementById("error-bone-weight").style.display = "none";
    }

    var kilocalories = formObesity["kilocalories"].value;
    if(!kilocalories){
        error = true;
        document.getElementById("error-kilocalories").style.display = "block";
    } else {
        document.getElementById("error-kilocalories").style.display = "none";
    }

    var methabolicAge = formObesity["methabolic-age"].value;
    if(!methabolicAge){
        error = true;
        document.getElementById("error-methabolic-age").style.display = "block";
    } else {
        document.getElementById("error-methabolic-age").style.display = "none";
    }

    //----------------------------------------------------------------------------

    var height = formObesity.height.value;
    if(!height || (height < 130 || height > 230)){
        error = true;
        document.getElementById("error-height").style.display = "block";
    } else {
        document.getElementById("error-height").style.display = "none";
    }

    var absPerimeter = formObesity["abs-perimeter"].value;
    if(!absPerimeter){
        error = true;
        document.getElementById("error-abs-perimeter").style.display = "block";
    } else {
        document.getElementById("error-abs-perimeter").style.display = "none";
    }

    //----------------------------------------------------------------------------

    var activity = formObesity["activity"].value;
    if(!activity || activity == "activity"){
        error = true;
        document.getElementById("error-activity").style.display = "block";
    } else {
        document.getElementById("error-activity").style.display = "none";
    }

    if(!error) pushObesityData(formObesity);
}

function pushObesityData(formObesity){
    var refObesity = firebase.database().ref().child("obesity");
    switch(buttonMode) {
        case CREATE:
            refObesity.push({
                educativeCenter: formObesity["educative-center"].value,
                "registerDate": formObesity["register-date"].value,
                studentClass: formObesity["student-class"].value,
                "sex": formObesity["sex"].value,
                age: formObesity.age.value,
                "weight": formObesity["weight"].value,
                bmi: formObesity["bmi"].value,
                "fatPercentage": formObesity["fat-percentage"].value,
                "hydratationPercentage": formObesity["hydratation-percentage"].value,
                "muscleWeight": formObesity["muscle-weight"].value,
                "muscleMassLevel": formObesity["muscle-mass-level"].value,
                "boneWeight": formObesity["bone-weight"].value,
                "kilocalories": formObesity["kilocalories"].value,
                "methabolicAge": formObesity["methabolic-age"].value,
                height: formObesity.height.value,
                "absPerimeter": formObesity["abs-perimeter"].value,
                activity: formObesity["activity"].value,
            });
            break;

        case UPDATE:
            refFormEntryEdit.update({
                educativeCenter: formObesity["educative-center"].value,
                "registerDate": formObesity["register-date"].value,
                studentClass: formObesity["student-class"].value,
                "sex": formObesity["sex"].value,
                age: formObesity.age.value,
                "weight": formObesity["weight"].value,
                bmi: formObesity["bmi"].value,
                "fatPercentage": formObesity["fat-percentage"].value,
                "hydratationPercentage": formObesity["hydratation-percentage"].value,
                "muscleWeight": formObesity["muscle-weight"].value,
                "muscleMassLevel": formObesity["muscle-mass-level"].value,
                "boneWeight": formObesity["bone-weight"].value,
                "kilocalories": formObesity["kilocalories"].value,
                "methabolicAge": formObesity["methabolic-age"].value,
                height: formObesity.height.value,
                "absPerimeter": formObesity["abs-perimeter"].value,
                activity: formObesity["activity"].value,
            });

            document.getElementById("send-button-obesity").value = CREATE;
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
                                data[key].educativeCenter +
                            "</td>" + 
                            "<td>" + 
                                data[key].studentClass +
                            "</td>" +
                            "<td>" + 
                                data[key].age +
                            "</td>" +
                            "<td>" + 
                                data[key].activity + " días a la semana" +
                            "</td>" +
                            "<td>" + 
                                data[key].weight + " Kg" +
                            "</td>" +
                            "<td>" + 
                                data[key].bmi + " Kg / m^2" +
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
                                data[key].educativeCenter +
                            "</td>" + 
                            "<td>" + 
                                data[key].studentClass +
                            "</td>" +
                            "<td>" + 
                                data[key].age +
                            "</td>" +
                            "<td>" + 
                                data[key].activity + " días a la semana" +
                            "</td>" +
                            "<td>" + 
                                data[key].weight + " Kg" +
                            "</td>" +
                            "<td>" + 
                                data[key].bmi + " Kg / m^2" +
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
                                data[key].educativeCenter +
                            "</td>" + 
                            "<td>" + 
                                data[key].studentClass +
                            "</td>" +
                            "<td>" + 
                                data[key].age +
                            "</td>" +
                            "<td>" + 
                                data[key].activity + " días a la semana" +
                            "</td>" +
                            "<td>" + 
                                data[key].weight + " Kg" +
                            "</td>" +
                            "<td>" + 
                                data[key].bmi + " Kg / m^2" +
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
        document.getElementById("educative-center").value = data.educativeCenter;
        document.getElementById("register-date").value = data.registerDate;
        document.getElementById("student-class").value = data.studentClass;
        if (data.sex == "Hombre") {
            document.getElementById("sex-male").checked = true;
        } else if (data.sex == "Mujer"){
            document.getElementById("sex-female").checked = true;
            console.log("Hola");
        } else {
            document.getElementById("sex-other").checked = true;
        };
        document.getElementById("age").value = data.age;
        //-----------------------------------------------------------------------
        document.getElementById("weight").value = data.weight;
        document.getElementById("bmi").value = data.bmi;
        document.getElementById("fat-percentage").value = data.fatPercentage;
        document.getElementById("hydratation-percentage").value = data.hydratationPercentage;
        document.getElementById("muscle-weight").value = data.muscleWeight;
        document.getElementById("muscle-mass-level").value = data.muscleMassLevel;
        document.getElementById("bone-weight").value = data.boneWeight;
        document.getElementById("kilocalories").value = data.kilocalories;
        document.getElementById("methabolic-age").value = data.methabolicAge;
        //-----------------------------------------------------------------------
        document.getElementById("height").value = data.height;
        document.getElementById("abs-perimeter").value = data.absPerimeter;
        //-----------------------------------------------------------------------
        document.getElementById("activity").value = data.activity;
    });
    document.getElementById("send-button-obesity").value = UPDATE;
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
