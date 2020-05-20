function signin() {
  var provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('user_birthday');
  firebase.auth().useDeviceLanguage();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    // var userEmail = document.querySelector("#user-email");
    // userEmail.innerHTML = user.email;
    var displayName = document.querySelector("#display-name");
    displayName.innerHTML = user.displayName;
    var img = document.createElement("img");
    img.src = user.photoURL;
    document.querySelector("#profile-pic").appendChild(img);
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}