window.onload = initialize;

function initialize() {
    checkIfUserIsLoggedIn();

    var signOut = document.getElementById("sign-out");
    signOut.addEventListener("click", logout);
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
