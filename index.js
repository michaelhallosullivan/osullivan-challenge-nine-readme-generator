const inquirer = require("inquirer");
const fs = require("fs");
const emailValidator = require('email-validator');

const questions = [ 
    "What is the title of your project?",
    "How would you describe the purpose of your project?",
    "Any special instructions for installing your application/project?",
    "How would you describe the usage of your project?",
    "What type of license would you like to include in your project?",
    "Any packages, frameworks, people, or other sources you would like to contribute to your project?",
    "Are there any tests associated with your project? How would you go about implementing them?",
    "What is your Github username?",
    "What is your e-mail address?"
];

class Data {
    constructor (title, description, installation, usage, license, contributing, tests, username, email) {
        this.title = title;
        this.description = description;
        this.installation = installation;
        this.usage = usage;
        this.license = license,
        this.contributing = contributing;
        this.tests = tests;
        this.username = username;
        this.email = email;
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
${license}

## Description
    
${data.description}

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
    1. [Github](#github-profile)
    2. [E-mail](#e-mail-address)
    
## Installation
    
${data.installation}
    
## Usage
    
${data.usage}

## License

${data.license}
    
## Contributing
    
${data.contributing}
    
## Tests
    
${data.tests}

## Questions
### Github Profile
https://github.com/${data.username}
### E-mail Address
${data.email}
`;
};

inquirer
    .prompt([
        {
            type: "input",
            message: questions[0],
            name: "title",
        },
        {
            type: "input",
            message: questions[1],
            name: "description",
        },
        {
            type: "input",
            message: questions[2],
            name: "installation",
        },
        {
            type: "input",
            message: questions[3],
            name: "usage",
        },
        {
            type: "list",
            message: questions[4],
            name: "license",
            choices: ["GNU GPL v3", "The MIT License", "BSD 3-Clause License", "Apache 2.0 License"],
        },
        {
            type: "input",
            message: questions[5],
            name: "contributing",
        },
        {
            type: "input",
            message: questions[6],
            name: "tests",
        },
        {
            type: "input",
            message: questions[7],
            name: "username",
        },
        {
            type: "input",
            message: questions[8],
            name: "email",
            validate: emailValidator.validate,
        },
    ])
    .then((response) => {
        data = new Data(response.title, response.description, response.installation, response.usage, response.license, response.contributing, response.tests, response.username, response.email);
        init();
        writeToFile();
});