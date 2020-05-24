"use strict";
// signup
const signupForm = document.querySelector("#signup_form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //get user info
  const email = signupForm["signupEmail"].value;
  const password = signupForm["signupPassword"].value;
  // console.log(email, password);
  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    // const modal = document.querySelector("#modal-signup");
    // M.Modal.getInstance(modal).close();
    // signupForm.requestFullscreen();
  });
});

//logout
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log("user signed out");
  });
});

// login
const loginForm = document.querySelector("#login_form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("OK")

  // alert("ok");
  // get user info
  const email = loginForm["loginEmail"].value;
  const password = loginForm["loginPassword"].value;
  
  auth.signInWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    alert("OK");
    // close the login modal and reset the form
    // const modal = document.querySelector("#modal-login");
    // M.Modal.getInstance(modal).close();
    // loginForm.reset();
  });
})
