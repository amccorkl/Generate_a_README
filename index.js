const fs = require("fs");
const inquirer = require("inquirer");
// const util = require("util");
const generateMarkdown = require("./generateMarkdown.js");

//async and promisfy??


//using the inquirer module, prompt the user for answer to create the README
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of this project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the what, why, and how of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What installation instructions will you make available?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What do users need to know to use this application?',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Do you want others to contribute to your project, if so, include guidelines.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'If tests have been run on your application, provide them here.',
      },
    {
      type: 'checkbox',
      message: 'What type of license should your have?',
      name: 'license',
      choices: [
        "MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", 
        "Apache 2.0 [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",  
        "GPL 3.0 [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)", 
        "BOOST [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
        "None"
        ],
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What dependencies need to be installed for the README to work properly?',
        default: 'npm install',
    },
    
  ]

//initialize the app
const init = function() {
  inquirer.prompt(questions)
  .then((data) => {
    console.log(data);
    writeToFile("README.md", generateMarkdown(data))
  })
}

//write readme file
const writeToFile = function (fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if(err) {
      return console.log(err);
    }
    console.log("Successful README generating");
  })
}

init();

// const writeToFile = () => fs.writeFile(`${fileName}`, createAReadme, (error) => error ? console.log(error) : console.log('Success!'));

//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });
