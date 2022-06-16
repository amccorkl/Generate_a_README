const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const util = require("util");
// const generateMarkdown = require(./)

const writeFileAsync = (filename, data) => {
    fs.writeFile(filename, data, function (err) {
        if (err) console.log(err);
    })
    return true;
}

const questions = () => inquirer.prompt ([
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
        message: 'Describe your project',
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
        message: 'Contributiond: ',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Tests:',
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
    
  ])
//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });

// //keys username, email, title, description, installation, usage, contributing, test, license

function generateMarkdown(data) {
    return
    `#Project Title: ${data.title}
    ##Description: ${data.description}
    
    ##Table of Contents
    *[Installation](#installation)
    *[Usage]{#usage}
    *[Contributions]{#contributions}
    *[Tests]{#test}
    *[License]{#license}
    *[Questions]{#questions}

    ###Installation

    ###Usage

    ###Contributions

    ###Tests

    ###License
    
    ###Questions
    If you have any questions about the README, please reach out to ${data.email} or through Github [Github](https://github.com/${data.username})`
}
