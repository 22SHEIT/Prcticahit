// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import{getAuth, GoogleAuthProvider, signInWithPopup}
from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"
import {getDetabase, ref, onValue, updat, push,child}
from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVGMh4XOnN9VIM4-3142LmZJGOTRPgeiI",
  authDomain: "demointro2023-2e747.firebaseapp.com",
  projectId: "demointro2023-2e747",
  storageBucket: "demointro2023-2e747.appspot.com",
  messagingSenderId: "809234974203",
  appId: "1:809234974203:web:c276be28f292976165f75e",
  measurementId: "G-ZQFEYQWYQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//Aca inicia mi programa.
var usuarioConectado = document.getElementById("usuario conectado")


document.getElementById("botonIniciar").onclick = async function(){
    //obtenemos la logica de autenticacion 
    var auth = getAuth();
    //creamos el proveedor en este caso es de google.
    var provider = new GoogleAuthProvider();
    auth.languaje ="es";
    var response = await signInWithPopup(auth, provider);
   alert(response.user.email);

    

    
}