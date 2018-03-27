"use strict";
// This module has no knowledge of the DOM, or where the data goes after it is fetched from Firebase.
// It is only concerned with getting and setting data in the db

let $ = require('jquery'),
firebase = require("./fb-config");
let printSymptom = require("./dom-builder");
let currentUser = null;
    

     function makeFBCall(url) {
        return $.ajax({
        url: url,
        dataType: "json"
        });
        }


        makeFBCall(`${firebase.getFBsettings().databaseURL}/symptoms.json?orderBy="uid"`)
        // `${firebase.getFBsettings().databaseURL}/songs.json?orderBy="uid"&equalTo="${user}"`
        // https://symtrak-34d63.firebaseio.com/symptoms.json?orderBy="uid"&equalTo="${user}"`
        .then((symptomsList) => {
        // printSymptom is the variable for the domBuilder
        printSymptom.printListToDom(symptomsList);
        },
        (reject) => {
        console.log("SOMETHING WENT REALLY WRONG");
        });

        
        function getFBDetails(user) {
            return $.ajax({
                url: `${firebase.getFBsettings().databaseURL}//user.json?orderBy="uid"&equalTo="${user}"`
            }).done((resolve)  => {
                return resolve;
            }).fail((error) => {
                return error;
            });
        }

        function addUserFB(userObj) {
            return $.ajax({
                url: `${firebase.getFBsettings().databaseURL}/user.json`,
                type: 'POST',
                data: JSON.stringify(userObj),
                dataType: 'json'
            }).done((userID) => {
                return userID;
            });
        }

        // function to add history of the patient
        function addUserHistoryFB(historyObj) {
            return $.ajax({
                url: `${firebase.getFBsettings().databaseURL}/histories.json`,
                type: 'POST',
                data: JSON.stringify(historyObj),
                dataType: 'json'
            }).done((historyID) => {
                return historyID;
            });
        }
        
        function updateUserFB(userObj) {
            return $.ajax({
                url: `${firebase.getFBsettings().databaseURL}/user/${userObj.userID}.json`,
                type: 'PUT',
                data: JSON.stringify(userObj),
                dataType: 'json'
            }).done((userID) => {
                return userID;
            });
        }

        function createUser(userObj) {
            return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
                .catch(function (error) {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    console.log("check if you get error: ", errorCode, errorMessage);
                });
        }

        function loginUser(userObj) {
            return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
                .catch(function (error) {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    console.log("Error: either email or password is incorrect ", errorCode, errorMessage);
            });
        }
        

/////getting and setting history to db////



        function getHistories(user) {
            return $.ajax({
                url:`${firebase.getFBsettings().databaseURL}/histories.json?orderBy="uid"&equalTo="${user}"`
            }).done((historyData) => {
                return historyData;
            });
        }
        
        function addHistory(historyFormObj) {
            return $.ajax({
                url:`${firebase.getFBsettings().databaseURL}/histories.json`,
                type: 'POST',
                data: JSON.stringify(historyFormObj),
                dataType: 'json'
            }).done((historyId) =>{
                return historyId;
            });
        }
        
        function deleteHistory(historyId) {
            return $.ajax( {
                url:`${firebase.getFBsettings().databaseURL}/histories/${historyId}.json`,
                method: "DELETE"
            }).done((data) => {
                return data;
            });
        }
        
        function getHistory(historyId) {
            console.log("here is the problem");
            return $.ajax({
                url: `${firebase.getFBsettings().databaseURL}/histories/${historyId}.json`
            }).done((historyData) => {
                return historyData;
            }).fail((error) => {
                return error;
            });
        }
        
        function editHistory(historyFormObj, historyId) {
            return $.ajax({
                url: `${firebase.getFBsettings().databaseURL}/histories/${historyId}.json`,
                type: 'PUT',
                data: JSON.stringify(historyFormObj)
            }).done((data) => {
                return data;
            });
        }

        module.exports = { 
            makeFBCall, 
            getFBDetails, 
            addUserFB, 
            updateUserFB, 
            createUser,
            loginUser,
            getHistories,
            addHistory,
            deleteHistory,
            getHistory,
            editHistory,
            addUserHistoryFB,
            };


            //  let submitHistory = document.getElementById("submitHistory").addEventListener("click", docHistory => {
        //      var symptomOnset = document.getElementById("form-date").value;
        //      var med1 = document.getElementById("form-medication1").value;
        //      var med2 = document.getElementById("form-medication2").value;
        //      var med3 = document.getElementById("form-medication3").value;
        //      var med4 = document.getElementById("form-medication4").value;
        //      var phy1 = document.getElementById("form-physician1").value;
        //      var phy2 = document.getElementById("form-physician2").value;
        //      document.getElementById("myHistory1").innerText = "Medication 1:" + med1 +  "Medication 2:" + med1 +  "Medication 3:" + med3;
        //  });
        //  docHistory();

        
        ///function to output the symptom selection

        // function printChecked(){
        //     var symItems = document.getElementsByName("symCheckName");
        //     console.log("symItems-inter", symItems);
        //     var selectedSymptoms = "";
        //     for (var i = 0; i < symItems.length; i++ ){
        //         if (symItems[i].type == 'checkbox' && symItems[i].checked==true);
        //          selectedSymptoms += symItems[i].value;
        //          console.log("selectedSymptoms", selectedSymptoms);
        //     }
        // }

    