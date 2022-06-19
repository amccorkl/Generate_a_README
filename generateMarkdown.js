 //keys username, email, title, description, installation, usage, contributing, test, license
// information is fed dynamiccally from the index.js prompts


function generateMarkdown(data) {
return `# Project Title: ${data.title}
${data.license}

## Project Description:
${data.description}


\`\`\`
AS a Developer
I WANT
SO THAT

\`\`\`

## Table of Contents:
* [Installation:](#installation)
* [Usage:](#usage)
* [Tests:](#tests)
* [Contributions](#contributions)
* [Questions:](#questions)


## Installation:
${data.installation}
<br>

## Usage: 
${data.usage}
<br>

## Tests:
${data.test}
<br>

## Contributions:
This was made by ${data.contributions}
<br>

### Questions:
* If you have any questions about the README, please reach out to me.
* Email: ${data.email} 
* Github: (https://github.com/${data.username})`
}

module.exports = generateMarkdown;
