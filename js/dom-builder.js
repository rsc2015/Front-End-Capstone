"use strict";

let $ = require('jquery');


function printListToDom(symptomsList){
    console.log("symptomsList", symptomsList);
    // let eventsArray = meetupList.events;
    for (var i=0; i < 10; i++){
        let symptomNames = symptomsList.symptoms;
        console.log("Symptom Name:", symptomNames[i].name);
        $('#symptomData').append(`<li class="list-group-item symptomsDisplay" name="symName">
        ${symptomNames[i].name}<input class="single-checkbox"type="checkbox" name="test" value="1" /></li>`);
    }
    }


module.exports = {printListToDom};