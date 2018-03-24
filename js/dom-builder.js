"use strict";

let $ = require('jquery');


function printListToDom(symptomsList){
  console.log("symptomsList1", symptomsList);
  let symptomListRender =
   $(`<div class="card symptom-card">
     <div class="card-body">
       <h5 class="card-title symptomsHeading1">Symptoms to track</h5>
       <p class="card-text symptomsSubHeading1">Begin by choosing upto 4 symptoms to manage.</p>
       <ul class="list-group list-group-flush symptomsDisplay" id="symptomData"></ul>
     </div>
   </div>`);
   $(".card1").html(symptomListRender);
  // let symptomNames = symptomsList;
  for (var i=0; i < 12; i++){
    let symptomNames = symptomsList;
      console.log("Symptom Name:", symptomNames[i].name);
      $('#symptomData').append(`<li class="list-group-item symptomsDisplay" name="symName">
      <input class="singlecheckbox" type="checkbox" name="test" value="1"/>${symptomNames[i].name}</li>`);
  }
  }

  // $('#symptomData').getLabels();
     // function to select the symptoms from the symptomlist
    //  function printSymptomToBox(symptomsList){ 
     let symptomItems = document.getElementsByClassName("singlecheckbox");
     console.log("symptomItems", symptomItems); 
     let symptomItemNames = document.getElementsByName("symName");
     console.log("symptomItemNames", symptomItemNames);
     symptomItemNames.forEach(function(symptomItemName) {
       let i;
       console.log("mySymptom", symptomItemNames[i].innerText);
     });
    //  console.log("mySymptom",symptomItemName[i].name);
    //  let symInnerText = document.getElementsByName("test").innerText;
    //  console.log("symInnerText", symInnerText);
    //  for (var i = 0; i < symptomItems.length; i++) {
    //    if (symptomItems.item(i).checked == true){
    //     let symptomItemName = document.getElementsByName("symName");
    //     console.log("mySymptom",symptomItemName[i].innerText);
    //    }
       
    //    for (var i=0; i < symptomItemName.length; i++){ 
    //    $('#selectedSypmtoms').append(`<li class="list-group-item symptomsDisplay" name="symName">
    //     ${symptomItems.item(i).innerText}</li>`);
    //  }
    // }

    // var input;

    // $('.singlecheckbox').on('change', function() {
    //     if($('.singlecheckbox:checked').length > 2) {
    //         input.checked = false;
    //     }
    //  });

    
    // function historyForm(med, medId) {
    //     return new Promise(function (resolve, reject) {
    //       let historyItem = {
    //         medication1: med ? med.name1 : "",
    //         medication2: med ? med.name2 : "",
    //         medication3: med ? med.name3 : "",
    //         medication4: med ? med.name4 : "",
    //         formTitle: med ? `Edit "${med.name1}"` : "Add a new item",
    //         btnText: med ? "save changes" : "save history",
    //         btnId: med ? "save_edit_btn" : "save_new_btn"
    //       },
    //       form =
    //         `<h3>${historyItem.formTitle}</h3>
    //         <input type="text" id="form--title" placeholder="title" value="${historyItem.name1}"></input>
    //         <input type="text" id="form--artist" placeholder="artist" value="${historyItem.name2}"></input>
    //         <input type="text" id="form--album" placeholder="album" value="${historyItem.name3}"></input>
    //         <input type="text" id="form--album" placeholder="album" value="${historyItem.name4}"></input>
    //         <input type="text" id="form--album" placeholder="album" value="${historyItem.name4}"></input>
            
    //         <button id="${medId}" class=${historyItem.btnId}>${historyItem.btnText}</button>`;
    //       resolve(form);
    //     });

    // function historyForm(med, medId) {
    //   return new Promise(function (resolve, reject) {

    // // form action="/action_page.php" 
    //   },
    //               form = 
    //                    ` <label class="symptomsHeading1">Symptom Started:</label><br>
    //                     <input type="date" name="bday" min="1979-12-31"><br>
    //                     <label class="symptomsHeading1">Current Medications:</label><br>
    //                     <input type="text" id="myText" value="Enter medication here..."><br>
    //                     <label class="symptomsHeading1">Physician Visited:</label><br>
    //                     <input type="text" id="myText" value="Physician name here...">
    //                     <input type="submit">`; 
    //                   resolve(form);
                        
    //                     });
   
     //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_custom_select
     // Pass the checkbox name to the function
// function getCheckedBoxes(chkboxName) {
//     let checkboxes = document.getElementsByClassName(singlecheckbox); 
//     // var symptomtext = document.getElementById("selectedSypmtoms");
//     // var checkboxesChecked = [];
//     // loop over them all
//     for (var i=0; i<checkboxes.length; i++) {
//        // And stick the checked ones onto an array...
//        if (checkboxes[i].checked == true) {
//         //   checkboxesChecked.push(checkboxes[i]);
//         let cardMsg1 = document.getElementById("postMessage").value;
//           $('#selectedSypmtoms').append(`<li class="list-group-item symptomsDisplay" name="symName">
//         ${checkboxes[i].checked.innerHTML}</li>`);
//        }
//     }
//     // Return the array if it is non-empty, or null
//     // return checkboxesChecked.length > 0 ? checkboxesChecked : null;
//   }
  
  // Call as
  // var singlecheckbox = getCheckedBoxes("mycheckboxes");


// module.exports = {printListToDom, getCheckedBoxes};

module.exports = {printListToDom};