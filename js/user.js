"use strict";
//install firebase into lib folder npm install firebase --save
let firebase = require("./fb-config"),
 provider = new firebase.auth.GoogleAuthProvider(),
	 currentUser = null;


function logInGoogle() {
  return firebase.auth().signInWithPopup(provider);
}

function logOut(){
  return firebase.auth().signOut();
}

function setUser(val){
	currentUser = val;
}

function getUser() {
  return currentUser;
}

firebase.auth().onAuthStateChanged(function(user){
	console.log("onAuthStateChanged", user);
	if (user){
		currentUser = user.uid;
	}else{
		currentUser = null;
		console.log("NO USER LOGGED IN");
	}
});

module.exports = {logInGoogle, logOut, setUser, getUser};

//listen for changed state
// firebase.auth().onAuthStateChanged((user) => {
// 	console.log("onAuthStateChanged", user);
// 	if (user){
// 		currentUser = user.uid;
// 		console.log("current user Logged in?", currentUser);
// 	}else {
// 		currentUser = null;
// 		console.log("current user NOT logged in:", currentUser);
// 	}
// });

// function logInGoogle() {
// 	//all firebase functions return a promise!! Add a then when called

// 	return firebase.auth().signInWithPopup(provider);
// }

// function logOut(){
// 	return firebase.auth().signOut();
// }
// function getUser(){
// 	return currentUser;
// }

// function setUser(val){
// 	currentUser = val;
// }

// module.exports = {logInGoogle, logOut, getUser, setUser};