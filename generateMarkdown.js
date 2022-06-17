/// //keys username, email, title, description, installation, usage, contributing, test, license
function generateMarkdown(data) {
    //return
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

module.exports = generateMarkdown;
