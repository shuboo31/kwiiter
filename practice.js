const firebaseConfig = {
    apiKey: "AIzaSyAmhOaEMJesRtAen2FQGRYUcvm14A3-nbk",
    authDomain: "kwitter-cf44a.firebaseapp.com",
    databaseURL: "https://kwitter-cf44a-default-rtdb.firebaseio.com",
    projectId: "kwitter-cf44a",
    storageBucket: "kwitter-cf44a.appspot.com",
    messagingSenderId: "333179851644",
    appId: "1:333179851644:web:7743f826c981ff84b64af9",
    measurementId: "G-FDY2NKV170"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser(){
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose : "addingUser"
});
}
