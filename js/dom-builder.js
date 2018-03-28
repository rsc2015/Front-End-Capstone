"use strict";

let $ = require('jquery');
let user = require("./user");

function printListToDom(symptomsList){
  //console.log("symptomsList1", symptomsList);
 user.getUser();
  let symptomListRender =
   $(`<div class="card symptom-card">
     <div class="card-body" id="myHistory1">
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
      <input class="singlecheckbox" type="checkbox" name="symCheckName" value="1" id="${symptomNames[i].name}"/>${symptomNames[i].name}</li>`);
  }
   let historyDisplay =
      $(`<div class="card">
          <div class="card-body box-right">
            <h5 class="card-title symptomsHeading1">My History</h5>
              <p class="card-text symptomsSubHeading1">If you can determine when your symptoms first began.</p>
                <div class="symptom-card-text" id="enterHistory">
                </div>
             
          </div>
        </div>`);
      $(".box-right1").html(historyDisplay);
      let form =
        $(`<div class="form-group">
              <label class="symptomsHeading1"><b>Symptom Onset Date:</b></label><br>
              <input type="date" class="form-control" id="form-date" placeholder="date" value="><br>
          </div>
          <div class="form-group">
              <label class="symptomsHeading1"><b>List all current Medications:</label><br>
              <input type="text" class="form-control" id="form-medication1" placeholder="medication #1" value=""><br>
              <input type="text" class="form-control" id="form-medication2" placeholder="medication #2" value=""><br>
              <input type="text" class="form-control" id="form-medication3" placeholder="medication #3" value=""><br>
          </div>
          <div class="form-group">
              <label class="symptomsHeading1">Physician Visited:</label><br>
              <input type="text" class="form-control" id="form-physician1" placeholder="physician #1" value=""><br>
              <input type="text" class="form-control" id="form-physician2" placeholder="physician #2" value=""><br>
          </div>
          <button type="submit" class="btn btn-primary save_new_btn" id="submitHistory">Submit</button>`);
        $(".symptom-card-text").html(form);
  }

  //function to render input values to DOM
  // let myForm = document.getElementById("submit-history");
  //   //Extract Each Element Value
  //   for (var i = 0; i < submit-history.elements.length; i++) {
  //   console.log("form-value", submit-history.elements[i].value);
  //   }

    function createHistoryFormList(historyList) {
      let $historyListDisplay =
      $(`<div class="uiContainer__history-list col-sm-12"">
        <ul class="history-list">
        </ul>
        </div>`);
      $(".content-1").html($historyListDisplay);
     for (let history in historyList ) {
        let currentHistory = historyList[history],
            historyListItem = $("<li>", {class: "history-list__item"}),
            title = $("<span/>", {class: "history-title"}).text(currentHistory.title),
            historyListData = $("<ul/>", {class: "history-list__item--data"}),
            historyListEdit = $("<a>", {"data-edit-id": history, class: "edit-btn waves-effect waves-light btn", text: "edit" }),
            historyListDelete = $("<a>", {"data-delete-id": history, class: "delete-btn waves-effect waves-light btn", text: "delete" });
            
            historyListData.append(
          `<li>${currentHistory.date}</li>
          <li>${currentHistory.med1}</li>
          <li>${currentHistory.med2}</li>
          <li>${currentHistory.med3}</li>
          <li>${currentHistory.phy1}</li>
          <li>${currentHistory.phy2}</li>`);
        $(".history-list").append(historyListItem.append(title));
        $(".history-list").append(historyListItem.append(historyListData).append(historyListDelete).append(historyListEdit));
        console.log("currentHistory", currentHistory);
      }
    }




    function historyForm(history, historyId) {
      return new Promise(function (resolve, reject) {
        let historyItem = {
          date: history ? history.date : "",
          medication1 : history ? history.medication1 : "",
          medication2: history ? history.medication2: "",
          medication3: history ? history.medication3: "",
          medication4: history ? history.medication4: "",
          physician1: history ? history.physician1: "",
          physician2: history ? history.physician2: "",
          formTitle: history ? `Edit "${history.title}"` : "Add a new history",
          btnText: history ? "save changes" : "save history",
          btnId: history ? "save_edit_btn" : "save_new_btn"
        },
        form =
        `<div class="form-group">
            <label class="symptomsHeading1">Symptom Onset Date:</label><br>
            <input type="date" class="form-control" id="form--date" placeholder="date" value="${historyItem.date}><br>
        </div>
        <div class="form-group">
            <label class="symptomsHeading1">List all current Medications:</label><br>
            <input type="text" class="form-control" id="form-medication1" placeholder="medication #1" value="${historyItem.medication1}"><br>
            <input type="text" class="form-control" id="form-medication2" placeholder="medication #1" value="${historyItem.medication2}"><br>
            <input type="text" class="form-control" id="form-medication3" placeholder="medication #1" value="${historyItem.medication3}"><br>
            
        </div>
        <div class="form-group">
            <label class="symptomsHeading1">Physician Visited:</label><br>
            <input type="text" class="form-control" id="form-physician1" placeholder="physician #1" value="${historyItem.physician1}"><br>
            <input type="text" class="form-control" id="form-physician2" placeholder="physician #2" value="${historyItem.physician2}"><br>
        </div>
        <button id="${historyId}" class=${historyItem.btnId}>${historyItem.btnText}</button>`;
        resolve(form);
      });
    }
  


// module.exports = {printListToDom, getCheckedBoxes};
// createHistoryForm,
//historyForm
module.exports = {
  printListToDom,
  createHistoryFormList,
  historyForm
  };


  // <form action="">
  // <form action="/action_page.php">
  // $('#symptomData').getLabels();
     // function to select the symptoms from the symptomlist
    //  function printSymptomToBox(symptomsList){ 
      // let symptomItems = document.getElementsByClassName("singlecheckbox");
      // console.log("symptomItems", symptomItems); 
      // let symptomItemNames = document.getElementsByName("symName");
      // console.log("symptomItemNames", symptomItemNames);
      // var symItems = document.getElementsByName("symCheckName");
      //        console.log("symItems", symItems);
      //        var symItems = document.getElementsByName("symCheckName");
      //        console.log("symItems-inter", symItems);
      //        var selectedSymptoms = "";
      //        for (var i = 0; i < symItems.length; i++ ){
      //            if (symItems[i].type == 'checkbox' && symItems.item(i).checked == true);
      //             selectedSymptoms += symptomItemNames[i].innerText;
                  
      //        }
      //        console.log("selectedSymptoms", selectedSymptoms);