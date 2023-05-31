// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    "What type of license would you like to include in your project?", 
    "What is the title of your project?",
    "How would you describe the purpose of your project?",
    "Any special instructions for installing your application/project?",
    "How would you describe the usage of your project?",
    "Any packages, frameworks, people, or other sources you would like to credit in your project?"
];

let answers = [];

inquirer
  .prompt([
    {
        type: "list",
        message: questions[0],
        name: "license",
        choices: ["GNU", "MIT", "BSD", "Apache"],
    },
    {
        type: "input",
        message: questions[1],
        name: "title",
    },
    {
        type: "input",
        message: questions[2],
        name: "description",
    },
    {
        type: "input",
        message: questions[3],
        name: "installation",
    },
    {
        type: "input",
        message: questions[4],
        name: "usage",
    },
    {
        type: "input",
        message: questions[5],
        name: "credits",
    },
  ])
  .then((response) => {
    answers = [response.license, response.title, response.description, response.installation, response.usage, response.credits];
});



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
