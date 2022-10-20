// TODO: Include packages needed for this application
// DEPENDENCIES
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// DATA
// TODO: Create an array of questions for user input
const questions = [
  "Enter the title of your project: ",
  "Enter a description of your project: ",
  "Enter Installation instructions for your project: ",
  "Enter Usage information for your project: ",
  "Enter Contribution guidelines for your project: ",
  "Enter Testing instructions for your project: ",
  "Select Liscence: "
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: questions[0],
        name: 'title',
      },
      {
        type: 'input',
        message: questions[1],
        name: 'description',
      },
      {
        type: 'input',
        message: questions[2],
        name: 'install',
      },
      {
        type: 'input',
        message: questions[3],
        name: 'usage',
      },
      {
        type: 'input',
        message: questions[4],
        name: 'contribute',
      },
      {
        type: 'input',
        message: questions[5],
        name: 'test',
      },
      {
        type: 'list',
        message: questions[6],
        choices: 
          [
            'none',
            'Academic Free License v3.0',
            'Apache license 2.0',
            'MIT',
            'PostgreSQL License'
          ]
      }
    ]).then(response => {
      data = generateMarkdown(data);
    })
}

// Function call to initialize app
init();
