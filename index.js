// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const licenses = require("./utils/licenses");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input", 
        name: "title", 
        message:  "Project name: "
    },
    {
        type: "input", 
        name: "username", 
        message:  "Github username: "
    },
    {
        type: "input", 
        name: "email", 
        message:  "Email: "
    },
    {
        type: "input", 
        name: "description", 
        message:  "Description: "
    },
    {
        type: "input", 
        name: "installation", 
        message:  "Installation: "
    },
    {
        type: "input", 
        name: "usage", 
        message:  "Usage: "
    },
    {
        type: "list", 
        name: "license", 
        message:  "License: ",
        choices: licenses.map(license => license.name)
    },
    {
        type: "input", 
        name: "contributing", 
        message:  "Contributing: "
    },
    {
        type: "input", 
        name: "tests", 
        message:  "Tests: "
    },
    {
        type: "input", 
        name: "issues", 
        message:  "Known Issues(separate with commas): "
    },
    {
        type: "input", 
        name: "futureDev", 
        message:  "Plans for future use(separate with commas): "
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err, file) => {
        if (err) console.log(err)

        console.log("file created successfuly");
    });
    
}

// TODO: Create a function to initialize app
function init() {
    
    const data = {};

    //TODO Convert to work from list
    inquirer.prompt(questions).then( answers => {
        console.log(answers);

        writeToFile("README.md", answers);
    })

}

// Function call to initialize app
init();
