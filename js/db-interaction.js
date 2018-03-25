"use strict";
// This module has no knowledge of the DOM, or where the data goes after it is fetched from Firebase.
// It is only concerned with getting and setting data in the db

let $ = require('jquery'),
firebase = require("./fb-config");
let printSymptom = require("./dom-builder");
    

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
        console.log("symptomsList", symptomsList);
        // printSymptom is the variable for the domBuilder
        printSymptom.printListToDom(symptomsList);
        },
        (reject) => {
        console.log("SOMETHING WENT REALLY WRONG");
        });

        
        function getFBDetails(user){
            return $.ajax({
                url: `${firebase.getFBsettings().databaseURL}//user.json?orderBy="uid"&equalTo="${user}"`
             }).done((resolve) => {
                return resolve;
             }).fail((error) => {
                return error;
             });
          }

          function addUserFB(userObj){
            return $.ajax({
                url: `${firebase.getFBsettings().databaseURL}/user.json`,
                type: 'POST',
                data: JSON.stringify(userObj),
                dataType: 'json'
             }).done((fbID) => {
                return fbID;
             });
        }
        
        function updateUserFB(userObj){
            return $.ajax({
                url: `${firebase.getFBsettings().databaseURL}/user/${userObj.fbID}.json`,
                type: 'PUT',
                data: JSON.stringify(userObj),
                dataType: 'json'
             }).done((userID) => {
                return userID;
             });
        }
        

/////getting and setting history to db////
        function getHistories(user) {
            return $.ajax({
                url:`${firebase.getFBsettings().databaseURL}/histories.json?orderBy="uid"&equalTo="${user}"`
            }).done((deliveryData) => {
                return deliveryData;
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
                url: `h${firebase.getFBsettings().databaseURL}/histories/${historyId}.json`
            }).done((historyData) => {
                return historyData;
            }).fail((error) => {
                return error;
            });
        }
        
        function editHistory(historyFormObj, historyId) {
            return $.ajax({
                url: `h${firebase.getFBsettings().databaseURL}/histories/${historyId}.json`,
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
            getHistories,
            addHistory,
            deleteHistory,
            getHistory,
            editHistory};

    