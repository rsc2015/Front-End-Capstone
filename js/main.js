"use strict";

console.log("main.js");
let $ = require('jquery');

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

 
