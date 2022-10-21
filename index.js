// DEPENDENCIES
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// DATA
const questions = [
  "Enter the title of your project:",
  "Enter a description of your project:",
  "Enter Installation instructions for your project:",
  "Enter Usage information for your project:",
  "Enter Contribution guidelines for your project:",
  "Enter Testing instructions for your project:",
  "Select Liscence:",
  "Enter Github Username:",
  "Enter email address:"
];

const licenseArray = [
  'none',
  'Mozilla Public License 2.0',
  'Apache license 2.0',
  'MIT',
  'The Perl License',
]

// FUNCTIONS

// create README.md file with the generated markdown in it
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log('Success!');
  });
}

// USER INTERACTION

// get user inputs with inquirer prompts
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
        choices: licenseArray,
        name: 'license'
      },
      {
        type: 'input',
        message: questions[7],
        name: 'github',
      },
      {
        type: 'input',
        message: questions[8],
        name: 'email',
      }
    ]).then(response => {
      readMeString = generateMarkdown(response);
      writeToFile('README.md', readMeString)
    })
}

// INITIALIZATION

// run program 
init();