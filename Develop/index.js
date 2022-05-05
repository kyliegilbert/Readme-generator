// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a description of the project?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
      },
      {
          type: 'input',
          name: 'usage',
          message: "What is the usage information?"
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
      },
      {
        type: 'list',
        name: 'licence',
        choices: ['Mozilla', 'Apache', 'MIT', 'GNU GPLv3', 'Boost'],
      },
      {
          type: 'input',
          name: 'GitHubUsername',
          message: 'Input your GitHub username.'
      },
      {
          type: 'input',
          name: 'email',
          message: 'Input your email address.'
      },
    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

return ` # ${fileName}
# ${data.title}

![licence](https://img.shields.io/badge/licence-${data.licence}-<green>)
    
## Description 
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contribution)
* [Tests](#tests)
* [Licence](#licence)
* [Questions](#questions)

### Installation
Install the following in your Integrated terminal:
${data.installation}

### Usage
${data.usage}

### Contributions
${data.contribution}

### Tests
To test run the following:
${data.tests}

### Licence
${data.licence}

### Questions
For further questions please go to the GitHub respitory at [${data.GitHubUsername}](https://github.com/${data.GitHubUsername})
or via email at [${data.email}](${data.email})
` 
    
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then((inquirerResponse, data) => {   
        console.log("Making ReadMe");
        fs.writeFileSync("ReadMe.md", writeToFile("README.md", inquirerResponse));
    })
    .catch((err) => {
    console.log(err);
    })
    
    
}

// Function call to initialize app
init();
