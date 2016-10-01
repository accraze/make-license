#!/usr/bin/env node --harmony

var inquirer = require("inquirer");
var makeLicense = require("./make-license.js")

console.log("make-license");


var questions = [
  {
    type: "list",
    name: "license",
    message: "Choose a License",
    choices: [ "MIT", "ISC", "BSD 2", "BSD 3", "Apache 2.0", "UNLICENSE", "NO LICENSE" ]
  }
];

inquirer.prompt(questions).then(function(answers) {
  makeLicense(answers);
});
