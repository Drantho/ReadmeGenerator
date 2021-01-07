// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { stringify } = require("querystring");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input", 
        name: "name", 
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
        iname: "Installation", 
        message:  "Installation: "
    },
    {
        type: "input", 
        name: "usage", 
        message:  "Usage: "
    },
    {
        type: "checkbox", 
        name: "license", 
        message:  "License: ",
        choices: [
            "Apache 2.0 License", 
            "Boost Software License 1.0", 
            "BSD 3-Clause License", 
            "BSD 2-Clause License", 
            "Createive Commons - CC0", 
            "Createive Commons - Attribution 4.0 International",
            "Createive Commons - Attribution-ShareAlike 4.0 International",
            "Createive Commons - Attribution-NonCommercial 4.0 International",
            "Createive Commons - Attribution-NoDerivates 4.0 International",
            "Createive Commons - Attribution-NonCommmercial-ShareAlike 4.0 International",
            "Createive Commons - Attribution-NonCommercial-NoDerivatives 4.0 International",
            "Eclipse Public License 1.0",
            "GNU - GPL v3",
            "GNU - GPL v2",
            "GNU - AGPL v3",
            "GNU - LGPL v3",
            "GNU - FDL v1.3",
            "IBM Public License Version 1.0",
            "ISC License (ISC)",
            "MIT"
            
        ]
    },
];//, "Github username: ", "Email: ", "Description: ", "Installation: ", "Usage: ", "License: ", "Contributing: ", "Tests: "];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, generateMarkdown(data), (err, file) => {
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
    })

}

// Function call to initialize app
init();
