import inquirer from "inquirer";
import mit from "./licenses/mit";
import isc from "./licenses/isc";
import bsd2 from "./licenses/bsd2";
import bsd3 from "./licenses/bsd3";
import apache2  from "./licenses/apache2";
import gpl3 from "./licenses/gpl3";
import unlicense from "./licenses/unlicense";
import print from './print';

export default function makeLicense(args) {
  if (args.license === 'MIT') {
    var questions = copyrightQuestions();
    inquirer.prompt(questions).then(answers => {
      let license = "The MIT License (MIT)\n\n";
      license += `Copyright (c) ${answers.years} ${answers.name}`;
      license += mit;
      print(license);
    });
  }
  else if (args.license === 'ISC') {
    var questions = copyrightQuestions();
    inquirer.prompt(questions).then(answers => {
      let license = "Copyright (c) ";
      license += `${answers.years}, ${answers.name}`;
      license += isc;
      print(license);
    });
  }
  else if (args.license === 'BSD 2') {
    var questions = copyrightQuestions();
    inquirer.prompt(questions).then(answers => {
      let license = "Copyright (c) ";
      license += `${answers.years}, ${answers.name}`;
      license += bsd2;
      print(license);
    });
  }
  else if (args.license === 'BSD 3') {
    var questions = copyrightQuestions();
    inquirer.prompt(questions).then(answers => {
      let license = "Copyright (c) ";
      license += `${answers.years}, ${answers.name}`;
      license += bsd3;
      print(license);
    });
  }
  else if (args.license === 'GPL-3.0') {
    print(gpl3);
  }
  else if (args.license === 'Apache 2.0') {
    var questions = copyrightQuestions();
    inquirer.prompt(questions).then(function (answers) {
      var license = "Copyright (c) "
      license += answers.years + ", " + answers.name;
      license += apache2;
      print(license);
    });
  }
  else if (args.license === 'NO LICENSE') {
    var questions = copyrightQuestions();
    inquirer.prompt(questions).then(function (answers) {
      var license = "Copyright (c) "
      license += answers.years + ", " + answers.name + '\n';
      print(license);
    });
  }
  else if (args.license === 'UNLICENSE') {
    var questions = unlicenseQuestions();
    let filename = '';
    inquirer.prompt(questions).then(answers => {
      filename = answers.filename;
      print(unlicense, filename);
    })
  }
  else {
    throw Error('License Not Found');
  }
}

function copyrightQuestions() {
  const questions = [
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
  const questions = [
    {
      type: "input",
      name: "filename",
      message: "File name",
      default: "UNLICENSE"
    }
  ];
  return questions;
}



