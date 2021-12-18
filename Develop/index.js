// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown.js');
const fs = require('fs');
const { createDecipheriv } = require('crypto');
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'user',
        message: 'What is your name? (Required)',
        validate: userInput => {
          if (userInput) {
            return true;
          } else {
            console.log('This is a required field');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('This is a required field');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('This is a required field');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is your project name? (Required)',
        validate: projectNameInput => {
          if (projectNameInput) {
            return true;
          } else {
            console.log('This is a required field');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('This is a required field');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'install',
        message: 'Please list the steps required to install your project (Required)',
        validate: instructionsInput => {
          if (instructionsInput) {
            return true;
          } else {
            console.log('This is a required field');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use of your application (Required)',
        validate: instructionsInput => {
          if (instructionsInput) {
            return true;
          } else {
            console.log('This is a required field');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        message: 'Select the appropriate license for your application (Required)',
        name: 'license',
        choices: [
          new inquirer.Separator(' = License Choices = '),
          {
            name: 'GNU',
          },
          {
            name: 'Mozilla',
          },
          {
            name: 'Apache',
          },
          {
            name: 'MIT',
          },
          {
            name: 'Boost',
          },
          {
            name: 'Unlicense',
          }
        ],
        validate(answer) {
          if (answer.length < 1) {
            return 'This is a required field.';
          }
          else if (answer.length > 1) {
            return 'You can only select one license.';
          }
  
          return true;
        },
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so.',
        validate: contributingInput => {
          if (contributingInput) {
            return true;
          }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: "If you've created test cases for your application please provide examples on how to run them.",
        validate: testsInput => {
          if (testsInput) {
            return true;
          }
        }
    }
    ]);
  };
// TODO: Create a function to write README file 
const writeFile = data => {
    //file location goes here
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your README file has been created. Look in the dist folder.')
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    //first needs to ask questions, then take answers to generate md file
    promptUser()
    .then (data => {
        return writeFile(data);
    })
    .catch(err => {
        console.log(err)
    })
}

// Function call to initialize app
init();
