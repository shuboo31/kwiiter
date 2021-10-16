const firebaseConfig = {
    apiKey: "AIzaSyCa1r19eHY8Z0oNjnvVagfd9yNYYFfdc5s",
    authDomain: "kiikwi.firebaseapp.com",
    databaseURL: "https://kiikwi-default-rtdb.firebaseio.com",
    projectId: "kiikwi",
    storageBucket: "kiikwi.appspot.com",
    messagingSenderId: "248292220524",
    appId: "1:248292220524:web:939a65262a126733c68249",
    measurementId: "G-CH1RYY1TS3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
function addUser(){

    user_name = document.getElementById("user_name").value;

localStorage.setItem("user_name",user_name);
window.location="kwitter_room.html";


}