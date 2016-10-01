var fs = require('fs');
var inquirer = require("inquirer");
var mit = require("./licenses/mit")
var isc = require("./licenses/isc")
var bsd3 = require("./licenses/bsd3")
var apache2 = require("./licenses/apache2")
var unlicense = require("./licenses/unlicense")

module.exports = makeLicense

function makeLicense (args) {

  if (args.license === 'MIT') {
    var questions = copyrightQuestions();
    inquirer.prompt(questions).then(function(answers){
      var license = "The MIT License (MIT)\n\n"
      license += "Copyright (c) "+ answers.years + " " + answers.name;
      license += mit;
      print(license);
    });
  }
  else if (args.license === 'ISC'){
    var questions = copyrightQuestions();
      inquirer.prompt(questions).then(function(answers){
        var license = "Copyright (c) "
        license += answers.years + ", " + answers.name;
        license += isc;
        print(license);
    });
  }
  else if (args.license === 'BSD 2'){
    var questions = copyrightQuestions();
      inquirer.prompt(questions).then(function(answers){
        var license = "Copyright (c) "
        license += answers.years + ", " + answers.name;
        license += bsd2;
        print(license);
    });
  }
  else if (args.license === 'BSD 3'){
    var questions = copyrightQuestions();
      inquirer.prompt(questions).then(function(answers){
        var license = "Copyright (c) "
        license += answers.years + ", " + answers.name;
        license += bsd3;
        print(license);
    });
  }
  else if (args.license === 'Apache 2.0'){
    var questions = copyrightQuestions();
      inquirer.prompt(questions).then(function(answers){
        var license = "Copyright (c) "
        license += answers.years + ", " + answers.name;
        license += apache2;
        print(license);
    });
  }
  else if (args.license === 'NO LICENSE'){
    var questions = copyrightQuestions();
      inquirer.prompt(questions).then(function(answers){
        var license = "Copyright (c) "
        license += answers.years + ", " + answers.name;
        print(license);
    });
  }
  else if (args.license === 'UNLICENSE') {
    var questions = unlicenseQuestions();
    var filename=''
      inquirer.prompt(questions).then(function(answers){
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
