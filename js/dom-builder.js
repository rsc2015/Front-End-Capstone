"use strict";

let $ = require('jquery');
let user = require("./user");
let firebase = require("./fb-config");

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
      <input class="singlecheckbox" type="checkbox" name="symCheckName" value="${symptomNames[i].name}" id="${symptomNames[i].id}"/>${symptomNames[i].name}</li>`);
  }
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
        $(`
          <div class="form-group">
              <label class="symptomsHeading1"><b>Symptom Onset Date:</b></label><br>
              <input type="date" class="form-control" id="form-date" placeholder="date" value=""><br>
          </div>
          <div class="form-group info-inputs-1">
              <label class="symptomsHeading1"><b>List all current Medications:</b></label><br>
              <input type="text" class="form-control" id="form-medication1" placeholder="medication #1" value=""><br>
              <input type="text" class="form-control" id="form-medication2" placeholder="medication #2" value=""><br>
              <input type="text" class="form-control" id="form-medication3" placeholder="medication #3" value=""><br>
           </div>
           <div class="form-group info-inputs-2">
              <label class="symptomsHeading1"><b>Physician Visited:</b></label><br>
              <input type="text" class="form-control" id="form-physician1" placeholder="physician #1" value=""><br>
              <input type="text" class="form-control" id="form-physician2" placeholder="physician #2" value=""><br>
           </div>
          <button type="button" class="btn btn-primary save_new_btn" id="submitHistory">Submit</button>
          `);
        $(".symptom-card-text").html(form);
        
        symptomListChecked();
        symptomListOutput();

}
//<form class="row form-container" id="submit-history" method="get">
//function to select the value of the checkedboxes
var symSelected = [ ];
var k;
var symId = [];


function symptomListChecked(){
        $(".singlecheckbox").one("click", function()  {
               console.log("event listener attached");
               console.log("checked this", this);
              var thisChecked = $(this).val();
              symSelected.push(thisChecked);
              // console.log("thisChecked", thisChecked );
               console.log("symSelected", symSelected);  
               var symTrackID = $(this).attr('id');
               symId.push(symTrackID);
               console.log("thisSymID", symId);
        });  
      }
               

    //function to render the value of the checkedboxes
    function symptomListOutput(){
    var printTheSym ;
   
            for (var j=0; j < symSelected.length; j++){
            // printTheSym += "<br>" + symSelected[j];
            $(".symTrakList").append(`<li class="list-group-item symptomsInt" name="symSelect" id="${symId[k]}">${symSelected[j]} 
            <span class="intSlider"><input type="range" min="0" max="4" step="1" name="intensity" class="slider" id="${symSelected[j]}"/><output class="slider_label" value=""></output></span></li>`);
            //console.log("printTheSym", printTheSym);
          }
          return printTheSym;
        }

//function to OUTPUT  the value of the slider
        function sliderVal(){
$('.slider').on('input change', function(){
          $(this).next($('.slider_label')).html(this.value);
        });
      $('.slider_label').each(function(){
          var value = $(this).prev().attr('value');
          $(this).html(value);
          console.log("intensity value", this.value);
          
        });  
}
      


    function createHistoryFormList(historyList) {
      let viewSymTrakOnDom = 
      $(`<div class="row viewSymptomList  viewLiveChart">
        <div class="col-sm-5  viewSymptomList">
          <div class="card symptom-list">
            <div class="card-body" id="myHistory2">
                <h5 class="card-title symptomsHeading1">Track Your Symptom</h5>
                <p class="card-text symptomsSubHeading1">Use the slider to save your intensity for today<span id="today-date"></span></p>

               <ul class="symTrakList"></ul>
                
           <p class="levels">0=none:&nbsp;1=mild:&nbsp;2=moderate:&nbsp;3=difficult:&nbsp;4=severe</p>

          </div>
          </div>
          <div class="card symptom-card medical-info">
          
        </div>
        </div> 
        <div class="col-sm-7">
           <div class="card symptom-card">
               <div class="card-body chartDisplay" id="myHistory4">
               <img src="images/chart-image.png" alt="Chart-image" style="width:600px;height:550px;">
                                  
               </div>
           </div>
           </div>
         </div>`);
      $(".track-symptom1").html(viewSymTrakOnDom);
      // $(".symTrakList").html(symptomListOutput);
      symptomListOutput();
      sliderVal();
      
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

            historyListEdit = $("<button>", {"data-edit-id": history, class: "edit-btn list-btn edit-info btn btn-secondary", text: "edit" }),
            historyListDelete = $("<button>", {"data-delete-id": history, class: "delete-btn list-btn delete-info btn btn-link", text: "delete" });

            
            historyListData.html(
          `<p>Symptom Onset:&nbsp;${currentHistory.date}</p>
          <div class="medList"><h6>Medication List:</h6><ul>
          <li>${currentHistory.medication1}</li>
          <li>${currentHistory.medication2}</li>
          <li>${currentHistory.medication3}</li></ul></div>
          <div class="phyList"><h6>Physician visited:</h6><ul>
          <li>${currentHistory.physician1}</li>
          <li>${currentHistory.physician2}</li></ul></div>`);

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
        ` <div class="col-sm-6 box-right1 box-chart">
        <div class="card">
        <div class="card-body box-right">
          <h5 class="card-title symptomsHeading1">&nbsp;My Medical Info</h5>
            <p class="card-text symptomsSubHeading1">Update The Form</p>
              <div class="symptom-card-text" id="enterHistory">
            
            <div class="form-group">
            <label class="symptomsHeading1">Symptom Onset Date:</label><br>
                <input type="date" class="form-control" id="form-date" placeholder="date" value="${historyItem.date}"><br>
                </div>
                <div class="form-group info-inputs-1">    
                <label class="symptomsHeading1"><b>List All Current Medications:</b></label><br>
                <input type="text" class="form-control" id="form-medication1" placeholder="medication #1" value="${historyItem.medication1}"></input><br>
                <input type="text" class="form-control" id="form-medication2" placeholder="medication #2" value="${historyItem.medication2}"></input><br>
                <input type="text" class="form-control" id="form-medication3" placeholder="medication #3" value="${historyItem.medication3}"></input><br>
                </div>
                <div class="form-group info-inputs-2" >
            <label class="symptomsHeading1"><b>Physician Visited:</b></label><br>
                <input type="text" class="form-control" id="form-physician1" placeholder="physician #1" value="${historyItem.physician1}"></input><br>
                <input type="text" class="form-control" id="form-physician2" placeholder="physician #2" value="${historyItem.physician2}"></input><br>
                <button id="${historyId}" class="${historyItem.btnId} med-info-editBtn btn btn-secondary">${historyItem.btnText}</button>
            </div>
            
            </div>
            </div>
            </div>
        </div> `;
        // $(".symptom-card-text").html(form);
        resolve(form);
        // console.log("this is the history form", form);
        // return printListToDom();
        // printListToDom();
      });
      
    }
  
function getSymptomFB(trackObj) {
    console.log("What's in getSymptomFB", getSymptomFB);
    return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/tracking.json?orderBy="id"`
    }).done((symptomInfo) => {
        console.log("SymptomInfo", symptomInfo );
        return symptomInfo;
    }).then((symInfo) => {
        return symInfo;
    }).fail((error) => {
        return error;
    });
}


let showSingleSymptom = (mySymptoms) => { 
  console.log("mySymptoms",mySymptoms);
    return new Promise((resolve, reject) => {
       return $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/symptoms/${mySymptoms.id}.json`
    }).done((getInfo) => {
        //displaySymptomTracking(getInfo, mySymptoms);
            resolve (getInfo.responseJSON);
        }).fail((error) => {
            return reject(error);
        }); 
    });   
};



// function favoritesDetailDOM(getuchInfo) {
//     console.log("What is in getuchInfo", getuchInfo);
//     let characterPromises = [];
//     for(let myfav in getuchInfo) {
//         showSingleCharacter(getuchInfo[myfav]);
//     }  
// }

module.exports = {
  printListToDom,
  createHistoryFormList,
  historyForm,
  getSymptomFB,
  showSingleSymptom
  };
