window.onload = initialize;

function initialize() {

    document.getElementById("register-succesful").style.display = "none";
    document.getElementById("register-failure").style.display = "none";

    //document.getElementById("logged-in-succesful").style.display = "none";

    var registerForm = document.getElementById("register-form");

    console.log(registerForm);

    registerForm.addEventListener("submit", validateAccount);

    checkIfUserIsLoggedIn();

    var signIn = document.getElementById("sign-in");
    //signIn.addEventListener("click", validateAccount);

}

function checkIfUserIsLoggedIn() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("User is signed in.")
            console.log(user.email);
            
        } else {
            console.log("No user is signed in.")
        }
    })
}

function validateAccount(event) {
    
    event.preventDefault();
    
    var registerForm = event.target;

    var error = false;

    var email = registerForm["email"].value;
    if(!email) {
        error = true;
        document.getElementById("error-email").style.display = "block";
    } else {
        document.getElementById("error-email").style.display = "none";
    }

    var pwd = registerForm["pwd"].value;
    if(!pwd) {
        error = true;
        document.getElementById("error-pwd").style.display = "block";
    } else {
        document.getElementById("error-pwd").style.display = "none";
    }

    var pwd2 = registerForm["pwd2"].value;
    if(!pwd2 | pwd != pwd2) {
        error = true;
        document.getElementById("error-pwd2").style.display = "block";
    } else {
        document.getElementById("error-pwd2").style.display = "none";
    }

    if(!error) register();
}

function register() {

    var registerOK = document.getElementById("register-succesful");
    var registerFail = document.getElementById("register-failure");

    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
        console.log("User registered");
        document.getElementById("register-succesful").style.display = "block";

        registerOK.innerHTML = "Usuario registrado con éxito"

    }).catch(error => {
        console.log(error.message)
        document.getElementById("register-failure").style.display = "block";

        registerFail.innerHTML = "Ha ocurrido un error: " + error.message;
    });
}
