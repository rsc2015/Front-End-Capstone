"use strict";

let $ = require('jquery');


function printListToDom(symptomsList){
    console.log("symptomsList", symptomsList);
    // let eventsArray = meetupList.events;
    for (var i=0; i < 12; i++){
        let symptomNames = symptomsList.symptoms;
        console.log("Symptom Name:", symptomNames[i].name);
        $('#symptomData').append(`<li class="list-group-item symptomsDisplay" name="symName">
        <input class="singlecheckbox" type="checkbox" name="test" value="1"/><label>${symptomNames[i].name}</label></li>`);
    }
    }


     // function to select the symptoms from the symptomlist
    //  function printSymptomToBox(symptomsList){
     
     let symptomItems = document.getElementsByClassName("singlecheckbox");
     console.log("symptomItems", symptomItems);

     
     for (var i = 0; i < symptomItems.length; i++) {
       if (symptomItems.item(i).checked == true);
       let symptomItemName = document.getElementsByClassName("symptomsDisplay");
       console.log("symptomItemName", symptomItemName);
       for (var i=0; i < symptomItemName.length; i++){
       
       $('#selectedSypmtoms').append(`<li class="list-group-item symptomsDisplay" name="symName">
        ${symptomItems.item(i).innerHTML}</li>`);
     }
    }

    //  function handleClick(MouseEvent){
    //      let elementColor = MouseEvent.target.innerHTML;
    //      listItems.style.backgroundColor = "grey";
    //  } 

    var input;

    $('.singlecheckbox').on('change', function() {
        if($('.singlecheckbox:checked').length > 2) {
            input.checked = false;
        }
     });

     //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_custom_select
     // Pass the checkbox name to the function
function getCheckedBoxes(chkboxName) {
    let checkboxes = document.getElementsByClassName(singlecheckbox); 
    // var symptomtext = document.getElementById("selectedSypmtoms");
    // var checkboxesChecked = [];
    // loop over them all
    for (var i=0; i<checkboxes.length; i++) {
       // And stick the checked ones onto an array...
       if (checkboxes[i].checked == true) {
        //   checkboxesChecked.push(checkboxes[i]);
        let cardMsg1 = document.getElementById("postMessage").value;
          $('#selectedSypmtoms').append(`<li class="list-group-item symptomsDisplay" name="symName">
        ${checkboxes[i].checked.innerHTML}</li>`);
       }
    }
    // Return the array if it is non-empty, or null
    // return checkboxesChecked.length > 0 ? checkboxesChecked : null;
  }
  
  // Call as
  var singlecheckbox = getCheckedBoxes("mycheckboxes");


module.exports = {printListToDom, getCheckedBoxes};