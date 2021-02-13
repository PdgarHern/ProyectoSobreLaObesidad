window.onload = initialize;

function initialize() {

    document.getElementById("logged-in-succesful").style.display = "none";
    document.getElementById("logged-in-failure").style.display = "none";

    var loginForm = document.getElementById("login-form");

    console.log(loginForm);

    loginForm.addEventListener("submit", validateAccount);

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
    
    var loginForm = event.target;

    var error = false;

    var email = loginForm["email"].value;
    if(!email) {
        error = true;
        document.getElementById("error-email").style.display = "block";
    } else {
        document.getElementById("error-email").style.display = "none";
    }

    var pwd = loginForm["pwd"].value;
    if(!pwd) {
        error = true;
        document.getElementById("error-pwd").style.display = "block";
    } else {
        document.getElementById("error-pwd").style.display = "none";
    }

    if(!error) login();
}

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;

    var logInFailure = document.getElementById("logged-in-failure");

    firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
        console.log("User logged in");
        document.getElementById("logged-in-succesful").style.display = "block";
    }).catch(error => {
        console.log(error.message);
        document.getElementById("logged-in-failure").style.display = "block";
        logInFailure.innerHTML = "Ha ocurrido un error: " + error.message;
    });
}
