#!/usr/bin/env node --harmony

import inquirer from "inquirer";
import makeLicense from "./make-license.js";

console.log("make-license");

const questions = [
  {
    type: "list",
    name: "license",
    message: "Choose a License",
    choices: [ "MIT", "ISC", "BSD 2", "BSD 3", "GPL-3.0", "UNLICENSE", "NO LICENSE"]
  }
];

inquirer.prompt(questions).then(makeLicense);
