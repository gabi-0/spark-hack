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

document.getElementById("dashboard").style.display = "none";

document.getElementById("login").addEventListener("click", GoogleLogin);
document.getElementById("logout").addEventListener("click", LogoutUser);

let provider = new firebase.auth.GoogleAuthProvider();

function GoogleLogin() {
console.log("Login Btn Call");
firebase
  .auth()
  .signInWithPopup(provider)
  .then((res) => {
    sessionStorage.setItem('user name',res.user.displayName);
    sessionStorage.setItem('user email',res.user.email);
    sessionStorage.setItem('user photo',res.user.photoURL)
    window.location.replace("mainActivity");
  })
  .catch((e) => {
    console.log(e);
  });
}

function showUserDetails(user) {
  document.getElementById("userDetails").innerHTML = `
    <img src="${user.photoURL}" style="width:10%">
    <p>Name: ${user.displayName}</p>
    <p>Email: ${user.email}</p>
  `;
}

function checkAuthState() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      window.location.replace("mainActivity");
      document.getElementById("LoginScreen").style.display = "none";
      document.getElementById("dashboard").style.display = "block";
      showUserDetails(user);
    } else {
    }
  });
}

function LogoutUser() {
  console.log("Logout Btn Call");
  firebase
    .auth()
    .signOut()
    .then(() => {
      document.getElementById("LoginScreen").style.display = "block";
      document.getElementById("dashboard").style.display = "none";
    })
    .catch((e) => {
      console.log(e);
    });
}
checkAuthState();