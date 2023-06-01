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
    let license = "";
    function checkLicense() {
        if (data.license === "GNU GPL v3") {
            license = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
        }
        else if (data.license === "The MIT License") {
            license = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        }
        else if (data.license === "BSD 3-Clause License") {
            license = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
        }
        else if (data.license === "Apache 2.0 License") {
            license = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        }
    };
    checkLicense();
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

${data.license}
${license}`;
};

inquirer
    .prompt([
        {
            type: "list",
            message: questions[0],
            name: "license",
            choices: ["GNU GPL v3", "The MIT License", "BSD 3-Clause License", "Apache 2.0 License"],
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