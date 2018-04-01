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
      <input class="singlecheckbox" type="checkbox" name="symCheckName" value="${symptomNames[i].name}" id="${symptomNames[i].name}"/>${symptomNames[i].name}</li>`);
  }
//   var checkedValue = $('.singlecheckbox:checked').val();
// console.log("checkedValue", checkedValue);
      let historyDisplay =
        $(`<div class="card">
            <div class="card-body box-right">
              <h5 class="card-title symptomsHeading1">My Medical Info</h5>
                <p class="card-text symptomsSubHeading1">Fill in the following form</p>
                  <div class="symptom-card-text" id="enterHistory">
                
                  </div>
                  
            </div>
          </div>`);
        $(".box-right1").html(historyDisplay);
      let form =
        $(`<form class="row form-container" id="submit-history" method="get">
        <div class="form-group">
              <label class="symptomsHeading1"><b>Symptom Onset Date:</b></label><br>
              <input type="date" class="form-control" id="form-date" placeholder="date" value=""><br>
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
          <button type="button" class="btn btn-primary save_new_btn" id="submitHistory">Submit</button>
          </form>`);
        $(".symptom-card-text").html(form);
        
        symptomListChecked();
        symptomListOutput();

}

//function to select the value of the checkedboxes
var symSelected = [ ];
function symptomListChecked(){
        $(".singlecheckbox").one("click", function()  {
               console.log("event listener attached");
               console.log("checked this", this);
              var thisChecked = $(this).val();
              symSelected.push(thisChecked);
              // console.log("thisChecked", thisChecked );
               console.log("symSelected", symSelected);      
        });
      }


      //function to render the value of the checkedboxes
      function symptomListOutput(){
        var printTheSym  = "<h6>Select Intensity</h6>";
       printTheSym += "<ul> "; 
        for (var j=0; j < symSelected.length; j++){
            // printTheSym += "<br>" + symSelected[j];
      printTheSym += " <li>" + symSelected[j] + "</li>"; 
      //       console.log("printTheSym", printTheSym);
          } 
          printTheSym += "</ul>";
          return printTheSym;
        }


        function mySymTrakRange() {
          symptomListOutput();
          var symLi = document.getElementsByTagName("LI");
          var att = document.createAttribute("class");
          att.value = "symclass";
          symLi.setAttributeNode(att);
      }




    function createHistoryFormList(historyList) {
      let viewSymTrakOnDom = 
      $(`<div class="row viewSymptomList  viewLiveChart">
        <div class="col-sm-5  viewSymptomList">
          <div class="card symptom-list">
            <div class="card-body" id="myHistory2">
                <h5 class="card-title symptomsHeading1">Track Your Symptom</h5>
                <p class="card-text symptomsSubHeading1">Select your intensity for today</p>
                <div class="symTrakList">
                
               </div>               
          </div>
          </div>
          <div class="card symptom-card medical-info">
          
        </div>
        </div> 
        <div class="col-sm-7">
           <div class="card symptom-card">
               <div class="card-body chartDisplay" id="myHistory4">
                                  
               </div>
           </div>
           </div>
         </div>`);
      $(".track-symptom1").html(viewSymTrakOnDom);
      $(".symTrakList").html(symptomListOutput);
      
      let medicationList =
      $(`<div class="card-body" id="myHistory3">
        <h5 class="card-title symptomsHeading1">Your Current Medication Info:</h5>
      
        <div class="history-list">
        </div>        
        </div>`);
      $(".medical-info").html(medicationList);
     for (let history in historyList ) {
        let currentHistory = historyList[history],
            historyListItem = $("<div>", {class: "history-list__item"}),
            // title = $("<span/>", {class: "history-title"}).text(currentHistory.title),
            historyListData = $("<div>", {class: "history-list__item--data"}),
            historyListEdit = $("<a>", {"data-edit-id": history, class: "edit-btn list-btn edit-info", text: "edit" }),
            historyListDelete = $("<a>", {"data-delete-id": history, class: "delete-btn list-btn delete-info", text: "delete" });
            
            historyListData.html(
          `<p>Symptom Onset:&nbsp;${currentHistory.date}</p>
          <div class="medList"><h6>Medication List:</h6><ul>
          <li>${currentHistory.medication1}</li>
          <li>${currentHistory.medication2}</li>
          <li>${currentHistory.medication3}</li></ul><div>
          <div class="phyList"><h6>Physician visited:</h6><ul>
          <li>${currentHistory.physician1}</li>
          <li>${currentHistory.physician2}</li></ul><div>`);
        // $(".history-list").append(historyListItem.append(title));
        $(".history-list").html(historyListItem.append(historyListData).append(historyListEdit).append(historyListDelete));
        console.log("currentHistory", currentHistory);
      }
    }
     
    


    function historyForm(history, historyId) {
      return new Promise(function (resolve, reject) {

        let historyItem = {
          date: history ? history.date : "",
          medication1 : history ? history.medication1 : "",
          medication2: history ? history.medication2 : "",
          medication3: history ? history.medication3 : "",
          physician1: history ? history.physician1 : "",
          physician2: history ? history.physician2 : "",
          // formTitle: history ? `Edit "${history.title}"` : "Add a new history",
          btnText: history ? "save changes" : "save history",
          btnId: history ? "save_edit_btn" : "save_new_btn"
        },
        
        form =
        `<form class="row form-container" id="submit-history" method="get">
        <div class="form-group">
            <label class="symptomsHeading1">Symptom Onset Date:</label><br>
            <input type="date" class="form-control" id="form-date" placeholder="date" value="${historyItem.date}"><br>
        </div>
        <div class="form-group">
            <label class="symptomsHeading1">List All Current Medications:</label><br>
            <input type="text" class="form-control" id="form-medication1" placeholder="medication #1" value="${historyItem.medication1}"></input><br>
            <input type="text" class="form-control" id="form-medication2" placeholder="medication #2" value="${historyItem.medication2}"></input><br>
            <input type="text" class="form-control" id="form-medication3" placeholder="medication #3" value="${historyItem.medication3}"></input><br>
            
        </div>
        <div class="form-group">
            <label class="symptomsHeading1">Physician Visited:</label><br>
            <input type="text" class="form-control" id="form-physician1" placeholder="physician #1" value="${historyItem.physician1}"></input><br>
            <input type="text" class="form-control" id="form-physician2" placeholder="physician #2" value="${historyItem.physician2}"></input><br>
        </div>
        <button id="${historyId}" class="${historyItem.btnId}">${historyItem.btnText}</button>
        </form>`;
        // $(".symptom-card-text").html(form);
        resolve(form);
        // console.log("this is the history form", form);
        // return printListToDom();
        
      });
      
    }
  

module.exports = {
  printListToDom,
  createHistoryFormList,
  historyForm,
  // printSymTrakListToDom
  };
