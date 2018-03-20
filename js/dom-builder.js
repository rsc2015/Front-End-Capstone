"use strict";

let $ = require('jquery');



// Meetups to DOM
// function meetupToRenderToDom(meetupList) {
//     console.log("meetupList", meetupList);
//     let events = meetupList.events;
//     events.forEach((event)=> {
//       $('#meetups').append(`<div class="meetupevent">
//       <h3>${event.group.name}</h3>
//       <p> ${event.venue.name}<br>
//       ${event.venue.address_1}<br></p>
//       <p>${event.local_date} ${event.local_time}</p>
//       <a target="_blank" href="${event.link}">learn more</a></div>`);
//     });
// }

function printListToDom(symptomsList){
    console.log("symptomsList", symptomsList);
    let symptomName = symptomsList.name;
    console.log(symptomName);


}

module.exports = {printListToDom};