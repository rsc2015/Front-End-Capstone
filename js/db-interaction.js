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
        // https://symtrak-34d63.firebaseio.com/symptoms.json?orderBy="uid"
        .then((symptomsList) => {
        console.log("symptomsList", symptomsList);
        // printSymptom is the variable for the domBuilder
      printSymptom.printListToDom(symptomsList);
        },
        (reject) => {
        console.log("SOMETHING WENT REALLY WRONG");
        });

    //    function printListToDom(symptomsList){
    //     console.log("symptomsList", symptomsList);
    //     // let eventsArray = meetupList.events;
    //     for (var i=0; i < 10; i++){
    //         let symptomNames = symptomsList.symptoms;
    //         console.log("Symptom Name:", symptomNames[i].name);
    //         $('#symptomData').append(`<li class="list-group-item symptomsDisplay" name="symName">
    //         ${symptomNames[i].name}</li>`);
    //     }
    //     }

        //function to select the symptoms from the symptomlist
        // let listItems = document.getElementsByClassName("symptomsDisplay");
        // console.log("listItems", listItems);

        
        // for (var i = 0; i < listItems.length; i++) {
        //     listItems.item(i).addEventListener("click", handleClick);
        // }

        // function handleClick(MouseEvent){
        //     let elementColor = MouseEvent.target.innerHTML;
        //     listItems.style.backgroundColor = "grey";
        // } 

        // function bgChange(e) {
        //     e.target.style.backgroundColor = "grey";
        //     console.log(e);
        //   } 

        // for (var i = 0; i < listItems.length; i++) {
        //     listItems.item(i).addEventListener("click", handleClick);
        //   }
        //   unction handleClick(e){
        //          e.target.style.backgroundColor = bgChange();
        //      } 
          

        

        module.exports = { makeFBCall};

    // this function is to call the symptoms list triggered by the "select symptoms" button.

    // $('#exampleModal').on('show.bs.modal', function (event) {
    //     var button = $(event.relatedTarget); // Button that triggered the modal
    //     var recipient = button.data('whatever') ;// Extract info from data-* attributes
    //     // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    //     // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    //     var modal = $(this);
    //     modal.find('.modal-title').text('New message to ' + recipient);
    //     modal.find('.modal-body input').val(recipient);
    //   });
   
      
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

