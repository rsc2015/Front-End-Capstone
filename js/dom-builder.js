"use strict";

let $ = require('jquery');


function printListToDom(symptomsList){
    console.log("symptomsList", symptomsList);
    // let eventsArray = meetupList.events;
    for (var i=0; i < 10; i++){
        let symptomNames = symptomsList.symptoms;
        console.log("Symptom Name:", symptomNames[i].name);
        $('#symptomData').append(`<li class="list-group-item symptomsDisplay" name="symName">
        ${symptomNames[i].name}<input class="singlecheckbox" type="checkbox" name="test" value="1" /></li>`);
    }
    }

    var input;

    $('.singlecheckbox').on('change', function() {
        if($('.singlecheckbox:checked').length > 2) {
            input.checked = false;
        }
     });


module.exports = {printListToDom};