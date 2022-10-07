// TODO: Include packages needed for this application
const start = require('inquirer');
const fs = require('fs');
const genMD = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide: What was your motivation? Why did you build this project? What problem does it solve? What did you learn?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for use. Include screenshots as needed.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
            name: 'credits',
        },
        {
            type: 'list',
            message: 'Choose a license.',
            choices: ['MIT'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'Badge Creation: What is your github username?',
            name: 'user',
        },
        {
            type: 'input',
            message: 'Badge Creation: What is your repo name?',
            name: 'repo',
        },
        {
            type: 'input',
            message: 'What are the features of your project?',
            name: 'features',
        },
        {
            type: 'input',
            message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so here.',
            name: 'contribute',
        },
        {
            type: 'input',
            message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
            name: 'tests',
        },
    ]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('README created.'))
}
    

// TODO: Create a function to initialize app
function init() {
    start.prompt(questions)
    .then((data) =>
        writeToFile('README.md', genMD.generateMarkdown(data)))
}

// Function call to initialize app
init();
