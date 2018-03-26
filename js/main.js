"use strict";

console.log("main.js");
let $ = require('jquery');
let db = require("./db-interaction");
let build = require('./buildFBObj');
let templates = require("./dom-builder");
let user = require("./user");
let login = require("./user");
let fbConfig = require('./fb-config');



function createUserObj(fan) {
  let userObj = {
      name: '',
      email: '',
      uid: user.getUser()
  };
  return userObj;
}
var userID = "";

//------- When user clicks login --------//
$("#login").click(function() {
  user.googlelogIn()
  .then((result) => {
      user.setUser(result.user.uid);
      $("#login").hide();
   $("#log-out").show();
      $("#userPic").removeClass("no-user").html(`<img src="${result.user.photoURL}" alt="${result.user.displayName} photo from Google" class="profPic rounded-circle" width="50">`);
      sendToFirebase();
  });
});



//-------- Send user info to Firebase --------//

function sendToFirebase() {
  let userBuilder = createUserObj();
  db.addUserFB(userBuilder);
}

$("#log-out").click(function(){
  user.googleLogOut();
  // $("#login").removeClass("is-hidden");
  // $("#log-out").addClass("is-hidden");
  $("#log-out").hide();
  $("#login").show();
});


// $("#auth-btn").click(function(){
//     console.log("clicked on Signin");
    
//     login.logInGoogle()
//     .then((result) => {
//       console.log("result from login", result.user.uid);
//       $("#auth-btn").hide();
//       $("#logout").show();
//       login.setUser(result.user.uid);
//     });
//   });
  
//   $("#logout").click(function(){
//     console.log("logout clicked");
//     $("#logout").hide();
//     $("#auth-btn").show();
//     login.logOut();
  
//   });

 

 
