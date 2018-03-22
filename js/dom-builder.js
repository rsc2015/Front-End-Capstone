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

    // var input;

    // $('.singlecheckbox').on('change', function() {
    //     if($('.singlecheckbox:checked').length > 2) {
    //         input.checked = false;
    //     }
    //  });

    // function songForm(song, songId) {
    //     return new Promise(function (resolve, reject) {
    //       let songItem = {
    //         title: song ? song.title : "",
    //         artist: song ? song.artist : "",
    //         year: song ? song.year : "",
    //         album: song ? song.album : "",
    //         formTitle: song ? `Edit "${song.title}"` : "Add a new song",
    //         btnText: song ? "save changes" : "save song",
    //         btnId: song ? "save_edit_btn" : "save_new_btn"
    //       },
    //       form =
    //         `<h3>${songItem.formTitle}</h3>
    //         <input type="text" id="form--title" placeholder="title" value="${songItem.title}"></input>
    //         <input type="text" id="form--artist" placeholder="artist" value="${songItem.artist}"></input>
    //         <input type="text" id="form--album" placeholder="album" value="${songItem.album}"></input>
    //         <input type="text" id="form--year" placeholder="year" value="${songItem.year}"></input>
    //         <button id="${songId}" class=${songItem.btnId}>${songItem.btnText}</button>`;
    //       resolve(form);
    //     });
    //   }
    function historyForm(med, medId) {
        return new Promise(function (resolve, reject) {
          let historyItem = {
            medication1: med ? med.name1 : "",
            medication2: med ? med.name2 : "",
            medication3: med ? med.name3 : "",
            medication4: med ? med.name4 : "",

            formTitle: med ? `Edit "${med.name1}"` : "Add a new item",
            btnText: med ? "save changes" : "save history",
            btnId: med ? "save_edit_btn" : "save_new_btn"
          },
          form =
            `<h3>${historyItem.formTitle}</h3>
            <input type="text" id="form--title" placeholder="title" value="${historyItem.name1}"></input>
            <input type="text" id="form--artist" placeholder="artist" value="${historyItem.name2}"></input>
            <input type="text" id="form--album" placeholder="album" value="${historyItem.name3}"></input>
            <input type="text" id="form--album" placeholder="album" value="${historyItem.name4}"></input>
            <input type="text" id="form--album" placeholder="album" value="${historyItem.name4}"></input>
            
            <button id="${medId}" class=${historyItem.btnId}>${historyItem.btnText}</button>`;
          resolve(form);
        });
      }
      

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