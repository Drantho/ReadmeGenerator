// TODO: Include packages needed for this application
const readline = require("readline");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// TODO: Create an array of questions for user input
const questions = ["Project name: ", "Github username: ", "Email: ", "Description: ", "Installation: ", "Usage: ", "License: ", "Contributing: ", "Tests: "];

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
    rl.question(questions[0], (name) =>{
        rl.question(questions[1], (username) => {
            rl.question(questions[2], (email) => {
                rl.question(questions[3], (description) => {
                    rl.question(questions[4], (installation) => {
                        rl.question(questions[5], (usage) => {
                            rl.question(questions[6], (license) => {
                                rl.question(questions[7], (contributing) => {
                                    rl.question(questions[8], (tests) => {
                                        data.title = name;
                                        data.username = username;
                                        data.email = email;
                                        data.description = description;
                                        data.installation = installation;
                                        data.usage = usage;
                                        data.license = license;
                                        data.contributing = contributing;
                                        data.tests = tests;

                                        writeToFile("readme.md", data);
                                        rl.close();
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

}

// Function call to initialize app
init();
