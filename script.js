// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwjUBT01ElY4ucwP4-TWJlwZy8KlozqnE",
  authDomain: "prueba1-51eaa.firebaseapp.com",
  databaseURL: "https://prueba1-51eaa-default-rtdb.firebaseio.com",
  projectId: "prueba1-51eaa",
  storageBucket: "prueba1-51eaa.appspot.com",
  messagingSenderId: "14724841770",
  appId: "1:14724841770:web:3ecefe1673f71a6ccd9e53",
  measurementId: "G-K0R6GREHVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const contentDiv = document.getElementById('content');
const inputField = document.getElementById('input');

// Escuchar cambios en la base de datos y actualizar el contenido en tiempo real
db.ref('messages').on('value', (snapshot) => {
    const messages = snapshot.val();
    contentDiv.innerHTML = '';
    for (const key in messages) {
        const message = messages[key];
        const p = document.createElement('p');
        p.textContent = message;
        contentDiv.appendChild(p);
    }
});

// Enviar mensaje a la base de datos
function sendMessage() {
    const message = inputField.value;
    db.ref('messages').push(message);
    inputField.value = '';
}
