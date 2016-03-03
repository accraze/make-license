#!/usr/bin/env node --harmony

var inquirer = require("inquirer");
var makeLicense = require("./make-license.js")

console.log("make-license");


var questions = [
  {
    type: "list",
    name: "license",
    message: "Choose a License",
    choices: [ "MIT", "ISC", "BSD 3", "UNLICENSE", "NO LICENSE" ]
  }
];

inquirer.prompt(questions, function( answers ) {
  makeLicense(answers);
});
