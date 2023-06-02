# osullivan-challenge-nine-readme-generator

## User Story
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

## Description

Students are tasked with creating a command-line application using Node.js that will generate a readme based on user input. Users will be prompted with questions regarding the desired readme using the Node package Inquirer. After responding to the questions a README.md file will be created with the desired information.

## Installation

Run npm install and the necessary modules will be installed from package.json.

## Usage

This readme generator can be used to generate a readme file based on user input to fit his/her needs.

Video Walkthrough - (https://drive.google.com/file/d/1Hw6Ig0I7IhqVmhCfQuuFD-Dp-jfDyJBJ/view)

## Credits

Used Node.js and node packages Inquirer (https://www.npmjs.com/package/inquirer), email-validator (https://www.npmjs.com/package/email-validator). Starter code provided by UCB extension from github repository potential-enigma (https://github.com/coding-boot-camp/potential-enigma). All additional code written by Michael O'Sullivan.

## License

MIT License
