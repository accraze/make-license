var fs = require('fs');
var inquirer = require("inquirer");
var mit = require("./licenses/mit")
var isc = require("./licenses/isc")
var unlicense = require("./licenses/unlicense")

module.exports = makeLicense

function makeLicense (args) {

  if (args.license === 'MIT') {
    var questions = copyrightQuestions();
    inquirer.prompt(questions, function(answers){
      var license = "The MIT License (MIT)\n\n"
      license += "Copyright (c) "+ answers.years + " " + answers.name;
      license += mit;
      print(license);
    });
  }
  else if (args.license === 'ISC'){
    var questions = copyrightQuestions();
      inquirer.prompt(questions, function(answers){
        var license = "Copyright (c) "
        license += answers.years + ", " + answers.name;
        license += isc;
        print(license);
    });
  }
  else if (args.license === 'NO LICENSE'){
    var questions = copyrightQuestions();
      inquirer.prompt(questions, function(answers){
        var license = "Copyright (c) "
        license += answers.years + ", " + answers.name;
        print(license);
    });
  }
  else if (args.license === 'UNLICENSE') {
    var questions = unlicenseQuestions();
    var filename=''
      inquirer.prompt(questions, function(answers){
        filename = answers.filename;
        print(unlicense, filename);
      })
  }
  else{
    throw Error('License Not Found');
  }
}

function copyrightQuestions() {
   var questions = [
      {
        type: "input",
        name: "name",
        message: "Full Name"
      },
      {
        type: "input",
        name: "years",
        message: "Year(s)"
      }
    ];

    return questions;
}

function unlicenseQuestions() {
   var questions = [
      {
        type: "input",
        name: "filename",
        message: "File name",
        default: "UNLICENSE"
      }
    ];
    return questions;
}

function print(license, filename) {
    if (!filename) {
      var filename = "LICENSE";
    }
    var stream = fs.createWriteStream(filename);
    stream.once('open', function(fd) {
      stream.write(license);
      stream.end();
    });
};
