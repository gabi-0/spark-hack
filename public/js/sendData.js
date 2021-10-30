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


function writeUserData(name_post, review_post) {
    var name_post = document.getElementById("postName").value;
    var review_post = document.getElementById("postReview").value;
    // console.log(name_post.value);
    // console.log(review_post.value);
    var postListRef = firebase.database().ref('posts');
    var newPostRef = postListRef.push();
    newPostRef.set({
        "namePost": name_post,
        "review_post": review_post,
        "points" : 0
    });
    window.location.replace("connect");
  }