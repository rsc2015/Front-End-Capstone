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
  let historyID = $(this).data("edit-id");
  console.log("historyID", historyID);
  db.getHistory(historyID)
  .then((history) => {
    console.log("edit this history", history);
    return templates.historyForm(history, historyID);
  }).then((finishedForm) => {
    console.log("finishedForm", finishedForm);
    $(".editHistoryForm").html(finishedForm);
    // $(".editHistoryForm").append((".box-right1").html(historyDisplay)).html(finishedForm);
    //$(".card1").html(symptomListRender);  
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


//***************************************************************************** */

// Helper functions for forms stuff. Nothing related to Firebase
// Build a history obj from form data.
// put into own module
function buildHistoryObj() {
  let historyObj = {
  date: $("#form-date").val(),
  //symptom1: $("#{symptomNames[i].name}").is(':checked'),
  medication1: $("#form-medication1").val(),
  medication2: $("#form-medication2").val(),
  medication3: $("#form-medication3").val(),
  physician1: $("#form-physician1").val(),
  physician2: $("#form-physician2").val(),
  uid: user.getUser() // include uid to the object only if a user is logged in.
};
return historyObj;
}

function createUserObj(patient) {
  let userObj = {
      name: '',
      email: '',
      uid: user.getUser()
  };
  return userObj;
}
var userID = "";


var dbRef = firebase.database();

var buildTrackObj = dbRef.ref('tracking');
// //console.log("trackObj", trackObj);

var trackObj = buildTrackObj.push({
    id: '',
    date: '',
    intensity:'',
    uid: user.getUser()
  
});
 



/////----- Adding tracking to database -----/////
function addMyTrackFB(trackObj) {
  console.log("trackObj", trackObj);
  return $.ajax ({
      url: `${firebase.getFBsettings().databaseURL}/tracking.json`,
      type: 'POST',
      data: JSON.stringify(trackObj),
      dataType: 'json'
  }).done((trackId) => {
    console.log("trackData", trackId);
      return trackId;
  }).fail((error) => {
      return error;
  });
}


//var userID = "";



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
      $("#log-out").hide();
      $("#login").show();
});



 

 
