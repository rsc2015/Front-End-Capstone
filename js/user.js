"use strict";
//install firebase into lib folder npm install firebase --save
let firebase = require("./fb-config"),
 provider = new firebase.auth.GoogleAuthProvider(),
 db = require("./db-interaction");
let currentUser = {
	uid: null,
	fbID: null
   };


function logInGoogle() {
  return firebase.auth().signInWithPopup(provider);
}

function logOut(){
  return firebase.auth().signOut();
}

function setUser(val){
	currentUser.uid = val;
 }

function getUser(){
	return currentUser.uid;
 }

 function getUserObj(){
	return currentUser;
 }

// call logout when page loads to avoid currentUser.uid
// db.logOut();
//listen for changed state
firebase.auth().onAuthStateChanged((user) => {
   console.log("onAuthStateChanged", user);
   if (user){
	   currentUser.uid = user.uid;
	 console.log("current user Logged in?", currentUser);
   }else {
	 currentUser.uid = null;
	 currentUser.fbID = null;
	 console.log("current user NOT logged in:", currentUser);
   }
});

function setUserVars(obj){
   console.log("user.setUserVars: obj", obj);
   return new Promise((resolve, reject) => {
	   currentUser.fbID = obj.fbID ? obj.fbID : currentUser.fbID;
	   currentUser.uid = obj.uid ? obj.uid : currentUser.uid;
	   resolve(currentUser);
   });
}

// function showUser(obj) {
//   let userDetails = getUserObj();
//   console.log("user.showUser: userDetails:", userDetails);
//   $("#currentTemp").html(`${userDetails.weather} F in ${userDetails.zipCode}`);
// }

function checkUserFB(uid){
   db.getFBDetails(uid)
   .then((result) => {
	   let data = Object.values(result);
	   console.log("user: any data?", data.length);
	   if (data.length === 0){
		   console.log("need to add this user to FB" , data);
		  db.addUserFB(makeUserObj(uid))
		   .then((result) => {
			  console.log("user: user added", uid, result.name);
			  let tmpUser = {
				 fbID: result.name,
				 uid: uid
			  };
			  return tmpUser;
		   }).then((tmpUser) => {
				 return setUserVars(tmpUser);
		   });
	   }else{
		   console.log("user: already a user", data);
		   var key = Object.keys(result);
		   data[0].fbID = key[0];
		   setUserVars(data[0])
			  .then((resolve) => {
				// getUserWeather(resolve);
			  });
	   }
	 //only show once a user is logged in
	 // $("#zip-container").removeClass("is-hidden");
   });
}

function makeUserObj(uid){
    let userObj = { 
        uid: uid }; 
    return userObj;
}

// firebase.auth().onAuthStateChanged(function(user){
// 	console.log("onAuthStateChanged", user);
// 	if (user){
// 		currentUser = user.uid;
// 	}else{
// 		currentUser = null;
// 		console.log("NO USER LOGGED IN");
// 	}
// });

module.exports = {logInGoogle, logOut, setUser, getUser, getUserObj, checkUserFB, makeUserObj};


