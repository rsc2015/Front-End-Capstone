"use strict";

let $ = require('jquery');
let user = require("./user");

function printListToDom(symptomsList){
  //console.log("symptomsList1", symptomsList);
 user.getUser();
  let symptomListRender =
   $(`<div class="card symptom-card">
     <div class="card-body">
       <h5 class="card-title symptomsHeading1">Symptoms to track</h5>
       <p class="card-text symptomsSubHeading1">Begin by choosing upto 4 symptoms to manage.</p>
       <ul class="list-group list-group-flush symptomsDisplay" id="symptomData"></ul>
     </div>
   </div>`);
   $(".card1").html(symptomListRender);
   for (var i=0; i < 12; i++){
    let symptomNames = symptomsList;
      console.log("Symptom Name:", symptomNames[i].name);
      $('#symptomData').append(`<li class="list-group-item symptomsDisplay" name="symName">
      <input class="singlecheckbox" type="checkbox" name="test" value="1"/>${symptomNames[i].name}</li>`);
  }
   let historyDisplay =
      $(`<div class="card">
          <div class="card-body box-right">
            <h5 class="card-title symptomsHeading1">My History</h5>
              <p class="card-text symptomsSubHeading1">If you can determine when your symptoms first began.</p>
                <div class="symptom-card-text" id="enterHistory">
                </div>
             <a href="#" class="btn btn-primary btn-1">Continue</a>
          </div>
        </div>`);
      $(".box-right1").html(historyDisplay);
      let form =
          $(`<form action="/action_page.php">
          <div class="form-group">
              <label class="symptomsHeading1">Symptom Onset Date:</label><br>
              <input type="date" class="form-control" id="form--date" placeholder="date" value="><br>
          </div>
          <div class="form-group">
              <label class="symptomsHeading1">List all current Medications:</label><br>
              <input type="text" class="form-control" id="form--medication1" placeholder="medication #1" value=""><br>
              <input type="text" class="form-control" id="form--medication2" placeholder="medication #2" value=""><br>
              <input type="text" class="form-control" id="form--medication3" placeholder="medication #3" value=""><br>
              <input type="text" class="form-control" id="form--medication4" placeholder="medication #4" value=""><br>
            
          </div>
          <div class="form-group">
              <label class="symptomsHeading1">Physician Visited:</label><br>
              <input type="text" class="form-control" id="form--physician1" placeholder="physician #1" value=""><br>
              <input type="text" class="form-control" id="form--physician2" placeholder="physician #2" value=""><br>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>`);
        $(".symptom-card-text").html(form);
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

    // function createHistoryForm(historyForm) {
    //   let $historyDisplay =
    //   $(`<div class="card">
    //       <div class="card-body box-right">
    //         <h5 class="card-title symptomsHeading1">My History</h5>
    //           <p class="card-text symptomsSubHeading1">If you can determine when your symptoms first began.</p>
    //             <div class="symptom-card-text" id="enterHistory">
    //             </div>
    //         <a href="#" class="btn btn-primary btn-1">Continue</a>
    //       </div>
    //     </div>`);
    //   $(".box-right1").html($historyDisplay);
    //   for (let history in historyForm ) {
    //     let currentHistory = historyForm[history],
    //         historyForm = $("<div>", {class: "history-list__item"}),
    //         title = $("<span/>", {class: "song-title"}).text(currentSong.title),
    //         songListData = $("<ul/>", {class: "song-list__item--data"}),
    //         songListEdit = $("<a>", {"data-edit-id": song, class: "edit-btn waves-effect waves-light btn", text: "edit" }),
    //         songListDelete = $("<a>", {"data-delete-id": song, class: "delete-btn waves-effect waves-light btn", text: "delete" });
    //         // Same as `<a id="${song}" class="delete-btn waves-effect waves-light btn">delete</a>`
    
    //     songListData.append(
    //       `<li>${currentSong.artist}</li>
    //       <li>${currentSong.album}</li>
    //       <li>${currentSong.year}</li>`);
    
    //     $(".song-list").append(songListItem.append(title));
    //     $(".song-list").append(songListItem.append(songListData).append(songListDelete).append(songListEdit));
    //   }
    // }
    
    // function historyForm(history, historyId) {
    //   return new Promise(function (resolve, reject) {
    //     let historyItem = {
    //       date: history ? history.date : "",
    //       medication1 : history ? history.medication1 : "",
    //       medication2: history ? history.medication2: "",
    //       medication3: history ? history.medication3: "",
    //       medication4: history ? history.medication4: "",
    //       physician1: history ? history.physician1: "",
    //       physician2: history ? history.physician2: "",
    //       formTitle: history ? `Edit "${history.title}"` : "Add a new history",
    //       btnText: history ? "save changes" : "save history",
    //       btnId: history ? "save_edit_btn" : "save_new_btn"
    //     },
    //     form =
    //     `<form action="/action_page.php">
    //     <div class="form-group">
    //         <label class="symptomsHeading1">Symptom Onset Date:</label><br>
    //         <input type="date" class="form-control" id="form--date" placeholder="date" value="${historyItem.date}><br>
    //     </div>
    //     <div class="form-group">
    //         <label class="symptomsHeading1">List all current Medications:</label><br>
    //         <input type="text" class="form-control" id="form--medication1" placeholder="medication #1" value="${historyItem.medication1}"><br>
    //         <input type="text" class="form-control" id="form--medication2" placeholder="medication #1" value="${historyItem.medication2}"><br>
    //         <input type="text" class="form-control" id="form--medication3" placeholder="medication #1" value="${historyItem.medication3}"><br>
    //         <input type="text" class="form-control" id="form--medication4" placeholder="medication #1" value="${historyItem.medication4}"><br>
    //       <!-- <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"> -->
    //     </div>
    //     <div class="form-group">
    //         <label class="symptomsHeading1">Physician Visited:</label><br>
    //         <input type="text" class="form-control" id="form--physician1" placeholder="physician #1" value="${historyItem.physician1}"><br>
    //         <input type="text" class="form-control" id="form--physician2" placeholder="physician #2" value="${historyItem.physician2}"><br>
    //     </div>
    //     <button type="submit" class="btn btn-primary ${historyItem.btnId}" id="${historyId}>${historyItem.btnText}</button>
    //   </form>`;
    //     resolve(form);
    //   });
    // }
   
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
// createHistoryForm,
//historyForm
module.exports = {
  printListToDom,
  };