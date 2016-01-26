var fs = require('fs');
var inquirer = require("inquirer");

module.exports = makeLicense

function makeLicense (args) {
  console.log(args.license)
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
    print(unlicense);
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

function print(license) {
    var stream = fs.createWriteStream("LICENSE");
    stream.once('open', function(fd) {
      stream.write(license);
      stream.end();
    });
};

var mit = "\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\n"+
"of this software and associated documentation files (the \"Software\"), to deal\n"+
"in the Software without restriction, including without limitation the rights\n"+
"to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n"+
"copies of the Software, and to permit persons to whom the Software is\n"+
"furnished to do so, subject to the following conditions:\n"+
"\n"+
"The above copyright notice and this permission notice shall be included in all\n"+
"copies or substantial portions of the Software.\n"+
"\n"+
"THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n"+
"IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n"+
"FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n"+
"AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n"+
"LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n"+
"OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n"+
"SOFTWARE.";

var isc = " \n\n"+
"Permission to use, copy, modify, and/or distribute this software for any\n"+
"purpose with or without fee is hereby granted, provided that the above\n"+
"copyright notice and this permission notice appear in all copies.\n"+
"\n"+
"THE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES\n"+
"WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF\n"+
"MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR\n"+
"ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES\n"+
"WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN\n"+
"ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF\n"+
"OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.\n";

var unlicense = "This is free and unencumbered software released into the public domain.\n"+
"\n"+
    "Anyone is free to copy, modify, publish, use, compile, sell, or\n"+
    "distribute this software, either in source code form or as a compiled\n"+
    "binary, for any purpose, commercial or non-commercial, and by any\n" +
    "means.\n"+
"\n" +
    "In jurisdictions that recognize copyright laws, the author or authors\n" +
    "of this software dedicate any and all copyright interest in the\n" +
    "software to the public domain. We make this dedication for the benefit\n" +
    "of the public at large and to the detriment of our heirs and\n"+
    "successors. We intend this dedication to be an overt act of\n"+
    "relinquishment in perpetuity of all present and future rights to this\n"+
    "software under copyright law.\n"+
"\n"+
    "THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\n"+
    "EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n"+
    "MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.\n"+
    "IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR\n"+
    "OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,\n"+
    "ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR\n"+
    "OTHER DEALINGS IN THE SOFTWARE.\n"+
"\n"+
    "For more information, please refer to <http://unlicense.org>";
