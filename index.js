// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email address?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of the project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'image',
        message: "Add a screeshot to the assets/images folder and enter it's file name here."
    },
    {
        type: 'input',
        name: 'contributor',
        message: 'Please share the contributors to this project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for this project.',
        choices: ['MIT', 'GPL3.0', 'Apache2.0', 'MPL2.0', 'Unlicense', 'none']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: 'npm test'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();