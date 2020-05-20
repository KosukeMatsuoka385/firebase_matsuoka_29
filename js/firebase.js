// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCfs6Ha3xt7UwbkWf4FwHvt07o72dcQjkc",
  authDomain: "peerless-list-267710.firebaseapp.com",
  databaseURL: "https://peerless-list-267710.firebaseio.com",
  projectId: "peerless-list-267710",
  storageBucket: "peerless-list-267710.appspot.com",
  messagingSenderId: "802585049511",
  appId: "1:802585049511:web:1e8f02c5c73c0f1a869e82"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// function signUp() {
//   var email = document.querySelector("#email");
//   var password = document.querySelector("#password");

//   const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
//   promise.catch(e => alert(e.message));
//   alert("Signed Up");
// }

// function signIn() {
//   var email = document.querySelector("#email");
//   var password = document.querySelector("#password");

//   const promise = auth.signInWithEmailAndPassword(email.value, password.value);
//   // promise.catch(e => alert(e.message));
//   alert("Signed In " + email.value);
// }

// function signOut() {
//   auth.signOut();
//   alert("Signed Out");
// }

// auth.onAuthStateChanged(function(user) {
//   if(user) {
//     var email = user.email;
//     alert("Active User " + email);
//   } else {
//     alert("No Active User");
//   }
// })

// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// var uiConfig = {
//     callbacks: {
//         signInSuccess: function (currentUser, credential, redirectUrl) {
//             // サインイン成功時のコールバック関数
//             // 戻り値で自動的にリダイレクトするかどうかを指定
//             return true;
//         },
//         uiShown: function () {
//             // FirebaseUIウィジェット描画完了時のコールバック関数
//             // 読込中で表示しているローダー要素を消す
//             document.getElementById('loader').style.display = 'none';
//         }
//     },
//     // リダイレクトではなく、ポップアップでサインインフローを表示
//     signInFlow: 'popup',
//     signInSuccessUrl: '<url-to-redirect-to-on-success>',
//     signInOptions: [
//         // サポートするプロバイダ(メールアドレス)を指定
//         firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     ],
//     // Terms of service url.
//     tosUrl: '<your-tos-url>'

// };
// ui.start('#firebaseui-auth-container', uiConfig);