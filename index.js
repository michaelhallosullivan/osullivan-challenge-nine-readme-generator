const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    "What type of license would you like to include in your project?", 
    "What is the title of your project?",
    "How would you describe the purpose of your project?",
    "Any special instructions for installing your application/project?",
    "How would you describe the usage of your project?",
    "Any packages, frameworks, people, or other sources you would like to credit in your project?"
];

class Data {
    constructor (license, title, description, installation, usage, credits) {
    this.license = license,
    this.title = title;
    this.description = description;
    this.installation = installation
    this.usage = usage;
    this.credits = credits;
    };
};

let data = "";

let readMe = "";

function writeToFile() {
    fs.writeFile("README.md", readMe, (err) =>
    err ? console.error(err) : console.log("Generated README.md")
    );
};

function init() {
    readMe = 
`# ${data.title}
    
## Description
    
${data.description}
    
## Installation
    
${data.installation}
    
## Usage
    
${data.usage}
    
## Credits
    
${data.credits}
    
## License
    
${data.license}`;
};

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
        data = new Data(response.license, response.title, response.description, response.installation, response.usage, response.credits);
        init();
        writeToFile();
});