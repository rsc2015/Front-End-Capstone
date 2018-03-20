"use strict";

console.log("main.js");
let $ = require('jquery');
window.Popper = require('popper.js');
let db = require("./db-interaction");
let templates = require("./dom-builder");
let user = require("./user");

 
// $(document).ready(function(){
//     $("#selectSymptom").click(function(){
//         $("#exampleModalLong").modal();
//     });
// });

// $(document).ready(function(){
//     $(".dropdown-toggle").dropdown();
//   });

// $(function () {
//     $('[data-toggle="popover"]').popover()({
//     placement : 'top',
//         trigger : 'hover'
//     });
//   });

//   $(".pop").popover({ trigger: "manual" , html: true, animation:false})
//     .on("mouseenter", function () {
//         var _this = this;
//         $(this).popover("show");
//         $(".popover").on("mouseleave", function () {
//             $(_this).popover('hide');
//         });
//     }).on("mouseleave", function () {
//         var _this = this;
//         setTimeout(function () {
//             if (!$(".popover:hover").length) {
//                 $(_this).popover("hide");
//             }
//         }, 300);
// });