// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project name',
        message: 'What is your project name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }   else {
                console.log('Please enter your project name!');
                return false;
            }
        }
    },
    //ADD MORE MORE MORE MORE MORE MORE MORE MORE MORE
];

// TODO: Create a function to write README file 
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
