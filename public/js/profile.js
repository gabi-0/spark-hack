// var nr_upvotes = document.getElementById('nr_post').value;
// var nr_shared = document.getElementById('nr_shared').value;
// var nr_upvotes = document.getElementById('nr_upvotes').value;

var idImg = document.getElementById('profile_pic');
var thisName = document.getElementById('name');

// var location = document.getElementById('location').value;
// var comunity = document.getElementById('comunity').value;

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

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
    idImg.src = user.photoURL;
    thisName.innerHTML = user.displayName
    }
    else{
        window.location.replace('../login')
    }
})