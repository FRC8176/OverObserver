
console.log("Initing firebase")
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAmADe3d8-i7NOysyOkgD7RnICFS0Mrrns",
  authDomain: "gc-builder-scout.firebaseapp.com",
  databaseURL: "https://gc-builder-scout.firebaseio.com",
  projectId: "gc-builder-scout",
  storageBucket: "",
  messagingSenderId: "576481974073",
  appId: "1:576481974073:web:19ddb6ca5f22e9e7"
};
firebase.initializeApp(config);
var database = firebase.database();

function signin(account, pwd) {
  console.log(account);
  firebase.auth().signInWithEmailAndPassword(account, pwd).catch(function (error) {
    // Handle error
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    if (errorCode == "auth/wrong-password") {
      loginError("密碼錯誤");
    }
    else if (errorCode == "auth/invalid-email" || errorCode == "auth/user-not-found") {
      loginError("請輸入正確email");
    }
    else {
      loginError(errorCode);
    }
  });
}

function signinGoogle() {
  firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(function (error) {
    console.error(error);
  });
}

function signout() {
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
    console.log("User sign out!");
  }).catch(function (error) {
    // An error happened.
    console.log("User sign out error!");
  });
}
