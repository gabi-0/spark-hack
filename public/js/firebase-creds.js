// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);