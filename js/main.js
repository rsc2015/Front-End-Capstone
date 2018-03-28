"use strict";

console.log("main.js");
let $ = require('jquery');
let db = require("./db-interaction");
let build = require('./buildFBObj');
let templates = require("./dom-builder");
let user = require("./user");
let login = require("./user");
let fbConfig = require('./fb-config');
let firebase = require("firebase/app");
let templates1 = require("./trackSym");
let templates2 = require("./history");

function loadHistoryToView() {
  console.log("Need to load some history");
  let currentUser = user.getUser(); //add once we have login
  console.log("currentUser in loadHistory", currentUser);
  db.getHistories(currentUser)
  // db.gethistorys()
  .then((historyData) => {
    console.log("got data", historyData);
    //with users, this is already happening...
    //add the id to each history and then build the history list
    // var idArray = Object.keys(historyData);
    // idArray.forEach((key) => {
    //   historyData[key].id = key;
    // });
    // console.log("history object with id", historyData);
    //now make the list with historyData
    templates.createHistoryFormList(historyData);
  });
}

// Send newhistory data to db then reload DOM with updated history data
$(document).on("click", ".save_new_btn", function() {
  console.log("click save new history");
  let historyObj = buildHistoryObj();
  db.addHistory(historyObj)
  .then((historyID) => {
    loadHistoryToView();
  });
});

// go get the history from database and then populate the form for editing.
$(document).on("click", ".edit-btn", function () {
  console.log("click edit history");
  let historyID = $(this).data("edit-id");
  db.getHistory(historyID)
  
  .then((history) => {
    return templates.historyForm(history, historyID);
  })
  .then((finishedForm) => {
    $(".uiContainer--wrapper").html(finishedForm);
  });
});

//Save edited history to FB then reload DOM with updated history data
$(document).on("click", ".save_edit_btn", function() {
  let historyObj = buildHistoryObj(),
  historyID = $(this).attr("id");
  console.log("historyID", historyID);
  db.editHistory(historyObj, historyID)
  .then((data) => {
    loadHistoryToView();
  });
});

// Remove history then reload the DOM w/out new history
$(document).on("click", ".delete-btn", function () {
  console.log("clicked delete history", $(this).data("delete-id"));
  let historyID = $(this).data("delete-id");
  db.deleteHistory(historyID)
  .then(() => {
    loadHistoryToView();
  });
});

//make the view button work.
//not needed when user logs in since that will
//handle showing historys
$("#view-historys").click(function() {
  $(".uiContainer--wrapper").html("");
  loadHistoryToView();
});


//***************************************************************************** */

// Helper functions for forms stuff. Nothing related to Firebase
// Build a history obj from form data.
// put into own module
function buildHistoryObj() {
  let historyObj = {
  symptom1: $("#symptomNames[i].name").val(),
  date: $("#form-date").val(),
  med1: $("#form-medication1").val(),
  med2: $("#form-medication2").val(),
  med3: $("#form-medication3").val(),
  phy1: $("#form-physician2").val(),
  phy2: $("#form-physician2").val(),
  uid: user.getUser() // include uid to the object only if a user is logged in.
};
return historyObj;
}



// function createUserHistory(history) {
//   let userHistory = {
//       name: '',
//       symptom1: '',
//       symptom2: '',
//       med1: '',
//       med2: '',
//       med3: '',
//       uid: user.getUser()
//   };
//   return userHistory;
// }
// var historyID = "";

function createUserObj(patient) {
  let userObj = {
      name: '',
      email: '',
      uid: user.getUser()
  };
  return userObj;
}
var userID = "";


let myFirebase = firebase.database().ref();

// Reference to the recommendations object in your Firebase database
let histories = firebase.database().ref("histories");
// var histories = myFirebase.child("histories");
console.log("histories", histories);

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
  // let historyBuilder = createUserHistory();
  db.addUserFB(userBuilder);
  // db.addUserHistoryFB(historyBuilder);
  // console.log("historyBuilder", historyBuilder);
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

 

 
