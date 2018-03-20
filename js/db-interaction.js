"use strict";
// This module has no knowledge of the DOM, or where the data goes after it is fetched from Firebase.
// It is only concerned with getting and setting data in the db

let $ = require('jquery'),
firebase = require("./fb-config");
let printSymptom = require("./dom-builder");
    

    // this functionn is to call the symptoms list triggered by the "select symptoms" button.

    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var recipient = button.data('whatever') ;// Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this);
        modal.find('.modal-title').text('New message to ' + recipient);
        modal.find('.modal-body input').val(recipient);
      });
   
      
    

     function makeFBCall(url) {
         console.log(makeFBCall);
        return $.ajax({
        url: url,
        dataType: "json"
        });
        }
        
        makeFBCall(`https://symtrak-34d63.firebaseio.com/symptoms.json?orderBy="uid"`)
        .then((symptomsList) => {
        console.log("symptomsList", symptomsList);
        // printSymptom is the variable for the domBuilder
        printSymptom.printListToDom();
        },
        (reject) => {
        console.log("SOMETHING WENT REALLY WRONG");
        });



        //   let database = firebase.database();

    //   let symptomRef = database.ref('Name');
    //   symptomRef.on('value', getSymptoms, errData);

    //   function getSymptoms(data){
    //       //console.log(data.val());
    //       var name = data.val();
    //       var keys = Object.keys(name);
    //       console.log(keys);
    //   }

    //   function errData(err){
    //       console.log('Error');
    //       console.log(err);
    //   }

    // function getSymptoms() {
    //     console.log("url", firebase.getFBsettings().databaseURL);
    //      return $.ajax({
    //          url: `${firebase.getFBsettings().databaseURL}/symptoms.json?orderBy="uid"`
    //          // url: `https://symtrak-34d63.firebaseio.com/symptoms.json?orderBy="uid"&equalTo="${user}"`
    //      }).done((symptomData) => {
    //          console.log("symptomData in promise", symptomData);
    //          return symptomData;
    //     });
    //  }
     //https://symtrak-34d63.firebaseio.com/symptoms
     //https://music-history-f8b12.firebaseio.com/songs/0
    //  module.exports = {
    //     getSymptoms,
    //  };


