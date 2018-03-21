"use strict";

console.log("main.js");
let $ = require('jquery');
window.Popper = require('popper.js');
let db = require("./db-interaction");
let templates = require("./dom-builder");
let user = require("./user");
let login = require("./user");

$("#auth-btn").click(function(){
    console.log("clicked on Signin");
    
    login.logInGoogle()
    .then((result) => {
      console.log("result from login", result.user.uid);
      $("#auth-btn").hide();
      $("#logout").show();
      login.setUser(result.user.uid);
  
    });
  });
  
  $("#logout").click(function(){
    console.log("logout clicked");
    $("#logout").hide();
    $("#auth-btn").show();
    login.logOut();
  
  });

 
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