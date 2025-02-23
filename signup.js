// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB47ykr_s1XDVm_xTX0zcpG3O2_RuCfpM4",
    authDomain: "do-and-done-website-login.firebaseapp.com",
    databaseURL: "https://do-and-done-website-login-default-rtdb.firebaseio.com",
    projectId: "do-and-done-website-login",
    storageBucket: "do-and-done-website-login.appspot.com",
    messagingSenderId: "508164478553",
    appId: "1:508164478553:web:cab8f61efa2844cc354348"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

function validatepassword(confirmpassword, password) {
    if (confirmpassword == password) {
        return true;
    }
    else {
        return false;
    }
}


signup.addEventListener('click', (e) => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value
    if (validatepassword(confirmpassword, password) == false) {
        alert("Passwords do not match");
        return
    }
    createUserWithEmailAndPassword(auth, email, password)
        
        .then(() => {
            alert('User Created!');
            setTimeout(() => {
                window.location = 'todolist.html';
            }, 500);
        })
        .catch((error) => {
            alert(error.message);
        });
});

login.addEventListener('click', (e) => {
    var loginemail = document.getElementById("loginemail").value;
    var loginpassword = document.getElementById("loginpassword").value;
    signInWithEmailAndPassword(auth, loginemail, loginpassword)
        .then(() => {
            alert("User logged in!");
            setTimeout(() => {
                window.location = 'todolist.html';
            }, 500);
        })
        .catch((error) => {
            alert(error.message);
        });
});
