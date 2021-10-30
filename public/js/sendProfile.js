const firebaseConfig = {
    apiKey: "AIzaSyBGbKiPsZRE5XTkR3lwvZqqMndw-70_W1M",
    authDomain: "exp-hack-6daaa.firebaseapp.com",
    databaseURL:
      "https://exp-hack-6daaa-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "exp-hack-6daaa",
    storageBucket: "exp-hack-6daaa.appspot.com",
    messagingSenderId: "38762324987",
    appId: "1:38762324987:web:c0dcb6078e9c2a1b81e15e",
    measurementId: "G-53GRCLPTYC",
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);



var database = firebase.database();

console.log(database);
var homecity = document.getElementById("homecity-input").value;
var desiredcity = document.getElementById("desiredcity-input").value;
console.log(homecity);
console.log(desiredcity);



function writeUserData() {
    var homecity = document.getElementById("homecity-input").value;
    var desiredcity = document.getElementById("desiredcity-input").value;
    console.log(homecity);
    console.log(desiredcity);
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('this')
        }
    })
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var nameUser = user.email;
            var postListRef = firebase.database().ref('users');
            var newPostRef = postListRef.push();
            var database = firebase.database();
            console.log(database);
            newPostRef.set({
                "user": nameUser,
                "homecity": homecity,
                "desiredcity" : desiredcity
            });
        }
    })
}