const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const path = require("path");

//async and promisfy??

//using the inquirer module, prompt the user for answer to create the README including an array object for a license choice
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of this project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe the what, why, and the how of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What installation instructions will you make available?",
  },
  {
    type: "input",
    name: "usage",
    message: "What do users need to know to use this application?",
  },
  {
    type: "input",
    name: "contributions",
    message:
      "Do you want others to contribute to your project, if so, include guidelines.",
  },
  {
    type: "input",
    name: "test",
    message: "If tests have been run on your application, provide them here.",
  },
  {
    type: "list",
    message: "What type of license should you have?",
    name: "license",
    choices: [
      {
        name: "MIT",
        value:
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      },
      {
        name: "Apache 2.0",
        value:
          "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      },
      {
        name: "GPL 3.0",
        value:
          "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
      },
      {
        name: "BOOST",
        value:
          "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
      },
      { name: "None", value: "" },
    ],
  },
  {
    type: "input",
    name: "dependencies",
    message:
      "What dependencies need to be installed for the README to work properly?",
    default: "npm install",
  },
];

//initialize the app
const init = function () {
  inquirer.prompt(questions).then((data) => {
    // console.log(data);
    writeToFile("README.md", generateMarkdown(data));
  });
};

//write readme file
const writeToFile = function (fileName, questions) {
  fs.writeFileSync(path.join(__dirname, "/examples/", fileName), questions);
};

init();
