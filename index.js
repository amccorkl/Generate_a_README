const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const util = require("util");

// const writeFileAsync = (filename, data) => {
//     fs.writeFile(filename, data, function (error) {
//         if (error) console.log(err);
//     })
//     return true;
// }

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
    
  ])

//using the inquirer module, prompt the user for answer to create the README
inquirer.prompt(questions)
  .then((data) => {
    console.log(data);
    createAReadme(data);
  })
  .catch((error) => {
    console.log(error);
  });

// //keys username, email, title, description, installation, usage, contributing, test, license

function createAReadme(data) {
    // return
    `#Project Title: ${data.title}
    ##Project Description: ${data.description}
    
    ##Table of Contents
    *[Installation](#installation)
    *[Usage]{#usage}
    *[Contributions]{#contributions}
    *[Tests]{#test}
    *[License]{#license}
    *[Questions]{#questions}

    ###Installation Instructions:
    ${data.installation}
    ###Usage
    ${data.usage}
    ###Contributions
    ${data.contributions}
    ###Tests
    ${data.test}
    ###License
    This project is licensed under ${data.license}
    ###Questions
    If you have any questions about the README, please reach out to ${data.email} or through Github [Github](https://github.com/${data.username})`

}

const writeToFile = () => fs.writeFile(`${fileName}`, createAReadme, (error) => error ? console.log(error) : console.log('Success!'));

//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });
